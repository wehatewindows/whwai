(function(){try{
 // The notch and home-indicator fallbacks only apply when WHWai runs as a Home Screen app (no browser UI).
 // In a browser tab the browser already keeps the page clear of them, so the fallbacks are 0.
 var d=document.documentElement,phone=/iPhone|iPod/.test(navigator.userAgent||""),
  standalone=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true,
  notch=standalone&&phone&&Math.max(screen.width,screen.height)>=812;
 d.style.setProperty("--safe-top-fallback",(standalone?(notch?59:phone?20:0):0)+"px");
 d.style.setProperty("--safe-bottom-fallback",(notch?34:0)+"px")
}catch(e){}})();
