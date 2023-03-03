<div class="mod-container">
    <div class="picwall" id="J_picWall" style="background: url( {{ url_for('img/about1.jpeg') }});background-position: 0;background-repeat: no-repeat;background-size: cover;">
        <!--
        <canvas class="picwall-canvas" id="J_picWallCanvas"></canvas>
       
        -->
    </div>

    <div class="grid">
        <div class="about">
            <div class="about-sec">
                <div class="about-sec-hd">
                    <h2 class="about-sec-tit">关于博客</h2>
                </div>

                <div class="about-sec-bd">
                    <p>博客写了很多年，不过什么都没留下，</p>
                    <p>从开始的网易博客、新浪博客，到后来的SAE,BAE,JAE什么的，再到后来的github的静态博客，在到后面觉得静态博客太费劲，换到wordpress，在到后面换到GHOST的nodejs博客，又回到了github的静态博客。</p>
                    <p>也领悟了人生兜兜转转最终都要回到原点。</p>
                </div>
            </div> 
            <div class="about-sec contact">
                <div class="about-sec-hd">
                    <h2 class="about-sec-tit">联系</h2>
                </div>
                <div class="about-sec-bd">
                    <ul>
                        <li>
                            <div class="contact-item">
                                <strong>Wechat</strong>
                                <img  src="{{ url_for('img/qrcode.jpg') }}" alt="{{ __('site.follow_us') }}"/>
                            </div>
                        </li>
                        <li>
                            <a href="https://github.com/chinalijinglun" target="_blank" class="contact-item">
                                <strong>Github</strong>
                                <i class="fa fa-github"></i>
                                github/chinalijinglun
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" class="contact-item">
                                <strong>Twitter</strong> 
                                <i class="fa fa-twitter"></i>
                                twitter/
                            </a>
                        </li>
                        <li>
                            <a href="mailto:281965992@qq.com" target="_blank" class="contact-item">
                                <strong>Email</strong>
                                <i class="fa fa-envelope"></i> 
                                281965992@qq.com
                            </a>
                        </li>
                    </ul> 
                </div>
            </div> 

         </div>
    </div>
</div>