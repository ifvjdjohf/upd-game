 // ========== 資料管理 ==========
let saves = JSON.parse(localStorage.getItem('monopoly_saves')) || [];
let currentSave = null;
let currentSaveIndex = -1;

// 初始化
function initApp() {
    console.log(`已載入 ${saves.length} 個存檔`);
}

// ========== 菜單切換邏輯 ==========
function goToSaves() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('save-menu').classList.remove('hidden');
    renderSaves();
}

function goToMainMenu() {
    document.getElementById('save-menu').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}

// ========== 存檔操作 ==========
function renderSaves() {
    const listContainer = document.getElementById('save-list');
    listContainer.innerHTML = '';
    if (saves.length === 0) {
        listContainer.innerHTML = '<div class="empty-state">🎮 目前無存檔</div>';
        return;
    }
    saves.forEach((save, index) => {
        const item = document.createElement('div');
        item.className = 'save-item';
        const totalAssets = (save.money || 10000) + (save.bankDeposit || 0);
        item.innerHTML = `
            <div class="save-info" onclick="loadGame(${index})">
                <div>💾 ${save.name}</div>
                <div style="font-size: 0.8em;">💰 $${formatMoney(totalAssets)}</div>
            </div>
            <button onclick="deleteSave(event, ${index})">🗑️</button>
        `;
        listContainer.appendChild(item);
    });
}

function loadGame(index) {
    console.log("嘗試載入存檔索引:", index); // 除錯用
    currentSaveIndex = index;
    currentSave = saves[index];

    // 切換顯示：隱藏選單，顯示遊戲畫面
    document.getElementById('save-menu').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    updateGameUI();
}

function updateGameUI() {
    const assetsEl = document.getElementById('current-assets');
    const levelEl = document.getElementById('wealth-level');
    
    if (assetsEl) assetsEl.innerText = '$' + formatMoney(currentSave.money + currentSave.bankDeposit);
    if (levelEl) levelEl.innerText = 'Lv.1';
    console.log("介面已更新");
}

function exitGame() {
    if (confirm('確定要退出遊戲並回到主選單嗎？')) {
        saveDataToStorage();
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('main-menu').classList.remove('hidden');
        currentSave = null;
    }
}

// ========== 工具與存檔 ==========
function createNewSave() {
    const name = prompt('請輸入存檔名稱：', `存檔 #${saves.length + 1}`);
    if (!name) return;
    const newSave = { name, money: 10000, bankDeposit: 0, date: new Date().toLocaleString(), stocks: [] };
    saves.push(newSave);
    saveDataToStorage();
    renderSaves();
}

function deleteSave(e, index) {
    e.stopPropagation();
    if (confirm('確定刪除？')) {
        saves.splice(index, 1);
        saveDataToStorage();
        renderSaves();
    }
}

function saveDataToStorage() { localStorage.setItem('monopoly_saves', JSON.stringify(saves)); }
function formatMoney(amount) { return Math.floor(amount).toString(); }

window.addEventListener('DOMContentLoaded', initApp);
