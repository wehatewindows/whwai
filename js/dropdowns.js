if(window.WHWAI_ON){
/* Custom dropdowns (native select kept as the value store); menus float above everything */
(function(){
 const chev=ic('chevron-down',16,2);
 const check=ic('check',16,2.4);
 const desc=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,"value");
 let openApi=null;
 function place(menu){const a=menu._anchor;if(!a||!a.isConnected)return;const b=a.getBoundingClientRect();const w=Math.min(Math.max(b.width,220),innerWidth-16);menu.style.width=w+"px";const h=menu.offsetHeight;let left=b.left;if(left+w>innerWidth-8)left=Math.max(8,b.right-w);let top=b.bottom+6;if(top+h>innerHeight-8)top=Math.max(8,b.top-6-h);menu.style.left=left+"px";menu.style.top=top+"px"}
 function enhance(sel){
  if(sel._cs||sel.multiple||sel.size>1||sel.closest(".hst-pop"))return;sel._cs=true;
  const wrap=document.createElement("div");wrap.className="cs";
  const btn=document.createElement("button");btn.type="button";btn.className="cs-btn";btn.setAttribute("aria-haspopup","listbox");btn.setAttribute("aria-expanded","false");
  const menu=document.createElement("div");menu.className="cs-pop";menu.setAttribute("role","listbox");menu.hidden=true;
  sel.parentNode.insertBefore(wrap,sel);wrap.append(btn,menu,sel);
  sel.classList.add("cs-native");sel.tabIndex=-1;sel.setAttribute("aria-hidden","true");
  const label=()=>{const o=sel.options[sel.selectedIndex];btn.innerHTML='<span class="cs-val"></span>'+chev;btn.querySelector(".cs-val").textContent=o?o.text:"";btn.disabled=sel.disabled};
  const build=()=>{menu.innerHTML="";[...sel.options].forEach(o=>{const b=document.createElement("button");b.type="button";b.className="mi";b.setAttribute("role","option");b.setAttribute("aria-selected",String(o.selected));const c=document.createElement("div");c.textContent=o.text;const t=document.createElement("i");t.innerHTML=o.selected?check:"";b.append(c,t);b.onclick=()=>{desc.set.call(sel,o.value);sel.dispatchEvent(new Event("change",{bubbles:true}));api.close();btn.focus()};menu.appendChild(b)})};
  const api={menu,wrap,btn,
   open(){if(openApi&&openApi!==api)openApi.close();build();clearTimeout(menu._ct);menu.classList.remove("closing");menu._anchor=btn;document.body.appendChild(menu);menu.classList.add("portal");menu.hidden=false;place(menu);btn.setAttribute("aria-expanded","true");openApi=api},
   close(){if(menu.hidden||menu.classList.contains("closing"))return;btn.setAttribute("aria-expanded","false");if(openApi===api)openApi=null;menu.classList.add("closing");clearTimeout(menu._ct);menu._ct=setTimeout(()=>{menu.hidden=true;menu.classList.remove("closing","portal");menu.style.left=menu.style.top=menu.style.width="";wrap.appendChild(menu)},160)}};
  btn.onclick=()=>menu.hidden?api.open():api.close();
  btn.onkeydown=e=>{if(e.key==="Escape"){api.close()}else if(e.key==="ArrowDown"&&menu.hidden){e.preventDefault();api.open();const f=menu.querySelector(".mi");if(f)f.focus()}};
  menu.onkeydown=e=>{if(e.key==="Escape"){api.close();btn.focus()}};
  Object.defineProperty(sel,"value",{configurable:true,get(){return desc.get.call(this)},set(v){desc.set.call(this,v);label()}});
  sel.addEventListener("change",label);
  label();
 }
 document.addEventListener("pointerdown",e=>{if(openApi&&!openApi.wrap.contains(e.target)&&!openApi.menu.contains(e.target))openApi.close()},true);
 window.addEventListener("resize",()=>document.querySelectorAll(".cs-pop.portal").forEach(place));
 document.addEventListener("scroll",()=>document.querySelectorAll(".cs-pop.portal").forEach(place),true);
 const scan=root=>{(root.matches&&root.matches("select")?[root]:[]).concat([...(root.querySelectorAll?root.querySelectorAll("select"):[])]).forEach(enhance)};
 scan(document);
 new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)scan(n)}))).observe(document.body,{childList:true,subtree:true});
})();

/* Custom required-field messages (replaces the browser bubble) */
(function(){
 const hostOf=t=>t.closest(".pw-row,.cs,.access-form")||t;
 const msgOf=t=>{const v=t.validity;if(v.valueMissing)return "This field is required.";if(v.tooShort)return "Use at least "+t.minLength+" characters.";if(v.patternMismatch)return t.dataset.err||"Use only letters or numbers, "+(t.minLength||3)+" to "+(t.maxLength||20)+" characters.";if(v.tooLong)return "Use no more than "+t.maxLength+" characters.";return "Check this field."};
 const clear=t=>{const h=hostOf(t);const e=h.nextElementSibling;if(e&&e.classList.contains("field-err"))e.remove();t.classList.remove("has-err");t.removeAttribute("aria-invalid");const b=h.querySelector(".cs-btn");if(b)b.classList.remove("has-err")};
 const attach=t=>{if(!t._fe){t._fe=1;const c=()=>clear(t);t.addEventListener("input",c);t.addEventListener("change",c)}};
 window.fieldError=(t,msg,focus)=>{if(!t)return;const h=hostOf(t);let err=h.nextElementSibling;if(!(err&&err.classList.contains("field-err"))){err=document.createElement("div");err.className="field-err";err.setAttribute("role","alert");h.insertAdjacentElement("afterend",err)}
  err.textContent=msg;t.setAttribute("aria-invalid","true");t.classList.add("has-err");const b=h.querySelector(".cs-btn");if(b)b.classList.add("has-err");attach(t);
  if(focus){const f=(b&&!b.disabled)?b:t;if(f.focus)f.focus()}};
 document.addEventListener("invalid",e=>{const t=e.target;if(!(t instanceof HTMLElement))return;e.preventDefault();
  const first=!document._fvFocused;if(first){document._fvFocused=1;setTimeout(()=>{document._fvFocused=0},0)}
  window.fieldError(t,msgOf(t),first);
 },true);
})();

}
