{% set reward_title = reward_title || '如果觉得我的文章对您有用，请随意打赏。' %}
{% set wechat_image = wechat_image || '/img/wechat_qr.jpg' %}
{% set alipay_image = alipay_image || '/img/alipay_qr.jpg' %}
{% set reward_note = reward_note || '感谢您的支持！' %}

<!-- 打赏按钮 -->
<button id="reward-btn">
  打赏
</button>

<!-- 打赏弹窗 -->
<div id="reward-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 285px; background-color: white; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); border-radius: 10px; padding: 20px; text-align: center; z-index: 1000;">
  <h4>{{ config.reward.reward_title }}</h4>
  
  <!-- 打赏二维码区域 -->
  <div id="reward-image-container" style="margin: 10px 0;">
    <img id="reward-image" src="{{ alipay_image }}" alt="Alipay" style="width: 150px; height: 150px"/>
  </div>

  <!-- 支付方式切换按钮 -->
  <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
    <button id="alipay-btn" class="reward-switch-btn active" style="padding: 5px 10px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
      支付宝
    </button>
    <button id="wechat-btn" class="reward-switch-btn" style="padding: 5px 10px; background-color: #f5f5f5; color: #333; border: none; border-radius: 5px; cursor: pointer;">
      微信
    </button>
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
      alipayBtn.style.backgroundColor = '#3498db';
      alipayBtn.style.color = 'white';
      wechatBtn.style.backgroundColor = '#f5f5f5';
      wechatBtn.style.color = '#333';
    } else if (type === 'wechat') {
      rewardImage.src = '{{ wechat_image }}';
      wechatBtn.classList.add('active');
      alipayBtn.classList.remove('active');
      wechatBtn.style.backgroundColor = '#3498db';
      wechatBtn.style.color = 'white';
      alipayBtn.style.backgroundColor = '#f5f5f5';
      alipayBtn.style.color = '#333';
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
