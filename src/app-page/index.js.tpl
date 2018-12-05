import Vue from 'vue';
import App from './App';
{% if installRouter -%}
import router from './router';
{%- endif %}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {% if installRouter -%}
    router,
    {%- endif %}
    render: h => h(App)
});
