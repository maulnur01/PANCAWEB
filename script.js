// =========================================================
//  PANCAWEB – script.js (REVISED)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // =====================================================
  //  NAVIGASI
  // =====================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  function goToSection(targetId) {
    navLinks.forEach(n => n.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add('active');
    const targetLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
    if (targetLink) targetLink.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('.main-nav').classList.remove('open');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      goToSection(link.getAttribute('data-target'));
    });
  });

  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goToSection(btn.getAttribute('data-goto')));
  });

  const logoHome = document.getElementById('logo-home');
  if (logoHome) logoHome.addEventListener('click', () => goToSection('beranda'));

  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.querySelector('.main-nav').classList.toggle('open');
    });
  }

  // =====================================================
  //  MATERI TABS
  // =====================================================
  const mtabs = document.querySelectorAll('.mtab');
  const mcontents = document.querySelectorAll('.materi-content');

  mtabs.forEach(tab => {
    tab.addEventListener('click', () => {
      mtabs.forEach(t => t.classList.remove('active'));
      mcontents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('m-' + tab.getAttribute('data-mtab'));
      if (target) target.classList.add('active');
    });
  });

  // =====================================================
  //  AUDIO helpers
  // =====================================================
  function playSound(id) {
    try {
      const a = document.getElementById(id);
      if (a) { a.currentTime = 0; a.play().catch(() => {}); }
    } catch(e) {}
  }

  // =====================================================
  //  SHUFFLE helper
  // =====================================================
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // =====================================================
  //  SILA DATA
  // =====================================================
  const SILA_DATA = [
    {
      id: 'sila1',
      label: 'Ketuhanan Yang Maha Esa',
      bunyi: 'Sila ke-1',
      img: 'https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2020/11/23/1210936319.png',
      symbol: 'Bintang Emas'
    },
    {
      id: 'sila2',
      label: 'Kemanusiaan yang Adil dan Beradab',
      bunyi: 'Sila ke-2',
      img: 'https://3.bp.blogspot.com/-PrLOmFWdfnQ/VlFpsY2InLI/AAAAAAAABNQ/sBhbEYE26zA/s1600/Rantai%2BEmas.png',
      symbol: 'Rantai Emas'
    },
    {
      id: 'sila3',
      label: 'Persatuan Indonesia',
      bunyi: 'Sila ke-3',
      img: 'https://3.bp.blogspot.com/-zOsWCYZbIew/WjQiOGrh1cI/AAAAAAAAAKw/QBVH4QJZM_YJDhGNy9JAkZsYVM9fOZYqwCEwYBhgL/s1600/Pancasila_Sila_3_pohon_beringin.png',
      symbol: 'Pohon Beringin'
    },
    {
      id: 'sila4',
      label: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan',
      bunyi: 'Sila ke-4',
      img: 'https://rumahjuara.id/assets/images/sila%204.png',
      symbol: 'Kepala Banteng'
    },
    {
      id: 'sila5',
      label: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
      bunyi: 'Sila ke-5',
      img: 'https://imgx.sonora.id/crop/0x0:0x0/700x465/photo/2023/08/31/lambang-sila-ke-5-foto-article-2-20230831011021.jpg',
      symbol: 'Padi & Kapas'
    }
  ];

  // =====================================================
  //  DATA NILAI-NILAI PANCASILA (untuk modal)
  // =====================================================
  const NILAI_DETAIL = {
    1: {
      title: 'Ketuhanan Yang Maha Esa',
      img: 'https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2020/11/23/1210936319.png',
      nilai: [
        'Percaya dan takwa kepada Tuhan Yang Maha Esa',
        'Menjalankan perintah agama masing-masing',
        'Tidak memaksakan agama kepada orang lain',
        'Menghormati kebebasan beragama orang lain',
        'Tidak mengganggu ibadah pemeluk agama lain',
        'Membina kerukunan antarumat beragama',
        'Mengembangkan toleransi antarumat beragama'
      ],
      contoh: [
        'Berdoa sebelum dan sesudah belajar',
        'Menghormati teman yang berbeda agama',
        'Tidak mengejek kepercayaan orang lain',
        'Ikut menjaga ketenangan saat orang beribadah'
      ]
    },
    2: {
      title: 'Kemanusiaan yang Adil dan Beradab',
      img: 'https://3.bp.blogspot.com/-PrLOmFWdfnQ/VlFpsY2InLI/AAAAAAAABNQ/sBhbEYE26zA/s1600/Rantai%2BEmas.png',
      nilai: [
        'Mengakui persamaan derajat sesama manusia',
        'Saling mencintai sesama manusia',
        'Mengembangkan sikap tenggang rasa',
        'Tidak semena-mena terhadap orang lain',
        'Menjunjung tinggi nilai kemanusiaan',
        'Gemar melakukan kegiatan kemanusiaan',
        'Berani membela kebenaran dan keadilan'
      ],
      contoh: [
        'Menolong teman yang sedang kesulitan',
        'Tidak membeda-bedakan teman berdasarkan suku atau ras',
        'Sopan santun kepada guru dan orang yang lebih tua',
        'Peduli terhadap penderitaan orang lain'
      ]
    },
    3: {
      title: 'Persatuan Indonesia',
      img: 'https://3.bp.blogspot.com/-zOsWCYZbIew/WjQiOGrh1cI/AAAAAAAAAKw/QBVH4QJZM_YJDhGNy9JAkZsYVM9fOZYqwCEwYBhgL/s1600/Pancasila_Sila_3_pohon_beringin.png',
      nilai: [
        'Menempatkan persatuan bangsa di atas kepentingan pribadi',
        'Rela berkorban demi bangsa dan negara',
        'Bangga sebagai bangsa Indonesia',
        'Memajukan pergaulan demi persatuan dan kesatuan',
        'Mengembangkan rasa cinta tanah air',
        'Mengembangkan rasa kebanggaan berkebangsaan Indonesia',
        'Memelihara ketertiban dunia berdasarkan perdamaian'
      ],
      contoh: [
        'Bermain bersama tanpa membeda-bedakan suku',
        'Mengikuti upacara bendera dengan hikmat',
        'Menjaga kebersihan lingkungan bersama-sama',
        'Menghargai budaya dan kesenian daerah lain'
      ]
    },
    4: {
      title: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
      img: 'https://rumahjuara.id/assets/images/sila%204.png',
      nilai: [
        'Mengutamakan musyawarah untuk mufakat',
        'Menghormati dan menjunjung tinggi setiap keputusan yang dicapai dalam musyawarah',
        'Menerima dan melaksanakan hasil keputusan musyawarah dengan penuh tanggung jawab',
        'Tidak boleh memaksakan kehendak kepada orang lain',
        'Mengutamakan kepentingan bersama di atas kepentingan pribadi',
        'Menggunakan akal sehat dan hati nurani dalam bermusyawarah',
        'Bertanggung jawab atas keputusan yang telah diambil bersama'
      ],
      contoh: [
        'Memilih ketua kelas dengan cara musyawarah',
        'Menghormati pendapat teman dalam diskusi',
        'Aktif berpartisipasi dalam kegiatan kelas',
        'Menerima keputusan bersama meski berbeda pendapat'
      ]
    },
    5: {
      title: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
      img: 'https://imgx.sonora.id/crop/0x0:0x0/700x465/photo/2023/08/31/lambang-sila-ke-5-foto-article-2-20230831011021.jpg',
      nilai: [
        'Mengembangkan perbuatan luhur yang mencerminkan sikap dan suasana kekeluargaan',
        'Mengembangkan sikap adil terhadap sesama',
        'Tidak melakukan perbuatan yang merugikan kepentingan umum',
        'Suka memberi pertolongan kepada orang lain',
        'Suka bekerja keras',
        'Menghargai hasil karya orang lain',
        'Bersama-sama berusaha mewujudkan kemajuan yang merata'
      ],
      contoh: [
        'Berbagi dengan teman yang membutuhkan',
        'Tidak pilih kasih dalam berteman',
        'Rajin belajar dan bekerja keras',
        'Menghargai karya dan hasil kerja orang lain'
      ]
    }
  };

  // =====================================================
  //  MODAL NILAI-NILAI PANCASILA
  // =====================================================
  const nilaiModal = document.getElementById('nilai-modal');
  const nilaiModalClose = document.getElementById('nilai-modal-close');

  document.querySelectorAll('.nilai-clickable').forEach(card => {
    card.addEventListener('click', () => {
      const silaNum = parseInt(card.getAttribute('data-sila'));
      const data = NILAI_DETAIL[silaNum];
      if (!data) return;

      document.getElementById('modal-sila-img').src = data.img;
      document.getElementById('modal-sila-img').alt = 'Sila ' + silaNum;
      document.getElementById('modal-sila-num').textContent = 'Sila ke-' + silaNum;
      document.getElementById('modal-sila-title').textContent = data.title;

      const body = document.getElementById('modal-nilai-body');
      body.innerHTML = `
        <div class="modal-section-title">✦ Butir-Butir Nilai Sila ke-${silaNum}</div>
        <ul class="modal-nilai-list">
          ${data.nilai.map(n => `<li>${n}</li>`).join('')}
        </ul>
        <div class="modal-section-title">✦ Contoh Penerapan di Kehidupan Sehari-hari</div>
        <ul class="modal-nilai-list">
          ${data.contoh.map(c => `<li>${c}</li>`).join('')}
        </ul>
      `;

      nilaiModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  if (nilaiModalClose) {
    nilaiModalClose.addEventListener('click', () => {
      nilaiModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  if (nilaiModal) {
    nilaiModal.addEventListener('click', (e) => {
      if (e.target === nilaiModal) {
        nilaiModal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }


  let puzzleState = {
    matched: 0,
    score: 0,
    selectedLambang: null,      // id of currently clicked lambang
    shuffledLambang: []
  };

  const btnStartPuzzle = document.getElementById('btn-start-puzzle');
  const btnResetPuzzle = document.getElementById('btn-reset-puzzle');
  if (btnStartPuzzle) btnStartPuzzle.addEventListener('click', initPuzzle);
  if (btnResetPuzzle) btnResetPuzzle.addEventListener('click', initPuzzle);

  function initPuzzle() {
    document.getElementById('puzzle-intro').style.display = 'none';
    document.getElementById('puzzle-game').style.display = 'block';
    document.getElementById('btn-reset-puzzle').style.display = 'none';
    document.getElementById('puzzle-message').textContent = '';

    puzzleState.matched = 0;
    puzzleState.score = 0;
    puzzleState.selectedLambang = null;
    puzzleState.shuffledLambang = shuffle([...SILA_DATA]);

    document.getElementById('puzzle-score').textContent = '0';
    document.getElementById('puzzle-progress-text').textContent = '0/5 dicocokkan';

    renderPuzzleBoard();
  }

  function renderPuzzleBoard() {
    const leftCol = document.getElementById('puzzle-left-col');
    const rightCol = document.getElementById('puzzle-right-col');
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    // Left: sila names in order (1–5)
    SILA_DATA.forEach(sila => {
      const card = document.createElement('div');
      card.className = 'puzzle-sila-card';
      card.dataset.silaId = sila.id;
      card.innerHTML = `
        <div class="puzzle-sila-num">${sila.bunyi.replace('Sila ke-','')}</div>
        <div class="puzzle-sila-label">${sila.label}</div>
        <div class="puzzle-sila-drop" id="drop-${sila.id}" data-sila-id="${sila.id}">
          <span class="drop-placeholder" style="font-size:1.4rem;color:#ccc;">?</span>
        </div>
      `;
      leftCol.appendChild(card);

      // Drop zone events
      const dropZone = card.querySelector('.puzzle-sila-drop');

      dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
      });
      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
      });
      dropZone.addEventListener('drop', e => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const draggedId = e.dataTransfer.getData('text/plain');
        handleMatch(sila.id, draggedId, dropZone, card);
      });

      // Click-to-match: clicking a drop zone while a lambang is selected
      dropZone.addEventListener('click', () => {
        if (puzzleState.selectedLambang && !dropZone.classList.contains('filled')) {
          handleMatch(sila.id, puzzleState.selectedLambang, dropZone, card);
        }
      });
    });

    // Right: shuffled lambang cards
    puzzleState.shuffledLambang.forEach(sila => {
      const card = document.createElement('div');
      card.className = 'puzzle-lambang-card';
      card.draggable = true;
      card.dataset.lambangId = sila.id;
      card.id = `lambang-${sila.id}`;
      card.innerHTML = `
        <img src="${sila.img}"
             alt="${sila.symbol}"
             onerror="this.style.background='#eee';this.alt='${sila.symbol}'"
             style="width:52px;height:52px;object-fit:contain;">
        <div class="puzzle-lambang-name">${sila.symbol}</div>
      `;

      card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', sila.id);
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });

      // Click-to-select for non-drag interaction
      card.addEventListener('click', () => {
        if (card.classList.contains('used')) return;

        // Deselect if already selected
        if (puzzleState.selectedLambang === sila.id) {
          puzzleState.selectedLambang = null;
          card.classList.remove('selected');
          return;
        }

        // Deselect previous
        document.querySelectorAll('.puzzle-lambang-card.selected').forEach(c => c.classList.remove('selected'));
        puzzleState.selectedLambang = sila.id;
        card.classList.add('selected');

        const msgEl = document.getElementById('puzzle-message');
        msgEl.textContent = `"${sila.symbol}" dipilih. Klik kotak tanda tanya yang sesuai!`;
        msgEl.style.color = 'var(--gold)';
      });

      rightCol.appendChild(card);
    });
  }

  function handleMatch(silaId, lambangId, dropZone, silaCard) {
    if (dropZone.classList.contains('filled')) return;

    const lambangCard = document.getElementById(`lambang-${lambangId}`);
    const msgEl = document.getElementById('puzzle-message');

    const isCorrect = silaId === lambangId;
    const matchedSila = SILA_DATA.find(s => s.id === lambangId);

    // Deselect
    puzzleState.selectedLambang = null;
    document.querySelectorAll('.puzzle-lambang-card.selected').forEach(c => c.classList.remove('selected'));

    if (isCorrect) {
      // Fill drop zone with image
      dropZone.classList.remove('drag-over');
      dropZone.classList.add('filled');
      dropZone.innerHTML = `<img src="${matchedSila.img}" alt="${matchedSila.symbol}" style="width:48px;height:48px;object-fit:contain;" onerror="this.style.background='#eee'">`;

      // Mark sila card as matched
      silaCard.classList.add('matched');

      // Mark lambang as used
      if (lambangCard) lambangCard.classList.add('used');

      puzzleState.matched++;
      puzzleState.score++;
      document.getElementById('puzzle-score').textContent = puzzleState.score;
      document.getElementById('puzzle-progress-text').textContent = `${puzzleState.matched}/5 dicocokkan`;

      msgEl.textContent = `Benar! ${matchedSila.symbol} sesuai dengan ${matchedSila.label}.`;
      msgEl.style.color = 'var(--green-ok)';
      playSound('snd-correct');

      if (puzzleState.matched >= 5) {
        setTimeout(() => {
          msgEl.textContent = `Selesai! Semua sila berhasil dicocokkan dengan benar!`;
          msgEl.style.color = 'var(--green-ok)';
          document.getElementById('btn-reset-puzzle').style.display = 'inline-block';
          playSound('snd-complete');
        }, 600);
      }
    } else {
      // Wrong match — animate the drop zone
      dropZone.classList.add('wrong-drop');
      msgEl.textContent = `Belum tepat! Coba lagi.`;
      msgEl.style.color = 'var(--red)';
      playSound('snd-wrong');
      setTimeout(() => dropZone.classList.remove('wrong-drop'), 450);
    }
  }

  // =====================================================
  //  MINI GAME – Katak Pancasila (3 nyawa)
  // =====================================================
  const GAME_QUESTIONS = [
    { q: "Sila ke-1 Pancasila adalah...", opts: ["Persatuan Indonesia","Ketuhanan Yang Maha Esa","Keadilan Sosial","Kerakyatan"], ans: 1 },
    { q: "Lambang sila ke-1 adalah...", opts: ["Rantai","Pohon Beringin","Bintang Emas","Kepala Banteng"], ans: 2 },
    { q: "Lambang sila ke-2 adalah...", opts: ["Bintang","Rantai Emas","Padi Kapas","Banteng"], ans: 1 },
    { q: "Lambang sila ke-3 (Persatuan Indonesia) adalah...", opts: ["Padi Kapas","Bintang","Banteng","Pohon Beringin"], ans: 3 },
    { q: "Lambang sila ke-4 adalah...", opts: ["Kepala Banteng","Bintang","Rantai","Pohon Beringin"], ans: 0 },
    { q: "Lambang sila ke-5 (Keadilan Sosial) adalah...", opts: ["Banteng","Rantai","Padi dan Kapas","Bintang"], ans: 2 },
    { q: "Nilai musyawarah mufakat ada pada sila ke...", opts: ["2","3","4","5"], ans: 2 },
    { q: "Menghormati teman yang berbeda agama adalah pengamalan sila ke...", opts: ["1","2","3","4"], ans: 0 },
    { q: "BPUPKI dibentuk oleh pemerintah...", opts: ["Belanda","Indonesia","Jepang","Inggris"], ans: 2 },
    { q: "Pancasila disahkan sebagai dasar negara pada tanggal...", opts: ["1 Juni 1945","17 Agustus 1945","18 Agustus 1945","22 Juni 1945"], ans: 2 }
  ];

  const MAX_LIVES = 3;

  let gameState = {
    questions: [],
    current: 0,
    score: 0,
    lives: MAX_LIVES,
    active: false
  };

  const btnStartGame = document.getElementById('btn-start-game');
  const btnRetryGame = document.getElementById('btn-retry-game');

  if (btnStartGame) btnStartGame.addEventListener('click', startGame);
  if (btnRetryGame) btnRetryGame.addEventListener('click', startGame);

  function startGame() {
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-play').style.display = 'block';

    gameState.questions = shuffle(GAME_QUESTIONS);
    gameState.current = 0;
    gameState.score = 0;
    gameState.lives = MAX_LIVES;
    gameState.active = true;

    updateGameHUD();
    renderGameQuestion();
  }

  function updateGameHUD() {
    const heartsEl = document.getElementById('hud-lives');
    let hearts = '';
    for (let i = 0; i < MAX_LIVES; i++) {
      hearts += i < gameState.lives ? '❤️' : '🖤';
    }
    heartsEl.textContent = hearts;
    document.getElementById('game-score').textContent = gameState.score;
    document.getElementById('game-q-counter').textContent = `Pertanyaan: ${gameState.current + 1} / ${gameState.questions.length}`;
  }

  function renderGameQuestion() {
    if (gameState.current >= gameState.questions.length) {
      endGame(true);
      return;
    }

    const q = gameState.questions[gameState.current];
    document.getElementById('game-question-text').textContent = q.q;

    const lilyPads = document.getElementById('lily-pads');
    lilyPads.innerHTML = '';

    q.opts.forEach((opt, i) => {
      const pad = document.createElement('div');
      pad.className = 'lily-pad';
      pad.innerHTML = `
        <div class="pad-leaf" id="pad-${i}">
          <div class="pad-letter">${String.fromCharCode(65 + i)}</div>
          <div class="pad-text">${opt}</div>
        </div>
      `;
      pad.addEventListener('click', () => {
        if (!gameState.active) return;
        handleGameAnswer(i, q.ans);
      });
      lilyPads.appendChild(pad);
    });

    const frogWrap = document.getElementById('frog-wrap');
    frogWrap.style.left = '50%';
    frogWrap.style.bottom = '110px';
    frogWrap.style.transform = 'translateX(-50%)';
    frogWrap.style.transition = 'all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
    const frog = document.getElementById('frog');
    frog.textContent = '🐸';
    frog.className = 'frog';
  }

  function handleGameAnswer(chosen, correct) {
    if (!gameState.active) return;
    gameState.active = false;

    const isCorrect = chosen === correct;
    const pads = document.querySelectorAll('.pad-leaf');
    const lilyPads = document.querySelectorAll('.lily-pad');
    const frogWrap = document.getElementById('frog-wrap');

    pads[correct].classList.add('correct-pad');
    if (!isCorrect) pads[chosen].classList.add('wrong-pad');

    const padRect = lilyPads[chosen].getBoundingClientRect();
    const sceneRect = document.getElementById('pond-scene').getBoundingClientRect();
    const targetLeft = padRect.left - sceneRect.left + padRect.width / 2;

    frogWrap.style.left = targetLeft + 'px';
    frogWrap.style.transform = 'translateX(-50%)';

    const frog = document.getElementById('frog');
    frog.classList.add('jumping');

    setTimeout(() => {
      frog.classList.remove('jumping');
      if (isCorrect) {
        gameState.score++;
        playSound('snd-correct');
      } else {
        gameState.lives--;
        frog.classList.add('sinking');
        playSound('snd-wrong');
      }

      updateGameHUD();

      setTimeout(() => {
        if (gameState.lives <= 0) {
          endGame(false);
        } else {
          gameState.current++;
          gameState.active = true;
          renderGameQuestion();
        }
      }, isCorrect ? 800 : 1300);
    }, 600);
  }

  function endGame(won) {
    document.getElementById('game-play').style.display = 'none';
    document.getElementById('game-over').style.display = 'block';

    const icon = won ? '🏆' : '💦';
    const title = won ? 'Selamat, Katak Selamat!' : 'Game Over!';
    const msg = won
      ? `Kamu menjawab ${gameState.score} dari ${gameState.questions.length} soal dengan benar!`
      : `Katak tenggelam! Skor akhir: ${gameState.score}. Coba lagi!`;

    document.getElementById('game-over-icon').textContent = icon;
    document.getElementById('game-over-title').textContent = title;
    document.getElementById('game-final-score').textContent = gameState.score;
    document.getElementById('game-over-msg').textContent = msg;
    playSound(won ? 'snd-complete' : 'snd-wrong');
  }

  // =====================================================
  //  EVALUASI – 20 soal acak, timer 30 menit
  //  Jawaban TIDAK langsung ditampilkan, dibahas di akhir
  // =====================================================
  const ALL_QUESTIONS = [
    { q: "Pancasila disahkan sebagai dasar negara pada tanggal...", opts: ["1 Juni 1945","17 Agustus 1945","18 Agustus 1945","22 Juni 1945"], ans: 2 },
    { q: "Kata 'Pancasila' berasal dari bahasa...", opts: ["Jawa","Melayu","Sanskerta","Belanda"], ans: 2 },
    { q: "Siapakah tokoh yang pertama kali mencetuskan istilah 'Pancasila'?", opts: ["Moh. Hatta","Moh. Yamin","Soepomo","Ir. Soekarno"], ans: 3 },
    { q: "BPUPKI dibentuk oleh...", opts: ["Pemerintah Indonesia","Pemerintah Belanda","Pemerintah Jepang","PBB"], ans: 2 },
    { q: "Sidang pertama BPUPKI dilaksanakan pada...", opts: ["29 Mei – 1 Juni 1945","10–17 Juli 1945","1–18 Agustus 1945","22 Juni 1945"], ans: 0 },
    { q: "Piagam Jakarta dirumuskan oleh Panitia Sembilan pada tanggal...", opts: ["1 Juni 1945","22 Juni 1945","17 Agustus 1945","18 Agustus 1945"], ans: 1 },
    { q: "Badan yang mengesahkan UUD 1945 dan Pancasila adalah...", opts: ["BPUPKI","Panitia Sembilan","PPKI","DPR-RI"], ans: 2 },
    { q: "Tanggal 1 Juni diperingati sebagai...", opts: ["Hari Kemerdekaan Indonesia","Hari Lahir Pancasila","Hari Kebangkitan Nasional","Hari Pahlawan"], ans: 1 },
    { q: "Lambang sila ke-1 (Ketuhanan Yang Maha Esa) adalah...", opts: ["Rantai","Pohon Beringin","Kepala Banteng","Bintang"], ans: 3 },
    { q: "Lambang sila ke-2 adalah Rantai. Gelang persegi pada rantai melambangkan...", opts: ["Perempuan","Laki-laki","Keadilan","Persatuan"], ans: 1 },
    { q: "Pohon Beringin sebagai lambang sila ke-3 melambangkan...", opts: ["Kemakmuran","Keadilan","Persatuan dan kesatuan Indonesia","Ketuhanan"], ans: 2 },
    { q: "Kepala Banteng sebagai lambang sila ke-4 menggambarkan...", opts: ["Keganasan","Makhluk sosial yang bermusyawarah","Kekuatan militer","Kemakmuran"], ans: 1 },
    { q: "Padi dan Kapas sebagai lambang sila ke-5 mencerminkan...", opts: ["Ketuhanan","Musyawarah mufakat","Kemakmuran dan keadilan sosial","Persatuan"], ans: 2 },
    { q: "Nilai yang terkandung dalam sila ke-1 Pancasila adalah...", opts: ["Nilai Kemanusiaan","Nilai Ketuhanan","Nilai Persatuan","Nilai Keadilan"], ans: 1 },
    { q: "Sila ke-2 Pancasila mengandung nilai...", opts: ["Ketuhanan","Kerakyatan","Kemanusiaan","Keadilan"], ans: 2 },
    { q: "Mengutamakan kepentingan bangsa di atas kepentingan pribadi merupakan pengamalan nilai...", opts: ["Sila ke-1","Sila ke-2","Sila ke-3","Sila ke-4"], ans: 2 },
    { q: "Musyawarah untuk mencapai mufakat merupakan cerminan sila ke...", opts: ["2","3","4","5"], ans: 2 },
    { q: "Menghormati teman yang berbeda agama merupakan penerapan sila ke...", opts: ["1","2","3","4"], ans: 0 },
    { q: "Memilih ketua kelas dengan cara musyawarah merupakan pengamalan nilai sila...", opts: ["Ke-2","Ke-3","Ke-4","Ke-5"], ans: 2 },
    { q: "Seorang siswa membantu teman yang sedang kesusahan. Ini mencerminkan nilai sila...", opts: ["Ke-1","Ke-2","Ke-3","Ke-5"], ans: 1 }
  ];

  let evalState = {
    questions: [],
    current: 0,
    score: 0,
    answered: [],
    timer: null,
    timeLeft: 1800
  };

  const btnStartEval = document.getElementById('btn-start-eval');
  const btnNextQ = document.getElementById('btn-next-q');
  const btnRetry = document.getElementById('btn-retry');
  const btnShowReview = document.getElementById('btn-show-review');

  if (btnStartEval) btnStartEval.addEventListener('click', startEval);
  if (btnNextQ) btnNextQ.addEventListener('click', nextQuestion);
  if (btnRetry) btnRetry.addEventListener('click', () => {
    document.getElementById('eval-result').style.display = 'none';
    document.getElementById('eval-review').style.display = 'none';
    document.getElementById('eval-intro').style.display = 'block';
    clearInterval(evalState.timer);
  });
  if (btnShowReview) btnShowReview.addEventListener('click', showReview);

  function startEval() {
    document.getElementById('eval-intro').style.display = 'none';
    document.getElementById('eval-game').style.display = 'block';

    evalState.questions = shuffle(ALL_QUESTIONS).slice(0, 20);
    evalState.current = 0;
    evalState.score = 0;
    evalState.answered = [];
    evalState.timeLeft = 1800;

    renderQuestion();
    startTimer();
  }

  function startTimer() {
    clearInterval(evalState.timer);
    evalState.timer = setInterval(() => {
      evalState.timeLeft--;
      updateTimerDisplay();
      if (evalState.timeLeft <= 0) {
        clearInterval(evalState.timer);
        finishEval();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(evalState.timeLeft / 60).toString().padStart(2, '0');
    const s = (evalState.timeLeft % 60).toString().padStart(2, '0');
    const el = document.getElementById('timer-display');
    if (el) {
      el.textContent = `${m}:${s}`;
      el.style.color = evalState.timeLeft <= 120 ? '#E74C3C' : '';
    }
  }

  function renderQuestion() {
    const q = evalState.questions[evalState.current];
    document.getElementById('q-current').textContent = evalState.current + 1;
    document.getElementById('eval-progress-fill').style.width = ((evalState.current / 20) * 100) + '%';
    document.getElementById('quiz-question').textContent = `${evalState.current + 1}. ${q.q}`;
    document.getElementById('btn-next-q').style.display = 'none';

    const optsEl = document.getElementById('quiz-options');
    optsEl.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
      btn.addEventListener('click', () => selectAnswer(i, btn));
      optsEl.appendChild(btn);
    });
  }

  function selectAnswer(idx, clickedBtn) {
    const q = evalState.questions[evalState.current];
    const allBtns = document.querySelectorAll('.quiz-opt');

    // Prevent double answering
    allBtns.forEach(b => {
      if (b.disabled) return;
      b.disabled = true;
    });

    const isCorrect = idx === q.ans;

    // Only visually mark the selected option (no reveal of correct/wrong)
    clickedBtn.classList.add('selected-opt');

    if (isCorrect) {
      evalState.score++;
      playSound('snd-correct');
    } else {
      playSound('snd-wrong');
    }

    evalState.answered.push({
      q: q.q,
      opts: q.opts,
      yourAns: idx,
      correctAns: q.ans,
      correct: isCorrect
    });

    document.getElementById('btn-next-q').style.display = 'inline-block';
  }

  function nextQuestion() {
    evalState.current++;
    if (evalState.current >= 20) {
      clearInterval(evalState.timer);
      finishEval();
    } else {
      renderQuestion();
    }
  }

  function finishEval() {
    document.getElementById('eval-game').style.display = 'none';
    document.getElementById('eval-result').style.display = 'block';

    const score = evalState.score;
    const pct = Math.round((score / 20) * 100);
    document.getElementById('result-score').textContent = `${score} / 20`;

    let icon = '🏆', title = 'Luar Biasa!', msg = '';
    if (pct >= 90) { icon = '🏆'; title = 'Sempurna!'; msg = 'Kamu memahami Pancasila dengan sangat baik! Pertahankan terus!'; }
    else if (pct >= 75) { icon = '🎉'; title = 'Bagus Sekali!'; msg = 'Pemahamanmu tentang Pancasila sudah baik. Terus tingkatkan!'; }
    else if (pct >= 55) { icon = '📚'; title = 'Lumayan!'; msg = 'Kamu sudah cukup paham. Pelajari lagi materi yang belum dikuasai!'; }
    else { icon = '💡'; title = 'Tetap Semangat!'; msg = 'Jangan menyerah! Pelajari kembali materinya dan coba lagi!'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-msg').textContent = msg;
    document.getElementById('result-detail').textContent = `Nilai: ${pct} | Benar: ${score} | Salah: ${20 - score}`;
    document.getElementById('eval-progress-fill').style.width = '100%';
    playSound(pct >= 75 ? 'snd-complete' : 'snd-correct');
  }

  function showReview() {
    const reviewDiv = document.getElementById('eval-review');
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    evalState.answered.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'review-item' + (item.correct ? '' : ' wrong-review');
      div.innerHTML = `
        <div class="r-num">Soal ${i + 1}</div>
        <div class="r-q">${item.q}</div>
        <div class="r-your ${item.correct ? '' : 'r-wrong-mark'}">
          ${item.correct ? '✅' : '❌'} Jawabanmu: <strong>${String.fromCharCode(65 + item.yourAns)}. ${item.opts[item.yourAns]}</strong>
        </div>
        ${!item.correct ? `<div class="r-correct">✅ Jawaban Benar: <strong>${String.fromCharCode(65 + item.correctAns)}. ${item.opts[item.correctAns]}</strong></div>` : ''}
      `;
      reviewList.appendChild(div);
    });

    reviewDiv.style.display = 'block';
    reviewDiv.scrollIntoView({ behavior: 'smooth' });
  }

});