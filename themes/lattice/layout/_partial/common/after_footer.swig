
{% if page.comments and theme.duoshuo.shortname and theme.duoshuo.ua_disable %}
<!-- build:js /js/bundle/duoshuo.js -->
{{ js('js/libs/ua-parser') }}
{{ js('js/mods/duoshuo') }}
<!-- endbuild -->
{% endif %}

{% if theme.busuanzi %}
<!--busuanzi-->
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
{% endif %}
