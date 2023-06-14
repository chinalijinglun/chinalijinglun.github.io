{% extends '_layout.swig' %}

{% block page_class %}page-resume{% endblock %}

{% block main %}
    {% include '_partial/resume/main.swig' %}
{% endblock %}
   
{% block pagejs %}
{{ js('js/about') }}
{% endblock %}

