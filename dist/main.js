(()=>{"use strict";const e=(e,t,n)=>{const a=document.createElement("div"),i=document.createElement("h2"),c=document.createElement("p"),o=document.createElement("span");return a.classList.add("menu-items"),i.textContent=e,c.textContent=t,o.textContent=n,a.append(i,c,o),a},t=document.querySelector("#content"),n=(()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("h2"),a=document.createElement("p");return e.classList.add("tab"),t.textContent="Welcome",n.classList.add("title"),n.textContent="Odin Momo Shop",a.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore quibusdam voluptatibus, voluptas dolores, placeat quo vel minima et reprehenderit exercitationem illo dolor corporis incidunt doloremque facilis in eum amet.",e.append(t,n,a),e.classList.add("active"),e})(),a=(()=>{const t=document.createElement("h1"),n=document.createElement("div");n.classList.add("tab"),t.textContent="Menu";const a=e("Jhol Momo","Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id minus, incidunt, mollitia tempora facilis expedita repellat, numquam consequuntur atque eaque qui","Rs.299"),i=e("Steam Momo","Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id minus, incidunt, mollitia tempora facilis expedita repellat, numquam consequuntur atque eaque qui","Rs.299"),c=e("Kothey Momo","Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id minus, incidunt, mollitia tempora facilis expedita repellat, numquam consequuntur atque eaque qui","Rs.299");return n.append(t,a,i,c),n})(),i=(()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("h2"),i=document.createElement("p"),c=document.createElement("p");return e.classList.add("tab"),t.classList.add("contact"),n.textContent="Contact",a.textContent="Do you have any questions?",i.textContent="Opposite to Kantipur Dental, Newroad,Pokhara",c.textContent="+97798560xxxxx",t.append(a,i,c),e.append(n,t),e})(),c=document.createElement("div");c.classList.add("navbar");const o=document.createElement("ul"),s=document.createElement("div"),d=e=>{const t=document.createElement("a"),n=document.createElement("li");return t.textContent=e,t.setAttribute("href","#"),n.appendChild(t),n},m=d("Home"),l=d("Menu"),r=d("Contact");m.addEventListener("click",(()=>{n.classList.add("active"),a.classList.remove("active"),i.classList.remove("active")})),l.addEventListener("click",(()=>{a.classList.add("active"),n.classList.remove("active"),i.classList.remove("active")})),r.addEventListener("click",(()=>{i.classList.add("active"),n.classList.remove("active"),a.classList.remove("active")})),o.append(m,l,r),c.appendChild(o),s.classList.add("tab-container"),s.append(n,i,a),t.append(c,s)})();