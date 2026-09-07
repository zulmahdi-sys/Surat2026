# PANDUAN DEPLOYMENT VERCEL & KONEKSI GOOGLE CLOUD
## SISTEM PERSURATAN DIGITAL - AKSARA DIGITAL

---

## 1. KONSEP ARSITEKTUR VERCEL + GOOGLE
Aplikasi **Persuratan Aksara Digital** kini menggunakan arsitektur hybrid yang sangat efisien:
- **Frontend (Tampilan Web)**: Di-host secara cepat & gratis di **Vercel**.
- **Backend (API Data & File)**: Berjalan di **Google Apps Script**, terhubung langsung ke **Google Spreadsheet** (`1YS7HVGEaWb6nj-VahxOwoTFy1kIll_7UoqbxM8x4sdU`) dan **Google Drive** (`1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ`).

---

## 2. LANGKAH DEPLOYMENT KE VERCEL

### Tahap A: Menyiapkan Google Apps Script Backend REST API
1. Buka [Google Spreadsheet Anda](https://docs.google.com/spreadsheets/d/1YS7HVGEaWb6nj-VahxOwoTFy1kIll_7UoqbxM8x4sdU/edit).
2. Klik menu **Ekstensi** > **Apps Script**.
3. Pastikan kode file `Code.gs` dari folder proyek telah disalin.
4. Klik tombol **Terapkan (Deploy)** > **Penerapan Baru (New deployment)**.
5. Konfigurasi:
   - Jenis: **Aplikasi Web (Web App)**
   - Jalankan sebagai (*Execute as*): **Saya (Me)**
   - Siapa yang memiliki akses (*Who has access*): **Siapa saja (Anyone)** *(Penting agar Vercel dapat mengakses API)*.
6. Klik **Terapkan (Deploy)** dan **salin Web App URL** yang dihasilkan.
   - Contoh URL: `https://script.google.com/macros/s/AKfycbx.../exec`

### Tahap B: Deploy Ke Vercel

#### Pilihan 1: Melalui Vercel CLI (Sangat Mudah via Terminal)
1. Buka PowerShell / Terminal di folder `d:\Surat2026`.
2. Jalankan perintah berikut:
   ```bash
   npx vercel
   ```
3. Tekan Enter pada setiap pertanyaan default dari Vercel CLI.
4. Setelah selesai, Vercel akan memberikan **Production URL** aplikasi Anda!

#### Pilihan 2: Melalui Dashboard Vercel (GitHub/GitLab)
1. Unggah folder `d:\Surat2026` ke repository GitHub Anda.
2. Buka [Dashboard Vercel](https://vercel.com/new).
3. Import Repository GitHub tersebut.
4. Klik **Deploy** (Tanpa perlu mengubah build command karena ini adalah Static Single Page App).

---

## 3. MENGHUBUNGKAN APLIKASI VERCEL DENGAN GOOGLE BACKEND
1. Buka URL aplikasi Vercel yang telah dibuat (misal: `https://aksara-persuratan.vercel.app`).
2. Klik menu **Setting API Vercel** (atau ikon gerigi pengaturan di sudut kanan atas header).
3. Tempelkan (*paste*) **Web App URL Apps Script** dari Tahap A.
4. Klik **Simpan URL API**.
5. Aplikasi Vercel Anda sekarang terhubung secara **LIVE** dengan Google Spreadsheet dan Google Drive!

---

## 4. KEUNGGULAN HASIL DEPLOYMENT VERCEL
- **Akses Super Cepat**: Diproses melalui jaringan CDN Vercel global.
- **Data Real-Time**: Setiap kali staf menginput surat masuk / surat keluar / file digital dari Vercel, data langsung tercatat di Google Sheet & file PDF otomatis tersimpan di folder bulanan Google Drive Anda.
- **Mobile Friendly**: Dapat disimpan sebagai Shortcut PWA di Smartphone staf & pimpinan.
