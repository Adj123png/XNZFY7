const wishes = [
  '2025 新年快乐！',
  '愿你新的一年万事如意！',
  '好运连连，财源滚滚！',
  '家庭幸福，平安健康！',
  '新的一年，心想事成！',
  '梦想成真，福气满满！'
];

const messageElement = document.getElementById('message');
const fireworksCanvas = document.getElementById('fireworks');
const ctx = fireworksCanvas.getContext('2d');
let particles = [];
let currentIndex = 0;
let currentCharIndex = 0;
let typingInterval;

function typeText() {
  if (currentCharIndex < wishes[currentIndex].length) {
    const char = document.createElement('span');
    char.textContent = wishes[currentIndex][currentCharIndex];
    char.style.animation = `flyIn 0.5s forwards`;
    char.style.display = 'inline-block';
    char.style.transform = `translateY(${Math.random() * 100 - 50}px)`;
    messageElement.appendChild(char);
    currentCharIndex++;
  } else {
    clearInterval(typingInterval);
    setTimeout(() => {
      if (currentIndex < wishes.length - 1) {
        currentIndex++;
        currentCharIndex = 0;
        messageElement.innerHTML = ''; // 清空当前文本
        typingInterval = setInterval(typeText, 50); // 开始打下一段文字
      } else {
        messageElement.style.display = 'none';
        fireworksCanvas.style.display = 'block';
        animateFireworks();
      }
    }, 1500); // 每段文字结束后的停顿时间
  }
}

function animateFireworks() {
  // ... 烟花动画逻辑保持不变
}

// 开始打字动画
typingInterval = setInterval(typeText, 50);

// 添加新的动画
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes flyIn {
      from { opacity: 0; transform: translateY(var(--fly-in-from)); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
`);
