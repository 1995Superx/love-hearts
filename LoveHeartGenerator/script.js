// script.js
document.getElementById('generateBtn').addEventListener('click', generateHearts);

function generateHearts() {
    let heartsContainer = document.getElementById('heartsContainer');
    let message = document.getElementById('message');

    // 清空之前的爱心
    heartsContainer.innerHTML = '';
    
    // 随机生成爱心数量
    let numHearts = Math.floor(Math.random() * 10) + 1; // 1到10颗爱心

    // 随机生成爱心
    for (let i = 0; i < numHearts; i++) {
        let heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heartsContainer.appendChild(heart);
    }

    // 更新信息
    message.textContent = `你收到了 ${numHearts} 个爱心！`;

    // 在控制台打印
    console.log(`生成了 ${numHearts} 个爱心`);
}
