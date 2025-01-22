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
    // ... 其他逻辑保持不变
  }
}

// 添加新的动画
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes flyIn {
      from { opacity: 0; transform: translateY(var(--fly-in-from)); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
`);
