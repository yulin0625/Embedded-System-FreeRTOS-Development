let currentTimerType = '';
let currentTimerValue = 0;

// 初始化頁面
document.addEventListener('DOMContentLoaded', function() {
    updateSensorData();
    // 每 30 秒更新一次感測器資料
    setInterval(updateSensorData, 30000);
});

// 控制電風扇
async function controlFan(action) {
    try {
        const response = await fetch(`/fan/${action}`);
        if (response.ok) {
            showStatus(`電風扇${getActionText(action)}成功`);
        } else {
            showStatus('操作失敗，請重試', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showStatus('連線失敗，請檢查網路', 'error');
    }
}

// 獲取操作文字
function getActionText(action) {
    const actionMap = {
        'on': '開啟',
        'off': '關閉',
        'up': '風量增加',
        'down': '風量減少'
    };
    return actionMap[action] || action;
}

// 更新感測器資料
async function updateSensorData() {
    try {
        const response = await fetch('/sensor');
        if (response.ok) {
            const data = await response.json();
            document.getElementById('temperature').textContent = `${data.temperature}°C`;
            document.getElementById('humidity').textContent = `${data.humidity}%`;
        }
    } catch (error) {
        console.error('Failed to update sensor data:', error);
        document.getElementById('temperature').textContent = '--°C';
        document.getElementById('humidity').textContent = '--%';
    }
}

// 開啟定時設定 Modal
function openTimerModal(type) {
    currentTimerType = type;
    currentTimerValue = 0;
    
    const modal = document.getElementById('timerModal');
    const title = document.getElementById('modalTitle');
    
    title.textContent = type === 'on' ? '設定定時開啟' : '設定定時關閉';
    updateTimerDisplay();
    
    modal.style.display = 'flex';
}

// 關閉定時設定 Modal
function closeTimerModal() {
    document.getElementById('timerModal').style.display = 'none';
}

// 調整定時時間
function adjustTimer(minutes) {
    currentTimerValue += minutes;
    if (currentTimerValue < 0) currentTimerValue = 0;
    if (currentTimerValue > 300) currentTimerValue = 300;
    updateTimerDisplay();
}

// 更新定時顯示
function updateTimerDisplay() {
    document.getElementById('timerValue').textContent = `${currentTimerValue} 分鐘`;
}

// 確認定時設定
async function confirmTimer() {
    try {
        const endpoint = currentTimerType === 'on' ? 'timer_on' : 'timer_off';
        const response = await fetch(`/fan/${endpoint}?min=${currentTimerValue}`);
        
        if (response.ok) {
            const actionText = currentTimerType === 'on' ? '開啟' : '關閉';
            if (currentTimerValue === 0) {
                showStatus(`已取消定時${actionText}`);
            } else {
                showStatus(`已設定 ${currentTimerValue} 分鐘後${actionText}`);
            }
        } else {
            showStatus('設定失敗，請重試', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showStatus('連線失敗，請檢查網路', 'error');
    }
    
    closeTimerModal();
}

// 顯示狀態訊息
function showStatus(message, type = 'success') {
    const status = document.getElementById('status');
    status.textContent = message;
    status.style.display = 'block';
    
    if (type === 'error') {
        status.style.background = '#ffebee';
        status.style.color = '#c62828';
    } else {
        status.style.background = '#e8f5e8';
        status.style.color = '#2e7d32';
    }
    
    // 3 秒後隱藏狀態訊息
    setTimeout(() => {
        status.style.display = 'none';
    }, 3000);
}

// 點擊 Modal 背景關閉
window.onclick = function(event) {
    const modal = document.getElementById('timerModal');
    if (event.target === modal) {
        closeTimerModal();
    }
} 