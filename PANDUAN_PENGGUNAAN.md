# PANDUAN PENGGUNAAN & DEPLOYMENT
## SISTEM PERSURATAN DIGITAL - AKSARA DIGITAL
*(Terhubung dengan Google Sheets, Google Drive, Vercel Ready)*

---

## 1. DATA GOOGLE SPREADSHEET & GOOGLE DRIVE
Aplikasi telah dikonfigurasi terhubung secara langsung dengan ID resource milik Anda:
- **Spreadsheet ID**: `1YS7HVGEaWb6nj-VahxOwoTFy1kIll_7UoqbxM8x4sdU`
  - *Tautan*: [Buka Google Spreadsheet](https://docs.google.com/spreadsheets/d/1YS7HVGEaWb6nj-VahxOwoTFy1kIll_7UoqbxM8x4sdU/edit)
- **Google Drive Folder ID**: `1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ`
  - *Tautan*: [Buka Folder Google Drive](https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ)

---

## 2. FITUR UTAMA SISTEM PERSURATAN

### 🌐 A. Portal Beranda Publik (Tanpa Login)
- **Pencarian Surat Publik**: Masyarakat / unit kerja dapat mencari status penanganan surat masuk (Ketik Nomor Surat, Pengirim, atau Perihal).
- **Tabel Surat Masuk Per Bulan (Auto-Hidden / Accordion)**:
  - Daftar surat dikelompokkan secara rapi per bulan (misal: *September 2026*, *Agustus 2026*).
  - Secara default tabel dalam keadaan tersembunyi (*auto-hidden*). Klik baris bulan untuk membuka (*expand*) isi tabel.
- **Arsip Pertahun**: Menyaring arsip folder bulanan dan rekapitulasi berdasarkan tahun (*2026*, *2025*, dst.).

### 🔐 B. Sistem Login Admin Tata Usaha
- **Akses Terproteksi**:
  - Tombol **Login Admin** di pojok kanan atas.
  - **Passcode PIN Default Admin**: `admin123`
- **Fitur Khusus Admin**:
  1. **Registrasi Surat Masuk & Keluar Baru**: Pendaftaran berkas + Unggah Dokumen Digital (PDF/DOCX/JPG) otomatis ke Google Drive.
  2. **Kelola Disposisi**: Mengubah status penanganan (*Baru* -> *Diproses* -> *Selesai*) dan menambahkan catatan disposisi unit tujuan.
  3. **Akses Pengaturan Vercel REST API URL**.

---

## 3. PETUNJUK DEPLOYMENT APPS SCRIPT
1. Buka [Google Spreadsheet Anda](https://docs.google.com/spreadsheets/d/1YS7HVGEaWb6nj-VahxOwoTFy1kIll_7UoqbxM8x4sdU/edit).
2. Klik **Ekstensi** > **Apps Script**.
3. Salin isi [`Code.gs`](file:///d:/Surat2026/Code.gs) ke file `Code.gs`.
4. Buat file HTML bernama `Index`, lalu salin isi [`Index.html`](file:///d:/Surat2026/Index.html).
5. Jalankan fungsi `initSpreadsheet` sekali untuk otorisasi & inisialisasi sheet.
6. Klik **Terapkan (Deploy)** > **Penerapan Baru (New deployment)** > Akses: *Siapa saja (Anyone)* > **Deploy**.
