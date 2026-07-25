    // ========== 資料管理 ==========
    let saves = JSON.parse(localStorage.getItem('monopoly_saves')) || [];
    let currentSave = null;
    let currentSaveIndex = -1;

    /**
     * 初始化應用
     * 在頁面加載時，檢查是否有存檔數據
     */
    function initApp() {
      console.log(`已載入 ${saves.length} 個存檔`);
    }

    // ========== 菜單切換 ==========
    /**
     * 從首頁切換到存檔選擇菜單
     */
    function goToSaves() {
      const mainMenu = document.getElementById('main-menu');
      const saveMenu = document.getElementById('save-menu');

      mainMenu.classList.add('hidden');
      saveMenu.classList.remove('hidden');
      
      renderSaves();  // 重新渲染存檔列表
    }

    /**
     * 從存檔選擇菜單返回首頁
     */
    function goToMainMenu() {
      const mainMenu = document.getElementById('main-menu');
      const saveMenu = document.getElementById('save-menu');

      saveMenu.classList.add('hidden');
      mainMenu.classList.remove('hidden');
    }

    // ========== 存檔列表渲染 ==========
    /**
     * 渲染所有存檔卡片
     */
    function renderSaves() {
      const listContainer = document.getElementById('save-list');
      listContainer.innerHTML = '';

      // 如果沒有存檔，顯示空狀態
      if (saves.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'empty-state';
        emptyDiv.innerHTML = '🎮 目前無存檔，請點擊下方 ➕ 建立新存檔';
        listContainer.appendChild(emptyDiv);
        return;
      }

      // 遍歷所有存檔並創建卡片
      saves.forEach((save, index) => {
        const item = document.createElement('div');
        item.className = 'save-item';

        // 提取遊戲進度信息（可自訂）
        const money = save.money || 10000;
        const bankDeposit = save.bankDeposit || 0;
        const totalAssets = money + bankDeposit;

        item.innerHTML = `
          <div class="save-info" onclick="loadGame(${index})">
            <div class="save-name">💾 ${save.name}</div>
            <div class="save-date">
              📅 ${save.date} | 💰 資產: $${formatMoney(totalAssets)}
            </div>
          </div>
          <div class="save-actions">
            <button class="delete-btn" onclick="deleteSave(event, ${index})">🗑️ 刪除</button>
          </div>
        `;

        listContainer.appendChild(item);
      });
    }

    // ========== 存檔操作 ==========
    /**
     * 建立新存檔
     */
    function createNewSave() {
      const defaultName = `存檔 #${saves.length + 1}`;
      const inputName = prompt('📝 請輸入自訂存檔名稱：', defaultName);

      // 如果使用者按取消
      if (inputName === null) return;

      const finalName = inputName.trim() === '' ? defaultName : inputName.trim();

      // 建立新存檔物件
      const newSave = {
        name: finalName,
        date: new Date().toLocaleString('zh-TW', { 
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }),
        money: 10000,           // 初始資金
        bankDeposit: 0,         // 銀行存款
        stocks: initializeStocks()  // 初始化股票
      };

      saves.push(newSave);
      saveDataToStorage();
      renderSaves();

      alert(`✅ 成功建立存檔【${finalName}】！\n現在選擇此存檔以開始遊戲。`);
    }

    /**
     * 初始化股票狀態（30檔股票）
     */
    function initializeStocks() {
      const stockConfigs = [
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
        { id: 18, name: 'Space-X', basePrice: 800000 },
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

      return stockConfigs.map((stock, index) => ({
        id: stock.id,
        name: stock.name,
        basePrice: stock.basePrice,
        currentPrice: stock.basePrice,
        lastPrice: stock.basePrice,
        owned: 0,
        availableQty: getRandomQtyForGroup(index)
      }));
    }

    /**
     * 根據股票分組獲得隨機可購張數
     */
    function getRandomQtyForGroup(index) {
      if (index < 10) {
        // 第一組（0-9）：偏向多張
        const weights = [];
        for (let i = 1; i <= 20; i++) weights.push(21 - i);
        return getWeightedRandomIndex(weights) + 1;
      } else if (index < 20) {
        // 第二組（10-19）：中等
        if (Math.random() < 0.45) return 0;
        const weights = [];
        for (let i = 1; i <= 10; i++) weights.push(11 - i);
        return getWeightedRandomIndex(weights) + 1;
      } else {
        // 第三組（20-29）：偏向稀少
        const rand = Math.random() * 100;
        if (rand < 70) return 0;
        if (rand < 83) return 1;
        if (rand < 90) return 2;
        if (rand < 95) return 3;
        if (rand < 98) return 4;
        return 5;
      }
    }

    /**
     * 加權隨機選擇
     */
    function getWeightedRandomIndex(weights) {
      const sum = weights.reduce((a, b) => a + b, 0);
      let rand = Math.random() * sum;
      for (let i = 0; i < weights.length; i++) {
        if (rand < weights[i]) return i;
        rand -= weights[i];
      }
      return 0;
    }

    /**
     * 刪除存檔（二次確認）
     */
    function deleteSave(e, index) {
      e.stopPropagation();  // 阻止事件冒泡
      
      const targetSave = saves[index];

      // 第一次確認
      const confirmFirst = confirm(`⚠️ 確定要刪除存檔【${targetSave.name}】嗎？`);
      if (!confirmFirst) return;

      // 第二次確認（警告）
      const confirmSecond = confirm(
        `🚨 警告：\n刪除後將無法復原！\n\n真的要徹底刪除【${targetSave.name}】嗎？`
      );
      
      if (confirmSecond) {
        saves.splice(index, 1);       // 從陣列移除
        saveDataToStorage();          // 同步到 localStorage
        renderSaves();                // 重新渲染
        alert(`✅ 已成功刪除存檔【${targetSave.name}】`);
      }
    }

    /**
     * 載入遊戲
     * （這裡只是示例，實際應該跳轉到遊戲主畫面）
     */
    function loadGame(index) {
      currentSaveIndex = index;
      currentSave = saves[index];

      // 數據驗證
      if (currentSave.money === undefined || isNaN(currentSave.money)) {
        currentSave.money = 10000;
      }
      if (currentSave.bankDeposit === undefined || isNaN(currentSave.bankDeposit)) {
        currentSave.bankDeposit = 0;
      }

      console.log('✅ 已載入存檔：', currentSave.name);
      console.log('💰 初始資金：', formatMoney(currentSave.money));
      console.log('🏦 銀行存款：', formatMoney(currentSave.bankDeposit));

      // TODO: 在這裡跳轉到遊戲主畫面
      // window.location.href = 'game.html';
      
      alert(`✅ 已載入存檔【${currentSave.name}】\n\n💰 資金：$${formatMoney(currentSave.money)}\n🏦 銀行：$${formatMoney(currentSave.bankDeposit)}`);
    }

    // ========== 資料持久化 ==========
    /**
     * 保存資料到 localStorage
     */
    function saveDataToStorage() {
      if (currentSave) {
        currentSave.date = new Date().toLocaleString('zh-TW', { 
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
      }
      localStorage.setItem('monopoly_saves', JSON.stringify(saves));
      console.log('💾 已保存存檔資料到 localStorage');
    }

    // ========== 工具函數 ==========
    /**
     * 格式化金額（支援超大數字）
     */
    function formatMoney(amount) {
      amount = Number(amount);
      if (isNaN(amount)) return '0';
      
      const units = [
        { val: 1e27, unit: 'Oc' },
        { val: 1e24, unit: 'Sp' },
        { val: 1e21, unit: 'Sx' },
        { val: 1e18, unit: 'Qi' },
        { val: 1e15, unit: 'Qa' },
        { val: 1e12, unit: 'T' },
        { val: 1e9, unit: 'B' },
        { val: 1e6, unit: 'M' },
        { val: 1e3, unit: 'k' }
      ];

      for (const { val, unit } of units) {
        if (amount >= val) {
          return (amount / val).toFixed(2).replace(/\.00$/, '') + unit;
        }
      }

      return Math.floor(amount).toString();
    }

    /**
     * 清除所有存檔（開發用）
     */
    function clearAllSaves() {
      if (confirm('🚨 確定要清除所有存檔嗎？此操作無法撤銷！')) {
        if (confirm('最後確認：真的要刪除所有存檔嗎？')) {
          saves = [];
          localStorage.removeItem('monopoly_saves');
          renderSaves();
          alert('✅ 已清除所有存檔');
        }
      }
    }

    /**
     * 導出存檔為 JSON（備份用）
     */
    function exportSaves() {
      const dataStr = JSON.stringify(saves, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `monopoly_saves_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      alert('✅ 已下載存檔備份');
    }

    /**
     * 導入存檔（恢復備份用）
     */
    function importSaves() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const imported = JSON.parse(event.target.result);
            if (Array.isArray(imported)) {
              saves = imported;
              saveDataToStorage();
              renderSaves();
              alert(`✅ 已成功導入 ${imported.length} 個存檔`);
            } else {
              alert('❌ 檔案格式不正確');
            }
          } catch (error) {
            alert(`❌ 導入失敗：${error.message}`);
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }
    
    // 在 gameManager.js 中修改或新增這些函式

    function loadGame(index) {
      currentSaveIndex = index;
      currentSave = saves[index];

      // 1. 隱藏存檔菜單，顯示遊戲畫面
      document.getElementById('save-menu').classList.add('hidden');
      document.getElementById('game-screen').classList.remove('hidden');

      // 2. 更新畫面數值
      updateGameUI();
    }

    function updateGameUI() {
      document.getElementById('current-assets').innerText = '$' + formatMoney(currentSave.money + currentSave.bankDeposit);
      // 假設財富等級邏輯之後會實作
      document.getElementById('wealth-level').innerText = 'Lv.1'; 
    }

    function exitGame() {
      if (confirm('確定要退出遊戲並回到主選單嗎？')) {
        // 隱藏遊戲畫面，顯示主選單
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('main-menu').classList.remove('hidden');
        currentSave = null;
      }
    }
    

























    // 頁面加載時初始化
    window.addEventListener('DOMContentLoaded', initApp);

