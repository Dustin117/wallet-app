var e=1024,t=2157,n=[0,240,255],r=[255,43,214],i=[57,255,136],a=[255,59,107],o=[255,184,0],s=[n,r,i,a],c=(e,t=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${t})`;function l(e){let t=(e%4+4)%4,n=Math.floor(t),r=t-n,i=s[n],a=s[(n+1)%4];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}var u=`01$#%&@*+=<>?/\\|{}[];:~^`,d=null,f=!1,p=null,m=[],h={x:235,y:330,w:390,h:660,pivotX:440,pivotY:990},g={x:350,y:625,w:270,h:200},_=[{x:603,y:1531,r:36,color:o},{x:534,y:1637,r:38,color:[160,120,255]},{x:350,y:1478,r:44,color:n},{x:490,y:1344,r:28,color:r},{x:637,y:1431,r:22,color:i}],v=[{x:40,y:112,w:450,h:140},{x:30,y:252,w:218,h:400}],y=13,b={x:818,y:108,w:184,h:395},x=0;function S(){if(d||Date.now()<x)return;let e=new Image;d=e,e.onerror=()=>{d===e&&(d=null),x=Date.now()+2e3},e.onload=()=>{let t=e;p=document.createElement(`canvas`),p.width=h.w,p.height=h.h;let n=p.getContext(`2d`);n.drawImage(t,h.x,h.y,h.w,h.h,0,0,h.w,h.h),n.globalCompositeOperation=`destination-in`;let r=n.createRadialGradient(h.w/2,h.h*.45,h.w*.25,h.w/2,h.h*.45,h.w*.5);r.addColorStop(0,`#000`),r.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=r,n.fillRect(0,0,h.w,h.h);for(let e of _){let n=e.r*2,r=document.createElement(`canvas`);r.width=r.height=n;let i=r.getContext(`2d`);i.drawImage(t,e.x-e.r,e.y-e.r,n,n,0,0,n,n),i.globalCompositeOperation=`multiply`,i.fillStyle=c(e.color),i.fillRect(0,0,n,n),i.globalCompositeOperation=`destination-in`;let a=i.createRadialGradient(e.r,e.r,e.r*.6,e.r,e.r,e.r);a.addColorStop(0,`#000`),a.addColorStop(1,`rgba(0,0,0,0)`),i.fillStyle=a,i.fillRect(0,0,n,n),m.push({c:r,w:n,h:n})}f=!0},e.src=`./hacker-1.webp`}var C=S,w=[],T=[],E=0,ee=-10,te=1960,D=()=>1130+Math.random()*60,ne=20;function re(e){let t=Math.floor(Math.random()*_.length);w.push({sprite:t,x:430+Math.random()*150,y:te,vy:200+Math.random()*90,wob:Math.random()*6,scale:1.1+Math.random()*.5,spin:Math.random()*6,breakY:D()}),E=e+.6+Math.random()*.7}var O=0,ie=0,ae=!1,oe=0,se=0,k={dx:15,dy:40,w:240,h:150,r:18},ce=520,le=325,ue=21,de=34,fe=null;function pe(e){let t=[],n=e;for(;n.length>ue;){let e=n.lastIndexOf(` `,ue);e<ue/2&&(e=ue),t.push(n.slice(0,e)),n=n.slice(e).trimStart()}return t.push(n),t}function me(e){let t=Array.from(document.querySelectorAll(`#loadTerm .tl`)).map(e=>e.firstChild?.textContent??``);if(!t.length)return;fe??=Object.assign(document.createElement(`canvas`),{width:ce,height:le});let n=fe.getContext(`2d`);n.clearRect(0,0,ce,le);let r=452/ue,a=Math.floor(r/.6),o=Math.round(a*1.12);n.font=`700 ${a}px ui-monospace, Menlo, Consolas, monospace`,n.textBaseline=`top`;let s=[];t.forEach((e,n)=>{let r=pe(e);r.forEach((e,i)=>s.push({text:e,alpha:n===t.length-1?1:.5+.35*(n+1)/t.length,last:n===t.length-1&&i===r.length-1}))});let l=s.slice(-6),u=291-l.length*o;n.shadowColor=c(i,.9),n.shadowBlur=10,l.forEach((e,t)=>{n.fillStyle=c(i,e.alpha),n.fillText(e.text,de,u+t*o),e.last&&Math.floor(O*3)%2==0&&n.fillRect(de+n.measureText(e.text).width+4,u+t*o+2,r*.8,a*.9)}),n.shadowBlur=0;let d=g.x+oe+k.dx,f=g.y+se+k.dy;e.save(),e.beginPath(),e.roundRect(d,f,k.w,k.h,k.r),e.clip(),e.fillStyle=`rgba(4,1,12,0.62)`,e.fillRect(d,f,k.w,k.h),e.globalCompositeOperation=`lighter`;let p=.8,m=e=>.5+Math.asin((2*e-1)*Math.sin(p))/(2*p);for(let t=0;t<24;t++){let n=t/24,r=(t+1)/24,i=(n+r)/2,a=k.h*(.9+.1*Math.sin(Math.PI*i));e.globalAlpha=.6+.4*Math.sin(Math.PI*i);let o=m(n)*ce,s=m(r)*ce;e.drawImage(fe,o,0,Math.max(1,s-o),le,d+n*k.w,f+(k.h-a)/2,k.w/24+.5,a)}e.globalAlpha=1,e.globalCompositeOperation=`source-over`;let h=e.createLinearGradient(d,f,d+k.w*.6,f+k.h);h.addColorStop(0,`rgba(255,190,245,0.2)`),h.addColorStop(.35,`rgba(255,190,245,0.03)`),h.addColorStop(1,`rgba(255,190,245,0)`),e.fillStyle=h,e.fillRect(d,f,k.w,k.h*.55),e.strokeStyle=`rgba(0,0,0,0.6)`,e.lineWidth=6,e.beginPath(),e.roundRect(d,f,k.w,k.h,k.r),e.stroke(),e.restore(),e.save(),e.globalCompositeOperation=`lighter`,e.globalAlpha=.18;let _=e.createRadialGradient(d+k.w/2,f+k.h/2,k.w*.2,d+k.w/2,f+k.h/2,k.w*.85);_.addColorStop(0,c(i)),_.addColorStop(1,c(i,0)),e.fillStyle=_,e.fillRect(d-k.w*.5,f-k.h*.6,k.w*2,k.h*2.2),e.restore()}function he(n,s,x,C=!1){O+=s,S();let D=n.getContext(`2d`),ie=Math.min(2,window.devicePixelRatio||1),ae=n.clientWidth||340,k=x??Math.round(ae*ie),ce=Math.round(k*t/e);if(n.width!==k&&(n.width=k,n.height=ce),D.setTransform(1,0,0,1,0,0),D.globalCompositeOperation=`source-over`,D.fillStyle=`#000`,D.fillRect(0,0,k,ce),!f||!d)return;let le=k/e;D.setTransform(le,0,0,le,0,0),D.drawImage(d,0,0),oe=Math.sin(O*.6)*7+Math.sin(O*1.7)*2.5+(Math.sin(O*.21)>.8?6:0),se=Math.sin(O*.45+1)*3;let ue=Math.sin(O*.6+.4)*.018;p&&(D.save(),D.translate(h.pivotX+oe,h.pivotY+se),D.rotate(ue),D.drawImage(p,h.x-h.pivotX,h.y-h.pivotY),D.restore());let de=v.map(e=>Math.floor(e.h/y)),fe=de[0]+de[1],pe=fe*.32+2.5,he=O%pe,ge=Math.min(fe,he/.32),_e=0;D.fillStyle=`#000`;let ve=null;v.forEach((e,t)=>{for(let n=0;n<de[t];n++,_e++){let t=e.y+n*y;if(_e+1<=ge)continue;let r=_e<ge?ge-_e:0,i=e.w*r;D.fillRect(e.x+i,t,e.w-i,y),r>0&&(ve={x:e.x+i,y:t})}});let ye=O*18%b.h;D.drawImage(d,b.x,b.y+ye,b.w,b.h-ye,b.x,b.y,b.w,b.h-ye),D.drawImage(d,b.x,b.y,b.w,ye,b.x,b.y+b.h-ye,b.w,ye),D.globalCompositeOperation=`multiply`,D.fillStyle=`rgb(140,165,255)`,D.fillRect(0,0,e,t);let be=D.createRadialGradient(300,1450,80,300,1450,800);be.addColorStop(0,`rgba(215,150,255,1)`),be.addColorStop(1,`rgba(140,165,255,0)`),D.fillStyle=be,D.fillRect(0,600,650,1557);let xe=D.createLinearGradient(600,200,1e3,1950);for(let e=0;e<=8;e++)xe.addColorStop(e/8,c(l(O*.45+e*.7)));D.fillStyle=xe,D.beginPath(),D.moveTo(612,180),D.lineTo(1024,180),D.lineTo(1024,1990),D.lineTo(890,1990),D.lineTo(885,1290),D.lineTo(645,1290),D.lineTo(612,1e3),D.closePath(),D.fill();let A=D.createLinearGradient(400,0,600,0);A.addColorStop(0,`rgba(120,200,255,1)`),A.addColorStop(.5,`rgba(225,255,255,1)`),A.addColorStop(1,`rgba(120,200,255,1)`),D.fillStyle=A,D.fillRect(400,830,200,1130),D.fillStyle=c(i),v.forEach(e=>D.fillRect(e.x-4,e.y-4,e.w+8,e.h+8)),D.fillStyle=c(r),D.fillRect(35,62,970,48),D.fillStyle=c(a),D.fillRect(b.x-6,b.y-6,b.w+12,b.h+12);let Se=ee>O-.3?i:r,Ce=g.x+oe+g.w/2,we=g.y+se+g.h/2;D.save(),D.translate(Ce,we),D.scale(1,g.h/g.w);let Te=D.createRadialGradient(0,0,g.w*.3,0,0,g.w*.62);Te.addColorStop(0,c(Se)),Te.addColorStop(1,c(Se,0)),D.fillStyle=Te,D.fillRect(-g.w,-g.w,g.w*2,g.w*2),D.restore(),D.fillStyle=`rgb(120,240,255)`,D.beginPath(),D.moveTo(660,1300),D.lineTo(880,1300),D.lineTo(900,2e3),D.lineTo(610,2e3),D.lineTo(630,1560),D.closePath(),D.fill();let j=D.createRadialGradient(715,1420,8,715,1420,70);j.addColorStop(0,c(o)),j.addColorStop(1,`rgba(120,240,255,1)`),D.fillStyle=j,D.fillRect(640,1340,150,160),D.globalCompositeOperation=`lighter`,D.setTransform(1,0,0,1,0,0),D.globalAlpha=.55,D.drawImage(n,0,0),D.globalAlpha=1,D.setTransform(le,0,0,le,0,0);let M=O*.45%1.8;if(M<1){let e=g.x+oe+g.w*M,t=D.createLinearGradient(e-40,0,e+40,0);t.addColorStop(0,`rgba(255,43,214,0)`),t.addColorStop(.5,`rgba(255,160,240,0.55)`),t.addColorStop(1,`rgba(255,43,214,0)`),D.fillStyle=t,D.fillRect(e-40,g.y+se+10,80,g.h-20)}if(ve&&Math.floor(O*3)%2==0){let e=ve;D.fillStyle=c(i,.9),D.fillRect(e.x+2,e.y+1,8,11)}O>=E&&w.length<4&&re(O);for(let e of w){let t=m[e.sprite],n=_[e.sprite],r=e.x+Math.sin(O*1.6+e.wob)*12,a=.35+.65*Math.abs(Math.cos(O*2.2+e.spin)),o=t.w*e.scale*a,c=t.h*e.scale;if(D.globalAlpha=Math.min(1,(te-e.y)/80),D.drawImage(t.c,r-o/2,e.y-c/2,o,c),D.globalAlpha=1,e.y-=e.vy*s,e.y<e.breakY){for(let t=0;t<6;t++){let a=(t+.5)/6-.5,s=4+Math.floor(Math.random()*6);T.push({x:r+a*o*1.1,y:e.y+(Math.random()-.5)*c*.5,top:e.y-c*.35,vy:110+Math.random()*150,chars:Array.from({length:s},()=>u[Math.floor(Math.random()*24)]),life:.9+Math.random()*.8,max:1.7,color:Math.random()<.6?i:n.color})}ee=O,e.y=-999}}for(let e=w.length-1;e>=0;e--)w[e].y<-500&&w.splice(e,1);D.font=`700 26px ui-monospace, Menlo, monospace`,D.textAlign=`center`,D.textBaseline=`middle`;for(let e of T){e.y+=e.vy*s,e.life-=s,Math.random()<.3&&(e.chars[Math.floor(Math.random()*e.chars.length)]=u[Math.floor(Math.random()*24)]);let t=Math.max(0,Math.min(1,e.life*1.5));e.chars.forEach((n,r)=>{let i=e.y-r*ne;i<e.top||(D.fillStyle=r===0?`rgba(220,255,235,${t})`:c(e.color,t*(1-r/(e.chars.length+1))),D.fillText(n,e.x,i))})}for(let e=T.length-1;e>=0;e--)T[e].life<=0&&T.splice(e,1);C&&me(D),D.globalCompositeOperation=`source-over`,D.fillStyle=`rgba(0,0,0,0.16)`;for(let n=0;n<t;n+=4)D.fillRect(0,n,e,1.5);let N=O-ee;N<.25&&(D.fillStyle=c(i,(.25-N)*.5),D.fillRect(0,0,e,t)),D.setTransform(1,0,0,1,0,0)}var ge=()=>`<div class="hackloader" id="hackloader"><canvas class="hackart" id="hackart" aria-hidden="true"></canvas></div>`,_e=(e,t)=>he(e,t,void 0,!0),ve=(e,t,n)=>he(e,t,n),ye=()=>({x:g.x+oe,y:g.y+se,w:g.w,h:g.h}),be=()=>(document.getElementById(`after`)?.childElementCount??0)>0;function xe(){let e=document.getElementById(`hackart`);if(e&&_e(e,0),ae)return;ae=!0,ie=0;let t=e=>{let n=document.getElementById(`hackart`);if(n&&be()&&(document.getElementById(`hackloader`)?.remove(),document.getElementById(`app`)?.classList.remove(`loading`)),!n||be())ae=!1;else{if(!ie||e-ie>=40){let t=ie?Math.min(.1,(e-ie)/1e3):1/24;ie=e,_e(n,t)}requestAnimationFrame(t)}};requestAnimationFrame(t)}var A=window.Telegram?.WebApp;function Se(){return!!A&&A.isVersionAtLeast(`9.0`)&&!!A.SecureStorage}var Ce=15e3;function we(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>r(Error(`Telegram didn't respond (${e}).`)),Ce);try{t((t,a,o)=>{clearTimeout(i),t?r(Error(`${e} failed: ${t}`)):n({value:a,canRestore:!!o})})}catch(t){clearTimeout(i),r(Error(`${e} failed: ${t instanceof Error?t.message:String(t)}`))}})}var Te={get:e=>we(`secure read`,t=>A.SecureStorage.getItem(e,t)),set:(e,t)=>we(`secure save`,n=>A.SecureStorage.setItem(e,t,n)),remove:e=>we(`secure remove`,t=>A.SecureStorage.removeItem(e,t)),restore:e=>we(`secure restore`,t=>A.SecureStorage.restoreItem(e,t))},j={get:async e=>(await we(`device read`,t=>A.DeviceStorage.getItem(e,t))).value,set:(e,t)=>we(`device save`,n=>A.DeviceStorage.setItem(e,t,n)),remove:e=>we(`device remove`,t=>A.DeviceStorage.removeItem(e,t))};function M(e){A?.HapticFeedback?.notificationOccurred(e)}function N(){A?.HapticFeedback?.impactOccurred?.(`light`)}function Ee(){A?.HapticFeedback?.impactOccurred?.(`heavy`)}function De(e){A?A.openLink(e):window.open(e,`_blank`)}var Oe=[57,255,136],ke=[0,240,255],Ae=[255,43,214],je=(e,t=1)=>`rgba(${e[0]},${e[1]},${e[2]},${t})`,Me=`SNATCHED`,Ne=`01$#%&@*+=<>?/\\|`,Pe=e=>`900 ${e}px Orbitron, Rajdhani, sans-serif`,Fe=0,Ie=.85,Le=1.25,Re=1.65,ze=1.3,Be=3,P={covered:.32,slam:.4,hacker:1.0333333333333332,final:4.633333333333333},Ve=.95/Be,He=P.final+Ve,Ue=He+.4,We=e=>1-(1-Math.min(1,Math.max(0,e)))**3,F=(e,t)=>e+Math.random()*(t-e),Ge=e=>e[Math.floor(Math.random()*e.length)],Ke=e=>[...Me].map(t=>Math.random()<e?Ge([...Ne]):t).join(``);function qe(e,t,n,r,i=document.createElement(`canvas`)){i.width=e,i.height=t;let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=i.getContext(`2d`);o.font=Pe(100);let s=t=>100*e*r/o.measureText(t).width,c=Math.min(s(Me),s(`SNATCHED`)*1.5,t*.55);return{c:i,ctx:o,wc:a,wctx:a.getContext(`2d`),W:e,H:t,u:n,base:c}}function Je(e,t=0){e.ctx.fillStyle=`#04010c`,e.ctx.fillRect(0,0,e.W,e.H),t>0&&(e.ctx.fillStyle=`rgba(230,255,240,${t})`,e.ctx.fillRect(0,0,e.W,e.H))}function Ye(e,t=.22){e.ctx.fillStyle=`rgba(0,0,0,${t})`;for(let t=0;t<e.H;t+=3*e.u)e.ctx.fillRect(0,t,e.W,e.u)}function Xe(e,t){let{W:n,H:r,u:i,wctx:a,ctx:o}=e,{x:s=n/2,y:c=r/2,size:l=1,rot:u=0,skew:d=0,color:f=Oe,split:p=0,slices:m=0,blur:h=0,alpha:g=1}=t,_=t.text??Me;a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,n,r),a.translate(s,c),a.rotate(u),a.transform(1,0,d,1,0,0),a.font=Pe(e.base*l),a.textAlign=`center`,a.textBaseline=`middle`,a.filter=h>0?`blur(${h*i}px)`:`none`,p&&(a.globalCompositeOperation=`lighter`,a.fillStyle=je(Ae,.85),a.fillText(_,-p*i,0),a.fillStyle=je(ke,.85),a.fillText(_,p*i,p*i*.3)),a.globalCompositeOperation=`source-over`,a.shadowColor=je(f,.9),a.shadowBlur=30*i,a.fillStyle=je(f),a.fillText(_,0,0),a.shadowBlur=0,a.fillStyle=`rgba(255,255,255,0.55)`,a.fillText(_,0,0),a.filter=`none`,o.save(),o.globalAlpha=g,o.drawImage(e.wc,0,0);for(let t=0;t<m;t++){let t=F(c-e.base*l*.6,c+e.base*l*.5),r=F(3,22)*i;o.fillStyle=`#04010c`,o.fillRect(0,t,n,r),o.drawImage(e.wc,0,t,n,r,F(-60,60)*i,t,n,r)}o.restore()}var Ze=null,Qe=0,$e=-1;function et(e,t){let{W:n,H:r,ctx:i}=e;Ze||(Ze=document.createElement(`canvas`),Ze.width=Math.ceil(n/4),Ze.height=Math.ceil(r/4));let a=Ze.getContext(`2d`),o=a.createImageData(Ze.width,Ze.height),s=o.data;for(let e=0;e<s.length;e+=4){let t=Math.random()*255,n=Math.random();s[e]=n<.05?0:t,s[e+1]=n>.96?40:t,s[e+2]=n>.93&&n<.96?120:t,s[e+3]=255}a.putImageData(o,0,0),t>Qe+.2&&Math.random()<.09&&(Qe=t+F(.08,.22));let c=.5+.5*Math.sin(t*9)*Math.sin(t*3.7),l=t<Qe?F(.38,.58):.08+.2*Math.max(0,c);i.save(),i.imageSmoothingEnabled=!1,i.globalAlpha=l,i.drawImage(Ze,0,0,n,r);for(let e=0;e<3;e++){let e=F(0,r),t=F(4,24);i.drawImage(Ze,0,e/r*Ze.height,Ze.width,t/r*Ze.height,F(-60,60),e,n,t)}($e<0||t-$e>1.1+Math.random()*.6)&&($e=t);let u=(t-$e)/.7;if(u<1){let e=-.2*r+u*1.4*r,t=r*.22,a=i.createLinearGradient(0,e,0,e+t);a.addColorStop(0,`rgba(120,255,200,0)`),a.addColorStop(.7,`rgba(160,255,220,0.35)`),a.addColorStop(.75,`rgba(220,255,240,0.6)`),a.addColorStop(1,`rgba(120,255,200,0)`),i.globalAlpha=1,i.globalCompositeOperation=`lighter`,i.fillStyle=a,i.fillRect(0,e,n,t),i.globalCompositeOperation=`source-over`}i.globalAlpha=.5,i.fillStyle=`#000`,i.fillRect(0,(1-t*.8%1.3)*r,n,r*.08),i.restore(),Ye(e,.25)}function tt(e,t,n,r=``){let{W:i,H:a,u:o}=e,s=(e,n=0)=>{Je(e,n),r===`g`&&et(e,t)};if(e.ctx.setTransform(1,0,0,1,0,0),e.ctx.globalAlpha=1,e.ctx.globalCompositeOperation=`source-over`,t<Ie){n(`slam`+r);let c=(t-Fe)/.2,l=c<1?2.8-1.8*We(c):1+(t>.55&&t<.65?.18:0),u=t<.05||t>.55&&t<.59;s(e,u?.9:0),Xe(e,{size:l,y:a/2+(Math.random()<.2?F(-30,30)*o:0),x:i/2+(Math.random()<.2?F(-20,20)*o:0),split:c<1?26:F(3,12),slices:Math.random()<.3?4:0,color:u?[20,0,40]:Oe,text:Math.random()<.12?Ke(.25):Me}),Ye(e)}else if(t<Le){n(`diag`+r);let c=We((t-Ie)/.15),l=-.38*c,u=1+.35*c;s(e,t-Ie<.04?.6:0);for(let t=3;t>=1;t--)Xe(e,{size:u,rot:l,skew:-.25*c,x:i/2-t*22*o*c,y:a/2+t*34*o*c,color:t%2?Ae:ke,alpha:.09*(4-t)});Xe(e,{size:u,rot:l,skew:-.25*c,split:F(6,16),slices:Math.random()<.4?5:0,color:Math.floor(t*12)%4==0?Ae:Oe,x:i/2+F(-6,6)*o}),Ye(e)}else if(t<Re){let n=(t-Le)/.3999999999999999,r=Math.sin(Math.PI*Math.min(1,n*1.15))*16,c=We((n-.45)/.55);s(e),Xe(e,{size:1.35-.35*c,rot:-.38*(1-c),skew:-.25*(1-c),blur:r,split:r*.6});for(let t=0;t<3;t++){let r=(n*1.6+t/3)%1*a,s=50*o;e.ctx.drawImage(e.c,0,r,i,s,F(-30,30)*o,r,i,s);let c=e.ctx.createLinearGradient(0,r,0,r+s);c.addColorStop(0,`rgba(180,255,220,0)`),c.addColorStop(.5,`rgba(180,255,220,0.25)`),c.addColorStop(1,`rgba(180,255,220,0)`),e.ctx.fillStyle=c,e.ctx.fillRect(0,r,i,s)}Ye(e,.3)}else{s(e);let t=r===`g`&&Math.random()<.12;Xe(e,{split:t?F(8,16):3,slices:t?4:0,text:t?Ke(.3):Me,color:t&&Math.random()<.5?Ae:Oe,x:i/2+(Math.random()<.3?F(-4,4)*o:0)}),Ye(e)}}var I={dx:15,dy:40,w:240,h:150,r:18},nt=48,rt=!1;function it(t=`SNATCHED`){if(Ee(),rt||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return setTimeout(Ee,140),Promise.resolve();rt=!0,Me=t;let n=()=>{},r=new Promise(e=>n=e),i=document.createElement(`canvas`);i.className=`snatchfx`,i.setAttribute(`role`,`img`),i.setAttribute(`aria-label`,t),document.body.append(i);let a=Math.min(2,window.devicePixelRatio||1),o=qe(Math.round(window.innerWidth*a),Math.round(window.innerHeight*a),a,.88,i),{W:s,H:c,ctx:l}=o,u=qe(640,250,1,.94),d=document.createElement(`canvas`),f=document.createElement(`canvas`);f.width=s,f.height=c;let p=f.getContext(`2d`),m=document.createElement(`canvas`);m.width=Math.ceil(s/(3*a)),m.height=Math.ceil(c/(3*a));let h=m.getContext(`2d`),g=h.createImageData(m.width,m.height);function _(e,t=`source-over`){if(e<=0)return;let n=g.data;for(let e=0;e<n.length;e+=4){let t=Math.random()*255,r=Math.random();n[e]=r<.04?0:t,n[e+1]=r>.97?40:t,n[e+2]=r>.94&&r<.97?120:t,n[e+3]=255}h.putImageData(g,0,0),l.save(),l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation=t,l.globalAlpha=e,l.imageSmoothingEnabled=!1,l.drawImage(m,0,0,s,c);for(let e=0;e<4;e++){let e=F(0,c),t=F(4,26)*a;l.drawImage(m,0,e/c*m.height,m.width,t/c*m.height,F(-80,80)*a,e,s,t)}let r=w*1.7%1.4*c-.2*c;l.globalAlpha=e*.6,l.fillStyle=`#000`,l.fillRect(0,r,s,c*.1),l.restore()}let v=e=>e<.1?.4*(1-e/.1)+.12:Math.random()<.14?F(.22,.36):F(.07,.14),y=Array.from({length:14},(e,t)=>({delay:F(0,.14),from:t%2?1:-1}));function b(e){l.clearRect(0,0,s,c);let t=c/14;y.forEach((n,r)=>{let i=We((e-n.delay)/.16),o=s*i,c=n.from<0?0:s-o;l.fillStyle=`#04010c`,l.fillRect(c,r*t,o,t+1),i>0&&i<1&&(l.fillStyle=je(r%3==0?Ae:r%3==1?ke:Oe,.9),l.fillRect(n.from<0?o-4*a:c,r*t,4*a,t+1))}),_(.16,`source-atop`)}function x(e){l.fillStyle=`rgba(230,255,240,${.3*(1-e)})`,l.fillRect(0,0,s,c);for(let e=0;e<5;e++){let e=F(0,c),t=F(6,40)*a;l.drawImage(i,0,e,s,t,F(-50,50)*a,e,s,t)}}function S(t,n){ve(d,n,e);let r=ye(),o=d.getContext(`2d`),f=r.x+I.dx,p=r.y+I.dy;t<.4?(Je(u),Ye(u)):tt(u,(t-.4)*ze,()=>{},`g`),o.save(),o.beginPath(),o.roundRect(f,p,I.w,I.h,I.r),o.clip(),o.fillStyle=`rgba(4,1,12,0.82)`,o.fillRect(f,p,I.w,I.h),o.globalCompositeOperation=`lighter`;let m=.95;for(let e=0;e<nt;e++){let t=e/nt,n=(e+1)/nt,r=e=>.5+Math.asin((2*e-1)*Math.sin(m))/(2*m),i=r(t)*u.W,a=r(n)*u.W,s=(t+n)/2,c=.9+.1*Math.sin(Math.PI*s),l=I.h*c;o.globalAlpha=.55+.45*Math.sin(Math.PI*s),o.drawImage(u.c,i,0,Math.max(1,a-i),u.H,f+t*I.w,p+(I.h-l)/2,I.w/nt+.5,l)}o.globalAlpha=1,o.globalCompositeOperation=`source-over`,o.fillStyle=`rgba(0,0,0,0.38)`;for(let e=p;e<p+I.h;e+=4)o.fillRect(f,e,I.w,1.6);let h=o.createLinearGradient(f,p,f+I.w*.6,p+I.h);h.addColorStop(0,`rgba(255,190,245,0.22)`),h.addColorStop(.35,`rgba(255,190,245,0.04)`),h.addColorStop(1,`rgba(255,190,245,0)`),o.fillStyle=h,o.fillRect(f,p,I.w,I.h*.55),o.strokeStyle=`rgba(0,0,0,0.7)`,o.lineWidth=8,o.beginPath(),o.roundRect(f,p,I.w,I.h,I.r),o.stroke(),o.restore(),o.save(),o.globalCompositeOperation=`lighter`,o.filter=`blur(18px)`,o.globalAlpha=.35,o.drawImage(u.c,f-20,p-12,I.w+40,I.h+24),o.restore();let g=t/(P.final-P.hacker),_=g<.5?4*g*g*g:1-(-2*g+2)**3/2,v=s/d.width,y=v+(s*.68/I.w-v)*_,b=d.width/2+(f+I.w/2-d.width/2)*_,x=d.height/2+(p+I.h/2+150-d.height/2)*_,S=s/2-b*y,C=c/2-x*y;S=Math.min(0,Math.max(s-d.width*y,S)),C=d.height*y>=c?Math.min(0,Math.max(c-d.height*y,C)):(c-d.height*y)/2,l.fillStyle=`#04010c`,l.fillRect(0,0,s,c);let w=Math.random()<.12?F(-5,5)*a:0;if(l.drawImage(d,S+w,C,d.width*y,d.height*y),Math.random()<.15)for(let e=0;e<3;e++){let e=F(0,c),t=F(4,30)*a;l.drawImage(i,0,e,s,t,F(-30,30)*a,e,s,t)}}let C=performance.now(),w=0,T=1/0,E=new Set,ee=e=>{E.has(e)||(E.add(e),Ee())};i.addEventListener(`pointerdown`,()=>{n(),T===1/0&&(T=w)});let te=e=>{let t=(e-C)/1e3,r=Math.min(.1,Math.max(0,t-w));w=t;let u=T<1/0?Math.max(He,He+(t-T)):t;if(l.setTransform(1,0,0,1,0,0),l.globalAlpha=1,l.globalCompositeOperation=`source-over`,u<P.slam)b(u),u>=P.covered&&n(),u>P.slam-.06&&(l.fillStyle=`#fff`,l.fillRect(0,c/2-3*a,s,6*a));else if(u<P.hacker){n(),tt(o,(u-P.slam)*Be,ee);let e=(u-P.slam)*Be,t=Math.min(...[Fe,Ie,Le].map(t=>e>=t?(e-t)/Be:9));_(v(t))}else if(u<P.final)ee(`hacker`),S(u-P.hacker,r),Ye(o,.18),u-P.hacker<.08&&x((u-P.hacker)/.08),u-P.hacker<.18&&_(.32*(1-(u-P.hacker)/.18));else if(u<He){ee(`final`);let e=(u-P.final)*Be,t=e/.18,n=e>.4&&e<.52;Je(o,e<.04?.8:0),Xe(o,{size:t<1?1.9-.9*We(t):n?1.25:1,rot:n?.3:0,skew:n?.3:0,split:t<1?20:n?18:2+Math.sin(u*30)*2,slices:n||Math.random()<.1?5:0,color:n?Ae:Oe}),Ye(o),_(v(u-P.final)),p.clearRect(0,0,s,c),p.drawImage(i,0,0)}else if(u<Ue){n(),E.has(`buffered`)||(E.add(`buffered`),p.getImageData(s>>1,c>>1,1,1).data[3]===0&&(Je(o),Xe(o,{}),p.drawImage(i,0,0)));let e=(u-He)/(Ue-He),t=Math.max(.004,1-We(e/.45)),r=e<.45?1:Math.max(.01,1-We((e-.45)/.35));l.fillStyle=`#04010c`,l.fillRect(0,0,s,c),l.drawImage(f,s/2-s*r/2,c/2-c*t/2,s*r,c*t),l.globalCompositeOperation=`lighter`,l.fillStyle=`rgba(220,255,240,${Math.min(1,e*3)*(1-e)})`,l.fillRect(s/2-s*r/2,c/2-Math.max(2*a,c*t/2),s*r,Math.max(4*a,c*t)),i.style.opacity=e<.6?`1`:String(1-(e-.6)/.4)}else{i.remove(),rt=!1,n();return}requestAnimationFrame(te)};return requestAnimationFrame(te),r}var at=`@font-face{font-family:Orbitron;font-weight:400 900;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:500;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:700;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}:root{--bg:#05010f;--text:#e8f9ff;--hint:#8f9cc8;--cyan:#00f0ff;--pink:#ff2bd6;--panel:#0a0f24d9;--row:#0c0a22d9;--danger:#ff3b6b;--amber:#ffb800;--button:var(--cyan);--display:"Orbitron", "Rajdhani", sans-serif;--cut:polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));--cut-s:polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px));--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}*{box-sizing:border-box}html{background:var(--bg)}body{min-height:100vh;color:var(--text);-webkit-tap-highlight-color:transparent;background:linear-gradient(#05010f 0%,#0b0420 55%,#1a0633 100%) fixed;margin:0;font:500 17px/1.4 Rajdhani,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body:before{content:"";z-index:0;pointer-events:none;transform-origin:bottom;background:linear-gradient(#ff2bd626 2px,#0000 2px) 0 0/100% 26px,linear-gradient(90deg,#00f0ff38 2px,#0000 2px) 0 0/34px 100%;height:42vh;animation:3s linear infinite floor;position:fixed;bottom:0;left:-50%;right:-50%;transform:perspective(220px)rotateX(58deg);-webkit-mask:linear-gradient(#0000,#000 70%);mask:linear-gradient(#0000,#000 70%)}@keyframes floor{to{background-position:0 26px,0 0}}body:after{content:"";z-index:50;pointer-events:none;background:repeating-linear-gradient(0deg,#ffffff07 0 1px,#0000 1px 3px);position:fixed;inset:0}main{z-index:1;max-width:480px;margin:0 auto;padding:16px 16px 40px;position:relative}.brand{align-items:center;gap:10px;margin:0 0 16px;display:flex}.brand .logo{background:var(--cyan);color:#000;width:38px;height:38px;clip-path:var(--cut-s);box-shadow:0 0 18px var(--cyan);flex:none;place-items:center;font-size:20px;display:grid}.brand .name{font:900 19px/1 var(--display);letter-spacing:1px;color:#fff;text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 16px #00f0ff88;position:relative}.glitch:before,.glitch:after{content:attr(data-text);pointer-events:none;position:absolute;inset:0;overflow:hidden}.glitch:before{color:var(--cyan);text-shadow:-2px 0 var(--pink);animation:3.2s step-end infinite slice}.glitch:after{color:var(--pink);text-shadow:2px 0 var(--cyan);animation:2.7s step-end infinite reverse slice}@keyframes slice{0%,86%,to{clip-path:inset(0 0 100%);transform:none}88%{clip-path:inset(20% 0 55%);transform:translate(-3px)}90%{clip-path:inset(60% 0 10%);transform:translate(3px)}92%{clip-path:inset(40% 0 35%);transform:translate(-2px)}94%{clip-path:inset(0 0 100%)}}h1{font:900 18px/1.2 var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--cyan);text-shadow:0 0 12px #00f0ff88;margin:6px 0 12px}h2{font:600 12px/1.2 var(--display);text-transform:uppercase;letter-spacing:2.5px;color:var(--hint);margin:22px 2px 10px}p{margin:0 0 14px}b{font-weight:700}.muted{color:var(--hint);font-size:15px}.note,.warning{border-left:3px solid var(--amber);clip-path:var(--cut-s);background:#ffb80014;padding:10px 12px;font-size:15px}.warning{border-left-color:var(--danger);background:#ff3b6b17}.error{color:var(--danger);font-size:15px}a{color:var(--cyan)}a.tx,a.acct,a.coin{color:var(--cyan);border-bottom:1px dashed #00f0ff88;text-decoration:none}.total{clip-path:var(--cut);background:var(--panel);border:1px solid var(--cyan);margin:0 0 14px;padding:16px;position:relative;box-shadow:inset 0 0 22px #ff2bd626,inset 0 0 0 1px #00f0ff55}.total small{font:600 11px var(--display);text-transform:uppercase;letter-spacing:2px;color:var(--hint);display:block}.total .big{font:900 32px/1.15 var(--display);color:var(--cyan);text-shadow:0 0 14px #00f0ffaa;word-break:break-word;margin:6px 0 2px}.total .big .unit{margin-left:6px;font-size:16px}.total .sub{color:var(--pink);font-weight:700}.ticking{text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ffaa}.card{clip-path:var(--cut);background:var(--panel);border:1px solid #00f0ff66;padding:14px;position:relative}.card .label{font:600 11px var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--hint)}.card .label .bal{color:var(--cyan);letter-spacing:0;text-transform:none;font:700 15px Rajdhani,sans-serif}.card .address{word-break:break-all;color:var(--text);margin:6px 0 10px;font:14px/1.35 ui-monospace,Menlo,monospace}.card button{margin:0}.list{margin:0 0 16px;padding:0;list-style:none}.list li{background:var(--row);border-left:3px solid var(--pink);clip-path:var(--cut-s);align-items:center;gap:10px;margin:0 0 8px;padding:10px 12px;display:flex}.list li>span{color:var(--cyan);font:700 13px var(--display);flex:none;width:36px}.list li code{word-break:break-word;flex:1;min-width:0;font:500 16px/1.35 Rajdhani,sans-serif}.list li code small,.list li small{color:var(--hint);font:500 14px/1.35 Rajdhani,sans-serif}.list li .bal{color:var(--cyan);font-weight:700}.coins li{border-left-color:var(--cyan)}.coins .grow{flex:1;min-width:0}.coins .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:17px;display:block;overflow:hidden}.coins .grow small{display:block}.coins .right{text-align:right;white-space:nowrap;font-size:16px;font-weight:700}.coins .right small{font-weight:500;display:block}.coins .right.up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.coins .right.down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.coins .right .move{font:700 12px var(--display);letter-spacing:.5px}.coins .right.up .move{color:#39ff88}.coins .right.down .move{color:var(--danger)}.coins li:has(.right.up){border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.coins li:has(.right.down){border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.live{font:700 10px var(--display);letter-spacing:1.5px;color:#39ff88;vertical-align:2px;border:1px solid #39ff88aa;margin-left:8px;padding:1px 6px;animation:2s ease-in-out infinite livePulse;display:inline-block}.live:before{content:"● "}.live.beat{animation:.6s ease-out liveBeat,2s ease-in-out .6s infinite livePulse}@keyframes livePulse{50%{opacity:.45}}@keyframes liveBeat{0%{box-shadow:0 0 12px #39ff88}}.coins .right.bump .val{animation:.7s ease-out valBump}@keyframes valBump{0%{text-shadow:0 0 14px;filter:brightness(1.8)}}@media (prefers-reduced-motion:reduce){.live,.live.beat,.coins .right.bump .val{animation:none}}.av{background:hsl(var(--hue,190) 90% 55%);color:#05010f;width:36px;height:36px;font:900 12px var(--display);box-shadow:0 0 10px hsl(var(--hue,190) 90% 55% / .5);border-radius:4px;flex:none;place-items:center;display:grid;position:relative;overflow:hidden}.av img{object-fit:cover;background:#05010f;width:100%;height:100%;position:absolute;inset:0}.av.sol{color:#fff;background:linear-gradient(135deg,#9945ff,#14f195)}label{color:var(--hint);margin:0 0 14px;font-size:15px;display:block}label.check{color:var(--text);align-items:center;gap:10px;font-size:17px;display:flex}input,textarea{width:100%;color:var(--text);clip-path:var(--cut-s);background:#0a0f24;border:1px solid #00f0ff55;border-radius:0;outline:none;margin-top:6px;padding:12px;font:500 17px Rajdhani,sans-serif;display:block}input:focus,textarea:focus{border-color:var(--cyan);box-shadow:inset 0 0 12px #00f0ff44}input[type=checkbox]{clip-path:none;width:20px;height:20px;accent-color:var(--pink);margin:0}button{width:100%;font:700 12.5px var(--display);text-transform:uppercase;letter-spacing:1.5px;clip-path:var(--cut-s);color:var(--cyan);box-shadow:inset 0 0 0 1px var(--cyan), inset 0 0 12px #00f0ff40;background:#00f0ff12;border:0;border-radius:0;margin:0 0 10px;padding:14px 10px;transition:transform 80ms,filter .15s;display:block}button:active{filter:brightness(1.3);transform:scale(.98)}button.primary{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5}button.danger{color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger);background:#ff3b6b10}button:disabled{opacity:.4;filter:grayscale(.6)}.row{gap:8px;display:flex}.row button{flex:1}.words{counter-reset:w;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 14px;padding:0;list-style:none;display:grid}.words li{counter-increment:w;background:var(--row);border-left:2px solid var(--cyan);clip-path:var(--cut-s);padding:8px 10px;font-size:18px;font-weight:700}.words li:before{content:counter(w) ". ";color:var(--pink);font-weight:500}.center{text-align:center;color:var(--hint);font:600 13px var(--display);letter-spacing:1.5px;text-transform:uppercase;padding-top:80px}.spinner{border:3px solid #00f0ff22;border-top-color:var(--cyan);border-right-color:var(--pink);border-radius:50%;width:46px;height:46px;margin:0 auto 16px;animation:.7s linear infinite spin;box-shadow:0 0 18px #00f0ff55}@keyframes spin{to{transform:rotate(360deg)}}pre.details{white-space:pre-wrap;word-break:break-word;background:var(--row);clip-path:var(--cut-s);padding:10px 12px;font-size:13px}.version{text-align:center;color:var(--hint);font:600 10px var(--display);letter-spacing:2px;opacity:.7;margin-top:28px}.pickrow{align-items:center;gap:8px;display:flex}.pickrow input{width:22px;height:22px;accent-color:var(--pink);flex:none;margin:0;padding:0}.burst{z-index:100;pointer-events:none;background:#05010fcc;place-items:center;animation:1.3s forwards burst;display:grid;position:fixed;inset:0}.burst:before{content:"";background:repeating-linear-gradient(0deg,#00f0ff22 0 2px,#0000 2px 9px),repeating-linear-gradient(0deg,#0000 0 37px,#ff2bd655 37px 41px);animation:.18s steps(2,end) infinite bars;position:absolute;inset:0}.burst-word{font:900 52px/1 var(--display);color:#fff;letter-spacing:3px;text-shadow:4px 0 var(--pink), -4px 0 var(--cyan), 0 0 30px var(--cyan);animation:.12s steps(2,end) 6 jolt;position:relative}.burst-word:before,.burst-word:after{content:attr(data-text);position:absolute;inset:0}.burst-word:before{color:var(--cyan);animation:.25s step-end infinite cut1}.burst-word:after{color:var(--pink);animation:.2s step-end infinite cut2}@keyframes burst{0%{opacity:0}6%{opacity:1}75%{opacity:1}to{opacity:0}}@keyframes bars{to{background-position:0 9px,0 41px}}@keyframes jolt{0%{transform:translate(-6px,2px)skew(-8deg)}50%{transform:translate(5px,-2px)skew(6deg)}}@keyframes cut1{0%{clip-path:inset(10% 0 60%);transform:translate(-8px)}50%{clip-path:inset(55% 0 20%);transform:translate(6px)}}@keyframes cut2{0%{clip-path:inset(70% 0 5%);transform:translate(7px)}50%{clip-path:inset(25% 0 50%);transform:translate(-5px)}}.shake main{animation:.45s shake}@keyframes shake{0%,to{filter:none;transform:none}20%{filter:hue-rotate(60deg);transform:translate(-4px,1px)}40%{transform:translate(4px,-1px)}60%{filter:hue-rotate(-60deg);transform:translate(-2px)}80%{transform:translate(2px)}}@media (prefers-reduced-motion:reduce){*,:before,:after{transition:none!important;animation:none!important}}.list li small.error{color:var(--danger)}.pinvalue{opacity:0;pointer-events:none;border:0;width:1px;height:1px;margin:0;padding:0;position:absolute}.pindots{justify-content:center;gap:14px;margin:0 0 4px;padding:14px 0 18px;display:flex}.pindots i{background:0 0;border:2px solid #00f0ff66;width:16px;height:16px;transition:background .1s,box-shadow .1s,border-color .1s;transform:rotate(45deg)}.pindots.active i{border-color:var(--cyan)}.pindots i.on{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px var(--pink)}.pindots.nope{animation:.4s nope}.pindots.nope i{border-color:var(--danger)}@keyframes nope{20%{transform:translate(-10px)}40%{transform:translate(9px)}60%{transform:translate(-6px)}80%{transform:translate(4px)}}.keypad{grid-template-columns:repeat(3,1fr);gap:10px;margin:6px 0 16px;display:grid}.keypad .key{font:900 24px/1 var(--display);letter-spacing:0;color:var(--text);text-shadow:0 0 10px #00f0ffaa;-webkit-user-select:none;user-select:none;background:#0c0a22e6;margin:0;padding:16px 0;box-shadow:inset 0 0 0 1px #00f0ff88,inset 0 0 14px #00f0ff30}.keypad .key:active{background:var(--pink);color:#fff;box-shadow:0 0 22px var(--pink), inset 0 0 0 1px #fff;filter:none;transform:scale(.96)}.keypad .key.fn{color:var(--pink);text-shadow:0 0 8px #ff2bd688;font-size:15px}.coinhead{align-items:center;gap:12px;margin:0 0 12px;display:flex}.coinhead .av{width:46px;height:46px;font-size:15px}.coinhead b{font-size:20px;display:block}.coinhead small{color:var(--hint);font-size:14px}.avail{justify-content:space-between;align-items:baseline;margin:0 2px 6px;display:flex}.avail small{font:600 11px var(--display);letter-spacing:2px;color:var(--hint);text-transform:uppercase}.avail>span{font:900 18px var(--display);color:var(--cyan);text-shadow:0 0 10px #00f0ffaa}.amountbox{padding:8px 16px 10px}.amount{text-align:center;padding:12px 0 4px}.amount .num{font:900 46px/1 var(--display);color:#fff;text-shadow:3px 0 var(--pink), -3px 0 var(--cyan), 0 0 22px #00f0ff88;word-break:break-all}.amount .num:after{content:"";background:var(--pink);vertical-align:-.05em;width:3px;height:.85em;box-shadow:0 0 8px var(--pink);margin-left:4px;animation:1s step-end infinite blink;display:inline-block}.amount .num.over{color:var(--danger);text-shadow:0 0 18px var(--danger)}@keyframes blink{50%{opacity:0}}.amount .unit{font:700 16px var(--display);color:var(--cyan);margin-left:6px}.amount .usd{color:var(--hint);min-height:1.4em;margin-top:8px;font-size:15px}input.slider{appearance:none;clip-path:none;width:100%;height:34px;box-shadow:none;background:0 0;border:0;margin:8px 0 2px;padding:0}input.slider::-webkit-slider-runnable-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px;box-shadow:0 0 10px #ff2bd688}input.slider::-webkit-slider-thumb{-webkit-appearance:none;background:var(--pink);width:24px;height:24px;box-shadow:0 0 16px var(--pink), inset 0 0 0 2px #fff;border:0;margin-top:-10px;transform:rotate(45deg)}input.slider::-moz-range-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px}input.slider::-moz-range-thumb{background:var(--pink);border:2px solid #fff;border-radius:0;width:22px;height:22px;transform:rotate(45deg)}input.slider:focus{box-shadow:none}.ticks{color:var(--hint);font:600 10px var(--display);justify-content:space-between;margin:0 2px 10px;display:flex}.chips{grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 12px;display:grid}.chips button{margin:0;padding:9px 0;font-size:11px}.walletsrow{background:var(--row);border-left:3px solid var(--cyan);clip-path:var(--cut-s);justify-content:space-between;align-items:center;margin:0 0 12px;padding:8px 12px;display:flex}.walletsrow small{color:var(--hint);font-size:13px;display:block}.stepper{align-items:center;gap:12px;display:flex}.stepper button{width:40px;margin:0;padding:8px 0;font-size:18px}.stepper b{font:900 22px var(--display);color:var(--cyan);text-align:center;min-width:28px}.stepper.wide{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px;display:grid}.stepper.wide button{width:auto}.keypad{gap:8px;margin:0 0 12px}.keypad .key{padding:14px 0}.keypad .key.dot{font-size:30px;line-height:.8}button.go{padding:16px 10px;font-size:14px}.stepper button{padding:4px 0 6px;font:700 26px/1 Rajdhani,sans-serif}.coins li[data-mint]{cursor:pointer}.coins li[data-mint]:active{filter:brightness(1.3)}.coinhead .live{margin-left:auto}.avail .paid{color:var(--hint);text-shadow:none}.avail.pl.up>span{color:#39ff88;text-shadow:0 0 10px #39ff88aa}.avail.pl.down>span{color:var(--danger);text-shadow:0 0 10px #ff3b6baa}button.gold{color:#1a1000;background:var(--amber);text-shadow:none;box-shadow:inset 0 0 14px #fff6,0 0 16px #ffb80066}button.gold.on{box-shadow:inset 0 0 0 2px #fff,0 0 22px #ffb800cc}.initnote{text-align:center;margin:0 0 12px;font-size:14px}.avail[hidden]{display:none}.solamt,.coinamt{cursor:pointer;text-underline-offset:3px;-webkit-text-decoration:underline dotted #ffffff40;text-decoration:underline dotted #ffffff40}.solamt.usd,.coinamt.usd{color:#39ff88;text-shadow:0 0 8px #39ff8866}.seg{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 10px;display:grid}.seg button{opacity:.55;margin:0;padding:11px 0;font-size:13px}.seg button.on{opacity:1;box-shadow:inset 0 0 0 2px var(--cyan), 0 0 14px #00f0ff66}.seg.small button{padding:8px 0;font-size:11px}.amountbox #when{color:var(--hint);margin-bottom:2px;font-size:12px;display:block}button.small{width:auto;margin:6px 0 0;padding:6px 14px;font-size:11px}.coins small.inorder{color:var(--amber)}.brand .navback{width:38px;height:38px;font:900 22px/1 var(--display);color:var(--cyan);box-shadow:inset 0 0 0 2px var(--cyan), 0 0 12px #00f0ff55;clip-path:var(--cut-s);background:0 0;flex:none;place-items:center;margin:0;padding:0;display:grid}.brand .navback:active{background:var(--cyan);color:#000}#app:has(#after:empty) .navback{visibility:hidden}.openwallet{cursor:pointer}.openwallet:active{filter:brightness(1.3)}.openwallet .open{float:right;color:var(--cyan);font:700 11px var(--display);letter-spacing:1px}.loader{z-index:40;background:#000;position:fixed;inset:0}.loader .ascii{width:100%;height:100%;display:block}.loader .ascii i{font-style:normal}.ascii .kc{color:var(--cyan);text-shadow:0 0 6px #00f0ffaa}.ascii .kp{color:var(--pink);text-shadow:0 0 6px #ff2bd6aa}.ascii .kg{color:#39ff88;text-shadow:0 0 6px #39ff88aa}.ascii .kr{color:var(--danger);text-shadow:0 0 6px #ff3b6baa}.ascii .ka{color:var(--amber);text-shadow:0 0 8px #ffb800cc}.ascii .kw{color:#fff;text-shadow:0 0 8px #fff}.ascii .kd{color:#1a2050}.ascii .kh{color:#2c3a8c}.ascii .kv{color:#5b3ab8}.ascii .kf{color:#3a1f4f}.ascii .kc,.ascii .kp,.ascii .kg,.ascii .kr{opacity:.9}.loadtag{font:900 16px var(--display);letter-spacing:3px;color:var(--cyan);text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ff88;margin:14px 0 4px}.loadtag.hit{color:#39ff88;text-shadow:2px 0 var(--pink), -2px 0 #39ff88, 0 0 18px #39ff88;animation:.25s steps(2,end) 2 tagjolt}@keyframes tagjolt{50%{transform:translate(3px)skew(-8deg)}}.loadlabel{color:var(--hint);font:600 12px var(--display);letter-spacing:1.5px;text-transform:uppercase;margin:4px 16px}.loader .ascii.flash{filter:brightness(1.5)saturate(1.4);box-shadow:inset 0 0 0 2px #39ff88,0 0 40px #39ff88aa}.ascii .kC{color:#00f0ff;opacity:.28}.ascii .kP{color:#ff2bd6;opacity:.28}.ascii .kG{color:#39ff88;opacity:.28}.ascii .kR{color:#ff3b6b;opacity:.28}#app.loading .brand,#app.loading .version,#app.loading .note{display:none}.hackloader{z-index:40;background:#000;justify-content:center;align-items:center;display:flex;position:fixed;inset:0;overflow:hidden}.hackloader .hackart{aspect-ratio:1024/2157;background:#02000a;flex:none;width:max(100vw,47.4733vh);display:block}.hackloader .loadterm{z-index:1;visibility:hidden;color:#39ff88;text-shadow:0 0 6px #39ff88aa}.hackloader .loadterm .cur{background:#39ff88}.brand .logo.sol{background:#05010f;position:relative;overflow:hidden;box-shadow:0 0 18px #00f0ff66,inset 0 0 0 1px #00f0ff88}.logo.sol svg{width:26px;height:19px;position:absolute;top:9px;left:6px}.logo.sol .sol-main{filter:drop-shadow(0 0 4px #9a5cff);animation:3.2s step-end infinite solmain}.logo.sol .sol-c,.logo.sol .sol-p{opacity:0;mix-blend-mode:screen}.logo.sol .sol-c{animation:3.2s step-end infinite solc}.logo.sol .sol-p{animation:3.2s step-end infinite solp}@keyframes solmain{0%,84%,to{clip-path:none;transform:none}86%{clip-path:inset(0 0 40%);transform:translate(2px)}89%{clip-path:none;transform:translate(-2px)skew(-8deg)}92%{clip-path:inset(35% 0 0);transform:translate(1px)}95%{clip-path:none;transform:none}}@keyframes solc{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(0 0 55%);transform:translate(-3px)}89%{opacity:.85;clip-path:inset(40% 0 25%);transform:translate(-2px,1px)}92%{opacity:.7;clip-path:inset(70% 0 0);transform:translate(-4px)}95%{opacity:.5;clip-path:none;transform:translate(-1px)}}@keyframes solp{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(45% 0 0);transform:translate(3px)}89%{opacity:.85;clip-path:inset(0 0 60%);transform:translate(2px,-1px)}92%{opacity:.7;clip-path:inset(20% 0 45%);transform:translate(4px)}95%{opacity:.5;clip-path:none;transform:translate(1px)}}@media (prefers-reduced-motion:reduce){.logo.sol svg{animation:none!important}}.snatchfx{z-index:60;touch-action:none;width:100vw;height:100vh;position:fixed;inset:0}.pnl .pv{font:700 16px var(--display);letter-spacing:.5px;white-space:nowrap;color:var(--hint)}.pnl .pv.big{flex:none;font-size:17px}.pnl .pv.up,.total.pnl .up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.pnl .pv.down,.total.pnl .down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.pnl .pv.none{letter-spacing:0;color:var(--hint);text-shadow:none;font:500 13px Rajdhani,sans-serif}.card .label .pv{font-size:15px}.total.pnl{cursor:pointer}.total.pnl .big span{transition:color .2s}.list.pnl li.pnlup{border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.list.pnl li.pnldown{border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.pnl .right{cursor:pointer}.pnltabs{gap:8px;margin:0 0 14px;display:flex}.pnltabs button{font:700 16px var(--display);flex:1;margin:0;padding:10px 0}.pnltabs button.on{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5,0 0 14px #ff2bd688}.trades li{border-left-color:var(--cyan)}.trades .grow{flex:1;min-width:0}.trades .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:16px;display:block;overflow:hidden}.trades .grow small{display:block}.trades .tag{width:44px;font:700 11px var(--display);letter-spacing:1px;color:var(--cyan);flex:none}.trades li.sell .tag{color:var(--pink)}.trades .right{text-align:right}.trades .right small{color:var(--hint);font:500 13px Rajdhani,sans-serif;display:block}.trades .pv.spent{color:var(--text);text-shadow:none}.loadterm{left:12px;right:12px;bottom:calc(24px + env(safe-area-inset-bottom));pointer-events:none;color:#00f0ff;text-shadow:0 0 6px #00f0ffaa;font:700 12px/16px ui-monospace,Menlo,Consolas,monospace;position:absolute}.loadterm .tl{white-space:pre;opacity:.6;background:#0009;width:fit-content;max-width:100%;padding:0 3px;overflow:hidden}.loadterm .tl:nth-last-child(2){opacity:.8}.loadterm .tl:last-child{opacity:1}.loadterm .cur{vertical-align:-1px;background:#00f0ff;width:8px;height:12px;margin-left:2px;animation:.66s step-end infinite termBlink;display:inline-block}@keyframes termBlink{50%{opacity:0}}`,ot=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function st(e,t,n,{ms:r=1100,delay:i=0,final:a=n(t)}={}){if(ot()||!Number.isFinite(t)||t===0){e.textContent=a;return}e.classList.add(`ticking`);let o=performance.now()+i,s=i=>{let c=Math.min(1,Math.max(0,(i-o)/r));c>=1?(e.textContent=a,e.classList.remove(`ticking`)):(e.textContent=n(t*(1-2**(-10*c))).replace(/\d(?=\d?$)/g,()=>String(Math.floor(Math.random()*10))),requestAnimationFrame(s))};requestAnimationFrame(s)}function ct(e,t){let n=e.replace(/[^A-Za-z0-9◎]/g,``).slice(0,2).toUpperCase()||`?`;return`<div class="av" style="--hue:${[...e].reduce((e,t)=>(e*31+t.charCodeAt(0))%360,7)}"><b>${n}</b>${t?`<img alt="" loading="lazy" src="${t.replace(/["<>&]/g,encodeURIComponent)}">`:``}</div>`}function lt(){document.querySelectorAll(`.av img`).forEach(e=>e.addEventListener(`error`,()=>e.remove()))}var ut=1200,dt=`./oni-1.webp`,ft=[[130,95],[235,235],[285,95],[340,175],[480,140],[625,170],[665,100],[720,215],[835,85],[815,330],[845,420],[800,530],[785,700],[765,850],[705,965],[640,1065],[560,1125],[400,1125],[320,1065],[250,965],[200,850],[180,700],[150,530],[110,420],[150,330]],pt=800,mt=4.1,ht=.22,gt=` .:-=+*#%@`,_t=8,vt=13,yt=[{x:12,y:22,w:320,h:225,color:`#ff5a3a`},{x:355,y:22,w:330,h:125,color:`#f0a040`},{x:695,y:22,w:255,h:300,color:`#f5dc55`},{x:12,y:265,w:140,h:560,color:`#a77cf0`},{x:12,y:880,w:320,h:300,color:`#e6e0f0`},{x:770,y:470,w:180,h:700,color:`#b9a3f0`}],bt=18,xt=`600 15px ui-monospace, Menlo, Consolas, monospace`,St=55,Ct=null,wt=!1,Tt=null,Et=null,Dt=null,Ot=null,kt=null,At=null,jt=null,Mt=null,Nt=null,Pt=0,Ft=null,It=(e=960,t=ut)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function Lt(){let e=It(),t=e.getContext(`2d`);return t.beginPath(),ft.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t.fillStyle=`#fff`,t.shadowColor=`#fff`,t.shadowBlur=36,t.fill(),t.shadowBlur=0,t.fill(),e}function Rt(e){let t=Lt();Et=It();let n=Et.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(0,0,960,ut),n.globalCompositeOperation=`destination-out`,n.drawImage(t,0,0),Tt=It(),n=Tt.getContext(`2d`),n.drawImage(e,0,0),n.globalCompositeOperation=`destination-in`,n.drawImage(Et,0,0);let r=Math.ceil(960/_t),i=Math.ceil(ut/vt),a=It(r,i).getContext(`2d`,{willReadFrequently:!0});a.drawImage(e,0,0,r,i);let o=a.getImageData(0,0,r,i).data;Nt=o,Pt=r,Dt=It(),n=Dt.getContext(`2d`),n.fillStyle=`#000`,n.fillRect(0,0,960,ut),n.font=`700 12px ui-monospace, Menlo, Consolas, monospace`,n.textBaseline=`top`;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let i=(e*r+t)*4,a=o[i],s=o[i+1],c=o[i+2],l=(.3*a+.59*s+.11*c)/255,u=gt[Math.min(9,Math.floor(l**.7*10*1.15))];if(u===` `)continue;let d=Math.min(2.2,1.4/Math.max(.25,Math.max(a,s,c)/255));n.fillStyle=`rgb(${Math.min(255,a*d)|0},${Math.min(255,s*d)|0},${Math.min(255,c*d)|0})`,n.fillText(u,t*_t,e*vt)}n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0);let s=t=>{let n=It(),r=n.getContext(`2d`);return r.drawImage(e,0,0),r.globalCompositeOperation=`multiply`,r.fillStyle=t,r.fillRect(0,0,960,ut),n};Ot=s(`#ff0000`),kt=s(`#00ffff`),At=It(),jt=t,Ft=It(),wt=!0}var zt=0;function Bt(){if(Ct||Date.now()<zt)return;let e=new Image;Ct=e,e.onload=()=>Rt(e),e.onerror=()=>{Ct===e&&(Ct=null),zt=Date.now()+2e3},e.src=dt}var Vt=Bt,Ht=e=>Array.from({length:e},()=>Math.floor(Math.random()*256).toString(16).padStart(2,`0`)).join(` `),Ut=()=>Array.from({length:2},()=>Math.floor(Math.random()*65536).toString(16).padStart(4,`0`)).join(``),Wt=e=>e[Math.floor(Math.random()*e.length)],Gt=(e,t,n=0)=>(e+Math.random()*(t-e)).toFixed(n),Kt=[()=>[`$ ssh root@node${Gt(1,99)}.snatch`,`> handshake ok`,`> session ${Ut()}`],()=>[`$ ./scan --wallets --deep`,`[+] ${Ut()}..${Ut().slice(0,4)} found`,`[+] ${Gt(2,40)} wallets live`],()=>[`$ jup quote SOL ${Wt([`BONK`,`WIF`,`PUMP`,`TARGET`])}`,`[*] route ${Gt(1,4)} hops ${Gt(.05,.9,2)}%`,`[ok] out ${Gt(1e3,99999)}`],()=>[`$ tail -f mempool.log`,`tx ${Ut()} ${Gt(.1,9,2)} SOL`,`tx ${Ut()} ${Gt(.1,9,2)} SOL`,`tx ${Ut()} ${Gt(.1,9,2)} SOL`],()=>[`$ decrypt --key ****${Gt(1e3,9999)}`,`0x${Ut()}: ${Ht(6)}`,`0x${Ut()}: ${Ht(6)}`,`[ok] unlocked`],()=>[`$ claw --lock target`,`[*] locking ${Ut()}`,`[!!] TARGET LOCKED`],()=>[`$ snatch --now`,`[>] ${Gt(1,60,1)} SOL tracked`,`[ok] SNATCHED`],()=>[`$ ping rpc.solana`,`64 bytes time=${Gt(9,80)}ms`,`64 bytes time=${Gt(9,80)}ms`],()=>[`$ cat /dev/oni | xxd`,`${Ht(8)}`,`${Ht(8)}`,`${Ht(8)}`]],qt=yt.map(()=>({lines:[],typing:``,typed:0,queue:[],wait:Math.random()*.8}));function Jt(e,t,n){if(e.wait>0)e.wait-=n;else if(e.typing||(e.queue.length||(e.queue=Wt(Kt)()),e.typing=e.queue.shift(),e.typed=e.typing.startsWith(`$`)?0:e.typing.length),e.typed=Math.min(e.typing.length,e.typed+St*n*(.7+Math.random()*.6)),e.typed>=e.typing.length){for(e.lines.push(e.typing),e.typing=``,e.typed=0;e.lines.length>t-1;)e.lines.shift();e.wait=e.queue.length?.05+Math.random()*.15:.35+Math.random()*.7}}function Yt(e){let t=At.getContext(`2d`);t.globalCompositeOperation=`source-over`,t.clearRect(0,0,960,ut),t.font=xt,t.textBaseline=`top`,yt.forEach((n,r)=>{let i=qt[r];Jt(i,Math.floor(n.h/bt),e);let a=i.typing.slice(0,Math.floor(i.typed)),o=[...i.lines,a];t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip();let s=n.y+n.h-o.length*bt;if(o.forEach((e,r)=>{let i=s+r*bt,a=Math.min(n.w,t.measureText(e).width+6);t.fillStyle=`rgba(0,0,0,0.6)`,t.fillRect(n.x,i,a,bt),t.fillStyle=n.color,t.globalAlpha=r===o.length-1?1:.55+.4*r/o.length,t.fillText(e,n.x+3,i+1),t.globalAlpha=1}),Math.floor(tn*3)%2==0){let e=n.x+3+t.measureText(a).width;t.fillStyle=n.color,t.fillRect(e,s+(o.length-1)*bt+2,9,14)}t.restore()}),t.globalCompositeOperation=`destination-in`,t.drawImage(Et,0,0)}var Xt=3,Zt=Array.from({length:Math.ceil(960/Xt)},()=>({len:16+Math.random()**2*240,lead:Math.random()<.18?4+Math.random()*30:0,speed:1+Math.random()*4,phase:Math.random()*7,width:Math.random()<.25?3:1.8,on:Math.random()>.22})),Qt=0,$t=.8,en=1,tn=0,nn=0,rn=!1,an=()=>Math.floor(tn/mt);function on(e,t){let n=an();tn+=t,Bt();let r=e.getContext(`2d`),i=Math.min(2,window.devicePixelRatio||1),a=Math.round((e.clientWidth||340)*i),o=Math.round((e.clientHeight||600)*i);if((e.width!==a||e.height!==o)&&(e.width=a,e.height=o),r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation=`source-over`,r.globalAlpha=1,r.fillStyle=`#000`,r.fillRect(0,0,a,o),!wt||!Ct)return;let s=a/o,c=Math.min(960,Math.max(pt,ut*s)),l=c/s,u=a/c,d=-((960-c)/2)*u,f=-((ut-l)/2)*u;an()!==n&&an()%3==0?(Qt=tn+.32,en=2):tn>=$t&&(Qt=tn+.06+Math.random()*.18,en=.6+Math.random()*.8,$t=tn+.5+Math.random()*1.8);let p=tn<Qt;r.setTransform(u,0,0,u,d,f),l>1200&&(r.globalAlpha=.6,r.save(),r.scale(1,-1),r.drawImage(Tt,0,0),r.drawImage(Tt,0,-2*ut),r.restore(),r.globalAlpha=1),r.drawImage(Ct,0,0),r.globalCompositeOperation=`lighter`,r.globalAlpha=.16,r.drawImage(Tt,0,0),r.globalCompositeOperation=`source-over`,Yt(t),r.globalAlpha=.62,r.drawImage(At,0,0),r.globalAlpha=ht+Math.sin(tn*7)*.03+(p?.25*en:0),r.drawImage(Dt,0,0);let m=25+1325*(tn%mt/mt);for(let e=0;e<17;e++){let t=m-170+e*170/17;r.globalAlpha=.06+e/16*.6,r.drawImage(Dt,0,t,960,11,0,t,960,11)}r.globalAlpha=1;let h=Ft.getContext(`2d`);h.globalCompositeOperation=`source-over`,h.globalAlpha=1,h.clearRect(0,0,960,ut);let g=Math.max(0,Math.min(Math.ceil(ut/vt)-1,Math.floor(m/vt)));Zt.forEach((e,t)=>{if(!e.on)return;let n=t*Xt,r=e.len*(.7+.3*Math.sin(tn*e.speed+e.phase));Math.random()<.05&&(r*=1.4+Math.random());let i=(g*Pt+Math.min(Pt-1,Math.floor(n/_t)))*4,a=Nt[i],o=Nt[i+1],s=Nt[i+2],c=Math.min(2.6,1.6/Math.max(.2,Math.max(a,o,s)/255)),l=`${Math.min(255,a*c)|0},${Math.min(255,o*c)|0},${Math.min(255,s*c)|0}`;h.fillStyle=`rgba(${l},0.3)`,h.fillRect(n,m-r,e.width,r*.45),h.fillStyle=`rgba(${l},0.6)`,h.fillRect(n,m-r*.55,e.width,r*.3),h.fillStyle=`rgba(${l},1)`,h.fillRect(n,m-r*.25,e.width,r*.25),e.lead&&(h.fillStyle=`rgba(${l},0.35)`,h.fillRect(n,m,e.width,e.lead*(.6+.4*Math.sin(tn*2+e.phase)))),r>150&&t%4==0&&(h.fillStyle=`rgba(${l},0.9)`,h.fillRect(n-1.5,m-r-4,4,4))}),h.fillStyle=`rgba(255,255,255,0.35)`;for(let e=0;e<960;e+=24)h.fillRect(e,m-Math.random()*2,18+Math.random()*8,1.5);h.globalCompositeOperation=`destination-in`,h.drawImage(jt,0,0),r.globalCompositeOperation=`lighter`,r.drawImage(Ft,0,0),r.globalCompositeOperation=`source-over`,r.setTransform(1,0,0,1,0,0);let _=p?3+Math.floor(Math.random()*6*en):+(Math.random()<.12);if(p||_){Mt||=It(a,o),(Mt.width!==a||Mt.height!==o)&&(Mt.width=a,Mt.height=o);let t=Mt.getContext(`2d`);t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,t.clearRect(0,0,a,o);let n=p?(Math.random()-.5)*14*en*u:0,i=p?(Math.random()-.5)*6*en*u:0;t.drawImage(e,n,i);for(let r=0;r<_;r++){let r=Math.random()*o,s=(4+Math.random()*(p?40:10))*u,c=(Math.random()-.5)*(p?80:24)*u*en;t.drawImage(e,0,r,a,s,c+n,r+i,a,s)}if(p){let e=(6+Math.random()*10)*en;t.setTransform(u,0,0,u,d+n,f+i),t.globalCompositeOperation=`lighter`,t.globalAlpha=.45,t.drawImage(Ot,e,0),t.drawImage(kt,-e,0),t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-atop`,t.globalAlpha=1;for(let e=0;e<3;e++)t.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,t.fillRect(0,Math.random()*o,a,(1+Math.random()*2)*u);Math.random()<.3&&(t.fillStyle=`rgba(0,0,0,0.35)`,t.fillRect(0,0,a,o))}t.globalCompositeOperation=`destination-in`,t.setTransform(u,0,0,u,d,f),t.drawImage(jt,0,0),r.drawImage(Mt,0,0)}r.fillStyle=`rgba(0,0,0,0.18)`;for(let e=tn*40%4*u;e<o;e+=4*u)r.fillRect(0,e,a,1.5*u);let v=r.createRadialGradient(a/2,o/2,Math.min(a,o)*.42,a/2,o/2,Math.hypot(a,o)*.55);v.addColorStop(0,`rgba(0,0,0,0)`),v.addColorStop(1,`rgba(0,0,0,0.6)`),r.fillStyle=v,r.fillRect(0,0,a,o),r.setTransform(1,0,0,1,0,0)}var sn=e=>`<div class="loader"><canvas class="ascii" id="ascii" role="img" aria-label="${e.replace(/"/g,`&quot;`)}"></canvas></div>`;function cn(){let e=document.getElementById(`ascii`);if(e&&on(e,0),rn)return;rn=!0,nn=0;let t=e=>{let n=document.getElementById(`ascii`);if(!n){rn=!1;return}let r=nn?Math.min(.1,(e-nn)/1e3):1/60;nn=e,on(n,r),requestAnimationFrame(t)};requestAnimationFrame(t)}var ln=`<polygon points="53,0 351,0 298,68 0,68"/><polygon points="0,94 298,94 351,162 53,162"/><polygon points="53,188 351,188 298,256 0,256"/>`,un=(e,t,n=``)=>`<svg class="${e}" viewBox="0 0 351 256" aria-hidden="true">${n}<g fill="${t}">${ln}</g></svg>`,dn=`<defs><linearGradient id="solgrad" gradientUnits="userSpaceOnUse" x1="0" y1="256" x2="351" y2="0"><stop offset="0" stop-color="#e028fc"/><stop offset="0.5" stop-color="#7c8be0"/><stop offset="1" stop-color="#1fe9b1"/></linearGradient></defs>`,fn=()=>`<div class="logo sol" aria-label="Solana">${un(`sol-c`,`#00f0ff`)}${un(`sol-p`,`#ff2bd6`)}${un(`sol-main`,`url(#solgrad)`,dn)}</div>`,pn=`solHourly`,mn=3600,hn=null,gn=()=>hn??=j.get(pn).then(e=>new Map(Object.entries(JSON.parse(e||`{}`)).map(([e,t])=>[Number(e),Number(t)]))).catch(()=>new Map);async function _n(e,t){let n=new Map,r=e=>new Date(e*1e3).toISOString(),i=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/candles?granularity=3600&start=${r(e)}&end=${r(t)}`,{signal:AbortSignal.timeout(6e3)});if(!i.ok)throw Error(`coinbase ${i.status}`);for(let[e,,,t,r]of await i.json())n.set(e,(t+r)/2);return n}async function vn(e,t){let n=new Map,r=await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=${e-mn}&to=${t+mn}`,{signal:AbortSignal.timeout(6e3)});if(!r.ok)throw Error(`coingecko ${r.status}`);let{prices:i}=await r.json();for(let[e,t]of i){let r=Math.floor(e/1e3/mn)*mn;n.has(r)||n.set(r,t)}return n}async function yn(e){let t=await gn(),n=Date.now()/1e3,r=[...new Set(e.filter(e=>e>0).map(e=>Math.floor(e/mn)*mn))].sort((e,t)=>e-t).filter(e=>!t.has(e)),i=!1;for(let e=0;e<r.length;){let a=r[e],o=Math.min(a+299*mn,Math.floor(n/mn)*mn),s;try{s=await _n(a,o)}catch{s=await vn(a,o).catch(()=>new Map)}if(!s.size)break;for(let[e,r]of s)e<n-2*mn&&!t.has(e)&&(t.set(e,r),i=!0);for(let[e,n]of s)t.has(e)||t.set(e,n);for(;e<r.length&&r[e]<=o;)e++}if(i){let e=Object.fromEntries([...t].filter(([e])=>e<n-2*mn).map(([e,t])=>[e,Math.round(t*100)/100]));j.set(pn,JSON.stringify(e)).catch(()=>{})}let a=new Map;for(let n of e){let e=Math.floor(n/mn)*mn;for(let r of[0,-1,1,-2,2,-3,3]){let i=t.get(e+r*mn);if(i){a.set(n,i);break}}}return a}var bn=e=>Object.freeze(e());function xn(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}function Sn(e){if(!xn(e))throw TypeError(`Uint8Array expected`)}function Cn(e,t){if(typeof t!=`string`)throw TypeError(`${e}: string expected`);return!0}function wn(e,t=`number`){if(typeof e!=`number`)throw TypeError(`${t}: expected number, got ${typeof e}`);if(!Number.isSafeInteger(e))throw RangeError(`${t}: expected safe integer, got ${e}`)}function Tn(...e){let t=e=>e,n=(e,t)=>n=>e(t(n));return{encode:e.map(e=>e.encode).reduceRight(n,t),decode:e.map(e=>e.decode).reduce(n,t)}}var En=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})(),Dn=(()=>{try{let e=new TextDecoder;return e.decode(Uint8Array.of(65,48,43,127))===`A0+`?e:void 0}catch{return}})(),On=8192;function kn(e){let t=e.length;if(Dn!==void 0&&t>=12)return Dn.decode(e);if(t<=On)return String.fromCharCode.apply(null,e);let n=``;for(let r=0;r<t;r+=On)n+=String.fromCharCode.apply(null,e.subarray(r,r+On));return n}function An(e){if(wn(e),e<=0||e>8)throw RangeError(`radix2: bits should be in (0..8]`);let t=En[e]-1;return{encode:n=>{Sn(n);let r=n.length,i=new Uint8Array(Math.ceil(r*8/e)),a=0,o=0,s=0;for(let c=0;c<r;)for(c+2<r?(a=a<<24|n[c]<<16|n[c+1]<<8|n[c+2],o+=24,c+=3):(a=(a<<8|n[c])&65535,o+=8,c++);o-=e,i[s++]=a>>o&t,!(o<e););return o>0&&(i[s]=a<<e-o&t),i},decode:t=>{let n=t.length,r=new Uint8Array(Math.floor(n*e/8)),i=0,a=0,o=0;for(let s=0;s<n;s++)for(i=(i<<e|t[s])&65535,a+=e;a>=8;a-=8)r[o++]=i>>a-8&255;if(i=i<<8-a&255,a>=e)throw Error(`Excess padding`);if(i>0)throw Error(`Non-zero padding: ${i}`);return r}}}function jn(e,t){let n=e.length;if(n>128)throw Error(`alphabet: max 128 letters`);let r=new Uint8Array(n),i=new Int8Array(128).fill(-1);for(let t=0;t<n;t++){let n=e.charCodeAt(t);if(e.codePointAt(t)!==n||n>127)throw Error(`alphabet: single-char ASCII letters only`);r[t]=n,i[n]=t}if(t!==void 0)for(let e of Object.keys(t)){let n=e.charCodeAt(0),r=i[t[e].charCodeAt(0)];if(e.length!==1||n>127||r===void 0||r===-1)throw Error(`alphabet: invalid alias ${e}`);i[n]=r}return{encode:e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++){let i=e[n],a=r[i];if(a===void 0)throw Error(`alphabet.encode: invalid digit ${i}`);t[n]=a}return kn(t)},decode:t=>{Cn(`decode`,t);let n=t.length,r=new Uint8Array(n);for(let a=0;a<n;a++){let n=t.charCodeAt(a),o=n<128?i[n]:-1;if(o===-1)throw Error(`Unknown letter "${t[a]}". Allowed: ${e}`);r[a]=o}return r}}}function Mn(e,t=`=`){return wn(e),Cn(`padding`,t),{encode(n){for(;n.length*e%8;)n+=t;return n},decode(n){Cn(`decode`,n);let r=n.length;if(r*e%8)throw Error(`padding: invalid length`);for(;r>0&&n[r-1]===t;r--)if((r-1)*e%8==0)throw Error(`padding: excess padding`);return n.slice(0,r)}}}var Nn=typeof Uint8Array.from([]).toBase64==`function`&&typeof Uint8Array.fromBase64==`function`,Pn=/[\t\n\f\r ]/,Fn=(e,t)=>{Cn(`base64`,e);let n=t?`base64url`:`base64`;if(e.length>0&&Pn.test(e))throw Error(`invalid base64`);return Uint8Array.fromBase64(e,{alphabet:n,lastChunkHandling:`strict`})},In=bn(()=>Tn(An(6),jn(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),Mn(6))),Ln=bn(()=>Nn?{encode(e){return Sn(e),e.toBase64()},decode(e){return Fn(e,!1)}}:In),Rn=656356768,zn=65536,Bn=2048,Vn=4096,Hn=(e,t)=>({encode:n=>{Sn(n);let r=n.length;if(r===0)return new Uint8Array;if(r>=zn)throw Error(`invalid length`);let i=0;for(;i<r-1&&n[i]===0;)i++;let a=Math.ceil(r/2),o=new Uint16Array(a),s=r&1;s&&(o[0]=n[0]);for(let e=s,t=s;e<r;e+=2,t++)o[t]=n[e]<<8|n[e+1];let c=[],l=0;for(;l<a;){let e=0;for(let n=l;n<a;n++){let r=e*65536+o[n],i=Math.floor(r/t);e=r-i*t,o[n]=i,i===0&&n===l&&l++}c.push(e)}let u=c.length-1,d=u*5;for(let t=c[u];d++,!(t<e);t=Math.floor(t/e));let f=new Uint8Array(i+d),p=f.length-1;for(let t=0;t<u;t++){let n=c[t];for(let t=0;t<5;t++)f[p--]=n%e,n=Math.floor(n/e)}for(let t=c[u];p>=i;t=Math.floor(t/e))f[p--]=t%e;return f},decode:t=>{Sn(t);let n=t.length;if(n===0)return new Uint8Array;if(n>=zn)throw Error(`invalid length`);let r=0;for(;r<n-1&&t[r]===0;)r++;let i=new Uint16Array(Math.ceil(n*6/16)+1),a=0,o=0,s=n%5||5;for(;o<n;){let n=0,r=1;for(let i=o+s;o<i;o++){let i=t[o];if(i>=e)throw Error(`invalid integer: ${i}`);n=n*e+i,r*=e}s=5;let c=n;for(let e=0;e<a;e++){let t=i[e]*r+c;c=Math.floor(t/65536),i[e]=t-c*65536}for(;c>0;c=Math.floor(c/65536))i[a++]=c%65536}let c=a===0?1:a*2-(i[a-1]<256),l=new Uint8Array(r+c),u=l.length-1;for(let e=0;e<a;e++){let t=i[e];l[u--]=t&255,u>=r&&(l[u--]=t>>8)}return l}}),Un=(e,t)=>{let n=jn(t);return{encode(t){if(Sn(t),t.length>Bn)throw Error(`invalid length`);return n.encode(e.encode(t))},decode(t){if(Cn(`baseN.decode`,t),t.length>Vn)throw Error(`invalid length`);return e.decode(n.decode(t))}}},Wn=Hn(58,Rn),Gn=e=>Un(Wn,e),Kn=bn(()=>Gn(`123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`)),qn=`https://api.jup.ag`,Jn=!1;function Yn(e){qn=`${e}/jup`,Jn=!0}var Xn=`So11111111111111111111111111111111111111112`,Zn=6e4,Qn=60,$n={trade:0,screen:6,background:24},er={trade:0,screen:1,background:2},tr=12,nr=[],rr=null,ir=0,ar=0,or=[],sr,cr=e=>new Promise(t=>setTimeout(t,e));function lr(e,t){if(t<ir)return ir-t;if(ar>=tr)return-1;for(;nr.length&&nr[0]<=t-Zn;)nr.shift();let n=Qn-$n[e],r=nr.length<n?0:nr[nr.length-n]+Zn-t;return rr&&t<rr.reset&&rr.left-nr.filter(e=>e>rr.at).length<=$n[e]&&(r=Math.max(r,rr.reset-t)),r}function ur(){for(clearTimeout(sr);or.length;){let e=lr(or[0].lane,Date.now());if(e>0&&(sr=setTimeout(ur,e)),e!==0)return;nr.push(Date.now()),ar++,or.shift().go()}}var dr=e=>new Promise(t=>{let n=or.findIndex(t=>er[t.lane]>er[e]);n<0?or.push({lane:e,go:t}):or.splice(n,0,{lane:e,go:t}),ur()}),fr=`jupPassInHeader`,pr=(()=>{try{return Date.now()-Number(localStorage.getItem(fr)||0)<36e5}catch{return!1}})();function mr(e,t,n,r){return r?fetch(`${qn}${e}${e.includes(`?`)?`&`:`?`}relaypass=${encodeURIComponent(t)}`,{method:n?.method??`GET`,body:n?.body}):fetch(qn+e,{...n,headers:{"x-api-key":t,"content-type":`application/json`,...n?.headers}})}async function hr(e,t,n,r=`screen`){let i=e.startsWith(`/swap/v2/execute`),a=Date.now()+3e4;for(let o=0;;o++){i||await dr(r);let o;try{let r=Jn&&!pr;if(o=await mr(e,t,n,r),o.status===403&&r){pr=!0;try{localStorage.setItem(fr,String(Date.now()))}catch{}o=await mr(e,t,n,!1)}}finally{i||(ar--,ur())}let s=o.headers.get(`x-ratelimit-remaining`),c=Number(o.headers.get(`x-ratelimit-reset`));if(!i&&s!==null&&c>0&&(rr={left:Number(s),at:Date.now(),reset:c*1e3}),o.status===429&&Date.now()<a){let e=c>0?c*1e3+100:Date.now()+1e3,t=Math.min(Math.max(e,Date.now()+250),Date.now()+1e4);i?await cr(t-Date.now()):(ir=Math.max(ir,t),ur());continue}let l=await o.json().catch(()=>({}));if(!o.ok){let e=l?.error??l?.message??`HTTP ${o.status}`;throw o.status===403?Error(`The bot's owner hasn't let you in, or this link is old. Open the app from a fresh message in the bot.`):o.status===429?Error(`Jupiter is busy right now (too many requests on the bot's key). Try again in a minute.`):Error(o.status===401?`Jupiter rejected the API key.`:`Jupiter: ${e}`)}return l}}function gr(e,t,n,r){return _r(e,Xn,t,String(n),r)}function _r(e,t,n,r,i){return hr(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r,taker:i})}`,e,void 0,`trade`)}function vr(e,t,n){return hr(`/swap/v2/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:Ln.encode(t),requestId:n})})}var yr=e=>Ln.decode(e),br=`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;async function xr(e,t,n,r,i=!1){try{if(r<=0n)return null;let a=await hr(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r.toString()})}`,e,void 0,i?`background`:`screen`),o=Number(a.outAmount);return o>0?o:null}catch{return null}}var Sr=(e,t,n,r=!1)=>xr(e,t,Xn,n,r);async function Cr(e,t=!1){try{let e=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/ticker`,{signal:AbortSignal.timeout(3e3)}),t=e.ok?Number((await e.json()).price):0;if(t>0)return t}catch{}let n=await xr(e,Xn,br,1000000000n,t);return n===null?null:n/1e6}async function wr(e,t,n=!1){let r=new Map;for(let i=0;i<t.length;i+=100){let a=t.slice(i,i+100);try{let t=await hr(`/tokens/v2/search?query=${a.join(`,`)}`,e,void 0,n?`background`:`screen`);for(let e of t)a.includes(e.id)&&e.usdPrice&&e.usdPrice>0&&r.set(e.id,e.usdPrice)}catch{}}return r}async function Tr(e,t){try{let n=(await hr(`/tokens/v2/search?query=${t}`,e)).find(e=>e.id===t);return n?`${n.name??``} (${n.symbol??`?`})`:null}catch{return null}}function Er(e,t,n,r,i){return hr(`/trigger/v1/createOrder`,e,{method:`POST`,body:JSON.stringify({inputMint:n,outputMint:Xn,maker:t,payer:t,params:{makingAmount:r.toString(),takingAmount:i.toString()},computeUnitPrice:`auto`,wrapAndUnwrapSol:!0})},`trade`)}function Dr(e,t,n){return hr(`/trigger/v1/cancelOrder`,e,{method:`POST`,body:JSON.stringify({maker:t,order:n,computeUnitPrice:`auto`})},`trade`)}function Or(e,t,n){return hr(`/trigger/v1/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:Ln.encode(t),requestId:n})},`trade`)}async function kr(e,t,n){return(await hr(`/trigger/v1/getTriggerOrders?${new URLSearchParams({user:t,orderStatus:n,page:`1`})}`,e)).orders??[]}var Ar=`https://pumpportal.fun/api/trade-local`,jr=[{slippage:15,share:.85},{slippage:30,share:.75}];function Mr(e,t,n,r){return Pr({publicKey:e,action:`buy`,mint:t,amount:(n/1e9).toFixed(9),denominatedInSol:`true`,slippage:String(r)})}function Nr(e,t,n,r){return Pr({publicKey:e,action:`sell`,mint:t,amount:n,denominatedInSol:`false`,slippage:String(r)})}async function Pr(e){let t;try{t=await fetch(Ar,{method:`POST`,headers:{"content-type":`application/x-www-form-urlencoded`},body:new URLSearchParams({...e,priorityFee:`0.0001`,pool:`auto`})})}catch{throw Error(`Couldn't reach PumpPortal from the app.`)}if(!t.ok){let e=(await t.text().catch(()=>``)).trim();throw Error(`PumpPortal: ${e.slice(0,200)||`HTTP ${t.status}`}`)}return new Uint8Array(await t.arrayBuffer())}var Fr=BigInt(2**32-1),Ir=BigInt(32);function Lr(e,t=!1){return t?{h:Number(e&Fr),l:Number(e>>Ir&Fr)}:{h:Number(e>>Ir&Fr)|0,l:Number(e&Fr)|0}}function Rr(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=Lr(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var zr=e=>e/2**32|0,Br=e=>e>>>0;function Vr(e,t,n,r){let i=zr(n),a=Br(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var Hr=(e,t,n)=>e>>>n,Ur=(e,t,n)=>e<<32-n|t>>>n,Wr=(e,t,n)=>e>>>n|t<<32-n,Gr=(e,t,n)=>e<<32-n|t>>>n,Kr=(e,t,n)=>e<<64-n|t>>>n-32,qr=(e,t,n)=>e>>>n-32|t<<64-n;function Jr(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Yr=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),Xr=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Zr=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),Qr=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,$r=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),ei=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function ti(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var ni=e=>e?`"${e}" `:``;function ri(e,t=``){if(typeof e!=`number`)throw TypeError(ni(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(ni(t)+`expected integer >= 0, got `+e);return e}function ii(e,t,n=``){if(ti(e)&&(t===void 0||e.length===t))return e;t!==void 0&&ri(t,`length`);let r=ti(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=ni(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}function ai(e){if(typeof e!=`function`||typeof e.create!=`function`)throw TypeError(`expected hash wrapped by utils.createHasher`);if(ri(e.outputLen),ri(e.blockLen),e.outputLen<1||e.blockLen<1)throw Error(`hash blockLen / outputLen must be >= 1`)}var oi=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},si=(e,t)=>{oi(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function ci(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function li(e,t){ii(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function ui(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function di(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function fi(e,t){return e<<32-t|e>>>t}var pi=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,mi=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function hi(e){if(ii(e),pi)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=mi[e[n]];return t}function gi(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function _i(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(pi)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=gi(e.charCodeAt(i)),a=gi(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function vi(e){if(typeof e!=`string`)throw TypeError(`string expected`);let t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{ui(t)}}function yi(e,t=``){return typeof e==`string`?vi(e):ii(e,void 0,t)}function bi(...e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];ii(r),t+=r.length}let n=new Uint8Array(t);for(let t=0,r=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.length}return n}function xi(e,t,n=`opts`){return si(e,`defaults`),t!==void 0&&si(t,n),Object.assign(Object.create(null),e,t)}function Si(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=xi({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function Ci(e=32){ri(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}var wi=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function Ti(e,t,n){return e&t^~e&n}function Ei(e,t,n){return e&t^e&n^t&n}var Di=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=di(this.buffer)}update(e){ci(this),ii(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=di(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){ci(this),li(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Vr(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:di(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},Oi=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ki=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Ai=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ji=new Uint32Array(64),Mi=class extends Di{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)ji[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=ji[e-15],n=ji[e-2],r=fi(t,7)^fi(t,18)^t>>>3,i=fi(n,17)^fi(n,19)^n>>>10;ji[e]=i+ji[e-7]+r+ji[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=fi(o,6)^fi(o,11)^fi(o,25),u=l+t+Ti(o,s,c)+Ai[e]+ji[e]|0,d=(fi(n,2)^fi(n,13)^fi(n,22))+Ei(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){ui(ji)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),ui(this.buffer)}},Ni=class extends Mi{constructor(){super(32,Oi)}},Pi=Rr(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),Fi=Pi[0],Ii=Pi[1],Li=new Uint32Array(80),Ri=new Uint32Array(80),zi=class extends Di{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Li[n]=e.getUint32(t),Ri[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=Li[e-15]|0,n=Ri[e-15]|0,r=Wr(t,n,1)^Wr(t,n,8)^Hr(t,n,7),i=Gr(t,n,1)^Gr(t,n,8)^Ur(t,n,7),a=Li[e-2]|0,o=Ri[e-2]|0,s=Wr(a,o,19)^Kr(a,o,61)^Hr(a,o,6),c=Zr(i,Gr(a,o,19)^qr(a,o,61)^Ur(a,o,6),Ri[e-7],Ri[e-16]),l=Qr(c,r,s,Li[e-7],Li[e-16]);Li[e]=l|0,Ri[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=Wr(u,d,14)^Wr(u,d,18)^Kr(u,d,41),v=Gr(u,d,14)^Gr(u,d,18)^qr(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=$r(_,v,b,Ii[e],Ri[e]),S=ei(x,g,t,y,Fi[e],Li[e]),C=x|0,w=Wr(n,r,28)^Kr(n,r,34)^Kr(n,r,39),T=Gr(n,r,28)^qr(n,r,34)^qr(n,r,39),E=n&i^n&o^i&o,ee=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=Jr(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let te=Yr(C,T,ee);n=Xr(te,S,w,E),r=te|0}({h:n,l:r}=Jr(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=Jr(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=Jr(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=Jr(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=Jr(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=Jr(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=Jr(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=Jr(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){ui(Li,Ri)}destroy(){this.destroyed=!0,ui(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Bi=class extends zi{constructor(){super(64,ki)}},Vi=Si(()=>new Ni,wi(1)),Hi=Si(()=>new Bi,wi(3));function Ui(e,t,n=()=>{}){if(!Array.isArray(e))throw TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}var Wi=(e,t,n)=>ii(e,t,n),Gi=ri;function Ki(e,t=`object`){if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`);return e}function qi(e,t){if(typeof e!=`function`)throw TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}var Ji=hi,Yi=(...e)=>bi(...e),Xi=e=>_i(e),Zi=ti,Qi=e=>Ci(e),$i=BigInt(0),ea=BigInt(1),ta=e=>e?`"${e}" `:``;function na(e,t=``){if(typeof e!=`boolean`)throw TypeError(ta(t)+`expected boolean, got type=`+typeof e);return e}function ra(e){if(typeof e==`bigint`){if(!da(e))throw RangeError(`positive bigint expected, got `+e)}else Gi(e);return e}function ia(e,t=``){if(typeof e!=`number`){let n=t&&`"${t}" `;throw TypeError(n+`expected number, got type=`+typeof e)}if(!Number.isSafeInteger(e)){let n=t&&`"${t}" `;throw RangeError(n+`expected safe integer, got `+e)}}function aa(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);return e===``?$i:BigInt(`0x`+e)}function oa(e){return aa(hi(e))}function sa(e){return aa(hi(ua(ii(e)).reverse()))}function ca(e,t){if(ri(t),t===0)throw Error(`zero output length is invalid`);e=ra(e);let n=t*2,r=e.toString(16);if(r.length>n)throw RangeError(`number is too large`);return _i(r.padStart(n,`0`))}function la(e,t){return ca(e,t).reverse()}function ua(e){return Uint8Array.from(Wi(e))}function da(e){return typeof e==`bigint`&&$i<=e}function fa(e,t,n){return da(e)&&da(t)&&da(n)&&t<=e&&e<n}function pa(e,t,n,r){if(!fa(t,n,r))throw RangeError(`expected valid `+e+`: `+n+` <= n < `+r+`, got `+t)}function ma(e){if(e<$i)throw Error(`expected non-negative bigint, got `+e);return e===$i?0:e.toString(2).length}var ha=e=>(ia(e,`n`),(ea<<BigInt(e))-ea);function ga(e,t={},n={},r=`object`){Ki(e,r),Ki(t,`fields`),Ki(n,`optFields`);function i(t,n,i){let a=r===`object`?`param "${String(t)}"`:`"${r}.${String(t)}"`,o=e[t];if(!Object.hasOwn(e,t)&&(i?o!==void 0:n!==`function`))throw TypeError(`${a} is invalid: expected own property`);if(i&&o===void 0)return;let s=typeof o;if(s!==n||o===null)throw TypeError(`${a} is invalid: expected ${n}, got ${s}`)}let a=(e,t)=>Object.entries(e).forEach(([e,n])=>i(e,n,t));a(t,!1),a(n,!0)}var L=BigInt(0),R=BigInt(1),_a=BigInt(2),va=BigInt(3),ya=BigInt(4),ba=BigInt(5),xa=BigInt(7),Sa=BigInt(8),Ca=BigInt(9),wa=BigInt(15),Ta=BigInt(16),Ea=BigInt(`0x10000000000000000`);function z(e,t){if(t<=L)throw Error(`mod: expected positive modulus, got `+t);let n=e%t;return n>=L?n:t+n}function Da(e,t,n){if(n<=R)throw Error(`pow: expected modulus > 1, got `+n);if(typeof t!=`bigint`)throw TypeError(`invalid exponent: expected bigint, got `+typeof t);if(t<L)throw Error(`invalid exponent, negatives unsupported`);if(t===L)return R;if(t===R)return e;let r=e%n;if(r<L&&(r+=n),t<Ea){let e=R;for(;t>L;)t&R&&(e=e*r%n),r=r*r%n,t>>=R;return e}let i=[];for(;t>L;)i.push(Number(t&wa)),t>>=ya;let a=Array(16);a[0]=R,a[1]=r;for(let e=2;e<16;e++)a[e]=a[e-1]*r%n;let o=a[i[i.length-1]];for(let e=i.length-2;e>=0;e--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let t=i[e];t!==0&&(o=o*a[t]%n)}return o}function Oa(e,t,n){if(n<=R)throw Error(`pow2: expected modulus > 1, got `+n);if(t<L)throw Error(`pow2: expected non-negative exponent, got `+t);let r=e;for(;t-->L;)r*=r,r%=n;return r}function ka(e,t){if(e===L)throw Error(`invert: expected non-zero number`);if(t<=R)throw Error(`invert: expected modulus > 1, got `+t);let n=z(e,t),r=t,i=L,a=R;for(;n!==L;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==R)throw Error(`invert: does not exist`);return z(i,t)}function Aa(e,t,n){let r=e;if(!r.eql(r.sqr(t),n))throw Error(`Cannot find square root`)}function ja(e,t){if((e&R)===L)throw Error(t+`: expected odd modulus, got `+e)}function Ma(e,t){let n=e,r=(n.ORDER+R)/ya,i=n.pow(t,r);return Aa(n,i,t),i}function Na(e,t){let n=e,r=(n.ORDER-ba)/Sa,i=n.mul(t,_a),a=n.pow(i,r),o=n.mul(t,a),s=n.mul(n.mul(o,_a),a),c=n.mul(o,n.sub(s,n.ONE));return Aa(n,c,t),c}function Pa(e){let t=Ga(e),n=Fa(e),r=n(t,t.neg(t.ONE)),i=n(t,r),a=n(t,t.neg(r)),o=(e+xa)/Ta;return((e,t)=>{let n=e,s=n.pow(t,o),c=n.mul(s,r),l=n.mul(s,i),u=n.mul(s,a),d=n.eql(n.sqr(c),t),f=n.eql(n.sqr(l),t);s=n.cmov(s,c,d),c=n.cmov(u,l,f);let p=n.eql(n.sqr(c),t),m=n.cmov(s,c,p);return Aa(n,m,t),m})}function Fa(e){if(e<va)throw Error(`sqrt is not defined for small field`);ja(e,`tonelliShanks`);let t=e-R,n=0;for(;t%_a===L;)t/=_a,n++;let r=_a,i=Ga(e);for(;Va(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Ma;let a=i.pow(r,t),o=(t+R)/_a;return function(e,r){let i=e;if(i.is0(r))return r;if(Va(i,r)!==1)throw Error(`Cannot find square root`);let s=n,c=i.mul(i.ONE,a),l=i.pow(r,t),u=i.pow(r,o);for(;!i.eql(l,i.ONE);){if(i.is0(l))throw Error(`Cannot find square root: probably non-prime P`);let e=1,t=i.sqr(l);for(;!i.eql(t,i.ONE);)if(e++,t=i.sqr(t),e===s)throw Error(`Cannot find square root`);let n=R<<BigInt(s-e-1),r=i.pow(c,n);s=e,c=i.sqr(r),l=i.mul(l,c),u=i.mul(u,r)}return u}}function Ia(e){return ja(e,`Fp.sqrt`),e%ya===va?Ma:e%Sa===ba?Na:e%Ta===Ca?Pa(e):Fa(e)}var La=(e,t)=>(z(e,t)&R)===R,Ra=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function za(e){if(Ki(e,`field`),typeof e.ORDER!=`bigint`)throw TypeError(`param "ORDER" is invalid: expected bigint, got `+typeof e.ORDER);ia(e.BYTES,`BYTES`),ia(e.BITS,`BITS`);for(let t of Ra)qi(e[t],`field.`+t);if(e.BYTES<1||e.BITS<1)throw Error(`invalid field: expected BYTES/BITS > 0`);if(e.ORDER<=R)throw Error(`invalid field: expected ORDER > 1, got `+e.ORDER);return e}function Ba(e,t,n=!1){za(e),Ui(t,`nums`),na(n,`passZero`);let r=e,i=Array(t.length).fill(n?r.ZERO:void 0),a=t.reduce((e,t,n)=>r.is0(t)?e:(i[n]=e,r.mul(e,t)),r.ONE),o=r.inv(a);return t.reduceRight((e,t,n)=>r.is0(t)?e:(i[n]=r.mul(e,i[n]),r.mul(e,t)),o),i}function Va(e,t){za(e);let n=e;ja(n.ORDER,`FpLegendre`);let r=(n.ORDER-R)/_a,i=n.pow(t,r),a=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),s=n.eql(i,n.neg(n.ONE));if(!a&&!o&&!s)throw Error(`invalid Legendre symbol result`);return a?1:o?0:-1}function Ha(e,t){if(t!==void 0&&Gi(t),e<=L)throw Error(`invalid n length: expected positive n, got `+e);if(t!==void 0&&t<1)throw Error(`invalid n length: expected positive bit length, got `+t);let n=ma(e);if(t!==void 0&&t<n)throw Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);let r=t===void 0?n:t;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var Ua=new WeakMap,Wa=class{ORDER;BITS;BYTES;isLE;ZERO=L;ONE=R;_lengths;_mod;constructor(e,t={}){if(e<=R)throw Error(`invalid field: expected ORDER > 1, got `+e);let n;this.isLE=!1,typeof t==`object`&&t&&(typeof t.BITS==`number`&&(n=t.BITS),typeof t.sqrt==`function`&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE==`boolean`&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes==`boolean`&&(this._mod=t.modFromBytes));let{nBitLength:r,nByteLength:i}=Ha(e,n);if(i>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);this.ORDER=e,this.BITS=r,this.BYTES=i,Object.freeze(this)}create(e){return z(e,this.ORDER)}isValid(e){if(typeof e!=`bigint`)throw TypeError(`invalid field element: expected bigint, got `+typeof e);return L<=e&&e<this.ORDER}is0(e){return e===L}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&R)===R}neg(e){return z(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return z(e*e,this.ORDER)}add(e,t){return z(e+t,this.ORDER)}sub(e,t){return z(e-t,this.ORDER)}mul(e,t){return z(e*t,this.ORDER)}pow(e,t){return Da(e,t,this.ORDER)}div(e,t){return z(e*ka(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return ka(e,this.ORDER)}sqrt(e){let t=Ua.get(this);return t||Ua.set(this,t=Ia(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?la(e,this.BYTES):ca(e,this.BYTES)}fromBytes(e,t=!1){Wi(e);let{_lengths:n,BYTES:r,isLE:i,ORDER:a,_mod:o}=this;if(n){if(e.length<1||!n.includes(e.length)||e.length>r)throw Error(`Field.fromBytes: expected `+n+` bytes, got `+e.length);let t=new Uint8Array(r);t.set(e,i?0:t.length-e.length),e=t}if(e.length!==r)throw Error(`Field.fromBytes: expected `+r+` bytes, got `+e.length);let s=i?sa(e):oa(e);if(o&&(s=z(s,a)),!t&&!this.isValid(s))throw Error(`invalid field element: outside of range 0..ORDER`);return s}invertBatch(e){return Ba(this,e,!0)}cmov(e,t,n){return na(n,`condition`),n?t:e}};function Ga(e,t={}){return Object.freeze(Wa.prototype),new Wa(e,t)}var Ka=BigInt(0),qa=BigInt(1),Ja=BigInt(4),Ya=16,Xa=128,Za=5,Qa=2**31;function $a(e){let t=e;if(typeof t!=`function`)throw TypeError(`"Point" expected constructor, got type=`+typeof e);qi(t.fromAffine,`Point.fromAffine`),qi(t.fromBytes,`Point.fromBytes`),qi(t.fromHex,`Point.fromHex`),Ki(t.BASE,`Point.BASE`),Ki(t.ZERO,`Point.ZERO`),za(t.Fp),za(t.Fn)}function eo(e,t){$a(e),io(t,e);let n=Ba(e.Fp,t.map(e=>e.Z));return t.map((t,r)=>e.fromAffine(t.toAffine(n[r])))}function to(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw Error(`invalid window size, expected [`+n+`..`+t+`], got W=`+e)}function no(e,t){let n=e*(4*t+128);if(n>Qa)throw Error(`invalid window size: table would need ~`+Math.ceil(n/2**20)+` MiB, max `+Qa/2**20+` MiB`)}function ro(e,t){if(e!==void 0){qi(e,`randomBytes`);try{let n=e(t);if(!Zi(n)||n.length!==t)return}catch{return}return e}}function io(e,t){Ui(e,`points`),e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function ao(e,t,n){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,r)=>{if(!(n===void 0?t.isValid(e):da(e)&&e<n))throw Error(`invalid scalar at index `+r)})}var oo=new WeakMap;function so(e){return oo.get(e)||1}function co(e,t){let n=e.double(),r=[e];for(let e=1;e<t;e++)r.push(r[e-1].add(n));return r}function lo(e,t){let n=2**t,r=n/2,i=BigInt(n-1),a=[];for(;e>Ka;){let t=0;e&qa&&(t=Number(e&i),t>=r&&(t-=n),e-=BigInt(t)),a.push(t),e>>=qa}return a}function uo(e,t,n){let r=2**t,i=r/2,a=BigInt(r-1),o=BigInt(t),s=[];for(let t=0;t<n;t++){let t=Number(e&a);e>>=o,t>i&&(t-=r,e+=qa),s.push(t)}if(e!==Ka)throw Error(`invalid wnaf`);return s}function fo(e,t,n){let r=0;for(let e of n)r=Math.max(r,e.length);let i=e;for(let e=r-1;e>=0;e--){e!==r-1&&(i=i.double());for(let r=0;r<n.length;r++){let a=n[r][e];if(a){let e=t[r][Math.abs(a)-1>>1];i=i.add(a<0?e.negate():e)}}}return i}var po=class{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){$a(e),this.randomBytes=ro(t,Ya),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,n){let r=Math.ceil(n/t)+1,i=2**(t-1),a=[],o=e;for(let e=0;e<r;e++){let e=o;for(let t=0;t<i;t++)a.push(e),e=e.add(o);o=a[a.length-1].double()}return{W:t,bits:n,windows:r,comp:a}}wnafCachedCT(e,t){let{W:n,windows:r,comp:i}=e,a=2**(n-1),o=uo(t,n,r),s=this.ZERO,c=this.BASE;for(let e=0;e<r;e++){let t=o[e],n=e*a,r=Math.abs(t)-1,l=i[n];for(let e=1;e<a;e++)l=e===r?i[n+e]:l;let u=l.negate();t===0?c=c.add(i[n]):s=s.add(t<0?u:l)}return{p:s,f:c}}getWnafPrecomputes(e,t,n,r){let i=this.wnafPrecomputes.get(t),a=i?.find(t=>t.W===e&&t.bits===n);return a||(a=this.buildWnafTable(t,e,n),typeof r==`function`&&(a={...a,comp:r(a.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw TypeError(`"point" expected Point instance, got type=`+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!fa(t,qa,this.Point.Fn.ORDER))throw Error(`invalid scalar`)}runCT(e,t,n,r){let i=so(e);return i===1?this.fixedWindowCT(e,t,n):this.wnafCachedCT(this.getWnafPrecomputes(i,e,n,r),t)}mulCT(e,t,n){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,n)}mulCTBlinded(e,t,n){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw Error(`randomBytes is required for scalar blinding`);let r=this.Point.Fn.BITS+Xa,i=this.randomBytes(Ya);if(!Zi(i)||i.length!==Ya)throw Error(`randomBytes returned invalid byte array`);i[0]=i[0]&63|128;let a=t+oa(i)*this.Point.Fn.ORDER;return this.runCT(e,a,r,n)}fixedWindowCT(e,t,n){let r=Za,i=ha(r),a=Array(32);a[0]=this.ZERO;for(let t=1;t<32;t++)a[t]=a[t-1].add(e);let o=Math.ceil(n/r),s=this.ZERO;for(let e=o-1;e>=0;e--){if(e!==o-1)for(let e=0;e<r;e++)s=s.double();let n=Number(t>>BigInt(e*r)&i),c=a[0];for(let e=1;e<32;e++)c=e===n?a[e]:c;s=s.add(c)}return{p:s,f:s}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===qa||e===this.BASE&&(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,n,r){return this.shouldBlind(e,n)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,n){if(this.assertPoint(e),!da(t))throw Error(`invalid scalar`);let r=so(e);if(r===1||t>=this.Point.Fn.ORDER)return mo(this.Point,[e],[t],!0);let i=this.getWnafPrecomputes(r,e,this.bits,n);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),to(t,this.bits),no((Math.ceil((this.bits+Xa)/t)+1)*2**(t-1),this.Point.Fp.BYTES),oo.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return so(e)!==1}};function mo(e,t,n,r=!1){if($a(e),io(t,e),na(r,`allowOversized`),ao(n,e.Fn,r?e.Fn.ORDER**Ja:void 0),t.length!==n.length)throw Error(`arrays of points and scalars must have equal length`);let i=t.map(e=>co(e,4)),a=n.map(e=>lo(e,4));return fo(e.ZERO,i,a)}function ho(e,t,n){if(t){if(t.ORDER!==e)throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);return za(t),t}return Ga(e,{isLE:n})}function go(e,t,n={},r){if(e!==`weierstrass`&&e!==`edwards`)throw Error(`expected curve type "weierstrass" or "edwards"`);if(r===void 0&&(r=e===`edwards`),!t||typeof t!=`object`)throw Error(`expected valid ${e} CURVE object`);ga(n);for(let e of[`p`,`n`,`h`]){let n=t[e];if(!(da(n)&&n!==Ka))throw Error(`CURVE.${e} must be positive bigint`)}let i=ho(t.p,n.Fp,r),a=ho(t.n,n.Fn,r),o=[`Gx`,`Gy`,`a`,e===`weierstrass`?`b`:`d`];for(let e of o)if(!i.isValid(t[e]))throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:i,Fn:a}}function _o(e,t){return function(n){let r=e(n);return{secretKey:r,publicKey:t(r)}}}var vo=BigInt(0),yo=BigInt(1),bo=BigInt(2),xo=BigInt(4),So=BigInt(8);function Co(e,t,n,r){let i=e.sqr(n),a=e.sqr(r),o=e.add(e.mul(t.a,i),a),s=e.add(e.ONE,e.mul(t.d,e.mul(i,a)));return e.eql(o,s)}function wo(e,t={}){ga(t,{},{},`extraOpts`);let n=t,r=go(`edwards`,e,n,n.FpFnLE),{Fp:i,Fn:a}=r,o=r.CURVE,{h:s}=o;if(Va(i,o.a)!==1)throw Error(`edwards: CURVE.a must be a square in Fp for complete addition formulas`);if(Va(i,o.d)!==-1)throw Error(`edwards: CURVE.d must be a non-square in Fp for complete addition formulas`);ga(n,{},{uvRatio:`function`,randomBytes:`function`});let c=n.randomBytes===void 0?Qi:n.randomBytes,l=bo<<BigInt(i.BYTES*8)-yo;function u(e){if(!i.isOdd)throw Error(`Field does not have .isOdd()`);return i.isOdd(e)}let d=n.uvRatio===void 0?(e,t)=>{try{return{isValid:!0,value:i.sqrt(i.div(e,t))}}catch{return{isValid:!1,value:vo}}}:n.uvRatio;if(!Co(i,o,o.Gx,o.Gy))throw Error(`bad curve params: generator point`);let f=i.eql(o.a,i.neg(i.ONE))?e=>i.neg(e):i.eql(o.a,i.ONE)?e=>e:e=>i.mul(o.a,e);function p(e,t,n=!1){let r=n?yo:vo;return pa(`coordinate `+e,t,r,l),t}function m(e){if(!(e instanceof h))throw Error(`EdwardsPoint expected`)}class h{static BASE=new h(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy));static ZERO=new h(i.ZERO,i.ONE,i.ONE,i.ZERO);static Fp=i;static Fn=a;X;Y;Z;T;constructor(e,t,n,r){this.X=p(`x`,e),this.Y=p(`y`,t),this.Z=p(`z`,n,!0),this.T=p(`t`,r),Object.freeze(this)}static CURVE(){return o}static fromAffine(e){if(e instanceof h)throw Error(`extended point not allowed`);let{x:t,y:n}=e||{};return p(`x`,t),p(`y`,n),new h(t,n,i.ONE,i.mul(t,n))}static fromBytes(e,t=!1){let n=i.BYTES,{a:r,d:a}=o;e=ua(Wi(e,n,`point`)),na(t,`zip215`);let s=ua(e),c=e[n-1];s[n-1]=c&-129;let f=sa(s);pa(`point.y`,f,vo,t?l:i.ORDER);let p=i.sqr(f),m=i.sub(p,i.ONE),g=i.sub(i.mulN(a,p),r),{isValid:_,value:v}=d(m,g);if(!_)throw Error(`bad point: invalid y coordinate`);let y=u(v),b=!!(c&128);if(!t&&i.is0(v)&&b)throw Error(`bad point: x=0 and x_0=1`);return b!==y&&(v=i.neg(v)),h.fromAffine({x:v,y:f})}static fromHex(e,t=!1){return h.fromBytes(Xi(e),t)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(e=6,t=!0){return _.setWindowSize(this,e),t||this.multiply(bo),this}assertValidity(){let e=this,{a:t,d:n}=o;if(e.is0())throw Error(`bad point: ZERO`);let{X:r,Y:a,Z:s,T:c}=e,l=i.sqr(r),u=i.sqr(a),d=i.sqr(s),f=i.sqr(d),p=i.mul(l,t),m=i.mul(i.add(p,u),d),h=i.add(f,i.mul(n,i.mul(l,u)));if(!i.eql(m,h))throw Error(`bad point: equation left != right (1)`);let g=i.mul(r,a),_=i.mul(s,c);if(!i.eql(g,_))throw Error(`bad point: equation left != right (2)`)}equals(e){m(e);let{X:t,Y:n,Z:r}=this,{X:a,Y:o,Z:s}=e,c=i.mul(t,s),l=i.mul(a,r),u=i.mul(n,s),d=i.mul(o,r);return i.eql(c,l)&&i.eql(u,d)}is0(){return this.equals(h.ZERO)}negate(){return new h(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:e,Y:t,Z:n}=this,r=i.sqr(e),a=i.sqr(t),o=i.mul(i.sqr(n),bo),s=f(r),c=i.addN(e,t),l=i.sub(i.subN(i.sqr(c),r),a),u=i.addN(s,a),d=i.subN(u,o),p=i.subN(s,a),m=i.mul(l,d),g=i.mul(u,p),_=i.mul(l,p),v=i.mul(d,u);return new h(m,g,v,_)}add(e){m(e);let{d:t}=o,{X:n,Y:r,Z:a,T:s}=this,{X:c,Y:l,Z:u,T:d}=e,p=i.mul(n,c),g=i.mul(r,l),_=i.mul(i.mulN(s,t),d),v=i.mul(a,u),y=i.sub(i.subN(i.mulN(i.addN(n,r),i.addN(c,l)),p),g),b=i.subN(v,_),x=i.addN(v,_),S=i.sub(g,f(p)),C=i.mul(y,b),w=i.mul(x,S),T=i.mul(y,S),E=i.mul(b,x);return new h(C,w,E,T)}subtract(e){return m(e),this.add(e.negate())}multiply(e){if(!a.isValidNot0(e))throw RangeError(`invalid scalar: expected 1 <= sc < curve.n`);let{p:t,f:n}=_.mulSecret(this,e,s,g);return g([t,n])[0]}multiplyUnsafe(e){if(!a.isValid(e))throw RangeError(`invalid scalar: expected 0 <= sc < curve.n`);return e===vo?h.ZERO:this.is0()||e===yo?this:_.mulUnsafe(this,e,g)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return _.mulUnsafe(this,o.n).is0()}toAffine(e){let t=this,n=e;if(n!=null&&typeof n!=`bigint`)throw TypeError(`"invertedZ" expected bigint, got type=`+typeof n);let{X:r,Y:a,Z:o}=t,s=t.is0();n??=s?i.create(So):i.inv(o);let c=i.mul(r,n),l=i.mul(a,n),u=i.mul(o,n);if(s)return{x:i.ZERO,y:i.ONE};if(!i.eql(u,i.ONE))throw Error(`invZ was invalid`);return{x:c,y:l}}clearCofactor(){return s===yo?this:s===bo?this.double():s===xo?this.double().double():s===So?this.double().double().double():this.multiplyUnsafe(s)}toBytes(){let{x:e,y:t}=this.toAffine(),n=i.toBytes(t);return n[n.length-1]|=u(e)?128:0,n}toHex(){return Ji(this.toBytes())}toString(){return`<Point ${this.is0()?`ZERO`:this.toHex()}>`}}let g=e=>eo(h,e),_=new po(h,c);return _.bits>=6&&h.BASE.precompute(6),Object.freeze(h.prototype),Object.freeze(h),h}function To(e,t,n={}){if($a(e),typeof t!=`function`)throw Error(`"hash" function param is required`);let r=t,i=n;ga(i,{},{adjustScalarBytes:`function`,randomBytes:`function`,domain:`function`,prehash:`function`,zip215:`boolean`,mapToCurve:`function`,toMontgomery:`function`,toMontgomerySecret:`function`});let{prehash:a}=i,{BASE:o,Fp:s,Fn:c}=e,l=r.outputLen,u=2*s.BYTES;if(l!==void 0&&(ia(l,`hash.outputLen`),l!==u))throw Error(`hash.outputLen must be ${u}, got ${l}`);let d=i.randomBytes===void 0?Qi:i.randomBytes,f=i.toMontgomery,p=i.toMontgomerySecret,m=i.adjustScalarBytes===void 0?e=>e:i.adjustScalarBytes,h=i.domain===void 0?(e,t,n)=>{if(na(n,`phflag`),t.length||n)throw Error(`Contexts/pre-hash are not supported`);return e}:i.domain;function g(e){return c.create(sa(e))}function _(e){let t=T.secretKey;Wi(e,T.secretKey,`secretKey`);let n=Wi(r(e),2*t,`hashedSecretKey`),i=m(n.slice(0,t));return{head:i,prefix:n.slice(t,2*t),scalar:g(i)}}function v(e){let{head:t,prefix:n,scalar:r}=_(e),i=o.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}}function y(e){return v(e).pointBytes}function b(e=Uint8Array.of(),...t){let n=Yi(...t);return g(r(h(n,Wi(e,void 0,`context`),!!a)))}function x(e,t,n={}){ga(n,{},{},`options`),e=ua(Wi(e,void 0,`message`)),a&&(e=a(e));let{prefix:r,scalar:i,pointBytes:s}=v(t),l=b(n.context,r,e),u=o.multiply(l).toBytes(),d=b(n.context,u,s,e),f=c.create(l+d*i);if(!c.isValid(f))throw Error(`sign failed: invalid s`);return Wi(Yi(u,c.toBytes(f)),T.signature,`result`)}let S={zip215:i.zip215};function C(t,n,r,i=S){ga(i);let{context:s}=i,c=i.zip215===void 0?!!S.zip215:i.zip215,l=T.signature;t=Wi(t,l,`signature`),n=Wi(n,void 0,`message`),r=Wi(r,T.publicKey,`publicKey`),c!==void 0&&na(c,`zip215`),a&&(n=a(n));let u=l/2,d=t.subarray(0,u),f=sa(t.subarray(u,l)),p,m,h;try{p=e.fromBytes(r,c),m=e.fromBytes(d,c),h=o.multiplyUnsafe(f)}catch{return!1}if(!c&&p.isSmallOrder())return!1;let g=b(s,d,r,n);return m.add(p.multiplyUnsafe(g)).subtract(h).clearCofactor().is0()}let w=s.BYTES,T={secretKey:w,publicKey:w,signature:2*w,seed:w};function E(e){return e=e===void 0?d(T.seed):e,Wi(e,T.seed,`seed`)}function ee(e){return Zi(e)&&e.length===T.secretKey}function te(t,n){try{return!!e.fromBytes(t,n===void 0?S.zip215:n)}catch{return!1}}let D={getExtendedPublicKey:v,randomSecretKey:E,isValidSecretKey:ee,isValidPublicKey:te,toMontgomery(t){if(f===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return f(e.fromBytes(t))},toMontgomerySecret(e){if(p===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return p(e)}};return Object.freeze(T),Object.freeze(D),Object.freeze({keygen:_o(E,y),getPublicKey:y,sign:x,verify:C,utils:D,Point:e,lengths:T})}var Eo=BigInt(1),Do=BigInt(2),Oo=BigInt(5),ko=BigInt(8),Ao=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`),jo={p:Ao,n:BigInt(`0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`),h:ko,a:BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`),d:BigInt(`0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`),Gx:BigInt(`0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`),Gy:BigInt(`0x6666666666666666666666666666666666666666666666666666666666666658`)};function Mo(e){let t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),a=Ao,o=e*e%a*e%a,s=Oa(Oa(o,Do,a)*o%a,Eo,a)*e%a,c=Oa(s,Oo,a)*s%a,l=Oa(c,t,a)*c%a,u=Oa(l,n,a)*l%a,d=Oa(u,r,a)*u%a;return{pow_p_5_8:Oa(Oa(Oa(Oa(d,i,a)*d%a,i,a)*d%a,t,a)*c%a,Do,a)*e%a,b2:o}}function No(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}var Po=BigInt(`19681161376707505956807079304988542015446066515923890162744021073123829784752`);function Fo(e,t){let n=Ao,r=z(t*t*t,n),i=Mo(e*z(r*r*t,n)).pow_p_5_8,a=z(e*r*i,n),o=z(t*a*a,n),s=a,c=z(a*Po,n),l=o===e,u=o===z(-e,n),d=o===z(-e*Po,n);return l&&(a=s),(u||d)&&(a=c),La(a,n)&&(a=z(-a,n)),{isValid:l||u,value:a}}var Io=wo(jo,{uvRatio:Fo}),Lo=Io.Fp;function Ro(e){let{y:t}=e;return Lo.toBytes(Lo.div(Eo+t,Eo-t))}function zo(e){let t=Io.Fp.BYTES;return ii(e,t),No(Hi(e.subarray(0,t))).subarray(0,t)}function Bo(e){return To(Io,Hi,Object.assign({adjustScalarBytes:No,toMontgomery:Ro,toMontgomerySecret:zo,zip215:!0},e))}var Vo=Bo({}),Ho=[`https://api.mainnet.solana.com`,`https://api.mainnet-beta.solana.com`],Uo=`https://api.mainnet-beta.solana.com`,B=null,Wo=!1,Go=null;function Ko(e,t){B=`${t?`${t}/rpc`:`https://mainnet.helius-rpc.com/`}?api-key=${encodeURIComponent(e)}`,Wo=!!t,Go=(n,r)=>`${t?`${t}/tx/${n}`:`https://mainnet.helius-rpc.com/v0/addresses/${n}/transactions`}?api-key=${encodeURIComponent(e)}&limit=100${r?`&before-signature=${r}`:``}`,Ho=[B,...Ho]}var V=1e9,qo=5e3,Jo=890880,Yo=`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`,Xo=`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`,H=e=>(e/V).toFixed(4).replace(/\.?0+$/,``),Zo=e=>new Promise(t=>setTimeout(t,e)),Qo=class extends Error{},$o=class extends Error{},es=class{limit;ms;times=[];constructor(e,t){this.limit=e,this.ms=t}prune(e){for(;this.times.length&&this.times[0]<=e-this.ms;)this.times.shift()}when(e=1){let t=Date.now();this.prune(t);let n=this.times.length,r=n-(this.limit-Math.min(e,this.limit))-1;return Math.max(t,n?this.times[n-1]:0,r>=0?this.times[r]+this.ms:0)}delay(){return this.when(1)-Date.now()}book(e,t){let n=this.times.length;for(;n>0&&this.times[n-1]>t;)n--;this.times.splice(n,0,...Array(e).fill(t))}async take(){let e=this.when(1);this.book(1,e),e>Date.now()&&await Zo(e-Date.now())}room(){let e=Date.now();return this.prune(e),this.times.length&&this.times[this.times.length-1]>e?0:this.limit-this.times.length}takeNow(e){this.book(e,Date.now())}},ts=new Set([`getAsset`,`getAssetBatch`,`getAssetsByOwner`]),ns={helius:new es(9,1100),heliusDas:new es(2,1100),heliusSend:new es(1,1050),history:new es(2,1100),publicAll:new es(90,1e4),publicMethod:new Map},rs=e=>(ns.publicMethod.has(e)||ns.publicMethod.set(e,new es(35,1e4)),ns.publicMethod.get(e)),is=new Map,as=4e3,os=(e,t)=>void(e!==B&&is.set(`${e} ${t}`,Date.now()+as)),ss=(e,t)=>(is.get(`${e} ${t}`)??0)>Date.now();function cs(e,t){return e===B?Math.max(...t.map(e=>(ts.has(e)?ns.heliusDas:ns.helius).delay())):t.some(t=>ss(e,t))?1/0:Math.max(ns.publicAll.delay(),...t.map(e=>rs(e).delay()))}async function ls(e,t){let n=new Map,r=e=>n.set(e,(n.get(e)??0)+1);for(let n of t)e===B?(n===`sendTransaction`&&r(ns.heliusSend),r(ts.has(n)?ns.heliusDas:ns.helius)):(r(ns.publicAll),r(rs(n)));let i=Math.max(...[...n].map(([e,t])=>e.when(t)));for(let[e,t]of n)e.book(t,i);i>Date.now()&&await Zo(i-Date.now())}function us(e){ns.publicAll.takeNow(1),rs(e).takeNow(1)}function ds(e){let t=Ho.filter(t=>!ss(t,e)),n=t.length?t:Ho;return!B||ns.helius.delay()<120||cs(Uo,[e])>0?n:[Uo,...n.filter(e=>e!==Uo)]}var fs=(e,t)=>fetch(e,{method:`POST`,...e===B&&Wo?{}:{headers:{"content-type":`application/json`}},body:JSON.stringify(t)});async function ps(e,t){for(let n=0;;n++){let r=[],i=0;for(let n of ds(e))try{return await ms(n,e,t,0)}catch(e){if(e instanceof Qo)throw e;e instanceof $o&&i++,r.push(`${new URL(n).hostname}: ${e instanceof Error?e.message:String(e)}`)}if(i&&n<3)await Zo(500*(n+1));else throw Error(`Couldn't reach the Solana network (${e}). ${r.join(`; `)}`)}}async function ms(e,t,n,r=3,i=!1){for(let a=0;;a++){i&&e!==B?us(t):await ls(e,[t]);let o=await fs(e,{jsonrpc:`2.0`,id:1,method:t,params:n});if(o.status===429){if(os(e,t),a<r){await Zo(400*(a+1));continue}throw new $o(`HTTP 429`)}if(!o.ok)throw Error(`HTTP ${o.status}`);let s=await o.json();if(s.error){if(s.error.code===-32005||s.error.code===429){if(os(e,t),a<r){await Zo(400*(a+1));continue}throw new $o(s.error.message)}throw new Qo(s.error.message)}return s.result}}async function hs(e,t,n=!1){try{n&&e!==B?t.forEach(e=>us(e.method)):await ls(e,t.map(e=>e.method));let r=await fs(e,t.map((e,t)=>({jsonrpc:`2.0`,id:t,...e})));if(r.status===429){for(let n of t)os(e,n.method);throw new $o(`HTTP 429`)}if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.json();if(!Array.isArray(i))throw Error(`not a batch`);let a=t.map((e,t)=>i.find(e=>e.id===t)),o=t.filter((e,t)=>a[t]?.error?.code===-32005||a[t]?.error?.code===429);if(o.length){for(let t of o)os(e,t.method);throw new $o(a.find(e=>e?.error).error.message)}if(a.some(e=>!e||e.error))throw Error(a.find(e=>e?.error)?.error?.message??`missing answer`);return a.map(e=>e.result)}catch(r){if(r instanceof $o)throw r;return await Promise.all(t.map(t=>ms(e,t.method,t.params,3,n)))}}async function gs(e){return(await bs(e)).name}var _s=new Map;function vs(e){let t=_s.get(e);return t||(t=ms(B,`getAsset`,{id:e}),_s.set(e,t),t.catch(()=>_s.delete(e))),t}var ys=e=>e.content?.files?.map(e=>e.cdn_uri).find(e=>e?.startsWith(`https://cdn.helius-rpc.com/`));async function bs(e){if(!B)return{name:null};try{let t=await vs(e),n=t.content?.metadata;return{name:n?.name?`${n.name} (${n.symbol||`?`})`:null,logo:ys(t)}}catch{return{name:null}}}async function xs(e){if(!B)return{name:null,symbol:null};try{let t=await vs(e);return{name:t.content?.metadata?.name||null,symbol:t.content?.metadata?.symbol||t.token_info?.symbol||null,decimals:t.token_info?.decimals,logo:ys(t)}}catch{return{name:null,symbol:null}}}async function Ss(e){return(await ps(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}])).value.map(e=>e?.lamports??0)}function Cs(e){let t=[];for(;;){let n=e&127;if(e>>=7,e===0)return t.push(n),t;t.push(n|128)}}function ws(e,t){let n=0;for(let r=0;r<3;r++){let i=e[t+r];if(n|=(i&127)<<7*r,!(i&128))return[n,r+1]}throw Error(`Bad transaction length prefix`)}function Ts(e,t){let n=e.slice(),[r,i]=ws(n,0),a=n.subarray(i+64*r),o=a[0]&128?1:0,s=a[o];o+=3;let[,c]=ws(a,o);o+=c;let l=Kn.decode(t.address),u=-1;for(let e=0;e<s;e++)a.subarray(o+32*e,o+32*e+32).every((e,t)=>e===l[t])&&(u=e);if(u<0)throw Error(`This trade isn't addressed to your wallet, so it was not signed.`);return n.set(Vo.sign(a,t.secret),i+64*u),n}function Es(e,t,n){let r=new Map([[e.address,{signer:!0,writable:!0}]]),i=(e,t,n)=>{let i=r.get(e)??{signer:!1,writable:!1};r.set(e,{signer:i.signer||t,writable:i.writable||n})};for(let e of t)e.keys.forEach(e=>i(e.pubkey,e.isSigner,e.isWritable)),i(e.programId,!1,!1);let a=([t,n])=>t===e.address?0:n.signer?n.writable?1:2:n.writable?3:4,o=[...r.entries()].sort((e,t)=>a(e)-a(t));if(o.some(([t,n])=>n.signer&&t!==e.address))throw Error(`Only the paying wallet can sign here.`);let s=new Map(o.map(([e],t)=>[e,t])),c=o.filter(([,e])=>!e.signer&&!e.writable).length,l=Uint8Array.from([1,0,c,...Cs(o.length),...o.flatMap(([e])=>[...Kn.decode(e)]),...Kn.decode(n),...Cs(t.length),...t.flatMap(e=>[s.get(e.programId),...Cs(e.keys.length),...e.keys.map(e=>s.get(e.pubkey)),...Cs(e.data.length),...e.data])]);return Ts(Uint8Array.from([...Cs(1),...new Uint8Array(64),...l]),e)}var Ds=`11111111111111111111111111111111`;function Os(e,t,n){let r=new Uint8Array(12),i=new DataView(r.buffer);return i.setUint32(0,2,!0),i.setBigUint64(4,BigInt(n),!0),{programId:Ds,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],data:r}}function ks(e,t,n){return{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:Uint8Array.from([9])}}var As=`ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`;function js(e){return Ms(Kn.decode(e))}function Ms(e){try{return Vo.Point.fromBytes(e),!0}catch{return!1}}var Ns=new Map;function Ps(e,t,n){let r=`${e}${t}${n}`,i=Ns.get(r);return i||(i=Fs([Kn.decode(e),Kn.decode(n),Kn.decode(t)],As),Ns.size>5e3&&Ns.clear(),Ns.set(r,i)),i}function Fs(e,t){let n=Kn.decode(t),r=new TextEncoder().encode(`ProgramDerivedAddress`);for(let t=255;t>=0;t--){let i=[...e,Uint8Array.of(t),n,r],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;let s=Vi(a);if(!Ms(s))return Kn.encode(s)}throw Error(`Couldn't work out the coin account address.`)}function Is(e,t,n,r,i){return{programId:As,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:Ds,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1}],data:Uint8Array.of(1)}}function Ls(e,t,n,r){let i=new Uint8Array(10),a=new DataView(i.buffer);return i[0]=12,a.setBigUint64(1,r,!0),i[9]=e.decimals,{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:e.mint,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:i}}async function Rs(e){let t=await ps(`getAccountInfo`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]);return t.value?{owner:t.value.owner,lamports:t.value.lamports}:null}var zs=Ds;async function Bs(e){return(await ps(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`}])).value.map(e=>e?{owner:e.owner,lamports:e.lamports,data:e.data?Ln.decode(e.data[0]):new Uint8Array}:null)}async function Vs(e,t){let{err:n,logs:r,accounts:i}=(await ps(`simulateTransaction`,[Ln.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:t}}])).value;return{err:n,logs:r??[],accounts:(i??t.map(()=>null)).map(e=>e?{owner:e.owner,lamports:e.lamports,data:Ln.decode(e.data[0])}:null)}}function Hs(e){return!e||e.data.length<72?0n:new DataView(e.data.buffer,e.data.byteOffset).getBigUint64(64,!0)}var Us=`ComputeBudget111111111111111111111111111111`;function Ws(e,t){let n=new Uint8Array(5);n[0]=2,new DataView(n.buffer).setUint32(1,e,!0);let r=new Uint8Array(9);return r[0]=3,new DataView(r.buffer).setBigUint64(1,BigInt(t),!0),[{programId:Us,keys:[],data:n},{programId:Us,keys:[],data:r}]}function Gs(e,t,n,r=Yo){return ks({address:e,program:r},t,n)}function Ks(e,t,n,r){return qs(e,[{to:t,lamports:n}],r)}function qs(e,t,n){return Es(e,t.map(({to:t,lamports:n})=>Os(e.address,t,n)),n)}async function Js(e,t){let n=t?[{mint:t}]:[{programId:Yo},{programId:Xo}];return(await Promise.all(n.map(t=>ps(`getTokenAccountsByOwner`,[e,t,{encoding:`jsonParsed`,commitment:`confirmed`}])))).flatMap(e=>e.value.map(({pubkey:e,account:t})=>{let n=t.data.parsed.info;return{address:e,program:t.owner,mint:n.mint,raw:BigInt(n.tokenAmount.amount),decimals:n.tokenAmount.decimals,lamports:t.lamports}}))}var Ys=null;function Xs(e=2e4){if(Ys&&Date.now()-Ys.at<e)return Ys.value;let t=ps(`getLatestBlockhash`,[{commitment:`confirmed`}]).then(e=>e.value.blockhash),n={at:Date.now(),value:t};return Ys=n,t.catch(()=>Ys===n&&(Ys=null)),t}var Zs=()=>void Xs(8e3).catch(()=>{}),Qs=/custom program error: 0x177[234]\b/,$s=class extends Error{slippage;constructor(e,t){super(e),this.slippage=t}};async function ec(e){let t=[Ln.encode(e),{encoding:`base64`,preflightCommitment:`confirmed`}],n=B?ns.heliusSend.room()>0?[B,Uo]:[Uo]:Ho,r=e=>new Promise((n,r)=>{let i=e.length,a=null,o=null;for(let s of e)ms(s,`sendTransaction`,t,1).then(n,e=>{e instanceof Qo?a??=e:o??=e,--i===0&&r(a??o)})});try{try{return await r(n)}catch(e){if(e instanceof Qo||!B||n.includes(B))throw e;return await r([B])}}catch(e){throw e instanceof Qo?Qs.test(e.message)?new $s(`The price moved too far before the trade went through, so it was stopped. Nothing was spent.`,!0):new $s(`The network turned the trade down before it ran, so nothing was spent (${e.message}).`,!1):Error(`Couldn't reach the Solana network to send it (${e instanceof Error?e.message:String(e)}).`)}}var tc=new Map,nc=!1;function rc(e,t=45e3){return new Promise(n=>{let r=tc.get(e);tc.set(e,{end:Date.now()+t,done:r?e=>{r.done(e),n(e)}:n}),nc||ic()})}async function ic(){nc=!0;try{for(await Zo(300);tc.size;){let e=Date.now(),t=[...tc.keys()].slice(0,200);try{(await ps(`getSignatureStatuses`,[t])).value.forEach((e,n)=>{let r=e?.err?`failed`:e&&(e.confirmationStatus===`confirmed`||e.confirmationStatus===`finalized`)?`confirmed`:null;r&&(tc.get(t[n])?.done(r),tc.delete(t[n]))})}catch{}for(let[e,t]of tc)Date.now()>t.end&&(t.done(`timeout`),tc.delete(e));tc.size&&await Zo(Math.max(0,300-(Date.now()-e)))}}finally{nc=!1}}function ac(e){return`https://solscan.io/account/${e}`}function oc(e){return`https://solscan.io/tx/${e}`}var sc=`So11111111111111111111111111111111111111112`,cc=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),lc=new Map;function uc(e,t){let n=`${e}:${t??``}`,r=lc.get(n);if(r&&Date.now()-r.at<6e4)return r.value.then(e=>e?.clone()??null);let i=(async()=>{for(let n=0;;n++){await ns.history.take();let r=await fetch(Go(e,t),{signal:AbortSignal.timeout(15e3)});if(r.status!==429||n>=3)return r;await Zo(700*(n+1))}})(),a={at:Date.now(),value:i};return lc.set(n,a),i.then(e=>(!e||!e.ok)&&lc.get(n)===a&&lc.delete(n),()=>lc.get(n)===a&&lc.delete(n)),i.then(e=>e?.clone()??null)}async function dc(e,t,n,r=10){if(!Go)return null;let i=0,a=0,o=0,s;for(let c=0;c<r;c++){let r;try{let t=await uc(e,s);if(!t?.ok)return c?{lamports:i,usd:a,coins:o}:null;r=await t.json()}catch{return c?{lamports:i,usd:a,coins:o}:null}for(let n of r){if(n.transactionError)continue;let r=new Set;for(let t of n.tokenTransfers??[])t.toUserAccount===e&&t.toTokenAccount&&r.add(t.toTokenAccount),t.fromUserAccount===e&&t.fromTokenAccount&&r.add(t.fromTokenAccount);let s=0;for(let t of n.nativeTransfers??[])r.has(t.toUserAccount)||r.has(t.fromUserAccount)||(t.fromUserAccount===e&&(s-=t.amount),t.toUserAccount===e&&(s+=t.amount));let c=0,l=new Map;for(let r of n.tokenTransfers??[]){let n=+(r.toUserAccount===e)-(r.fromUserAccount===e);n&&(r.mint===sc?s+=n*Math.round(r.tokenAmount*1e9):cc.has(r.mint)&&r.mint!==t?c+=n*r.tokenAmount:l.set(r.mint,(l.get(r.mint)??0)+n*r.tokenAmount))}let u=l.get(t)??0;if(u<=0||[...l].some(([e,n])=>e!==t&&Math.abs(n)>1e-6))continue;let d=s<0?-s:0,f=c<0?-c:0;d<5e5&&f<.05||(i+=d,a+=f,o+=u)}if(o>=n*.999||r.length<100)break;s=r[r.length-1].signature}return{lamports:i,usd:a,coins:o}}function fc(e,t){if(e.transactionError)return null;let n=new Set;for(let r of e.tokenTransfers??[])r.toUserAccount===t&&r.toTokenAccount&&n.add(r.toTokenAccount),r.fromUserAccount===t&&r.fromTokenAccount&&n.add(r.fromTokenAccount);let r=0;for(let i of e.nativeTransfers??[])n.has(i.toUserAccount)||n.has(i.fromUserAccount)||(i.fromUserAccount===t&&(r-=i.amount),i.toUserAccount===t&&(r+=i.amount));let i=0,a=new Map;for(let n of e.tokenTransfers??[]){let e=+(n.toUserAccount===t)-(n.fromUserAccount===t);e&&(n.mint===sc?r+=e*Math.round(n.tokenAmount*1e9):cc.has(n.mint)?i+=e*n.tokenAmount:a.set(n.mint,(a.get(n.mint)??0)+e*n.tokenAmount))}let o=[...a].filter(([,e])=>Math.abs(e)>1e-6);if(o.length!==1)return null;let[s,c]=o[0],l=c>0?1:-1;if(l===-1&&r<=0&&i<=0){let n=e.accountData?.find(e=>e.account===t)?.nativeBalanceChange??0;n>0&&(r=n)}let u=l===1?-r:r,d=l===1?-i:i;return u<5e5&&d<.05?null:{sig:e.signature,at:e.timestamp??0,mint:s,side:l,coins:Math.abs(c),lamports:Math.max(0,u),usd:Math.max(0,d)}}async function pc(e,t,n=10){if(!Go)return null;let r=[],i,a;for(let o=0;o<n;o++){let n;try{let t=await uc(e,a);if(!t?.ok)return o?{trades:r,top:i,reachedStop:!1}:null;n=await t.json()}catch{return o?{trades:r,top:i,reachedStop:!1}:null}o===0&&(i=n[0]?.signature??t);for(let a of n){if(a.signature===t)return{trades:r,top:i,reachedStop:!0};let n=fc(a,e);n&&r.push(n)}if(n.length<100)return{trades:r,top:i,reachedStop:!0};a=n[n.length-1].signature}return{trades:r,top:i,reachedStop:!1}}async function mc(e){let t=e=>[e,{limit:1,commitment:`confirmed`}],n=e.map(()=>void 0),r=async r=>{for(let i of B?[B,Uo]:[Uo])try{n[r]=(await ms(i,`getSignaturesForAddress`,t(e[r])))[0]?.signature??null;return}catch{}},i=[];for(let t=0;t<e.length;t+=30)i.push(t);return await Promise.all(i.map(async i=>{let a=e.slice(i,i+30),o=()=>Promise.all(a.map((e,t)=>n[i+t]===void 0?r(i+t):null));if(a.length<3&&B)return o();let s=rs(`getSignaturesForAddress`);if(ss(Uo,`getSignaturesForAddress`)||s.room()<a.length||ns.publicAll.room()<a.length)return o();s.takeNow(a.length),ns.publicAll.takeNow(a.length);try{let e=await fs(Uo,a.map((e,n)=>({jsonrpc:`2.0`,id:n,method:`getSignaturesForAddress`,params:t(e)}))),r=e.ok?await e.json():[];(e.status===429||Array.isArray(r)&&r.some(e=>e.error?.code===-32005||e.error?.code===429))&&os(Uo,`getSignaturesForAddress`);for(let e of Array.isArray(r)?r:[])e.result&&(n[i+e.id]=e.result[0]?.signature??null)}catch{}return o()})),n}async function hc(e){let t=[];for(let n=0;n<e.length;n+=100){let r=await ps(`getMultipleAccounts`,[e.slice(n,n+100),{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:64,length:8}}]);for(let e of r.value){let n=e?Ln.decode(e.data[0]):null;t.push(n&&n.length===8?new DataView(n.buffer,n.byteOffset).getBigUint64(0,!0):null)}}return t}async function gc(e,t,n){let r=n?[n]:[Yo,Xo],i=e.flatMap(e=>r.map(n=>Ps(e,t,n))),a=[t,...e,...i],o=[];for(let e=0;e<a.length;e+=100)o.push(a.slice(e,e+100));let s=(await Promise.all(o.map(e=>ps(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:44,length:28}}])))).flatMap(e=>e.value),c=s[0],l=c?Ln.decode(c.data[0]):null,u=!!c&&(c.owner===`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`||c.owner===`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)&&!!l?.length,d=u?r.indexOf(c.owner):-1,f=t=>{if(d<0)return null;let n=s[1+e.length+t*r.length+d];return n&&n.owner===c.owner?n:null};return{decimals:u?l[0]:void 0,program:u?c.owner:void 0,lamports:e.map((e,t)=>s[1+t]?.lamports??0),raw:e.map((e,t)=>{let n=f(t),r=n?Ln.decode(n.data[0]):null;return r&&r.length>=28?new DataView(r.buffer,r.byteOffset).getBigUint64(20,!0):0n}),deposit:e.map((e,t)=>f(t)?.lamports??0),accounts:e.map((e,t)=>f(t)?i[t*r.length+d]:null)}}async function _c(e){let t=new Map;if(!B||!e.length)return t;for(let n=0;n<e.length;n+=1e3)try{let r=await ms(B,`getAssetBatch`,{ids:e.slice(n,n+1e3)});for(let e of r)e&&t.set(e.id,{name:e.content?.metadata?.name||null,symbol:e.content?.metadata?.symbol||e.token_info?.symbol||null,logo:ys(e),decimals:e.token_info?.decimals,price:e.token_info?.price_info?.price_per_token||void 0})}catch{}return t}function vc(e){return B?e.some(e=>ss(Uo,e))?[B,Uo]:[Uo,B]:[Uo]}var yc=[`getTokenAccountsByOwner`,`getMultipleAccounts`];async function bc(e,t=vc(yc)){let n=null;for(let r of t)try{let[t,n,i]=await hs(r,[{method:`getTokenAccountsByOwner`,params:[e,{programId:Yo},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getTokenAccountsByOwner`,params:[e,{programId:Xo},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getMultipleAccounts`,params:[[e],{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]}],!0),a=[...t.value,...n.value].map(({pubkey:e,account:t})=>({address:e,mint:t.data.parsed.info.mint,raw:BigInt(t.data.parsed.info.tokenAmount.amount)})).filter(e=>e.raw>0n).slice(0,60);return{node:r,lamports:i.value[0]?.lamports??0,accounts:a}}catch(e){n=e}throw n instanceof Error?n:Error(String(n))}async function xc(e,t,n){let r=await(n??bc(t)).catch(()=>bc(t)),i=null,a=[r.node,...vc([`simulateTransaction`]).filter(e=>e!==r.node)];a.length>1&&ss(a[0],`simulateTransaction`)&&a.push(a.shift());for(let n of a)try{n!==r.node&&(r=await bc(t,[n]));let i=await ms(n,`simulateTransaction`,[Ln.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:[t,...r.accounts.map(e=>e.address)]}}],n===B?2:0,!0);if(i.value.err)return{failed:!0,solOut:0,coinsOut:new Map,takenOver:!1};let a=i.value.accounts??[],o=a[0],s=!!o&&o.owner!==Ds,c=new Map;return r.accounts.forEach((e,n)=>{let r=a[n+1],i=r?Ln.decode(r.data[0]):new Uint8Array;i.length>=64&&Kn.encode(i.slice(32,64))!==t&&(s=!0);let o=i.length>=72?new DataView(i.buffer,i.byteOffset).getBigUint64(64,!0):0n;o<e.raw&&c.set(e.mint,(c.get(e.mint)??0n)+(e.raw-o))}),{failed:!1,solOut:r.lamports-(o?.lamports??0),coinsOut:c,takenOver:s}}catch(e){i=e}throw i instanceof Error?i:Error(String(i))}var Sc=`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`,Cc=`pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA`,wc=`So11111111111111111111111111111111111111112`,Tc=zs,Ec=`ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw`,Dc=`5PHirr8joyTMp9JMm6nW7hNDVyEYdkzDqazxPD7RaTjx`,Oc=`4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`,kc=`8Wf5TiAheLUqBrKXeYg2JtAFFMWtKdG2BSFgqUcPVwTt`,Ac=`Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`,jc=`5YxQFdt3Tr9zJLvkFccqXVUwhdTWJQc1fFg2YPbxvxeD`,Mc=Uint8Array.from([43,100,73,19,233,246,111,148]),Nc=e=>new TextEncoder().encode(e),Pc=e=>Kn.decode(e),Fc=Fs([Nc(`__event_authority`)],Cc);function Ic(e){return Fs([Nc(`bonding-curve`),Pc(e)],Sc)}function Lc(e,t){let n=Fs([Nc(`pool-authority`),Pc(e)],Sc);return Fs([Nc(`pool`),Uint8Array.of(0,0),Pc(n),Pc(e),Pc(t)],Cc)}async function Rc(e){let[t,n]=await Bs([Ic(e),e]);if(!t||t.owner!==Sc||t.data.length<115||!n)return null;let r=Kn.encode(t.data.slice(83,115));if(r===Tc||r===wc)return null;let i=t.data[48]!==0,a=t.data[81]!==0,o=t.data[82]!==0,[s,c]=await Bs([r,Lc(e,r)]);if(!s)throw Error(`This coin's price coin couldn't be found.`);let l=i?c?.owner===Cc?`pool`:null:`curve`;if(!l)throw Error(`This coin is between pump.fun and its pool right now, so it can't be traded for a moment. Try again shortly.`);if(l===`curve`&&a||l===`pool`&&c.data.length>=244&&c.data[243]!==0)throw Error(`pump.fun doesn't allow this kind of trade on "mayhem mode" coins.`);let u=l===`pool`&&c.data.length>=245&&c.data[244]!==0;if(l===`curve`&&o||u)throw Error(`pump.fun doesn't allow this kind of trade on cashback coins.`);let d=e=>{if(e!==`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`&&e!==`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)throw Error(`This coin uses a token program the app doesn't know.`);return e};return{mint:e,mintProgram:d(n.owner),quote:r,quoteProgram:d(s.owner),venue:l}}function zc(e,t,n,r,i){let a={mint:t.mint,program:t.mintProgram},o={mint:t.quote,program:t.quoteProgram},[s,c]=n===`buy`?[o,a]:[a,o],l=(e,t)=>Ps(e,t.mint,t.program),u=t.venue===`curve`?Ic(t.mint):Lc(t.mint,t.quote),d=e=>({pubkey:e,isSigner:!1,isWritable:!0}),f=e=>({pubkey:e,isSigner:!1,isWritable:!1}),p=new Uint8Array(24);p.set(Mc,0);let m=new DataView(p.buffer);m.setBigUint64(8,r,!0),m.setBigUint64(16,i,!0);let h={programId:Cc,keys:[{pubkey:e,isSigner:!0,isWritable:!0},d(l(e,s)),d(l(e,c)),f(Ec),f(Dc),d(Fs([Nc(`user_volume_accumulator`),Pc(e)],Cc)),d(l(jc,o)),f(Yo),f(Xo),f(zs),f(Fc),f(Cc),f(Sc),f(Oc),f(kc),f(Ac),f(t.mint),f(t.quote),d(u),d(l(u,a)),d(l(u,o))],data:p};return[...Ws(3e5,2e5),Is(e,l(e,c),e,c.mint,c.program),Is(e,l(jc,o),jc,o.mint,o.program),h]}function Bc(e,t,n){return n===`coin`?Ps(e,t.mint,t.mintProgram):Ps(e,t.quote,t.quoteProgram)}var Vc=`walletCoins`,Hc=1,Uc=null,Wc=()=>({v:Hc,wallets:{},coins:{}}),Gc=()=>Uc??=j.get(Vc).then(e=>{let t=JSON.parse(e||`null`);return t&&t.v===Hc?t:Wc()}).catch(Wc),Kc;function qc(){clearTimeout(Kc),Kc=setTimeout(async()=>{let e=await Gc();j.set(Vc,JSON.stringify(e)).catch(()=>{})},300)}var Jc=([e,t,n,r,i,a])=>({address:e,mint:t,program:n,raw:BigInt(r),decimals:i,lamports:a}),Yc=e=>[e.address,e.mint,e.program,e.raw.toString(),e.decimals,e.lamports],Xc=(e,t)=>t.map(t=>({address:t,lamports:e.wallets[t].lamports,accounts:e.wallets[t].accounts.map(Jc)}));async function Zc(e){let t=await Gc();return e.every(e=>t.wallets[e])?Xc(t,e):null}async function Qc(e){tl=null;let t=await Gc();for(let n of e)t.wallets[n]&&(t.wallets[n].stale=!0);qc()}async function $c(e,t,n){if(!t.length)return;let r=t.map(e=>e.address).filter(e=>!n.has(e)),[i,a]=await Promise.all([Promise.all(t.map(e=>Js(e.address))),r.length?mc(r):Promise.resolve([])]),o=new Map(n);r.forEach((e,t)=>o.set(e,a[t])),t.forEach(({address:t,lamports:n},r)=>{let a=e.wallets[t],s=o.get(t);e.wallets[t]={at:Date.now(),lamports:n,sig:s===void 0?a?.sig:s,sigAt:s===void 0?a?.sigAt:Date.now(),accounts:i[r].map(Yc)}})}async function el(e,t){let n=new Map;for(let r of t)for(let t of e.wallets[r].accounts)BigInt(t[3])>0n&&n.set(t[1],t[4]);let r=[...n.keys()].filter(t=>!e.coins[t]);if(!r.length)return;let i=await _c(r);for(let t of r){let r=i.get(t);r&&(e.coins[t]={name:r.name,symbol:r.symbol,logo:r.logo,decimals:r.decimals??n.get(t),price:r.price})}}var tl=null;function nl(e){let t=e.join(`,`);if(tl&&tl.key===t&&Date.now()-tl.at<4e3)return tl.value;let n=rl(e),r={key:t,at:Date.now(),value:n};return tl=r,n.then(()=>tl===r&&(r.at=Date.now()),()=>tl===r&&(tl=null)),n}async function rl(e){let t=await Gc(),n=e=>t.wallets[e]&&!t.wallets[e].stale,r=e.flatMap(e=>n(e)?t.wallets[e].accounts.map(t=>({owner:e,a:t})):[]),i=e.filter(e=>!t.wallets[e]),[a,o,s]=await Promise.all([Ss(e),r.length?hc(r.map(e=>e.a[0])):Promise.resolve([]),i.length?mc(i):Promise.resolve([])]),c=new Map(i.map((e,t)=>[e,s[t]])),l=new Set;return e.forEach((e,n)=>{let r=t.wallets[e];(!r||r.stale||r.lamports!==a[n])&&(!r&&c.get(e)===null&&!a[n]?t.wallets[e]={at:Date.now(),lamports:0,sig:null,sigAt:Date.now(),accounts:[]}:l.add(e))}),r.forEach(({owner:e,a:t},n)=>{let r=o[n];r===null?l.add(e):t[3]=r.toString()}),await $c(t,[...l].map(t=>({address:t,lamports:a[e.indexOf(t)]})),c),e.forEach((e,n)=>{t.wallets[e].lamports=a[n],t.wallets[e].at=Date.now()}),await el(t,e),qc(),Xc(t,e)}async function il(e,t=!1){let n=await Gc(),r=e.filter(e=>n.wallets[e]&&!n.wallets[e].stale&&(t||Date.now()-(n.wallets[e].sigAt??0)>12e4));if(!r.length)return null;let i=await mc(r),a=new Map(r.map((e,t)=>[e,i[t]])),o=r.filter(e=>a.get(e)!==void 0&&a.get(e)!==n.wallets[e].sig);for(let e of r)a.get(e)!==void 0&&(n.wallets[e].sigAt=Date.now());return o.length?(await $c(n,o.map(e=>({address:e,lamports:n.wallets[e].lamports})),a),await el(n,e),qc(),Xc(n,e)):(qc(),null)}async function al(e){let t=await Gc(),n=new Map;for(let t of e.accounts){if(t.raw===0n)continue;let e=n.get(t.mint)??{raw:0n,decimals:t.decimals};e.raw+=t.raw,n.set(t.mint,e)}return[...n].map(([e,{raw:n,decimals:r}])=>{let i=t.coins[e],a=Number(n)/10**r;return{mint:e,name:i?.name??null,symbol:i?.symbol??null,amount:a,usd:i?.price?i.price*a:null,decimals:r,logo:i?.logo}})}async function ol(e){let t=await Gc(),n=!1;for(let[r,i]of e)t.coins[r]&&i>0&&t.coins[r].price!==i&&(t.coins[r].price=i,n=!0);n&&qc()}async function sl(e){return(await Gc()).coins[e]??null}async function cl(e){let t=await Gc();for(let n of Object.values(t.wallets))for(let t of n.accounts)if(t[1]===e)return t[2]}var ll=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(ai(e),ii(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),ui(r)}update(e){return ci(this),this.iHash.update(e),this}digestInto(e){ci(this),li(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},ul=(()=>{let e=((e,t,n)=>new ll(e,t).update(n).digest());return e.create=(e,t)=>new ll(e,t),e})();function dl(e,t,n,r){ai(e);let{c:i,dkLen:a,asyncTick:o}=xi({dkLen:32,asyncTick:10},r);if(ri(i,`c`),ri(a,`dkLen`),ri(o,`asyncTick`),i<1)throw Error(`"c" (iterations) must be >= 1`);if(a<1)throw Error(`"dkLen" must be >= 1`);if(a>(2**32-1)*e.outputLen)throw Error(`derived key too long`);let s=yi(t,`password`);try{let t=yi(n,`salt`);try{let n=new Uint8Array(a),{iHash:r,oHash:c,outputLen:l}=ul.create(e,s);return{c:i,dkLen:a,asyncTick:o,DK:n,outputLen:l,eng:fl(r,c,t,new Uint8Array(l))}}finally{typeof n==`string`&&ui(t)}}finally{typeof t==`string`&&ui(s)}}function fl(e,t,n,r){let i=new Uint8Array(4),a=di(i),o=e._cloneInto().update(n),s=t._cloneInto(),c=e._cloneInto,l=t._cloneInto;return{u1:(e,n)=>{a.setInt32(0,e,!1),o._cloneInto(s).update(i).digestInto(r),t._cloneInto(s).update(r).digestInto(r),n.set(r.subarray(0,n.length))},rounds:(n,i)=>{for(let a=1;a<n;a++){c.call(e,s).update(r).digestInto(r),l.call(t,s).update(r).digestInto(r);for(let e=0;e<i.length;e++)i[e]^=r[e]}},output:n=>(e.destroy(),t.destroy(),o.destroy(),s.destroy(),ui(r),n)}}function pl(e,t,n,r){let{c:i,dkLen:a,DK:o,outputLen:s,eng:c}=dl(e,t,n,r);for(let e=1,t=0;t<a;e++,t+=s){let n=o.subarray(t,t+s);c.u1(e,n),c.rounds(i,n)}return c.output(o)}var ml=e=>e[0]===`あいこくしん`;function hl(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;let n=e.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function gl(e){if(typeof e!=`string`)throw TypeError(`invalid mnemonic type: `+typeof e);if(!hl(e))throw TypeError(`expected well-formed Unicode string`);return e.normalize(`NFKD`)}function _l(e){let t=gl(e),n=t.split(` `);if(![12,15,18,21,24].includes(n.length))throw Error(`Invalid mnemonic`);return{nfkd:t,words:n}}function vl(e){if(ii(e),![16,20,24,28,32].includes(e.length))throw RangeError(`invalid entropy length`)}function yl(e,t=128){if(ri(t),t%32!=0||t>256)throw RangeError(`Invalid entropy`);return Tl(Ci(t/8),e)}var bl=e=>{let t=8-e.length/4;return Vi(e)[0]>>t<<t};function xl(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!=`string`)throw TypeError(`Wordlist: expected array of 2048 strings`);e.forEach(e=>{if(typeof e!=`string`)throw TypeError(`wordlist: non-string element: `+e);if(!hl(e))throw TypeError(`wordlist: expected well-formed Unicode string`)})}function Sl(e,t){xl(t);let n=new Uint8Array(e.length+1);n.set(e),n[e.length]=bl(e);let r=[],i=0,a=0;for(let e of n)i=i<<8|e,a+=8,a>=11&&(a-=11,r.push(t[i>>>a&2047]),i&=(1<<a)-1);return r}function Cl(e,t){xl(t);let n=e.length/3*4,r=new Uint8Array(n+1),i=0,a=0,o=0;for(let n of e){let e=t.indexOf(n);if(e===-1)throw Error(`Unknown word: `+n);for(i=i<<11|e,a+=11;a>=8;)a-=8,r[o++]=i>>>a&255;i&=(1<<a)-1}a>0&&(r[o]=i<<8-a);let s=r.subarray(0,n);if(r[n]!==bl(s))throw Error(`Invalid checksum`);return Uint8Array.from(s)}function wl(e,t){let{words:n}=_l(e),r=Cl(n,t);return vl(r),r}function Tl(e,t){return vl(e),Sl(e,t).join(ml(t)?`　`:` `)}function El(e,t){try{wl(e,t)}catch{return!1}return!0}var Dl=e=>{if(typeof e!=`string`)throw TypeError(`invalid passphrase type: `+typeof e);return gl(`mnemonic`+e)};function Ol(e,t=``){return pl(Hi,_l(e).nfkd,Dl(t),{c:2048,dkLen:64})}var kl=Object.freeze(`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`));function Al(){return yl(kl,128)}function jl(e){return e.trim().toLowerCase().split(/\s+/).join(` `)}function Ml(e){return El(jl(e),kl)}function Nl(e,t){let n=ul(Hi,new TextEncoder().encode(`ed25519 seed`),e),r=n.slice(0,32),i=n.slice(32);for(let e of[44,501,t,0]){let t=new Uint8Array(37);t.set(r,1),new DataView(t.buffer).setUint32(33,(e|2147483648)>>>0),n=ul(Hi,i,t),r=n.slice(0,32),i=n.slice(32)}return r}function Pl(e,t){let n=Ol(jl(e));return Array.from({length:t},(e,t)=>{let r=Nl(n,t);return{index:t,address:Kn.encode(Vo.getPublicKey(r)),secret:r}})}var Fl=3e5,Il=e=>btoa(String.fromCharCode(...e)),Ll=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function Rl(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:Fl,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}function zl(e,t){return Bl(jl(e),t)}async function Bl(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await Rl(t,n),a=new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,new TextEncoder().encode(e))),o={v:1,salt:Il(n),iv:Il(r),data:Il(a)};return JSON.stringify(o)}async function Vl(e,t){let n=JSON.parse(e),r=await Rl(t,Ll(n.salt));try{let e=await crypto.subtle.decrypt({name:`AES-GCM`,iv:Ll(n.iv)},r,Ll(n.data));return new TextDecoder().decode(e)}catch{return null}}function Hl(e){return Kn.encode(new Uint8Array([...e.secret,...Kn.decode(e.address)]))}function Ul(e){let t=e.trim().replace(/^["']|["']$/g,``),n;try{if(t.startsWith(`[`)){let e=JSON.parse(t);if(!Array.isArray(e)||!e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return null;n=new Uint8Array(e)}else n=Kn.decode(t.replace(/\s+/g,``))}catch{return null}if(n.length!==64)return null;let r=n.slice(0,32),i=Vo.getPublicKey(r);return i.every((e,t)=>e===n[32+t])?{address:Kn.encode(i),secret:r}:null}var Wl=`vault`,Gl=`addresses`,Kl=`imports`,ql=new Map;function Jl(e){let t=ql.get(e);if(!t){let n=Te.get(e);t=n,ql.set(e,n),n.then(t=>t.value===null&&ql.get(e)===n&&ql.delete(e),()=>ql.get(e)===n&&ql.delete(e))}return t}async function Yl(e,t){ql.delete(e),await Te.set(e,t),ql.delete(e)}async function Xl(e){ql.delete(e),await Te.remove(e),ql.delete(e)}var Zl=`importList`,Ql=`costBasis`,$l=20;document.head.append(Object.assign(document.createElement(`style`),{textContent:at}));var U=new URLSearchParams(location.search),W=U.get(`jk`),eu=U.get(`rk`),tu=`https://krypto-relay.dustin-m-shamp.workers.dev`,nu=U.get(`relay`)===tu?tu:void 0;nu&&Yn(nu),eu&&(nu||!U.has(`relay`))&&Ko(eu,nu);var ru=document.querySelector(`meta[name="app-version"]`)?.content??`?`,iu=U.get(`v`),au=!!iu&&/^\d+(\.\d+)+$/.test(iu)&&((e,t)=>{let[n,r]=[e.split(`.`).map(Number),t.split(`.`).map(Number)];for(let e=0;e<Math.max(n.length,r.length);e++)if((n[e]??0)!==(r[e]??0))return(n[e]??0)>(r[e]??0);return!1})(iu,ru),ou=au&&!U.get(`r`);if(ou){let e=new URL(location.href);e.searchParams.set(`r`,String(Date.now())),location.replace(e.toString())}var su=U.get(`buy`),cu=Math.min(100,Math.max(1,Number(U.get(`pct`))||100)),lu=U.get(`sol`)?{total:Math.round(Number(U.get(`sol`))*V),count:U.get(`n`)?Number(U.get(`n`)):null,split:U.get(`split`)?U.get(`split`).split(`-`).map(Number):null}:null,uu=U.get(`sell`),du=Math.min(100,Math.max(1,Number(U.get(`spct`))||100)),fu=U.get(`main`)===`1`,pu=U.get(`w`)?U.get(`w`).split(`-`).map(Number):null,mu=U.get(`send`),hu=U.get(`to`),gu=document.getElementById(`app`),_u=new Map;function vu(e,t,n){let r=_u.get(e);if(r&&Date.now()-r.at<r.ttl)return r.value;let i=n();return _u.set(e,{at:Date.now(),ttl:t,value:i}),i.catch(()=>_u.delete(e)),i}var yu=()=>_u.clear(),bu=e=>vu(`bal:${e.join(`,`)}`,3e4,()=>Ss(e)),xu=(e=!1)=>vu(`solusd`,3e4,()=>W?Cr(W,e):Promise.resolve(null)),Su=e=>vu(`orders:${e}`,3e4,()=>kr(W,e,`active`)),Cu=e=>vu(`coin:${e}`,864e5,()=>xs(e)),wu=(e,t=!1)=>vu(`prices:${[...e].sort().join(`,`)}`,15e3,()=>wr(W,e,t)),Tu=null;function Eu(){yu(),xe(),gu.classList.add(`loading`),Dd(Fu(gu.querySelector(`h1`)?.textContent??`trade`)),Tu?.disconnect();let e=new Map;Tu=new MutationObserver(()=>{if(!document.getElementById(`hackloader`)){Tu?.disconnect();return}let t=document.getElementById(`funding`),n=t?[[`funding`,`main`,t.textContent??``]]:[];gu.querySelectorAll(`code[id^="status-"]`).forEach(e=>{let t=e.parentElement?.querySelector(`span`)?.textContent?.trim()??``;n.push([e.id,t,e.textContent??``])});for(let[t,r,i]of n){let n=i.replace(/\s*·\s*(view|check)\s*$/i,``).replace(/\s+/g,` `).trim();n&&n!==`waiting`&&e.get(t)!==n&&(e.set(t,n),Dd(`${n.startsWith(`✓`)?`[ok]`:n.startsWith(`✗`)||/fail/i.test(n)?`[!]`:`[*]`} ${r} ${n.replace(/^[✓✗]\s*/,``)}`,t))}}),Tu.observe(gu,{subtree:!0,childList:!0,characterData:!0})}var Du=[],Ou=!1,ku=!1,Au=new Set([`home`,`welcome`]);function G(e,t){if(Ou&&Du.pop(),Au.has(e))Du.length=0;else{let t=Du.findIndex(t=>t.key===e);t>=0&&(Du.length=t)}Du.push({key:e,open:t}),Ou=!0}function ju(){N();let e=e=>{let t=e?e.open:X;Promise.resolve().then(()=>t()).catch($)};if(!ku&&Du.length)return e(Du.pop());Du.pop(),e(Du.pop())}function K(e,t=!1){t||(ku=Ou,Ou=!1);let n=Du[Du.length-1],r=ku&&n&&Au.has(n.key),i=au?`<p class="note">Version ${Q(iu)} is still being published. Everything here works; close and reopen in a minute to get it.</p>`:``;gu.innerHTML=`<header class="brand">${r?``:`<button type="button" id="navBack" class="navback" aria-label="Back">←</button>`}${fn()}<div class="name glitch" data-text="KRYPTO SNATCHER">KRYPTO SNATCHER</div></header>`+i+e+`<p class="version">KRYPTO_SNATCHER // v${ru}${nu?` · RELAY`:eu?` · HELIUS`:``}</p>`,gu.classList.toggle(`loading`,!!gu.querySelector(`.loader`)),document.getElementById(`navBack`)?.addEventListener(`click`,ju),window.scrollTo(0,0)}function q(e){return document.getElementById(e)}function J(e,t){q(e).addEventListener(`click`,t)}function Mu(e){return`${e.slice(0,6)}…${e.slice(-6)}`}function Nu(e){M(`error`);let t=q(`error`);t.textContent=e,t.hidden=!1}var Pu=new Set([`your`,`the`,`my`,`a`,`an`,`of`,`on`,`to`,`it`,`what`,`each`,`every`,`in`,`from`,`this`]),Fu=e=>`$ ./objective --${e.toLowerCase().replace(/[^a-z0-9 ]+/g,` `).split(/\s+/).filter(e=>e&&!Pu.has(e)).join(`-`)||`run`}`;function Y(e){K(sn(e),!0),cn(),Dd(Fu(e))}async function Iu(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,M(`success`),setTimeout(()=>t.textContent=n,1200)}catch{prompt(`Copy this address:`,e)}}async function Lu(){if(!Se()){K(`
      <h1>Open this on your phone</h1>
      <p>Your wallets are kept in your phone's secure storage, which only the Telegram app on iPhone or Android provides.</p>
      <p class="muted">Make sure Telegram is up to date, then open this from the bot on your phone.</p>`);return}A.ready(),A.expand();try{A.setHeaderColor?.(`#05010f`),A.setBackgroundColor?.(`#05010f`)}catch{}let e=sd().catch(()=>null);Jl(Kl).catch(()=>{}),Vt(),setTimeout(C,1500),su&&W&&(bs(su).catch(()=>{}),e.then(e=>{if(!e)return;let t=e.map(e=>e.address),n=Ss(t);n.catch(()=>{}),ld={at:Date.now(),key:t.join(`,`),value:n}}));let{value:t,canRestore:n}=await Jl(Wl);if(t){if(U.get(`view`)===`holdings`)return Qf();if(U.get(`view`)===`sweep`)return Cp();if(U.get(`splitsol`)){let e=U.get(`splitsol`);return yf(e===`all`?`all`:Math.round(Number(e)*V),Number(U.get(`n`))||null,U.get(`split`)?U.get(`split`).split(`-`).map(Number):null)}if(mu&&hu){let e=Number(U.get(`amt`)),t=Number(U.get(`sendpct`));return nm({what:mu,to:hu,only:pu,side:U.get(`side`)===`1`,amount:e>0?e:null,pct:t>0&&t<100?t:null})}return uu===`*`?Jp(du,fu,pu):uu?jp(uu,du,fu,pu):su&&lu?gf(su,lu):su&&U.get(`pick`)?bf(su,Number(U.get(`n`))||null,U.get(`side`)===`1`):su?cf(su,cu):X()}Ru(n)}function Ru(e){G(`welcome`,()=>Ru(e)),K(`
    <h1>Your wallets</h1>
    <p>Your wallets are created and kept on this phone, locked with a PIN. The bot never sees your keys.</p>
    ${e?`<button id="restoreDevice" class="primary">Restore my saved wallets</button>`:``}
    <button id="create" class="${e?``:`primary`}">Create new wallets</button>
    <button id="import">I already have a 12-word phrase</button>`),e&&J(`restoreDevice`,async()=>{let{value:e}=await Te.restore(Wl);await Te.restore(Kl).catch(()=>null),ql.clear(),e?X():Ru(!1)}),J(`create`,()=>Bu(Al())),J(`import`,Hu)}function zu(e){return`<ol class="words">${e.split(` `).map(e=>`<li>${e}</li>`).join(``)}</ol>`}function Bu(e){G(`newPhrase`,()=>Bu(e)),K(`
    <h1>Your 12-word backup</h1>
    <p>Write these words down on paper, in order. They are the only way to get your wallets back if you lose this phone.</p>
    ${zu(e)}
    <p class="warning">Never share these words or type them anywhere else. Anyone who has them controls your money.</p>
    <label class="check"><input type="checkbox" id="saved"> I wrote all 12 words down</label>
    <button id="next" class="primary" disabled>Continue</button>`),q(`saved`).addEventListener(`change`,()=>q(`next`).disabled=!q(`saved`).checked),J(`next`,()=>Vu(e))}function Vu(e){G(`quiz`,()=>Vu(e));let t=e.split(` `),n=Math.floor(Math.random()*6),r=6+Math.floor(Math.random()*6);K(`
    <h1>Check your backup</h1>
    <p>Type these two words from your paper.</p>
    <label>Word #${n+1}<input id="wa" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <label>Word #${r+1}<input id="wb" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <p id="error" class="error" hidden></p>
    <button id="check" class="primary">Check</button>
    <button id="back">Show the words again</button>`),J(`check`,()=>{if(q(`wa`).value.trim().toLowerCase()!==t[n]||q(`wb`).value.trim().toLowerCase()!==t[r])return Nu(`Those don't match. Check your paper, or go back to see the words again.`);Ju(e)}),J(`back`,()=>Bu(e))}function Hu(){G(`import`,Hu),K(`
    <h1>Enter your 12 words</h1>
    <p>Type your words in order, separated by spaces.</p>
    <textarea id="phrase" rows="4" autocapitalize="off" autocomplete="off" spellcheck="false"></textarea>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Continue</button>
    <button id="back">Back</button>`),J(`next`,()=>{let e=jl(q(`phrase`).value);if(!Ml(e))return Nu(`That isn't a valid 12-word phrase. Check for typos.`);Ju(e)}),J(`back`,()=>Lu())}var Uu=e=>`<input id="${e}" class="pinvalue" type="password" inputmode="none" maxlength="6" autocomplete="off" tabindex="-1">
   <div class="pindots" data-for="${e}">${`<i></i>`.repeat(6)}</div>`,Wu=(e=`clear`)=>`<div class="keypad">${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,e,`0`,`back`].map(e=>`<button type="button" class="key${/\d/.test(e)?``:` fn ${e}`}" data-k="${e}">${e===`back`?`⌫`:e===`clear`?`CLR`:e===`dot`?`.`:e}</button>`).join(``)}</div>`;function Gu(e){document.querySelectorAll(`.key`).forEach(t=>t.addEventListener(`click`,()=>{N(),e(t.dataset.k)}))}function Ku(e,t){let n=e[0],r=()=>e.forEach(e=>{let t=document.querySelector(`.pindots[data-for="${e}"]`);t.classList.toggle(`active`,e===n);let r=q(e).value.length;t.querySelectorAll(`i`).forEach((e,t)=>e.classList.toggle(`on`,t<r))});e.forEach(e=>{q(e).addEventListener(`input`,r),document.querySelector(`.pindots[data-for="${e}"]`).addEventListener(`click`,()=>(n=e,r()))}),Gu(i=>{document.querySelectorAll(`.pindots.nope`).forEach(e=>e.classList.remove(`nope`));let a=q(n);if(i===`back`?a.value=a.value.slice(0,-1):i===`clear`?a.value=``:a.value.length<6&&(a.value+=i),q(`error`).hidden=!0,a.value.length===6&&/\d/.test(i)){let i=e[e.indexOf(n)+1];i&&(n=i),r(),t(a.id)}else r()}),r()}function qu(e){q(e).value=``;let t=document.querySelector(`.pindots[data-for="${e}"]`);t.querySelectorAll(`i`).forEach(e=>e.classList.remove(`on`)),t.classList.remove(`nope`),t.offsetWidth,t.classList.add(`nope`)}function Ju(e){G(`setPin`,()=>Ju(e)),K(`
    <h1>Choose a 6-digit PIN</h1>
    <p>You'll enter this PIN to approve trades and to see your backup words.</p>
    <label>PIN</label>${Uu(`pin1`)}
    <label>Same PIN again</label>${Uu(`pin2`)}
    <p id="error" class="error" hidden></p>
    ${Wu()}
    <button id="next" class="primary">Continue</button>`);let t=()=>{let t=q(`pin1`).value;if(!/^\d{6}$/.test(t))return Nu(`The PIN must be exactly 6 digits.`);if(t!==q(`pin2`).value)return qu(`pin2`),Nu(`The two PINs don't match. Enter it again.`);ad(e,t)};Ku([`pin1`,`pin2`],e=>e===`pin2`&&t()),J(`next`,t)}var Yu=0,Xu=0;function Zu(e,t){/ to (buy|fund|split|send|sell)\b/.test(e)&&Zs(),K(`
    <h1>${e}</h1>
    ${Uu(`pin`)}
    <p id="error" class="error" hidden></p>
    ${Wu()}
    <button id="unlock" class="primary">Unlock</button>
    <button id="cancel">Cancel</button>`),J(`cancel`,X),Ku([`pin`],()=>q(`unlock`).click()),J(`unlock`,async()=>{if(Date.now()<Xu)return Nu(`Too many wrong PINs. Try again in ${Math.ceil((Xu-Date.now())/1e3)} seconds.`);let e=q(`pin`).value,{value:n}=await Jl(Wl);if(!n)return Lu();q(`unlock`).disabled=!0,q(`unlock`).textContent=`Checking…`;let r=ed(e).catch(()=>[]),i=await Vl(n,e);if(q(`unlock`).disabled=!1,q(`unlock`).textContent=`Unlock`,!i)return qu(`pin`),Yu++,Yu>=5&&(Xu=Date.now()+3e4*2**(Yu-5)),Nu(`Wrong PIN.`);Yu=0,Qu=await r,t(i,e)})}var Qu=[],$u=0;async function ed(e){let{value:t}=await Jl(Kl);if(!t)return[];let n=await Vl(t,e);return n?JSON.parse(n).flatMap(({name:e,key:t})=>{let n=Ul(t);return n?[{name:e,...n}]:[]}):[]}async function td(e,t){await Yl(Kl,await Bl(JSON.stringify(e.map(e=>({name:e.name,key:Hl({index:0,...e})}))),t)),await j.set(Zl,JSON.stringify(e.map(({name:e,address:t})=>({name:e,address:t})))),cd(),Qu=e}function nd(e,t){let n=Pl(e,Math.min(t,$u||t));for(let e=n.length;e<t;e++){let t=Qu[e-$u];if(!t)throw Error(`The key for wallet #${e} is missing. Open the app again from the bot and retry.`);n.push({index:e,address:t.address,secret:t.secret})}return n}function rd(){G(`importKey`,rd),K(`
    <h1>Import a wallet</h1>
    <p>Paste the private key of a wallet from another app (in Phantom: Settings → Manage Accounts → the wallet → Show Private Key). It becomes one more side wallet here.</p>
    <textarea id="key" rows="3" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Private key"></textarea>
    <label>Name (optional)<input id="name" maxlength="20" autocomplete="off" placeholder="Phantom 1"></label>
    <p class="muted">It's locked with your PIN on this phone, like your 12 words. Your 12 words don't back it up, so keep its key in the app it came from too.</p>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Import</button>
    <button id="cancel">Cancel</button>`),J(`cancel`,X),J(`next`,async()=>{let e=Ul(document.getElementById(`key`).value);if(!e)return Nu(`That doesn't look like a Solana private key. Copy it again from your wallet app and paste the whole thing.`);let t=await sd()??[],n=t.find(t=>t.address===e.address);if(n)return Nu(`That wallet is already here (${n.index===0?`main`:`#${n.index}`}).`);let r=t.length-$u;if(r>=$l)return Nu(`You can import up to ${$l} wallets.`);let i=q(`name`).value.trim().slice(0,20)||`Imported ${r+1}`;Zu(`Enter your PIN to import it`,async(t,n)=>{Y(`Saving…`);try{await td([...Qu,{name:i,...e}],n)}catch(e){return $(e)}M(`success`),X()})})}function id(e){G(`removeImport:${e.address}`,()=>id(e)),K(`
    <h1>Remove ${Q(e.name??``)} (#${e.index})?</h1>
    <p>This only removes it from Krypto Snatcher. The wallet and its money stay where they are.</p>
    <p class="warning">If you don't have its private key anywhere else, export it first, or move its coins and SOL out. Your 12 words can't bring it back.</p>
    <button id="exportFirst">Export its key first</button>
    <button id="yes" class="danger">Remove it</button>
    <button id="no" class="primary">Keep it</button>`),J(`no`,X),J(`exportFirst`,()=>nf(e)),J(`yes`,()=>Zu(`Enter your PIN to remove it`,async(t,n)=>{Y(`Saving…`),await td(Qu.filter(t=>t.address!==e.address),n),X()}))}function ad(e,t,n=5){G(`chooseCount`,()=>ad(e,t,n)),K(`
    <h1>How many side wallets?</h1>
    <p>You get one main wallet that you deposit SOL into, plus side wallets for split buys.</p>
    <input id="count" class="pinvalue" type="text" inputmode="none" tabindex="-1" value="${n}">
    <div class="total amountbox"><small>Side wallets (0 to 30)</small><div class="amount"><span class="num" id="countShow">${n}</span></div></div>
    <div class="stepper wide"><button id="minus" type="button">−</button><button id="plus" type="button">+</button></div>
    <p id="error" class="error" hidden></p>
    ${Wu()}
    <button id="next" class="primary">Create wallets</button>`);let r=!0,i=e=>{q(`count`).value=e,q(`countShow`).textContent=e||`0`,q(`countShow`).classList.toggle(`over`,Number(e)>30),q(`error`).hidden=!0};Gu(e=>{let t=r?``:q(`count`).value;r=!1,e===`back`?i(t.slice(0,-1)):e===`clear`?i(``):t.length<2&&i(String(Number(t+e)))});let a=e=>{r=!0,i(String(Math.min(30,Math.max(0,(Number(q(`count`).value)||0)+e))))};J(`minus`,()=>a(-1)),J(`plus`,()=>a(1)),J(`next`,async()=>{let n=Number(q(`count`).value);if(!Number.isInteger(n)||n<0||n>30)return Nu(`Pick a whole number from 0 to 30.`);Y(`Setting up your wallets…`);let r=Pl(e,n+1).map(({index:e,address:t})=>({index:e,address:t}));t&&await Yl(Wl,await zl(e,t)),await j.set(Gl,JSON.stringify(r)),cd(),!t&&Qu.length&&(await j.set(Zl,JSON.stringify(Qu.map(({name:e,address:t})=>({name:e,address:t})))),cd()),M(`success`),X()})}var od=null;function sd(){if(!od){let e=dd();od=e,e.then(t=>!t&&od===e&&(od=null),()=>od===e&&(od=null))}return od}var cd=()=>od=null,ld=null;function ud(e){let t=ld;return ld=null,t&&t.key===e.join(`,`)&&Date.now()-t.at<5e3?t.value.catch(()=>Ss(e)):Ss(e)}async function dd(){let[e,t]=await Promise.all([j.get(Gl),j.get(Zl)]);if(!e)return null;let n=JSON.parse(e);$u=n.length;let r=JSON.parse(t||`[]`);return[...n,...r.map((e,t)=>({index:n.length+t,address:e.address,name:e.name}))]}async function X(){G(`home`,X);let e=await sd();if(!e)return Zu(`Unlock your wallets`,e=>ad(e,null));let[t,...n]=e;K(`
    <h1>Your wallets</h1>
    <div class="total"><small>SOL across all wallets</small><div class="big"><span id="totalWrap"><span id="totalSol">…</span><span class="unit">SOL</span></span></div></div>
    <button id="holdingsTop" class="primary">See everything my wallets hold</button>
    <div class="card openwallet" data-index="0">
      <div class="label">Main wallet · <span class="bal" data-index="0">…</span> <span class="open">OPEN ›</span></div>
      <div class="address">${t.address}</div>
      <p class="muted">Send SOL here to fund your account.</p>
      <div class="row">
        <button class="copy" data-address="${t.address}">Copy address</button>
        <button class="export" data-index="0">Export key</button>
      </div>
    </div>
    <h2>Side wallets (${n.length})</h2>
    ${n.length?`<ul class="list">${n.map(e=>`<li class="openwallet" data-index="${e.index}"><span>#${e.index}</span><code>${e.name?`<b>${Q(e.name)}</b> · `:``}${Mu(e.address)}<br><small class="bal" data-index="${e.index}">…</small></code>
              <button class="copy small" data-address="${e.address}">Copy</button>
              <button class="export small" data-index="${e.index}">Key</button>${e.name?`<button class="unimport small" data-index="${e.index}" aria-label="Remove">✕</button>`:``}</li>`).join(``)}</ul>`:`<p class="muted">No side wallets yet.</p>`}
    <p class="muted">Tap a wallet to open it.</p>
    <button id="sellAll" class="danger">Sell all coins</button>
    ${n.length?`<button id="sweep">Send all side-wallet SOL to main</button>`:``}
    <button id="importKey">Import a wallet (private key)</button>
    <button id="holdings" class="primary">See everything my wallets hold</button>
    <button id="pnl" class="primary">Wallet P&amp;L</button>
    <button id="change">Change number of side wallets</button>
    <button id="reveal">Show my 12 backup words</button>
    <button id="remove" class="danger">Remove wallets from this phone</button>`),document.querySelectorAll(`.copy`).forEach(e=>e.addEventListener(`click`,()=>Iu(e.dataset.address,e))),document.querySelectorAll(`.export`).forEach(t=>t.addEventListener(`click`,()=>nf(e[Number(t.dataset.index)]))),document.querySelectorAll(`.unimport`).forEach(t=>t.addEventListener(`click`,()=>id(e[Number(t.dataset.index)]))),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,n=>{n.target.closest(`button, a, .solamt, .coinamt`)||(N(),pd(e[Number(t.dataset.index)]).catch($))})),J(`importKey`,rd),J(`holdings`,()=>Qf().catch($)),J(`holdingsTop`,()=>Qf().catch($)),J(`pnl`,()=>Ud().catch($)),J(`sellAll`,()=>Jp(100,!1,null).catch($)),n.length&&J(`sweep`,()=>Cp().catch($)),J(`change`,()=>Zu(`Enter your PIN`,e=>ad(e,null,$u-1))),J(`reveal`,()=>Zu(`Enter your PIN`,e=>{K(`
        <h1>Your 12 backup words</h1>
        ${zu(e)}
        <p class="warning">Never share these words. Anyone who has them controls your money.</p>
        <button id="done" class="primary">Done</button>`),J(`done`,X)})),J(`remove`,im),bu(e.map(e=>e.address)).then(e=>{document.querySelectorAll(`.bal`).forEach(t=>{let n=e[Number(t.dataset.index)];st(t,n,e=>`${tf(e)} SOL`,{ms:900,final:`${H(n)} SOL`})});let t=document.getElementById(`totalSol`),n=e.reduce((e,t)=>e+t,0);t&&st(t,n,tf,{ms:1200,final:H(n)});let r=document.getElementById(`totalWrap`);r&&(r.dataset.sol=String(n/V),r.classList.add(`solamt`),om&&hm())}).catch(e=>{let t=document.getElementById(`totalSol`);t&&(t.textContent=`—`),document.querySelectorAll(`.bal`).forEach(e=>e.textContent=`balance unavailable`);let n=document.createElement(`p`);n.className=`error`,n.textContent=e instanceof Error?e.message:String(e),document.querySelector(`h1`).after(n)})}var fd=null;async function pd(e){let t=`wallet:${e.address}`;G(t,()=>pd(e));let n=Symbol(`wallet`);fd=n;let r=()=>fd===n&&Du[Du.length-1]?.key===t,[i,a]=await Promise.all([$f(),ap()]),o=a.filter(t=>t.wallet===e.address).length;await ep([e],`Opening the wallet…`,r,(t,n,r)=>md(e,t[0],n?.[0]??null,r,{costs:i,autoHere:o}))}async function md(e,t,n,r,{costs:i,autoHere:a}){let o=e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`,s=t.lamports,c=0,l=(await al(t)).filter(e=>!Mf(e)||!(c+=1)),u=new Map;for(let e of[...l,...n??[]]){let t=u.get(e.mint)??{coin:e,amount:0,inOrders:0,usd:null};t.amount+=e.amount,Wf(e)?t.inOrders+=e.amount:e.usd!==null&&(t.usd=(t.usd??0)+e.usd),u.set(e.mint,t)}let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=$p(e),p=window.scrollY;K(`
    <h1>${o} <span id="holdSync" class="live${r===`saved`?``:` synced`}">${r===`saved`?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total"><small>SOL in this wallet</small><div class="big"><span class="solamt" data-sol="${s/V}">${H(s)}</span><span class="unit">SOL</span></div><div class="sub" id="coinsUsd"></div></div>
    <div class="card"><div class="label">Address</div><div class="address">${e.address}</div>
      <div class="row"><button id="copyAddr">Copy address</button><button id="exportKey">Export key</button></div></div>
    <h2>Coins${u.size&&W?` <span id="live" class="live">LIVE</span>`:``}</h2>
    ${u.size?`<ul class="list coins">${[...u.values()].map(e=>`<li data-mint="${e.coin.mint}">${ct(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(jf(e.coin))}</b>${e.inOrders?`<small class="inorder">🎯 ${lm(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
              <div class="right"><span class="val">${e.usd===null?``:Af(e.usd)}</span><small class="move"></small><small>${lm(e.coin.mint,e.amount)}</small></div></li>`).join(``)}</ul><p class="muted">Tap a coin to sell some of it from this wallet, set an auto-sell, or buy more.</p>`:`<p class="muted">No coins in this wallet.</p>`}
    ${c?`<p class="muted">${c} junk coin${c===1?``:`s`} hidden.</p>`:``}
    ${u.size?`<button id="sellAll" class="danger">Sell all coins in this wallet</button>`:``}
    ${a?`<button id="autoSells" class="gold">🎯 Auto-sells · ${a} placed</button>`:``}
    ${e.index===0?``:`<button id="solToMain">Send all its SOL to main</button>`}
    ${e.index!==0&&u.size?`<button id="allToMain">Send everything (coins + SOL) to main</button>`:``}
    <button id="solscan">View on Solscan</button>
    ${e.name?`<button id="unimport" class="danger">Remove this imported wallet</button>`:``}
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,p),lt(),J(`copyAddr`,()=>Iu(e.address,q(`copyAddr`))),J(`exportKey`,()=>nf(e)),J(`solscan`,()=>De(ac(e.address))),J(`home`,X),u.size&&J(`sellAll`,()=>Jp(100,!1,[e.index]).catch($)),a&&J(`autoSells`,()=>gp().catch($));let m=t=>nm({what:t,to:`0`,only:[e.index],side:!1,amount:null,pct:null}).catch($);e.index!==0&&J(`solToMain`,()=>m(`sol`)),e.index!==0&&u.size&&J(`allToMain`,()=>m(`*`)),e.name&&J(`unimport`,()=>id(e));let h=new Map;if(document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=u.get(t.dataset.mint);N(),np({mint:n.coin.mint,label:jf(n.coin),short:n.coin.symbol||n.coin.name||`?`,logo:n.coin.logo,amount:n.amount,raw:d(n),wallets:f,holders:[{address:e.address,amount:n.amount}],decimals:n.coin.decimals??0,inOrders:n.inOrders,only:[e.index],value:h.get(n.coin.mint)??null}).catch($)})),!u.size||!W)return;let g=q(`live`),_=async e=>{let t=[...u],[n,r]=await Promise.all([xu(e).catch(()=>null),Promise.all(t.map(([t,n])=>Sr(W,t,d(n),e).catch(()=>null)))]);if(!g.isConnected)return;gm(n);let a=0,o=new Map;t.forEach(([e,t],s)=>{let c=r[s],l=document.querySelector(`.coins li[data-mint="${e}"]`);if(!l||c===null)return;h.set(e,c),n&&(t.usd=c/V*n,a+=t.usd,l.querySelector(`.val`).textContent=Af(t.usd),t.amount>0&&(um(e,t.usd/t.amount),o.set(e,t.usd/t.amount)));let u=i[e],f=!Nf.has(e)&&If(u)?Lf(u,n):null,p=l.querySelector(`.right`);if(f){let e=f/Number(BigInt(u.raw))*Number(d(t)),n=(c-e)/e*100,r=Math.abs(n)>=.5;p.classList.toggle(`up`,r&&n>0),p.classList.toggle(`down`,r&&n<0),p.querySelector(`.move`).textContent=r?`${n>0?`▲`:`▼`} ${Math.abs(n)>=100?Math.round(Math.abs(n)):Math.abs(n).toFixed(1)}% since buy`:``}}),ol(o).catch(()=>{}),a>0&&(q(`coinsUsd`).textContent=`+ ${Af(a)} in coins`),g.classList.remove(`beat`),g.offsetWidth,g.classList.add(`beat`)};(async()=>{for(let e=0;g.isConnected;e++)document.hidden||await _(e>0),await new Promise(e=>setTimeout(e,5e3))})().catch(()=>{})}var hd=1,gd=1500,_d=([e,t,n,r,i,a,o])=>({sig:e,at:t,mint:n,side:r,coins:i,lamports:a,usd:o}),vd=e=>[e.sig,e.at,e.mint,e.side,e.coins,e.lamports,Math.round(e.usd*1e6)/1e6];async function yd(e){try{let t=JSON.parse(await j.get(`pnl_${e}`)||`null`);return t&&t.v===hd?t:null}catch{return null}}var bd=(e,t)=>vu(`trades:${e}`,9e4,async()=>{let n=`pnl_${e}`,r=await yd(e),i=await Td(t,8e3,void 0);if(i===null)return await j.set(n,JSON.stringify({v:hd,sig:null,trades:[]})).catch(()=>{}),[];if(r&&i&&r.sig===i)return r.trades.map(_d);let a=await pc(e,r?.top,5);if(!a){if(r)return r.trades.map(_d);throw Error(`Couldn't read this wallet's history right now.`)}let o=new Set(a.trades.map(e=>e.sig)),s=[...a.trades,...r?.trades.map(_d).filter(e=>!o.has(e.sig))??[]].sort((e,t)=>t.at-e.at).slice(0,gd),c={v:hd,top:a.top,sig:i,trades:s.map(vd)};return await j.set(n,JSON.stringify(c)).catch(()=>{}),s}),xd=(e,t,n)=>{let r=t.get(e.at)??n??0;return e.lamports/V*r+e.usd},Sd=(e,t,n)=>{let r=t.get(e.at)??n;return e.lamports/V+(r?e.usd/r:0)};function Cd(e,t,n,r,i,a){let o=0,s=0,c=0,l=0,u=0,d=0;for(let e of t)e.side===1?(o+=e.coins,c+=xd(e,i,a),l+=Sd(e,i,a)):(s+=e.coins,u+=xd(e,i,a),d+=Sd(e,i,a));let f=Math.min(s,o),p=Math.max(0,Math.min(n,o-f)),m=o>0?(f+p)/o:0,h=s>0?f/s:0,g=c*m,_=l*m,v=u*h,y=d*h,b=p*(r??0),x=a?b/a:0,S=v+b-g,C=y+x-_;return{mint:e,trades:t,bought:o,sold:s,held:n,paidUsd:g,paidSol:_,backUsd:v,backSol:y,nowUsd:b,nowSol:x,pnlUsd:S,pnlSol:C,pct:g>=.01&&!Nf.has(e)?S/g*100:null,avgUsd:o>0?c/o:0,avgSol:o>0?l/o:0}}function wd(e){let t=e.filter(e=>e.pct!==null),n=t.reduce((e,t)=>e+t.pnlUsd,0),r=t.reduce((e,t)=>e+t.pnlSol,0),i=t.reduce((e,t)=>e+t.paidUsd,0);return{pnlUsd:n,pnlSol:r,paidUsd:i,pct:i>=.01?n/i*100:null}}var Td=(e,t,n)=>Promise.race([e.catch(()=>n),new Promise(e=>setTimeout(()=>e(n),t))]),Ed=0;function Dd(e,t){let n=document.querySelector(`.loader, .hackloader`);if(!n)return;let r=document.getElementById(`loadTerm`);r||(r=document.createElement(`div`),r.id=`loadTerm`,r.className=`loadterm`,n.append(r));let i=t?Array.from(r.children).find(e=>e.dataset.key===t):null;if(i){i.firstChild.textContent=e;return}clearInterval(Ed),r.querySelectorAll(`.typing`).forEach(e=>{e.classList.remove(`typing`),e.firstChild.textContent=e.dataset.full}),r.querySelector(`.cur`)?.remove();let a=document.createElement(`div`);for(a.className=`tl`,t&&(a.dataset.key=t),a.append(document.createTextNode(``),Object.assign(document.createElement(`i`),{className:`cur`})),r.append(a);r.children.length>6;)r.firstElementChild.remove();if(!e.startsWith(`$`)){a.firstChild.textContent=e;return}a.dataset.full=e,a.classList.add(`typing`);let o=0;Ed=window.setInterval(()=>{o+=1,a.firstChild.textContent=e.slice(0,o),o>=e.length&&(clearInterval(Ed),a.classList.remove(`typing`))},28)}var Od=null,kd=(e,t)=>`[${`#`.repeat(Math.round(e/t*12)).padEnd(12,`.`)}]`;async function Ad(e,t){let n=0;t?.(`[*] ${e.length} wallet${e.length===1?``:`s`} to read`);let r=mc(e.map(e=>e.address));return r.catch(()=>{}),vp(e,6,async(i,a)=>{let o=await Td(bd(i.address,r.then(e=>e[a])),45e3,null);return n++,t?.(`[+] read ${n}/${e.length} ${kd(n,e.length)}`,`read`),o})}var jd=async(e,t)=>Nd(e,await Ad(e,t),t),Md=async e=>{let t=e.map(e=>e.address);return await Td(nl(t),2e4,null)??await Zc(t)};async function Nd(e,t,n,r){let i=t.filter(e=>e===null).length,a=e.map((e,n)=>({w:e,trades:t[n]??[]})).filter(e=>e.trades.length);n?.(`[*] checking what's still held`);let o=r??(a.length?await Md(e):null),s=await Promise.all(a.map(async e=>{let t=o?.find(t=>t.address===e.w.address);return t?al(t):[]})),c=[...new Set(s.flatMap((e,t)=>e.filter(e=>a[t].trades.some(t=>t.mint===e.mint)).map(e=>e.mint)))];n?.(`[*] pulling prices + SOL history`);let l=a.flatMap(e=>e.trades.map(e=>e.at)),[u,d,f]=await Promise.all([Td(xu(),15e3,null),W&&c.length?Td(wu(c),15e3,new Map):Promise.resolve(new Map),Td(yn(l),12e3,new Map)]),p=l.length>0&&f.size<l.length/2;return n?.(`[ok] P&L ready`),u&&gm(u),{rows:a.map(({w:e,trades:t},n)=>{let r=new Map;for(let e of t)r.set(e.mint,[...r.get(e.mint)??[],e]);let i=[...r].map(([e,t])=>{let r=s[n].find(t=>t.mint===e),i=d.get(e)??(r&&r.usd!==null&&r.amount>0?r.usd/r.amount:null);return Cd(e,t,r?.amount??0,i,f,u)});return i.sort((e,t)=>Math.abs(t.pnlUsd)-Math.abs(e.pnlUsd)),{wallet:e,trades:t,coins:i,total:wd(i),held:s[n]}}),unread:i,oldPrices:p,solAt:f,solNow:u}}var Pd=`pct`,Fd=[`pct`,`sol`,`usd`],Id=(e,t)=>`${e>0?`+`:e<0?`−`:``}${t}`,Ld=e=>{let t=Math.abs(e);return`${e>0?`▲`:e<0?`▼`:``} ${t>=100?Math.round(t).toLocaleString(`en-US`):t.toFixed(1)}%`.trim()},Rd=e=>Id(e,`${H(Math.abs(e)*V)} SOL`),zd=e=>Id(e,pm(Math.abs(e)));function Bd(e,t){if(e.pct===null)return{text:`no buy price`,dir:``};let n=t===`pct`?e.pct:t===`sol`?e.pnlSol:e.pnlUsd,r=Math.abs(e.pct)<.05?``:n>0?`up`:n<0?`down`:``;return{text:t===`pct`?Ld(e.pct):t===`sol`?Rd(e.pnlSol):zd(e.pnlUsd),dir:r}}function Vd(e,t=Fd){let n=t.includes(Pd)?Pd:t[0];document.querySelectorAll(`[data-pnl]`).forEach(t=>{let r=e.get(t.dataset.pnl);if(!r)return;let{text:i,dir:a}=Bd(r,n);t.textContent=i,t.classList.toggle(`up`,a===`up`),t.classList.toggle(`down`,a===`down`),t.classList.toggle(`none`,r.pct===null),t.closest(`li`)?.classList.toggle(`pnlup`,a===`up`),t.closest(`li`)?.classList.toggle(`pnldown`,a===`down`)}),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.mode===n))}var Hd=e=>e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`;async function Ud(){G(`pnl`,Ud),Pd=`pct`;let e=await sd();if(!e)return X();let[t,n]=await Promise.all([Promise.all(e.map(e=>yd(e.address))),Zc(e.map(e=>e.address))]),r=t.every(Boolean);Y(`Reading your trades on the blockchain…`),r&&Dd(`[*] using saved trades`);let i=r?await Nd(e,t.map(e=>e.trades.map(_d)),Dd,n):await jd(e,Dd),a=Symbol(`pnl`);if(Wd=a,Od=i,Gd(i,r,!1),!r)return;let o=n?Md(e):Promise.resolve(null),s=await Ad(e,(e,t)=>{let n=t===`read`&&e.match(/\d+\/\d+/)?.[0],r=document.getElementById(`pnlSync`);n&&r&&Wd===a&&(r.textContent=`SYNCING ${n}`)}),c=await o;if(Wd!==a||!document.getElementById(`pnlTotal`))return;let l=e=>e.map(e=>e?`${e.length}:${e[0]?.sig??``}`:`?`).join(`,`),u=l(s)!==l(t.map(e=>e.trades.map(_d)))||!!n&&!!c&&qf(c)!==qf(n),d=document.getElementById(`pnlSync`);if(!u){d&&(d.textContent=`UP TO DATE`);return}let f=await Nd(e,s,void 0,c);Wd===a&&document.getElementById(`pnlTotal`)&&(Od=f,Gd(f,!1,!0))}var Wd=null;function Gd({rows:e,unread:t,oldPrices:n},r,i){let a=wd(e.flatMap(e=>e.coins)),o=new Map([[`total`,a]]);for(let t of e)o.set(t.wallet.address,t.total);let s=e.find(e=>e.wallet.index===0),c=e.filter(e=>e.wallet.index!==0),l=e=>{let t=new Set(e.trades.map(e=>e.mint)).size;return`${e.trades.length} trade${e.trades.length===1?``:`s`} · ${t} coin${t===1?``:`s`}`};K(`
    <h1>Wallet P&amp;L <span id="pnlSync" class="live">${r?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${a.pct===null?``:`on ${pm(a.paidUsd)} put in · tap to switch % / $`}</div></div>
    ${s?`<div class="card openwallet pnl" data-address="${s.wallet.address}">
      <div class="label">Main wallet · <span class="pv" data-pnl="${s.wallet.address}"></span> <span class="open">OPEN ›</span></div>
      <div class="address">${s.wallet.address}</div>
      <p class="muted">${l(s)}</p>
    </div>`:``}
    ${c.length?`<h2>Side wallets (${c.length})</h2><ul class="list pnl">${c.map(e=>`<li class="openwallet" data-address="${e.wallet.address}"><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}${Mu(e.wallet.address)}<br><small>${l(e)}</small></code><b class="pv big" data-pnl="${e.wallet.address}"></b></li>`).join(``)}</ul>`:``}
    ${e.length?`<p class="muted">Only wallets that have bought or sold are listed. Tap a wallet to see its trades.</p>`:`<p class="muted">None of your wallets has bought or sold a coin yet.</p>`}
    ${e.length?`<button id="allTx" class="primary">Show all transactions</button>`:``}
    ${t?`<p class="warning">${t} wallet${t===1?`'s`:`s'`} history couldn't be read right now. Try again in a minute.</p>`:``}
    ${n?`<p class="muted">SOL's past prices didn't load, so dollars use today's SOL price for now.</p>`:``}
    <button id="home">Back to my wallets</button>`,i);let u=[`pct`,`usd`];Vd(o,u),J(`home`,X),e.length&&J(`allTx`,()=>$d().catch($)),J(`pnlTotal`,()=>{a.pct!==null&&(N(),Pd=Pd===`usd`?`pct`:`usd`,Vd(o,u))}),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.find(e=>e.wallet.address===t.dataset.address);N(),ef(n.wallet).catch($)}))}var Kd=e=>e?new Date(e*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}):``,qd=`coinNames`;async function Jd(e,t){let n=new Map;for(let e of t)(e.name||e.symbol)&&n.set(e.mint,{label:jf(e),short:e.symbol||e.name||`?`,logo:e.logo});let r={};try{r=JSON.parse(await j.get(qd)||`{}`)}catch{r={}}for(let t of e)!n.has(t)&&r[t]&&n.set(t,r[t]);let i=[...new Set(e)].filter(e=>!n.has(e)),a=!1;for(let[e,t]of n)(!r[e]||r[e].label!==t.label||r[e].logo!==t.logo)&&(r[e]=t,a=!0);if(i.length){let e=await Td(_c(i),1e4,new Map);for(let[t,i]of e){let e={label:i.name?`${i.name}${i.symbol?` (${i.symbol})`:``}`:i.symbol??Mu(t),short:i.symbol||i.name||`?`,logo:i.logo};n.set(t,e),r[t]=e}e.size&&(a=!0)}return a&&j.set(qd,JSON.stringify(r)).catch(()=>{}),e=>n.get(e)??{label:Mu(e),short:`?`}}function Yd(e,t,n,r){let i=new Map(e.coins.map(e=>[e.mint,e]));for(let a of e.trades){let e=i.get(a.mint);if(a.side!==-1)continue;let o=xd(a,t,n),s=Sd(a,t,n),c=e.avgUsd*a.coins,l=e.bought>0&&c>=.01&&!Nf.has(a.mint);r.set(a.sig,{pct:l?(o-c)/c*100:null,pnlUsd:o-c,pnlSol:s-e.avgSol*a.coins})}}function Xd(e,t,n,r,i){return`<ul class="list trades pnl">${e.map(e=>{let a=t(e.mint),o={sol:`${H(Sd(e,n,r)*V)} SOL`,usd:pm(xd(e,n,r))};return`<li data-sig="${e.sig}" class="${e.side===1?`buy`:`sell`}"><span class="tag">${e.side===1?`BUY`:`SELL`}</span><div class="grow"><b>${Q(a.label)}</b><small>${i?`${i(e)} · `:``}${Kd(e.at)} · ${kf(e.coins)} coins</small></div><div class="right">${e.side===1?`<span class="pv spent" data-sol="${o.sol}" data-usd="${o.usd}">${o.sol}</span><small>paid</small>`:`<span class="pv" data-pnl="${e.sig}"></span><small class="got" data-sol="${o.sol}" data-usd="${o.usd}">got ${o.sol}</small>`}</div></li>`}).join(``)}</ul>`}function Zd(){let e=Pd===`usd`;document.querySelectorAll(`.trades .spent`).forEach(t=>t.textContent=e?t.dataset.usd:t.dataset.sol),document.querySelectorAll(`.trades .got`).forEach(t=>t.textContent=`got ${e?t.dataset.usd:t.dataset.sol}`)}function Qd(e){let t=()=>{N(),Pd=Fd[(Fd.indexOf(Pd)+1)%Fd.length],e()};document.querySelectorAll(`.pnltabs button`).forEach(t=>t.addEventListener(`click`,()=>{N(),Pd=t.dataset.mode,e()})),J(`pnlTotal`,t),document.querySelectorAll(`.pnl .right`).forEach(e=>e.addEventListener(`click`,e=>{e.stopPropagation(),t()})),document.querySelectorAll(`.trades li[data-sig]`).forEach(e=>e.addEventListener(`click`,()=>De(oc(e.dataset.sig))))}async function $d(){G(`pnlall`,$d),Pd=`pct`;let e=Od;if(!e){let t=await sd();if(!t)return X();Y(`Gathering every wallet's trades…`),e=Od=await jd(t,Dd)}let{rows:t,solAt:n,solNow:r}=e,i=t.flatMap(e=>e.trades.map(t=>({t,w:e.wallet}))).sort((e,t)=>t.t.at-e.t.at),a=await Jd(i.map(e=>e.t.mint),t.flatMap(e=>e.held)),o=wd(t.flatMap(e=>e.coins)),s=new Map([[`total`,o]]);for(let e of t)Yd(e,n,r,s);let c=new Map(i.map(e=>[e.t.sig,e.w])),l=e=>{let t=c.get(e.sig);return t.index===0?`Main`:t.name?`${Q(t.name)} #${t.index}`:`#${t.index}`},u=i.filter(e=>e.t.side===1).length,d=i.length-u;K(`
    <h1>All transactions</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u} buy${u===1?``:`s`} · ${d} sell${d===1?``:`s`} · ${t.length} wallet${t.length===1?``:`s`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>History (${i.length} trade${i.length===1?``:`s`})</h2>
    ${Xd(i.map(e=>e.t),a,n,r,l)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a trade to open it on Solscan.</p>
    <button id="back">Back to Wallet P&amp;L</button>`);let f=()=>{Vd(s),Zd()};f(),Qd(f),J(`back`,()=>Ud().catch($))}async function ef(e){G(`pnl:${e.address}`,()=>ef(e)),Pd=`pct`;let t=Od?.rows.some(t=>t.wallet.address===e.address)?Od:null;t||=(Y(`Pulling this wallet's trades from the blockchain…`),await jd([e],Dd));let{solAt:n,solNow:r}=t,i=t.rows.find(t=>t.wallet.address===e.address);if(!i){K(`<h1>${Hd(e)}</h1><p class="muted">No trades found for this wallet.</p><button id="back">Back to Wallet P&amp;L</button>`),J(`back`,()=>Ud().catch($));return}let a=await Jd(i.coins.map(e=>e.mint),t.rows.flatMap(e=>e.held)),o=new Map(i.coins.map(e=>[e.mint,e])),s=new Map([[`total`,i.total]]);for(let e of i.coins)s.set(e.mint,e);Yd(i,n,r,s);let c=e=>[e.bought?`bought ${kf(e.bought)}`:``,e.sold?`sold ${kf(e.sold)}`:``,e.held?`holding ${kf(e.held)}`:``].filter(Boolean).join(` · `),l=(e,t)=>{let n=e=>`${H(e*V)} SOL`,r=e.bought?`${n(e.avgSol*e.bought)} › ${kf(e.bought)} ${t}`:`${kf(e.sold)} ${t}`,i=[e.sold?`${n(e.backSol)} sold`:``,e.nowSol>0?`${n(e.nowSol)} held`:``].filter(Boolean).join(` + `);return i?`${r} › ${i}`:r},u=i.total;K(`
    <h1>${Hd(e)}</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss · all trades</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u.pct===null?`No buy prices found yet`:`on ${pm(u.paidUsd)} put in`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>Coins (${i.coins.length})</h2>
    <ul class="list coins pnl">${i.coins.map(e=>{let t=a(e.mint);return`<li data-mint="${e.mint}">${ct(t.short,t.logo)}<div class="grow"><b>${Q(t.label)}</b><small class="cl" data-line="${Q(c(e))}" data-flow="${Q(l(e,t.short))}">${c(e)}</small></div>
          <div class="right"><span class="pv" data-pnl="${e.mint}"></span><small class="tv" data-paid="${e.mint}"></small></div></li>`}).join(``)}</ul>
    <h2>History (${i.trades.length} trade${i.trades.length===1?``:`s`})</h2>
    ${Xd(i.trades,a,n,r)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a trade to open it on Solscan. Dollars use SOL's price when each trade happened.</p>
    <button id="solscan">View wallet on Solscan</button>
    <button id="back">Back to Wallet P&amp;L</button>`),lt();let d=()=>{Vd(s);let e=Pd===`usd`,t=Pd===`sol`;document.querySelectorAll(`.coins .cl`).forEach(e=>e.textContent=t?e.dataset.flow:e.dataset.line),Zd(),document.querySelectorAll(`.coins [data-paid]`).forEach(n=>{let r=o.get(n.dataset.paid);n.textContent=r.pct===null?r.bought?`all sent away`:`no buy found`:t?``:`paid ${e?pm(r.paidUsd):`${H(r.paidSol*V)} SOL`}`})};d(),Qd(d),J(`solscan`,()=>De(ac(e.address))),J(`back`,()=>Ud().catch($))}var tf=e=>(e/V).toFixed(4);function nf(e){let t=e.index===0?`main wallet`:e.name?`${e.name} (#${e.index})`:`side wallet #${e.index}`;Zu(`Export ${Q(t)}`,n=>{let r=nd(n,e.index+1)[e.index],i=Hl(r);K(`
      <h1>Private key: ${Q(t)}</h1>
      <p class="warning">Anyone with this key controls this wallet. Only paste it into your own wallet app (Phantom: Add / Connect Wallet → Import Private Key).</p>
      <div class="card"><div class="address" id="key"></div></div>
      <button id="copyKey" class="primary">Copy key</button>
      <button id="done">Done</button>`),q(`key`).textContent=i,J(`copyKey`,()=>Iu(i,q(`copyKey`))),J(`done`,X)})}var rf=2e6,af=25e5,of=1e6;function sf(e,t,n){return e.map((e,r)=>{let i=t[r],a=i-rf-af,o=Math.floor(a*n/100);return a<of?{wallet:e,balance:i,action:i>5e3?`return`:`skip`,lamports:i-qo}:o<of?{wallet:e,balance:i,action:`skip`,lamports:0}:{wallet:e,balance:i,action:`buy`,lamports:o}}).filter(e=>e.balance>0)}async function cf(e,t){if(G(`buy:${e}`,()=>cf(e,t)),!W)return K(`
      <h1>Open this from the bot</h1>
      <p>To buy, send <b>buy &lt;token address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);let n=await sd();if(!n)return X();let[r,...i]=n;Y(`Checking your wallet balances…`);let[[,...a],o]=await Promise.all([ud(n.map(e=>e.address)),gs(e).then(t=>t??Tr(W,e))]),s=sf(i,a,t),c=s.filter(e=>e.action===`buy`),l=c.reduce((e,t)=>e+t.lamports,0),u=e=>e.action===`buy`?`buys with <b>${H(e.lamports)} SOL</b>`:e.action===`return`?`too little to buy, sends ${H(e.lamports)} SOL back to main`:t<100?`${t}% is too little to buy, left as is`:`too little to do anything, left as is`;K(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>${t===100?`Spending all SOL in each funded side wallet`:`Spending ${t}% of each funded side wallet`}</h2>
    ${s.length?`<ul class="list">${s.map(e=>`<li><span>#${e.wallet.index}</span><code>${H(e.balance)} SOL<br><small>${u(e)}</small></code></li>`).join(``)}</ul>`:`<p class="warning">None of your side wallets has SOL. Send SOL to the side wallets you want to buy with, then try again.</p>`}
    ${c.length?`<p><b>Total: ${H(l)} SOL across ${c.length} wallet${c.length===1?``:`s`}.</b></p>
           <p class="muted">Each wallet keeps ${H(rf)} SOL so it can pay the fee to sell later. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again). Prices can move while the buys go through one by one.</p>
           <button id="go" class="primary">Enter PIN and buy</button>`:``}
    <button id="cancel">Cancel</button>`),q(`mint`).textContent=e,J(`cancel`,X),c.length&&J(`go`,()=>Zu(`Enter your PIN to buy`,t=>Of(t,e,r,s)))}var lf=45e5,uf=1e7,df=10;function ff(e,t,n,r){let i=n.map((e,t)=>t);if(r&&n.length===1){let e=t.findIndex(e=>e>=n[0]+lf);i=[e>=0?e:0]}return i.map((r,i)=>({wallet:e[r],balance:t[r],share:n[i],send:Math.max(0,n[i]+lf-t[r])}))}function pf(e){let t=e.filter(e=>e.send>0);return t.reduce((e,t)=>e+t.send,0)+Math.ceil(t.length/df)*qo}function mf(e,t){return Array.from({length:t},()=>Math.floor(e/t))}function hf(e,t,n,r,i=!0){let a=e=>({rows:[],mainCost:0,problem:e}),o=e=>n-e>=890880||n===e;if(!(r.total>0))return a(`The amount to spend is missing.`);let s;if(r.split){if(r.split.length>e.length)return a(`You asked for ${r.split.length} wallets but have ${e.length} side wallets.`);let n=r.split.reduce((e,t)=>e+t,0);s=ff(e,t,r.split.map(e=>Math.floor(r.total*e/n)),!1)}else if(r.count){if(r.count>e.length)return a(`You asked for ${r.count} wallets but have ${e.length} side wallets.`);s=ff(e,t,mf(r.total,r.count),!0)}else{let n=Math.max(1,Math.min(e.length,Math.floor(r.total/uf)));for(s=ff(e,t,mf(r.total,n),!1);n>1&&!o(pf(s));)n--,s=ff(e,t,mf(r.total,n),!1)}let c=pf(s);if(s.some(e=>e.share<of))return{rows:s,mainCost:c,problem:`That's less than ${H(of)} SOL per wallet. Use a bigger amount or fewer wallets.`};if(!o(c)){if(!i)return{rows:s,mainCost:c,problem:`too much`};let o=r.split?1:r.count??Math.max(1,Math.min(e.length,Math.floor(r.total/uf))),l=[];for(let i=o;i>=1;i--){let a=r.split?r:{...r,count:i},o=0,s=r.total;for(;s-o>1e3;){let r=Math.floor((o+s)/2);hf(e,t,n,{...a,total:r},!1).problem===`too much`?s=r:o=r}let c=hf(e,t,n,{...a,total:o},!1);o>0&&!c.problem&&l.push({plan:c,spend:o})}let u=Math.max(0,...l.map(e=>e.spend)),d=l.find(e=>e.spend>=u*.9);if(d){let e=d.plan.rows.length;return{...d.plan,adjusted:`The main wallet only has ${H(n)} SOL, so this spends ${H(d.spend)} SOL${e<s.length?` across ${e} wallet${e===1?``:`s`}`:``} instead of ${H(r.total)} SOL.`}}return a(`The main wallet has ${H(n)} SOL, which isn't enough for even one buy. A side wallet needs about ${H(55e5+Jo)} SOL from main for the smallest buy, fees, and the ${H(Jo)} SOL Solana makes a wallet keep.`)}return{rows:s,mainCost:c,problem:null}}async function gf(e,t){if(G(`fundedBuy:${e}`,()=>gf(e,t)),!W)return cf(e,100);let n=await sd();if(!n)return X();let[r,...i]=n;Y(`Checking your wallet balances…`);let[a,o]=await Promise.all([ud(n.map(e=>e.address)),gs(e).then(t=>t??Tr(W,e))]),[s,...c]=a,l=hf(i,c,s,t),u=l.rows.length||t.split?.length||t.count||0,d=l.rows.length?l.rows.reduce((e,t)=>e+t.share,0):t.total,f=t.split?`split ${t.split.join(`/`)} across ${u} side wallets`:u?`across ${u} side wallet${u===1?``:`s`}`:`split evenly across as many side wallets as possible`;K(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>Spending ${H(d)} SOL, ${f}</h2>
    ${l.adjusted&&!l.problem?`<p class="note">${Q(l.adjusted)}</p>`:``}
    ${l.rows.length?`<ul class="list">${l.rows.map(e=>`<li><span>#${e.wallet.index}</span><code>buys with <b>${H(e.share)} SOL</b><br><small>${e.send>0?`gets ${H(e.send)} SOL from main first`:`already has ${H(e.balance)} SOL, nothing sent`}</small></code></li>`).join(``)}</ul>`:``}
    ${l.problem?`<p class="warning">${Q(l.problem)}</p>`:`<p><b>From main: ${H(l.mainCost)} SOL</b> (main has ${H(s)} SOL).</p>
           <p class="muted">Each wallet gets ${H(lf)} SOL on top of its buy: ${H(rf)} SOL stays in it so it can pay the fee to sell later, and the rest covers the buy's fees and token deposit. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again).</p>
           <button id="go" class="primary">${l.adjusted?`Buy with ${H(d)} SOL instead`:`Enter PIN, fund and buy`}</button>`}
    <button id="cancel">Cancel</button>`),q(`mint`).textContent=e,J(`cancel`,X),!l.problem&&J(`go`,()=>_f(e,r,l))}function _f(e,t,n){let r=n.rows.map(e=>({wallet:e.wallet,balance:e.balance,action:`buy`,lamports:e.share})),i=n.rows.filter(e=>e.send>0),a=async(e,t)=>{if(!i.length)return t(`The side wallets already had enough SOL.`);let n=[];for(let e=0;e<i.length;e+=df)n.push(i.slice(e,e+df));let r=await Xs(),a=await Promise.allSettled(n.map(async t=>{let n=await ec(qs(e[0],t.map(e=>({to:e.wallet.address,lamports:e.send})),r));return{signature:n,outcome:await rc(n)}})),o=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,s=a.find(e=>e.status===`rejected`||e.value.outcome!==`confirmed`);if(s)throw s.status===`rejected`?s.reason:(t(`<span class="error">✗ Sending SOL from main ${s.value.outcome===`failed`?`failed`:`is taking too long`}</span> · ${o(s.value.signature)}`),new Df);let c=a.map(e=>o(e.value.signature));t(`✓ Sent SOL from main to ${i.length} of ${i.length} side wallets · ${c.join(` `)}`)};Zu(`Enter your PIN to fund and buy`,n=>Of(n,e,t,r,a))}var vf=1e6;async function yf(e,t,n){G(`split`,()=>yf(e,t,n));let r=await sd();if(!r)return X();let[i,...a]=r,o=e=>{K(`
      <h1>Split SOL</h1>
      <p class="warning">${e}</p>
      <button id="home" class="primary">Back to my wallets</button>`),J(`home`,X)};if(!a.length)return o(`You don't have any side wallets yet. Add some on the wallets screen first.`);let s=n?.length??t??a.length;if(s>a.length)return o(`You asked for ${s} wallets, but you have ${a.length} side wallet${a.length===1?``:`s`}. Add more on the wallets screen, or pick fewer.`);let c=a.slice(0,s);Y(`Checking your wallets…`);let l=await Ss([i,...c].map(e=>e.address)),u=l[0],d=Math.ceil(s/df)*qo,f=e===`all`?u-d-vf:e;if(f<=0)return o(`Main has ${H(u)} SOL, which isn't enough to split.`);let p=u-f-d;if(p<0||p>0&&p<890880)return o(`Main has ${H(u)} SOL. Splitting ${H(f)} SOL plus fees would leave ${p<0?`less than nothing`:`${H(p)} SOL, below the ${H(Jo)} SOL Solana makes a wallet keep`}. The most you can split is ${H(Math.max(0,u-d-Jo))} SOL, or use "split all sol".`);let m=n??c.map(()=>1),h=m.reduce((e,t)=>e+t,0),g=c.map((e,t)=>({wallet:e,balance:l[t+1],send:Math.floor(f*m[t]/h)}));g[0].send+=f-g.reduce((e,t)=>e+t.send,0);let _=g.filter(e=>e.send<=0||e.balance+e.send<890880);if(_.length)return o(`${_.map(e=>`#${e.wallet.index}`).join(`, `)} would get too little: an empty wallet has to receive at least ${H(Jo)} SOL. Split more SOL, or across fewer wallets.`);K(`
    <h1>Split ${H(f)} SOL</h1>
    <p>From main (${H(u)} SOL) to ${s} wallet${s===1?``:`s`}${n?`, split ${n.join(`/`)}`:`, evenly`}.</p>
    <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}gets <b>${H(e.send)} SOL</b><br><small>has ${H(e.balance)} now</small></code></li>`).join(``)}</ul>
    <p class="muted">Main keeps ${H(p)} SOL. Network fees: ${d<1e5?`less than 0.0001`:H(d)} SOL.</p>
    <button id="go" class="primary">Enter PIN and split</button>
    <button id="cancel">Cancel</button>`),J(`cancel`,X),J(`go`,()=>Zu(`Enter your PIN to split`,async e=>{let[t]=nd(e,1);K(`
        <h1>Splitting…</h1>
    ${ge()}
        <p class="muted">Keep this screen open until it finishes.</p>
        <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),Eu();let n=0,r=[];for(let e=0;e<g.length;e+=df)r.push(g.slice(e,e+df));g.forEach(e=>q(`status-${e.wallet.index}`).textContent=`sending…`);let a=await Xs().catch(()=>null);await Promise.all(r.map(async e=>{let r;try{let i=await ec(qs(t,e.map(e=>({to:e.wallet.address,lamports:e.send})),a??await Xs())),o=await rc(i),s=`<a href="#" class="tx" data-sig="${i}">view</a>`;o===`confirmed`?(n+=e.length,r=`✓ sent {amount} SOL · ${s}`):r=`<span class="error">✗ ${o===`failed`?`failed`:`taking long`}</span> · ${s}`}catch(e){r=`<span class="error">✗ ${Q(Z(e))}</span>`}e.forEach(e=>q(`status-${e.wallet.index}`).innerHTML=r.replace(`{amount}`,H(e.send))),Zp()})),Qc([i.address,...g.map(e=>e.wallet.address)]).catch(()=>{}),t.secret.fill(0),M(n?`success`:`error`),n&&await it(`SPLIT`),q(`after`).innerHTML=`<p><b>Done: ${n} of ${g.length} wallets got their SOL.</b></p>
        <button id="home" class="primary">Back to my wallets</button>`,J(`home`,X)}))}async function bf(e,t,n=!1){if(G(`buyAmount:${e}`,()=>bf(e,t,n)),!W)return cf(e,100);let r=await sd();if(!r)return X();let[i,...a]=r;if(!a.length)return K(`
      <h1>No side wallets yet</h1>
      <p>Buys run from side wallets. Add some with "Change number of side wallets" on the home screen.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);Y(`Checking your wallet balances…`);let[o,s]=await Promise.all([ud(r.map(e=>e.address)),bs(e)]),c=s.name??await Tr(W,e).catch(()=>null)??Mu(e),[l,...u]=o,d=1e5,f=e=>Math.floor(e/d)*d,p=e=>u[e]-rf-af,m=a.map((e,t)=>t).filter(e=>p(e)>=of).sort((e,t)=>p(t)-p(e)),h=e=>m.slice(0,e).reduce((e,t)=>e+p(t),0),g=(e,t)=>m.slice(0,t).map(n=>({wallet:a[n],balance:u[n],action:`buy`,lamports:Math.min(p(n),Math.floor(e*p(n)/h(t)))})),_=e=>Math.ceil(of*h(e)/p(m[e-1])/d)*d,v=n?m.map((e,t)=>f(h(t+1))):a.map((e,t)=>{let n=t+1,r=e=>hf(a,u,l,{total:e,count:n,split:null},!1).problem!==`too much`,i=0,o=l;for(;o-i>d;){let e=Math.floor((i+o)/2);r(e)?i=e:o=e}let s=f(i);return s>=of*n?s:0}),y=v.length,b=Math.max(0,...v),x=n?h(m.length):l,S=e=>n?_(e):of*e,C=e=>{if(n){if(!e)return y;for(let t=y;t>1;t--)if(e<=v[t-1]&&e>=_(t))return t;return 1}for(let t=Math.min(a.length,Math.max(1,Math.floor(e/uf)));t>1;t--)if(e<=v[t-1])return t;return 1},w=t&&t<=y?t:null,T=``,E=!n&&m.length>0;K(`
    <div class="coinhead">${ct(c,s.logo)}<div><b>${Q(c)}</b><small>${Mu(e)}${e.endsWith(`pump`)?` · pump.fun`:``}</small></div></div>
    <div class="avail"><small>${n?`In side wallets`:`Available`}</small><span><span id="avail">0.0000</span> SOL</span></div>
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">SOL</span><div class="usd" id="amtNote"></div></div>
    </div>
    ${E?`<button id="useSide" type="button" hidden>Use side-wallet SOL instead (${H(h(m.length))} SOL)</button>`:``}
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span id="tickMid"></span><span>MAX</span></div>
    <div class="chips"><button type="button" data-f="0.25">25%</button><button type="button" data-f="0.5">50%</button><button type="button" data-f="0.75">75%</button><button type="button" data-f="1">MAX</button></div>
    <div class="walletsrow"><div><b>${n?`Side wallets`:`Wallets`}</b><small id="each"></small></div>
      <div class="stepper"><button id="minus" type="button">−</button><b id="count"></b><button id="plus" type="button">+</button></div></div>
    ${Wu(`dot`)}
    <button id="go" class="primary go"></button>
    <button id="cancel">Cancel</button>`),lt(),st(q(`avail`),x,tf,{ms:1100,final:tf(x)}),J(`cancel`,X),E&&J(`useSide`,()=>bf(e,null,!0));let ee=e=>Math.round((Number(e)||0)*V),te=()=>{let e=ee(T);return{total:e,count:Math.max(1,w??C(e)),max:w?v[w-1]:b}},D=e=>`${e} wallet${e===1?``:`s`}`,ne=(e=!1)=>{let{total:t,count:r,max:i}=te();q(`amt`).textContent=T||`0`,q(`count`).textContent=String(y?r:0),q(`each`).textContent=n?t?`spread by balance${w?``:` · auto`}`:w?`you picked this, most SOL first`:`auto: every wallet with SOL`:t?`${H(Math.floor(t/r))} SOL each${w?``:` · auto`}`:w?`you picked this`:`auto: as many as the amount allows`,q(`tickMid`).textContent=tf(i/2).replace(/0+$/,``).replace(/\.$/,``),e||(q(`slider`).value=String(i?Math.min(1e3,Math.round(t/i*1e3)):0));let a=t>i,o=t>0&&!a&&t<S(r);q(`amt`).classList.toggle(`over`,a&&i>0),q(`amtNote`).textContent=i?a?`Max with ${D(r)} is ${H(i)} SOL`:o?`At least ${H(S(r))} SOL for ${D(r)}`:t?n?`from ${D(r)} · each keeps ${H(rf)} SOL for selling`:`split over ${D(r)} · each keeps ${H(lf)} SOL for fees`:`Type an amount or drag the slider`:n?`None of your side wallets has enough SOL to buy`:`Main needs at least ${H(55e5+Jo+qo)} SOL to buy`,E&&(q(`useSide`).hidden=i>0);let s=q(`go`);s.disabled=!t||a||o,s.textContent=t&&!a&&!o?`⚡ Snatch it · ${T} SOL`:`⚡ Snatch it`},re=e=>{T=e>0?tf(e).replace(/0+$/,``).replace(/\.$/,``):``};Gu(e=>{if(e===`back`)T=T.slice(0,-1);else if(e===`dot`)T=T.includes(`.`)?T:(T||`0`)+`.`;else if(/\d/.test(e)){let[,t]=T.split(`.`);if(t!==void 0&&t.length>=4||T.replace(`.`,``).length>=9)return;T=T===`0`?e:T+e}ne()}),q(`slider`).addEventListener(`input`,()=>{let{max:e}=te();re(f(Number(q(`slider`).value)/1e3*e)),ne(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{N(),re(f(te().max*Number(e.dataset.f))),ne()}));let O=e=>{y&&(N(),w=Math.min(y,Math.max(1,te().count+e)),ne())};J(`minus`,()=>O(-1)),J(`plus`,()=>O(1)),J(`go`,()=>{let{total:t,count:r}=te();if(n){let n=g(t,r);return Zu(`Enter your PIN to buy`,t=>Of(t,e,i,n))}let o=hf(a,u,l,{total:t,count:r,split:null},!1);if(o.problem)return q(`amtNote`).textContent=o.problem===`too much`?`Main can't cover that, try a little less`:o.problem,M(`error`);_f(e,i,o)}),ne()}var Z=e=>e instanceof Error?e.message:String(e),xf=8e6;async function Sf(e,t,n,r){let i;try{i=await xc(e,t,r)}catch(e){throw Error(`Couldn't double-check this trade before signing (${Z(e)}). Nothing was signed; try again in a moment.`)}if(i.failed)return;let a=e=>{throw Error(`Stopped for safety: ${e}. Nothing was signed. Tell Dustin if this keeps happening.`)};i.takenOver&&a(`this trade would hand control of your wallet or its coins to someone else`),i.solOut>n.sol&&a(`this trade would take ${H(i.solOut)} SOL from the wallet, more than the ${H(n.sol)} SOL it should cost at most`);for(let[e,t]of i.coinsOut)e===n.mint&&(n.coins===void 0||t<=n.coins)||a(e===n.mint?`this trade would send more of the coin than you chose to sell`:`this trade would send away a coin you didn't choose to trade`)}async function Cf(e,t,n,r){return await Sf(e,t.address,n,r),Ts(e,t)}var wf=10,Tf=e=>{let t=bc(e);return t.catch(()=>{}),t};async function Ef(e,t,n){let r=await gr(W,e,t,n);if(!r.transaction&&t-2e6>=of&&(t-=2e6,r=await gr(W,e,t,n)),!r.transaction)throw Error(r.errorMessage??`Jupiter couldn't find a way to buy this token.`);return{order:r,lamports:t}}var Df=class extends Error{};async function Of(e,t,n,r,i){let a=r.filter(e=>e.action!==`skip`),o=nd(e,Math.max(...a.map(e=>e.wallet.index))+1);K(`
    <h1>Buying…</h1>
    ${ge()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${i?`<p id="funding">Sending SOL from main to the side wallets…</p>`:``}
    <ul class="list">${a.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),Eu();let s=(e,t)=>q(`status-${e}`).innerHTML=t,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;if(i)try{await i(o,e=>q(`funding`).innerHTML=e)}catch(e){return e instanceof Df||(q(`funding`).innerHTML=`<span class="error">✗ Sending SOL from main failed: ${Q(Z(e))}</span>`),a.forEach(e=>s(e.wallet.index,`not bought`)),o.forEach(e=>e.secret.fill(0)),M(`error`),q(`after`).innerHTML=`<p><b>Nothing was bought.</b> Any SOL that did reach a side wallet stays there; "Send all side-wallet SOL to main" brings it back.</p>
        <button id="home" class="primary">Back to my wallets</button>`,Zp(),J(`home`,X)}let l=0,u=null,d=!1;await vp(a,wf,async e=>{let r=o[e.wallet.index];try{if(e.action===`buy`&&d){s(e.wallet.index,`skipped: same problem as above, nothing spent`);return}if(e.action===`buy`){s(e.wallet.index,`buying…`);let n=Vf(r.address,t).catch(()=>null),i=Tf(r.address),a=null;if(!u)try{a=await Ef(t,e.lamports,r.address)}catch(e){u=Z(e)}let o=await n,d=a?null:await Pp(t);if(d){await Gp(d,r,e.lamports,t=>s(e.wallet.index,t),c)&&(l++,Uf(t,r.address,o));return}if(!a){s(e.wallet.index,`buying through pump.fun…`);let n=0,a=await Xp(e.wallet.index,s,u,(i,a)=>(n=Math.floor(e.lamports*a),Mr(r.address,t,n,i)),r,e=>({sol:Math.ceil(n*(1+e/100))+xf}),i),d=await rc(a);d===`confirmed`?(l++,Uf(t,r.address,o),s(e.wallet.index,`✓ bought with ${H(n)} SOL via pump.fun · ${c(a,`view`)}`)):s(e.wallet.index,`<span class="error">✗ buy ${d===`failed`?`failed`:`is taking long`}</span> · ${c(a,`check`)}`);return}let{order:f,lamports:p}=a,m=await vr(W,await Cf(yr(f.transaction),r,{sol:p+xf},i),f.requestId);if(m.status!==`Success`)throw Error(m.error??`The buy didn't go through (code ${m.code}).`);l++,Uf(t,r.address,o),s(e.wallet.index,`✓ bought with ${H(p)} SOL · ${c(m.signature,`view`)}`)}else{s(e.wallet.index,`sending back to main…`);let t=await ec(Ks(r,n.address,e.lamports,await Xs())),i=await rc(t);s(e.wallet.index,i===`confirmed`?`✓ sent ${H(e.lamports)} SOL to main · ${c(t,`view`)}`:`✗ sending back ${i===`failed`?`failed`:`is taking long`} · ${c(t,`check`)}`)}}catch(t){Z(t).includes(`priced in another coin`)&&(d=!0),s(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`)}}),Qc([n.address,...a.map(e=>e.wallet.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),M(l?`success`:`error`),l&&await it(),q(`after`).innerHTML=`<p><b>Done: ${l} of ${a.filter(e=>e.action===`buy`).length} buys went through.</b></p>
    <button id="home" class="primary">Back to my wallets</button>`,Zp(),J(`home`,X)}var kf=e=>new Intl.NumberFormat(`en-US`,e>=1e6?{notation:`compact`,maximumFractionDigits:2}:{maximumFractionDigits:e>=1?2:6}).format(e),Af=e=>`$${e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`,jf=e=>e.name?`${e.name}${e.symbol?` (${e.symbol})`:``}`:e.symbol??Mu(e.mint),Mf=e=>e.usd===null&&(/https?:|www\.|\.(io|com|xyz|net|org|fun|app|site|gg|co)\b/i.test(`${e.name} ${e.symbol}`)||(e.name??``).length>40),Nf=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),Pf=3,Ff=e=>!!e?.chain&&e.chain!==Pf,If=e=>!!e&&BigInt(e.raw)>0n&&(e.lamports>0||(e.usd??0)>0)&&!Ff(e),Lf=(e,t)=>e.usd?t?e.lamports+e.usd/t*V:null:e.lamports,Rf=(e,t)=>{let n=Number(t)/Number(BigInt(e.raw)),r=e.lamports*n,i=(e.usd??0)*n;return[r>0?`${H(r)} SOL`:``,i>0?Af(i):``].filter(Boolean).join(` + `)},zf=e=>!If(e)&&(!e||e.chain!==Pf||!e.checked||Date.now()-e.checked>432e5);async function Bf(e,t,n){let r=0,i=0,a=0,o=!1;for(let n of t){let t=await dc(n.address,e,n.amount);t&&(o=!0,r+=t.lamports,i+=t.usd,a+=t.coins)}if(!o)return null;let s=JSON.parse(await j.get(Ql).catch(()=>null)||`{}`);if(If(s[e])&&!s[e].chain)return s[e];let c=a>0&&(r>0||i>0)?{lamports:r,...i>0?{usd:i}:{},raw:BigInt(Math.round(a*10**n)).toString(),chain:Pf}:{lamports:0,raw:`0`,checked:Date.now(),chain:Pf};return s[e]=c,await j.set(Ql,JSON.stringify(s)).catch(()=>{}),c}async function Vf(e,t){let n=await gc([e],t,await cl(t));return{lamports:n.lamports[0]+n.deposit[0],raw:n.raw[0]}}var Hf=Promise.resolve();function Uf(e,t,n){n&&(Hf=Hf.then(async()=>{try{for(let r=0;r<5;r++){let r=await Vf(t,e),i=r.raw-n.raw,a=n.lamports-r.lamports;if(i>0n&&a>0){let t=JSON.parse(await j.get(Ql)||`{}`),n=t[e]??{lamports:0,raw:`0`};t[e]={lamports:n.lamports+a,...n.usd?{usd:n.usd}:{},raw:(BigInt(n.raw)+i).toString()},await j.set(Ql,JSON.stringify(t));return}await new Promise(e=>setTimeout(e,1500))}}catch{}}))}var Wf=e=>e.inOrder===!0;async function Gf(e){let t=await sl(e);return t&&t.decimals!==void 0?t:Cu(e).catch(()=>t??{name:null,symbol:null})}async function Kf(e){let t=e.map(()=>[]);if(!W)return t;let n=await ap(),r=new Set(n.map(e=>e.wallet)),i=await Promise.all(e.map(e=>r.has(e.address)?Su(e.address).catch(()=>[]):Promise.resolve([]))),a=[...new Set(i.flat().map(e=>e.inputMint))].filter(e=>e!==Xn),o=new Map(await Promise.all(a.map(async e=>[e,await Gf(e)])));for(let[e,n]of i.entries())for(let r of n){let n=BigInt(r.rawRemainingMakingAmount||r.rawMakingAmount||`0`),i=o.get(r.inputMint);n<=0n||!i||i.decimals===void 0||t[e].push({mint:r.inputMint,name:i.name,symbol:i.symbol,logo:i.logo,decimals:i.decimals,amount:Number(n)/10**i.decimals,usd:null,inOrder:!0})}return t}var qf=e=>JSON.stringify(e.map(e=>[e.lamports,e.accounts.map(e=>`${e.mint}:${e.raw}`)])),Jf=null,Yf=!1,Xf=new Set,Zf=e=>Jf===e&&Du[Du.length-1]?.key===`holdings`;async function Qf(){G(`holdings`,Qf);let e=await sd();if(!e)return X();let t=Symbol(`holdings`);Jf=t;let n=Yf;Yf=!1;let r={me:t,wallets:e,costs:await $f()};await ep(e,`Looking up what each wallet holds…`,()=>Zf(t),(e,t,n)=>tp(r,e,t,n),n)}var $f=()=>j.get(Ql).then(e=>JSON.parse(e||`{}`)).catch(()=>({}));async function ep(e,t,n,r,i=!1){let a=e.map(e=>e.address),o=nl(a);o.catch(()=>{});let s=Kf(e);s.catch(()=>{});let c=()=>Td(s,8e3,null),l=()=>n()&&!!document.getElementById(`holdSync`),u=await Zc(a);if(u){let e=await Td(s,150,null);await r(u,e,`saved`);let t=await o.catch(()=>null);if(!l())return;if(!t){q(`holdSync`).textContent=`NOT SYNCED`;return}if(e&&qf(t)===qf(u)){let e=q(`holdSync`);e.textContent=`UP TO DATE`,e.classList.add(`synced`)}else{let n=e??await c();if(!l())return;await r(t,n,`quiet`)}}else{Y(t);let[e,i]=await Promise.all([o,c()]);if(!n())return;await r(e,i,`fresh`)}let d=await il(a,i).catch(()=>null);d&&l()&&await r(d,await c(),`quiet`)}async function tp(e,t,n,r){let{me:i,wallets:a,costs:o}=e,s=0,c=await Promise.all(t.map(async e=>(await al(e)).filter(e=>!Mf(e)||!(s+=1)))),l=t.map(e=>e.lamports);n?.forEach((e,t)=>c[t].push(...e));let u=new Map;c.forEach((e,t)=>e.forEach(e=>{let n=u.get(e.mint)??{coin:e,amount:0,usd:null,wallets:[],inOrders:0};n.amount+=e.amount,e.usd===null?Wf(e)&&n.usd!==null&&n.amount>e.amount&&(n.usd+=n.usd/(n.amount-e.amount)*e.amount):n.usd=(n.usd??0)+e.usd,Wf(e)&&(n.inOrders+=e.amount),n.wallets.includes(a[t].index)||n.wallets.push(a[t].index),u.set(e.mint,n)}));let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=sm,p=new Map,m=0,h=()=>{for(let[e,t]of u){let n=p.get(e);n!==void 0&&f&&(t.usd=n/1e9*f),t.usd!==null&&t.amount>0&&um(e,t.usd/t.amount)}},g=async()=>{if(!W)return;let[e,t]=await Promise.all([xu().catch(()=>null),u.size?wu([...u.keys()]).catch(()=>new Map):Promise.resolve(new Map)]);f=e??f,gm(f);for(let[e,n]of u){let r=t.get(e);r&&f?p.set(e,r*n.amount/f*1e9):n.usd!==null&&f&&!p.has(e)&&p.set(e,n.usd/f*1e9)}h()},_=async()=>{if(!W)return;let[e,t]=await Promise.all([xu(!0).catch(()=>null),Promise.all([...u].map(([e,t])=>Sr(W,e,d(t),!0).catch(()=>null)))]);f=e??f,gm(f);let n=[];if([...u.keys()].forEach((e,r)=>{let i=t[r];i===null?n.push(e):p.set(e,i)}),m=n.length,n.length&&f){let e=await wr(W,n,!0).catch(()=>new Map);for(let[t,n]of e)p.set(t,n*u.get(t).amount/f*1e9)}h();let r=new Map;for(let[e,t]of u)t.usd!==null&&t.amount>0&&p.has(e)&&r.set(e,t.usd/t.amount);ol(r).catch(()=>{})};r===`fresh`?await g():h();let v=e=>a.flatMap((t,n)=>c[n].filter(t=>t.mint===e).map(e=>({address:t.address,amount:e.amount}))),y=e=>{let t=p.get(e);if(t===void 0||Nf.has(e))return null;let n=o[e],r=u.get(e),i,a=!1,s=If(n)?Lf(n,f):null;if(s&&(i=s/Number(BigInt(n.raw))*Number(d(r)),a=!0),!i)return null;let c=(t-i)/i*100;return Math.abs(c)<.5?null:{pct:c,sinceBuy:a}},b=e=>e===null?``:`${e.pct>0?`▲`:`▼`} ${Math.abs(e.pct)>=100?Math.round(Math.abs(e.pct)):Math.abs(e.pct).toFixed(1)}%${e.sinceBuy?` since buy`:``}`,x=e=>e===null?``:e.pct>0?` up`:` down`,S=(await ap()).length;if(!Zf(i)||r===`quiet`&&!document.getElementById(`holdSync`))return;let C=l.reduce((e,t)=>e+t,0),w=a.filter((e,t)=>l[t]>0||c[t].length),T=e=>e===0?`Main`:`#${e}`,E=[...u.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),ee=E.reduce((e,t)=>e+(t.usd??0),0),te=a.filter((e,t)=>l[t]>0).length,D=(e,t)=>`${e} ${t}${e===1?``:`s`}`,ne=e=>Af(e).replace(/^\$0\.00$/,`$${e.toFixed(4)}`),re=(e,t)=>r===`quiet`?t===`usd`?ne(e):H(e):`<span class="tk" data-to="${e}" data-kind="${t}">${t===`usd`?`$0.00`:`0.0000`}</span>`,O=r===`saved`?`SYNCING`:`UP TO DATE`,ie=window.scrollY;K(`
    <h1>Your holdings <span id="holdSync" class="live${r===`saved`?``:` synced`}">${O}</span></h1>
    <div class="total">
      <small>${ee>0?`Coins across ${D(w.length,`wallet`)}`:`SOL across ${D(w.length,`wallet`)}`}</small>
      <div class="big">${ee>0?`<span id="usdTotal">${re(ee,`usd`)}</span>`:`<span class="solamt" data-sol="${C/V}">${re(C,`sol`)}<span class="unit">SOL</span></span>`}</div>
      ${ee>0?`<div class="sub">+ <span class="solamt" data-sol="${C/V}">${re(C,`sol`)} SOL</span></div>`:``}
    </div>
    <h2>Across all wallets${E.length&&W?` <span id="live" class="live">LIVE</span>`:``}</h2>
    <ul class="list coins">
      <li><div class="av sol"><b>◎</b></div><div class="grow"><b>SOL</b><small>in ${D(te,`wallet`)}</small></div>
        <div class="right"><span class="solamt" data-sol="${C/V}">${re(C,`sol`)}<small>SOL</small></span></div></li>
      ${E.map(e=>{let t=y(e.coin.mint);return`<li data-mint="${e.coin.mint}">${ct(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(jf(e.coin))}</b><small>in ${e.wallets.length===1?``:`${e.wallets.length} wallets: `}${e.wallets.map(T).join(`, `)}</small>${e.inOrders?`<small class="inorder">🎯 ${lm(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
          <div class="right${x(t)}"><span class="val">${e.usd===null?``:re(e.usd,`usd`)}</span><small class="move">${b(t)}</small><small>${lm(e.coin.mint,e.amount)}</small></div></li>`}).join(``)}
    </ul>
    ${E.length?`<p class="muted">Tap a coin to sell some of it, set an auto-sell, or buy more.</p>`:``}
    <h2>Per wallet</h2>
    <p class="muted">Tap a wallet to open it.</p>
    <ul class="list">${w.map(e=>{let t=a.indexOf(e);return`<li class="openwallet" data-index="${t}"><span>${T(e.index)}</span><code><span class="bal">${H(l[t])} SOL</span>${c[t].map(e=>`<br><small>${Wf(e)?`🎯 `:``}${Q(jf(e))}: ${lm(e.mint,e.amount)}${Wf(e)?` in auto-sell`:``}</small>`).join(``)}<br><a href="#" class="acct" data-address="${e.address}">view on Solscan</a></code></li>`}).join(``)}</ul>
    ${w.length<a.length?`<p class="muted">${a.length-w.length} empty wallets not shown.</p>`:``}
    ${s?`<p class="muted">${s} junk coin${s===1?``:`s`} hidden: ads strangers send to active wallets. They're worthless; don't visit the websites in their names.</p>`:``}
    <p class="muted" id="noLive"></p>
    ${E.length?`<button id="sellAll" class="danger">Sell all coins</button>`:``}
    ${S?`<button id="autoSells" class="gold">🎯 Auto-sells · ${S} placed</button>`:``}
    <button id="refresh" class="primary">Refresh</button>
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,ie),S&&J(`autoSells`,()=>gp().catch($)),E.length&&J(`sellAll`,()=>Jp(100,!1,null).catch($)),document.querySelectorAll(`.acct`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),De(ac(e.dataset.address))})),J(`refresh`,()=>{yu(),Yf=!0,Qf().catch($)}),J(`home`,X),document.querySelectorAll(`.openwallet`).forEach(e=>e.addEventListener(`click`,t=>{t.target.closest(`button, a, .solamt, .coinamt`)||(N(),pd(a[Number(e.dataset.index)]).catch($))})),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{let t=u.get(e.dataset.mint);N(),np({mint:t.coin.mint,label:jf(t.coin),short:t.coin.symbol||t.coin.name||`?`,logo:t.coin.logo,amount:t.amount,raw:d(t),wallets:t.wallets.map(T).join(`, `),holders:v(t.coin.mint),decimals:t.coin.decimals??0,inOrders:t.inOrders,value:p.get(t.coin.mint)??null}).catch($)})),lt(),document.querySelectorAll(`.tk`).forEach((e,t)=>{let n=Number(e.dataset.to),r=e.dataset.kind===`usd`;st(e,n,r?Af:tf,{ms:1100,delay:Math.min(t,12)*70,final:r?ne(n):H(n)})});let ae=q(`holdSync`),oe=()=>ae.isConnected;vp([...u],3,async([e,t])=>{if(Nf.has(e)||!zf(o[e])||Xf.has(e)||!oe())return;Xf.add(e);let n=await Bf(e,v(e),t.coin.decimals??0).catch(()=>null).finally(()=>Xf.delete(e));n&&(o[e]=n)}).catch(()=>{});let se=e=>{let t=document.getElementById(`live`);e&&t&&(t.classList.remove(`beat`),t.offsetWidth,t.classList.add(`beat`));let n=0;for(let[e,t]of u){n+=t.usd??0;let r=document.querySelector(`li[data-mint="${e}"]`);if(!r||t.usd===null)continue;let i=r.querySelector(`.right`),a=i.querySelector(`.val`),o=ne(t.usd);a.textContent!==o&&(a.textContent=o,i.classList.remove(`bump`),i.offsetWidth,i.classList.add(`bump`));let s=y(e);i.classList.toggle(`up`,!!s&&s.pct>0),i.classList.toggle(`down`,!!s&&s.pct<0),i.querySelector(`.move`).textContent=b(s)}let r=document.getElementById(`usdTotal`);r&&n>0&&(r.textContent=ne(n)),q(`noLive`).textContent=m?`${m===1?`1 coin has`:`${m} coins have`} no live sell price right now, so ${m===1?`its`:`their`} value may lag.`:``};W&&u.size&&(async()=>{if(r!==`fresh`){if(await g(),!oe())return;se(!1)}r!==`quiet`&&await new Promise(e=>setTimeout(e,1200));for(let e=0;oe();e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),oe()&&!document.hidden){if(await _(),!oe())return;se(!0)}})().catch(()=>{})}async function np(e){if(G(`coin:${e.mint}:${e.only?.join(`,`)??``}`,()=>np(e)),!W)return Qf();let t=Promise.all([Sr(W,e.mint,e.raw),xu()]);t.catch(()=>{});let[n,r]=await Promise.all([$f(),ap()]),i=Nf.has(e.mint)?void 0:n[e.mint],a=!Nf.has(e.mint)&&zf(i),o=i&&If(i)?i:null,s=null,c=e.value??null,l=sm,u=!0,d=()=>{let t=o?Lf(o,l):null;s=t?Math.round(t/Number(BigInt(o.raw))*Number(e.raw)):null};d();let f=t,p=async()=>{let[t,n]=await(f??Promise.all([Sr(W,e.mint,e.raw,!0),xu(!0)])).catch(()=>[null,null]);f=null,u=!1,t!==null&&(c=t),n!==null&&(l=n),gm(n),d(),c!==null&&l&&e.amount>0&&um(e.mint,c/V*l/e.amount)},m=()=>s&&c&&c>s?Math.min(100,Math.ceil(s/c*1e4)/100):null,h=e=>String(Math.round(e*100)/100),g=e=>l?` · ${_(e/V*l)}`:``,_=e=>e<.01?`$${e.toFixed(4)}`:Af(e),v=r.filter(t=>t.mint===e.mint).length,y=``,b=!1;K(`
    <div class="coinhead">${ct(e.short,e.logo)}<div><b>${Q(e.label)}</b><small>${lm(e.mint,e.amount,` coins`)} · in ${Q(e.wallets)}</small></div><span id="live" class="live">LIVE</span></div>
    <div class="avail"><small>Worth now</small><span id="worth"></span></div>
    <div class="avail"><small id="paidLabel"></small><span class="paid" id="paidText"></span></div>
    <div class="avail pl" id="plRow"><small>Profit</small><span id="pl"></span></div>
    ${e.inOrders?`<p class="muted initnote">🎯 ${lm(e.mint,e.inOrders)} of these wait in auto-sell orders. Selling here only sells the rest; cancel the order first to sell those.</p>`:``}
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">%</span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span>50%</span><span>ALL</span></div>
    <div class="chips"><button type="button" data-p="25">25%</button><button type="button" data-p="50">50%</button><button type="button" data-p="75">75%</button><button type="button" data-p="100">MAX</button></div>
    <div id="initialBox"></div>
    ${Wu(`dot`)}
    <button id="go" class="danger go"></button>
    <div id="autoBox"></div>
    <button id="buyMore" class="primary">⚡ Buy more</button>
    <button id="back">${e.only?`Back to the wallet`:`Back to holdings`}</button>`),lt();let x=()=>Math.min(100,Number(y)||0),S=()=>{q(`worth`).textContent=c===null?u?`…`:`no live price`:`${H(c)} SOL${g(c)}`,q(`paidLabel`).textContent=`You paid${i?.chain?` · on-chain`:``}`,q(`paidText`).textContent=o?Rf(o,e.raw):a?`looking it up…`:`—`;let t=q(`autoBox`),n=!!o&&!Nf.has(e.mint);n!==!!t.firstElementChild&&(t.innerHTML=n?`<button id="auto" class="gold">🎯 Auto-sell${v?` · ${v} waiting`:``}</button>`:``,n&&J(`auto`,()=>pp(e,o).catch($)));let r=q(`plRow`);if(r.hidden=!(s&&c!==null),s&&c!==null){let e=c-s,t=e/s*100;r.classList.toggle(`up`,e>0),r.classList.toggle(`down`,e<0),q(`pl`).textContent=`${e>=0?`▲ +`:`▼ −`}${H(Math.abs(e))} SOL (${Math.abs(t)>=100?Math.round(Math.abs(t)):Math.abs(t).toFixed(1)}%)`}let l=m();q(`initialBox`).innerHTML=i?.out?`<p class="muted initnote">✓ Initial investment already taken out. The rest is riding free.</p>`:l===null?`<p class="muted initnote">${Nf.has(e.mint)?`A stablecoin is always worth about $1, so there's no profit to take here.`:s?`💰 Sell initial investment shows up once this coin is worth more than you paid.`:a?`Looking up what you paid for this coin in your wallet's trade history…`:i?.checked?`Couldn't find what you paid for this coin in your wallet's trade history, so Sell initial investment isn't available.`:`Couldn't read your wallet's trade history right now, so Sell initial investment isn't available yet.`}</p>`:`<button id="initial" class="gold">💰 Sell initial investment · ${h(l)}%</button>`,l!==null&&!i?.out&&J(`initial`,()=>{N(),b=!0,C()})},C=(t=!1)=>{let n=m();b&&n!==null&&(y=h(n));let r=x();q(`amt`).textContent=y||`0`,t||(q(`slider`).value=String(Math.round(r*10)));let i=c===null?null:Math.round(c*r/100);q(`amtNote`).textContent=r?b&&n!==null?`gets back the ${o?Rf(o,e.raw):`${H(s)} SOL`} you paid · ${h(100-r)}% keeps riding`:i===null?`${kf(e.amount*r/100)} coins`:`≈ ${H(i)} SOL${g(i)} · ${kf(e.amount*r/100)} coins`:`Type a % or drag the slider`,document.querySelector(`#initial`)?.classList.toggle(`on`,b);let a=q(`go`);a.disabled=!r,a.textContent=r?`Sell ${r===100?`all of it`:`${y}%`}`:`Sell`},w=()=>b=!1;Gu(e=>{if(w(),e===`back`)y=y.slice(0,-1);else if(e===`dot`)y=y.includes(`.`)?y:(y||`0`)+`.`;else if(/\d/.test(e)){let[,t]=y.split(`.`);if(t!==void 0&&t.length>=2)return;let n=y===`0`?e:y+e;y=Number(n)>100?`100`:n}C()}),q(`slider`).addEventListener(`input`,()=>{w();let e=Number(q(`slider`).value);y=e?h(e/10):``,C(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{N(),w(),y=e.dataset.p,C()})),J(`go`,()=>{let t=x();if(!t)return;let n=b&&m()!==null,r=n?async()=>{let t=JSON.parse(await j.get(Ql)||`{}`);t[e.mint]&&(t[e.mint].out=!0),await j.set(Ql,JSON.stringify(t))}:void 0,i=(t,n)=>jp(e.label,Math.round(t*100)/100,!1,e.only??null,{mint:e.mint,label:e.label},r,n).catch($);if(!e.inOrders)return i(t,!1);let a=Math.max(0,e.amount-e.inOrders),o=n?Math.min(100,t*e.amount/(a||1)):t,s=t=>{let n=c===null||!e.amount?null:Math.round(c*t/e.amount);return n===null?``:` ≈ <span class="solamt" data-sol="${n/V}">${H(n)} SOL</span>${g(n)}`},l=a*o/100,u=e.amount*t/100;N(),K(`
      <h1>Sell ${Q(e.label)}</h1>
      <p>🎯 ${lm(e.mint,e.inOrders)} of your ${lm(e.mint,e.amount)} coins are locked in auto-sell orders.</p>
      ${a>0?`<button id="freeOnly" class="primary">Sell only the free coins<br><small>${lm(e.mint,l)} coins (${h(o)}% of ${lm(e.mint,a)})${s(l)}</small></button>`:`<p class="muted">All of it is in auto-sell orders, so there are no free coins to sell.</p>`}
      <button id="withOrders" class="danger">Sell from all coins, including the locked ones<br><small>${lm(e.mint,u)} coins (${h(t)}% of ${lm(e.mint,e.amount)})${s(u)} · cancels the auto-sell orders first</small></button>
      <button id="back">Back</button>`),a>0&&J(`freeOnly`,()=>i(o,!1)),J(`withOrders`,()=>i(t,!0)),J(`back`,()=>np(e).catch($))}),J(`buyMore`,()=>bf(e.mint,null).catch($)),J(`back`,()=>e.only?ju():Qf().catch($)),S(),C();let T=q(`live`);a&&Bf(e.mint,e.holders,e.decimals).catch(()=>null).then(e=>{e&&(i=e),o=i&&If(i)?i:null,a=!1,d(),T.isConnected&&(S(),C())}),(async()=>{for(let e=0;T.isConnected;e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),T.isConnected&&!document.hidden){if(await p(),!T.isConnected)return;T.classList.remove(`beat`),T.offsetWidth,T.classList.add(`beat`),S(),C()}})().catch(()=>{})}var rp=`autoSells`,ip=5;async function ap(){return JSON.parse(await j.get(rp).catch(()=>null)||`[]`)}var op=e=>j.set(rp,JSON.stringify(e)),sp=Promise.resolve();function cp(e){let t=sp.then(async()=>op(e(await ap())));return sp=t.catch(()=>{}),t}var lp=e=>`${Math.round(e*100)/100}x`,up=e=>`+${Math.round((e-1)*1e4)/100}%`,dp=e=>{let t=1+24*(e/1e3)**2;return t<10?Math.round(t*10)/10:Math.round(t)},fp=e=>Math.round(Math.sqrt(Math.min(1,Math.max(0,(e-1)/24)))*1e3);async function pp(e,t){G(`autoSell:${e.mint}`,()=>pp(e,t));let n=await sd();if(!n)return X();Y(`Checking which wallets hold it…`);let r=new Set(e.holders.map(e=>e.address)),i=n.filter(e=>r.has(e.address)),a=e.raw-BigInt(Math.round((e.inOrders??0)*10**e.decimals)),o=a>0n?Promise.all([Sr(W,e.mint,a),xu()]):null;o?.catch(()=>{});let s=await gc(i.map(e=>e.address),e.mint,await cl(e.mint)),c=i.map((e,t)=>({wallet:e,held:s.raw[t]})).filter(e=>e.held>0n),l=c.reduce((e,t)=>e+t.held,0n);if(!l)return np(e);let u=null,d=null,f=!0,p=async()=>{let t=!f,n=f&&o&&(a===l||Number(a>l?a-l:l-a)/Number(l)<.001);f=!1;let[r,i]=await(n?o.then(([e,t])=>[e===null?null:Math.round(e*Number(l)/Number(a)),t]):Promise.all([Sr(W,e.mint,l,t),xu(t)]));r!==null&&(u=r),i!==null&&(d=i)};await p();let m=()=>{let e=Lf(t,d);return e?e/Number(BigInt(t.raw)):null},h=()=>u!==null&&m()?u/(m()*Number(l)):null,g=(await ap()).filter(t=>t.mint===e.mint),_=t.out?`all`:`initial`,v=`x`,y=2,b=`2`,x=e=>e===0?`Main`:`#${e}`,S=e=>d?e/V*d:null,C=()=>{let e=m();return!e||y<=1?[]:c.map(t=>{let n=_===`all`?t.held:t.held*10000n/BigInt(Math.round(y*1e4)),r=BigInt(Math.ceil(Number(n)*e*y)),i=u===null?null:u*Number(n)/Number(l);return{wallet:t.wallet,held:t.held,making:n,taking:r,usdNow:i===null?null:S(i)}})},w=e=>e.usdNow===null||e.usdNow>=ip;K(`
    <div class="coinhead">${ct(e.short,e.logo)}<div><b>Auto-sell ${Q(e.label)}</b><small>You paid ${Rf(t,l)} · now <span id="nowX"></span></small></div></div>
    <div class="seg" id="kindSeg"><button type="button" data-v="initial">💰 Sell initial</button><button type="button" data-v="all">Sell all</button></div>
    <div class="seg small" id="unitSeg"><button type="button" data-v="x">Multiplier ×</button><button type="button" data-v="pct">Percentage %</button></div>
    <div class="total amountbox">
      <small id="when">when it reaches</small>
      <div class="amount"><span class="num" id="amt"></span><span class="unit" id="unit"></span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1">
    <div class="ticks" id="ticks"></div>
    ${Wu(`dot`)}
    <ul class="list" id="plan"></ul>
    <p class="muted" id="planNote"></p>
    <button id="go" class="gold go">Set auto-sell</button>
    <div id="existing"></div>
    <p class="muted">The coins in an order wait in Jupiter's on-chain order account, so they leave your holdings until it sells or you cancel it. This only sells on the way up; it can't stop a loss.</p>
    <button id="back">Back to ${Q(e.short)}</button>`),lt();let T=()=>{q(`existing`).innerHTML=g.length?`<h2>Waiting orders for this coin</h2><ul class="list">${g.map(e=>`<li><span>${x(e.index)}</span><code>${e.kind===`initial`?`💰 initial`:`all`} at ${lp(e.x)} → ${H(Number(e.taking))} SOL</code></li>`).join(``)}</ul><button id="manage">See or cancel auto-sells</button>`:``,g.length&&J(`manage`,()=>gp().catch($))},E=(t=!1)=>{document.querySelectorAll(`#kindSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===_)),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===v)),q(`amt`).textContent=b||`0`,q(`unit`).textContent=v===`x`?`x`:`%`,q(`ticks`).innerHTML=v===`x`?`<span>1x</span><span>7x</span><span>25x</span>`:`<span>+0%</span><span>+600%</span><span>+2400%</span>`,t||(q(`slider`).value=String(fp(y)));let n=h();q(`nowX`).textContent=n===null?`no live price`:`${lp(n)} (${n>=1?`▲ +`:`▼ −`}${Math.abs(Math.round((n-1)*1e3)/10)}%)`;let r=m(),i=C(),a=i.filter(w),o=q(`go`),s=``,c=``;r?y<=1?c=_===`initial`?`Pick more than 1x: at 1x getting back what you paid means selling all of it.`:`Pick more than 1x.`:n!==null&&y<=n&&(c=`That's below today's price (${lp(n)}), so it would sell straight away. Use Sell on the coin screen for that.`):c=`Can't work out today's price of what you paid.`;let l=_===`all`?100:Math.round(1e4/y)/100,u=i.reduce((e,t)=>e+Number(t.taking),0),d=S(u);q(`amtNote`).textContent=c?``:`${v===`x`?up(y):lp(y)} · sells ${_===`all`?`all of it`:`${l}%`} for ≈ ${H(u)} SOL${d?` · ${Af(d)}`:``}${_===`initial`?` · ${Math.round((100-l)*100)/100}% keeps riding`:``}`,q(`plan`).innerHTML=c?``:i.map(t=>`<li><span>${x(t.wallet.index)}</span><code>${w(t)?`sell ${Ep(t.making,e.decimals)} for ${H(Number(t.taking))} SOL`:`<span class="error">skipped: worth ${Af(t.usdNow)} now, under Jupiter's $${ip} minimum</span>`}</code></li>`).join(``),!c&&!a.length?s=`Every wallet's order would be under Jupiter's $${ip} minimum (worth now). Gather the coins in fewer wallets, or pick Sell all.`:!c&&a.length<i.length&&(s=`Jupiter only takes orders worth at least $${ip} right now, so ${i.length-a.length} wallet${i.length-a.length===1?` is`:`s are`} skipped.`),q(`planNote`).textContent=c||s,q(`planNote`).classList.toggle(`error`,!!c),o.disabled=!!c||!a.length,o.textContent=c||!a.length?`Set auto-sell`:`Set auto-sell in ${a.length} wallet${a.length===1?``:`s`}`},ee=()=>{let e=Number(b)||0;y=v===`x`?e:1+e/100},te=()=>{b=String(v===`x`?Math.round(y*100)/100:Math.round((y-1)*1e4)/100)};document.querySelectorAll(`#kindSeg button`).forEach(e=>e.addEventListener(`click`,()=>{N(),_=e.dataset.v,E()})),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.addEventListener(`click`,()=>{N(),v=e.dataset.v,te(),E()})),Gu(e=>{if(e===`back`)b=b.slice(0,-1);else if(e===`dot`)b=b.includes(`.`)?b:(b||`0`)+`.`;else if(/\d/.test(e)){let[,t]=b.split(`.`);if(t!==void 0&&t.length>=2||b.replace(`.`,``).length>=7)return;b=b===`0`?e:b+e}ee(),E()}),q(`slider`).addEventListener(`input`,()=>{y=dp(Number(q(`slider`).value)),te(),E(!0)}),J(`back`,()=>np(e).catch($)),J(`go`,()=>{let t=C().filter(w);if(!t.length)return;let n={kind:_,x:y};Zu(`Enter your PIN to set the auto-sell`,r=>mp(r,e,t,n).catch($))}),T(),E();let D=q(`nowX`);(async()=>{for(;D.isConnected;)await new Promise(e=>setTimeout(e,5e3)),D.isConnected&&!document.hidden&&(await p(),D.isConnected&&E())})().catch(()=>{})}async function mp(e,t,n,r){yu();let i=nd(e,Math.max(...n.map(e=>e.wallet.index))+1),a=e=>e===0?`Main`:`#${e}`;K(`
    <h1>Setting auto-sell…</h1>
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${a(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let o=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,s=0;await vp(n,wf,async e=>{let n=q(`status-${e.wallet.index}`);try{n.textContent=`placing the order…`;let a=Tf(e.wallet.address),c=await Er(W,e.wallet.address,t.mint,e.making,e.taking);if(!c.transaction)throw Error(`Jupiter didn't send an order to sign.`);let l=await Or(W,await Cf(yr(c.transaction),i[e.wallet.index],{sol:xf,mint:t.mint,coins:e.making},a),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter's order didn't go through (code ${l.code}).`);s++,await cp(n=>[...n,{order:c.order??``,wallet:e.wallet.address,index:e.wallet.index,mint:t.mint,label:t.label,kind:r.kind,x:r.x,making:e.making.toString(),taking:e.taking.toString(),at:Date.now()}]),n.innerHTML=`✓ sells ${Ep(e.making,t.decimals)} at ${lp(r.x)} for ${H(Number(e.taking))} SOL · ${o(l.signature,`view`)}`}catch(e){n.innerHTML=`<span class="error">✗ ${Q(hp(e))}</span>`}}),Qc(n.map(e=>e.wallet.address)).catch(()=>{}),i.forEach(e=>e.secret.fill(0)),M(s?`success`:`error`),q(`after`).innerHTML=`<p><b>Done: auto-sell set in ${s} of ${n.length} wallets.</b>${s?` It sells when ${Q(t.label)} reaches ${lp(r.x)} what you paid.`:``}</p>
    <button id="list" class="primary">See my auto-sells</button>
    <button id="holdings">See my holdings</button>`,Zp(),J(`list`,()=>gp().catch($)),J(`holdings`,()=>Qf().catch($))}function hp(e){let t=Z(e);return/at least 5 USD/i.test(t)?`worth under $${ip} right now (Jupiter's minimum)`:/insufficient|lamports|rent/i.test(t)?`not enough SOL in this wallet for the order's fee and deposit (~0.003 SOL)`:t}async function gp(){if(G(`autoSells`,gp),!W)return Qf();let e=await ap(),t=e=>e===0?`Main`:`#${e}`;if(!e.length)return K(`
      <h1>Auto-sells</h1>
      <p class="muted">No auto-sells yet. Tap a coin in your holdings, then 🎯 Auto-sell.</p>
      <button id="holdings" class="primary">See my holdings</button>`),J(`holdings`,()=>Qf().catch($));Y(`Checking your orders on Jupiter…`);let n=[...new Set(e.map(e=>e.wallet))],r=new Map,i=new Map,a=!1;await Promise.all(n.map(async t=>{try{for(let e of await kr(W,t,`active`))r.set(e.orderKey,e);if(e.some(e=>e.wallet===t&&!r.has(e.order)))for(let e of await kr(W,t,`history`))i.set(e.orderKey,e)}catch{a=!0}}));let o=JSON.parse(await j.get(Ql).catch(()=>null)||`{}`),s=!1,c=e=>{if(r.has(e.order))return`waiting`;let t=i.get(e.order);return t?/complete|fill/i.test(t.status)?`sold`:`cancelled`:`unknown`};for(let t of e)t.kind===`initial`&&c(t)===`sold`&&o[t.mint]&&!o[t.mint].out&&(o[t.mint].out=!0,s=!0);s&&await j.set(Ql,JSON.stringify(o)),a||await op(e.filter(e=>[`waiting`,`unknown`].includes(c(e))));let l=e.filter(e=>c(e)===`waiting`),u=e=>({waiting:`waiting`,sold:`✓ sold`,cancelled:`cancelled`,unknown:a?`couldn't check`:`not found on Jupiter`})[c(e)];K(`
    <h1>Auto-sells</h1>
    <ul class="list">${e.map((e,n)=>`<li><span>${t(e.index)}</span><code><b>${Q(e.label)}</b> · ${e.kind===`initial`?`💰 sell initial`:`sell all`} at ${lp(e.x)}<br><small>${H(Number(e.taking))} SOL · ${u(e)}</small>${c(e)===`waiting`?`<br><button type="button" class="cancel small" data-i="${n}">Cancel</button>`:``}</code></li>`).join(``)}</ul>
    ${a?`<p class="error">Couldn't reach Jupiter for every wallet. Try Refresh.</p>`:``}
    ${l.length>1?`<button id="cancelAll" class="danger">Cancel all ${l.length}</button>`:``}
    <p class="muted">Cancelling gives the coins back to the wallet.</p>
    <button id="refresh" class="primary">Refresh</button>
    <button id="holdings">See my holdings</button>`),J(`refresh`,()=>gp().catch($)),J(`holdings`,()=>Qf().catch($)),document.querySelectorAll(`button.cancel`).forEach(t=>t.addEventListener(`click`,()=>{let n=e[Number(t.dataset.i)];Zu(`Enter your PIN to cancel`,e=>_p(e,[n]).catch($))})),l.length>1&&J(`cancelAll`,()=>Zu(`Enter your PIN to cancel them all`,e=>_p(e,l).catch($)))}async function _p(e,t){yu();let n=nd(e,Math.max(...t.map(e=>e.index))+1),r=e=>e===0?`Main`:`#${e}`;K(`
    <h1>Cancelling…</h1>
    <ul class="list">${t.map((e,t)=>`<li><span>${r(e.index)}</span><code id="status-${t}">${Q(e.label)} · waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let i=0,a=new Set,o=new Map;t.forEach((e,t)=>o.set(e.wallet,[...o.get(e.wallet)??[],t])),await vp([...o.values()],wf,async e=>{for(let[r,o]of e.entries()){let e=t[o],s=q(`status-${o}`);try{s.textContent=`cancelling…`;let t=n[e.index];if(t.address!==e.wallet)throw Error(`this wallet's number changed; cancel it on jup.ag instead`);let o=r===0?Tf(e.wallet):void 0,c=await Dr(W,e.wallet,e.order),l=await Or(W,await Cf(yr(c.transaction),t,{sol:xf},o),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter didn't cancel it (code ${l.code}).`);i++,a.add(e.order),s.innerHTML=`✓ cancelled, coins back in the wallet · <a href="#" class="tx" data-sig="${l.signature}">view</a>`}catch(e){s.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}}),Qc([...o.keys()]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),a.size&&await cp(e=>e.filter(e=>!a.has(e.order))),M(i?`success`:`error`),q(`after`).innerHTML=`<p><b>Cancelled ${i} of ${t.length}.</b></p><button id="list" class="primary">See my auto-sells</button>`,Zp(),J(`list`,()=>gp().catch($))}async function vp(e,t,n){let r=Array(e.length),i=0;return await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;i<e.length;){let t=i++;r[t]=await n(e[t],t)}})),r}var yp=12;function bp(e,t,n,r){if(e<5e3)return null;let i=t.filter(e=>e.raw===0n).slice(0,yp),a=i.reduce((e,t)=>e+t.lamports,0),o=t.some(e=>e.raw>0n&&!r?.has(e.mint))?rf:0,s=n?Math.max(0,e+a-qo-o):0;return!i.length&&!s||!i.length&&s<5e4?null:{close:i,refund:a,keep:o,send:s}}async function xp(e,t,n){let r=await ec(Es(e,[...n.close.map(t=>ks(t,e.address,e.address)),...n.send>0?[Os(e.address,t.address,n.send)]:[]],await Xs())),i=await rc(r);if(i!==`confirmed`)throw Error(`${i===`failed`?`failed`:`is taking long`} (${r})`);return r}function Sp(e){let[t,...n]=[e.send?`sends ${H(e.send)} SOL to main`:``,e.close.length?`gets back ${H(e.refund)} SOL in deposits from ${e.close.length} empty coin account${e.close.length===1?``:`s`}`:``,e.keep?`keeps ${H(e.keep)} SOL to sell its coins later`:``].filter(Boolean);return t+(n.length?`<br><small>${n.join(`<br>`)}</small>`:``)}async function Cp(){G(`sweep`,Cp);let e=await sd();if(!e)return X();let[t,...n]=e;Y(`Checking your side wallets…`);let r=await nl(n.map(e=>e.address)),i=n.map((e,t)=>({wallet:e,plan:bp(r[t].lamports,r[t].accounts,!0)})).filter(e=>e.plan!==null),a=i.reduce((e,t)=>e+t.plan.send,0);K(`
    <h1>Send side-wallet SOL to main</h1>
    ${i.length?`<ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code>${Sp(e.plan)}</code></li>`).join(``)}</ul>
           <p><b>Total to main: ${H(a)} SOL</b></p>
           <p class="muted">Empty coin accounts are closed so their deposits come back too.</p>
           <button id="go" class="primary">Enter PIN and send</button>`:`<p class="muted">There's no SOL to send back right now. Side wallets that hold coins keep ${H(rf)} SOL so they can sell them later.</p>`}
    <button id="cancel">Back to my wallets</button>`),J(`cancel`,X),i.length&&J(`go`,()=>Zu(`Enter your PIN to send`,async e=>{let n=nd(e,Math.max(...i.map(e=>e.wallet.index))+1);K(`
        <h1>Sending to main…</h1>
    ${ge()}
        <ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),Eu();let r=0;await vp(i,wf,async e=>{let i=q(`status-${e.wallet.index}`);try{i.textContent=`sending…`;let a=await xp(n[e.wallet.index],t,e.plan);r++,i.innerHTML=`✓ ${e.plan.send?`sent ${H(e.plan.send)} SOL`:`got back ${H(e.plan.refund)} SOL`} · <a href="#" class="tx" data-sig="${a}">view</a>`}catch(e){i.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),Qc([t.address,...i.map(e=>e.wallet.address)]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),M(r?`success`:`error`),r&&await it(`MERGED`),q(`after`).innerHTML=`<p><b>Done: ${r} of ${i.length} wallets.</b></p><button id="home" class="primary">Back to my wallets</button>`,Zp(),J(`home`,X)}))}var wp=e=>/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(e);function Tp(e,t){let n=e.toString().padStart(t+1,`0`),r=n.slice(0,n.length-t),i=n.slice(n.length-t).replace(/0+$/,``);return i?`${r}.${i}`:r}var Ep=(e,t)=>kf(Number(Tp(e,t)));async function Dp(e,t){if(wp(e)){let t=await sl(e);return[{mint:e,label:t?.name?`${t.name}${t.symbol?` (${t.symbol})`:``}`:await gs(e)??Mu(e)}]}let n=e=>(e??``).toLowerCase().replace(/[^a-z0-9]/g,``),r=n(e),i=async e=>{if(!e)return[];let t=(await Promise.all(e.map(e=>al(e)))).flat().filter(e=>!Mf(e)),i=e=>{let n=new Map;for(let r of t)e(r)&&n.set(r.mint,jf(r));return[...n].map(([e,t])=>({mint:e,label:t}))},a=i(e=>n(e.symbol)===r||n(e.name)===r);return a.length||r.length<3?a:i(e=>n(e.symbol).startsWith(r)||n(e.name).startsWith(r))},a=t.map(e=>e.address),o=await i(await Zc(a));return o.length?o:i(await nl(a))}async function Op(e,t){let n=new Set((await ap()).map(e=>e.wallet)),r=e.filter(e=>n.has(e.address)),i=await Promise.all(r.map(e=>kr(W,e.address,`active`).catch(()=>[])));return r.flatMap((e,n)=>i[n].filter(e=>e.inputMint===t).map(t=>({wallet:e.address,order:t.orderKey,raw:BigInt(t.rawRemainingMakingAmount||t.rawMakingAmount||`0`)})))}async function kp(e,t,n){let r=async()=>(await Js(e.address,t)).reduce((e,t)=>e+t.raw,0n),i=await r();for(let t of n){let n=await Dr(W,e.address,t.order),r=await Or(W,await Cf(yr(n.transaction),e,{sol:xf}),n.requestId);if(r.status!==`Success`)throw Error(r.error??`Jupiter didn't cancel the auto-sell order (code ${r.code}).`)}let a=i+n.reduce((e,t)=>e+t.raw,0n);for(let e=0;e<20;e++){let e=await r();if(e>=a)return e;await new Promise(e=>setTimeout(e,500))}return r()}var Ap=5e4;async function jp(e,t,n,r,i,a,o=!1){if(G(`sell:${i?.mint??e}:${r?.join(`,`)??``}`,()=>jp(e,t,n,r,i,a,o)),!W)return K(`
      <h1>Open this from the bot</h1>
      <p>To sell, send <b>sell &lt;coin name or address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);let s=await sd();if(!s)return X();let[c]=s,l=i,u=e=>cl(e).then(t=>gc(s.map(e=>e.address),e,t)),d=!l&&wp(e)?u(e):null;if(d?.catch(()=>{}),!l){Y(wp(e)?`Finding the coin in your wallets…`:`Looking for ${Q(e)} in your wallets…`);let i=await Dp(e,s);if(!i.length)return K(`
        <h1>Coin not found</h1>
        <p>None of your wallets hold a coin called <b>${Q(e)}</b>. Check the name in <b>holdings</b>, or send <b>sell</b> with the coin's address instead.</p>
        <button id="home" class="primary">Back to my wallets</button>`),J(`home`,X);if(i.length>1)return K(`
        <h1>Which ${Q(e)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${i.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${Mu(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(o=>o.addEventListener(`click`,()=>jp(e,t,n,r,i[Number(o.dataset.i)],a).catch($))),J(`home`,X);l=i[0]}Y(`Checking how much each wallet holds…`);let f=l.mint,[p,m]=await Promise.all([d&&f===e?d:u(f),o?Op(s,f):Promise.resolve([])]),h=e=>m.filter(t=>t.wallet===e).reduce((e,t)=>e+t.raw,0n),g=[],_=[];s.forEach((e,n)=>{if(r&&!r.includes(e.index))return;let i=p.raw[n]+h(e.address);if(i===0n)return void(r&&_.push(e.index));let a=t===100?i:i*BigInt(Math.round(t*100))/10000n,o=p.decimals??0;a>0n&&g.push({wallet:e,balance:p.lamports[n],raw:i,sell:a,decimals:o,orders:m.filter(t=>t.wallet===e.address)})});let v=e=>e===0?`Main`:`#${e}`,y=e=>e.balance>=Ap,b=r?.filter(e=>e>=s.length)??[],x=[_.length?`${_.map(v).join(`, `)} ${_.length===1?`doesn't`:`don't`} hold this coin.`:``,b.length?`You don't have ${b.map(v).join(`, `)}.`:``].filter(Boolean);if(K(`
    <h1>Sell ${Q(l.label)}</h1>
    <div class="card"><div class="label">Coin address</div><div class="address" id="mint"></div></div>
    ${m.length?`<p class="muted">Includes the coins in your auto-sell orders: those orders are cancelled first, then the coins are sold.</p>`:``}
    ${g.length?`<h2>Selling ${t===100?`all of it`:`${t}%`} from <span id="picked"></span></h2>
           <p class="muted">Untick any wallet you want to leave out.</p>
           <ul class="list">${g.map((e,n)=>`<li><label class="pickrow"><input type="checkbox" class="sellbox" data-i="${n}" ${y(e)?`checked`:`disabled`}>
                 <span>${v(e.wallet.index)}</span></label><code>sells <b>${lm(l.mint,Number(Tp(e.sell,e.decimals)))}</b>${t<100?` of ${lm(l.mint,Number(Tp(e.raw,e.decimals)))}`:``}${e.orders?.length?`<br><small>🎯 cancels ${e.orders.length===1?`its auto-sell order`:`${e.orders.length} auto-sell orders`} first</small>`:``}${y(e)?``:`<br><small class="error">not enough SOL to pay the fee, skipped</small>`}</code></li>`).join(``)}</ul>
           ${x.length?`<p class="muted">${x.join(` `)}</p>`:``}
           ${t===100?`<p class="muted">Afterwards each wallet closes its empty ${Q(l.label)} account and gets its ~0.002 SOL deposit back.</p>`:``}
           ${n?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold other coins keep ${H(rf)} SOL to sell those later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Prices can move while the sales go through one by one.</p>
           ${g.some(y)?`<button id="go" class="primary">Enter PIN and sell</button>`:``}`:`<p class="warning">${r?`${x.join(` `)||`Those wallets don't hold this coin.`}`:`None of your wallets hold this coin.`}</p>`}
    <button id="cancel">Cancel</button>`),q(`mint`).textContent=l.mint,J(`cancel`,X),g.some(y)){let e=Array.from(document.querySelectorAll(`.sellbox`)),r=()=>e.filter(e=>e.checked).map(e=>g[Number(e.dataset.i)]),i=()=>{let e=r().length;q(`picked`).textContent=`${e} wallet${e===1?``:`s`}`,q(`go`).disabled=e===0};e.forEach(e=>e.addEventListener(`change`,i)),i(),J(`go`,()=>{let e=r();e.length&&Zu(`Enter your PIN to sell`,r=>Mp(r,l.mint,c,e,t,n,a))})}}async function Mp(e,t,n,r,i,a,o){let s=nd(e,Math.max(...r.map(e=>e.wallet.index))+1),c=e=>e===0?`Main`:`#${e}`;K(`
    <h1>Selling…</h1>
    ${ge()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${r.map(e=>`<li><span>${c(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),Eu();let l=(e,t)=>q(`status-${e}`).innerHTML=t,u=(e,t)=>q(`status-${e}`).innerHTML+=t,d=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,f=0,p=0,m=0,h={jupiter:null};await vp(r,wf,async e=>{let r=s[e.wallet.index];if(e.orders?.length)try{l(e.wallet.index,`cancelling the auto-sell order…`);let n=await kp(r,t,e.orders),a=new Set(e.orders.map(e=>e.order));if(await cp(e=>e.filter(e=>!a.has(e.order))),e.raw=n,e.sell=i===100?n:n*BigInt(Math.round(i*100))/10000n,e.sell<=0n)throw Error(`the coins didn't come back from the order yet; try again in a moment`)}catch(t){l(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`);return}let o=e.orders?.length?void 0:Tf(r.address),c=await qp(e,t,r,i,h,l,d,o);if(c&&f++,i!==100&&!a)return;let g=a&&e.wallet.index!==0;try{let a=0,o=[];for(let n=0;n<5&&([[a],o]=await Promise.all([Ss([e.wallet.address]),Js(e.wallet.address)]),c&&i===100&&!o.every(e=>e.mint!==t||e.raw===0n));n++)await new Promise(e=>setTimeout(e,500));let s=bp(a,o,g);if(!s)return;u(e.wallet.index,`<br><small>${g?`sending to main…`:`getting the deposit back…`}</small>`);let l=await xp(r,n,s);p+=s.send,m+=s.refund,q(`status-${e.wallet.index}`).querySelector(`small:last-of-type`).innerHTML=`${s.send?`sent ${H(s.send)} SOL to main`:`got back ${H(s.refund)} SOL deposit`} · ${d(l,`view`)}`}catch(t){u(e.wallet.index,`<br><small class="error">✗ collecting: ${Q(Z(t))}</small>`)}}),Qc([n.address,...r.map(e=>e.wallet.address)]).catch(()=>{}),s.forEach(e=>e.secret.fill(0)),M(f?`success`:`error`),f&&await it(`PRINTED`),f&&o&&await o().catch(()=>{}),q(`after`).innerHTML=`<p><b>Done: sold in ${f} of ${r.length} wallets.</b>${m?` Got back ${H(m)} SOL in deposits.`:``}${p?` Sent ${H(p)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,Zp(),J(`holdings`,()=>Qf().catch($)),J(`home`,X)}var Np=new Map;function Pp(e){return Np.has(e)||Np.set(e,Rc(e)),Np.get(e)}var Fp=new Map;function Ip(e){return Fp.has(e)||Fp.set(e,gs(e).then(t=>t?.match(/\(([^)]+)\)$/)?.[1]??t??Mu(e)).catch(()=>Mu(e))),Fp.get(e)}var Lp=[15,30],Rp=21e5,zp=/custom program error: 0x(179a|1798|1774)\b/;async function Bp(e,t){let[n]=await Bs([t]);return Hs(n)}async function Vp(e,t,n){for(let r=0;r<20;r++){let r=await Bp(e,t);if(r!==n)return r;await new Promise(e=>setTimeout(e,400))}return Bp(e,t)}async function Hp(e,t,n,r){try{if(await Vp(e.address,t,r)!==0n)return;await ec(Es(e,[Gs(t,e.address,e.address,n)],await Xs()))}catch{}}async function Up(e,t,n,r,i,a){let o=Bc(t.address,e,n===`buy`?`coin`:`quote`),s=Bc(t.address,e,n===`buy`?`quote`:`coin`),c=n===`buy`?e.quoteProgram:e.mintProgram,l=async a=>Es(t,[...zc(t.address,e,n,r,a),...i?[Gs(s,t.address,t.address,c)]:[]],await Xs()),u=await Bp(t.address,o);for(let e=0;;e++){let n=Lp[e],r=await Vs(await l(1n),[o]);if(r.err){let e=r.logs.filter(e=>/Error|failed/i.test(e)).slice(-1)[0]??JSON.stringify(r.err);throw Error(`pump.fun turned the trade down before it ran (${e}).`)}let i=Hs(r.accounts[0])-u;if(i<=0n)throw Error(`pump.fun's swap would give nothing back.`);let s=i*BigInt(100-n)/100n||1n;try{let e=await ec(await l(s)),n=await rc(e);if(n!==`confirmed`)throw Error(`the trade ${n===`failed`?`failed`:`is taking long`} (${e})`);return{signature:e,got:await Vp(t.address,o,u)-u}}catch(t){let n=Lp[e+1];if(!(n&&zp.test(Z(t))))throw t;a(`price jumped, trying again with ${n}% room…`)}}}async function Wp(e,t,n,r){let i=await _r(W,t,n,r.toString(),e.address);if(!i.transaction)throw Error(i.errorMessage??`Jupiter couldn't make that swap.`);let a=t===`So11111111111111111111111111111111111111112`?{sol:Number(r)+xf}:{sol:xf,mint:t,coins:r},o=await vr(W,await Cf(yr(i.transaction),e,a),i.requestId);if(o.status!==`Success`)throw Error(o.error??`Jupiter's swap didn't go through (code ${o.code}).`);return{signature:o.signature,out:i.outAmount}}async function Gp(e,t,n,r,i){let a=Q(await Ip(e.quote)),o=Bc(t.address,e,`quote`),s=n-Rp;if(s<of)return r(`<span class="error">✗ too little SOL for this coin: it's priced in ${a}, which needs an extra ~0.002 SOL account</span>`),!1;let c=await Bp(t.address,o),l;try{r(`this coin is priced in ${a}: swapping ${H(s)} SOL for ${a}…`),l=(await Wp(t,Xn,e.quote,BigInt(s))).signature}catch(e){return r(`<span class="error">✗ couldn't get ${a} to buy with (${Q(Z(e))}). Nothing was bought.</span>`),!1}let u=await Vp(t.address,o,c)-c;if(u<=0n)return r(`<span class="error">✗ the ${a} swap went through but nothing arrived yet · ${i(l,`view`)}</span>`),!1;try{r(`got ${a} · buying the coin on pump.fun…`);let{signature:n}=await Up(e,t,`buy`,u,c===0n,r);return r(`✓ bought with ${H(s)} SOL (via ${a}) · ${i(l,`swap`)} · ${i(n,`buy`)}`),!0}catch(n){let s=Q(Z(n));try{r(`buy failed, swapping the ${a} back to SOL…`);let n=await Wp(t,e.quote,Xn,u);c===0n&&await Hp(t,o,e.quoteProgram,u),r(`<span class="error">✗ ${s}</span><br><small>Swapped the ${a} back to SOL${n.out?` (~${H(Number(n.out))} SOL)`:``} · ${i(n.signature,`view`)}</small>`)}catch(e){r(`<span class="error">✗ ${s}</span><br><small class="error">This wallet now holds the ${a} it got (${i(l,`view`)}); swapping it back failed too (${Q(Z(e))}). Sell it with "sell ${a}".</small>`)}return!1}}async function Kp(e,t,n,r,i){let a=Q(await Ip(e.quote)),o=Bc(t.address,e,`quote`),s=await Bp(t.address,o),c;try{r(`this coin is priced in ${a}: selling it for ${a} on pump.fun…`),c=await Up(e,t,`sell`,n.sell,!1,r)}catch(e){return r(`<span class="error">✗ ${Q(Z(e))}</span>`),!1}try{r(`sold for ${a} · swapping the ${a} to SOL…`);let l=await Wp(t,e.quote,Xn,c.got);return s===0n&&await Hp(t,o,e.quoteProgram,c.got),r(`✓ sold ${Ep(n.sell,n.decimals)}${l.out?` for ~${H(Number(l.out))} SOL`:``} (via ${a}) · ${i(c.signature,`sale`)} · ${i(l.signature,`swap`)}`),!0}catch(e){return r(`✓ sold ${Ep(n.sell,n.decimals)} for ${a} · ${i(c.signature,`view`)}<br><small class="error">Swapping the ${a} to SOL failed (${Q(Z(e))}). This wallet holds it now: sell it with "sell ${a}".</small>`),!0}}async function qp(e,t,n,r,i,a,o,s){try{a(e.wallet.index,`selling…`);let c=null;if(!i.jupiter)try{if(c=await _r(W,t,Xn,e.sell.toString(),n.address),!c.transaction)throw Error(c.errorMessage??`Jupiter couldn't find a way to sell this coin.`)}catch(e){i.jupiter=Z(e),c=null}if(c){let r=await vr(W,await Cf(yr(c.transaction),n,{sol:xf,mint:t,coins:e.sell},s),c.requestId);if(r.status!==`Success`)throw Error(r.error??`The sale didn't go through (code ${r.code}).`);let i=c.outAmount?` for ~${H(Number(c.outAmount))} SOL`:``;return a(e.wallet.index,`✓ sold ${Ep(e.sell,e.decimals)}${i} · ${o(r.signature,`view`)}`),!0}let l=await Pp(t);if(l)return await Kp(l,n,e,t=>a(e.wallet.index,t),o);a(e.wallet.index,`selling through pump.fun…`);let u=r===100?`100%`:Tp(e.sell,e.decimals),d=await Xp(e.wallet.index,a,i.jupiter,e=>Nr(n.address,t,u,e),n,()=>({sol:xf,mint:t,coins:r===100?void 0:e.sell}),s),f=await rc(d);return f===`confirmed`?(a(e.wallet.index,`✓ sold ${Ep(e.sell,e.decimals)} via pump.fun · ${o(d,`view`)}`),!0):(a(e.wallet.index,`<span class="error">✗ sale ${f===`failed`?`failed`:`is taking long`}</span> · ${o(d,`check`)}`),!1)}catch(t){return a(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`),!1}}async function Jp(e,t,n){if(G(`sellAll:${n?.join(`,`)??``}`,()=>Jp(e,t,n)),!W)return K(`
      <h1>Open this from the bot</h1>
      <p>To sell everything, send <b>sell all</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);let r=await sd();if(!r)return X();let[i]=r,a=r.filter(e=>!n||n.includes(e.index));Y(`Checking every coin in every wallet…`);let o=await nl(a.map(e=>e.address)),s=o.map(e=>e.lamports),c=o.map(e=>e.accounts),l=await Promise.all(o.map(e=>al(e))),u=new Map;l.flat().forEach(e=>u.set(e.mint,e));let d=new Map,f=0;a.forEach((t,n)=>{let r=new Map;for(let e of c[n]){if(e.raw===0n)continue;let t=r.get(e.mint)??{raw:0n,decimals:e.decimals};t.raw+=e.raw,r.set(e.mint,t)}for(let[i,{raw:a,decimals:o}]of r){if(i===`So11111111111111111111111111111111111111112`)continue;let r=u.get(i);if(r&&Mf(r)){f++;continue}let c=e===100?a:a*BigInt(Math.round(e*100))/10000n;if(c===0n)continue;let l=d.get(i)??{mint:i,label:r?jf(r):Mu(i),logo:r?.logo,usd:null,rows:[]};r?.usd!=null&&(l.usd=(l.usd??0)+r.usd),l.rows.push({wallet:t,balance:s[n],raw:a,sell:c,decimals:o}),d.set(i,l)}});let p=[...d.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),m=e=>e===0?`Main`:`#${e}`,h=e=>e.balance>=Ap,g=e=>e.rows.filter(h);if(K(`
    <h1>Sell all coins</h1>
    ${p.length?`<h2>Selling ${e===100?`everything`:`${e}% of each`} · <span id="picked"></span></h2>
           <p class="muted">Every coin is checked. Untick any you want to keep.</p>
           <ul class="list coins">${p.map((e,t)=>{let n=e.rows.filter(e=>!h(e));return`<li><input type="checkbox" class="coinbox" data-i="${t}" ${g(e).length?`checked`:`disabled`}>${ct(e.label,e.logo)}<div class="grow"><b>${Q(e.label)}</b><small>from ${g(e).map(e=>m(e.wallet.index)).join(`, `)||`no wallet`}${n.length?`</small><small class="error">${n.map(e=>m(e.wallet.index)).join(`, `)}: not enough SOL for the fee, skipped`:``}</small></div><div class="right">${e.usd===null?``:Af(e.usd)}</div></li>`}).join(``)}</ul>
           ${f?`<p class="muted">${f} junk coin${f===1?``:`s`} left alone: worthless ads strangers send to wallets.</p>`:``}
           ${e===100?`<p class="muted">Afterwards each wallet closes its empty coin accounts and gets their ~0.002 SOL deposits back.</p>`:``}
           ${t?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold coins keep ${H(rf)} SOL to sell them later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Sales go through one at a time, so prices can move along the way.</p>
           <button id="go" class="primary">Enter PIN and sell everything</button>`:`<p class="warning">${n?`Those wallets don't hold any coins.`:`Your wallets don't hold any coins to sell.`}</p>`}
    <button id="cancel">Cancel</button>`),lt(),J(`cancel`,X),!p.length)return;let _=Array.from(document.querySelectorAll(`.coinbox`)),v=()=>_.filter(e=>e.checked).map(e=>p[Number(e.dataset.i)]),y=()=>{let e=v().length;q(`picked`).textContent=`${e} coin${e===1?``:`s`}`,q(`go`).disabled=e===0};_.forEach(e=>e.addEventListener(`change`,y)),y(),J(`go`,()=>{let n=v().map(e=>({...e,rows:g(e)}));n.length&&Zu(`Enter your PIN to sell everything`,r=>Yp(r,i,n,e,t))})}async function Yp(e,t,n,r,i){let a=[...new Map(n.flatMap(e=>e.rows.map(e=>[e.wallet.index,e.wallet]))).values()].sort((e,t)=>e.index-t.index),o=nd(e,Math.max(...a.map(e=>e.index))+1),s=e=>e===0?`Main`:`#${e}`,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;K(`
    <h1>Selling everything…</h1>
    ${ge()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${n.map((e,t)=>`<h2>${Q(e.label)}</h2><ul class="list">${e.rows.map(e=>`<li><span>${s(e.wallet.index)}</span><code id="status-${t}-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>`).join(``)}
    <div id="cleanup"></div>
    <div id="after"></div>`),Eu();let l=0,u=0,d=0,f=0,p=new Map(n.map(e=>[e.mint,{jupiter:null}])),m=r===100||i;m&&(q(`cleanup`).innerHTML=`<h2>Cleaning up</h2><ul class="list">${a.map(e=>`<li><span>${s(e.index)}</span><code id="clean-${e.index}">waiting</code></li>`).join(``)}</ul>`),await vp(a,wf,async e=>{let a=o[e.index],s=n.flatMap((t,n)=>t.rows.filter(t=>t.wallet.index===e.index).map(e=>({coin:t,ci:n,row:e})));for(let[e,{coin:t,ci:n,row:i}]of s.entries()){let o=(e,t)=>q(`status-${n}-${e}`).innerHTML=t;u++;let s=e===0?Tf(a.address):void 0;await qp(i,t.mint,a,r,p.get(t.mint),o,c,s)&&l++}if(!m)return;let h=q(`clean-${e.index}`),g=i&&e.index!==0;try{let n=0,i=[],o=new Set(s.map(e=>e.coin.mint));for(let t=0;t<5&&([[n],i]=await Promise.all([Ss([e.address]),Js(e.address)]),!(r!==100||i.every(e=>!o.has(e.mint)||e.raw===0n)));t++)await new Promise(e=>setTimeout(e,500));let l=bp(n,i,g);if(!l){h.textContent=`nothing to do`;return}h.textContent=g?`sending to main…`:`getting deposits back…`;let u=await xp(a,t,l);d+=l.send,f+=l.refund,h.innerHTML=`${l.send?`sent ${H(l.send)} SOL to main`:`got back ${H(l.refund)} SOL in deposits`} · ${c(u,`view`)}`}catch(e){h.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),Qc([t.address,...a.map(e=>e.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),M(l?`success`:`error`),l&&await it(`PRINTED`),q(`after`).innerHTML=`<p><b>Done: ${l} of ${u} sales went through.</b>${f?` Got back ${H(f)} SOL in deposits.`:``}${d?` Sent ${H(d)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,Zp(),J(`holdings`,()=>Qf().catch($)),J(`home`,X)}async function Xp(e,t,n,r,i,a,o){for(let s=0;;s++){let{slippage:c,share:l}=jr[s],u;try{u=await r(c,l)}catch(e){throw Error(`${n} · ${Z(e)}`)}try{return await ec(await Cf(u,i,a(c),s===0?o:void 0))}catch(r){if(/custom program error: 0x17af\b/.test(Z(r)))throw Error(`Nothing was spent. This coin is priced in another coin (like PUMP) instead of SOL, and pump.fun's SOL route can't buy or sell it. Jupiter couldn't either (${n??`no route`}). Try again later, once Jupiter lists it, or trade it on pump.fun itself.`);let i=jr[s+1];if(!(r instanceof $s&&r.slippage&&i))throw r;t(e,`price jumped, trying again with ${i.slippage}% room…`)}}}function Zp(){document.querySelectorAll(`.tx:not([data-bound])`).forEach(e=>{e.dataset.bound=`1`,e.addEventListener(`click`,t=>{t.preventDefault(),De(oc(e.dataset.sig))})})}function Q(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var Qp=4;function $p(e){return e.index===0?`Main`:`#${e.index}`}function em(e,t){let n=Math.min(t,20),[r,i=``]=e.toFixed(n).split(`.`);return BigInt(r+i)*10n**BigInt(t-n)}function tm(e,t){K(`
    <h1>${Q(e)}</h1>
    <p class="warning">${t}</p>
    <button id="home" class="primary">Back to my wallets</button>`),J(`home`,X)}async function nm(e,t){G(`send:${JSON.stringify(e)}`,()=>nm(e,t));let n=await sd();if(!n)return X();let[r]=n,i;if(/^\d+$/.test(e.to)){let t=n[Number(e.to)];if(!t)return tm(`No such wallet`,`You don't have #${Q(e.to)}. Your wallets go from main to #${n.length-1}.`);i={address:t.address,label:$p(t),mine:t}}else{let t=n.find(t=>t.address===e.to);if(t)i={address:t.address,label:$p(t),mine:t};else{if(!wp(e.to)||!js(e.to))return tm(`Not a wallet address`,`That address can't receive SOL or coins: it isn't a normal wallet. Nothing was sent.`);Y(`Checking the address…`);let t=await Rs(e.to);if(t&&t.owner!==`11111111111111111111111111111111`)return tm(`Not a wallet address`,`That address belongs to a coin or a program, not a person's wallet. Anything sent there would be lost, so nothing was sent.`);i={address:e.to,label:Mu(e.to),mine:null}}}let a=e.what===`sol`?`sol`:e.what===`*`?`all`:`coin`,o=[],s=n.filter(t=>t!==i.mine&&(!e.only||e.only.includes(t.index))&&!(e.side&&t.index===0));if(e.only){let t=e.only.filter(e=>e>=n.length);t.length&&o.push(`You don't have ${t.map(e=>`#${e}`).join(`, `)}.`)}else a===`sol`&&e.amount!==null&&i.mine?.index!==0&&!e.side&&(s=[r]);if(!s.length)return tm(`Nothing to send from`,`There's no other wallet to send from.`);let c=t;if(a===`coin`&&!c){Y(wp(e.what)?`Finding the coin in your wallets…`:`Looking for ${Q(e.what)} in your wallets…`);let t=await Dp(e.what,n);if(!t.length)return tm(`Coin not found`,`None of your wallets hold a coin called <b>${Q(e.what)}</b>. Check the name in <b>holdings</b>, or use the coin's address.`);if(t.length>1)return K(`
        <h1>Which ${Q(e.what)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${t.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${Mu(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(n=>n.addEventListener(`click`,()=>nm(e,t[Number(n.dataset.i)]).catch($))),J(`home`,X);c=t[0]}Y(`Checking what each wallet holds…`);let[l,[u]]=await Promise.all([nl(s.map(e=>e.address)),Ss([i.address])]),d=l.map(e=>e.lamports),f=l.map(e=>e.accounts),p=a===`all`?await Promise.all(l.map(e=>al(e))):[],m=new Map;p.flat().forEach(e=>m.set(e.mint,e));let h=new Set([...m.values()].filter(Mf).map(e=>e.mint)),g=e=>f[e].some(e=>e.raw>0n&&!h.has(e.mint)),_=s.map((e,t)=>({wallet:e,balance:d[t],coins:[],sol:0,allSol:!1,skipped:[]}));if(a!==`sol`){if(_.forEach((t,n)=>{for(let r of f[n]){if(r.raw===0n||h.has(r.mint)||c&&r.mint!==c.mint)continue;let n=m.get(r.mint),i=e.pct?r.raw*BigInt(Math.round(e.pct*100))/10000n:r.raw;i>0n&&t.coins.push({account:r,amount:i,label:c?.label??(n?jf(n):Mu(r.mint)),opens:0})}}),a===`coin`&&e.amount!==null){let t=_.flatMap(e=>e.coins.map(t=>({r:e,c:t}))).sort((e,t)=>t.c.account.raw>e.c.account.raw?1:-1),n=t[0]?.c.account.decimals??0,r=em(e.amount,n),i=t.reduce((e,t)=>e+t.c.account.raw,0n);if(r>i)return tm(`Not enough coins`,`${e.only?`Those wallets`:`Your wallets`} hold ${Ep(i,n)} ${Q(c.label)}, less than the ${kf(e.amount)} you asked to send. Nothing was sent.`);for(let{r:e,c:n}of t)n.amount=r<n.account.raw?r:n.account.raw,r-=n.amount,n.amount===0n&&(e.coins=e.coins.filter(e=>e!==n))}let t=new Map;for(let e of _)for(let n of e.coins)t.set(n.account.mint,Ps(i.address,n.account.mint,n.account.program));let n=[...t.keys()],r=n.length?await Ss(n.map(e=>t.get(e))):[],o=new Set(n.filter((e,t)=>r[t]>0));for(let e of _){for(let t of e.coins)o.has(t.account.mint)||(t.opens=t.account.lamports,o.add(t.account.mint));let t=Math.ceil(e.coins.length/Qp),n=e.coins.slice(0,Qp).reduce((e,t)=>e+t.opens,0);e.coins.length&&e.balance<n+t*5e3&&(e.skipped.push(`not enough SOL to move its coins (needs about ${H(n+t*qo)} SOL to open the coin's account at ${Q(i.label)}, has ${H(e.balance)})`),e.coins=[])}}let v=e=>{let t=Math.ceil(e.coins.length/Qp),n=e.coins.reduce((e,t)=>e+(t.amount===t.account.raw?t.account.lamports:0),0);return e.balance-t*qo-e.coins.reduce((e,t)=>e+t.opens,0)+n};if(a===`sol`||a===`all`){if(_.forEach((t,n)=>{let r=(a===`sol`||t.skipped.length>0)&&g(n),i=r?rf:0,o=v(t)-qo-i;if(o<=0){a===`sol`&&r&&t.balance>5e3&&t.skipped.push(`keeps its ${H(t.balance)} SOL: it holds coins and needs ${H(rf)} SOL to sell them`);return}let s=e.pct?Math.floor(o*e.pct/100):o;e.pct&&v(t)-5e3-s<Math.max(890880,i)&&(s=v(t)-qo-Math.max(Jo,i)),s>=5e4&&(t.sol=s),t.allSol=!e.pct&&e.amount===null}),a===`sol`&&e.amount!==null){let t=Math.round(e.amount*V),n=[..._].sort((e,t)=>t.sol-e.sol),r=n.reduce((e,t)=>e+t.sol,0);if(t>r)return tm(`Not enough SOL`,`${s.length===1?$p(s[0]):`Those wallets`} can send at most ${H(r)} SOL after fees${_.some((e,t)=>g(t))?` (wallets holding coins keep ${H(rf)} SOL to sell them)`:``}. Nothing was sent.`);for(let e of n){let n=Math.min(t,e.sol),r=e.balance-qo-n;n>0&&r>0&&r<890880&&(n=Math.max(0,e.balance-qo-Jo)),e.sol=n,t-=n}if(t>0)return tm(`Can't send that exact amount`,`Solana makes a wallet keep at least ${H(Jo)} SOL or nothing at all, so that amount doesn't fit. Try a slightly smaller amount, or "all". Nothing was sent.`)}let t=u;for(let e of[..._].sort((e,t)=>t.sol-e.sol))e.sol&&(t+e.sol<890880?(e.skipped.push(`its ${H(e.sol)} SOL is too little to start an empty wallet (Solana needs ${H(Jo)} SOL)`),e.sol=0):t+=e.sol)}let y=_.filter(e=>e.coins.length||e.sol),b=_.filter(e=>e.coins.length||e.sol||e.skipped.length),x=y.reduce((e,t)=>e+t.sol,0),S=y.reduce((e,t)=>e+t.coins.reduce((e,t)=>e+t.opens,0),0),C=a===`sol`?e.amount===null?e.pct?`Send ${e.pct}% of the SOL`:`Send all the SOL`:`Send ${kf(e.amount)} SOL`:a===`all`?`Send everything`:`Send ${e.amount===null?e.pct?`${e.pct}% of `:`all `:kf(e.amount)+` `}${Q(c.label)}`,w=e=>{let t=e.coins.slice(0,3).map(e=>`${Ep(e.amount,e.account.decimals)} ${Q(e.label)}`);return e.coins.length>3&&t.push(`${e.coins.length-3} more coin${e.coins.length===4?``:`s`}`),t.join(`<br>`)},T=a===`all`?_.reduce((e,t,n)=>e+f[n].filter(e=>e.raw>0n&&h.has(e.mint)).length,0):0;K(`
    <h1>${C}</h1>
    <div class="card"><div class="label">To ${Q(i.label)}${i.mine?.name?` · ${Q(i.mine.name)}`:``}</div><div class="address" id="dest"></div></div>
    ${i.mine?``:`<p class="warning">This isn't one of your wallets. Check every letter of the address: sends can't be undone.</p>`}
    ${b.length?`<ul class="list">${b.map(e=>`<li><span>${$p(e.wallet)}</span><code>${[w(e),e.sol?`${H(e.sol)} SOL`:``].filter(Boolean).join(`<br>`)||`nothing`}${e.skipped.length?`<br><small class="error">${e.skipped.join(`<br>`)}</small>`:``}</code></li>`).join(``)}</ul>`:``}
    ${y.length&&x?`<p><b>SOL to ${Q(i.label)}: ${H(x)}</b></p>`:``}
    ${o.length?`<p class="muted">${o.join(` `)}</p>`:``}
    ${S?`<p class="muted">${Q(i.label)} doesn't have an account for some of these coins yet. Opening one costs about 0.002 SOL each (${H(S)} SOL in all), paid by the sending wallet. Emptied coin accounts are closed, so senders get their own deposits back.</p>`:``}
    ${a===`sol`&&e.amount===null?`<p class="muted">Wallets that still hold coins keep ${H(rf)} SOL so they can sell them later.</p>`:``}
    ${T?`<p class="muted">${T} junk coin${T===1?``:`s`} left behind: worthless ads strangers send to wallets.</p>`:``}
    ${y.length?`<button id="go" class="primary">Enter PIN and send</button>`:`<p class="warning">There's nothing to send${b.length?` (see above)`:e.only?` from those wallets`:``}.</p>`}
    <button id="cancel">Cancel</button>`),q(`dest`).textContent=i.address,J(`cancel`,X),y.length&&J(`go`,()=>Zu(`Enter your PIN to send`,e=>rm(e,i,y,h,u).catch($)))}async function rm(e,t,n,r,i){let a=nd(e,Math.max(...n.map(e=>e.wallet.index))+1);K(`
    <h1>Sending to ${Q(t.label)}…</h1>
    ${ge()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${$p(e.wallet)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),Eu();let o=e=>q(`status-${e.wallet.index}`),s=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,c=async e=>{let t=await ec(e),n=await rc(t);if(n!==`confirmed`)throw Error(`${n===`failed`?`failed`:`is taking long`} (${t})`);return t},l=0,u=0,d=async e=>{let n=a[e.wallet.index],i=[],d=!0;try{for(let r=0;r<e.coins.length;r+=Qp){let a=e.coins.slice(r,r+Qp);o(e).innerHTML=[...i,`sending ${a.map(e=>Q(e.label)).join(`, `)}…`].join(`<br>`);let l=a.flatMap(e=>{let r=Ps(t.address,e.account.mint,e.account.program);return[Is(n.address,r,t.address,e.account.mint,e.account.program),Ls(e.account,r,n.address,e.amount),...e.amount===e.account.raw?[ks(e.account,n.address,n.address)]:[]]}),u=await c(Es(n,l,await Xs()));i.push(`✓ ${a.map(e=>`${Ep(e.amount,e.account.decimals)} ${Q(e.label)}`).join(`, `)} · ${s(u)}`)}if(e.sol){o(e).innerHTML=[...i,`sending SOL…`].join(`<br>`);let a,l=e.sol,[[d,f],p]=await Promise.all([Ss([n.address,t.address]),Js(n.address)]);if(e.allSol){let e=bp(d,p,!0,r);if(!e||!e.send)throw Error(`no SOL left to send`);if(f+e.send<890880)throw Error(`${H(e.send)} SOL is too little to start an empty wallet`);l=e.send,a=await xp(n,t,e)}else{if(d<l+5e3)throw Error(`only ${H(d)} SOL there now`);a=await c(Es(n,[Os(n.address,t.address,l)],await Xs()))}u+=l,i.push(`✓ ${H(l)} SOL · ${s(a)}`)}}catch(e){d=!1,i.push(`<span class="error">✗ ${Q(Z(e))}</span>`)}o(e).innerHTML=i.join(`<br>`),Zp(),d&&l++},f=[...n].filter(e=>e.sol).sort((e,t)=>t.sol-e.sol)[0],p=n.filter(e=>e.coins.some(e=>e.opens>0)||e===f&&i<890880);await vp(p,wf,d),await vp(n.filter(e=>!p.includes(e)),wf,d),Qc([t.address,...n.map(e=>e.wallet.address)]).catch(()=>{}),a.forEach(e=>e.secret.fill(0)),M(l?`success`:`error`),l&&await it(`SENT`),q(`after`).innerHTML=`<p><b>Done: ${l} of ${n.length} wallet${n.length===1?``:`s`} sent.</b>${u?` ${H(u)} SOL went to ${Q(t.label)}.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,Zp(),J(`holdings`,()=>Qf().catch($)),J(`home`,X)}function im(){G(`remove`,im),K(`
    <h1>Remove wallets from this phone?</h1>
    <p class="warning">If you haven't written down your 12 words, any money in these wallets will be lost forever.</p>
    <p>Type <b>REMOVE</b> to confirm.</p>
    <input id="confirm" autocapitalize="characters" autocomplete="off">
    <p id="error" class="error" hidden></p>
    <button id="yes" class="danger">Remove</button>
    <button id="no" class="primary">Keep my wallets</button>`),J(`no`,X),J(`yes`,async()=>{if(q(`confirm`).value.trim()!==`REMOVE`)return Nu(`Type REMOVE to confirm.`);await Xl(Wl),await j.remove(Gl),await Xl(Kl),await j.remove(Zl),cd(),Qu=[],Lu()})}function $(e){console.error(e);let t=e instanceof Error?e.message:String(e);K(`
    <h1>Something went wrong</h1>
    <p>Please send a screenshot of this screen to the bot's owner.</p>
    <pre class="details"></pre>
    <button id="retry" class="primary">Start over</button>`),document.querySelector(`.details`).textContent=`${t}\nTelegram ${A?.version??`?`} on ${A?.platform??`?`}`,J(`retry`,()=>Lu().catch($))}window.addEventListener(`unhandledrejection`,e=>$(e.reason)),window.addEventListener(`error`,e=>$(e.error??e.message));var am=`showUsd`,om=!1,sm=null,cm=new Map,lm=(e,t,n=``)=>`<span class="coinamt" data-mint="${e}" data-amt="${t}">${kf(t)}${n}</span>`;function um(e,t){t>0&&cm.get(e)!==t&&(cm.set(e,t),om&&hm())}var dm=/(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?\s?SOL\b(?: · \$[\d,]+(?:\.\d+)?)?/g,fm=`button, input, textarea, a, .keypad, .amountbox, .solamt, .coinamt, .pnl, script, style`,pm=e=>e<.01&&e>0?`$${e.toFixed(4)}`:Af(e);function mm(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];for(let e=t.nextNode();e;e=t.nextNode()){let t=e;t.data.includes(`SOL`)&&!t.parentElement?.closest(fm)&&n.push(t)}for(let e of n){let t=e.data,n=[],r=0;for(let e of t.matchAll(dm)){let i=t[e.index-1];if(i&&/[\w$.]/.test(i))continue;n.push(t.slice(r,e.index));let a=document.createElement(`span`);a.className=`solamt`,a.dataset.sol=(e[1]+(e[2]??``)).replace(/,/g,``),a.dataset.orig=e[0],a.textContent=e[0],n.push(a),r=e.index+e[0].length}n.length&&(n.push(t.slice(r)),e.replaceWith(...n))}}function hm(){mm(gu),document.querySelectorAll(`.solamt`).forEach(e=>{let t=Number(e.dataset.sol);e.dataset.orig??=`${H(t*V)} SOL`;let n=om&&sm?pm(t*sm):e.dataset.shown===`usd`?e.dataset.orig:null;n!==null&&e.textContent!==n&&(e.textContent=n),e.dataset.shown=om&&sm?`usd`:`sol`,e.classList.toggle(`usd`,om&&!!sm)}),document.querySelectorAll(`.coinamt`).forEach(e=>{let t=cm.get(e.dataset.mint),n=om&&!!t;e.dataset.orig??=e.textContent??``;let r=n?pm(Number(e.dataset.amt)*t):e.dataset.shown===`usd`?e.dataset.orig:null;r!==null&&e.textContent!==r&&(e.textContent=r),e.dataset.shown=n?`usd`:`coin`,e.classList.toggle(`usd`,n)})}function gm(e){e&&e!==sm&&(sm=e,om&&hm())}async function _m(){W&&gm(await xu(!0)??(await wr(W,[`So11111111111111111111111111111111111111112`],!0)).get(`So11111111111111111111111111111111111111112`)??null)}function vm(){let e=!1;new MutationObserver(()=>{e||(e=!0,queueMicrotask(()=>{e=!1,hm()}))}).observe(gu,{childList:!0,subtree:!0,characterData:!0}),gu.addEventListener(`click`,async e=>{let t=e.target.closest?.(`.solamt, .coinamt`);if(t){if(e.preventDefault(),e.stopPropagation(),sm||await _m().catch(()=>{}),!(t.classList.contains(`coinamt`)?cm.has(t.dataset.mint):sm)&&!om)return M(`error`);N(),om=!om,hm(),j.set(am,om?`1`:``).catch(()=>{})}},!0),Se()&&(j.get(am).then(async e=>{e===`1`&&(om=!0,await _m(),hm())}).catch(()=>{}),setInterval(()=>{om&&!document.hidden&&_m().catch(()=>{})},6e4))}ou||(vm(),Lu().catch($));