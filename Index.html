<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal Persuratan Digital Aksara - Publik & Admin</title>

  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            aksara: {
              50: '#F0FFD4',
              100: '#CCFBF1',
              500: '#0D9488',
              600: '#0D9488',
              700: '#0F766E',
              900: '#0F172A',
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #F8FAFC;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #F1F5F9;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 9999px;
    }
    @media print {
      .no-print { display: none !important; }
      .print-only { display: block !important; }
      body { background: white; color: black; }
    }
  </style>
</head>
<body class="text-slate-800 antialiased min-h-screen flex flex-col md:flex-row">

  <!-- SIDEBAR (DESKTOP) -->
  <aside class="no-print hidden md:flex flex-col w-64 bg-slate-900 text-white min-h-screen sticky top-0 z-30 shadow-xl border-r border-slate-800">
    <!-- Brand Header -->
    <div class="p-5 border-b border-slate-800 flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-teal-500/20">
        <i data-lucide="mail-check" class="w-6 h-6 text-slate-950"></i>
      </div>
      <div>
        <h1 class="font-extrabold text-base tracking-wide text-white">AKSARA</h1>
        <p class="text-xs text-teal-400 font-medium">Persuratan Digital</p>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 p-4 space-y-1.5 custom-scrollbar overflow-y-auto">
      <div class="px-3 py-2 text-[11px] font-bold tracking-wider text-slate-400 uppercase">Portal Publik</div>
      
      <button onclick="switchTab('beranda-publik')" id="nav-beranda-publik" class="nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 bg-teal-600 text-white shadow-md">
        <i data-lucide="home" class="w-5 h-5"></i>
        <span>Beranda Publik</span>
      </button>

      <button onclick="switchTab('arsip-rekap')" id="nav-arsip-rekap" class="nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200">
        <i data-lucide="folder-archive" class="w-5 h-5"></i>
        <span>Arsip Pertahun</span>
      </button>

      <div class="pt-4 px-3 py-2 text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center justify-between">
        <span>Area Admin</span>
        <span id="admin-badge-indicator" class="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">GUEST</span>
      </div>

      <button onclick="switchTab('dashboard')" id="nav-dashboard" class="admin-only-nav nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200">
        <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
        <span>Dashboard Admin</span>
      </button>

      <button onclick="switchTab('surat-masuk')" id="nav-surat-masuk" class="admin-only-nav nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200">
        <i data-lucide="inbox" class="w-5 h-5"></i>
        <span>Surat Masuk</span>
        <span id="badge-tertunda-side" class="ml-auto bg-amber-500 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded-full hidden">0</span>
      </button>

      <button onclick="switchTab('surat-keluar')" id="nav-surat-keluar" class="admin-only-nav nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200">
        <i data-lucide="send" class="w-5 h-5"></i>
        <span>Surat Keluar</span>
      </button>

      <button onclick="switchTab('registrasi')" id="nav-registrasi" class="admin-only-nav nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200">
        <i data-lucide="file-plus-2" class="w-5 h-5"></i>
        <span>Registrasi Surat</span>
      </button>

      <button onclick="openApiConfigModal()" class="admin-only-nav nav-item w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-amber-400 hover:bg-slate-800 transition-all duration-200">
        <i data-lucide="key" class="w-5 h-5"></i>
        <span>Setting API Vercel</span>
      </button>
    </nav>

    <!-- Footer Status & Login State -->
    <div class="p-4 border-t border-slate-800 bg-slate-950/50 space-y-3">
      <div class="flex items-center gap-3">
        <div id="status-dot" class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
        <div class="overflow-hidden">
          <p class="text-xs font-semibold text-slate-200">System Mode</p>
          <p id="system-mode-label" class="text-[10px] text-slate-400 truncate">Vercel & Google API</p>
        </div>
      </div>

      <div id="sidebar-auth-box">
        <button onclick="openLoginAdminModal()" id="btn-sidebar-login" class="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-all">
          <i data-lucide="log-in" class="w-4 h-4"></i> Login Admin
        </button>
        <button onclick="logoutAdmin()" id="btn-sidebar-logout" class="hidden w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-all">
          <i data-lucide="log-out" class="w-4 h-4"></i> Keluar Admin
        </button>
      </div>
    </div>
  </aside>

  <!-- MAIN CONTENT CONTAINER -->
  <div class="flex-1 flex flex-col min-w-0 pb-20 md:pb-6">
    
    <!-- TOP HEADER -->
    <header class="no-print bg-white border-b border-slate-200 sticky top-0 z-20 px-4 py-3 md:px-8 flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-3">
        <div class="md:hidden flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
            <i data-lucide="mail-check" class="w-5 h-5"></i>
          </div>
          <span class="font-bold text-slate-900 text-sm">Aksara E-Surat</span>
        </div>
        <h2 id="page-title" class="hidden md:block font-bold text-lg text-slate-900">Beranda Publik</h2>
      </div>

      <div class="flex items-center gap-3">
        <div class="relative hidden sm:block w-64">
          <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input type="text" id="global-search-input" onkeyup="handleGlobalSearch(event)" placeholder="Cari surat..." class="w-full pl-9 pr-4 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
        </div>

        <button onclick="refreshAllData()" title="Muat Ulang Data" class="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
          <i data-lucide="refresh-cw" id="refresh-icon" class="w-5 h-5"></i>
        </button>

        <div class="h-6 w-px bg-slate-200"></div>

        <div id="header-auth-pill">
          <button onclick="openLoginAdminModal()" id="btn-header-login" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all">
            <i data-lucide="user-check" class="w-4 h-4"></i> Login Admin
          </button>
          <div id="btn-header-profile" class="hidden flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center shadow">
              AD
            </div>
            <button onclick="logoutAdmin()" class="text-xs text-rose-600 font-bold hover:underline">Logout</button>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTENT BODY -->
    <main class="p-4 md:p-8 flex-1 max-w-7xl w-full mx-auto space-y-6">

      <!-- ================= 0. TAB BERANDA PUBLIK (DEFAULT HOMEPAGE) ================= -->
      <section id="tab-beranda-publik" class="space-y-6">
        
        <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 rounded-3xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden text-center space-y-4">
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold">
            <i data-lucide="globe" class="w-3.5 h-3.5"></i> Portal Transparansi Persuratan Publik
          </span>
          <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">Lacak Status Surat Masuk & Pengarsipan Digital</h2>
          <p class="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">Cari nomor surat, pengirim, atau perihal dokumen untuk mengetahui progres disposisi penanganan di Tata Usaha.</p>

          <div class="max-w-2xl mx-auto pt-2">
            <div class="relative">
              <i data-lucide="search" class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input type="text" id="public-search-hero" onkeyup="handlePublicSearch(event)" placeholder="Ketik Nomor Surat, Pengirim (contoh: Kemenag), atau Perihal..." class="w-full pl-11 pr-28 py-3.5 bg-white text-slate-900 rounded-2xl text-xs md:text-sm font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 transition-all">
              <button onclick="executePublicSearch()" class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl transition-all shadow-md">
                Cari Surat
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-4 md:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <i data-lucide="archive" class="w-5 h-5 text-teal-600"></i> Daftar Surat Masuk Per Bulan
            </h3>
            <p class="text-xs text-slate-500">Tabel bulanan dalam keadaan auto-hidden. Klik baris bulan untuk membuka isi daftar surat.</p>
          </div>

          <div class="flex items-center gap-2">
            <label class="text-xs font-bold text-slate-600">Pilih Tahun:</label>
            <select id="public-year-select" onchange="loadGroupedPublicSurat()" class="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-teal-500">
              <option value="Semua">Semua Tahun</option>
              <option value="2026" selected>Tahun 2026</option>
              <option value="2025">Tahun 2025</option>
            </select>
          </div>
        </div>

        <!-- ACCORDION LIST CONTAINER -->
        <div id="accordion-surat-masuk-container" class="space-y-4">
          <div class="text-center py-12 text-slate-400 text-xs bg-white rounded-2xl border border-slate-200">
            Memuat arsip surat masuk bulanan...
          </div>
        </div>

      </section>

      <!-- ================= 1. TAB DASHBOARD ADMIN ================= -->
      <section id="tab-dashboard" class="space-y-6 hidden">
        
        <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div class="relative z-10 max-w-2xl">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold mb-3">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Dashboard Administrator Tata Usaha
            </span>
            <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">Panel Kontrol Persuratan Instansi</h2>
            <p class="text-slate-300 text-sm leading-relaxed mb-6">Kelola dan update disposisi surat masuk, registrasi dokumen keluar, serta pengarsipan otomatis di Google Drive.</p>
            
            <div class="flex flex-wrap items-center gap-3">
              <button onclick="switchTab('registrasi')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg transition-all">
                <i data-lucide="plus-circle" class="w-4 h-4"></i> Registrasi Surat Baru
              </button>
              <button onclick="switchTab('surat-masuk')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs backdrop-blur transition-all">
                <i data-lucide="inbox" class="w-4 h-4"></i> Kelola Disposisi
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Surat Masuk</span>
              <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <i data-lucide="inbox" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span id="stat-total-masuk" class="text-2xl font-extrabold text-slate-900">0</span>
              <span class="text-xs text-slate-500 font-medium">Dokumen</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-teal-600"></i> Google Spreadsheet
            </p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Surat Keluar</span>
              <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <i data-lucide="send" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span id="stat-total-keluar" class="text-2xl font-extrabold text-slate-900">0</span>
              <span class="text-xs text-slate-500 font-medium">Dokumen</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
              <i data-lucide="send-horizontal" class="w-3.5 h-3.5 text-indigo-600"></i> Terkirim Eksternal
            </p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Registrasi Tertunda</span>
              <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <i data-lucide="clock" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span id="stat-tertunda" class="text-2xl font-extrabold text-amber-600">0</span>
              <span class="text-xs text-slate-500 font-medium">Status 'Baru'</span>
            </div>
            <p class="text-[11px] text-amber-600 font-medium mt-2 flex items-center gap-1">
              <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> Perlu Tindak Lanjut Disposisi
            </p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Arsip Digital</span>
              <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <i data-lucide="folder-check" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span id="stat-total-arsip" class="text-2xl font-extrabold text-slate-900">0</span>
              <span class="text-xs text-slate-500 font-medium">Berkas</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
              <i data-lucide="cloud" class="w-3.5 h-3.5 text-sky-600"></i> Folder Google Drive
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                  <i data-lucide="inbox" class="w-5 h-5 text-teal-600"></i> Surat Masuk Terbaru
                </h3>
                <p class="text-xs text-slate-500">5 pendaftaran surat masuk terkini</p>
              </div>
              <button onclick="switchTab('surat-masuk')" class="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1">
                Lihat Semua <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </button>
            </div>

            <div id="recent-masuk-container" class="space-y-3">
              <div class="text-center py-8 text-slate-400 text-xs">Memuat aktivitas terbaru...</div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-5">
            <div class="border-b border-slate-100 pb-3">
              <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                <i data-lucide="pie-chart" class="w-5 h-5 text-slate-700"></i> Progres Disposisi
              </h3>
              <p class="text-xs text-slate-500">Status penanganan surat masuk</p>
            </div>

            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs font-semibold mb-1.5">
                  <span class="text-slate-600 flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Baru (Belum Disposisi)</span>
                  <span id="prog-baru-val" class="text-slate-900">0</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                  <div id="prog-baru-bar" class="bg-sky-500 h-2 rounded-full transition-all" style="width: 0%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1.5">
                  <span class="text-slate-600 flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Sedang Diproses</span>
                  <span id="prog-proses-val" class="text-slate-900">0</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                  <div id="prog-proses-bar" class="bg-amber-500 h-2 rounded-full transition-all" style="width: 0%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1.5">
                  <span class="text-slate-600 flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Selesai / Arsip</span>
                  <span id="prog-selesai-val" class="text-slate-900">0</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                  <div id="prog-selesai-bar" class="bg-emerald-500 h-2 rounded-full transition-all" style="width: 0%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- ================= 2. TAB SURAT MASUK (ADMIN) ================= -->
      <section id="tab-surat-masuk" class="space-y-5 hidden">
        <div class="bg-white rounded-2xl border border-slate-200 p-4 md:p-5 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 class="font-extrabold text-slate-900 text-lg">Daftar Surat Masuk</h3>
              <p class="text-xs text-slate-500">Monitor dan perbarui disposisi surat yang diterima instansi</p>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="checkAdminAuthAndExecute(() => switchTab('registrasi'))" class="px-3.5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                <i data-lucide="plus" class="w-4 h-4"></i> Surat Masuk Baru
              </button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
            <div class="relative flex-1">
              <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input type="text" id="masuk-search" oninput="loadSuratMasukList()" placeholder="Cari No. Surat, Pengirim, atau Perihal..." class="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
            </div>

            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button onclick="setFilterStatusMasuk('Semua')" id="btn-fmasuk-Semua" class="btn-fmasuk px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white whitespace-nowrap">Semua</button>
              <button onclick="setFilterStatusMasuk('Baru')" id="btn-fmasuk-Baru" class="btn-fmasuk px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">Baru</button>
              <button onclick="setFilterStatusMasuk('Diproses')" id="btn-fmasuk-Diproses" class="btn-fmasuk px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">Diproses</button>
              <button onclick="setFilterStatusMasuk('Selesai')" id="btn-fmasuk-Selesai" class="btn-fmasuk px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">Selesai</button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th class="py-3.5 px-4">No. Surat & ID</th>
                  <th class="py-3.5 px-4">Pengirim & Tgl</th>
                  <th class="py-3.5 px-4">Perihal & Ringkasan</th>
                  <th class="py-3.5 px-4">Disposisi</th>
                  <th class="py-3.5 px-4">Status</th>
                  <th class="py-3.5 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody id="table-surat-masuk" class="divide-y divide-slate-100">
                <tr><td colspan="6" class="text-center py-8 text-slate-400">Memuat data surat masuk...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ================= 3. TAB SURAT KELUAR ================= -->
      <section id="tab-surat-keluar" class="space-y-5 hidden">
        <div class="bg-white rounded-2xl border border-slate-200 p-4 md:p-5 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 class="font-extrabold text-slate-900 text-lg">Daftar Surat Keluar</h3>
              <p class="text-xs text-slate-500">Pantau penerbitan dan pengiriman dokumen keluar instansi</p>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="checkAdminAuthAndExecute(() => switchTab('registrasi'))" class="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                <i data-lucide="plus" class="w-4 h-4"></i> Surat Keluar Baru
              </button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
            <div class="relative flex-1">
              <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input type="text" id="keluar-search" oninput="loadSuratKeluarList()" placeholder="Cari No. Surat, Penerima, atau Perihal..." class="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all">
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="setFilterStatusKeluar('Semua')" id="btn-fkeluar-Semua" class="btn-fkeluar px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white">Semua</button>
              <button onclick="setFilterStatusKeluar('Tersalurkan')" id="btn-fkeluar-Tersalurkan" class="btn-fkeluar px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200">Tersalurkan</button>
              <button onclick="setFilterStatusKeluar('Konsep')" id="btn-fkeluar-Konsep" class="btn-fkeluar px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200">Konsep</button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th class="py-3.5 px-4">No. Surat & ID</th>
                  <th class="py-3.5 px-4">Penerima & Tgl</th>
                  <th class="py-3.5 px-4">Perihal & Ringkasan</th>
                  <th class="py-3.5 px-4">Penandatangan</th>
                  <th class="py-3.5 px-4">Status</th>
                  <th class="py-3.5 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody id="table-surat-keluar" class="divide-y divide-slate-100">
                <tr><td colspan="6" class="text-center py-8 text-slate-400">Memuat data surat keluar...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ================= 4. TAB REGISTRASI SURAT BARU (ADMIN ONLY) ================= -->
      <section id="tab-registrasi" class="space-y-6 hidden">
        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm max-w-3xl mx-auto space-y-6">
          <div class="border-b border-slate-100 pb-5 space-y-4">
            <div>
              <h3 class="font-extrabold text-slate-900 text-xl">Registrasi Surat Baru</h3>
              <p class="text-xs text-slate-500">Input berkas fisik atau digital ke dalam sistem persuratan Aksara Digital</p>
            </div>

            <div class="grid grid-cols-2 p-1 bg-slate-100 rounded-xl font-bold text-xs">
              <button type="button" onclick="setRegType('MASUK')" id="btn-regtype-masuk" class="py-2.5 rounded-lg bg-teal-600 text-white shadow-sm transition-all flex items-center justify-center gap-2">
                <i data-lucide="inbox" class="w-4 h-4"></i> Surat Masuk
              </button>
              <button type="button" onclick="setRegType('KELUAR')" id="btn-regtype-keluar" class="py-2.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                <i data-lucide="send" class="w-4 h-4"></i> Surat Keluar
              </button>
            </div>
          </div>

          <form id="form-surat" onsubmit="submitFormSurat(event)" class="space-y-4">
            <input type="hidden" id="form-tipe-surat" value="MASUK">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Nomor Surat <span class="text-rose-500">*</span></label>
                <input type="text" id="reg-no-surat" required placeholder="Contoh: 045/UN.01/TU/2026" class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Sifat Surat</label>
                <select id="reg-sifat" class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
                  <option value="Biasa">Biasa</option>
                  <option value="Penting">Penting</option>
                  <option value="Rahasia">Rahasia</option>
                  <option value="Kilat">Kilat / Segera</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Tanggal Surat <span class="text-rose-500">*</span></label>
                <input type="date" id="reg-tgl-surat" required class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
              </div>

              <div>
                <label id="lbl-tgl-proses" class="block text-xs font-bold text-slate-700 mb-1">Tanggal Diterima <span class="text-rose-500">*</span></label>
                <input type="date" id="reg-tgl-proses" required class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
              </div>

              <div class="md:col-span-2">
                <label id="lbl-pihak-pihak" class="block text-xs font-bold text-slate-700 mb-1">Pengirim (Instansi/Perorangan) <span class="text-rose-500">*</span></label>
                <input type="text" id="reg-pihak" required placeholder="Contoh: Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi" class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
              </div>

              <div class="md:col-span-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">Perihal Surat <span class="text-rose-500">*</span></label>
                <input type="text" id="reg-perihal" required placeholder="Judul / Pokok Isi Surat..." class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
              </div>

              <div class="md:col-span-2">
                <label id="lbl-tujuan-pihak" class="block text-xs font-bold text-slate-700 mb-1">Disposisi / Tujuan Unit Kerja</label>
                <input type="text" id="reg-tujuan" placeholder="Contoh: Bagian Keuangan & Kepegawaian" class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all">
              </div>

              <div class="md:col-span-2">
                <label class="block text-xs font-bold text-slate-700 mb-1">Ringkasan / Uraian Singkat</label>
                <textarea id="reg-ringkasan" rows="3" placeholder="Catatan atau uraian ringkas mengenai isi dokumen..." class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"></textarea>
              </div>
            </div>

            <div class="pt-2">
              <label class="block text-xs font-bold text-slate-700 mb-1.5">Unggah Berkas Digital (PDF / Word / Gambar)</label>
              <div class="border-2 border-dashed border-slate-200 hover:border-teal-500 rounded-2xl p-6 text-center bg-slate-50/50 transition-all cursor-pointer relative" id="drop-zone">
                <input type="file" id="reg-file" onchange="handleFileSelected(event)" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full">
                <div id="upload-placeholder" class="space-y-2">
                  <div class="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                    <i data-lucide="upload-cloud" class="w-6 h-6"></i>
                  </div>
                  <p class="text-xs font-bold text-slate-700">Klik atau seret file ke area ini</p>
                  <p class="text-[10px] text-slate-400">PDF, DOCX, PNG, JPG (Otomatis diarsipkan ke Folder Bulanan Google Drive)</p>
                </div>
                <div id="upload-preview" class="hidden flex items-center justify-between p-3 bg-white border border-teal-200 rounded-xl">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                      <i data-lucide="file-text" class="w-5 h-5"></i>
                    </div>
                    <div class="text-left">
                      <p id="file-name-label" class="text-xs font-bold text-slate-800 truncate max-w-[200px]">document.pdf</p>
                      <p id="file-size-label" class="text-[10px] text-slate-400">0 KB</p>
                    </div>
                  </div>
                  <button type="button" onclick="clearSelectedFile(event)" class="text-rose-500 hover:bg-rose-50 p-1.5 rounded-lg text-xs font-semibold">
                    Hapus File
                  </button>
                </div>
              </div>
            </div>

            <div class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button type="reset" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-all">
                Reset Form
              </button>
              <button type="submit" id="btn-submit-form" class="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md shadow-teal-600/20 transition-all flex items-center gap-2">
                <i data-lucide="check-circle" class="w-4 h-4"></i> Simpan & Simpan Arsip
              </button>
            </div>
          </form>
        </div>
      </section>

      <!-- ================= 5. TAB ARSIP PERTAHUN & REKAPITULASI ================= -->
      <section id="tab-arsip-rekap" class="space-y-6 hidden">
        <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 class="font-extrabold text-slate-900 text-xl">Arsip Surat Pertahun & Rekapitulasi</h3>
            <p class="text-xs text-slate-500">Filter arsip bulanan Google Drive & cetak rekapitulasi surat per tahun</p>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.print()" class="no-print px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm hover:bg-slate-800 transition-all">
              <i data-lucide="printer" class="w-4 h-4"></i> Cetak Rekapitulasi
            </button>
          </div>
        </div>

        <!-- Year Selector Bar -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1" id="yearly-tabs-container">
          <span class="text-xs font-bold text-slate-500 pr-2">Filter Tahun:</span>
          <!-- Dynamic Year Buttons Rendered Here -->
        </div>

        <div class="space-y-3">
          <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
            <i data-lucide="folder-tree" class="w-4 h-4 text-teal-600"></i> Folder Arsip Bulanan (Google Drive)
          </h4>
          <div id="grid-folder-bulanan" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="col-span-full text-center py-6 text-slate-400 text-xs">Memuat folder...</div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <h4 class="font-bold text-slate-900 text-base">Tabel Rekapitulasi Surat</h4>
            <div class="flex items-center gap-3">
              <label class="text-xs text-slate-500 font-semibold">Filter Bulan/Tahun:</label>
              <select id="rekap-month-select" onchange="loadRekapitulasiData()" class="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:ring-2 focus:ring-teal-500">
                <option value="Semua">Semua Periode</option>
              </select>
            </div>
          </div>

          <div class="flex items-center gap-4 text-xs font-semibold">
            <span class="px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg">Surat Masuk: <strong id="rekap-total-masuk">0</strong></span>
            <span class="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg">Surat Keluar: <strong id="rekap-total-keluar">0</strong></span>
          </div>

          <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th class="py-3 px-3">Kategori</th>
                  <th class="py-3 px-3">ID & No. Surat</th>
                  <th class="py-3 px-3">Tanggal</th>
                  <th class="py-3 px-3">Instansi / Pihak</th>
                  <th class="py-3 px-3">Perihal</th>
                  <th class="py-3 px-3">Status</th>
                  <th class="py-3 px-3">File Arsip</th>
                </tr>
              </thead>
              <tbody id="table-rekapitulasi" class="divide-y divide-slate-100">
                <tr><td colspan="7" class="text-center py-6 text-slate-400">Memuat rekapitulasi...</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

    </main>
  </div>

  <!-- MOBILE BOTTOM NAVIGATION BAR -->
  <nav class="no-print md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 text-white z-40 flex items-center justify-around py-2 shadow-2xl">
    <button onclick="switchTab('beranda-publik')" class="mobile-nav-item flex flex-col items-center gap-1 text-teal-400">
      <i data-lucide="home" class="w-5 h-5"></i>
      <span class="text-[10px] font-semibold">Beranda</span>
    </button>
    <button onclick="switchTab('arsip-rekap')" class="mobile-nav-item flex flex-col items-center gap-1 text-slate-400">
      <i data-lucide="folder-archive" class="w-5 h-5"></i>
      <span class="text-[10px] font-semibold">Arsip</span>
    </button>
    <button onclick="switchTab('surat-masuk')" class="admin-only-nav mobile-nav-item flex flex-col items-center gap-1 text-slate-400">
      <i data-lucide="inbox" class="w-5 h-5"></i>
      <span class="text-[10px] font-semibold">Masuk</span>
    </button>
    <button onclick="switchTab('registrasi')" class="admin-only-nav mobile-nav-item flex flex-col items-center gap-1 text-slate-400">
      <i data-lucide="plus-circle" class="w-5 h-5"></i>
      <span class="text-[10px] font-semibold">Input</span>
    </button>
    <button onclick="openLoginAdminModal()" id="mobile-auth-btn" class="mobile-nav-item flex flex-col items-center gap-1 text-amber-400">
      <i data-lucide="lock" class="w-5 h-5"></i>
      <span class="text-[10px] font-semibold">Admin</span>
    </button>
  </nav>

  <!-- MODAL: LOGIN ADMIN -->
  <div id="modal-login-admin" class="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-5 border border-slate-100 relative overflow-hidden">
      <div class="text-center space-y-2">
        <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto shadow-sm">
          <i data-lucide="shield-check" class="w-6 h-6"></i>
        </div>
        <h3 class="font-extrabold text-slate-900 text-lg">Login Admin Tata Usaha</h3>
        <p class="text-xs text-slate-500">Masukkan Passcode PIN untuk membuka akses registrasi & disposisi.</p>
      </div>

      <form onsubmit="submitAdminLogin(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Passcode PIN Admin</label>
          <input type="password" id="input-admin-pin" required placeholder="Default PIN: admin123" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono text-center tracking-widest focus:ring-2 focus:ring-teal-500">
          <p class="text-[10px] text-slate-400 mt-1 text-center">Gunakan kata sandi default: <code>admin123</code></p>
        </div>

        <div class="flex items-center gap-2 pt-2">
          <button type="button" onclick="closeLoginAdminModal()" class="w-1/2 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50">
            Batal
          </button>
          <button type="submit" class="w-1/2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-lg shadow-slate-900/20">
            Masuk Admin
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- MODAL: UPDATE DISPOSISI & STATUS SURAT -->
  <div id="modal-disposisi" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <h4 class="font-extrabold text-slate-900 text-base">Update Status & Disposisi</h4>
        <button onclick="closeDisposisiModal()" class="text-slate-400 hover:text-slate-600 p-1"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <input type="hidden" id="modal-surat-id">
      <input type="hidden" id="modal-surat-type">

      <div class="space-y-3">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">ID Surat</label>
          <input type="text" id="modal-disp-id" disabled class="w-full px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-mono text-slate-600">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Status Penanganan</label>
          <select id="modal-disp-status" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:ring-2 focus:ring-teal-500">
            <option value="Baru">Baru (Belum Diproses)</option>
            <option value="Diproses">Diproses (Sedang Tindak Lanjut)</option>
            <option value="Selesai">Selesai (Sudah Diarsipkan)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Tujuan Disposisi / Catatan Tambahan</label>
          <textarea id="modal-disp-note" rows="3" placeholder="Tuliskan petunjuk arahan atau unit penerima disposisi..." class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500"></textarea>
        </div>
      </div>

      <div class="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
        <button onclick="closeDisposisiModal()" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100">Batal</button>
        <button onclick="submitUpdateDisposisi()" class="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md">Simpan Perubahan</button>
      </div>
    </div>
  </div>

  <!-- MODAL: SETTING VERCEL GOOGLE APPS SCRIPT API URL -->
  <div id="modal-api-config" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <h4 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
          <i data-lucide="key" class="w-5 h-5 text-amber-500"></i> Pengaturan URL API Apps Script
        </h4>
        <button onclick="closeApiConfigModal()" class="text-slate-400 hover:text-slate-600 p-1"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <p class="text-xs text-slate-600 leading-relaxed">
        Masukkan Web App URL dari Google Apps Script tempat Anda men-deploy <code>Code.gs</code>.
      </p>

      <div class="space-y-2">
        <label class="block text-xs font-bold text-slate-700">Web App API URL:</label>
        <input type="url" id="input-gas-api-url" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 font-mono">
      </div>

      <div class="pt-3 flex items-center justify-between border-t border-slate-100">
        <button onclick="clearApiConfig()" class="text-rose-500 hover:underline text-xs font-semibold">Reset / Demo Mode</button>
        <div class="flex gap-2">
          <button onclick="closeApiConfigModal()" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100">Batal</button>
          <button onclick="saveApiConfig()" class="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md">Simpan URL API</button>
        </div>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT APP CONTROLLER -->
  <script>
    // --- STATE MANAGEMENT ---
    let currentTab = 'beranda-publik';
    let filterStatusMasuk = 'Semua';
    let filterStatusKeluar = 'Semua';
    let selectedYearFilter = '2026';
    let isAdminLoggedIn = sessionStorage.getItem("AKSARA_ADMIN_LOGGED_IN") === "true";
    
    let selectedFileBase64 = null;
    let selectedFileInfo = null;
    let GAS_API_URL = localStorage.getItem("AKSARA_GAS_API_URL") || "";
    let isDemoMode = false;

    // DEMO DATA
    let mockSuratMasuk = [
      {
        id: "SM-202609-001",
        nomorSurat: "088/KEMENAG/IX/2026",
        tglSurat: "2026-09-01",
        tglDiterima: "2026-09-02",
        pengirim: "Kementerian Agama RI",
        perihal: "Undangan Rapat Koordinasi Persuratan Digital 2026",
        ringkasan: "Pembahasan implementasi e-surat terpadu instansi",
        sifatSurat: "Penting",
        disposisi: "Kepala Bagian Tata Usaha",
        status: "Baru",
        linkDrive: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ",
        folderBulan: "2026-09"
      },
      {
        id: "SM-202609-002",
        nomorSurat: "142/DIKTI/VIII/2026",
        tglSurat: "2026-08-28",
        tglDiterima: "2026-08-29",
        pengirim: "Direktorat Jenderal Pendidikan Tinggi",
        perihal: "Surat Edaran Akreditasi Program Studi",
        ringkasan: "Batas waktu pembaruan dokumen akreditasi kampus",
        sifatSurat: "Biasa",
        disposisi: "Subbag Akademik",
        status: "Diproses",
        linkDrive: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ",
        folderBulan: "2026-08"
      },
      {
        id: "SM-202512-005",
        nomorSurat: "099/PEMPROV/XII/2025",
        tglSurat: "2025-12-10",
        tglDiterima: "2025-12-11",
        pengirim: "Pemerintah Provinsi Aceh",
        perihal: "Surat Kerjasama Beasiswa Daerah 2025",
        ringkasan: "Program alokasi dana bantuan beasiswa mahasiswa",
        sifatSurat: "Biasa",
        disposisi: "Kemahasiswaan",
        status: "Selesai",
        linkDrive: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ",
        folderBulan: "2025-12"
      }
    ];

    let mockSuratKeluar = [
      {
        id: "SK-202609-001",
        nomorSurat: "015/UN.01/TU/2026",
        tglSurat: "2026-09-03",
        tglDikirim: "2026-09-04",
        penerima: "Dinas Pendidikan Banda Aceh",
        perihal: "Surat Pengantar Permohonan Kerjasama Riset",
        ringkasan: "Permohonan pengiriman berkas kerjasama riset mahasiswa",
        sifatSurat: "Biasa",
        penandatangan: "Rektor UIN Ar-Raniry",
        status: "Tersalurkan",
        linkDrive: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ",
        folderBulan: "2026-09"
      }
    ];

    document.addEventListener("DOMContentLoaded", () => {
      initBackendConnection();
      updateAuthUI();

      const today = new Date().toISOString().split('T')[0];
      document.getElementById('reg-tgl-surat').value = today;
      document.getElementById('reg-tgl-proses').value = today;

      lucide.createIcons();
      refreshAllData();
    });

    function initBackendConnection() {
      const modeLabel = document.getElementById('system-mode-label');
      const dot = document.getElementById('status-dot');

      if (typeof google !== "undefined" && google.script && google.script.run) {
        modeLabel.innerText = "Apps Script API";
        isDemoMode = false;
        return;
      }

      if (GAS_API_URL && GAS_API_URL.trim() !== "") {
        modeLabel.innerText = "REST API (Vercel)";
        isDemoMode = false;
        if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse";
      } else {
        modeLabel.innerText = "Simulasi Demo";
        isDemoMode = true;
        if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-amber-400";
      }
    }

    // --- AUTH MANAGEMENT ---
    function updateAuthUI() {
      const adminIndicator = document.getElementById('admin-badge-indicator');
      const btnSidebarLogin = document.getElementById('btn-sidebar-login');
      const btnSidebarLogout = document.getElementById('btn-sidebar-logout');
      const btnHeaderLogin = document.getElementById('btn-header-login');
      const btnHeaderProfile = document.getElementById('btn-header-profile');
      const mobileAuthBtn = document.getElementById('mobile-auth-btn');

      if (isAdminLoggedIn) {
        if (adminIndicator) {
          adminIndicator.innerText = "ADMIN LOGGED IN";
          adminIndicator.className = "text-[9px] bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2 py-0.5 rounded font-bold";
        }
        if (btnSidebarLogin) btnSidebarLogin.classList.add('hidden');
        if (btnSidebarLogout) btnSidebarLogout.classList.remove('hidden');
        if (btnHeaderLogin) btnHeaderLogin.classList.add('hidden');
        if (btnHeaderProfile) btnHeaderProfile.classList.remove('hidden');
        if (mobileAuthBtn) {
          mobileAuthBtn.onclick = logoutAdmin;
          mobileAuthBtn.innerHTML = `<i data-lucide="unlock" class="w-5 h-5 text-teal-400"></i><span class="text-[10px] font-semibold text-teal-400">Logout</span>`;
        }
        document.querySelectorAll('.admin-only-nav').forEach(el => el.classList.remove('opacity-50'));
      } else {
        if (adminIndicator) {
          adminIndicator.innerText = "PUBLIK GUEST";
          adminIndicator.className = "text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono";
        }
        if (btnSidebarLogin) btnSidebarLogin.classList.remove('hidden');
        if (btnSidebarLogout) btnSidebarLogout.classList.add('hidden');
        if (btnHeaderLogin) btnHeaderLogin.classList.remove('hidden');
        if (btnHeaderProfile) btnHeaderProfile.classList.add('hidden');
        if (mobileAuthBtn) {
          mobileAuthBtn.onclick = openLoginAdminModal;
          mobileAuthBtn.innerHTML = `<i data-lucide="lock" class="w-5 h-5"></i><span class="text-[10px] font-semibold">Admin</span>`;
        }
      }
      lucide.createIcons();
    }

    function openLoginAdminModal() {
      document.getElementById('modal-login-admin').classList.remove('hidden');
    }

    function closeLoginAdminModal() {
      document.getElementById('modal-login-admin').classList.add('hidden');
    }

    function submitAdminLogin(e) {
      e.preventDefault();
      const pin = document.getElementById('input-admin-pin').value;
      if (pin === "admin123") {
        isAdminLoggedIn = true;
        sessionStorage.setItem("AKSARA_ADMIN_LOGGED_IN", "true");
        alert("Login Admin Berhasil! Seluruh fitur registrasi & disposisi kini terbuka.");
        closeLoginAdminModal();
        updateAuthUI();
        switchTab('dashboard');
      } else {
        alert("Passcode PIN Admin Salah. Gunakan 'admin123'");
      }
    }

    function logoutAdmin() {
      if (confirm("Apakah Anda yakin ingin keluar dari Mode Admin?")) {
        isAdminLoggedIn = false;
        sessionStorage.removeItem("AKSARA_ADMIN_LOGGED_IN");
        updateAuthUI();
        switchTab('beranda-publik');
      }
    }

    function checkAdminAuthAndExecute(actionFn) {
      if (isAdminLoggedIn) {
        actionFn();
      } else {
        openLoginAdminModal();
      }
    }

    // --- API CLIENT CALLER ---
    function callBackend(action, payload = {}) {
      return new Promise((resolve, reject) => {
        if (!isDemoMode && typeof google !== "undefined" && google.script && google.script.run) {
          google.script.run
            .withSuccessHandler(res => resolve(res))
            .withFailureHandler(err => reject(err))
            [action](payload.formData || payload.keyword || payload.periodYearMonth || payload.type || payload.year, payload.fileObj || payload.status || payload.id || payload.newStatus, payload.newDisposisi);
          return;
        }

        if (!isDemoMode && GAS_API_URL) {
          fetch(GAS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ action: action, ...payload })
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
          return;
        }

        // Demo Fallback
        setTimeout(() => {
          if (action === 'getDashboardStats') {
            resolve({
              totalMasuk: mockSuratMasuk.length,
              totalKeluar: mockSuratKeluar.length,
              registrasiTertunda: mockSuratMasuk.filter(x => x.status === 'Baru').length,
              diproses: mockSuratMasuk.filter(x => x.status === 'Diproses').length,
              selesai: mockSuratMasuk.filter(x => x.status === 'Selesai').length,
              totalArsip: mockSuratMasuk.length + mockSuratKeluar.length,
              recentMasuk: mockSuratMasuk.slice(0, 5),
              recentKeluar: mockSuratKeluar.slice(0, 5)
            });
          } else if (action === 'getGroupedSuratMasuk') {
            let list = [...mockSuratMasuk];
            if (payload.year && payload.year !== 'Semua') {
              list = list.filter(x => (x.folderBulan || "").startsWith(payload.year));
            }
            if (payload.keyword) {
              const kw = payload.keyword.toLowerCase();
              list = list.filter(x => x.nomorSurat.toLowerCase().includes(kw) || x.pengirim.toLowerCase().includes(kw) || x.perihal.toLowerCase().includes(kw));
            }

            const groupedMap = {};
            list.forEach(item => {
              const ym = item.folderBulan || "2026-09";
              if (!groupedMap[ym]) {
                groupedMap[ym] = { yearMonth: ym, monthLabel: formatYearMonthLabel(ym), year: ym.split('-')[0], count: 0, items: [] };
              }
              groupedMap[ym].items.push(item);
              groupedMap[ym].count++;
            });

            resolve(Object.keys(groupedMap).sort().reverse().map(k => groupedMap[k]));
          } else if (action === 'getSuratMasukList') {
            let list = [...mockSuratMasuk];
            if (payload.status && payload.status !== 'Semua') list = list.filter(x => x.status === payload.status);
            if (payload.keyword) {
              const kw = payload.keyword.toLowerCase();
              list = list.filter(x => x.nomorSurat.toLowerCase().includes(kw) || x.pengirim.toLowerCase().includes(kw) || x.perihal.toLowerCase().includes(kw));
            }
            resolve(list);
          } else if (action === 'getSuratKeluarList') {
            let list = [...mockSuratKeluar];
            if (payload.status && payload.status !== 'Semua') list = list.filter(x => x.status === payload.status);
            if (payload.keyword) {
              const kw = payload.keyword.toLowerCase();
              list = list.filter(x => x.nomorSurat.toLowerCase().includes(kw) || x.penerima.toLowerCase().includes(kw) || x.perihal.toLowerCase().includes(kw));
            }
            resolve(list);
          } else if (action === 'getArsipBulanan') {
            let list = [
              { yearMonth: "2026-09", label: "September 2026", suratMasukCount: 1, suratKeluarCount: 1, totalCount: 2, driveUrl: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ" },
              { yearMonth: "2026-08", label: "Agustus 2026", suratMasukCount: 1, suratKeluarCount: 0, totalCount: 1, driveUrl: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ" },
              { yearMonth: "2025-12", label: "Desember 2025", suratMasukCount: 1, suratKeluarCount: 0, totalCount: 1, driveUrl: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ" }
            ];
            if (payload.year && payload.year !== 'Semua') {
              list = list.filter(x => x.yearMonth.startsWith(payload.year));
            }
            resolve(list);
          } else if (action === 'getArsipPertahun') {
            resolve(["2026", "2025"]);
          } else if (action === 'getRekapitulasiData') {
            resolve({
              period: payload.periodYearMonth || "Semua",
              suratMasuk: mockSuratMasuk,
              suratKeluar: mockSuratKeluar,
              totalMasuk: mockSuratMasuk.length,
              totalKeluar: mockSuratKeluar.length
            });
          } else {
            resolve({ success: true, message: "Disimpan di Mode Simulasi!" });
          }
        }, 300);
      });
    }

    // --- NAVIGATION ---
    function switchTab(tabId) {
      if (['dashboard', 'registrasi'].includes(tabId) && !isAdminLoggedIn) {
        openLoginAdminModal();
        return;
      }

      currentTab = tabId;
      document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
      document.getElementById(`tab-${tabId}`).classList.remove('hidden');

      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('bg-teal-600', 'text-white', 'shadow-md');
        btn.classList.add('text-slate-300', 'hover:bg-slate-800');
      });

      const activeNav = document.getElementById(`nav-${tabId}`);
      if (activeNav) {
        activeNav.classList.add('bg-teal-600', 'text-white', 'shadow-md');
        activeNav.classList.remove('text-slate-300', 'hover:bg-slate-800');
      }

      const titles = {
        'beranda-publik': 'Beranda Publik Transparansi Persuratan',
        'dashboard': 'Dashboard Admin Tata Usaha',
        'surat-masuk': 'Daftar Surat Masuk',
        'surat-keluar': 'Daftar Surat Keluar',
        'registrasi': 'Registrasi Surat Baru',
        'arsip-rekap': 'Arsip Pertahun & Rekapitulasi'
      };
      document.getElementById('page-title').innerText = titles[tabId] || 'Portal Persuratan';

      if (tabId === 'beranda-publik') loadGroupedPublicSurat();
      if (tabId === 'surat-masuk') loadSuratMasukList();
      if (tabId === 'surat-keluar') loadSuratKeluarList();
      if (tabId === 'arsip-rekap') {
        loadArsipYearsTabs();
        loadArsipBulananFolders();
        loadRekapitulasiData();
      }
    }

    function refreshAllData() {
      const refreshIcon = document.getElementById('refresh-icon');
      if (refreshIcon) refreshIcon.classList.add('animate-spin');

      if (currentTab === 'beranda-publik') loadGroupedPublicSurat();
      
      callBackend('getDashboardStats')
        .then(stats => {
          renderDashboardStats(stats);
          if (refreshIcon) refreshIcon.classList.remove('animate-spin');
        })
        .catch(err => {
          if (refreshIcon) refreshIcon.classList.remove('animate-spin');
        });
    }

    // --- 1. HOMEPAGE ACCORDION BULANAN PUBLIK LOGIC ---
    function loadGroupedPublicSurat() {
      const year = document.getElementById('public-year-select').value;
      const kw = document.getElementById('public-search-hero') ? document.getElementById('public-search-hero').value : "";
      const container = document.getElementById('accordion-surat-masuk-container');
      container.innerHTML = `<div class="text-center py-12 text-slate-400 text-xs bg-white rounded-2xl border border-slate-200">Memuat data surat per bulan...</div>`;

      callBackend('getGroupedSuratMasuk', { keyword: kw, year: year })
        .then(renderGroupedAccordion)
        .catch(err => {
          container.innerHTML = `<div class="text-center py-8 text-rose-500 text-xs">Gagal memuat data: ${err}</div>`;
        });
    }

    function renderGroupedAccordion(groups) {
      const container = document.getElementById('accordion-surat-masuk-container');
      if (!groups || groups.length === 0) {
        container.innerHTML = `
          <div class="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
            <i data-lucide="inbox" class="w-8 h-8 text-slate-300 mx-auto"></i>
            <p class="text-xs font-bold text-slate-700">Tidak ada surat masuk ditemukan</p>
            <p class="text-[11px] text-slate-400">Gunakan pencarian lain atau pilih tahun yang sesuai.</p>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      let html = '';
      groups.forEach((g, idx) => {
        const accordionId = `acc-body-${g.yearMonth}`;
        const arrowId = `acc-arrow-${g.yearMonth}`;
        
        let rowsHtml = '';
        g.items.forEach(item => {
          const badgeClass = getStatusBadgeClass(item.status);
          const fileLink = item.linkDrive ? `<a href="${item.linkDrive}" target="_blank" class="text-teal-600 font-bold hover:underline">Drive File</a>` : `<span class="text-slate-300">-</span>`;

          rowsHtml += `
            <tr class="hover:bg-slate-50 border-b border-slate-100 text-xs">
              <td class="py-3 px-4 font-mono font-bold text-slate-900">${item.id}<br><span class="text-slate-500 font-normal text-[10px]">${item.nomorSurat}</span></td>
              <td class="py-3 px-4 text-slate-600">${item.tglDiterima}</td>
              <td class="py-3 px-4 font-bold text-slate-800">${item.pengirim}</td>
              <td class="py-3 px-4 text-slate-700 max-w-xs">${item.perihal}</td>
              <td class="py-3 px-4 font-medium text-slate-600">${item.disposisi || '-'}</td>
              <td class="py-3 px-4"><span class="${badgeClass} text-[10px] font-bold px-2.5 py-0.5 rounded-full">${item.status}</span></td>
              <td class="py-3 px-4 text-center">${fileLink}</td>
            </tr>
          `;
        });

        html += `
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
            <!-- Accordion Header (Click to Toggle Expand/Collapse) -->
            <button type="button" onclick="toggleAccordion('${g.yearMonth}')" class="w-full p-4 md:p-5 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/80 transition-colors text-left">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs shadow-sm">
                  <i data-lucide="folder" class="w-5 h-5"></i>
                </div>
                <div>
                  <h4 class="font-extrabold text-slate-900 text-sm md:text-base">${g.monthLabel}</h4>
                  <p class="text-[11px] text-slate-500 font-medium">${g.count} Surat Masuk Terdaftar</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="hidden sm:inline-block text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Auto-Hidden Tabel
                </span>
                <i data-lucide="chevron-down" id="${arrowId}" class="w-5 h-5 text-slate-500 transition-transform duration-200"></i>
              </div>
            </button>

            <!-- Accordion Body (Collapsible Auto Hidden Table) -->
            <div id="${accordionId}" class="hidden border-t border-slate-200 overflow-x-auto custom-scrollbar">
              <table class="w-full text-left">
                <thead class="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th class="py-3 px-4">ID & No. Surat</th>
                    <th class="py-3 px-4">Tgl Diterima</th>
                    <th class="py-3 px-4">Pengirim</th>
                    <th class="py-3 px-4">Perihal Surat</th>
                    <th class="py-3 px-4">Disposisi</th>
                    <th class="py-3 px-4">Status Progres</th>
                    <th class="py-3 px-4 text-center">Berkas</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
      lucide.createIcons();
    }

    function toggleAccordion(ym) {
      const body = document.getElementById(`acc-body-${ym}`);
      const arrow = document.getElementById(`acc-arrow-${ym}`);

      if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
      } else {
        body.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
      }
    }

    function handlePublicSearch(e) {
      if (e.key === 'Enter') executePublicSearch();
    }

    function executePublicSearch() {
      loadGroupedPublicSurat();
    }

    // --- ARSIP PERTAHUN LOGIC ---
    function loadArsipYearsTabs() {
      callBackend('getArsipPertahun')
        .then(years => {
          const container = document.getElementById('yearly-tabs-container');
          let html = `<span class="text-xs font-bold text-slate-500 pr-2">Filter Tahun:</span>`;
          html += `<button onclick="filterArsipYear('Semua')" id="year-btn-Semua" class="year-btn px-3.5 py-1.5 rounded-xl text-xs font-bold ${selectedYearFilter === 'Semua' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}">Semua</button>`;
          
          years.forEach(y => {
            const isAct = selectedYearFilter === y;
            html += `<button onclick="filterArsipYear('${y}')" id="year-btn-${y}" class="year-btn px-3.5 py-1.5 rounded-xl text-xs font-bold ${isAct ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}">${y}</button>`;
          });

          container.innerHTML = html;
        });
    }

    function filterArsipYear(year) {
      selectedYearFilter = year;
      document.querySelectorAll('.year-btn').forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      const act = document.getElementById(`year-btn-${year}`);
      if (act) {
        act.classList.add('bg-slate-900', 'text-white');
        act.classList.remove('bg-slate-100', 'text-slate-600');
      }
      loadArsipBulananFolders();
      loadRekapitulasiData();
    }

    function renderDashboardStats(stats) {
      document.getElementById('stat-total-masuk').innerText = stats.totalMasuk || 0;
      document.getElementById('stat-total-keluar').innerText = stats.totalKeluar || 0;
      document.getElementById('stat-tertunda').innerText = stats.registrasiTertunda || 0;
      document.getElementById('stat-total-arsip').innerText = stats.totalArsip || 0;

      const badgeSide = document.getElementById('badge-tertunda-side');
      if (stats.registrasiTertunda > 0) {
        badgeSide.innerText = stats.registrasiTertunda;
        badgeSide.classList.remove('hidden');
      } else {
        badgeSide.classList.add('hidden');
      }

      const totalMasuk = stats.totalMasuk || 1;
      const pBaru = Math.round(((stats.registrasiTertunda || 0) / totalMasuk) * 100);
      const pProses = Math.round(((stats.diproses || 0) / totalMasuk) * 100);
      const pSelesai = Math.round(((stats.selesai || 0) / totalMasuk) * 100);

      document.getElementById('prog-baru-val').innerText = `${stats.registrasiTertunda || 0} (${pBaru}%)`;
      document.getElementById('prog-baru-bar').style.width = `${pBaru}%`;

      document.getElementById('prog-proses-val').innerText = `${stats.diproses || 0} (${pProses}%)`;
      document.getElementById('prog-proses-bar').style.width = `${pProses}%`;

      document.getElementById('prog-selesai-val').innerText = `${stats.selesai || 0} (${pSelesai}%)`;
      document.getElementById('prog-selesai-bar').style.width = `${pSelesai}%`;

      const recentContainer = document.getElementById('recent-masuk-container');
      if (!stats.recentMasuk || stats.recentMasuk.length === 0) {
        recentContainer.innerHTML = `<div class="text-center py-6 text-slate-400 text-xs">Belum ada surat masuk terdaftar</div>`;
        return;
      }

      let html = '';
      stats.recentMasuk.forEach(item => {
        const badgeClass = getStatusBadgeClass(item.status);
        html += `
          <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/80 transition-all">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="font-mono text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">${item.id}</span>
                <span class="text-xs font-bold text-slate-800">${item.pengirim}</span>
              </div>
              <p class="text-xs text-slate-600 font-medium truncate max-w-md">${item.perihal}</p>
              <p class="text-[10px] text-slate-400">Tgl Surat: ${item.tglSurat} | Diterima: ${item.tglDiterima}</p>
            </div>
            <div class="text-right space-y-1">
              <span class="inline-block ${badgeClass} text-[10px] font-bold px-2.5 py-0.5 rounded-full">${item.status}</span>
              <button onclick="openDisposisiModal('${item.id}', 'MASUK', '${item.status}', '${item.disposisi || ''}')" class="block ml-auto text-[11px] font-bold text-teal-600 hover:underline">
                Disposisi
              </button>
            </div>
          </div>
        `;
      });
      recentContainer.innerHTML = html;
    }

    // --- SURAT MASUK LIST ---
    function loadSuratMasukList() {
      const kw = document.getElementById('masuk-search').value;
      const tbody = document.getElementById('table-surat-masuk');
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">Memuat data...</td></tr>`;

      callBackend('getSuratMasukList', { keyword: kw, status: filterStatusMasuk })
        .then(renderTableSuratMasuk);
    }

    function setFilterStatusMasuk(status) {
      filterStatusMasuk = status;
      document.querySelectorAll('.btn-fmasuk').forEach(btn => {
        btn.classList.remove('bg-slate-900', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-600');
      });
      const activeBtn = document.getElementById(`btn-fmasuk-${status}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-slate-900', 'text-white');
        activeBtn.classList.remove('bg-slate-100', 'text-slate-600');
      }
      loadSuratMasukList();
    }

    function renderTableSuratMasuk(data) {
      const tbody = document.getElementById('table-surat-masuk');
      if (!data || data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400 text-xs">Tidak ada data surat masuk ditemukan</td></tr>`;
        return;
      }

      let html = '';
      data.forEach(item => {
        const badgeClass = getStatusBadgeClass(item.status);
        const fileBtn = item.linkDrive 
          ? `<a href="${item.linkDrive}" target="_blank" class="p-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 inline-flex items-center" title="Buka Dokumen Google Drive"><i data-lucide="external-link" class="w-4 h-4"></i></a>` 
          : `<span class="text-slate-300 text-[10px]">-</span>`;

        html += `
          <tr class="hover:bg-slate-50/80 transition-colors">
            <td class="py-3 px-4">
              <span class="font-mono text-[11px] font-bold text-slate-900 block">${item.id}</span>
              <span class="text-[11px] text-slate-500 font-medium">${item.nomorSurat}</span>
            </td>
            <td class="py-3 px-4">
              <span class="font-bold text-slate-800 block text-xs">${item.pengirim}</span>
              <span class="text-[10px] text-slate-400">Diterima: ${item.tglDiterima}</span>
            </td>
            <td class="py-3 px-4 max-w-xs">
              <span class="font-semibold text-slate-800 block text-xs truncate">${item.perihal}</span>
              <span class="text-[11px] text-slate-500 line-clamp-1">${item.ringkasan || '-'}</span>
            </td>
            <td class="py-3 px-4">
              <span class="text-xs font-medium text-slate-700 block">${item.disposisi || '-'}</span>
              <span class="text-[10px] text-teal-600 font-bold">Sifat: ${item.sifatSurat || 'Biasa'}</span>
            </td>
            <td class="py-3 px-4">
              <span class="${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-full inline-block">${item.status}</span>
            </td>
            <td class="py-3 px-4 text-center">
              <div class="flex items-center justify-center gap-1.5">
                ${fileBtn}
                <button onclick="openDisposisiModal('${item.id}', 'MASUK', '${item.status}', '${item.disposisi || ''}')" class="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold hover:bg-slate-800 transition-all">
                  Edit Status
                </button>
              </div>
            </td>
          </tr>
        `;
      });
      tbody.innerHTML = html;
      lucide.createIcons();
    }

    // --- SURAT KELUAR LIST ---
    function loadSuratKeluarList() {
      const kw = document.getElementById('keluar-search').value;
      const tbody = document.getElementById('table-surat-keluar');
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">Memuat data...</td></tr>`;

      callBackend('getSuratKeluarList', { keyword: kw, status: filterStatusKeluar })
        .then(renderTableSuratKeluar);
    }

    function setFilterStatusKeluar(status) {
      filterStatusKeluar = status;
      document.querySelectorAll('.btn-fkeluar').forEach(btn => {
        btn.classList.remove('bg-slate-900', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-600');
      });
      const activeBtn = document.getElementById(`btn-fkeluar-${status}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-slate-900', 'text-white');
        activeBtn.classList.remove('bg-slate-100', 'text-slate-600');
      }
      loadSuratKeluarList();
    }

    function renderTableSuratKeluar(data) {
      const tbody = document.getElementById('table-surat-keluar');
      if (!data || data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400 text-xs">Tidak ada data surat keluar ditemukan</td></tr>`;
        return;
      }

      let html = '';
      data.forEach(item => {
        const fileBtn = item.linkDrive 
          ? `<a href="${item.linkDrive}" target="_blank" class="p-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 inline-flex items-center" title="Buka Dokumen Google Drive"><i data-lucide="external-link" class="w-4 h-4"></i></a>` 
          : `<span class="text-slate-300 text-[10px]">-</span>`;

        html += `
          <tr class="hover:bg-slate-50/80 transition-colors">
            <td class="py-3 px-4">
              <span class="font-mono text-[11px] font-bold text-slate-900 block">${item.id}</span>
              <span class="text-[11px] text-slate-500 font-medium">${item.nomorSurat}</span>
            </td>
            <td class="py-3 px-4">
              <span class="font-bold text-slate-800 block text-xs">${item.penerima}</span>
              <span class="text-[10px] text-slate-400">Dikirim: ${item.tglDikirim}</span>
            </td>
            <td class="py-3 px-4 max-w-xs">
              <span class="font-semibold text-slate-800 block text-xs truncate">${item.perihal}</span>
              <span class="text-[11px] text-slate-500 line-clamp-1">${item.ringkasan || '-'}</span>
            </td>
            <td class="py-3 px-4">
              <span class="text-xs font-medium text-slate-700 block">${item.penandatangan || '-'}</span>
            </td>
            <td class="py-3 px-4">
              <span class="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold px-2.5 py-1 rounded-full inline-block">${item.status}</span>
            </td>
            <td class="py-3 px-4 text-center">
              ${fileBtn}
            </td>
          </tr>
        `;
      });
      tbody.innerHTML = html;
      lucide.createIcons();
    }

    // --- FORM REGISTRASI SURAT LOGIC ---
    function setRegType(type) {
      document.getElementById('form-tipe-surat').value = type;
      const btnMasuk = document.getElementById('btn-regtype-masuk');
      const btnKeluar = document.getElementById('btn-regtype-keluar');

      if (type === 'MASUK') {
        btnMasuk.className = "py-2.5 rounded-lg bg-teal-600 text-white shadow-sm transition-all flex items-center justify-center gap-2";
        btnKeluar.className = "py-2.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2";
        document.getElementById('lbl-tgl-proses').innerHTML = `Tanggal Diterima <span class="text-rose-500">*</span>`;
        document.getElementById('lbl-pihak-pihak').innerHTML = `Pengirim (Instansi/Perorangan) <span class="text-rose-500">*</span>`;
        document.getElementById('lbl-tujuan-pihak').innerText = `Disposisi / Tujuan Unit Kerja`;
      } else {
        btnKeluar.className = "py-2.5 rounded-lg bg-slate-900 text-white shadow-sm transition-all flex items-center justify-center gap-2";
        btnMasuk.className = "py-2.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2";
        document.getElementById('lbl-tgl-proses').innerHTML = `Tanggal Dikirim <span class="text-rose-500">*</span>`;
        document.getElementById('lbl-pihak-pihak').innerHTML = `Penerima Surat (Tujuan Outgoing) <span class="text-rose-500">*</span>`;
        document.getElementById('lbl-tujuan-pihak').innerText = `Penandatangan Dokumen`;
      }
    }

    function handleFileSelected(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        selectedFileBase64 = evt.target.result;
        selectedFileInfo = {
          name: file.name,
          size: file.size,
          mimeType: file.type
        };

        document.getElementById('upload-placeholder').classList.add('hidden');
        document.getElementById('upload-preview').classList.remove('hidden');
        document.getElementById('file-name-label').innerText = file.name;
        document.getElementById('file-size-label').innerText = (file.size / 1024).toFixed(1) + " KB";
      };
      reader.readAsDataURL(file);
    }

    function clearSelectedFile(e) {
      if (e) e.stopPropagation();
      selectedFileBase64 = null;
      selectedFileInfo = null;
      document.getElementById('reg-file').value = '';
      document.getElementById('upload-placeholder').classList.remove('hidden');
      document.getElementById('upload-preview').classList.add('hidden');
    }

    function submitFormSurat(e) {
      e.preventDefault();
      if (!isAdminLoggedIn) {
        openLoginAdminModal();
        return;
      }

      const btnSubmit = document.getElementById('btn-submit-form');
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Menyimpan...`;

      const type = document.getElementById('form-tipe-surat').value;
      const formData = {
        nomorSurat: document.getElementById('reg-no-surat').value,
        sifatSurat: document.getElementById('reg-sifat').value,
        tglSurat: document.getElementById('reg-tgl-surat').value,
        perihal: document.getElementById('reg-perihal').value,
        ringkasan: document.getElementById('reg-ringkasan').value
      };

      if (type === 'MASUK') {
        formData.tglDiterima = document.getElementById('reg-tgl-proses').value;
        formData.pengirim = document.getElementById('reg-pihak').value;
        formData.disposisi = document.getElementById('reg-tujuan').value;
        formData.status = 'Baru';
      } else {
        formData.tglDikirim = document.getElementById('reg-tgl-proses').value;
        formData.penerima = document.getElementById('reg-pihak').value;
        formData.penandatangan = document.getElementById('reg-tujuan').value;
        formData.status = 'Tersalurkan';
      }

      const fileObj = selectedFileInfo ? {
        name: selectedFileInfo.name,
        mimeType: selectedFileInfo.mimeType,
        base64: selectedFileBase64
      } : null;

      const actionName = type === 'MASUK' ? 'saveSuratMasuk' : 'saveSuratKeluar';

      if (isDemoMode) {
        const ym = (formData.tglDiterima || formData.tglDikirim).substring(0, 7);
        if (type === 'MASUK') {
          mockSuratMasuk.unshift({
            id: `SM-${ym.replace('-','')}-00${mockSuratMasuk.length+1}`,
            ...formData,
            linkDrive: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ",
            folderBulan: ym
          });
        } else {
          mockSuratKeluar.unshift({
            id: `SK-${ym.replace('-','')}-00${mockSuratKeluar.length+1}`,
            ...formData,
            linkDrive: "https://drive.google.com/drive/folders/1H8_QF4GGc8C6-E9OEg-gKXHf3MFPAhRJ",
            folderBulan: ym
          });
        }
        alert(`Berhasil mendaftarkan ${type === 'MASUK' ? 'Surat Masuk' : 'Surat Keluar'} baru!`);
        document.getElementById('form-surat').reset();
        clearSelectedFile(e);
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Simpan & Simpan Arsip`;
        refreshAllData();
        switchTab(type === 'MASUK' ? 'surat-masuk' : 'surat-keluar');
      } else {
        callBackend(actionName, { formData: formData, fileObj: fileObj })
          .then(res => {
            alert(res.message || "Berhasil disimpan!");
            document.getElementById('form-surat').reset();
            clearSelectedFile(e);
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Simpan & Simpan Arsip`;
            refreshAllData();
            switchTab(type === 'MASUK' ? 'surat-masuk' : 'surat-keluar');
          })
          .catch(err => {
            alert("Gagal menyimpan: " + err);
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Simpan & Simpan Arsip`;
          });
      }
    }

    // --- ARSIP BULANAN & REKAPITULASI LOGIC ---
    function loadArsipBulananFolders() {
      const container = document.getElementById('grid-folder-bulanan');
      container.innerHTML = `<div class="col-span-full text-center py-6 text-slate-400 text-xs">Memuat folder...</div>`;

      callBackend('getArsipBulanan', { year: selectedYearFilter })
        .then(renderFolderGrid);
    }

    function renderFolderGrid(list) {
      const container = document.getElementById('grid-folder-bulanan');
      const selectMonth = document.getElementById('rekap-month-select');

      if (!list || list.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-6 text-slate-400 text-xs">Belum ada folder arsip bulanan</div>`;
        return;
      }

      let gridHtml = '';
      let selectHtml = `<option value="Semua">Semua Periode</option>`;

      list.forEach(f => {
        gridHtml += `
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:border-teal-400 transition-all space-y-3">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <i data-lucide="folder" class="w-5 h-5"></i>
              </div>
              <span class="text-[11px] font-bold text-slate-400">${f.yearMonth}</span>
            </div>
            <div>
              <h5 class="font-bold text-slate-900 text-sm">${f.label}</h5>
              <p class="text-xs text-slate-500 font-medium">${f.totalCount} Dokumen Digital</p>
            </div>
            <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-600">
              <span>SM: ${f.suratMasukCount} | SK: ${f.suratKeluarCount}</span>
              <a href="${f.driveUrl}" target="_blank" class="text-teal-600 hover:underline flex items-center gap-1 font-bold">
                Drive <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            </div>
          </div>
        `;
        selectHtml += `<option value="${f.yearMonth}">${f.label}</option>`;
      });

      container.innerHTML = gridHtml;
      selectMonth.innerHTML = selectHtml;
      lucide.createIcons();
    }

    function loadRekapitulasiData() {
      const ym = document.getElementById('rekap-month-select').value;
      const targetPeriod = ym !== "Semua" ? ym : selectedYearFilter;
      const tbody = document.getElementById('table-rekapitulasi');
      tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400">Memuat rekapitulasi...</td></tr>`;

      callBackend('getRekapitulasiData', { periodYearMonth: targetPeriod })
        .then(renderTableRekapitulasi);
    }

    function renderTableRekapitulasi(data) {
      const tbody = document.getElementById('table-rekapitulasi');
      document.getElementById('rekap-total-masuk').innerText = data.totalMasuk || 0;
      document.getElementById('rekap-total-keluar').innerText = data.totalKeluar || 0;

      let html = '';
      const combined = [];
      (data.suratMasuk || []).forEach(x => combined.push({ ...x, typeCat: 'MASUK' }));
      (data.suratKeluar || []).forEach(x => combined.push({ ...x, typeCat: 'KELUAR' }));

      if (combined.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400 text-xs">Data rekapitulasi kosong</td></tr>`;
        return;
      }

      combined.forEach(item => {
        const isMasuk = item.typeCat === 'MASUK';
        const typeBadge = isMasuk 
          ? `<span class="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded">Masuk</span>`
          : `<span class="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded">Keluar</span>`;
        
        const pihakLabel = isMasuk ? item.pengirim : item.penerima;
        const dateLabel = isMasuk ? item.tglDiterima : item.tglDikirim;
        const fileBtn = item.linkDrive 
          ? `<a href="${item.linkDrive}" target="_blank" class="text-teal-600 hover:underline font-bold text-[11px]">Drive Link</a>` 
          : `<span class="text-slate-300">-</span>`;

        html += `
          <tr class="hover:bg-slate-50">
            <td class="py-2.5 px-3">${typeBadge}</td>
            <td class="py-2.5 px-3 font-mono font-bold text-slate-900">${item.id}<br><span class="text-slate-500 font-normal text-[10px]">${item.nomorSurat}</span></td>
            <td class="py-2.5 px-3 text-slate-600">${dateLabel}</td>
            <td class="py-2.5 px-3 font-semibold text-slate-800">${pihakLabel}</td>
            <td class="py-2.5 px-3 text-slate-700 max-w-xs truncate">${item.perihal}</td>
            <td class="py-2.5 px-3"><span class="font-bold text-slate-700">${item.status}</span></td>
            <td class="py-2.5 px-3 text-center">${fileBtn}</td>
          </tr>
        `;
      });

      tbody.innerHTML = html;
    }

    // --- MODAL DISPOSISI LOGIC ---
    function openDisposisiModal(id, type, status, disposisi) {
      if (!isAdminLoggedIn) {
        openLoginAdminModal();
        return;
      }
      document.getElementById('modal-surat-id').value = id;
      document.getElementById('modal-surat-type').value = type;
      document.getElementById('modal-disp-id').value = id;
      document.getElementById('modal-disp-status').value = status || 'Baru';
      document.getElementById('modal-disp-note').value = disposisi || '';

      document.getElementById('modal-disposisi').classList.remove('hidden');
    }

    function closeDisposisiModal() {
      document.getElementById('modal-disposisi').classList.add('hidden');
    }

    function submitUpdateDisposisi() {
      if (!isAdminLoggedIn) return;

      const id = document.getElementById('modal-surat-id').value;
      const type = document.getElementById('modal-surat-type').value;
      const newStatus = document.getElementById('modal-disp-status').value;
      const newDisposisi = document.getElementById('modal-disp-note').value;

      callBackend('updateStatusSurat', { type: type, id: id, newStatus: newStatus, newDisposisi: newDisposisi })
        .then(res => {
          alert(res.message || "Status berhasil diperbarui!");
          closeDisposisiModal();
          refreshAllData();
          if (currentTab === 'surat-masuk') loadSuratMasukList();
        });
    }

    // --- API CONFIG MODAL ---
    function openApiConfigModal() {
      if (!isAdminLoggedIn) {
        openLoginAdminModal();
        return;
      }
      document.getElementById('input-gas-api-url').value = GAS_API_URL;
      document.getElementById('modal-api-config').classList.remove('hidden');
    }

    function closeApiConfigModal() {
      document.getElementById('modal-api-config').classList.add('hidden');
    }

    function saveApiConfig() {
      const url = document.getElementById('input-gas-api-url').value.trim();
      GAS_API_URL = url;
      localStorage.setItem("AKSARA_GAS_API_URL", url);
      closeApiConfigModal();
      initBackendConnection();
      refreshAllData();
    }

    function clearApiConfig() {
      GAS_API_URL = "";
      localStorage.removeItem("AKSARA_GAS_API_URL");
      document.getElementById('input-gas-api-url').value = "";
      closeApiConfigModal();
      initBackendConnection();
      refreshAllData();
    }

    // --- GLOBAL SEARCH ---
    function handleGlobalSearch(e) {
      if (e.key === 'Enter' || e.type === 'input') {
        const val = e.target.value;
        if (currentTab === 'beranda-publik') {
          const heroInput = document.getElementById('public-search-hero');
          if (heroInput) heroInput.value = val;
          loadGroupedPublicSurat();
        } else {
          switchTab('surat-masuk');
          document.getElementById('masuk-search').value = val;
          loadSuratMasukList();
        }
      }
    }

    function getStatusBadgeClass(status) {
      switch (status) {
        case 'Baru':
          return 'bg-sky-50 text-sky-700 border border-sky-200';
        case 'Diproses':
          return 'bg-amber-50 text-amber-700 border border-amber-200';
        case 'Selesai':
          return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
        default:
          return 'bg-slate-100 text-slate-700 border border-slate-200';
      }
    }
  </script>
</body>
</html>
