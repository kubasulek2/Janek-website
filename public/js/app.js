$(()=>{let h=-1;const t=e=>{let n=Math.floor(Math.random()*e.length);n===h?t(e):(h=n,e.each(function(h,t){h===n?$(t).css("display","block"):$(t).css("display","none")}))},e=(h,e,n)=>{let i=h;$(".nav-left > .next").on("click",function(){t(n),i===h&&$(this).prev().show(),$(e[i]).hide(),i+=2,$(e[i]).show(),e.length%2||i!==e.length-2?e.length%2&&i===e.length-1&&$(this).hide():$(this).hide()}),$(".nav-left > .prev").on("click",function(){t(n),e.length%2||i!==e.length-2?e.length%2&&i===e.length-1&&$(this).next().show():$(this).next().show(),$(e[i]).hide(),i-=2,$(e[i]).show(),i===h&&$(this).hide()})},n=(h,e,n)=>{let i=h;$(".nav-right > .next").on("click",function(){t(n),i===h&&$(this).prev().show(),$(e[i]).hide(),i+=2,$(e[i]).show(),e.length%2||i!==e.length-1?e.length%2&&i===e.length-2&&$(this).hide():$(this).hide()}),$(".nav-right > .prev").on("click",function(){t(n),e.length%2||i!==e.length-1?e.length%2&&i===e.length-2&&$(this).next().show():$(this).next().show(),$(e[i]).hide(),i-=2,$(e[i]).show(),i===h&&$(this).hide()})};(()=>{const h=$(".image"),i=$(".theme img");$(h[0]).show(),$(h[1]).show(),t(i),e(0,h,i),n(1,h,i)})()});
//# sourceMappingURL=app.js.map
