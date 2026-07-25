// 預設 30 家公司設計
    const INITIAL_STOCKS = [
      { id: 1, name: '肯德基', basePrice: 100 },
      { id: 2, name: '麥當勞', basePrice: 300 },
      { id: 3, name: '星巴克', basePrice: 500 },
      { id: 4, name: '便利超商', basePrice: 800 },
      { id: 5, name: '韭菜生鮮', basePrice: 1200 },
      { id: 6, name: '珍珠奶茶', basePrice: 2000 },
      { id: 7, name: '破產地產', basePrice: 3500 },
      { id: 8, name: '負翁快遞', basePrice: 5000 },
      { id: 9, name: '檸檬影業', basePrice: 7000 },
      { id: 10, name: '卡牌工廠', basePrice: 10000 },

      { id: 11, name: '特斯拉', basePrice: 20000 },
      { id: 12, name: '亞馬遜', basePrice: 40000 },
      { id: 13, name: '蘋果 (Apple)', basePrice: 70000 },
      { id: 14, name: '谷歌 (Google)', basePrice: 100000 },
      { id: 15, name: '微軟 (Microsoft)', basePrice: 200000 },
      { id: 16, name: '索尼', basePrice: 350000 },
      { id: 17, name: '任天堂', basePrice: 500000 },
      { id: 18, name: ' Space-X', basePrice: 800000 },
      { id: 19, name: '輝達 (NVIDIA)', basePrice: 1200000 },
      { id: 20, name: '大負翁金控', basePrice: 2000000 },

      { id: 21, name: '量子科技', basePrice: 5000000 },
      { id: 22, name: '星際礦業', basePrice: 10000000 },
      { id: 23, name: '深海能源', basePrice: 50000000 },
      { id: 24, name: '銀河防衛', basePrice: 100000000 },
      { id: 25, name: '時光旅遊', basePrice: 500000000 },
      { id: 26, name: '元宇宙地產', basePrice: 1000000000 },
      { id: 27, name: '黑洞研究隊', basePrice: 5000000000 },
      { id: 28, name: '行星重工', basePrice: 20000000000 },
      { id: 29, name: '創世基因', basePrice: 100000000000 },
      { id: 30, name: '宇宙帝國', basePrice: 300000000000 }
    ];

    // ---------------- 30 種彩券刮刮樂配置表 ----------------
    const SCRATCH_CARDS = [
      { id: 1, group: '🥉 銅牌級', name: '銅幣對對樂', cost: 1e3, maxPrize: 1e4, symbols: '🪙 🥉 💰', desc: '【對對碰】刮出 3 個相同圖案即可獲得該圖案對應獎金！' },
      { id: 2, group: '🥉 銅牌級', name: '幸運小草', cost: 10e3, maxPrize: 100e3, symbols: '🌱 🍀 🍄 🌸', desc: '【幸運圖案】刮出 🍀 四葉草即可贏得幸運金額。' },
      { id: 3, group: '🥉 銅牌級', name: '發財九宮格', cost: 50e3, maxPrize: 500e3, symbols: '1️⃣ 5️⃣ 9️⃣ 💰', desc: '【三連連線】九宮格連成三個 💰 即可抱走大獎！' },
      { id: 4, group: '🥉 銅牌級', name: '雙喜臨門', cost: 100e3, maxPrize: 1.2e6, symbols: '囍 🧧 🏮 🍊', desc: '【對對碰】刮出兩組相同的禮品圖案贏得 12 倍爆發金額。' },
      { id: 5, group: '🥉 銅牌級', name: '淘金狂熱', cost: 200e3, maxPrize: 3e6, symbols: '⛏️ 🧱 💎 🪨', desc: '【對數字】比對金礦區數字，對中即可拿走金礦底價！' },
      { id: 6, group: '🥉 銅牌級', name: '幸運 777', cost: 777e3, maxPrize: 10e6, symbols: '7️⃣ 🎰 🔔 🍒', desc: '【指定符號】刮出三個 7️⃣ 直接抱走千萬頭獎！' },

      { id: 7, group: '🥈 銀牌級', name: '百萬富翁', cost: 1e6, maxPrize: 20e6, symbols: '💵 💶 💷 💳', desc: '【金額累加】刮開區域顯示的所有金額直接累加為總獎金！' },
      { id: 8, group: '🥈 銀牌級', name: '皇家骰子', cost: 2e6, maxPrize: 50e6, symbols: '🎲 🎲 👑', desc: '【點數對決】玩家點數大於莊家點數即可中獎！' },
      { id: 9, group: '🥈 銀牌級', name: '黃金城堡', cost: 5e6, maxPrize: 150e6, symbols: '🏰 👑 ⚔️ 🛡️', desc: '【階梯解鎖】每刮出一朵 👑 皇冠，獎金階梯即升一級！' },
      { id: 10, group: '🥈 銀牌級', name: '霸王七七七', cost: 7e6, maxPrize: 250e6, symbols: '7️⃣ 🔥 💥 💎', desc: '【極速對獎】刮出 7️⃣ 拿基礎獎，帶有 🔥 獎金乘以 5 倍！' },
      { id: 11, group: '🥈 銀牌級', name: '寶箱大冒險', cost: 10e6, maxPrize: 400e6, symbols: '🗝️ 📦 💎 💀', desc: '【幸運開箱】刮出 🗝️ 鑰匙即可開啟寶箱獲取大獎！' },
      { id: 12, group: '🥈 銀牌級', name: '鑽石獵人', cost: 50e6, maxPrize: 2.5e9, symbols: '💎 💍 ✨ 🪨', desc: '【計數獎勵】刮出的 💎 鑽石越多，獎金呈指數級遞增！' },

      { id: 13, group: '🥇 金牌級', name: '億萬狂歡', cost: 100e6, maxPrize: 6e9, symbols: '🎉 🥂 🍾 🎁', desc: '【對對碰】刮出兩組 🍾 香檳，贏得面板上的總獎金！' },
      { id: 14, group: '🥇 金牌級', name: '雙倍震撼', cost: 200e6, maxPrize: 14e9, symbols: '2X 5X 10X 💥', desc: '【倍數刮刮樂】刮出底價後再刮倍數區，直接相乘！' },
      { id: 15, group: '🥇 金牌級', name: '終極 777', cost: 777e6, maxPrize: 60e9, symbols: '🎰 7️⃣ 🌟 💎', desc: '【幸運符號】三個 7️⃣ 抱走 60B 頭獎，刮出 🌟 獲得二次抽獎！' },
      { id: 16, group: '🥇 金牌級', name: '泰坦金庫', cost: 1e9, maxPrize: 100e9, symbols: '🔐 🔑 🥇 💰', desc: '【密碼破解】刮出 4 位數密碼，正確即可解鎖百億金庫！' },
      { id: 17, group: '🥇 金牌級', name: '星空狂想曲', cost: 2e9, maxPrize: 250e9, symbols: '☀️ 🌙 ⭐ 🛸', desc: '【天體連線】刮出 ⭐ 得基本獎，同時刮出 ☀️ 🌙 拿日月同輝獎！' },
      { id: 18, group: '🥇 金牌級', name: '華爾街狼王', cost: 5e9, maxPrize: 700e9, symbols: '📈 📉 🐂 🐻', desc: '【股市對決】刮出 📈 牛市獲取高達 140 倍暴利回報！' },

      { id: 19, group: '💎 鑽石級', name: '海王寶藏', cost: 10e9, maxPrize: 1.5e12, symbols: '🔱 🏴‍☠️ 🧜‍♀️ 🐙', desc: '【三叉戟對決】刮出 🔱 三叉戟，奪取隱藏所有巨額財寶！' },
      { id: 20, group: '💎 鑽石級', name: '時空裂縫', cost: 20e9, maxPrize: 3.6e12, symbols: '🌀 ⏳ 🔮 🌌', desc: '【隨機倍數】刮出 🌀 漩渦，獎金在 0.5 倍至 200 倍間劇烈震盪！' },
      { id: 21, group: '💎 鑽石級', name: '龍之巢穴', cost: 30e9, maxPrize: 6e12, symbols: '🐉 🥚 🔥 💎', desc: '【孵化龍蛋】刮出 🥚 孵化出 🐉 巨龍，直接奪走 6T 頭獎！' },
      { id: 22, group: '💎 鑽石級', name: '奧林帕斯', cost: 50e9, maxPrize: 12.5e12, symbols: '⚡ 🏛️ 🍷 🕊️', desc: '【宙斯之雷】刮出 ⚡ 閃電符號，將當前獎金瞬間翻 10 倍！' },
      { id: 23, group: '💎 鑽石級', name: '帝國金礦', cost: 100e9, maxPrize: 30e12, symbols: '⛏️ 💎 🥇 🏆', desc: '【挖礦計數】刮開 12 個區域，每挖到 💎 得 2.5T，全中 30T！' },
      { id: 24, group: '💎 鑽石級', name: '惡魔契約', cost: 200e9, maxPrize: 80e12, symbols: '😈 📜 🔥 ⚖️', desc: '【高風險極限】50% 機率直接歸零，50% 機率爆發 400 倍狂喜！' },

      { id: 25, group: '👑 神話級', name: '歐西里斯天神', cost: 500e9, maxPrize: 250e12, symbols: '👁️ 📿 🏛️ ⚖️', desc: '【審判之眼】刮出 👁️ 觸發天神審判，獲得高達 500 倍隨機獎勵！' },
      { id: 26, group: '👑 神話級', name: '邪神撒旦', cost: 666e9, maxPrize: 432.9e12, symbols: '👹 6️⃣ 🔥 🔱', desc: '【666幸運日】刮出三個 6️⃣ 符號，獲得 666 倍邪神賞賜！' },
      { id: 27, group: '👑 神話級', name: '創世開天', cost: 1e12, maxPrize: 800e12, symbols: '☀️ 🌍 🌌 💥', desc: '【宇宙大爆炸】刮出 💥 符號，彩券所有欄位解鎖並累加！' },
      { id: 28, group: '👑 神話級', name: '銀河主宰', cost: 5e12, maxPrize: 5e15, symbols: '🌌 🪐 ☄️ ✨', desc: '【星系集齊】刮出 4 種不同行星圖案即可解鎖 1000 倍大獎！' },
      { id: 29, group: '👑 神話級', name: '無限寶石', cost: 20e12, maxPrize: 30e15, symbols: '🔴 🔵 🟣 🟡', desc: '【寶石收集】集齊 6 種寶石，觸發「彈指大獎」(30P)！' },
      { id: 30, group: '👑 神話級', name: '宇宙奇點 (終極)', cost: 100e12, maxPrize: 200e15, symbols: '⚛️ ♾️ 🌀 🌌', desc: '【無限奇點】刮出 ♾️ 無限符號，獲得最終極 2000 倍獎金！' }
    ];

    // 通用籌碼面額設定
    const COMMON_BET_LEVELS = [
      { label: '1k', value: 1e3 },
      { label: '10k', value: 10e3 },
      { label: '100k', value: 100e3 },
      { label: '500k', value: 500e3 },
      { label: '1M', value: 1e6 },
      { label: '10M', value: 10e6 },
      { label: '100M', value: 100e6 },
      { label: '500M', value: 500e6 },
      { label: '1B', value: 1e9 },
      { label: '10B', value: 10e9 },
      { label: '100B', value: 100e9 },
      { label: '500B', value: 500e9 }
    ];

    // ---------------- D 玩法：拉霸雞設定 ----------------
    const SLOT_SYMBOLS = [
      { char: '🍀', name: '四葉草', multiplier: 0 },
      { char: '🐔', name: '金雞', multiplier: 1000 },
      { char: '🥚', name: '金蛋', multiplier: 350 },
      { char: '7️⃣', name: 'Lucky7', multiplier: 150 },
      { char: '🍒', name: '櫻桃', multiplier: 80 },
      { char: '🍓', name: '草莓', multiplier: 50 },
      { char: '🌽', name: '玉米', multiplier: 30 },
      { char: '🔔', name: '鈴鐺', multiplier: 15 }
    ];

    let slotBetIndex = 0;
    let slotMultiplier = 1;
    let slotFreeSpinsLeft = 0;
    let slotLockedBetValue = 0;
    
    let isSlotSpinning = false;
    let slotSpinIntervals = [null, null, null];
    let slotStoppedCount = 0;
    let slotCurrentResults = [null, null, null];
    let slotAutoStopTimeout = null;
    let slotAutoSequenceInterval = null;

    // ---------------- E 玩法：俄羅斯輪盤變數 ----------------
    let rouletteRound = 0;
    let bulletPosition = -1;
    let isRouletteAnimating = false;

    // ---------------- F 玩法：搖花骰變數 ----------------
    let diceCount = 2;
    let diceBetAmount = 1e3;
    let isDiceRolling = false;

    // ---------------- G 玩法：21點變數 ----------------
    let bjDeck = [];
    let bjPlayerHand = [];
    let bjDealerHand = [];
    let bjBetAmount = 1e3;
    let isBjGameActive = false;

    // ---------------- H 玩法：陽壽掏金變數 ----------------
    let lifespanBetAmount = 1e3;
    let lifespanBoxes = [];
    let isLifespanActive = false;

    let saves = JSON.parse(localStorage.getItem('monopoly_saves')) || [];
    let currentSave = null;
    let currentSaveIndex = -1;

    // 計時器變數
    const BANK_INTERVAL_SEC = 120;   // 2 分鐘
    const PRICE_INTERVAL_SEC = 120;  // 2 分鐘
    const QTY_INTERVAL_SEC = 120;    // 2 分鐘

    let bankTimer = BANK_INTERVAL_SEC;
    let priceTimer = PRICE_INTERVAL_SEC;
    let qtyTimer = QTY_INTERVAL_SEC;

    let mainLoopInterval = null;

    // 支援超大數 (k, M, B, T, P) 的格式化函數
    function formatMoney(amount) {
      amount = Number(amount);
      if (isNaN(amount)) return '0';
      if (amount >= 1e27) return (amount / 1e27).toFixed(2).replace(/\.00$/, '') + 'Oct';
      if (amount >= 1e24) return (amount / 1e24).toFixed(2).replace(/\.00$/, '') + 'Sep';
      if (amount >= 1e21) return (amount / 1e21).toFixed(2).replace(/\.00$/, '') + 'Sex';
      if (amount >= 1e18) return (amount / 1e18).toFixed(2).replace(/\.00$/, '') + 'Qui';
      if (amount >= 1e15) return (amount / 1e15).toFixed(2).replace(/\.00$/, '') + 'Qua';
      if (amount >= 1e12) return (amount / 1e12).toFixed(2).replace(/\.00$/, '') + 'T';
      if (amount >= 1e9)  return (amount / 1e9).toFixed(2).replace(/\.00$/, '') + 'B';
      if (amount >= 1e6)  return (amount / 1e6).toFixed(2).replace(/\.00$/, '') + 'M';
      if (amount >= 1e3)  return (amount / 1e3).toFixed(2).replace(/\.00$/, '') + 'k';
      return Math.floor(amount).toString();

    }

    // 選單切換
    function goToSaves() {
      document.getElementById('main-menu').classList.add('hidden');
      document.getElementById('save-menu').classList.remove('hidden');
      renderSaves();
    }

    function goToMainMenu() {
      document.getElementById('save-menu').classList.add('hidden');
      document.getElementById('main-menu').classList.remove('hidden');
    }

    function renderSaves() {
      const listContainer = document.getElementById('save-list');
      listContainer.innerHTML = '';

      if (saves.length === 0) {
        listContainer.innerHTML = `<div style="color:#aaa; margin: 1rem 0;">目前無存檔，請點擊下方 + 建立</div>`;
        return;
      }

      saves.forEach((save, index) => {
        const item = document.createElement('div');
        item.className = 'save-item';
        item.innerHTML = `
          <div class="save-info" onclick="loadGame(${index})">
            <div class="save-name">${save.name}</div>
            <div class="save-date">最後遊玩：${save.date}</div>
          </div>
          <div class="save-actions">
            <button class="delete-btn" onclick="deleteSave(event, ${index})">🗑️ 刪除</button>
          </div>
        `;
        listContainer.appendChild(item);
      });
    }

    function createNewSave() {
      const defaultName = `存檔 #${saves.length + 1}`;
      const inputName = prompt('請輸入自訂存檔名稱：', defaultName);
      
      if (inputName === null) return;

      const finalName = inputName.trim() === '' ? defaultName : inputName.trim();

      const stocksState = INITIAL_STOCKS.map((s, index) => ({
        id: s.id,
        name: s.name,
        basePrice: s.basePrice,
        currentPrice: s.basePrice,
        lastPrice: s.basePrice,
        owned: 0,
        availableQty: getRandomQtyForGroup(index)
      }));

      const newSave = {
        name: finalName,
        date: new Date().toLocaleString('zh-TW', { hour12: false }),
        money: 10000,
        bankDeposit: 0,
        stocks: stocksState
      };

      saves.push(newSave);
      saveDataToStorage();
      renderSaves();
    }

    function deleteSave(e, index) {
      e.stopPropagation();
      const targetSave = saves[index];
      
      const confirmFirst = confirm(`確定要刪除存檔「${targetSave.name}」嗎？`);
      if (confirmFirst) {
        const confirmSecond = confirm(`⚠️ 警告：刪除後將無法復原！真的要徹底刪除「${targetSave.name}」嗎？`);
        if (confirmSecond) {
          saves.splice(index, 1);
          saveDataToStorage();
          renderSaves();
        }
      }
    }

    function saveDataToStorage() {
      if (currentSave) {
        currentSave.date = new Date().toLocaleString('zh-TW', { hour12: false });
      }
      localStorage.setItem('monopoly_saves', JSON.stringify(saves));
    }

    // 載入遊戲主畫面
    function loadGame(index) {
      currentSaveIndex = index;
      currentSave = saves[index];

      if (currentSave.money === undefined || isNaN(currentSave.money)) currentSave.money = 10000;
      if (currentSave.bankDeposit === undefined || isNaN(currentSave.bankDeposit)) currentSave.bankDeposit = 0;
      
      if (!currentSave.stocks || currentSave.stocks.length !== INITIAL_STOCKS.length) {
        currentSave.stocks = INITIAL_STOCKS.map((s, idx) => ({
          id: s.id,
          name: s.name,
          basePrice: s.basePrice,
          currentPrice: s.basePrice,
          lastPrice: s.basePrice,
          owned: 0,
          availableQty: getRandomQtyForGroup(idx)
        }));
      } else {
        currentSave.stocks.forEach(s => {
          if (s.lastPrice === undefined) s.lastPrice = s.currentPrice;
        });
      }

      document.getElementById('menu-container').classList.add('hidden');
      document.getElementById('game-view').classList.remove('hidden');

      updateUI();
      renderGrid();
      startMainLoop();
      initScratchGame();
      initSlotGame();
      initDiceGame();
      initBlackjackGame();
      initLifespanGame();
    }

    // 退出至主選單
    function exitToMainMenu() {
      saveDataToStorage();
      stopMainLoop();

      document.getElementById('game-view').classList.add('hidden');
      document.getElementById('menu-container').classList.remove('hidden');
      goToMainMenu();
    }

    function updateUI() {
      document.getElementById('money-display').innerText = formatMoney(currentSave.money);
      document.getElementById('bank-deposit-display').innerText = '$' + formatMoney(currentSave.bankDeposit);
    }

    // 格子選單生成
    function renderGrid() {
      const gridContainer = document.getElementById('game-grid');
      gridContainer.innerHTML = '';
      
      const items = [
        { id: 'bank', name: '銀行 🏦' },
        { id: 'stock', name: '股票交易行 📈' },
        { id: 'scratch', name: '彩券刮刮樂 🎟️' },
        { id: 'slot', name: '拉霸雞 🎰' },
        { id: 'roulette', name: '俄羅斯輪盤 🔫' },
        { id: 'dice', name: '搖花骰 🎲' },
        { id: 'blackjack', name: '21點 🃏' },
        { id: 'lifespan', name: '陽壽掏金 ⚰️' },
        { id: 'I', name: 'I' },
        { id: 'J', name: 'J' },
        { id: 'K', name: 'K' },
        { id: 'L', name: 'L' }
      ];
      
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'grid-card';
        card.innerText = item.name;
        card.onclick = () => onGridClick(item.id);
        gridContainer.appendChild(card);
      });
    }

    function onGridClick(id) {
      if (id === 'bank') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('bank-view').classList.remove('hidden');
      } else if (id === 'stock') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('stock-view').classList.remove('hidden');
        renderStockTable();
      } else if (id === 'scratch') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('scratch-view').classList.remove('hidden');
        resetScratchCanvas(false);
      } else if (id === 'slot') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('slot-view').classList.remove('hidden');
        updateSlotUI();
      } else if (id === 'roulette') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('roulette-view').classList.remove('hidden');
        resetRouletteGame();
      } else if (id === 'dice') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('dice-view').classList.remove('hidden');
      } else if (id === 'blackjack') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('bj-view').classList.remove('hidden');
        updateBjWinPreview();
      } else if (id === 'lifespan') {
        document.getElementById('grid-view').classList.add('hidden');
        document.getElementById('lifespan-view').classList.remove('hidden');
        resetLifespanGame();
      } else {
        alert(`你點擊了模式：[${id}]`);
      }
    }

    function closePanel(panelId) {
      document.getElementById(panelId).classList.add('hidden');
      document.getElementById('grid-view').classList.remove('hidden');
    }

    // ---------------- 全局主計時器 ----------------
    function startMainLoop() {
      stopMainLoop();
      bankTimer = BANK_INTERVAL_SEC;
      priceTimer = PRICE_INTERVAL_SEC;
      qtyTimer = QTY_INTERVAL_SEC;

      mainLoopInterval = setInterval(() => {
        if (currentSave && currentSave.bankDeposit > 0) {
          bankTimer--;
          if (bankTimer <= 0) {
            currentSave.bankDeposit = Math.floor(currentSave.bankDeposit * 1.05);
            saveDataToStorage();
            updateUI();
            bankTimer = BANK_INTERVAL_SEC;
            alert('🎉 銀行利息已結算！存款增加了 5%！');
          }
        } else {
          bankTimer = BANK_INTERVAL_SEC;
        }

        priceTimer--;
        if (priceTimer <= 0) {
          refreshStockPrices();
          priceTimer = PRICE_INTERVAL_SEC;
        }

        qtyTimer--;
        if (qtyTimer <= 0) {
          refreshStockQuantities();
          qtyTimer = QTY_INTERVAL_SEC;
        }

        updateTimersDisplay();
      }, 1000);
    }

    function stopMainLoop() {
      if (mainLoopInterval) {
        clearInterval(mainLoopInterval);
        mainLoopInterval = null;
      }
    }

    function updateTimersDisplay() {
      const bM = Math.floor(bankTimer / 60).toString().padStart(2, '0');
      const bS = (bankTimer % 60).toString().padStart(2, '0');
      document.getElementById('bank-timer-display').innerText = `${bM}:${bS}`;

      const pM = Math.floor(priceTimer / 60).toString().padStart(2, '0');
      const pS = (priceTimer % 60).toString().padStart(2, '0');
      document.getElementById('price-timer-display').innerText = `${pM}:${pS}`;

      const qM = Math.floor(qtyTimer / 60).toString().padStart(2, '0');
      const qS = (qtyTimer % 60).toString().padStart(2, '0');
      document.getElementById('qty-timer-display').innerText = `${qM}:${qS}`;
    }

    // ---------------- 銀行邏輯 ----------------
    function handleDeposit() {
      const input = document.getElementById('bank-amount-input');
      const amount = Math.floor(Number(input.value));

      if (isNaN(amount) || amount <= 0) {
        alert('請輸入有效的金額！');
        return;
      }
      if (amount > currentSave.money) {
        alert('你的現金不足！');
        return;
      }

      currentSave.money -= amount;
      currentSave.bankDeposit += amount;
      
      bankTimer = BANK_INTERVAL_SEC;
      saveDataToStorage();
      updateUI();

      input.value = '';
      alert(`成功存入 $${formatMoney(amount)}！`);
    }

    function handleWithdraw() {
      const input = document.getElementById('bank-amount-input');
      const amount = Math.floor(Number(input.value));

      if (isNaN(amount) || amount <= 0) {
        alert('請輸入有效的金額！');
        return;
      }
      if (amount > currentSave.bankDeposit) {
        alert('銀行存款不足！');
        return;
      }

      currentSave.bankDeposit -= amount;
      currentSave.money += amount;

      bankTimer = BANK_INTERVAL_SEC;
      saveDataToStorage();
      updateUI();

      input.value = '';
      alert(`成功取出 $${formatMoney(amount)}！`);
    }

    // ---------------- 股票邏輯 ----------------
    function getRandomQtyForGroup(index) {
      if (index < 10) {
        const weights = [];
        for (let i = 1; i <= 20; i++) weights.push(21 - i);
        return getWeightedRandomIndex(weights) + 1;
      } else if (index < 20) {
        if (Math.random() < 0.45) return 0;
        const weights = [];
        for (let i = 1; i <= 10; i++) weights.push(11 - i);
        return getWeightedRandomIndex(weights) + 1;
      } else {
        const rand = Math.random() * 100;
        if (rand < 70) return 0;
        if (rand < 83) return 1;
        if (rand < 90) return 2;
        if (rand < 95) return 3;
        if (rand < 98) return 4;
        return 5;
      }
    }

    function getWeightedRandomIndex(weights) {
      const sum = weights.reduce((a, b) => a + b, 0);
      let rand = Math.random() * sum;
      for (let i = 0; i < weights.length; i++) {
        if (rand < weights[i]) return i;
        rand -= weights[i];
      }
      return 0;
    }

    function refreshStockPrices() {
      if (!currentSave || !currentSave.stocks) return;

      currentSave.stocks.forEach(s => {
        s.lastPrice = s.currentPrice;
        const minPrice = Math.floor(s.basePrice / 10);
        
        if (s.currentPrice <= minPrice) {
          const rate = 1.1 + Math.random() * 1.4;
          s.currentPrice = Math.floor(s.currentPrice * rate);
        } else {
          const rate = 0.4 + Math.random() * 2.1;
          let newPrice = Math.floor(s.currentPrice * rate);
          s.currentPrice = Math.max(minPrice, newPrice);
        }
      });

      saveDataToStorage();
      renderStockTable();
    }

    function refreshStockQuantities() {
      if (!currentSave || !currentSave.stocks) return;

      currentSave.stocks.forEach((s, index) => {
        s.availableQty = getRandomQtyForGroup(index);
      });

      saveDataToStorage();
      renderStockTable();
    }

    function renderStockTable() {
      const tbody = document.getElementById('stock-table-body');
      if (!tbody || !currentSave || !currentSave.stocks) return;

      tbody.innerHTML = '';

      currentSave.stocks.forEach((s, idx) => {
        const tr = document.createElement('tr');
        
        let priceColor = '#ffd700';
        let trendIcon = '➖';
        if (s.currentPrice > s.lastPrice) {
          priceColor = '#ff4757';
          trendIcon = '▲';
        } else if (s.currentPrice < s.lastPrice) {
          priceColor = '#2ed573';
          trendIcon = '▼';
        }

        const isMinPrice = s.currentPrice <= Math.floor(s.basePrice / 10);

        tr.innerHTML = `
          <td><strong>${s.name}</strong></td>
          <td style="color: ${priceColor}; font-weight: bold;">
            ${trendIcon} $${formatMoney(s.currentPrice)} ${isMinPrice ? '(底價)' : ''}
          </td>
          <td style="color: #ffd700;">${s.owned} 張</td>
          <td>${s.availableQty} 張</td>
          <td>
            <button class="stock-action-btn buy-btn" onclick="buyStock(${idx})" ${s.availableQty <= 0 ? 'disabled' : ''}>買入 1 張</button>
            <button class="stock-action-btn sell-btn" onclick="sellStock(${idx})" ${s.owned <= 0 ? 'disabled' : ''}>賣出 1 張</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function buyStock(index) {
      const stock = currentSave.stocks[index];

      if (stock.availableQty <= 0) {
        alert('市場可購張數不足！');
        return;
      }
      if (currentSave.money < stock.currentPrice) {
        alert('手上現金不足以購買此股票！');
        return;
      }

      currentSave.money -= stock.currentPrice;
      stock.owned += 1;
      stock.availableQty -= 1;

      saveDataToStorage();
      updateUI();
      renderStockTable();
    }

    function sellStock(index) {
      const stock = currentSave.stocks[index];

      if (stock.owned <= 0) {
        alert('你並未持有該股票！');
        return;
      }

      currentSave.money += stock.currentPrice;
      stock.owned -= 1;

      saveDataToStorage();
      updateUI();
      renderStockTable();
    }

    // ---------------- C 玩法：彩券刮刮樂邏輯 ----------------
    let selectedScratchIdx = 0;
    let currentPrize = 0;
    let isScratchPurchased = false;
    let isDrawing = false;
    let scratchCanvas, scratchCtx;
    let prizeAwarded = false;

    function initScratchGame() {
      scratchCanvas = document.getElementById('scratch-canvas');
      scratchCtx = scratchCanvas.getContext('2d');

      populateScratchDropdown();

      scratchCanvas.addEventListener('mousedown', startScratch);
      scratchCanvas.addEventListener('mousemove', scratchMove);
      window.addEventListener('mouseup', endScratch);

      scratchCanvas.addEventListener('touchstart', startScratch);
      scratchCanvas.addEventListener('touchmove', scratchMove);
      window.addEventListener('touchend', endScratch);
    }

    function populateScratchDropdown() {
      const dropdown = document.getElementById('scratch-type-select');
      dropdown.innerHTML = '';

      let currentGroup = '';
      let optGroup = null;

      SCRATCH_CARDS.forEach((card, idx) => {
        if (card.group !== currentGroup) {
          currentGroup = card.group;
          optGroup = document.createElement('optgroup');
          optGroup.label = currentGroup;
          dropdown.appendChild(optGroup);
        }

        const option = document.createElement('option');
        option.value = idx;
        option.innerText = `${card.name} (面額: $${formatMoney(card.cost)} | 頭獎: $${formatMoney(card.maxPrize)})`;
        optGroup.appendChild(option);
      });

      onScratchSelectChange(0);
    }

    function onScratchSelectChange(idxVal) {
      const idx = Number(idxVal);
      if (isScratchPurchased && !prizeAwarded) {
        if (!confirm('當前刮刮樂尚未劃開，切換將放棄此張彩券！確定切換？')) {
          document.getElementById('scratch-type-select').value = selectedScratchIdx;
          return;
        }
      }

      selectedScratchIdx = idx;
      const card = SCRATCH_CARDS[selectedScratchIdx];

      document.getElementById('scratch-card-desc').innerText = card.desc;
      document.getElementById('scratch-buy-btn').innerText = `購買 ($${formatMoney(card.cost)})`;
      
      resetScratchCanvas(false);
    }

    function resetScratchCanvas(hasCard) {
      isScratchPurchased = hasCard;
      prizeAwarded = false;

      const card = SCRATCH_CARDS[selectedScratchIdx];
      const titleEl = document.getElementById('scratch-card-title');
      const prizeEl = document.getElementById('scratch-card-prize');
      const symbolsEl = document.getElementById('scratch-card-symbols');
      const autoBtn = document.getElementById('scratch-auto-btn');

      symbolsEl.innerText = card.symbols;

      if (!hasCard) {
        titleEl.innerText = '請先購買彩券';
        prizeEl.innerText = '❓❓❓';
        scratchCtx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        scratchCtx.fillStyle = '#4a4b5d';
        scratchCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        scratchCtx.fillStyle = '#8e90a6';
        scratchCtx.font = '20px sans-serif';
        scratchCtx.textAlign = 'center';
        scratchCtx.fillText('點擊下方按鈕購買', 170, 100);
        autoBtn.disabled = true;
      } else {
        titleEl.innerText = `${card.name} - 獎金`;
        prizeEl.innerText = currentPrize > 0 ? `+$${formatMoney(currentPrize)}` : '銘謝惠顧';
        
        scratchCtx.globalCompositeOperation = 'source-over';
        scratchCtx.fillStyle = '#b2bec3';
        scratchCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        
        scratchCtx.fillStyle = '#dcdde1';
        scratchCtx.font = 'bold 20px sans-serif';
        scratchCtx.textAlign = 'center';
        scratchCtx.fillText('★ 刮開此處 ★', 170, 100);
        autoBtn.disabled = false;
      }
    }

    function calculateScratchPrize(card) {
      const rand = Math.random() * 100;
      if (rand < 0.2) {
        return card.maxPrize;
      } else if (rand < 3) {
        const multiplier = 5 + Math.random() * 15;
        return Math.floor(card.cost * multiplier);
      } else if (rand < 15) {
        const multiplier = 2 + Math.random() * 3;
        return Math.floor(card.cost * multiplier);
      } else if (rand < 50) {
        const multiplier = 0.3 + Math.random() * 0.7;
        return Math.floor(card.cost * multiplier);
      } else {
        return 0;
      }
    }

    function buyScratchCard() {
      const card = SCRATCH_CARDS[selectedScratchIdx];

      if (isScratchPurchased && !prizeAwarded) {
        if (!confirm('你還有一張未劃開的刮刮樂，確定要購買新的一張並覆蓋嗎？')) return;
      }

      if (currentSave.money < card.cost) {
        alert('手上現金不足！');
        return;
      }

      currentSave.money -= card.cost;
      saveDataToStorage();
      updateUI();

      currentPrize = calculateScratchPrize(card);
      resetScratchCanvas(true);
    }

    function autoScratchCard() {
      if (!isScratchPurchased || prizeAwarded) return;

      scratchCtx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
      prizeAwarded = true;
      document.getElementById('scratch-auto-btn').disabled = true;

      if (currentPrize > 0) {
        currentSave.money += currentPrize;
        saveDataToStorage();
        updateUI();
        alert(`🎉 恭喜刮中 $${formatMoney(currentPrize)}！已存入你的現金。`);
      } else {
        alert('😢 很遺憾，這張沒有中獎，再接再勵！');
      }
    }

    function batchBuyScratchCard() {
      const card = SCRATCH_CARDS[selectedScratchIdx];
      const countInput = prompt(`你要批量購買幾張【${card.name}】？(每張 $${formatMoney(card.cost)})`, '10');

      if (countInput === null) return;
      const count = Math.floor(Number(countInput));

      if (isNaN(count) || count <= 0) {
        alert('請輸入有效的購買數量！');
        return;
      }

      const totalCost = card.cost * count;
      if (currentSave.money < totalCost) {
        alert(`現金不足！購買 ${count} 張需要 $${formatMoney(totalCost)}，你目前有 $${formatMoney(currentSave.money)}。`);
        return;
      }

      currentSave.money -= totalCost;
      updateUI();

      const overlay = document.getElementById('scratch-loading-overlay');
      overlay.classList.remove('hidden');

      setTimeout(() => {
        let totalWin = 0;
        let winCount = 0;

        for (let i = 0; i < count; i++) {
          const prize = calculateScratchPrize(card);
          if (prize > 0) {
            totalWin += prize;
            winCount++;
          }
        }

        currentSave.money += totalWin;
        saveDataToStorage();
        updateUI();

        overlay.classList.add('hidden');
        resetScratchCanvas(false);

        const netProfit = totalWin - totalCost;
        const profitText = netProfit >= 0 ? `淨賺 +$${formatMoney(netProfit)}` : `虧損 -$${formatMoney(Math.abs(netProfit))}`;
        alert(`🎟️ 批量結算完畢！\n共購買：${count} 張\n中獎張數：${winCount} 張\n總刮得獎金：+$${formatMoney(totalWin)}\n【${profitText}】`);
      }, 2000);
    }

    function getCanvasPos(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    }

    function startScratch(e) {
      if (!isScratchPurchased) return;
      isDrawing = true;
      scratchMove(e);
    }

    function scratchMove(e) {
      if (!isDrawing || !isScratchPurchased) return;
      e.preventDefault();
      const pos = getCanvasPos(e);

      scratchCtx.globalCompositeOperation = 'destination-out';
      scratchCtx.beginPath();
      scratchCtx.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
      scratchCtx.fill();

      checkScratchProgress();
    }

    function endScratch() {
      isDrawing = false;
    }

    function checkScratchProgress() {
      if (prizeAwarded || !isScratchPurchased) return;

      const imgData = scratchCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
      let clearPixels = 0;
      for (let i = 3; i < imgData.data.length; i += 4) {
        if (imgData.data[i] === 0) clearPixels++;
      }

      const ratio = clearPixels / (scratchCanvas.width * scratchCanvas.height);

      if (ratio > 0.5) {
        prizeAwarded = true;
        scratchCtx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        document.getElementById('scratch-auto-btn').disabled = true;

        if (currentPrize > 0) {
          currentSave.money += currentPrize;
          saveDataToStorage();
          updateUI();
          alert(`🎉 恭喜刮中 $${formatMoney(currentPrize)}！已存入你的現金。`);
        } else {
          alert('😢 很遺憾，這張沒有中獎，再接再勵！');
        }
      }
    }

    // ---------------- D 玩法：拉霸雞 核心邏輯 ----------------
    function initSlotGame() {
      const container = document.getElementById('slot-chips-container');
      container.innerHTML = '';
      COMMON_BET_LEVELS.forEach((level, idx) => {
        const btn = document.createElement('button');
        btn.className = `slot-chip ${idx === slotBetIndex ? 'active' : ''}`;
        btn.innerText = level.label;
        btn.onclick = () => selectSlotBet(idx);
        container.appendChild(btn);
      });

      renderSlotPayoutTable();
    }

    function renderSlotPayoutTable() {
      const grid = document.getElementById('slot-payout-grid');
      grid.innerHTML = '';
      SLOT_SYMBOLS.forEach(s => {
        if (s.multiplier > 0) {
          const item = document.createElement('div');
          item.className = 'slot-payout-item';
          item.innerHTML = `${s.char} x3 : <strong style="color:#ffd700;">${s.multiplier}倍</strong>`;
          grid.appendChild(item);
        }
      });
      const freeItem = document.createElement('div');
      freeItem.className = 'slot-payout-item';
      freeItem.style.gridColumn = 'span 2';
      freeItem.innerHTML = `🍀 x3 : <strong style="color:#76ff03;">送 27 次免費</strong>`;
      grid.appendChild(freeItem);
    }

    function selectSlotBet(idx) {
      if (isSlotSpinning || slotFreeSpinsLeft > 0) return;
      slotBetIndex = idx;

      const chips = document.querySelectorAll('.slot-chip');
      chips.forEach((chip, i) => {
        chip.classList.toggle('active', i === idx);
      });
    }

    function setSlotMultiplier(val) {
      if (isSlotSpinning || slotFreeSpinsLeft > 0) return;
      slotMultiplier = Math.max(1, Math.min(100, Math.floor(val)));
      document.getElementById('slot-multiplier-input').value = slotMultiplier;
    }

    function onSlotMultiplierChange(val) {
      setSlotMultiplier(Number(val) || 1);
    }

    function updateSlotUI() {
      updateUI();

      const freeBanner = document.getElementById('slot-free-banner');
      if (slotFreeSpinsLeft > 0) {
        freeBanner.style.display = 'block';
        document.getElementById('slot-free-count').innerText = slotFreeSpinsLeft;
      } else {
        freeBanner.style.display = 'none';
      }

      const chips = document.querySelectorAll('.slot-chip');
      chips.forEach(chip => {
        chip.disabled = isSlotSpinning || slotFreeSpinsLeft > 0;
      });

      document.getElementById('slot-multiplier-input').disabled = isSlotSpinning || slotFreeSpinsLeft > 0;
      document.querySelectorAll('.slot-mult-btn').forEach(btn => {
        btn.disabled = isSlotSpinning || slotFreeSpinsLeft > 0;
      });

      const btn = document.getElementById('slot-spin-btn');
      if (!isSlotSpinning) {
        btn.disabled = false;
        btn.innerText = 'SPIN!';
        btn.classList.remove('stop-btn');
      } else {
        const remaining = 3 - slotStoppedCount;
        btn.innerText = `STOP (剩 ${remaining} 次)`;
        btn.classList.add('stop-btn');
      }
    }

    function startSlotSpin() {
      const baseBet = COMMON_BET_LEVELS[slotBetIndex].value;
      const totalBet = baseBet * slotMultiplier;

      if (slotFreeSpinsLeft > 0) {
        slotFreeSpinsLeft--;
      } else {
        if (currentSave.money < totalBet) {
          const msg = document.getElementById('slot-msg');
          msg.innerText = '❌ 金幣不足，請降低籌碼或倍率！';
          msg.style.color = '#ff5252';
          return;
        }
        currentSave.money -= totalBet;
        saveDataToStorage();
      }

      isSlotSpinning = true;
      slotStoppedCount = 0;
      slotCurrentResults = [null, null, null];

      const msgBox = document.getElementById('slot-msg');
      msgBox.innerText = '🎰 轉動中... 請點擊 STOP 停下轉盤！';
      msgBox.style.color = '#fff';

      updateSlotUI();

      const reels = [
        document.getElementById('slot-reel1'),
        document.getElementById('slot-reel2'),
        document.getElementById('slot-reel3')
      ];

      reels.forEach((reel, idx) => {
        reel.classList.add('blur');
        slotSpinIntervals[idx] = setInterval(() => {
          const randSym = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
          reel.innerText = randSym.char;
        }, 80);
      });

      clearTimeout(slotAutoStopTimeout);
      slotAutoStopTimeout = setTimeout(() => {
        if (isSlotSpinning && slotStoppedCount < 3) {
          msgBox.innerText = '⏱️ 已滿 15 秒，自動依序停止轉盤...';
          autoStopRemainingReels();
        }
      }, 15000);
    }

    function stopNextSlotReel() {
      if (slotStoppedCount < 3) {
        const reelIdx = slotStoppedCount;
        clearInterval(slotSpinIntervals[reelIdx]);

        const reelEl = document.getElementById(`slot-reel${reelIdx + 1}`);
        reelEl.classList.remove('blur');

        const finalSymbol = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
        reelEl.innerText = finalSymbol.char;
        slotCurrentResults[reelIdx] = finalSymbol;

        slotStoppedCount++;
        updateSlotUI();

        if (slotStoppedCount === 3) {
          finishSlotSpin();
        }
      }
    }

    function autoStopRemainingReels() {
      document.getElementById('slot-spin-btn').disabled = true;

      clearInterval(slotAutoSequenceInterval);
      slotAutoSequenceInterval = setInterval(() => {
        if (slotStoppedCount < 3) {
          stopNextSlotReel();
        } else {
          clearInterval(slotAutoSequenceInterval);
        }
      }, 500);
    }

    function finishSlotSpin() {
      clearTimeout(slotAutoStopTimeout);
      clearInterval(slotAutoSequenceInterval);

      isSlotSpinning = false;
      updateSlotUI();

      const baseBet = COMMON_BET_LEVELS[slotBetIndex].value;
      const effectiveBet = baseBet * slotMultiplier;

      evaluateSlotResult(slotCurrentResults, effectiveBet);
    }

    function evaluateSlotResult(results, effectiveBet) {
      const msgBox = document.getElementById('slot-msg');
      const [s1, s2, s3] = results;

      if (s1.char === '🍀' && s2.char === '🍀' && s3.char === '🍀') {
        if (slotFreeSpinsLeft === 0) {
          slotLockedBetValue = effectiveBet;
        }
        slotFreeSpinsLeft += 27;
        msgBox.innerText = `🎉 幸運爆發！轉出 3 個 🍀 獲得 27 次免費旋轉！`;
        msgBox.style.color = '#76ff03';
        return;
      }

      if (s1.char === s2.char && s2.char === s3.char) {
        const winAmount = effectiveBet * s1.multiplier;
        currentSave.money += winAmount;
        saveDataToStorage();
        msgBox.innerText = `💥 大獲全勝！【${s1.name} x3】贏得 $${formatMoney(winAmount)}！`;
        msgBox.style.color = '#ffd700';
        return;
      }

      if (s1.char === s2.char || s2.char === s3.char || s1.char === s3.char) {
        const winAmount = Math.floor(effectiveBet * 1.5);
        currentSave.money += winAmount;
        saveDataToStorage();
        msgBox.innerText = `✨ 湊成 2 個相同圖案！獲得安慰獎金 $${formatMoney(winAmount)}！`;
        msgBox.style.color = '#34ace0';
        return;
      }

      const cloverCount = results.filter(r => r.char === '🍀').length;
      if (cloverCount > 0) {
        const winAmount = effectiveBet * (cloverCount * 3);
        currentSave.money += winAmount;
        saveDataToStorage();
        msgBox.innerText = `🍀 獲得 ${cloverCount} 個四葉草，獎勵 $${formatMoney(winAmount)}！`;
        msgBox.style.color = '#81c784';
        return;
      }

      msgBox.innerText = '銘謝惠顧，再接再勵！';
      msgBox.style.color = '#aaa';
    }

    // ---------------- E 玩法：俄羅斯輪盤 邏輯 ----------------
    function resetRouletteGame() {
      rouletteRound = 0;
      bulletPosition = Math.floor(Math.random() * 6);

window.addEventListener('DOMContentLoaded', initApp);
