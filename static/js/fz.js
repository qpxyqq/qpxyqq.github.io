function showToast(msg) {
    const box = document.getElementById('toastContainer');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `
        <span class="icon">✖</span>
        <div class="msg">${msg}</div>
        <span class="close">&times;</span>
    `;
    el.querySelector('.close').onclick = () => el.remove();
    box.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

document.getElementById('verificationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('orderEmail').value.trim();
    const wechat = document.getElementById('wechatId').value.trim();
    const code = document.getElementById('verificationCode').value.trim();

    if (!email) {
        showToast('请填写下单邮箱');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('邮箱格式不正确');
        return;
    }

    if (!wechat) {
        showToast('请填写需要验证的微信号');
        return;
    }
    if (!/^[a-zA-Z_][a-zA-Z0-9_-]{5,19}$/.test(wechat)) {
        showToast('微信号格式不正确');
        return;
    }

    if (!code) {
        showToast('请填写验证码');
        return;
    }
    if (!/^\d{6}$/.test(code)) {
        showToast('验证码必须为 6 位数字');
        return;
    }

    showToast(`查询不到下单邮箱或微信号`);
});