!function(){function e(){if(!r&&(r=!0,l)){for(var e=0;e<l.length;e++)l[e].call(window,[]);l=[]}}function t(e){var t=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t&&t(),e()}}function n(){if(!d){if(d=!0,document.addEventListener&&!a.opera&&document.addEventListener("DOMContentLoaded",e,!1),a.msie&&window==top&&function(){if(!r){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}e()}}(),a.opera&&document.addEventListener("DOMContentLoaded",function(){if(!r){for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].disabled)return void setTimeout(arguments.callee,0);e()}},!1),a.safari){var n;!function(){if(!r){if("loaded"!=document.readyState&&"complete"!=document.readyState)return void setTimeout(arguments.callee,0);if(void 0===n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++)"stylesheet"==t[o].getAttribute("rel")&&n++;var i=document.getElementsByTagName("style");n+=i.length}return document.styleSheets.length!=n?void setTimeout(arguments.callee,0):void e()}}()}t(e)}}var o=window.DomReady={},i=navigator.userAgent.toLowerCase(),a={version:(i.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(i),opera:/opera/.test(i),msie:/msie/.test(i)&&!/opera/.test(i),mozilla:/mozilla/.test(i)&&!/(compatible|webkit)/.test(i)},d=!1,r=!1,l=[];o.ready=function(e,t){n(),r?e.call(window,[]):l.push(function(){return e.call(window,[])})},n()}();