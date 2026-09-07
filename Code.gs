/**
 * SISTEM PERSURATAN DIGITAL - AKSARA DIGITAL
 * Backend Google Apps Script (Code.gs)
 * Terhubung dengan Google Sheets dan Google Drive
 * Mendukung Vercel REST API, Portal Publik, Accordion Bulanan, & Arsip Pertahun
 */

// KONFIGURASI ID GOOGLE SPREADSHEET & GOOGLE DRIVE
const SPREADSHEET_ID = "1YS7HVGEaWb6nj-VahxOwoTFy1kIll_7UoqbxM8x4sdU";
const DRIVE_FOLDER_ID = "1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ";

// Konfigurasi Nama Sheet
const SHEET_SURAT_MASUK = "Surat_Masuk";
const SHEET_SURAT_KELUAR = "Surat_Keluar";
const FOLDER_ROOT_NAME = "Arsip Surat Digital Aksara";

/**
 * REST API POST Endpoint (Vercel & External Web Apps)
 */
function doPost(e) {
  try {
    let contents = {};
    if (e && e.postData && e.postData.contents) {
      contents = JSON.parse(e.postData.contents);
    }

    const action = contents.action || (e.parameter ? e.parameter.action : "");
    let result = { success: false, message: "Action tidak dikenal: " + action };

    if (action === "getDashboardStats") {
      result = getDashboardStats();
    } else if (action === "getSuratMasukList") {
      result = getSuratMasukList(contents.keyword, contents.status);
    } else if (action === "getGroupedSuratMasuk") {
      result = getGroupedSuratMasuk(contents.keyword, contents.year);
    } else if (action === "getSuratKeluarList") {
      result = getSuratKeluarList(contents.keyword, contents.status);
    } else if (action === "saveSuratMasuk") {
      result = saveSuratMasuk(contents.formData, contents.fileObj);
    } else if (action === "saveSuratKeluar") {
      result = saveSuratKeluar(contents.formData, contents.fileObj);
    } else if (action === "updateStatusSurat") {
      result = updateStatusSurat(contents.type, contents.id, contents.newStatus, contents.newDisposisi);
    } else if (action === "getArsipBulanan") {
      result = getArsipBulanan(contents.year);
    } else if (action === "getArsipPertahun") {
      result = getArsipPertahun();
    } else if (action === "getRekapitulasiData") {
      result = getRekapitulasiData(contents.periodYearMonth);
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * REST API GET Endpoint atau Web App View
 */
function doGet(e) {
  if (e && e.parameter && e.parameter.action) {
    const action = e.parameter.action;
    let result = {};
    if (action === "getDashboardStats") result = getDashboardStats();
    else if (action === "getSuratMasukList") result = getSuratMasukList(e.parameter.keyword, e.parameter.status);
    else if (action === "getGroupedSuratMasuk") result = getGroupedSuratMasuk(e.parameter.keyword, e.parameter.year);
    else if (action === "getSuratKeluarList") result = getSuratKeluarList(e.parameter.keyword, e.parameter.status);
    else if (action === "getArsipBulanan") result = getArsipBulanan(e.parameter.year);
    else if (action === "getArsipPertahun") result = getArsipPertahun();
    else if (action === "getRekapitulasiData") result = getRekapitulasiData(e.parameter.periodYearMonth);

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var output = HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Sistem Persuratan Digital - Aksara Digital")
    .setFaviconUrl("https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  output.addMetaTag("viewport", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");
  return output;
}

/**
 * Helper Spreadsheet
 */
function getSpreadsheet() {
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_ID.trim());
    } catch (e) {
      Logger.log("Gagal buka Spreadsheet ID: " + e.toString());
      return SpreadsheetApp.getActiveSpreadsheet();
    }
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

/**
 * Helper Drive Root Folder
 */
function getOrCreateRootFolder() {
  if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID.trim() !== "") {
    try {
      return DriveApp.getFolderById(DRIVE_FOLDER_ID.trim());
    } catch (e) {
      Logger.log("Gagal buka Folder ID Google Drive: " + e.toString());
    }
  }
  const folders = DriveApp.getFoldersByName(FOLDER_ROOT_NAME);
  if (folders.hasNext()) {
    return folders.next();
  } else {
    return DriveApp.createFolder(FOLDER_ROOT_NAME);
  }
}

/**
 * Inisialisasi Sheet jika belum ada
 */
function initSpreadsheet() {
  const ss = getSpreadsheet();
  
  let sheetMasuk = ss.getSheetByName(SHEET_SURAT_MASUK);
  if (!sheetMasuk) {
    sheetMasuk = ss.insertSheet(SHEET_SURAT_MASUK);
    const headersMasuk = [
      "ID", "No. Surat", "Tanggal Surat", "Tanggal Diterima", 
      "Pengirim", "Perihal", "Ringkasan", "Sifat Surat", 
      "Disposisi", "Status", "Link Drive", "File ID", "Folder Bulan", "Timestamp"
    ];
    sheetMasuk.getRange(1, 1, 1, headersMasuk.length).setValues([headersMasuk]);
    sheetMasuk.getRange(1, 1, 1, headersMasuk.length).setFontWeight("bold").setBackground("#0D9488").setFontColor("#FFFFFF");
    sheetMasuk.setFrozenRows(1);
  }

  let sheetKeluar = ss.getSheetByName(SHEET_SURAT_KELUAR);
  if (!sheetKeluar) {
    sheetKeluar = ss.insertSheet(SHEET_SURAT_KELUAR);
    const headersKeluar = [
      "ID", "No. Surat", "Tanggal Surat", "Tanggal Dikirim", 
      "Penerima", "Perihal", "Ringkasan", "Sifat Surat", 
      "Penandatangan", "Status", "Link Drive", "File ID", "Folder Bulan", "Timestamp"
    ];
    sheetKeluar.getRange(1, 1, 1, headersKeluar.length).setValues([headersKeluar]);
    sheetKeluar.getRange(1, 1, 1, headersKeluar.length).setFontWeight("bold").setBackground("#0F172A").setFontColor("#FFFFFF");
    sheetKeluar.setFrozenRows(1);
  }

  return { success: true, message: "Sheet berhasil diinisialisasi" };
}

function getOrCreateMonthlyFolder(typeCategory, yearMonthStr) {
  const root = getOrCreateRootFolder();
  const categoryFolders = root.getFoldersByName(typeCategory);
  let categoryFolder;
  if (categoryFolders.hasNext()) {
    categoryFolder = categoryFolders.next();
  } else {
    categoryFolder = root.createFolder(typeCategory);
  }

  const monthFolders = categoryFolder.getFoldersByName(yearMonthStr);
  if (monthFolders.hasNext()) {
    return monthFolders.next();
  } else {
    return categoryFolder.createFolder(yearMonthStr);
  }
}

function getDashboardStats() {
  initSpreadsheet();
  const ss = getSpreadsheet();
  
  const sheetMasuk = ss.getSheetByName(SHEET_SURAT_MASUK);
  const dataMasuk = sheetMasuk.getDataRange().getValues();
  dataMasuk.shift();

  const sheetKeluar = ss.getSheetByName(SHEET_SURAT_KELUAR);
  const dataKeluar = sheetKeluar.getDataRange().getValues();
  dataKeluar.shift();

  let totalMasuk = dataMasuk.length;
  let totalKeluar = dataKeluar.length;
  let tertunda = 0;
  let diproses = 0;
  let selesai = 0;

  dataMasuk.forEach(row => {
    const status = (row[9] || "").toString().trim();
    if (status === "Baru") tertunda++;
    else if (status === "Diproses") diproses++;
    else if (status === "Selesai") selesai++;
  });

  const recentMasuk = dataMasuk.slice(-5).reverse().map(parseRowToSuratMasuk);
  const recentKeluar = dataKeluar.slice(-5).reverse().map(parseRowToSuratKeluar);

  return {
    totalMasuk: totalMasuk,
    totalKeluar: totalKeluar,
    registrasiTertunda: tertunda,
    diproses: diproses,
    selesai: selesai,
    totalArsip: totalMasuk + totalKeluar,
    recentMasuk: recentMasuk,
    recentKeluar: recentKeluar
  };
}

function getSuratMasukList(filterKeyword, filterStatus) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SURAT_MASUK);
  const data = sheet.getDataRange().getValues();
  data.shift();

  let result = data.map(parseRowToSuratMasuk);

  if (filterStatus && filterStatus !== "Semua") {
    result = result.filter(item => item.status === filterStatus);
  }

  if (filterKeyword) {
    const kw = filterKeyword.toLowerCase();
    result = result.filter(item => 
      item.nomorSurat.toLowerCase().includes(kw) ||
      item.pengirim.toLowerCase().includes(kw) ||
      item.perihal.toLowerCase().includes(kw) ||
      item.id.toLowerCase().includes(kw)
    );
  }

  return result.reverse();
}

