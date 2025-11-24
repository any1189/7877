let imgCount = 0;
document.querySelectorAll('.item').forEach(item => {
  item.onclick = e => {
    e.preventDefault();
    document.getElementById('appName').textContent = item.dataset.app;
    document.getElementById('gate').style.display = 'flex';
  };
});

function enter() {
  document.getElementById('gate').style.display = 'none';
  document.getElementById('aiPage').style.display = 'block';
  imgCount = 0;
  document.getElementById('preview').innerHTML = '';
  document.getElementById('messages').innerHTML = '';
}

function back() {
  document.getElementById('aiPage').style.display = 'none';
}

// 上传3张图自动回复
document.getElementById('picker').onchange = function(e) {
  const files = e.target.files;
  imgCount = 0;
  document.getElementById('preview').innerHTML = '';
  for (let file of files) {
    if (imgCount >= 3) break;
    const reader = new FileReader();
    reader.onload = ev => {
      imgCount++;
      const img = document.createElement('img');
      img.src = ev.target.result;
      document.getElementById('preview').appendChild(img);

      if (imgCount === 3) {
        setTimeout(() => {
          const msg = document.createElement('div');
          msg.className = 'msg';
          msg.innerHTML = '<strong>AI机器人 已验证通过！</strong><br><br>群号：759098135<br>点击立即加入QQ群自取完整版资源<br><br>（密码：udd2025）';
          document.getElementById('messages').appendChild(msg);
          alert('验证成功！进群自取哦～');
        }, 1000);
      }
    };
    reader.readAsDataURL(file);
  }
  if (files.length < 3) alert('请至少上传3张截图！');
};
