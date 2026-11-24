/* Show focus rings for keyboard navigation and keyboard shortcuts, not pointer clicks. */
(function(){
 const root=document.documentElement;
 document.addEventListener("keydown",function(e){
  const t=e.target,typing=!!(t&&(t.isContentEditable||t.tagName==="TEXTAREA"||(t.tagName==="INPUT"&&!/^(button|checkbox|radio|submit|reset|file|range|color)$/i.test(t.type))));
  const navKey=e.key==="Tab"||((e.key.startsWith("Arrow"))&&!typing);
  if(navKey)root.classList.add("keyboard-nav");
 },true);
 const pointer=()=>root.classList.remove("keyboard-nav");
 document.addEventListener("pointerdown",pointer,true);
 document.addEventListener("mousedown",pointer,true);
})();