/**
 * Mengambil Surat Masuk terkelompok per bulan untuk Beranda Publik (Accordion View)
 */
function getGroupedSuratMasuk(filterKeyword, targetYear) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SURAT_MASUK);
  const data = sheet.getDataRange().getValues();
  data.shift();

  let list = data.map(parseRowToSuratMasuk);

  if (filterKeyword) {
    const kw = filterKeyword.toLowerCase();
    list = list.filter(item => 
      item.nomorSurat.toLowerCase().includes(kw) ||
      item.pengirim.toLowerCase().includes(kw) ||
      item.perihal.toLowerCase().includes(kw) ||
      item.id.toLowerCase().includes(kw)
    );
  }

  if (targetYear && targetYear !== "Semua") {
    list = list.filter(item => (item.folderBulan || "").startsWith(targetYear));
  }

  const grouped = {};
  list.forEach(item => {
    const ym = item.folderBulan || "Lainnya";
    if (!grouped[ym]) {
      grouped[ym] = {
        yearMonth: ym,
        monthLabel: formatYearMonthLabel(ym),
        year: ym.split('-')[0] || "Lainnya",
        count: 0,
        items: []
      };
    }
    grouped[ym].items.push(item);
    grouped[ym].count++;
  });

  const sortedKeys = Object.keys(grouped).sort().reverse();
  return sortedKeys.map(k => grouped[k]);
}

