$(()=>{const a=$(".photos"),s=["images/kampania%20smieciowa/Segregacja-uMstWarszawa0090-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0119-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0244-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0324-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0336-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0350-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0370-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0394-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0418-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0430-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0439-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0452-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0578-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0608-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0636-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0645-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0672-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0713-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0798-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0834-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0881-sRGB.jpg","images/kampania%20smieciowa/Segregacja-uMstWarszawa0915-sRGB.jpg"];let i=-1,e=-1;const g=()=>{const a=[52,50.1,48.2,46.6,53.7,56,57.2,59],s=[6.5,7.7,8.3,9.2,10,10.9,11.6,12.1,13];let c=[],m=Math.floor(Math.random()*a.length),r=Math.floor(Math.random()*s.length);return r===e||m===i?g():(i=m,e=r,c.push(a[m]),c.push(s[r]),c)};let c=0;const m=a=>{let i,e=$('<figure class="picture">'),r=$("<img>");if(r.attr("src",a[c]),e.append(r),$(".main-container").append(e),e.on("click",function(a){a.stopPropagation()}),i=0===c?[52,7.95]:g(),e.css("left",`${i[0]}%`),e.css("top",`${i[1]}%`),c>=1&&c<=a.length-1){let a=$(".picture");$(a[c-1]).css("opacity",".9")}c<=a.length-1&&(r.one("click",function(){$(this).first().css("cursor","initial"),m(s)}),c++)};a.on("click",function(a){a.stopPropagation(),c=0,$("body").one("click",function(){let a=$(".picture");a.off(),a.remove()}),m(s)})});
//# sourceMappingURL=gallery.js.map
