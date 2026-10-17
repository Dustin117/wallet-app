var e=1024,t=2157,n={base:0,plate:2157,coins:4314,mask:{y:4486,w:512,h:1079}},r=[{sx:0,w:70,h:100,x:440,y:1095},{sx:70,w:48,h:144,x:465,y:1264},{sx:118,w:104,h:172,x:297,y:1401},{sx:222,w:46,h:150,x:388,y:1463},{sx:268,w:82,h:144,x:565,y:1462},{sx:350,w:86,h:150,x:492,y:1568},{sx:436,w:60,h:96,x:613,y:1384},{sx:496,w:66,h:116,x:335,y:1692}],i=[0,240,255],a=[255,43,214],o=[57,255,136],s=[255,59,107],c=[255,184,0],l=[i,a,o,s],u=(e,t=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${t})`;function d(e){let t=(e%4+4)%4,n=Math.floor(t),r=t-n,i=l[n],a=l[(n+1)%4];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}var f=`01$#%&@*+=<>?/\\|{}[];:~^`,p=e=>`700 ${e}px ui-monospace, Menlo, Consolas, "DejaVu Sans Mono", monospace`,m=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296},h=(e,t=0)=>{let n=Math.floor(e),r=e-n,i=r*r*(3-2*r),a=m(n+t*7919);return(a+(m(n+1+t*7919)-a)*i)*2-1},g=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),_=(e,t,n)=>{let r=g((n-e)/(t-e));return r*r*(3-2*r)},v=e=>1-(1-g(e))**3,y=e=>(e=g(e),e<.5?4*e*e*e:1-(-2*e+2)**3/2),b=(e,t)=>Object.assign(document.createElement(`canvas`),{width:e,height:t}),x={x:462,y:740,rx:222,ry:400},S={x:462,y:900,z:-30},C=175,w=58,T={x0:345,x1:624,y0:622,y1:834},E={x:362,y:664,w:246,h:142,r:18},ee=2400,te={x:772,y:1445,rx:112,ry:142},ne={x:762,y:1592},re=70,ie={x:838,y:1618},ae={x:727,y:1437,rx:32,ry:72},oe=[{x:40,y:112,w:450,h:140},{x:30,y:252,w:218,h:400}],se=13,ce={x:818,y:108,w:184,h:395},le=[[735,1310],[790,1316],[830,1333],[851,1325],[868,1343],[867,1386],[852,1421],[850,1500],[842,1550],[832,1588],[862,1600],[882,1640],[890,1750],[888,1850],[882,1930],[874,2012],[840,2033],[798,2022],[790,1942],[780,1904],[700,1908],[678,1882],[638,1862],[622,1800],[626,1650],[643,1603],[688,1583],[676,1550],[670,1480],[670,1400],[683,1348],[703,1322]],ue=r.map(e=>({...e,cx:e.x+e.w/2,cy:e.y+e.h/2,rx:(e.w-16)/2,ry:(e.h-16)/2})),de=[5,2,4,3,6,1,0,7],fe=.75,pe={x:518,y:1010},D={x0:400,x1:614,y0:836,y1:1962,cw:13,ch:17},me=Math.floor((D.x1-D.x0)/D.cw),he=Math.floor((D.y1-D.y0)/D.ch),ge={x:380,y:816,w:254,h:1166},_e=14,ve=18,ye=`01$#%&@*+=<>?/\\|{}[];:~^ABCDEFXYZ27`,be=35,xe=.75,Se=Math.round(e*xe),Ce=Math.round(t*xe),we=null,Te=!1,Ee=0,De=null,Oe=[],ke=null,Ae=new Float32Array(me*he),je=null,Me=null,Ne=null,Pe=[],Fe=[];function Ie(){if(we||Date.now()<Ee)return;let e=new Image;we=e,e.onerror=()=>{we===e&&(we=null),Ee=Date.now()+2e3},e.onload=()=>{try{Re(e),Te=!0}catch{we===e&&(we=null),Ee=Date.now()+2e3}},e.src=`./hacker-2.webp`}var Le=Ie;function Re(e){De=b(Se,Ce);let t=De.getContext(`2d`,{willReadFrequently:!0});t.drawImage(e,0,n.mask.y,n.mask.w,n.mask.h,0,0,Se,Ce);let r=t.getImageData(0,0,Se,Ce),i=[{x0:Se,y0:Ce,x1:0,y1:0},{x0:Se,y0:Ce,x1:0,y1:0}],a=1250*xe;for(let e=0;e<Ce;e++)for(let t=0;t<Se;t++){let n=(e*Se+t)*4,o=r.data[n];if(r.data[n+3]=o,r.data[n]=r.data[n+1]=r.data[n+2]=0,o>2){let n=i[e<a?0:1];t<n.x0&&(n.x0=t),e<n.y0&&(n.y0=e),t>n.x1&&(n.x1=t),e>n.y1&&(n.y1=e)}}t.putImageData(r,0,0),Oe=i.filter(e=>e.x1>e.x0).map(e=>({x:e.x0/xe-4,y:e.y0/xe-4,w:(e.x1-e.x0)/xe+8,h:(e.y1-e.y0)/xe+8}));for(let t of ue){let r=b(t.w,t.h),i=r.getContext(`2d`,{willReadFrequently:!0});i.drawImage(e,t.sx,n.coins,t.w,t.h,0,0,t.w,t.h);let a=i.getImageData(0,0,t.w,t.h),o=new Float32Array(t.w*t.h),s=new Float32Array(t.w*t.h);for(let e=0;e<t.h;e++)for(let n=0;n<t.w;n++){let r=(n-t.w/2)/(t.rx+4),i=(e-t.h/2)/(t.ry+4);o[e*t.w+n]=1-_(.88,1.08,Math.sqrt(r*r+i*i));let a=m(Math.floor(n/3)*131+Math.floor(e/3)*977+t.cx),c=m(Math.floor(n/7)*71+Math.floor(e/7)*313+t.cy);s[e*t.w+n]=g(.32*a+.18*c+.5*(e/t.h))}Pe.push({src:a,work:i.createImageData(t.w,t.h),a:o,n:s,cv:r,edge:b(t.w,t.h),p:0,drawnP:-1})}let s=[[436,836],[600,836],[600,1e3],[593,1300],[596,1600],[606,1800],[614,1962],[398,1962],[414,1800],[440,1600],[452,1300],[452,1e3]],c=ge,l=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});l.shadowColor=`#fff`,l.shadowBlur=18,l.shadowOffsetX=4e3,l.fillStyle=`#fff`,l.beginPath(),s.forEach(([e,t],n)=>n?l.lineTo(e-c.x-4e3,t-c.y):l.moveTo(e-c.x-4e3,t-c.y)),l.closePath(),l.fill();let d=l.getImageData(0,0,c.w,c.h);ke=b(c.w,c.h);let f=ke.getContext(`2d`),h=f.createImageData(c.w,c.h);for(let e=0;e<c.w*c.h;e++)h.data[e*4+3]=d.data[e*4+3]*.58;f.putImageData(h,0,0);let v=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});v.drawImage(e,c.x,n.base+c.y,c.w,c.h,0,0,c.w,c.h);let y=v.getImageData(0,0,c.w,c.h).data,x=[];for(let e=0;e<me;e++)for(let t=0;t<he;t++){let n=0,r=0;for(let i=0;i<D.ch;i+=2)for(let a=0;a<D.cw;a+=2)n+=y[((D.y0+t*D.ch+i-c.y)*c.w+(D.x0+e*D.cw+a-c.x))*4],r++;let i=Math.round(D.x0+e*D.cw+D.cw/2-c.x),a=Math.round(D.y0+t*D.ch+D.ch/2-c.y),o=n/r/255*(d.data[(a*c.w+i)*4+3]/255);Ae[e*he+t]=o,x.push(o)}x.sort((e,t)=>e-t);let S=x[Math.floor(x.length*.95)]||1;for(let e=0;e<Ae.length;e++)Ae[e]=g(Ae[e]/S)**.85;let C=e=>{let t=b(490,ve),n=t.getContext(`2d`);n.font=p(15),n.textAlign=`center`,n.textBaseline=`middle`,n.shadowColor=e,n.shadowBlur=4,n.fillStyle=e;for(let e=0;e<be;e++)n.fillText(ye[e],e*_e+_e/2,10);return t};je=C(`rgb(235,255,245)`),Me=C(u(o)),Ne=C(`rgb(90,235,255)`);for(let e=0;e<3;e++){let t=b(180,390),n=t.getContext(`2d`),r=n.createImageData(180,390);for(let t=0;t<r.data.length;t+=4)r.data[t]=r.data[t+1]=r.data[t+2]=m(t+e*99991)*255,r.data[t+3]=255;n.putImageData(r,0,0),Fe.push(t)}}var O=0,ze=-10,Be=[],Ve=ue.map(()=>-1),He=0,Ue=`RUN`;function We(){ze=O,Ue=`RUN`,Be=[],Ve.fill(-1),He=0;for(let e of Pe)e.drawnP=-1}function Ge(){Be.push(O),Be.length>12&&Be.shift(),He<de.length&&(Ve[de[He++]]=O)}var Ke=e=>Ve[e]<0?0:g((O-Ve[e])/fe),qe=(e,t,n=0)=>{let r=0;for(let i of Be)r+=Math.exp(-(((e-i-n)/t)**2));return r},Je=e=>.17*h(e*.27,1)+.04*h(e*.71,2)+.014*h(e*1.3,3)+.006*h(e*4.1,4);function Ye(e){let t=Je(e),n=qe(e,.14,.05),r=.06+.05*h(e*.23,5)+.012*h(e*1.1,6)+.006*Math.sin(e*11)*Math.max(0,h(e*.31,7))+.025*n,i=.2*t+.02*h(e*.25,8)+.01*h(e*.9,9),a=Math.sin(2*Math.PI*e/3.4)+.25*h(e*.7,5),o=5*Math.sin(2*Math.PI*e/7.3+.6)+2*h(e*.5,6),s=-.9*Je(e-.3)+.06*h(e*.2,10),c=.3*s+.012*h(e*1.6,7);return{yaw:t,pitch:r,roll:i,breath:a,sway:o,rLook:s,rTilt:c,rBob:4*Math.sin(e*2*Math.PI*.62)+5*qe(e,.12,.12),rArm:.035*Math.sin(e*2*Math.PI*.31+1)+.02*h(e*1.2,8),cy:Math.cos(t),sy:Math.sin(t),cp:Math.cos(r),sp:Math.sin(r),cr:Math.cos(i),sr:Math.sin(i),cl:Math.cos(s),sl:Math.sin(s),ct:Math.cos(c),st:Math.sin(c)}}var Xe=(e,t)=>_(T.x0,T.x0+12,e)*(1-_(T.x1-12,T.x1,e))*_(T.y0,T.y0+12,t)*(1-_(T.y1-12,T.y1,t)),Ze=(e,t,n,r,i,a,o)=>_(n-o,n+o,e)*(1-_(i-o,i+o,e))*_(r-o,r+o,t)*(1-_(a-o,a+o,t));function Qe(e,n,r,i,a=!0){let o=e,s=n,c=0,l=(e-x.x)/x.rx,u=(n-x.y)/x.ry,d=Math.sqrt(l*l+u*u),f=a?1-_(.7,1,d):0;if(f>1e-4){let t=(e-(T.x0+T.x1)/2)/((T.x1-T.x0)/2),i=C*Math.sqrt(Math.max(0,1-d*d))+w*Xe(e,n)*(1+.4*(1-t*t)),a=e-S.x,l=n-S.y,u=i-S.z,p=a*r.cy+u*r.sy,m=-a*r.sy+u*r.cy,h=l*r.cp+m*r.sp,g=-l*r.sp+m*r.cp,_=p*r.cr-h*r.sr+S.x,v=p*r.sr+h*r.cr+S.y,y=g+S.z,b=ee/(ee-y),E=ee/(ee-i);o+=f*((_-x.x)*b-(e-x.x)*E),s+=f*((v-x.y)*b-(n-x.y)*E),c=f*y}let p=Math.max(a?1-_(.85,1.08,d):0,(1-_(600,660,e))*_(880,1020,n));if(p>1e-4){let i=(t-n)/t;s-=p*i*5.5*r.breath,o+=p*i*r.sway,o+=p*_(950,1300,n)*(1-_(1500,1900,n))*(e-330)*.004*r.breath}if(a&&e>600&&n>1280){let t=(e-te.x)/te.rx,i=(n-te.y)/te.ry,a=Math.sqrt(t*t+i*i),l=1-_(.86,1.1,a),u=Math.max(l,Ze(e,n,628,1560,902,2035,22));if(u>1e-4){let t=e,i=n,d=0,f=Ze(e,n,806,1600,898,2030,18)*(1-l);if(f>1e-4){let e=r.rArm*f*_(1600,1700,n),a=t-ie.x,o=i-ie.y;t=ie.x+a*Math.cos(e)-o*Math.sin(e),i=ie.y+a*Math.sin(e)+o*Math.cos(e)}if(l>1e-4){let e=re*Math.sqrt(Math.max(0,1-a*a)),n=t-te.x;t+=l*(n*r.cl+e*r.sl-n),d=l*(-n*r.sl+e*r.cl);let o=t-ne.x,s=i-ne.y,c=l>=.999?r.ct:Math.cos(r.rTilt*l),u=l>=.999?r.st:Math.sin(r.rTilt*l);t=ne.x+o*c-s*u,i=ne.y+o*u+s*c}i+=r.rBob*(l>0?1:.4)*_(2040,1500,n)*u,o+=t-e,s+=i-n,c=Math.max(c,d)}}i[0]=o,i[1]=s,i[2]=c}function $e(n,r,i){let a=r/2/n.s+8/n.s,o=i/2/n.s+8/n.s;return n.cx=g(n.cx,Math.min(a,e/2),Math.max(e-a,e/2)),n.cy=g(n.cy,Math.min(o,t/2),Math.max(t-o,t/2)),n}function et(n,r){let i=Math.max(n/e,r/t)*1.01,a=y((O-ze-.8)/7),o=n/390;return $e({s:i*(1+.45*a)*(1+.012*qe(O,.1)),cx:512+36*a,cy:t/2+(925-t/2)*a,ox:(1.3*h(O*.8,11)+.45*h(O*3.1,12))*o,oy:(1.3*h(O*.7,13)+.45*h(O*2.9,14))*o,rot:.0025*h(O*.6,15)},n,r)}var tt=[0,0,0];function nt(n,r,i,a){let o=Math.max(n/e,r/t)*1.01,s=n*.68/E.w;Qe(E.x+E.w/2,E.y+E.h/2,a,tt);let c=Math.random()<.12?(Math.random()-.5)*4*(n/390):0;return $e({s:o+(s-o)*i,cx:e/2+(tt[0]-e/2)*i,cy:t/2+(tt[1]+150-t/2)*i,ox:c,oy:0,rot:0},n,r)}var rt=null,it=!1;function at(){if(rt||it)return rt;try{let n=b(2,2),r=n.getContext(`webgl`,{alpha:!1,antialias:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!1})??n.getContext(`experimental-webgl`);if(!r)throw Error(`no WebGL`);let i=(e,t)=>{let n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(r.getShaderInfoLog(n)??`shader`);return n},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,`attribute vec3 aPos; attribute vec2 aUV; uniform vec2 uRes; varying vec2 vUV;
      void main(){ vUV=aUV; vec2 c=aPos.xy/uRes*2.0-1.0; gl_Position=vec4(c.x,-c.y,clamp(-aPos.z/3000.0,-0.99,0.99),1.0); }`)),r.attachShader(a,i(r.FRAGMENT_SHADER,`precision mediump float; varying vec2 vUV; uniform sampler2D uTex; uniform float uGain;
      void main(){ vec4 c=texture2D(uTex,vUV); gl_FragColor=vec4(c.rgb*uGain,c.a); }`)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`link`);r.useProgram(a);let o=(e,t,n,i,a,o)=>{let s=(a+1)*(o+1),c=new Float32Array(s*2),l=new Float32Array(s*2),u=0;for(let r=0;r<=o;r++)for(let s=0;s<=a;s++,u++)c[u*2]=e+n*s/a,c[u*2+1]=t+i*r/o,l[u*2]=s/a,l[u*2+1]=r/o;let d=new Uint16Array(a*o*6);u=0;for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t,r=n+a+1;d.set([n,n+1,r,n+1,r+1,r],u),u+=6}let f={n:s,art:c,pos:new Float32Array(s*3),count:d.length,posBuf:r.createBuffer(),uvBuf:r.createBuffer(),idxBuf:r.createBuffer()};return r.bindBuffer(r.ARRAY_BUFFER,f.uvBuf),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,f.posBuf),r.bufferData(r.ARRAY_BUFFER,f.pos.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,f.idxBuf),r.bufferData(r.ELEMENT_ARRAY_BUFFER,d,r.STATIC_DRAW),f},s=()=>{let e=r.createTexture();return r.bindTexture(r.TEXTURE_2D,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),e};rt={c:n,gl:r,aPos:r.getAttribLocation(a,`aPos`),aUV:r.getAttribLocation(a,`aUV`),uRes:r.getUniformLocation(a,`uRes`),uGain:r.getUniformLocation(a,`uGain`),pic:o(0,0,e,t,Math.round(e/8),Math.round(t/8)),glass:o(E.x,E.y,E.w,E.h,48,28),texPic:s(),texBack:s(),texHud:s()},n.addEventListener(`webglcontextlost`,()=>{rt=null,it=!0})}catch{rt=null,it=!0}return rt}function ot(e,t,n,r,i,a,o,s){let c=Math.cos(r.rot),l=Math.sin(r.rot);for(let e=0;e<t.n;e++){Qe(t.art[e*2],t.art[e*2+1],n,tt,s);let u=(tt[0]-r.cx)*r.s,d=(tt[1]-r.cy)*r.s;t.pos[e*3]=i/2+u*c-d*l+r.ox,t.pos[e*3+1]=a/2+u*l+d*c+r.oy,t.pos[e*3+2]=tt[2]+o}e.gl.bindBuffer(e.gl.ARRAY_BUFFER,t.posBuf),e.gl.bufferSubData(e.gl.ARRAY_BUFFER,0,t.pos)}function st(e,t,n){let r=e.gl;r.bindTexture(r.TEXTURE_2D,n),r.bindBuffer(r.ARRAY_BUFFER,t.posBuf),r.enableVertexAttribArray(e.aPos),r.vertexAttribPointer(e.aPos,3,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,t.uvBuf),r.enableVertexAttribArray(e.aUV),r.vertexAttribPointer(e.aUV,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.idxBuf),r.drawElements(r.TRIANGLES,t.count,r.UNSIGNED_SHORT,0)}var ct=(e,t,n,r=!1)=>{e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)},lt=b(Se,Ce),ut=lt.getContext(`2d`);function dt(e){le.forEach(([t,n],r)=>{let i=760+(t-760)*1.04,a=1670+(n-1670)*1.02;r?e.lineTo(i,a):e.moveTo(i,a)}),e.closePath()}function ft(e){ue.forEach((t,n)=>{let r=Pe[n],i=Ke(n);if(r.p=i,!(i>=1)){if(r.drawnP!==i){r.drawnP=i;let e=r.work.data,n=r.src.data,a=r.edge.getContext(`2d`),o=i>0?a.createImageData(t.w,t.h):null;for(let a=0;a<t.w*t.h;a++){let t=r.n[a];e[a*4]=n[a*4],e[a*4+1]=n[a*4+1],e[a*4+2]=n[a*4+2],e[a*4+3]=255*r.a[a]*(i<=0?1:_(i,i+.03,t*1.08)),o&&(o.data[a*4]=120,o.data[a*4+1]=255,o.data[a*4+2]=190,o.data[a*4+3]=255*Math.max(0,1-Math.abs(t*1.08-i-.025)/.05)*r.a[a])}r.cv.getContext(`2d`).putImageData(r.work,0,0),o?a.putImageData(o,0,0):a.clearRect(0,0,t.w,t.h)}e.drawImage(r.cv,t.x,t.y)}})}var pt=42;function mt(e,t){e.save(),e.globalCompositeOperation=`lighter`,ue.forEach((n,r)=>{let i=Pe[r],a=Ve[r];if(!(a<0||t>a+fe+2.2)){i.p>0&&i.p<1&&(e.globalAlpha=1,e.drawImage(i.edge,n.x,n.y),e.globalAlpha=.45,e.drawImage(i.edge,n.x-2,n.y-2,n.w+4,n.h+4));for(let i=0;i<pt;i++){let o=m(r*7919+i*31+1),s=m(r*7919+i*31+2),c=m(r*7919+i*31+3),l=n.cx+(o-.5)*2*n.rx*.9,u=n.cy+(s-.5)*2*n.ry*.9,d=g(.5*s+.5*m(i*13+r)),f=240+c*260,p=1.1+c*.9,h=t-(a+d*fe);if(h<0||h>p)continue;let v=u-f*h,y=_(0,.6,h),b=l+(pe.x-l)*.55*y+Math.sin(h*9+i)*4,x=g((p-h)*2)*_(840,930,v);if(!(x<=.02))for(let n=0;n<4;n++){let r=Math.floor(m(i*17+n*5+Math.floor((t+c)*12))*be);e.globalAlpha=x*(n===0?1:.55*(1-n/4)),e.drawImage(n===0?je:Me,r*_e,0,_e,ve,b-_e/2,v+n*15-ve/2,_e,ve)}}}}),e.restore()}function ht(e,t){e.save(),e.globalCompositeOperation=`lighter`;let n=he*D.ch,r=[];for(let i=0;i<me;i++){let a=D.x0+i*D.cw;r.length=0;for(let e=0;e<3;e++){let a=150+m(i*101+e*7+5)*300,o=8+Math.floor(m(i*31+e*3)*18),s=n+o*D.ch;r.push({head:D.y1-(t*a+m(i*13+e)*s)%s,len:o})}for(let n=0;n<he;n++){let o=Ae[i*he+n];if(o<.015)continue;let s=D.y0+n*D.ch,c=0,l=!1;for(let e of r){let t=(s-e.head)/D.ch;t>=0&&t<e.len&&(c=Math.max(c,(1-t/e.len)**1.5),t<1&&(l=!0))}let u=.35+.65*o,d=o*.07+u*c*(.55+.45*m(i*3+1))+(l?.45*u:0);if(d<.03)continue;let f=l?14:2+m(i*7+n)*3,p=Math.floor(m(i*977+n*131+Math.floor(t*f+m(n*3+i)))*be),h=l?je:s<1150+m(i*5+n)*500?Me:Ne;e.globalAlpha=g(d*1.15),e.drawImage(h,p*_e,0,_e,ve,a,s,D.cw+1,D.ch+1)}}e.restore()}function gt(r,i,l){let f=l===`front`,p=ut;if(p.setTransform(xe,0,0,xe,0,0),p.globalCompositeOperation=`source-over`,p.globalAlpha=1,p.save(),f){p.beginPath();for(let e of Oe)p.rect(e.x,e.y,e.w,e.h);p.clip()}p.drawImage(we,0,l===`back`?n.plate:n.base,e,t,0,0,e,t),p.drawImage(ke,ge.x,ge.y),ft(p);let h=oe.map(e=>Math.floor(e.h/se)),_=h[0]+h[1],y=_*.32+2.5,b=Math.min(_,(r+4)%y/.32),x=0,S=null;p.fillStyle=`#000`,oe.forEach((e,t)=>{for(let n=0;n<h[t];n++,x++){let t=e.y+n*se;if(x+1<=b)continue;let r=x<b?b-x:0,i=e.w*r;p.fillRect(e.x+i,t,e.w-i,se),r>0&&(S={x:e.x+i,y:t})}});let C=ce,w=r*18%C.h;p.drawImage(we,C.x,n.base+C.y+w,C.w,C.h-w,C.x,C.y,C.w,C.h-w),w>.5&&p.drawImage(we,C.x,n.base+C.y,C.w,w,C.x,C.y+C.h-w,C.w,w),p.globalCompositeOperation=`multiply`,p.fillStyle=`rgb(140,165,255)`,p.fillRect(0,0,e,t);let ee=p.createRadialGradient(300,1450,80,300,1450,800);ee.addColorStop(0,`rgba(215,150,255,1)`),ee.addColorStop(1,`rgba(140,165,255,0)`),p.fillStyle=ee,p.fillRect(0,600,650,1557);let te=p.createLinearGradient(600,200,1e3,1950);for(let e=0;e<=8;e++)te.addColorStop(e/8,u(d(r*.45+e*.7)));p.fillStyle=te,p.beginPath(),p.moveTo(612,180),p.lineTo(1024,180),p.lineTo(1024,2040),p.lineTo(640,2040),p.lineTo(640,1290),p.lineTo(612,1e3),p.closePath(),dt(p),p.fill(`evenodd`);let ne=p.createLinearGradient(400,0,600,0);ne.addColorStop(0,`rgba(120,200,255,1)`),ne.addColorStop(.5,`rgba(225,255,255,1)`),ne.addColorStop(1,`rgba(120,200,255,1)`),p.fillStyle=ne,p.fillRect(400,830,200,1130),p.fillStyle=u(o),oe.forEach(e=>p.fillRect(e.x-4,e.y-4,e.w+8,e.h+8)),p.fillStyle=u(a),p.fillRect(35,62,970,48),p.fillStyle=u(s),p.fillRect(C.x-6,C.y-6,C.w+12,C.h+12);let re=g(qe(r,.25)),ie=[a[0]+(o[0]-a[0])*re,a[1]+(o[1]-a[1])*re,a[2]+(o[2]-a[2])*re];p.save(),p.translate((T.x0+T.x1)/2,(T.y0+T.y1)/2),p.scale(1,(T.y1-T.y0)/(T.x1-T.x0));let le=p.createRadialGradient(0,0,90,0,0,175);le.addColorStop(0,u(ie)),le.addColorStop(1,u(ie,0)),p.fillStyle=le,p.fillRect(-300,-300,600,600),p.restore(),p.fillStyle=`rgb(120,240,255)`,p.beginPath(),dt(p),p.fill();let ue=p.createRadialGradient(ae.x,ae.y,8,ae.x,ae.y,70);ue.addColorStop(0,u(c)),ue.addColorStop(1,`rgba(120,240,255,1)`),p.fillStyle=ue,p.fillRect(640,1340,150,160),p.globalCompositeOperation=`lighter`,p.globalAlpha=.55,p.setTransform(1,0,0,1,0,0),p.drawImage(lt,0,0),p.setTransform(xe,0,0,xe,0,0),p.globalAlpha=1;let de=S;de&&Math.floor(r*3)%2==0&&(p.fillStyle=u(o,.9),p.fillRect(de.x+2,de.y+1,8,11)),ht(p,r),mt(p,r),p.globalCompositeOperation=`source-over`;let fe=v((r-ze-.35)/.3);if(fe>0){p.fillStyle=`rgba(3,6,8,${.8*fe})`,p.beginPath(),p.roundRect(E.x,E.y,E.w,E.h,E.r),p.fill(),p.globalCompositeOperation=`lighter`;let e=p.createRadialGradient(E.x+E.w/2,E.y+E.h/2,60,E.x+E.w/2,E.y+E.h/2,300);e.addColorStop(0,u(o,.22*fe)),e.addColorStop(1,u(o,0)),p.fillStyle=e,p.fillRect(E.x-260,E.y-240,E.w+520,E.h+520),p.strokeStyle=u(o,.3*fe),p.lineWidth=3,p.beginPath(),p.roundRect(E.x-1,E.y-1,E.w+2,E.h+2,E.r+1),p.stroke()}p.globalCompositeOperation=`lighter`;let pe=.5+.25*Math.sin(r*3.1)+.9*qe(r,.1),D=ae.x-i.rLook*30,me=ae.y-6;p.save(),p.translate(D,me),p.scale(1,1.9);let he=p.createRadialGradient(0,0,2,0,0,40);he.addColorStop(0,u([255,250,220],g(.6*pe))),he.addColorStop(.35,u(c,g(.45*pe))),he.addColorStop(1,u(c,0)),p.fillStyle=he,p.fillRect(-45,-45,90,90),p.restore();let _e=p.createRadialGradient(D,me,10,D,me,160);_e.addColorStop(0,u(c,.16*pe)),_e.addColorStop(1,u(c,0)),p.fillStyle=_e,p.fillRect(D-170,me-170,340,340),p.globalCompositeOperation=`source-over`;let ve=Math.floor(r/3.3),ye=(r-ve*3.3-m(ve+51)*2.6)/.16;if(ye>0&&ye<1){let e=Math.sin(Math.PI*ye);p.fillStyle=`rgba(6,10,20,0.92)`,p.beginPath(),p.ellipse(ae.x,ae.y-ae.ry+ae.ry*e,ae.rx+6,ae.ry*e+2,0,0,Math.PI*2),p.fill()}p.restore(),f&&(p.setTransform(1,0,0,1,0,0),p.globalCompositeOperation=`destination-in`,p.drawImage(De,0,0),p.globalCompositeOperation=`source-over`),p.setTransform(1,0,0,1,0,0)}var _t=1024,k=592,vt=b(_t,k),yt=vt.getContext(`2d`),bt=46,xt=54,St=68,Ct=118,wt=new WeakMap,Tt=e=>e.match(/^\[(ok|\*|!)\]/);function Et(){let e=[];return document.querySelectorAll(`#loadTerm .tl`).forEach(t=>{let n=(t.firstChild?.textContent??``).replace(/\s+$/,``),r=wt.get(t),i=n.startsWith(`[ok]`);r?r.text!==n&&(i&&!r.text.startsWith(`[ok]`)&&(r.okAt=O,Ge()),r.text=n,r.changed=O):(r={text:n,at:O,changed:O,okAt:-9},wt.set(t,r),i&&(r.okAt=O,Ge())),e.push(r)}),e}var Dt=28;function Ot(e){let t=[],n=e;for(;n.length>Dt;){let e=n.lastIndexOf(` `,Dt);e<Dt/2&&(e=Dt),t.push(n.slice(0,e)),n=`  `+n.slice(e).trimStart()}return t.push(n),t}function kt(e,t,n,r,o,s,c=16){e.globalCompositeOperation=`lighter`,e.fillStyle=u(i,.22*s),e.fillText(t,n-2.5,r),e.fillStyle=u(a,.18*s),e.fillText(t,n+2.5,r+1),e.shadowColor=u(o,.85*s),e.shadowBlur=c,e.fillStyle=u(o,s),e.fillText(t,n,r),e.shadowBlur=0,e.fillStyle=`rgba(230,255,240,${.35*s})`,e.fillText(t,n,r),e.globalCompositeOperation=`source-over`}function At(e,t,n){e.globalCompositeOperation=`destination-in`;let r=e.createRadialGradient(_t/2,k/2,k*.3,_t/2,k/2,_t*.62);r.addColorStop(0,`rgba(0,0,0,1)`),r.addColorStop(.8,`rgba(0,0,0,0.75)`),r.addColorStop(1,`rgba(0,0,0,0.25)`),e.fillStyle=r,e.fillRect(0,0,_t,k),e.globalCompositeOperation=`source-over`,e.fillStyle=`rgba(0,0,0,0.33)`;for(let t=0;t<k;t+=5)e.fillRect(0,t,_t,2);e.globalCompositeOperation=`lighter`;let i=_t*(.3-n.yaw*2.2+.03*Math.sin(t*.7)),a=e.createLinearGradient(i-170,0,i+170,k*.4);a.addColorStop(0,`rgba(255,190,245,0)`),a.addColorStop(.5,`rgba(255,200,245,0.13)`),a.addColorStop(1,`rgba(255,190,245,0)`),e.fillStyle=a,e.beginPath(),e.moveTo(i-120,0),e.lineTo(i+40,0),e.lineTo(i-80,k),e.lineTo(i-240,k),e.closePath(),e.fill();let o=e.createLinearGradient(0,0,0,k*.32);o.addColorStop(0,`rgba(255,170,240,0.12)`),o.addColorStop(1,`rgba(255,170,240,0)`),e.fillStyle=o,e.fillRect(0,0,_t,k*.32);let s=e.createRadialGradient(_t*1.02,k*.6,10,_t*1.02,k*.6,_t*.32);s.addColorStop(0,u(d(t*.45+2),.16)),s.addColorStop(1,u(d(t*.45+2),0)),e.fillStyle=s,e.fillRect(0,0,_t,k),e.globalCompositeOperation=`destination-in`,e.fillStyle=`#000`,e.beginPath(),e.roundRect(4,4,1016,584,70),e.fill(),e.globalCompositeOperation=`source-over`}function jt(e,t){let n=yt;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,n.shadowBlur=0,n.fillStyle=`#000`,n.fillRect(0,0,_t,k);let r=Et(),i=(e-ze-.35)/.35;if(i<=0)return;n.save();let l=Math.max(6,k*v(i));n.beginPath(),n.rect(0,(k-l)/2,_t,l),n.clip(),i<1&&(n.fillStyle=u(o,.5*(1-i)),n.fillRect(0,(k-l)/2,_t,l)),n.fillStyle=`rgba(20,255,140,0.028)`,n.fillRect(0,0,_t,k),n.fillStyle=`rgba(57,255,136,0.05)`;for(let e=32;e<_t;e+=48)n.fillRect(e,0,1.5,k);for(let e=30;e<k;e+=48)n.fillRect(0,e,_t,1.5);let d=r.find(e=>e.text.startsWith(`$`))?.text.match(/--([\w-]+)/)?.[1];d&&(Ue=d.replace(/-/g,` `).toUpperCase()),n.font=p(28),n.textBaseline=`top`,kt(n,`OBJECTIVE // ${Ue}`.slice(0,34),bt,38,o,.75,8),Math.floor(e*2.2)%2==0&&(n.fillStyle=u(a,.95),n.shadowColor=u(a),n.shadowBlur=14,n.beginPath(),n.arc(860,52,10,0,Math.PI*2),n.fill(),n.shadowBlur=0),kt(n,`LIVE`,880,38,a,.85,8),n.fillStyle=u(o,.35),n.fillRect(bt,84,932,2),n.save(),n.beginPath(),n.rect(0,112,_t,346),n.clip(),n.font=p(xt),Dt=Math.max(16,Math.floor((932-xt*.6)/n.measureText(`0`).width));let h=[];for(let e of r)Ot(e.text).forEach((t,n)=>h.push({text:t,line:e,first:n===0}));let _=h.slice(-7);_.forEach((t,r)=>{let i=0;for(let t=r+1;t<_.length;t++)i+=v((e-_[t].line.at)/.22);let a=t.line,l=v((e-a.at)/.22),d=390-i*St+(1-l)*St*.6;if(d<50)return;let p=g((d-(Ct-St*.6))/(St*.8)),h=t.text;if(a.text.startsWith(`$`)&&t.first)h=h.slice(0,Math.floor((e-a.at)*26));else{let t=(e-a.changed)/.28;if(t<1){let n=Math.floor(e*30);h=[...h].map((e,r)=>e===` `||m(r*31+n*7)<t*1.4-r/h.length*.4?e:f[Math.floor(m(r+n*13)*24)]).join(``)}}let y=r===_.length-1,b=Math.exp(-(((e-a.okAt)/.12)**2)),x=(y||a===_[_.length-1].line?1:.62)*p*(.85+.15*l),S=t.first?Tt(h):null,C=bt;if(S){let e=S[1]===`ok`?o:S[1]===`!`?s:c;kt(n,S[0],C,d,e,g(x+b),14+20*b),C+=n.measureText(S[0]).width,kt(n,h.slice(S[0].length),C,d,S[1]===`!`?s:o,g(x+b*.6),14)}else kt(n,h,C,d,o,x,14);b>.02&&(n.globalCompositeOperation=`lighter`,n.fillStyle=u(o,.18*b),n.fillRect(0,d-6,_t,St),n.globalCompositeOperation=`source-over`),y&&Math.floor(e*3.3)%2==0&&(n.fillStyle=u(o,.9*x),n.shadowColor=u(o),n.shadowBlur=12,n.fillRect(bt+n.measureText(h).width+6,d+5,xt*.55,xt*.86),n.shadowBlur=0)}),n.restore();let y=r.filter(e=>Tt(e.text)),b=y.filter(e=>!e.text.startsWith(`[*]`)).length,x=Math.max(1,y.length),S=732/x;for(let t=0;t<x;t++){let r=y[t],i=bt+t*S;if(n.fillStyle=u(o,.18),n.fillRect(i+3,510,S-7,18),!r)continue;let a=Tt(r.text)[1],l=a===`ok`?o:a===`!`?s:c,d=a===`*`?.25+.6*(1-Math.exp(-(e-r.at)/3))+.05*Math.sin(e*6+t):1;n.fillStyle=u(l,a===`*`?.8:.95),n.shadowColor=u(l),n.shadowBlur=12,n.fillRect(i+3,510,(S-7)*d,18),n.shadowBlur=0}y.length&&(n.font=p(34),kt(n,`${b}/${y.length}`,828,500,o,.9,10)),n.restore(),At(n,e,t)}var Mt=null,Nt=null,Pt=null;function Ft(e,t,n,r,i,a){if(!Mt||Mt.width!==Math.ceil(n/4)||Mt.height!==Math.ceil(r/4)){Mt=b(Math.ceil(n/4),Math.ceil(r/4)),Nt=b(Math.ceil(n/12),Math.ceil(r/12)),Pt=b(n,r);let e=Pt.getContext(`2d`),t=Math.max(3,Math.round(n/270));e.fillStyle=`rgba(0,0,0,0.17)`;for(let i=0;i<r;i+=t)e.fillRect(0,i,n,t*.4);let i=e.createRadialGradient(n/2,r*.45,n*.35,n/2,r*.5,r*.72);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(1,`rgba(0,0,0,0.6)`),e.fillStyle=i,e.fillRect(0,0,n,r)}e.save(),e.setTransform(1,0,0,1,0,0);let o=Mt.getContext(`2d`),s=Nt.getContext(`2d`);if(o.imageSmoothingEnabled=s.imageSmoothingEnabled=!0,o.drawImage(t,0,0,Mt.width,Mt.height),s.drawImage(Mt,0,0,Nt.width,Nt.height),e.globalCompositeOperation=`lighter`,e.globalAlpha=.24*i,e.drawImage(Mt,0,0,n,r),e.globalAlpha=.3*i,e.drawImage(Nt,0,0,n,r),e.globalAlpha=1,e.globalCompositeOperation=`source-over`,a>0)for(let i=0;i<4+a*6;i++){let i=Math.random()*r,o=(4+Math.random()*36)*(n/390);e.drawImage(t,0,i,n,o,(Math.random()-.5)*80*(n/390)*a,i,n,o)}e.drawImage(Pt,0,0),Fe.length&&(e.globalCompositeOperation=`overlay`,e.globalAlpha=.07,e.imageSmoothingEnabled=!1,e.drawImage(Fe[Math.floor(O*24)%Fe.length],0,0,n,r),e.imageSmoothingEnabled=!0),e.restore()}function It(n,r,i,a,o,s){let c=O,l=at();if(s?(yt.setTransform(1,0,0,1,0,0),yt.globalCompositeOperation=`source-over`,yt.globalAlpha=1,yt.drawImage(s,0,0,_t,k),At(yt,c,o)):jt(c,o),n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,!l){gt(c,o,`flat`),n.fillStyle=`#000`,n.fillRect(0,0,r,i);let s=(e,t)=>[r/2+(e-a.cx)*a.s+a.ox,i/2+(t-a.cy)*a.s+a.oy],[l,u]=s(0,0);n.drawImage(lt,l,u,e*a.s,t*a.s);let[d,f]=s(E.x,E.y);n.globalCompositeOperation=`lighter`,n.drawImage(vt,d,f,E.w*a.s,E.h*a.s),n.globalCompositeOperation=`source-over`;return}let u=l.gl;(l.c.width!==r||l.c.height!==i)&&(l.c.width=r,l.c.height=i),u.viewport(0,0,r,i),u.uniform2f(l.uRes,r,i),u.uniform1f(l.uGain,1),u.clearColor(0,0,0,1),u.depthMask(!0),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.disable(u.BLEND),gt(c,o,`back`),ct(u,l.texBack,lt),u.disable(u.DEPTH_TEST),ot(l,l.pic,o,a,r,i,0,!1),st(l,l.pic,l.texBack),gt(c,o,`front`),ct(u,l.texPic,lt,!0),u.enable(u.DEPTH_TEST),u.depthFunc(u.LESS),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA),ot(l,l.pic,o,a,r,i,0,!0),st(l,l.pic,l.texPic),ct(u,l.texHud,vt),ot(l,l.glass,o,a,r,i,2,!0),u.depthFunc(u.LEQUAL),u.depthMask(!1),u.blendFunc(u.ONE,u.ONE),st(l,l.glass,l.texHud),u.disable(u.BLEND),n.drawImage(l.c,0,0)}function Lt(e,t,n){let r=O-ze;if(r>=.5)return;let i=v((r-.02)/.12),a=v((r-.14)/.3),o=Math.max(3*i,n*a);e.save(),e.fillStyle=`#000`,e.fillRect(0,0,t,(n-o)/2),e.fillRect(0,(n+o)/2,t,(n-o)/2+1),e.fillRect(0,0,t*(1-i)/2,n),e.fillRect(t-t*(1-i)/2,0,t*(1-i)/2+1,n),e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(220,255,240,${(1-a)*.9})`,e.fillRect(t*(1-i)/2,(n-o)/2,t*i,o),e.restore()}var Rt=1;function zt(e,t){O+=t,Ie();let n=Math.min(2,window.devicePixelRatio||1)*Rt,r=Math.max(2,Math.round((e.clientWidth||390)*n)),i=Math.max(2,Math.round((e.clientHeight||844)*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=e.getContext(`2d`);if(a.setTransform(1,0,0,1,0,0),!Te){a.fillStyle=`#02000a`,a.fillRect(0,0,r,i),Et();return}let s=Ye(O);It(a,r,i,et(r,i),s);let c=m(Math.floor(O*6)+909)<.04?.5:0;for(let e of Be)O-e>0&&O-e<.16&&(c=.8);Ft(a,e,r,i,1,c);let l=qe(O,.12,.05);l>.01&&(a.globalCompositeOperation=`lighter`,a.fillStyle=u(o,g(.16*l)),a.fillRect(0,0,r,i),a.globalCompositeOperation=`source-over`),Lt(a,r,i)}function Bt(e,t,n,r,i,a,o){if(O+=i,Ie(),e.setTransform(1,0,0,1,0,0),!Te){e.fillStyle=`#04010c`,e.fillRect(0,0,n,r);return}let s=Ye(O);It(e,n,r,nt(n,r,a,s),s,o),Ft(e,t,n,r,.8,Math.random()<.15?.6:0)}var Vt=()=>`<div class="hackloader" id="hackloader"><canvas class="hackart" id="hackart" aria-hidden="true"></canvas></div>`,Ht=()=>(document.getElementById(`after`)?.childElementCount??0)>0,Ut=!1,Wt=0,Gt=null;function Kt(){let e=document.getElementById(`hackart`);if(e&&e!==Gt&&(Gt=e,We()),e&&zt(e,0),Ut)return;Ut=!0,Wt=0;let t=0,n=e=>{let r=document.getElementById(`hackart`);if(r&&Ht()&&(document.getElementById(`hackloader`)?.remove(),document.getElementById(`app`)?.classList.remove(`loading`)),!r||Ht())Ut=!1;else{if(r!==Gt&&(Gt=r,We()),!Wt||e-Wt>=31){let n=Wt?e-Wt:33,i=Math.min(.1,n/1e3);Wt=e,t=n>50&&Te?t+n:0,t>1500&&Rt>.6&&(Rt=Math.max(.6,Rt*.85),t=0),zt(r,i)}requestAnimationFrame(n)}};requestAnimationFrame(n)}var A=window.Telegram?.WebApp;function qt(){return!!A&&A.isVersionAtLeast(`9.0`)&&!!A.SecureStorage}var Jt=15e3;function Yt(e,t,n=Jt){return new Promise((r,i)=>{let a=setTimeout(()=>i(Error(`Telegram didn't respond (${e}).`)),n);try{t((t,n,o)=>{clearTimeout(a),t?i(Error(`${e} failed: ${t}`)):r({value:n,canRestore:!!o})})}catch(t){clearTimeout(a),i(Error(`${e} failed: ${t instanceof Error?t.message:String(t)}`))}})}var Xt={get:e=>Yt(`secure read`,t=>A.SecureStorage.getItem(e,t)),set:(e,t)=>Yt(`secure save`,n=>A.SecureStorage.setItem(e,t,n)),remove:e=>Yt(`secure remove`,t=>A.SecureStorage.removeItem(e,t)),restore:e=>Yt(`secure restore`,t=>A.SecureStorage.restoreItem(e,t))},Zt=5e3;async function Qt(e,t){try{return await Yt(e,t,Zt)}catch(n){if(!(n instanceof Error)||!n.message.startsWith(`Telegram didn't respond`))throw n;return Yt(e,t,Zt*2)}}var j={get:async e=>(await Qt(`device read`,t=>A.DeviceStorage.getItem(e,t))).value,set:(e,t)=>Qt(`device save`,n=>A.DeviceStorage.setItem(e,t,n)),remove:e=>Qt(`device remove`,t=>A.DeviceStorage.removeItem(e,t))};function $t(e){A?.HapticFeedback?.notificationOccurred(e)}function M(){A?.HapticFeedback?.impactOccurred?.(`light`)}function en(){A?.HapticFeedback?.impactOccurred?.(`heavy`)}function tn(e){A?A.openLink(e):window.open(e,`_blank`)}var nn=[57,255,136],rn=[0,240,255],an=[255,43,214],on=(e,t=1)=>`rgba(${e[0]},${e[1]},${e[2]},${t})`,sn=`SNATCHED`,cn=`01$#%&@*+=<>?/\\|`,ln=e=>`900 ${e}px Orbitron, Rajdhani, sans-serif`,un=0,dn=.85,fn=1.25,pn=1.65,mn=1.3,hn=3,gn={covered:.32,slam:.4,hacker:1.0333333333333332,final:4.633333333333333},_n=.95/hn,vn=gn.final+_n,yn=vn+.4,bn=e=>1-(1-Math.min(1,Math.max(0,e)))**3,N=(e,t)=>e+Math.random()*(t-e),xn=e=>e[Math.floor(Math.random()*e.length)],Sn=e=>[...sn].map(t=>Math.random()<e?xn([...cn]):t).join(``);function Cn(e,t,n,r,i=document.createElement(`canvas`)){i.width=e,i.height=t;let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=i.getContext(`2d`);o.font=ln(100);let s=t=>100*e*r/o.measureText(t).width,c=Math.min(s(sn),s(`SNATCHED`)*1.5,t*.55);return{c:i,ctx:o,wc:a,wctx:a.getContext(`2d`),W:e,H:t,u:n,base:c}}function wn(e,t=0){e.ctx.fillStyle=`#04010c`,e.ctx.fillRect(0,0,e.W,e.H),t>0&&(e.ctx.fillStyle=`rgba(230,255,240,${t})`,e.ctx.fillRect(0,0,e.W,e.H))}function Tn(e,t=.22){e.ctx.fillStyle=`rgba(0,0,0,${t})`;for(let t=0;t<e.H;t+=3*e.u)e.ctx.fillRect(0,t,e.W,e.u)}function En(e,t){let{W:n,H:r,u:i,wctx:a,ctx:o}=e,{x:s=n/2,y:c=r/2,size:l=1,rot:u=0,skew:d=0,color:f=nn,split:p=0,slices:m=0,blur:h=0,alpha:g=1}=t,_=t.text??sn;a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,n,r),a.translate(s,c),a.rotate(u),a.transform(1,0,d,1,0,0),a.font=ln(e.base*l),a.textAlign=`center`,a.textBaseline=`middle`,a.filter=h>0?`blur(${h*i}px)`:`none`,p&&(a.globalCompositeOperation=`lighter`,a.fillStyle=on(an,.85),a.fillText(_,-p*i,0),a.fillStyle=on(rn,.85),a.fillText(_,p*i,p*i*.3)),a.globalCompositeOperation=`source-over`,a.shadowColor=on(f,.9),a.shadowBlur=30*i,a.fillStyle=on(f),a.fillText(_,0,0),a.shadowBlur=0,a.fillStyle=`rgba(255,255,255,0.55)`,a.fillText(_,0,0),a.filter=`none`,o.save(),o.globalAlpha=g,o.drawImage(e.wc,0,0);for(let t=0;t<m;t++){let t=N(c-e.base*l*.6,c+e.base*l*.5),r=N(3,22)*i;o.fillStyle=`#04010c`,o.fillRect(0,t,n,r),o.drawImage(e.wc,0,t,n,r,N(-60,60)*i,t,n,r)}o.restore()}var Dn=null,On=0,kn=-1;function An(e,t){let{W:n,H:r,ctx:i}=e;Dn||(Dn=document.createElement(`canvas`),Dn.width=Math.ceil(n/4),Dn.height=Math.ceil(r/4));let a=Dn.getContext(`2d`),o=a.createImageData(Dn.width,Dn.height),s=o.data;for(let e=0;e<s.length;e+=4){let t=Math.random()*255,n=Math.random();s[e]=n<.05?0:t,s[e+1]=n>.96?40:t,s[e+2]=n>.93&&n<.96?120:t,s[e+3]=255}a.putImageData(o,0,0),t>On+.2&&Math.random()<.09&&(On=t+N(.08,.22));let c=.5+.5*Math.sin(t*9)*Math.sin(t*3.7),l=t<On?N(.38,.58):.08+.2*Math.max(0,c);i.save(),i.imageSmoothingEnabled=!1,i.globalAlpha=l,i.drawImage(Dn,0,0,n,r);for(let e=0;e<3;e++){let e=N(0,r),t=N(4,24);i.drawImage(Dn,0,e/r*Dn.height,Dn.width,t/r*Dn.height,N(-60,60),e,n,t)}(kn<0||t-kn>1.1+Math.random()*.6)&&(kn=t);let u=(t-kn)/.7;if(u<1){let e=-.2*r+u*1.4*r,t=r*.22,a=i.createLinearGradient(0,e,0,e+t);a.addColorStop(0,`rgba(120,255,200,0)`),a.addColorStop(.7,`rgba(160,255,220,0.35)`),a.addColorStop(.75,`rgba(220,255,240,0.6)`),a.addColorStop(1,`rgba(120,255,200,0)`),i.globalAlpha=1,i.globalCompositeOperation=`lighter`,i.fillStyle=a,i.fillRect(0,e,n,t),i.globalCompositeOperation=`source-over`}i.globalAlpha=.5,i.fillStyle=`#000`,i.fillRect(0,(1-t*.8%1.3)*r,n,r*.08),i.restore(),Tn(e,.25)}function jn(e,t,n,r=``){let{W:i,H:a,u:o}=e,s=(e,n=0)=>{wn(e,n),r===`g`&&An(e,t)};if(e.ctx.setTransform(1,0,0,1,0,0),e.ctx.globalAlpha=1,e.ctx.globalCompositeOperation=`source-over`,t<dn){n(`slam`+r);let c=(t-un)/.2,l=c<1?2.8-1.8*bn(c):1+(t>.55&&t<.65?.18:0),u=t<.05||t>.55&&t<.59;s(e,u?.9:0),En(e,{size:l,y:a/2+(Math.random()<.2?N(-30,30)*o:0),x:i/2+(Math.random()<.2?N(-20,20)*o:0),split:c<1?26:N(3,12),slices:Math.random()<.3?4:0,color:u?[20,0,40]:nn,text:Math.random()<.12?Sn(.25):sn}),Tn(e)}else if(t<fn){n(`diag`+r);let c=bn((t-dn)/.15),l=-.38*c,u=1+.35*c;s(e,t-dn<.04?.6:0);for(let t=3;t>=1;t--)En(e,{size:u,rot:l,skew:-.25*c,x:i/2-t*22*o*c,y:a/2+t*34*o*c,color:t%2?an:rn,alpha:.09*(4-t)});En(e,{size:u,rot:l,skew:-.25*c,split:N(6,16),slices:Math.random()<.4?5:0,color:Math.floor(t*12)%4==0?an:nn,x:i/2+N(-6,6)*o}),Tn(e)}else if(t<pn){let n=(t-fn)/.3999999999999999,r=Math.sin(Math.PI*Math.min(1,n*1.15))*16,c=bn((n-.45)/.55);s(e),En(e,{size:1.35-.35*c,rot:-.38*(1-c),skew:-.25*(1-c),blur:r,split:r*.6});for(let t=0;t<3;t++){let r=(n*1.6+t/3)%1*a,s=50*o;e.ctx.drawImage(e.c,0,r,i,s,N(-30,30)*o,r,i,s);let c=e.ctx.createLinearGradient(0,r,0,r+s);c.addColorStop(0,`rgba(180,255,220,0)`),c.addColorStop(.5,`rgba(180,255,220,0.25)`),c.addColorStop(1,`rgba(180,255,220,0)`),e.ctx.fillStyle=c,e.ctx.fillRect(0,r,i,s)}Tn(e,.3)}else{s(e);let t=r===`g`&&Math.random()<.12;En(e,{split:t?N(8,16):3,slices:t?4:0,text:t?Sn(.3):sn,color:t&&Math.random()<.5?an:nn,x:i/2+(Math.random()<.3?N(-4,4)*o:0)}),Tn(e)}}var Mn=!1;function Nn(e=`SNATCHED`){if(en(),Mn||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return setTimeout(en,140),Promise.resolve();Mn=!0,sn=e;let t=()=>{},n=new Promise(e=>t=e),r=document.createElement(`canvas`);r.className=`snatchfx`,r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,e),document.body.append(r);let i=Math.min(2,window.devicePixelRatio||1),a=Cn(Math.round(window.innerWidth*i),Math.round(window.innerHeight*i),i,.88,r),{W:o,H:s,ctx:c}=a,l=Cn(640,250,1,.94),u=document.createElement(`canvas`);u.width=o,u.height=s;let d=u.getContext(`2d`),f=document.createElement(`canvas`);f.width=Math.ceil(o/(3*i)),f.height=Math.ceil(s/(3*i));let p=f.getContext(`2d`),m=p.createImageData(f.width,f.height);function h(e,t=`source-over`){if(e<=0)return;let n=m.data;for(let e=0;e<n.length;e+=4){let t=Math.random()*255,r=Math.random();n[e]=r<.04?0:t,n[e+1]=r>.97?40:t,n[e+2]=r>.94&&r<.97?120:t,n[e+3]=255}p.putImageData(m,0,0),c.save(),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation=t,c.globalAlpha=e,c.imageSmoothingEnabled=!1,c.drawImage(f,0,0,o,s);for(let e=0;e<4;e++){let e=N(0,s),t=N(4,26)*i;c.drawImage(f,0,e/s*f.height,f.width,t/s*f.height,N(-80,80)*i,e,o,t)}let r=S*1.7%1.4*s-.2*s;c.globalAlpha=e*.6,c.fillStyle=`#000`,c.fillRect(0,r,o,s*.1),c.restore()}let g=e=>e<.1?.4*(1-e/.1)+.12:Math.random()<.14?N(.22,.36):N(.07,.14),_=Array.from({length:14},(e,t)=>({delay:N(0,.14),from:t%2?1:-1}));function v(e){c.clearRect(0,0,o,s);let t=s/14;_.forEach((n,r)=>{let a=bn((e-n.delay)/.16),s=o*a,l=n.from<0?0:o-s;c.fillStyle=`#04010c`,c.fillRect(l,r*t,s,t+1),a>0&&a<1&&(c.fillStyle=on(r%3==0?an:r%3==1?rn:nn,.9),c.fillRect(n.from<0?s-4*i:l,r*t,4*i,t+1))}),h(.16,`source-atop`)}function y(e){c.fillStyle=`rgba(230,255,240,${.3*(1-e)})`,c.fillRect(0,0,o,s);for(let e=0;e<5;e++){let e=N(0,s),t=N(6,40)*i;c.drawImage(r,0,e,o,t,N(-50,50)*i,e,o,t)}}function b(e,t){e<.4?(wn(l),Tn(l)):jn(l,(e-.4)*mn,()=>{},`g`);let n=Math.min(1,e/(gn.final-gn.hacker)),a=n<.5?4*n*n*n:1-(-2*n+2)**3/2;if(Bt(c,r,o,s,t,a,l.c),Math.random()<.15)for(let e=0;e<3;e++){let e=N(0,s),t=N(4,30)*i;c.drawImage(r,0,e,o,t,N(-30,30)*i,e,o,t)}}let x=performance.now(),S=0,C=1/0,w=new Set,T=e=>{w.has(e)||(w.add(e),en())};r.addEventListener(`pointerdown`,()=>{t(),C===1/0&&(C=S)});let E=e=>{let n=(e-x)/1e3,l=Math.min(.1,Math.max(0,n-S));S=n;let f=C<1/0?Math.max(vn,vn+(n-C)):n;if(c.setTransform(1,0,0,1,0,0),c.globalAlpha=1,c.globalCompositeOperation=`source-over`,f<gn.slam)v(f),f>=gn.covered&&t(),f>gn.slam-.06&&(c.fillStyle=`#fff`,c.fillRect(0,s/2-3*i,o,6*i));else if(f<gn.hacker){t(),jn(a,(f-gn.slam)*hn,T);let e=(f-gn.slam)*hn,n=Math.min(...[un,dn,fn].map(t=>e>=t?(e-t)/hn:9));h(g(n))}else if(f<gn.final)T(`hacker`),b(f-gn.hacker,l),Tn(a,.18),f-gn.hacker<.08&&y((f-gn.hacker)/.08),f-gn.hacker<.18&&h(.32*(1-(f-gn.hacker)/.18));else if(f<vn){T(`final`);let e=(f-gn.final)*hn,t=e/.18,n=e>.4&&e<.52;wn(a,e<.04?.8:0),En(a,{size:t<1?1.9-.9*bn(t):n?1.25:1,rot:n?.3:0,skew:n?.3:0,split:t<1?20:n?18:2+Math.sin(f*30)*2,slices:n||Math.random()<.1?5:0,color:n?an:nn}),Tn(a),h(g(f-gn.final)),d.clearRect(0,0,o,s),d.drawImage(r,0,0)}else if(f<yn){t(),w.has(`buffered`)||(w.add(`buffered`),d.getImageData(o>>1,s>>1,1,1).data[3]===0&&(wn(a),En(a,{}),d.drawImage(r,0,0)));let e=(f-vn)/(yn-vn),n=Math.max(.004,1-bn(e/.45)),l=e<.45?1:Math.max(.01,1-bn((e-.45)/.35));c.fillStyle=`#04010c`,c.fillRect(0,0,o,s),c.drawImage(u,o/2-o*l/2,s/2-s*n/2,o*l,s*n),c.globalCompositeOperation=`lighter`,c.fillStyle=`rgba(220,255,240,${Math.min(1,e*3)*(1-e)})`,c.fillRect(o/2-o*l/2,s/2-Math.max(2*i,s*n/2),o*l,Math.max(4*i,s*n)),r.style.opacity=e<.6?`1`:String(1-(e-.6)/.4)}else{r.remove(),Mn=!1,t();return}requestAnimationFrame(E)};return requestAnimationFrame(E),n}var Pn=`@font-face{font-family:Orbitron;font-weight:400 900;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:500;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:700;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}:root{--bg:#05010f;--text:#e8f9ff;--hint:#8f9cc8;--cyan:#00f0ff;--pink:#ff2bd6;--panel:#0a0f24d9;--row:#0c0a22d9;--danger:#ff3b6b;--amber:#ffb800;--button:var(--cyan);--display:"Orbitron", "Rajdhani", sans-serif;--cut:polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));--cut-s:polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px));--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}*{box-sizing:border-box}html{background:var(--bg)}body{min-height:100vh;color:var(--text);-webkit-tap-highlight-color:transparent;background:linear-gradient(#05010f 0%,#0b0420 55%,#1a0633 100%) fixed;margin:0;font:500 17px/1.4 Rajdhani,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body:before{content:"";z-index:0;pointer-events:none;transform-origin:bottom;background:linear-gradient(#ff2bd626 2px,#0000 2px) 0 0/100% 26px,linear-gradient(90deg,#00f0ff38 2px,#0000 2px) 0 0/34px 100%;height:42vh;animation:3s linear infinite floor;position:fixed;bottom:0;left:-50%;right:-50%;transform:perspective(220px)rotateX(58deg);-webkit-mask:linear-gradient(#0000,#000 70%);mask:linear-gradient(#0000,#000 70%)}@keyframes floor{to{background-position:0 26px,0 0}}body:after{content:"";z-index:50;pointer-events:none;background:repeating-linear-gradient(0deg,#ffffff07 0 1px,#0000 1px 3px);position:fixed;inset:0}main{z-index:1;max-width:480px;margin:0 auto;padding:16px 16px 40px;position:relative}.brand{align-items:center;gap:10px;margin:0 0 16px;display:flex}.brand .logo{background:var(--cyan);color:#000;width:38px;height:38px;clip-path:var(--cut-s);box-shadow:0 0 18px var(--cyan);flex:none;place-items:center;font-size:20px;display:grid}.brand .name{font:900 19px/1 var(--display);letter-spacing:1px;color:#fff;text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 16px #00f0ff88;position:relative}.glitch:before,.glitch:after{content:attr(data-text);pointer-events:none;position:absolute;inset:0;overflow:hidden}.glitch:before{color:var(--cyan);text-shadow:-2px 0 var(--pink);animation:3.2s step-end infinite slice}.glitch:after{color:var(--pink);text-shadow:2px 0 var(--cyan);animation:2.7s step-end infinite reverse slice}@keyframes slice{0%,86%,to{clip-path:inset(0 0 100%);transform:none}88%{clip-path:inset(20% 0 55%);transform:translate(-3px)}90%{clip-path:inset(60% 0 10%);transform:translate(3px)}92%{clip-path:inset(40% 0 35%);transform:translate(-2px)}94%{clip-path:inset(0 0 100%)}}h1{font:900 18px/1.2 var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--cyan);text-shadow:0 0 12px #00f0ff88;margin:6px 0 12px}h2{font:600 12px/1.2 var(--display);text-transform:uppercase;letter-spacing:2.5px;color:var(--hint);margin:22px 2px 10px}p{margin:0 0 14px}b{font-weight:700}.muted{color:var(--hint);font-size:15px}.note,.warning{border-left:3px solid var(--amber);clip-path:var(--cut-s);background:#ffb80014;padding:10px 12px;font-size:15px}.warning{border-left-color:var(--danger);background:#ff3b6b17}.error{color:var(--danger);font-size:15px}a{color:var(--cyan)}a.tx,a.acct,a.coin{color:var(--cyan);border-bottom:1px dashed #00f0ff88;text-decoration:none}.total{clip-path:var(--cut);background:var(--panel);border:1px solid var(--cyan);margin:0 0 14px;padding:16px;position:relative;box-shadow:inset 0 0 22px #ff2bd626,inset 0 0 0 1px #00f0ff55}.total small{font:600 11px var(--display);text-transform:uppercase;letter-spacing:2px;color:var(--hint);display:block}.total .big{font:900 32px/1.15 var(--display);color:var(--cyan);text-shadow:0 0 14px #00f0ffaa;word-break:break-word;margin:6px 0 2px}.total .big .unit{margin-left:6px;font-size:16px}.total .sub{color:var(--pink);font-weight:700}.ticking{text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ffaa}.card{clip-path:var(--cut);background:var(--panel);border:1px solid #00f0ff66;padding:14px;position:relative}.card .label{font:600 11px var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--hint)}.card .label .bal{color:var(--cyan);letter-spacing:0;text-transform:none;font:700 15px Rajdhani,sans-serif}.card .address{word-break:break-all;color:var(--text);margin:6px 0 10px;font:14px/1.35 ui-monospace,Menlo,monospace}.card button{margin:0}.list{margin:0 0 16px;padding:0;list-style:none}.list li{background:var(--row);border-left:3px solid var(--pink);clip-path:var(--cut-s);align-items:center;gap:10px;margin:0 0 8px;padding:10px 12px;display:flex}.list li>span{color:var(--cyan);font:700 13px var(--display);flex:none;width:36px}.list li code{word-break:break-word;flex:1;min-width:0;font:500 16px/1.35 Rajdhani,sans-serif}.list li code small,.list li small{color:var(--hint);font:500 14px/1.35 Rajdhani,sans-serif}.list li .bal{color:var(--cyan);font-weight:700}.coins li{border-left-color:var(--cyan)}.coins .grow{flex:1;min-width:0}.coins .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:17px;display:block;overflow:hidden}.coins .grow small{display:block}.coins .right{text-align:right;white-space:nowrap;font-size:16px;font-weight:700}.coins .right small{font-weight:500;display:block}.coins .right.up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.coins .right.down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.coins .right .move{font:700 12px var(--display);letter-spacing:.5px}.coins .right.up .move{color:#39ff88}.coins .right.down .move{color:var(--danger)}.coins li:has(.right.up){border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.coins li:has(.right.down){border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.live{font:700 10px var(--display);letter-spacing:1.5px;color:#39ff88;vertical-align:2px;border:1px solid #39ff88aa;margin-left:8px;padding:1px 6px;animation:2s ease-in-out infinite livePulse;display:inline-block}.live:before{content:"● "}.live.beat{animation:.6s ease-out liveBeat,2s ease-in-out .6s infinite livePulse}@keyframes livePulse{50%{opacity:.45}}@keyframes liveBeat{0%{box-shadow:0 0 12px #39ff88}}.coins .right.bump .val{animation:.7s ease-out valBump}@keyframes valBump{0%{text-shadow:0 0 14px;filter:brightness(1.8)}}@media (prefers-reduced-motion:reduce){.live,.live.beat,.coins .right.bump .val{animation:none}}.av{background:hsl(var(--hue,190) 90% 55%);color:#05010f;width:36px;height:36px;font:900 12px var(--display);box-shadow:0 0 10px hsl(var(--hue,190) 90% 55% / .5);border-radius:4px;flex:none;place-items:center;display:grid;position:relative;overflow:hidden}.av img{object-fit:cover;background:#05010f;width:100%;height:100%;position:absolute;inset:0}.av.sol{color:#fff;background:linear-gradient(135deg,#9945ff,#14f195)}label{color:var(--hint);margin:0 0 14px;font-size:15px;display:block}label.check{color:var(--text);align-items:center;gap:10px;font-size:17px;display:flex}input,textarea{width:100%;color:var(--text);clip-path:var(--cut-s);background:#0a0f24;border:1px solid #00f0ff55;border-radius:0;outline:none;margin-top:6px;padding:12px;font:500 17px Rajdhani,sans-serif;display:block}input:focus,textarea:focus{border-color:var(--cyan);box-shadow:inset 0 0 12px #00f0ff44}input[type=checkbox]{clip-path:none;width:20px;height:20px;accent-color:var(--pink);margin:0}button{width:100%;font:700 12.5px var(--display);text-transform:uppercase;letter-spacing:1.5px;clip-path:var(--cut-s);color:var(--cyan);box-shadow:inset 0 0 0 1px var(--cyan), inset 0 0 12px #00f0ff40;background:#00f0ff12;border:0;border-radius:0;margin:0 0 10px;padding:14px 10px;transition:transform 80ms,filter .15s;display:block}button:active{filter:brightness(1.3);transform:scale(.98)}button.primary{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5}button.danger{color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger);background:#ff3b6b10}button:disabled{opacity:.4;filter:grayscale(.6)}.row{gap:8px;display:flex}.row button{flex:1}.words{counter-reset:w;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 14px;padding:0;list-style:none;display:grid}.words li{counter-increment:w;background:var(--row);border-left:2px solid var(--cyan);clip-path:var(--cut-s);padding:8px 10px;font-size:18px;font-weight:700}.words li:before{content:counter(w) ". ";color:var(--pink);font-weight:500}.center{text-align:center;color:var(--hint);font:600 13px var(--display);letter-spacing:1.5px;text-transform:uppercase;padding-top:80px}.spinner{border:3px solid #00f0ff22;border-top-color:var(--cyan);border-right-color:var(--pink);border-radius:50%;width:46px;height:46px;margin:0 auto 16px;animation:.7s linear infinite spin;box-shadow:0 0 18px #00f0ff55}@keyframes spin{to{transform:rotate(360deg)}}pre.details{white-space:pre-wrap;word-break:break-word;background:var(--row);clip-path:var(--cut-s);padding:10px 12px;font-size:13px}.version{text-align:center;color:var(--hint);font:600 10px var(--display);letter-spacing:2px;opacity:.7;margin-top:28px}.pickrow{align-items:center;gap:8px;display:flex}.pickrow input{width:22px;height:22px;accent-color:var(--pink);flex:none;margin:0;padding:0}.burst{z-index:100;pointer-events:none;background:#05010fcc;place-items:center;animation:1.3s forwards burst;display:grid;position:fixed;inset:0}.burst:before{content:"";background:repeating-linear-gradient(0deg,#00f0ff22 0 2px,#0000 2px 9px),repeating-linear-gradient(0deg,#0000 0 37px,#ff2bd655 37px 41px);animation:.18s steps(2,end) infinite bars;position:absolute;inset:0}.burst-word{font:900 52px/1 var(--display);color:#fff;letter-spacing:3px;text-shadow:4px 0 var(--pink), -4px 0 var(--cyan), 0 0 30px var(--cyan);animation:.12s steps(2,end) 6 jolt;position:relative}.burst-word:before,.burst-word:after{content:attr(data-text);position:absolute;inset:0}.burst-word:before{color:var(--cyan);animation:.25s step-end infinite cut1}.burst-word:after{color:var(--pink);animation:.2s step-end infinite cut2}@keyframes burst{0%{opacity:0}6%{opacity:1}75%{opacity:1}to{opacity:0}}@keyframes bars{to{background-position:0 9px,0 41px}}@keyframes jolt{0%{transform:translate(-6px,2px)skew(-8deg)}50%{transform:translate(5px,-2px)skew(6deg)}}@keyframes cut1{0%{clip-path:inset(10% 0 60%);transform:translate(-8px)}50%{clip-path:inset(55% 0 20%);transform:translate(6px)}}@keyframes cut2{0%{clip-path:inset(70% 0 5%);transform:translate(7px)}50%{clip-path:inset(25% 0 50%);transform:translate(-5px)}}.shake main{animation:.45s shake}@keyframes shake{0%,to{filter:none;transform:none}20%{filter:hue-rotate(60deg);transform:translate(-4px,1px)}40%{transform:translate(4px,-1px)}60%{filter:hue-rotate(-60deg);transform:translate(-2px)}80%{transform:translate(2px)}}@media (prefers-reduced-motion:reduce){*,:before,:after{transition:none!important;animation:none!important}}.list li small.error{color:var(--danger)}.pinvalue{opacity:0;pointer-events:none;border:0;width:1px;height:1px;margin:0;padding:0;position:absolute}.pindots{justify-content:center;gap:14px;margin:0 0 4px;padding:14px 0 18px;display:flex}.pindots i{background:0 0;border:2px solid #00f0ff66;width:16px;height:16px;transition:background .1s,box-shadow .1s,border-color .1s;transform:rotate(45deg)}.pindots.active i{border-color:var(--cyan)}.pindots i.on{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px var(--pink)}.pindots.nope{animation:.4s nope}.pindots.nope i{border-color:var(--danger)}@keyframes nope{20%{transform:translate(-10px)}40%{transform:translate(9px)}60%{transform:translate(-6px)}80%{transform:translate(4px)}}.keypad{grid-template-columns:repeat(3,1fr);gap:10px;margin:6px 0 16px;display:grid}.keypad .key{font:900 24px/1 var(--display);letter-spacing:0;color:var(--text);text-shadow:0 0 10px #00f0ffaa;-webkit-user-select:none;user-select:none;background:#0c0a22e6;margin:0;padding:16px 0;box-shadow:inset 0 0 0 1px #00f0ff88,inset 0 0 14px #00f0ff30}.keypad .key:active{background:var(--pink);color:#fff;box-shadow:0 0 22px var(--pink), inset 0 0 0 1px #fff;filter:none;transform:scale(.96)}.keypad .key.fn{color:var(--pink);text-shadow:0 0 8px #ff2bd688;font-size:15px}.coinhead{align-items:center;gap:12px;margin:0 0 12px;display:flex}.coinhead .av{width:46px;height:46px;font-size:15px}.coinhead b{font-size:20px;display:block}.coinhead small{color:var(--hint);font-size:14px}.avail{justify-content:space-between;align-items:baseline;margin:0 2px 6px;display:flex}.avail small{font:600 11px var(--display);letter-spacing:2px;color:var(--hint);text-transform:uppercase}.avail>span{font:900 18px var(--display);color:var(--cyan);text-shadow:0 0 10px #00f0ffaa}.amountbox{padding:8px 16px 10px}.amount{text-align:center;padding:12px 0 4px}.amount .num{font:900 46px/1 var(--display);color:#fff;text-shadow:3px 0 var(--pink), -3px 0 var(--cyan), 0 0 22px #00f0ff88;word-break:break-all}.amount .num:after{content:"";background:var(--pink);vertical-align:-.05em;width:3px;height:.85em;box-shadow:0 0 8px var(--pink);margin-left:4px;animation:1s step-end infinite blink;display:inline-block}.amount .num.over{color:var(--danger);text-shadow:0 0 18px var(--danger)}@keyframes blink{50%{opacity:0}}.amount .unit{font:700 16px var(--display);color:var(--cyan);margin-left:6px}.amount .usd{color:var(--hint);min-height:1.4em;margin-top:8px;font-size:15px}input.slider{appearance:none;clip-path:none;width:100%;height:34px;box-shadow:none;background:0 0;border:0;margin:8px 0 2px;padding:0}input.slider::-webkit-slider-runnable-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px;box-shadow:0 0 10px #ff2bd688}input.slider::-webkit-slider-thumb{-webkit-appearance:none;background:var(--pink);width:24px;height:24px;box-shadow:0 0 16px var(--pink), inset 0 0 0 2px #fff;border:0;margin-top:-10px;transform:rotate(45deg)}input.slider::-moz-range-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px}input.slider::-moz-range-thumb{background:var(--pink);border:2px solid #fff;border-radius:0;width:22px;height:22px;transform:rotate(45deg)}input.slider:focus{box-shadow:none}.ticks{color:var(--hint);font:600 10px var(--display);justify-content:space-between;margin:0 2px 10px;display:flex}.chips{grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 12px;display:grid}.chips button{margin:0;padding:9px 0;font-size:11px}.walletsrow{background:var(--row);border-left:3px solid var(--cyan);clip-path:var(--cut-s);justify-content:space-between;align-items:center;margin:0 0 12px;padding:8px 12px;display:flex}.walletsrow small{color:var(--hint);font-size:13px;display:block}.stepper{align-items:center;gap:12px;display:flex}.stepper button{width:40px;margin:0;padding:8px 0;font-size:18px}.stepper b{font:900 22px var(--display);color:var(--cyan);text-align:center;min-width:28px}.stepper.wide{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px;display:grid}.stepper.wide button{width:auto}.keypad{gap:8px;margin:0 0 12px}.keypad .key{padding:14px 0}.keypad .key.dot{font-size:30px;line-height:.8}button.go{padding:16px 10px;font-size:14px}.stepper button{padding:4px 0 6px;font:700 26px/1 Rajdhani,sans-serif}.coins li[data-mint]{cursor:pointer}.coins li[data-mint]:active{filter:brightness(1.3)}.coinhead .live{margin-left:auto}.avail .paid{color:var(--hint);text-shadow:none}.avail.pl.up>span{color:#39ff88;text-shadow:0 0 10px #39ff88aa}.avail.pl.down>span{color:var(--danger);text-shadow:0 0 10px #ff3b6baa}button.gold{color:#1a1000;background:var(--amber);text-shadow:none;box-shadow:inset 0 0 14px #fff6,0 0 16px #ffb80066}button.gold.on{box-shadow:inset 0 0 0 2px #fff,0 0 22px #ffb800cc}.initnote{text-align:center;margin:0 0 12px;font-size:14px}.avail[hidden]{display:none}.solamt,.coinamt{cursor:pointer;text-underline-offset:3px;-webkit-text-decoration:underline dotted #ffffff40;text-decoration:underline dotted #ffffff40}.solamt.usd,.coinamt.usd{color:#39ff88;text-shadow:0 0 8px #39ff8866}.seg{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 10px;display:grid}.seg button{opacity:.55;margin:0;padding:11px 0;font-size:13px}.seg button.on{opacity:1;box-shadow:inset 0 0 0 2px var(--cyan), 0 0 14px #00f0ff66}.seg.small button{padding:8px 0;font-size:11px}.amountbox #when{color:var(--hint);margin-bottom:2px;font-size:12px;display:block}button.small{width:auto;margin:6px 0 0;padding:6px 14px;font-size:11px}.coins small.inorder{color:var(--amber)}.brand .navback{width:38px;height:38px;font:900 22px/1 var(--display);color:var(--cyan);box-shadow:inset 0 0 0 2px var(--cyan), 0 0 12px #00f0ff55;clip-path:var(--cut-s);background:0 0;flex:none;place-items:center;margin:0;padding:0;display:grid}.brand .navback:active{background:var(--cyan);color:#000}#app:has(#after:empty) .navback{visibility:hidden}.openwallet{cursor:pointer}.openwallet:active{filter:brightness(1.3)}.openwallet .open{float:right;color:var(--cyan);font:700 11px var(--display);letter-spacing:1px}.loader{z-index:40;background:#000;position:fixed;inset:0}.loader .ascii{width:100%;height:100%;display:block}.loader .ascii i{font-style:normal}.ascii .kc{color:var(--cyan);text-shadow:0 0 6px #00f0ffaa}.ascii .kp{color:var(--pink);text-shadow:0 0 6px #ff2bd6aa}.ascii .kg{color:#39ff88;text-shadow:0 0 6px #39ff88aa}.ascii .kr{color:var(--danger);text-shadow:0 0 6px #ff3b6baa}.ascii .ka{color:var(--amber);text-shadow:0 0 8px #ffb800cc}.ascii .kw{color:#fff;text-shadow:0 0 8px #fff}.ascii .kd{color:#1a2050}.ascii .kh{color:#2c3a8c}.ascii .kv{color:#5b3ab8}.ascii .kf{color:#3a1f4f}.ascii .kc,.ascii .kp,.ascii .kg,.ascii .kr{opacity:.9}.loadtag{font:900 16px var(--display);letter-spacing:3px;color:var(--cyan);text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ff88;margin:14px 0 4px}.loadtag.hit{color:#39ff88;text-shadow:2px 0 var(--pink), -2px 0 #39ff88, 0 0 18px #39ff88;animation:.25s steps(2,end) 2 tagjolt}@keyframes tagjolt{50%{transform:translate(3px)skew(-8deg)}}.loadlabel{color:var(--hint);font:600 12px var(--display);letter-spacing:1.5px;text-transform:uppercase;margin:4px 16px}.loader .ascii.flash{filter:brightness(1.5)saturate(1.4);box-shadow:inset 0 0 0 2px #39ff88,0 0 40px #39ff88aa}.ascii .kC{color:#00f0ff;opacity:.28}.ascii .kP{color:#ff2bd6;opacity:.28}.ascii .kG{color:#39ff88;opacity:.28}.ascii .kR{color:#ff3b6b;opacity:.28}#app.loading .brand,#app.loading .version,#app.loading .note{display:none}.hackloader{z-index:40;background:#000;position:fixed;inset:0;overflow:hidden}.hackloader .hackart{background:#02000a;width:100%;height:100%;display:block;position:absolute;inset:0}.hackloader .loadterm{z-index:1;visibility:hidden;color:#39ff88;text-shadow:0 0 6px #39ff88aa}.hackloader .loadterm .cur{background:#39ff88}.brand .logo.sol{background:#05010f;position:relative;overflow:hidden;box-shadow:0 0 18px #00f0ff66,inset 0 0 0 1px #00f0ff88}.logo.sol svg{width:26px;height:19px;position:absolute;top:9px;left:6px}.logo.sol .sol-main{filter:drop-shadow(0 0 4px #9a5cff);animation:3.2s step-end infinite solmain}.logo.sol .sol-c,.logo.sol .sol-p{opacity:0;mix-blend-mode:screen}.logo.sol .sol-c{animation:3.2s step-end infinite solc}.logo.sol .sol-p{animation:3.2s step-end infinite solp}@keyframes solmain{0%,84%,to{clip-path:none;transform:none}86%{clip-path:inset(0 0 40%);transform:translate(2px)}89%{clip-path:none;transform:translate(-2px)skew(-8deg)}92%{clip-path:inset(35% 0 0);transform:translate(1px)}95%{clip-path:none;transform:none}}@keyframes solc{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(0 0 55%);transform:translate(-3px)}89%{opacity:.85;clip-path:inset(40% 0 25%);transform:translate(-2px,1px)}92%{opacity:.7;clip-path:inset(70% 0 0);transform:translate(-4px)}95%{opacity:.5;clip-path:none;transform:translate(-1px)}}@keyframes solp{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(45% 0 0);transform:translate(3px)}89%{opacity:.85;clip-path:inset(0 0 60%);transform:translate(2px,-1px)}92%{opacity:.7;clip-path:inset(20% 0 45%);transform:translate(4px)}95%{opacity:.5;clip-path:none;transform:translate(1px)}}@media (prefers-reduced-motion:reduce){.logo.sol svg{animation:none!important}}.snatchfx{z-index:60;touch-action:none;width:100vw;height:100vh;position:fixed;inset:0}.pnl .pv{font:700 16px var(--display);letter-spacing:.5px;white-space:nowrap;color:var(--hint)}.pnl .pv.big{flex:none;font-size:17px}.pnl .pv.up,.total.pnl .up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.pnl .pv.down,.total.pnl .down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.pnl .pv.none{letter-spacing:0;color:var(--hint);text-shadow:none;font:500 13px Rajdhani,sans-serif}.card .label .pv{font-size:15px}.total.pnl{cursor:pointer}.total.pnl .big span{transition:color .2s}.list.pnl li.pnlup{border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.list.pnl li.pnldown{border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.pnl .right{cursor:pointer}.pnltabs{gap:8px;margin:0 0 14px;display:flex}.pnltabs button{font:700 16px var(--display);flex:1;margin:0;padding:10px 0}.pnltabs button.on{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5,0 0 14px #ff2bd688}.trades li{border-left-color:var(--cyan)}.trades .grow{flex:1;min-width:0}.trades .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:16px;display:block;overflow:hidden}.trades .grow small{display:block}.trades .tag{width:44px;font:700 11px var(--display);letter-spacing:1px;color:var(--cyan);flex:none}.trades li.sell .tag{color:var(--pink)}.trades .right{text-align:right}.trades .right small{color:var(--hint);font:500 13px Rajdhani,sans-serif;display:block}.trades .pv.spent{color:var(--text);text-shadow:none}.loadterm{left:12px;right:12px;bottom:calc(24px + env(safe-area-inset-bottom));pointer-events:none;color:#00f0ff;text-shadow:0 0 6px #00f0ffaa;font:700 12px/16px ui-monospace,Menlo,Consolas,monospace;position:absolute}.loadterm .tl{white-space:pre;opacity:.6;background:#0009;width:fit-content;max-width:100%;padding:0 3px;overflow:hidden}.loadterm .tl:nth-last-child(2){opacity:.8}.loadterm .tl:last-child{opacity:1}.loadterm .cur{vertical-align:-1px;background:#00f0ff;width:8px;height:12px;margin-left:2px;animation:.66s step-end infinite termBlink;display:inline-block}@keyframes termBlink{50%{opacity:0}}.sharecard{clip-path:var(--cut);aspect-ratio:1080/1350;background:#000;margin:12px 0;box-shadow:0 0 24px #00f0ff44}.sharecard img{-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto;width:100%;height:100%;display:block}.sharecard.hint{animation:1.2s ease-out 2 cardHint}@keyframes cardHint{50%{box-shadow:0 0 36px #ff2bd6}}.cardme{color:var(--hint);align-items:center;gap:10px;margin:10px 2px;display:flex}.cardme input{width:20px;height:20px;accent-color:var(--pink)}.coins small.share{color:var(--pink);font:700 11px var(--display);letter-spacing:.5px}`,Fn=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function In(e,t,n,{ms:r=1100,delay:i=0,final:a=n(t)}={}){if(Fn()||!Number.isFinite(t)||t===0){e.textContent=a;return}e.classList.add(`ticking`);let o=performance.now()+i,s=i=>{let c=Math.min(1,Math.max(0,(i-o)/r));c>=1?(e.textContent=a,e.classList.remove(`ticking`)):(e.textContent=n(t*(1-2**(-10*c))).replace(/\d(?=\d?$)/g,()=>String(Math.floor(Math.random()*10))),requestAnimationFrame(s))};requestAnimationFrame(s)}function Ln(e,t){let n=e.replace(/[^A-Za-z0-9◎]/g,``).slice(0,2).toUpperCase()||`?`;return`<div class="av" style="--hue:${[...e].reduce((e,t)=>(e*31+t.charCodeAt(0))%360,7)}"><b>${n}</b>${t?`<img alt="" loading="lazy" src="${t.replace(/["<>&]/g,encodeURIComponent)}">`:``}</div>`}function Rn(){document.querySelectorAll(`.av img`).forEach(e=>e.addEventListener(`error`,()=>e.remove()))}var P=1200,zn=`./oni-1.webp`,Bn=[[130,95],[235,235],[285,95],[340,175],[480,140],[625,170],[665,100],[720,215],[835,85],[815,330],[845,420],[800,530],[785,700],[765,850],[705,965],[640,1065],[560,1125],[400,1125],[320,1065],[250,965],[200,850],[180,700],[150,530],[110,420],[150,330]],Vn=800,Hn=4.1,Un=.3,Wn=` .:-=+*#%@`,Gn=8,Kn=13,qn=[{x:12,y:22,w:320,h:225,color:`#ff5a3a`},{x:355,y:22,w:330,h:125,color:`#f0a040`},{x:695,y:22,w:255,h:300,color:`#f5dc55`},{x:12,y:265,w:140,h:560,color:`#a77cf0`},{x:12,y:880,w:320,h:300,color:`#e6e0f0`},{x:770,y:470,w:180,h:700,color:`#b9a3f0`}],Jn=18,F=30,I=32,L=Math.ceil(960/F),R=Math.ceil(P/I),Yn=`鬼武龍金魂刀影雷炎血夜神忍斬闇狐命運盗奪`,Xn=`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン`,Zn=`0123456789`,Qn=[...[...Yn].map(e=>({ch:e,flip:!1})),...[...Xn].map(e=>({ch:e,flip:!0})),...[...Xn].map(e=>({ch:e,flip:!0})),...[...Zn].map(e=>({ch:e,flip:!1}))],$n=`600 27px "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans JP", "Noto Sans CJK JP", sans-serif`,er=12,tr=14,nr=2,rr=.7,ir=8,ar=Math.round(640/I),or=4,sr=.6,cr=1.1,lr=480,ur=`600 15px ui-monospace, Menlo, Consolas, monospace`,dr=55,fr=null,pr=!1,mr=null,hr=null,gr=null,_r=null,vr=null,yr=null,br=null,xr=null,Sr=null,Cr=0,wr=null,Tr=null,Er=null,Dr=null,Or=null,kr=null,Ar=null,jr=null,Mr=null,Nr=null,Pr=null,Fr=null,Ir=null,Lr=null,Rr=null,zr=null,Br=null,Vr=0,z=(e=960,t=P)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function Hr(){let e=z(),t=e.getContext(`2d`);return t.beginPath(),Bn.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t.fillStyle=`#fff`,t.shadowColor=`#fff`,t.shadowBlur=36,t.fill(),t.shadowBlur=0,t.fill(),e}function Ur(e){let t=Hr();hr=z();let n=hr.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(0,0,960,P),n.globalCompositeOperation=`destination-out`,n.drawImage(t,0,0),mr=z(),n=mr.getContext(`2d`),n.drawImage(e,0,0),n.globalCompositeOperation=`destination-in`,n.drawImage(hr,0,0);let r=Math.ceil(960/Gn),i=Math.ceil(P/Kn),a=z(r,i).getContext(`2d`,{willReadFrequently:!0});a.drawImage(e,0,0,r,i);let o=a.getImageData(0,0,r,i).data;Sr=o,Cr=r,gr=z(),n=gr.getContext(`2d`),n.fillStyle=`#000`,n.fillRect(0,0,960,P),n.font=`700 12px ui-monospace, Menlo, Consolas, monospace`,n.textBaseline=`top`;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let i=(e*r+t)*4,a=o[i],s=o[i+1],c=o[i+2],l=(.3*a+.59*s+.11*c)/255,u=Wn[Math.min(9,Math.floor(l**.7*10*1.15))];if(u===` `)continue;let d=Math.min(2.2,1.4/Math.max(.25,Math.max(a,s,c)/255));n.fillStyle=`rgb(${Math.min(255,a*d)|0},${Math.min(255,s*d)|0},${Math.min(255,c*d)|0})`,n.fillText(u,t*Gn,e*Kn)}n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0);let s=t=>{let n=z(),r=n.getContext(`2d`);return r.drawImage(e,0,0),r.globalCompositeOperation=`multiply`,r.fillStyle=t,r.fillRect(0,0,960,P),n};_r=s(`#ff0000`),vr=s(`#00ffff`),yr=z(),br=t,wr=z(),qr(e,t),pr=!0}var Wr=e=>e<0?0:e>1?1:e,Gr=(e,t,n)=>{let r=Wr((n-e)/(t-e));return r*r*(3-2*r)},Kr=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296};function qr(e,t){let n=z(L,R).getContext(`2d`,{willReadFrequently:!0});n.drawImage(e,0,0,L,R);let r=n.getImageData(0,0,L,R).data;n.clearRect(0,0,L,R),n.drawImage(t,0,0,L,R);let i=n.getImageData(0,0,L,R).data,a=new Float32Array(L*R);for(let e=0;e<a.length;e++)a[e]=(.3*r[e*4]+.59*r[e*4+1]+.11*r[e*4+2])/255;let o=(e,t)=>a[Math.max(0,Math.min(R-1,t))*L+Math.max(0,Math.min(L-1,e))];Tr=new Float32Array(L*R);for(let e=0;e<R;e++)for(let t=0;t<L;t++){let n=o(t+1,e)-o(t-1,e),r=o(t,e+1)-o(t,e-1),a=o(t,e)**1.1*1.7+Math.sqrt(n*n+r*r)*.8;Tr[e*L+t]=Wr(a)*(i[(e*L+t)*4+3]/255)}Er=new Int16Array(L).fill(-1);for(let e=0;e<L;e++)for(let t=0;t<R;t++)if(Tr[t*L+e]>.02){Er[e]=t;break}Vr=0;for(let e=0;e<L;e++)for(let t=0;t<R;t++)Tr[t*L+e]>.02&&(Vr=Math.max(Vr,$r(e,t)));Vr+=2.05,Dr=z();let s=Dr.getContext(`2d`,{willReadFrequently:!0});s.drawImage(e,0,0);let c=s.getImageData(0,0,960,P),l=c.data;for(let e=0;e<l.length;e+=4){let t=l[e],n=l[e+1],r=l[e+2],i=(.3*t+.59*n+.11*r)/255,a=255*(.32+.68*Math.min(1,i*1.6)**.6)/Math.max(t,n,r,1);l[e]=Math.min(255,t*a+18),l[e+1]=Math.min(255,n*a+18),l[e+2]=Math.min(255,r*a+18)}s.putImageData(c,0,0);let u=Qn.length;Or=z(u*F,I),kr=z(u*58,60);let d=(e,t,n,r)=>{let i=Qn[t];e.save(),e.translate(n,r),i.flip&&e.scale(-1,1),e.fillText(i.ch,0,0),e.strokeText(i.ch,0,0),e.restore()};for(let[e,t]of[[Or,!1],[kr,!0]]){let n=e.getContext(`2d`);n.font=$n,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#fff`,n.strokeStyle=`#fff`,n.lineWidth=.6,n.lineJoin=`round`,t&&(n.shadowColor=`#fff`,n.shadowBlur=12);for(let e=0;e<u;e++)t?d(n,e,e*58+tr+F/2,31):d(n,e,e*F+F/2,17)}Ar=z();let f=t=>{let n=z(L*t,R*t);return n.getContext(`2d`).drawImage(e,0,0,960/F*t,P/I*t),n};jr=f(2),Mr=f(6),Nr=z();let p=Nr.getContext(`2d`);p.beginPath(),Bn.forEach(([e,t],n)=>n?p.lineTo(e,t):p.moveTo(e,t)),p.closePath(),p.fillStyle=`#fff`,p.strokeStyle=`#fff`,p.lineJoin=`round`,p.shadowColor=`#fff`,p.shadowBlur=90,p.lineWidth=150,p.fill(),p.stroke(),p.shadowBlur=0,p.lineWidth=110,p.fill(),p.stroke(),p.globalCompositeOperation=`destination-out`,p.drawImage(t,0,0),Pr=z(960,P+360);let m=Pr.getContext(`2d`);m.font=`600 12px ui-monospace, Menlo, Consolas, monospace`,m.textBaseline=`top`;let h=[`#9a7cff`,`#c05cff`,`#ff4d6d`,`#ffb84d`,`#7d6bff`];for(let e=0;e<Pr.height;e+=15)for(let t=0;t<960;){let n=60+Math.floor(Math.random()*260);if(Math.random()<.7){m.fillStyle=h[Math.floor(Kr(Math.floor(t/240)*31+Math.floor(e/220)*7)*h.length)],m.globalAlpha=.35+Math.random()*.5;let r=Math.random(),i=r<.35?ui(Math.ceil(n/27)):r<.6?`0x${di()} ${ui(Math.ceil(n/40))}`:r<.8?`[ok] ${di()} ${pi(1,99)}`:`$ ${fi([`scan`,`decode`,`tail -f`,`xxd`,`sync`])} ${di()}`;m.fillText(i.slice(0,Math.floor(n/7.3)),t,e)}t+=n+18}m.globalAlpha=1,Fr=z(),Ir=z(),Lr=z(),Rr=z(),zr=z(L,R),Br=zr.getContext(`2d`).createImageData(L,R)}var Jr=e=>cr*(Math.abs(e+.5-lr/F)/(L/2))**1.1+Kr(e*17+5)*.2,Yr=(e,t)=>Math.max(ar-t*or,Er[e]),Xr=(e,t)=>rr+t*sr+Jr(e)+Kr(e*131+t*977+3)*.55,Zr=(e,t)=>ir*(.8+.5*Kr(e*53+t*29+11)),Qr=e=>e>=ar?0:Math.ceil((ar-e)/or);function $r(e,t){if(Er[e]<0)return 1/0;let n=Qr(t);return Xr(e,n)+(t-Yr(e,n)+1)/Zr(e,n)}var ei=Math.ceil(18/or)+1,ti=e=>Gr(.08,.3,e)*(1-Gr(.5,.8,e)),ni=e=>Gr(.45,.75,e)*(1-Gr(1.05,1.45,e)),ri=e=>Gr(.95,1.6,e),ii=e=>Gr(-.02,.06,e)*(.15+.85*Math.exp(-Math.max(0,e)/.7))*(1-Gr(2.2,3.2,e)),ai=[];for(let e=0;e<L;e++)for(let t=0;t<4;t++){let n=6+Math.floor(Kr(e*31+t*3+1)*15),r=R+n+4,i=1+Math.floor(Kr(e*101+t*7+5)*3);ai.push({c:e,len:n,span:r,rate:i*r/er,phase:Kr(e*13+t+9)*r})}var oi=(e,t)=>{let n=.5*(1+Math.floor(Kr(e*7+3)*3)),r=Math.floor(t*n+Kr(e*7+2)*7);return Math.floor(Kr(e*977+r*7919)*Qn.length)},si=0;function ci(){if(fr||Date.now()<si)return;let e=new Image;fr=e,e.onload=()=>Ur(e),e.onerror=()=>{fr===e&&(fr=null),si=Date.now()+2e3},e.src=zn}var li=ci,ui=e=>Array.from({length:e},()=>Math.floor(Math.random()*256).toString(16).padStart(2,`0`)).join(` `),di=()=>Array.from({length:2},()=>Math.floor(Math.random()*65536).toString(16).padStart(4,`0`)).join(``),fi=e=>e[Math.floor(Math.random()*e.length)],pi=(e,t,n=0)=>(e+Math.random()*(t-e)).toFixed(n),mi=[()=>[`$ ssh root@node${pi(1,99)}.snatch`,`> handshake ok`,`> session ${di()}`],()=>[`$ ./scan --wallets --deep`,`[+] ${di()}..${di().slice(0,4)} found`,`[+] ${pi(2,40)} wallets live`],()=>[`$ jup quote SOL ${fi([`BONK`,`WIF`,`PUMP`,`TARGET`])}`,`[*] route ${pi(1,4)} hops ${pi(.05,.9,2)}%`,`[ok] out ${pi(1e3,99999)}`],()=>[`$ tail -f mempool.log`,`tx ${di()} ${pi(.1,9,2)} SOL`,`tx ${di()} ${pi(.1,9,2)} SOL`,`tx ${di()} ${pi(.1,9,2)} SOL`],()=>[`$ decrypt --key ****${pi(1e3,9999)}`,`0x${di()}: ${ui(6)}`,`0x${di()}: ${ui(6)}`,`[ok] unlocked`],()=>[`$ claw --lock target`,`[*] locking ${di()}`,`[!!] TARGET LOCKED`],()=>[`$ snatch --now`,`[>] ${pi(1,60,1)} SOL tracked`,`[ok] SNATCHED`],()=>[`$ ping rpc.solana`,`64 bytes time=${pi(9,80)}ms`,`64 bytes time=${pi(9,80)}ms`],()=>[`$ cat /dev/oni | xxd`,`${ui(8)}`,`${ui(8)}`,`${ui(8)}`]],hi=qn.map(()=>({lines:[],typing:``,typed:0,queue:[],wait:Math.random()*.8}));function gi(e,t,n){if(e.wait>0)e.wait-=n;else if(e.typing||(e.queue.length||(e.queue=fi(mi)()),e.typing=e.queue.shift(),e.typed=e.typing.startsWith(`$`)?0:e.typing.length),e.typed=Math.min(e.typing.length,e.typed+dr*n*(.7+Math.random()*.6)),e.typed>=e.typing.length){for(e.lines.push(e.typing),e.typing=``,e.typed=0;e.lines.length>t-1;)e.lines.shift();e.wait=e.queue.length?.05+Math.random()*.15:.35+Math.random()*.7}}function _i(e){let t=yr.getContext(`2d`);t.globalCompositeOperation=`source-over`,t.clearRect(0,0,960,P),t.font=ur,t.textBaseline=`top`,qn.forEach((n,r)=>{let i=hi[r];gi(i,Math.floor(n.h/Jn),e);let a=i.typing.slice(0,Math.floor(i.typed)),o=[...i.lines,a];t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip();let s=n.y+n.h-o.length*Jn;if(o.forEach((e,r)=>{let i=s+r*Jn,a=Math.min(n.w,t.measureText(e).width+6);t.fillStyle=`rgba(0,0,0,0.6)`,t.fillRect(n.x,i,a,Jn),t.fillStyle=n.color,t.globalAlpha=r===o.length-1?1:.55+.4*r/o.length,t.fillText(e,n.x+3,i+1),t.globalAlpha=1}),Math.floor(Oi*3)%2==0){let e=n.x+3+t.measureText(a).width;t.fillStyle=n.color,t.fillRect(e,s+(o.length-1)*Jn+2,9,14)}t.restore()}),t.globalCompositeOperation=`destination-in`,t.drawImage(hr,0,0)}var vi=3,yi=Array.from({length:Math.ceil(960/vi)},()=>({len:16+Math.random()**2*240,lead:Math.random()<.18?4+Math.random()*30:0,speed:1+Math.random()*4,phase:Math.random()*7,width:Math.random()<.25?3:1.8,on:Math.random()>.22})),bi=0,xi=.8,Si=1,Ci=null,wi=0;function Ti(e){Ci||=new Float32Array(L*R);let t=Br.data,n=0,r=0;for(let i=0;i<R;i++)for(let a=0;a<L;a++){let o=i*L+a,s=e-$r(a,i)-Kr(o*13+7)*.35;Ci[o]=s;let c=ri(s);t[o*4+3]=255*c,Tr[o]>.02&&(n+=c,r++)}wi=r?n/r:1,zr.getContext(`2d`).putImageData(Br,0,0);let i=Lr.getContext(`2d`);i.globalCompositeOperation=`source-over`,i.clearRect(0,0,960,P),i.drawImage(zr,0,0,L*F,R*I),i.globalCompositeOperation=`destination-in`,i.drawImage(br,0,0);let a=Rr.getContext(`2d`);a.globalCompositeOperation=`source-over`,a.clearRect(0,0,960,P),a.drawImage(gr,0,0),a.globalCompositeOperation=`destination-in`,a.drawImage(Lr,0,0)}function Ei(e,t){let n=Fr.getContext(`2d`);n.globalCompositeOperation=`source-over`,n.clearRect(0,0,960,P),n.globalAlpha=1-Gr(.88,1,wi),n.drawImage(Nr,0,0),n.globalAlpha=1;let r=Ir.getContext(`2d`);r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,P),r.drawImage(br,0,0),r.globalCompositeOperation=`destination-out`,r.drawImage(Lr,0,0),n.globalCompositeOperation=`lighter`,n.drawImage(Ir,0,0),r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,P),r.fillStyle=`#000`,r.fillRect(0,0,960,P),r.globalCompositeOperation=`destination-in`,r.drawImage(Fr,0,0),e.drawImage(Ir,0,0),r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,P),r.drawImage(Pr,0,-(t/nr*22%360)),r.globalCompositeOperation=`destination-in`,r.drawImage(Fr,0,0),e.globalAlpha=.65,e.drawImage(Ir,0,0),e.imageSmoothingEnabled=!1;for(let t=0;t<L*R;t++){if(Tr[t]<=.02)continue;let n=Ci[t];if(n<.08||n>1.6)continue;let r=t%L,i=(t-r)/L,a=1-ri(n),o=ti(n)*a*.9;o>.01&&(e.globalAlpha=o,e.drawImage(jr,r*2,i*2,2,2,r*F,i*I,F,I));let s=ni(n)*a*.95;s>.01&&(e.globalAlpha=s,e.drawImage(Mr,r*6,i*6,6,6,r*F,i*I,F,I))}e.imageSmoothingEnabled=!0,e.globalAlpha=1}function Di(e,t,n,r){let i=Ar.getContext(`2d`);i.globalCompositeOperation=`source-over`,i.globalAlpha=1,i.clearRect(0,0,960,P);let a=[],o=[],s=(e,s,c,l,u)=>{for(let d=0;d<c;d++){let f=s-d;if(f<0||f>=R)continue;let p=f*L+e,m=Tr[p];if(m<=.02)continue;let h=u?l:r&&n<$r(e,f)?0:1;if(h<=0)continue;let g=(1-d/c)**1.15;if(o.push(p,Math.min(1,g*h)),d===0){a.push(p,Math.min(1,.45+.7*m)*Math.min(1,h),(Math.floor(t*15)+e*3)%Qn.length);continue}let _=Math.min(1,(.22+m**.7)*g*h);i.globalAlpha=_;let v=oi(p,t);i.drawImage(Or,v*F,0,F,I,e*F,f*I,F,I)}};for(let e of ai)s(e.c,Math.floor((t*e.rate+e.phase)%e.span)-e.len,e.len,1,!1);if(r){for(let e=0;e<L;e++)if(!(Er[e]<0))for(let t=0;t<ei&&!(t>0&&ar-(t-1)*or<=Er[e]);t++){let r=n-Xr(e,t);if(r<0)continue;let i=Yr(e,t)-1+Math.floor(r*Zr(e,t));i-11>R||s(e,i,Math.min(11,i-Yr(e,t)+1),1.4,!0)}for(let e=0;e<L*R;e++){let n=Tr[e];if(n<=.02)continue;let r=ii(Ci[e])*(.35+.65*n)*.6;if(r<=.01)continue;let a=e%L,o=(e-a)/L;i.globalAlpha=r,i.drawImage(Or,oi(e,t)*F,0,F,I,a*F,o*I,F,I)}}e.fillStyle=`#000`;for(let t=0;t<o.length;t+=2){let n=o[t],r=n%L;e.globalAlpha=.45*o[t+1],e.fillRect(r*F,(n-r)/L*I,F,I)}i.globalAlpha=1,i.globalCompositeOperation=`source-in`,i.drawImage(Dr,0,0),e.globalCompositeOperation=`lighter`,e.globalAlpha=1,e.drawImage(Ar,0,0),e.globalAlpha=.4,e.drawImage(Ar,0,0);for(let t=0;t<a.length;t+=3){let n=a[t],r=n%L,i=(n-r)/L;e.globalAlpha=.9*a[t+1],e.drawImage(kr,a[t+2]*58,0,58,60,r*F-tr,i*I-tr,58,60)}e.globalCompositeOperation=`source-over`;for(let t=0;t<a.length;t+=3){let n=a[t],r=n%L,i=(n-r)/L;e.globalAlpha=a[t+1],e.drawImage(Or,a[t+2]*F,0,F,I,r*F,i*I,F,I)}e.globalAlpha=1}var Oi=0,ki=0,Ai=!1,ji=0,Mi=()=>Math.floor(Oi/Hn);function Ni(e,t){let n=Mi();Oi+=t,ci();let r=e.getContext(`2d`),i=Math.min(2,window.devicePixelRatio||1),a=Math.round((e.clientWidth||340)*i),o=Math.round((e.clientHeight||600)*i);if((e.width!==a||e.height!==o)&&(e.width=a,e.height=o),r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation=`source-over`,r.globalAlpha=1,r.fillStyle=`#000`,r.fillRect(0,0,a,o),!pr||!fr){ji=Oi;return}let s=(Oi-ji)*nr,c=s<Vr;c&&Ti(s);let l=c?Lr:br,u=c?Rr:gr,d=a/o,f=Math.min(960,Math.max(Vn,P*d)),p=f/d,m=a/f,h=-((960-f)/2)*m,g=-((P-p)/2)*m;Mi()!==n&&Mi()%3==0?(bi=Oi+.32,Si=2):Oi>=xi&&(bi=Oi+.06+Math.random()*.18,Si=.6+Math.random()*.8,xi=Oi+.5+Math.random()*1.8);let _=Oi<bi;r.setTransform(m,0,0,m,h,g),p>1200&&(r.globalAlpha=.6,r.save(),r.scale(1,-1),r.drawImage(mr,0,0),r.drawImage(mr,0,-2*P),r.restore(),r.globalAlpha=1),r.drawImage(fr,0,0),r.globalCompositeOperation=`lighter`,r.globalAlpha=.16,r.drawImage(mr,0,0),r.globalCompositeOperation=`source-over`,_i(t),r.globalAlpha=.62,r.drawImage(yr,0,0),r.globalAlpha=1,c&&Ei(r,s),r.globalAlpha=Un+Math.sin(Oi*7)*.03+(_?.25*Si:0),r.drawImage(u,0,0),r.globalAlpha=1,Di(r,Oi,s,c);let v=25+1325*(Oi%Hn/Hn);for(let e=0;e<17;e++){let t=v-170+e*170/17;r.globalAlpha=.06+e/16*.6,r.drawImage(u,0,t,960,11,0,t,960,11)}r.globalAlpha=1;let y=wr.getContext(`2d`);y.globalCompositeOperation=`source-over`,y.globalAlpha=1,y.clearRect(0,0,960,P);let b=Math.max(0,Math.min(Math.ceil(P/Kn)-1,Math.floor(v/Kn)));yi.forEach((e,t)=>{if(!e.on)return;let n=t*vi,r=e.len*(.7+.3*Math.sin(Oi*e.speed+e.phase));Math.random()<.05&&(r*=1.4+Math.random());let i=(b*Cr+Math.min(Cr-1,Math.floor(n/Gn)))*4,a=Sr[i],o=Sr[i+1],s=Sr[i+2],c=Math.min(2.6,1.6/Math.max(.2,Math.max(a,o,s)/255)),l=`${Math.min(255,a*c)|0},${Math.min(255,o*c)|0},${Math.min(255,s*c)|0}`;y.fillStyle=`rgba(${l},0.3)`,y.fillRect(n,v-r,e.width,r*.45),y.fillStyle=`rgba(${l},0.6)`,y.fillRect(n,v-r*.55,e.width,r*.3),y.fillStyle=`rgba(${l},1)`,y.fillRect(n,v-r*.25,e.width,r*.25),e.lead&&(y.fillStyle=`rgba(${l},0.35)`,y.fillRect(n,v,e.width,e.lead*(.6+.4*Math.sin(Oi*2+e.phase)))),r>150&&t%4==0&&(y.fillStyle=`rgba(${l},0.9)`,y.fillRect(n-1.5,v-r-4,4,4))}),y.fillStyle=`rgba(255,255,255,0.35)`;for(let e=0;e<960;e+=24)y.fillRect(e,v-Math.random()*2,18+Math.random()*8,1.5);y.globalCompositeOperation=`destination-in`,y.drawImage(l,0,0),r.globalCompositeOperation=`lighter`,r.drawImage(wr,0,0),r.globalCompositeOperation=`source-over`,r.setTransform(1,0,0,1,0,0);let x=_?3+Math.floor(Math.random()*6*Si):+(Math.random()<.12);if(_||x){xr||=z(a,o),(xr.width!==a||xr.height!==o)&&(xr.width=a,xr.height=o);let t=xr.getContext(`2d`);t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,t.clearRect(0,0,a,o);let n=_?(Math.random()-.5)*14*Si*m:0,i=_?(Math.random()-.5)*6*Si*m:0;t.drawImage(e,n,i);for(let r=0;r<x;r++){let r=Math.random()*o,s=(4+Math.random()*(_?40:10))*m,c=(Math.random()-.5)*(_?80:24)*m*Si;t.drawImage(e,0,r,a,s,c+n,r+i,a,s)}if(_){let e=(6+Math.random()*10)*Si;t.setTransform(m,0,0,m,h+n,g+i),t.globalCompositeOperation=`lighter`,t.globalAlpha=.45,t.drawImage(_r,e,0),t.drawImage(vr,-e,0),t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-atop`,t.globalAlpha=1;for(let e=0;e<3;e++)t.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,t.fillRect(0,Math.random()*o,a,(1+Math.random()*2)*m);Math.random()<.3&&(t.fillStyle=`rgba(0,0,0,0.35)`,t.fillRect(0,0,a,o))}t.globalCompositeOperation=`destination-in`,t.setTransform(m,0,0,m,h,g),t.drawImage(l,0,0),r.drawImage(xr,0,0)}r.fillStyle=`rgba(0,0,0,0.18)`;for(let e=Oi*40%4*m;e<o;e+=4*m)r.fillRect(0,e,a,1.5*m);let S=r.createRadialGradient(a/2,o/2,Math.min(a,o)*.42,a/2,o/2,Math.hypot(a,o)*.55);S.addColorStop(0,`rgba(0,0,0,0)`),S.addColorStop(1,`rgba(0,0,0,0.6)`),r.fillStyle=S,r.fillRect(0,0,a,o),r.setTransform(1,0,0,1,0,0)}var Pi=e=>`<div class="loader"><canvas class="ascii" id="ascii" role="img" aria-label="${e.replace(/"/g,`&quot;`)}"></canvas></div>`;function Fi(){let e=document.getElementById(`ascii`);if(Ai||(ji=Oi),e&&Ni(e,0),Ai)return;Ai=!0,ki=0;let t=e=>{let n=document.getElementById(`ascii`);if(!n){Ai=!1;return}let r=ki?Math.min(.1,(e-ki)/1e3):1/60;ki=e,Ni(n,r),requestAnimationFrame(t)};requestAnimationFrame(t)}var Ii=`<polygon points="53,0 351,0 298,68 0,68"/><polygon points="0,94 298,94 351,162 53,162"/><polygon points="53,188 351,188 298,256 0,256"/>`,Li=(e,t,n=``)=>`<svg class="${e}" viewBox="0 0 351 256" aria-hidden="true">${n}<g fill="${t}">${Ii}</g></svg>`,Ri=`<defs><linearGradient id="solgrad" gradientUnits="userSpaceOnUse" x1="0" y1="256" x2="351" y2="0"><stop offset="0" stop-color="#e028fc"/><stop offset="0.5" stop-color="#7c8be0"/><stop offset="1" stop-color="#1fe9b1"/></linearGradient></defs>`,zi=()=>`<div class="logo sol" aria-label="Solana">${Li(`sol-c`,`#00f0ff`)}${Li(`sol-p`,`#ff2bd6`)}${Li(`sol-main`,`url(#solgrad)`,Ri)}</div>`,Bi=1080,Vi=1350,Hi=`"Orbitron", "Rajdhani", sans-serif`,Ui=`"Rajdhani", -apple-system, sans-serif`,Wi={main:`#2bff88`,glow:`rgba(43,255,136,0.75)`,tint:[20,255,140]},Gi={main:`#ff3b6b`,glow:`rgba(255,59,107,0.75)`,tint:[255,40,90]},Ki=new Map;function qi(e,t){let n=`${t}:${e}`,r=Ki.get(n);return r||(r=new Promise(n=>{let r=new Image;t&&(r.crossOrigin=`anonymous`);let i=setTimeout(()=>n(null),6e3);r.onload=()=>{clearTimeout(i),n(r)},r.onerror=()=>{clearTimeout(i),n(null)},r.src=e}),Ki.set(n,r)),r}function Ji(e){try{let t=document.createElement(`canvas`);t.width=t.height=2;let n=t.getContext(`2d`);return n.drawImage(e,0,0,2,2),n.getImageData(0,0,1,1),!0}catch{return!1}}var Yi=(e,t)=>{let n=Math.abs(e);return t===`sol`?`${n>=100?n.toFixed(1):n>=1?n.toFixed(2):n.toFixed(3)} SOL`:`$${n>=1e3?Math.round(n).toLocaleString(`en-US`):n.toFixed(2)}`},Xi=e=>{let t=Math.abs(e);return`${e>=0?`+`:`−`}${t>=1e3?Math.round(t).toLocaleString(`en-US`):t>=100?Math.round(t):t.toFixed(1)}%`},Zi=(e,t)=>{let n=Math.max(0,t-e);if(n<60)return`${Math.max(1,Math.round(n))}s`;let r=Math.round(n/60);if(r<60)return`${r}m`;let i=Math.floor(r/60);return i<48?`${i}h ${r%60}m`:`${Math.floor(i/24)}d ${i%24}h`};function Qi(e,t,n,r,i,a){let o=r;for(;o>20&&(e.font=`${n} ${o}px ${i}`,!(e.measureText(t).width<=a));o-=4);return o}function $i(e,t,n,r,i,a){e.beginPath(),e.moveTo(t,n),e.lineTo(t+r-a,n),e.lineTo(t+r,n+a),e.lineTo(t+r,n+i),e.lineTo(t+a,n+i),e.lineTo(t,n+i-a),e.closePath()}function ea(e,t,n,r){let i=r?Wi:Gi;if(n===`oni`){let n=Vi/1200*960;e.drawImage(t,0,0,960,1200,150,0,n,Vi)}else{let n=1500,r=Vi/n*1024;e.drawImage(t,0,230,1024,n,418.4,0,r,Vi),e.save(),e.globalCompositeOperation=`multiply`;let a=e.createLinearGradient(0,0,Bi,Vi);a.addColorStop(0,`#00f0ff`),a.addColorStop(.45,`#7a3cff`),a.addColorStop(.7,`#ff2bd6`),a.addColorStop(1,`rgb(${i.tint.join(`,`)})`),e.fillStyle=a,e.fillRect(0,0,Bi,Vi),e.restore()}e.save(),e.globalCompositeOperation=`source-over`;let a=e.createLinearGradient(0,0,Bi,0);a.addColorStop(0,`rgba(5,1,15,0.97)`),a.addColorStop(.42,`rgba(5,1,15,0.82)`),a.addColorStop(.75,`rgba(5,1,15,0.15)`),a.addColorStop(1,`rgba(5,1,15,0.05)`),e.fillStyle=a,e.fillRect(0,0,Bi,Vi);let o=e.createLinearGradient(0,Vi*.55,0,Vi);o.addColorStop(0,`rgba(5,1,15,0)`),o.addColorStop(.55,`rgba(5,1,15,0.9)`),o.addColorStop(1,`rgba(5,1,15,0.98)`),e.fillStyle=o,e.fillRect(0,Vi*.55,Bi,Vi*.45);let s=e.createRadialGradient(Bi*.8,Vi*.35,50,Bi*.8,Vi*.35,Bi);s.addColorStop(0,`rgba(${i.tint.join(`,`)},0.18)`),s.addColorStop(1,`rgba(${i.tint.join(`,`)},0)`),e.globalCompositeOperation=`screen`,e.fillStyle=s,e.fillRect(0,0,Bi,Vi),e.restore()}function ta(e,t){let n=t||1,r=()=>(n=n*16807%2147483647)/2147483647;e.save(),e.fillStyle=`rgba(0,0,0,0.22)`;for(let t=0;t<Vi;t+=4)e.fillRect(0,t,Bi,1.5);for(let t=0;t<7;t++){let t=r()*Vi,n=3+r()*14,i=(r()-.5)*60;e.drawImage(e.canvas,0,t,Bi,n,i,t,Bi,n)}e.restore()}function na(e,t,n,r){let i=r/256,a=[[53,0,351,0,298,68,0,68],[0,94,298,94,351,162,53,162],[53,188,351,188,298,256,0,256]],o=e.createLinearGradient(t,n+r,t+351*i,n);o.addColorStop(0,`#e028fc`),o.addColorStop(.5,`#7c8be0`),o.addColorStop(1,`#1fe9b1`);let s=(r,o)=>{e.fillStyle=o;for(let o of a){e.beginPath();for(let a=0;a<8;a+=2)e.lineTo(t+r+o[a]*i,n+o[a+1]*i);e.closePath(),e.fill()}};e.save(),e.globalAlpha=.6,s(-4,`#00f0ff`),s(4,`#ff2bd6`),e.globalAlpha=1,s(0,o),e.restore()}function ra(e,t,n,r,i,a,o){if(e.save(),e.beginPath(),e.arc(n,r,i,0,Math.PI*2),e.closePath(),t){e.clip();let a=Math.max(2*i/t.width,2*i/t.height);e.drawImage(t,n-t.width*a/2,r-t.height*a/2,t.width*a,t.height*a)}else{let t=e.createLinearGradient(n-i,r-i,n+i,r+i);t.addColorStop(0,`#ff2bd6`),t.addColorStop(1,`#00f0ff`),e.fillStyle=t,e.fill(),e.fillStyle=`#05010f`,e.font=`900 ${Math.round(i*1.05)}px ${Hi}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(a.slice(0,1).toUpperCase()||`?`,n,r+i*.05)}e.restore(),e.save(),e.strokeStyle=o,e.lineWidth=5,e.shadowColor=o,e.shadowBlur=18,e.beginPath(),e.arc(n,r,i+3,0,Math.PI*2),e.stroke(),e.restore()}function ia(e,t,n,r,i,a){e.save(),e.textAlign=`left`,e.textBaseline=`alphabetic`,e.globalAlpha=.7,e.fillStyle=`#00f0ff`,e.fillText(t,n-6,r),e.fillStyle=`#ff2bd6`,e.fillText(t,n+6,r),e.globalAlpha=1,e.shadowColor=a,e.shadowBlur=40,e.fillStyle=i,e.fillText(t,n,r),e.shadowBlur=0,e.fillText(t,n,r),e.restore()}async function aa(e,t,n,r){e.width=Bi,e.height=Vi;let i=e.getContext(`2d`);await Promise.all([document.fonts.load(`900 100px "Orbitron"`),document.fonts.load(`700 40px "Rajdhani"`),document.fonts.load(`500 40px "Rajdhani"`)]).catch(()=>{});let[a,o,s]=await Promise.all([qi(r,!1),t.logo?qi(t.logo,!0):Promise.resolve(null),t.user?.photo?qi(t.user.photo,!0):Promise.resolve(null)]),c=t.pct>=0,l=c?Wi:Gi;i.fillStyle=`#05010f`,i.fillRect(0,0,Bi,Vi),a&&ea(i,a,n,c),ta(i,Math.round(t.lastAt+t.pct*1e3)),na(i,72,70,46),i.fillStyle=`#e8f9ff`,i.font=`900 34px ${Hi}`,i.textBaseline=`alphabetic`,i.textAlign=`left`,i.shadowColor=`rgba(0,240,255,0.8)`,i.shadowBlur=16,i.fillText(`KRYPTO SNATCHER`,152,108),i.shadowBlur=0;let u=230;t.user?(ra(i,s&&Ji(s)?s:null,114,u,42,t.user.name,`#ff2bd6`),i.fillStyle=`#e8f9ff`,i.font=`700 44px ${Ui}`,i.fillText(t.user.name.slice(0,22),180,u+15),u+=110):u+=30,ra(i,o&&Ji(o)?o:null,122,u+40,50,t.symbol,l.main),i.fillStyle=`#ffffff`,Qi(i,`$${t.symbol}`,900,64,Hi,560),i.fillText(`$${t.symbol}`,197,u+50),i.fillStyle=`#8f9cc8`,i.font=`500 32px ${Ui}`,i.fillText(t.name.slice(0,32),200,u+92);let d=Xi(t.pct);Qi(i,d,900,190,Hi,936),ia(i,d,72,u+330,l.main,l.glow),i.font=`700 58px ${Ui}`,i.fillStyle=l.main,i.fillStyle=t.pnl>=0?Wi.main:Gi.main,i.fillText(`${t.pnl>=0?`+`:`−`}${Yi(t.pnl,t.unit)} ${t.pnl>=0?`profit`:`loss`}`,76,u+420);let f=t.finished?c?`PRINTED`:`REKT`:`STILL HOLDING`;i.font=`900 30px ${Hi}`;let p=i.measureText(f).width+48;$i(i,72,u+460,p,56,12),i.fillStyle=c?`rgba(43,255,136,0.14)`:`rgba(255,59,107,0.14)`,i.fill(),i.strokeStyle=l.main,i.lineWidth=3,i.stroke(),i.fillStyle=l.main,i.fillText(f,96,u+499),$i(i,72,1020,936,200,22),i.fillStyle=`rgba(10,15,36,0.86)`,i.fill(),i.strokeStyle=`rgba(0,240,255,0.55)`,i.lineWidth=2,i.stroke(),[{k:`PUT IN`,v:Yi(t.paid,t.unit),c:`#e8f9ff`},{k:t.finished?`GOT BACK`:`WORTH NOW`,v:Yi(t.got,t.unit),c:l.main},{k:`HELD`,v:Zi(t.firstAt,t.lastAt),c:`#e8f9ff`}].forEach((e,t)=>{let n=72+312*t+36;i.fillStyle=`#8f9cc8`,i.font=`700 26px ${Hi}`,i.fillText(e.k,n,1090),i.fillStyle=e.c,Qi(i,e.v,700,54,Ui,262),i.fillText(e.v,n,1160),t&&(i.fillStyle=`rgba(0,240,255,0.25)`,i.fillRect(72+312*t,1060,2,120))}),i.fillStyle=`#8f9cc8`,i.font=`500 30px ${Ui}`;let m=new Date(t.lastAt*1e3).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`});i.fillText(`${t.wallets} wallet${t.wallets===1?``:`s`} · ${m}`,72,1278),i.textAlign=`right`,i.fillStyle=`#00f0ff`,i.font=`700 28px ${Hi}`,i.fillText(c?`> GG_`:`> RUN IT BACK_`,1008,1278),i.textAlign=`left`}function oa(e,t){return new Promise(n=>{try{e.toBlob(e=>n(e?new File([e],t,{type:`image/png`}):null),`image/png`)}catch{n(null)}})}var sa=`solHourly`,ca=3600,la=null,ua=()=>la??=j.get(sa).then(e=>new Map(Object.entries(JSON.parse(e||`{}`)).map(([e,t])=>[Number(e),Number(t)]))).catch(()=>new Map);async function da(e,t){let n=new Map,r=e=>new Date(e*1e3).toISOString(),i=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/candles?granularity=3600&start=${r(e)}&end=${r(t)}`,{signal:AbortSignal.timeout(6e3)});if(!i.ok)throw Error(`coinbase ${i.status}`);for(let[e,,,t,r]of await i.json())n.set(e,(t+r)/2);return n}async function fa(e,t){let n=new Map,r=await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=${e-ca}&to=${t+ca}`,{signal:AbortSignal.timeout(6e3)});if(!r.ok)throw Error(`coingecko ${r.status}`);let{prices:i}=await r.json();for(let[e,t]of i){let r=Math.floor(e/1e3/ca)*ca;n.has(r)||n.set(r,t)}return n}async function pa(e){let t=await ua(),n=Date.now()/1e3,r=[...new Set(e.filter(e=>e>0).map(e=>Math.floor(e/ca)*ca))].sort((e,t)=>e-t).filter(e=>!t.has(e)),i=!1;for(let e=0;e<r.length;){let a=r[e],o=Math.min(a+299*ca,Math.floor(n/ca)*ca),s;try{s=await da(a,o)}catch{s=await fa(a,o).catch(()=>new Map)}if(!s.size)break;for(let[e,r]of s)e<n-2*ca&&!t.has(e)&&(t.set(e,r),i=!0);for(let[e,n]of s)t.has(e)||t.set(e,n);for(;e<r.length&&r[e]<=o;)e++}if(i){let e=Object.fromEntries([...t].filter(([e])=>e<n-2*ca).map(([e,t])=>[e,Math.round(t*100)/100]));j.set(sa,JSON.stringify(e)).catch(()=>{})}let a=new Map;for(let n of e){let e=Math.floor(n/ca)*ca;for(let r of[0,-1,1,-2,2,-3,3]){let i=t.get(e+r*ca);if(i){a.set(n,i);break}}}return a}var ma=e=>Object.freeze(e());function ha(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}function ga(e){if(!ha(e))throw TypeError(`Uint8Array expected`)}function _a(e,t){if(typeof t!=`string`)throw TypeError(`${e}: string expected`);return!0}function va(e,t=`number`){if(typeof e!=`number`)throw TypeError(`${t}: expected number, got ${typeof e}`);if(!Number.isSafeInteger(e))throw RangeError(`${t}: expected safe integer, got ${e}`)}function ya(...e){let t=e=>e,n=(e,t)=>n=>e(t(n));return{encode:e.map(e=>e.encode).reduceRight(n,t),decode:e.map(e=>e.decode).reduce(n,t)}}var ba=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})(),xa=(()=>{try{let e=new TextDecoder;return e.decode(Uint8Array.of(65,48,43,127))===`A0+`?e:void 0}catch{return}})(),Sa=8192;function Ca(e){let t=e.length;if(xa!==void 0&&t>=12)return xa.decode(e);if(t<=Sa)return String.fromCharCode.apply(null,e);let n=``;for(let r=0;r<t;r+=Sa)n+=String.fromCharCode.apply(null,e.subarray(r,r+Sa));return n}function wa(e){if(va(e),e<=0||e>8)throw RangeError(`radix2: bits should be in (0..8]`);let t=ba[e]-1;return{encode:n=>{ga(n);let r=n.length,i=new Uint8Array(Math.ceil(r*8/e)),a=0,o=0,s=0;for(let c=0;c<r;)for(c+2<r?(a=a<<24|n[c]<<16|n[c+1]<<8|n[c+2],o+=24,c+=3):(a=(a<<8|n[c])&65535,o+=8,c++);o-=e,i[s++]=a>>o&t,!(o<e););return o>0&&(i[s]=a<<e-o&t),i},decode:t=>{let n=t.length,r=new Uint8Array(Math.floor(n*e/8)),i=0,a=0,o=0;for(let s=0;s<n;s++)for(i=(i<<e|t[s])&65535,a+=e;a>=8;a-=8)r[o++]=i>>a-8&255;if(i=i<<8-a&255,a>=e)throw Error(`Excess padding`);if(i>0)throw Error(`Non-zero padding: ${i}`);return r}}}function Ta(e,t){let n=e.length;if(n>128)throw Error(`alphabet: max 128 letters`);let r=new Uint8Array(n),i=new Int8Array(128).fill(-1);for(let t=0;t<n;t++){let n=e.charCodeAt(t);if(e.codePointAt(t)!==n||n>127)throw Error(`alphabet: single-char ASCII letters only`);r[t]=n,i[n]=t}if(t!==void 0)for(let e of Object.keys(t)){let n=e.charCodeAt(0),r=i[t[e].charCodeAt(0)];if(e.length!==1||n>127||r===void 0||r===-1)throw Error(`alphabet: invalid alias ${e}`);i[n]=r}return{encode:e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++){let i=e[n],a=r[i];if(a===void 0)throw Error(`alphabet.encode: invalid digit ${i}`);t[n]=a}return Ca(t)},decode:t=>{_a(`decode`,t);let n=t.length,r=new Uint8Array(n);for(let a=0;a<n;a++){let n=t.charCodeAt(a),o=n<128?i[n]:-1;if(o===-1)throw Error(`Unknown letter "${t[a]}". Allowed: ${e}`);r[a]=o}return r}}}function Ea(e,t=`=`){return va(e),_a(`padding`,t),{encode(n){for(;n.length*e%8;)n+=t;return n},decode(n){_a(`decode`,n);let r=n.length;if(r*e%8)throw Error(`padding: invalid length`);for(;r>0&&n[r-1]===t;r--)if((r-1)*e%8==0)throw Error(`padding: excess padding`);return n.slice(0,r)}}}var Da=typeof Uint8Array.from([]).toBase64==`function`&&typeof Uint8Array.fromBase64==`function`,Oa=/[\t\n\f\r ]/,ka=(e,t)=>{_a(`base64`,e);let n=t?`base64url`:`base64`;if(e.length>0&&Oa.test(e))throw Error(`invalid base64`);return Uint8Array.fromBase64(e,{alphabet:n,lastChunkHandling:`strict`})},Aa=ma(()=>ya(wa(6),Ta(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),Ea(6))),ja=ma(()=>Da?{encode(e){return ga(e),e.toBase64()},decode(e){return ka(e,!1)}}:Aa),Ma=656356768,Na=65536,Pa=2048,Fa=4096,Ia=(e,t)=>({encode:n=>{ga(n);let r=n.length;if(r===0)return new Uint8Array;if(r>=Na)throw Error(`invalid length`);let i=0;for(;i<r-1&&n[i]===0;)i++;let a=Math.ceil(r/2),o=new Uint16Array(a),s=r&1;s&&(o[0]=n[0]);for(let e=s,t=s;e<r;e+=2,t++)o[t]=n[e]<<8|n[e+1];let c=[],l=0;for(;l<a;){let e=0;for(let n=l;n<a;n++){let r=e*65536+o[n],i=Math.floor(r/t);e=r-i*t,o[n]=i,i===0&&n===l&&l++}c.push(e)}let u=c.length-1,d=u*5;for(let t=c[u];d++,!(t<e);t=Math.floor(t/e));let f=new Uint8Array(i+d),p=f.length-1;for(let t=0;t<u;t++){let n=c[t];for(let t=0;t<5;t++)f[p--]=n%e,n=Math.floor(n/e)}for(let t=c[u];p>=i;t=Math.floor(t/e))f[p--]=t%e;return f},decode:t=>{ga(t);let n=t.length;if(n===0)return new Uint8Array;if(n>=Na)throw Error(`invalid length`);let r=0;for(;r<n-1&&t[r]===0;)r++;let i=new Uint16Array(Math.ceil(n*6/16)+1),a=0,o=0,s=n%5||5;for(;o<n;){let n=0,r=1;for(let i=o+s;o<i;o++){let i=t[o];if(i>=e)throw Error(`invalid integer: ${i}`);n=n*e+i,r*=e}s=5;let c=n;for(let e=0;e<a;e++){let t=i[e]*r+c;c=Math.floor(t/65536),i[e]=t-c*65536}for(;c>0;c=Math.floor(c/65536))i[a++]=c%65536}let c=a===0?1:a*2-(i[a-1]<256),l=new Uint8Array(r+c),u=l.length-1;for(let e=0;e<a;e++){let t=i[e];l[u--]=t&255,u>=r&&(l[u--]=t>>8)}return l}}),La=(e,t)=>{let n=Ta(t);return{encode(t){if(ga(t),t.length>Pa)throw Error(`invalid length`);return n.encode(e.encode(t))},decode(t){if(_a(`baseN.decode`,t),t.length>Fa)throw Error(`invalid length`);return e.decode(n.decode(t))}}},Ra=Ia(58,Ma),za=e=>La(Ra,e),Ba=ma(()=>za(`123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`)),Va=`https://api.jup.ag`,Ha=!1;function Ua(e){Va=`${e}/jup`,Ha=!0}var Wa=`So11111111111111111111111111111111111111112`,Ga=6e4,Ka=60,qa={trade:0,screen:6,background:24},Ja={trade:0,screen:1,background:2},Ya=12,Xa=[],Za=null,Qa=0,$a=0,eo=[],to,no=e=>new Promise(t=>setTimeout(t,e));function ro(e,t){if(t<Qa)return Qa-t;if($a>=Ya)return-1;for(;Xa.length&&Xa[0]<=t-Ga;)Xa.shift();let n=Ka-qa[e],r=Xa.length<n?0:Xa[Xa.length-n]+Ga-t;return Za&&t<Za.reset&&Za.left-Xa.filter(e=>e>Za.at).length<=qa[e]&&(r=Math.max(r,Za.reset-t)),r}function io(){for(clearTimeout(to);eo.length;){let e=ro(eo[0].lane,Date.now());if(e>0&&(to=setTimeout(io,e)),e!==0)return;Xa.push(Date.now()),$a++,eo.shift().go()}}var ao=e=>new Promise(t=>{let n=eo.findIndex(t=>Ja[t.lane]>Ja[e]);n<0?eo.push({lane:e,go:t}):eo.splice(n,0,{lane:e,go:t}),io()}),oo=`jupPassInHeader`,so=(()=>{try{return Date.now()-Number(localStorage.getItem(oo)||0)<36e5}catch{return!1}})();function co(e,t,n,r){return r?fetch(`${Va}${e}${e.includes(`?`)?`&`:`?`}relaypass=${encodeURIComponent(t)}`,{method:n?.method??`GET`,body:n?.body}):fetch(Va+e,{...n,headers:{"x-api-key":t,"content-type":`application/json`,...n?.headers}})}async function lo(e,t,n,r=`screen`){let i=e.startsWith(`/swap/v2/execute`),a=Date.now()+3e4;for(let o=0;;o++){i||await ao(r);let o;try{let r=Ha&&!so;if(o=await co(e,t,n,r),o.status===403&&r){so=!0;try{localStorage.setItem(oo,String(Date.now()))}catch{}o=await co(e,t,n,!1)}}finally{i||($a--,io())}let s=o.headers.get(`x-ratelimit-remaining`),c=Number(o.headers.get(`x-ratelimit-reset`));if(!i&&s!==null&&c>0&&(Za={left:Number(s),at:Date.now(),reset:c*1e3}),o.status===429&&Date.now()<a){let e=c>0?c*1e3+100:Date.now()+1e3,t=Math.min(Math.max(e,Date.now()+250),Date.now()+1e4);i?await no(t-Date.now()):(Qa=Math.max(Qa,t),io());continue}let l=await o.json().catch(()=>({}));if(!o.ok){let e=l?.error??l?.message??`HTTP ${o.status}`;throw o.status===403?Error(`The bot's owner hasn't let you in, or this link is old. Open the app from a fresh message in the bot.`):o.status===429?Error(`Jupiter is busy right now (too many requests on the bot's key). Try again in a minute.`):Error(o.status===401?`Jupiter rejected the API key.`:`Jupiter: ${e}`)}return l}}function uo(e,t,n,r){return fo(e,Wa,t,String(n),r)}function fo(e,t,n,r,i){return lo(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r,taker:i})}`,e,void 0,`trade`)}function po(e,t,n){return lo(`/swap/v2/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:ja.encode(t),requestId:n})})}var mo=e=>ja.decode(e),ho=`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;async function go(e,t,n,r,i=!1){try{if(r<=0n)return null;let a=await lo(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r.toString()})}`,e,void 0,i?`background`:`screen`),o=Number(a.outAmount);return o>0?o:null}catch{return null}}var _o=(e,t,n,r=!1)=>go(e,t,Wa,n,r);async function vo(e,t=!1){try{let e=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/ticker`,{signal:AbortSignal.timeout(3e3)}),t=e.ok?Number((await e.json()).price):0;if(t>0)return t}catch{}let n=await go(e,Wa,ho,1000000000n,t);return n===null?null:n/1e6}async function yo(e,t,n=!1){let r=new Map;for(let i=0;i<t.length;i+=100){let a=t.slice(i,i+100);try{let t=await lo(`/tokens/v2/search?query=${a.join(`,`)}`,e,void 0,n?`background`:`screen`);for(let e of t)a.includes(e.id)&&e.usdPrice&&e.usdPrice>0&&r.set(e.id,e.usdPrice)}catch{}}return r}async function bo(e,t){try{let n=(await lo(`/tokens/v2/search?query=${t}`,e)).find(e=>e.id===t);return n?`${n.name??``} (${n.symbol??`?`})`:null}catch{return null}}function xo(e,t,n,r,i){return lo(`/trigger/v1/createOrder`,e,{method:`POST`,body:JSON.stringify({inputMint:n,outputMint:Wa,maker:t,payer:t,params:{makingAmount:r.toString(),takingAmount:i.toString()},computeUnitPrice:`auto`,wrapAndUnwrapSol:!0})},`trade`)}function So(e,t,n){return lo(`/trigger/v1/cancelOrder`,e,{method:`POST`,body:JSON.stringify({maker:t,order:n,computeUnitPrice:`auto`})},`trade`)}function Co(e,t,n){return lo(`/trigger/v1/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:ja.encode(t),requestId:n})},`trade`)}async function wo(e,t,n){return(await lo(`/trigger/v1/getTriggerOrders?${new URLSearchParams({user:t,orderStatus:n,page:`1`})}`,e)).orders??[]}var To=`https://pumpportal.fun/api/trade-local`,Eo=[{slippage:15,share:.85},{slippage:30,share:.75}];function Do(e,t,n,r){return ko({publicKey:e,action:`buy`,mint:t,amount:(n/1e9).toFixed(9),denominatedInSol:`true`,slippage:String(r)})}function Oo(e,t,n,r){return ko({publicKey:e,action:`sell`,mint:t,amount:n,denominatedInSol:`false`,slippage:String(r)})}async function ko(e){let t;try{t=await fetch(To,{method:`POST`,headers:{"content-type":`application/x-www-form-urlencoded`},body:new URLSearchParams({...e,priorityFee:`0.0001`,pool:`auto`})})}catch{throw Error(`Couldn't reach PumpPortal from the app.`)}if(!t.ok){let e=(await t.text().catch(()=>``)).trim();throw Error(`PumpPortal: ${e.slice(0,200)||`HTTP ${t.status}`}`)}return new Uint8Array(await t.arrayBuffer())}var Ao=BigInt(2**32-1),jo=BigInt(32);function Mo(e,t=!1){return t?{h:Number(e&Ao),l:Number(e>>jo&Ao)}:{h:Number(e>>jo&Ao)|0,l:Number(e&Ao)|0}}function No(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=Mo(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var Po=e=>e/2**32|0,Fo=e=>e>>>0;function Io(e,t,n,r){let i=Po(n),a=Fo(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var Lo=(e,t,n)=>e>>>n,Ro=(e,t,n)=>e<<32-n|t>>>n,zo=(e,t,n)=>e>>>n|t<<32-n,Bo=(e,t,n)=>e<<32-n|t>>>n,Vo=(e,t,n)=>e<<64-n|t>>>n-32,Ho=(e,t,n)=>e>>>n-32|t<<64-n;function Uo(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Wo=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),Go=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Ko=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),qo=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,Jo=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),Yo=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function Xo(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var Zo=e=>e?`"${e}" `:``;function Qo(e,t=``){if(typeof e!=`number`)throw TypeError(Zo(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(Zo(t)+`expected integer >= 0, got `+e);return e}function $o(e,t,n=``){if(Xo(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Qo(t,`length`);let r=Xo(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=Zo(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}function es(e){if(typeof e!=`function`||typeof e.create!=`function`)throw TypeError(`expected hash wrapped by utils.createHasher`);if(Qo(e.outputLen),Qo(e.blockLen),e.outputLen<1||e.blockLen<1)throw Error(`hash blockLen / outputLen must be >= 1`)}var ts=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},ns=(e,t)=>{ts(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function rs(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function is(e,t){$o(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function as(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function os(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function ss(e,t){return e<<32-t|e>>>t}var cs=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,ls=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function us(e){if($o(e),cs)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=ls[e[n]];return t}function ds(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function fs(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(cs)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=ds(e.charCodeAt(i)),a=ds(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function ps(e){if(typeof e!=`string`)throw TypeError(`string expected`);let t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{as(t)}}function ms(e,t=``){return typeof e==`string`?ps(e):$o(e,void 0,t)}function hs(...e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];$o(r),t+=r.length}let n=new Uint8Array(t);for(let t=0,r=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.length}return n}function gs(e,t,n=`opts`){return ns(e,`defaults`),t!==void 0&&ns(t,n),Object.assign(Object.create(null),e,t)}function _s(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=gs({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function vs(e=32){Qo(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}var ys=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function bs(e,t,n){return e&t^~e&n}function xs(e,t,n){return e&t^e&n^t&n}var Ss=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=os(this.buffer)}update(e){rs(this),$o(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=os(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){rs(this),is(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Io(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:os(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},Cs=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ws=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Ts=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Es=new Uint32Array(64),Ds=class extends Ss{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Es[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Es[e-15],n=Es[e-2],r=ss(t,7)^ss(t,18)^t>>>3,i=ss(n,17)^ss(n,19)^n>>>10;Es[e]=i+Es[e-7]+r+Es[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=ss(o,6)^ss(o,11)^ss(o,25),u=l+t+bs(o,s,c)+Ts[e]+Es[e]|0,d=(ss(n,2)^ss(n,13)^ss(n,22))+xs(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){as(Es)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),as(this.buffer)}},Os=class extends Ds{constructor(){super(32,Cs)}},ks=No(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),As=ks[0],js=ks[1],Ms=new Uint32Array(80),Ns=new Uint32Array(80),Ps=class extends Ss{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Ms[n]=e.getUint32(t),Ns[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=Ms[e-15]|0,n=Ns[e-15]|0,r=zo(t,n,1)^zo(t,n,8)^Lo(t,n,7),i=Bo(t,n,1)^Bo(t,n,8)^Ro(t,n,7),a=Ms[e-2]|0,o=Ns[e-2]|0,s=zo(a,o,19)^Vo(a,o,61)^Lo(a,o,6),c=Ko(i,Bo(a,o,19)^Ho(a,o,61)^Ro(a,o,6),Ns[e-7],Ns[e-16]),l=qo(c,r,s,Ms[e-7],Ms[e-16]);Ms[e]=l|0,Ns[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=zo(u,d,14)^zo(u,d,18)^Vo(u,d,41),v=Bo(u,d,14)^Bo(u,d,18)^Ho(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=Jo(_,v,b,js[e],Ns[e]),S=Yo(x,g,t,y,As[e],Ms[e]),C=x|0,w=zo(n,r,28)^Vo(n,r,34)^Vo(n,r,39),T=Bo(n,r,28)^Ho(n,r,34)^Ho(n,r,39),E=n&i^n&o^i&o,ee=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=Uo(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let te=Wo(C,T,ee);n=Go(te,S,w,E),r=te|0}({h:n,l:r}=Uo(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=Uo(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=Uo(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=Uo(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=Uo(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=Uo(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=Uo(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=Uo(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){as(Ms,Ns)}destroy(){this.destroyed=!0,as(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Fs=class extends Ps{constructor(){super(64,ws)}},Is=_s(()=>new Os,ys(1)),Ls=_s(()=>new Fs,ys(3));function Rs(e,t,n=()=>{}){if(!Array.isArray(e))throw TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}var zs=(e,t,n)=>$o(e,t,n),Bs=Qo;function Vs(e,t=`object`){if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`);return e}function Hs(e,t){if(typeof e!=`function`)throw TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}var Us=us,Ws=(...e)=>hs(...e),Gs=e=>fs(e),Ks=Xo,qs=e=>vs(e),Js=BigInt(0),Ys=BigInt(1),Xs=e=>e?`"${e}" `:``;function Zs(e,t=``){if(typeof e!=`boolean`)throw TypeError(Xs(t)+`expected boolean, got type=`+typeof e);return e}function Qs(e){if(typeof e==`bigint`){if(!oc(e))throw RangeError(`positive bigint expected, got `+e)}else Bs(e);return e}function $s(e,t=``){if(typeof e!=`number`){let n=t&&`"${t}" `;throw TypeError(n+`expected number, got type=`+typeof e)}if(!Number.isSafeInteger(e)){let n=t&&`"${t}" `;throw RangeError(n+`expected safe integer, got `+e)}}function ec(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);return e===``?Js:BigInt(`0x`+e)}function tc(e){return ec(us(e))}function nc(e){return ec(us(ac($o(e)).reverse()))}function rc(e,t){if(Qo(t),t===0)throw Error(`zero output length is invalid`);e=Qs(e);let n=t*2,r=e.toString(16);if(r.length>n)throw RangeError(`number is too large`);return fs(r.padStart(n,`0`))}function ic(e,t){return rc(e,t).reverse()}function ac(e){return Uint8Array.from(zs(e))}function oc(e){return typeof e==`bigint`&&Js<=e}function sc(e,t,n){return oc(e)&&oc(t)&&oc(n)&&t<=e&&e<n}function cc(e,t,n,r){if(!sc(t,n,r))throw RangeError(`expected valid `+e+`: `+n+` <= n < `+r+`, got `+t)}function lc(e){if(e<Js)throw Error(`expected non-negative bigint, got `+e);return e===Js?0:e.toString(2).length}var uc=e=>($s(e,`n`),(Ys<<BigInt(e))-Ys);function dc(e,t={},n={},r=`object`){Vs(e,r),Vs(t,`fields`),Vs(n,`optFields`);function i(t,n,i){let a=r===`object`?`param "${String(t)}"`:`"${r}.${String(t)}"`,o=e[t];if(!Object.hasOwn(e,t)&&(i?o!==void 0:n!==`function`))throw TypeError(`${a} is invalid: expected own property`);if(i&&o===void 0)return;let s=typeof o;if(s!==n||o===null)throw TypeError(`${a} is invalid: expected ${n}, got ${s}`)}let a=(e,t)=>Object.entries(e).forEach(([e,n])=>i(e,n,t));a(t,!1),a(n,!0)}var fc=BigInt(0),B=BigInt(1),pc=BigInt(2),mc=BigInt(3),hc=BigInt(4),gc=BigInt(5),_c=BigInt(7),vc=BigInt(8),yc=BigInt(9),bc=BigInt(15),xc=BigInt(16),Sc=BigInt(`0x10000000000000000`);function Cc(e,t){if(t<=fc)throw Error(`mod: expected positive modulus, got `+t);let n=e%t;return n>=fc?n:t+n}function wc(e,t,n){if(n<=B)throw Error(`pow: expected modulus > 1, got `+n);if(typeof t!=`bigint`)throw TypeError(`invalid exponent: expected bigint, got `+typeof t);if(t<fc)throw Error(`invalid exponent, negatives unsupported`);if(t===fc)return B;if(t===B)return e;let r=e%n;if(r<fc&&(r+=n),t<Sc){let e=B;for(;t>fc;)t&B&&(e=e*r%n),r=r*r%n,t>>=B;return e}let i=[];for(;t>fc;)i.push(Number(t&bc)),t>>=hc;let a=Array(16);a[0]=B,a[1]=r;for(let e=2;e<16;e++)a[e]=a[e-1]*r%n;let o=a[i[i.length-1]];for(let e=i.length-2;e>=0;e--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let t=i[e];t!==0&&(o=o*a[t]%n)}return o}function Tc(e,t,n){if(n<=B)throw Error(`pow2: expected modulus > 1, got `+n);if(t<fc)throw Error(`pow2: expected non-negative exponent, got `+t);let r=e;for(;t-->fc;)r*=r,r%=n;return r}function Ec(e,t){if(e===fc)throw Error(`invert: expected non-zero number`);if(t<=B)throw Error(`invert: expected modulus > 1, got `+t);let n=Cc(e,t),r=t,i=fc,a=B;for(;n!==fc;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==B)throw Error(`invert: does not exist`);return Cc(i,t)}function Dc(e,t,n){let r=e;if(!r.eql(r.sqr(t),n))throw Error(`Cannot find square root`)}function Oc(e,t){if((e&B)===fc)throw Error(t+`: expected odd modulus, got `+e)}function kc(e,t){let n=e,r=(n.ORDER+B)/hc,i=n.pow(t,r);return Dc(n,i,t),i}function Ac(e,t){let n=e,r=(n.ORDER-gc)/vc,i=n.mul(t,pc),a=n.pow(i,r),o=n.mul(t,a),s=n.mul(n.mul(o,pc),a),c=n.mul(o,n.sub(s,n.ONE));return Dc(n,c,t),c}function jc(e){let t=Hc(e),n=Mc(e),r=n(t,t.neg(t.ONE)),i=n(t,r),a=n(t,t.neg(r)),o=(e+_c)/xc;return((e,t)=>{let n=e,s=n.pow(t,o),c=n.mul(s,r),l=n.mul(s,i),u=n.mul(s,a),d=n.eql(n.sqr(c),t),f=n.eql(n.sqr(l),t);s=n.cmov(s,c,d),c=n.cmov(u,l,f);let p=n.eql(n.sqr(c),t),m=n.cmov(s,c,p);return Dc(n,m,t),m})}function Mc(e){if(e<mc)throw Error(`sqrt is not defined for small field`);Oc(e,`tonelliShanks`);let t=e-B,n=0;for(;t%pc===fc;)t/=pc,n++;let r=pc,i=Hc(e);for(;Rc(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return kc;let a=i.pow(r,t),o=(t+B)/pc;return function(e,r){let i=e;if(i.is0(r))return r;if(Rc(i,r)!==1)throw Error(`Cannot find square root`);let s=n,c=i.mul(i.ONE,a),l=i.pow(r,t),u=i.pow(r,o);for(;!i.eql(l,i.ONE);){if(i.is0(l))throw Error(`Cannot find square root: probably non-prime P`);let e=1,t=i.sqr(l);for(;!i.eql(t,i.ONE);)if(e++,t=i.sqr(t),e===s)throw Error(`Cannot find square root`);let n=B<<BigInt(s-e-1),r=i.pow(c,n);s=e,c=i.sqr(r),l=i.mul(l,c),u=i.mul(u,r)}return u}}function Nc(e){return Oc(e,`Fp.sqrt`),e%hc===mc?kc:e%vc===gc?Ac:e%xc===yc?jc(e):Mc(e)}var Pc=(e,t)=>(Cc(e,t)&B)===B,Fc=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Ic(e){if(Vs(e,`field`),typeof e.ORDER!=`bigint`)throw TypeError(`param "ORDER" is invalid: expected bigint, got `+typeof e.ORDER);$s(e.BYTES,`BYTES`),$s(e.BITS,`BITS`);for(let t of Fc)Hs(e[t],`field.`+t);if(e.BYTES<1||e.BITS<1)throw Error(`invalid field: expected BYTES/BITS > 0`);if(e.ORDER<=B)throw Error(`invalid field: expected ORDER > 1, got `+e.ORDER);return e}function Lc(e,t,n=!1){Ic(e),Rs(t,`nums`),Zs(n,`passZero`);let r=e,i=Array(t.length).fill(n?r.ZERO:void 0),a=t.reduce((e,t,n)=>r.is0(t)?e:(i[n]=e,r.mul(e,t)),r.ONE),o=r.inv(a);return t.reduceRight((e,t,n)=>r.is0(t)?e:(i[n]=r.mul(e,i[n]),r.mul(e,t)),o),i}function Rc(e,t){Ic(e);let n=e;Oc(n.ORDER,`FpLegendre`);let r=(n.ORDER-B)/pc,i=n.pow(t,r),a=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),s=n.eql(i,n.neg(n.ONE));if(!a&&!o&&!s)throw Error(`invalid Legendre symbol result`);return a?1:o?0:-1}function zc(e,t){if(t!==void 0&&Bs(t),e<=fc)throw Error(`invalid n length: expected positive n, got `+e);if(t!==void 0&&t<1)throw Error(`invalid n length: expected positive bit length, got `+t);let n=lc(e);if(t!==void 0&&t<n)throw Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);let r=t===void 0?n:t;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var Bc=new WeakMap,Vc=class{ORDER;BITS;BYTES;isLE;ZERO=fc;ONE=B;_lengths;_mod;constructor(e,t={}){if(e<=B)throw Error(`invalid field: expected ORDER > 1, got `+e);let n;this.isLE=!1,typeof t==`object`&&t&&(typeof t.BITS==`number`&&(n=t.BITS),typeof t.sqrt==`function`&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE==`boolean`&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes==`boolean`&&(this._mod=t.modFromBytes));let{nBitLength:r,nByteLength:i}=zc(e,n);if(i>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);this.ORDER=e,this.BITS=r,this.BYTES=i,Object.freeze(this)}create(e){return Cc(e,this.ORDER)}isValid(e){if(typeof e!=`bigint`)throw TypeError(`invalid field element: expected bigint, got `+typeof e);return fc<=e&&e<this.ORDER}is0(e){return e===fc}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&B)===B}neg(e){return Cc(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return Cc(e*e,this.ORDER)}add(e,t){return Cc(e+t,this.ORDER)}sub(e,t){return Cc(e-t,this.ORDER)}mul(e,t){return Cc(e*t,this.ORDER)}pow(e,t){return wc(e,t,this.ORDER)}div(e,t){return Cc(e*Ec(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return Ec(e,this.ORDER)}sqrt(e){let t=Bc.get(this);return t||Bc.set(this,t=Nc(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?ic(e,this.BYTES):rc(e,this.BYTES)}fromBytes(e,t=!1){zs(e);let{_lengths:n,BYTES:r,isLE:i,ORDER:a,_mod:o}=this;if(n){if(e.length<1||!n.includes(e.length)||e.length>r)throw Error(`Field.fromBytes: expected `+n+` bytes, got `+e.length);let t=new Uint8Array(r);t.set(e,i?0:t.length-e.length),e=t}if(e.length!==r)throw Error(`Field.fromBytes: expected `+r+` bytes, got `+e.length);let s=i?nc(e):tc(e);if(o&&(s=Cc(s,a)),!t&&!this.isValid(s))throw Error(`invalid field element: outside of range 0..ORDER`);return s}invertBatch(e){return Lc(this,e,!0)}cmov(e,t,n){return Zs(n,`condition`),n?t:e}};function Hc(e,t={}){return Object.freeze(Vc.prototype),new Vc(e,t)}var Uc=BigInt(0),Wc=BigInt(1),Gc=BigInt(4),Kc=16,qc=128,Jc=5,Yc=2**31;function Xc(e){let t=e;if(typeof t!=`function`)throw TypeError(`"Point" expected constructor, got type=`+typeof e);Hs(t.fromAffine,`Point.fromAffine`),Hs(t.fromBytes,`Point.fromBytes`),Hs(t.fromHex,`Point.fromHex`),Vs(t.BASE,`Point.BASE`),Vs(t.ZERO,`Point.ZERO`),Ic(t.Fp),Ic(t.Fn)}function Zc(e,t){Xc(e),tl(t,e);let n=Lc(e.Fp,t.map(e=>e.Z));return t.map((t,r)=>e.fromAffine(t.toAffine(n[r])))}function Qc(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw Error(`invalid window size, expected [`+n+`..`+t+`], got W=`+e)}function $c(e,t){let n=e*(4*t+128);if(n>Yc)throw Error(`invalid window size: table would need ~`+Math.ceil(n/2**20)+` MiB, max `+Yc/2**20+` MiB`)}function el(e,t){if(e!==void 0){Hs(e,`randomBytes`);try{let n=e(t);if(!Ks(n)||n.length!==t)return}catch{return}return e}}function tl(e,t){Rs(e,`points`),e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function nl(e,t,n){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,r)=>{if(!(n===void 0?t.isValid(e):oc(e)&&e<n))throw Error(`invalid scalar at index `+r)})}var rl=new WeakMap;function il(e){return rl.get(e)||1}function al(e,t){let n=e.double(),r=[e];for(let e=1;e<t;e++)r.push(r[e-1].add(n));return r}function ol(e,t){let n=2**t,r=n/2,i=BigInt(n-1),a=[];for(;e>Uc;){let t=0;e&Wc&&(t=Number(e&i),t>=r&&(t-=n),e-=BigInt(t)),a.push(t),e>>=Wc}return a}function sl(e,t,n){let r=2**t,i=r/2,a=BigInt(r-1),o=BigInt(t),s=[];for(let t=0;t<n;t++){let t=Number(e&a);e>>=o,t>i&&(t-=r,e+=Wc),s.push(t)}if(e!==Uc)throw Error(`invalid wnaf`);return s}function cl(e,t,n){let r=0;for(let e of n)r=Math.max(r,e.length);let i=e;for(let e=r-1;e>=0;e--){e!==r-1&&(i=i.double());for(let r=0;r<n.length;r++){let a=n[r][e];if(a){let e=t[r][Math.abs(a)-1>>1];i=i.add(a<0?e.negate():e)}}}return i}var ll=class{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){Xc(e),this.randomBytes=el(t,Kc),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,n){let r=Math.ceil(n/t)+1,i=2**(t-1),a=[],o=e;for(let e=0;e<r;e++){let e=o;for(let t=0;t<i;t++)a.push(e),e=e.add(o);o=a[a.length-1].double()}return{W:t,bits:n,windows:r,comp:a}}wnafCachedCT(e,t){let{W:n,windows:r,comp:i}=e,a=2**(n-1),o=sl(t,n,r),s=this.ZERO,c=this.BASE;for(let e=0;e<r;e++){let t=o[e],n=e*a,r=Math.abs(t)-1,l=i[n];for(let e=1;e<a;e++)l=e===r?i[n+e]:l;let u=l.negate();t===0?c=c.add(i[n]):s=s.add(t<0?u:l)}return{p:s,f:c}}getWnafPrecomputes(e,t,n,r){let i=this.wnafPrecomputes.get(t),a=i?.find(t=>t.W===e&&t.bits===n);return a||(a=this.buildWnafTable(t,e,n),typeof r==`function`&&(a={...a,comp:r(a.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw TypeError(`"point" expected Point instance, got type=`+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!sc(t,Wc,this.Point.Fn.ORDER))throw Error(`invalid scalar`)}runCT(e,t,n,r){let i=il(e);return i===1?this.fixedWindowCT(e,t,n):this.wnafCachedCT(this.getWnafPrecomputes(i,e,n,r),t)}mulCT(e,t,n){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,n)}mulCTBlinded(e,t,n){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw Error(`randomBytes is required for scalar blinding`);let r=this.Point.Fn.BITS+qc,i=this.randomBytes(Kc);if(!Ks(i)||i.length!==Kc)throw Error(`randomBytes returned invalid byte array`);i[0]=i[0]&63|128;let a=t+tc(i)*this.Point.Fn.ORDER;return this.runCT(e,a,r,n)}fixedWindowCT(e,t,n){let r=Jc,i=uc(r),a=Array(32);a[0]=this.ZERO;for(let t=1;t<32;t++)a[t]=a[t-1].add(e);let o=Math.ceil(n/r),s=this.ZERO;for(let e=o-1;e>=0;e--){if(e!==o-1)for(let e=0;e<r;e++)s=s.double();let n=Number(t>>BigInt(e*r)&i),c=a[0];for(let e=1;e<32;e++)c=e===n?a[e]:c;s=s.add(c)}return{p:s,f:s}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===Wc||e===this.BASE&&(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,n,r){return this.shouldBlind(e,n)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,n){if(this.assertPoint(e),!oc(t))throw Error(`invalid scalar`);let r=il(e);if(r===1||t>=this.Point.Fn.ORDER)return ul(this.Point,[e],[t],!0);let i=this.getWnafPrecomputes(r,e,this.bits,n);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),Qc(t,this.bits),$c((Math.ceil((this.bits+qc)/t)+1)*2**(t-1),this.Point.Fp.BYTES),rl.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return il(e)!==1}};function ul(e,t,n,r=!1){if(Xc(e),tl(t,e),Zs(r,`allowOversized`),nl(n,e.Fn,r?e.Fn.ORDER**Gc:void 0),t.length!==n.length)throw Error(`arrays of points and scalars must have equal length`);let i=t.map(e=>al(e,4)),a=n.map(e=>ol(e,4));return cl(e.ZERO,i,a)}function dl(e,t,n){if(t){if(t.ORDER!==e)throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);return Ic(t),t}return Hc(e,{isLE:n})}function fl(e,t,n={},r){if(e!==`weierstrass`&&e!==`edwards`)throw Error(`expected curve type "weierstrass" or "edwards"`);if(r===void 0&&(r=e===`edwards`),!t||typeof t!=`object`)throw Error(`expected valid ${e} CURVE object`);dc(n);for(let e of[`p`,`n`,`h`]){let n=t[e];if(!(oc(n)&&n!==Uc))throw Error(`CURVE.${e} must be positive bigint`)}let i=dl(t.p,n.Fp,r),a=dl(t.n,n.Fn,r),o=[`Gx`,`Gy`,`a`,e===`weierstrass`?`b`:`d`];for(let e of o)if(!i.isValid(t[e]))throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:i,Fn:a}}function pl(e,t){return function(n){let r=e(n);return{secretKey:r,publicKey:t(r)}}}var ml=BigInt(0),hl=BigInt(1),gl=BigInt(2),_l=BigInt(4),vl=BigInt(8);function yl(e,t,n,r){let i=e.sqr(n),a=e.sqr(r),o=e.add(e.mul(t.a,i),a),s=e.add(e.ONE,e.mul(t.d,e.mul(i,a)));return e.eql(o,s)}function bl(e,t={}){dc(t,{},{},`extraOpts`);let n=t,r=fl(`edwards`,e,n,n.FpFnLE),{Fp:i,Fn:a}=r,o=r.CURVE,{h:s}=o;if(Rc(i,o.a)!==1)throw Error(`edwards: CURVE.a must be a square in Fp for complete addition formulas`);if(Rc(i,o.d)!==-1)throw Error(`edwards: CURVE.d must be a non-square in Fp for complete addition formulas`);dc(n,{},{uvRatio:`function`,randomBytes:`function`});let c=n.randomBytes===void 0?qs:n.randomBytes,l=gl<<BigInt(i.BYTES*8)-hl;function u(e){if(!i.isOdd)throw Error(`Field does not have .isOdd()`);return i.isOdd(e)}let d=n.uvRatio===void 0?(e,t)=>{try{return{isValid:!0,value:i.sqrt(i.div(e,t))}}catch{return{isValid:!1,value:ml}}}:n.uvRatio;if(!yl(i,o,o.Gx,o.Gy))throw Error(`bad curve params: generator point`);let f=i.eql(o.a,i.neg(i.ONE))?e=>i.neg(e):i.eql(o.a,i.ONE)?e=>e:e=>i.mul(o.a,e);function p(e,t,n=!1){let r=n?hl:ml;return cc(`coordinate `+e,t,r,l),t}function m(e){if(!(e instanceof h))throw Error(`EdwardsPoint expected`)}class h{static BASE=new h(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy));static ZERO=new h(i.ZERO,i.ONE,i.ONE,i.ZERO);static Fp=i;static Fn=a;X;Y;Z;T;constructor(e,t,n,r){this.X=p(`x`,e),this.Y=p(`y`,t),this.Z=p(`z`,n,!0),this.T=p(`t`,r),Object.freeze(this)}static CURVE(){return o}static fromAffine(e){if(e instanceof h)throw Error(`extended point not allowed`);let{x:t,y:n}=e||{};return p(`x`,t),p(`y`,n),new h(t,n,i.ONE,i.mul(t,n))}static fromBytes(e,t=!1){let n=i.BYTES,{a:r,d:a}=o;e=ac(zs(e,n,`point`)),Zs(t,`zip215`);let s=ac(e),c=e[n-1];s[n-1]=c&-129;let f=nc(s);cc(`point.y`,f,ml,t?l:i.ORDER);let p=i.sqr(f),m=i.sub(p,i.ONE),g=i.sub(i.mulN(a,p),r),{isValid:_,value:v}=d(m,g);if(!_)throw Error(`bad point: invalid y coordinate`);let y=u(v),b=!!(c&128);if(!t&&i.is0(v)&&b)throw Error(`bad point: x=0 and x_0=1`);return b!==y&&(v=i.neg(v)),h.fromAffine({x:v,y:f})}static fromHex(e,t=!1){return h.fromBytes(Gs(e),t)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(e=6,t=!0){return _.setWindowSize(this,e),t||this.multiply(gl),this}assertValidity(){let e=this,{a:t,d:n}=o;if(e.is0())throw Error(`bad point: ZERO`);let{X:r,Y:a,Z:s,T:c}=e,l=i.sqr(r),u=i.sqr(a),d=i.sqr(s),f=i.sqr(d),p=i.mul(l,t),m=i.mul(i.add(p,u),d),h=i.add(f,i.mul(n,i.mul(l,u)));if(!i.eql(m,h))throw Error(`bad point: equation left != right (1)`);let g=i.mul(r,a),_=i.mul(s,c);if(!i.eql(g,_))throw Error(`bad point: equation left != right (2)`)}equals(e){m(e);let{X:t,Y:n,Z:r}=this,{X:a,Y:o,Z:s}=e,c=i.mul(t,s),l=i.mul(a,r),u=i.mul(n,s),d=i.mul(o,r);return i.eql(c,l)&&i.eql(u,d)}is0(){return this.equals(h.ZERO)}negate(){return new h(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:e,Y:t,Z:n}=this,r=i.sqr(e),a=i.sqr(t),o=i.mul(i.sqr(n),gl),s=f(r),c=i.addN(e,t),l=i.sub(i.subN(i.sqr(c),r),a),u=i.addN(s,a),d=i.subN(u,o),p=i.subN(s,a),m=i.mul(l,d),g=i.mul(u,p),_=i.mul(l,p),v=i.mul(d,u);return new h(m,g,v,_)}add(e){m(e);let{d:t}=o,{X:n,Y:r,Z:a,T:s}=this,{X:c,Y:l,Z:u,T:d}=e,p=i.mul(n,c),g=i.mul(r,l),_=i.mul(i.mulN(s,t),d),v=i.mul(a,u),y=i.sub(i.subN(i.mulN(i.addN(n,r),i.addN(c,l)),p),g),b=i.subN(v,_),x=i.addN(v,_),S=i.sub(g,f(p)),C=i.mul(y,b),w=i.mul(x,S),T=i.mul(y,S),E=i.mul(b,x);return new h(C,w,E,T)}subtract(e){return m(e),this.add(e.negate())}multiply(e){if(!a.isValidNot0(e))throw RangeError(`invalid scalar: expected 1 <= sc < curve.n`);let{p:t,f:n}=_.mulSecret(this,e,s,g);return g([t,n])[0]}multiplyUnsafe(e){if(!a.isValid(e))throw RangeError(`invalid scalar: expected 0 <= sc < curve.n`);return e===ml?h.ZERO:this.is0()||e===hl?this:_.mulUnsafe(this,e,g)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return _.mulUnsafe(this,o.n).is0()}toAffine(e){let t=this,n=e;if(n!=null&&typeof n!=`bigint`)throw TypeError(`"invertedZ" expected bigint, got type=`+typeof n);let{X:r,Y:a,Z:o}=t,s=t.is0();n??=s?i.create(vl):i.inv(o);let c=i.mul(r,n),l=i.mul(a,n),u=i.mul(o,n);if(s)return{x:i.ZERO,y:i.ONE};if(!i.eql(u,i.ONE))throw Error(`invZ was invalid`);return{x:c,y:l}}clearCofactor(){return s===hl?this:s===gl?this.double():s===_l?this.double().double():s===vl?this.double().double().double():this.multiplyUnsafe(s)}toBytes(){let{x:e,y:t}=this.toAffine(),n=i.toBytes(t);return n[n.length-1]|=u(e)?128:0,n}toHex(){return Us(this.toBytes())}toString(){return`<Point ${this.is0()?`ZERO`:this.toHex()}>`}}let g=e=>Zc(h,e),_=new ll(h,c);return _.bits>=6&&h.BASE.precompute(6),Object.freeze(h.prototype),Object.freeze(h),h}function xl(e,t,n={}){if(Xc(e),typeof t!=`function`)throw Error(`"hash" function param is required`);let r=t,i=n;dc(i,{},{adjustScalarBytes:`function`,randomBytes:`function`,domain:`function`,prehash:`function`,zip215:`boolean`,mapToCurve:`function`,toMontgomery:`function`,toMontgomerySecret:`function`});let{prehash:a}=i,{BASE:o,Fp:s,Fn:c}=e,l=r.outputLen,u=2*s.BYTES;if(l!==void 0&&($s(l,`hash.outputLen`),l!==u))throw Error(`hash.outputLen must be ${u}, got ${l}`);let d=i.randomBytes===void 0?qs:i.randomBytes,f=i.toMontgomery,p=i.toMontgomerySecret,m=i.adjustScalarBytes===void 0?e=>e:i.adjustScalarBytes,h=i.domain===void 0?(e,t,n)=>{if(Zs(n,`phflag`),t.length||n)throw Error(`Contexts/pre-hash are not supported`);return e}:i.domain;function g(e){return c.create(nc(e))}function _(e){let t=T.secretKey;zs(e,T.secretKey,`secretKey`);let n=zs(r(e),2*t,`hashedSecretKey`),i=m(n.slice(0,t));return{head:i,prefix:n.slice(t,2*t),scalar:g(i)}}function v(e){let{head:t,prefix:n,scalar:r}=_(e),i=o.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}}function y(e){return v(e).pointBytes}function b(e=Uint8Array.of(),...t){let n=Ws(...t);return g(r(h(n,zs(e,void 0,`context`),!!a)))}function x(e,t,n={}){dc(n,{},{},`options`),e=ac(zs(e,void 0,`message`)),a&&(e=a(e));let{prefix:r,scalar:i,pointBytes:s}=v(t),l=b(n.context,r,e),u=o.multiply(l).toBytes(),d=b(n.context,u,s,e),f=c.create(l+d*i);if(!c.isValid(f))throw Error(`sign failed: invalid s`);return zs(Ws(u,c.toBytes(f)),T.signature,`result`)}let S={zip215:i.zip215};function C(t,n,r,i=S){dc(i);let{context:s}=i,c=i.zip215===void 0?!!S.zip215:i.zip215,l=T.signature;t=zs(t,l,`signature`),n=zs(n,void 0,`message`),r=zs(r,T.publicKey,`publicKey`),c!==void 0&&Zs(c,`zip215`),a&&(n=a(n));let u=l/2,d=t.subarray(0,u),f=nc(t.subarray(u,l)),p,m,h;try{p=e.fromBytes(r,c),m=e.fromBytes(d,c),h=o.multiplyUnsafe(f)}catch{return!1}if(!c&&p.isSmallOrder())return!1;let g=b(s,d,r,n);return m.add(p.multiplyUnsafe(g)).subtract(h).clearCofactor().is0()}let w=s.BYTES,T={secretKey:w,publicKey:w,signature:2*w,seed:w};function E(e){return e=e===void 0?d(T.seed):e,zs(e,T.seed,`seed`)}function ee(e){return Ks(e)&&e.length===T.secretKey}function te(t,n){try{return!!e.fromBytes(t,n===void 0?S.zip215:n)}catch{return!1}}let ne={getExtendedPublicKey:v,randomSecretKey:E,isValidSecretKey:ee,isValidPublicKey:te,toMontgomery(t){if(f===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return f(e.fromBytes(t))},toMontgomerySecret(e){if(p===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return p(e)}};return Object.freeze(T),Object.freeze(ne),Object.freeze({keygen:pl(E,y),getPublicKey:y,sign:x,verify:C,utils:ne,Point:e,lengths:T})}var Sl=BigInt(1),Cl=BigInt(2),wl=BigInt(5),Tl=BigInt(8),El=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`),Dl={p:El,n:BigInt(`0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`),h:Tl,a:BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`),d:BigInt(`0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`),Gx:BigInt(`0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`),Gy:BigInt(`0x6666666666666666666666666666666666666666666666666666666666666658`)};function Ol(e){let t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),a=El,o=e*e%a*e%a,s=Tc(Tc(o,Cl,a)*o%a,Sl,a)*e%a,c=Tc(s,wl,a)*s%a,l=Tc(c,t,a)*c%a,u=Tc(l,n,a)*l%a,d=Tc(u,r,a)*u%a;return{pow_p_5_8:Tc(Tc(Tc(Tc(d,i,a)*d%a,i,a)*d%a,t,a)*c%a,Cl,a)*e%a,b2:o}}function kl(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}var Al=BigInt(`19681161376707505956807079304988542015446066515923890162744021073123829784752`);function jl(e,t){let n=El,r=Cc(t*t*t,n),i=Ol(e*Cc(r*r*t,n)).pow_p_5_8,a=Cc(e*r*i,n),o=Cc(t*a*a,n),s=a,c=Cc(a*Al,n),l=o===e,u=o===Cc(-e,n),d=o===Cc(-e*Al,n);return l&&(a=s),(u||d)&&(a=c),Pc(a,n)&&(a=Cc(-a,n)),{isValid:l||u,value:a}}var Ml=bl(Dl,{uvRatio:jl}),Nl=Ml.Fp;function Pl(e){let{y:t}=e;return Nl.toBytes(Nl.div(Sl+t,Sl-t))}function Fl(e){let t=Ml.Fp.BYTES;return $o(e,t),kl(Ls(e.subarray(0,t))).subarray(0,t)}function Il(e){return xl(Ml,Ls,Object.assign({adjustScalarBytes:kl,toMontgomery:Pl,toMontgomerySecret:Fl,zip215:!0},e))}var Ll=Il({}),Rl=[`https://api.mainnet.solana.com`,`https://api.mainnet-beta.solana.com`],zl=`https://api.mainnet-beta.solana.com`,V=null,Bl=!1,Vl=null;function Hl(e,t){V=`${t?`${t}/rpc`:`https://mainnet.helius-rpc.com/`}?api-key=${encodeURIComponent(e)}`,Bl=!!t,Vl=(n,r)=>`${t?`${t}/tx/${n}`:`https://mainnet.helius-rpc.com/v0/addresses/${n}/transactions`}?api-key=${encodeURIComponent(e)}&limit=100${r?`&before-signature=${r}`:``}`,Rl=[V,...Rl]}var H=1e9,Ul=5e3,Wl=890880,Gl=`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`,Kl=`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`,U=e=>(e/H).toFixed(4).replace(/\.?0+$/,``),ql=e=>new Promise(t=>setTimeout(t,e)),Jl=class extends Error{},Yl=class extends Error{},Xl=class{limit;ms;times=[];constructor(e,t){this.limit=e,this.ms=t}prune(e){for(;this.times.length&&this.times[0]<=e-this.ms;)this.times.shift()}when(e=1){let t=Date.now();this.prune(t);let n=this.times.length,r=n-(this.limit-Math.min(e,this.limit))-1;return Math.max(t,n?this.times[n-1]:0,r>=0?this.times[r]+this.ms:0)}delay(){return this.when(1)-Date.now()}book(e,t){let n=this.times.length;for(;n>0&&this.times[n-1]>t;)n--;this.times.splice(n,0,...Array(e).fill(t))}async take(){let e=this.when(1);this.book(1,e),e>Date.now()&&await ql(e-Date.now())}room(){let e=Date.now();return this.prune(e),this.times.length&&this.times[this.times.length-1]>e?0:this.limit-this.times.length}takeNow(e){this.book(e,Date.now())}},Zl=new Set([`getAsset`,`getAssetBatch`,`getAssetsByOwner`]),Ql={helius:new Xl(9,1100),heliusDas:new Xl(2,1100),heliusSend:new Xl(1,1050),history:new Xl(2,1100),publicAll:new Xl(90,1e4),publicMethod:new Map},$l=e=>(Ql.publicMethod.has(e)||Ql.publicMethod.set(e,new Xl(35,1e4)),Ql.publicMethod.get(e)),eu=new Map,tu=4e3,nu=(e,t)=>void(e!==V&&eu.set(`${e} ${t}`,Date.now()+tu)),ru=(e,t)=>(eu.get(`${e} ${t}`)??0)>Date.now();function iu(e,t){return e===V?Math.max(...t.map(e=>(Zl.has(e)?Ql.heliusDas:Ql.helius).delay())):t.some(t=>ru(e,t))?1/0:Math.max(Ql.publicAll.delay(),...t.map(e=>$l(e).delay()))}async function au(e,t){let n=new Map,r=e=>n.set(e,(n.get(e)??0)+1);for(let n of t)e===V?(n===`sendTransaction`&&r(Ql.heliusSend),r(Zl.has(n)?Ql.heliusDas:Ql.helius)):(r(Ql.publicAll),r($l(n)));let i=Math.max(...[...n].map(([e,t])=>e.when(t)));for(let[e,t]of n)e.book(t,i);i>Date.now()&&await ql(i-Date.now())}function ou(e){Ql.publicAll.takeNow(1),$l(e).takeNow(1)}function su(e){let t=Rl.filter(t=>!ru(t,e)),n=t.length?t:Rl;return!V||Ql.helius.delay()<120||iu(zl,[e])>0?n:[zl,...n.filter(e=>e!==zl)]}var cu=(e,t)=>fetch(e,{method:`POST`,...e===V&&Bl?{}:{headers:{"content-type":`application/json`}},body:JSON.stringify(t)});async function lu(e,t){for(let n=0;;n++){let r=[],i=0;for(let n of su(e))try{return await uu(n,e,t,0)}catch(e){if(e instanceof Jl)throw e;e instanceof Yl&&i++,r.push(`${new URL(n).hostname}: ${e instanceof Error?e.message:String(e)}`)}if(i&&n<3)await ql(500*(n+1));else throw Error(`Couldn't reach the Solana network (${e}). ${r.join(`; `)}`)}}async function uu(e,t,n,r=3,i=!1){for(let a=0;;a++){i&&e!==V?ou(t):await au(e,[t]);let o=await cu(e,{jsonrpc:`2.0`,id:1,method:t,params:n});if(o.status===429){if(nu(e,t),a<r){await ql(400*(a+1));continue}throw new Yl(`HTTP 429`)}if(!o.ok)throw Error(`HTTP ${o.status}`);let s=await o.json();if(s.error){if(s.error.code===-32005||s.error.code===429){if(nu(e,t),a<r){await ql(400*(a+1));continue}throw new Yl(s.error.message)}throw new Jl(s.error.message)}return s.result}}async function du(e,t,n=!1){try{n&&e!==V?t.forEach(e=>ou(e.method)):await au(e,t.map(e=>e.method));let r=await cu(e,t.map((e,t)=>({jsonrpc:`2.0`,id:t,...e})));if(r.status===429){for(let n of t)nu(e,n.method);throw new Yl(`HTTP 429`)}if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.json();if(!Array.isArray(i))throw Error(`not a batch`);let a=t.map((e,t)=>i.find(e=>e.id===t)),o=t.filter((e,t)=>a[t]?.error?.code===-32005||a[t]?.error?.code===429);if(o.length){for(let t of o)nu(e,t.method);throw new Yl(a.find(e=>e?.error).error.message)}if(a.some(e=>!e||e.error))throw Error(a.find(e=>e?.error)?.error?.message??`missing answer`);return a.map(e=>e.result)}catch(r){if(r instanceof Yl)throw r;return await Promise.all(t.map(t=>uu(e,t.method,t.params,3,n)))}}async function fu(e){return(await gu(e)).name}var pu=new Map;function mu(e){let t=pu.get(e);return t||(t=uu(V,`getAsset`,{id:e}),pu.set(e,t),t.catch(()=>pu.delete(e))),t}var hu=e=>e.content?.files?.map(e=>e.cdn_uri).find(e=>e?.startsWith(`https://cdn.helius-rpc.com/`));async function gu(e){if(!V)return{name:null};try{let t=await mu(e),n=t.content?.metadata;return{name:n?.name?`${n.name} (${n.symbol||`?`})`:null,logo:hu(t)}}catch{return{name:null}}}async function _u(e){if(!V)return{name:null,symbol:null};try{let t=await mu(e);return{name:t.content?.metadata?.name||null,symbol:t.content?.metadata?.symbol||t.token_info?.symbol||null,decimals:t.token_info?.decimals,logo:hu(t)}}catch{return{name:null,symbol:null}}}async function vu(e){return(await lu(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}])).value.map(e=>e?.lamports??0)}function yu(e){let t=[];for(;;){let n=e&127;if(e>>=7,e===0)return t.push(n),t;t.push(n|128)}}function bu(e,t){let n=0;for(let r=0;r<3;r++){let i=e[t+r];if(n|=(i&127)<<7*r,!(i&128))return[n,r+1]}throw Error(`Bad transaction length prefix`)}function xu(e,t){let n=e.slice(),[r,i]=bu(n,0),a=n.subarray(i+64*r),o=a[0]&128?1:0,s=a[o];o+=3;let[,c]=bu(a,o);o+=c;let l=Ba.decode(t.address),u=-1;for(let e=0;e<s;e++)a.subarray(o+32*e,o+32*e+32).every((e,t)=>e===l[t])&&(u=e);if(u<0)throw Error(`This trade isn't addressed to your wallet, so it was not signed.`);return n.set(Ll.sign(a,t.secret),i+64*u),n}function Su(e,t,n){let r=new Map([[e.address,{signer:!0,writable:!0}]]),i=(e,t,n)=>{let i=r.get(e)??{signer:!1,writable:!1};r.set(e,{signer:i.signer||t,writable:i.writable||n})};for(let e of t)e.keys.forEach(e=>i(e.pubkey,e.isSigner,e.isWritable)),i(e.programId,!1,!1);let a=([t,n])=>t===e.address?0:n.signer?n.writable?1:2:n.writable?3:4,o=[...r.entries()].sort((e,t)=>a(e)-a(t));if(o.some(([t,n])=>n.signer&&t!==e.address))throw Error(`Only the paying wallet can sign here.`);let s=new Map(o.map(([e],t)=>[e,t])),c=o.filter(([,e])=>!e.signer&&!e.writable).length,l=Uint8Array.from([1,0,c,...yu(o.length),...o.flatMap(([e])=>[...Ba.decode(e)]),...Ba.decode(n),...yu(t.length),...t.flatMap(e=>[s.get(e.programId),...yu(e.keys.length),...e.keys.map(e=>s.get(e.pubkey)),...yu(e.data.length),...e.data])]);return xu(Uint8Array.from([...yu(1),...new Uint8Array(64),...l]),e)}var Cu=`11111111111111111111111111111111`;function wu(e,t,n){let r=new Uint8Array(12),i=new DataView(r.buffer);return i.setUint32(0,2,!0),i.setBigUint64(4,BigInt(n),!0),{programId:Cu,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],data:r}}function Tu(e,t,n){return{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:Uint8Array.from([9])}}var Eu=`ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`;function Du(e){return Ou(Ba.decode(e))}function Ou(e){try{return Ll.Point.fromBytes(e),!0}catch{return!1}}var ku=new Map;function Au(e,t,n){let r=`${e}${t}${n}`,i=ku.get(r);return i||(i=ju([Ba.decode(e),Ba.decode(n),Ba.decode(t)],Eu),ku.size>5e3&&ku.clear(),ku.set(r,i)),i}function ju(e,t){let n=Ba.decode(t),r=new TextEncoder().encode(`ProgramDerivedAddress`);for(let t=255;t>=0;t--){let i=[...e,Uint8Array.of(t),n,r],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;let s=Is(a);if(!Ou(s))return Ba.encode(s)}throw Error(`Couldn't work out the coin account address.`)}function Mu(e,t,n,r,i){return{programId:Eu,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:Cu,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1}],data:Uint8Array.of(1)}}function Nu(e,t,n,r){let i=new Uint8Array(10),a=new DataView(i.buffer);return i[0]=12,a.setBigUint64(1,r,!0),i[9]=e.decimals,{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:e.mint,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:i}}async function Pu(e){let t=await lu(`getAccountInfo`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]);return t.value?{owner:t.value.owner,lamports:t.value.lamports}:null}var Fu=Cu;async function Iu(e){return(await lu(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`}])).value.map(e=>e?{owner:e.owner,lamports:e.lamports,data:e.data?ja.decode(e.data[0]):new Uint8Array}:null)}async function Lu(e,t){let{err:n,logs:r,accounts:i}=(await lu(`simulateTransaction`,[ja.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:t}}])).value;return{err:n,logs:r??[],accounts:(i??t.map(()=>null)).map(e=>e?{owner:e.owner,lamports:e.lamports,data:ja.decode(e.data[0])}:null)}}function Ru(e){return!e||e.data.length<72?0n:new DataView(e.data.buffer,e.data.byteOffset).getBigUint64(64,!0)}var zu=`ComputeBudget111111111111111111111111111111`;function Bu(e,t){let n=new Uint8Array(5);n[0]=2,new DataView(n.buffer).setUint32(1,e,!0);let r=new Uint8Array(9);return r[0]=3,new DataView(r.buffer).setBigUint64(1,BigInt(t),!0),[{programId:zu,keys:[],data:n},{programId:zu,keys:[],data:r}]}function Vu(e,t,n,r=Gl){return Tu({address:e,program:r},t,n)}function Hu(e,t,n,r){return Uu(e,[{to:t,lamports:n}],r)}function Uu(e,t,n){return Su(e,t.map(({to:t,lamports:n})=>wu(e.address,t,n)),n)}async function Wu(e,t){let n=t?[{mint:t}]:[{programId:Gl},{programId:Kl}];return(await Promise.all(n.map(t=>lu(`getTokenAccountsByOwner`,[e,t,{encoding:`jsonParsed`,commitment:`confirmed`}])))).flatMap(e=>e.value.map(({pubkey:e,account:t})=>{let n=t.data.parsed.info;return{address:e,program:t.owner,mint:n.mint,raw:BigInt(n.tokenAmount.amount),decimals:n.tokenAmount.decimals,lamports:t.lamports}}))}var Gu=null;function Ku(e=2e4){if(Gu&&Date.now()-Gu.at<e)return Gu.value;let t=lu(`getLatestBlockhash`,[{commitment:`confirmed`}]).then(e=>e.value.blockhash),n={at:Date.now(),value:t};return Gu=n,t.catch(()=>Gu===n&&(Gu=null)),t}var qu=()=>void Ku(8e3).catch(()=>{}),Ju=/custom program error: 0x177[234]\b/,Yu=class extends Error{slippage;constructor(e,t){super(e),this.slippage=t}};async function Xu(e){let t=[ja.encode(e),{encoding:`base64`,preflightCommitment:`confirmed`}],n=V?Ql.heliusSend.room()>0?[V,zl]:[zl]:Rl,r=e=>new Promise((n,r)=>{let i=e.length,a=null,o=null;for(let s of e)uu(s,`sendTransaction`,t,1).then(n,e=>{e instanceof Jl?a??=e:o??=e,--i===0&&r(a??o)})});try{try{return await r(n)}catch(e){if(e instanceof Jl||!V||n.includes(V))throw e;return await r([V])}}catch(e){throw e instanceof Jl?Ju.test(e.message)?new Yu(`The price moved too far before the trade went through, so it was stopped. Nothing was spent.`,!0):new Yu(`The network turned the trade down before it ran, so nothing was spent (${e.message}).`,!1):Error(`Couldn't reach the Solana network to send it (${e instanceof Error?e.message:String(e)}).`)}}var Zu=new Map,Qu=!1;function $u(e,t=45e3){return new Promise(n=>{let r=Zu.get(e);Zu.set(e,{end:Date.now()+t,done:r?e=>{r.done(e),n(e)}:n}),Qu||ed()})}async function ed(){Qu=!0;try{for(await ql(300);Zu.size;){let e=Date.now(),t=[...Zu.keys()].slice(0,200);try{(await lu(`getSignatureStatuses`,[t])).value.forEach((e,n)=>{let r=e?.err?`failed`:e&&(e.confirmationStatus===`confirmed`||e.confirmationStatus===`finalized`)?`confirmed`:null;r&&(Zu.get(t[n])?.done(r),Zu.delete(t[n]))})}catch{}for(let[e,t]of Zu)Date.now()>t.end&&(t.done(`timeout`),Zu.delete(e));Zu.size&&await ql(Math.max(0,300-(Date.now()-e)))}}finally{Qu=!1}}function td(e){return`https://solscan.io/account/${e}`}function nd(e){return`https://solscan.io/tx/${e}`}var rd=`So11111111111111111111111111111111111111112`,id=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),ad=new Map;function od(e,t){let n=`${e}:${t??``}`,r=ad.get(n);if(r&&Date.now()-r.at<6e4)return r.value.then(e=>e?.clone()??null);let i=(async()=>{for(let n=0;;n++){await Ql.history.take();let r=await fetch(Vl(e,t),{signal:AbortSignal.timeout(15e3)});if(r.status!==429||n>=3)return r;await ql(700*(n+1))}})(),a={at:Date.now(),value:i};return ad.set(n,a),i.then(e=>(!e||!e.ok)&&ad.get(n)===a&&ad.delete(n),()=>ad.get(n)===a&&ad.delete(n)),i.then(e=>e?.clone()??null)}async function sd(e,t,n,r=10){if(!Vl)return null;let i=0,a=0,o=0,s;for(let c=0;c<r;c++){let r;try{let t=await od(e,s);if(!t?.ok)return c?{lamports:i,usd:a,coins:o}:null;r=await t.json()}catch{return c?{lamports:i,usd:a,coins:o}:null}for(let n of r){if(n.transactionError)continue;let r=new Set;for(let t of n.tokenTransfers??[])t.toUserAccount===e&&t.toTokenAccount&&r.add(t.toTokenAccount),t.fromUserAccount===e&&t.fromTokenAccount&&r.add(t.fromTokenAccount);let s=0;for(let t of n.nativeTransfers??[])r.has(t.toUserAccount)||r.has(t.fromUserAccount)||(t.fromUserAccount===e&&(s-=t.amount),t.toUserAccount===e&&(s+=t.amount));let c=0,l=new Map;for(let r of n.tokenTransfers??[]){let n=+(r.toUserAccount===e)-(r.fromUserAccount===e);n&&(r.mint===rd?s+=n*Math.round(r.tokenAmount*1e9):id.has(r.mint)&&r.mint!==t?c+=n*r.tokenAmount:l.set(r.mint,(l.get(r.mint)??0)+n*r.tokenAmount))}let u=l.get(t)??0;if(u<=0||[...l].some(([e,n])=>e!==t&&Math.abs(n)>1e-6))continue;let d=s<0?-s:0,f=c<0?-c:0;d<5e5&&f<.05||(i+=d,a+=f,o+=u)}if(o>=n*.999||r.length<100)break;s=r[r.length-1].signature}return{lamports:i,usd:a,coins:o}}function cd(e,t){if(e.transactionError)return null;let n=new Set;for(let r of e.tokenTransfers??[])r.toUserAccount===t&&r.toTokenAccount&&n.add(r.toTokenAccount),r.fromUserAccount===t&&r.fromTokenAccount&&n.add(r.fromTokenAccount);let r=0;for(let i of e.nativeTransfers??[])n.has(i.toUserAccount)||n.has(i.fromUserAccount)||(i.fromUserAccount===t&&(r-=i.amount),i.toUserAccount===t&&(r+=i.amount));let i=0,a=new Map;for(let n of e.tokenTransfers??[]){let e=+(n.toUserAccount===t)-(n.fromUserAccount===t);e&&(n.mint===rd?r+=e*Math.round(n.tokenAmount*1e9):id.has(n.mint)?i+=e*n.tokenAmount:a.set(n.mint,(a.get(n.mint)??0)+e*n.tokenAmount))}let o=[...a].filter(([,e])=>Math.abs(e)>1e-6);if(o.length!==1)return null;let[s,c]=o[0],l=c>0?1:-1;if(l===-1&&r<=0&&i<=0){let n=e.accountData?.find(e=>e.account===t)?.nativeBalanceChange??0;n>0&&(r=n)}let u=l===1?-r:r,d=l===1?-i:i;return u<5e5&&d<.05?null:{sig:e.signature,at:e.timestamp??0,mint:s,side:l,coins:Math.abs(c),lamports:Math.max(0,u),usd:Math.max(0,d)}}async function ld(e,t,n=10){if(!Vl)return null;let r=[],i,a;for(let o=0;o<n;o++){let n;try{let t=await od(e,a);if(!t?.ok)return o?{trades:r,top:i,reachedStop:!1}:null;n=await t.json()}catch{return o?{trades:r,top:i,reachedStop:!1}:null}o===0&&(i=n[0]?.signature??t);for(let a of n){if(a.signature===t)return{trades:r,top:i,reachedStop:!0};let n=cd(a,e);n&&r.push(n)}if(n.length<100)return{trades:r,top:i,reachedStop:!0};a=n[n.length-1].signature}return{trades:r,top:i,reachedStop:!1}}async function ud(e){let t=e=>[e,{limit:1,commitment:`confirmed`}],n=e.map(()=>void 0),r=async r=>{for(let i of V?[V,zl]:[zl])try{n[r]=(await uu(i,`getSignaturesForAddress`,t(e[r])))[0]?.signature??null;return}catch{}},i=[];for(let t=0;t<e.length;t+=30)i.push(t);return await Promise.all(i.map(async i=>{let a=e.slice(i,i+30),o=()=>Promise.all(a.map((e,t)=>n[i+t]===void 0?r(i+t):null));if(a.length<3&&V)return o();let s=$l(`getSignaturesForAddress`);if(ru(zl,`getSignaturesForAddress`)||s.room()<a.length||Ql.publicAll.room()<a.length)return o();s.takeNow(a.length),Ql.publicAll.takeNow(a.length);try{let e=await cu(zl,a.map((e,n)=>({jsonrpc:`2.0`,id:n,method:`getSignaturesForAddress`,params:t(e)}))),r=e.ok?await e.json():[];(e.status===429||Array.isArray(r)&&r.some(e=>e.error?.code===-32005||e.error?.code===429))&&nu(zl,`getSignaturesForAddress`);for(let e of Array.isArray(r)?r:[])e.result&&(n[i+e.id]=e.result[0]?.signature??null)}catch{}return o()})),n}async function dd(e){let t=[];for(let n=0;n<e.length;n+=100){let r=await lu(`getMultipleAccounts`,[e.slice(n,n+100),{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:64,length:8}}]);for(let e of r.value){let n=e?ja.decode(e.data[0]):null;t.push(n&&n.length===8?new DataView(n.buffer,n.byteOffset).getBigUint64(0,!0):null)}}return t}async function fd(e,t,n){let r=n?[n]:[Gl,Kl],i=e.flatMap(e=>r.map(n=>Au(e,t,n))),a=[t,...e,...i],o=[];for(let e=0;e<a.length;e+=100)o.push(a.slice(e,e+100));let s=(await Promise.all(o.map(e=>lu(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:44,length:28}}])))).flatMap(e=>e.value),c=s[0],l=c?ja.decode(c.data[0]):null,u=!!c&&(c.owner===`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`||c.owner===`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)&&!!l?.length,d=u?r.indexOf(c.owner):-1,f=t=>{if(d<0)return null;let n=s[1+e.length+t*r.length+d];return n&&n.owner===c.owner?n:null};return{decimals:u?l[0]:void 0,program:u?c.owner:void 0,lamports:e.map((e,t)=>s[1+t]?.lamports??0),raw:e.map((e,t)=>{let n=f(t),r=n?ja.decode(n.data[0]):null;return r&&r.length>=28?new DataView(r.buffer,r.byteOffset).getBigUint64(20,!0):0n}),deposit:e.map((e,t)=>f(t)?.lamports??0),accounts:e.map((e,t)=>f(t)?i[t*r.length+d]:null)}}async function pd(e){let t=new Map;if(!V||!e.length)return t;for(let n=0;n<e.length;n+=1e3)try{let r=await uu(V,`getAssetBatch`,{ids:e.slice(n,n+1e3)});for(let e of r)e&&t.set(e.id,{name:e.content?.metadata?.name||null,symbol:e.content?.metadata?.symbol||e.token_info?.symbol||null,logo:hu(e),decimals:e.token_info?.decimals,price:e.token_info?.price_info?.price_per_token||void 0})}catch{}return t}function md(e){return V?e.some(e=>ru(zl,e))?[V,zl]:[zl,V]:[zl]}var hd=[`getTokenAccountsByOwner`,`getMultipleAccounts`];async function gd(e,t=md(hd)){let n=null;for(let r of t)try{let[t,n,i]=await du(r,[{method:`getTokenAccountsByOwner`,params:[e,{programId:Gl},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getTokenAccountsByOwner`,params:[e,{programId:Kl},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getMultipleAccounts`,params:[[e],{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]}],!0),a=[...t.value,...n.value].map(({pubkey:e,account:t})=>({address:e,mint:t.data.parsed.info.mint,raw:BigInt(t.data.parsed.info.tokenAmount.amount)})).filter(e=>e.raw>0n).slice(0,60);return{node:r,lamports:i.value[0]?.lamports??0,accounts:a}}catch(e){n=e}throw n instanceof Error?n:Error(String(n))}async function _d(e,t,n){let r=await(n??gd(t)).catch(()=>gd(t)),i=null,a=[r.node,...md([`simulateTransaction`]).filter(e=>e!==r.node)];a.length>1&&ru(a[0],`simulateTransaction`)&&a.push(a.shift());for(let n of a)try{n!==r.node&&(r=await gd(t,[n]));let i=await uu(n,`simulateTransaction`,[ja.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:[t,...r.accounts.map(e=>e.address)]}}],n===V?2:0,!0);if(i.value.err)return{failed:!0,solOut:0,coinsOut:new Map,takenOver:!1};let a=i.value.accounts??[],o=a[0],s=!!o&&o.owner!==Cu,c=new Map;return r.accounts.forEach((e,n)=>{let r=a[n+1],i=r?ja.decode(r.data[0]):new Uint8Array;i.length>=64&&Ba.encode(i.slice(32,64))!==t&&(s=!0);let o=i.length>=72?new DataView(i.buffer,i.byteOffset).getBigUint64(64,!0):0n;o<e.raw&&c.set(e.mint,(c.get(e.mint)??0n)+(e.raw-o))}),{failed:!1,solOut:r.lamports-(o?.lamports??0),coinsOut:c,takenOver:s}}catch(e){i=e}throw i instanceof Error?i:Error(String(i))}var vd=`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`,yd=`pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA`,bd=`So11111111111111111111111111111111111111112`,xd=Fu,Sd=`ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw`,Cd=`5PHirr8joyTMp9JMm6nW7hNDVyEYdkzDqazxPD7RaTjx`,wd=`4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`,Td=`8Wf5TiAheLUqBrKXeYg2JtAFFMWtKdG2BSFgqUcPVwTt`,Ed=`Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`,Dd=`5YxQFdt3Tr9zJLvkFccqXVUwhdTWJQc1fFg2YPbxvxeD`,Od=Uint8Array.from([43,100,73,19,233,246,111,148]),kd=e=>new TextEncoder().encode(e),Ad=e=>Ba.decode(e),jd=ju([kd(`__event_authority`)],yd);function Md(e){return ju([kd(`bonding-curve`),Ad(e)],vd)}function Nd(e,t){let n=ju([kd(`pool-authority`),Ad(e)],vd);return ju([kd(`pool`),Uint8Array.of(0,0),Ad(n),Ad(e),Ad(t)],yd)}async function Pd(e){let[t,n]=await Iu([Md(e),e]);if(!t||t.owner!==vd||t.data.length<115||!n)return null;let r=Ba.encode(t.data.slice(83,115));if(r===xd||r===bd)return null;let i=t.data[48]!==0,a=t.data[81]!==0,o=t.data[82]!==0,[s,c]=await Iu([r,Nd(e,r)]);if(!s)throw Error(`This coin's price coin couldn't be found.`);let l=i?c?.owner===yd?`pool`:null:`curve`;if(!l)throw Error(`This coin is between pump.fun and its pool right now, so it can't be traded for a moment. Try again shortly.`);if(l===`curve`&&a||l===`pool`&&c.data.length>=244&&c.data[243]!==0)throw Error(`pump.fun doesn't allow this kind of trade on "mayhem mode" coins.`);let u=l===`pool`&&c.data.length>=245&&c.data[244]!==0;if(l===`curve`&&o||u)throw Error(`pump.fun doesn't allow this kind of trade on cashback coins.`);let d=e=>{if(e!==`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`&&e!==`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)throw Error(`This coin uses a token program the app doesn't know.`);return e};return{mint:e,mintProgram:d(n.owner),quote:r,quoteProgram:d(s.owner),venue:l}}function Fd(e,t,n,r,i){let a={mint:t.mint,program:t.mintProgram},o={mint:t.quote,program:t.quoteProgram},[s,c]=n===`buy`?[o,a]:[a,o],l=(e,t)=>Au(e,t.mint,t.program),u=t.venue===`curve`?Md(t.mint):Nd(t.mint,t.quote),d=e=>({pubkey:e,isSigner:!1,isWritable:!0}),f=e=>({pubkey:e,isSigner:!1,isWritable:!1}),p=new Uint8Array(24);p.set(Od,0);let m=new DataView(p.buffer);m.setBigUint64(8,r,!0),m.setBigUint64(16,i,!0);let h={programId:yd,keys:[{pubkey:e,isSigner:!0,isWritable:!0},d(l(e,s)),d(l(e,c)),f(Sd),f(Cd),d(ju([kd(`user_volume_accumulator`),Ad(e)],yd)),d(l(Dd,o)),f(Gl),f(Kl),f(Fu),f(jd),f(yd),f(vd),f(wd),f(Td),f(Ed),f(t.mint),f(t.quote),d(u),d(l(u,a)),d(l(u,o))],data:p};return[...Bu(3e5,2e5),Mu(e,l(e,c),e,c.mint,c.program),Mu(e,l(Dd,o),Dd,o.mint,o.program),h]}function Id(e,t,n){return n===`coin`?Au(e,t.mint,t.mintProgram):Au(e,t.quote,t.quoteProgram)}var Ld=`walletCoins`,Rd=1,zd=null,Bd=()=>({v:Rd,wallets:{},coins:{}}),Vd=()=>zd??=j.get(Ld).then(e=>{let t=JSON.parse(e||`null`);return t&&t.v===Rd?t:Bd()}).catch(Bd),Hd;function Ud(){clearTimeout(Hd),Hd=setTimeout(async()=>{let e=await Vd();j.set(Ld,JSON.stringify(e)).catch(()=>{})},300)}var Wd=([e,t,n,r,i,a])=>({address:e,mint:t,program:n,raw:BigInt(r),decimals:i,lamports:a}),Gd=e=>[e.address,e.mint,e.program,e.raw.toString(),e.decimals,e.lamports],Kd=(e,t)=>t.map(t=>({address:t,lamports:e.wallets[t].lamports,accounts:e.wallets[t].accounts.map(Wd)}));async function qd(e){let t=await Vd();return e.every(e=>t.wallets[e])?Kd(t,e):null}async function Jd(e){Zd=null;let t=await Vd();for(let n of e)t.wallets[n]&&(t.wallets[n].stale=!0);Ud()}async function Yd(e,t,n){if(!t.length)return;let r=t.map(e=>e.address).filter(e=>!n.has(e)),[i,a]=await Promise.all([Promise.all(t.map(e=>Wu(e.address))),r.length?ud(r):Promise.resolve([])]),o=new Map(n);r.forEach((e,t)=>o.set(e,a[t])),t.forEach(({address:t,lamports:n},r)=>{let a=e.wallets[t],s=o.get(t);e.wallets[t]={at:Date.now(),lamports:n,sig:s===void 0?a?.sig:s,sigAt:s===void 0?a?.sigAt:Date.now(),accounts:i[r].map(Gd)}})}async function Xd(e,t){let n=new Map;for(let r of t)for(let t of e.wallets[r].accounts)BigInt(t[3])>0n&&n.set(t[1],t[4]);let r=[...n.keys()].filter(t=>!e.coins[t]);if(!r.length)return;let i=await pd(r);for(let t of r){let r=i.get(t);r&&(e.coins[t]={name:r.name,symbol:r.symbol,logo:r.logo,decimals:r.decimals??n.get(t),price:r.price})}}var Zd=null;function Qd(e){let t=e.join(`,`);if(Zd&&Zd.key===t&&Date.now()-Zd.at<4e3)return Zd.value;let n=$d(e),r={key:t,at:Date.now(),value:n};return Zd=r,n.then(()=>Zd===r&&(r.at=Date.now()),()=>Zd===r&&(Zd=null)),n}async function $d(e){let t=await Vd(),n=e=>t.wallets[e]&&!t.wallets[e].stale,r=e.flatMap(e=>n(e)?t.wallets[e].accounts.map(t=>({owner:e,a:t})):[]),i=e.filter(e=>!t.wallets[e]),[a,o,s]=await Promise.all([vu(e),r.length?dd(r.map(e=>e.a[0])):Promise.resolve([]),i.length?ud(i):Promise.resolve([])]),c=new Map(i.map((e,t)=>[e,s[t]])),l=new Set;return e.forEach((e,n)=>{let r=t.wallets[e];(!r||r.stale||r.lamports!==a[n])&&(!r&&c.get(e)===null&&!a[n]?t.wallets[e]={at:Date.now(),lamports:0,sig:null,sigAt:Date.now(),accounts:[]}:l.add(e))}),r.forEach(({owner:e,a:t},n)=>{let r=o[n];r===null?l.add(e):t[3]=r.toString()}),await Yd(t,[...l].map(t=>({address:t,lamports:a[e.indexOf(t)]})),c),e.forEach((e,n)=>{t.wallets[e].lamports=a[n],t.wallets[e].at=Date.now()}),await Xd(t,e),Ud(),Kd(t,e)}async function ef(e,t=!1){let n=await Vd(),r=e.filter(e=>n.wallets[e]&&!n.wallets[e].stale&&(t||Date.now()-(n.wallets[e].sigAt??0)>12e4));if(!r.length)return null;let i=await ud(r),a=new Map(r.map((e,t)=>[e,i[t]])),o=r.filter(e=>a.get(e)!==void 0&&a.get(e)!==n.wallets[e].sig);for(let e of r)a.get(e)!==void 0&&(n.wallets[e].sigAt=Date.now());return o.length?(await Yd(n,o.map(e=>({address:e,lamports:n.wallets[e].lamports})),a),await Xd(n,e),Ud(),Kd(n,e)):(Ud(),null)}async function tf(e){let t=await Vd(),n=new Map;for(let t of e.accounts){if(t.raw===0n)continue;let e=n.get(t.mint)??{raw:0n,decimals:t.decimals};e.raw+=t.raw,n.set(t.mint,e)}return[...n].map(([e,{raw:n,decimals:r}])=>{let i=t.coins[e],a=Number(n)/10**r;return{mint:e,name:i?.name??null,symbol:i?.symbol??null,amount:a,usd:i?.price?i.price*a:null,decimals:r,logo:i?.logo}})}async function nf(e){let t=await Vd(),n=!1;for(let[r,i]of e)t.coins[r]&&i>0&&t.coins[r].price!==i&&(t.coins[r].price=i,n=!0);n&&Ud()}async function rf(e){return(await Vd()).coins[e]??null}async function af(e){let t=await Vd();for(let n of Object.values(t.wallets))for(let t of n.accounts)if(t[1]===e)return t[2]}var of=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(es(e),$o(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),as(r)}update(e){return rs(this),this.iHash.update(e),this}digestInto(e){rs(this),is(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},sf=(()=>{let e=((e,t,n)=>new of(e,t).update(n).digest());return e.create=(e,t)=>new of(e,t),e})();function cf(e,t,n,r){es(e);let{c:i,dkLen:a,asyncTick:o}=gs({dkLen:32,asyncTick:10},r);if(Qo(i,`c`),Qo(a,`dkLen`),Qo(o,`asyncTick`),i<1)throw Error(`"c" (iterations) must be >= 1`);if(a<1)throw Error(`"dkLen" must be >= 1`);if(a>(2**32-1)*e.outputLen)throw Error(`derived key too long`);let s=ms(t,`password`);try{let t=ms(n,`salt`);try{let n=new Uint8Array(a),{iHash:r,oHash:c,outputLen:l}=sf.create(e,s);return{c:i,dkLen:a,asyncTick:o,DK:n,outputLen:l,eng:lf(r,c,t,new Uint8Array(l))}}finally{typeof n==`string`&&as(t)}}finally{typeof t==`string`&&as(s)}}function lf(e,t,n,r){let i=new Uint8Array(4),a=os(i),o=e._cloneInto().update(n),s=t._cloneInto(),c=e._cloneInto,l=t._cloneInto;return{u1:(e,n)=>{a.setInt32(0,e,!1),o._cloneInto(s).update(i).digestInto(r),t._cloneInto(s).update(r).digestInto(r),n.set(r.subarray(0,n.length))},rounds:(n,i)=>{for(let a=1;a<n;a++){c.call(e,s).update(r).digestInto(r),l.call(t,s).update(r).digestInto(r);for(let e=0;e<i.length;e++)i[e]^=r[e]}},output:n=>(e.destroy(),t.destroy(),o.destroy(),s.destroy(),as(r),n)}}function uf(e,t,n,r){let{c:i,dkLen:a,DK:o,outputLen:s,eng:c}=cf(e,t,n,r);for(let e=1,t=0;t<a;e++,t+=s){let n=o.subarray(t,t+s);c.u1(e,n),c.rounds(i,n)}return c.output(o)}var df=e=>e[0]===`あいこくしん`;function ff(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;let n=e.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function pf(e){if(typeof e!=`string`)throw TypeError(`invalid mnemonic type: `+typeof e);if(!ff(e))throw TypeError(`expected well-formed Unicode string`);return e.normalize(`NFKD`)}function mf(e){let t=pf(e),n=t.split(` `);if(![12,15,18,21,24].includes(n.length))throw Error(`Invalid mnemonic`);return{nfkd:t,words:n}}function hf(e){if($o(e),![16,20,24,28,32].includes(e.length))throw RangeError(`invalid entropy length`)}function gf(e,t=128){if(Qo(t),t%32!=0||t>256)throw RangeError(`Invalid entropy`);return Sf(vs(t/8),e)}var _f=e=>{let t=8-e.length/4;return Is(e)[0]>>t<<t};function vf(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!=`string`)throw TypeError(`Wordlist: expected array of 2048 strings`);e.forEach(e=>{if(typeof e!=`string`)throw TypeError(`wordlist: non-string element: `+e);if(!ff(e))throw TypeError(`wordlist: expected well-formed Unicode string`)})}function yf(e,t){vf(t);let n=new Uint8Array(e.length+1);n.set(e),n[e.length]=_f(e);let r=[],i=0,a=0;for(let e of n)i=i<<8|e,a+=8,a>=11&&(a-=11,r.push(t[i>>>a&2047]),i&=(1<<a)-1);return r}function bf(e,t){vf(t);let n=e.length/3*4,r=new Uint8Array(n+1),i=0,a=0,o=0;for(let n of e){let e=t.indexOf(n);if(e===-1)throw Error(`Unknown word: `+n);for(i=i<<11|e,a+=11;a>=8;)a-=8,r[o++]=i>>>a&255;i&=(1<<a)-1}a>0&&(r[o]=i<<8-a);let s=r.subarray(0,n);if(r[n]!==_f(s))throw Error(`Invalid checksum`);return Uint8Array.from(s)}function xf(e,t){let{words:n}=mf(e),r=bf(n,t);return hf(r),r}function Sf(e,t){return hf(e),yf(e,t).join(df(t)?`　`:` `)}function Cf(e,t){try{xf(e,t)}catch{return!1}return!0}var wf=e=>{if(typeof e!=`string`)throw TypeError(`invalid passphrase type: `+typeof e);return pf(`mnemonic`+e)};function Tf(e,t=``){return uf(Ls,mf(e).nfkd,wf(t),{c:2048,dkLen:64})}var Ef=Object.freeze(`abandon
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
`));function Df(){return gf(Ef,128)}function Of(e){return e.trim().toLowerCase().split(/\s+/).join(` `)}function kf(e){return Cf(Of(e),Ef)}function Af(e,t){let n=sf(Ls,new TextEncoder().encode(`ed25519 seed`),e),r=n.slice(0,32),i=n.slice(32);for(let e of[44,501,t,0]){let t=new Uint8Array(37);t.set(r,1),new DataView(t.buffer).setUint32(33,(e|2147483648)>>>0),n=sf(Ls,i,t),r=n.slice(0,32),i=n.slice(32)}return r}function jf(e,t){let n=Tf(Of(e));return Array.from({length:t},(e,t)=>{let r=Af(n,t);return{index:t,address:Ba.encode(Ll.getPublicKey(r)),secret:r}})}var Mf=3e5,Nf=e=>btoa(String.fromCharCode(...e)),Pf=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function Ff(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:Mf,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}function If(e,t){return Lf(Of(e),t)}async function Lf(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await Ff(t,n),a=new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,new TextEncoder().encode(e))),o={v:1,salt:Nf(n),iv:Nf(r),data:Nf(a)};return JSON.stringify(o)}async function Rf(e,t){let n=JSON.parse(e),r=await Ff(t,Pf(n.salt));try{let e=await crypto.subtle.decrypt({name:`AES-GCM`,iv:Pf(n.iv)},r,Pf(n.data));return new TextDecoder().decode(e)}catch{return null}}function zf(e){return Ba.encode(new Uint8Array([...e.secret,...Ba.decode(e.address)]))}function Bf(e){let t=e.trim().replace(/^["']|["']$/g,``),n;try{if(t.startsWith(`[`)){let e=JSON.parse(t);if(!Array.isArray(e)||!e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return null;n=new Uint8Array(e)}else n=Ba.decode(t.replace(/\s+/g,``))}catch{return null}if(n.length!==64)return null;let r=n.slice(0,32),i=Ll.getPublicKey(r);return i.every((e,t)=>e===n[32+t])?{address:Ba.encode(i),secret:r}:null}var Vf=`vault`,Hf=`addresses`,Uf=`imports`,Wf=new Map;function Gf(e){let t=Wf.get(e);if(!t){let n=Xt.get(e);t=n,Wf.set(e,n),n.then(t=>t.value===null&&Wf.get(e)===n&&Wf.delete(e),()=>Wf.get(e)===n&&Wf.delete(e))}return t}async function Kf(e,t){Wf.delete(e),await Xt.set(e,t),Wf.delete(e)}async function qf(e){Wf.delete(e),await Xt.remove(e),Wf.delete(e)}var Jf=`importList`,Yf=`costBasis`,Xf=20;document.head.append(Object.assign(document.createElement(`style`),{textContent:Pn}));var W=new URLSearchParams(location.search),G=W.get(`jk`),Zf=W.get(`rk`),Qf=`https://krypto-relay.dustin-m-shamp.workers.dev`,$f=W.get(`relay`)===Qf?Qf:void 0;$f&&Ua($f),Zf&&($f||!W.has(`relay`))&&Hl(Zf,$f);var ep=document.querySelector(`meta[name="app-version"]`)?.content??`?`,tp=W.get(`v`),np=!!tp&&/^\d+(\.\d+)+$/.test(tp)&&((e,t)=>{let[n,r]=[e.split(`.`).map(Number),t.split(`.`).map(Number)];for(let e=0;e<Math.max(n.length,r.length);e++)if((n[e]??0)!==(r[e]??0))return(n[e]??0)>(r[e]??0);return!1})(tp,ep),rp=np&&!W.get(`r`);if(rp){let e=new URL(location.href);e.searchParams.set(`r`,String(Date.now())),location.replace(e.toString())}var ip=W.get(`buy`),ap=Math.min(100,Math.max(1,Number(W.get(`pct`))||100)),op=W.get(`sol`)?{total:Math.round(Number(W.get(`sol`))*H),count:W.get(`n`)?Number(W.get(`n`)):null,split:W.get(`split`)?W.get(`split`).split(`-`).map(Number):null}:null,sp=W.get(`sell`),cp=Math.min(100,Math.max(1,Number(W.get(`spct`))||100)),lp=W.get(`main`)===`1`,up=W.get(`w`)?W.get(`w`).split(`-`).map(Number):null,dp=W.get(`send`),fp=W.get(`to`),pp=document.getElementById(`app`),mp=new Map;function hp(e,t,n){let r=mp.get(e);if(r&&Date.now()-r.at<r.ttl)return r.value;let i=n();return mp.set(e,{at:Date.now(),ttl:t,value:i}),i.catch(()=>mp.delete(e)),i}var gp=()=>mp.clear(),_p=e=>hp(`bal:${e.join(`,`)}`,3e4,()=>vu(e)),vp=(e=!1)=>hp(`solusd`,3e4,()=>G?vo(G,e):Promise.resolve(null)),yp=e=>hp(`orders:${e}`,3e4,()=>wo(G,e,`active`)),bp=e=>hp(`coin:${e}`,864e5,()=>_u(e)),xp=(e,t=!1)=>hp(`prices:${[...e].sort().join(`,`)}`,15e3,()=>yo(G,e,t)),Sp=null;function Cp(){gp(),Kt(),pp.classList.add(`loading`),Om(Mp(pp.querySelector(`h1`)?.textContent??`trade`)),Sp?.disconnect();let e=new Map;Sp=new MutationObserver(()=>{if(!document.getElementById(`hackloader`)){Sp?.disconnect();return}let t=document.getElementById(`funding`),n=t?[[`funding`,`main`,t.textContent??``]]:[];pp.querySelectorAll(`code[id^="status-"]`).forEach(e=>{let t=e.parentElement?.querySelector(`span`)?.textContent?.trim()??``;n.push([e.id,t,e.textContent??``])});for(let[t,r,i]of n){let n=i.replace(/\s*·\s*(view|check)\s*$/i,``).replace(/\s+/g,` `).trim();n&&n!==`waiting`&&e.get(t)!==n&&(e.set(t,n),Om(`${n.startsWith(`✓`)?`[ok]`:n.startsWith(`✗`)||/fail/i.test(n)?`[!]`:`[*]`} ${r} ${n.replace(/^[✓✗]\s*/,``)}`,t))}}),Sp.observe(pp,{subtree:!0,childList:!0,characterData:!0})}var wp=[],Tp=!1,Ep=!1,Dp=new Set([`home`,`welcome`]);function K(e,t){if(Tp&&wp.pop(),Dp.has(e))wp.length=0;else{let t=wp.findIndex(t=>t.key===e);t>=0&&(wp.length=t)}wp.push({key:e,open:t}),Tp=!0}function Op(){M();let e=e=>{let t=e?e.open:X;Promise.resolve().then(()=>t()).catch($)};if(!Ep&&wp.length)return e(wp.pop());wp.pop(),e(wp.pop())}function q(e,t=!1){t||(Ep=Tp,Tp=!1);let n=wp[wp.length-1],r=Ep&&n&&Dp.has(n.key),i=np?`<p class="note">Version ${Q(tp)} is still being published. Everything here works; close and reopen in a minute to get it.</p>`:``;pp.innerHTML=`<header class="brand">${r?``:`<button type="button" id="navBack" class="navback" aria-label="Back">←</button>`}${zi()}<div class="name glitch" data-text="KRYPTO SNATCHER">KRYPTO SNATCHER</div></header>`+i+e+`<p class="version">KRYPTO_SNATCHER // v${ep}${$f?` · RELAY`:Zf?` · HELIUS`:``}</p>`,pp.classList.toggle(`loading`,!!pp.querySelector(`.loader`)),document.getElementById(`navBack`)?.addEventListener(`click`,Op),window.scrollTo(0,0)}function J(e){return document.getElementById(e)}function Y(e,t){J(e).addEventListener(`click`,t)}function kp(e){return`${e.slice(0,6)}…${e.slice(-6)}`}function Ap(e){$t(`error`);let t=J(`error`);t.textContent=e,t.hidden=!1}var jp=new Set([`your`,`the`,`my`,`a`,`an`,`of`,`on`,`to`,`it`,`what`,`each`,`every`,`in`,`from`,`this`]),Mp=e=>`$ ./objective --${e.toLowerCase().replace(/[^a-z0-9 ]+/g,` `).split(/\s+/).filter(e=>e&&!jp.has(e)).join(`-`)||`run`}`;function Np(e){q(Pi(e),!0),Fi(),Om(Mp(e))}async function Pp(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,$t(`success`),setTimeout(()=>t.textContent=n,1200)}catch{prompt(`Copy this address:`,e)}}async function Fp(){if(!qt()){q(`
      <h1>Open this on your phone</h1>
      <p>Your wallets are kept in your phone's secure storage, which only the Telegram app on iPhone or Android provides.</p>
      <p class="muted">Make sure Telegram is up to date, then open this from the bot on your phone.</p>`);return}A.ready(),A.expand();try{A.setHeaderColor?.(`#05010f`),A.setBackgroundColor?.(`#05010f`)}catch{}let e=cm().catch(()=>null);Gf(Uf).catch(()=>{}),li(),setTimeout(Le,1500),ip&&G&&(gu(ip).catch(()=>{}),e.then(e=>{if(!e)return;let t=e.map(e=>e.address),n=vu(t);n.catch(()=>{}),um={at:Date.now(),key:t.join(`,`),value:n}}));let{value:t,canRestore:n}=await Gf(Vf);if(t){if(W.get(`view`)===`holdings`)return og();if(W.get(`view`)===`sweep`)return jg();if(W.get(`splitsol`)){let e=W.get(`splitsol`);return Dh(e===`all`?`all`:Math.round(Number(e)*H),Number(W.get(`n`))||null,W.get(`split`)?W.get(`split`).split(`-`).map(Number):null)}if(dp&&fp){let e=Number(W.get(`amt`)),t=Number(W.get(`sendpct`));return u_({what:dp,to:fp,only:up,side:W.get(`side`)===`1`,amount:e>0?e:null,pct:t>0&&t<100?t:null})}return sp===`*`?n_(cp,lp,up):sp?zg(sp,cp,lp,up):ip&&op?wh(ip,op):ip&&W.get(`pick`)?Oh(ip,Number(W.get(`n`))||null,W.get(`side`)===`1`):ip?gh(ip,ap):X()}Ip(n)}function Ip(e){K(`welcome`,()=>Ip(e)),q(`
    <h1>Your wallets</h1>
    <p>Your wallets are created and kept on this phone, locked with a PIN. The bot never sees your keys.</p>
    ${e?`<button id="restoreDevice" class="primary">Restore my saved wallets</button>`:``}
    <button id="create" class="${e?``:`primary`}">Create new wallets</button>
    <button id="import">I already have a 12-word phrase</button>`),e&&Y(`restoreDevice`,async()=>{let{value:e}=await Xt.restore(Vf);await Xt.restore(Uf).catch(()=>null),Wf.clear(),e?X():Ip(!1)}),Y(`create`,()=>Rp(Df())),Y(`import`,Bp)}function Lp(e){return`<ol class="words">${e.split(` `).map(e=>`<li>${e}</li>`).join(``)}</ol>`}function Rp(e){K(`newPhrase`,()=>Rp(e)),q(`
    <h1>Your 12-word backup</h1>
    <p>Write these words down on paper, in order. They are the only way to get your wallets back if you lose this phone.</p>
    ${Lp(e)}
    <p class="warning">Never share these words or type them anywhere else. Anyone who has them controls your money.</p>
    <label class="check"><input type="checkbox" id="saved"> I wrote all 12 words down</label>
    <button id="next" class="primary" disabled>Continue</button>`),J(`saved`).addEventListener(`change`,()=>J(`next`).disabled=!J(`saved`).checked),Y(`next`,()=>zp(e))}function zp(e){K(`quiz`,()=>zp(e));let t=e.split(` `),n=Math.floor(Math.random()*6),r=6+Math.floor(Math.random()*6);q(`
    <h1>Check your backup</h1>
    <p>Type these two words from your paper.</p>
    <label>Word #${n+1}<input id="wa" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <label>Word #${r+1}<input id="wb" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <p id="error" class="error" hidden></p>
    <button id="check" class="primary">Check</button>
    <button id="back">Show the words again</button>`),Y(`check`,()=>{if(J(`wa`).value.trim().toLowerCase()!==t[n]||J(`wb`).value.trim().toLowerCase()!==t[r])return Ap(`Those don't match. Check your paper, or go back to see the words again.`);Kp(e)}),Y(`back`,()=>Rp(e))}function Bp(){K(`import`,Bp),q(`
    <h1>Enter your 12 words</h1>
    <p>Type your words in order, separated by spaces.</p>
    <textarea id="phrase" rows="4" autocapitalize="off" autocomplete="off" spellcheck="false"></textarea>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Continue</button>
    <button id="back">Back</button>`),Y(`next`,()=>{let e=Of(J(`phrase`).value);if(!kf(e))return Ap(`That isn't a valid 12-word phrase. Check for typos.`);Kp(e)}),Y(`back`,()=>Fp())}var Vp=e=>`<input id="${e}" class="pinvalue" type="password" inputmode="none" maxlength="6" autocomplete="off" tabindex="-1">
   <div class="pindots" data-for="${e}">${`<i></i>`.repeat(6)}</div>`,Hp=(e=`clear`)=>`<div class="keypad">${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,e,`0`,`back`].map(e=>`<button type="button" class="key${/\d/.test(e)?``:` fn ${e}`}" data-k="${e}">${e===`back`?`⌫`:e===`clear`?`CLR`:e===`dot`?`.`:e}</button>`).join(``)}</div>`;function Up(e){document.querySelectorAll(`.key`).forEach(t=>t.addEventListener(`click`,()=>{M(),e(t.dataset.k)}))}function Wp(e,t){let n=e[0],r=()=>e.forEach(e=>{let t=document.querySelector(`.pindots[data-for="${e}"]`);t.classList.toggle(`active`,e===n);let r=J(e).value.length;t.querySelectorAll(`i`).forEach((e,t)=>e.classList.toggle(`on`,t<r))});e.forEach(e=>{J(e).addEventListener(`input`,r),document.querySelector(`.pindots[data-for="${e}"]`).addEventListener(`click`,()=>(n=e,r()))}),Up(i=>{document.querySelectorAll(`.pindots.nope`).forEach(e=>e.classList.remove(`nope`));let a=J(n);if(i===`back`?a.value=a.value.slice(0,-1):i===`clear`?a.value=``:a.value.length<6&&(a.value+=i),J(`error`).hidden=!0,a.value.length===6&&/\d/.test(i)){let i=e[e.indexOf(n)+1];i&&(n=i),r(),t(a.id)}else r()}),r()}function Gp(e){J(e).value=``;let t=document.querySelector(`.pindots[data-for="${e}"]`);t.querySelectorAll(`i`).forEach(e=>e.classList.remove(`on`)),t.classList.remove(`nope`),t.offsetWidth,t.classList.add(`nope`)}function Kp(e){K(`setPin`,()=>Kp(e)),q(`
    <h1>Choose a 6-digit PIN</h1>
    <p>You'll enter this PIN to approve trades and to see your backup words.</p>
    <label>PIN</label>${Vp(`pin1`)}
    <label>Same PIN again</label>${Vp(`pin2`)}
    <p id="error" class="error" hidden></p>
    ${Hp()}
    <button id="next" class="primary">Continue</button>`);let t=()=>{let t=J(`pin1`).value;if(!/^\d{6}$/.test(t))return Ap(`The PIN must be exactly 6 digits.`);if(t!==J(`pin2`).value)return Gp(`pin2`),Ap(`The two PINs don't match. Enter it again.`);om(e,t)};Wp([`pin1`,`pin2`],e=>e===`pin2`&&t()),Y(`next`,t)}var qp=0,Jp=0;function Yp(e,t){/ to (buy|fund|split|send|sell)\b/.test(e)&&qu(),q(`
    <h1>${e}</h1>
    ${Vp(`pin`)}
    <p id="error" class="error" hidden></p>
    ${Hp()}
    <button id="unlock" class="primary">Unlock</button>
    <button id="cancel">Cancel</button>`),Y(`cancel`,X),Wp([`pin`],()=>J(`unlock`).click()),Y(`unlock`,async()=>{if(Date.now()<Jp)return Ap(`Too many wrong PINs. Try again in ${Math.ceil((Jp-Date.now())/1e3)} seconds.`);let e=J(`pin`).value,{value:n}=await Gf(Vf);if(!n)return Fp();J(`unlock`).disabled=!0,J(`unlock`).textContent=`Checking…`;let r=$p(e).catch(()=>[]),i=await Rf(n,e);if(J(`unlock`).disabled=!1,J(`unlock`).textContent=`Unlock`,!i)return Gp(`pin`),qp++,qp>=5&&(Jp=Date.now()+3e4*2**(qp-5)),Ap(`Wrong PIN.`);qp=0,Xp=await r,nm().catch(()=>{}),t(i,e)})}var Xp=[],Zp=0,Qp=null;async function $p(e){let{value:t}=await Gf(Uf);if(!t)return[];let n=await Rf(t,e);return n?JSON.parse(n).flatMap(({name:e,key:t})=>{let n=Bf(t);return n?[{name:e,...n}]:[]}):[]}async function em(e,t){e=e.filter((t,n)=>e.findIndex(e=>e.address===t.address)===n),await Kf(Uf,await Lf(JSON.stringify(e.map(e=>({name:e.name,key:zf({index:0,...e})}))),t)),Xp=e,await tm(e)}async function tm(e){let t=e.map(({name:e,address:t})=>({name:e,address:t}));try{await j.set(Jf,JSON.stringify(t)),lm()}catch{let e=Qp;sm=e?Promise.resolve([...e,...t.map((t,n)=>({index:e.length+n,address:t.address,name:t.name}))]):null}}async function nm(){if(!Xp.length)return;let e=JSON.parse(await j.get(Jf).catch(()=>null)||`[]`);e.length===Xp.length&&e.every((e,t)=>e.address===Xp[t].address)||await tm(Xp)}function rm(e,t){let n=jf(e,Math.min(t,Zp||t));for(let e=n.length;e<t;e++){let t=Xp[e-Zp];if(!t)throw Error(`The key for wallet #${e} is missing. Open the app again from the bot and retry.`);n.push({index:e,address:t.address,secret:t.secret})}return n}function im(){K(`importKey`,im),q(`
    <h1>Import a wallet</h1>
    <p>Paste the private key of a wallet from another app (in Phantom: Settings → Manage Accounts → the wallet → Show Private Key). It becomes one more side wallet here.</p>
    <textarea id="key" rows="3" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Private key"></textarea>
    <label>Name (optional)<input id="name" maxlength="20" autocomplete="off" placeholder="Phantom 1"></label>
    <p class="muted">It's locked with your PIN on this phone, like your 12 words. Your 12 words don't back it up, so keep its key in the app it came from too.</p>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Import</button>
    <button id="cancel">Cancel</button>`),Y(`cancel`,X),Y(`next`,async()=>{let e=Bf(document.getElementById(`key`).value);if(!e)return Ap(`That doesn't look like a Solana private key. Copy it again from your wallet app and paste the whole thing.`);let t=await cm()??[],n=t.find(t=>t.address===e.address);if(n)return Ap(`That wallet is already here (${n.index===0?`main`:`#${n.index}`}).`);let r=t.length-Zp;if(r>=Xf)return Ap(`You can import up to ${Xf} wallets.`);let i=J(`name`).value.trim().slice(0,20)||`Imported ${r+1}`;Yp(`Enter your PIN to import it`,async(t,n)=>{Np(`Saving…`);try{await em([...Xp,{name:i,...e}],n)}catch(e){return $(e)}$t(`success`),X()})})}function am(e){K(`removeImport:${e.address}`,()=>am(e)),q(`
    <h1>Remove ${Q(e.name??``)} (#${e.index})?</h1>
    <p>This only removes it from Krypto Snatcher. The wallet and its money stay where they are.</p>
    <p class="warning">If you don't have its private key anywhere else, export it first, or move its coins and SOL out. Your 12 words can't bring it back.</p>
    <button id="exportFirst">Export its key first</button>
    <button id="yes" class="danger">Remove it</button>
    <button id="no" class="primary">Keep it</button>`),Y(`no`,X),Y(`exportFirst`,()=>dh(e)),Y(`yes`,()=>Yp(`Enter your PIN to remove it`,async(t,n)=>{Np(`Saving…`),await em(Xp.filter(t=>t.address!==e.address),n),X()}))}function om(e,t,n=5){K(`chooseCount`,()=>om(e,t,n)),q(`
    <h1>How many side wallets?</h1>
    <p>You get one main wallet that you deposit SOL into, plus side wallets for split buys.</p>
    <input id="count" class="pinvalue" type="text" inputmode="none" tabindex="-1" value="${n}">
    <div class="total amountbox"><small>Side wallets (0 to 30)</small><div class="amount"><span class="num" id="countShow">${n}</span></div></div>
    <div class="stepper wide"><button id="minus" type="button">−</button><button id="plus" type="button">+</button></div>
    <p id="error" class="error" hidden></p>
    ${Hp()}
    <button id="next" class="primary">Create wallets</button>`);let r=!0,i=e=>{J(`count`).value=e,J(`countShow`).textContent=e||`0`,J(`countShow`).classList.toggle(`over`,Number(e)>30),J(`error`).hidden=!0};Up(e=>{let t=r?``:J(`count`).value;r=!1,e===`back`?i(t.slice(0,-1)):e===`clear`?i(``):t.length<2&&i(String(Number(t+e)))});let a=e=>{r=!0,i(String(Math.min(30,Math.max(0,(Number(J(`count`).value)||0)+e))))};Y(`minus`,()=>a(-1)),Y(`plus`,()=>a(1)),Y(`next`,async()=>{let n=Number(J(`count`).value);if(!Number.isInteger(n)||n<0||n>30)return Ap(`Pick a whole number from 0 to 30.`);Np(`Setting up your wallets…`);let r=jf(e,n+1).map(({index:e,address:t})=>({index:e,address:t}));t&&await Kf(Vf,await If(e,t)),await j.set(Hf,JSON.stringify(r)),lm(),!t&&Xp.length&&(await j.set(Jf,JSON.stringify(Xp.map(({name:e,address:t})=>({name:e,address:t})))),lm()),$t(`success`),X()})}var sm=null;function cm(){if(!sm){let e=fm();sm=e,e.then(t=>!t&&sm===e&&(sm=null),()=>sm===e&&(sm=null))}return sm}var lm=()=>sm=null,um=null;function dm(e){let t=um;return um=null,t&&t.key===e.join(`,`)&&Date.now()-t.at<5e3?t.value.catch(()=>vu(e)):vu(e)}async function fm(){let[e,t]=await Promise.all([j.get(Hf),j.get(Jf)]);if(!e)return null;let n=JSON.parse(e);Zp=n.length,Qp=n;let r=JSON.parse(t||`[]`);return[...n,...r.map((e,t)=>({index:n.length+t,address:e.address,name:e.name}))]}async function X(){K(`home`,X);let e=await cm();if(!e)return Yp(`Unlock your wallets`,e=>om(e,null));let[t,...n]=e;q(`
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
    ${n.length?`<ul class="list">${n.map(e=>`<li class="openwallet" data-index="${e.index}"><span>#${e.index}</span><code>${e.name?`<b>${Q(e.name)}</b> · `:``}${kp(e.address)}<br><small class="bal" data-index="${e.index}">…</small></code>
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
    <button id="remove" class="danger">Remove wallets from this phone</button>`),document.querySelectorAll(`.copy`).forEach(e=>e.addEventListener(`click`,()=>Pp(e.dataset.address,e))),document.querySelectorAll(`.export`).forEach(t=>t.addEventListener(`click`,()=>dh(e[Number(t.dataset.index)]))),document.querySelectorAll(`.unimport`).forEach(t=>t.addEventListener(`click`,()=>am(e[Number(t.dataset.index)]))),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,n=>{n.target.closest(`button, a, .solamt, .coinamt`)||(M(),mm(e[Number(t.dataset.index)]).catch($))})),Y(`importKey`,im),Y(`holdings`,()=>og().catch($)),Y(`holdingsTop`,()=>og().catch($)),Y(`pnl`,()=>Wm().catch($)),Y(`sellAll`,()=>n_(100,!1,null).catch($)),n.length&&Y(`sweep`,()=>jg().catch($)),Y(`change`,()=>Yp(`Enter your PIN`,e=>om(e,null,Zp-1))),Y(`reveal`,()=>Yp(`Enter your PIN`,e=>{q(`
        <h1>Your 12 backup words</h1>
        ${Lp(e)}
        <p class="warning">Never share these words. Anyone who has them controls your money.</p>
        <button id="done" class="primary">Done</button>`),Y(`done`,X)})),Y(`remove`,f_),_p(e.map(e=>e.address)).then(e=>{document.querySelectorAll(`.bal`).forEach(t=>{let n=e[Number(t.dataset.index)];In(t,n,e=>`${uh(e)} SOL`,{ms:900,final:`${U(n)} SOL`})});let t=document.getElementById(`totalSol`),n=e.reduce((e,t)=>e+t,0);t&&In(t,n,uh,{ms:1200,final:U(n)});let r=document.getElementById(`totalWrap`);r&&(r.dataset.sol=String(n/H),r.classList.add(`solamt`),m_&&C_())}).catch(e=>{let t=document.getElementById(`totalSol`);t&&(t.textContent=`—`),document.querySelectorAll(`.bal`).forEach(e=>e.textContent=`balance unavailable`);let n=document.createElement(`p`);n.className=`error`,n.textContent=e instanceof Error?e.message:String(e),document.querySelector(`h1`).after(n)})}var pm=null;async function mm(e){let t=`wallet:${e.address}`;K(t,()=>mm(e));let n=Symbol(`wallet`);pm=n;let r=()=>pm===n&&wp[wp.length-1]?.key===t,[i,a]=await Promise.all([sg(),pg()]),o=a.filter(t=>t.wallet===e.address).length;await cg([e],`Opening the wallet…`,r,(t,n,r)=>hm(e,t[0],n?.[0]??null,r,{costs:i,autoHere:o}))}async function hm(e,t,n,r,{costs:i,autoHere:a}){let o=e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`,s=t.lamports,c=0,l=(await tf(t)).filter(e=>!Bh(e)||!(c+=1)),u=new Map;for(let e of[...l,...n??[]]){let t=u.get(e.mint)??{coin:e,amount:0,inOrders:0,usd:null};t.amount+=e.amount,Qh(e)?t.inOrders+=e.amount:e.usd!==null&&(t.usd=(t.usd??0)+e.usd),u.set(e.mint,t)}let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=s_(e),p=window.scrollY;q(`
    <h1>${o} <span id="holdSync" class="live${r===`saved`?``:` synced`}">${r===`saved`?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total"><small>SOL in this wallet</small><div class="big"><span class="solamt" data-sol="${s/H}">${U(s)}</span><span class="unit">SOL</span></div><div class="sub" id="coinsUsd"></div></div>
    <div class="card"><div class="label">Address</div><div class="address">${e.address}</div>
      <div class="row"><button id="copyAddr">Copy address</button><button id="exportKey">Export key</button></div></div>
    <h2>Coins${u.size&&G?` <span id="live" class="live">LIVE</span>`:``}</h2>
    ${u.size?`<ul class="list coins">${[...u.values()].map(e=>`<li data-mint="${e.coin.mint}">${Ln(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(zh(e.coin))}</b>${e.inOrders?`<small class="inorder">🎯 ${__(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
              <div class="right"><span class="val">${e.usd===null?``:Rh(e.usd)}</span><small class="move"></small><small>${__(e.coin.mint,e.amount)}</small></div></li>`).join(``)}</ul><p class="muted">Tap a coin to sell some of it from this wallet, set an auto-sell, or buy more.</p>`:`<p class="muted">No coins in this wallet.</p>`}
    ${c?`<p class="muted">${c} junk coin${c===1?``:`s`} hidden.</p>`:``}
    ${u.size?`<button id="sellAll" class="danger">Sell all coins in this wallet</button>`:``}
    ${a?`<button id="autoSells" class="gold">🎯 Auto-sells · ${a} placed</button>`:``}
    ${e.index===0?``:`<button id="solToMain">Send all its SOL to main</button>`}
    ${e.index!==0&&u.size?`<button id="allToMain">Send everything (coins + SOL) to main</button>`:``}
    <button id="solscan">View on Solscan</button>
    ${e.name?`<button id="unimport" class="danger">Remove this imported wallet</button>`:``}
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,p),Rn(),Y(`copyAddr`,()=>Pp(e.address,J(`copyAddr`))),Y(`exportKey`,()=>dh(e)),Y(`solscan`,()=>tn(td(e.address))),Y(`home`,X),u.size&&Y(`sellAll`,()=>n_(100,!1,[e.index]).catch($)),a&&Y(`autoSells`,()=>wg().catch($));let m=t=>u_({what:t,to:`0`,only:[e.index],side:!1,amount:null,pct:null}).catch($);e.index!==0&&Y(`solToMain`,()=>m(`sol`)),e.index!==0&&u.size&&Y(`allToMain`,()=>m(`*`)),e.name&&Y(`unimport`,()=>am(e));let h=new Map;if(document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=u.get(t.dataset.mint);M(),ug({mint:n.coin.mint,label:zh(n.coin),short:n.coin.symbol||n.coin.name||`?`,logo:n.coin.logo,amount:n.amount,raw:d(n),wallets:f,holders:[{address:e.address,amount:n.amount}],decimals:n.coin.decimals??0,inOrders:n.inOrders,only:[e.index],value:h.get(n.coin.mint)??null}).catch($)})),!u.size||!G)return;let g=J(`live`),_=async e=>{let t=[...u],[n,r]=await Promise.all([vp(e).catch(()=>null),Promise.all(t.map(([t,n])=>_o(G,t,d(n),e).catch(()=>null)))]);if(!g.isConnected)return;w_(n);let a=0,o=new Map;t.forEach(([e,t],s)=>{let c=r[s],l=document.querySelector(`.coins li[data-mint="${e}"]`);if(!l||c===null)return;h.set(e,c),n&&(t.usd=c/H*n,a+=t.usd,l.querySelector(`.val`).textContent=Rh(t.usd),t.amount>0&&(v_(e,t.usd/t.amount),o.set(e,t.usd/t.amount)));let u=i[e],f=!Vh.has(e)&&Wh(u)?Gh(u,n):null,p=l.querySelector(`.right`);if(f){let e=f/Number(BigInt(u.raw))*Number(d(t)),n=(c-e)/e*100,r=Math.abs(n)>=.5;p.classList.toggle(`up`,r&&n>0),p.classList.toggle(`down`,r&&n<0),p.querySelector(`.move`).textContent=r?`${n>0?`▲`:`▼`} ${Math.abs(n)>=100?Math.round(Math.abs(n)):Math.abs(n).toFixed(1)}% since buy`:``}}),nf(o).catch(()=>{}),a>0&&(J(`coinsUsd`).textContent=`+ ${Rh(a)} in coins`),g.classList.remove(`beat`),g.offsetWidth,g.classList.add(`beat`)};(async()=>{for(let e=0;g.isConnected;e++)document.hidden||await _(e>0),await new Promise(e=>setTimeout(e,5e3))})().catch(()=>{})}var gm=1,_m=1500,vm=([e,t,n,r,i,a,o])=>({sig:e,at:t,mint:n,side:r,coins:i,lamports:a,usd:o}),ym=e=>[e.sig,e.at,e.mint,e.side,e.coins,e.lamports,Math.round(e.usd*1e6)/1e6];async function bm(e){try{let t=JSON.parse(await j.get(`pnl_${e}`)||`null`);return t&&t.v===gm?t:null}catch{return null}}var xm=(e,t)=>hp(`trades:${e}`,9e4,async()=>{let n=`pnl_${e}`,r=await bm(e),i=await Em(t,8e3,void 0);if(i===null)return await j.set(n,JSON.stringify({v:gm,sig:null,trades:[]})).catch(()=>{}),[];if(r&&i&&r.sig===i)return r.trades.map(vm);let a=await ld(e,r?.top,5);if(!a){if(r)return r.trades.map(vm);throw Error(`Couldn't read this wallet's history right now.`)}let o=new Set(a.trades.map(e=>e.sig)),s=[...a.trades,...r?.trades.map(vm).filter(e=>!o.has(e.sig))??[]].sort((e,t)=>t.at-e.at).slice(0,_m),c={v:gm,top:a.top,sig:i,trades:s.map(ym)};return await j.set(n,JSON.stringify(c)).catch(()=>{}),s}),Sm=(e,t,n)=>{let r=t.get(e.at)??n??0;return e.lamports/H*r+e.usd},Cm=(e,t,n)=>{let r=t.get(e.at)??n;return e.lamports/H+(r?e.usd/r:0)};function wm(e,t,n,r,i,a){let o=0,s=0,c=0,l=0,u=0,d=0;for(let e of t)e.side===1?(o+=e.coins,c+=Sm(e,i,a),l+=Cm(e,i,a)):(s+=e.coins,u+=Sm(e,i,a),d+=Cm(e,i,a));let f=Math.min(s,o),p=Math.max(0,Math.min(n,o-f)),m=o>0?(f+p)/o:0,h=s>0?f/s:0,g=c*m,_=l*m,v=u*h,y=d*h,b=p*(r??0),x=a?b/a:0,S=v+b-g,C=y+x-_;return{mint:e,trades:t,bought:o,sold:s,held:n,paidUsd:g,paidSol:_,backUsd:v,backSol:y,nowUsd:b,nowSol:x,pnlUsd:S,pnlSol:C,pct:g>=.01&&!Vh.has(e)?S/g*100:null,avgUsd:o>0?c/o:0,avgSol:o>0?l/o:0}}function Tm(e){let t=e.filter(e=>e.pct!==null),n=t.reduce((e,t)=>e+t.pnlUsd,0),r=t.reduce((e,t)=>e+t.pnlSol,0),i=t.reduce((e,t)=>e+t.paidUsd,0);return{pnlUsd:n,pnlSol:r,paidUsd:i,pct:i>=.01?n/i*100:null}}var Em=(e,t,n)=>Promise.race([e.catch(()=>n),new Promise(e=>setTimeout(()=>e(n),t))]),Dm=0;function Om(e,t){let n=document.querySelector(`.loader, .hackloader`);if(!n)return;let r=document.getElementById(`loadTerm`);r||(r=document.createElement(`div`),r.id=`loadTerm`,r.className=`loadterm`,n.append(r));let i=t?Array.from(r.children).find(e=>e.dataset.key===t):null;if(i){i.firstChild.textContent=e;return}clearInterval(Dm),r.querySelectorAll(`.typing`).forEach(e=>{e.classList.remove(`typing`),e.firstChild.textContent=e.dataset.full}),r.querySelector(`.cur`)?.remove();let a=document.createElement(`div`);for(a.className=`tl`,t&&(a.dataset.key=t),a.append(document.createTextNode(``),Object.assign(document.createElement(`i`),{className:`cur`})),r.append(a);r.children.length>6;)r.firstElementChild.remove();if(!e.startsWith(`$`)){a.firstChild.textContent=e;return}a.dataset.full=e,a.classList.add(`typing`);let o=0;Dm=window.setInterval(()=>{o+=1,a.firstChild.textContent=e.slice(0,o),o>=e.length&&(clearInterval(Dm),a.classList.remove(`typing`))},28)}var km=null,Am=(e,t)=>`[${`#`.repeat(Math.round(e/t*12)).padEnd(12,`.`)}]`;async function jm(e,t){let n=0;t?.(`[*] ${e.length} wallet${e.length===1?``:`s`} to read`);let r=ud(e.map(e=>e.address));return r.catch(()=>{}),Eg(e,6,async(i,a)=>{let o=await Em(xm(i.address,r.then(e=>e[a])),45e3,null);return n++,t?.(`[+] read ${n}/${e.length} ${Am(n,e.length)}`,`read`),o})}var Mm=async(e,t)=>Pm(e,await jm(e,t),t),Nm=async e=>{let t=e.map(e=>e.address);return await Em(Qd(t),2e4,null)??await qd(t)};async function Pm(e,t,n,r){let i=t.filter(e=>e===null).length,a=e.map((e,n)=>({w:e,trades:t[n]??[]})).filter(e=>e.trades.length);n?.(`[*] checking what's still held`);let o=r??(a.length?await Nm(e):null),s=await Promise.all(a.map(async e=>{let t=o?.find(t=>t.address===e.w.address);return t?tf(t):[]})),c=[...new Set(s.flatMap((e,t)=>e.filter(e=>a[t].trades.some(t=>t.mint===e.mint)).map(e=>e.mint)))];n?.(`[*] pulling prices + SOL history`);let l=a.flatMap(e=>e.trades.map(e=>e.at)),[u,d,f]=await Promise.all([Em(vp(),15e3,null),G&&c.length?Em(xp(c),15e3,new Map):Promise.resolve(new Map),Em(pa(l),12e3,new Map)]),p=l.length>0&&f.size<l.length/2;return n?.(`[ok] P&L ready`),u&&w_(u),{rows:a.map(({w:e,trades:t},n)=>{let r=new Map;for(let e of t)r.set(e.mint,[...r.get(e.mint)??[],e]);let i=[...r].map(([e,t])=>{let r=s[n].find(t=>t.mint===e),i=d.get(e)??(r&&r.usd!==null&&r.amount>0?r.usd/r.amount:null);return wm(e,t,r?.amount??0,i,f,u)});return i.sort((e,t)=>Math.abs(t.pnlUsd)-Math.abs(e.pnlUsd)),{wallet:e,trades:t,coins:i,total:Tm(i),held:s[n]}}),unread:i,oldPrices:p,solAt:f,solNow:u}}var Fm=`pct`,Im=[`pct`,`sol`,`usd`],Lm=(e,t)=>`${e>0?`+`:e<0?`−`:``}${t}`,Rm=e=>{let t=Math.abs(e);return`${e>0?`▲`:e<0?`▼`:``} ${t>=100?Math.round(t).toLocaleString(`en-US`):t.toFixed(1)}%`.trim()},zm=e=>Lm(e,`${U(Math.abs(e)*H)} SOL`),Bm=e=>Lm(e,x_(Math.abs(e)));function Vm(e,t){if(e.pct===null)return{text:`no buy price`,dir:``};let n=t===`pct`?e.pct:t===`sol`?e.pnlSol:e.pnlUsd,r=Math.abs(e.pct)<.05?``:n>0?`up`:n<0?`down`:``;return{text:t===`pct`?Rm(e.pct):t===`sol`?zm(e.pnlSol):Bm(e.pnlUsd),dir:r}}function Hm(e,t=Im){let n=t.includes(Fm)?Fm:t[0];document.querySelectorAll(`[data-pnl]`).forEach(t=>{let r=e.get(t.dataset.pnl);if(!r)return;let{text:i,dir:a}=Vm(r,n);t.textContent=i,t.classList.toggle(`up`,a===`up`),t.classList.toggle(`down`,a===`down`),t.classList.toggle(`none`,r.pct===null),t.closest(`li`)?.classList.toggle(`pnlup`,a===`up`),t.closest(`li`)?.classList.toggle(`pnldown`,a===`down`)}),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.mode===n))}var Um=e=>e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`;async function Wm(){K(`pnl`,Wm),Fm=`pct`;let e=await cm();if(!e)return X();let[t,n]=await Promise.all([Promise.all(e.map(e=>bm(e.address))),qd(e.map(e=>e.address))]),r=t.every(Boolean);Np(`Reading your trades on the blockchain…`),r&&Om(`[*] using saved trades`);let i=r?await Pm(e,t.map(e=>e.trades.map(vm)),Om,n):await Mm(e,Om),a=Symbol(`pnl`);if(Gm=a,km=i,Km(i,r,!1),!r)return;let o=n?Nm(e):Promise.resolve(null),s=await jm(e,(e,t)=>{let n=t===`read`&&e.match(/\d+\/\d+/)?.[0],r=document.getElementById(`pnlSync`);n&&r&&Gm===a&&(r.textContent=`SYNCING ${n}`)}),c=await o;if(Gm!==a||!document.getElementById(`pnlTotal`))return;let l=e=>e.map(e=>e?`${e.length}:${e[0]?.sig??``}`:`?`).join(`,`),u=l(s)!==l(t.map(e=>e.trades.map(vm)))||!!n&&!!c&&tg(c)!==tg(n),d=document.getElementById(`pnlSync`);if(!u){d&&(d.textContent=`UP TO DATE`);return}let f=await Pm(e,s,void 0,c);Gm===a&&document.getElementById(`pnlTotal`)&&(km=f,Km(f,!1,!0))}var Gm=null;function Km({rows:e,unread:t,oldPrices:n},r,i){let a=Tm(e.flatMap(e=>e.coins)),o=new Map([[`total`,a]]);for(let t of e)o.set(t.wallet.address,t.total);let s=e.find(e=>e.wallet.index===0),c=e.filter(e=>e.wallet.index!==0),l=e=>{let t=new Set(e.trades.map(e=>e.mint)).size;return`${e.trades.length} trade${e.trades.length===1?``:`s`} · ${t} coin${t===1?``:`s`}`};q(`
    <h1>Wallet P&amp;L <span id="pnlSync" class="live">${r?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${a.pct===null?``:`on ${x_(a.paidUsd)} put in · tap to switch % / $`}</div></div>
    ${s?`<div class="card openwallet pnl" data-address="${s.wallet.address}">
      <div class="label">Main wallet · <span class="pv" data-pnl="${s.wallet.address}"></span> <span class="open">OPEN ›</span></div>
      <div class="address">${s.wallet.address}</div>
      <p class="muted">${l(s)}</p>
    </div>`:``}
    ${c.length?`<h2>Side wallets (${c.length})</h2><ul class="list pnl">${c.map(e=>`<li class="openwallet" data-address="${e.wallet.address}"><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}${kp(e.wallet.address)}<br><small>${l(e)}</small></code><b class="pv big" data-pnl="${e.wallet.address}"></b></li>`).join(``)}</ul>`:``}
    ${e.length?`<p class="muted">Only wallets that have bought or sold are listed. Tap a wallet to see its trades.</p>`:`<p class="muted">None of your wallets has bought or sold a coin yet.</p>`}
    ${e.length?`<button id="finished" class="primary">Finished trades · share cards</button><button id="allTx" class="primary">Show all transactions</button>`:``}
    ${t?`<p class="warning">${t} wallet${t===1?`'s`:`s'`} history couldn't be read right now. Try again in a minute.</p>`:``}
    ${n?`<p class="muted">SOL's past prices didn't load, so dollars use today's SOL price for now.</p>`:``}
    <button id="home">Back to my wallets</button>`,i);let u=[`pct`,`usd`];Hm(o,u),Y(`home`,X),e.length&&(Y(`allTx`,()=>eh().catch($)),Y(`finished`,()=>ch().catch($))),Y(`pnlTotal`,()=>{a.pct!==null&&(M(),Fm=Fm===`usd`?`pct`:`usd`,Hm(o,u))}),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.find(e=>e.wallet.address===t.dataset.address);M(),th(n.wallet).catch($)}))}var qm=e=>e?new Date(e*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}):``,Jm=`coinNames`;async function Ym(e,t){let n=new Map;for(let e of t)(e.name||e.symbol)&&n.set(e.mint,{label:zh(e),short:e.symbol||e.name||`?`,logo:e.logo});let r={};try{r=JSON.parse(await j.get(Jm)||`{}`)}catch{r={}}for(let t of e)!n.has(t)&&r[t]&&n.set(t,r[t]);let i=[...new Set(e)].filter(e=>!n.has(e)),a=!1;for(let[e,t]of n)(!r[e]||r[e].label!==t.label||r[e].logo!==t.logo)&&(r[e]=t,a=!0);if(i.length){let e=await Em(pd(i),1e4,new Map);for(let[t,i]of e){let e={label:i.name?`${i.name}${i.symbol?` (${i.symbol})`:``}`:i.symbol??kp(t),short:i.symbol||i.name||`?`,logo:i.logo};n.set(t,e),r[t]=e}e.size&&(a=!0)}return a&&j.set(Jm,JSON.stringify(r)).catch(()=>{}),e=>n.get(e)??{label:kp(e),short:`?`}}function Xm(e,t,n,r){let i=new Map(e.coins.map(e=>[e.mint,e]));for(let a of e.trades){let e=i.get(a.mint);if(a.side!==-1)continue;let o=Sm(a,t,n),s=Cm(a,t,n),c=e.avgUsd*a.coins,l=e.bought>0&&c>=.01&&!Vh.has(a.mint);r.set(a.sig,{pct:l?(o-c)/c*100:null,pnlUsd:o-c,pnlSol:s-e.avgSol*a.coins})}}function Zm(e,t,n,r,i){return`<ul class="list trades pnl">${e.map(e=>{let a=t(e.mint),o={sol:`${U(Cm(e,n,r)*H)} SOL`,usd:x_(Sm(e,n,r))};return`<li data-sig="${e.sig}" class="${e.side===1?`buy`:`sell`}"><span class="tag">${e.side===1?`BUY`:`SELL`}</span><div class="grow"><b>${Q(a.label)}</b><small>${i?`${i(e)} · `:``}${qm(e.at)} · ${Lh(e.coins)} coins</small></div><div class="right">${e.side===1?`<span class="pv spent" data-sol="${o.sol}" data-usd="${o.usd}">${o.sol}</span><small>paid</small>`:`<span class="pv" data-pnl="${e.sig}"></span><small class="got" data-sol="${o.sol}" data-usd="${o.usd}">got ${o.sol}</small>`}</div></li>`}).join(``)}</ul>`}function Qm(){let e=Fm===`usd`;document.querySelectorAll(`.trades .spent`).forEach(t=>t.textContent=e?t.dataset.usd:t.dataset.sol),document.querySelectorAll(`.trades .got`).forEach(t=>t.textContent=`got ${e?t.dataset.usd:t.dataset.sol}`)}function $m(e,t){let n=()=>{M(),Fm=Im[(Im.indexOf(Fm)+1)%Im.length],e()};document.querySelectorAll(`.pnltabs button`).forEach(t=>t.addEventListener(`click`,()=>{M(),Fm=t.dataset.mode,e()})),Y(`pnlTotal`,n),document.querySelectorAll(`.pnl .right`).forEach(e=>e.addEventListener(`click`,e=>{e.target.closest(`.share`)||(e.stopPropagation(),n())})),document.querySelectorAll(`.trades li[data-sig]`).forEach(e=>e.addEventListener(`click`,()=>{t&&e.classList.contains(`sell`)?(M(),t(e.dataset.sig)):tn(nd(e.dataset.sig))}))}async function eh(){K(`pnlall`,eh),Fm=`pct`;let e=km;if(!e){let t=await cm();if(!t)return X();Np(`Gathering every wallet's trades…`),e=km=await Mm(t,Om)}let{rows:t,solAt:n,solNow:r}=e,i=t.flatMap(e=>e.trades.map(t=>({t,w:e.wallet}))).sort((e,t)=>t.t.at-e.t.at),a=await Ym(i.map(e=>e.t.mint),t.flatMap(e=>e.held)),o=Tm(t.flatMap(e=>e.coins)),s=new Map([[`total`,o]]);for(let e of t)Xm(e,n,r,s);let c=new Map(i.map(e=>[e.t.sig,e.w])),l=e=>{let t=c.get(e.sig);return t.index===0?`Main`:t.name?`${Q(t.name)} #${t.index}`:`#${t.index}`},u=i.filter(e=>e.t.side===1).length,d=i.length-u;q(`
    <h1>All transactions</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u} buy${u===1?``:`s`} · ${d} sell${d===1?``:`s`} · ${t.length} wallet${t.length===1?``:`s`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>History (${i.length} trade${i.length===1?``:`s`})</h2>
    ${Zm(i.map(e=>e.t),a,n,r,l)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a sell for its share card, a buy to open it on Solscan.</p>
    <button id="back">Back to Wallet P&amp;L</button>`);let f=()=>{Hm(s),Qm()};f(),$m(f,e=>{let i=c.get(e);sh(t.find(e=>e.wallet.address===i.address),e,s,a,n,r,()=>eh())}),Y(`back`,()=>Wm().catch($))}async function th(e){K(`pnl:${e.address}`,()=>th(e)),Fm=`pct`;let t=km?.rows.some(t=>t.wallet.address===e.address)?km:null;t||=(Np(`Pulling this wallet's trades from the blockchain…`),await Mm([e],Om));let{solAt:n,solNow:r}=t,i=t.rows.find(t=>t.wallet.address===e.address);if(!i){q(`<h1>${Um(e)}</h1><p class="muted">No trades found for this wallet.</p><button id="back">Back to Wallet P&amp;L</button>`),Y(`back`,()=>Wm().catch($));return}let a=await Ym(i.coins.map(e=>e.mint),t.rows.flatMap(e=>e.held)),o=new Map(i.coins.map(e=>[e.mint,e])),s=new Map([[`total`,i.total]]);for(let e of i.coins)s.set(e.mint,e);Xm(i,n,r,s);let c=e=>[e.bought?`bought ${Lh(e.bought)}`:``,e.sold?`sold ${Lh(e.sold)}`:``,e.held?`holding ${Lh(e.held)}`:``].filter(Boolean).join(` · `),l=(e,t)=>{let n=e=>`${U(e*H)} SOL`,r=e.bought?`${n(e.avgSol*e.bought)} › ${Lh(e.bought)} ${t}`:`${Lh(e.sold)} ${t}`,i=[e.sold?`${n(e.backSol)} sold`:``,e.nowSol>0?`${n(e.nowSol)} held`:``].filter(Boolean).join(` + `);return i?`${r} › ${i}`:r},u=i.total;q(`
    <h1>${Um(e)}</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss · all trades</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u.pct===null?`No buy prices found yet`:`on ${x_(u.paidUsd)} put in`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>Coins (${i.coins.length})</h2>
    <ul class="list coins pnl">${i.coins.map(e=>{let t=a(e.mint);return`<li data-mint="${e.mint}">${Ln(t.short,t.logo)}<div class="grow"><b>${Q(t.label)}</b><small class="cl" data-line="${Q(c(e))}" data-flow="${Q(l(e,t.short))}">${c(e)}</small></div>
          <div class="right"><span class="pv" data-pnl="${e.mint}"></span><small class="tv" data-paid="${e.mint}"></small>${e.pct===null?``:`<small class="share">SHARE ›</small>`}</div></li>`}).join(``)}</ul>
    <h2>History (${i.trades.length} trade${i.trades.length===1?``:`s`})</h2>
    ${Zm(i.trades,a,n,r)}
    <p class="muted">Tap a coin for its share card, a figure to switch between %, SOL and $. In the history, tap a sell for its share card, a buy to open it on Solscan. Dollars use SOL's price when each trade happened.</p>
    <button id="solscan">View wallet on Solscan</button>
    <button id="back">Back to Wallet P&amp;L</button>`),Rn();let d=()=>{Hm(s);let e=Fm===`usd`,t=Fm===`sol`;document.querySelectorAll(`.coins .cl`).forEach(e=>e.textContent=t?e.dataset.flow:e.dataset.line),Qm(),document.querySelectorAll(`.coins [data-paid]`).forEach(n=>{let r=o.get(n.dataset.paid);n.textContent=r.pct===null?r.bought?`all sent away`:`no buy found`:t?``:`paid ${e?x_(r.paidUsd):`${U(r.paidSol*H)} SOL`}`})};d(),$m(d,t=>sh(i,t,s,a,n,r,()=>th(e))),document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=o.get(t.dataset.mint),r=oh([{...i,coins:[n]}],a)[0];r&&(M(),lh(r,()=>th(e)).catch($))})),Y(`solscan`,()=>tn(td(e.address))),Y(`back`,()=>Wm().catch($))}var nh=`usd`,rh=`cardShowMe`,ih=()=>{try{return localStorage.getItem(rh)!==`0`}catch{return!0}},ah=()=>{let e=A?.initDataUnsafe?.user;return e?.first_name?{name:e.first_name,photo:e.photo_url}:void 0};function oh(e,t){let n=new Map;for(let t of e)for(let e of t.coins){if(e.pct===null)continue;let t=n.get(e.mint)??{list:[],trades:[]};t.list.push(e),t.trades.push(...e.trades),n.set(e.mint,t)}let r=Math.floor(Date.now()/1e3);return[...n].map(([e,{list:n,trades:i}])=>{let a=e=>n.reduce((t,n)=>t+e(n),0),o=a(e=>e.paidUsd),s=t(e),c=n.every(e=>e.held<=0),l=i.filter(e=>e.side===1&&e.at),u=i.filter(e=>e.at).map(e=>e.at);return{key:e,symbol:s.short,name:s.label.replace(/\s*\([^)]*\)$/,``)||s.label,logo:s.logo,pct:o>=.01?a(e=>e.pnlUsd)/o*100:0,usd:{paid:o,got:a(e=>e.backUsd+e.nowUsd),pnl:a(e=>e.pnlUsd)},sol:{paid:a(e=>e.paidSol),got:a(e=>e.backSol+e.nowSol),pnl:a(e=>e.pnlSol)},firstAt:l.length?Math.min(...l.map(e=>e.at)):Math.min(...u,r),lastAt:c&&Math.max(...u,0)||r,wallets:n.length,finished:c}})}function sh(e,t,n,r,i,a,o){let s=e.trades.find(e=>e.sig===t),c=n.get(t),l=e.coins.find(e=>e.mint===s.mint);if(!c||c.pct===null||!l)return tn(nd(t));let u=r(s.mint),d=e.trades.filter(e=>e.mint===s.mint&&e.side===1&&e.at&&e.at<=s.at).map(e=>e.at),f=Sm(s,i,a),p=Cm(s,i,a);lh({key:t,symbol:u.short,name:u.label.replace(/\s*\([^)]*\)$/,``)||u.label,logo:u.logo,pct:c.pct,usd:{paid:l.avgUsd*s.coins,got:f,pnl:c.pnlUsd},sol:{paid:l.avgSol*s.coins,got:p,pnl:c.pnlSol},firstAt:d.length?Math.min(...d):s.at,lastAt:s.at,wallets:1,finished:!0,sig:t},o).catch($)}async function ch(){K(`finished`,ch),Fm=`pct`;let e=km;if(!e){let t=await cm();if(!t)return X();Np(`Gathering every wallet's trades…`),e=km=await Mm(t,Om)}let{rows:t}=e,n=oh(t,await Ym(t.flatMap(e=>e.coins.map(e=>e.mint)),t.flatMap(e=>e.held))).sort((e,t)=>t.lastAt-e.lastAt),r=n.filter(e=>e.finished),i=n.filter(e=>!e.finished),a=new Map(n.map(e=>[e.key,{pct:e.pct,pnlUsd:e.usd.pnl,pnlSol:e.sol.pnl}])),o=r.reduce((e,t)=>e+t.usd.paid,0),s=r.reduce((e,t)=>e+t.usd.pnl,0);a.set(`total`,{pct:o>=.01?s/o*100:null,pnlUsd:s,pnlSol:r.reduce((e,t)=>e+t.sol.pnl,0)});let c=e=>`<li data-mint="${e.key}">${Ln(e.symbol,e.logo)}<div class="grow"><b>${Q(e.name)}</b><small class="paid" data-usd="${x_(e.usd.paid)}" data-sol="${U(e.sol.paid*H)} SOL">put in ${x_(e.usd.paid)}</small><small>${e.wallets} wallet${e.wallets===1?``:`s`}${e.finished?` · ${qm(e.lastAt)}`:``}</small></div><div class="right"><span class="pv" data-pnl="${e.key}"></span><small class="share">SHARE ›</small></div></li>`;q(`
    <h1>Finished trades</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss on coins sold out</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${r.length?`${r.length} coin${r.length===1?``:`s`} · on ${x_(o)} put in`:`Nothing sold out yet`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    ${r.length?`<h2>Sold out (${r.length})</h2><ul class="list coins pnl">${r.map(c).join(``)}</ul>`:`<p class="muted">No coin is fully sold yet.</p>`}
    ${i.length?`<h2>Still holding (${i.length})</h2><ul class="list coins pnl">${i.map(c).join(``)}</ul>`:``}
    <p class="muted">Each coin is added up across all your wallets. Tap one for its share card. A single sell has its own card too: tap it in a wallet's history.</p>
    <button id="back">Back to Wallet P&amp;L</button>`),Rn();let l=()=>{Hm(a);let e=Fm===`sol`;document.querySelectorAll(`.coins .paid`).forEach(t=>t.textContent=`put in ${e?t.dataset.sol:t.dataset.usd}`)};l(),$m(l),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{M(),lh(n.find(t=>t.key===e.dataset.mint),()=>ch()).catch($)})),Y(`back`,()=>Wm().catch($))}async function lh(e,t){K(`card:${e.key}`,()=>lh(e,t));let n=ah();q(`
    <h1>Share card</h1>
    <div class="sharecard" id="cardBox"><img id="cardImg" alt="Share card for ${Q(e.symbol)}"></div>
    <div class="pnltabs"><button data-unit="usd">$</button><button data-unit="sol">SOL</button></div>
    ${n?`<label class="cardme"><input type="checkbox" id="cardMe"> Show my Telegram name${n.photo?` and photo`:``}</label>`:``}
    <button id="share" class="primary">Share</button>
    <p class="muted" id="shareNote">No wallet addresses or transaction links are on the card.</p>
    ${e.sig?`<button id="solscan">View this sell on Solscan</button>`:``}
    <button id="back">Back</button>`);let r=document.createElement(`canvas`),i=J(`cardImg`),a=null,o=Promise.resolve(),s=()=>o=o.then(async()=>{let t=e[nh],o={symbol:e.symbol,name:e.name,logo:e.logo,pct:e.pct,paid:t.paid,got:t.got,pnl:t.pnl,unit:nh,firstAt:e.firstAt,lastAt:e.lastAt,wallets:e.wallets,finished:e.finished,user:n&&ih()?n:void 0};if(await aa(r,o,`oni`,zn),a=null,document.body.contains(i)){try{i.src=r.toDataURL(`image/png`)}catch{await aa(r,{...o,logo:void 0,user:o.user&&{name:o.user.name}},`oni`,zn),i.src=r.toDataURL(`image/png`)}document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.unit===nh))}});s().catch($),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.addEventListener(`click`,()=>{M(),nh=e.dataset.unit,s().catch($)}));let c=document.getElementById(`cardMe`);c&&(c.checked=ih(),c.addEventListener(`change`,()=>{try{localStorage.setItem(rh,c.checked?`1`:`0`)}catch{}s().catch($)})),Y(`share`,async()=>{M(),await o,a??=await oa(r,`${e.symbol.replace(/[^\w-]/g,``)||`trade`}-pnl.png`);let t=J(`shareNote`);if(a&&navigator.canShare?.({files:[a]}))try{await navigator.share({files:[a]});return}catch(e){if(e instanceof Error&&e.name===`AbortError`)return}t.textContent=`Press and hold the card, then tap Save to Photos or Share.`,t.classList.add(`warning`),J(`cardBox`).classList.add(`hint`)}),e.sig&&Y(`solscan`,()=>tn(nd(e.sig))),Y(`back`,()=>Promise.resolve(t()).catch($))}var uh=e=>(e/H).toFixed(4);function dh(e){let t=e.index===0?`main wallet`:e.name?`${e.name} (#${e.index})`:`side wallet #${e.index}`;Yp(`Export ${Q(t)}`,n=>{let r=rm(n,e.index+1)[e.index],i=zf(r);q(`
      <h1>Private key: ${Q(t)}</h1>
      <p class="warning">Anyone with this key controls this wallet. Only paste it into your own wallet app (Phantom: Add / Connect Wallet → Import Private Key).</p>
      <div class="card"><div class="address" id="key"></div></div>
      <button id="copyKey" class="primary">Copy key</button>
      <button id="done">Done</button>`),J(`key`).textContent=i,Y(`copyKey`,()=>Pp(i,J(`copyKey`))),Y(`done`,X)})}var fh=2e6,ph=25e5,mh=1e6;function hh(e,t,n){return e.map((e,r)=>{let i=t[r],a=i-fh-ph,o=Math.floor(a*n/100);return a<mh?{wallet:e,balance:i,action:i>5e3?`return`:`skip`,lamports:i-Ul}:o<mh?{wallet:e,balance:i,action:`skip`,lamports:0}:{wallet:e,balance:i,action:`buy`,lamports:o}}).filter(e=>e.balance>0)}async function gh(e,t){if(K(`buy:${e}`,()=>gh(e,t)),!G)return q(`
      <h1>Open this from the bot</h1>
      <p>To buy, send <b>buy &lt;token address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);let n=await cm();if(!n)return X();let[r,...i]=n;Np(`Checking your wallet balances…`);let[[,...a],o]=await Promise.all([dm(n.map(e=>e.address)),fu(e).then(t=>t??bo(G,e))]),s=hh(i,a,t),c=s.filter(e=>e.action===`buy`),l=c.reduce((e,t)=>e+t.lamports,0),u=e=>e.action===`buy`?`buys with <b>${U(e.lamports)} SOL</b>`:e.action===`return`?`too little to buy, sends ${U(e.lamports)} SOL back to main`:t<100?`${t}% is too little to buy, left as is`:`too little to do anything, left as is`;q(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>${t===100?`Spending all SOL in each funded side wallet`:`Spending ${t}% of each funded side wallet`}</h2>
    ${s.length?`<ul class="list">${s.map(e=>`<li><span>#${e.wallet.index}</span><code>${U(e.balance)} SOL<br><small>${u(e)}</small></code></li>`).join(``)}</ul>`:`<p class="warning">None of your side wallets has SOL. Send SOL to the side wallets you want to buy with, then try again.</p>`}
    ${c.length?`<p><b>Total: ${U(l)} SOL across ${c.length} wallet${c.length===1?``:`s`}.</b></p>
           <p class="muted">Each wallet keeps ${U(fh)} SOL so it can pay the fee to sell later. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again). Prices can move while the buys go through one by one.</p>
           <button id="go" class="primary">Enter PIN and buy</button>`:``}
    <button id="cancel">Cancel</button>`),J(`mint`).textContent=e,Y(`cancel`,X),c.length&&Y(`go`,()=>Yp(`Enter your PIN to buy`,t=>Ih(t,e,r,s)))}var _h=45e5,vh=1e7,yh=10;function bh(e,t,n,r){let i=n.map((e,t)=>t);if(r&&n.length===1){let e=t.findIndex(e=>e>=n[0]+_h);i=[e>=0?e:0]}return i.map((r,i)=>({wallet:e[r],balance:t[r],share:n[i],send:Math.max(0,n[i]+_h-t[r])}))}function xh(e){let t=e.filter(e=>e.send>0);return t.reduce((e,t)=>e+t.send,0)+Math.ceil(t.length/yh)*Ul}function Sh(e,t){return Array.from({length:t},()=>Math.floor(e/t))}function Ch(e,t,n,r,i=!0){let a=e=>({rows:[],mainCost:0,problem:e}),o=e=>n-e>=890880||n===e;if(!(r.total>0))return a(`The amount to spend is missing.`);let s;if(r.split){if(r.split.length>e.length)return a(`You asked for ${r.split.length} wallets but have ${e.length} side wallets.`);let n=r.split.reduce((e,t)=>e+t,0);s=bh(e,t,r.split.map(e=>Math.floor(r.total*e/n)),!1)}else if(r.count){if(r.count>e.length)return a(`You asked for ${r.count} wallets but have ${e.length} side wallets.`);s=bh(e,t,Sh(r.total,r.count),!0)}else{let n=Math.max(1,Math.min(e.length,Math.floor(r.total/vh)));for(s=bh(e,t,Sh(r.total,n),!1);n>1&&!o(xh(s));)n--,s=bh(e,t,Sh(r.total,n),!1)}let c=xh(s);if(s.some(e=>e.share<mh))return{rows:s,mainCost:c,problem:`That's less than ${U(mh)} SOL per wallet. Use a bigger amount or fewer wallets.`};if(!o(c)){if(!i)return{rows:s,mainCost:c,problem:`too much`};let o=r.split?1:r.count??Math.max(1,Math.min(e.length,Math.floor(r.total/vh))),l=[];for(let i=o;i>=1;i--){let a=r.split?r:{...r,count:i},o=0,s=r.total;for(;s-o>1e3;){let r=Math.floor((o+s)/2);Ch(e,t,n,{...a,total:r},!1).problem===`too much`?s=r:o=r}let c=Ch(e,t,n,{...a,total:o},!1);o>0&&!c.problem&&l.push({plan:c,spend:o})}let u=Math.max(0,...l.map(e=>e.spend)),d=l.find(e=>e.spend>=u*.9);if(d){let e=d.plan.rows.length;return{...d.plan,adjusted:`The main wallet only has ${U(n)} SOL, so this spends ${U(d.spend)} SOL${e<s.length?` across ${e} wallet${e===1?``:`s`}`:``} instead of ${U(r.total)} SOL.`}}return a(`The main wallet has ${U(n)} SOL, which isn't enough for even one buy. A side wallet needs about ${U(55e5+Wl)} SOL from main for the smallest buy, fees, and the ${U(Wl)} SOL Solana makes a wallet keep.`)}return{rows:s,mainCost:c,problem:null}}async function wh(e,t){if(K(`fundedBuy:${e}`,()=>wh(e,t)),!G)return gh(e,100);let n=await cm();if(!n)return X();let[r,...i]=n;Np(`Checking your wallet balances…`);let[a,o]=await Promise.all([dm(n.map(e=>e.address)),fu(e).then(t=>t??bo(G,e))]),[s,...c]=a,l=Ch(i,c,s,t),u=l.rows.length||t.split?.length||t.count||0,d=l.rows.length?l.rows.reduce((e,t)=>e+t.share,0):t.total,f=t.split?`split ${t.split.join(`/`)} across ${u} side wallets`:u?`across ${u} side wallet${u===1?``:`s`}`:`split evenly across as many side wallets as possible`;q(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>Spending ${U(d)} SOL, ${f}</h2>
    ${l.adjusted&&!l.problem?`<p class="note">${Q(l.adjusted)}</p>`:``}
    ${l.rows.length?`<ul class="list">${l.rows.map(e=>`<li><span>#${e.wallet.index}</span><code>buys with <b>${U(e.share)} SOL</b><br><small>${e.send>0?`gets ${U(e.send)} SOL from main first`:`already has ${U(e.balance)} SOL, nothing sent`}</small></code></li>`).join(``)}</ul>`:``}
    ${l.problem?`<p class="warning">${Q(l.problem)}</p>`:`<p><b>From main: ${U(l.mainCost)} SOL</b> (main has ${U(s)} SOL).</p>
           <p class="muted">Each wallet gets ${U(_h)} SOL on top of its buy: ${U(fh)} SOL stays in it so it can pay the fee to sell later, and the rest covers the buy's fees and token deposit. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again).</p>
           <button id="go" class="primary">${l.adjusted?`Buy with ${U(d)} SOL instead`:`Enter PIN, fund and buy`}</button>`}
    <button id="cancel">Cancel</button>`),J(`mint`).textContent=e,Y(`cancel`,X),!l.problem&&Y(`go`,()=>Th(e,r,l))}function Th(e,t,n){let r=n.rows.map(e=>({wallet:e.wallet,balance:e.balance,action:`buy`,lamports:e.share})),i=n.rows.filter(e=>e.send>0),a=async(e,t)=>{if(!i.length)return t(`The side wallets already had enough SOL.`);let n=[];for(let e=0;e<i.length;e+=yh)n.push(i.slice(e,e+yh));let r=await Ku(),a=await Promise.allSettled(n.map(async t=>{let n=await Xu(Uu(e[0],t.map(e=>({to:e.wallet.address,lamports:e.send})),r));return{signature:n,outcome:await $u(n)}})),o=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,s=a.find(e=>e.status===`rejected`||e.value.outcome!==`confirmed`);if(s)throw s.status===`rejected`?s.reason:(t(`<span class="error">✗ Sending SOL from main ${s.value.outcome===`failed`?`failed`:`is taking too long`}</span> · ${o(s.value.signature)}`),new Fh);let c=a.map(e=>o(e.value.signature));t(`✓ Sent SOL from main to ${i.length} of ${i.length} side wallets · ${c.join(` `)}`)};Yp(`Enter your PIN to fund and buy`,n=>Ih(n,e,t,r,a))}var Eh=1e6;async function Dh(e,t,n){K(`split`,()=>Dh(e,t,n));let r=await cm();if(!r)return X();let[i,...a]=r,o=e=>{q(`
      <h1>Split SOL</h1>
      <p class="warning">${e}</p>
      <button id="home" class="primary">Back to my wallets</button>`),Y(`home`,X)};if(!a.length)return o(`You don't have any side wallets yet. Add some on the wallets screen first.`);let s=n?.length??t??a.length;if(s>a.length)return o(`You asked for ${s} wallets, but you have ${a.length} side wallet${a.length===1?``:`s`}. Add more on the wallets screen, or pick fewer.`);let c=a.slice(0,s);Np(`Checking your wallets…`);let l=await vu([i,...c].map(e=>e.address)),u=l[0],d=Math.ceil(s/yh)*Ul,f=e===`all`?u-d-Eh:e;if(f<=0)return o(`Main has ${U(u)} SOL, which isn't enough to split.`);let p=u-f-d;if(p<0||p>0&&p<890880)return o(`Main has ${U(u)} SOL. Splitting ${U(f)} SOL plus fees would leave ${p<0?`less than nothing`:`${U(p)} SOL, below the ${U(Wl)} SOL Solana makes a wallet keep`}. The most you can split is ${U(Math.max(0,u-d-Wl))} SOL, or use "split all sol".`);let m=n??c.map(()=>1),h=m.reduce((e,t)=>e+t,0),g=c.map((e,t)=>({wallet:e,balance:l[t+1],send:Math.floor(f*m[t]/h)}));g[0].send+=f-g.reduce((e,t)=>e+t.send,0);let _=g.filter(e=>e.send<=0||e.balance+e.send<890880);if(_.length)return o(`${_.map(e=>`#${e.wallet.index}`).join(`, `)} would get too little: an empty wallet has to receive at least ${U(Wl)} SOL. Split more SOL, or across fewer wallets.`);q(`
    <h1>Split ${U(f)} SOL</h1>
    <p>From main (${U(u)} SOL) to ${s} wallet${s===1?``:`s`}${n?`, split ${n.join(`/`)}`:`, evenly`}.</p>
    <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}gets <b>${U(e.send)} SOL</b><br><small>has ${U(e.balance)} now</small></code></li>`).join(``)}</ul>
    <p class="muted">Main keeps ${U(p)} SOL. Network fees: ${d<1e5?`less than 0.0001`:U(d)} SOL.</p>
    <button id="go" class="primary">Enter PIN and split</button>
    <button id="cancel">Cancel</button>`),Y(`cancel`,X),Y(`go`,()=>Yp(`Enter your PIN to split`,async e=>{let[t]=rm(e,1);q(`
        <h1>Splitting…</h1>
    ${Vt()}
        <p class="muted">Keep this screen open until it finishes.</p>
        <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),Cp();let n=0,r=[];for(let e=0;e<g.length;e+=yh)r.push(g.slice(e,e+yh));g.forEach(e=>J(`status-${e.wallet.index}`).textContent=`sending…`);let a=await Ku().catch(()=>null);await Promise.all(r.map(async e=>{let r;try{let i=await Xu(Uu(t,e.map(e=>({to:e.wallet.address,lamports:e.send})),a??await Ku())),o=await $u(i),s=`<a href="#" class="tx" data-sig="${i}">view</a>`;o===`confirmed`?(n+=e.length,r=`✓ sent {amount} SOL · ${s}`):r=`<span class="error">✗ ${o===`failed`?`failed`:`taking long`}</span> · ${s}`}catch(e){r=`<span class="error">✗ ${Q(Z(e))}</span>`}e.forEach(e=>J(`status-${e.wallet.index}`).innerHTML=r.replace(`{amount}`,U(e.send))),a_()})),Jd([i.address,...g.map(e=>e.wallet.address)]).catch(()=>{}),t.secret.fill(0),$t(n?`success`:`error`),n&&await Nn(`SPLIT`),J(`after`).innerHTML=`<p><b>Done: ${n} of ${g.length} wallets got their SOL.</b></p>
        <button id="home" class="primary">Back to my wallets</button>`,Y(`home`,X)}))}async function Oh(e,t,n=!1){if(K(`buyAmount:${e}`,()=>Oh(e,t,n)),!G)return gh(e,100);let r=await cm();if(!r)return X();let[i,...a]=r;if(!a.length)return q(`
      <h1>No side wallets yet</h1>
      <p>Buys run from side wallets. Add some with "Change number of side wallets" on the home screen.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);Np(`Checking your wallet balances…`);let[o,s]=await Promise.all([dm(r.map(e=>e.address)),gu(e)]),c=s.name??await bo(G,e).catch(()=>null)??kp(e),[l,...u]=o,d=1e5,f=e=>Math.floor(e/d)*d,p=e=>u[e]-fh-ph,m=a.map((e,t)=>t).filter(e=>p(e)>=mh).sort((e,t)=>p(t)-p(e)),h=e=>m.slice(0,e).reduce((e,t)=>e+p(t),0),g=(e,t)=>m.slice(0,t).map(n=>({wallet:a[n],balance:u[n],action:`buy`,lamports:Math.min(p(n),Math.floor(e*p(n)/h(t)))})),_=e=>Math.ceil(mh*h(e)/p(m[e-1])/d)*d,v=n?m.map((e,t)=>f(h(t+1))):a.map((e,t)=>{let n=t+1,r=e=>Ch(a,u,l,{total:e,count:n,split:null},!1).problem!==`too much`,i=0,o=l;for(;o-i>d;){let e=Math.floor((i+o)/2);r(e)?i=e:o=e}let s=f(i);return s>=mh*n?s:0}),y=v.length,b=Math.max(0,...v),x=n?h(m.length):l,S=e=>n?_(e):mh*e,C=e=>{if(n){if(!e)return y;for(let t=y;t>1;t--)if(e<=v[t-1]&&e>=_(t))return t;return 1}for(let t=Math.min(a.length,Math.max(1,Math.floor(e/vh)));t>1;t--)if(e<=v[t-1])return t;return 1},w=t&&t<=y?t:null,T=``,E=!n&&m.length>0;q(`
    <div class="coinhead">${Ln(c,s.logo)}<div><b>${Q(c)}</b><small>${kp(e)}${e.endsWith(`pump`)?` · pump.fun`:``}</small></div></div>
    <div class="avail"><small>${n?`In side wallets`:`Available`}</small><span><span id="avail">0.0000</span> SOL</span></div>
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">SOL</span><div class="usd" id="amtNote"></div></div>
    </div>
    ${E?`<button id="useSide" type="button" hidden>Use side-wallet SOL instead (${U(h(m.length))} SOL)</button>`:``}
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span id="tickMid"></span><span>MAX</span></div>
    <div class="chips"><button type="button" data-f="0.25">25%</button><button type="button" data-f="0.5">50%</button><button type="button" data-f="0.75">75%</button><button type="button" data-f="1">MAX</button></div>
    <div class="walletsrow"><div><b>${n?`Side wallets`:`Wallets`}</b><small id="each"></small></div>
      <div class="stepper"><button id="minus" type="button">−</button><b id="count"></b><button id="plus" type="button">+</button></div></div>
    ${Hp(`dot`)}
    <button id="go" class="primary go"></button>
    <button id="cancel">Cancel</button>`),Rn(),In(J(`avail`),x,uh,{ms:1100,final:uh(x)}),Y(`cancel`,X),E&&Y(`useSide`,()=>Oh(e,null,!0));let ee=e=>Math.round((Number(e)||0)*H),te=()=>{let e=ee(T);return{total:e,count:Math.max(1,w??C(e)),max:w?v[w-1]:b}},ne=e=>`${e} wallet${e===1?``:`s`}`,re=(e=!1)=>{let{total:t,count:r,max:i}=te();J(`amt`).textContent=T||`0`,J(`count`).textContent=String(y?r:0),J(`each`).textContent=n?t?`spread by balance${w?``:` · auto`}`:w?`you picked this, most SOL first`:`auto: every wallet with SOL`:t?`${U(Math.floor(t/r))} SOL each${w?``:` · auto`}`:w?`you picked this`:`auto: as many as the amount allows`,J(`tickMid`).textContent=uh(i/2).replace(/0+$/,``).replace(/\.$/,``),e||(J(`slider`).value=String(i?Math.min(1e3,Math.round(t/i*1e3)):0));let a=t>i,o=t>0&&!a&&t<S(r);J(`amt`).classList.toggle(`over`,a&&i>0),J(`amtNote`).textContent=i?a?`Max with ${ne(r)} is ${U(i)} SOL`:o?`At least ${U(S(r))} SOL for ${ne(r)}`:t?n?`from ${ne(r)} · each keeps ${U(fh)} SOL for selling`:`split over ${ne(r)} · each keeps ${U(_h)} SOL for fees`:`Type an amount or drag the slider`:n?`None of your side wallets has enough SOL to buy`:`Main needs at least ${U(55e5+Wl+Ul)} SOL to buy`,E&&(J(`useSide`).hidden=i>0);let s=J(`go`);s.disabled=!t||a||o,s.textContent=t&&!a&&!o?`⚡ Snatch it · ${T} SOL`:`⚡ Snatch it`},ie=e=>{T=e>0?uh(e).replace(/0+$/,``).replace(/\.$/,``):``};Up(e=>{if(e===`back`)T=T.slice(0,-1);else if(e===`dot`)T=T.includes(`.`)?T:(T||`0`)+`.`;else if(/\d/.test(e)){let[,t]=T.split(`.`);if(t!==void 0&&t.length>=4||T.replace(`.`,``).length>=9)return;T=T===`0`?e:T+e}re()}),J(`slider`).addEventListener(`input`,()=>{let{max:e}=te();ie(f(Number(J(`slider`).value)/1e3*e)),re(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{M(),ie(f(te().max*Number(e.dataset.f))),re()}));let ae=e=>{y&&(M(),w=Math.min(y,Math.max(1,te().count+e)),re())};Y(`minus`,()=>ae(-1)),Y(`plus`,()=>ae(1)),Y(`go`,()=>{let{total:t,count:r}=te();if(n){let n=g(t,r);return Yp(`Enter your PIN to buy`,t=>Ih(t,e,i,n))}let o=Ch(a,u,l,{total:t,count:r,split:null},!1);if(o.problem)return J(`amtNote`).textContent=o.problem===`too much`?`Main can't cover that, try a little less`:o.problem,$t(`error`);Th(e,i,o)}),re()}var Z=e=>e instanceof Error?e.message:String(e),kh=8e6;async function Ah(e,t,n,r){let i;try{i=await _d(e,t,r)}catch(e){throw Error(`Couldn't double-check this trade before signing (${Z(e)}). Nothing was signed; try again in a moment.`)}if(i.failed)return;let a=e=>{throw Error(`Stopped for safety: ${e}. Nothing was signed. Tell Dustin if this keeps happening.`)};i.takenOver&&a(`this trade would hand control of your wallet or its coins to someone else`),i.solOut>n.sol&&a(`this trade would take ${U(i.solOut)} SOL from the wallet, more than the ${U(n.sol)} SOL it should cost at most`);for(let[e,t]of i.coinsOut)e===n.mint&&(n.coins===void 0||t<=n.coins)||a(e===n.mint?`this trade would send more of the coin than you chose to sell`:`this trade would send away a coin you didn't choose to trade`)}async function jh(e,t,n,r){return await Ah(e,t.address,n,r),xu(e,t)}var Mh=10,Nh=e=>{let t=gd(e);return t.catch(()=>{}),t};async function Ph(e,t,n){let r=await uo(G,e,t,n);if(!r.transaction&&t-2e6>=mh&&(t-=2e6,r=await uo(G,e,t,n)),!r.transaction)throw Error(r.errorMessage??`Jupiter couldn't find a way to buy this token.`);return{order:r,lamports:t}}var Fh=class extends Error{};async function Ih(e,t,n,r,i){let a=r.filter(e=>e.action!==`skip`),o=rm(e,Math.max(...a.map(e=>e.wallet.index))+1);q(`
    <h1>Buying…</h1>
    ${Vt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${i?`<p id="funding">Sending SOL from main to the side wallets…</p>`:``}
    <ul class="list">${a.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),Cp();let s=(e,t)=>J(`status-${e}`).innerHTML=t,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;if(i)try{await i(o,e=>J(`funding`).innerHTML=e)}catch(e){return e instanceof Fh||(J(`funding`).innerHTML=`<span class="error">✗ Sending SOL from main failed: ${Q(Z(e))}</span>`),a.forEach(e=>s(e.wallet.index,`not bought`)),o.forEach(e=>e.secret.fill(0)),$t(`error`),J(`after`).innerHTML=`<p><b>Nothing was bought.</b> Any SOL that did reach a side wallet stays there; "Send all side-wallet SOL to main" brings it back.</p>
        <button id="home" class="primary">Back to my wallets</button>`,a_(),Y(`home`,X)}let l=0,u=null,d=!1;await Eg(a,Mh,async e=>{let r=o[e.wallet.index];try{if(e.action===`buy`&&d){s(e.wallet.index,`skipped: same problem as above, nothing spent`);return}if(e.action===`buy`){s(e.wallet.index,`buying…`);let n=Yh(r.address,t).catch(()=>null),i=Nh(r.address),a=null;if(!u)try{a=await Ph(t,e.lamports,r.address)}catch(e){u=Z(e)}let o=await n,d=a?null:await Hg(t);if(d){await $g(d,r,e.lamports,t=>s(e.wallet.index,t),c)&&(l++,Zh(t,r.address,o));return}if(!a){s(e.wallet.index,`buying through pump.fun…`);let n=0,a=await i_(e.wallet.index,s,u,(i,a)=>(n=Math.floor(e.lamports*a),Do(r.address,t,n,i)),r,e=>({sol:Math.ceil(n*(1+e/100))+kh}),i),d=await $u(a);d===`confirmed`?(l++,Zh(t,r.address,o),s(e.wallet.index,`✓ bought with ${U(n)} SOL via pump.fun · ${c(a,`view`)}`)):s(e.wallet.index,`<span class="error">✗ buy ${d===`failed`?`failed`:`is taking long`}</span> · ${c(a,`check`)}`);return}let{order:f,lamports:p}=a,m=await po(G,await jh(mo(f.transaction),r,{sol:p+kh},i),f.requestId);if(m.status!==`Success`)throw Error(m.error??`The buy didn't go through (code ${m.code}).`);l++,Zh(t,r.address,o),s(e.wallet.index,`✓ bought with ${U(p)} SOL · ${c(m.signature,`view`)}`)}else{s(e.wallet.index,`sending back to main…`);let t=await Xu(Hu(r,n.address,e.lamports,await Ku())),i=await $u(t);s(e.wallet.index,i===`confirmed`?`✓ sent ${U(e.lamports)} SOL to main · ${c(t,`view`)}`:`✗ sending back ${i===`failed`?`failed`:`is taking long`} · ${c(t,`check`)}`)}}catch(t){Z(t).includes(`priced in another coin`)&&(d=!0),s(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`)}}),Jd([n.address,...a.map(e=>e.wallet.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),$t(l?`success`:`error`),l&&await Nn(),J(`after`).innerHTML=`<p><b>Done: ${l} of ${a.filter(e=>e.action===`buy`).length} buys went through.</b></p>
    <button id="home" class="primary">Back to my wallets</button>`,a_(),Y(`home`,X)}var Lh=e=>new Intl.NumberFormat(`en-US`,e>=1e6?{notation:`compact`,maximumFractionDigits:2}:{maximumFractionDigits:e>=1?2:6}).format(e),Rh=e=>`$${e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`,zh=e=>e.name?`${e.name}${e.symbol?` (${e.symbol})`:``}`:e.symbol??kp(e.mint),Bh=e=>e.usd===null&&(/https?:|www\.|\.(io|com|xyz|net|org|fun|app|site|gg|co)\b/i.test(`${e.name} ${e.symbol}`)||(e.name??``).length>40),Vh=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),Hh=3,Uh=e=>!!e?.chain&&e.chain!==Hh,Wh=e=>!!e&&BigInt(e.raw)>0n&&(e.lamports>0||(e.usd??0)>0)&&!Uh(e),Gh=(e,t)=>e.usd?t?e.lamports+e.usd/t*H:null:e.lamports,Kh=(e,t)=>{let n=Number(t)/Number(BigInt(e.raw)),r=e.lamports*n,i=(e.usd??0)*n;return[r>0?`${U(r)} SOL`:``,i>0?Rh(i):``].filter(Boolean).join(` + `)},qh=e=>!Wh(e)&&(!e||e.chain!==Hh||!e.checked||Date.now()-e.checked>432e5);async function Jh(e,t,n){let r=0,i=0,a=0,o=!1;for(let n of t){let t=await sd(n.address,e,n.amount);t&&(o=!0,r+=t.lamports,i+=t.usd,a+=t.coins)}if(!o)return null;let s=JSON.parse(await j.get(Yf).catch(()=>null)||`{}`);if(Wh(s[e])&&!s[e].chain)return s[e];let c=a>0&&(r>0||i>0)?{lamports:r,...i>0?{usd:i}:{},raw:BigInt(Math.round(a*10**n)).toString(),chain:Hh}:{lamports:0,raw:`0`,checked:Date.now(),chain:Hh};return s[e]=c,await j.set(Yf,JSON.stringify(s)).catch(()=>{}),c}async function Yh(e,t){let n=await fd([e],t,await af(t));return{lamports:n.lamports[0]+n.deposit[0],raw:n.raw[0]}}var Xh=Promise.resolve();function Zh(e,t,n){n&&(Xh=Xh.then(async()=>{try{for(let r=0;r<5;r++){let r=await Yh(t,e),i=r.raw-n.raw,a=n.lamports-r.lamports;if(i>0n&&a>0){let t=JSON.parse(await j.get(Yf)||`{}`),n=t[e]??{lamports:0,raw:`0`};t[e]={lamports:n.lamports+a,...n.usd?{usd:n.usd}:{},raw:(BigInt(n.raw)+i).toString()},await j.set(Yf,JSON.stringify(t));return}await new Promise(e=>setTimeout(e,1500))}}catch{}}))}var Qh=e=>e.inOrder===!0;async function $h(e){let t=await rf(e);return t&&t.decimals!==void 0?t:bp(e).catch(()=>t??{name:null,symbol:null})}async function eg(e){let t=e.map(()=>[]);if(!G)return t;let n=await pg(),r=new Set(n.map(e=>e.wallet)),i=await Promise.all(e.map(e=>r.has(e.address)?yp(e.address).catch(()=>[]):Promise.resolve([]))),a=[...new Set(i.flat().map(e=>e.inputMint))].filter(e=>e!==Wa),o=new Map(await Promise.all(a.map(async e=>[e,await $h(e)])));for(let[e,n]of i.entries())for(let r of n){let n=BigInt(r.rawRemainingMakingAmount||r.rawMakingAmount||`0`),i=o.get(r.inputMint);n<=0n||!i||i.decimals===void 0||t[e].push({mint:r.inputMint,name:i.name,symbol:i.symbol,logo:i.logo,decimals:i.decimals,amount:Number(n)/10**i.decimals,usd:null,inOrder:!0})}return t}var tg=e=>JSON.stringify(e.map(e=>[e.lamports,e.accounts.map(e=>`${e.mint}:${e.raw}`)])),ng=null,rg=!1,ig=new Set,ag=e=>ng===e&&wp[wp.length-1]?.key===`holdings`;async function og(){K(`holdings`,og);let e=await cm();if(!e)return X();let t=Symbol(`holdings`);ng=t;let n=rg;rg=!1;let r={me:t,wallets:e,costs:await sg()};await cg(e,`Looking up what each wallet holds…`,()=>ag(t),(e,t,n)=>lg(r,e,t,n),n)}var sg=()=>j.get(Yf).then(e=>JSON.parse(e||`{}`)).catch(()=>({}));async function cg(e,t,n,r,i=!1){let a=e.map(e=>e.address),o=Qd(a);o.catch(()=>{});let s=eg(e);s.catch(()=>{});let c=()=>Em(s,8e3,null),l=()=>n()&&!!document.getElementById(`holdSync`),u=await qd(a);if(u){let e=await Em(s,150,null);await r(u,e,`saved`);let t=await o.catch(()=>null);if(!l())return;if(!t){J(`holdSync`).textContent=`NOT SYNCED`;return}if(e&&tg(t)===tg(u)){let e=J(`holdSync`);e.textContent=`UP TO DATE`,e.classList.add(`synced`)}else{let n=e??await c();if(!l())return;await r(t,n,`quiet`)}}else{Np(t);let[e,i]=await Promise.all([o,c()]);if(!n())return;await r(e,i,`fresh`)}let d=await ef(a,i).catch(()=>null);d&&l()&&await r(d,await c(),`quiet`)}async function lg(e,t,n,r){let{me:i,wallets:a,costs:o}=e,s=0,c=await Promise.all(t.map(async e=>(await tf(e)).filter(e=>!Bh(e)||!(s+=1)))),l=t.map(e=>e.lamports);n?.forEach((e,t)=>c[t].push(...e));let u=new Map;c.forEach((e,t)=>e.forEach(e=>{let n=u.get(e.mint)??{coin:e,amount:0,usd:null,wallets:[],inOrders:0};n.amount+=e.amount,e.usd===null?Qh(e)&&n.usd!==null&&n.amount>e.amount&&(n.usd+=n.usd/(n.amount-e.amount)*e.amount):n.usd=(n.usd??0)+e.usd,Qh(e)&&(n.inOrders+=e.amount),n.wallets.includes(a[t].index)||n.wallets.push(a[t].index),u.set(e.mint,n)}));let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=h_,p=new Map,m=0,h=()=>{for(let[e,t]of u){let n=p.get(e);n!==void 0&&f&&(t.usd=n/1e9*f),t.usd!==null&&t.amount>0&&v_(e,t.usd/t.amount)}},g=async()=>{if(!G)return;let[e,t]=await Promise.all([vp().catch(()=>null),u.size?xp([...u.keys()]).catch(()=>new Map):Promise.resolve(new Map)]);f=e??f,w_(f);for(let[e,n]of u){let r=t.get(e);r&&f?p.set(e,r*n.amount/f*1e9):n.usd!==null&&f&&!p.has(e)&&p.set(e,n.usd/f*1e9)}h()},_=async()=>{if(!G)return;let[e,t]=await Promise.all([vp(!0).catch(()=>null),Promise.all([...u].map(([e,t])=>_o(G,e,d(t),!0).catch(()=>null)))]);f=e??f,w_(f);let n=[];if([...u.keys()].forEach((e,r)=>{let i=t[r];i===null?n.push(e):p.set(e,i)}),m=n.length,n.length&&f){let e=await yo(G,n,!0).catch(()=>new Map);for(let[t,n]of e)p.set(t,n*u.get(t).amount/f*1e9)}h();let r=new Map;for(let[e,t]of u)t.usd!==null&&t.amount>0&&p.has(e)&&r.set(e,t.usd/t.amount);nf(r).catch(()=>{})};r===`fresh`?await g():h();let v=e=>a.flatMap((t,n)=>c[n].filter(t=>t.mint===e).map(e=>({address:t.address,amount:e.amount}))),y=e=>{let t=p.get(e);if(t===void 0||Vh.has(e))return null;let n=o[e],r=u.get(e),i,a=!1,s=Wh(n)?Gh(n,f):null;if(s&&(i=s/Number(BigInt(n.raw))*Number(d(r)),a=!0),!i)return null;let c=(t-i)/i*100;return Math.abs(c)<.5?null:{pct:c,sinceBuy:a}},b=e=>e===null?``:`${e.pct>0?`▲`:`▼`} ${Math.abs(e.pct)>=100?Math.round(Math.abs(e.pct)):Math.abs(e.pct).toFixed(1)}%${e.sinceBuy?` since buy`:``}`,x=e=>e===null?``:e.pct>0?` up`:` down`,S=(await pg()).length;if(!ag(i)||r===`quiet`&&!document.getElementById(`holdSync`))return;let C=l.reduce((e,t)=>e+t,0),w=a.filter((e,t)=>l[t]>0||c[t].length),T=e=>e===0?`Main`:`#${e}`,E=[...u.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),ee=E.reduce((e,t)=>e+(t.usd??0),0),te=a.filter((e,t)=>l[t]>0).length,ne=(e,t)=>`${e} ${t}${e===1?``:`s`}`,re=e=>Rh(e).replace(/^\$0\.00$/,`$${e.toFixed(4)}`),ie=(e,t)=>r===`quiet`?t===`usd`?re(e):U(e):`<span class="tk" data-to="${e}" data-kind="${t}">${t===`usd`?`$0.00`:`0.0000`}</span>`,ae=r===`saved`?`SYNCING`:`UP TO DATE`,oe=window.scrollY;q(`
    <h1>Your holdings <span id="holdSync" class="live${r===`saved`?``:` synced`}">${ae}</span></h1>
    <div class="total">
      <small>${ee>0?`Coins across ${ne(w.length,`wallet`)}`:`SOL across ${ne(w.length,`wallet`)}`}</small>
      <div class="big">${ee>0?`<span id="usdTotal">${ie(ee,`usd`)}</span>`:`<span class="solamt" data-sol="${C/H}">${ie(C,`sol`)}<span class="unit">SOL</span></span>`}</div>
      ${ee>0?`<div class="sub">+ <span class="solamt" data-sol="${C/H}">${ie(C,`sol`)} SOL</span></div>`:``}
    </div>
    <h2>Across all wallets${E.length&&G?` <span id="live" class="live">LIVE</span>`:``}</h2>
    <ul class="list coins">
      <li><div class="av sol"><b>◎</b></div><div class="grow"><b>SOL</b><small>in ${ne(te,`wallet`)}</small></div>
        <div class="right"><span class="solamt" data-sol="${C/H}">${ie(C,`sol`)}<small>SOL</small></span></div></li>
      ${E.map(e=>{let t=y(e.coin.mint);return`<li data-mint="${e.coin.mint}">${Ln(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(zh(e.coin))}</b><small>in ${e.wallets.length===1?``:`${e.wallets.length} wallets: `}${e.wallets.map(T).join(`, `)}</small>${e.inOrders?`<small class="inorder">🎯 ${__(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
          <div class="right${x(t)}"><span class="val">${e.usd===null?``:ie(e.usd,`usd`)}</span><small class="move">${b(t)}</small><small>${__(e.coin.mint,e.amount)}</small></div></li>`}).join(``)}
    </ul>
    ${E.length?`<p class="muted">Tap a coin to sell some of it, set an auto-sell, or buy more.</p>`:``}
    <h2>Per wallet</h2>
    <p class="muted">Tap a wallet to open it.</p>
    <ul class="list">${w.map(e=>{let t=a.indexOf(e);return`<li class="openwallet" data-index="${t}"><span>${T(e.index)}</span><code><span class="bal">${U(l[t])} SOL</span>${c[t].map(e=>`<br><small>${Qh(e)?`🎯 `:``}${Q(zh(e))}: ${__(e.mint,e.amount)}${Qh(e)?` in auto-sell`:``}</small>`).join(``)}<br><a href="#" class="acct" data-address="${e.address}">view on Solscan</a></code></li>`}).join(``)}</ul>
    ${w.length<a.length?`<p class="muted">${a.length-w.length} empty wallets not shown.</p>`:``}
    ${s?`<p class="muted">${s} junk coin${s===1?``:`s`} hidden: ads strangers send to active wallets. They're worthless; don't visit the websites in their names.</p>`:``}
    <p class="muted" id="noLive"></p>
    ${E.length?`<button id="sellAll" class="danger">Sell all coins</button>`:``}
    ${S?`<button id="autoSells" class="gold">🎯 Auto-sells · ${S} placed</button>`:``}
    <button id="refresh" class="primary">Refresh</button>
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,oe),S&&Y(`autoSells`,()=>wg().catch($)),E.length&&Y(`sellAll`,()=>n_(100,!1,null).catch($)),document.querySelectorAll(`.acct`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),tn(td(e.dataset.address))})),Y(`refresh`,()=>{gp(),rg=!0,og().catch($)}),Y(`home`,X),document.querySelectorAll(`.openwallet`).forEach(e=>e.addEventListener(`click`,t=>{t.target.closest(`button, a, .solamt, .coinamt`)||(M(),mm(a[Number(e.dataset.index)]).catch($))})),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{let t=u.get(e.dataset.mint);M(),ug({mint:t.coin.mint,label:zh(t.coin),short:t.coin.symbol||t.coin.name||`?`,logo:t.coin.logo,amount:t.amount,raw:d(t),wallets:t.wallets.map(T).join(`, `),holders:v(t.coin.mint),decimals:t.coin.decimals??0,inOrders:t.inOrders,value:p.get(t.coin.mint)??null}).catch($)})),Rn(),document.querySelectorAll(`.tk`).forEach((e,t)=>{let n=Number(e.dataset.to),r=e.dataset.kind===`usd`;In(e,n,r?Rh:uh,{ms:1100,delay:Math.min(t,12)*70,final:r?re(n):U(n)})});let se=J(`holdSync`),ce=()=>se.isConnected;Eg([...u],3,async([e,t])=>{if(Vh.has(e)||!qh(o[e])||ig.has(e)||!ce())return;ig.add(e);let n=await Jh(e,v(e),t.coin.decimals??0).catch(()=>null).finally(()=>ig.delete(e));n&&(o[e]=n)}).catch(()=>{});let le=e=>{let t=document.getElementById(`live`);e&&t&&(t.classList.remove(`beat`),t.offsetWidth,t.classList.add(`beat`));let n=0;for(let[e,t]of u){n+=t.usd??0;let r=document.querySelector(`li[data-mint="${e}"]`);if(!r||t.usd===null)continue;let i=r.querySelector(`.right`),a=i.querySelector(`.val`),o=re(t.usd);a.textContent!==o&&(a.textContent=o,i.classList.remove(`bump`),i.offsetWidth,i.classList.add(`bump`));let s=y(e);i.classList.toggle(`up`,!!s&&s.pct>0),i.classList.toggle(`down`,!!s&&s.pct<0),i.querySelector(`.move`).textContent=b(s)}let r=document.getElementById(`usdTotal`);r&&n>0&&(r.textContent=re(n)),J(`noLive`).textContent=m?`${m===1?`1 coin has`:`${m} coins have`} no live sell price right now, so ${m===1?`its`:`their`} value may lag.`:``};G&&u.size&&(async()=>{if(r!==`fresh`){if(await g(),!ce())return;le(!1)}r!==`quiet`&&await new Promise(e=>setTimeout(e,1200));for(let e=0;ce();e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),ce()&&!document.hidden){if(await _(),!ce())return;le(!0)}})().catch(()=>{})}async function ug(e){if(K(`coin:${e.mint}:${e.only?.join(`,`)??``}`,()=>ug(e)),!G)return og();let t=Promise.all([_o(G,e.mint,e.raw),vp()]);t.catch(()=>{});let[n,r]=await Promise.all([sg(),pg()]),i=Vh.has(e.mint)?void 0:n[e.mint],a=!Vh.has(e.mint)&&qh(i),o=i&&Wh(i)?i:null,s=null,c=e.value??null,l=h_,u=!0,d=()=>{let t=o?Gh(o,l):null;s=t?Math.round(t/Number(BigInt(o.raw))*Number(e.raw)):null};d();let f=t,p=async()=>{let[t,n]=await(f??Promise.all([_o(G,e.mint,e.raw,!0),vp(!0)])).catch(()=>[null,null]);f=null,u=!1,t!==null&&(c=t),n!==null&&(l=n),w_(n),d(),c!==null&&l&&e.amount>0&&v_(e.mint,c/H*l/e.amount)},m=()=>s&&c&&c>s?Math.min(100,Math.ceil(s/c*1e4)/100):null,h=e=>String(Math.round(e*100)/100),g=e=>l?` · ${_(e/H*l)}`:``,_=e=>e<.01?`$${e.toFixed(4)}`:Rh(e),v=r.filter(t=>t.mint===e.mint).length,y=``,b=!1;q(`
    <div class="coinhead">${Ln(e.short,e.logo)}<div><b>${Q(e.label)}</b><small>${__(e.mint,e.amount,` coins`)} · in ${Q(e.wallets)}</small></div><span id="live" class="live">LIVE</span></div>
    <div class="avail"><small>Worth now</small><span id="worth"></span></div>
    <div class="avail"><small id="paidLabel"></small><span class="paid" id="paidText"></span></div>
    <div class="avail pl" id="plRow"><small>Profit</small><span id="pl"></span></div>
    ${e.inOrders?`<p class="muted initnote">🎯 ${__(e.mint,e.inOrders)} of these wait in auto-sell orders. Selling here only sells the rest; cancel the order first to sell those.</p>`:``}
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">%</span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span>50%</span><span>ALL</span></div>
    <div class="chips"><button type="button" data-p="25">25%</button><button type="button" data-p="50">50%</button><button type="button" data-p="75">75%</button><button type="button" data-p="100">MAX</button></div>
    <div id="initialBox"></div>
    ${Hp(`dot`)}
    <button id="go" class="danger go"></button>
    <div id="autoBox"></div>
    <button id="buyMore" class="primary">⚡ Buy more</button>
    <button id="back">${e.only?`Back to the wallet`:`Back to holdings`}</button>`),Rn();let x=()=>Math.min(100,Number(y)||0),S=()=>{J(`worth`).textContent=c===null?u?`…`:`no live price`:`${U(c)} SOL${g(c)}`,J(`paidLabel`).textContent=`You paid${i?.chain?` · on-chain`:``}`,J(`paidText`).textContent=o?Kh(o,e.raw):a?`looking it up…`:`—`;let t=J(`autoBox`),n=!!o&&!Vh.has(e.mint);n!==!!t.firstElementChild&&(t.innerHTML=n?`<button id="auto" class="gold">🎯 Auto-sell${v?` · ${v} waiting`:``}</button>`:``,n&&Y(`auto`,()=>xg(e,o).catch($)));let r=J(`plRow`);if(r.hidden=!(s&&c!==null),s&&c!==null){let e=c-s,t=e/s*100;r.classList.toggle(`up`,e>0),r.classList.toggle(`down`,e<0),J(`pl`).textContent=`${e>=0?`▲ +`:`▼ −`}${U(Math.abs(e))} SOL (${Math.abs(t)>=100?Math.round(Math.abs(t)):Math.abs(t).toFixed(1)}%)`}let l=m();J(`initialBox`).innerHTML=i?.out?`<p class="muted initnote">✓ Initial investment already taken out. The rest is riding free.</p>`:l===null?`<p class="muted initnote">${Vh.has(e.mint)?`A stablecoin is always worth about $1, so there's no profit to take here.`:s?`💰 Sell initial investment shows up once this coin is worth more than you paid.`:a?`Looking up what you paid for this coin in your wallet's trade history…`:i?.checked?`Couldn't find what you paid for this coin in your wallet's trade history, so Sell initial investment isn't available.`:`Couldn't read your wallet's trade history right now, so Sell initial investment isn't available yet.`}</p>`:`<button id="initial" class="gold">💰 Sell initial investment · ${h(l)}%</button>`,l!==null&&!i?.out&&Y(`initial`,()=>{M(),b=!0,C()})},C=(t=!1)=>{let n=m();b&&n!==null&&(y=h(n));let r=x();J(`amt`).textContent=y||`0`,t||(J(`slider`).value=String(Math.round(r*10)));let i=c===null?null:Math.round(c*r/100);J(`amtNote`).textContent=r?b&&n!==null?`gets back the ${o?Kh(o,e.raw):`${U(s)} SOL`} you paid · ${h(100-r)}% keeps riding`:i===null?`${Lh(e.amount*r/100)} coins`:`≈ ${U(i)} SOL${g(i)} · ${Lh(e.amount*r/100)} coins`:`Type a % or drag the slider`,document.querySelector(`#initial`)?.classList.toggle(`on`,b);let a=J(`go`);a.disabled=!r,a.textContent=r?`Sell ${r===100?`all of it`:`${y}%`}`:`Sell`},w=()=>b=!1;Up(e=>{if(w(),e===`back`)y=y.slice(0,-1);else if(e===`dot`)y=y.includes(`.`)?y:(y||`0`)+`.`;else if(/\d/.test(e)){let[,t]=y.split(`.`);if(t!==void 0&&t.length>=2)return;let n=y===`0`?e:y+e;y=Number(n)>100?`100`:n}C()}),J(`slider`).addEventListener(`input`,()=>{w();let e=Number(J(`slider`).value);y=e?h(e/10):``,C(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{M(),w(),y=e.dataset.p,C()})),Y(`go`,()=>{let t=x();if(!t)return;let n=b&&m()!==null,r=n?async()=>{let t=JSON.parse(await j.get(Yf)||`{}`);t[e.mint]&&(t[e.mint].out=!0),await j.set(Yf,JSON.stringify(t))}:void 0,i=(t,n)=>zg(e.label,Math.round(t*100)/100,!1,e.only??null,{mint:e.mint,label:e.label},r,n).catch($);if(!e.inOrders)return i(t,!1);let a=Math.max(0,e.amount-e.inOrders),o=n?Math.min(100,t*e.amount/(a||1)):t,s=t=>{let n=c===null||!e.amount?null:Math.round(c*t/e.amount);return n===null?``:` ≈ <span class="solamt" data-sol="${n/H}">${U(n)} SOL</span>${g(n)}`},l=a*o/100,u=e.amount*t/100;M(),q(`
      <h1>Sell ${Q(e.label)}</h1>
      <p>🎯 ${__(e.mint,e.inOrders)} of your ${__(e.mint,e.amount)} coins are locked in auto-sell orders.</p>
      ${a>0?`<button id="freeOnly" class="primary">Sell only the free coins<br><small>${__(e.mint,l)} coins (${h(o)}% of ${__(e.mint,a)})${s(l)}</small></button>`:`<p class="muted">All of it is in auto-sell orders, so there are no free coins to sell.</p>`}
      <button id="withOrders" class="danger">Sell from all coins, including the locked ones<br><small>${__(e.mint,u)} coins (${h(t)}% of ${__(e.mint,e.amount)})${s(u)} · cancels the auto-sell orders first</small></button>
      <button id="back">Back</button>`),a>0&&Y(`freeOnly`,()=>i(o,!1)),Y(`withOrders`,()=>i(t,!0)),Y(`back`,()=>ug(e).catch($))}),Y(`buyMore`,()=>Oh(e.mint,null).catch($)),Y(`back`,()=>e.only?Op():og().catch($)),S(),C();let T=J(`live`);a&&Jh(e.mint,e.holders,e.decimals).catch(()=>null).then(e=>{e&&(i=e),o=i&&Wh(i)?i:null,a=!1,d(),T.isConnected&&(S(),C())}),(async()=>{for(let e=0;T.isConnected;e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),T.isConnected&&!document.hidden){if(await p(),!T.isConnected)return;T.classList.remove(`beat`),T.offsetWidth,T.classList.add(`beat`),S(),C()}})().catch(()=>{})}var dg=`autoSells`,fg=5;async function pg(){return JSON.parse(await j.get(dg).catch(()=>null)||`[]`)}var mg=e=>j.set(dg,JSON.stringify(e)),hg=Promise.resolve();function gg(e){let t=hg.then(async()=>mg(e(await pg())));return hg=t.catch(()=>{}),t}var _g=e=>`${Math.round(e*100)/100}x`,vg=e=>`+${Math.round((e-1)*1e4)/100}%`,yg=e=>{let t=1+24*(e/1e3)**2;return t<10?Math.round(t*10)/10:Math.round(t)},bg=e=>Math.round(Math.sqrt(Math.min(1,Math.max(0,(e-1)/24)))*1e3);async function xg(e,t){K(`autoSell:${e.mint}`,()=>xg(e,t));let n=await cm();if(!n)return X();Np(`Checking which wallets hold it…`);let r=new Set(e.holders.map(e=>e.address)),i=n.filter(e=>r.has(e.address)),a=e.raw-BigInt(Math.round((e.inOrders??0)*10**e.decimals)),o=a>0n?Promise.all([_o(G,e.mint,a),vp()]):null;o?.catch(()=>{});let s=await fd(i.map(e=>e.address),e.mint,await af(e.mint)),c=i.map((e,t)=>({wallet:e,held:s.raw[t]})).filter(e=>e.held>0n),l=c.reduce((e,t)=>e+t.held,0n);if(!l)return ug(e);let u=null,d=null,f=!0,p=async()=>{let t=!f,n=f&&o&&(a===l||Number(a>l?a-l:l-a)/Number(l)<.001);f=!1;let[r,i]=await(n?o.then(([e,t])=>[e===null?null:Math.round(e*Number(l)/Number(a)),t]):Promise.all([_o(G,e.mint,l,t),vp(t)]));r!==null&&(u=r),i!==null&&(d=i)};await p();let m=()=>{let e=Gh(t,d);return e?e/Number(BigInt(t.raw)):null},h=()=>u!==null&&m()?u/(m()*Number(l)):null,g=(await pg()).filter(t=>t.mint===e.mint),_=t.out?`all`:`initial`,v=`x`,y=2,b=`2`,x=e=>e===0?`Main`:`#${e}`,S=e=>d?e/H*d:null,C=()=>{let e=m();return!e||y<=1?[]:c.map(t=>{let n=_===`all`?t.held:t.held*10000n/BigInt(Math.round(y*1e4)),r=BigInt(Math.ceil(Number(n)*e*y)),i=u===null?null:u*Number(n)/Number(l);return{wallet:t.wallet,held:t.held,making:n,taking:r,usdNow:i===null?null:S(i)}})},w=e=>e.usdNow===null||e.usdNow>=fg;q(`
    <div class="coinhead">${Ln(e.short,e.logo)}<div><b>Auto-sell ${Q(e.label)}</b><small>You paid ${Kh(t,l)} · now <span id="nowX"></span></small></div></div>
    <div class="seg" id="kindSeg"><button type="button" data-v="initial">💰 Sell initial</button><button type="button" data-v="all">Sell all</button></div>
    <div class="seg small" id="unitSeg"><button type="button" data-v="x">Multiplier ×</button><button type="button" data-v="pct">Percentage %</button></div>
    <div class="total amountbox">
      <small id="when">when it reaches</small>
      <div class="amount"><span class="num" id="amt"></span><span class="unit" id="unit"></span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1">
    <div class="ticks" id="ticks"></div>
    ${Hp(`dot`)}
    <ul class="list" id="plan"></ul>
    <p class="muted" id="planNote"></p>
    <button id="go" class="gold go">Set auto-sell</button>
    <div id="existing"></div>
    <p class="muted">The coins in an order wait in Jupiter's on-chain order account, so they leave your holdings until it sells or you cancel it. This only sells on the way up; it can't stop a loss.</p>
    <button id="back">Back to ${Q(e.short)}</button>`),Rn();let T=()=>{J(`existing`).innerHTML=g.length?`<h2>Waiting orders for this coin</h2><ul class="list">${g.map(e=>`<li><span>${x(e.index)}</span><code>${e.kind===`initial`?`💰 initial`:`all`} at ${_g(e.x)} → ${U(Number(e.taking))} SOL</code></li>`).join(``)}</ul><button id="manage">See or cancel auto-sells</button>`:``,g.length&&Y(`manage`,()=>wg().catch($))},E=(t=!1)=>{document.querySelectorAll(`#kindSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===_)),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===v)),J(`amt`).textContent=b||`0`,J(`unit`).textContent=v===`x`?`x`:`%`,J(`ticks`).innerHTML=v===`x`?`<span>1x</span><span>7x</span><span>25x</span>`:`<span>+0%</span><span>+600%</span><span>+2400%</span>`,t||(J(`slider`).value=String(bg(y)));let n=h();J(`nowX`).textContent=n===null?`no live price`:`${_g(n)} (${n>=1?`▲ +`:`▼ −`}${Math.abs(Math.round((n-1)*1e3)/10)}%)`;let r=m(),i=C(),a=i.filter(w),o=J(`go`),s=``,c=``;r?y<=1?c=_===`initial`?`Pick more than 1x: at 1x getting back what you paid means selling all of it.`:`Pick more than 1x.`:n!==null&&y<=n&&(c=`That's below today's price (${_g(n)}), so it would sell straight away. Use Sell on the coin screen for that.`):c=`Can't work out today's price of what you paid.`;let l=_===`all`?100:Math.round(1e4/y)/100,u=i.reduce((e,t)=>e+Number(t.taking),0),d=S(u);J(`amtNote`).textContent=c?``:`${v===`x`?vg(y):_g(y)} · sells ${_===`all`?`all of it`:`${l}%`} for ≈ ${U(u)} SOL${d?` · ${Rh(d)}`:``}${_===`initial`?` · ${Math.round((100-l)*100)/100}% keeps riding`:``}`,J(`plan`).innerHTML=c?``:i.map(t=>`<li><span>${x(t.wallet.index)}</span><code>${w(t)?`sell ${Pg(t.making,e.decimals)} for ${U(Number(t.taking))} SOL`:`<span class="error">skipped: worth ${Rh(t.usdNow)} now, under Jupiter's $${fg} minimum</span>`}</code></li>`).join(``),!c&&!a.length?s=`Every wallet's order would be under Jupiter's $${fg} minimum (worth now). Gather the coins in fewer wallets, or pick Sell all.`:!c&&a.length<i.length&&(s=`Jupiter only takes orders worth at least $${fg} right now, so ${i.length-a.length} wallet${i.length-a.length===1?` is`:`s are`} skipped.`),J(`planNote`).textContent=c||s,J(`planNote`).classList.toggle(`error`,!!c),o.disabled=!!c||!a.length,o.textContent=c||!a.length?`Set auto-sell`:`Set auto-sell in ${a.length} wallet${a.length===1?``:`s`}`},ee=()=>{let e=Number(b)||0;y=v===`x`?e:1+e/100},te=()=>{b=String(v===`x`?Math.round(y*100)/100:Math.round((y-1)*1e4)/100)};document.querySelectorAll(`#kindSeg button`).forEach(e=>e.addEventListener(`click`,()=>{M(),_=e.dataset.v,E()})),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.addEventListener(`click`,()=>{M(),v=e.dataset.v,te(),E()})),Up(e=>{if(e===`back`)b=b.slice(0,-1);else if(e===`dot`)b=b.includes(`.`)?b:(b||`0`)+`.`;else if(/\d/.test(e)){let[,t]=b.split(`.`);if(t!==void 0&&t.length>=2||b.replace(`.`,``).length>=7)return;b=b===`0`?e:b+e}ee(),E()}),J(`slider`).addEventListener(`input`,()=>{y=yg(Number(J(`slider`).value)),te(),E(!0)}),Y(`back`,()=>ug(e).catch($)),Y(`go`,()=>{let t=C().filter(w);if(!t.length)return;let n={kind:_,x:y};Yp(`Enter your PIN to set the auto-sell`,r=>Sg(r,e,t,n).catch($))}),T(),E();let ne=J(`nowX`);(async()=>{for(;ne.isConnected;)await new Promise(e=>setTimeout(e,5e3)),ne.isConnected&&!document.hidden&&(await p(),ne.isConnected&&E())})().catch(()=>{})}async function Sg(e,t,n,r){gp();let i=rm(e,Math.max(...n.map(e=>e.wallet.index))+1),a=e=>e===0?`Main`:`#${e}`;q(`
    <h1>Setting auto-sell…</h1>
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${a(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let o=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,s=0;await Eg(n,Mh,async e=>{let n=J(`status-${e.wallet.index}`);try{n.textContent=`placing the order…`;let a=Nh(e.wallet.address),c=await xo(G,e.wallet.address,t.mint,e.making,e.taking);if(!c.transaction)throw Error(`Jupiter didn't send an order to sign.`);let l=await Co(G,await jh(mo(c.transaction),i[e.wallet.index],{sol:kh,mint:t.mint,coins:e.making},a),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter's order didn't go through (code ${l.code}).`);s++,await gg(n=>[...n,{order:c.order??``,wallet:e.wallet.address,index:e.wallet.index,mint:t.mint,label:t.label,kind:r.kind,x:r.x,making:e.making.toString(),taking:e.taking.toString(),at:Date.now()}]),n.innerHTML=`✓ sells ${Pg(e.making,t.decimals)} at ${_g(r.x)} for ${U(Number(e.taking))} SOL · ${o(l.signature,`view`)}`}catch(e){n.innerHTML=`<span class="error">✗ ${Q(Cg(e))}</span>`}}),Jd(n.map(e=>e.wallet.address)).catch(()=>{}),i.forEach(e=>e.secret.fill(0)),$t(s?`success`:`error`),J(`after`).innerHTML=`<p><b>Done: auto-sell set in ${s} of ${n.length} wallets.</b>${s?` It sells when ${Q(t.label)} reaches ${_g(r.x)} what you paid.`:``}</p>
    <button id="list" class="primary">See my auto-sells</button>
    <button id="holdings">See my holdings</button>`,a_(),Y(`list`,()=>wg().catch($)),Y(`holdings`,()=>og().catch($))}function Cg(e){let t=Z(e);return/at least 5 USD/i.test(t)?`worth under $${fg} right now (Jupiter's minimum)`:/insufficient|lamports|rent/i.test(t)?`not enough SOL in this wallet for the order's fee and deposit (~0.003 SOL)`:t}async function wg(){if(K(`autoSells`,wg),!G)return og();let e=await pg(),t=e=>e===0?`Main`:`#${e}`;if(!e.length)return q(`
      <h1>Auto-sells</h1>
      <p class="muted">No auto-sells yet. Tap a coin in your holdings, then 🎯 Auto-sell.</p>
      <button id="holdings" class="primary">See my holdings</button>`),Y(`holdings`,()=>og().catch($));Np(`Checking your orders on Jupiter…`);let n=[...new Set(e.map(e=>e.wallet))],r=new Map,i=new Map,a=!1;await Promise.all(n.map(async t=>{try{for(let e of await wo(G,t,`active`))r.set(e.orderKey,e);if(e.some(e=>e.wallet===t&&!r.has(e.order)))for(let e of await wo(G,t,`history`))i.set(e.orderKey,e)}catch{a=!0}}));let o=JSON.parse(await j.get(Yf).catch(()=>null)||`{}`),s=!1,c=e=>{if(r.has(e.order))return`waiting`;let t=i.get(e.order);return t?/complete|fill/i.test(t.status)?`sold`:`cancelled`:`unknown`};for(let t of e)t.kind===`initial`&&c(t)===`sold`&&o[t.mint]&&!o[t.mint].out&&(o[t.mint].out=!0,s=!0);s&&await j.set(Yf,JSON.stringify(o)),a||await mg(e.filter(e=>[`waiting`,`unknown`].includes(c(e))));let l=e.filter(e=>c(e)===`waiting`),u=e=>({waiting:`waiting`,sold:`✓ sold`,cancelled:`cancelled`,unknown:a?`couldn't check`:`not found on Jupiter`})[c(e)];q(`
    <h1>Auto-sells</h1>
    <ul class="list">${e.map((e,n)=>`<li><span>${t(e.index)}</span><code><b>${Q(e.label)}</b> · ${e.kind===`initial`?`💰 sell initial`:`sell all`} at ${_g(e.x)}<br><small>${U(Number(e.taking))} SOL · ${u(e)}</small>${c(e)===`waiting`?`<br><button type="button" class="cancel small" data-i="${n}">Cancel</button>`:``}</code></li>`).join(``)}</ul>
    ${a?`<p class="error">Couldn't reach Jupiter for every wallet. Try Refresh.</p>`:``}
    ${l.length>1?`<button id="cancelAll" class="danger">Cancel all ${l.length}</button>`:``}
    <p class="muted">Cancelling gives the coins back to the wallet.</p>
    <button id="refresh" class="primary">Refresh</button>
    <button id="holdings">See my holdings</button>`),Y(`refresh`,()=>wg().catch($)),Y(`holdings`,()=>og().catch($)),document.querySelectorAll(`button.cancel`).forEach(t=>t.addEventListener(`click`,()=>{let n=e[Number(t.dataset.i)];Yp(`Enter your PIN to cancel`,e=>Tg(e,[n]).catch($))})),l.length>1&&Y(`cancelAll`,()=>Yp(`Enter your PIN to cancel them all`,e=>Tg(e,l).catch($)))}async function Tg(e,t){gp();let n=rm(e,Math.max(...t.map(e=>e.index))+1),r=e=>e===0?`Main`:`#${e}`;q(`
    <h1>Cancelling…</h1>
    <ul class="list">${t.map((e,t)=>`<li><span>${r(e.index)}</span><code id="status-${t}">${Q(e.label)} · waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let i=0,a=new Set,o=new Map;t.forEach((e,t)=>o.set(e.wallet,[...o.get(e.wallet)??[],t])),await Eg([...o.values()],Mh,async e=>{for(let[r,o]of e.entries()){let e=t[o],s=J(`status-${o}`);try{s.textContent=`cancelling…`;let t=n[e.index];if(t.address!==e.wallet)throw Error(`this wallet's number changed; cancel it on jup.ag instead`);let o=r===0?Nh(e.wallet):void 0,c=await So(G,e.wallet,e.order),l=await Co(G,await jh(mo(c.transaction),t,{sol:kh},o),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter didn't cancel it (code ${l.code}).`);i++,a.add(e.order),s.innerHTML=`✓ cancelled, coins back in the wallet · <a href="#" class="tx" data-sig="${l.signature}">view</a>`}catch(e){s.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}}),Jd([...o.keys()]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),a.size&&await gg(e=>e.filter(e=>!a.has(e.order))),$t(i?`success`:`error`),J(`after`).innerHTML=`<p><b>Cancelled ${i} of ${t.length}.</b></p><button id="list" class="primary">See my auto-sells</button>`,a_(),Y(`list`,()=>wg().catch($))}async function Eg(e,t,n){let r=Array(e.length),i=0;return await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;i<e.length;){let t=i++;r[t]=await n(e[t],t)}})),r}var Dg=12;function Og(e,t,n,r){if(e<5e3)return null;let i=t.filter(e=>e.raw===0n).slice(0,Dg),a=i.reduce((e,t)=>e+t.lamports,0),o=t.some(e=>e.raw>0n&&!r?.has(e.mint))?fh:0,s=n?Math.max(0,e+a-Ul-o):0;return!i.length&&!s||!i.length&&s<5e4?null:{close:i,refund:a,keep:o,send:s}}async function kg(e,t,n){let r=await Xu(Su(e,[...n.close.map(t=>Tu(t,e.address,e.address)),...n.send>0?[wu(e.address,t.address,n.send)]:[]],await Ku())),i=await $u(r);if(i!==`confirmed`)throw Error(`${i===`failed`?`failed`:`is taking long`} (${r})`);return r}function Ag(e){let[t,...n]=[e.send?`sends ${U(e.send)} SOL to main`:``,e.close.length?`gets back ${U(e.refund)} SOL in deposits from ${e.close.length} empty coin account${e.close.length===1?``:`s`}`:``,e.keep?`keeps ${U(e.keep)} SOL to sell its coins later`:``].filter(Boolean);return t+(n.length?`<br><small>${n.join(`<br>`)}</small>`:``)}async function jg(){K(`sweep`,jg);let e=await cm();if(!e)return X();let[t,...n]=e;Np(`Checking your side wallets…`);let r=await Qd(n.map(e=>e.address)),i=n.map((e,t)=>({wallet:e,plan:Og(r[t].lamports,r[t].accounts,!0)})).filter(e=>e.plan!==null),a=i.reduce((e,t)=>e+t.plan.send,0);q(`
    <h1>Send side-wallet SOL to main</h1>
    ${i.length?`<ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code>${Ag(e.plan)}</code></li>`).join(``)}</ul>
           <p><b>Total to main: ${U(a)} SOL</b></p>
           <p class="muted">Empty coin accounts are closed so their deposits come back too.</p>
           <button id="go" class="primary">Enter PIN and send</button>`:`<p class="muted">There's no SOL to send back right now. Side wallets that hold coins keep ${U(fh)} SOL so they can sell them later.</p>`}
    <button id="cancel">Back to my wallets</button>`),Y(`cancel`,X),i.length&&Y(`go`,()=>Yp(`Enter your PIN to send`,async e=>{let n=rm(e,Math.max(...i.map(e=>e.wallet.index))+1);q(`
        <h1>Sending to main…</h1>
    ${Vt()}
        <ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),Cp();let r=0;await Eg(i,Mh,async e=>{let i=J(`status-${e.wallet.index}`);try{i.textContent=`sending…`;let a=await kg(n[e.wallet.index],t,e.plan);r++,i.innerHTML=`✓ ${e.plan.send?`sent ${U(e.plan.send)} SOL`:`got back ${U(e.plan.refund)} SOL`} · <a href="#" class="tx" data-sig="${a}">view</a>`}catch(e){i.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),Jd([t.address,...i.map(e=>e.wallet.address)]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),$t(r?`success`:`error`),r&&await Nn(`MERGED`),J(`after`).innerHTML=`<p><b>Done: ${r} of ${i.length} wallets.</b></p><button id="home" class="primary">Back to my wallets</button>`,a_(),Y(`home`,X)}))}var Mg=e=>/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(e);function Ng(e,t){let n=e.toString().padStart(t+1,`0`),r=n.slice(0,n.length-t),i=n.slice(n.length-t).replace(/0+$/,``);return i?`${r}.${i}`:r}var Pg=(e,t)=>Lh(Number(Ng(e,t)));async function Fg(e,t){if(Mg(e)){let t=await rf(e);return[{mint:e,label:t?.name?`${t.name}${t.symbol?` (${t.symbol})`:``}`:await fu(e)??kp(e)}]}let n=e=>(e??``).toLowerCase().replace(/[^a-z0-9]/g,``),r=n(e),i=async e=>{if(!e)return[];let t=(await Promise.all(e.map(e=>tf(e)))).flat().filter(e=>!Bh(e)),i=e=>{let n=new Map;for(let r of t)e(r)&&n.set(r.mint,zh(r));return[...n].map(([e,t])=>({mint:e,label:t}))},a=i(e=>n(e.symbol)===r||n(e.name)===r);return a.length||r.length<3?a:i(e=>n(e.symbol).startsWith(r)||n(e.name).startsWith(r))},a=t.map(e=>e.address),o=await i(await qd(a));return o.length?o:i(await Qd(a))}async function Ig(e,t){let n=new Set((await pg()).map(e=>e.wallet)),r=e.filter(e=>n.has(e.address)),i=await Promise.all(r.map(e=>wo(G,e.address,`active`).catch(()=>[])));return r.flatMap((e,n)=>i[n].filter(e=>e.inputMint===t).map(t=>({wallet:e.address,order:t.orderKey,raw:BigInt(t.rawRemainingMakingAmount||t.rawMakingAmount||`0`)})))}async function Lg(e,t,n){let r=async()=>(await Wu(e.address,t)).reduce((e,t)=>e+t.raw,0n),i=await r();for(let t of n){let n=await So(G,e.address,t.order),r=await Co(G,await jh(mo(n.transaction),e,{sol:kh}),n.requestId);if(r.status!==`Success`)throw Error(r.error??`Jupiter didn't cancel the auto-sell order (code ${r.code}).`)}let a=i+n.reduce((e,t)=>e+t.raw,0n);for(let e=0;e<20;e++){let e=await r();if(e>=a)return e;await new Promise(e=>setTimeout(e,500))}return r()}var Rg=5e4;async function zg(e,t,n,r,i,a,o=!1){if(K(`sell:${i?.mint??e}:${r?.join(`,`)??``}`,()=>zg(e,t,n,r,i,a,o)),!G)return q(`
      <h1>Open this from the bot</h1>
      <p>To sell, send <b>sell &lt;coin name or address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);let s=await cm();if(!s)return X();let[c]=s,l=i,u=e=>af(e).then(t=>fd(s.map(e=>e.address),e,t)),d=!l&&Mg(e)?u(e):null;if(d?.catch(()=>{}),!l){Np(Mg(e)?`Finding the coin in your wallets…`:`Looking for ${Q(e)} in your wallets…`);let i=await Fg(e,s);if(!i.length)return q(`
        <h1>Coin not found</h1>
        <p>None of your wallets hold a coin called <b>${Q(e)}</b>. Check the name in <b>holdings</b>, or send <b>sell</b> with the coin's address instead.</p>
        <button id="home" class="primary">Back to my wallets</button>`),Y(`home`,X);if(i.length>1)return q(`
        <h1>Which ${Q(e)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${i.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${kp(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(o=>o.addEventListener(`click`,()=>zg(e,t,n,r,i[Number(o.dataset.i)],a).catch($))),Y(`home`,X);l=i[0]}Np(`Checking how much each wallet holds…`);let f=l.mint,[p,m]=await Promise.all([d&&f===e?d:u(f),o?Ig(s,f):Promise.resolve([])]),h=e=>m.filter(t=>t.wallet===e).reduce((e,t)=>e+t.raw,0n),g=[],_=[];s.forEach((e,n)=>{if(r&&!r.includes(e.index))return;let i=p.raw[n]+h(e.address);if(i===0n)return void(r&&_.push(e.index));let a=t===100?i:i*BigInt(Math.round(t*100))/10000n,o=p.decimals??0;a>0n&&g.push({wallet:e,balance:p.lamports[n],raw:i,sell:a,decimals:o,orders:m.filter(t=>t.wallet===e.address)})});let v=e=>e===0?`Main`:`#${e}`,y=e=>e.balance>=Rg,b=r?.filter(e=>e>=s.length)??[],x=[_.length?`${_.map(v).join(`, `)} ${_.length===1?`doesn't`:`don't`} hold this coin.`:``,b.length?`You don't have ${b.map(v).join(`, `)}.`:``].filter(Boolean);if(q(`
    <h1>Sell ${Q(l.label)}</h1>
    <div class="card"><div class="label">Coin address</div><div class="address" id="mint"></div></div>
    ${m.length?`<p class="muted">Includes the coins in your auto-sell orders: those orders are cancelled first, then the coins are sold.</p>`:``}
    ${g.length?`<h2>Selling ${t===100?`all of it`:`${t}%`} from <span id="picked"></span></h2>
           <p class="muted">Untick any wallet you want to leave out.</p>
           <ul class="list">${g.map((e,n)=>`<li><label class="pickrow"><input type="checkbox" class="sellbox" data-i="${n}" ${y(e)?`checked`:`disabled`}>
                 <span>${v(e.wallet.index)}</span></label><code>sells <b>${__(l.mint,Number(Ng(e.sell,e.decimals)))}</b>${t<100?` of ${__(l.mint,Number(Ng(e.raw,e.decimals)))}`:``}${e.orders?.length?`<br><small>🎯 cancels ${e.orders.length===1?`its auto-sell order`:`${e.orders.length} auto-sell orders`} first</small>`:``}${y(e)?``:`<br><small class="error">not enough SOL to pay the fee, skipped</small>`}</code></li>`).join(``)}</ul>
           ${x.length?`<p class="muted">${x.join(` `)}</p>`:``}
           ${t===100?`<p class="muted">Afterwards each wallet closes its empty ${Q(l.label)} account and gets its ~0.002 SOL deposit back.</p>`:``}
           ${n?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold other coins keep ${U(fh)} SOL to sell those later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Prices can move while the sales go through one by one.</p>
           ${g.some(y)?`<button id="go" class="primary">Enter PIN and sell</button>`:``}`:`<p class="warning">${r?`${x.join(` `)||`Those wallets don't hold this coin.`}`:`None of your wallets hold this coin.`}</p>`}
    <button id="cancel">Cancel</button>`),J(`mint`).textContent=l.mint,Y(`cancel`,X),g.some(y)){let e=Array.from(document.querySelectorAll(`.sellbox`)),r=()=>e.filter(e=>e.checked).map(e=>g[Number(e.dataset.i)]),i=()=>{let e=r().length;J(`picked`).textContent=`${e} wallet${e===1?``:`s`}`,J(`go`).disabled=e===0};e.forEach(e=>e.addEventListener(`change`,i)),i(),Y(`go`,()=>{let e=r();e.length&&Yp(`Enter your PIN to sell`,r=>Bg(r,l.mint,c,e,t,n,a))})}}async function Bg(e,t,n,r,i,a,o){let s=rm(e,Math.max(...r.map(e=>e.wallet.index))+1),c=e=>e===0?`Main`:`#${e}`;q(`
    <h1>Selling…</h1>
    ${Vt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${r.map(e=>`<li><span>${c(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),Cp();let l=(e,t)=>J(`status-${e}`).innerHTML=t,u=(e,t)=>J(`status-${e}`).innerHTML+=t,d=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,f=0,p=0,m=0,h={jupiter:null};await Eg(r,Mh,async e=>{let r=s[e.wallet.index];if(e.orders?.length)try{l(e.wallet.index,`cancelling the auto-sell order…`);let n=await Lg(r,t,e.orders),a=new Set(e.orders.map(e=>e.order));if(await gg(e=>e.filter(e=>!a.has(e.order))),e.raw=n,e.sell=i===100?n:n*BigInt(Math.round(i*100))/10000n,e.sell<=0n)throw Error(`the coins didn't come back from the order yet; try again in a moment`)}catch(t){l(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`);return}let o=e.orders?.length?void 0:Nh(r.address),c=await t_(e,t,r,i,h,l,d,o);if(c&&f++,i!==100&&!a)return;let g=a&&e.wallet.index!==0;try{let a=0,o=[];for(let n=0;n<5&&([[a],o]=await Promise.all([vu([e.wallet.address]),Wu(e.wallet.address)]),c&&i===100&&!o.every(e=>e.mint!==t||e.raw===0n));n++)await new Promise(e=>setTimeout(e,500));let s=Og(a,o,g);if(!s)return;u(e.wallet.index,`<br><small>${g?`sending to main…`:`getting the deposit back…`}</small>`);let l=await kg(r,n,s);p+=s.send,m+=s.refund,J(`status-${e.wallet.index}`).querySelector(`small:last-of-type`).innerHTML=`${s.send?`sent ${U(s.send)} SOL to main`:`got back ${U(s.refund)} SOL deposit`} · ${d(l,`view`)}`}catch(t){u(e.wallet.index,`<br><small class="error">✗ collecting: ${Q(Z(t))}</small>`)}}),Jd([n.address,...r.map(e=>e.wallet.address)]).catch(()=>{}),s.forEach(e=>e.secret.fill(0)),$t(f?`success`:`error`),f&&await Nn(`PRINTED`),f&&o&&await o().catch(()=>{}),J(`after`).innerHTML=`<p><b>Done: sold in ${f} of ${r.length} wallets.</b>${m?` Got back ${U(m)} SOL in deposits.`:``}${p?` Sent ${U(p)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,a_(),Y(`holdings`,()=>og().catch($)),Y(`home`,X)}var Vg=new Map;function Hg(e){return Vg.has(e)||Vg.set(e,Pd(e)),Vg.get(e)}var Ug=new Map;function Wg(e){return Ug.has(e)||Ug.set(e,fu(e).then(t=>t?.match(/\(([^)]+)\)$/)?.[1]??t??kp(e)).catch(()=>kp(e))),Ug.get(e)}var Gg=[15,30],Kg=21e5,qg=/custom program error: 0x(179a|1798|1774)\b/;async function Jg(e,t){let[n]=await Iu([t]);return Ru(n)}async function Yg(e,t,n){for(let r=0;r<20;r++){let r=await Jg(e,t);if(r!==n)return r;await new Promise(e=>setTimeout(e,400))}return Jg(e,t)}async function Xg(e,t,n,r){try{if(await Yg(e.address,t,r)!==0n)return;await Xu(Su(e,[Vu(t,e.address,e.address,n)],await Ku()))}catch{}}async function Zg(e,t,n,r,i,a){let o=Id(t.address,e,n===`buy`?`coin`:`quote`),s=Id(t.address,e,n===`buy`?`quote`:`coin`),c=n===`buy`?e.quoteProgram:e.mintProgram,l=async a=>Su(t,[...Fd(t.address,e,n,r,a),...i?[Vu(s,t.address,t.address,c)]:[]],await Ku()),u=await Jg(t.address,o);for(let e=0;;e++){let n=Gg[e],r=await Lu(await l(1n),[o]);if(r.err){let e=r.logs.filter(e=>/Error|failed/i.test(e)).slice(-1)[0]??JSON.stringify(r.err);throw Error(`pump.fun turned the trade down before it ran (${e}).`)}let i=Ru(r.accounts[0])-u;if(i<=0n)throw Error(`pump.fun's swap would give nothing back.`);let s=i*BigInt(100-n)/100n||1n;try{let e=await Xu(await l(s)),n=await $u(e);if(n!==`confirmed`)throw Error(`the trade ${n===`failed`?`failed`:`is taking long`} (${e})`);return{signature:e,got:await Yg(t.address,o,u)-u}}catch(t){let n=Gg[e+1];if(!(n&&qg.test(Z(t))))throw t;a(`price jumped, trying again with ${n}% room…`)}}}async function Qg(e,t,n,r){let i=await fo(G,t,n,r.toString(),e.address);if(!i.transaction)throw Error(i.errorMessage??`Jupiter couldn't make that swap.`);let a=t===`So11111111111111111111111111111111111111112`?{sol:Number(r)+kh}:{sol:kh,mint:t,coins:r},o=await po(G,await jh(mo(i.transaction),e,a),i.requestId);if(o.status!==`Success`)throw Error(o.error??`Jupiter's swap didn't go through (code ${o.code}).`);return{signature:o.signature,out:i.outAmount}}async function $g(e,t,n,r,i){let a=Q(await Wg(e.quote)),o=Id(t.address,e,`quote`),s=n-Kg;if(s<mh)return r(`<span class="error">✗ too little SOL for this coin: it's priced in ${a}, which needs an extra ~0.002 SOL account</span>`),!1;let c=await Jg(t.address,o),l;try{r(`this coin is priced in ${a}: swapping ${U(s)} SOL for ${a}…`),l=(await Qg(t,Wa,e.quote,BigInt(s))).signature}catch(e){return r(`<span class="error">✗ couldn't get ${a} to buy with (${Q(Z(e))}). Nothing was bought.</span>`),!1}let u=await Yg(t.address,o,c)-c;if(u<=0n)return r(`<span class="error">✗ the ${a} swap went through but nothing arrived yet · ${i(l,`view`)}</span>`),!1;try{r(`got ${a} · buying the coin on pump.fun…`);let{signature:n}=await Zg(e,t,`buy`,u,c===0n,r);return r(`✓ bought with ${U(s)} SOL (via ${a}) · ${i(l,`swap`)} · ${i(n,`buy`)}`),!0}catch(n){let s=Q(Z(n));try{r(`buy failed, swapping the ${a} back to SOL…`);let n=await Qg(t,e.quote,Wa,u);c===0n&&await Xg(t,o,e.quoteProgram,u),r(`<span class="error">✗ ${s}</span><br><small>Swapped the ${a} back to SOL${n.out?` (~${U(Number(n.out))} SOL)`:``} · ${i(n.signature,`view`)}</small>`)}catch(e){r(`<span class="error">✗ ${s}</span><br><small class="error">This wallet now holds the ${a} it got (${i(l,`view`)}); swapping it back failed too (${Q(Z(e))}). Sell it with "sell ${a}".</small>`)}return!1}}async function e_(e,t,n,r,i){let a=Q(await Wg(e.quote)),o=Id(t.address,e,`quote`),s=await Jg(t.address,o),c;try{r(`this coin is priced in ${a}: selling it for ${a} on pump.fun…`),c=await Zg(e,t,`sell`,n.sell,!1,r)}catch(e){return r(`<span class="error">✗ ${Q(Z(e))}</span>`),!1}try{r(`sold for ${a} · swapping the ${a} to SOL…`);let l=await Qg(t,e.quote,Wa,c.got);return s===0n&&await Xg(t,o,e.quoteProgram,c.got),r(`✓ sold ${Pg(n.sell,n.decimals)}${l.out?` for ~${U(Number(l.out))} SOL`:``} (via ${a}) · ${i(c.signature,`sale`)} · ${i(l.signature,`swap`)}`),!0}catch(e){return r(`✓ sold ${Pg(n.sell,n.decimals)} for ${a} · ${i(c.signature,`view`)}<br><small class="error">Swapping the ${a} to SOL failed (${Q(Z(e))}). This wallet holds it now: sell it with "sell ${a}".</small>`),!0}}async function t_(e,t,n,r,i,a,o,s){try{a(e.wallet.index,`selling…`);let c=null;if(!i.jupiter)try{if(c=await fo(G,t,Wa,e.sell.toString(),n.address),!c.transaction)throw Error(c.errorMessage??`Jupiter couldn't find a way to sell this coin.`)}catch(e){i.jupiter=Z(e),c=null}if(c){let r=await po(G,await jh(mo(c.transaction),n,{sol:kh,mint:t,coins:e.sell},s),c.requestId);if(r.status!==`Success`)throw Error(r.error??`The sale didn't go through (code ${r.code}).`);let i=c.outAmount?` for ~${U(Number(c.outAmount))} SOL`:``;return a(e.wallet.index,`✓ sold ${Pg(e.sell,e.decimals)}${i} · ${o(r.signature,`view`)}`),!0}let l=await Hg(t);if(l)return await e_(l,n,e,t=>a(e.wallet.index,t),o);a(e.wallet.index,`selling through pump.fun…`);let u=r===100?`100%`:Ng(e.sell,e.decimals),d=await i_(e.wallet.index,a,i.jupiter,e=>Oo(n.address,t,u,e),n,()=>({sol:kh,mint:t,coins:r===100?void 0:e.sell}),s),f=await $u(d);return f===`confirmed`?(a(e.wallet.index,`✓ sold ${Pg(e.sell,e.decimals)} via pump.fun · ${o(d,`view`)}`),!0):(a(e.wallet.index,`<span class="error">✗ sale ${f===`failed`?`failed`:`is taking long`}</span> · ${o(d,`check`)}`),!1)}catch(t){return a(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`),!1}}async function n_(e,t,n){if(K(`sellAll:${n?.join(`,`)??``}`,()=>n_(e,t,n)),!G)return q(`
      <h1>Open this from the bot</h1>
      <p>To sell everything, send <b>sell all</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);let r=await cm();if(!r)return X();let[i]=r,a=r.filter(e=>!n||n.includes(e.index));Np(`Checking every coin in every wallet…`);let o=await Qd(a.map(e=>e.address)),s=o.map(e=>e.lamports),c=o.map(e=>e.accounts),l=await Promise.all(o.map(e=>tf(e))),u=new Map;l.flat().forEach(e=>u.set(e.mint,e));let d=new Map,f=0;a.forEach((t,n)=>{let r=new Map;for(let e of c[n]){if(e.raw===0n)continue;let t=r.get(e.mint)??{raw:0n,decimals:e.decimals};t.raw+=e.raw,r.set(e.mint,t)}for(let[i,{raw:a,decimals:o}]of r){if(i===`So11111111111111111111111111111111111111112`)continue;let r=u.get(i);if(r&&Bh(r)){f++;continue}let c=e===100?a:a*BigInt(Math.round(e*100))/10000n;if(c===0n)continue;let l=d.get(i)??{mint:i,label:r?zh(r):kp(i),logo:r?.logo,usd:null,rows:[]};r?.usd!=null&&(l.usd=(l.usd??0)+r.usd),l.rows.push({wallet:t,balance:s[n],raw:a,sell:c,decimals:o}),d.set(i,l)}});let p=[...d.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),m=e=>e===0?`Main`:`#${e}`,h=e=>e.balance>=Rg,g=e=>e.rows.filter(h);if(q(`
    <h1>Sell all coins</h1>
    ${p.length?`<h2>Selling ${e===100?`everything`:`${e}% of each`} · <span id="picked"></span></h2>
           <p class="muted">Every coin is checked. Untick any you want to keep.</p>
           <ul class="list coins">${p.map((e,t)=>{let n=e.rows.filter(e=>!h(e));return`<li><input type="checkbox" class="coinbox" data-i="${t}" ${g(e).length?`checked`:`disabled`}>${Ln(e.label,e.logo)}<div class="grow"><b>${Q(e.label)}</b><small>from ${g(e).map(e=>m(e.wallet.index)).join(`, `)||`no wallet`}${n.length?`</small><small class="error">${n.map(e=>m(e.wallet.index)).join(`, `)}: not enough SOL for the fee, skipped`:``}</small></div><div class="right">${e.usd===null?``:Rh(e.usd)}</div></li>`}).join(``)}</ul>
           ${f?`<p class="muted">${f} junk coin${f===1?``:`s`} left alone: worthless ads strangers send to wallets.</p>`:``}
           ${e===100?`<p class="muted">Afterwards each wallet closes its empty coin accounts and gets their ~0.002 SOL deposits back.</p>`:``}
           ${t?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold coins keep ${U(fh)} SOL to sell them later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Sales go through one at a time, so prices can move along the way.</p>
           <button id="go" class="primary">Enter PIN and sell everything</button>`:`<p class="warning">${n?`Those wallets don't hold any coins.`:`Your wallets don't hold any coins to sell.`}</p>`}
    <button id="cancel">Cancel</button>`),Rn(),Y(`cancel`,X),!p.length)return;let _=Array.from(document.querySelectorAll(`.coinbox`)),v=()=>_.filter(e=>e.checked).map(e=>p[Number(e.dataset.i)]),y=()=>{let e=v().length;J(`picked`).textContent=`${e} coin${e===1?``:`s`}`,J(`go`).disabled=e===0};_.forEach(e=>e.addEventListener(`change`,y)),y(),Y(`go`,()=>{let n=v().map(e=>({...e,rows:g(e)}));n.length&&Yp(`Enter your PIN to sell everything`,r=>r_(r,i,n,e,t))})}async function r_(e,t,n,r,i){let a=[...new Map(n.flatMap(e=>e.rows.map(e=>[e.wallet.index,e.wallet]))).values()].sort((e,t)=>e.index-t.index),o=rm(e,Math.max(...a.map(e=>e.index))+1),s=e=>e===0?`Main`:`#${e}`,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;q(`
    <h1>Selling everything…</h1>
    ${Vt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${n.map((e,t)=>`<h2>${Q(e.label)}</h2><ul class="list">${e.rows.map(e=>`<li><span>${s(e.wallet.index)}</span><code id="status-${t}-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>`).join(``)}
    <div id="cleanup"></div>
    <div id="after"></div>`),Cp();let l=0,u=0,d=0,f=0,p=new Map(n.map(e=>[e.mint,{jupiter:null}])),m=r===100||i;m&&(J(`cleanup`).innerHTML=`<h2>Cleaning up</h2><ul class="list">${a.map(e=>`<li><span>${s(e.index)}</span><code id="clean-${e.index}">waiting</code></li>`).join(``)}</ul>`),await Eg(a,Mh,async e=>{let a=o[e.index],s=n.flatMap((t,n)=>t.rows.filter(t=>t.wallet.index===e.index).map(e=>({coin:t,ci:n,row:e})));for(let[e,{coin:t,ci:n,row:i}]of s.entries()){let o=(e,t)=>J(`status-${n}-${e}`).innerHTML=t;u++;let s=e===0?Nh(a.address):void 0;await t_(i,t.mint,a,r,p.get(t.mint),o,c,s)&&l++}if(!m)return;let h=J(`clean-${e.index}`),g=i&&e.index!==0;try{let n=0,i=[],o=new Set(s.map(e=>e.coin.mint));for(let t=0;t<5&&([[n],i]=await Promise.all([vu([e.address]),Wu(e.address)]),!(r!==100||i.every(e=>!o.has(e.mint)||e.raw===0n)));t++)await new Promise(e=>setTimeout(e,500));let l=Og(n,i,g);if(!l){h.textContent=`nothing to do`;return}h.textContent=g?`sending to main…`:`getting deposits back…`;let u=await kg(a,t,l);d+=l.send,f+=l.refund,h.innerHTML=`${l.send?`sent ${U(l.send)} SOL to main`:`got back ${U(l.refund)} SOL in deposits`} · ${c(u,`view`)}`}catch(e){h.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),Jd([t.address,...a.map(e=>e.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),$t(l?`success`:`error`),l&&await Nn(`PRINTED`),J(`after`).innerHTML=`<p><b>Done: ${l} of ${u} sales went through.</b>${f?` Got back ${U(f)} SOL in deposits.`:``}${d?` Sent ${U(d)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,a_(),Y(`holdings`,()=>og().catch($)),Y(`home`,X)}async function i_(e,t,n,r,i,a,o){for(let s=0;;s++){let{slippage:c,share:l}=Eo[s],u;try{u=await r(c,l)}catch(e){throw Error(`${n} · ${Z(e)}`)}try{return await Xu(await jh(u,i,a(c),s===0?o:void 0))}catch(r){if(/custom program error: 0x17af\b/.test(Z(r)))throw Error(`Nothing was spent. This coin is priced in another coin (like PUMP) instead of SOL, and pump.fun's SOL route can't buy or sell it. Jupiter couldn't either (${n??`no route`}). Try again later, once Jupiter lists it, or trade it on pump.fun itself.`);let i=Eo[s+1];if(!(r instanceof Yu&&r.slippage&&i))throw r;t(e,`price jumped, trying again with ${i.slippage}% room…`)}}}function a_(){document.querySelectorAll(`.tx:not([data-bound])`).forEach(e=>{e.dataset.bound=`1`,e.addEventListener(`click`,t=>{t.preventDefault(),tn(nd(e.dataset.sig))})})}function Q(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var o_=4;function s_(e){return e.index===0?`Main`:`#${e.index}`}function c_(e,t){let n=Math.min(t,20),[r,i=``]=e.toFixed(n).split(`.`);return BigInt(r+i)*10n**BigInt(t-n)}function l_(e,t){q(`
    <h1>${Q(e)}</h1>
    <p class="warning">${t}</p>
    <button id="home" class="primary">Back to my wallets</button>`),Y(`home`,X)}async function u_(e,t){K(`send:${JSON.stringify(e)}`,()=>u_(e,t));let n=await cm();if(!n)return X();let[r]=n,i;if(/^\d+$/.test(e.to)){let t=n[Number(e.to)];if(!t)return l_(`No such wallet`,`You don't have #${Q(e.to)}. Your wallets go from main to #${n.length-1}.`);i={address:t.address,label:s_(t),mine:t}}else{let t=n.find(t=>t.address===e.to);if(t)i={address:t.address,label:s_(t),mine:t};else{if(!Mg(e.to)||!Du(e.to))return l_(`Not a wallet address`,`That address can't receive SOL or coins: it isn't a normal wallet. Nothing was sent.`);Np(`Checking the address…`);let t=await Pu(e.to);if(t&&t.owner!==`11111111111111111111111111111111`)return l_(`Not a wallet address`,`That address belongs to a coin or a program, not a person's wallet. Anything sent there would be lost, so nothing was sent.`);i={address:e.to,label:kp(e.to),mine:null}}}let a=e.what===`sol`?`sol`:e.what===`*`?`all`:`coin`,o=[],s=n.filter(t=>t!==i.mine&&(!e.only||e.only.includes(t.index))&&!(e.side&&t.index===0));if(e.only){let t=e.only.filter(e=>e>=n.length);t.length&&o.push(`You don't have ${t.map(e=>`#${e}`).join(`, `)}.`)}else a===`sol`&&e.amount!==null&&i.mine?.index!==0&&!e.side&&(s=[r]);if(!s.length)return l_(`Nothing to send from`,`There's no other wallet to send from.`);let c=t;if(a===`coin`&&!c){Np(Mg(e.what)?`Finding the coin in your wallets…`:`Looking for ${Q(e.what)} in your wallets…`);let t=await Fg(e.what,n);if(!t.length)return l_(`Coin not found`,`None of your wallets hold a coin called <b>${Q(e.what)}</b>. Check the name in <b>holdings</b>, or use the coin's address.`);if(t.length>1)return q(`
        <h1>Which ${Q(e.what)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${t.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${kp(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(n=>n.addEventListener(`click`,()=>u_(e,t[Number(n.dataset.i)]).catch($))),Y(`home`,X);c=t[0]}Np(`Checking what each wallet holds…`);let[l,[u]]=await Promise.all([Qd(s.map(e=>e.address)),vu([i.address])]),d=l.map(e=>e.lamports),f=l.map(e=>e.accounts),p=a===`all`?await Promise.all(l.map(e=>tf(e))):[],m=new Map;p.flat().forEach(e=>m.set(e.mint,e));let h=new Set([...m.values()].filter(Bh).map(e=>e.mint)),g=e=>f[e].some(e=>e.raw>0n&&!h.has(e.mint)),_=s.map((e,t)=>({wallet:e,balance:d[t],coins:[],sol:0,allSol:!1,skipped:[]}));if(a!==`sol`){if(_.forEach((t,n)=>{for(let r of f[n]){if(r.raw===0n||h.has(r.mint)||c&&r.mint!==c.mint)continue;let n=m.get(r.mint),i=e.pct?r.raw*BigInt(Math.round(e.pct*100))/10000n:r.raw;i>0n&&t.coins.push({account:r,amount:i,label:c?.label??(n?zh(n):kp(r.mint)),opens:0})}}),a===`coin`&&e.amount!==null){let t=_.flatMap(e=>e.coins.map(t=>({r:e,c:t}))).sort((e,t)=>t.c.account.raw>e.c.account.raw?1:-1),n=t[0]?.c.account.decimals??0,r=c_(e.amount,n),i=t.reduce((e,t)=>e+t.c.account.raw,0n);if(r>i)return l_(`Not enough coins`,`${e.only?`Those wallets`:`Your wallets`} hold ${Pg(i,n)} ${Q(c.label)}, less than the ${Lh(e.amount)} you asked to send. Nothing was sent.`);for(let{r:e,c:n}of t)n.amount=r<n.account.raw?r:n.account.raw,r-=n.amount,n.amount===0n&&(e.coins=e.coins.filter(e=>e!==n))}let t=new Map;for(let e of _)for(let n of e.coins)t.set(n.account.mint,Au(i.address,n.account.mint,n.account.program));let n=[...t.keys()],r=n.length?await vu(n.map(e=>t.get(e))):[],o=new Set(n.filter((e,t)=>r[t]>0));for(let e of _){for(let t of e.coins)o.has(t.account.mint)||(t.opens=t.account.lamports,o.add(t.account.mint));let t=Math.ceil(e.coins.length/o_),n=e.coins.slice(0,o_).reduce((e,t)=>e+t.opens,0);e.coins.length&&e.balance<n+t*5e3&&(e.skipped.push(`not enough SOL to move its coins (needs about ${U(n+t*Ul)} SOL to open the coin's account at ${Q(i.label)}, has ${U(e.balance)})`),e.coins=[])}}let v=e=>{let t=Math.ceil(e.coins.length/o_),n=e.coins.reduce((e,t)=>e+(t.amount===t.account.raw?t.account.lamports:0),0);return e.balance-t*Ul-e.coins.reduce((e,t)=>e+t.opens,0)+n};if(a===`sol`||a===`all`){if(_.forEach((t,n)=>{let r=(a===`sol`||t.skipped.length>0)&&g(n),i=r?fh:0,o=v(t)-Ul-i;if(o<=0){a===`sol`&&r&&t.balance>5e3&&t.skipped.push(`keeps its ${U(t.balance)} SOL: it holds coins and needs ${U(fh)} SOL to sell them`);return}let s=e.pct?Math.floor(o*e.pct/100):o;e.pct&&v(t)-5e3-s<Math.max(890880,i)&&(s=v(t)-Ul-Math.max(Wl,i)),s>=5e4&&(t.sol=s),t.allSol=!e.pct&&e.amount===null}),a===`sol`&&e.amount!==null){let t=Math.round(e.amount*H),n=[..._].sort((e,t)=>t.sol-e.sol),r=n.reduce((e,t)=>e+t.sol,0);if(t>r)return l_(`Not enough SOL`,`${s.length===1?s_(s[0]):`Those wallets`} can send at most ${U(r)} SOL after fees${_.some((e,t)=>g(t))?` (wallets holding coins keep ${U(fh)} SOL to sell them)`:``}. Nothing was sent.`);for(let e of n){let n=Math.min(t,e.sol),r=e.balance-Ul-n;n>0&&r>0&&r<890880&&(n=Math.max(0,e.balance-Ul-Wl)),e.sol=n,t-=n}if(t>0)return l_(`Can't send that exact amount`,`Solana makes a wallet keep at least ${U(Wl)} SOL or nothing at all, so that amount doesn't fit. Try a slightly smaller amount, or "all". Nothing was sent.`)}let t=u;for(let e of[..._].sort((e,t)=>t.sol-e.sol))e.sol&&(t+e.sol<890880?(e.skipped.push(`its ${U(e.sol)} SOL is too little to start an empty wallet (Solana needs ${U(Wl)} SOL)`),e.sol=0):t+=e.sol)}let y=_.filter(e=>e.coins.length||e.sol),b=_.filter(e=>e.coins.length||e.sol||e.skipped.length),x=y.reduce((e,t)=>e+t.sol,0),S=y.reduce((e,t)=>e+t.coins.reduce((e,t)=>e+t.opens,0),0),C=a===`sol`?e.amount===null?e.pct?`Send ${e.pct}% of the SOL`:`Send all the SOL`:`Send ${Lh(e.amount)} SOL`:a===`all`?`Send everything`:`Send ${e.amount===null?e.pct?`${e.pct}% of `:`all `:Lh(e.amount)+` `}${Q(c.label)}`,w=e=>{let t=e.coins.slice(0,3).map(e=>`${Pg(e.amount,e.account.decimals)} ${Q(e.label)}`);return e.coins.length>3&&t.push(`${e.coins.length-3} more coin${e.coins.length===4?``:`s`}`),t.join(`<br>`)},T=a===`all`?_.reduce((e,t,n)=>e+f[n].filter(e=>e.raw>0n&&h.has(e.mint)).length,0):0;q(`
    <h1>${C}</h1>
    <div class="card"><div class="label">To ${Q(i.label)}${i.mine?.name?` · ${Q(i.mine.name)}`:``}</div><div class="address" id="dest"></div></div>
    ${i.mine?``:`<p class="warning">This isn't one of your wallets. Check every letter of the address: sends can't be undone.</p>`}
    ${b.length?`<ul class="list">${b.map(e=>`<li><span>${s_(e.wallet)}</span><code>${[w(e),e.sol?`${U(e.sol)} SOL`:``].filter(Boolean).join(`<br>`)||`nothing`}${e.skipped.length?`<br><small class="error">${e.skipped.join(`<br>`)}</small>`:``}</code></li>`).join(``)}</ul>`:``}
    ${y.length&&x?`<p><b>SOL to ${Q(i.label)}: ${U(x)}</b></p>`:``}
    ${o.length?`<p class="muted">${o.join(` `)}</p>`:``}
    ${S?`<p class="muted">${Q(i.label)} doesn't have an account for some of these coins yet. Opening one costs about 0.002 SOL each (${U(S)} SOL in all), paid by the sending wallet. Emptied coin accounts are closed, so senders get their own deposits back.</p>`:``}
    ${a===`sol`&&e.amount===null?`<p class="muted">Wallets that still hold coins keep ${U(fh)} SOL so they can sell them later.</p>`:``}
    ${T?`<p class="muted">${T} junk coin${T===1?``:`s`} left behind: worthless ads strangers send to wallets.</p>`:``}
    ${y.length?`<button id="go" class="primary">Enter PIN and send</button>`:`<p class="warning">There's nothing to send${b.length?` (see above)`:e.only?` from those wallets`:``}.</p>`}
    <button id="cancel">Cancel</button>`),J(`dest`).textContent=i.address,Y(`cancel`,X),y.length&&Y(`go`,()=>Yp(`Enter your PIN to send`,e=>d_(e,i,y,h,u).catch($)))}async function d_(e,t,n,r,i){let a=rm(e,Math.max(...n.map(e=>e.wallet.index))+1);q(`
    <h1>Sending to ${Q(t.label)}…</h1>
    ${Vt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${s_(e.wallet)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),Cp();let o=e=>J(`status-${e.wallet.index}`),s=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,c=async e=>{let t=await Xu(e),n=await $u(t);if(n!==`confirmed`)throw Error(`${n===`failed`?`failed`:`is taking long`} (${t})`);return t},l=0,u=0,d=async e=>{let n=a[e.wallet.index],i=[],d=!0;try{for(let r=0;r<e.coins.length;r+=o_){let a=e.coins.slice(r,r+o_);o(e).innerHTML=[...i,`sending ${a.map(e=>Q(e.label)).join(`, `)}…`].join(`<br>`);let l=a.flatMap(e=>{let r=Au(t.address,e.account.mint,e.account.program);return[Mu(n.address,r,t.address,e.account.mint,e.account.program),Nu(e.account,r,n.address,e.amount),...e.amount===e.account.raw?[Tu(e.account,n.address,n.address)]:[]]}),u=await c(Su(n,l,await Ku()));i.push(`✓ ${a.map(e=>`${Pg(e.amount,e.account.decimals)} ${Q(e.label)}`).join(`, `)} · ${s(u)}`)}if(e.sol){o(e).innerHTML=[...i,`sending SOL…`].join(`<br>`);let a,l=e.sol,[[d,f],p]=await Promise.all([vu([n.address,t.address]),Wu(n.address)]);if(e.allSol){let e=Og(d,p,!0,r);if(!e||!e.send)throw Error(`no SOL left to send`);if(f+e.send<890880)throw Error(`${U(e.send)} SOL is too little to start an empty wallet`);l=e.send,a=await kg(n,t,e)}else{if(d<l+5e3)throw Error(`only ${U(d)} SOL there now`);a=await c(Su(n,[wu(n.address,t.address,l)],await Ku()))}u+=l,i.push(`✓ ${U(l)} SOL · ${s(a)}`)}}catch(e){d=!1,i.push(`<span class="error">✗ ${Q(Z(e))}</span>`)}o(e).innerHTML=i.join(`<br>`),a_(),d&&l++},f=[...n].filter(e=>e.sol).sort((e,t)=>t.sol-e.sol)[0],p=n.filter(e=>e.coins.some(e=>e.opens>0)||e===f&&i<890880);await Eg(p,Mh,d),await Eg(n.filter(e=>!p.includes(e)),Mh,d),Jd([t.address,...n.map(e=>e.wallet.address)]).catch(()=>{}),a.forEach(e=>e.secret.fill(0)),$t(l?`success`:`error`),l&&await Nn(`SENT`),J(`after`).innerHTML=`<p><b>Done: ${l} of ${n.length} wallet${n.length===1?``:`s`} sent.</b>${u?` ${U(u)} SOL went to ${Q(t.label)}.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,a_(),Y(`holdings`,()=>og().catch($)),Y(`home`,X)}function f_(){K(`remove`,f_),q(`
    <h1>Remove wallets from this phone?</h1>
    <p class="warning">If you haven't written down your 12 words, any money in these wallets will be lost forever.</p>
    <p>Type <b>REMOVE</b> to confirm.</p>
    <input id="confirm" autocapitalize="characters" autocomplete="off">
    <p id="error" class="error" hidden></p>
    <button id="yes" class="danger">Remove</button>
    <button id="no" class="primary">Keep my wallets</button>`),Y(`no`,X),Y(`yes`,async()=>{if(J(`confirm`).value.trim()!==`REMOVE`)return Ap(`Type REMOVE to confirm.`);await qf(Vf),await j.remove(Hf),await qf(Uf),await j.remove(Jf),lm(),Xp=[],Fp()})}function $(e){console.error(e);let t=e instanceof Error?e.message:String(e);q(`
    <h1>Something went wrong</h1>
    <p>Please send a screenshot of this screen to the bot's owner.</p>
    <pre class="details"></pre>
    <button id="retry" class="primary">Start over</button>`),document.querySelector(`.details`).textContent=`${t}\nTelegram ${A?.version??`?`} on ${A?.platform??`?`}`,Y(`retry`,()=>Fp().catch($))}window.addEventListener(`unhandledrejection`,e=>$(e.reason)),window.addEventListener(`error`,e=>$(e.error??e.message));var p_=`showUsd`,m_=!1,h_=null,g_=new Map,__=(e,t,n=``)=>`<span class="coinamt" data-mint="${e}" data-amt="${t}">${Lh(t)}${n}</span>`;function v_(e,t){t>0&&g_.get(e)!==t&&(g_.set(e,t),m_&&C_())}var y_=/(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?\s?SOL\b(?: · \$[\d,]+(?:\.\d+)?)?/g,b_=`button, input, textarea, a, .keypad, .amountbox, .solamt, .coinamt, .pnl, script, style`,x_=e=>e<.01&&e>0?`$${e.toFixed(4)}`:Rh(e);function S_(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];for(let e=t.nextNode();e;e=t.nextNode()){let t=e;t.data.includes(`SOL`)&&!t.parentElement?.closest(b_)&&n.push(t)}for(let e of n){let t=e.data,n=[],r=0;for(let e of t.matchAll(y_)){let i=t[e.index-1];if(i&&/[\w$.]/.test(i))continue;n.push(t.slice(r,e.index));let a=document.createElement(`span`);a.className=`solamt`,a.dataset.sol=(e[1]+(e[2]??``)).replace(/,/g,``),a.dataset.orig=e[0],a.textContent=e[0],n.push(a),r=e.index+e[0].length}n.length&&(n.push(t.slice(r)),e.replaceWith(...n))}}function C_(){S_(pp),document.querySelectorAll(`.solamt`).forEach(e=>{let t=Number(e.dataset.sol);e.dataset.orig??=`${U(t*H)} SOL`;let n=m_&&h_?x_(t*h_):e.dataset.shown===`usd`?e.dataset.orig:null;n!==null&&e.textContent!==n&&(e.textContent=n),e.dataset.shown=m_&&h_?`usd`:`sol`,e.classList.toggle(`usd`,m_&&!!h_)}),document.querySelectorAll(`.coinamt`).forEach(e=>{let t=g_.get(e.dataset.mint),n=m_&&!!t;e.dataset.orig??=e.textContent??``;let r=n?x_(Number(e.dataset.amt)*t):e.dataset.shown===`usd`?e.dataset.orig:null;r!==null&&e.textContent!==r&&(e.textContent=r),e.dataset.shown=n?`usd`:`coin`,e.classList.toggle(`usd`,n)})}function w_(e){e&&e!==h_&&(h_=e,m_&&C_())}async function T_(){G&&w_(await vp(!0)??(await yo(G,[`So11111111111111111111111111111111111111112`],!0)).get(`So11111111111111111111111111111111111111112`)??null)}function E_(){let e=!1;new MutationObserver(()=>{e||(e=!0,queueMicrotask(()=>{e=!1,C_()}))}).observe(pp,{childList:!0,subtree:!0,characterData:!0}),pp.addEventListener(`click`,async e=>{let t=e.target.closest?.(`.solamt, .coinamt`);if(t){if(e.preventDefault(),e.stopPropagation(),h_||await T_().catch(()=>{}),!(t.classList.contains(`coinamt`)?g_.has(t.dataset.mint):h_)&&!m_)return $t(`error`);M(),m_=!m_,C_(),j.set(p_,m_?`1`:``).catch(()=>{})}},!0),qt()&&(j.get(p_).then(async e=>{e===`1`&&(m_=!0,await T_(),C_())}).catch(()=>{}),setInterval(()=>{m_&&!document.hidden&&T_().catch(()=>{})},6e4))}rp||(E_(),Fp().catch($));