function getSuratKeluarList(filterKeyword, filterStatus) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SURAT_KELUAR);
  const data = sheet.getDataRange().getValues();
  data.shift();

  let result = data.map(parseRowToSuratKeluar);

  if (filterStatus && filterStatus !== "Semua") {
    result = result.filter(item => item.status === filterStatus);
  }

  if (filterKeyword) {
    const kw = filterKeyword.toLowerCase();
    result = result.filter(item => 
      item.nomorSurat.toLowerCase().includes(kw) ||
      item.penerima.toLowerCase().includes(kw) ||
      item.perihal.toLowerCase().includes(kw) ||
      item.id.toLowerCase().includes(kw)
    );
  }

  return result.reverse();
}

function saveSuratMasuk(formData, fileObj) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SURAT_MASUK);
  
  const today = new Date();
  const dateStr = formatDate(today);
  const yearMonth = formData.tglDiterima ? formData.tglDiterima.substring(0, 7) : formatDate(today).substring(0, 7);
  
  const lastRow = sheet.getLastRow();
  const nextId = "SM-" + yearMonth.replace("-", "") + "-" + String(lastRow).padStart(3, '0');

  let driveUrl = "";
  let fileId = "";

  if (fileObj && fileObj.base64 && fileObj.name) {
    try {
      const monthFolder = getOrCreateMonthlyFolder("Surat Masuk", yearMonth);
      const decodedData = Utilities.base64Decode(fileObj.base64.split(',')[1] || fileObj.base64);
      const blob = Utilities.newBlob(decodedData, fileObj.mimeType || "application/pdf", fileObj.name);
      const driveFile = monthFolder.createFile(blob);
      driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      driveUrl = driveFile.getUrl();
      fileId = driveFile.getId();
    } catch (e) {
      Logger.log("Error upload drive: " + e.toString());
    }
  }

  const newRow = [
    nextId,
    formData.nomorSurat || "-",
    formData.tglSurat || dateStr,
    formData.tglDiterima || dateStr,
    formData.pengirim || "-",
    formData.perihal || "-",
    formData.ringkasan || "-",
    formData.sifatSurat || "Biasa",
    formData.disposisi || "Sekretariat",
    formData.status || "Baru",
    driveUrl,
    fileId,
    yearMonth,
    new Date()
  ];

  sheet.appendRow(newRow);

  return {
    success: true,
    message: "Surat Masuk berhasil didaftarkan!",
    id: nextId,
    driveUrl: driveUrl
  };
}

