// Kill switch: set AI_ENABLED to false to turn WHWai off completely. The app scripts do not run, so the backend is never contacted.
var AI_ENABLED=true;
window.WHWAI_ON=AI_ENABLED;
if(!AI_ENABLED)document.documentElement.classList.add("ai-off");
(function(){try{
 // The notch and home-indicator fallbacks only apply when WHWai runs as a Home Screen app (no browser UI).
 // In a browser tab the browser already keeps the page clear of them, so the fallbacks are 0.
 var d=document.documentElement,phone=/iPhone|iPod/.test(navigator.userAgent||""),
  standalone=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true,
  notch=standalone&&phone&&Math.max(screen.width,screen.height)>=812;
 d.style.setProperty("--safe-top-fallback",(standalone?(notch?59:phone?20:0):0)+"px");
 d.style.setProperty("--safe-bottom-fallback",(notch?34:0)+"px")
}catch(e){}})();
// Hawaii-only: if the browser's time zone is not Hawaii's, hide the app and show the support screen.
// This is a light check only. The browser reports its own time zone, so it is not a security control.
(function(){try{
 var tz=Intl.DateTimeFormat().resolvedOptions().timeZone;
 if(tz&&tz!=="Pacific/Honolulu"&&tz!=="US/Hawaii")document.documentElement.classList.add("geo-block")
}catch(e){}})();
