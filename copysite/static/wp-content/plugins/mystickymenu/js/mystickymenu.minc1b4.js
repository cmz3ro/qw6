!function(e){"use strict";e(document).ready(function(e){if(e(option.mystickyClass)[0]){var t,i=document.querySelector(option.mystickyClass),o=parseInt(option.disableWidth),s=parseInt(option.disableLargeWidth),n=option.mystickyTransition,d=parseInt(option.activationHeight),a=option.adminBar,r=option.mysticky_disable_down;E();for(var l=i.parentNode,c=document.createElement("div"),p=0,f=0;f<l.childNodes.length;f++)if(l.childNodes[f]==i){p=f;break}c.id="mysticky-wrap",c.appendChild(i),l.insertBefore(c,l.childNodes[p]);var m,y,u=i.parentNode,h=document.createElement("div");if(h.id="mysticky-nav",u.replaceChild(h,i),h.appendChild(i),"0"==d)var w=!0;C(),B();var v,x=0;S(),H();var L=d;N(),I();var g="scrollY"in window,k=0;document.addEventListener("scroll",function(e){if(t>=o&&(0==s||t<=s)){var a=g?window.scrollY:document.documentElement.scrollTop;if(0<=a){if(a>=k)a>=d&&i.classList.add("myfixed"),a>=d&&h.classList.add("wrapfixed"),a>=d&&(c.style.height=m+"px"),a>=d&&(i.style.width=v+"px"),"on"==n&&("false"==r&&(h.style.top=a>=d+y-x?x+"px":"-"+y+"px"),m>y&&"false"==r&&(a<d+y&&(h.style.top="-"+m+"px"),a>=d+y&&(h.style.top=x+"px"))),h.classList.add("down"),h.classList.remove("up"),"on"==r&&(h.style.top="-"+(m+x)+"px");else{var l=g?window.scrollY:document.documentElement.scrollTop;!(l>L)&&(c.style.height=""),!(l>L)&&(i.style.width=""),"on"==n?(!(l>L)&&i.classList.remove("myfixed"),!(l>L)&&h.classList.remove("wrapfixed"),"false"==r&&l<L+y+200-x&&(h.style.top="-"+y+"px")):(!(l>L)&&i.classList.remove("myfixed"),!(l>L)&&h.classList.remove("wrapfixed")),h.classList.remove("down"),h.classList.add("up"),"on"==r&&(h.style.top=x+"px")}k=a}else h.classList.remove("up")}});var b=e(window).width();window.addEventListener("resize",W),window.addEventListener("orientationchange",W)}else console.log("myStickymenu: Entered Sticky Class does not exist, change it in Dashboard / Settings / myStickymenu / Sticky Class. ");function E(e){e=window;var i="inner";"innerWidth"in window||(i="client",e=document.documentElement||document.body),t=e[i+"Width"]}function C(){m=i.offsetHeight,parseInt(e(i).css("marginBottom"))>0&&(c.style.marginBottom=e(i).css("marginBottom")),"0"==m&&e(i).children().filter(":visible").each(function(){m=e(this).outerHeight(!0)})}function B(){i.classList.add("myfixed"),"0"==(y=e(".myfixed").outerHeight())&&e(".myfixed").children().filter(":visible").each(function(){y=e(this).outerHeight(!0)}),i.classList.remove("myfixed")}function S(){x="true"==a&&t>600&&e("#wpadminbar")[0]?e("#wpadminbar").height():0,h.style.top="on"==n?"-"+y+"px":x+"px"}function H(){var t=e(i)[0].getBoundingClientRect();v=t.width}function N(){1==w&&("on"==n&&(d=e(i).offset().top+m-x,L=e(i).offset().top+m-x,"on"==r&&(L=e(i).offset().top-x)),"fade"==n&&("false"==r&&(d=e(i).offset().top-x,L=e(i).offset().top-x),"on"==r&&(d=e(i).offset().top-x+m,L=e(i).offset().top-x)))}function I(){1==w&&m>y&&("on"==n?(L=d,"on"==r&&(L=d-y)):(d=m,L=m))}function W(){e(window).width()!=b&&(h.classList.remove("up"),h.classList.remove("down"),e(".wrapfixed")[0]?(i.classList.remove("myfixed"),h.classList.remove("wrapfixed")):(C(),i.style.removeProperty("width"),H()),E(),S(),B(),N(),I())}})}(jQuery);