function saveSuratKeluar(formData, fileObj) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SURAT_KELUAR);

  const today = new Date();
  const dateStr = formatDate(today);
  const yearMonth = formData.tglDikirim ? formData.tglDikirim.substring(0, 7) : formatDate(today).substring(0, 7);

  const lastRow = sheet.getLastRow();
  const nextId = "SK-" + yearMonth.replace("-", "") + "-" + String(lastRow).padStart(3, '0');

  let driveUrl = "";
  let fileId = "";

  if (fileObj && fileObj.base64 && fileObj.name) {
    try {
      const monthFolder = getOrCreateMonthlyFolder("Surat Keluar", yearMonth);
      const decodedData = Utilities.base64Decode(fileObj.base64.split(',')[1] || fileObj.base64);
      const blob = Utilities.newBlob(decodedData, fileObj.mimeType || "application/pdf", fileObj.name);
      const driveFile = monthFolder.createFile(blob);
      driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      driveUrl = driveFile.getUrl();
      fileId = driveFile.getId();
    } catch (e) {
      Logger.log("Error upload drive: " + e.toString());
    }
  }

  const newRow = [
    nextId,
    formData.nomorSurat || "-",
    formData.tglSurat || dateStr,
    formData.tglDikirim || dateStr,
    formData.penerima || "-",
    formData.perihal || "-",
    formData.ringkasan || "-",
    formData.sifatSurat || "Biasa",
    formData.penandatangan || "-",
    formData.status || "Tersalurkan",
    driveUrl,
    fileId,
    yearMonth,
    new Date()
  ];

  sheet.appendRow(newRow);

  return {
    success: true,
    message: "Surat Keluar berhasil didaftarkan!",
    id: nextId,
    driveUrl: driveUrl
  };
}

function updateStatusSurat(type, id, newStatus, newDisposisi) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  const sheetName = type === "MASUK" ? SHEET_SURAT_MASUK : SHEET_SURAT_KELUAR;
  const sheet = ss.getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      if (newStatus) sheet.getRange(i + 1, 10).setValue(newStatus);
      if (newDisposisi && type === "MASUK") sheet.getRange(i + 1, 9).setValue(newDisposisi);
      return { success: true, message: `Status surat ${id} berhasil diperbarui menjadi ${newStatus}` };
    }
  }

  return { success: false, message: "ID Surat tidak ditemukan" };
}

function getArsipBulanan(filterYear) {
  initSpreadsheet();
  const ss = getSpreadsheet();
  
  const sheetMasuk = ss.getSheetByName(SHEET_SURAT_MASUK);
  const dataMasuk = sheetMasuk.getDataRange().getValues();
  dataMasuk.shift();

  const sheetKeluar = ss.getSheetByName(SHEET_SURAT_KELUAR);
  const dataKeluar = sheetKeluar.getDataRange().getValues();
  dataKeluar.shift();

  const monthlyMap = {};

  dataMasuk.forEach(row => {
    const ym = row[12] || "Lainnya";
    if (filterYear && filterYear !== "Semua" && !ym.startsWith(filterYear)) return;
    if (!monthlyMap[ym]) {
      monthlyMap[ym] = { yearMonth: ym, suratMasukCount: 0, suratKeluarCount: 0 };
    }
    monthlyMap[ym].suratMasukCount++;
  });

  dataKeluar.forEach(row => {
    const ym = row[12] || "Lainnya";
    if (filterYear && filterYear !== "Semua" && !ym.startsWith(filterYear)) return;
    if (!monthlyMap[ym]) {
      monthlyMap[ym] = { yearMonth: ym, suratMasukCount: 0, suratKeluarCount: 0 };
    }
    monthlyMap[ym].suratKeluarCount++;
  });

  const rootFolder = getOrCreateRootFolder();
  const driveRootUrl = rootFolder.getUrl();

  const list = Object.keys(monthlyMap).sort().reverse().map(ym => {
    const item = monthlyMap[ym];
    return {
      yearMonth: item.yearMonth,
      label: formatYearMonthLabel(item.yearMonth),
      suratMasukCount: item.suratMasukCount,
      suratKeluarCount: item.suratKeluarCount,
      totalCount: item.suratMasukCount + item.suratKeluarCount,
      driveUrl: driveRootUrl
    };
  });

  return list;
}

/**
 * Mengambil struktur arsip pertahun (misal: ["2026", "2025"])
 */
