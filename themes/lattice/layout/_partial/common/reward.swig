{% set reward_title = reward_title || '如果觉得我的文章对您有用，请随意打赏。' %}
{% set wechat_image = wechat_image || '/img/wechat_qr.jpg' %}
{% set alipay_image = alipay_image || '/img/alipay_qr.jpg' %}
{% set reward_note = reward_note || '感谢您的支持！' %}

{% set wechat = '/img/wechat.svg' %}
{% set alipay = '/img/alipay.svg' %}

<!-- 打赏按钮 -->
<button id="reward-btn">
  打赏
</button>

<!-- 打赏弹窗 -->
<div id="reward-modal" style="">
  <h4>{{ reward_title }}</h4>
  
  <!-- 打赏二维码区域 -->
  <div id="reward-image-container">
    <img id="reward-image" src="{{ alipay_image }}" alt="Alipay" style="width: 150px; height: 150px"/>
  </div>

  <!-- 支付方式切换按钮 -->
  <div class="pay-btn">
    <img src="{{ alipay }}" id="alipay-btn">
    <img src="{{ wechat }}" id="wechat-btn">
  </div>

</div>

<!-- 遮罩层 -->
<div id="reward-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;"></div>

<!-- JavaScript to handle modal display and switching -->
<script>
  document.getElementById('reward-btn').addEventListener('click', function() {
    document.getElementById('reward-modal').style.display = 'block';
    document.getElementById('reward-overlay').style.display = 'block';
  });

  document.getElementById('reward-overlay').addEventListener('click', function() {
    document.getElementById('reward-modal').style.display = 'none';
    document.getElementById('reward-overlay').style.display = 'none';
  });

  // 切换显示二维码的函数
  function switchReward(type) {
    const rewardImage = document.getElementById('reward-image');
    const rewardText = document.getElementById('reward-text');
    const alipayBtn = document.getElementById('alipay-btn');
    const wechatBtn = document.getElementById('wechat-btn');
    
    if (type === 'alipay') {
      rewardImage.src = '{{ alipay_image }}';
      alipayBtn.classList.add('active');
      wechatBtn.classList.remove('active');

    } else if (type === 'wechat') {
      rewardImage.src = '{{ wechat_image }}';
      wechatBtn.classList.add('active');
      alipayBtn.classList.remove('active');

    }
  }

  // 添加点击事件切换二维码
  document.getElementById('alipay-btn').addEventListener('click', function() {
    switchReward('alipay');
  });

  document.getElementById('wechat-btn').addEventListener('click', function() {
    switchReward('wechat');
  });
</script>