function getArsipPertahun() {
  initSpreadsheet();
  const ss = getSpreadsheet();
  
  const sheetMasuk = ss.getSheetByName(SHEET_SURAT_MASUK);
  const dataMasuk = sheetMasuk.getDataRange().getValues();
  dataMasuk.shift();

  const sheetKeluar = ss.getSheetByName(SHEET_SURAT_KELUAR);
  const dataKeluar = sheetKeluar.getDataRange().getValues();
  dataKeluar.shift();

  const yearsSet = new Set();
  dataMasuk.forEach(row => {
    const ym = row[12] || "";
    if (ym && ym.includes("-")) yearsSet.add(ym.split("-")[0]);
  });
  dataKeluar.forEach(row => {
    const ym = row[12] || "";
    if (ym && ym.includes("-")) yearsSet.add(ym.split("-")[0]);
  });

  const currentYear = new Date().getFullYear().toString();
  yearsSet.add(currentYear);

  return Array.from(yearsSet).sort().reverse();
}

function getRekapitulasiData(periodYearMonth) {
  initSpreadsheet();
  const ss = getSpreadsheet();

  const sheetMasuk = ss.getSheetByName(SHEET_SURAT_MASUK);
  const dataMasuk = sheetMasuk.getDataRange().getValues();
  dataMasuk.shift();

  const sheetKeluar = ss.getSheetByName(SHEET_SURAT_KELUAR);
  const dataKeluar = sheetKeluar.getDataRange().getValues();
  dataKeluar.shift();

  let masukFiltered = dataMasuk.map(parseRowToSuratMasuk);
  let keluarFiltered = dataKeluar.map(parseRowToSuratKeluar);

  if (periodYearMonth && periodYearMonth !== "Semua") {
    if (periodYearMonth.length === 4) {
      // Filter per Tahun (misal: "2026")
      masukFiltered = masukFiltered.filter(item => (item.folderBulan || "").startsWith(periodYearMonth));
      keluarFiltered = keluarFiltered.filter(item => (item.folderBulan || "").startsWith(periodYearMonth));
    } else {
      // Filter per Bulan (misal: "2026-09")
      masukFiltered = masukFiltered.filter(item => item.folderBulan === periodYearMonth);
      keluarFiltered = keluarFiltered.filter(item => item.folderBulan === periodYearMonth);
    }
  }

  return {
    period: periodYearMonth || "Semua Periode",
    suratMasuk: masukFiltered,
    suratKeluar: keluarFiltered,
    totalMasuk: masukFiltered.length,
    totalKeluar: keluarFiltered.length
  };
}

// --- HELPER FUNCTIONS ---

function parseRowToSuratMasuk(row) {
  return {
    id: row[0] || "",
    nomorSurat: row[1] || "",
    tglSurat: formatDate(row[2]),
    tglDiterima: formatDate(row[3]),
    pengirim: row[4] || "",
    perihal: row[5] || "",
    ringkasan: row[6] || "",
    sifatSurat: row[7] || "Biasa",
    disposisi: row[8] || "-",
    status: row[9] || "Baru",
    linkDrive: row[10] || "",
    fileId: row[11] || "",
    folderBulan: row[12] || "",
    timestamp: formatDate(row[13])
  };
}

function parseRowToSuratKeluar(row) {
  return {
    id: row[0] || "",
    nomorSurat: row[1] || "",
    tglSurat: formatDate(row[2]),
    tglDikirim: formatDate(row[3]),
    penerima: row[4] || "",
    perihal: row[5] || "",
    ringkasan: row[6] || "",
    sifatSurat: row[7] || "Biasa",
    penandatangan: row[8] || "-",
    status: row[9] || "Tersalurkan",
    linkDrive: row[10] || "",
    fileId: row[11] || "",
    folderBulan: row[12] || "",
    timestamp: formatDate(row[13])
  };
}

function formatDate(val) {
  if (!val) return "";
  if (val instanceof Date) {
    const year = val.getFullYear();
    const month = String(val.getMonth() + 1).padStart(2, '0');
    const day = String(val.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return String(val);
}

function formatYearMonthLabel(ym) {
  if (!ym || ym === "Lainnya") return "Lainnya";
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const parts = ym.split("-");
  if (parts.length === 2) {
    const mIdx = parseInt(parts[1], 10) - 1;
    if (mIdx >= 0 && mIdx < 12) {
      return `${months[mIdx]} ${parts[0]}`;
    }
  }
  return ym;
}
