var e=1024,t=2157,n={base:0,plate:2157,coins:4314,mask:{y:4486,w:512,h:1079}},r=[{sx:0,w:70,h:100,x:440,y:1095},{sx:70,w:48,h:144,x:465,y:1264},{sx:118,w:104,h:172,x:297,y:1401},{sx:222,w:46,h:150,x:388,y:1463},{sx:268,w:82,h:144,x:565,y:1462},{sx:350,w:86,h:150,x:492,y:1568},{sx:436,w:60,h:96,x:613,y:1384},{sx:496,w:66,h:116,x:335,y:1692}],i=[0,240,255],a=[255,43,214],o=[57,255,136],s=[255,59,107],c=[255,184,0],l=[i,a,o,s],u=(e,t=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${t})`;function d(e){let t=(e%4+4)%4,n=Math.floor(t),r=t-n,i=l[n],a=l[(n+1)%4];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}var f=`01$#%&@*+=<>?/\\|{}[];:~^`,p=e=>`700 ${e}px ui-monospace, Menlo, Consolas, "DejaVu Sans Mono", monospace`,m=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296},h=(e,t=0)=>{let n=Math.floor(e),r=e-n,i=r*r*(3-2*r),a=m(n+t*7919);return(a+(m(n+1+t*7919)-a)*i)*2-1},g=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),_=(e,t,n)=>{let r=g((n-e)/(t-e));return r*r*(3-2*r)},v=e=>1-(1-g(e))**3,y=e=>(e=g(e),e<.5?4*e*e*e:1-(-2*e+2)**3/2),b=(e,t)=>Object.assign(document.createElement(`canvas`),{width:e,height:t}),x={x:462,y:740,rx:222,ry:400},S={x:462,y:900,z:-30},C=175,w=58,T={x0:345,x1:624,y0:622,y1:834},E={x:362,y:664,w:246,h:142,r:18},ee=2400,te={x:772,y:1445,rx:112,ry:142},D={x:762,y:1592},ne=70,re={x:838,y:1618},ie={x:727,y:1437,rx:32,ry:72},ae=[{x:40,y:112,w:450,h:140},{x:30,y:252,w:218,h:400}],oe=13,se={x:818,y:108,w:184,h:395},ce=[[735,1310],[790,1316],[830,1333],[851,1325],[868,1343],[867,1386],[852,1421],[850,1500],[842,1550],[832,1588],[862,1600],[882,1640],[890,1750],[888,1850],[882,1930],[874,2012],[840,2033],[798,2022],[790,1942],[780,1904],[700,1908],[678,1882],[638,1862],[622,1800],[626,1650],[643,1603],[688,1583],[676,1550],[670,1480],[670,1400],[683,1348],[703,1322]],le=r.map(e=>({...e,cx:e.x+e.w/2,cy:e.y+e.h/2,rx:(e.w-16)/2,ry:(e.h-16)/2})),ue=[5,2,4,3,6,1,0,7],de=.75,fe={x:518,y:1010},O={x0:400,x1:614,y0:836,y1:1962,cw:13,ch:17},pe=Math.floor((O.x1-O.x0)/O.cw),me=Math.floor((O.y1-O.y0)/O.ch),he={x:380,y:816,w:254,h:1166},ge=14,_e=18,ve=`01$#%&@*+=<>?/\\|{}[];:~^ABCDEFXYZ27`,ye=35,be=.75,xe=Math.round(e*be),Se=Math.round(t*be),Ce=null,we=!1,Te=0,Ee=null,De=[],Oe=null,ke=new Float32Array(pe*me),Ae=null,je=null,Me=null,Ne=[],Pe=[];function Fe(){if(Ce||Date.now()<Te)return;let e=new Image;Ce=e,e.onerror=()=>{Ce===e&&(Ce=null),Te=Date.now()+2e3},e.onload=()=>{try{Le(e),we=!0}catch{Ce===e&&(Ce=null),Te=Date.now()+2e3}},e.src=`./hacker-2.webp`}var Ie=Fe;function Le(e){Ee=b(xe,Se);let t=Ee.getContext(`2d`,{willReadFrequently:!0});t.drawImage(e,0,n.mask.y,n.mask.w,n.mask.h,0,0,xe,Se);let r=t.getImageData(0,0,xe,Se),i=[{x0:xe,y0:Se,x1:0,y1:0},{x0:xe,y0:Se,x1:0,y1:0}],a=1250*be;for(let e=0;e<Se;e++)for(let t=0;t<xe;t++){let n=(e*xe+t)*4,o=r.data[n];if(r.data[n+3]=o,r.data[n]=r.data[n+1]=r.data[n+2]=0,o>2){let n=i[e<a?0:1];t<n.x0&&(n.x0=t),e<n.y0&&(n.y0=e),t>n.x1&&(n.x1=t),e>n.y1&&(n.y1=e)}}t.putImageData(r,0,0),De=i.filter(e=>e.x1>e.x0).map(e=>({x:e.x0/be-4,y:e.y0/be-4,w:(e.x1-e.x0)/be+8,h:(e.y1-e.y0)/be+8}));for(let t of le){let r=b(t.w,t.h),i=r.getContext(`2d`,{willReadFrequently:!0});i.drawImage(e,t.sx,n.coins,t.w,t.h,0,0,t.w,t.h);let a=i.getImageData(0,0,t.w,t.h),o=new Float32Array(t.w*t.h),s=new Float32Array(t.w*t.h);for(let e=0;e<t.h;e++)for(let n=0;n<t.w;n++){let r=(n-t.w/2)/(t.rx+4),i=(e-t.h/2)/(t.ry+4);o[e*t.w+n]=1-_(.88,1.08,Math.sqrt(r*r+i*i));let a=m(Math.floor(n/3)*131+Math.floor(e/3)*977+t.cx),c=m(Math.floor(n/7)*71+Math.floor(e/7)*313+t.cy);s[e*t.w+n]=g(.32*a+.18*c+.5*(e/t.h))}Ne.push({src:a,work:i.createImageData(t.w,t.h),a:o,n:s,cv:r,edge:b(t.w,t.h),p:0,drawnP:-1})}let s=[[436,836],[600,836],[600,1e3],[593,1300],[596,1600],[606,1800],[614,1962],[398,1962],[414,1800],[440,1600],[452,1300],[452,1e3]],c=he,l=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});l.shadowColor=`#fff`,l.shadowBlur=18,l.shadowOffsetX=4e3,l.fillStyle=`#fff`,l.beginPath(),s.forEach(([e,t],n)=>n?l.lineTo(e-c.x-4e3,t-c.y):l.moveTo(e-c.x-4e3,t-c.y)),l.closePath(),l.fill();let d=l.getImageData(0,0,c.w,c.h);Oe=b(c.w,c.h);let f=Oe.getContext(`2d`),h=f.createImageData(c.w,c.h);for(let e=0;e<c.w*c.h;e++)h.data[e*4+3]=d.data[e*4+3]*.58;f.putImageData(h,0,0);let v=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});v.drawImage(e,c.x,n.base+c.y,c.w,c.h,0,0,c.w,c.h);let y=v.getImageData(0,0,c.w,c.h).data,x=[];for(let e=0;e<pe;e++)for(let t=0;t<me;t++){let n=0,r=0;for(let i=0;i<O.ch;i+=2)for(let a=0;a<O.cw;a+=2)n+=y[((O.y0+t*O.ch+i-c.y)*c.w+(O.x0+e*O.cw+a-c.x))*4],r++;let i=Math.round(O.x0+e*O.cw+O.cw/2-c.x),a=Math.round(O.y0+t*O.ch+O.ch/2-c.y),o=n/r/255*(d.data[(a*c.w+i)*4+3]/255);ke[e*me+t]=o,x.push(o)}x.sort((e,t)=>e-t);let S=x[Math.floor(x.length*.95)]||1;for(let e=0;e<ke.length;e++)ke[e]=g(ke[e]/S)**.85;let C=e=>{let t=b(490,_e),n=t.getContext(`2d`);n.font=p(15),n.textAlign=`center`,n.textBaseline=`middle`,n.shadowColor=e,n.shadowBlur=4,n.fillStyle=e;for(let e=0;e<ye;e++)n.fillText(ve[e],e*ge+ge/2,10);return t};Ae=C(`rgb(235,255,245)`),je=C(u(o)),Me=C(`rgb(90,235,255)`);for(let e=0;e<3;e++){let t=b(180,390),n=t.getContext(`2d`),r=n.createImageData(180,390);for(let t=0;t<r.data.length;t+=4)r.data[t]=r.data[t+1]=r.data[t+2]=m(t+e*99991)*255,r.data[t+3]=255;n.putImageData(r,0,0),Pe.push(t)}}var k=0,Re=-10,ze=[],Be=le.map(()=>-1),Ve=0,He=`RUN`;function Ue(){Re=k,He=`RUN`,ze=[],Be.fill(-1),Ve=0;for(let e of Ne)e.drawnP=-1}function We(){ze.push(k),ze.length>12&&ze.shift(),Ve<ue.length&&(Be[ue[Ve++]]=k)}var Ge=e=>Be[e]<0?0:g((k-Be[e])/de),Ke=(e,t,n=0)=>{let r=0;for(let i of ze)r+=Math.exp(-(((e-i-n)/t)**2));return r},qe=e=>.17*h(e*.27,1)+.04*h(e*.71,2)+.014*h(e*1.3,3)+.006*h(e*4.1,4);function Je(e){let t=qe(e),n=Ke(e,.14,.05),r=.06+.05*h(e*.23,5)+.012*h(e*1.1,6)+.006*Math.sin(e*11)*Math.max(0,h(e*.31,7))+.025*n,i=.2*t+.02*h(e*.25,8)+.01*h(e*.9,9),a=Math.sin(2*Math.PI*e/3.4)+.25*h(e*.7,5),o=5*Math.sin(2*Math.PI*e/7.3+.6)+2*h(e*.5,6),s=-.9*qe(e-.3)+.06*h(e*.2,10),c=.3*s+.012*h(e*1.6,7);return{yaw:t,pitch:r,roll:i,breath:a,sway:o,rLook:s,rTilt:c,rBob:4*Math.sin(e*2*Math.PI*.62)+5*Ke(e,.12,.12),rArm:.035*Math.sin(e*2*Math.PI*.31+1)+.02*h(e*1.2,8),cy:Math.cos(t),sy:Math.sin(t),cp:Math.cos(r),sp:Math.sin(r),cr:Math.cos(i),sr:Math.sin(i),cl:Math.cos(s),sl:Math.sin(s),ct:Math.cos(c),st:Math.sin(c)}}var Ye=(e,t)=>_(T.x0,T.x0+12,e)*(1-_(T.x1-12,T.x1,e))*_(T.y0,T.y0+12,t)*(1-_(T.y1-12,T.y1,t)),Xe=(e,t,n,r,i,a,o)=>_(n-o,n+o,e)*(1-_(i-o,i+o,e))*_(r-o,r+o,t)*(1-_(a-o,a+o,t));function Ze(e,n,r,i,a=!0){let o=e,s=n,c=0,l=(e-x.x)/x.rx,u=(n-x.y)/x.ry,d=Math.sqrt(l*l+u*u),f=a?1-_(.7,1,d):0;if(f>1e-4){let t=(e-(T.x0+T.x1)/2)/((T.x1-T.x0)/2),i=C*Math.sqrt(Math.max(0,1-d*d))+w*Ye(e,n)*(1+.4*(1-t*t)),a=e-S.x,l=n-S.y,u=i-S.z,p=a*r.cy+u*r.sy,m=-a*r.sy+u*r.cy,h=l*r.cp+m*r.sp,g=-l*r.sp+m*r.cp,_=p*r.cr-h*r.sr+S.x,v=p*r.sr+h*r.cr+S.y,y=g+S.z,b=ee/(ee-y),E=ee/(ee-i);o+=f*((_-x.x)*b-(e-x.x)*E),s+=f*((v-x.y)*b-(n-x.y)*E),c=f*y}let p=Math.max(a?1-_(.85,1.08,d):0,(1-_(600,660,e))*_(880,1020,n));if(p>1e-4){let i=(t-n)/t;s-=p*i*5.5*r.breath,o+=p*i*r.sway,o+=p*_(950,1300,n)*(1-_(1500,1900,n))*(e-330)*.004*r.breath}if(a&&e>600&&n>1280){let t=(e-te.x)/te.rx,i=(n-te.y)/te.ry,a=Math.sqrt(t*t+i*i),l=1-_(.86,1.1,a),u=Math.max(l,Xe(e,n,628,1560,902,2035,22));if(u>1e-4){let t=e,i=n,d=0,f=Xe(e,n,806,1600,898,2030,18)*(1-l);if(f>1e-4){let e=r.rArm*f*_(1600,1700,n),a=t-re.x,o=i-re.y;t=re.x+a*Math.cos(e)-o*Math.sin(e),i=re.y+a*Math.sin(e)+o*Math.cos(e)}if(l>1e-4){let e=ne*Math.sqrt(Math.max(0,1-a*a)),n=t-te.x;t+=l*(n*r.cl+e*r.sl-n),d=l*(-n*r.sl+e*r.cl);let o=t-D.x,s=i-D.y,c=l>=.999?r.ct:Math.cos(r.rTilt*l),u=l>=.999?r.st:Math.sin(r.rTilt*l);t=D.x+o*c-s*u,i=D.y+o*u+s*c}i+=r.rBob*(l>0?1:.4)*_(2040,1500,n)*u,o+=t-e,s+=i-n,c=Math.max(c,d)}}i[0]=o,i[1]=s,i[2]=c}function Qe(n,r,i){let a=r/2/n.s+8/n.s,o=i/2/n.s+8/n.s;return n.cx=g(n.cx,Math.min(a,e/2),Math.max(e-a,e/2)),n.cy=g(n.cy,Math.min(o,t/2),Math.max(t-o,t/2)),n}function $e(n,r){let i=Math.max(n/e,r/t)*1.01,a=y((k-Re-.8)/7),o=n/390;return Qe({s:i*(1+.45*a)*(1+.012*Ke(k,.1)),cx:512+36*a,cy:t/2+(925-t/2)*a,ox:(1.3*h(k*.8,11)+.45*h(k*3.1,12))*o,oy:(1.3*h(k*.7,13)+.45*h(k*2.9,14))*o,rot:.0025*h(k*.6,15)},n,r)}var et=[0,0,0];function tt(n,r,i,a){let o=Math.max(n/e,r/t)*1.01,s=n*.68/E.w;Ze(E.x+E.w/2,E.y+E.h/2,a,et);let c=Math.random()<.12?(Math.random()-.5)*4*(n/390):0;return Qe({s:o+(s-o)*i,cx:e/2+(et[0]-e/2)*i,cy:t/2+(et[1]+150-t/2)*i,ox:c,oy:0,rot:0},n,r)}var nt=null,rt=!1;function it(){if(nt||rt)return nt;try{let n=b(2,2),r=n.getContext(`webgl`,{alpha:!1,antialias:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!1})??n.getContext(`experimental-webgl`);if(!r)throw Error(`no WebGL`);let i=(e,t)=>{let n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(r.getShaderInfoLog(n)??`shader`);return n},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,`attribute vec3 aPos; attribute vec2 aUV; uniform vec2 uRes; varying vec2 vUV;
      void main(){ vUV=aUV; vec2 c=aPos.xy/uRes*2.0-1.0; gl_Position=vec4(c.x,-c.y,clamp(-aPos.z/3000.0,-0.99,0.99),1.0); }`)),r.attachShader(a,i(r.FRAGMENT_SHADER,`precision mediump float; varying vec2 vUV; uniform sampler2D uTex; uniform float uGain;
      void main(){ vec4 c=texture2D(uTex,vUV); gl_FragColor=vec4(c.rgb*uGain,c.a); }`)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`link`);r.useProgram(a);let o=(e,t,n,i,a,o)=>{let s=(a+1)*(o+1),c=new Float32Array(s*2),l=new Float32Array(s*2),u=0;for(let r=0;r<=o;r++)for(let s=0;s<=a;s++,u++)c[u*2]=e+n*s/a,c[u*2+1]=t+i*r/o,l[u*2]=s/a,l[u*2+1]=r/o;let d=new Uint16Array(a*o*6);u=0;for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t,r=n+a+1;d.set([n,n+1,r,n+1,r+1,r],u),u+=6}let f={n:s,art:c,pos:new Float32Array(s*3),count:d.length,posBuf:r.createBuffer(),uvBuf:r.createBuffer(),idxBuf:r.createBuffer()};return r.bindBuffer(r.ARRAY_BUFFER,f.uvBuf),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,f.posBuf),r.bufferData(r.ARRAY_BUFFER,f.pos.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,f.idxBuf),r.bufferData(r.ELEMENT_ARRAY_BUFFER,d,r.STATIC_DRAW),f},s=()=>{let e=r.createTexture();return r.bindTexture(r.TEXTURE_2D,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),e};nt={c:n,gl:r,aPos:r.getAttribLocation(a,`aPos`),aUV:r.getAttribLocation(a,`aUV`),uRes:r.getUniformLocation(a,`uRes`),uGain:r.getUniformLocation(a,`uGain`),pic:o(0,0,e,t,Math.round(e/8),Math.round(t/8)),glass:o(E.x,E.y,E.w,E.h,48,28),texPic:s(),texBack:s(),texHud:s()},n.addEventListener(`webglcontextlost`,()=>{nt=null,rt=!0})}catch{nt=null,rt=!0}return nt}function at(e,t,n,r,i,a,o,s){let c=Math.cos(r.rot),l=Math.sin(r.rot);for(let e=0;e<t.n;e++){Ze(t.art[e*2],t.art[e*2+1],n,et,s);let u=(et[0]-r.cx)*r.s,d=(et[1]-r.cy)*r.s;t.pos[e*3]=i/2+u*c-d*l+r.ox,t.pos[e*3+1]=a/2+u*l+d*c+r.oy,t.pos[e*3+2]=et[2]+o}e.gl.bindBuffer(e.gl.ARRAY_BUFFER,t.posBuf),e.gl.bufferSubData(e.gl.ARRAY_BUFFER,0,t.pos)}function ot(e,t,n){let r=e.gl;r.bindTexture(r.TEXTURE_2D,n),r.bindBuffer(r.ARRAY_BUFFER,t.posBuf),r.enableVertexAttribArray(e.aPos),r.vertexAttribPointer(e.aPos,3,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,t.uvBuf),r.enableVertexAttribArray(e.aUV),r.vertexAttribPointer(e.aUV,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.idxBuf),r.drawElements(r.TRIANGLES,t.count,r.UNSIGNED_SHORT,0)}var st=(e,t,n,r=!1)=>{e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)},ct=b(xe,Se),lt=ct.getContext(`2d`);function ut(e){ce.forEach(([t,n],r)=>{let i=760+(t-760)*1.04,a=1670+(n-1670)*1.02;r?e.lineTo(i,a):e.moveTo(i,a)}),e.closePath()}function dt(e){le.forEach((t,n)=>{let r=Ne[n],i=Ge(n);if(r.p=i,!(i>=1)){if(r.drawnP!==i){r.drawnP=i;let e=r.work.data,n=r.src.data,a=r.edge.getContext(`2d`),o=i>0?a.createImageData(t.w,t.h):null;for(let a=0;a<t.w*t.h;a++){let t=r.n[a];e[a*4]=n[a*4],e[a*4+1]=n[a*4+1],e[a*4+2]=n[a*4+2],e[a*4+3]=255*r.a[a]*(i<=0?1:_(i,i+.03,t*1.08)),o&&(o.data[a*4]=120,o.data[a*4+1]=255,o.data[a*4+2]=190,o.data[a*4+3]=255*Math.max(0,1-Math.abs(t*1.08-i-.025)/.05)*r.a[a])}r.cv.getContext(`2d`).putImageData(r.work,0,0),o?a.putImageData(o,0,0):a.clearRect(0,0,t.w,t.h)}e.drawImage(r.cv,t.x,t.y)}})}var ft=42;function pt(e,t){e.save(),e.globalCompositeOperation=`lighter`,le.forEach((n,r)=>{let i=Ne[r],a=Be[r];if(!(a<0||t>a+de+2.2)){i.p>0&&i.p<1&&(e.globalAlpha=1,e.drawImage(i.edge,n.x,n.y),e.globalAlpha=.45,e.drawImage(i.edge,n.x-2,n.y-2,n.w+4,n.h+4));for(let i=0;i<ft;i++){let o=m(r*7919+i*31+1),s=m(r*7919+i*31+2),c=m(r*7919+i*31+3),l=n.cx+(o-.5)*2*n.rx*.9,u=n.cy+(s-.5)*2*n.ry*.9,d=g(.5*s+.5*m(i*13+r)),f=240+c*260,p=1.1+c*.9,h=t-(a+d*de);if(h<0||h>p)continue;let v=u-f*h,y=_(0,.6,h),b=l+(fe.x-l)*.55*y+Math.sin(h*9+i)*4,x=g((p-h)*2)*_(840,930,v);if(!(x<=.02))for(let n=0;n<4;n++){let r=Math.floor(m(i*17+n*5+Math.floor((t+c)*12))*ye);e.globalAlpha=x*(n===0?1:.55*(1-n/4)),e.drawImage(n===0?Ae:je,r*ge,0,ge,_e,b-ge/2,v+n*15-_e/2,ge,_e)}}}}),e.restore()}function mt(e,t){e.save(),e.globalCompositeOperation=`lighter`;let n=me*O.ch,r=[];for(let i=0;i<pe;i++){let a=O.x0+i*O.cw;r.length=0;for(let e=0;e<3;e++){let a=150+m(i*101+e*7+5)*300,o=8+Math.floor(m(i*31+e*3)*18),s=n+o*O.ch;r.push({head:O.y1-(t*a+m(i*13+e)*s)%s,len:o})}for(let n=0;n<me;n++){let o=ke[i*me+n];if(o<.015)continue;let s=O.y0+n*O.ch,c=0,l=!1;for(let e of r){let t=(s-e.head)/O.ch;t>=0&&t<e.len&&(c=Math.max(c,(1-t/e.len)**1.5),t<1&&(l=!0))}let u=.35+.65*o,d=o*.07+u*c*(.55+.45*m(i*3+1))+(l?.45*u:0);if(d<.03)continue;let f=l?14:2+m(i*7+n)*3,p=Math.floor(m(i*977+n*131+Math.floor(t*f+m(n*3+i)))*ye),h=l?Ae:s<1150+m(i*5+n)*500?je:Me;e.globalAlpha=g(d*1.15),e.drawImage(h,p*ge,0,ge,_e,a,s,O.cw+1,O.ch+1)}}e.restore()}function ht(r,i,l){let f=l===`front`,p=lt;if(p.setTransform(be,0,0,be,0,0),p.globalCompositeOperation=`source-over`,p.globalAlpha=1,p.save(),f){p.beginPath();for(let e of De)p.rect(e.x,e.y,e.w,e.h);p.clip()}p.drawImage(Ce,0,l===`back`?n.plate:n.base,e,t,0,0,e,t),p.drawImage(Oe,he.x,he.y),dt(p);let h=ae.map(e=>Math.floor(e.h/oe)),_=h[0]+h[1],y=_*.32+2.5,b=Math.min(_,(r+4)%y/.32),x=0,S=null;p.fillStyle=`#000`,ae.forEach((e,t)=>{for(let n=0;n<h[t];n++,x++){let t=e.y+n*oe;if(x+1<=b)continue;let r=x<b?b-x:0,i=e.w*r;p.fillRect(e.x+i,t,e.w-i,oe),r>0&&(S={x:e.x+i,y:t})}});let C=se,w=r*18%C.h;p.drawImage(Ce,C.x,n.base+C.y+w,C.w,C.h-w,C.x,C.y,C.w,C.h-w),w>.5&&p.drawImage(Ce,C.x,n.base+C.y,C.w,w,C.x,C.y+C.h-w,C.w,w),p.globalCompositeOperation=`multiply`,p.fillStyle=`rgb(140,165,255)`,p.fillRect(0,0,e,t);let ee=p.createRadialGradient(300,1450,80,300,1450,800);ee.addColorStop(0,`rgba(215,150,255,1)`),ee.addColorStop(1,`rgba(140,165,255,0)`),p.fillStyle=ee,p.fillRect(0,600,650,1557);let te=p.createLinearGradient(600,200,1e3,1950);for(let e=0;e<=8;e++)te.addColorStop(e/8,u(d(r*.45+e*.7)));p.fillStyle=te,p.beginPath(),p.moveTo(612,180),p.lineTo(1024,180),p.lineTo(1024,2040),p.lineTo(640,2040),p.lineTo(640,1290),p.lineTo(612,1e3),p.closePath(),ut(p),p.fill(`evenodd`);let D=p.createLinearGradient(400,0,600,0);D.addColorStop(0,`rgba(120,200,255,1)`),D.addColorStop(.5,`rgba(225,255,255,1)`),D.addColorStop(1,`rgba(120,200,255,1)`),p.fillStyle=D,p.fillRect(400,830,200,1130),p.fillStyle=u(o),ae.forEach(e=>p.fillRect(e.x-4,e.y-4,e.w+8,e.h+8)),p.fillStyle=u(a),p.fillRect(35,62,970,48),p.fillStyle=u(s),p.fillRect(C.x-6,C.y-6,C.w+12,C.h+12);let ne=g(Ke(r,.25)),re=[a[0]+(o[0]-a[0])*ne,a[1]+(o[1]-a[1])*ne,a[2]+(o[2]-a[2])*ne];p.save(),p.translate((T.x0+T.x1)/2,(T.y0+T.y1)/2),p.scale(1,(T.y1-T.y0)/(T.x1-T.x0));let ce=p.createRadialGradient(0,0,90,0,0,175);ce.addColorStop(0,u(re)),ce.addColorStop(1,u(re,0)),p.fillStyle=ce,p.fillRect(-300,-300,600,600),p.restore(),p.fillStyle=`rgb(120,240,255)`,p.beginPath(),ut(p),p.fill();let le=p.createRadialGradient(ie.x,ie.y,8,ie.x,ie.y,70);le.addColorStop(0,u(c)),le.addColorStop(1,`rgba(120,240,255,1)`),p.fillStyle=le,p.fillRect(640,1340,150,160),p.globalCompositeOperation=`lighter`,p.globalAlpha=.55,p.setTransform(1,0,0,1,0,0),p.drawImage(ct,0,0),p.setTransform(be,0,0,be,0,0),p.globalAlpha=1;let ue=S;ue&&Math.floor(r*3)%2==0&&(p.fillStyle=u(o,.9),p.fillRect(ue.x+2,ue.y+1,8,11)),mt(p,r),pt(p,r),p.globalCompositeOperation=`source-over`;let de=v((r-Re-.35)/.3);if(de>0){p.fillStyle=`rgba(3,6,8,${.8*de})`,p.beginPath(),p.roundRect(E.x,E.y,E.w,E.h,E.r),p.fill(),p.globalCompositeOperation=`lighter`;let e=p.createRadialGradient(E.x+E.w/2,E.y+E.h/2,60,E.x+E.w/2,E.y+E.h/2,300);e.addColorStop(0,u(o,.22*de)),e.addColorStop(1,u(o,0)),p.fillStyle=e,p.fillRect(E.x-260,E.y-240,E.w+520,E.h+520),p.strokeStyle=u(o,.3*de),p.lineWidth=3,p.beginPath(),p.roundRect(E.x-1,E.y-1,E.w+2,E.h+2,E.r+1),p.stroke()}p.globalCompositeOperation=`lighter`;let fe=.5+.25*Math.sin(r*3.1)+.9*Ke(r,.1),O=ie.x-i.rLook*30,pe=ie.y-6;p.save(),p.translate(O,pe),p.scale(1,1.9);let me=p.createRadialGradient(0,0,2,0,0,40);me.addColorStop(0,u([255,250,220],g(.6*fe))),me.addColorStop(.35,u(c,g(.45*fe))),me.addColorStop(1,u(c,0)),p.fillStyle=me,p.fillRect(-45,-45,90,90),p.restore();let ge=p.createRadialGradient(O,pe,10,O,pe,160);ge.addColorStop(0,u(c,.16*fe)),ge.addColorStop(1,u(c,0)),p.fillStyle=ge,p.fillRect(O-170,pe-170,340,340),p.globalCompositeOperation=`source-over`;let _e=Math.floor(r/3.3),ve=(r-_e*3.3-m(_e+51)*2.6)/.16;if(ve>0&&ve<1){let e=Math.sin(Math.PI*ve);p.fillStyle=`rgba(6,10,20,0.92)`,p.beginPath(),p.ellipse(ie.x,ie.y-ie.ry+ie.ry*e,ie.rx+6,ie.ry*e+2,0,0,Math.PI*2),p.fill()}p.restore(),f&&(p.setTransform(1,0,0,1,0,0),p.globalCompositeOperation=`destination-in`,p.drawImage(Ee,0,0),p.globalCompositeOperation=`source-over`),p.setTransform(1,0,0,1,0,0)}var A=1024,j=592,gt=b(A,j),_t=gt.getContext(`2d`),vt=46,yt=54,bt=68,xt=118,St=new WeakMap,Ct=e=>e.match(/^\[(ok|\*|!)\]/);function wt(){let e=[];return document.querySelectorAll(`#loadTerm .tl`).forEach(t=>{let n=(t.firstChild?.textContent??``).replace(/\s+$/,``),r=St.get(t),i=n.startsWith(`[ok]`);r?r.text!==n&&(i&&!r.text.startsWith(`[ok]`)&&(r.okAt=k,We()),r.text=n,r.changed=k):(r={text:n,at:k,changed:k,okAt:-9},St.set(t,r),i&&(r.okAt=k,We())),e.push(r)}),e}var Tt=28;function Et(e){let t=[],n=e;for(;n.length>Tt;){let e=n.lastIndexOf(` `,Tt);e<Tt/2&&(e=Tt),t.push(n.slice(0,e)),n=`  `+n.slice(e).trimStart()}return t.push(n),t}function Dt(e,t,n,r,o,s,c=16){e.globalCompositeOperation=`lighter`,e.fillStyle=u(i,.22*s),e.fillText(t,n-2.5,r),e.fillStyle=u(a,.18*s),e.fillText(t,n+2.5,r+1),e.shadowColor=u(o,.85*s),e.shadowBlur=c,e.fillStyle=u(o,s),e.fillText(t,n,r),e.shadowBlur=0,e.fillStyle=`rgba(230,255,240,${.35*s})`,e.fillText(t,n,r),e.globalCompositeOperation=`source-over`}function Ot(e,t,n){e.globalCompositeOperation=`destination-in`;let r=e.createRadialGradient(A/2,j/2,j*.3,A/2,j/2,A*.62);r.addColorStop(0,`rgba(0,0,0,1)`),r.addColorStop(.8,`rgba(0,0,0,0.75)`),r.addColorStop(1,`rgba(0,0,0,0.25)`),e.fillStyle=r,e.fillRect(0,0,A,j),e.globalCompositeOperation=`source-over`,e.fillStyle=`rgba(0,0,0,0.33)`;for(let t=0;t<j;t+=5)e.fillRect(0,t,A,2);e.globalCompositeOperation=`lighter`;let i=A*(.3-n.yaw*2.2+.03*Math.sin(t*.7)),a=e.createLinearGradient(i-170,0,i+170,j*.4);a.addColorStop(0,`rgba(255,190,245,0)`),a.addColorStop(.5,`rgba(255,200,245,0.13)`),a.addColorStop(1,`rgba(255,190,245,0)`),e.fillStyle=a,e.beginPath(),e.moveTo(i-120,0),e.lineTo(i+40,0),e.lineTo(i-80,j),e.lineTo(i-240,j),e.closePath(),e.fill();let o=e.createLinearGradient(0,0,0,j*.32);o.addColorStop(0,`rgba(255,170,240,0.12)`),o.addColorStop(1,`rgba(255,170,240,0)`),e.fillStyle=o,e.fillRect(0,0,A,j*.32);let s=e.createRadialGradient(A*1.02,j*.6,10,A*1.02,j*.6,A*.32);s.addColorStop(0,u(d(t*.45+2),.16)),s.addColorStop(1,u(d(t*.45+2),0)),e.fillStyle=s,e.fillRect(0,0,A,j),e.globalCompositeOperation=`destination-in`,e.fillStyle=`#000`,e.beginPath(),e.roundRect(4,4,1016,584,70),e.fill(),e.globalCompositeOperation=`source-over`}function kt(e,t){let n=_t;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,n.shadowBlur=0,n.fillStyle=`#000`,n.fillRect(0,0,A,j);let r=wt(),i=(e-Re-.35)/.35;if(i<=0)return;n.save();let l=Math.max(6,j*v(i));n.beginPath(),n.rect(0,(j-l)/2,A,l),n.clip(),i<1&&(n.fillStyle=u(o,.5*(1-i)),n.fillRect(0,(j-l)/2,A,l)),n.fillStyle=`rgba(20,255,140,0.028)`,n.fillRect(0,0,A,j),n.fillStyle=`rgba(57,255,136,0.05)`;for(let e=32;e<A;e+=48)n.fillRect(e,0,1.5,j);for(let e=30;e<j;e+=48)n.fillRect(0,e,A,1.5);let d=r.find(e=>e.text.startsWith(`$`))?.text.match(/--([\w-]+)/)?.[1];d&&(He=d.replace(/-/g,` `).toUpperCase()),n.font=p(28),n.textBaseline=`top`,Dt(n,`OBJECTIVE // ${He}`.slice(0,34),vt,38,o,.75,8),Math.floor(e*2.2)%2==0&&(n.fillStyle=u(a,.95),n.shadowColor=u(a),n.shadowBlur=14,n.beginPath(),n.arc(860,52,10,0,Math.PI*2),n.fill(),n.shadowBlur=0),Dt(n,`LIVE`,880,38,a,.85,8),n.fillStyle=u(o,.35),n.fillRect(vt,84,932,2),n.save(),n.beginPath(),n.rect(0,112,A,346),n.clip(),n.font=p(yt),Tt=Math.max(16,Math.floor((932-yt*.6)/n.measureText(`0`).width));let h=[];for(let e of r)Et(e.text).forEach((t,n)=>h.push({text:t,line:e,first:n===0}));let _=h.slice(-7);_.forEach((t,r)=>{let i=0;for(let t=r+1;t<_.length;t++)i+=v((e-_[t].line.at)/.22);let a=t.line,l=v((e-a.at)/.22),d=390-i*bt+(1-l)*bt*.6;if(d<50)return;let p=g((d-(xt-bt*.6))/(bt*.8)),h=t.text;if(a.text.startsWith(`$`)&&t.first)h=h.slice(0,Math.floor((e-a.at)*26));else{let t=(e-a.changed)/.28;if(t<1){let n=Math.floor(e*30);h=[...h].map((e,r)=>e===` `||m(r*31+n*7)<t*1.4-r/h.length*.4?e:f[Math.floor(m(r+n*13)*24)]).join(``)}}let y=r===_.length-1,b=Math.exp(-(((e-a.okAt)/.12)**2)),x=(y||a===_[_.length-1].line?1:.62)*p*(.85+.15*l),S=t.first?Ct(h):null,C=vt;if(S){let e=S[1]===`ok`?o:S[1]===`!`?s:c;Dt(n,S[0],C,d,e,g(x+b),14+20*b),C+=n.measureText(S[0]).width,Dt(n,h.slice(S[0].length),C,d,S[1]===`!`?s:o,g(x+b*.6),14)}else Dt(n,h,C,d,o,x,14);b>.02&&(n.globalCompositeOperation=`lighter`,n.fillStyle=u(o,.18*b),n.fillRect(0,d-6,A,bt),n.globalCompositeOperation=`source-over`),y&&Math.floor(e*3.3)%2==0&&(n.fillStyle=u(o,.9*x),n.shadowColor=u(o),n.shadowBlur=12,n.fillRect(vt+n.measureText(h).width+6,d+5,yt*.55,yt*.86),n.shadowBlur=0)}),n.restore();let y=r.filter(e=>Ct(e.text)),b=y.filter(e=>!e.text.startsWith(`[*]`)).length,x=Math.max(1,y.length),S=732/x;for(let t=0;t<x;t++){let r=y[t],i=vt+t*S;if(n.fillStyle=u(o,.18),n.fillRect(i+3,510,S-7,18),!r)continue;let a=Ct(r.text)[1],l=a===`ok`?o:a===`!`?s:c,d=a===`*`?.25+.6*(1-Math.exp(-(e-r.at)/3))+.05*Math.sin(e*6+t):1;n.fillStyle=u(l,a===`*`?.8:.95),n.shadowColor=u(l),n.shadowBlur=12,n.fillRect(i+3,510,(S-7)*d,18),n.shadowBlur=0}y.length&&(n.font=p(34),Dt(n,`${b}/${y.length}`,828,500,o,.9,10)),n.restore(),Ot(n,e,t)}var At=null,jt=null,Mt=null;function Nt(e,t,n,r,i,a){if(!At||At.width!==Math.ceil(n/4)||At.height!==Math.ceil(r/4)){At=b(Math.ceil(n/4),Math.ceil(r/4)),jt=b(Math.ceil(n/12),Math.ceil(r/12)),Mt=b(n,r);let e=Mt.getContext(`2d`),t=Math.max(3,Math.round(n/270));e.fillStyle=`rgba(0,0,0,0.17)`;for(let i=0;i<r;i+=t)e.fillRect(0,i,n,t*.4);let i=e.createRadialGradient(n/2,r*.45,n*.35,n/2,r*.5,r*.72);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(1,`rgba(0,0,0,0.6)`),e.fillStyle=i,e.fillRect(0,0,n,r)}e.save(),e.setTransform(1,0,0,1,0,0);let o=At.getContext(`2d`),s=jt.getContext(`2d`);if(o.imageSmoothingEnabled=s.imageSmoothingEnabled=!0,o.drawImage(t,0,0,At.width,At.height),s.drawImage(At,0,0,jt.width,jt.height),e.globalCompositeOperation=`lighter`,e.globalAlpha=.24*i,e.drawImage(At,0,0,n,r),e.globalAlpha=.3*i,e.drawImage(jt,0,0,n,r),e.globalAlpha=1,e.globalCompositeOperation=`source-over`,a>0)for(let i=0;i<4+a*6;i++){let i=Math.random()*r,o=(4+Math.random()*36)*(n/390);e.drawImage(t,0,i,n,o,(Math.random()-.5)*80*(n/390)*a,i,n,o)}e.drawImage(Mt,0,0),Pe.length&&(e.globalCompositeOperation=`overlay`,e.globalAlpha=.07,e.imageSmoothingEnabled=!1,e.drawImage(Pe[Math.floor(k*24)%Pe.length],0,0,n,r),e.imageSmoothingEnabled=!0),e.restore()}function Pt(n,r,i,a,o,s){let c=k,l=it();if(s?(_t.setTransform(1,0,0,1,0,0),_t.globalCompositeOperation=`source-over`,_t.globalAlpha=1,_t.drawImage(s,0,0,A,j),Ot(_t,c,o)):kt(c,o),n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,!l){ht(c,o,`flat`),n.fillStyle=`#000`,n.fillRect(0,0,r,i);let s=(e,t)=>[r/2+(e-a.cx)*a.s+a.ox,i/2+(t-a.cy)*a.s+a.oy],[l,u]=s(0,0);n.drawImage(ct,l,u,e*a.s,t*a.s);let[d,f]=s(E.x,E.y);n.globalCompositeOperation=`lighter`,n.drawImage(gt,d,f,E.w*a.s,E.h*a.s),n.globalCompositeOperation=`source-over`;return}let u=l.gl;(l.c.width!==r||l.c.height!==i)&&(l.c.width=r,l.c.height=i),u.viewport(0,0,r,i),u.uniform2f(l.uRes,r,i),u.uniform1f(l.uGain,1),u.clearColor(0,0,0,1),u.depthMask(!0),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.disable(u.BLEND),ht(c,o,`back`),st(u,l.texBack,ct),u.disable(u.DEPTH_TEST),at(l,l.pic,o,a,r,i,0,!1),ot(l,l.pic,l.texBack),ht(c,o,`front`),st(u,l.texPic,ct,!0),u.enable(u.DEPTH_TEST),u.depthFunc(u.LESS),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA),at(l,l.pic,o,a,r,i,0,!0),ot(l,l.pic,l.texPic),st(u,l.texHud,gt),at(l,l.glass,o,a,r,i,2,!0),u.depthFunc(u.LEQUAL),u.depthMask(!1),u.blendFunc(u.ONE,u.ONE),ot(l,l.glass,l.texHud),u.disable(u.BLEND),n.drawImage(l.c,0,0)}function Ft(e,t,n){let r=k-Re;if(r>=.5)return;let i=v((r-.02)/.12),a=v((r-.14)/.3),o=Math.max(3*i,n*a);e.save(),e.fillStyle=`#000`,e.fillRect(0,0,t,(n-o)/2),e.fillRect(0,(n+o)/2,t,(n-o)/2+1),e.fillRect(0,0,t*(1-i)/2,n),e.fillRect(t-t*(1-i)/2,0,t*(1-i)/2+1,n),e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(220,255,240,${(1-a)*.9})`,e.fillRect(t*(1-i)/2,(n-o)/2,t*i,o),e.restore()}var It=1;function Lt(e,t){k+=t,Fe();let n=Math.min(2,window.devicePixelRatio||1)*It,r=Math.max(2,Math.round((e.clientWidth||390)*n)),i=Math.max(2,Math.round((e.clientHeight||844)*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=e.getContext(`2d`);if(a.setTransform(1,0,0,1,0,0),!we){a.fillStyle=`#02000a`,a.fillRect(0,0,r,i),wt();return}let s=Je(k);Pt(a,r,i,$e(r,i),s);let c=m(Math.floor(k*6)+909)<.04?.5:0;for(let e of ze)k-e>0&&k-e<.16&&(c=.8);Nt(a,e,r,i,1,c);let l=Ke(k,.12,.05);l>.01&&(a.globalCompositeOperation=`lighter`,a.fillStyle=u(o,g(.16*l)),a.fillRect(0,0,r,i),a.globalCompositeOperation=`source-over`),Ft(a,r,i)}function Rt(e,t,n,r,i,a,o){if(k+=i,Fe(),e.setTransform(1,0,0,1,0,0),!we){e.fillStyle=`#04010c`,e.fillRect(0,0,n,r);return}let s=Je(k);Pt(e,n,r,tt(n,r,a,s),s,o),Nt(e,t,n,r,.8,Math.random()<.15?.6:0)}var zt=()=>`<div class="hackloader" id="hackloader"><canvas class="hackart" id="hackart" aria-hidden="true"></canvas></div>`,Bt=()=>(document.getElementById(`after`)?.childElementCount??0)>0,Vt=!1,Ht=0,Ut=null;function Wt(){let e=document.getElementById(`hackart`);if(e&&e!==Ut&&(Ut=e,Ue()),e&&Lt(e,0),Vt)return;Vt=!0,Ht=0;let t=0,n=e=>{let r=document.getElementById(`hackart`);if(r&&Bt()&&(document.getElementById(`hackloader`)?.remove(),document.getElementById(`app`)?.classList.remove(`loading`)),!r||Bt())Vt=!1;else{if(r!==Ut&&(Ut=r,Ue()),!Ht||e-Ht>=31){let n=Ht?e-Ht:33,i=Math.min(.1,n/1e3);Ht=e,t=n>50&&we?t+n:0,t>1500&&It>.6&&(It=Math.max(.6,It*.85),t=0),Lt(r,i)}requestAnimationFrame(n)}};requestAnimationFrame(n)}var M=window.Telegram?.WebApp;function Gt(){return!!M&&M.isVersionAtLeast(`9.0`)&&!!M.SecureStorage}var Kt=15e3;function qt(e,t,n=Kt){return new Promise((r,i)=>{let a=setTimeout(()=>i(Error(`Telegram didn't respond (${e}).`)),n);try{t((t,n,o)=>{clearTimeout(a),t?i(Error(`${e} failed: ${t}`)):r({value:n,canRestore:!!o})})}catch(t){clearTimeout(a),i(Error(`${e} failed: ${t instanceof Error?t.message:String(t)}`))}})}var Jt={get:e=>qt(`secure read`,t=>M.SecureStorage.getItem(e,t)),set:(e,t)=>qt(`secure save`,n=>M.SecureStorage.setItem(e,t,n)),remove:e=>qt(`secure remove`,t=>M.SecureStorage.removeItem(e,t)),restore:e=>qt(`secure restore`,t=>M.SecureStorage.restoreItem(e,t))},Yt=5e3;async function Xt(e,t){try{return await qt(e,t,Yt)}catch(n){if(!(n instanceof Error)||!n.message.startsWith(`Telegram didn't respond`))throw n;return qt(e,t,Yt*2)}}var N={get:async e=>(await Xt(`device read`,t=>M.DeviceStorage.getItem(e,t))).value,set:(e,t)=>Xt(`device save`,n=>M.DeviceStorage.setItem(e,t,n)),remove:e=>Xt(`device remove`,t=>M.DeviceStorage.removeItem(e,t))};function Zt(e){M?.HapticFeedback?.notificationOccurred(e)}function P(){M?.HapticFeedback?.impactOccurred?.(`light`)}function Qt(){M?.HapticFeedback?.impactOccurred?.(`heavy`)}function $t(e){M?M.openLink(e):window.open(e,`_blank`)}var en=[57,255,136],tn=[0,240,255],nn=[255,43,214],rn=(e,t=1)=>`rgba(${e[0]},${e[1]},${e[2]},${t})`,an=`SNATCHED`,on=`01$#%&@*+=<>?/\\|`,sn=e=>`900 ${e}px Orbitron, Rajdhani, sans-serif`,cn=0,ln=.85,un=1.25,dn=1.65,fn=1.3,pn=3,mn={covered:.32,slam:.4,hacker:1.0333333333333332,final:4.633333333333333},hn=.95/pn,gn=mn.final+hn,_n=gn+.4,vn=e=>1-(1-Math.min(1,Math.max(0,e)))**3,F=(e,t)=>e+Math.random()*(t-e),yn=e=>e[Math.floor(Math.random()*e.length)],bn=e=>[...an].map(t=>Math.random()<e?yn([...on]):t).join(``);function xn(e,t,n,r,i=document.createElement(`canvas`)){i.width=e,i.height=t;let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=i.getContext(`2d`);o.font=sn(100);let s=t=>100*e*r/o.measureText(t).width,c=Math.min(s(an),s(`SNATCHED`)*1.5,t*.55);return{c:i,ctx:o,wc:a,wctx:a.getContext(`2d`),W:e,H:t,u:n,base:c}}function Sn(e,t=0){e.ctx.fillStyle=`#04010c`,e.ctx.fillRect(0,0,e.W,e.H),t>0&&(e.ctx.fillStyle=`rgba(230,255,240,${t})`,e.ctx.fillRect(0,0,e.W,e.H))}function Cn(e,t=.22){e.ctx.fillStyle=`rgba(0,0,0,${t})`;for(let t=0;t<e.H;t+=3*e.u)e.ctx.fillRect(0,t,e.W,e.u)}function wn(e,t){let{W:n,H:r,u:i,wctx:a,ctx:o}=e,{x:s=n/2,y:c=r/2,size:l=1,rot:u=0,skew:d=0,color:f=en,split:p=0,slices:m=0,blur:h=0,alpha:g=1}=t,_=t.text??an;a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,n,r),a.translate(s,c),a.rotate(u),a.transform(1,0,d,1,0,0),a.font=sn(e.base*l),a.textAlign=`center`,a.textBaseline=`middle`,a.filter=h>0?`blur(${h*i}px)`:`none`,p&&(a.globalCompositeOperation=`lighter`,a.fillStyle=rn(nn,.85),a.fillText(_,-p*i,0),a.fillStyle=rn(tn,.85),a.fillText(_,p*i,p*i*.3)),a.globalCompositeOperation=`source-over`,a.shadowColor=rn(f,.9),a.shadowBlur=30*i,a.fillStyle=rn(f),a.fillText(_,0,0),a.shadowBlur=0,a.fillStyle=`rgba(255,255,255,0.55)`,a.fillText(_,0,0),a.filter=`none`,o.save(),o.globalAlpha=g,o.drawImage(e.wc,0,0);for(let t=0;t<m;t++){let t=F(c-e.base*l*.6,c+e.base*l*.5),r=F(3,22)*i;o.fillStyle=`#04010c`,o.fillRect(0,t,n,r),o.drawImage(e.wc,0,t,n,r,F(-60,60)*i,t,n,r)}o.restore()}var Tn=null,En=0,Dn=-1;function On(e,t){let{W:n,H:r,ctx:i}=e;Tn||(Tn=document.createElement(`canvas`),Tn.width=Math.ceil(n/4),Tn.height=Math.ceil(r/4));let a=Tn.getContext(`2d`),o=a.createImageData(Tn.width,Tn.height),s=o.data;for(let e=0;e<s.length;e+=4){let t=Math.random()*255,n=Math.random();s[e]=n<.05?0:t,s[e+1]=n>.96?40:t,s[e+2]=n>.93&&n<.96?120:t,s[e+3]=255}a.putImageData(o,0,0),t>En+.2&&Math.random()<.09&&(En=t+F(.08,.22));let c=.5+.5*Math.sin(t*9)*Math.sin(t*3.7),l=t<En?F(.38,.58):.08+.2*Math.max(0,c);i.save(),i.imageSmoothingEnabled=!1,i.globalAlpha=l,i.drawImage(Tn,0,0,n,r);for(let e=0;e<3;e++){let e=F(0,r),t=F(4,24);i.drawImage(Tn,0,e/r*Tn.height,Tn.width,t/r*Tn.height,F(-60,60),e,n,t)}(Dn<0||t-Dn>1.1+Math.random()*.6)&&(Dn=t);let u=(t-Dn)/.7;if(u<1){let e=-.2*r+u*1.4*r,t=r*.22,a=i.createLinearGradient(0,e,0,e+t);a.addColorStop(0,`rgba(120,255,200,0)`),a.addColorStop(.7,`rgba(160,255,220,0.35)`),a.addColorStop(.75,`rgba(220,255,240,0.6)`),a.addColorStop(1,`rgba(120,255,200,0)`),i.globalAlpha=1,i.globalCompositeOperation=`lighter`,i.fillStyle=a,i.fillRect(0,e,n,t),i.globalCompositeOperation=`source-over`}i.globalAlpha=.5,i.fillStyle=`#000`,i.fillRect(0,(1-t*.8%1.3)*r,n,r*.08),i.restore(),Cn(e,.25)}function kn(e,t,n,r=``){let{W:i,H:a,u:o}=e,s=(e,n=0)=>{Sn(e,n),r===`g`&&On(e,t)};if(e.ctx.setTransform(1,0,0,1,0,0),e.ctx.globalAlpha=1,e.ctx.globalCompositeOperation=`source-over`,t<ln){n(`slam`+r);let c=(t-cn)/.2,l=c<1?2.8-1.8*vn(c):1+(t>.55&&t<.65?.18:0),u=t<.05||t>.55&&t<.59;s(e,u?.9:0),wn(e,{size:l,y:a/2+(Math.random()<.2?F(-30,30)*o:0),x:i/2+(Math.random()<.2?F(-20,20)*o:0),split:c<1?26:F(3,12),slices:Math.random()<.3?4:0,color:u?[20,0,40]:en,text:Math.random()<.12?bn(.25):an}),Cn(e)}else if(t<un){n(`diag`+r);let c=vn((t-ln)/.15),l=-.38*c,u=1+.35*c;s(e,t-ln<.04?.6:0);for(let t=3;t>=1;t--)wn(e,{size:u,rot:l,skew:-.25*c,x:i/2-t*22*o*c,y:a/2+t*34*o*c,color:t%2?nn:tn,alpha:.09*(4-t)});wn(e,{size:u,rot:l,skew:-.25*c,split:F(6,16),slices:Math.random()<.4?5:0,color:Math.floor(t*12)%4==0?nn:en,x:i/2+F(-6,6)*o}),Cn(e)}else if(t<dn){let n=(t-un)/.3999999999999999,r=Math.sin(Math.PI*Math.min(1,n*1.15))*16,c=vn((n-.45)/.55);s(e),wn(e,{size:1.35-.35*c,rot:-.38*(1-c),skew:-.25*(1-c),blur:r,split:r*.6});for(let t=0;t<3;t++){let r=(n*1.6+t/3)%1*a,s=50*o;e.ctx.drawImage(e.c,0,r,i,s,F(-30,30)*o,r,i,s);let c=e.ctx.createLinearGradient(0,r,0,r+s);c.addColorStop(0,`rgba(180,255,220,0)`),c.addColorStop(.5,`rgba(180,255,220,0.25)`),c.addColorStop(1,`rgba(180,255,220,0)`),e.ctx.fillStyle=c,e.ctx.fillRect(0,r,i,s)}Cn(e,.3)}else{s(e);let t=r===`g`&&Math.random()<.12;wn(e,{split:t?F(8,16):3,slices:t?4:0,text:t?bn(.3):an,color:t&&Math.random()<.5?nn:en,x:i/2+(Math.random()<.3?F(-4,4)*o:0)}),Cn(e)}}var An=!1;function jn(e=`SNATCHED`){if(Qt(),An||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return setTimeout(Qt,140),Promise.resolve();An=!0,an=e;let t=()=>{},n=new Promise(e=>t=e),r=document.createElement(`canvas`);r.className=`snatchfx`,r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,e),document.body.append(r);let i=Math.min(2,window.devicePixelRatio||1),a=xn(Math.round(window.innerWidth*i),Math.round(window.innerHeight*i),i,.88,r),{W:o,H:s,ctx:c}=a,l=xn(640,250,1,.94),u=document.createElement(`canvas`);u.width=o,u.height=s;let d=u.getContext(`2d`),f=document.createElement(`canvas`);f.width=Math.ceil(o/(3*i)),f.height=Math.ceil(s/(3*i));let p=f.getContext(`2d`),m=p.createImageData(f.width,f.height);function h(e,t=`source-over`){if(e<=0)return;let n=m.data;for(let e=0;e<n.length;e+=4){let t=Math.random()*255,r=Math.random();n[e]=r<.04?0:t,n[e+1]=r>.97?40:t,n[e+2]=r>.94&&r<.97?120:t,n[e+3]=255}p.putImageData(m,0,0),c.save(),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation=t,c.globalAlpha=e,c.imageSmoothingEnabled=!1,c.drawImage(f,0,0,o,s);for(let e=0;e<4;e++){let e=F(0,s),t=F(4,26)*i;c.drawImage(f,0,e/s*f.height,f.width,t/s*f.height,F(-80,80)*i,e,o,t)}let r=S*1.7%1.4*s-.2*s;c.globalAlpha=e*.6,c.fillStyle=`#000`,c.fillRect(0,r,o,s*.1),c.restore()}let g=e=>e<.1?.4*(1-e/.1)+.12:Math.random()<.14?F(.22,.36):F(.07,.14),_=Array.from({length:14},(e,t)=>({delay:F(0,.14),from:t%2?1:-1}));function v(e){c.clearRect(0,0,o,s);let t=s/14;_.forEach((n,r)=>{let a=vn((e-n.delay)/.16),s=o*a,l=n.from<0?0:o-s;c.fillStyle=`#04010c`,c.fillRect(l,r*t,s,t+1),a>0&&a<1&&(c.fillStyle=rn(r%3==0?nn:r%3==1?tn:en,.9),c.fillRect(n.from<0?s-4*i:l,r*t,4*i,t+1))}),h(.16,`source-atop`)}function y(e){c.fillStyle=`rgba(230,255,240,${.3*(1-e)})`,c.fillRect(0,0,o,s);for(let e=0;e<5;e++){let e=F(0,s),t=F(6,40)*i;c.drawImage(r,0,e,o,t,F(-50,50)*i,e,o,t)}}function b(e,t){e<.4?(Sn(l),Cn(l)):kn(l,(e-.4)*fn,()=>{},`g`);let n=Math.min(1,e/(mn.final-mn.hacker)),a=n<.5?4*n*n*n:1-(-2*n+2)**3/2;if(Rt(c,r,o,s,t,a,l.c),Math.random()<.15)for(let e=0;e<3;e++){let e=F(0,s),t=F(4,30)*i;c.drawImage(r,0,e,o,t,F(-30,30)*i,e,o,t)}}let x=performance.now(),S=0,C=1/0,w=new Set,T=e=>{w.has(e)||(w.add(e),Qt())};r.addEventListener(`pointerdown`,()=>{t(),C===1/0&&(C=S)});let E=e=>{let n=(e-x)/1e3,l=Math.min(.1,Math.max(0,n-S));S=n;let f=C<1/0?Math.max(gn,gn+(n-C)):n;if(c.setTransform(1,0,0,1,0,0),c.globalAlpha=1,c.globalCompositeOperation=`source-over`,f<mn.slam)v(f),f>=mn.covered&&t(),f>mn.slam-.06&&(c.fillStyle=`#fff`,c.fillRect(0,s/2-3*i,o,6*i));else if(f<mn.hacker){t(),kn(a,(f-mn.slam)*pn,T);let e=(f-mn.slam)*pn,n=Math.min(...[cn,ln,un].map(t=>e>=t?(e-t)/pn:9));h(g(n))}else if(f<mn.final)T(`hacker`),b(f-mn.hacker,l),Cn(a,.18),f-mn.hacker<.08&&y((f-mn.hacker)/.08),f-mn.hacker<.18&&h(.32*(1-(f-mn.hacker)/.18));else if(f<gn){T(`final`);let e=(f-mn.final)*pn,t=e/.18,n=e>.4&&e<.52;Sn(a,e<.04?.8:0),wn(a,{size:t<1?1.9-.9*vn(t):n?1.25:1,rot:n?.3:0,skew:n?.3:0,split:t<1?20:n?18:2+Math.sin(f*30)*2,slices:n||Math.random()<.1?5:0,color:n?nn:en}),Cn(a),h(g(f-mn.final)),d.clearRect(0,0,o,s),d.drawImage(r,0,0)}else if(f<_n){t(),w.has(`buffered`)||(w.add(`buffered`),d.getImageData(o>>1,s>>1,1,1).data[3]===0&&(Sn(a),wn(a,{}),d.drawImage(r,0,0)));let e=(f-gn)/(_n-gn),n=Math.max(.004,1-vn(e/.45)),l=e<.45?1:Math.max(.01,1-vn((e-.45)/.35));c.fillStyle=`#04010c`,c.fillRect(0,0,o,s),c.drawImage(u,o/2-o*l/2,s/2-s*n/2,o*l,s*n),c.globalCompositeOperation=`lighter`,c.fillStyle=`rgba(220,255,240,${Math.min(1,e*3)*(1-e)})`,c.fillRect(o/2-o*l/2,s/2-Math.max(2*i,s*n/2),o*l,Math.max(4*i,s*n)),r.style.opacity=e<.6?`1`:String(1-(e-.6)/.4)}else{r.remove(),An=!1,t();return}requestAnimationFrame(E)};return requestAnimationFrame(E),n}var Mn=`@font-face{font-family:Orbitron;font-weight:400 900;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:500;font-display:swap;src:url(data:font/woff2;base64,d09GMgABAAAAACMEAA4AAAAAXagAACKrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbDBwYBmAAggQRCAqBokyBhgwLgyAAATYCJAOGPAQgBYUOB4NdG9JMRUZuGKkFFkVdzKSo7P9bAh0ig7qnAJ+aEHZYlS2cSI1TD+v3nRW3qwS3uvPekV/L5nH+xFHCjh/JGEFAIJrjfwgWc3xIBCcqWJIDBeOHjJBklqBaq7J69gDBvSNCheoVSGJJ5N9dvNHADgjkzfC0zX8qBgf3QGwsQLABUREUkJDDBIyDw56Rs3JtrdSVwfrHIlL35/ajXbmI+svfG0RYc5Xgs+kSqeS2hRzi+vnxhf+nDn7nvrWw8T9RoHEUSB5FGHNKtZBrY7zoibO0aC0Sbe5eBFuVlWwqa3AA75EJcP+f/2MB8A9/829rG2WBZm9ZIlF0+AU4PvCc1Jnyl6XzRkUCgRM5UVgp0ti1vxqegNYC2//DWIL/SCc5x96V/hvZR8AUKIFb4iqpUjT5eV3q+p5RCuE5Sdu7Ig6LM63tsghsS/9/EysohS54EAYdGuUC8AZ0UJABL8Q3ZSvBRDTRSDOvHYa5f2322v3p3chEuDo+E6cOluWxsHf8f1znp7SmwlsWZuFghksrxSUuKi5C+DzGdODpXXIO7RFt2i/zi9lkr9NndzSHKwgIyC3emPar845IoBKQhMxdNgLlhxI5aYbr2mz7bisCTvRciNe9Z086PQtgUeYTW0UWScgkCSgp2C741BnBN0D/s93X/5sBSqGcFwDOAsTwegC9DDC5MzQCi2wsyc+G8VgRW99/VfbbYJsd9jnoqBM+SxRZ+27XduOFwmpkMVl+LA4rkBXH0rJ2Vg6H8ZkOqvT60iY77HbQYSecShSZWOc1sDxZPvlj/zXp592HzjpjwjfGH/vER19wxd+H/+/9f/fOATtts9UmX1tmAdbtHT+ZjTcBzot8g4x7XNzgYjcH3a6PqPrh3X/+Hus9NqFUqRTomVF7A6rhWS64jcWEndo7UEL0GEiGmRNIVDAxdph2nXcysMiQ4eo8lWaFS4AjBZAPVV0aWjsaSRvpmjl9uVsFHt2vovilC8yezYNH4/5dvzldLhGa5XIqRqH6uO/eS3KQdvGbs+NNylrYNDTB2Lgdl7TZjmzsxxHJIrmYbzg0qUCMcFkV85Jt66Cmzdm67bE3JOzfXYNswS6a8+IIxashRpMzu5KcJBeTq2wrnF8WHboP2fQXj5uwKYyJMGdcqpFTBY3QEhIPW19YkIJJYoEiI8qVUOUSDbSVsFtXOYNraeghloNT6HkfSltFQYjQMl4pN84qNVZ3lXVvhyVsswWCgMy/5Yl4TkXOg9/NxF9P+v9z4gRjs+lC5wQiWIl0NCqmsgFfplzaHecHlyYPathB+eB5P0BoG0rGh9XdJQxYmAC4degsxIBbGrfocq12pxOKb5DBO7/qdFPnzoxjF2u+EwJRDDJ45xcMu3S+ZoC0eIwsbuLNOt4qjrfQALB50fK1r5PYLrPytj83F+QdRulfQ4OGENp0kDjBQcxT+5SJQNOOtDM0bgfameYRcdp3kPKDAmESIlhHHmkN/7UTP18oZTdtgx/V/+edv248rG6LRly1H75H6vVhfvzVxmF3Y6Kd51kVrH3+cfOoh3kq9WKM+6jHEqtb+NS1usQoqXhmQjLCFrmzvFiKHVZC/qaoOrOwhzQx1XuKHSjIKtJXgs2pk1t6pgkDkNe9uMzGCzZdN4jftWNQVG+n3MSPAg2i9Rw5qMAIbMwYZ7CSMG1ncRa3LwxMXvrspxITObsLEhiTtn40Y8m1J9izL8nAVm0gHEIJloimLHqephIQHEkhIuSrbEqWYIq7rz2Bg61m5vFRbUZtoBfkEqvps0qJ/I2WSI4AsT7VsN+zId3IW21W6iR3eLV4XbJ+8dpE3YtmOjWaptKgyZN0bjlxwizHjl5tKkqKCxolLZX2fakNUs2ajm0GkQj12YgSNFJ30sVccdipx1zYZb4UxIeFhZKj1a2WfZdvtA/92GuquXBYssZhGEMOPILtO9oR1VEpk4JYspwg1eok7GkSEYLRAf3UXkHXAeFcUWQw3v177LUMJ0plZ3ct4VoMNSuy3xXFgFYxwlYd7XWIhm0YRtEhk3P0CMq1oqNqFvH1xkYO2jII2DjgDdhwEjw3aWgZ7iO0phEHfzIaWJeQ0SGSBO+T0O+mpobms8im8NKPp4Peok2rooYcyVFvFrM4KoRG3HPPABU+ubaA6ByXT4EerD7kmTw6+irIJOe6hmEaX2wZVl39SJ+Z4X4COKB0mVIZZPzMUOkTW1MAJiXikF5+03ekYVEyqoCMYD2HV02T9ZP1RSq9EQ8nWbjilIk64qpBzMaQG9/MLmwhPP2xznQTUDfE0l4FSKBdlHJ7FxIOGqjl2sQjQwKrau52ObkewnphnGrIjZvmbS6bbpceQNGG8cCUVWQCwkziirCxgzP7AvSEnn2btP1jM6jwgkkM7P7D1DOZbyFBKst1mr8l+WKGi7zvAmH0eJ7z1J5bNysRvEtmxwd3Q4C1HxTjaUdo/8LJYSsiLlrXJ22MO4YTUxyCaR68bP5pQlt8aPvwJdOPlwAcAro62Bgvp/LUoPUnC4yTDA8wK/xaHkrtUlQJAUrQgyajowG8TcNkpGoQ4cIdrVGEMIFmcLEjb8oVZLkFuoxwyImL367VdjQbpYC2G00DIQdUU62D2/LObuLCT6vfcbrr99TiH/JTNgz2h/0/1+iu7dPmKiDwDcXLwrG962FdfuOltny8M93AHoyANSMa3wNDnZva4J2N1t2TTGUMVjM4RcR86C+yq2U/HdgMOGc6tA6XLOp8NyLrc3bSvI8IhLqlzvKGpHiJFrhCgEorDzLoCDbFbYHOH4RHMbfEtUPqKYthcyFmeslQfCEUCLBqA9MO1u5yJ7F7vp6zrDPynwn/1ZmLner36dYDS/Jmt6PpeKE14x5yp7liF0UAerCdJ/oi884oabjCEsN2OmuaQbPSLNEIb9x4Q3ZciXkHpefypK+Tdgqn1belo/SCzlXbIPmgbePR4EcBb897Xjpxo7X0/gRVxF46Zma2p8gbCEqFAUZrY/Jaob5fLC70e1v94QuVvHe0tq1cKLmaEipYlo+76th1H1BC5pQrcl9t5go2NrRvlLZDQsXS+EmQXmTQnBNzW6z+srGZMzZF2bfQyCxpsVDSdHI81CKdDLaYcx1fHCI4RD8VmcMJqob5sIyfPDJ/8VmrJPRCxYU7MxrrNqqLeEnXUYXCNkpI886fb0V4v+IiDVPJssroQYXpWklA8VWS1RkdNbdY3QhzNl0JOfPjxyXHwPaJ1Tj8mOjo7cGjq6bZVoylg6xd6ZSMHb4YWStgtSnCxD0VOwWp1Oo0BCjwJsZA8bWOYwrJ6o1IMbmHBSRsz3iH9miWLb4WJMNzsigic1/QhLBIb+nQLypcrjaOtzVx+Rh+vPMlw8qkC0Mx7INxQP1wW63DtPV0z7Dt9F5YF28qVHb1ro9QBKMn8ozsZXBfP8TfT5UcpBCLYXOmgY5smiIjJaOkUhe7KorhkAT4IuZTjlMkLgqq9mS3AdEOfvCirN/cR01bPG0DWbQPkzEr4jJUCb24jL36U7fmVQdmE8qh4pShCps0EJNiylWrir4Oi254+LQMzNE5LR8NpmrBKeVi4F+bj9jgpey1J9ZiMkSkylSoK2kkRb7KvFnNSuJ/sddmQ9dmgZooiahHeTO43My8tjptGv3HVNtm/pmQx3gj9OJVxBLYg4uKITkh0KWXjXE74jJ42wrm08Cb+ll2JEEqSnGmEkwASjE1yZ8TIN8YMpStXuPjO6PZ7U3+F17lbOUdMzASia8NQCZZldSnX7LiFyvusevaWzL1BG203kV//vjfms1/7os9dHkdWLWPcB7hXkg5cAB5m8giJveJIakTwgh5B4pGYPk7neTv76HCqcoH8Dg5PXKO5H6g5AGEDaUxv+T/jlfHWxKP1qJl3f6tzgFrZBnMUqpW3vNFNM6bzhOgNQoZTgP0y0TlvWRB3VKdSuBZxIHgngkGo9YHSiDcJ2Urs/OEQrF6WqJthjJLghkMWk8ThBqHyVGtv7gXDT7u0oUsu0DI56jPJdga1elxv2wdcQhC/3UJHA9SB54KdOEtsdRB4ypBQEOTrrmBFjXrmu6GXYwZD9RQXoWqUdFPD9AkpbFO9fnS6y8+Yl6oo1SnZ5pNcQG4qtIkrFl7ONHOpMOtqlRMn4bpI6NSIg+qfLGMNMz75I0UShMfDxmbTs8y+Yr2xmqe0eDJD56+x/Gw78TBAs8kUHQSERWupRJKiq6Vg4updoKKMWtivIS2oP4JdslZhGmpab16Mgml+Muic+bKjt/wPi+EbydQBg64aieN2VkBY/shmLCv69cLZ2QDafg2eX+A2Uem91VZuzZ1VPdZ7Dvv5c+sOtK4aVan/xI9ae2Fs6lrwy4kea60WVGWNgDCCkdpzsJHV9JptTy7YKXBcrdaj1KzBfON7veD8hMdEfQeqiiZDetbg8qpeFfRCS+q6Hw5lOoQRuGfEz7jBWhoftrNYgO4pszECROBZ2aZ9XYpS7UGvS7XNmKcY8BydenpBay/gmnvmjV/IaFQASEfgtYleIHBnIQZ31jdpFyTWYGbQmjw5aEKpulfMUMMk2dWk+s284Dw/NUtENwqijOZYlVMhywnzu5roESyhSw7wyvDNV95woJ/9Awai2Mmk2Jmca14+5jGF91d6DkeitLo7ubm6VzzbmOPm9rdbU8KRLlOSiMEboUpocvQZiCFVBoMxunfsTVJ2pRkrFOn12OZmEGv8yc8dL/xWWoTUS9cCy4q9ThhIfCv9hDblIWYxNLXGZ6A8MQxnCjfjun1ugKdXg8WCOkNVwQIMAhSIAzN5k76poFrSguOy824BTfL8SyWBSckeDJUXEIcnFaN6VO0ihzMF2PmSzF9MlYNjkAqKPgH88mTa/UpYDL2q/0Ers8i8sxbY791xQQncaJku9agx4qNMLYQ08tNsz/MONbbYfH6nO9At29/81SowdmvD7m0T1TVqumn6Ty6/cJuh3xtxhbX3ogTtXRadc+W0qiCo0lmNQF0SzrNhXPZF2o7O4ivnvm0arqq+gxwmc/ysIo0ciChwKpf/c+QIdDNZObgJi6EL3gOQKMN+bZjRj+SlfwM/o09VDnU17ipfumi0u+Ss83YI3lysjzIZZhBK95rVCSnanEs1aCyQkQRe0vuzZh/Yk6ZGurz1+U315sPQ7nSudaXSMQN1YUt/z9ARKJdPypX0AbQ/vNEWydNmy1/O19MsU1Snn3+8MFXio1mk9qUtx4JV5AQdMliEptM65D4C3kAUQHhc+HWk2RneWXmRSZwufgtBBkd3iF5PMO+mcjVdcF4vKJrLMmqwAnBGRGJBvhKubXbvN5WJLxpkkQVEH70nCUfIbDGdRWRgOv/oSX/RI5TOUzBpYwPmi3mQ2RK4G2+a2vEzxBWIwqtcQEW4rcQSHMTKVUb9I4SiPL0r1zdtjpIITXgOxzJyF+zHSE8y4SCnQDWtshpQmvp5qO6pzPotaViM/PlZ8wi8EycuAWJHV+2Xen928JB5xjn8W8pfxF7XEPcZp/i5tQchbZeDZE0NMT/RhoPY3RnnEN4ty7FLy3Io0aoy9WFpDIoPPHIIAfdXmc/z/AAi042Dknbl35A+gNycPGSK4zbht1RluuYlss7+7SyXR2l7aouEo8+0w+tD3KbTUi4BEP4ZdxcReBr4G4kMnhAYgvG2RDG7MS2+L6ugOJmqoS0g7q2GAuxMY8wY3pypeKkf0nNb5e68J1n17/pRcJTGOTnzeZswmxFwvsGJA6x5O6aOSnbkp3HSWpz8yzxwLRyEXenol5rNGBeNAnkjMnZpuzC4CgN43IiNcl13MDnY0aDtlnsDrzgQ8JDXEiDi9emCRciIRzb2M2HutciWi8eu8vEuEVkFVjGhp2IKl6UCegitOkZDmlexEdbebPdW0MB/tZD/vZyPj2GptJAh31B4WgXNTkQ5DCbJ4DtMsG8Mj46FPJ3eZJ2e/JBfrTjAN5u1aYAscUxMsvv+0Dq+TAbXvgv38zZpRYnOYoZsoRSfJCyBND5kPtj3YGEgzSZukRgf1SgoHbMzxnvvg9tjMsgxK9INSEYiiGMyGby75BaoWCnE4IrJQshP0MWQrzAgCBVCGKAkCmL7w6jLrt4mnmh0DmUuuxmcTqQmZk/E68XBH0Him2V04Ndls592+MW7dazeS51CaZubbw2JZkNysotEDIgHZL9qmBTN5orxRKHriyJLZsN7KJVR6ecZt5VyL1RLA3F9/is8SLHgSxiksiK5X8GVuUSEzFFmGT8z2Es8gDRBhS4V6mXDsb0ZoBseRNarYiHspwYLBdztoiC7yJoDrI+qaXC6qeVGXpJ/yyU2IZUZrbku/DPfMUeFXUbLtKg+DiT/rk06B2DYjz+C4Sr2tkVJOrNuBY36xFw9v9AQ3m4hUzeAj0ctpCjrOENZTHw+mOpCZyBIIFXw7/4HLLZMzsIUXKixfQPXxz0URo8fA9u1pOGfdd8IiP9OHGIwKU4bx4f0lp8Itcrzgt6uWq9cByC5IwCOLlCgS5Qu79zWY/bK9UGXQ4Z9Q2PqQUPsY/3NWYwgrL/I50G6FbcJ938EGNxEpYeXPUyO2fwdt6F/xsVqYX1FWCeYqdP+sbAs7AT/tByAgP4Ws7m2zYZmVCeiNvi7FQ76nhmnSvfG6xQ6nDzeTOeNoC5yx+XtVBolGtTHoQ1uVau7yV9CKeck5mIST/ZLPy78M+gZr27Gz2NRGC7pEnkbJktNz1O+oyvtAUXPzs3MAiFV2rctBj+B2EqBG/3QwLEVkOcizigVcQ9Kpy5YONpClau3tU5tK81OoqrjusAxJjEyoYkBvNka5jJlOq5g381hcwaawnKacS89+4BZHOSfnhWbADUz8kEvv8L0abrN9uv26xAm9P1+B0BrQ+MP3ZHAe4rYNPtd/loazWdYXWYZ42OZnSdDTPFo3SZh91O3qD99EE+yJbSZ/d/mP98Nk2qrUUnSVNO1kJJfl33s8GPg/Q4ytbys6TZNx/Urg2HOKl9j6E0e9906IrvFLCFuu5YQ4J08NFmecPwNU88LRegLoW1HztJz6EHQJTDLix8VU96W0w9gQbuddsDvcGO9yF/vqF7afp8/jGe3amf/azhmZh0JPWR9ps5DPqmO95bKiossz2vZupuoG/JLAoc9ytH+tJuw6gfub8/kOLe6xtzxC6h+vlAQ2qXn+yoXaT6+wADWPIqAlUHDY2ATjSqpzelfROnfYUrNlsngEsOF0XP1KQatVPaNZGGSUCUK1kS3U3DVjoKW9mdkxsMKOiXy1HYaNXsPTHi8s53USx0toh9tDih6vlKsfc48zYZiwvMpm1DUGxnaF6ACQXufIh1E8093Dd4+6l6aXi6V/eQp0JZmLokmnQ8Oh+J86Xd5IU0mife46/y3oCYdJMVWm/LGwh9ITXvyVMyI9/vk4MRdk7TxP1vhNZC/bPdvU332/kflN5ECaPYpXxXnAZL2lBysa+0Cb63FgysxKVkxwIQn1oG0VBUDmGoHqJJNtwX7MVyd0pkxYTe+L9w2OT/sJUZc0l8mSvaOG0Nm9LreJ0Lys6pz8leW5+pkOswxWyFVeURMQHsdGDGPDZ5T1n/3Ou0SvxSrFXW61Qzfd9U3dcfGaVc4poR1+jQMix5cOa2gtflQfIgurMPbfzgF6gUzfm+rI6RehpClj5iSVA5olnliSk1yYnlSck1KftZjcJyQbuwTRBAmKQMuJX+CPGE9LTYkU8RIlGRUBThsdW9yGNbo/MJZzXjuDNaeMRQO+9ggLCR0SV1vY8WN8CpKrYejbUW0dfPvlfW0qC/+xI8Hdiycblj+7ZEZSeVpamxZTXgZgBKVEd1nCKzY/4bGloZW79SZIgzKeRIbHBGbDesA57EdkGaCirH+qOCKOpZJY9uWxjiS2eMjdXG7AaTc9hOe0wDc6/DSv7LVmfqUxGMYE4qrcyugVxyaxP/zPZ5hXH1pnP6oGwTkmFA/SZRl1NLfgHMidE3z7GLT7FybmKp3ujao5X64ubKVUhNtt6fPBjQB/7nq2aCg7RvRgiJIKSWFsdXV0GOFiqrp3PYzLk8JtU3vzDBLURm1SGv3+c3+sQagijBPSTeVVcw16Smda8dq/91RybLIBqWqhxSw/QILUT0L+Oheh/112hDNBp/Fsc/hBWQTg1u7BEWhKZW5l/FG6Qyij5HWTabVopCLvrQkX8iJ5dozPkluMQ+lH3/ZGLoin5FfthdC+kQAab2rGE2xeAYaagaVZn9Bao67AqD/e5x19hscSTUmtENarl9IsKZyRjS+rOTwmar9HY7XtDiJLBMBCD1mxMCQmJaUDpRDgvjIxcxZF3GQWWhSiHyhbjGwgk2RU5wwCUtSPoVkyfFTqtwbN9X0jup7DREW5B+e2BTXinxXUepCUQIxAiEdU64QMGYtkSZtpPkOAdCPzEHQS6RP1LaviE9Rh7yA14MFAg/Guzu4PmYxMHHdvlIR0a3x5ErXzFnbN3VGDTBaX/1OvqNNbw7ClvsmqBVOHTgEZ3U22efQKqhtnSlFBvTFDSiAQKRfsHqns5t8JFKiJIJObd4/7YA5V4K4a1xkwjnNh8jUFVbe/xY+6pjNeFitau2tR/bLlTqdl++ZgcK43on1rRv2w6evcJIrp2pW1jff+TalgG/XRwSg5yZWFW/ZsvTzYP+6ywBasd6iaQKp+/4ch6xtwDCJ1Yw7a5SxoE1rj1dbEQVtd3Tv4Glre5ZoHEBtw6ssIU1wlurpfCniLUm44JW4dAf84n7WgPeaaPIbo+fLcLNaQRehJAfk9OzgjmbSHodmVIdr9NMRdpWU8i1EDgUhYb+Fyo2mzLU7E6D9K5SbUowg0EnzUrxr+Srw+VJYwqGL7rWJdVESELTwgRgYOEK367BEnVrXaJYIdbIxkep4ZQa1kPG69RWKCaq7QwHUWhgqH05ENhxkzOrDHn93tfoI9UHU0JH/qIPuRX1SxUrfGKLlFSWjaSWQarNaGpApRCFrnwE1hTbUVVfw3vWCq67vzttKcxS8lfHxCnZ6rgYmZqtBHtOhxH42QXj4f9q8f9cGqE1pmldMX2qboVTLnRc1joIF9bkfnqVo4iJYdnxQuRBfD6BS7PxaQhyDmkyP5+MLLQQDItFnA8Kx1bfErmuNYtJQ1VQOc4PFXTSOnlUXQbhlHvYNZbMXLXXG0PRVy8kJjRuibSjuhTr8VZ44wuWjuofr1mbrRgjtjN7iZqMebu6U8MxamtItDJbMdW10AjX9o2bx2VtVEK3hX5vRTt+VUzSgUvxwyNzGTgOpXGf8eQQkpFOm8T+I4sOHNhCqnu9uC5fP7rwXceqnLSkjLFrhcd2JhkL07+vfDdzYYGhsmUgyakiL1sc+ktoDZEVj4OlA4GU0Fkm5dxiOf/rg0Va92sET4EqaiIXzZ5hzUmxaXDXiHGFgz/cvhqbcfhwLD1DhEpGES6Q0dpaJYXwugwTYanmtRujsWtlOe3247VqGmTK1RBl8tXiuFIZ6HamamrKfFUCr3DetujEqlWvcObJ1Ern1at+GGKfUw8fvo7H8OeB4w8foV37ZgFnxYLToodiKyOISP23M485jt5anmIJMg6yiXQaq/D6htNIG2AG81vx3QFIwJRrIxu/VMpxYpLA5defqv7ZSc4UvIEnaVZW72OT6ntBvX074Mk1Vloqem8UllPNkoY2ztnV2IO9WUJnns88z7+ZuvCrWoN+DbqLEt40lO7H2cDP6Es+qZZCf4tOtCRzaTRmDPLx+M9Dd4o/ZnPV3mo9fQqJaQSuwYk05O4kJifF+viFgKSo3W9CqvQ3VQAfcybBcs0zWDxHxak4a8QPBFJy7oEyzFdidh9DhcOGoCAoBMKE1LAgMTPGl4GvxXwV6/aC9Xc2jnrJLgyb1RrncZVdEOiUUC+K1xcmm9eqTj7nmI/HBTkl9ydcF6n151ykdqrYCjlxsZUKp8bFuTYWxDCSewrjApWZx9nmKi43bJbTFmDB3+eaf0UtTPf5Pdn9Hu7GCPDKa8unR9oG4mbwNgMWcZOHdeUgwJA2MZ36Uwa8h8bRKrmG/U4X7y685O9xf5VJspFUM25eRjfs5FLm5YkbtK7BhSaTpb+i5sxHpn7uDSFu8qwkbQ9TB48ODyG/fiI3lyFDJ2ZPsKNHiXRsi93eM/V15TFQLJ7W25+vlrOffa/Z5Hr1poH6JNN/EafmMrD6q/bv5AKdYthbA6KtFKzU9cDBvAfoff0EbY6CB38UNADGtSuv1CMeSIMhvqwxc9dCXmuW3C0GYhNcU8Pab/0hGS8RHy0iRshKfLxHT3wN3nyWgT8fb9HD/IyWW1JNWyC+avEuplMwIIYCujqv9okbny6DFx9nXcx7h4gP4pv4Mngz20G9eFP/rKm6Wme5lsmitSebnQWbnozdhXTN2+u5/wGuExzwP7rg09cusLmRbogEUiaLgHHuG8DZnZKC+AXJ+AhkRtzamKil30QXTNFOEpkLRBKV86AoOQk3BohJqYcNYtTe3xz/fSukyf85UbKPAPfe7yRwFE9G0tmfsj6NzaPTCyiVQPCPRspLRgnc33bS2bZvS+4liw4485KSdAwDvjGUQbINRH32vIsilyvecbI4xJ/rDpPPg85Eq0kFZ/GXEc/JtDTY3ZOv+Z5k0IiexvubtH7Og6YxFaNKn9canWZ+kg+hy+L3Wup8+IzHOF/Ywhm78yn58RjkcbyB9zfumFd4hpxGxEiIRKBxRUie1+kIk9QO9IVK6R+ex5f3bPX0nkcvhRciQVwxpCrvNkktQDRR9S9Zn2AtzYQFXzTEY/Ha8QPmuCkF5uU/dALoh2xOWU3vcSRcTDhd+wjK5zJgenu4bje3dvDqd8y+xk6IbUp6JulR0bt7A9k8j4MDOp2T1iR5dZT7la7DmGiCphLK1AicbnOjHmKk36mzM71aSm7Vm8+nfhwVgKTTbRKHN/93Cbg/uCwHqY4n2C5Yrw8KJhap122ADHw/qpqvJB0oiem/3Dh0sbsgL5JruJm/cUMKkNfIP/aKTKfbBb5/SB5Z524bIAF9tuZnaXNX2iFbcHhkpVHHEV0NJUCcFzyxYIdIEnJC1gwkgJjY7SFzeCj2T5JqvJIxsGcksxPaLLtnC2qg7eCtt1I72IlCGY73dX5B6K73gqQ69l2QGZ3GXKi+oMhPmRcU6xZNqls3sEvL5GoQR+jdrESTqpy08FiBZlITSP0FqZDSZ6STJlORaqUqFalThU+vTKkqrWqZlWnCIvVt7ywiApEiiMikyzojERmpFLUWJShlbWXdCUhIydQqMl1ZNSlvvWtUKRYJKCYxSi1WFA2NpSURtGNbtZBKFamLS1iCtVFMLhKCha8GiwRgkxZJmmPieLEI7BgvEoVaUoNai7pjLL9sqTJtirA9MFG2FycZTsdIph/M1Cq0Ug7ehDY9yz9BvQadNiEVcoFMtESaQpYkGrRkdcisSEyCt6Sh9WfRqddarjXpxJL0QsovqOpbQS9pOQSWH5jAMn61Qth6u8H8icTds3lIkSKT/Xu8t51SZcpVqFSlWo1azhhcuHLjzoMnL0zefPjy44+FvSuOAFw8gYIECxEqTDg+AaGkJBKXRBOL8ZH/67HiyMgpxFNSUdNIoIXRSZQkWYpUafQMjNJlyJQFZ2JGsMiWI1eefAUKTVMUkg169Rn1xHxL9NtmsWt6DBm00Bm3bPe1XX70vd2KlVim1M/K/OAnv/vFr37zVLkLJp2zR4U/LDfloksqPffSItWqTFerRp0v1WvUoEmzVi3atHumwwydZpptlqO+Mtcc83R54ZXjLttrnytuuhp7+x1w2BFnHXTItxbYYdwpJzMNeN0G010lZE5r3d8I9WmmPlepcf9XJwAA)format("woff2")}@font-face{font-family:Rajdhani;font-weight:700;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}:root{--bg:#05010f;--text:#e8f9ff;--hint:#8f9cc8;--cyan:#00f0ff;--pink:#ff2bd6;--panel:#0a0f24d9;--row:#0c0a22d9;--danger:#ff3b6b;--amber:#ffb800;--button:var(--cyan);--display:"Orbitron", "Rajdhani", sans-serif;--cut:polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));--cut-s:polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px));--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}*{box-sizing:border-box}html{background:var(--bg)}body{min-height:100vh;color:var(--text);-webkit-tap-highlight-color:transparent;background:linear-gradient(#05010f 0%,#0b0420 55%,#1a0633 100%) fixed;margin:0;font:500 17px/1.4 Rajdhani,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body:before{content:"";z-index:0;pointer-events:none;transform-origin:bottom;background:linear-gradient(#ff2bd626 2px,#0000 2px) 0 0/100% 26px,linear-gradient(90deg,#00f0ff38 2px,#0000 2px) 0 0/34px 100%;height:42vh;animation:3s linear infinite floor;position:fixed;bottom:0;left:-50%;right:-50%;transform:perspective(220px)rotateX(58deg);-webkit-mask:linear-gradient(#0000,#000 70%);mask:linear-gradient(#0000,#000 70%)}@keyframes floor{to{background-position:0 26px,0 0}}body:after{content:"";z-index:50;pointer-events:none;background:repeating-linear-gradient(0deg,#ffffff07 0 1px,#0000 1px 3px);position:fixed;inset:0}main{z-index:1;max-width:480px;margin:0 auto;padding:16px 16px 40px;position:relative}.brand{align-items:center;gap:10px;margin:0 0 16px;display:flex}.brand .logo{background:var(--cyan);color:#000;width:38px;height:38px;clip-path:var(--cut-s);box-shadow:0 0 18px var(--cyan);flex:none;place-items:center;font-size:20px;display:grid}.brand .name{font:900 19px/1 var(--display);letter-spacing:1px;color:#fff;text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 16px #00f0ff88;position:relative}.glitch:before,.glitch:after{content:attr(data-text);pointer-events:none;position:absolute;inset:0;overflow:hidden}.glitch:before{color:var(--cyan);text-shadow:-2px 0 var(--pink);animation:3.2s step-end infinite slice}.glitch:after{color:var(--pink);text-shadow:2px 0 var(--cyan);animation:2.7s step-end infinite reverse slice}@keyframes slice{0%,86%,to{clip-path:inset(0 0 100%);transform:none}88%{clip-path:inset(20% 0 55%);transform:translate(-3px)}90%{clip-path:inset(60% 0 10%);transform:translate(3px)}92%{clip-path:inset(40% 0 35%);transform:translate(-2px)}94%{clip-path:inset(0 0 100%)}}h1{font:900 18px/1.2 var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--cyan);text-shadow:0 0 12px #00f0ff88;margin:6px 0 12px}h2{font:600 12px/1.2 var(--display);text-transform:uppercase;letter-spacing:2.5px;color:var(--hint);margin:22px 2px 10px}p{margin:0 0 14px}b{font-weight:700}.muted{color:var(--hint);font-size:15px}.note,.warning{border-left:3px solid var(--amber);clip-path:var(--cut-s);background:#ffb80014;padding:10px 12px;font-size:15px}.warning{border-left-color:var(--danger);background:#ff3b6b17}.error{color:var(--danger);font-size:15px}a{color:var(--cyan)}a.tx,a.acct,a.coin{color:var(--cyan);border-bottom:1px dashed #00f0ff88;text-decoration:none}.total{clip-path:var(--cut);background:var(--panel);border:1px solid var(--cyan);margin:0 0 14px;padding:16px;position:relative;box-shadow:inset 0 0 22px #ff2bd626,inset 0 0 0 1px #00f0ff55}.total small{font:600 11px var(--display);text-transform:uppercase;letter-spacing:2px;color:var(--hint);display:block}.total .big{font:900 32px/1.15 var(--display);color:var(--cyan);text-shadow:0 0 14px #00f0ffaa;word-break:break-word;margin:6px 0 2px}.total .big .unit{margin-left:6px;font-size:16px}.total .sub{color:var(--pink);font-weight:700}.ticking{text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ffaa}.card{clip-path:var(--cut);background:var(--panel);border:1px solid #00f0ff66;padding:14px;position:relative}.card .label{font:600 11px var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--hint)}.card .label .bal{color:var(--cyan);letter-spacing:0;text-transform:none;font:700 15px Rajdhani,sans-serif}.card .address{word-break:break-all;color:var(--text);margin:6px 0 10px;font:14px/1.35 ui-monospace,Menlo,monospace}.card button{margin:0}.list{margin:0 0 16px;padding:0;list-style:none}.list li{background:var(--row);border-left:3px solid var(--pink);clip-path:var(--cut-s);align-items:center;gap:10px;margin:0 0 8px;padding:10px 12px;display:flex}.list li>span{color:var(--cyan);font:700 13px var(--display);flex:none;width:36px}.list li code{word-break:break-word;flex:1;min-width:0;font:500 16px/1.35 Rajdhani,sans-serif}.list li code small,.list li small{color:var(--hint);font:500 14px/1.35 Rajdhani,sans-serif}.list li .bal{color:var(--cyan);font-weight:700}.coins li{border-left-color:var(--cyan)}.coins .grow{flex:1;min-width:0}.coins .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:17px;display:block;overflow:hidden}.coins .grow small{display:block}.coins .right{text-align:right;white-space:nowrap;font-size:16px;font-weight:700}.coins .right small{font-weight:500;display:block}.coins .right.up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.coins .right.down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.coins .right .move{font:700 12px var(--display);letter-spacing:.5px}.coins .right.up .move{color:#39ff88}.coins .right.down .move{color:var(--danger)}.coins li:has(.right.up){border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.coins li:has(.right.down){border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.live{font:700 10px var(--display);letter-spacing:1.5px;color:#39ff88;vertical-align:2px;border:1px solid #39ff88aa;margin-left:8px;padding:1px 6px;animation:2s ease-in-out infinite livePulse;display:inline-block}.live:before{content:"● "}.live.beat{animation:.6s ease-out liveBeat,2s ease-in-out .6s infinite livePulse}@keyframes livePulse{50%{opacity:.45}}@keyframes liveBeat{0%{box-shadow:0 0 12px #39ff88}}.coins .right.bump .val{animation:.7s ease-out valBump}@keyframes valBump{0%{text-shadow:0 0 14px;filter:brightness(1.8)}}@media (prefers-reduced-motion:reduce){.live,.live.beat,.coins .right.bump .val{animation:none}}.av{background:hsl(var(--hue,190) 90% 55%);color:#05010f;width:36px;height:36px;font:900 12px var(--display);box-shadow:0 0 10px hsl(var(--hue,190) 90% 55% / .5);border-radius:4px;flex:none;place-items:center;display:grid;position:relative;overflow:hidden}.av img{object-fit:cover;background:#05010f;width:100%;height:100%;position:absolute;inset:0}.av.sol{color:#fff;background:linear-gradient(135deg,#9945ff,#14f195)}label{color:var(--hint);margin:0 0 14px;font-size:15px;display:block}label.check{color:var(--text);align-items:center;gap:10px;font-size:17px;display:flex}input,textarea{width:100%;color:var(--text);clip-path:var(--cut-s);background:#0a0f24;border:1px solid #00f0ff55;border-radius:0;outline:none;margin-top:6px;padding:12px;font:500 17px Rajdhani,sans-serif;display:block}input:focus,textarea:focus{border-color:var(--cyan);box-shadow:inset 0 0 12px #00f0ff44}input[type=checkbox]{clip-path:none;width:20px;height:20px;accent-color:var(--pink);margin:0}button{width:100%;font:700 12.5px var(--display);text-transform:uppercase;letter-spacing:1.5px;clip-path:var(--cut-s);color:var(--cyan);box-shadow:inset 0 0 0 1px var(--cyan), inset 0 0 12px #00f0ff40;background:#00f0ff12;border:0;border-radius:0;margin:0 0 10px;padding:14px 10px;transition:transform 80ms,filter .15s;display:block}button:active{filter:brightness(1.3);transform:scale(.98)}button.primary{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5}button.danger{color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger);background:#ff3b6b10}button:disabled{opacity:.4;filter:grayscale(.6)}.row{gap:8px;display:flex}.row button{flex:1}.words{counter-reset:w;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 14px;padding:0;list-style:none;display:grid}.words li{counter-increment:w;background:var(--row);border-left:2px solid var(--cyan);clip-path:var(--cut-s);padding:8px 10px;font-size:18px;font-weight:700}.words li:before{content:counter(w) ". ";color:var(--pink);font-weight:500}.center{text-align:center;color:var(--hint);font:600 13px var(--display);letter-spacing:1.5px;text-transform:uppercase;padding-top:80px}.spinner{border:3px solid #00f0ff22;border-top-color:var(--cyan);border-right-color:var(--pink);border-radius:50%;width:46px;height:46px;margin:0 auto 16px;animation:.7s linear infinite spin;box-shadow:0 0 18px #00f0ff55}@keyframes spin{to{transform:rotate(360deg)}}pre.details{white-space:pre-wrap;word-break:break-word;background:var(--row);clip-path:var(--cut-s);padding:10px 12px;font-size:13px}.version{text-align:center;color:var(--hint);font:600 10px var(--display);letter-spacing:2px;opacity:.7;margin-top:28px}.pickrow{align-items:center;gap:8px;display:flex}.pickrow input{width:22px;height:22px;accent-color:var(--pink);flex:none;margin:0;padding:0}.burst{z-index:100;pointer-events:none;background:#05010fcc;place-items:center;animation:1.3s forwards burst;display:grid;position:fixed;inset:0}.burst:before{content:"";background:repeating-linear-gradient(0deg,#00f0ff22 0 2px,#0000 2px 9px),repeating-linear-gradient(0deg,#0000 0 37px,#ff2bd655 37px 41px);animation:.18s steps(2,end) infinite bars;position:absolute;inset:0}.burst-word{font:900 52px/1 var(--display);color:#fff;letter-spacing:3px;text-shadow:4px 0 var(--pink), -4px 0 var(--cyan), 0 0 30px var(--cyan);animation:.12s steps(2,end) 6 jolt;position:relative}.burst-word:before,.burst-word:after{content:attr(data-text);position:absolute;inset:0}.burst-word:before{color:var(--cyan);animation:.25s step-end infinite cut1}.burst-word:after{color:var(--pink);animation:.2s step-end infinite cut2}@keyframes burst{0%{opacity:0}6%{opacity:1}75%{opacity:1}to{opacity:0}}@keyframes bars{to{background-position:0 9px,0 41px}}@keyframes jolt{0%{transform:translate(-6px,2px)skew(-8deg)}50%{transform:translate(5px,-2px)skew(6deg)}}@keyframes cut1{0%{clip-path:inset(10% 0 60%);transform:translate(-8px)}50%{clip-path:inset(55% 0 20%);transform:translate(6px)}}@keyframes cut2{0%{clip-path:inset(70% 0 5%);transform:translate(7px)}50%{clip-path:inset(25% 0 50%);transform:translate(-5px)}}.shake main{animation:.45s shake}@keyframes shake{0%,to{filter:none;transform:none}20%{filter:hue-rotate(60deg);transform:translate(-4px,1px)}40%{transform:translate(4px,-1px)}60%{filter:hue-rotate(-60deg);transform:translate(-2px)}80%{transform:translate(2px)}}@media (prefers-reduced-motion:reduce){*,:before,:after{transition:none!important;animation:none!important}}.list li small.error{color:var(--danger)}.pinvalue{opacity:0;pointer-events:none;border:0;width:1px;height:1px;margin:0;padding:0;position:absolute}.pindots{justify-content:center;gap:14px;margin:0 0 4px;padding:14px 0 18px;display:flex}.pindots i{background:0 0;border:2px solid #00f0ff66;width:16px;height:16px;transition:background .1s,box-shadow .1s,border-color .1s;transform:rotate(45deg)}.pindots.active i{border-color:var(--cyan)}.pindots i.on{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px var(--pink)}.pindots.nope{animation:.4s nope}.pindots.nope i{border-color:var(--danger)}@keyframes nope{20%{transform:translate(-10px)}40%{transform:translate(9px)}60%{transform:translate(-6px)}80%{transform:translate(4px)}}.keypad{grid-template-columns:repeat(3,1fr);gap:10px;margin:6px 0 16px;display:grid}.keypad .key{font:900 24px/1 var(--display);letter-spacing:0;color:var(--text);text-shadow:0 0 10px #00f0ffaa;-webkit-user-select:none;user-select:none;background:#0c0a22e6;margin:0;padding:16px 0;box-shadow:inset 0 0 0 1px #00f0ff88,inset 0 0 14px #00f0ff30}.keypad .key:active{background:var(--pink);color:#fff;box-shadow:0 0 22px var(--pink), inset 0 0 0 1px #fff;filter:none;transform:scale(.96)}.keypad .key.fn{color:var(--pink);text-shadow:0 0 8px #ff2bd688;font-size:15px}.coinhead{align-items:center;gap:12px;margin:0 0 12px;display:flex}.coinhead .av{width:46px;height:46px;font-size:15px}.coinhead b{font-size:20px;display:block}.coinhead small{color:var(--hint);font-size:14px}.avail{justify-content:space-between;align-items:baseline;margin:0 2px 6px;display:flex}.avail small{font:600 11px var(--display);letter-spacing:2px;color:var(--hint);text-transform:uppercase}.avail>span{font:900 18px var(--display);color:var(--cyan);text-shadow:0 0 10px #00f0ffaa}.amountbox{padding:8px 16px 10px}.amount{text-align:center;padding:12px 0 4px}.amount .num{font:900 46px/1 var(--display);color:#fff;text-shadow:3px 0 var(--pink), -3px 0 var(--cyan), 0 0 22px #00f0ff88;word-break:break-all}.amount .num:after{content:"";background:var(--pink);vertical-align:-.05em;width:3px;height:.85em;box-shadow:0 0 8px var(--pink);margin-left:4px;animation:1s step-end infinite blink;display:inline-block}.amount .num.over{color:var(--danger);text-shadow:0 0 18px var(--danger)}@keyframes blink{50%{opacity:0}}.amount .unit{font:700 16px var(--display);color:var(--cyan);margin-left:6px}.amount .usd{color:var(--hint);min-height:1.4em;margin-top:8px;font-size:15px}input.slider{appearance:none;clip-path:none;width:100%;height:34px;box-shadow:none;background:0 0;border:0;margin:8px 0 2px;padding:0}input.slider::-webkit-slider-runnable-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px;box-shadow:0 0 10px #ff2bd688}input.slider::-webkit-slider-thumb{-webkit-appearance:none;background:var(--pink);width:24px;height:24px;box-shadow:0 0 16px var(--pink), inset 0 0 0 2px #fff;border:0;margin-top:-10px;transform:rotate(45deg)}input.slider::-moz-range-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px}input.slider::-moz-range-thumb{background:var(--pink);border:2px solid #fff;border-radius:0;width:22px;height:22px;transform:rotate(45deg)}input.slider:focus{box-shadow:none}.ticks{color:var(--hint);font:600 10px var(--display);justify-content:space-between;margin:0 2px 10px;display:flex}.chips{grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 12px;display:grid}.chips button{margin:0;padding:9px 0;font-size:11px}.walletsrow{background:var(--row);border-left:3px solid var(--cyan);clip-path:var(--cut-s);justify-content:space-between;align-items:center;margin:0 0 12px;padding:8px 12px;display:flex}.walletsrow small{color:var(--hint);font-size:13px;display:block}.stepper{align-items:center;gap:12px;display:flex}.stepper button{width:40px;margin:0;padding:8px 0;font-size:18px}.stepper b{font:900 22px var(--display);color:var(--cyan);text-align:center;min-width:28px}.stepper.wide{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px;display:grid}.stepper.wide button{width:auto}.keypad{gap:8px;margin:0 0 12px}.keypad .key{padding:14px 0}.keypad .key.dot{font-size:30px;line-height:.8}button.go{padding:16px 10px;font-size:14px}.stepper button{padding:4px 0 6px;font:700 26px/1 Rajdhani,sans-serif}.coins li[data-mint]{cursor:pointer}.coins li[data-mint]:active{filter:brightness(1.3)}.coinhead .live{margin-left:auto}.avail .paid{color:var(--hint);text-shadow:none}.avail.pl.up>span{color:#39ff88;text-shadow:0 0 10px #39ff88aa}.avail.pl.down>span{color:var(--danger);text-shadow:0 0 10px #ff3b6baa}button.gold{color:#1a1000;background:var(--amber);text-shadow:none;box-shadow:inset 0 0 14px #fff6,0 0 16px #ffb80066}button.gold.on{box-shadow:inset 0 0 0 2px #fff,0 0 22px #ffb800cc}.initnote{text-align:center;margin:0 0 12px;font-size:14px}.avail[hidden]{display:none}.solamt,.coinamt{cursor:pointer;text-underline-offset:3px;-webkit-text-decoration:underline dotted #ffffff40;text-decoration:underline dotted #ffffff40}.solamt.usd,.coinamt.usd{color:#39ff88;text-shadow:0 0 8px #39ff8866}.seg{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 10px;display:grid}.seg button{opacity:.55;margin:0;padding:11px 0;font-size:13px}.seg button.on{opacity:1;box-shadow:inset 0 0 0 2px var(--cyan), 0 0 14px #00f0ff66}.seg.small button{padding:8px 0;font-size:11px}.amountbox #when{color:var(--hint);margin-bottom:2px;font-size:12px;display:block}button.small{width:auto;margin:6px 0 0;padding:6px 14px;font-size:11px}.coins small.inorder{color:var(--amber)}.brand .navback{width:38px;height:38px;font:900 22px/1 var(--display);color:var(--cyan);box-shadow:inset 0 0 0 2px var(--cyan), 0 0 12px #00f0ff55;clip-path:var(--cut-s);background:0 0;flex:none;place-items:center;margin:0;padding:0;display:grid}.brand .navback:active{background:var(--cyan);color:#000}#app:has(#after:empty) .navback{visibility:hidden}.openwallet{cursor:pointer}.openwallet:active{filter:brightness(1.3)}.openwallet .open{float:right;color:var(--cyan);font:700 11px var(--display);letter-spacing:1px}.loader{z-index:40;background:#000;position:fixed;inset:0}.loader .ascii{width:100%;height:100%;display:block}.loader .ascii i{font-style:normal}.ascii .kc{color:var(--cyan);text-shadow:0 0 6px #00f0ffaa}.ascii .kp{color:var(--pink);text-shadow:0 0 6px #ff2bd6aa}.ascii .kg{color:#39ff88;text-shadow:0 0 6px #39ff88aa}.ascii .kr{color:var(--danger);text-shadow:0 0 6px #ff3b6baa}.ascii .ka{color:var(--amber);text-shadow:0 0 8px #ffb800cc}.ascii .kw{color:#fff;text-shadow:0 0 8px #fff}.ascii .kd{color:#1a2050}.ascii .kh{color:#2c3a8c}.ascii .kv{color:#5b3ab8}.ascii .kf{color:#3a1f4f}.ascii .kc,.ascii .kp,.ascii .kg,.ascii .kr{opacity:.9}.loadtag{font:900 16px var(--display);letter-spacing:3px;color:var(--cyan);text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ff88;margin:14px 0 4px}.loadtag.hit{color:#39ff88;text-shadow:2px 0 var(--pink), -2px 0 #39ff88, 0 0 18px #39ff88;animation:.25s steps(2,end) 2 tagjolt}@keyframes tagjolt{50%{transform:translate(3px)skew(-8deg)}}.loadlabel{color:var(--hint);font:600 12px var(--display);letter-spacing:1.5px;text-transform:uppercase;margin:4px 16px}.loader .ascii.flash{filter:brightness(1.5)saturate(1.4);box-shadow:inset 0 0 0 2px #39ff88,0 0 40px #39ff88aa}.ascii .kC{color:#00f0ff;opacity:.28}.ascii .kP{color:#ff2bd6;opacity:.28}.ascii .kG{color:#39ff88;opacity:.28}.ascii .kR{color:#ff3b6b;opacity:.28}#app.loading .brand,#app.loading .version,#app.loading .note{display:none}.hackloader{z-index:40;background:#000;position:fixed;inset:0;overflow:hidden}.hackloader .hackart{background:#02000a;width:100%;height:100%;display:block;position:absolute;inset:0}.hackloader .loadterm{z-index:1;visibility:hidden;color:#39ff88;text-shadow:0 0 6px #39ff88aa}.hackloader .loadterm .cur{background:#39ff88}.brand .logo.sol{background:#05010f;position:relative;overflow:hidden;box-shadow:0 0 18px #00f0ff66,inset 0 0 0 1px #00f0ff88}.logo.sol svg{width:26px;height:19px;position:absolute;top:9px;left:6px}.logo.sol .sol-main{filter:drop-shadow(0 0 4px #9a5cff);animation:3.2s step-end infinite solmain}.logo.sol .sol-c,.logo.sol .sol-p{opacity:0;mix-blend-mode:screen}.logo.sol .sol-c{animation:3.2s step-end infinite solc}.logo.sol .sol-p{animation:3.2s step-end infinite solp}@keyframes solmain{0%,84%,to{clip-path:none;transform:none}86%{clip-path:inset(0 0 40%);transform:translate(2px)}89%{clip-path:none;transform:translate(-2px)skew(-8deg)}92%{clip-path:inset(35% 0 0);transform:translate(1px)}95%{clip-path:none;transform:none}}@keyframes solc{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(0 0 55%);transform:translate(-3px)}89%{opacity:.85;clip-path:inset(40% 0 25%);transform:translate(-2px,1px)}92%{opacity:.7;clip-path:inset(70% 0 0);transform:translate(-4px)}95%{opacity:.5;clip-path:none;transform:translate(-1px)}}@keyframes solp{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(45% 0 0);transform:translate(3px)}89%{opacity:.85;clip-path:inset(0 0 60%);transform:translate(2px,-1px)}92%{opacity:.7;clip-path:inset(20% 0 45%);transform:translate(4px)}95%{opacity:.5;clip-path:none;transform:translate(1px)}}@media (prefers-reduced-motion:reduce){.logo.sol svg{animation:none!important}}.snatchfx{z-index:60;touch-action:none;width:100vw;height:100vh;position:fixed;inset:0}.pnl .pv{font:700 16px var(--display);letter-spacing:.5px;white-space:nowrap;color:var(--hint)}.pnl .pv.big{flex:none;font-size:17px}.pnl .pv.up,.total.pnl .up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.pnl .pv.down,.total.pnl .down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.pnl .pv.none{letter-spacing:0;color:var(--hint);text-shadow:none;font:500 13px Rajdhani,sans-serif}.card .label .pv{font-size:15px}.total.pnl{cursor:pointer}.total.pnl .big span{transition:color .2s}.list.pnl li.pnlup{border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.list.pnl li.pnldown{border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.pnl .right{cursor:pointer}.pnltabs{gap:8px;margin:0 0 14px;display:flex}.pnltabs button{font:700 16px var(--display);flex:1;margin:0;padding:10px 0}.pnltabs button.on{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5,0 0 14px #ff2bd688}.trades li{border-left-color:var(--cyan)}.trades .grow{flex:1;min-width:0}.trades .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:16px;display:block;overflow:hidden}.trades .grow small{display:block}.trades .tag{width:44px;font:700 11px var(--display);letter-spacing:1px;color:var(--cyan);flex:none}.trades li.sell .tag{color:var(--pink)}.trades .right{text-align:right}.trades .right small{color:var(--hint);font:500 13px Rajdhani,sans-serif;display:block}.trades .pv.spent{color:var(--text);text-shadow:none}.loadterm{left:12px;right:12px;bottom:calc(24px + env(safe-area-inset-bottom));pointer-events:none;color:#00f0ff;text-shadow:0 0 6px #00f0ffaa;font:700 12px/16px ui-monospace,Menlo,Consolas,monospace;position:absolute}.loadterm .tl{white-space:pre;opacity:.6;background:#0009;width:fit-content;max-width:100%;padding:0 3px;overflow:hidden}.loadterm .tl:nth-last-child(2){opacity:.8}.loadterm .tl:last-child{opacity:1}.loadterm .cur{vertical-align:-1px;background:#00f0ff;width:8px;height:12px;margin-left:2px;animation:.66s step-end infinite termBlink;display:inline-block}@keyframes termBlink{50%{opacity:0}}.sharecard{clip-path:var(--cut);aspect-ratio:1080/1350;background:#000;margin:12px 0;box-shadow:0 0 24px #00f0ff44}.sharecard img{-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto;width:100%;height:100%;display:block}.sharecard.hint{animation:1.2s ease-out 2 cardHint}@keyframes cardHint{50%{box-shadow:0 0 36px #ff2bd6}}.cardme{color:var(--hint);align-items:center;gap:10px;margin:10px 2px;display:flex}.cardme input{width:20px;height:20px;accent-color:var(--pink)}.coins small.share{color:var(--pink);font:700 11px var(--display);letter-spacing:.5px}`,Nn=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function Pn(e,t,n,{ms:r=1100,delay:i=0,final:a=n(t)}={}){if(Nn()||!Number.isFinite(t)||t===0){e.textContent=a;return}e.classList.add(`ticking`);let o=performance.now()+i,s=i=>{let c=Math.min(1,Math.max(0,(i-o)/r));c>=1?(e.textContent=a,e.classList.remove(`ticking`)):(e.textContent=n(t*(1-2**(-10*c))).replace(/\d(?=\d?$)/g,()=>String(Math.floor(Math.random()*10))),requestAnimationFrame(s))};requestAnimationFrame(s)}function Fn(e,t){let n=e.replace(/[^A-Za-z0-9◎]/g,``).slice(0,2).toUpperCase()||`?`;return`<div class="av" style="--hue:${[...e].reduce((e,t)=>(e*31+t.charCodeAt(0))%360,7)}"><b>${n}</b>${t?`<img alt="" loading="lazy" src="${t.replace(/["<>&]/g,encodeURIComponent)}">`:``}</div>`}function In(){document.querySelectorAll(`.av img`).forEach(e=>e.addEventListener(`error`,()=>e.remove()))}var Ln=1200,Rn=`./oni-1.webp`,zn=[[130,95],[235,235],[285,95],[340,175],[480,140],[625,170],[665,100],[720,215],[835,85],[815,330],[845,420],[800,530],[785,700],[765,850],[705,965],[640,1065],[560,1125],[400,1125],[320,1065],[250,965],[200,850],[180,700],[150,530],[110,420],[150,330]],Bn=800,Vn=4.1,Hn=.22,Un=` .:-=+*#%@`,Wn=8,Gn=13,Kn=[{x:12,y:22,w:320,h:225,color:`#ff5a3a`},{x:355,y:22,w:330,h:125,color:`#f0a040`},{x:695,y:22,w:255,h:300,color:`#f5dc55`},{x:12,y:265,w:140,h:560,color:`#a77cf0`},{x:12,y:880,w:320,h:300,color:`#e6e0f0`},{x:770,y:470,w:180,h:700,color:`#b9a3f0`}],qn=18,Jn=`600 15px ui-monospace, Menlo, Consolas, monospace`,Yn=55,Xn=null,Zn=!1,Qn=null,$n=null,er=null,tr=null,nr=null,rr=null,ir=null,ar=null,or=null,sr=0,cr=null,lr=(e=960,t=Ln)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function ur(){let e=lr(),t=e.getContext(`2d`);return t.beginPath(),zn.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t.fillStyle=`#fff`,t.shadowColor=`#fff`,t.shadowBlur=36,t.fill(),t.shadowBlur=0,t.fill(),e}function dr(e){let t=ur();$n=lr();let n=$n.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(0,0,960,Ln),n.globalCompositeOperation=`destination-out`,n.drawImage(t,0,0),Qn=lr(),n=Qn.getContext(`2d`),n.drawImage(e,0,0),n.globalCompositeOperation=`destination-in`,n.drawImage($n,0,0);let r=Math.ceil(960/Wn),i=Math.ceil(Ln/Gn),a=lr(r,i).getContext(`2d`,{willReadFrequently:!0});a.drawImage(e,0,0,r,i);let o=a.getImageData(0,0,r,i).data;or=o,sr=r,er=lr(),n=er.getContext(`2d`),n.fillStyle=`#000`,n.fillRect(0,0,960,Ln),n.font=`700 12px ui-monospace, Menlo, Consolas, monospace`,n.textBaseline=`top`;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let i=(e*r+t)*4,a=o[i],s=o[i+1],c=o[i+2],l=(.3*a+.59*s+.11*c)/255,u=Un[Math.min(9,Math.floor(l**.7*10*1.15))];if(u===` `)continue;let d=Math.min(2.2,1.4/Math.max(.25,Math.max(a,s,c)/255));n.fillStyle=`rgb(${Math.min(255,a*d)|0},${Math.min(255,s*d)|0},${Math.min(255,c*d)|0})`,n.fillText(u,t*Wn,e*Gn)}n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0);let s=t=>{let n=lr(),r=n.getContext(`2d`);return r.drawImage(e,0,0),r.globalCompositeOperation=`multiply`,r.fillStyle=t,r.fillRect(0,0,960,Ln),n};tr=s(`#ff0000`),nr=s(`#00ffff`),rr=lr(),ir=t,cr=lr(),Zn=!0}var fr=0;function pr(){if(Xn||Date.now()<fr)return;let e=new Image;Xn=e,e.onload=()=>dr(e),e.onerror=()=>{Xn===e&&(Xn=null),fr=Date.now()+2e3},e.src=Rn}var mr=pr,hr=e=>Array.from({length:e},()=>Math.floor(Math.random()*256).toString(16).padStart(2,`0`)).join(` `),gr=()=>Array.from({length:2},()=>Math.floor(Math.random()*65536).toString(16).padStart(4,`0`)).join(``),_r=e=>e[Math.floor(Math.random()*e.length)],vr=(e,t,n=0)=>(e+Math.random()*(t-e)).toFixed(n),yr=[()=>[`$ ssh root@node${vr(1,99)}.snatch`,`> handshake ok`,`> session ${gr()}`],()=>[`$ ./scan --wallets --deep`,`[+] ${gr()}..${gr().slice(0,4)} found`,`[+] ${vr(2,40)} wallets live`],()=>[`$ jup quote SOL ${_r([`BONK`,`WIF`,`PUMP`,`TARGET`])}`,`[*] route ${vr(1,4)} hops ${vr(.05,.9,2)}%`,`[ok] out ${vr(1e3,99999)}`],()=>[`$ tail -f mempool.log`,`tx ${gr()} ${vr(.1,9,2)} SOL`,`tx ${gr()} ${vr(.1,9,2)} SOL`,`tx ${gr()} ${vr(.1,9,2)} SOL`],()=>[`$ decrypt --key ****${vr(1e3,9999)}`,`0x${gr()}: ${hr(6)}`,`0x${gr()}: ${hr(6)}`,`[ok] unlocked`],()=>[`$ claw --lock target`,`[*] locking ${gr()}`,`[!!] TARGET LOCKED`],()=>[`$ snatch --now`,`[>] ${vr(1,60,1)} SOL tracked`,`[ok] SNATCHED`],()=>[`$ ping rpc.solana`,`64 bytes time=${vr(9,80)}ms`,`64 bytes time=${vr(9,80)}ms`],()=>[`$ cat /dev/oni | xxd`,`${hr(8)}`,`${hr(8)}`,`${hr(8)}`]],br=Kn.map(()=>({lines:[],typing:``,typed:0,queue:[],wait:Math.random()*.8}));function xr(e,t,n){if(e.wait>0)e.wait-=n;else if(e.typing||(e.queue.length||(e.queue=_r(yr)()),e.typing=e.queue.shift(),e.typed=e.typing.startsWith(`$`)?0:e.typing.length),e.typed=Math.min(e.typing.length,e.typed+Yn*n*(.7+Math.random()*.6)),e.typed>=e.typing.length){for(e.lines.push(e.typing),e.typing=``,e.typed=0;e.lines.length>t-1;)e.lines.shift();e.wait=e.queue.length?.05+Math.random()*.15:.35+Math.random()*.7}}function Sr(e){let t=rr.getContext(`2d`);t.globalCompositeOperation=`source-over`,t.clearRect(0,0,960,Ln),t.font=Jn,t.textBaseline=`top`,Kn.forEach((n,r)=>{let i=br[r];xr(i,Math.floor(n.h/qn),e);let a=i.typing.slice(0,Math.floor(i.typed)),o=[...i.lines,a];t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip();let s=n.y+n.h-o.length*qn;if(o.forEach((e,r)=>{let i=s+r*qn,a=Math.min(n.w,t.measureText(e).width+6);t.fillStyle=`rgba(0,0,0,0.6)`,t.fillRect(n.x,i,a,qn),t.fillStyle=n.color,t.globalAlpha=r===o.length-1?1:.55+.4*r/o.length,t.fillText(e,n.x+3,i+1),t.globalAlpha=1}),Math.floor(Or*3)%2==0){let e=n.x+3+t.measureText(a).width;t.fillStyle=n.color,t.fillRect(e,s+(o.length-1)*qn+2,9,14)}t.restore()}),t.globalCompositeOperation=`destination-in`,t.drawImage($n,0,0)}var Cr=3,wr=Array.from({length:Math.ceil(960/Cr)},()=>({len:16+Math.random()**2*240,lead:Math.random()<.18?4+Math.random()*30:0,speed:1+Math.random()*4,phase:Math.random()*7,width:Math.random()<.25?3:1.8,on:Math.random()>.22})),Tr=0,Er=.8,Dr=1,Or=0,kr=0,Ar=!1,jr=()=>Math.floor(Or/Vn);function Mr(e,t){let n=jr();Or+=t,pr();let r=e.getContext(`2d`),i=Math.min(2,window.devicePixelRatio||1),a=Math.round((e.clientWidth||340)*i),o=Math.round((e.clientHeight||600)*i);if((e.width!==a||e.height!==o)&&(e.width=a,e.height=o),r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation=`source-over`,r.globalAlpha=1,r.fillStyle=`#000`,r.fillRect(0,0,a,o),!Zn||!Xn)return;let s=a/o,c=Math.min(960,Math.max(Bn,Ln*s)),l=c/s,u=a/c,d=-((960-c)/2)*u,f=-((Ln-l)/2)*u;jr()!==n&&jr()%3==0?(Tr=Or+.32,Dr=2):Or>=Er&&(Tr=Or+.06+Math.random()*.18,Dr=.6+Math.random()*.8,Er=Or+.5+Math.random()*1.8);let p=Or<Tr;r.setTransform(u,0,0,u,d,f),l>1200&&(r.globalAlpha=.6,r.save(),r.scale(1,-1),r.drawImage(Qn,0,0),r.drawImage(Qn,0,-2*Ln),r.restore(),r.globalAlpha=1),r.drawImage(Xn,0,0),r.globalCompositeOperation=`lighter`,r.globalAlpha=.16,r.drawImage(Qn,0,0),r.globalCompositeOperation=`source-over`,Sr(t),r.globalAlpha=.62,r.drawImage(rr,0,0),r.globalAlpha=Hn+Math.sin(Or*7)*.03+(p?.25*Dr:0),r.drawImage(er,0,0);let m=25+1325*(Or%Vn/Vn);for(let e=0;e<17;e++){let t=m-170+e*170/17;r.globalAlpha=.06+e/16*.6,r.drawImage(er,0,t,960,11,0,t,960,11)}r.globalAlpha=1;let h=cr.getContext(`2d`);h.globalCompositeOperation=`source-over`,h.globalAlpha=1,h.clearRect(0,0,960,Ln);let g=Math.max(0,Math.min(Math.ceil(Ln/Gn)-1,Math.floor(m/Gn)));wr.forEach((e,t)=>{if(!e.on)return;let n=t*Cr,r=e.len*(.7+.3*Math.sin(Or*e.speed+e.phase));Math.random()<.05&&(r*=1.4+Math.random());let i=(g*sr+Math.min(sr-1,Math.floor(n/Wn)))*4,a=or[i],o=or[i+1],s=or[i+2],c=Math.min(2.6,1.6/Math.max(.2,Math.max(a,o,s)/255)),l=`${Math.min(255,a*c)|0},${Math.min(255,o*c)|0},${Math.min(255,s*c)|0}`;h.fillStyle=`rgba(${l},0.3)`,h.fillRect(n,m-r,e.width,r*.45),h.fillStyle=`rgba(${l},0.6)`,h.fillRect(n,m-r*.55,e.width,r*.3),h.fillStyle=`rgba(${l},1)`,h.fillRect(n,m-r*.25,e.width,r*.25),e.lead&&(h.fillStyle=`rgba(${l},0.35)`,h.fillRect(n,m,e.width,e.lead*(.6+.4*Math.sin(Or*2+e.phase)))),r>150&&t%4==0&&(h.fillStyle=`rgba(${l},0.9)`,h.fillRect(n-1.5,m-r-4,4,4))}),h.fillStyle=`rgba(255,255,255,0.35)`;for(let e=0;e<960;e+=24)h.fillRect(e,m-Math.random()*2,18+Math.random()*8,1.5);h.globalCompositeOperation=`destination-in`,h.drawImage(ir,0,0),r.globalCompositeOperation=`lighter`,r.drawImage(cr,0,0),r.globalCompositeOperation=`source-over`,r.setTransform(1,0,0,1,0,0);let _=p?3+Math.floor(Math.random()*6*Dr):+(Math.random()<.12);if(p||_){ar||=lr(a,o),(ar.width!==a||ar.height!==o)&&(ar.width=a,ar.height=o);let t=ar.getContext(`2d`);t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,t.clearRect(0,0,a,o);let n=p?(Math.random()-.5)*14*Dr*u:0,i=p?(Math.random()-.5)*6*Dr*u:0;t.drawImage(e,n,i);for(let r=0;r<_;r++){let r=Math.random()*o,s=(4+Math.random()*(p?40:10))*u,c=(Math.random()-.5)*(p?80:24)*u*Dr;t.drawImage(e,0,r,a,s,c+n,r+i,a,s)}if(p){let e=(6+Math.random()*10)*Dr;t.setTransform(u,0,0,u,d+n,f+i),t.globalCompositeOperation=`lighter`,t.globalAlpha=.45,t.drawImage(tr,e,0),t.drawImage(nr,-e,0),t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-atop`,t.globalAlpha=1;for(let e=0;e<3;e++)t.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,t.fillRect(0,Math.random()*o,a,(1+Math.random()*2)*u);Math.random()<.3&&(t.fillStyle=`rgba(0,0,0,0.35)`,t.fillRect(0,0,a,o))}t.globalCompositeOperation=`destination-in`,t.setTransform(u,0,0,u,d,f),t.drawImage(ir,0,0),r.drawImage(ar,0,0)}r.fillStyle=`rgba(0,0,0,0.18)`;for(let e=Or*40%4*u;e<o;e+=4*u)r.fillRect(0,e,a,1.5*u);let v=r.createRadialGradient(a/2,o/2,Math.min(a,o)*.42,a/2,o/2,Math.hypot(a,o)*.55);v.addColorStop(0,`rgba(0,0,0,0)`),v.addColorStop(1,`rgba(0,0,0,0.6)`),r.fillStyle=v,r.fillRect(0,0,a,o),r.setTransform(1,0,0,1,0,0)}var Nr=e=>`<div class="loader"><canvas class="ascii" id="ascii" role="img" aria-label="${e.replace(/"/g,`&quot;`)}"></canvas></div>`;function Pr(){let e=document.getElementById(`ascii`);if(e&&Mr(e,0),Ar)return;Ar=!0,kr=0;let t=e=>{let n=document.getElementById(`ascii`);if(!n){Ar=!1;return}let r=kr?Math.min(.1,(e-kr)/1e3):1/60;kr=e,Mr(n,r),requestAnimationFrame(t)};requestAnimationFrame(t)}var Fr=`<polygon points="53,0 351,0 298,68 0,68"/><polygon points="0,94 298,94 351,162 53,162"/><polygon points="53,188 351,188 298,256 0,256"/>`,Ir=(e,t,n=``)=>`<svg class="${e}" viewBox="0 0 351 256" aria-hidden="true">${n}<g fill="${t}">${Fr}</g></svg>`,Lr=`<defs><linearGradient id="solgrad" gradientUnits="userSpaceOnUse" x1="0" y1="256" x2="351" y2="0"><stop offset="0" stop-color="#e028fc"/><stop offset="0.5" stop-color="#7c8be0"/><stop offset="1" stop-color="#1fe9b1"/></linearGradient></defs>`,Rr=()=>`<div class="logo sol" aria-label="Solana">${Ir(`sol-c`,`#00f0ff`)}${Ir(`sol-p`,`#ff2bd6`)}${Ir(`sol-main`,`url(#solgrad)`,Lr)}</div>`,zr=1080,I=1350,Br=`"Orbitron", "Rajdhani", sans-serif`,Vr=`"Rajdhani", -apple-system, sans-serif`,Hr={main:`#2bff88`,glow:`rgba(43,255,136,0.75)`,tint:[20,255,140]},Ur={main:`#ff3b6b`,glow:`rgba(255,59,107,0.75)`,tint:[255,40,90]},Wr=new Map;function Gr(e,t){let n=`${t}:${e}`,r=Wr.get(n);return r||(r=new Promise(n=>{let r=new Image;t&&(r.crossOrigin=`anonymous`);let i=setTimeout(()=>n(null),6e3);r.onload=()=>{clearTimeout(i),n(r)},r.onerror=()=>{clearTimeout(i),n(null)},r.src=e}),Wr.set(n,r)),r}function Kr(e){try{let t=document.createElement(`canvas`);t.width=t.height=2;let n=t.getContext(`2d`);return n.drawImage(e,0,0,2,2),n.getImageData(0,0,1,1),!0}catch{return!1}}var qr=(e,t)=>{let n=Math.abs(e);return t===`sol`?`${n>=100?n.toFixed(1):n>=1?n.toFixed(2):n.toFixed(3)} SOL`:`$${n>=1e3?Math.round(n).toLocaleString(`en-US`):n.toFixed(2)}`},Jr=e=>{let t=Math.abs(e);return`${e>=0?`+`:`−`}${t>=1e3?Math.round(t).toLocaleString(`en-US`):t>=100?Math.round(t):t.toFixed(1)}%`},Yr=(e,t)=>{let n=Math.max(0,t-e);if(n<60)return`${Math.max(1,Math.round(n))}s`;let r=Math.round(n/60);if(r<60)return`${r}m`;let i=Math.floor(r/60);return i<48?`${i}h ${r%60}m`:`${Math.floor(i/24)}d ${i%24}h`};function Xr(e,t,n,r,i,a){let o=r;for(;o>20&&(e.font=`${n} ${o}px ${i}`,!(e.measureText(t).width<=a));o-=4);return o}function Zr(e,t,n,r,i,a){e.beginPath(),e.moveTo(t,n),e.lineTo(t+r-a,n),e.lineTo(t+r,n+a),e.lineTo(t+r,n+i),e.lineTo(t+a,n+i),e.lineTo(t,n+i-a),e.closePath()}function Qr(e,t,n,r){let i=r?Hr:Ur;if(n===`oni`){let n=I/1200*960;e.drawImage(t,0,0,960,1200,150,0,n,I)}else{let n=1500,r=I/n*1024;e.drawImage(t,0,230,1024,n,418.4,0,r,I),e.save(),e.globalCompositeOperation=`multiply`;let a=e.createLinearGradient(0,0,zr,I);a.addColorStop(0,`#00f0ff`),a.addColorStop(.45,`#7a3cff`),a.addColorStop(.7,`#ff2bd6`),a.addColorStop(1,`rgb(${i.tint.join(`,`)})`),e.fillStyle=a,e.fillRect(0,0,zr,I),e.restore()}e.save(),e.globalCompositeOperation=`source-over`;let a=e.createLinearGradient(0,0,zr,0);a.addColorStop(0,`rgba(5,1,15,0.97)`),a.addColorStop(.42,`rgba(5,1,15,0.82)`),a.addColorStop(.75,`rgba(5,1,15,0.15)`),a.addColorStop(1,`rgba(5,1,15,0.05)`),e.fillStyle=a,e.fillRect(0,0,zr,I);let o=e.createLinearGradient(0,I*.55,0,I);o.addColorStop(0,`rgba(5,1,15,0)`),o.addColorStop(.55,`rgba(5,1,15,0.9)`),o.addColorStop(1,`rgba(5,1,15,0.98)`),e.fillStyle=o,e.fillRect(0,I*.55,zr,I*.45);let s=e.createRadialGradient(zr*.8,I*.35,50,zr*.8,I*.35,zr);s.addColorStop(0,`rgba(${i.tint.join(`,`)},0.18)`),s.addColorStop(1,`rgba(${i.tint.join(`,`)},0)`),e.globalCompositeOperation=`screen`,e.fillStyle=s,e.fillRect(0,0,zr,I),e.restore()}function $r(e,t){let n=t||1,r=()=>(n=n*16807%2147483647)/2147483647;e.save(),e.fillStyle=`rgba(0,0,0,0.22)`;for(let t=0;t<I;t+=4)e.fillRect(0,t,zr,1.5);for(let t=0;t<7;t++){let t=r()*I,n=3+r()*14,i=(r()-.5)*60;e.drawImage(e.canvas,0,t,zr,n,i,t,zr,n)}e.restore()}function ei(e,t,n,r){let i=r/256,a=[[53,0,351,0,298,68,0,68],[0,94,298,94,351,162,53,162],[53,188,351,188,298,256,0,256]],o=e.createLinearGradient(t,n+r,t+351*i,n);o.addColorStop(0,`#e028fc`),o.addColorStop(.5,`#7c8be0`),o.addColorStop(1,`#1fe9b1`);let s=(r,o)=>{e.fillStyle=o;for(let o of a){e.beginPath();for(let a=0;a<8;a+=2)e.lineTo(t+r+o[a]*i,n+o[a+1]*i);e.closePath(),e.fill()}};e.save(),e.globalAlpha=.6,s(-4,`#00f0ff`),s(4,`#ff2bd6`),e.globalAlpha=1,s(0,o),e.restore()}function ti(e,t,n,r,i,a,o){if(e.save(),e.beginPath(),e.arc(n,r,i,0,Math.PI*2),e.closePath(),t){e.clip();let a=Math.max(2*i/t.width,2*i/t.height);e.drawImage(t,n-t.width*a/2,r-t.height*a/2,t.width*a,t.height*a)}else{let t=e.createLinearGradient(n-i,r-i,n+i,r+i);t.addColorStop(0,`#ff2bd6`),t.addColorStop(1,`#00f0ff`),e.fillStyle=t,e.fill(),e.fillStyle=`#05010f`,e.font=`900 ${Math.round(i*1.05)}px ${Br}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(a.slice(0,1).toUpperCase()||`?`,n,r+i*.05)}e.restore(),e.save(),e.strokeStyle=o,e.lineWidth=5,e.shadowColor=o,e.shadowBlur=18,e.beginPath(),e.arc(n,r,i+3,0,Math.PI*2),e.stroke(),e.restore()}function ni(e,t,n,r,i,a){e.save(),e.textAlign=`left`,e.textBaseline=`alphabetic`,e.globalAlpha=.7,e.fillStyle=`#00f0ff`,e.fillText(t,n-6,r),e.fillStyle=`#ff2bd6`,e.fillText(t,n+6,r),e.globalAlpha=1,e.shadowColor=a,e.shadowBlur=40,e.fillStyle=i,e.fillText(t,n,r),e.shadowBlur=0,e.fillText(t,n,r),e.restore()}async function ri(e,t,n,r){e.width=zr,e.height=I;let i=e.getContext(`2d`);await Promise.all([document.fonts.load(`900 100px "Orbitron"`),document.fonts.load(`700 40px "Rajdhani"`),document.fonts.load(`500 40px "Rajdhani"`)]).catch(()=>{});let[a,o,s]=await Promise.all([Gr(r,!1),t.logo?Gr(t.logo,!0):Promise.resolve(null),t.user?.photo?Gr(t.user.photo,!0):Promise.resolve(null)]),c=t.pct>=0,l=c?Hr:Ur;i.fillStyle=`#05010f`,i.fillRect(0,0,zr,I),a&&Qr(i,a,n,c),$r(i,Math.round(t.lastAt+t.pct*1e3)),ei(i,72,70,46),i.fillStyle=`#e8f9ff`,i.font=`900 34px ${Br}`,i.textBaseline=`alphabetic`,i.textAlign=`left`,i.shadowColor=`rgba(0,240,255,0.8)`,i.shadowBlur=16,i.fillText(`KRYPTO SNATCHER`,152,108),i.shadowBlur=0;let u=230;t.user?(ti(i,s&&Kr(s)?s:null,114,u,42,t.user.name,`#ff2bd6`),i.fillStyle=`#e8f9ff`,i.font=`700 44px ${Vr}`,i.fillText(t.user.name.slice(0,22),180,u+15),u+=110):u+=30,ti(i,o&&Kr(o)?o:null,122,u+40,50,t.symbol,l.main),i.fillStyle=`#ffffff`,Xr(i,`$${t.symbol}`,900,64,Br,560),i.fillText(`$${t.symbol}`,197,u+50),i.fillStyle=`#8f9cc8`,i.font=`500 32px ${Vr}`,i.fillText(t.name.slice(0,32),200,u+92);let d=Jr(t.pct);Xr(i,d,900,190,Br,936),ni(i,d,72,u+330,l.main,l.glow),i.font=`700 58px ${Vr}`,i.fillStyle=l.main,i.fillStyle=t.pnl>=0?Hr.main:Ur.main,i.fillText(`${t.pnl>=0?`+`:`−`}${qr(t.pnl,t.unit)} ${t.pnl>=0?`profit`:`loss`}`,76,u+420);let f=t.finished?c?`PRINTED`:`REKT`:`STILL HOLDING`;i.font=`900 30px ${Br}`;let p=i.measureText(f).width+48;Zr(i,72,u+460,p,56,12),i.fillStyle=c?`rgba(43,255,136,0.14)`:`rgba(255,59,107,0.14)`,i.fill(),i.strokeStyle=l.main,i.lineWidth=3,i.stroke(),i.fillStyle=l.main,i.fillText(f,96,u+499),Zr(i,72,1020,936,200,22),i.fillStyle=`rgba(10,15,36,0.86)`,i.fill(),i.strokeStyle=`rgba(0,240,255,0.55)`,i.lineWidth=2,i.stroke(),[{k:`PUT IN`,v:qr(t.paid,t.unit),c:`#e8f9ff`},{k:t.finished?`GOT BACK`:`WORTH NOW`,v:qr(t.got,t.unit),c:l.main},{k:`HELD`,v:Yr(t.firstAt,t.lastAt),c:`#e8f9ff`}].forEach((e,t)=>{let n=72+312*t+36;i.fillStyle=`#8f9cc8`,i.font=`700 26px ${Br}`,i.fillText(e.k,n,1090),i.fillStyle=e.c,Xr(i,e.v,700,54,Vr,262),i.fillText(e.v,n,1160),t&&(i.fillStyle=`rgba(0,240,255,0.25)`,i.fillRect(72+312*t,1060,2,120))}),i.fillStyle=`#8f9cc8`,i.font=`500 30px ${Vr}`;let m=new Date(t.lastAt*1e3).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`});i.fillText(`${t.wallets} wallet${t.wallets===1?``:`s`} · ${m}`,72,1278),i.textAlign=`right`,i.fillStyle=`#00f0ff`,i.font=`700 28px ${Br}`,i.fillText(c?`> GG_`:`> RUN IT BACK_`,1008,1278),i.textAlign=`left`}function ii(e,t){return new Promise(n=>{try{e.toBlob(e=>n(e?new File([e],t,{type:`image/png`}):null),`image/png`)}catch{n(null)}})}var ai=`solHourly`,oi=3600,si=null,ci=()=>si??=N.get(ai).then(e=>new Map(Object.entries(JSON.parse(e||`{}`)).map(([e,t])=>[Number(e),Number(t)]))).catch(()=>new Map);async function li(e,t){let n=new Map,r=e=>new Date(e*1e3).toISOString(),i=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/candles?granularity=3600&start=${r(e)}&end=${r(t)}`,{signal:AbortSignal.timeout(6e3)});if(!i.ok)throw Error(`coinbase ${i.status}`);for(let[e,,,t,r]of await i.json())n.set(e,(t+r)/2);return n}async function ui(e,t){let n=new Map,r=await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=${e-oi}&to=${t+oi}`,{signal:AbortSignal.timeout(6e3)});if(!r.ok)throw Error(`coingecko ${r.status}`);let{prices:i}=await r.json();for(let[e,t]of i){let r=Math.floor(e/1e3/oi)*oi;n.has(r)||n.set(r,t)}return n}async function di(e){let t=await ci(),n=Date.now()/1e3,r=[...new Set(e.filter(e=>e>0).map(e=>Math.floor(e/oi)*oi))].sort((e,t)=>e-t).filter(e=>!t.has(e)),i=!1;for(let e=0;e<r.length;){let a=r[e],o=Math.min(a+299*oi,Math.floor(n/oi)*oi),s;try{s=await li(a,o)}catch{s=await ui(a,o).catch(()=>new Map)}if(!s.size)break;for(let[e,r]of s)e<n-2*oi&&!t.has(e)&&(t.set(e,r),i=!0);for(let[e,n]of s)t.has(e)||t.set(e,n);for(;e<r.length&&r[e]<=o;)e++}if(i){let e=Object.fromEntries([...t].filter(([e])=>e<n-2*oi).map(([e,t])=>[e,Math.round(t*100)/100]));N.set(ai,JSON.stringify(e)).catch(()=>{})}let a=new Map;for(let n of e){let e=Math.floor(n/oi)*oi;for(let r of[0,-1,1,-2,2,-3,3]){let i=t.get(e+r*oi);if(i){a.set(n,i);break}}}return a}var fi=e=>Object.freeze(e());function pi(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}function mi(e){if(!pi(e))throw TypeError(`Uint8Array expected`)}function hi(e,t){if(typeof t!=`string`)throw TypeError(`${e}: string expected`);return!0}function gi(e,t=`number`){if(typeof e!=`number`)throw TypeError(`${t}: expected number, got ${typeof e}`);if(!Number.isSafeInteger(e))throw RangeError(`${t}: expected safe integer, got ${e}`)}function _i(...e){let t=e=>e,n=(e,t)=>n=>e(t(n));return{encode:e.map(e=>e.encode).reduceRight(n,t),decode:e.map(e=>e.decode).reduce(n,t)}}var vi=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})(),yi=(()=>{try{let e=new TextDecoder;return e.decode(Uint8Array.of(65,48,43,127))===`A0+`?e:void 0}catch{return}})(),bi=8192;function xi(e){let t=e.length;if(yi!==void 0&&t>=12)return yi.decode(e);if(t<=bi)return String.fromCharCode.apply(null,e);let n=``;for(let r=0;r<t;r+=bi)n+=String.fromCharCode.apply(null,e.subarray(r,r+bi));return n}function Si(e){if(gi(e),e<=0||e>8)throw RangeError(`radix2: bits should be in (0..8]`);let t=vi[e]-1;return{encode:n=>{mi(n);let r=n.length,i=new Uint8Array(Math.ceil(r*8/e)),a=0,o=0,s=0;for(let c=0;c<r;)for(c+2<r?(a=a<<24|n[c]<<16|n[c+1]<<8|n[c+2],o+=24,c+=3):(a=(a<<8|n[c])&65535,o+=8,c++);o-=e,i[s++]=a>>o&t,!(o<e););return o>0&&(i[s]=a<<e-o&t),i},decode:t=>{let n=t.length,r=new Uint8Array(Math.floor(n*e/8)),i=0,a=0,o=0;for(let s=0;s<n;s++)for(i=(i<<e|t[s])&65535,a+=e;a>=8;a-=8)r[o++]=i>>a-8&255;if(i=i<<8-a&255,a>=e)throw Error(`Excess padding`);if(i>0)throw Error(`Non-zero padding: ${i}`);return r}}}function Ci(e,t){let n=e.length;if(n>128)throw Error(`alphabet: max 128 letters`);let r=new Uint8Array(n),i=new Int8Array(128).fill(-1);for(let t=0;t<n;t++){let n=e.charCodeAt(t);if(e.codePointAt(t)!==n||n>127)throw Error(`alphabet: single-char ASCII letters only`);r[t]=n,i[n]=t}if(t!==void 0)for(let e of Object.keys(t)){let n=e.charCodeAt(0),r=i[t[e].charCodeAt(0)];if(e.length!==1||n>127||r===void 0||r===-1)throw Error(`alphabet: invalid alias ${e}`);i[n]=r}return{encode:e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++){let i=e[n],a=r[i];if(a===void 0)throw Error(`alphabet.encode: invalid digit ${i}`);t[n]=a}return xi(t)},decode:t=>{hi(`decode`,t);let n=t.length,r=new Uint8Array(n);for(let a=0;a<n;a++){let n=t.charCodeAt(a),o=n<128?i[n]:-1;if(o===-1)throw Error(`Unknown letter "${t[a]}". Allowed: ${e}`);r[a]=o}return r}}}function wi(e,t=`=`){return gi(e),hi(`padding`,t),{encode(n){for(;n.length*e%8;)n+=t;return n},decode(n){hi(`decode`,n);let r=n.length;if(r*e%8)throw Error(`padding: invalid length`);for(;r>0&&n[r-1]===t;r--)if((r-1)*e%8==0)throw Error(`padding: excess padding`);return n.slice(0,r)}}}var Ti=typeof Uint8Array.from([]).toBase64==`function`&&typeof Uint8Array.fromBase64==`function`,Ei=/[\t\n\f\r ]/,Di=(e,t)=>{hi(`base64`,e);let n=t?`base64url`:`base64`;if(e.length>0&&Ei.test(e))throw Error(`invalid base64`);return Uint8Array.fromBase64(e,{alphabet:n,lastChunkHandling:`strict`})},Oi=fi(()=>_i(Si(6),Ci(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),wi(6))),ki=fi(()=>Ti?{encode(e){return mi(e),e.toBase64()},decode(e){return Di(e,!1)}}:Oi),Ai=656356768,ji=65536,Mi=2048,Ni=4096,Pi=(e,t)=>({encode:n=>{mi(n);let r=n.length;if(r===0)return new Uint8Array;if(r>=ji)throw Error(`invalid length`);let i=0;for(;i<r-1&&n[i]===0;)i++;let a=Math.ceil(r/2),o=new Uint16Array(a),s=r&1;s&&(o[0]=n[0]);for(let e=s,t=s;e<r;e+=2,t++)o[t]=n[e]<<8|n[e+1];let c=[],l=0;for(;l<a;){let e=0;for(let n=l;n<a;n++){let r=e*65536+o[n],i=Math.floor(r/t);e=r-i*t,o[n]=i,i===0&&n===l&&l++}c.push(e)}let u=c.length-1,d=u*5;for(let t=c[u];d++,!(t<e);t=Math.floor(t/e));let f=new Uint8Array(i+d),p=f.length-1;for(let t=0;t<u;t++){let n=c[t];for(let t=0;t<5;t++)f[p--]=n%e,n=Math.floor(n/e)}for(let t=c[u];p>=i;t=Math.floor(t/e))f[p--]=t%e;return f},decode:t=>{mi(t);let n=t.length;if(n===0)return new Uint8Array;if(n>=ji)throw Error(`invalid length`);let r=0;for(;r<n-1&&t[r]===0;)r++;let i=new Uint16Array(Math.ceil(n*6/16)+1),a=0,o=0,s=n%5||5;for(;o<n;){let n=0,r=1;for(let i=o+s;o<i;o++){let i=t[o];if(i>=e)throw Error(`invalid integer: ${i}`);n=n*e+i,r*=e}s=5;let c=n;for(let e=0;e<a;e++){let t=i[e]*r+c;c=Math.floor(t/65536),i[e]=t-c*65536}for(;c>0;c=Math.floor(c/65536))i[a++]=c%65536}let c=a===0?1:a*2-(i[a-1]<256),l=new Uint8Array(r+c),u=l.length-1;for(let e=0;e<a;e++){let t=i[e];l[u--]=t&255,u>=r&&(l[u--]=t>>8)}return l}}),Fi=(e,t)=>{let n=Ci(t);return{encode(t){if(mi(t),t.length>Mi)throw Error(`invalid length`);return n.encode(e.encode(t))},decode(t){if(hi(`baseN.decode`,t),t.length>Ni)throw Error(`invalid length`);return e.decode(n.decode(t))}}},Ii=Pi(58,Ai),Li=e=>Fi(Ii,e),Ri=fi(()=>Li(`123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`)),zi=`https://api.jup.ag`,Bi=!1;function Vi(e){zi=`${e}/jup`,Bi=!0}var Hi=`So11111111111111111111111111111111111111112`,Ui=6e4,Wi=60,Gi={trade:0,screen:6,background:24},Ki={trade:0,screen:1,background:2},qi=12,Ji=[],Yi=null,Xi=0,Zi=0,Qi=[],$i,ea=e=>new Promise(t=>setTimeout(t,e));function ta(e,t){if(t<Xi)return Xi-t;if(Zi>=qi)return-1;for(;Ji.length&&Ji[0]<=t-Ui;)Ji.shift();let n=Wi-Gi[e],r=Ji.length<n?0:Ji[Ji.length-n]+Ui-t;return Yi&&t<Yi.reset&&Yi.left-Ji.filter(e=>e>Yi.at).length<=Gi[e]&&(r=Math.max(r,Yi.reset-t)),r}function na(){for(clearTimeout($i);Qi.length;){let e=ta(Qi[0].lane,Date.now());if(e>0&&($i=setTimeout(na,e)),e!==0)return;Ji.push(Date.now()),Zi++,Qi.shift().go()}}var ra=e=>new Promise(t=>{let n=Qi.findIndex(t=>Ki[t.lane]>Ki[e]);n<0?Qi.push({lane:e,go:t}):Qi.splice(n,0,{lane:e,go:t}),na()}),ia=`jupPassInHeader`,aa=(()=>{try{return Date.now()-Number(localStorage.getItem(ia)||0)<36e5}catch{return!1}})();function oa(e,t,n,r){return r?fetch(`${zi}${e}${e.includes(`?`)?`&`:`?`}relaypass=${encodeURIComponent(t)}`,{method:n?.method??`GET`,body:n?.body}):fetch(zi+e,{...n,headers:{"x-api-key":t,"content-type":`application/json`,...n?.headers}})}async function sa(e,t,n,r=`screen`){let i=e.startsWith(`/swap/v2/execute`),a=Date.now()+3e4;for(let o=0;;o++){i||await ra(r);let o;try{let r=Bi&&!aa;if(o=await oa(e,t,n,r),o.status===403&&r){aa=!0;try{localStorage.setItem(ia,String(Date.now()))}catch{}o=await oa(e,t,n,!1)}}finally{i||(Zi--,na())}let s=o.headers.get(`x-ratelimit-remaining`),c=Number(o.headers.get(`x-ratelimit-reset`));if(!i&&s!==null&&c>0&&(Yi={left:Number(s),at:Date.now(),reset:c*1e3}),o.status===429&&Date.now()<a){let e=c>0?c*1e3+100:Date.now()+1e3,t=Math.min(Math.max(e,Date.now()+250),Date.now()+1e4);i?await ea(t-Date.now()):(Xi=Math.max(Xi,t),na());continue}let l=await o.json().catch(()=>({}));if(!o.ok){let e=l?.error??l?.message??`HTTP ${o.status}`;throw o.status===403?Error(`The bot's owner hasn't let you in, or this link is old. Open the app from a fresh message in the bot.`):o.status===429?Error(`Jupiter is busy right now (too many requests on the bot's key). Try again in a minute.`):Error(o.status===401?`Jupiter rejected the API key.`:`Jupiter: ${e}`)}return l}}function ca(e,t,n,r){return la(e,Hi,t,String(n),r)}function la(e,t,n,r,i){return sa(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r,taker:i})}`,e,void 0,`trade`)}function ua(e,t,n){return sa(`/swap/v2/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:ki.encode(t),requestId:n})})}var da=e=>ki.decode(e),fa=`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;async function pa(e,t,n,r,i=!1){try{if(r<=0n)return null;let a=await sa(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r.toString()})}`,e,void 0,i?`background`:`screen`),o=Number(a.outAmount);return o>0?o:null}catch{return null}}var ma=(e,t,n,r=!1)=>pa(e,t,Hi,n,r);async function ha(e,t=!1){try{let e=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/ticker`,{signal:AbortSignal.timeout(3e3)}),t=e.ok?Number((await e.json()).price):0;if(t>0)return t}catch{}let n=await pa(e,Hi,fa,1000000000n,t);return n===null?null:n/1e6}async function ga(e,t,n=!1){let r=new Map;for(let i=0;i<t.length;i+=100){let a=t.slice(i,i+100);try{let t=await sa(`/tokens/v2/search?query=${a.join(`,`)}`,e,void 0,n?`background`:`screen`);for(let e of t)a.includes(e.id)&&e.usdPrice&&e.usdPrice>0&&r.set(e.id,e.usdPrice)}catch{}}return r}async function _a(e,t){try{let n=(await sa(`/tokens/v2/search?query=${t}`,e)).find(e=>e.id===t);return n?`${n.name??``} (${n.symbol??`?`})`:null}catch{return null}}function va(e,t,n,r,i){return sa(`/trigger/v1/createOrder`,e,{method:`POST`,body:JSON.stringify({inputMint:n,outputMint:Hi,maker:t,payer:t,params:{makingAmount:r.toString(),takingAmount:i.toString()},computeUnitPrice:`auto`,wrapAndUnwrapSol:!0})},`trade`)}function ya(e,t,n){return sa(`/trigger/v1/cancelOrder`,e,{method:`POST`,body:JSON.stringify({maker:t,order:n,computeUnitPrice:`auto`})},`trade`)}function ba(e,t,n){return sa(`/trigger/v1/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:ki.encode(t),requestId:n})},`trade`)}async function xa(e,t,n){return(await sa(`/trigger/v1/getTriggerOrders?${new URLSearchParams({user:t,orderStatus:n,page:`1`})}`,e)).orders??[]}var Sa=`https://pumpportal.fun/api/trade-local`,Ca=[{slippage:15,share:.85},{slippage:30,share:.75}];function wa(e,t,n,r){return Ea({publicKey:e,action:`buy`,mint:t,amount:(n/1e9).toFixed(9),denominatedInSol:`true`,slippage:String(r)})}function Ta(e,t,n,r){return Ea({publicKey:e,action:`sell`,mint:t,amount:n,denominatedInSol:`false`,slippage:String(r)})}async function Ea(e){let t;try{t=await fetch(Sa,{method:`POST`,headers:{"content-type":`application/x-www-form-urlencoded`},body:new URLSearchParams({...e,priorityFee:`0.0001`,pool:`auto`})})}catch{throw Error(`Couldn't reach PumpPortal from the app.`)}if(!t.ok){let e=(await t.text().catch(()=>``)).trim();throw Error(`PumpPortal: ${e.slice(0,200)||`HTTP ${t.status}`}`)}return new Uint8Array(await t.arrayBuffer())}var Da=BigInt(2**32-1),Oa=BigInt(32);function ka(e,t=!1){return t?{h:Number(e&Da),l:Number(e>>Oa&Da)}:{h:Number(e>>Oa&Da)|0,l:Number(e&Da)|0}}function Aa(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=ka(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var ja=e=>e/2**32|0,Ma=e=>e>>>0;function Na(e,t,n,r){let i=ja(n),a=Ma(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var Pa=(e,t,n)=>e>>>n,Fa=(e,t,n)=>e<<32-n|t>>>n,Ia=(e,t,n)=>e>>>n|t<<32-n,La=(e,t,n)=>e<<32-n|t>>>n,Ra=(e,t,n)=>e<<64-n|t>>>n-32,za=(e,t,n)=>e>>>n-32|t<<64-n;function Ba(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Va=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),Ha=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Ua=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),Wa=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,Ga=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),Ka=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function qa(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var Ja=e=>e?`"${e}" `:``;function Ya(e,t=``){if(typeof e!=`number`)throw TypeError(Ja(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(Ja(t)+`expected integer >= 0, got `+e);return e}function Xa(e,t,n=``){if(qa(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Ya(t,`length`);let r=qa(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=Ja(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}function Za(e){if(typeof e!=`function`||typeof e.create!=`function`)throw TypeError(`expected hash wrapped by utils.createHasher`);if(Ya(e.outputLen),Ya(e.blockLen),e.outputLen<1||e.blockLen<1)throw Error(`hash blockLen / outputLen must be >= 1`)}var Qa=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},$a=(e,t)=>{Qa(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function eo(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function to(e,t){Xa(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function no(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function ro(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function io(e,t){return e<<32-t|e>>>t}var ao=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,oo=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function so(e){if(Xa(e),ao)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=oo[e[n]];return t}function co(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function lo(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(ao)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=co(e.charCodeAt(i)),a=co(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function uo(e){if(typeof e!=`string`)throw TypeError(`string expected`);let t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{no(t)}}function fo(e,t=``){return typeof e==`string`?uo(e):Xa(e,void 0,t)}function po(...e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];Xa(r),t+=r.length}let n=new Uint8Array(t);for(let t=0,r=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.length}return n}function mo(e,t,n=`opts`){return $a(e,`defaults`),t!==void 0&&$a(t,n),Object.assign(Object.create(null),e,t)}function ho(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=mo({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function go(e=32){Ya(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}var _o=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function vo(e,t,n){return e&t^~e&n}function yo(e,t,n){return e&t^e&n^t&n}var bo=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=ro(this.buffer)}update(e){eo(this),Xa(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=ro(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){eo(this),to(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Na(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:ro(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},xo=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),So=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Co=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),wo=new Uint32Array(64),To=class extends bo{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)wo[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=wo[e-15],n=wo[e-2],r=io(t,7)^io(t,18)^t>>>3,i=io(n,17)^io(n,19)^n>>>10;wo[e]=i+wo[e-7]+r+wo[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=io(o,6)^io(o,11)^io(o,25),u=l+t+vo(o,s,c)+Co[e]+wo[e]|0,d=(io(n,2)^io(n,13)^io(n,22))+yo(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){no(wo)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),no(this.buffer)}},Eo=class extends To{constructor(){super(32,xo)}},Do=Aa(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),Oo=Do[0],ko=Do[1],Ao=new Uint32Array(80),jo=new Uint32Array(80),Mo=class extends bo{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Ao[n]=e.getUint32(t),jo[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=Ao[e-15]|0,n=jo[e-15]|0,r=Ia(t,n,1)^Ia(t,n,8)^Pa(t,n,7),i=La(t,n,1)^La(t,n,8)^Fa(t,n,7),a=Ao[e-2]|0,o=jo[e-2]|0,s=Ia(a,o,19)^Ra(a,o,61)^Pa(a,o,6),c=Ua(i,La(a,o,19)^za(a,o,61)^Fa(a,o,6),jo[e-7],jo[e-16]),l=Wa(c,r,s,Ao[e-7],Ao[e-16]);Ao[e]=l|0,jo[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=Ia(u,d,14)^Ia(u,d,18)^Ra(u,d,41),v=La(u,d,14)^La(u,d,18)^za(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=Ga(_,v,b,ko[e],jo[e]),S=Ka(x,g,t,y,Oo[e],Ao[e]),C=x|0,w=Ia(n,r,28)^Ra(n,r,34)^Ra(n,r,39),T=La(n,r,28)^za(n,r,34)^za(n,r,39),E=n&i^n&o^i&o,ee=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=Ba(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let te=Va(C,T,ee);n=Ha(te,S,w,E),r=te|0}({h:n,l:r}=Ba(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=Ba(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=Ba(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=Ba(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=Ba(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=Ba(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=Ba(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=Ba(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){no(Ao,jo)}destroy(){this.destroyed=!0,no(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},No=class extends Mo{constructor(){super(64,So)}},Po=ho(()=>new Eo,_o(1)),Fo=ho(()=>new No,_o(3));function Io(e,t,n=()=>{}){if(!Array.isArray(e))throw TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}var Lo=(e,t,n)=>Xa(e,t,n),Ro=Ya;function zo(e,t=`object`){if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`);return e}function Bo(e,t){if(typeof e!=`function`)throw TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}var Vo=so,Ho=(...e)=>po(...e),Uo=e=>lo(e),Wo=qa,Go=e=>go(e),Ko=BigInt(0),qo=BigInt(1),Jo=e=>e?`"${e}" `:``;function Yo(e,t=``){if(typeof e!=`boolean`)throw TypeError(Jo(t)+`expected boolean, got type=`+typeof e);return e}function Xo(e){if(typeof e==`bigint`){if(!is(e))throw RangeError(`positive bigint expected, got `+e)}else Ro(e);return e}function Zo(e,t=``){if(typeof e!=`number`){let n=t&&`"${t}" `;throw TypeError(n+`expected number, got type=`+typeof e)}if(!Number.isSafeInteger(e)){let n=t&&`"${t}" `;throw RangeError(n+`expected safe integer, got `+e)}}function Qo(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);return e===``?Ko:BigInt(`0x`+e)}function $o(e){return Qo(so(e))}function es(e){return Qo(so(rs(Xa(e)).reverse()))}function ts(e,t){if(Ya(t),t===0)throw Error(`zero output length is invalid`);e=Xo(e);let n=t*2,r=e.toString(16);if(r.length>n)throw RangeError(`number is too large`);return lo(r.padStart(n,`0`))}function ns(e,t){return ts(e,t).reverse()}function rs(e){return Uint8Array.from(Lo(e))}function is(e){return typeof e==`bigint`&&Ko<=e}function as(e,t,n){return is(e)&&is(t)&&is(n)&&t<=e&&e<n}function os(e,t,n,r){if(!as(t,n,r))throw RangeError(`expected valid `+e+`: `+n+` <= n < `+r+`, got `+t)}function ss(e){if(e<Ko)throw Error(`expected non-negative bigint, got `+e);return e===Ko?0:e.toString(2).length}var cs=e=>(Zo(e,`n`),(qo<<BigInt(e))-qo);function ls(e,t={},n={},r=`object`){zo(e,r),zo(t,`fields`),zo(n,`optFields`);function i(t,n,i){let a=r===`object`?`param "${String(t)}"`:`"${r}.${String(t)}"`,o=e[t];if(!Object.hasOwn(e,t)&&(i?o!==void 0:n!==`function`))throw TypeError(`${a} is invalid: expected own property`);if(i&&o===void 0)return;let s=typeof o;if(s!==n||o===null)throw TypeError(`${a} is invalid: expected ${n}, got ${s}`)}let a=(e,t)=>Object.entries(e).forEach(([e,n])=>i(e,n,t));a(t,!1),a(n,!0)}var L=BigInt(0),R=BigInt(1),us=BigInt(2),ds=BigInt(3),fs=BigInt(4),ps=BigInt(5),ms=BigInt(7),hs=BigInt(8),gs=BigInt(9),_s=BigInt(15),vs=BigInt(16),ys=BigInt(`0x10000000000000000`);function z(e,t){if(t<=L)throw Error(`mod: expected positive modulus, got `+t);let n=e%t;return n>=L?n:t+n}function bs(e,t,n){if(n<=R)throw Error(`pow: expected modulus > 1, got `+n);if(typeof t!=`bigint`)throw TypeError(`invalid exponent: expected bigint, got `+typeof t);if(t<L)throw Error(`invalid exponent, negatives unsupported`);if(t===L)return R;if(t===R)return e;let r=e%n;if(r<L&&(r+=n),t<ys){let e=R;for(;t>L;)t&R&&(e=e*r%n),r=r*r%n,t>>=R;return e}let i=[];for(;t>L;)i.push(Number(t&_s)),t>>=fs;let a=Array(16);a[0]=R,a[1]=r;for(let e=2;e<16;e++)a[e]=a[e-1]*r%n;let o=a[i[i.length-1]];for(let e=i.length-2;e>=0;e--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let t=i[e];t!==0&&(o=o*a[t]%n)}return o}function xs(e,t,n){if(n<=R)throw Error(`pow2: expected modulus > 1, got `+n);if(t<L)throw Error(`pow2: expected non-negative exponent, got `+t);let r=e;for(;t-->L;)r*=r,r%=n;return r}function Ss(e,t){if(e===L)throw Error(`invert: expected non-zero number`);if(t<=R)throw Error(`invert: expected modulus > 1, got `+t);let n=z(e,t),r=t,i=L,a=R;for(;n!==L;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==R)throw Error(`invert: does not exist`);return z(i,t)}function Cs(e,t,n){let r=e;if(!r.eql(r.sqr(t),n))throw Error(`Cannot find square root`)}function ws(e,t){if((e&R)===L)throw Error(t+`: expected odd modulus, got `+e)}function Ts(e,t){let n=e,r=(n.ORDER+R)/fs,i=n.pow(t,r);return Cs(n,i,t),i}function Es(e,t){let n=e,r=(n.ORDER-ps)/hs,i=n.mul(t,us),a=n.pow(i,r),o=n.mul(t,a),s=n.mul(n.mul(o,us),a),c=n.mul(o,n.sub(s,n.ONE));return Cs(n,c,t),c}function Ds(e){let t=Rs(e),n=Os(e),r=n(t,t.neg(t.ONE)),i=n(t,r),a=n(t,t.neg(r)),o=(e+ms)/vs;return((e,t)=>{let n=e,s=n.pow(t,o),c=n.mul(s,r),l=n.mul(s,i),u=n.mul(s,a),d=n.eql(n.sqr(c),t),f=n.eql(n.sqr(l),t);s=n.cmov(s,c,d),c=n.cmov(u,l,f);let p=n.eql(n.sqr(c),t),m=n.cmov(s,c,p);return Cs(n,m,t),m})}function Os(e){if(e<ds)throw Error(`sqrt is not defined for small field`);ws(e,`tonelliShanks`);let t=e-R,n=0;for(;t%us===L;)t/=us,n++;let r=us,i=Rs(e);for(;Ps(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Ts;let a=i.pow(r,t),o=(t+R)/us;return function(e,r){let i=e;if(i.is0(r))return r;if(Ps(i,r)!==1)throw Error(`Cannot find square root`);let s=n,c=i.mul(i.ONE,a),l=i.pow(r,t),u=i.pow(r,o);for(;!i.eql(l,i.ONE);){if(i.is0(l))throw Error(`Cannot find square root: probably non-prime P`);let e=1,t=i.sqr(l);for(;!i.eql(t,i.ONE);)if(e++,t=i.sqr(t),e===s)throw Error(`Cannot find square root`);let n=R<<BigInt(s-e-1),r=i.pow(c,n);s=e,c=i.sqr(r),l=i.mul(l,c),u=i.mul(u,r)}return u}}function ks(e){return ws(e,`Fp.sqrt`),e%fs===ds?Ts:e%hs===ps?Es:e%vs===gs?Ds(e):Os(e)}var As=(e,t)=>(z(e,t)&R)===R,js=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Ms(e){if(zo(e,`field`),typeof e.ORDER!=`bigint`)throw TypeError(`param "ORDER" is invalid: expected bigint, got `+typeof e.ORDER);Zo(e.BYTES,`BYTES`),Zo(e.BITS,`BITS`);for(let t of js)Bo(e[t],`field.`+t);if(e.BYTES<1||e.BITS<1)throw Error(`invalid field: expected BYTES/BITS > 0`);if(e.ORDER<=R)throw Error(`invalid field: expected ORDER > 1, got `+e.ORDER);return e}function Ns(e,t,n=!1){Ms(e),Io(t,`nums`),Yo(n,`passZero`);let r=e,i=Array(t.length).fill(n?r.ZERO:void 0),a=t.reduce((e,t,n)=>r.is0(t)?e:(i[n]=e,r.mul(e,t)),r.ONE),o=r.inv(a);return t.reduceRight((e,t,n)=>r.is0(t)?e:(i[n]=r.mul(e,i[n]),r.mul(e,t)),o),i}function Ps(e,t){Ms(e);let n=e;ws(n.ORDER,`FpLegendre`);let r=(n.ORDER-R)/us,i=n.pow(t,r),a=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),s=n.eql(i,n.neg(n.ONE));if(!a&&!o&&!s)throw Error(`invalid Legendre symbol result`);return a?1:o?0:-1}function Fs(e,t){if(t!==void 0&&Ro(t),e<=L)throw Error(`invalid n length: expected positive n, got `+e);if(t!==void 0&&t<1)throw Error(`invalid n length: expected positive bit length, got `+t);let n=ss(e);if(t!==void 0&&t<n)throw Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);let r=t===void 0?n:t;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var Is=new WeakMap,Ls=class{ORDER;BITS;BYTES;isLE;ZERO=L;ONE=R;_lengths;_mod;constructor(e,t={}){if(e<=R)throw Error(`invalid field: expected ORDER > 1, got `+e);let n;this.isLE=!1,typeof t==`object`&&t&&(typeof t.BITS==`number`&&(n=t.BITS),typeof t.sqrt==`function`&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE==`boolean`&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes==`boolean`&&(this._mod=t.modFromBytes));let{nBitLength:r,nByteLength:i}=Fs(e,n);if(i>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);this.ORDER=e,this.BITS=r,this.BYTES=i,Object.freeze(this)}create(e){return z(e,this.ORDER)}isValid(e){if(typeof e!=`bigint`)throw TypeError(`invalid field element: expected bigint, got `+typeof e);return L<=e&&e<this.ORDER}is0(e){return e===L}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&R)===R}neg(e){return z(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return z(e*e,this.ORDER)}add(e,t){return z(e+t,this.ORDER)}sub(e,t){return z(e-t,this.ORDER)}mul(e,t){return z(e*t,this.ORDER)}pow(e,t){return bs(e,t,this.ORDER)}div(e,t){return z(e*Ss(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return Ss(e,this.ORDER)}sqrt(e){let t=Is.get(this);return t||Is.set(this,t=ks(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?ns(e,this.BYTES):ts(e,this.BYTES)}fromBytes(e,t=!1){Lo(e);let{_lengths:n,BYTES:r,isLE:i,ORDER:a,_mod:o}=this;if(n){if(e.length<1||!n.includes(e.length)||e.length>r)throw Error(`Field.fromBytes: expected `+n+` bytes, got `+e.length);let t=new Uint8Array(r);t.set(e,i?0:t.length-e.length),e=t}if(e.length!==r)throw Error(`Field.fromBytes: expected `+r+` bytes, got `+e.length);let s=i?es(e):$o(e);if(o&&(s=z(s,a)),!t&&!this.isValid(s))throw Error(`invalid field element: outside of range 0..ORDER`);return s}invertBatch(e){return Ns(this,e,!0)}cmov(e,t,n){return Yo(n,`condition`),n?t:e}};function Rs(e,t={}){return Object.freeze(Ls.prototype),new Ls(e,t)}var zs=BigInt(0),Bs=BigInt(1),Vs=BigInt(4),Hs=16,Us=128,Ws=5,Gs=2**31;function Ks(e){let t=e;if(typeof t!=`function`)throw TypeError(`"Point" expected constructor, got type=`+typeof e);Bo(t.fromAffine,`Point.fromAffine`),Bo(t.fromBytes,`Point.fromBytes`),Bo(t.fromHex,`Point.fromHex`),zo(t.BASE,`Point.BASE`),zo(t.ZERO,`Point.ZERO`),Ms(t.Fp),Ms(t.Fn)}function qs(e,t){Ks(e),Zs(t,e);let n=Ns(e.Fp,t.map(e=>e.Z));return t.map((t,r)=>e.fromAffine(t.toAffine(n[r])))}function Js(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw Error(`invalid window size, expected [`+n+`..`+t+`], got W=`+e)}function Ys(e,t){let n=e*(4*t+128);if(n>Gs)throw Error(`invalid window size: table would need ~`+Math.ceil(n/2**20)+` MiB, max `+Gs/2**20+` MiB`)}function Xs(e,t){if(e!==void 0){Bo(e,`randomBytes`);try{let n=e(t);if(!Wo(n)||n.length!==t)return}catch{return}return e}}function Zs(e,t){Io(e,`points`),e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function Qs(e,t,n){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,r)=>{if(!(n===void 0?t.isValid(e):is(e)&&e<n))throw Error(`invalid scalar at index `+r)})}var $s=new WeakMap;function ec(e){return $s.get(e)||1}function tc(e,t){let n=e.double(),r=[e];for(let e=1;e<t;e++)r.push(r[e-1].add(n));return r}function nc(e,t){let n=2**t,r=n/2,i=BigInt(n-1),a=[];for(;e>zs;){let t=0;e&Bs&&(t=Number(e&i),t>=r&&(t-=n),e-=BigInt(t)),a.push(t),e>>=Bs}return a}function rc(e,t,n){let r=2**t,i=r/2,a=BigInt(r-1),o=BigInt(t),s=[];for(let t=0;t<n;t++){let t=Number(e&a);e>>=o,t>i&&(t-=r,e+=Bs),s.push(t)}if(e!==zs)throw Error(`invalid wnaf`);return s}function ic(e,t,n){let r=0;for(let e of n)r=Math.max(r,e.length);let i=e;for(let e=r-1;e>=0;e--){e!==r-1&&(i=i.double());for(let r=0;r<n.length;r++){let a=n[r][e];if(a){let e=t[r][Math.abs(a)-1>>1];i=i.add(a<0?e.negate():e)}}}return i}var ac=class{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){Ks(e),this.randomBytes=Xs(t,Hs),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,n){let r=Math.ceil(n/t)+1,i=2**(t-1),a=[],o=e;for(let e=0;e<r;e++){let e=o;for(let t=0;t<i;t++)a.push(e),e=e.add(o);o=a[a.length-1].double()}return{W:t,bits:n,windows:r,comp:a}}wnafCachedCT(e,t){let{W:n,windows:r,comp:i}=e,a=2**(n-1),o=rc(t,n,r),s=this.ZERO,c=this.BASE;for(let e=0;e<r;e++){let t=o[e],n=e*a,r=Math.abs(t)-1,l=i[n];for(let e=1;e<a;e++)l=e===r?i[n+e]:l;let u=l.negate();t===0?c=c.add(i[n]):s=s.add(t<0?u:l)}return{p:s,f:c}}getWnafPrecomputes(e,t,n,r){let i=this.wnafPrecomputes.get(t),a=i?.find(t=>t.W===e&&t.bits===n);return a||(a=this.buildWnafTable(t,e,n),typeof r==`function`&&(a={...a,comp:r(a.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw TypeError(`"point" expected Point instance, got type=`+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!as(t,Bs,this.Point.Fn.ORDER))throw Error(`invalid scalar`)}runCT(e,t,n,r){let i=ec(e);return i===1?this.fixedWindowCT(e,t,n):this.wnafCachedCT(this.getWnafPrecomputes(i,e,n,r),t)}mulCT(e,t,n){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,n)}mulCTBlinded(e,t,n){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw Error(`randomBytes is required for scalar blinding`);let r=this.Point.Fn.BITS+Us,i=this.randomBytes(Hs);if(!Wo(i)||i.length!==Hs)throw Error(`randomBytes returned invalid byte array`);i[0]=i[0]&63|128;let a=t+$o(i)*this.Point.Fn.ORDER;return this.runCT(e,a,r,n)}fixedWindowCT(e,t,n){let r=Ws,i=cs(r),a=Array(32);a[0]=this.ZERO;for(let t=1;t<32;t++)a[t]=a[t-1].add(e);let o=Math.ceil(n/r),s=this.ZERO;for(let e=o-1;e>=0;e--){if(e!==o-1)for(let e=0;e<r;e++)s=s.double();let n=Number(t>>BigInt(e*r)&i),c=a[0];for(let e=1;e<32;e++)c=e===n?a[e]:c;s=s.add(c)}return{p:s,f:s}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===Bs||e===this.BASE&&(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,n,r){return this.shouldBlind(e,n)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,n){if(this.assertPoint(e),!is(t))throw Error(`invalid scalar`);let r=ec(e);if(r===1||t>=this.Point.Fn.ORDER)return oc(this.Point,[e],[t],!0);let i=this.getWnafPrecomputes(r,e,this.bits,n);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),Js(t,this.bits),Ys((Math.ceil((this.bits+Us)/t)+1)*2**(t-1),this.Point.Fp.BYTES),$s.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return ec(e)!==1}};function oc(e,t,n,r=!1){if(Ks(e),Zs(t,e),Yo(r,`allowOversized`),Qs(n,e.Fn,r?e.Fn.ORDER**Vs:void 0),t.length!==n.length)throw Error(`arrays of points and scalars must have equal length`);let i=t.map(e=>tc(e,4)),a=n.map(e=>nc(e,4));return ic(e.ZERO,i,a)}function sc(e,t,n){if(t){if(t.ORDER!==e)throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);return Ms(t),t}return Rs(e,{isLE:n})}function cc(e,t,n={},r){if(e!==`weierstrass`&&e!==`edwards`)throw Error(`expected curve type "weierstrass" or "edwards"`);if(r===void 0&&(r=e===`edwards`),!t||typeof t!=`object`)throw Error(`expected valid ${e} CURVE object`);ls(n);for(let e of[`p`,`n`,`h`]){let n=t[e];if(!(is(n)&&n!==zs))throw Error(`CURVE.${e} must be positive bigint`)}let i=sc(t.p,n.Fp,r),a=sc(t.n,n.Fn,r),o=[`Gx`,`Gy`,`a`,e===`weierstrass`?`b`:`d`];for(let e of o)if(!i.isValid(t[e]))throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:i,Fn:a}}function lc(e,t){return function(n){let r=e(n);return{secretKey:r,publicKey:t(r)}}}var uc=BigInt(0),dc=BigInt(1),fc=BigInt(2),pc=BigInt(4),mc=BigInt(8);function hc(e,t,n,r){let i=e.sqr(n),a=e.sqr(r),o=e.add(e.mul(t.a,i),a),s=e.add(e.ONE,e.mul(t.d,e.mul(i,a)));return e.eql(o,s)}function gc(e,t={}){ls(t,{},{},`extraOpts`);let n=t,r=cc(`edwards`,e,n,n.FpFnLE),{Fp:i,Fn:a}=r,o=r.CURVE,{h:s}=o;if(Ps(i,o.a)!==1)throw Error(`edwards: CURVE.a must be a square in Fp for complete addition formulas`);if(Ps(i,o.d)!==-1)throw Error(`edwards: CURVE.d must be a non-square in Fp for complete addition formulas`);ls(n,{},{uvRatio:`function`,randomBytes:`function`});let c=n.randomBytes===void 0?Go:n.randomBytes,l=fc<<BigInt(i.BYTES*8)-dc;function u(e){if(!i.isOdd)throw Error(`Field does not have .isOdd()`);return i.isOdd(e)}let d=n.uvRatio===void 0?(e,t)=>{try{return{isValid:!0,value:i.sqrt(i.div(e,t))}}catch{return{isValid:!1,value:uc}}}:n.uvRatio;if(!hc(i,o,o.Gx,o.Gy))throw Error(`bad curve params: generator point`);let f=i.eql(o.a,i.neg(i.ONE))?e=>i.neg(e):i.eql(o.a,i.ONE)?e=>e:e=>i.mul(o.a,e);function p(e,t,n=!1){let r=n?dc:uc;return os(`coordinate `+e,t,r,l),t}function m(e){if(!(e instanceof h))throw Error(`EdwardsPoint expected`)}class h{static BASE=new h(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy));static ZERO=new h(i.ZERO,i.ONE,i.ONE,i.ZERO);static Fp=i;static Fn=a;X;Y;Z;T;constructor(e,t,n,r){this.X=p(`x`,e),this.Y=p(`y`,t),this.Z=p(`z`,n,!0),this.T=p(`t`,r),Object.freeze(this)}static CURVE(){return o}static fromAffine(e){if(e instanceof h)throw Error(`extended point not allowed`);let{x:t,y:n}=e||{};return p(`x`,t),p(`y`,n),new h(t,n,i.ONE,i.mul(t,n))}static fromBytes(e,t=!1){let n=i.BYTES,{a:r,d:a}=o;e=rs(Lo(e,n,`point`)),Yo(t,`zip215`);let s=rs(e),c=e[n-1];s[n-1]=c&-129;let f=es(s);os(`point.y`,f,uc,t?l:i.ORDER);let p=i.sqr(f),m=i.sub(p,i.ONE),g=i.sub(i.mulN(a,p),r),{isValid:_,value:v}=d(m,g);if(!_)throw Error(`bad point: invalid y coordinate`);let y=u(v),b=!!(c&128);if(!t&&i.is0(v)&&b)throw Error(`bad point: x=0 and x_0=1`);return b!==y&&(v=i.neg(v)),h.fromAffine({x:v,y:f})}static fromHex(e,t=!1){return h.fromBytes(Uo(e),t)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(e=6,t=!0){return _.setWindowSize(this,e),t||this.multiply(fc),this}assertValidity(){let e=this,{a:t,d:n}=o;if(e.is0())throw Error(`bad point: ZERO`);let{X:r,Y:a,Z:s,T:c}=e,l=i.sqr(r),u=i.sqr(a),d=i.sqr(s),f=i.sqr(d),p=i.mul(l,t),m=i.mul(i.add(p,u),d),h=i.add(f,i.mul(n,i.mul(l,u)));if(!i.eql(m,h))throw Error(`bad point: equation left != right (1)`);let g=i.mul(r,a),_=i.mul(s,c);if(!i.eql(g,_))throw Error(`bad point: equation left != right (2)`)}equals(e){m(e);let{X:t,Y:n,Z:r}=this,{X:a,Y:o,Z:s}=e,c=i.mul(t,s),l=i.mul(a,r),u=i.mul(n,s),d=i.mul(o,r);return i.eql(c,l)&&i.eql(u,d)}is0(){return this.equals(h.ZERO)}negate(){return new h(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:e,Y:t,Z:n}=this,r=i.sqr(e),a=i.sqr(t),o=i.mul(i.sqr(n),fc),s=f(r),c=i.addN(e,t),l=i.sub(i.subN(i.sqr(c),r),a),u=i.addN(s,a),d=i.subN(u,o),p=i.subN(s,a),m=i.mul(l,d),g=i.mul(u,p),_=i.mul(l,p),v=i.mul(d,u);return new h(m,g,v,_)}add(e){m(e);let{d:t}=o,{X:n,Y:r,Z:a,T:s}=this,{X:c,Y:l,Z:u,T:d}=e,p=i.mul(n,c),g=i.mul(r,l),_=i.mul(i.mulN(s,t),d),v=i.mul(a,u),y=i.sub(i.subN(i.mulN(i.addN(n,r),i.addN(c,l)),p),g),b=i.subN(v,_),x=i.addN(v,_),S=i.sub(g,f(p)),C=i.mul(y,b),w=i.mul(x,S),T=i.mul(y,S),E=i.mul(b,x);return new h(C,w,E,T)}subtract(e){return m(e),this.add(e.negate())}multiply(e){if(!a.isValidNot0(e))throw RangeError(`invalid scalar: expected 1 <= sc < curve.n`);let{p:t,f:n}=_.mulSecret(this,e,s,g);return g([t,n])[0]}multiplyUnsafe(e){if(!a.isValid(e))throw RangeError(`invalid scalar: expected 0 <= sc < curve.n`);return e===uc?h.ZERO:this.is0()||e===dc?this:_.mulUnsafe(this,e,g)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return _.mulUnsafe(this,o.n).is0()}toAffine(e){let t=this,n=e;if(n!=null&&typeof n!=`bigint`)throw TypeError(`"invertedZ" expected bigint, got type=`+typeof n);let{X:r,Y:a,Z:o}=t,s=t.is0();n??=s?i.create(mc):i.inv(o);let c=i.mul(r,n),l=i.mul(a,n),u=i.mul(o,n);if(s)return{x:i.ZERO,y:i.ONE};if(!i.eql(u,i.ONE))throw Error(`invZ was invalid`);return{x:c,y:l}}clearCofactor(){return s===dc?this:s===fc?this.double():s===pc?this.double().double():s===mc?this.double().double().double():this.multiplyUnsafe(s)}toBytes(){let{x:e,y:t}=this.toAffine(),n=i.toBytes(t);return n[n.length-1]|=u(e)?128:0,n}toHex(){return Vo(this.toBytes())}toString(){return`<Point ${this.is0()?`ZERO`:this.toHex()}>`}}let g=e=>qs(h,e),_=new ac(h,c);return _.bits>=6&&h.BASE.precompute(6),Object.freeze(h.prototype),Object.freeze(h),h}function _c(e,t,n={}){if(Ks(e),typeof t!=`function`)throw Error(`"hash" function param is required`);let r=t,i=n;ls(i,{},{adjustScalarBytes:`function`,randomBytes:`function`,domain:`function`,prehash:`function`,zip215:`boolean`,mapToCurve:`function`,toMontgomery:`function`,toMontgomerySecret:`function`});let{prehash:a}=i,{BASE:o,Fp:s,Fn:c}=e,l=r.outputLen,u=2*s.BYTES;if(l!==void 0&&(Zo(l,`hash.outputLen`),l!==u))throw Error(`hash.outputLen must be ${u}, got ${l}`);let d=i.randomBytes===void 0?Go:i.randomBytes,f=i.toMontgomery,p=i.toMontgomerySecret,m=i.adjustScalarBytes===void 0?e=>e:i.adjustScalarBytes,h=i.domain===void 0?(e,t,n)=>{if(Yo(n,`phflag`),t.length||n)throw Error(`Contexts/pre-hash are not supported`);return e}:i.domain;function g(e){return c.create(es(e))}function _(e){let t=T.secretKey;Lo(e,T.secretKey,`secretKey`);let n=Lo(r(e),2*t,`hashedSecretKey`),i=m(n.slice(0,t));return{head:i,prefix:n.slice(t,2*t),scalar:g(i)}}function v(e){let{head:t,prefix:n,scalar:r}=_(e),i=o.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}}function y(e){return v(e).pointBytes}function b(e=Uint8Array.of(),...t){let n=Ho(...t);return g(r(h(n,Lo(e,void 0,`context`),!!a)))}function x(e,t,n={}){ls(n,{},{},`options`),e=rs(Lo(e,void 0,`message`)),a&&(e=a(e));let{prefix:r,scalar:i,pointBytes:s}=v(t),l=b(n.context,r,e),u=o.multiply(l).toBytes(),d=b(n.context,u,s,e),f=c.create(l+d*i);if(!c.isValid(f))throw Error(`sign failed: invalid s`);return Lo(Ho(u,c.toBytes(f)),T.signature,`result`)}let S={zip215:i.zip215};function C(t,n,r,i=S){ls(i);let{context:s}=i,c=i.zip215===void 0?!!S.zip215:i.zip215,l=T.signature;t=Lo(t,l,`signature`),n=Lo(n,void 0,`message`),r=Lo(r,T.publicKey,`publicKey`),c!==void 0&&Yo(c,`zip215`),a&&(n=a(n));let u=l/2,d=t.subarray(0,u),f=es(t.subarray(u,l)),p,m,h;try{p=e.fromBytes(r,c),m=e.fromBytes(d,c),h=o.multiplyUnsafe(f)}catch{return!1}if(!c&&p.isSmallOrder())return!1;let g=b(s,d,r,n);return m.add(p.multiplyUnsafe(g)).subtract(h).clearCofactor().is0()}let w=s.BYTES,T={secretKey:w,publicKey:w,signature:2*w,seed:w};function E(e){return e=e===void 0?d(T.seed):e,Lo(e,T.seed,`seed`)}function ee(e){return Wo(e)&&e.length===T.secretKey}function te(t,n){try{return!!e.fromBytes(t,n===void 0?S.zip215:n)}catch{return!1}}let D={getExtendedPublicKey:v,randomSecretKey:E,isValidSecretKey:ee,isValidPublicKey:te,toMontgomery(t){if(f===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return f(e.fromBytes(t))},toMontgomerySecret(e){if(p===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return p(e)}};return Object.freeze(T),Object.freeze(D),Object.freeze({keygen:lc(E,y),getPublicKey:y,sign:x,verify:C,utils:D,Point:e,lengths:T})}var vc=BigInt(1),yc=BigInt(2),bc=BigInt(5),xc=BigInt(8),Sc=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`),Cc={p:Sc,n:BigInt(`0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`),h:xc,a:BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`),d:BigInt(`0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`),Gx:BigInt(`0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`),Gy:BigInt(`0x6666666666666666666666666666666666666666666666666666666666666658`)};function wc(e){let t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),a=Sc,o=e*e%a*e%a,s=xs(xs(o,yc,a)*o%a,vc,a)*e%a,c=xs(s,bc,a)*s%a,l=xs(c,t,a)*c%a,u=xs(l,n,a)*l%a,d=xs(u,r,a)*u%a;return{pow_p_5_8:xs(xs(xs(xs(d,i,a)*d%a,i,a)*d%a,t,a)*c%a,yc,a)*e%a,b2:o}}function Tc(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}var Ec=BigInt(`19681161376707505956807079304988542015446066515923890162744021073123829784752`);function Dc(e,t){let n=Sc,r=z(t*t*t,n),i=wc(e*z(r*r*t,n)).pow_p_5_8,a=z(e*r*i,n),o=z(t*a*a,n),s=a,c=z(a*Ec,n),l=o===e,u=o===z(-e,n),d=o===z(-e*Ec,n);return l&&(a=s),(u||d)&&(a=c),As(a,n)&&(a=z(-a,n)),{isValid:l||u,value:a}}var Oc=gc(Cc,{uvRatio:Dc}),kc=Oc.Fp;function Ac(e){let{y:t}=e;return kc.toBytes(kc.div(vc+t,vc-t))}function jc(e){let t=Oc.Fp.BYTES;return Xa(e,t),Tc(Fo(e.subarray(0,t))).subarray(0,t)}function Mc(e){return _c(Oc,Fo,Object.assign({adjustScalarBytes:Tc,toMontgomery:Ac,toMontgomerySecret:jc,zip215:!0},e))}var Nc=Mc({}),Pc=[`https://api.mainnet.solana.com`,`https://api.mainnet-beta.solana.com`],Fc=`https://api.mainnet-beta.solana.com`,B=null,Ic=!1,Lc=null;function Rc(e,t){B=`${t?`${t}/rpc`:`https://mainnet.helius-rpc.com/`}?api-key=${encodeURIComponent(e)}`,Ic=!!t,Lc=(n,r)=>`${t?`${t}/tx/${n}`:`https://mainnet.helius-rpc.com/v0/addresses/${n}/transactions`}?api-key=${encodeURIComponent(e)}&limit=100${r?`&before-signature=${r}`:``}`,Pc=[B,...Pc]}var V=1e9,zc=5e3,Bc=890880,Vc=`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`,Hc=`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`,H=e=>(e/V).toFixed(4).replace(/\.?0+$/,``),Uc=e=>new Promise(t=>setTimeout(t,e)),Wc=class extends Error{},Gc=class extends Error{},Kc=class{limit;ms;times=[];constructor(e,t){this.limit=e,this.ms=t}prune(e){for(;this.times.length&&this.times[0]<=e-this.ms;)this.times.shift()}when(e=1){let t=Date.now();this.prune(t);let n=this.times.length,r=n-(this.limit-Math.min(e,this.limit))-1;return Math.max(t,n?this.times[n-1]:0,r>=0?this.times[r]+this.ms:0)}delay(){return this.when(1)-Date.now()}book(e,t){let n=this.times.length;for(;n>0&&this.times[n-1]>t;)n--;this.times.splice(n,0,...Array(e).fill(t))}async take(){let e=this.when(1);this.book(1,e),e>Date.now()&&await Uc(e-Date.now())}room(){let e=Date.now();return this.prune(e),this.times.length&&this.times[this.times.length-1]>e?0:this.limit-this.times.length}takeNow(e){this.book(e,Date.now())}},qc=new Set([`getAsset`,`getAssetBatch`,`getAssetsByOwner`]),Jc={helius:new Kc(9,1100),heliusDas:new Kc(2,1100),heliusSend:new Kc(1,1050),history:new Kc(2,1100),publicAll:new Kc(90,1e4),publicMethod:new Map},Yc=e=>(Jc.publicMethod.has(e)||Jc.publicMethod.set(e,new Kc(35,1e4)),Jc.publicMethod.get(e)),Xc=new Map,Zc=4e3,Qc=(e,t)=>void(e!==B&&Xc.set(`${e} ${t}`,Date.now()+Zc)),$c=(e,t)=>(Xc.get(`${e} ${t}`)??0)>Date.now();function el(e,t){return e===B?Math.max(...t.map(e=>(qc.has(e)?Jc.heliusDas:Jc.helius).delay())):t.some(t=>$c(e,t))?1/0:Math.max(Jc.publicAll.delay(),...t.map(e=>Yc(e).delay()))}async function tl(e,t){let n=new Map,r=e=>n.set(e,(n.get(e)??0)+1);for(let n of t)e===B?(n===`sendTransaction`&&r(Jc.heliusSend),r(qc.has(n)?Jc.heliusDas:Jc.helius)):(r(Jc.publicAll),r(Yc(n)));let i=Math.max(...[...n].map(([e,t])=>e.when(t)));for(let[e,t]of n)e.book(t,i);i>Date.now()&&await Uc(i-Date.now())}function nl(e){Jc.publicAll.takeNow(1),Yc(e).takeNow(1)}function rl(e){let t=Pc.filter(t=>!$c(t,e)),n=t.length?t:Pc;return!B||Jc.helius.delay()<120||el(Fc,[e])>0?n:[Fc,...n.filter(e=>e!==Fc)]}var il=(e,t)=>fetch(e,{method:`POST`,...e===B&&Ic?{}:{headers:{"content-type":`application/json`}},body:JSON.stringify(t)});async function al(e,t){for(let n=0;;n++){let r=[],i=0;for(let n of rl(e))try{return await ol(n,e,t,0)}catch(e){if(e instanceof Wc)throw e;e instanceof Gc&&i++,r.push(`${new URL(n).hostname}: ${e instanceof Error?e.message:String(e)}`)}if(i&&n<3)await Uc(500*(n+1));else throw Error(`Couldn't reach the Solana network (${e}). ${r.join(`; `)}`)}}async function ol(e,t,n,r=3,i=!1){for(let a=0;;a++){i&&e!==B?nl(t):await tl(e,[t]);let o=await il(e,{jsonrpc:`2.0`,id:1,method:t,params:n});if(o.status===429){if(Qc(e,t),a<r){await Uc(400*(a+1));continue}throw new Gc(`HTTP 429`)}if(!o.ok)throw Error(`HTTP ${o.status}`);let s=await o.json();if(s.error){if(s.error.code===-32005||s.error.code===429){if(Qc(e,t),a<r){await Uc(400*(a+1));continue}throw new Gc(s.error.message)}throw new Wc(s.error.message)}return s.result}}async function sl(e,t,n=!1){try{n&&e!==B?t.forEach(e=>nl(e.method)):await tl(e,t.map(e=>e.method));let r=await il(e,t.map((e,t)=>({jsonrpc:`2.0`,id:t,...e})));if(r.status===429){for(let n of t)Qc(e,n.method);throw new Gc(`HTTP 429`)}if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.json();if(!Array.isArray(i))throw Error(`not a batch`);let a=t.map((e,t)=>i.find(e=>e.id===t)),o=t.filter((e,t)=>a[t]?.error?.code===-32005||a[t]?.error?.code===429);if(o.length){for(let t of o)Qc(e,t.method);throw new Gc(a.find(e=>e?.error).error.message)}if(a.some(e=>!e||e.error))throw Error(a.find(e=>e?.error)?.error?.message??`missing answer`);return a.map(e=>e.result)}catch(r){if(r instanceof Gc)throw r;return await Promise.all(t.map(t=>ol(e,t.method,t.params,3,n)))}}async function cl(e){return(await fl(e)).name}var ll=new Map;function ul(e){let t=ll.get(e);return t||(t=ol(B,`getAsset`,{id:e}),ll.set(e,t),t.catch(()=>ll.delete(e))),t}var dl=e=>e.content?.files?.map(e=>e.cdn_uri).find(e=>e?.startsWith(`https://cdn.helius-rpc.com/`));async function fl(e){if(!B)return{name:null};try{let t=await ul(e),n=t.content?.metadata;return{name:n?.name?`${n.name} (${n.symbol||`?`})`:null,logo:dl(t)}}catch{return{name:null}}}async function pl(e){if(!B)return{name:null,symbol:null};try{let t=await ul(e);return{name:t.content?.metadata?.name||null,symbol:t.content?.metadata?.symbol||t.token_info?.symbol||null,decimals:t.token_info?.decimals,logo:dl(t)}}catch{return{name:null,symbol:null}}}async function ml(e){return(await al(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}])).value.map(e=>e?.lamports??0)}function hl(e){let t=[];for(;;){let n=e&127;if(e>>=7,e===0)return t.push(n),t;t.push(n|128)}}function gl(e,t){let n=0;for(let r=0;r<3;r++){let i=e[t+r];if(n|=(i&127)<<7*r,!(i&128))return[n,r+1]}throw Error(`Bad transaction length prefix`)}function _l(e,t){let n=e.slice(),[r,i]=gl(n,0),a=n.subarray(i+64*r),o=a[0]&128?1:0,s=a[o];o+=3;let[,c]=gl(a,o);o+=c;let l=Ri.decode(t.address),u=-1;for(let e=0;e<s;e++)a.subarray(o+32*e,o+32*e+32).every((e,t)=>e===l[t])&&(u=e);if(u<0)throw Error(`This trade isn't addressed to your wallet, so it was not signed.`);return n.set(Nc.sign(a,t.secret),i+64*u),n}function vl(e,t,n){let r=new Map([[e.address,{signer:!0,writable:!0}]]),i=(e,t,n)=>{let i=r.get(e)??{signer:!1,writable:!1};r.set(e,{signer:i.signer||t,writable:i.writable||n})};for(let e of t)e.keys.forEach(e=>i(e.pubkey,e.isSigner,e.isWritable)),i(e.programId,!1,!1);let a=([t,n])=>t===e.address?0:n.signer?n.writable?1:2:n.writable?3:4,o=[...r.entries()].sort((e,t)=>a(e)-a(t));if(o.some(([t,n])=>n.signer&&t!==e.address))throw Error(`Only the paying wallet can sign here.`);let s=new Map(o.map(([e],t)=>[e,t])),c=o.filter(([,e])=>!e.signer&&!e.writable).length,l=Uint8Array.from([1,0,c,...hl(o.length),...o.flatMap(([e])=>[...Ri.decode(e)]),...Ri.decode(n),...hl(t.length),...t.flatMap(e=>[s.get(e.programId),...hl(e.keys.length),...e.keys.map(e=>s.get(e.pubkey)),...hl(e.data.length),...e.data])]);return _l(Uint8Array.from([...hl(1),...new Uint8Array(64),...l]),e)}var yl=`11111111111111111111111111111111`;function bl(e,t,n){let r=new Uint8Array(12),i=new DataView(r.buffer);return i.setUint32(0,2,!0),i.setBigUint64(4,BigInt(n),!0),{programId:yl,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],data:r}}function xl(e,t,n){return{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:Uint8Array.from([9])}}var Sl=`ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`;function Cl(e){return wl(Ri.decode(e))}function wl(e){try{return Nc.Point.fromBytes(e),!0}catch{return!1}}var Tl=new Map;function El(e,t,n){let r=`${e}${t}${n}`,i=Tl.get(r);return i||(i=Dl([Ri.decode(e),Ri.decode(n),Ri.decode(t)],Sl),Tl.size>5e3&&Tl.clear(),Tl.set(r,i)),i}function Dl(e,t){let n=Ri.decode(t),r=new TextEncoder().encode(`ProgramDerivedAddress`);for(let t=255;t>=0;t--){let i=[...e,Uint8Array.of(t),n,r],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;let s=Po(a);if(!wl(s))return Ri.encode(s)}throw Error(`Couldn't work out the coin account address.`)}function Ol(e,t,n,r,i){return{programId:Sl,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:yl,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1}],data:Uint8Array.of(1)}}function kl(e,t,n,r){let i=new Uint8Array(10),a=new DataView(i.buffer);return i[0]=12,a.setBigUint64(1,r,!0),i[9]=e.decimals,{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:e.mint,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:i}}async function Al(e){let t=await al(`getAccountInfo`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]);return t.value?{owner:t.value.owner,lamports:t.value.lamports}:null}var jl=yl;async function Ml(e){return(await al(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`}])).value.map(e=>e?{owner:e.owner,lamports:e.lamports,data:e.data?ki.decode(e.data[0]):new Uint8Array}:null)}async function Nl(e,t){let{err:n,logs:r,accounts:i}=(await al(`simulateTransaction`,[ki.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:t}}])).value;return{err:n,logs:r??[],accounts:(i??t.map(()=>null)).map(e=>e?{owner:e.owner,lamports:e.lamports,data:ki.decode(e.data[0])}:null)}}function Pl(e){return!e||e.data.length<72?0n:new DataView(e.data.buffer,e.data.byteOffset).getBigUint64(64,!0)}var Fl=`ComputeBudget111111111111111111111111111111`;function Il(e,t){let n=new Uint8Array(5);n[0]=2,new DataView(n.buffer).setUint32(1,e,!0);let r=new Uint8Array(9);return r[0]=3,new DataView(r.buffer).setBigUint64(1,BigInt(t),!0),[{programId:Fl,keys:[],data:n},{programId:Fl,keys:[],data:r}]}function Ll(e,t,n,r=Vc){return xl({address:e,program:r},t,n)}function Rl(e,t,n,r){return zl(e,[{to:t,lamports:n}],r)}function zl(e,t,n){return vl(e,t.map(({to:t,lamports:n})=>bl(e.address,t,n)),n)}async function Bl(e,t){let n=t?[{mint:t}]:[{programId:Vc},{programId:Hc}];return(await Promise.all(n.map(t=>al(`getTokenAccountsByOwner`,[e,t,{encoding:`jsonParsed`,commitment:`confirmed`}])))).flatMap(e=>e.value.map(({pubkey:e,account:t})=>{let n=t.data.parsed.info;return{address:e,program:t.owner,mint:n.mint,raw:BigInt(n.tokenAmount.amount),decimals:n.tokenAmount.decimals,lamports:t.lamports}}))}var Vl=null;function Hl(e=2e4){if(Vl&&Date.now()-Vl.at<e)return Vl.value;let t=al(`getLatestBlockhash`,[{commitment:`confirmed`}]).then(e=>e.value.blockhash),n={at:Date.now(),value:t};return Vl=n,t.catch(()=>Vl===n&&(Vl=null)),t}var Ul=()=>void Hl(8e3).catch(()=>{}),Wl=/custom program error: 0x177[234]\b/,Gl=class extends Error{slippage;constructor(e,t){super(e),this.slippage=t}};async function Kl(e){let t=[ki.encode(e),{encoding:`base64`,preflightCommitment:`confirmed`}],n=B?Jc.heliusSend.room()>0?[B,Fc]:[Fc]:Pc,r=e=>new Promise((n,r)=>{let i=e.length,a=null,o=null;for(let s of e)ol(s,`sendTransaction`,t,1).then(n,e=>{e instanceof Wc?a??=e:o??=e,--i===0&&r(a??o)})});try{try{return await r(n)}catch(e){if(e instanceof Wc||!B||n.includes(B))throw e;return await r([B])}}catch(e){throw e instanceof Wc?Wl.test(e.message)?new Gl(`The price moved too far before the trade went through, so it was stopped. Nothing was spent.`,!0):new Gl(`The network turned the trade down before it ran, so nothing was spent (${e.message}).`,!1):Error(`Couldn't reach the Solana network to send it (${e instanceof Error?e.message:String(e)}).`)}}var ql=new Map,Jl=!1;function Yl(e,t=45e3){return new Promise(n=>{let r=ql.get(e);ql.set(e,{end:Date.now()+t,done:r?e=>{r.done(e),n(e)}:n}),Jl||Xl()})}async function Xl(){Jl=!0;try{for(await Uc(300);ql.size;){let e=Date.now(),t=[...ql.keys()].slice(0,200);try{(await al(`getSignatureStatuses`,[t])).value.forEach((e,n)=>{let r=e?.err?`failed`:e&&(e.confirmationStatus===`confirmed`||e.confirmationStatus===`finalized`)?`confirmed`:null;r&&(ql.get(t[n])?.done(r),ql.delete(t[n]))})}catch{}for(let[e,t]of ql)Date.now()>t.end&&(t.done(`timeout`),ql.delete(e));ql.size&&await Uc(Math.max(0,300-(Date.now()-e)))}}finally{Jl=!1}}function Zl(e){return`https://solscan.io/account/${e}`}function Ql(e){return`https://solscan.io/tx/${e}`}var $l=`So11111111111111111111111111111111111111112`,eu=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),tu=new Map;function nu(e,t){let n=`${e}:${t??``}`,r=tu.get(n);if(r&&Date.now()-r.at<6e4)return r.value.then(e=>e?.clone()??null);let i=(async()=>{for(let n=0;;n++){await Jc.history.take();let r=await fetch(Lc(e,t),{signal:AbortSignal.timeout(15e3)});if(r.status!==429||n>=3)return r;await Uc(700*(n+1))}})(),a={at:Date.now(),value:i};return tu.set(n,a),i.then(e=>(!e||!e.ok)&&tu.get(n)===a&&tu.delete(n),()=>tu.get(n)===a&&tu.delete(n)),i.then(e=>e?.clone()??null)}async function ru(e,t,n,r=10){if(!Lc)return null;let i=0,a=0,o=0,s;for(let c=0;c<r;c++){let r;try{let t=await nu(e,s);if(!t?.ok)return c?{lamports:i,usd:a,coins:o}:null;r=await t.json()}catch{return c?{lamports:i,usd:a,coins:o}:null}for(let n of r){if(n.transactionError)continue;let r=new Set;for(let t of n.tokenTransfers??[])t.toUserAccount===e&&t.toTokenAccount&&r.add(t.toTokenAccount),t.fromUserAccount===e&&t.fromTokenAccount&&r.add(t.fromTokenAccount);let s=0;for(let t of n.nativeTransfers??[])r.has(t.toUserAccount)||r.has(t.fromUserAccount)||(t.fromUserAccount===e&&(s-=t.amount),t.toUserAccount===e&&(s+=t.amount));let c=0,l=new Map;for(let r of n.tokenTransfers??[]){let n=+(r.toUserAccount===e)-(r.fromUserAccount===e);n&&(r.mint===$l?s+=n*Math.round(r.tokenAmount*1e9):eu.has(r.mint)&&r.mint!==t?c+=n*r.tokenAmount:l.set(r.mint,(l.get(r.mint)??0)+n*r.tokenAmount))}let u=l.get(t)??0;if(u<=0||[...l].some(([e,n])=>e!==t&&Math.abs(n)>1e-6))continue;let d=s<0?-s:0,f=c<0?-c:0;d<5e5&&f<.05||(i+=d,a+=f,o+=u)}if(o>=n*.999||r.length<100)break;s=r[r.length-1].signature}return{lamports:i,usd:a,coins:o}}function iu(e,t){if(e.transactionError)return null;let n=new Set;for(let r of e.tokenTransfers??[])r.toUserAccount===t&&r.toTokenAccount&&n.add(r.toTokenAccount),r.fromUserAccount===t&&r.fromTokenAccount&&n.add(r.fromTokenAccount);let r=0;for(let i of e.nativeTransfers??[])n.has(i.toUserAccount)||n.has(i.fromUserAccount)||(i.fromUserAccount===t&&(r-=i.amount),i.toUserAccount===t&&(r+=i.amount));let i=0,a=new Map;for(let n of e.tokenTransfers??[]){let e=+(n.toUserAccount===t)-(n.fromUserAccount===t);e&&(n.mint===$l?r+=e*Math.round(n.tokenAmount*1e9):eu.has(n.mint)?i+=e*n.tokenAmount:a.set(n.mint,(a.get(n.mint)??0)+e*n.tokenAmount))}let o=[...a].filter(([,e])=>Math.abs(e)>1e-6);if(o.length!==1)return null;let[s,c]=o[0],l=c>0?1:-1;if(l===-1&&r<=0&&i<=0){let n=e.accountData?.find(e=>e.account===t)?.nativeBalanceChange??0;n>0&&(r=n)}let u=l===1?-r:r,d=l===1?-i:i;return u<5e5&&d<.05?null:{sig:e.signature,at:e.timestamp??0,mint:s,side:l,coins:Math.abs(c),lamports:Math.max(0,u),usd:Math.max(0,d)}}async function au(e,t,n=10){if(!Lc)return null;let r=[],i,a;for(let o=0;o<n;o++){let n;try{let t=await nu(e,a);if(!t?.ok)return o?{trades:r,top:i,reachedStop:!1}:null;n=await t.json()}catch{return o?{trades:r,top:i,reachedStop:!1}:null}o===0&&(i=n[0]?.signature??t);for(let a of n){if(a.signature===t)return{trades:r,top:i,reachedStop:!0};let n=iu(a,e);n&&r.push(n)}if(n.length<100)return{trades:r,top:i,reachedStop:!0};a=n[n.length-1].signature}return{trades:r,top:i,reachedStop:!1}}async function ou(e){let t=e=>[e,{limit:1,commitment:`confirmed`}],n=e.map(()=>void 0),r=async r=>{for(let i of B?[B,Fc]:[Fc])try{n[r]=(await ol(i,`getSignaturesForAddress`,t(e[r])))[0]?.signature??null;return}catch{}},i=[];for(let t=0;t<e.length;t+=30)i.push(t);return await Promise.all(i.map(async i=>{let a=e.slice(i,i+30),o=()=>Promise.all(a.map((e,t)=>n[i+t]===void 0?r(i+t):null));if(a.length<3&&B)return o();let s=Yc(`getSignaturesForAddress`);if($c(Fc,`getSignaturesForAddress`)||s.room()<a.length||Jc.publicAll.room()<a.length)return o();s.takeNow(a.length),Jc.publicAll.takeNow(a.length);try{let e=await il(Fc,a.map((e,n)=>({jsonrpc:`2.0`,id:n,method:`getSignaturesForAddress`,params:t(e)}))),r=e.ok?await e.json():[];(e.status===429||Array.isArray(r)&&r.some(e=>e.error?.code===-32005||e.error?.code===429))&&Qc(Fc,`getSignaturesForAddress`);for(let e of Array.isArray(r)?r:[])e.result&&(n[i+e.id]=e.result[0]?.signature??null)}catch{}return o()})),n}async function su(e){let t=[];for(let n=0;n<e.length;n+=100){let r=await al(`getMultipleAccounts`,[e.slice(n,n+100),{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:64,length:8}}]);for(let e of r.value){let n=e?ki.decode(e.data[0]):null;t.push(n&&n.length===8?new DataView(n.buffer,n.byteOffset).getBigUint64(0,!0):null)}}return t}async function cu(e,t,n){let r=n?[n]:[Vc,Hc],i=e.flatMap(e=>r.map(n=>El(e,t,n))),a=[t,...e,...i],o=[];for(let e=0;e<a.length;e+=100)o.push(a.slice(e,e+100));let s=(await Promise.all(o.map(e=>al(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:44,length:28}}])))).flatMap(e=>e.value),c=s[0],l=c?ki.decode(c.data[0]):null,u=!!c&&(c.owner===`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`||c.owner===`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)&&!!l?.length,d=u?r.indexOf(c.owner):-1,f=t=>{if(d<0)return null;let n=s[1+e.length+t*r.length+d];return n&&n.owner===c.owner?n:null};return{decimals:u?l[0]:void 0,program:u?c.owner:void 0,lamports:e.map((e,t)=>s[1+t]?.lamports??0),raw:e.map((e,t)=>{let n=f(t),r=n?ki.decode(n.data[0]):null;return r&&r.length>=28?new DataView(r.buffer,r.byteOffset).getBigUint64(20,!0):0n}),deposit:e.map((e,t)=>f(t)?.lamports??0),accounts:e.map((e,t)=>f(t)?i[t*r.length+d]:null)}}async function lu(e){let t=new Map;if(!B||!e.length)return t;for(let n=0;n<e.length;n+=1e3)try{let r=await ol(B,`getAssetBatch`,{ids:e.slice(n,n+1e3)});for(let e of r)e&&t.set(e.id,{name:e.content?.metadata?.name||null,symbol:e.content?.metadata?.symbol||e.token_info?.symbol||null,logo:dl(e),decimals:e.token_info?.decimals,price:e.token_info?.price_info?.price_per_token||void 0})}catch{}return t}function uu(e){return B?e.some(e=>$c(Fc,e))?[B,Fc]:[Fc,B]:[Fc]}var du=[`getTokenAccountsByOwner`,`getMultipleAccounts`];async function fu(e,t=uu(du)){let n=null;for(let r of t)try{let[t,n,i]=await sl(r,[{method:`getTokenAccountsByOwner`,params:[e,{programId:Vc},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getTokenAccountsByOwner`,params:[e,{programId:Hc},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getMultipleAccounts`,params:[[e],{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]}],!0),a=[...t.value,...n.value].map(({pubkey:e,account:t})=>({address:e,mint:t.data.parsed.info.mint,raw:BigInt(t.data.parsed.info.tokenAmount.amount)})).filter(e=>e.raw>0n).slice(0,60);return{node:r,lamports:i.value[0]?.lamports??0,accounts:a}}catch(e){n=e}throw n instanceof Error?n:Error(String(n))}async function pu(e,t,n){let r=await(n??fu(t)).catch(()=>fu(t)),i=null,a=[r.node,...uu([`simulateTransaction`]).filter(e=>e!==r.node)];a.length>1&&$c(a[0],`simulateTransaction`)&&a.push(a.shift());for(let n of a)try{n!==r.node&&(r=await fu(t,[n]));let i=await ol(n,`simulateTransaction`,[ki.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:[t,...r.accounts.map(e=>e.address)]}}],n===B?2:0,!0);if(i.value.err)return{failed:!0,solOut:0,coinsOut:new Map,takenOver:!1};let a=i.value.accounts??[],o=a[0],s=!!o&&o.owner!==yl,c=new Map;return r.accounts.forEach((e,n)=>{let r=a[n+1],i=r?ki.decode(r.data[0]):new Uint8Array;i.length>=64&&Ri.encode(i.slice(32,64))!==t&&(s=!0);let o=i.length>=72?new DataView(i.buffer,i.byteOffset).getBigUint64(64,!0):0n;o<e.raw&&c.set(e.mint,(c.get(e.mint)??0n)+(e.raw-o))}),{failed:!1,solOut:r.lamports-(o?.lamports??0),coinsOut:c,takenOver:s}}catch(e){i=e}throw i instanceof Error?i:Error(String(i))}var mu=`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`,hu=`pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA`,gu=`So11111111111111111111111111111111111111112`,_u=jl,vu=`ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw`,yu=`5PHirr8joyTMp9JMm6nW7hNDVyEYdkzDqazxPD7RaTjx`,bu=`4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`,xu=`8Wf5TiAheLUqBrKXeYg2JtAFFMWtKdG2BSFgqUcPVwTt`,Su=`Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`,Cu=`5YxQFdt3Tr9zJLvkFccqXVUwhdTWJQc1fFg2YPbxvxeD`,wu=Uint8Array.from([43,100,73,19,233,246,111,148]),Tu=e=>new TextEncoder().encode(e),Eu=e=>Ri.decode(e),Du=Dl([Tu(`__event_authority`)],hu);function Ou(e){return Dl([Tu(`bonding-curve`),Eu(e)],mu)}function ku(e,t){let n=Dl([Tu(`pool-authority`),Eu(e)],mu);return Dl([Tu(`pool`),Uint8Array.of(0,0),Eu(n),Eu(e),Eu(t)],hu)}async function Au(e){let[t,n]=await Ml([Ou(e),e]);if(!t||t.owner!==mu||t.data.length<115||!n)return null;let r=Ri.encode(t.data.slice(83,115));if(r===_u||r===gu)return null;let i=t.data[48]!==0,a=t.data[81]!==0,o=t.data[82]!==0,[s,c]=await Ml([r,ku(e,r)]);if(!s)throw Error(`This coin's price coin couldn't be found.`);let l=i?c?.owner===hu?`pool`:null:`curve`;if(!l)throw Error(`This coin is between pump.fun and its pool right now, so it can't be traded for a moment. Try again shortly.`);if(l===`curve`&&a||l===`pool`&&c.data.length>=244&&c.data[243]!==0)throw Error(`pump.fun doesn't allow this kind of trade on "mayhem mode" coins.`);let u=l===`pool`&&c.data.length>=245&&c.data[244]!==0;if(l===`curve`&&o||u)throw Error(`pump.fun doesn't allow this kind of trade on cashback coins.`);let d=e=>{if(e!==`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`&&e!==`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)throw Error(`This coin uses a token program the app doesn't know.`);return e};return{mint:e,mintProgram:d(n.owner),quote:r,quoteProgram:d(s.owner),venue:l}}function ju(e,t,n,r,i){let a={mint:t.mint,program:t.mintProgram},o={mint:t.quote,program:t.quoteProgram},[s,c]=n===`buy`?[o,a]:[a,o],l=(e,t)=>El(e,t.mint,t.program),u=t.venue===`curve`?Ou(t.mint):ku(t.mint,t.quote),d=e=>({pubkey:e,isSigner:!1,isWritable:!0}),f=e=>({pubkey:e,isSigner:!1,isWritable:!1}),p=new Uint8Array(24);p.set(wu,0);let m=new DataView(p.buffer);m.setBigUint64(8,r,!0),m.setBigUint64(16,i,!0);let h={programId:hu,keys:[{pubkey:e,isSigner:!0,isWritable:!0},d(l(e,s)),d(l(e,c)),f(vu),f(yu),d(Dl([Tu(`user_volume_accumulator`),Eu(e)],hu)),d(l(Cu,o)),f(Vc),f(Hc),f(jl),f(Du),f(hu),f(mu),f(bu),f(xu),f(Su),f(t.mint),f(t.quote),d(u),d(l(u,a)),d(l(u,o))],data:p};return[...Il(3e5,2e5),Ol(e,l(e,c),e,c.mint,c.program),Ol(e,l(Cu,o),Cu,o.mint,o.program),h]}function Mu(e,t,n){return n===`coin`?El(e,t.mint,t.mintProgram):El(e,t.quote,t.quoteProgram)}var Nu=`walletCoins`,Pu=1,Fu=null,Iu=()=>({v:Pu,wallets:{},coins:{}}),Lu=()=>Fu??=N.get(Nu).then(e=>{let t=JSON.parse(e||`null`);return t&&t.v===Pu?t:Iu()}).catch(Iu),Ru;function zu(){clearTimeout(Ru),Ru=setTimeout(async()=>{let e=await Lu();N.set(Nu,JSON.stringify(e)).catch(()=>{})},300)}var Bu=([e,t,n,r,i,a])=>({address:e,mint:t,program:n,raw:BigInt(r),decimals:i,lamports:a}),Vu=e=>[e.address,e.mint,e.program,e.raw.toString(),e.decimals,e.lamports],Hu=(e,t)=>t.map(t=>({address:t,lamports:e.wallets[t].lamports,accounts:e.wallets[t].accounts.map(Bu)}));async function Uu(e){let t=await Lu();return e.every(e=>t.wallets[e])?Hu(t,e):null}async function Wu(e){qu=null;let t=await Lu();for(let n of e)t.wallets[n]&&(t.wallets[n].stale=!0);zu()}async function Gu(e,t,n){if(!t.length)return;let r=t.map(e=>e.address).filter(e=>!n.has(e)),[i,a]=await Promise.all([Promise.all(t.map(e=>Bl(e.address))),r.length?ou(r):Promise.resolve([])]),o=new Map(n);r.forEach((e,t)=>o.set(e,a[t])),t.forEach(({address:t,lamports:n},r)=>{let a=e.wallets[t],s=o.get(t);e.wallets[t]={at:Date.now(),lamports:n,sig:s===void 0?a?.sig:s,sigAt:s===void 0?a?.sigAt:Date.now(),accounts:i[r].map(Vu)}})}async function Ku(e,t){let n=new Map;for(let r of t)for(let t of e.wallets[r].accounts)BigInt(t[3])>0n&&n.set(t[1],t[4]);let r=[...n.keys()].filter(t=>!e.coins[t]);if(!r.length)return;let i=await lu(r);for(let t of r){let r=i.get(t);r&&(e.coins[t]={name:r.name,symbol:r.symbol,logo:r.logo,decimals:r.decimals??n.get(t),price:r.price})}}var qu=null;function Ju(e){let t=e.join(`,`);if(qu&&qu.key===t&&Date.now()-qu.at<4e3)return qu.value;let n=Yu(e),r={key:t,at:Date.now(),value:n};return qu=r,n.then(()=>qu===r&&(r.at=Date.now()),()=>qu===r&&(qu=null)),n}async function Yu(e){let t=await Lu(),n=e=>t.wallets[e]&&!t.wallets[e].stale,r=e.flatMap(e=>n(e)?t.wallets[e].accounts.map(t=>({owner:e,a:t})):[]),i=e.filter(e=>!t.wallets[e]),[a,o,s]=await Promise.all([ml(e),r.length?su(r.map(e=>e.a[0])):Promise.resolve([]),i.length?ou(i):Promise.resolve([])]),c=new Map(i.map((e,t)=>[e,s[t]])),l=new Set;return e.forEach((e,n)=>{let r=t.wallets[e];(!r||r.stale||r.lamports!==a[n])&&(!r&&c.get(e)===null&&!a[n]?t.wallets[e]={at:Date.now(),lamports:0,sig:null,sigAt:Date.now(),accounts:[]}:l.add(e))}),r.forEach(({owner:e,a:t},n)=>{let r=o[n];r===null?l.add(e):t[3]=r.toString()}),await Gu(t,[...l].map(t=>({address:t,lamports:a[e.indexOf(t)]})),c),e.forEach((e,n)=>{t.wallets[e].lamports=a[n],t.wallets[e].at=Date.now()}),await Ku(t,e),zu(),Hu(t,e)}async function Xu(e,t=!1){let n=await Lu(),r=e.filter(e=>n.wallets[e]&&!n.wallets[e].stale&&(t||Date.now()-(n.wallets[e].sigAt??0)>12e4));if(!r.length)return null;let i=await ou(r),a=new Map(r.map((e,t)=>[e,i[t]])),o=r.filter(e=>a.get(e)!==void 0&&a.get(e)!==n.wallets[e].sig);for(let e of r)a.get(e)!==void 0&&(n.wallets[e].sigAt=Date.now());return o.length?(await Gu(n,o.map(e=>({address:e,lamports:n.wallets[e].lamports})),a),await Ku(n,e),zu(),Hu(n,e)):(zu(),null)}async function Zu(e){let t=await Lu(),n=new Map;for(let t of e.accounts){if(t.raw===0n)continue;let e=n.get(t.mint)??{raw:0n,decimals:t.decimals};e.raw+=t.raw,n.set(t.mint,e)}return[...n].map(([e,{raw:n,decimals:r}])=>{let i=t.coins[e],a=Number(n)/10**r;return{mint:e,name:i?.name??null,symbol:i?.symbol??null,amount:a,usd:i?.price?i.price*a:null,decimals:r,logo:i?.logo}})}async function Qu(e){let t=await Lu(),n=!1;for(let[r,i]of e)t.coins[r]&&i>0&&t.coins[r].price!==i&&(t.coins[r].price=i,n=!0);n&&zu()}async function $u(e){return(await Lu()).coins[e]??null}async function ed(e){let t=await Lu();for(let n of Object.values(t.wallets))for(let t of n.accounts)if(t[1]===e)return t[2]}var td=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(Za(e),Xa(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),no(r)}update(e){return eo(this),this.iHash.update(e),this}digestInto(e){eo(this),to(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},nd=(()=>{let e=((e,t,n)=>new td(e,t).update(n).digest());return e.create=(e,t)=>new td(e,t),e})();function rd(e,t,n,r){Za(e);let{c:i,dkLen:a,asyncTick:o}=mo({dkLen:32,asyncTick:10},r);if(Ya(i,`c`),Ya(a,`dkLen`),Ya(o,`asyncTick`),i<1)throw Error(`"c" (iterations) must be >= 1`);if(a<1)throw Error(`"dkLen" must be >= 1`);if(a>(2**32-1)*e.outputLen)throw Error(`derived key too long`);let s=fo(t,`password`);try{let t=fo(n,`salt`);try{let n=new Uint8Array(a),{iHash:r,oHash:c,outputLen:l}=nd.create(e,s);return{c:i,dkLen:a,asyncTick:o,DK:n,outputLen:l,eng:id(r,c,t,new Uint8Array(l))}}finally{typeof n==`string`&&no(t)}}finally{typeof t==`string`&&no(s)}}function id(e,t,n,r){let i=new Uint8Array(4),a=ro(i),o=e._cloneInto().update(n),s=t._cloneInto(),c=e._cloneInto,l=t._cloneInto;return{u1:(e,n)=>{a.setInt32(0,e,!1),o._cloneInto(s).update(i).digestInto(r),t._cloneInto(s).update(r).digestInto(r),n.set(r.subarray(0,n.length))},rounds:(n,i)=>{for(let a=1;a<n;a++){c.call(e,s).update(r).digestInto(r),l.call(t,s).update(r).digestInto(r);for(let e=0;e<i.length;e++)i[e]^=r[e]}},output:n=>(e.destroy(),t.destroy(),o.destroy(),s.destroy(),no(r),n)}}function ad(e,t,n,r){let{c:i,dkLen:a,DK:o,outputLen:s,eng:c}=rd(e,t,n,r);for(let e=1,t=0;t<a;e++,t+=s){let n=o.subarray(t,t+s);c.u1(e,n),c.rounds(i,n)}return c.output(o)}var od=e=>e[0]===`あいこくしん`;function sd(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;let n=e.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function cd(e){if(typeof e!=`string`)throw TypeError(`invalid mnemonic type: `+typeof e);if(!sd(e))throw TypeError(`expected well-formed Unicode string`);return e.normalize(`NFKD`)}function ld(e){let t=cd(e),n=t.split(` `);if(![12,15,18,21,24].includes(n.length))throw Error(`Invalid mnemonic`);return{nfkd:t,words:n}}function ud(e){if(Xa(e),![16,20,24,28,32].includes(e.length))throw RangeError(`invalid entropy length`)}function dd(e,t=128){if(Ya(t),t%32!=0||t>256)throw RangeError(`Invalid entropy`);return _d(go(t/8),e)}var fd=e=>{let t=8-e.length/4;return Po(e)[0]>>t<<t};function pd(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!=`string`)throw TypeError(`Wordlist: expected array of 2048 strings`);e.forEach(e=>{if(typeof e!=`string`)throw TypeError(`wordlist: non-string element: `+e);if(!sd(e))throw TypeError(`wordlist: expected well-formed Unicode string`)})}function md(e,t){pd(t);let n=new Uint8Array(e.length+1);n.set(e),n[e.length]=fd(e);let r=[],i=0,a=0;for(let e of n)i=i<<8|e,a+=8,a>=11&&(a-=11,r.push(t[i>>>a&2047]),i&=(1<<a)-1);return r}function hd(e,t){pd(t);let n=e.length/3*4,r=new Uint8Array(n+1),i=0,a=0,o=0;for(let n of e){let e=t.indexOf(n);if(e===-1)throw Error(`Unknown word: `+n);for(i=i<<11|e,a+=11;a>=8;)a-=8,r[o++]=i>>>a&255;i&=(1<<a)-1}a>0&&(r[o]=i<<8-a);let s=r.subarray(0,n);if(r[n]!==fd(s))throw Error(`Invalid checksum`);return Uint8Array.from(s)}function gd(e,t){let{words:n}=ld(e),r=hd(n,t);return ud(r),r}function _d(e,t){return ud(e),md(e,t).join(od(t)?`　`:` `)}function vd(e,t){try{gd(e,t)}catch{return!1}return!0}var yd=e=>{if(typeof e!=`string`)throw TypeError(`invalid passphrase type: `+typeof e);return cd(`mnemonic`+e)};function bd(e,t=``){return ad(Fo,ld(e).nfkd,yd(t),{c:2048,dkLen:64})}var xd=Object.freeze(`abandon
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
`));function Sd(){return dd(xd,128)}function Cd(e){return e.trim().toLowerCase().split(/\s+/).join(` `)}function wd(e){return vd(Cd(e),xd)}function Td(e,t){let n=nd(Fo,new TextEncoder().encode(`ed25519 seed`),e),r=n.slice(0,32),i=n.slice(32);for(let e of[44,501,t,0]){let t=new Uint8Array(37);t.set(r,1),new DataView(t.buffer).setUint32(33,(e|2147483648)>>>0),n=nd(Fo,i,t),r=n.slice(0,32),i=n.slice(32)}return r}function Ed(e,t){let n=bd(Cd(e));return Array.from({length:t},(e,t)=>{let r=Td(n,t);return{index:t,address:Ri.encode(Nc.getPublicKey(r)),secret:r}})}var Dd=3e5,Od=e=>btoa(String.fromCharCode(...e)),kd=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function Ad(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:Dd,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}function jd(e,t){return Md(Cd(e),t)}async function Md(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await Ad(t,n),a=new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,new TextEncoder().encode(e))),o={v:1,salt:Od(n),iv:Od(r),data:Od(a)};return JSON.stringify(o)}async function Nd(e,t){let n=JSON.parse(e),r=await Ad(t,kd(n.salt));try{let e=await crypto.subtle.decrypt({name:`AES-GCM`,iv:kd(n.iv)},r,kd(n.data));return new TextDecoder().decode(e)}catch{return null}}function Pd(e){return Ri.encode(new Uint8Array([...e.secret,...Ri.decode(e.address)]))}function Fd(e){let t=e.trim().replace(/^["']|["']$/g,``),n;try{if(t.startsWith(`[`)){let e=JSON.parse(t);if(!Array.isArray(e)||!e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return null;n=new Uint8Array(e)}else n=Ri.decode(t.replace(/\s+/g,``))}catch{return null}if(n.length!==64)return null;let r=n.slice(0,32),i=Nc.getPublicKey(r);return i.every((e,t)=>e===n[32+t])?{address:Ri.encode(i),secret:r}:null}var Id=`vault`,Ld=`addresses`,Rd=`imports`,zd=new Map;function Bd(e){let t=zd.get(e);if(!t){let n=Jt.get(e);t=n,zd.set(e,n),n.then(t=>t.value===null&&zd.get(e)===n&&zd.delete(e),()=>zd.get(e)===n&&zd.delete(e))}return t}async function Vd(e,t){zd.delete(e),await Jt.set(e,t),zd.delete(e)}async function Hd(e){zd.delete(e),await Jt.remove(e),zd.delete(e)}var Ud=`importList`,Wd=`costBasis`,Gd=20;document.head.append(Object.assign(document.createElement(`style`),{textContent:Mn}));var U=new URLSearchParams(location.search),W=U.get(`jk`),Kd=U.get(`rk`),qd=`https://krypto-relay.dustin-m-shamp.workers.dev`,Jd=U.get(`relay`)===qd?qd:void 0;Jd&&Vi(Jd),Kd&&(Jd||!U.has(`relay`))&&Rc(Kd,Jd);var Yd=document.querySelector(`meta[name="app-version"]`)?.content??`?`,Xd=U.get(`v`),Zd=!!Xd&&/^\d+(\.\d+)+$/.test(Xd)&&((e,t)=>{let[n,r]=[e.split(`.`).map(Number),t.split(`.`).map(Number)];for(let e=0;e<Math.max(n.length,r.length);e++)if((n[e]??0)!==(r[e]??0))return(n[e]??0)>(r[e]??0);return!1})(Xd,Yd),Qd=Zd&&!U.get(`r`);if(Qd){let e=new URL(location.href);e.searchParams.set(`r`,String(Date.now())),location.replace(e.toString())}var $d=U.get(`buy`),ef=Math.min(100,Math.max(1,Number(U.get(`pct`))||100)),tf=U.get(`sol`)?{total:Math.round(Number(U.get(`sol`))*V),count:U.get(`n`)?Number(U.get(`n`)):null,split:U.get(`split`)?U.get(`split`).split(`-`).map(Number):null}:null,nf=U.get(`sell`),rf=Math.min(100,Math.max(1,Number(U.get(`spct`))||100)),af=U.get(`main`)===`1`,of=U.get(`w`)?U.get(`w`).split(`-`).map(Number):null,sf=U.get(`send`),cf=U.get(`to`),lf=document.getElementById(`app`),uf=new Map;function df(e,t,n){let r=uf.get(e);if(r&&Date.now()-r.at<r.ttl)return r.value;let i=n();return uf.set(e,{at:Date.now(),ttl:t,value:i}),i.catch(()=>uf.delete(e)),i}var ff=()=>uf.clear(),pf=e=>df(`bal:${e.join(`,`)}`,3e4,()=>ml(e)),mf=(e=!1)=>df(`solusd`,3e4,()=>W?ha(W,e):Promise.resolve(null)),hf=e=>df(`orders:${e}`,3e4,()=>xa(W,e,`active`)),gf=e=>df(`coin:${e}`,864e5,()=>pl(e)),_f=(e,t=!1)=>df(`prices:${[...e].sort().join(`,`)}`,15e3,()=>ga(W,e,t)),vf=null;function yf(){ff(),Wt(),lf.classList.add(`loading`),Cp(Of(lf.querySelector(`h1`)?.textContent??`trade`)),vf?.disconnect();let e=new Map;vf=new MutationObserver(()=>{if(!document.getElementById(`hackloader`)){vf?.disconnect();return}let t=document.getElementById(`funding`),n=t?[[`funding`,`main`,t.textContent??``]]:[];lf.querySelectorAll(`code[id^="status-"]`).forEach(e=>{let t=e.parentElement?.querySelector(`span`)?.textContent?.trim()??``;n.push([e.id,t,e.textContent??``])});for(let[t,r,i]of n){let n=i.replace(/\s*·\s*(view|check)\s*$/i,``).replace(/\s+/g,` `).trim();n&&n!==`waiting`&&e.get(t)!==n&&(e.set(t,n),Cp(`${n.startsWith(`✓`)?`[ok]`:n.startsWith(`✗`)||/fail/i.test(n)?`[!]`:`[*]`} ${r} ${n.replace(/^[✓✗]\s*/,``)}`,t))}}),vf.observe(lf,{subtree:!0,childList:!0,characterData:!0})}var bf=[],xf=!1,Sf=!1,Cf=new Set([`home`,`welcome`]);function G(e,t){if(xf&&bf.pop(),Cf.has(e))bf.length=0;else{let t=bf.findIndex(t=>t.key===e);t>=0&&(bf.length=t)}bf.push({key:e,open:t}),xf=!0}function wf(){P();let e=e=>{let t=e?e.open:X;Promise.resolve().then(()=>t()).catch($)};if(!Sf&&bf.length)return e(bf.pop());bf.pop(),e(bf.pop())}function K(e,t=!1){t||(Sf=xf,xf=!1);let n=bf[bf.length-1],r=Sf&&n&&Cf.has(n.key),i=Zd?`<p class="note">Version ${Q(Xd)} is still being published. Everything here works; close and reopen in a minute to get it.</p>`:``;lf.innerHTML=`<header class="brand">${r?``:`<button type="button" id="navBack" class="navback" aria-label="Back">←</button>`}${Rr()}<div class="name glitch" data-text="KRYPTO SNATCHER">KRYPTO SNATCHER</div></header>`+i+e+`<p class="version">KRYPTO_SNATCHER // v${Yd}${Jd?` · RELAY`:Kd?` · HELIUS`:``}</p>`,lf.classList.toggle(`loading`,!!lf.querySelector(`.loader`)),document.getElementById(`navBack`)?.addEventListener(`click`,wf),window.scrollTo(0,0)}function q(e){return document.getElementById(e)}function J(e,t){q(e).addEventListener(`click`,t)}function Tf(e){return`${e.slice(0,6)}…${e.slice(-6)}`}function Ef(e){Zt(`error`);let t=q(`error`);t.textContent=e,t.hidden=!1}var Df=new Set([`your`,`the`,`my`,`a`,`an`,`of`,`on`,`to`,`it`,`what`,`each`,`every`,`in`,`from`,`this`]),Of=e=>`$ ./objective --${e.toLowerCase().replace(/[^a-z0-9 ]+/g,` `).split(/\s+/).filter(e=>e&&!Df.has(e)).join(`-`)||`run`}`;function Y(e){K(Nr(e),!0),Pr(),Cp(Of(e))}async function kf(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,Zt(`success`),setTimeout(()=>t.textContent=n,1200)}catch{prompt(`Copy this address:`,e)}}async function Af(){if(!Gt()){K(`
      <h1>Open this on your phone</h1>
      <p>Your wallets are kept in your phone's secure storage, which only the Telegram app on iPhone or Android provides.</p>
      <p class="muted">Make sure Telegram is up to date, then open this from the bot on your phone.</p>`);return}M.ready(),M.expand();try{M.setHeaderColor?.(`#05010f`),M.setBackgroundColor?.(`#05010f`)}catch{}let e=rp().catch(()=>null);Bd(Rd).catch(()=>{}),mr(),setTimeout(Ie,1500),$d&&W&&(fl($d).catch(()=>{}),e.then(e=>{if(!e)return;let t=e.map(e=>e.address),n=ml(t);n.catch(()=>{}),ap={at:Date.now(),key:t.join(`,`),value:n}}));let{value:t,canRestore:n}=await Bd(Id);if(t){if(U.get(`view`)===`holdings`)return th();if(U.get(`view`)===`sweep`)return Eh();if(U.get(`splitsol`)){let e=U.get(`splitsol`);return Sm(e===`all`?`all`:Math.round(Number(e)*V),Number(U.get(`n`))||null,U.get(`split`)?U.get(`split`).split(`-`).map(Number):null)}if(sf&&cf){let e=Number(U.get(`amt`)),t=Number(U.get(`sendpct`));return ag({what:sf,to:cf,only:of,side:U.get(`side`)===`1`,amount:e>0?e:null,pct:t>0&&t<100?t:null})}return nf===`*`?Zh(rf,af,of):nf?Ph(nf,rf,af,of):$d&&tf?ym($d,tf):$d&&U.get(`pick`)?Cm($d,Number(U.get(`n`))||null,U.get(`side`)===`1`):$d?dm($d,ef):X()}jf(n)}function jf(e){G(`welcome`,()=>jf(e)),K(`
    <h1>Your wallets</h1>
    <p>Your wallets are created and kept on this phone, locked with a PIN. The bot never sees your keys.</p>
    ${e?`<button id="restoreDevice" class="primary">Restore my saved wallets</button>`:``}
    <button id="create" class="${e?``:`primary`}">Create new wallets</button>
    <button id="import">I already have a 12-word phrase</button>`),e&&J(`restoreDevice`,async()=>{let{value:e}=await Jt.restore(Id);await Jt.restore(Rd).catch(()=>null),zd.clear(),e?X():jf(!1)}),J(`create`,()=>Nf(Sd())),J(`import`,Ff)}function Mf(e){return`<ol class="words">${e.split(` `).map(e=>`<li>${e}</li>`).join(``)}</ol>`}function Nf(e){G(`newPhrase`,()=>Nf(e)),K(`
    <h1>Your 12-word backup</h1>
    <p>Write these words down on paper, in order. They are the only way to get your wallets back if you lose this phone.</p>
    ${Mf(e)}
    <p class="warning">Never share these words or type them anywhere else. Anyone who has them controls your money.</p>
    <label class="check"><input type="checkbox" id="saved"> I wrote all 12 words down</label>
    <button id="next" class="primary" disabled>Continue</button>`),q(`saved`).addEventListener(`change`,()=>q(`next`).disabled=!q(`saved`).checked),J(`next`,()=>Pf(e))}function Pf(e){G(`quiz`,()=>Pf(e));let t=e.split(` `),n=Math.floor(Math.random()*6),r=6+Math.floor(Math.random()*6);K(`
    <h1>Check your backup</h1>
    <p>Type these two words from your paper.</p>
    <label>Word #${n+1}<input id="wa" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <label>Word #${r+1}<input id="wb" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <p id="error" class="error" hidden></p>
    <button id="check" class="primary">Check</button>
    <button id="back">Show the words again</button>`),J(`check`,()=>{if(q(`wa`).value.trim().toLowerCase()!==t[n]||q(`wb`).value.trim().toLowerCase()!==t[r])return Ef(`Those don't match. Check your paper, or go back to see the words again.`);Vf(e)}),J(`back`,()=>Nf(e))}function Ff(){G(`import`,Ff),K(`
    <h1>Enter your 12 words</h1>
    <p>Type your words in order, separated by spaces.</p>
    <textarea id="phrase" rows="4" autocapitalize="off" autocomplete="off" spellcheck="false"></textarea>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Continue</button>
    <button id="back">Back</button>`),J(`next`,()=>{let e=Cd(q(`phrase`).value);if(!wd(e))return Ef(`That isn't a valid 12-word phrase. Check for typos.`);Vf(e)}),J(`back`,()=>Af())}var If=e=>`<input id="${e}" class="pinvalue" type="password" inputmode="none" maxlength="6" autocomplete="off" tabindex="-1">
   <div class="pindots" data-for="${e}">${`<i></i>`.repeat(6)}</div>`,Lf=(e=`clear`)=>`<div class="keypad">${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,e,`0`,`back`].map(e=>`<button type="button" class="key${/\d/.test(e)?``:` fn ${e}`}" data-k="${e}">${e===`back`?`⌫`:e===`clear`?`CLR`:e===`dot`?`.`:e}</button>`).join(``)}</div>`;function Rf(e){document.querySelectorAll(`.key`).forEach(t=>t.addEventListener(`click`,()=>{P(),e(t.dataset.k)}))}function zf(e,t){let n=e[0],r=()=>e.forEach(e=>{let t=document.querySelector(`.pindots[data-for="${e}"]`);t.classList.toggle(`active`,e===n);let r=q(e).value.length;t.querySelectorAll(`i`).forEach((e,t)=>e.classList.toggle(`on`,t<r))});e.forEach(e=>{q(e).addEventListener(`input`,r),document.querySelector(`.pindots[data-for="${e}"]`).addEventListener(`click`,()=>(n=e,r()))}),Rf(i=>{document.querySelectorAll(`.pindots.nope`).forEach(e=>e.classList.remove(`nope`));let a=q(n);if(i===`back`?a.value=a.value.slice(0,-1):i===`clear`?a.value=``:a.value.length<6&&(a.value+=i),q(`error`).hidden=!0,a.value.length===6&&/\d/.test(i)){let i=e[e.indexOf(n)+1];i&&(n=i),r(),t(a.id)}else r()}),r()}function Bf(e){q(e).value=``;let t=document.querySelector(`.pindots[data-for="${e}"]`);t.querySelectorAll(`i`).forEach(e=>e.classList.remove(`on`)),t.classList.remove(`nope`),t.offsetWidth,t.classList.add(`nope`)}function Vf(e){G(`setPin`,()=>Vf(e)),K(`
    <h1>Choose a 6-digit PIN</h1>
    <p>You'll enter this PIN to approve trades and to see your backup words.</p>
    <label>PIN</label>${If(`pin1`)}
    <label>Same PIN again</label>${If(`pin2`)}
    <p id="error" class="error" hidden></p>
    ${Lf()}
    <button id="next" class="primary">Continue</button>`);let t=()=>{let t=q(`pin1`).value;if(!/^\d{6}$/.test(t))return Ef(`The PIN must be exactly 6 digits.`);if(t!==q(`pin2`).value)return Bf(`pin2`),Ef(`The two PINs don't match. Enter it again.`);tp(e,t)};zf([`pin1`,`pin2`],e=>e===`pin2`&&t()),J(`next`,t)}var Hf=0,Uf=0;function Wf(e,t){/ to (buy|fund|split|send|sell)\b/.test(e)&&Ul(),K(`
    <h1>${e}</h1>
    ${If(`pin`)}
    <p id="error" class="error" hidden></p>
    ${Lf()}
    <button id="unlock" class="primary">Unlock</button>
    <button id="cancel">Cancel</button>`),J(`cancel`,X),zf([`pin`],()=>q(`unlock`).click()),J(`unlock`,async()=>{if(Date.now()<Uf)return Ef(`Too many wrong PINs. Try again in ${Math.ceil((Uf-Date.now())/1e3)} seconds.`);let e=q(`pin`).value,{value:n}=await Bd(Id);if(!n)return Af();q(`unlock`).disabled=!0,q(`unlock`).textContent=`Checking…`;let r=Jf(e).catch(()=>[]),i=await Nd(n,e);if(q(`unlock`).disabled=!1,q(`unlock`).textContent=`Unlock`,!i)return Bf(`pin`),Hf++,Hf>=5&&(Uf=Date.now()+3e4*2**(Hf-5)),Ef(`Wrong PIN.`);Hf=0,Gf=await r,Zf().catch(()=>{}),t(i,e)})}var Gf=[],Kf=0,qf=null;async function Jf(e){let{value:t}=await Bd(Rd);if(!t)return[];let n=await Nd(t,e);return n?JSON.parse(n).flatMap(({name:e,key:t})=>{let n=Fd(t);return n?[{name:e,...n}]:[]}):[]}async function Yf(e,t){e=e.filter((t,n)=>e.findIndex(e=>e.address===t.address)===n),await Vd(Rd,await Md(JSON.stringify(e.map(e=>({name:e.name,key:Pd({index:0,...e})}))),t)),Gf=e,await Xf(e)}async function Xf(e){let t=e.map(({name:e,address:t})=>({name:e,address:t}));try{await N.set(Ud,JSON.stringify(t)),ip()}catch{let e=qf;np=e?Promise.resolve([...e,...t.map((t,n)=>({index:e.length+n,address:t.address,name:t.name}))]):null}}async function Zf(){if(!Gf.length)return;let e=JSON.parse(await N.get(Ud).catch(()=>null)||`[]`);e.length===Gf.length&&e.every((e,t)=>e.address===Gf[t].address)||await Xf(Gf)}function Qf(e,t){let n=Ed(e,Math.min(t,Kf||t));for(let e=n.length;e<t;e++){let t=Gf[e-Kf];if(!t)throw Error(`The key for wallet #${e} is missing. Open the app again from the bot and retry.`);n.push({index:e,address:t.address,secret:t.secret})}return n}function $f(){G(`importKey`,$f),K(`
    <h1>Import a wallet</h1>
    <p>Paste the private key of a wallet from another app (in Phantom: Settings → Manage Accounts → the wallet → Show Private Key). It becomes one more side wallet here.</p>
    <textarea id="key" rows="3" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Private key"></textarea>
    <label>Name (optional)<input id="name" maxlength="20" autocomplete="off" placeholder="Phantom 1"></label>
    <p class="muted">It's locked with your PIN on this phone, like your 12 words. Your 12 words don't back it up, so keep its key in the app it came from too.</p>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Import</button>
    <button id="cancel">Cancel</button>`),J(`cancel`,X),J(`next`,async()=>{let e=Fd(document.getElementById(`key`).value);if(!e)return Ef(`That doesn't look like a Solana private key. Copy it again from your wallet app and paste the whole thing.`);let t=await rp()??[],n=t.find(t=>t.address===e.address);if(n)return Ef(`That wallet is already here (${n.index===0?`main`:`#${n.index}`}).`);let r=t.length-Kf;if(r>=Gd)return Ef(`You can import up to ${Gd} wallets.`);let i=q(`name`).value.trim().slice(0,20)||`Imported ${r+1}`;Wf(`Enter your PIN to import it`,async(t,n)=>{Y(`Saving…`);try{await Yf([...Gf,{name:i,...e}],n)}catch(e){return $(e)}Zt(`success`),X()})})}function ep(e){G(`removeImport:${e.address}`,()=>ep(e)),K(`
    <h1>Remove ${Q(e.name??``)} (#${e.index})?</h1>
    <p>This only removes it from Krypto Snatcher. The wallet and its money stay where they are.</p>
    <p class="warning">If you don't have its private key anywhere else, export it first, or move its coins and SOL out. Your 12 words can't bring it back.</p>
    <button id="exportFirst">Export its key first</button>
    <button id="yes" class="danger">Remove it</button>
    <button id="no" class="primary">Keep it</button>`),J(`no`,X),J(`exportFirst`,()=>om(e)),J(`yes`,()=>Wf(`Enter your PIN to remove it`,async(t,n)=>{Y(`Saving…`),await Yf(Gf.filter(t=>t.address!==e.address),n),X()}))}function tp(e,t,n=5){G(`chooseCount`,()=>tp(e,t,n)),K(`
    <h1>How many side wallets?</h1>
    <p>You get one main wallet that you deposit SOL into, plus side wallets for split buys.</p>
    <input id="count" class="pinvalue" type="text" inputmode="none" tabindex="-1" value="${n}">
    <div class="total amountbox"><small>Side wallets (0 to 30)</small><div class="amount"><span class="num" id="countShow">${n}</span></div></div>
    <div class="stepper wide"><button id="minus" type="button">−</button><button id="plus" type="button">+</button></div>
    <p id="error" class="error" hidden></p>
    ${Lf()}
    <button id="next" class="primary">Create wallets</button>`);let r=!0,i=e=>{q(`count`).value=e,q(`countShow`).textContent=e||`0`,q(`countShow`).classList.toggle(`over`,Number(e)>30),q(`error`).hidden=!0};Rf(e=>{let t=r?``:q(`count`).value;r=!1,e===`back`?i(t.slice(0,-1)):e===`clear`?i(``):t.length<2&&i(String(Number(t+e)))});let a=e=>{r=!0,i(String(Math.min(30,Math.max(0,(Number(q(`count`).value)||0)+e))))};J(`minus`,()=>a(-1)),J(`plus`,()=>a(1)),J(`next`,async()=>{let n=Number(q(`count`).value);if(!Number.isInteger(n)||n<0||n>30)return Ef(`Pick a whole number from 0 to 30.`);Y(`Setting up your wallets…`);let r=Ed(e,n+1).map(({index:e,address:t})=>({index:e,address:t}));t&&await Vd(Id,await jd(e,t)),await N.set(Ld,JSON.stringify(r)),ip(),!t&&Gf.length&&(await N.set(Ud,JSON.stringify(Gf.map(({name:e,address:t})=>({name:e,address:t})))),ip()),Zt(`success`),X()})}var np=null;function rp(){if(!np){let e=sp();np=e,e.then(t=>!t&&np===e&&(np=null),()=>np===e&&(np=null))}return np}var ip=()=>np=null,ap=null;function op(e){let t=ap;return ap=null,t&&t.key===e.join(`,`)&&Date.now()-t.at<5e3?t.value.catch(()=>ml(e)):ml(e)}async function sp(){let[e,t]=await Promise.all([N.get(Ld),N.get(Ud)]);if(!e)return null;let n=JSON.parse(e);Kf=n.length,qf=n;let r=JSON.parse(t||`[]`);return[...n,...r.map((e,t)=>({index:n.length+t,address:e.address,name:e.name}))]}async function X(){G(`home`,X);let e=await rp();if(!e)return Wf(`Unlock your wallets`,e=>tp(e,null));let[t,...n]=e;K(`
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
    ${n.length?`<ul class="list">${n.map(e=>`<li class="openwallet" data-index="${e.index}"><span>#${e.index}</span><code>${e.name?`<b>${Q(e.name)}</b> · `:``}${Tf(e.address)}<br><small class="bal" data-index="${e.index}">…</small></code>
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
    <button id="remove" class="danger">Remove wallets from this phone</button>`),document.querySelectorAll(`.copy`).forEach(e=>e.addEventListener(`click`,()=>kf(e.dataset.address,e))),document.querySelectorAll(`.export`).forEach(t=>t.addEventListener(`click`,()=>om(e[Number(t.dataset.index)]))),document.querySelectorAll(`.unimport`).forEach(t=>t.addEventListener(`click`,()=>ep(e[Number(t.dataset.index)]))),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,n=>{n.target.closest(`button, a, .solamt, .coinamt`)||(P(),lp(e[Number(t.dataset.index)]).catch($))})),J(`importKey`,$f),J(`holdings`,()=>th().catch($)),J(`holdingsTop`,()=>th().catch($)),J(`pnl`,()=>zp().catch($)),J(`sellAll`,()=>Zh(100,!1,null).catch($)),n.length&&J(`sweep`,()=>Eh().catch($)),J(`change`,()=>Wf(`Enter your PIN`,e=>tp(e,null,Kf-1))),J(`reveal`,()=>Wf(`Enter your PIN`,e=>{K(`
        <h1>Your 12 backup words</h1>
        ${Mf(e)}
        <p class="warning">Never share these words. Anyone who has them controls your money.</p>
        <button id="done" class="primary">Done</button>`),J(`done`,X)})),J(`remove`,sg),pf(e.map(e=>e.address)).then(e=>{document.querySelectorAll(`.bal`).forEach(t=>{let n=e[Number(t.dataset.index)];Pn(t,n,e=>`${am(e)} SOL`,{ms:900,final:`${H(n)} SOL`})});let t=document.getElementById(`totalSol`),n=e.reduce((e,t)=>e+t,0);t&&Pn(t,n,am,{ms:1200,final:H(n)});let r=document.getElementById(`totalWrap`);r&&(r.dataset.sol=String(n/V),r.classList.add(`solamt`),lg&&vg())}).catch(e=>{let t=document.getElementById(`totalSol`);t&&(t.textContent=`—`),document.querySelectorAll(`.bal`).forEach(e=>e.textContent=`balance unavailable`);let n=document.createElement(`p`);n.className=`error`,n.textContent=e instanceof Error?e.message:String(e),document.querySelector(`h1`).after(n)})}var cp=null;async function lp(e){let t=`wallet:${e.address}`;G(t,()=>lp(e));let n=Symbol(`wallet`);cp=n;let r=()=>cp===n&&bf[bf.length-1]?.key===t,[i,a]=await Promise.all([nh(),ch()]),o=a.filter(t=>t.wallet===e.address).length;await rh([e],`Opening the wallet…`,r,(t,n,r)=>up(e,t[0],n?.[0]??null,r,{costs:i,autoHere:o}))}async function up(e,t,n,r,{costs:i,autoHere:a}){let o=e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`,s=t.lamports,c=0,l=(await Zu(t)).filter(e=>!Fm(e)||!(c+=1)),u=new Map;for(let e of[...l,...n??[]]){let t=u.get(e.mint)??{coin:e,amount:0,inOrders:0,usd:null};t.amount+=e.amount,qm(e)?t.inOrders+=e.amount:e.usd!==null&&(t.usd=(t.usd??0)+e.usd),u.set(e.mint,t)}let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=ng(e),p=window.scrollY;K(`
    <h1>${o} <span id="holdSync" class="live${r===`saved`?``:` synced`}">${r===`saved`?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total"><small>SOL in this wallet</small><div class="big"><span class="solamt" data-sol="${s/V}">${H(s)}</span><span class="unit">SOL</span></div><div class="sub" id="coinsUsd"></div></div>
    <div class="card"><div class="label">Address</div><div class="address">${e.address}</div>
      <div class="row"><button id="copyAddr">Copy address</button><button id="exportKey">Export key</button></div></div>
    <h2>Coins${u.size&&W?` <span id="live" class="live">LIVE</span>`:``}</h2>
    ${u.size?`<ul class="list coins">${[...u.values()].map(e=>`<li data-mint="${e.coin.mint}">${Fn(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(Pm(e.coin))}</b>${e.inOrders?`<small class="inorder">🎯 ${fg(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
              <div class="right"><span class="val">${e.usd===null?``:Nm(e.usd)}</span><small class="move"></small><small>${fg(e.coin.mint,e.amount)}</small></div></li>`).join(``)}</ul><p class="muted">Tap a coin to sell some of it from this wallet, set an auto-sell, or buy more.</p>`:`<p class="muted">No coins in this wallet.</p>`}
    ${c?`<p class="muted">${c} junk coin${c===1?``:`s`} hidden.</p>`:``}
    ${u.size?`<button id="sellAll" class="danger">Sell all coins in this wallet</button>`:``}
    ${a?`<button id="autoSells" class="gold">🎯 Auto-sells · ${a} placed</button>`:``}
    ${e.index===0?``:`<button id="solToMain">Send all its SOL to main</button>`}
    ${e.index!==0&&u.size?`<button id="allToMain">Send everything (coins + SOL) to main</button>`:``}
    <button id="solscan">View on Solscan</button>
    ${e.name?`<button id="unimport" class="danger">Remove this imported wallet</button>`:``}
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,p),In(),J(`copyAddr`,()=>kf(e.address,q(`copyAddr`))),J(`exportKey`,()=>om(e)),J(`solscan`,()=>$t(Zl(e.address))),J(`home`,X),u.size&&J(`sellAll`,()=>Zh(100,!1,[e.index]).catch($)),a&&J(`autoSells`,()=>yh().catch($));let m=t=>ag({what:t,to:`0`,only:[e.index],side:!1,amount:null,pct:null}).catch($);e.index!==0&&J(`solToMain`,()=>m(`sol`)),e.index!==0&&u.size&&J(`allToMain`,()=>m(`*`)),e.name&&J(`unimport`,()=>ep(e));let h=new Map;if(document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=u.get(t.dataset.mint);P(),ah({mint:n.coin.mint,label:Pm(n.coin),short:n.coin.symbol||n.coin.name||`?`,logo:n.coin.logo,amount:n.amount,raw:d(n),wallets:f,holders:[{address:e.address,amount:n.amount}],decimals:n.coin.decimals??0,inOrders:n.inOrders,only:[e.index],value:h.get(n.coin.mint)??null}).catch($)})),!u.size||!W)return;let g=q(`live`),_=async e=>{let t=[...u],[n,r]=await Promise.all([mf(e).catch(()=>null),Promise.all(t.map(([t,n])=>ma(W,t,d(n),e).catch(()=>null)))]);if(!g.isConnected)return;yg(n);let a=0,o=new Map;t.forEach(([e,t],s)=>{let c=r[s],l=document.querySelector(`.coins li[data-mint="${e}"]`);if(!l||c===null)return;h.set(e,c),n&&(t.usd=c/V*n,a+=t.usd,l.querySelector(`.val`).textContent=Nm(t.usd),t.amount>0&&(pg(e,t.usd/t.amount),o.set(e,t.usd/t.amount)));let u=i[e],f=!Im.has(e)&&zm(u)?Bm(u,n):null,p=l.querySelector(`.right`);if(f){let e=f/Number(BigInt(u.raw))*Number(d(t)),n=(c-e)/e*100,r=Math.abs(n)>=.5;p.classList.toggle(`up`,r&&n>0),p.classList.toggle(`down`,r&&n<0),p.querySelector(`.move`).textContent=r?`${n>0?`▲`:`▼`} ${Math.abs(n)>=100?Math.round(Math.abs(n)):Math.abs(n).toFixed(1)}% since buy`:``}}),Qu(o).catch(()=>{}),a>0&&(q(`coinsUsd`).textContent=`+ ${Nm(a)} in coins`),g.classList.remove(`beat`),g.offsetWidth,g.classList.add(`beat`)};(async()=>{for(let e=0;g.isConnected;e++)document.hidden||await _(e>0),await new Promise(e=>setTimeout(e,5e3))})().catch(()=>{})}var dp=1,fp=1500,pp=([e,t,n,r,i,a,o])=>({sig:e,at:t,mint:n,side:r,coins:i,lamports:a,usd:o}),mp=e=>[e.sig,e.at,e.mint,e.side,e.coins,e.lamports,Math.round(e.usd*1e6)/1e6];async function hp(e){try{let t=JSON.parse(await N.get(`pnl_${e}`)||`null`);return t&&t.v===dp?t:null}catch{return null}}var gp=(e,t)=>df(`trades:${e}`,9e4,async()=>{let n=`pnl_${e}`,r=await hp(e),i=await xp(t,8e3,void 0);if(i===null)return await N.set(n,JSON.stringify({v:dp,sig:null,trades:[]})).catch(()=>{}),[];if(r&&i&&r.sig===i)return r.trades.map(pp);let a=await au(e,r?.top,5);if(!a){if(r)return r.trades.map(pp);throw Error(`Couldn't read this wallet's history right now.`)}let o=new Set(a.trades.map(e=>e.sig)),s=[...a.trades,...r?.trades.map(pp).filter(e=>!o.has(e.sig))??[]].sort((e,t)=>t.at-e.at).slice(0,fp),c={v:dp,top:a.top,sig:i,trades:s.map(mp)};return await N.set(n,JSON.stringify(c)).catch(()=>{}),s}),_p=(e,t,n)=>{let r=t.get(e.at)??n??0;return e.lamports/V*r+e.usd},vp=(e,t,n)=>{let r=t.get(e.at)??n;return e.lamports/V+(r?e.usd/r:0)};function yp(e,t,n,r,i,a){let o=0,s=0,c=0,l=0,u=0,d=0;for(let e of t)e.side===1?(o+=e.coins,c+=_p(e,i,a),l+=vp(e,i,a)):(s+=e.coins,u+=_p(e,i,a),d+=vp(e,i,a));let f=Math.min(s,o),p=Math.max(0,Math.min(n,o-f)),m=o>0?(f+p)/o:0,h=s>0?f/s:0,g=c*m,_=l*m,v=u*h,y=d*h,b=p*(r??0),x=a?b/a:0,S=v+b-g,C=y+x-_;return{mint:e,trades:t,bought:o,sold:s,held:n,paidUsd:g,paidSol:_,backUsd:v,backSol:y,nowUsd:b,nowSol:x,pnlUsd:S,pnlSol:C,pct:g>=.01&&!Im.has(e)?S/g*100:null,avgUsd:o>0?c/o:0,avgSol:o>0?l/o:0}}function bp(e){let t=e.filter(e=>e.pct!==null),n=t.reduce((e,t)=>e+t.pnlUsd,0),r=t.reduce((e,t)=>e+t.pnlSol,0),i=t.reduce((e,t)=>e+t.paidUsd,0);return{pnlUsd:n,pnlSol:r,paidUsd:i,pct:i>=.01?n/i*100:null}}var xp=(e,t,n)=>Promise.race([e.catch(()=>n),new Promise(e=>setTimeout(()=>e(n),t))]),Sp=0;function Cp(e,t){let n=document.querySelector(`.loader, .hackloader`);if(!n)return;let r=document.getElementById(`loadTerm`);r||(r=document.createElement(`div`),r.id=`loadTerm`,r.className=`loadterm`,n.append(r));let i=t?Array.from(r.children).find(e=>e.dataset.key===t):null;if(i){i.firstChild.textContent=e;return}clearInterval(Sp),r.querySelectorAll(`.typing`).forEach(e=>{e.classList.remove(`typing`),e.firstChild.textContent=e.dataset.full}),r.querySelector(`.cur`)?.remove();let a=document.createElement(`div`);for(a.className=`tl`,t&&(a.dataset.key=t),a.append(document.createTextNode(``),Object.assign(document.createElement(`i`),{className:`cur`})),r.append(a);r.children.length>6;)r.firstElementChild.remove();if(!e.startsWith(`$`)){a.firstChild.textContent=e;return}a.dataset.full=e,a.classList.add(`typing`);let o=0;Sp=window.setInterval(()=>{o+=1,a.firstChild.textContent=e.slice(0,o),o>=e.length&&(clearInterval(Sp),a.classList.remove(`typing`))},28)}var wp=null,Tp=(e,t)=>`[${`#`.repeat(Math.round(e/t*12)).padEnd(12,`.`)}]`;async function Ep(e,t){let n=0;t?.(`[*] ${e.length} wallet${e.length===1?``:`s`} to read`);let r=ou(e.map(e=>e.address));return r.catch(()=>{}),xh(e,6,async(i,a)=>{let o=await xp(gp(i.address,r.then(e=>e[a])),45e3,null);return n++,t?.(`[+] read ${n}/${e.length} ${Tp(n,e.length)}`,`read`),o})}var Dp=async(e,t)=>kp(e,await Ep(e,t),t),Op=async e=>{let t=e.map(e=>e.address);return await xp(Ju(t),2e4,null)??await Uu(t)};async function kp(e,t,n,r){let i=t.filter(e=>e===null).length,a=e.map((e,n)=>({w:e,trades:t[n]??[]})).filter(e=>e.trades.length);n?.(`[*] checking what's still held`);let o=r??(a.length?await Op(e):null),s=await Promise.all(a.map(async e=>{let t=o?.find(t=>t.address===e.w.address);return t?Zu(t):[]})),c=[...new Set(s.flatMap((e,t)=>e.filter(e=>a[t].trades.some(t=>t.mint===e.mint)).map(e=>e.mint)))];n?.(`[*] pulling prices + SOL history`);let l=a.flatMap(e=>e.trades.map(e=>e.at)),[u,d,f]=await Promise.all([xp(mf(),15e3,null),W&&c.length?xp(_f(c),15e3,new Map):Promise.resolve(new Map),xp(di(l),12e3,new Map)]),p=l.length>0&&f.size<l.length/2;return n?.(`[ok] P&L ready`),u&&yg(u),{rows:a.map(({w:e,trades:t},n)=>{let r=new Map;for(let e of t)r.set(e.mint,[...r.get(e.mint)??[],e]);let i=[...r].map(([e,t])=>{let r=s[n].find(t=>t.mint===e),i=d.get(e)??(r&&r.usd!==null&&r.amount>0?r.usd/r.amount:null);return yp(e,t,r?.amount??0,i,f,u)});return i.sort((e,t)=>Math.abs(t.pnlUsd)-Math.abs(e.pnlUsd)),{wallet:e,trades:t,coins:i,total:bp(i),held:s[n]}}),unread:i,oldPrices:p,solAt:f,solNow:u}}var Ap=`pct`,jp=[`pct`,`sol`,`usd`],Mp=(e,t)=>`${e>0?`+`:e<0?`−`:``}${t}`,Np=e=>{let t=Math.abs(e);return`${e>0?`▲`:e<0?`▼`:``} ${t>=100?Math.round(t).toLocaleString(`en-US`):t.toFixed(1)}%`.trim()},Pp=e=>Mp(e,`${H(Math.abs(e)*V)} SOL`),Fp=e=>Mp(e,gg(Math.abs(e)));function Ip(e,t){if(e.pct===null)return{text:`no buy price`,dir:``};let n=t===`pct`?e.pct:t===`sol`?e.pnlSol:e.pnlUsd,r=Math.abs(e.pct)<.05?``:n>0?`up`:n<0?`down`:``;return{text:t===`pct`?Np(e.pct):t===`sol`?Pp(e.pnlSol):Fp(e.pnlUsd),dir:r}}function Lp(e,t=jp){let n=t.includes(Ap)?Ap:t[0];document.querySelectorAll(`[data-pnl]`).forEach(t=>{let r=e.get(t.dataset.pnl);if(!r)return;let{text:i,dir:a}=Ip(r,n);t.textContent=i,t.classList.toggle(`up`,a===`up`),t.classList.toggle(`down`,a===`down`),t.classList.toggle(`none`,r.pct===null),t.closest(`li`)?.classList.toggle(`pnlup`,a===`up`),t.closest(`li`)?.classList.toggle(`pnldown`,a===`down`)}),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.mode===n))}var Rp=e=>e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`;async function zp(){G(`pnl`,zp),Ap=`pct`;let e=await rp();if(!e)return X();let[t,n]=await Promise.all([Promise.all(e.map(e=>hp(e.address))),Uu(e.map(e=>e.address))]),r=t.every(Boolean);Y(`Reading your trades on the blockchain…`),r&&Cp(`[*] using saved trades`);let i=r?await kp(e,t.map(e=>e.trades.map(pp)),Cp,n):await Dp(e,Cp),a=Symbol(`pnl`);if(Bp=a,wp=i,Vp(i,r,!1),!r)return;let o=n?Op(e):Promise.resolve(null),s=await Ep(e,(e,t)=>{let n=t===`read`&&e.match(/\d+\/\d+/)?.[0],r=document.getElementById(`pnlSync`);n&&r&&Bp===a&&(r.textContent=`SYNCING ${n}`)}),c=await o;if(Bp!==a||!document.getElementById(`pnlTotal`))return;let l=e=>e.map(e=>e?`${e.length}:${e[0]?.sig??``}`:`?`).join(`,`),u=l(s)!==l(t.map(e=>e.trades.map(pp)))||!!n&&!!c&&Xm(c)!==Xm(n),d=document.getElementById(`pnlSync`);if(!u){d&&(d.textContent=`UP TO DATE`);return}let f=await kp(e,s,void 0,c);Bp===a&&document.getElementById(`pnlTotal`)&&(wp=f,Vp(f,!1,!0))}var Bp=null;function Vp({rows:e,unread:t,oldPrices:n},r,i){let a=bp(e.flatMap(e=>e.coins)),o=new Map([[`total`,a]]);for(let t of e)o.set(t.wallet.address,t.total);let s=e.find(e=>e.wallet.index===0),c=e.filter(e=>e.wallet.index!==0),l=e=>{let t=new Set(e.trades.map(e=>e.mint)).size;return`${e.trades.length} trade${e.trades.length===1?``:`s`} · ${t} coin${t===1?``:`s`}`};K(`
    <h1>Wallet P&amp;L <span id="pnlSync" class="live">${r?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${a.pct===null?``:`on ${gg(a.paidUsd)} put in · tap to switch % / $`}</div></div>
    ${s?`<div class="card openwallet pnl" data-address="${s.wallet.address}">
      <div class="label">Main wallet · <span class="pv" data-pnl="${s.wallet.address}"></span> <span class="open">OPEN ›</span></div>
      <div class="address">${s.wallet.address}</div>
      <p class="muted">${l(s)}</p>
    </div>`:``}
    ${c.length?`<h2>Side wallets (${c.length})</h2><ul class="list pnl">${c.map(e=>`<li class="openwallet" data-address="${e.wallet.address}"><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}${Tf(e.wallet.address)}<br><small>${l(e)}</small></code><b class="pv big" data-pnl="${e.wallet.address}"></b></li>`).join(``)}</ul>`:``}
    ${e.length?`<p class="muted">Only wallets that have bought or sold are listed. Tap a wallet to see its trades.</p>`:`<p class="muted">None of your wallets has bought or sold a coin yet.</p>`}
    ${e.length?`<button id="finished" class="primary">Finished trades · share cards</button><button id="allTx" class="primary">Show all transactions</button>`:``}
    ${t?`<p class="warning">${t} wallet${t===1?`'s`:`s'`} history couldn't be read right now. Try again in a minute.</p>`:``}
    ${n?`<p class="muted">SOL's past prices didn't load, so dollars use today's SOL price for now.</p>`:``}
    <button id="home">Back to my wallets</button>`,i);let u=[`pct`,`usd`];Lp(o,u),J(`home`,X),e.length&&(J(`allTx`,()=>Yp().catch($)),J(`finished`,()=>rm().catch($))),J(`pnlTotal`,()=>{a.pct!==null&&(P(),Ap=Ap===`usd`?`pct`:`usd`,Lp(o,u))}),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.find(e=>e.wallet.address===t.dataset.address);P(),Xp(n.wallet).catch($)}))}var Hp=e=>e?new Date(e*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}):``,Up=`coinNames`;async function Wp(e,t){let n=new Map;for(let e of t)(e.name||e.symbol)&&n.set(e.mint,{label:Pm(e),short:e.symbol||e.name||`?`,logo:e.logo});let r={};try{r=JSON.parse(await N.get(Up)||`{}`)}catch{r={}}for(let t of e)!n.has(t)&&r[t]&&n.set(t,r[t]);let i=[...new Set(e)].filter(e=>!n.has(e)),a=!1;for(let[e,t]of n)(!r[e]||r[e].label!==t.label||r[e].logo!==t.logo)&&(r[e]=t,a=!0);if(i.length){let e=await xp(lu(i),1e4,new Map);for(let[t,i]of e){let e={label:i.name?`${i.name}${i.symbol?` (${i.symbol})`:``}`:i.symbol??Tf(t),short:i.symbol||i.name||`?`,logo:i.logo};n.set(t,e),r[t]=e}e.size&&(a=!0)}return a&&N.set(Up,JSON.stringify(r)).catch(()=>{}),e=>n.get(e)??{label:Tf(e),short:`?`}}function Gp(e,t,n,r){let i=new Map(e.coins.map(e=>[e.mint,e]));for(let a of e.trades){let e=i.get(a.mint);if(a.side!==-1)continue;let o=_p(a,t,n),s=vp(a,t,n),c=e.avgUsd*a.coins,l=e.bought>0&&c>=.01&&!Im.has(a.mint);r.set(a.sig,{pct:l?(o-c)/c*100:null,pnlUsd:o-c,pnlSol:s-e.avgSol*a.coins})}}function Kp(e,t,n,r,i){return`<ul class="list trades pnl">${e.map(e=>{let a=t(e.mint),o={sol:`${H(vp(e,n,r)*V)} SOL`,usd:gg(_p(e,n,r))};return`<li data-sig="${e.sig}" class="${e.side===1?`buy`:`sell`}"><span class="tag">${e.side===1?`BUY`:`SELL`}</span><div class="grow"><b>${Q(a.label)}</b><small>${i?`${i(e)} · `:``}${Hp(e.at)} · ${Mm(e.coins)} coins</small></div><div class="right">${e.side===1?`<span class="pv spent" data-sol="${o.sol}" data-usd="${o.usd}">${o.sol}</span><small>paid</small>`:`<span class="pv" data-pnl="${e.sig}"></span><small class="got" data-sol="${o.sol}" data-usd="${o.usd}">got ${o.sol}</small>`}</div></li>`}).join(``)}</ul>`}function qp(){let e=Ap===`usd`;document.querySelectorAll(`.trades .spent`).forEach(t=>t.textContent=e?t.dataset.usd:t.dataset.sol),document.querySelectorAll(`.trades .got`).forEach(t=>t.textContent=`got ${e?t.dataset.usd:t.dataset.sol}`)}function Jp(e,t){let n=()=>{P(),Ap=jp[(jp.indexOf(Ap)+1)%jp.length],e()};document.querySelectorAll(`.pnltabs button`).forEach(t=>t.addEventListener(`click`,()=>{P(),Ap=t.dataset.mode,e()})),J(`pnlTotal`,n),document.querySelectorAll(`.pnl .right`).forEach(e=>e.addEventListener(`click`,e=>{e.stopPropagation(),n()})),document.querySelectorAll(`.trades li[data-sig]`).forEach(e=>e.addEventListener(`click`,()=>{t&&e.classList.contains(`sell`)?(P(),t(e.dataset.sig)):$t(Ql(e.dataset.sig))}))}async function Yp(){G(`pnlall`,Yp),Ap=`pct`;let e=wp;if(!e){let t=await rp();if(!t)return X();Y(`Gathering every wallet's trades…`),e=wp=await Dp(t,Cp)}let{rows:t,solAt:n,solNow:r}=e,i=t.flatMap(e=>e.trades.map(t=>({t,w:e.wallet}))).sort((e,t)=>t.t.at-e.t.at),a=await Wp(i.map(e=>e.t.mint),t.flatMap(e=>e.held)),o=bp(t.flatMap(e=>e.coins)),s=new Map([[`total`,o]]);for(let e of t)Gp(e,n,r,s);let c=new Map(i.map(e=>[e.t.sig,e.w])),l=e=>{let t=c.get(e.sig);return t.index===0?`Main`:t.name?`${Q(t.name)} #${t.index}`:`#${t.index}`},u=i.filter(e=>e.t.side===1).length,d=i.length-u;K(`
    <h1>All transactions</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u} buy${u===1?``:`s`} · ${d} sell${d===1?``:`s`} · ${t.length} wallet${t.length===1?``:`s`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>History (${i.length} trade${i.length===1?``:`s`})</h2>
    ${Kp(i.map(e=>e.t),a,n,r,l)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a sell for its share card, a buy to open it on Solscan.</p>
    <button id="back">Back to Wallet P&amp;L</button>`);let f=()=>{Lp(s),qp()};f(),Jp(f,e=>{let i=c.get(e);nm(t.find(e=>e.wallet.address===i.address),e,s,a,n,r,()=>Yp())}),J(`back`,()=>zp().catch($))}async function Xp(e){G(`pnl:${e.address}`,()=>Xp(e)),Ap=`pct`;let t=wp?.rows.some(t=>t.wallet.address===e.address)?wp:null;t||=(Y(`Pulling this wallet's trades from the blockchain…`),await Dp([e],Cp));let{solAt:n,solNow:r}=t,i=t.rows.find(t=>t.wallet.address===e.address);if(!i){K(`<h1>${Rp(e)}</h1><p class="muted">No trades found for this wallet.</p><button id="back">Back to Wallet P&amp;L</button>`),J(`back`,()=>zp().catch($));return}let a=await Wp(i.coins.map(e=>e.mint),t.rows.flatMap(e=>e.held)),o=new Map(i.coins.map(e=>[e.mint,e])),s=new Map([[`total`,i.total]]);for(let e of i.coins)s.set(e.mint,e);Gp(i,n,r,s);let c=e=>[e.bought?`bought ${Mm(e.bought)}`:``,e.sold?`sold ${Mm(e.sold)}`:``,e.held?`holding ${Mm(e.held)}`:``].filter(Boolean).join(` · `),l=(e,t)=>{let n=e=>`${H(e*V)} SOL`,r=e.bought?`${n(e.avgSol*e.bought)} › ${Mm(e.bought)} ${t}`:`${Mm(e.sold)} ${t}`,i=[e.sold?`${n(e.backSol)} sold`:``,e.nowSol>0?`${n(e.nowSol)} held`:``].filter(Boolean).join(` + `);return i?`${r} › ${i}`:r},u=i.total;K(`
    <h1>${Rp(e)}</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss · all trades</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u.pct===null?`No buy prices found yet`:`on ${gg(u.paidUsd)} put in`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>Coins (${i.coins.length})</h2>
    <ul class="list coins pnl">${i.coins.map(e=>{let t=a(e.mint);return`<li data-mint="${e.mint}">${Fn(t.short,t.logo)}<div class="grow"><b>${Q(t.label)}</b><small class="cl" data-line="${Q(c(e))}" data-flow="${Q(l(e,t.short))}">${c(e)}</small></div>
          <div class="right"><span class="pv" data-pnl="${e.mint}"></span><small class="tv" data-paid="${e.mint}"></small></div></li>`}).join(``)}</ul>
    <h2>History (${i.trades.length} trade${i.trades.length===1?``:`s`})</h2>
    ${Kp(i.trades,a,n,r)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a sell for its share card, a buy to open it on Solscan. Dollars use SOL's price when each trade happened.</p>
    <button id="solscan">View wallet on Solscan</button>
    <button id="back">Back to Wallet P&amp;L</button>`),In();let d=()=>{Lp(s);let e=Ap===`usd`,t=Ap===`sol`;document.querySelectorAll(`.coins .cl`).forEach(e=>e.textContent=t?e.dataset.flow:e.dataset.line),qp(),document.querySelectorAll(`.coins [data-paid]`).forEach(n=>{let r=o.get(n.dataset.paid);n.textContent=r.pct===null?r.bought?`all sent away`:`no buy found`:t?``:`paid ${e?gg(r.paidUsd):`${H(r.paidSol*V)} SOL`}`})};d(),Jp(d,t=>nm(i,t,s,a,n,r,()=>Xp(e))),J(`solscan`,()=>$t(Zl(e.address))),J(`back`,()=>zp().catch($))}var Zp=`usd`,Qp=`cardShowMe`,$p=()=>{try{return localStorage.getItem(Qp)!==`0`}catch{return!0}},em=()=>{let e=M?.initDataUnsafe?.user;return e?.first_name?{name:e.first_name,photo:e.photo_url}:void 0};function tm(e,t){let n=new Map;for(let t of e)for(let e of t.coins){if(e.pct===null)continue;let t=n.get(e.mint)??{list:[],trades:[]};t.list.push(e),t.trades.push(...e.trades),n.set(e.mint,t)}let r=Math.floor(Date.now()/1e3);return[...n].map(([e,{list:n,trades:i}])=>{let a=e=>n.reduce((t,n)=>t+e(n),0),o=a(e=>e.paidUsd),s=t(e),c=n.every(e=>e.held<=0),l=i.filter(e=>e.side===1&&e.at),u=i.filter(e=>e.at).map(e=>e.at);return{key:e,symbol:s.short,name:s.label.replace(/\s*\([^)]*\)$/,``)||s.label,logo:s.logo,pct:o>=.01?a(e=>e.pnlUsd)/o*100:0,usd:{paid:o,got:a(e=>e.backUsd+e.nowUsd),pnl:a(e=>e.pnlUsd)},sol:{paid:a(e=>e.paidSol),got:a(e=>e.backSol+e.nowSol),pnl:a(e=>e.pnlSol)},firstAt:l.length?Math.min(...l.map(e=>e.at)):Math.min(...u,r),lastAt:c&&Math.max(...u,0)||r,wallets:n.length,finished:c}})}function nm(e,t,n,r,i,a,o){let s=e.trades.find(e=>e.sig===t),c=n.get(t),l=e.coins.find(e=>e.mint===s.mint);if(!c||c.pct===null||!l)return $t(Ql(t));let u=r(s.mint),d=e.trades.filter(e=>e.mint===s.mint&&e.side===1&&e.at&&e.at<=s.at).map(e=>e.at),f=_p(s,i,a),p=vp(s,i,a);im({key:t,symbol:u.short,name:u.label.replace(/\s*\([^)]*\)$/,``)||u.label,logo:u.logo,pct:c.pct,usd:{paid:l.avgUsd*s.coins,got:f,pnl:c.pnlUsd},sol:{paid:l.avgSol*s.coins,got:p,pnl:c.pnlSol},firstAt:d.length?Math.min(...d):s.at,lastAt:s.at,wallets:1,finished:!0,sig:t},o).catch($)}async function rm(){G(`finished`,rm),Ap=`pct`;let e=wp;if(!e){let t=await rp();if(!t)return X();Y(`Gathering every wallet's trades…`),e=wp=await Dp(t,Cp)}let{rows:t}=e,n=tm(t,await Wp(t.flatMap(e=>e.coins.map(e=>e.mint)),t.flatMap(e=>e.held))).sort((e,t)=>t.lastAt-e.lastAt),r=n.filter(e=>e.finished),i=n.filter(e=>!e.finished),a=new Map(n.map(e=>[e.key,{pct:e.pct,pnlUsd:e.usd.pnl,pnlSol:e.sol.pnl}])),o=r.reduce((e,t)=>e+t.usd.paid,0),s=r.reduce((e,t)=>e+t.usd.pnl,0);a.set(`total`,{pct:o>=.01?s/o*100:null,pnlUsd:s,pnlSol:r.reduce((e,t)=>e+t.sol.pnl,0)});let c=e=>`<li data-mint="${e.key}">${Fn(e.symbol,e.logo)}<div class="grow"><b>${Q(e.name)}</b><small class="paid" data-usd="${gg(e.usd.paid)}" data-sol="${H(e.sol.paid*V)} SOL">put in ${gg(e.usd.paid)}</small><small>${e.wallets} wallet${e.wallets===1?``:`s`}${e.finished?` · ${Hp(e.lastAt)}`:``}</small></div><div class="right"><span class="pv" data-pnl="${e.key}"></span><small class="share">SHARE ›</small></div></li>`;K(`
    <h1>Finished trades</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss on coins sold out</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${r.length?`${r.length} coin${r.length===1?``:`s`} · on ${gg(o)} put in`:`Nothing sold out yet`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    ${r.length?`<h2>Sold out (${r.length})</h2><ul class="list coins pnl">${r.map(c).join(``)}</ul>`:`<p class="muted">No coin is fully sold yet.</p>`}
    ${i.length?`<h2>Still holding (${i.length})</h2><ul class="list coins pnl">${i.map(c).join(``)}</ul>`:``}
    <p class="muted">Each coin is added up across all your wallets. Tap one for its share card. A single sell has its own card too: tap it in a wallet's history.</p>
    <button id="back">Back to Wallet P&amp;L</button>`),In();let l=()=>{Lp(a);let e=Ap===`sol`;document.querySelectorAll(`.coins .paid`).forEach(t=>t.textContent=`put in ${e?t.dataset.sol:t.dataset.usd}`)};l(),Jp(l),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{P(),im(n.find(t=>t.key===e.dataset.mint),()=>rm()).catch($)})),J(`back`,()=>zp().catch($))}async function im(e,t){G(`card:${e.key}`,()=>im(e,t));let n=em();K(`
    <h1>Share card</h1>
    <div class="sharecard" id="cardBox"><img id="cardImg" alt="Share card for ${Q(e.symbol)}"></div>
    <div class="pnltabs"><button data-unit="usd">$</button><button data-unit="sol">SOL</button></div>
    ${n?`<label class="cardme"><input type="checkbox" id="cardMe"> Show my Telegram name${n.photo?` and photo`:``}</label>`:``}
    <button id="share" class="primary">Share</button>
    <p class="muted" id="shareNote">No wallet addresses or transaction links are on the card.</p>
    ${e.sig?`<button id="solscan">View this sell on Solscan</button>`:``}
    <button id="back">Back</button>`);let r=document.createElement(`canvas`),i=q(`cardImg`),a=null,o=Promise.resolve(),s=()=>o=o.then(async()=>{let t=e[Zp],o={symbol:e.symbol,name:e.name,logo:e.logo,pct:e.pct,paid:t.paid,got:t.got,pnl:t.pnl,unit:Zp,firstAt:e.firstAt,lastAt:e.lastAt,wallets:e.wallets,finished:e.finished,user:n&&$p()?n:void 0};if(await ri(r,o,`oni`,Rn),a=null,document.body.contains(i)){try{i.src=r.toDataURL(`image/png`)}catch{await ri(r,{...o,logo:void 0,user:o.user&&{name:o.user.name}},`oni`,Rn),i.src=r.toDataURL(`image/png`)}document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.unit===Zp))}});s().catch($),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.addEventListener(`click`,()=>{P(),Zp=e.dataset.unit,s().catch($)}));let c=document.getElementById(`cardMe`);c&&(c.checked=$p(),c.addEventListener(`change`,()=>{try{localStorage.setItem(Qp,c.checked?`1`:`0`)}catch{}s().catch($)})),J(`share`,async()=>{P(),await o,a??=await ii(r,`${e.symbol.replace(/[^\w-]/g,``)||`trade`}-pnl.png`);let t=q(`shareNote`);if(a&&navigator.canShare?.({files:[a]}))try{await navigator.share({files:[a]});return}catch(e){if(e instanceof Error&&e.name===`AbortError`)return}t.textContent=`Press and hold the card, then tap Save to Photos or Share.`,t.classList.add(`warning`),q(`cardBox`).classList.add(`hint`)}),e.sig&&J(`solscan`,()=>$t(Ql(e.sig))),J(`back`,()=>Promise.resolve(t()).catch($))}var am=e=>(e/V).toFixed(4);function om(e){let t=e.index===0?`main wallet`:e.name?`${e.name} (#${e.index})`:`side wallet #${e.index}`;Wf(`Export ${Q(t)}`,n=>{let r=Qf(n,e.index+1)[e.index],i=Pd(r);K(`
      <h1>Private key: ${Q(t)}</h1>
      <p class="warning">Anyone with this key controls this wallet. Only paste it into your own wallet app (Phantom: Add / Connect Wallet → Import Private Key).</p>
      <div class="card"><div class="address" id="key"></div></div>
      <button id="copyKey" class="primary">Copy key</button>
      <button id="done">Done</button>`),q(`key`).textContent=i,J(`copyKey`,()=>kf(i,q(`copyKey`))),J(`done`,X)})}var sm=2e6,cm=25e5,lm=1e6;function um(e,t,n){return e.map((e,r)=>{let i=t[r],a=i-sm-cm,o=Math.floor(a*n/100);return a<lm?{wallet:e,balance:i,action:i>5e3?`return`:`skip`,lamports:i-zc}:o<lm?{wallet:e,balance:i,action:`skip`,lamports:0}:{wallet:e,balance:i,action:`buy`,lamports:o}}).filter(e=>e.balance>0)}async function dm(e,t){if(G(`buy:${e}`,()=>dm(e,t)),!W)return K(`
      <h1>Open this from the bot</h1>
      <p>To buy, send <b>buy &lt;token address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);let n=await rp();if(!n)return X();let[r,...i]=n;Y(`Checking your wallet balances…`);let[[,...a],o]=await Promise.all([op(n.map(e=>e.address)),cl(e).then(t=>t??_a(W,e))]),s=um(i,a,t),c=s.filter(e=>e.action===`buy`),l=c.reduce((e,t)=>e+t.lamports,0),u=e=>e.action===`buy`?`buys with <b>${H(e.lamports)} SOL</b>`:e.action===`return`?`too little to buy, sends ${H(e.lamports)} SOL back to main`:t<100?`${t}% is too little to buy, left as is`:`too little to do anything, left as is`;K(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>${t===100?`Spending all SOL in each funded side wallet`:`Spending ${t}% of each funded side wallet`}</h2>
    ${s.length?`<ul class="list">${s.map(e=>`<li><span>#${e.wallet.index}</span><code>${H(e.balance)} SOL<br><small>${u(e)}</small></code></li>`).join(``)}</ul>`:`<p class="warning">None of your side wallets has SOL. Send SOL to the side wallets you want to buy with, then try again.</p>`}
    ${c.length?`<p><b>Total: ${H(l)} SOL across ${c.length} wallet${c.length===1?``:`s`}.</b></p>
           <p class="muted">Each wallet keeps ${H(sm)} SOL so it can pay the fee to sell later. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again). Prices can move while the buys go through one by one.</p>
           <button id="go" class="primary">Enter PIN and buy</button>`:``}
    <button id="cancel">Cancel</button>`),q(`mint`).textContent=e,J(`cancel`,X),c.length&&J(`go`,()=>Wf(`Enter your PIN to buy`,t=>jm(t,e,r,s)))}var fm=45e5,pm=1e7,mm=10;function hm(e,t,n,r){let i=n.map((e,t)=>t);if(r&&n.length===1){let e=t.findIndex(e=>e>=n[0]+fm);i=[e>=0?e:0]}return i.map((r,i)=>({wallet:e[r],balance:t[r],share:n[i],send:Math.max(0,n[i]+fm-t[r])}))}function gm(e){let t=e.filter(e=>e.send>0);return t.reduce((e,t)=>e+t.send,0)+Math.ceil(t.length/mm)*zc}function _m(e,t){return Array.from({length:t},()=>Math.floor(e/t))}function vm(e,t,n,r,i=!0){let a=e=>({rows:[],mainCost:0,problem:e}),o=e=>n-e>=890880||n===e;if(!(r.total>0))return a(`The amount to spend is missing.`);let s;if(r.split){if(r.split.length>e.length)return a(`You asked for ${r.split.length} wallets but have ${e.length} side wallets.`);let n=r.split.reduce((e,t)=>e+t,0);s=hm(e,t,r.split.map(e=>Math.floor(r.total*e/n)),!1)}else if(r.count){if(r.count>e.length)return a(`You asked for ${r.count} wallets but have ${e.length} side wallets.`);s=hm(e,t,_m(r.total,r.count),!0)}else{let n=Math.max(1,Math.min(e.length,Math.floor(r.total/pm)));for(s=hm(e,t,_m(r.total,n),!1);n>1&&!o(gm(s));)n--,s=hm(e,t,_m(r.total,n),!1)}let c=gm(s);if(s.some(e=>e.share<lm))return{rows:s,mainCost:c,problem:`That's less than ${H(lm)} SOL per wallet. Use a bigger amount or fewer wallets.`};if(!o(c)){if(!i)return{rows:s,mainCost:c,problem:`too much`};let o=r.split?1:r.count??Math.max(1,Math.min(e.length,Math.floor(r.total/pm))),l=[];for(let i=o;i>=1;i--){let a=r.split?r:{...r,count:i},o=0,s=r.total;for(;s-o>1e3;){let r=Math.floor((o+s)/2);vm(e,t,n,{...a,total:r},!1).problem===`too much`?s=r:o=r}let c=vm(e,t,n,{...a,total:o},!1);o>0&&!c.problem&&l.push({plan:c,spend:o})}let u=Math.max(0,...l.map(e=>e.spend)),d=l.find(e=>e.spend>=u*.9);if(d){let e=d.plan.rows.length;return{...d.plan,adjusted:`The main wallet only has ${H(n)} SOL, so this spends ${H(d.spend)} SOL${e<s.length?` across ${e} wallet${e===1?``:`s`}`:``} instead of ${H(r.total)} SOL.`}}return a(`The main wallet has ${H(n)} SOL, which isn't enough for even one buy. A side wallet needs about ${H(55e5+Bc)} SOL from main for the smallest buy, fees, and the ${H(Bc)} SOL Solana makes a wallet keep.`)}return{rows:s,mainCost:c,problem:null}}async function ym(e,t){if(G(`fundedBuy:${e}`,()=>ym(e,t)),!W)return dm(e,100);let n=await rp();if(!n)return X();let[r,...i]=n;Y(`Checking your wallet balances…`);let[a,o]=await Promise.all([op(n.map(e=>e.address)),cl(e).then(t=>t??_a(W,e))]),[s,...c]=a,l=vm(i,c,s,t),u=l.rows.length||t.split?.length||t.count||0,d=l.rows.length?l.rows.reduce((e,t)=>e+t.share,0):t.total,f=t.split?`split ${t.split.join(`/`)} across ${u} side wallets`:u?`across ${u} side wallet${u===1?``:`s`}`:`split evenly across as many side wallets as possible`;K(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>Spending ${H(d)} SOL, ${f}</h2>
    ${l.adjusted&&!l.problem?`<p class="note">${Q(l.adjusted)}</p>`:``}
    ${l.rows.length?`<ul class="list">${l.rows.map(e=>`<li><span>#${e.wallet.index}</span><code>buys with <b>${H(e.share)} SOL</b><br><small>${e.send>0?`gets ${H(e.send)} SOL from main first`:`already has ${H(e.balance)} SOL, nothing sent`}</small></code></li>`).join(``)}</ul>`:``}
    ${l.problem?`<p class="warning">${Q(l.problem)}</p>`:`<p><b>From main: ${H(l.mainCost)} SOL</b> (main has ${H(s)} SOL).</p>
           <p class="muted">Each wallet gets ${H(fm)} SOL on top of its buy: ${H(sm)} SOL stays in it so it can pay the fee to sell later, and the rest covers the buy's fees and token deposit. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again).</p>
           <button id="go" class="primary">${l.adjusted?`Buy with ${H(d)} SOL instead`:`Enter PIN, fund and buy`}</button>`}
    <button id="cancel">Cancel</button>`),q(`mint`).textContent=e,J(`cancel`,X),!l.problem&&J(`go`,()=>bm(e,r,l))}function bm(e,t,n){let r=n.rows.map(e=>({wallet:e.wallet,balance:e.balance,action:`buy`,lamports:e.share})),i=n.rows.filter(e=>e.send>0),a=async(e,t)=>{if(!i.length)return t(`The side wallets already had enough SOL.`);let n=[];for(let e=0;e<i.length;e+=mm)n.push(i.slice(e,e+mm));let r=await Hl(),a=await Promise.allSettled(n.map(async t=>{let n=await Kl(zl(e[0],t.map(e=>({to:e.wallet.address,lamports:e.send})),r));return{signature:n,outcome:await Yl(n)}})),o=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,s=a.find(e=>e.status===`rejected`||e.value.outcome!==`confirmed`);if(s)throw s.status===`rejected`?s.reason:(t(`<span class="error">✗ Sending SOL from main ${s.value.outcome===`failed`?`failed`:`is taking too long`}</span> · ${o(s.value.signature)}`),new Am);let c=a.map(e=>o(e.value.signature));t(`✓ Sent SOL from main to ${i.length} of ${i.length} side wallets · ${c.join(` `)}`)};Wf(`Enter your PIN to fund and buy`,n=>jm(n,e,t,r,a))}var xm=1e6;async function Sm(e,t,n){G(`split`,()=>Sm(e,t,n));let r=await rp();if(!r)return X();let[i,...a]=r,o=e=>{K(`
      <h1>Split SOL</h1>
      <p class="warning">${e}</p>
      <button id="home" class="primary">Back to my wallets</button>`),J(`home`,X)};if(!a.length)return o(`You don't have any side wallets yet. Add some on the wallets screen first.`);let s=n?.length??t??a.length;if(s>a.length)return o(`You asked for ${s} wallets, but you have ${a.length} side wallet${a.length===1?``:`s`}. Add more on the wallets screen, or pick fewer.`);let c=a.slice(0,s);Y(`Checking your wallets…`);let l=await ml([i,...c].map(e=>e.address)),u=l[0],d=Math.ceil(s/mm)*zc,f=e===`all`?u-d-xm:e;if(f<=0)return o(`Main has ${H(u)} SOL, which isn't enough to split.`);let p=u-f-d;if(p<0||p>0&&p<890880)return o(`Main has ${H(u)} SOL. Splitting ${H(f)} SOL plus fees would leave ${p<0?`less than nothing`:`${H(p)} SOL, below the ${H(Bc)} SOL Solana makes a wallet keep`}. The most you can split is ${H(Math.max(0,u-d-Bc))} SOL, or use "split all sol".`);let m=n??c.map(()=>1),h=m.reduce((e,t)=>e+t,0),g=c.map((e,t)=>({wallet:e,balance:l[t+1],send:Math.floor(f*m[t]/h)}));g[0].send+=f-g.reduce((e,t)=>e+t.send,0);let _=g.filter(e=>e.send<=0||e.balance+e.send<890880);if(_.length)return o(`${_.map(e=>`#${e.wallet.index}`).join(`, `)} would get too little: an empty wallet has to receive at least ${H(Bc)} SOL. Split more SOL, or across fewer wallets.`);K(`
    <h1>Split ${H(f)} SOL</h1>
    <p>From main (${H(u)} SOL) to ${s} wallet${s===1?``:`s`}${n?`, split ${n.join(`/`)}`:`, evenly`}.</p>
    <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}gets <b>${H(e.send)} SOL</b><br><small>has ${H(e.balance)} now</small></code></li>`).join(``)}</ul>
    <p class="muted">Main keeps ${H(p)} SOL. Network fees: ${d<1e5?`less than 0.0001`:H(d)} SOL.</p>
    <button id="go" class="primary">Enter PIN and split</button>
    <button id="cancel">Cancel</button>`),J(`cancel`,X),J(`go`,()=>Wf(`Enter your PIN to split`,async e=>{let[t]=Qf(e,1);K(`
        <h1>Splitting…</h1>
    ${zt()}
        <p class="muted">Keep this screen open until it finishes.</p>
        <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),yf();let n=0,r=[];for(let e=0;e<g.length;e+=mm)r.push(g.slice(e,e+mm));g.forEach(e=>q(`status-${e.wallet.index}`).textContent=`sending…`);let a=await Hl().catch(()=>null);await Promise.all(r.map(async e=>{let r;try{let i=await Kl(zl(t,e.map(e=>({to:e.wallet.address,lamports:e.send})),a??await Hl())),o=await Yl(i),s=`<a href="#" class="tx" data-sig="${i}">view</a>`;o===`confirmed`?(n+=e.length,r=`✓ sent {amount} SOL · ${s}`):r=`<span class="error">✗ ${o===`failed`?`failed`:`taking long`}</span> · ${s}`}catch(e){r=`<span class="error">✗ ${Q(Z(e))}</span>`}e.forEach(e=>q(`status-${e.wallet.index}`).innerHTML=r.replace(`{amount}`,H(e.send))),eg()})),Wu([i.address,...g.map(e=>e.wallet.address)]).catch(()=>{}),t.secret.fill(0),Zt(n?`success`:`error`),n&&await jn(`SPLIT`),q(`after`).innerHTML=`<p><b>Done: ${n} of ${g.length} wallets got their SOL.</b></p>
        <button id="home" class="primary">Back to my wallets</button>`,J(`home`,X)}))}async function Cm(e,t,n=!1){if(G(`buyAmount:${e}`,()=>Cm(e,t,n)),!W)return dm(e,100);let r=await rp();if(!r)return X();let[i,...a]=r;if(!a.length)return K(`
      <h1>No side wallets yet</h1>
      <p>Buys run from side wallets. Add some with "Change number of side wallets" on the home screen.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);Y(`Checking your wallet balances…`);let[o,s]=await Promise.all([op(r.map(e=>e.address)),fl(e)]),c=s.name??await _a(W,e).catch(()=>null)??Tf(e),[l,...u]=o,d=1e5,f=e=>Math.floor(e/d)*d,p=e=>u[e]-sm-cm,m=a.map((e,t)=>t).filter(e=>p(e)>=lm).sort((e,t)=>p(t)-p(e)),h=e=>m.slice(0,e).reduce((e,t)=>e+p(t),0),g=(e,t)=>m.slice(0,t).map(n=>({wallet:a[n],balance:u[n],action:`buy`,lamports:Math.min(p(n),Math.floor(e*p(n)/h(t)))})),_=e=>Math.ceil(lm*h(e)/p(m[e-1])/d)*d,v=n?m.map((e,t)=>f(h(t+1))):a.map((e,t)=>{let n=t+1,r=e=>vm(a,u,l,{total:e,count:n,split:null},!1).problem!==`too much`,i=0,o=l;for(;o-i>d;){let e=Math.floor((i+o)/2);r(e)?i=e:o=e}let s=f(i);return s>=lm*n?s:0}),y=v.length,b=Math.max(0,...v),x=n?h(m.length):l,S=e=>n?_(e):lm*e,C=e=>{if(n){if(!e)return y;for(let t=y;t>1;t--)if(e<=v[t-1]&&e>=_(t))return t;return 1}for(let t=Math.min(a.length,Math.max(1,Math.floor(e/pm)));t>1;t--)if(e<=v[t-1])return t;return 1},w=t&&t<=y?t:null,T=``,E=!n&&m.length>0;K(`
    <div class="coinhead">${Fn(c,s.logo)}<div><b>${Q(c)}</b><small>${Tf(e)}${e.endsWith(`pump`)?` · pump.fun`:``}</small></div></div>
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
    ${Lf(`dot`)}
    <button id="go" class="primary go"></button>
    <button id="cancel">Cancel</button>`),In(),Pn(q(`avail`),x,am,{ms:1100,final:am(x)}),J(`cancel`,X),E&&J(`useSide`,()=>Cm(e,null,!0));let ee=e=>Math.round((Number(e)||0)*V),te=()=>{let e=ee(T);return{total:e,count:Math.max(1,w??C(e)),max:w?v[w-1]:b}},D=e=>`${e} wallet${e===1?``:`s`}`,ne=(e=!1)=>{let{total:t,count:r,max:i}=te();q(`amt`).textContent=T||`0`,q(`count`).textContent=String(y?r:0),q(`each`).textContent=n?t?`spread by balance${w?``:` · auto`}`:w?`you picked this, most SOL first`:`auto: every wallet with SOL`:t?`${H(Math.floor(t/r))} SOL each${w?``:` · auto`}`:w?`you picked this`:`auto: as many as the amount allows`,q(`tickMid`).textContent=am(i/2).replace(/0+$/,``).replace(/\.$/,``),e||(q(`slider`).value=String(i?Math.min(1e3,Math.round(t/i*1e3)):0));let a=t>i,o=t>0&&!a&&t<S(r);q(`amt`).classList.toggle(`over`,a&&i>0),q(`amtNote`).textContent=i?a?`Max with ${D(r)} is ${H(i)} SOL`:o?`At least ${H(S(r))} SOL for ${D(r)}`:t?n?`from ${D(r)} · each keeps ${H(sm)} SOL for selling`:`split over ${D(r)} · each keeps ${H(fm)} SOL for fees`:`Type an amount or drag the slider`:n?`None of your side wallets has enough SOL to buy`:`Main needs at least ${H(55e5+Bc+zc)} SOL to buy`,E&&(q(`useSide`).hidden=i>0);let s=q(`go`);s.disabled=!t||a||o,s.textContent=t&&!a&&!o?`⚡ Snatch it · ${T} SOL`:`⚡ Snatch it`},re=e=>{T=e>0?am(e).replace(/0+$/,``).replace(/\.$/,``):``};Rf(e=>{if(e===`back`)T=T.slice(0,-1);else if(e===`dot`)T=T.includes(`.`)?T:(T||`0`)+`.`;else if(/\d/.test(e)){let[,t]=T.split(`.`);if(t!==void 0&&t.length>=4||T.replace(`.`,``).length>=9)return;T=T===`0`?e:T+e}ne()}),q(`slider`).addEventListener(`input`,()=>{let{max:e}=te();re(f(Number(q(`slider`).value)/1e3*e)),ne(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{P(),re(f(te().max*Number(e.dataset.f))),ne()}));let ie=e=>{y&&(P(),w=Math.min(y,Math.max(1,te().count+e)),ne())};J(`minus`,()=>ie(-1)),J(`plus`,()=>ie(1)),J(`go`,()=>{let{total:t,count:r}=te();if(n){let n=g(t,r);return Wf(`Enter your PIN to buy`,t=>jm(t,e,i,n))}let o=vm(a,u,l,{total:t,count:r,split:null},!1);if(o.problem)return q(`amtNote`).textContent=o.problem===`too much`?`Main can't cover that, try a little less`:o.problem,Zt(`error`);bm(e,i,o)}),ne()}var Z=e=>e instanceof Error?e.message:String(e),wm=8e6;async function Tm(e,t,n,r){let i;try{i=await pu(e,t,r)}catch(e){throw Error(`Couldn't double-check this trade before signing (${Z(e)}). Nothing was signed; try again in a moment.`)}if(i.failed)return;let a=e=>{throw Error(`Stopped for safety: ${e}. Nothing was signed. Tell Dustin if this keeps happening.`)};i.takenOver&&a(`this trade would hand control of your wallet or its coins to someone else`),i.solOut>n.sol&&a(`this trade would take ${H(i.solOut)} SOL from the wallet, more than the ${H(n.sol)} SOL it should cost at most`);for(let[e,t]of i.coinsOut)e===n.mint&&(n.coins===void 0||t<=n.coins)||a(e===n.mint?`this trade would send more of the coin than you chose to sell`:`this trade would send away a coin you didn't choose to trade`)}async function Em(e,t,n,r){return await Tm(e,t.address,n,r),_l(e,t)}var Dm=10,Om=e=>{let t=fu(e);return t.catch(()=>{}),t};async function km(e,t,n){let r=await ca(W,e,t,n);if(!r.transaction&&t-2e6>=lm&&(t-=2e6,r=await ca(W,e,t,n)),!r.transaction)throw Error(r.errorMessage??`Jupiter couldn't find a way to buy this token.`);return{order:r,lamports:t}}var Am=class extends Error{};async function jm(e,t,n,r,i){let a=r.filter(e=>e.action!==`skip`),o=Qf(e,Math.max(...a.map(e=>e.wallet.index))+1);K(`
    <h1>Buying…</h1>
    ${zt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${i?`<p id="funding">Sending SOL from main to the side wallets…</p>`:``}
    <ul class="list">${a.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),yf();let s=(e,t)=>q(`status-${e}`).innerHTML=t,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;if(i)try{await i(o,e=>q(`funding`).innerHTML=e)}catch(e){return e instanceof Am||(q(`funding`).innerHTML=`<span class="error">✗ Sending SOL from main failed: ${Q(Z(e))}</span>`),a.forEach(e=>s(e.wallet.index,`not bought`)),o.forEach(e=>e.secret.fill(0)),Zt(`error`),q(`after`).innerHTML=`<p><b>Nothing was bought.</b> Any SOL that did reach a side wallet stays there; "Send all side-wallet SOL to main" brings it back.</p>
        <button id="home" class="primary">Back to my wallets</button>`,eg(),J(`home`,X)}let l=0,u=null,d=!1;await xh(a,Dm,async e=>{let r=o[e.wallet.index];try{if(e.action===`buy`&&d){s(e.wallet.index,`skipped: same problem as above, nothing spent`);return}if(e.action===`buy`){s(e.wallet.index,`buying…`);let n=Wm(r.address,t).catch(()=>null),i=Om(r.address),a=null;if(!u)try{a=await km(t,e.lamports,r.address)}catch(e){u=Z(e)}let o=await n,d=a?null:await Lh(t);if(d){await Jh(d,r,e.lamports,t=>s(e.wallet.index,t),c)&&(l++,Km(t,r.address,o));return}if(!a){s(e.wallet.index,`buying through pump.fun…`);let n=0,a=await $h(e.wallet.index,s,u,(i,a)=>(n=Math.floor(e.lamports*a),wa(r.address,t,n,i)),r,e=>({sol:Math.ceil(n*(1+e/100))+wm}),i),d=await Yl(a);d===`confirmed`?(l++,Km(t,r.address,o),s(e.wallet.index,`✓ bought with ${H(n)} SOL via pump.fun · ${c(a,`view`)}`)):s(e.wallet.index,`<span class="error">✗ buy ${d===`failed`?`failed`:`is taking long`}</span> · ${c(a,`check`)}`);return}let{order:f,lamports:p}=a,m=await ua(W,await Em(da(f.transaction),r,{sol:p+wm},i),f.requestId);if(m.status!==`Success`)throw Error(m.error??`The buy didn't go through (code ${m.code}).`);l++,Km(t,r.address,o),s(e.wallet.index,`✓ bought with ${H(p)} SOL · ${c(m.signature,`view`)}`)}else{s(e.wallet.index,`sending back to main…`);let t=await Kl(Rl(r,n.address,e.lamports,await Hl())),i=await Yl(t);s(e.wallet.index,i===`confirmed`?`✓ sent ${H(e.lamports)} SOL to main · ${c(t,`view`)}`:`✗ sending back ${i===`failed`?`failed`:`is taking long`} · ${c(t,`check`)}`)}}catch(t){Z(t).includes(`priced in another coin`)&&(d=!0),s(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`)}}),Wu([n.address,...a.map(e=>e.wallet.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),Zt(l?`success`:`error`),l&&await jn(),q(`after`).innerHTML=`<p><b>Done: ${l} of ${a.filter(e=>e.action===`buy`).length} buys went through.</b></p>
    <button id="home" class="primary">Back to my wallets</button>`,eg(),J(`home`,X)}var Mm=e=>new Intl.NumberFormat(`en-US`,e>=1e6?{notation:`compact`,maximumFractionDigits:2}:{maximumFractionDigits:e>=1?2:6}).format(e),Nm=e=>`$${e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`,Pm=e=>e.name?`${e.name}${e.symbol?` (${e.symbol})`:``}`:e.symbol??Tf(e.mint),Fm=e=>e.usd===null&&(/https?:|www\.|\.(io|com|xyz|net|org|fun|app|site|gg|co)\b/i.test(`${e.name} ${e.symbol}`)||(e.name??``).length>40),Im=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),Lm=3,Rm=e=>!!e?.chain&&e.chain!==Lm,zm=e=>!!e&&BigInt(e.raw)>0n&&(e.lamports>0||(e.usd??0)>0)&&!Rm(e),Bm=(e,t)=>e.usd?t?e.lamports+e.usd/t*V:null:e.lamports,Vm=(e,t)=>{let n=Number(t)/Number(BigInt(e.raw)),r=e.lamports*n,i=(e.usd??0)*n;return[r>0?`${H(r)} SOL`:``,i>0?Nm(i):``].filter(Boolean).join(` + `)},Hm=e=>!zm(e)&&(!e||e.chain!==Lm||!e.checked||Date.now()-e.checked>432e5);async function Um(e,t,n){let r=0,i=0,a=0,o=!1;for(let n of t){let t=await ru(n.address,e,n.amount);t&&(o=!0,r+=t.lamports,i+=t.usd,a+=t.coins)}if(!o)return null;let s=JSON.parse(await N.get(Wd).catch(()=>null)||`{}`);if(zm(s[e])&&!s[e].chain)return s[e];let c=a>0&&(r>0||i>0)?{lamports:r,...i>0?{usd:i}:{},raw:BigInt(Math.round(a*10**n)).toString(),chain:Lm}:{lamports:0,raw:`0`,checked:Date.now(),chain:Lm};return s[e]=c,await N.set(Wd,JSON.stringify(s)).catch(()=>{}),c}async function Wm(e,t){let n=await cu([e],t,await ed(t));return{lamports:n.lamports[0]+n.deposit[0],raw:n.raw[0]}}var Gm=Promise.resolve();function Km(e,t,n){n&&(Gm=Gm.then(async()=>{try{for(let r=0;r<5;r++){let r=await Wm(t,e),i=r.raw-n.raw,a=n.lamports-r.lamports;if(i>0n&&a>0){let t=JSON.parse(await N.get(Wd)||`{}`),n=t[e]??{lamports:0,raw:`0`};t[e]={lamports:n.lamports+a,...n.usd?{usd:n.usd}:{},raw:(BigInt(n.raw)+i).toString()},await N.set(Wd,JSON.stringify(t));return}await new Promise(e=>setTimeout(e,1500))}}catch{}}))}var qm=e=>e.inOrder===!0;async function Jm(e){let t=await $u(e);return t&&t.decimals!==void 0?t:gf(e).catch(()=>t??{name:null,symbol:null})}async function Ym(e){let t=e.map(()=>[]);if(!W)return t;let n=await ch(),r=new Set(n.map(e=>e.wallet)),i=await Promise.all(e.map(e=>r.has(e.address)?hf(e.address).catch(()=>[]):Promise.resolve([]))),a=[...new Set(i.flat().map(e=>e.inputMint))].filter(e=>e!==Hi),o=new Map(await Promise.all(a.map(async e=>[e,await Jm(e)])));for(let[e,n]of i.entries())for(let r of n){let n=BigInt(r.rawRemainingMakingAmount||r.rawMakingAmount||`0`),i=o.get(r.inputMint);n<=0n||!i||i.decimals===void 0||t[e].push({mint:r.inputMint,name:i.name,symbol:i.symbol,logo:i.logo,decimals:i.decimals,amount:Number(n)/10**i.decimals,usd:null,inOrder:!0})}return t}var Xm=e=>JSON.stringify(e.map(e=>[e.lamports,e.accounts.map(e=>`${e.mint}:${e.raw}`)])),Zm=null,Qm=!1,$m=new Set,eh=e=>Zm===e&&bf[bf.length-1]?.key===`holdings`;async function th(){G(`holdings`,th);let e=await rp();if(!e)return X();let t=Symbol(`holdings`);Zm=t;let n=Qm;Qm=!1;let r={me:t,wallets:e,costs:await nh()};await rh(e,`Looking up what each wallet holds…`,()=>eh(t),(e,t,n)=>ih(r,e,t,n),n)}var nh=()=>N.get(Wd).then(e=>JSON.parse(e||`{}`)).catch(()=>({}));async function rh(e,t,n,r,i=!1){let a=e.map(e=>e.address),o=Ju(a);o.catch(()=>{});let s=Ym(e);s.catch(()=>{});let c=()=>xp(s,8e3,null),l=()=>n()&&!!document.getElementById(`holdSync`),u=await Uu(a);if(u){let e=await xp(s,150,null);await r(u,e,`saved`);let t=await o.catch(()=>null);if(!l())return;if(!t){q(`holdSync`).textContent=`NOT SYNCED`;return}if(e&&Xm(t)===Xm(u)){let e=q(`holdSync`);e.textContent=`UP TO DATE`,e.classList.add(`synced`)}else{let n=e??await c();if(!l())return;await r(t,n,`quiet`)}}else{Y(t);let[e,i]=await Promise.all([o,c()]);if(!n())return;await r(e,i,`fresh`)}let d=await Xu(a,i).catch(()=>null);d&&l()&&await r(d,await c(),`quiet`)}async function ih(e,t,n,r){let{me:i,wallets:a,costs:o}=e,s=0,c=await Promise.all(t.map(async e=>(await Zu(e)).filter(e=>!Fm(e)||!(s+=1)))),l=t.map(e=>e.lamports);n?.forEach((e,t)=>c[t].push(...e));let u=new Map;c.forEach((e,t)=>e.forEach(e=>{let n=u.get(e.mint)??{coin:e,amount:0,usd:null,wallets:[],inOrders:0};n.amount+=e.amount,e.usd===null?qm(e)&&n.usd!==null&&n.amount>e.amount&&(n.usd+=n.usd/(n.amount-e.amount)*e.amount):n.usd=(n.usd??0)+e.usd,qm(e)&&(n.inOrders+=e.amount),n.wallets.includes(a[t].index)||n.wallets.push(a[t].index),u.set(e.mint,n)}));let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=ug,p=new Map,m=0,h=()=>{for(let[e,t]of u){let n=p.get(e);n!==void 0&&f&&(t.usd=n/1e9*f),t.usd!==null&&t.amount>0&&pg(e,t.usd/t.amount)}},g=async()=>{if(!W)return;let[e,t]=await Promise.all([mf().catch(()=>null),u.size?_f([...u.keys()]).catch(()=>new Map):Promise.resolve(new Map)]);f=e??f,yg(f);for(let[e,n]of u){let r=t.get(e);r&&f?p.set(e,r*n.amount/f*1e9):n.usd!==null&&f&&!p.has(e)&&p.set(e,n.usd/f*1e9)}h()},_=async()=>{if(!W)return;let[e,t]=await Promise.all([mf(!0).catch(()=>null),Promise.all([...u].map(([e,t])=>ma(W,e,d(t),!0).catch(()=>null)))]);f=e??f,yg(f);let n=[];if([...u.keys()].forEach((e,r)=>{let i=t[r];i===null?n.push(e):p.set(e,i)}),m=n.length,n.length&&f){let e=await ga(W,n,!0).catch(()=>new Map);for(let[t,n]of e)p.set(t,n*u.get(t).amount/f*1e9)}h();let r=new Map;for(let[e,t]of u)t.usd!==null&&t.amount>0&&p.has(e)&&r.set(e,t.usd/t.amount);Qu(r).catch(()=>{})};r===`fresh`?await g():h();let v=e=>a.flatMap((t,n)=>c[n].filter(t=>t.mint===e).map(e=>({address:t.address,amount:e.amount}))),y=e=>{let t=p.get(e);if(t===void 0||Im.has(e))return null;let n=o[e],r=u.get(e),i,a=!1,s=zm(n)?Bm(n,f):null;if(s&&(i=s/Number(BigInt(n.raw))*Number(d(r)),a=!0),!i)return null;let c=(t-i)/i*100;return Math.abs(c)<.5?null:{pct:c,sinceBuy:a}},b=e=>e===null?``:`${e.pct>0?`▲`:`▼`} ${Math.abs(e.pct)>=100?Math.round(Math.abs(e.pct)):Math.abs(e.pct).toFixed(1)}%${e.sinceBuy?` since buy`:``}`,x=e=>e===null?``:e.pct>0?` up`:` down`,S=(await ch()).length;if(!eh(i)||r===`quiet`&&!document.getElementById(`holdSync`))return;let C=l.reduce((e,t)=>e+t,0),w=a.filter((e,t)=>l[t]>0||c[t].length),T=e=>e===0?`Main`:`#${e}`,E=[...u.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),ee=E.reduce((e,t)=>e+(t.usd??0),0),te=a.filter((e,t)=>l[t]>0).length,D=(e,t)=>`${e} ${t}${e===1?``:`s`}`,ne=e=>Nm(e).replace(/^\$0\.00$/,`$${e.toFixed(4)}`),re=(e,t)=>r===`quiet`?t===`usd`?ne(e):H(e):`<span class="tk" data-to="${e}" data-kind="${t}">${t===`usd`?`$0.00`:`0.0000`}</span>`,ie=r===`saved`?`SYNCING`:`UP TO DATE`,ae=window.scrollY;K(`
    <h1>Your holdings <span id="holdSync" class="live${r===`saved`?``:` synced`}">${ie}</span></h1>
    <div class="total">
      <small>${ee>0?`Coins across ${D(w.length,`wallet`)}`:`SOL across ${D(w.length,`wallet`)}`}</small>
      <div class="big">${ee>0?`<span id="usdTotal">${re(ee,`usd`)}</span>`:`<span class="solamt" data-sol="${C/V}">${re(C,`sol`)}<span class="unit">SOL</span></span>`}</div>
      ${ee>0?`<div class="sub">+ <span class="solamt" data-sol="${C/V}">${re(C,`sol`)} SOL</span></div>`:``}
    </div>
    <h2>Across all wallets${E.length&&W?` <span id="live" class="live">LIVE</span>`:``}</h2>
    <ul class="list coins">
      <li><div class="av sol"><b>◎</b></div><div class="grow"><b>SOL</b><small>in ${D(te,`wallet`)}</small></div>
        <div class="right"><span class="solamt" data-sol="${C/V}">${re(C,`sol`)}<small>SOL</small></span></div></li>
      ${E.map(e=>{let t=y(e.coin.mint);return`<li data-mint="${e.coin.mint}">${Fn(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(Pm(e.coin))}</b><small>in ${e.wallets.length===1?``:`${e.wallets.length} wallets: `}${e.wallets.map(T).join(`, `)}</small>${e.inOrders?`<small class="inorder">🎯 ${fg(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
          <div class="right${x(t)}"><span class="val">${e.usd===null?``:re(e.usd,`usd`)}</span><small class="move">${b(t)}</small><small>${fg(e.coin.mint,e.amount)}</small></div></li>`}).join(``)}
    </ul>
    ${E.length?`<p class="muted">Tap a coin to sell some of it, set an auto-sell, or buy more.</p>`:``}
    <h2>Per wallet</h2>
    <p class="muted">Tap a wallet to open it.</p>
    <ul class="list">${w.map(e=>{let t=a.indexOf(e);return`<li class="openwallet" data-index="${t}"><span>${T(e.index)}</span><code><span class="bal">${H(l[t])} SOL</span>${c[t].map(e=>`<br><small>${qm(e)?`🎯 `:``}${Q(Pm(e))}: ${fg(e.mint,e.amount)}${qm(e)?` in auto-sell`:``}</small>`).join(``)}<br><a href="#" class="acct" data-address="${e.address}">view on Solscan</a></code></li>`}).join(``)}</ul>
    ${w.length<a.length?`<p class="muted">${a.length-w.length} empty wallets not shown.</p>`:``}
    ${s?`<p class="muted">${s} junk coin${s===1?``:`s`} hidden: ads strangers send to active wallets. They're worthless; don't visit the websites in their names.</p>`:``}
    <p class="muted" id="noLive"></p>
    ${E.length?`<button id="sellAll" class="danger">Sell all coins</button>`:``}
    ${S?`<button id="autoSells" class="gold">🎯 Auto-sells · ${S} placed</button>`:``}
    <button id="refresh" class="primary">Refresh</button>
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,ae),S&&J(`autoSells`,()=>yh().catch($)),E.length&&J(`sellAll`,()=>Zh(100,!1,null).catch($)),document.querySelectorAll(`.acct`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),$t(Zl(e.dataset.address))})),J(`refresh`,()=>{ff(),Qm=!0,th().catch($)}),J(`home`,X),document.querySelectorAll(`.openwallet`).forEach(e=>e.addEventListener(`click`,t=>{t.target.closest(`button, a, .solamt, .coinamt`)||(P(),lp(a[Number(e.dataset.index)]).catch($))})),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{let t=u.get(e.dataset.mint);P(),ah({mint:t.coin.mint,label:Pm(t.coin),short:t.coin.symbol||t.coin.name||`?`,logo:t.coin.logo,amount:t.amount,raw:d(t),wallets:t.wallets.map(T).join(`, `),holders:v(t.coin.mint),decimals:t.coin.decimals??0,inOrders:t.inOrders,value:p.get(t.coin.mint)??null}).catch($)})),In(),document.querySelectorAll(`.tk`).forEach((e,t)=>{let n=Number(e.dataset.to),r=e.dataset.kind===`usd`;Pn(e,n,r?Nm:am,{ms:1100,delay:Math.min(t,12)*70,final:r?ne(n):H(n)})});let oe=q(`holdSync`),se=()=>oe.isConnected;xh([...u],3,async([e,t])=>{if(Im.has(e)||!Hm(o[e])||$m.has(e)||!se())return;$m.add(e);let n=await Um(e,v(e),t.coin.decimals??0).catch(()=>null).finally(()=>$m.delete(e));n&&(o[e]=n)}).catch(()=>{});let ce=e=>{let t=document.getElementById(`live`);e&&t&&(t.classList.remove(`beat`),t.offsetWidth,t.classList.add(`beat`));let n=0;for(let[e,t]of u){n+=t.usd??0;let r=document.querySelector(`li[data-mint="${e}"]`);if(!r||t.usd===null)continue;let i=r.querySelector(`.right`),a=i.querySelector(`.val`),o=ne(t.usd);a.textContent!==o&&(a.textContent=o,i.classList.remove(`bump`),i.offsetWidth,i.classList.add(`bump`));let s=y(e);i.classList.toggle(`up`,!!s&&s.pct>0),i.classList.toggle(`down`,!!s&&s.pct<0),i.querySelector(`.move`).textContent=b(s)}let r=document.getElementById(`usdTotal`);r&&n>0&&(r.textContent=ne(n)),q(`noLive`).textContent=m?`${m===1?`1 coin has`:`${m} coins have`} no live sell price right now, so ${m===1?`its`:`their`} value may lag.`:``};W&&u.size&&(async()=>{if(r!==`fresh`){if(await g(),!se())return;ce(!1)}r!==`quiet`&&await new Promise(e=>setTimeout(e,1200));for(let e=0;se();e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),se()&&!document.hidden){if(await _(),!se())return;ce(!0)}})().catch(()=>{})}async function ah(e){if(G(`coin:${e.mint}:${e.only?.join(`,`)??``}`,()=>ah(e)),!W)return th();let t=Promise.all([ma(W,e.mint,e.raw),mf()]);t.catch(()=>{});let[n,r]=await Promise.all([nh(),ch()]),i=Im.has(e.mint)?void 0:n[e.mint],a=!Im.has(e.mint)&&Hm(i),o=i&&zm(i)?i:null,s=null,c=e.value??null,l=ug,u=!0,d=()=>{let t=o?Bm(o,l):null;s=t?Math.round(t/Number(BigInt(o.raw))*Number(e.raw)):null};d();let f=t,p=async()=>{let[t,n]=await(f??Promise.all([ma(W,e.mint,e.raw,!0),mf(!0)])).catch(()=>[null,null]);f=null,u=!1,t!==null&&(c=t),n!==null&&(l=n),yg(n),d(),c!==null&&l&&e.amount>0&&pg(e.mint,c/V*l/e.amount)},m=()=>s&&c&&c>s?Math.min(100,Math.ceil(s/c*1e4)/100):null,h=e=>String(Math.round(e*100)/100),g=e=>l?` · ${_(e/V*l)}`:``,_=e=>e<.01?`$${e.toFixed(4)}`:Nm(e),v=r.filter(t=>t.mint===e.mint).length,y=``,b=!1;K(`
    <div class="coinhead">${Fn(e.short,e.logo)}<div><b>${Q(e.label)}</b><small>${fg(e.mint,e.amount,` coins`)} · in ${Q(e.wallets)}</small></div><span id="live" class="live">LIVE</span></div>
    <div class="avail"><small>Worth now</small><span id="worth"></span></div>
    <div class="avail"><small id="paidLabel"></small><span class="paid" id="paidText"></span></div>
    <div class="avail pl" id="plRow"><small>Profit</small><span id="pl"></span></div>
    ${e.inOrders?`<p class="muted initnote">🎯 ${fg(e.mint,e.inOrders)} of these wait in auto-sell orders. Selling here only sells the rest; cancel the order first to sell those.</p>`:``}
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">%</span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span>50%</span><span>ALL</span></div>
    <div class="chips"><button type="button" data-p="25">25%</button><button type="button" data-p="50">50%</button><button type="button" data-p="75">75%</button><button type="button" data-p="100">MAX</button></div>
    <div id="initialBox"></div>
    ${Lf(`dot`)}
    <button id="go" class="danger go"></button>
    <div id="autoBox"></div>
    <button id="buyMore" class="primary">⚡ Buy more</button>
    <button id="back">${e.only?`Back to the wallet`:`Back to holdings`}</button>`),In();let x=()=>Math.min(100,Number(y)||0),S=()=>{q(`worth`).textContent=c===null?u?`…`:`no live price`:`${H(c)} SOL${g(c)}`,q(`paidLabel`).textContent=`You paid${i?.chain?` · on-chain`:``}`,q(`paidText`).textContent=o?Vm(o,e.raw):a?`looking it up…`:`—`;let t=q(`autoBox`),n=!!o&&!Im.has(e.mint);n!==!!t.firstElementChild&&(t.innerHTML=n?`<button id="auto" class="gold">🎯 Auto-sell${v?` · ${v} waiting`:``}</button>`:``,n&&J(`auto`,()=>gh(e,o).catch($)));let r=q(`plRow`);if(r.hidden=!(s&&c!==null),s&&c!==null){let e=c-s,t=e/s*100;r.classList.toggle(`up`,e>0),r.classList.toggle(`down`,e<0),q(`pl`).textContent=`${e>=0?`▲ +`:`▼ −`}${H(Math.abs(e))} SOL (${Math.abs(t)>=100?Math.round(Math.abs(t)):Math.abs(t).toFixed(1)}%)`}let l=m();q(`initialBox`).innerHTML=i?.out?`<p class="muted initnote">✓ Initial investment already taken out. The rest is riding free.</p>`:l===null?`<p class="muted initnote">${Im.has(e.mint)?`A stablecoin is always worth about $1, so there's no profit to take here.`:s?`💰 Sell initial investment shows up once this coin is worth more than you paid.`:a?`Looking up what you paid for this coin in your wallet's trade history…`:i?.checked?`Couldn't find what you paid for this coin in your wallet's trade history, so Sell initial investment isn't available.`:`Couldn't read your wallet's trade history right now, so Sell initial investment isn't available yet.`}</p>`:`<button id="initial" class="gold">💰 Sell initial investment · ${h(l)}%</button>`,l!==null&&!i?.out&&J(`initial`,()=>{P(),b=!0,C()})},C=(t=!1)=>{let n=m();b&&n!==null&&(y=h(n));let r=x();q(`amt`).textContent=y||`0`,t||(q(`slider`).value=String(Math.round(r*10)));let i=c===null?null:Math.round(c*r/100);q(`amtNote`).textContent=r?b&&n!==null?`gets back the ${o?Vm(o,e.raw):`${H(s)} SOL`} you paid · ${h(100-r)}% keeps riding`:i===null?`${Mm(e.amount*r/100)} coins`:`≈ ${H(i)} SOL${g(i)} · ${Mm(e.amount*r/100)} coins`:`Type a % or drag the slider`,document.querySelector(`#initial`)?.classList.toggle(`on`,b);let a=q(`go`);a.disabled=!r,a.textContent=r?`Sell ${r===100?`all of it`:`${y}%`}`:`Sell`},w=()=>b=!1;Rf(e=>{if(w(),e===`back`)y=y.slice(0,-1);else if(e===`dot`)y=y.includes(`.`)?y:(y||`0`)+`.`;else if(/\d/.test(e)){let[,t]=y.split(`.`);if(t!==void 0&&t.length>=2)return;let n=y===`0`?e:y+e;y=Number(n)>100?`100`:n}C()}),q(`slider`).addEventListener(`input`,()=>{w();let e=Number(q(`slider`).value);y=e?h(e/10):``,C(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{P(),w(),y=e.dataset.p,C()})),J(`go`,()=>{let t=x();if(!t)return;let n=b&&m()!==null,r=n?async()=>{let t=JSON.parse(await N.get(Wd)||`{}`);t[e.mint]&&(t[e.mint].out=!0),await N.set(Wd,JSON.stringify(t))}:void 0,i=(t,n)=>Ph(e.label,Math.round(t*100)/100,!1,e.only??null,{mint:e.mint,label:e.label},r,n).catch($);if(!e.inOrders)return i(t,!1);let a=Math.max(0,e.amount-e.inOrders),o=n?Math.min(100,t*e.amount/(a||1)):t,s=t=>{let n=c===null||!e.amount?null:Math.round(c*t/e.amount);return n===null?``:` ≈ <span class="solamt" data-sol="${n/V}">${H(n)} SOL</span>${g(n)}`},l=a*o/100,u=e.amount*t/100;P(),K(`
      <h1>Sell ${Q(e.label)}</h1>
      <p>🎯 ${fg(e.mint,e.inOrders)} of your ${fg(e.mint,e.amount)} coins are locked in auto-sell orders.</p>
      ${a>0?`<button id="freeOnly" class="primary">Sell only the free coins<br><small>${fg(e.mint,l)} coins (${h(o)}% of ${fg(e.mint,a)})${s(l)}</small></button>`:`<p class="muted">All of it is in auto-sell orders, so there are no free coins to sell.</p>`}
      <button id="withOrders" class="danger">Sell from all coins, including the locked ones<br><small>${fg(e.mint,u)} coins (${h(t)}% of ${fg(e.mint,e.amount)})${s(u)} · cancels the auto-sell orders first</small></button>
      <button id="back">Back</button>`),a>0&&J(`freeOnly`,()=>i(o,!1)),J(`withOrders`,()=>i(t,!0)),J(`back`,()=>ah(e).catch($))}),J(`buyMore`,()=>Cm(e.mint,null).catch($)),J(`back`,()=>e.only?wf():th().catch($)),S(),C();let T=q(`live`);a&&Um(e.mint,e.holders,e.decimals).catch(()=>null).then(e=>{e&&(i=e),o=i&&zm(i)?i:null,a=!1,d(),T.isConnected&&(S(),C())}),(async()=>{for(let e=0;T.isConnected;e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),T.isConnected&&!document.hidden){if(await p(),!T.isConnected)return;T.classList.remove(`beat`),T.offsetWidth,T.classList.add(`beat`),S(),C()}})().catch(()=>{})}var oh=`autoSells`,sh=5;async function ch(){return JSON.parse(await N.get(oh).catch(()=>null)||`[]`)}var lh=e=>N.set(oh,JSON.stringify(e)),uh=Promise.resolve();function dh(e){let t=uh.then(async()=>lh(e(await ch())));return uh=t.catch(()=>{}),t}var fh=e=>`${Math.round(e*100)/100}x`,ph=e=>`+${Math.round((e-1)*1e4)/100}%`,mh=e=>{let t=1+24*(e/1e3)**2;return t<10?Math.round(t*10)/10:Math.round(t)},hh=e=>Math.round(Math.sqrt(Math.min(1,Math.max(0,(e-1)/24)))*1e3);async function gh(e,t){G(`autoSell:${e.mint}`,()=>gh(e,t));let n=await rp();if(!n)return X();Y(`Checking which wallets hold it…`);let r=new Set(e.holders.map(e=>e.address)),i=n.filter(e=>r.has(e.address)),a=e.raw-BigInt(Math.round((e.inOrders??0)*10**e.decimals)),o=a>0n?Promise.all([ma(W,e.mint,a),mf()]):null;o?.catch(()=>{});let s=await cu(i.map(e=>e.address),e.mint,await ed(e.mint)),c=i.map((e,t)=>({wallet:e,held:s.raw[t]})).filter(e=>e.held>0n),l=c.reduce((e,t)=>e+t.held,0n);if(!l)return ah(e);let u=null,d=null,f=!0,p=async()=>{let t=!f,n=f&&o&&(a===l||Number(a>l?a-l:l-a)/Number(l)<.001);f=!1;let[r,i]=await(n?o.then(([e,t])=>[e===null?null:Math.round(e*Number(l)/Number(a)),t]):Promise.all([ma(W,e.mint,l,t),mf(t)]));r!==null&&(u=r),i!==null&&(d=i)};await p();let m=()=>{let e=Bm(t,d);return e?e/Number(BigInt(t.raw)):null},h=()=>u!==null&&m()?u/(m()*Number(l)):null,g=(await ch()).filter(t=>t.mint===e.mint),_=t.out?`all`:`initial`,v=`x`,y=2,b=`2`,x=e=>e===0?`Main`:`#${e}`,S=e=>d?e/V*d:null,C=()=>{let e=m();return!e||y<=1?[]:c.map(t=>{let n=_===`all`?t.held:t.held*10000n/BigInt(Math.round(y*1e4)),r=BigInt(Math.ceil(Number(n)*e*y)),i=u===null?null:u*Number(n)/Number(l);return{wallet:t.wallet,held:t.held,making:n,taking:r,usdNow:i===null?null:S(i)}})},w=e=>e.usdNow===null||e.usdNow>=sh;K(`
    <div class="coinhead">${Fn(e.short,e.logo)}<div><b>Auto-sell ${Q(e.label)}</b><small>You paid ${Vm(t,l)} · now <span id="nowX"></span></small></div></div>
    <div class="seg" id="kindSeg"><button type="button" data-v="initial">💰 Sell initial</button><button type="button" data-v="all">Sell all</button></div>
    <div class="seg small" id="unitSeg"><button type="button" data-v="x">Multiplier ×</button><button type="button" data-v="pct">Percentage %</button></div>
    <div class="total amountbox">
      <small id="when">when it reaches</small>
      <div class="amount"><span class="num" id="amt"></span><span class="unit" id="unit"></span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1">
    <div class="ticks" id="ticks"></div>
    ${Lf(`dot`)}
    <ul class="list" id="plan"></ul>
    <p class="muted" id="planNote"></p>
    <button id="go" class="gold go">Set auto-sell</button>
    <div id="existing"></div>
    <p class="muted">The coins in an order wait in Jupiter's on-chain order account, so they leave your holdings until it sells or you cancel it. This only sells on the way up; it can't stop a loss.</p>
    <button id="back">Back to ${Q(e.short)}</button>`),In();let T=()=>{q(`existing`).innerHTML=g.length?`<h2>Waiting orders for this coin</h2><ul class="list">${g.map(e=>`<li><span>${x(e.index)}</span><code>${e.kind===`initial`?`💰 initial`:`all`} at ${fh(e.x)} → ${H(Number(e.taking))} SOL</code></li>`).join(``)}</ul><button id="manage">See or cancel auto-sells</button>`:``,g.length&&J(`manage`,()=>yh().catch($))},E=(t=!1)=>{document.querySelectorAll(`#kindSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===_)),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===v)),q(`amt`).textContent=b||`0`,q(`unit`).textContent=v===`x`?`x`:`%`,q(`ticks`).innerHTML=v===`x`?`<span>1x</span><span>7x</span><span>25x</span>`:`<span>+0%</span><span>+600%</span><span>+2400%</span>`,t||(q(`slider`).value=String(hh(y)));let n=h();q(`nowX`).textContent=n===null?`no live price`:`${fh(n)} (${n>=1?`▲ +`:`▼ −`}${Math.abs(Math.round((n-1)*1e3)/10)}%)`;let r=m(),i=C(),a=i.filter(w),o=q(`go`),s=``,c=``;r?y<=1?c=_===`initial`?`Pick more than 1x: at 1x getting back what you paid means selling all of it.`:`Pick more than 1x.`:n!==null&&y<=n&&(c=`That's below today's price (${fh(n)}), so it would sell straight away. Use Sell on the coin screen for that.`):c=`Can't work out today's price of what you paid.`;let l=_===`all`?100:Math.round(1e4/y)/100,u=i.reduce((e,t)=>e+Number(t.taking),0),d=S(u);q(`amtNote`).textContent=c?``:`${v===`x`?ph(y):fh(y)} · sells ${_===`all`?`all of it`:`${l}%`} for ≈ ${H(u)} SOL${d?` · ${Nm(d)}`:``}${_===`initial`?` · ${Math.round((100-l)*100)/100}% keeps riding`:``}`,q(`plan`).innerHTML=c?``:i.map(t=>`<li><span>${x(t.wallet.index)}</span><code>${w(t)?`sell ${kh(t.making,e.decimals)} for ${H(Number(t.taking))} SOL`:`<span class="error">skipped: worth ${Nm(t.usdNow)} now, under Jupiter's $${sh} minimum</span>`}</code></li>`).join(``),!c&&!a.length?s=`Every wallet's order would be under Jupiter's $${sh} minimum (worth now). Gather the coins in fewer wallets, or pick Sell all.`:!c&&a.length<i.length&&(s=`Jupiter only takes orders worth at least $${sh} right now, so ${i.length-a.length} wallet${i.length-a.length===1?` is`:`s are`} skipped.`),q(`planNote`).textContent=c||s,q(`planNote`).classList.toggle(`error`,!!c),o.disabled=!!c||!a.length,o.textContent=c||!a.length?`Set auto-sell`:`Set auto-sell in ${a.length} wallet${a.length===1?``:`s`}`},ee=()=>{let e=Number(b)||0;y=v===`x`?e:1+e/100},te=()=>{b=String(v===`x`?Math.round(y*100)/100:Math.round((y-1)*1e4)/100)};document.querySelectorAll(`#kindSeg button`).forEach(e=>e.addEventListener(`click`,()=>{P(),_=e.dataset.v,E()})),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.addEventListener(`click`,()=>{P(),v=e.dataset.v,te(),E()})),Rf(e=>{if(e===`back`)b=b.slice(0,-1);else if(e===`dot`)b=b.includes(`.`)?b:(b||`0`)+`.`;else if(/\d/.test(e)){let[,t]=b.split(`.`);if(t!==void 0&&t.length>=2||b.replace(`.`,``).length>=7)return;b=b===`0`?e:b+e}ee(),E()}),q(`slider`).addEventListener(`input`,()=>{y=mh(Number(q(`slider`).value)),te(),E(!0)}),J(`back`,()=>ah(e).catch($)),J(`go`,()=>{let t=C().filter(w);if(!t.length)return;let n={kind:_,x:y};Wf(`Enter your PIN to set the auto-sell`,r=>_h(r,e,t,n).catch($))}),T(),E();let D=q(`nowX`);(async()=>{for(;D.isConnected;)await new Promise(e=>setTimeout(e,5e3)),D.isConnected&&!document.hidden&&(await p(),D.isConnected&&E())})().catch(()=>{})}async function _h(e,t,n,r){ff();let i=Qf(e,Math.max(...n.map(e=>e.wallet.index))+1),a=e=>e===0?`Main`:`#${e}`;K(`
    <h1>Setting auto-sell…</h1>
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${a(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let o=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,s=0;await xh(n,Dm,async e=>{let n=q(`status-${e.wallet.index}`);try{n.textContent=`placing the order…`;let a=Om(e.wallet.address),c=await va(W,e.wallet.address,t.mint,e.making,e.taking);if(!c.transaction)throw Error(`Jupiter didn't send an order to sign.`);let l=await ba(W,await Em(da(c.transaction),i[e.wallet.index],{sol:wm,mint:t.mint,coins:e.making},a),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter's order didn't go through (code ${l.code}).`);s++,await dh(n=>[...n,{order:c.order??``,wallet:e.wallet.address,index:e.wallet.index,mint:t.mint,label:t.label,kind:r.kind,x:r.x,making:e.making.toString(),taking:e.taking.toString(),at:Date.now()}]),n.innerHTML=`✓ sells ${kh(e.making,t.decimals)} at ${fh(r.x)} for ${H(Number(e.taking))} SOL · ${o(l.signature,`view`)}`}catch(e){n.innerHTML=`<span class="error">✗ ${Q(vh(e))}</span>`}}),Wu(n.map(e=>e.wallet.address)).catch(()=>{}),i.forEach(e=>e.secret.fill(0)),Zt(s?`success`:`error`),q(`after`).innerHTML=`<p><b>Done: auto-sell set in ${s} of ${n.length} wallets.</b>${s?` It sells when ${Q(t.label)} reaches ${fh(r.x)} what you paid.`:``}</p>
    <button id="list" class="primary">See my auto-sells</button>
    <button id="holdings">See my holdings</button>`,eg(),J(`list`,()=>yh().catch($)),J(`holdings`,()=>th().catch($))}function vh(e){let t=Z(e);return/at least 5 USD/i.test(t)?`worth under $${sh} right now (Jupiter's minimum)`:/insufficient|lamports|rent/i.test(t)?`not enough SOL in this wallet for the order's fee and deposit (~0.003 SOL)`:t}async function yh(){if(G(`autoSells`,yh),!W)return th();let e=await ch(),t=e=>e===0?`Main`:`#${e}`;if(!e.length)return K(`
      <h1>Auto-sells</h1>
      <p class="muted">No auto-sells yet. Tap a coin in your holdings, then 🎯 Auto-sell.</p>
      <button id="holdings" class="primary">See my holdings</button>`),J(`holdings`,()=>th().catch($));Y(`Checking your orders on Jupiter…`);let n=[...new Set(e.map(e=>e.wallet))],r=new Map,i=new Map,a=!1;await Promise.all(n.map(async t=>{try{for(let e of await xa(W,t,`active`))r.set(e.orderKey,e);if(e.some(e=>e.wallet===t&&!r.has(e.order)))for(let e of await xa(W,t,`history`))i.set(e.orderKey,e)}catch{a=!0}}));let o=JSON.parse(await N.get(Wd).catch(()=>null)||`{}`),s=!1,c=e=>{if(r.has(e.order))return`waiting`;let t=i.get(e.order);return t?/complete|fill/i.test(t.status)?`sold`:`cancelled`:`unknown`};for(let t of e)t.kind===`initial`&&c(t)===`sold`&&o[t.mint]&&!o[t.mint].out&&(o[t.mint].out=!0,s=!0);s&&await N.set(Wd,JSON.stringify(o)),a||await lh(e.filter(e=>[`waiting`,`unknown`].includes(c(e))));let l=e.filter(e=>c(e)===`waiting`),u=e=>({waiting:`waiting`,sold:`✓ sold`,cancelled:`cancelled`,unknown:a?`couldn't check`:`not found on Jupiter`})[c(e)];K(`
    <h1>Auto-sells</h1>
    <ul class="list">${e.map((e,n)=>`<li><span>${t(e.index)}</span><code><b>${Q(e.label)}</b> · ${e.kind===`initial`?`💰 sell initial`:`sell all`} at ${fh(e.x)}<br><small>${H(Number(e.taking))} SOL · ${u(e)}</small>${c(e)===`waiting`?`<br><button type="button" class="cancel small" data-i="${n}">Cancel</button>`:``}</code></li>`).join(``)}</ul>
    ${a?`<p class="error">Couldn't reach Jupiter for every wallet. Try Refresh.</p>`:``}
    ${l.length>1?`<button id="cancelAll" class="danger">Cancel all ${l.length}</button>`:``}
    <p class="muted">Cancelling gives the coins back to the wallet.</p>
    <button id="refresh" class="primary">Refresh</button>
    <button id="holdings">See my holdings</button>`),J(`refresh`,()=>yh().catch($)),J(`holdings`,()=>th().catch($)),document.querySelectorAll(`button.cancel`).forEach(t=>t.addEventListener(`click`,()=>{let n=e[Number(t.dataset.i)];Wf(`Enter your PIN to cancel`,e=>bh(e,[n]).catch($))})),l.length>1&&J(`cancelAll`,()=>Wf(`Enter your PIN to cancel them all`,e=>bh(e,l).catch($)))}async function bh(e,t){ff();let n=Qf(e,Math.max(...t.map(e=>e.index))+1),r=e=>e===0?`Main`:`#${e}`;K(`
    <h1>Cancelling…</h1>
    <ul class="list">${t.map((e,t)=>`<li><span>${r(e.index)}</span><code id="status-${t}">${Q(e.label)} · waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let i=0,a=new Set,o=new Map;t.forEach((e,t)=>o.set(e.wallet,[...o.get(e.wallet)??[],t])),await xh([...o.values()],Dm,async e=>{for(let[r,o]of e.entries()){let e=t[o],s=q(`status-${o}`);try{s.textContent=`cancelling…`;let t=n[e.index];if(t.address!==e.wallet)throw Error(`this wallet's number changed; cancel it on jup.ag instead`);let o=r===0?Om(e.wallet):void 0,c=await ya(W,e.wallet,e.order),l=await ba(W,await Em(da(c.transaction),t,{sol:wm},o),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter didn't cancel it (code ${l.code}).`);i++,a.add(e.order),s.innerHTML=`✓ cancelled, coins back in the wallet · <a href="#" class="tx" data-sig="${l.signature}">view</a>`}catch(e){s.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}}),Wu([...o.keys()]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),a.size&&await dh(e=>e.filter(e=>!a.has(e.order))),Zt(i?`success`:`error`),q(`after`).innerHTML=`<p><b>Cancelled ${i} of ${t.length}.</b></p><button id="list" class="primary">See my auto-sells</button>`,eg(),J(`list`,()=>yh().catch($))}async function xh(e,t,n){let r=Array(e.length),i=0;return await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;i<e.length;){let t=i++;r[t]=await n(e[t],t)}})),r}var Sh=12;function Ch(e,t,n,r){if(e<5e3)return null;let i=t.filter(e=>e.raw===0n).slice(0,Sh),a=i.reduce((e,t)=>e+t.lamports,0),o=t.some(e=>e.raw>0n&&!r?.has(e.mint))?sm:0,s=n?Math.max(0,e+a-zc-o):0;return!i.length&&!s||!i.length&&s<5e4?null:{close:i,refund:a,keep:o,send:s}}async function wh(e,t,n){let r=await Kl(vl(e,[...n.close.map(t=>xl(t,e.address,e.address)),...n.send>0?[bl(e.address,t.address,n.send)]:[]],await Hl())),i=await Yl(r);if(i!==`confirmed`)throw Error(`${i===`failed`?`failed`:`is taking long`} (${r})`);return r}function Th(e){let[t,...n]=[e.send?`sends ${H(e.send)} SOL to main`:``,e.close.length?`gets back ${H(e.refund)} SOL in deposits from ${e.close.length} empty coin account${e.close.length===1?``:`s`}`:``,e.keep?`keeps ${H(e.keep)} SOL to sell its coins later`:``].filter(Boolean);return t+(n.length?`<br><small>${n.join(`<br>`)}</small>`:``)}async function Eh(){G(`sweep`,Eh);let e=await rp();if(!e)return X();let[t,...n]=e;Y(`Checking your side wallets…`);let r=await Ju(n.map(e=>e.address)),i=n.map((e,t)=>({wallet:e,plan:Ch(r[t].lamports,r[t].accounts,!0)})).filter(e=>e.plan!==null),a=i.reduce((e,t)=>e+t.plan.send,0);K(`
    <h1>Send side-wallet SOL to main</h1>
    ${i.length?`<ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code>${Th(e.plan)}</code></li>`).join(``)}</ul>
           <p><b>Total to main: ${H(a)} SOL</b></p>
           <p class="muted">Empty coin accounts are closed so their deposits come back too.</p>
           <button id="go" class="primary">Enter PIN and send</button>`:`<p class="muted">There's no SOL to send back right now. Side wallets that hold coins keep ${H(sm)} SOL so they can sell them later.</p>`}
    <button id="cancel">Back to my wallets</button>`),J(`cancel`,X),i.length&&J(`go`,()=>Wf(`Enter your PIN to send`,async e=>{let n=Qf(e,Math.max(...i.map(e=>e.wallet.index))+1);K(`
        <h1>Sending to main…</h1>
    ${zt()}
        <ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),yf();let r=0;await xh(i,Dm,async e=>{let i=q(`status-${e.wallet.index}`);try{i.textContent=`sending…`;let a=await wh(n[e.wallet.index],t,e.plan);r++,i.innerHTML=`✓ ${e.plan.send?`sent ${H(e.plan.send)} SOL`:`got back ${H(e.plan.refund)} SOL`} · <a href="#" class="tx" data-sig="${a}">view</a>`}catch(e){i.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),Wu([t.address,...i.map(e=>e.wallet.address)]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),Zt(r?`success`:`error`),r&&await jn(`MERGED`),q(`after`).innerHTML=`<p><b>Done: ${r} of ${i.length} wallets.</b></p><button id="home" class="primary">Back to my wallets</button>`,eg(),J(`home`,X)}))}var Dh=e=>/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(e);function Oh(e,t){let n=e.toString().padStart(t+1,`0`),r=n.slice(0,n.length-t),i=n.slice(n.length-t).replace(/0+$/,``);return i?`${r}.${i}`:r}var kh=(e,t)=>Mm(Number(Oh(e,t)));async function Ah(e,t){if(Dh(e)){let t=await $u(e);return[{mint:e,label:t?.name?`${t.name}${t.symbol?` (${t.symbol})`:``}`:await cl(e)??Tf(e)}]}let n=e=>(e??``).toLowerCase().replace(/[^a-z0-9]/g,``),r=n(e),i=async e=>{if(!e)return[];let t=(await Promise.all(e.map(e=>Zu(e)))).flat().filter(e=>!Fm(e)),i=e=>{let n=new Map;for(let r of t)e(r)&&n.set(r.mint,Pm(r));return[...n].map(([e,t])=>({mint:e,label:t}))},a=i(e=>n(e.symbol)===r||n(e.name)===r);return a.length||r.length<3?a:i(e=>n(e.symbol).startsWith(r)||n(e.name).startsWith(r))},a=t.map(e=>e.address),o=await i(await Uu(a));return o.length?o:i(await Ju(a))}async function jh(e,t){let n=new Set((await ch()).map(e=>e.wallet)),r=e.filter(e=>n.has(e.address)),i=await Promise.all(r.map(e=>xa(W,e.address,`active`).catch(()=>[])));return r.flatMap((e,n)=>i[n].filter(e=>e.inputMint===t).map(t=>({wallet:e.address,order:t.orderKey,raw:BigInt(t.rawRemainingMakingAmount||t.rawMakingAmount||`0`)})))}async function Mh(e,t,n){let r=async()=>(await Bl(e.address,t)).reduce((e,t)=>e+t.raw,0n),i=await r();for(let t of n){let n=await ya(W,e.address,t.order),r=await ba(W,await Em(da(n.transaction),e,{sol:wm}),n.requestId);if(r.status!==`Success`)throw Error(r.error??`Jupiter didn't cancel the auto-sell order (code ${r.code}).`)}let a=i+n.reduce((e,t)=>e+t.raw,0n);for(let e=0;e<20;e++){let e=await r();if(e>=a)return e;await new Promise(e=>setTimeout(e,500))}return r()}var Nh=5e4;async function Ph(e,t,n,r,i,a,o=!1){if(G(`sell:${i?.mint??e}:${r?.join(`,`)??``}`,()=>Ph(e,t,n,r,i,a,o)),!W)return K(`
      <h1>Open this from the bot</h1>
      <p>To sell, send <b>sell &lt;coin name or address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);let s=await rp();if(!s)return X();let[c]=s,l=i,u=e=>ed(e).then(t=>cu(s.map(e=>e.address),e,t)),d=!l&&Dh(e)?u(e):null;if(d?.catch(()=>{}),!l){Y(Dh(e)?`Finding the coin in your wallets…`:`Looking for ${Q(e)} in your wallets…`);let i=await Ah(e,s);if(!i.length)return K(`
        <h1>Coin not found</h1>
        <p>None of your wallets hold a coin called <b>${Q(e)}</b>. Check the name in <b>holdings</b>, or send <b>sell</b> with the coin's address instead.</p>
        <button id="home" class="primary">Back to my wallets</button>`),J(`home`,X);if(i.length>1)return K(`
        <h1>Which ${Q(e)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${i.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${Tf(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(o=>o.addEventListener(`click`,()=>Ph(e,t,n,r,i[Number(o.dataset.i)],a).catch($))),J(`home`,X);l=i[0]}Y(`Checking how much each wallet holds…`);let f=l.mint,[p,m]=await Promise.all([d&&f===e?d:u(f),o?jh(s,f):Promise.resolve([])]),h=e=>m.filter(t=>t.wallet===e).reduce((e,t)=>e+t.raw,0n),g=[],_=[];s.forEach((e,n)=>{if(r&&!r.includes(e.index))return;let i=p.raw[n]+h(e.address);if(i===0n)return void(r&&_.push(e.index));let a=t===100?i:i*BigInt(Math.round(t*100))/10000n,o=p.decimals??0;a>0n&&g.push({wallet:e,balance:p.lamports[n],raw:i,sell:a,decimals:o,orders:m.filter(t=>t.wallet===e.address)})});let v=e=>e===0?`Main`:`#${e}`,y=e=>e.balance>=Nh,b=r?.filter(e=>e>=s.length)??[],x=[_.length?`${_.map(v).join(`, `)} ${_.length===1?`doesn't`:`don't`} hold this coin.`:``,b.length?`You don't have ${b.map(v).join(`, `)}.`:``].filter(Boolean);if(K(`
    <h1>Sell ${Q(l.label)}</h1>
    <div class="card"><div class="label">Coin address</div><div class="address" id="mint"></div></div>
    ${m.length?`<p class="muted">Includes the coins in your auto-sell orders: those orders are cancelled first, then the coins are sold.</p>`:``}
    ${g.length?`<h2>Selling ${t===100?`all of it`:`${t}%`} from <span id="picked"></span></h2>
           <p class="muted">Untick any wallet you want to leave out.</p>
           <ul class="list">${g.map((e,n)=>`<li><label class="pickrow"><input type="checkbox" class="sellbox" data-i="${n}" ${y(e)?`checked`:`disabled`}>
                 <span>${v(e.wallet.index)}</span></label><code>sells <b>${fg(l.mint,Number(Oh(e.sell,e.decimals)))}</b>${t<100?` of ${fg(l.mint,Number(Oh(e.raw,e.decimals)))}`:``}${e.orders?.length?`<br><small>🎯 cancels ${e.orders.length===1?`its auto-sell order`:`${e.orders.length} auto-sell orders`} first</small>`:``}${y(e)?``:`<br><small class="error">not enough SOL to pay the fee, skipped</small>`}</code></li>`).join(``)}</ul>
           ${x.length?`<p class="muted">${x.join(` `)}</p>`:``}
           ${t===100?`<p class="muted">Afterwards each wallet closes its empty ${Q(l.label)} account and gets its ~0.002 SOL deposit back.</p>`:``}
           ${n?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold other coins keep ${H(sm)} SOL to sell those later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Prices can move while the sales go through one by one.</p>
           ${g.some(y)?`<button id="go" class="primary">Enter PIN and sell</button>`:``}`:`<p class="warning">${r?`${x.join(` `)||`Those wallets don't hold this coin.`}`:`None of your wallets hold this coin.`}</p>`}
    <button id="cancel">Cancel</button>`),q(`mint`).textContent=l.mint,J(`cancel`,X),g.some(y)){let e=Array.from(document.querySelectorAll(`.sellbox`)),r=()=>e.filter(e=>e.checked).map(e=>g[Number(e.dataset.i)]),i=()=>{let e=r().length;q(`picked`).textContent=`${e} wallet${e===1?``:`s`}`,q(`go`).disabled=e===0};e.forEach(e=>e.addEventListener(`change`,i)),i(),J(`go`,()=>{let e=r();e.length&&Wf(`Enter your PIN to sell`,r=>Fh(r,l.mint,c,e,t,n,a))})}}async function Fh(e,t,n,r,i,a,o){let s=Qf(e,Math.max(...r.map(e=>e.wallet.index))+1),c=e=>e===0?`Main`:`#${e}`;K(`
    <h1>Selling…</h1>
    ${zt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${r.map(e=>`<li><span>${c(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),yf();let l=(e,t)=>q(`status-${e}`).innerHTML=t,u=(e,t)=>q(`status-${e}`).innerHTML+=t,d=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,f=0,p=0,m=0,h={jupiter:null};await xh(r,Dm,async e=>{let r=s[e.wallet.index];if(e.orders?.length)try{l(e.wallet.index,`cancelling the auto-sell order…`);let n=await Mh(r,t,e.orders),a=new Set(e.orders.map(e=>e.order));if(await dh(e=>e.filter(e=>!a.has(e.order))),e.raw=n,e.sell=i===100?n:n*BigInt(Math.round(i*100))/10000n,e.sell<=0n)throw Error(`the coins didn't come back from the order yet; try again in a moment`)}catch(t){l(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`);return}let o=e.orders?.length?void 0:Om(r.address),c=await Xh(e,t,r,i,h,l,d,o);if(c&&f++,i!==100&&!a)return;let g=a&&e.wallet.index!==0;try{let a=0,o=[];for(let n=0;n<5&&([[a],o]=await Promise.all([ml([e.wallet.address]),Bl(e.wallet.address)]),c&&i===100&&!o.every(e=>e.mint!==t||e.raw===0n));n++)await new Promise(e=>setTimeout(e,500));let s=Ch(a,o,g);if(!s)return;u(e.wallet.index,`<br><small>${g?`sending to main…`:`getting the deposit back…`}</small>`);let l=await wh(r,n,s);p+=s.send,m+=s.refund,q(`status-${e.wallet.index}`).querySelector(`small:last-of-type`).innerHTML=`${s.send?`sent ${H(s.send)} SOL to main`:`got back ${H(s.refund)} SOL deposit`} · ${d(l,`view`)}`}catch(t){u(e.wallet.index,`<br><small class="error">✗ collecting: ${Q(Z(t))}</small>`)}}),Wu([n.address,...r.map(e=>e.wallet.address)]).catch(()=>{}),s.forEach(e=>e.secret.fill(0)),Zt(f?`success`:`error`),f&&await jn(`PRINTED`),f&&o&&await o().catch(()=>{}),q(`after`).innerHTML=`<p><b>Done: sold in ${f} of ${r.length} wallets.</b>${m?` Got back ${H(m)} SOL in deposits.`:``}${p?` Sent ${H(p)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,eg(),J(`holdings`,()=>th().catch($)),J(`home`,X)}var Ih=new Map;function Lh(e){return Ih.has(e)||Ih.set(e,Au(e)),Ih.get(e)}var Rh=new Map;function zh(e){return Rh.has(e)||Rh.set(e,cl(e).then(t=>t?.match(/\(([^)]+)\)$/)?.[1]??t??Tf(e)).catch(()=>Tf(e))),Rh.get(e)}var Bh=[15,30],Vh=21e5,Hh=/custom program error: 0x(179a|1798|1774)\b/;async function Uh(e,t){let[n]=await Ml([t]);return Pl(n)}async function Wh(e,t,n){for(let r=0;r<20;r++){let r=await Uh(e,t);if(r!==n)return r;await new Promise(e=>setTimeout(e,400))}return Uh(e,t)}async function Gh(e,t,n,r){try{if(await Wh(e.address,t,r)!==0n)return;await Kl(vl(e,[Ll(t,e.address,e.address,n)],await Hl()))}catch{}}async function Kh(e,t,n,r,i,a){let o=Mu(t.address,e,n===`buy`?`coin`:`quote`),s=Mu(t.address,e,n===`buy`?`quote`:`coin`),c=n===`buy`?e.quoteProgram:e.mintProgram,l=async a=>vl(t,[...ju(t.address,e,n,r,a),...i?[Ll(s,t.address,t.address,c)]:[]],await Hl()),u=await Uh(t.address,o);for(let e=0;;e++){let n=Bh[e],r=await Nl(await l(1n),[o]);if(r.err){let e=r.logs.filter(e=>/Error|failed/i.test(e)).slice(-1)[0]??JSON.stringify(r.err);throw Error(`pump.fun turned the trade down before it ran (${e}).`)}let i=Pl(r.accounts[0])-u;if(i<=0n)throw Error(`pump.fun's swap would give nothing back.`);let s=i*BigInt(100-n)/100n||1n;try{let e=await Kl(await l(s)),n=await Yl(e);if(n!==`confirmed`)throw Error(`the trade ${n===`failed`?`failed`:`is taking long`} (${e})`);return{signature:e,got:await Wh(t.address,o,u)-u}}catch(t){let n=Bh[e+1];if(!(n&&Hh.test(Z(t))))throw t;a(`price jumped, trying again with ${n}% room…`)}}}async function qh(e,t,n,r){let i=await la(W,t,n,r.toString(),e.address);if(!i.transaction)throw Error(i.errorMessage??`Jupiter couldn't make that swap.`);let a=t===`So11111111111111111111111111111111111111112`?{sol:Number(r)+wm}:{sol:wm,mint:t,coins:r},o=await ua(W,await Em(da(i.transaction),e,a),i.requestId);if(o.status!==`Success`)throw Error(o.error??`Jupiter's swap didn't go through (code ${o.code}).`);return{signature:o.signature,out:i.outAmount}}async function Jh(e,t,n,r,i){let a=Q(await zh(e.quote)),o=Mu(t.address,e,`quote`),s=n-Vh;if(s<lm)return r(`<span class="error">✗ too little SOL for this coin: it's priced in ${a}, which needs an extra ~0.002 SOL account</span>`),!1;let c=await Uh(t.address,o),l;try{r(`this coin is priced in ${a}: swapping ${H(s)} SOL for ${a}…`),l=(await qh(t,Hi,e.quote,BigInt(s))).signature}catch(e){return r(`<span class="error">✗ couldn't get ${a} to buy with (${Q(Z(e))}). Nothing was bought.</span>`),!1}let u=await Wh(t.address,o,c)-c;if(u<=0n)return r(`<span class="error">✗ the ${a} swap went through but nothing arrived yet · ${i(l,`view`)}</span>`),!1;try{r(`got ${a} · buying the coin on pump.fun…`);let{signature:n}=await Kh(e,t,`buy`,u,c===0n,r);return r(`✓ bought with ${H(s)} SOL (via ${a}) · ${i(l,`swap`)} · ${i(n,`buy`)}`),!0}catch(n){let s=Q(Z(n));try{r(`buy failed, swapping the ${a} back to SOL…`);let n=await qh(t,e.quote,Hi,u);c===0n&&await Gh(t,o,e.quoteProgram,u),r(`<span class="error">✗ ${s}</span><br><small>Swapped the ${a} back to SOL${n.out?` (~${H(Number(n.out))} SOL)`:``} · ${i(n.signature,`view`)}</small>`)}catch(e){r(`<span class="error">✗ ${s}</span><br><small class="error">This wallet now holds the ${a} it got (${i(l,`view`)}); swapping it back failed too (${Q(Z(e))}). Sell it with "sell ${a}".</small>`)}return!1}}async function Yh(e,t,n,r,i){let a=Q(await zh(e.quote)),o=Mu(t.address,e,`quote`),s=await Uh(t.address,o),c;try{r(`this coin is priced in ${a}: selling it for ${a} on pump.fun…`),c=await Kh(e,t,`sell`,n.sell,!1,r)}catch(e){return r(`<span class="error">✗ ${Q(Z(e))}</span>`),!1}try{r(`sold for ${a} · swapping the ${a} to SOL…`);let l=await qh(t,e.quote,Hi,c.got);return s===0n&&await Gh(t,o,e.quoteProgram,c.got),r(`✓ sold ${kh(n.sell,n.decimals)}${l.out?` for ~${H(Number(l.out))} SOL`:``} (via ${a}) · ${i(c.signature,`sale`)} · ${i(l.signature,`swap`)}`),!0}catch(e){return r(`✓ sold ${kh(n.sell,n.decimals)} for ${a} · ${i(c.signature,`view`)}<br><small class="error">Swapping the ${a} to SOL failed (${Q(Z(e))}). This wallet holds it now: sell it with "sell ${a}".</small>`),!0}}async function Xh(e,t,n,r,i,a,o,s){try{a(e.wallet.index,`selling…`);let c=null;if(!i.jupiter)try{if(c=await la(W,t,Hi,e.sell.toString(),n.address),!c.transaction)throw Error(c.errorMessage??`Jupiter couldn't find a way to sell this coin.`)}catch(e){i.jupiter=Z(e),c=null}if(c){let r=await ua(W,await Em(da(c.transaction),n,{sol:wm,mint:t,coins:e.sell},s),c.requestId);if(r.status!==`Success`)throw Error(r.error??`The sale didn't go through (code ${r.code}).`);let i=c.outAmount?` for ~${H(Number(c.outAmount))} SOL`:``;return a(e.wallet.index,`✓ sold ${kh(e.sell,e.decimals)}${i} · ${o(r.signature,`view`)}`),!0}let l=await Lh(t);if(l)return await Yh(l,n,e,t=>a(e.wallet.index,t),o);a(e.wallet.index,`selling through pump.fun…`);let u=r===100?`100%`:Oh(e.sell,e.decimals),d=await $h(e.wallet.index,a,i.jupiter,e=>Ta(n.address,t,u,e),n,()=>({sol:wm,mint:t,coins:r===100?void 0:e.sell}),s),f=await Yl(d);return f===`confirmed`?(a(e.wallet.index,`✓ sold ${kh(e.sell,e.decimals)} via pump.fun · ${o(d,`view`)}`),!0):(a(e.wallet.index,`<span class="error">✗ sale ${f===`failed`?`failed`:`is taking long`}</span> · ${o(d,`check`)}`),!1)}catch(t){return a(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`),!1}}async function Zh(e,t,n){if(G(`sellAll:${n?.join(`,`)??``}`,()=>Zh(e,t,n)),!W)return K(`
      <h1>Open this from the bot</h1>
      <p>To sell everything, send <b>sell all</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),J(`home`,X);let r=await rp();if(!r)return X();let[i]=r,a=r.filter(e=>!n||n.includes(e.index));Y(`Checking every coin in every wallet…`);let o=await Ju(a.map(e=>e.address)),s=o.map(e=>e.lamports),c=o.map(e=>e.accounts),l=await Promise.all(o.map(e=>Zu(e))),u=new Map;l.flat().forEach(e=>u.set(e.mint,e));let d=new Map,f=0;a.forEach((t,n)=>{let r=new Map;for(let e of c[n]){if(e.raw===0n)continue;let t=r.get(e.mint)??{raw:0n,decimals:e.decimals};t.raw+=e.raw,r.set(e.mint,t)}for(let[i,{raw:a,decimals:o}]of r){if(i===`So11111111111111111111111111111111111111112`)continue;let r=u.get(i);if(r&&Fm(r)){f++;continue}let c=e===100?a:a*BigInt(Math.round(e*100))/10000n;if(c===0n)continue;let l=d.get(i)??{mint:i,label:r?Pm(r):Tf(i),logo:r?.logo,usd:null,rows:[]};r?.usd!=null&&(l.usd=(l.usd??0)+r.usd),l.rows.push({wallet:t,balance:s[n],raw:a,sell:c,decimals:o}),d.set(i,l)}});let p=[...d.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),m=e=>e===0?`Main`:`#${e}`,h=e=>e.balance>=Nh,g=e=>e.rows.filter(h);if(K(`
    <h1>Sell all coins</h1>
    ${p.length?`<h2>Selling ${e===100?`everything`:`${e}% of each`} · <span id="picked"></span></h2>
           <p class="muted">Every coin is checked. Untick any you want to keep.</p>
           <ul class="list coins">${p.map((e,t)=>{let n=e.rows.filter(e=>!h(e));return`<li><input type="checkbox" class="coinbox" data-i="${t}" ${g(e).length?`checked`:`disabled`}>${Fn(e.label,e.logo)}<div class="grow"><b>${Q(e.label)}</b><small>from ${g(e).map(e=>m(e.wallet.index)).join(`, `)||`no wallet`}${n.length?`</small><small class="error">${n.map(e=>m(e.wallet.index)).join(`, `)}: not enough SOL for the fee, skipped`:``}</small></div><div class="right">${e.usd===null?``:Nm(e.usd)}</div></li>`}).join(``)}</ul>
           ${f?`<p class="muted">${f} junk coin${f===1?``:`s`} left alone: worthless ads strangers send to wallets.</p>`:``}
           ${e===100?`<p class="muted">Afterwards each wallet closes its empty coin accounts and gets their ~0.002 SOL deposits back.</p>`:``}
           ${t?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold coins keep ${H(sm)} SOL to sell them later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Sales go through one at a time, so prices can move along the way.</p>
           <button id="go" class="primary">Enter PIN and sell everything</button>`:`<p class="warning">${n?`Those wallets don't hold any coins.`:`Your wallets don't hold any coins to sell.`}</p>`}
    <button id="cancel">Cancel</button>`),In(),J(`cancel`,X),!p.length)return;let _=Array.from(document.querySelectorAll(`.coinbox`)),v=()=>_.filter(e=>e.checked).map(e=>p[Number(e.dataset.i)]),y=()=>{let e=v().length;q(`picked`).textContent=`${e} coin${e===1?``:`s`}`,q(`go`).disabled=e===0};_.forEach(e=>e.addEventListener(`change`,y)),y(),J(`go`,()=>{let n=v().map(e=>({...e,rows:g(e)}));n.length&&Wf(`Enter your PIN to sell everything`,r=>Qh(r,i,n,e,t))})}async function Qh(e,t,n,r,i){let a=[...new Map(n.flatMap(e=>e.rows.map(e=>[e.wallet.index,e.wallet]))).values()].sort((e,t)=>e.index-t.index),o=Qf(e,Math.max(...a.map(e=>e.index))+1),s=e=>e===0?`Main`:`#${e}`,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;K(`
    <h1>Selling everything…</h1>
    ${zt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${n.map((e,t)=>`<h2>${Q(e.label)}</h2><ul class="list">${e.rows.map(e=>`<li><span>${s(e.wallet.index)}</span><code id="status-${t}-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>`).join(``)}
    <div id="cleanup"></div>
    <div id="after"></div>`),yf();let l=0,u=0,d=0,f=0,p=new Map(n.map(e=>[e.mint,{jupiter:null}])),m=r===100||i;m&&(q(`cleanup`).innerHTML=`<h2>Cleaning up</h2><ul class="list">${a.map(e=>`<li><span>${s(e.index)}</span><code id="clean-${e.index}">waiting</code></li>`).join(``)}</ul>`),await xh(a,Dm,async e=>{let a=o[e.index],s=n.flatMap((t,n)=>t.rows.filter(t=>t.wallet.index===e.index).map(e=>({coin:t,ci:n,row:e})));for(let[e,{coin:t,ci:n,row:i}]of s.entries()){let o=(e,t)=>q(`status-${n}-${e}`).innerHTML=t;u++;let s=e===0?Om(a.address):void 0;await Xh(i,t.mint,a,r,p.get(t.mint),o,c,s)&&l++}if(!m)return;let h=q(`clean-${e.index}`),g=i&&e.index!==0;try{let n=0,i=[],o=new Set(s.map(e=>e.coin.mint));for(let t=0;t<5&&([[n],i]=await Promise.all([ml([e.address]),Bl(e.address)]),!(r!==100||i.every(e=>!o.has(e.mint)||e.raw===0n)));t++)await new Promise(e=>setTimeout(e,500));let l=Ch(n,i,g);if(!l){h.textContent=`nothing to do`;return}h.textContent=g?`sending to main…`:`getting deposits back…`;let u=await wh(a,t,l);d+=l.send,f+=l.refund,h.innerHTML=`${l.send?`sent ${H(l.send)} SOL to main`:`got back ${H(l.refund)} SOL in deposits`} · ${c(u,`view`)}`}catch(e){h.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),Wu([t.address,...a.map(e=>e.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),Zt(l?`success`:`error`),l&&await jn(`PRINTED`),q(`after`).innerHTML=`<p><b>Done: ${l} of ${u} sales went through.</b>${f?` Got back ${H(f)} SOL in deposits.`:``}${d?` Sent ${H(d)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,eg(),J(`holdings`,()=>th().catch($)),J(`home`,X)}async function $h(e,t,n,r,i,a,o){for(let s=0;;s++){let{slippage:c,share:l}=Ca[s],u;try{u=await r(c,l)}catch(e){throw Error(`${n} · ${Z(e)}`)}try{return await Kl(await Em(u,i,a(c),s===0?o:void 0))}catch(r){if(/custom program error: 0x17af\b/.test(Z(r)))throw Error(`Nothing was spent. This coin is priced in another coin (like PUMP) instead of SOL, and pump.fun's SOL route can't buy or sell it. Jupiter couldn't either (${n??`no route`}). Try again later, once Jupiter lists it, or trade it on pump.fun itself.`);let i=Ca[s+1];if(!(r instanceof Gl&&r.slippage&&i))throw r;t(e,`price jumped, trying again with ${i.slippage}% room…`)}}}function eg(){document.querySelectorAll(`.tx:not([data-bound])`).forEach(e=>{e.dataset.bound=`1`,e.addEventListener(`click`,t=>{t.preventDefault(),$t(Ql(e.dataset.sig))})})}function Q(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var tg=4;function ng(e){return e.index===0?`Main`:`#${e.index}`}function rg(e,t){let n=Math.min(t,20),[r,i=``]=e.toFixed(n).split(`.`);return BigInt(r+i)*10n**BigInt(t-n)}function ig(e,t){K(`
    <h1>${Q(e)}</h1>
    <p class="warning">${t}</p>
    <button id="home" class="primary">Back to my wallets</button>`),J(`home`,X)}async function ag(e,t){G(`send:${JSON.stringify(e)}`,()=>ag(e,t));let n=await rp();if(!n)return X();let[r]=n,i;if(/^\d+$/.test(e.to)){let t=n[Number(e.to)];if(!t)return ig(`No such wallet`,`You don't have #${Q(e.to)}. Your wallets go from main to #${n.length-1}.`);i={address:t.address,label:ng(t),mine:t}}else{let t=n.find(t=>t.address===e.to);if(t)i={address:t.address,label:ng(t),mine:t};else{if(!Dh(e.to)||!Cl(e.to))return ig(`Not a wallet address`,`That address can't receive SOL or coins: it isn't a normal wallet. Nothing was sent.`);Y(`Checking the address…`);let t=await Al(e.to);if(t&&t.owner!==`11111111111111111111111111111111`)return ig(`Not a wallet address`,`That address belongs to a coin or a program, not a person's wallet. Anything sent there would be lost, so nothing was sent.`);i={address:e.to,label:Tf(e.to),mine:null}}}let a=e.what===`sol`?`sol`:e.what===`*`?`all`:`coin`,o=[],s=n.filter(t=>t!==i.mine&&(!e.only||e.only.includes(t.index))&&!(e.side&&t.index===0));if(e.only){let t=e.only.filter(e=>e>=n.length);t.length&&o.push(`You don't have ${t.map(e=>`#${e}`).join(`, `)}.`)}else a===`sol`&&e.amount!==null&&i.mine?.index!==0&&!e.side&&(s=[r]);if(!s.length)return ig(`Nothing to send from`,`There's no other wallet to send from.`);let c=t;if(a===`coin`&&!c){Y(Dh(e.what)?`Finding the coin in your wallets…`:`Looking for ${Q(e.what)} in your wallets…`);let t=await Ah(e.what,n);if(!t.length)return ig(`Coin not found`,`None of your wallets hold a coin called <b>${Q(e.what)}</b>. Check the name in <b>holdings</b>, or use the coin's address.`);if(t.length>1)return K(`
        <h1>Which ${Q(e.what)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${t.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${Tf(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(n=>n.addEventListener(`click`,()=>ag(e,t[Number(n.dataset.i)]).catch($))),J(`home`,X);c=t[0]}Y(`Checking what each wallet holds…`);let[l,[u]]=await Promise.all([Ju(s.map(e=>e.address)),ml([i.address])]),d=l.map(e=>e.lamports),f=l.map(e=>e.accounts),p=a===`all`?await Promise.all(l.map(e=>Zu(e))):[],m=new Map;p.flat().forEach(e=>m.set(e.mint,e));let h=new Set([...m.values()].filter(Fm).map(e=>e.mint)),g=e=>f[e].some(e=>e.raw>0n&&!h.has(e.mint)),_=s.map((e,t)=>({wallet:e,balance:d[t],coins:[],sol:0,allSol:!1,skipped:[]}));if(a!==`sol`){if(_.forEach((t,n)=>{for(let r of f[n]){if(r.raw===0n||h.has(r.mint)||c&&r.mint!==c.mint)continue;let n=m.get(r.mint),i=e.pct?r.raw*BigInt(Math.round(e.pct*100))/10000n:r.raw;i>0n&&t.coins.push({account:r,amount:i,label:c?.label??(n?Pm(n):Tf(r.mint)),opens:0})}}),a===`coin`&&e.amount!==null){let t=_.flatMap(e=>e.coins.map(t=>({r:e,c:t}))).sort((e,t)=>t.c.account.raw>e.c.account.raw?1:-1),n=t[0]?.c.account.decimals??0,r=rg(e.amount,n),i=t.reduce((e,t)=>e+t.c.account.raw,0n);if(r>i)return ig(`Not enough coins`,`${e.only?`Those wallets`:`Your wallets`} hold ${kh(i,n)} ${Q(c.label)}, less than the ${Mm(e.amount)} you asked to send. Nothing was sent.`);for(let{r:e,c:n}of t)n.amount=r<n.account.raw?r:n.account.raw,r-=n.amount,n.amount===0n&&(e.coins=e.coins.filter(e=>e!==n))}let t=new Map;for(let e of _)for(let n of e.coins)t.set(n.account.mint,El(i.address,n.account.mint,n.account.program));let n=[...t.keys()],r=n.length?await ml(n.map(e=>t.get(e))):[],o=new Set(n.filter((e,t)=>r[t]>0));for(let e of _){for(let t of e.coins)o.has(t.account.mint)||(t.opens=t.account.lamports,o.add(t.account.mint));let t=Math.ceil(e.coins.length/tg),n=e.coins.slice(0,tg).reduce((e,t)=>e+t.opens,0);e.coins.length&&e.balance<n+t*5e3&&(e.skipped.push(`not enough SOL to move its coins (needs about ${H(n+t*zc)} SOL to open the coin's account at ${Q(i.label)}, has ${H(e.balance)})`),e.coins=[])}}let v=e=>{let t=Math.ceil(e.coins.length/tg),n=e.coins.reduce((e,t)=>e+(t.amount===t.account.raw?t.account.lamports:0),0);return e.balance-t*zc-e.coins.reduce((e,t)=>e+t.opens,0)+n};if(a===`sol`||a===`all`){if(_.forEach((t,n)=>{let r=(a===`sol`||t.skipped.length>0)&&g(n),i=r?sm:0,o=v(t)-zc-i;if(o<=0){a===`sol`&&r&&t.balance>5e3&&t.skipped.push(`keeps its ${H(t.balance)} SOL: it holds coins and needs ${H(sm)} SOL to sell them`);return}let s=e.pct?Math.floor(o*e.pct/100):o;e.pct&&v(t)-5e3-s<Math.max(890880,i)&&(s=v(t)-zc-Math.max(Bc,i)),s>=5e4&&(t.sol=s),t.allSol=!e.pct&&e.amount===null}),a===`sol`&&e.amount!==null){let t=Math.round(e.amount*V),n=[..._].sort((e,t)=>t.sol-e.sol),r=n.reduce((e,t)=>e+t.sol,0);if(t>r)return ig(`Not enough SOL`,`${s.length===1?ng(s[0]):`Those wallets`} can send at most ${H(r)} SOL after fees${_.some((e,t)=>g(t))?` (wallets holding coins keep ${H(sm)} SOL to sell them)`:``}. Nothing was sent.`);for(let e of n){let n=Math.min(t,e.sol),r=e.balance-zc-n;n>0&&r>0&&r<890880&&(n=Math.max(0,e.balance-zc-Bc)),e.sol=n,t-=n}if(t>0)return ig(`Can't send that exact amount`,`Solana makes a wallet keep at least ${H(Bc)} SOL or nothing at all, so that amount doesn't fit. Try a slightly smaller amount, or "all". Nothing was sent.`)}let t=u;for(let e of[..._].sort((e,t)=>t.sol-e.sol))e.sol&&(t+e.sol<890880?(e.skipped.push(`its ${H(e.sol)} SOL is too little to start an empty wallet (Solana needs ${H(Bc)} SOL)`),e.sol=0):t+=e.sol)}let y=_.filter(e=>e.coins.length||e.sol),b=_.filter(e=>e.coins.length||e.sol||e.skipped.length),x=y.reduce((e,t)=>e+t.sol,0),S=y.reduce((e,t)=>e+t.coins.reduce((e,t)=>e+t.opens,0),0),C=a===`sol`?e.amount===null?e.pct?`Send ${e.pct}% of the SOL`:`Send all the SOL`:`Send ${Mm(e.amount)} SOL`:a===`all`?`Send everything`:`Send ${e.amount===null?e.pct?`${e.pct}% of `:`all `:Mm(e.amount)+` `}${Q(c.label)}`,w=e=>{let t=e.coins.slice(0,3).map(e=>`${kh(e.amount,e.account.decimals)} ${Q(e.label)}`);return e.coins.length>3&&t.push(`${e.coins.length-3} more coin${e.coins.length===4?``:`s`}`),t.join(`<br>`)},T=a===`all`?_.reduce((e,t,n)=>e+f[n].filter(e=>e.raw>0n&&h.has(e.mint)).length,0):0;K(`
    <h1>${C}</h1>
    <div class="card"><div class="label">To ${Q(i.label)}${i.mine?.name?` · ${Q(i.mine.name)}`:``}</div><div class="address" id="dest"></div></div>
    ${i.mine?``:`<p class="warning">This isn't one of your wallets. Check every letter of the address: sends can't be undone.</p>`}
    ${b.length?`<ul class="list">${b.map(e=>`<li><span>${ng(e.wallet)}</span><code>${[w(e),e.sol?`${H(e.sol)} SOL`:``].filter(Boolean).join(`<br>`)||`nothing`}${e.skipped.length?`<br><small class="error">${e.skipped.join(`<br>`)}</small>`:``}</code></li>`).join(``)}</ul>`:``}
    ${y.length&&x?`<p><b>SOL to ${Q(i.label)}: ${H(x)}</b></p>`:``}
    ${o.length?`<p class="muted">${o.join(` `)}</p>`:``}
    ${S?`<p class="muted">${Q(i.label)} doesn't have an account for some of these coins yet. Opening one costs about 0.002 SOL each (${H(S)} SOL in all), paid by the sending wallet. Emptied coin accounts are closed, so senders get their own deposits back.</p>`:``}
    ${a===`sol`&&e.amount===null?`<p class="muted">Wallets that still hold coins keep ${H(sm)} SOL so they can sell them later.</p>`:``}
    ${T?`<p class="muted">${T} junk coin${T===1?``:`s`} left behind: worthless ads strangers send to wallets.</p>`:``}
    ${y.length?`<button id="go" class="primary">Enter PIN and send</button>`:`<p class="warning">There's nothing to send${b.length?` (see above)`:e.only?` from those wallets`:``}.</p>`}
    <button id="cancel">Cancel</button>`),q(`dest`).textContent=i.address,J(`cancel`,X),y.length&&J(`go`,()=>Wf(`Enter your PIN to send`,e=>og(e,i,y,h,u).catch($)))}async function og(e,t,n,r,i){let a=Qf(e,Math.max(...n.map(e=>e.wallet.index))+1);K(`
    <h1>Sending to ${Q(t.label)}…</h1>
    ${zt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${ng(e.wallet)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),yf();let o=e=>q(`status-${e.wallet.index}`),s=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,c=async e=>{let t=await Kl(e),n=await Yl(t);if(n!==`confirmed`)throw Error(`${n===`failed`?`failed`:`is taking long`} (${t})`);return t},l=0,u=0,d=async e=>{let n=a[e.wallet.index],i=[],d=!0;try{for(let r=0;r<e.coins.length;r+=tg){let a=e.coins.slice(r,r+tg);o(e).innerHTML=[...i,`sending ${a.map(e=>Q(e.label)).join(`, `)}…`].join(`<br>`);let l=a.flatMap(e=>{let r=El(t.address,e.account.mint,e.account.program);return[Ol(n.address,r,t.address,e.account.mint,e.account.program),kl(e.account,r,n.address,e.amount),...e.amount===e.account.raw?[xl(e.account,n.address,n.address)]:[]]}),u=await c(vl(n,l,await Hl()));i.push(`✓ ${a.map(e=>`${kh(e.amount,e.account.decimals)} ${Q(e.label)}`).join(`, `)} · ${s(u)}`)}if(e.sol){o(e).innerHTML=[...i,`sending SOL…`].join(`<br>`);let a,l=e.sol,[[d,f],p]=await Promise.all([ml([n.address,t.address]),Bl(n.address)]);if(e.allSol){let e=Ch(d,p,!0,r);if(!e||!e.send)throw Error(`no SOL left to send`);if(f+e.send<890880)throw Error(`${H(e.send)} SOL is too little to start an empty wallet`);l=e.send,a=await wh(n,t,e)}else{if(d<l+5e3)throw Error(`only ${H(d)} SOL there now`);a=await c(vl(n,[bl(n.address,t.address,l)],await Hl()))}u+=l,i.push(`✓ ${H(l)} SOL · ${s(a)}`)}}catch(e){d=!1,i.push(`<span class="error">✗ ${Q(Z(e))}</span>`)}o(e).innerHTML=i.join(`<br>`),eg(),d&&l++},f=[...n].filter(e=>e.sol).sort((e,t)=>t.sol-e.sol)[0],p=n.filter(e=>e.coins.some(e=>e.opens>0)||e===f&&i<890880);await xh(p,Dm,d),await xh(n.filter(e=>!p.includes(e)),Dm,d),Wu([t.address,...n.map(e=>e.wallet.address)]).catch(()=>{}),a.forEach(e=>e.secret.fill(0)),Zt(l?`success`:`error`),l&&await jn(`SENT`),q(`after`).innerHTML=`<p><b>Done: ${l} of ${n.length} wallet${n.length===1?``:`s`} sent.</b>${u?` ${H(u)} SOL went to ${Q(t.label)}.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,eg(),J(`holdings`,()=>th().catch($)),J(`home`,X)}function sg(){G(`remove`,sg),K(`
    <h1>Remove wallets from this phone?</h1>
    <p class="warning">If you haven't written down your 12 words, any money in these wallets will be lost forever.</p>
    <p>Type <b>REMOVE</b> to confirm.</p>
    <input id="confirm" autocapitalize="characters" autocomplete="off">
    <p id="error" class="error" hidden></p>
    <button id="yes" class="danger">Remove</button>
    <button id="no" class="primary">Keep my wallets</button>`),J(`no`,X),J(`yes`,async()=>{if(q(`confirm`).value.trim()!==`REMOVE`)return Ef(`Type REMOVE to confirm.`);await Hd(Id),await N.remove(Ld),await Hd(Rd),await N.remove(Ud),ip(),Gf=[],Af()})}function $(e){console.error(e);let t=e instanceof Error?e.message:String(e);K(`
    <h1>Something went wrong</h1>
    <p>Please send a screenshot of this screen to the bot's owner.</p>
    <pre class="details"></pre>
    <button id="retry" class="primary">Start over</button>`),document.querySelector(`.details`).textContent=`${t}\nTelegram ${M?.version??`?`} on ${M?.platform??`?`}`,J(`retry`,()=>Af().catch($))}window.addEventListener(`unhandledrejection`,e=>$(e.reason)),window.addEventListener(`error`,e=>$(e.error??e.message));var cg=`showUsd`,lg=!1,ug=null,dg=new Map,fg=(e,t,n=``)=>`<span class="coinamt" data-mint="${e}" data-amt="${t}">${Mm(t)}${n}</span>`;function pg(e,t){t>0&&dg.get(e)!==t&&(dg.set(e,t),lg&&vg())}var mg=/(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?\s?SOL\b(?: · \$[\d,]+(?:\.\d+)?)?/g,hg=`button, input, textarea, a, .keypad, .amountbox, .solamt, .coinamt, .pnl, script, style`,gg=e=>e<.01&&e>0?`$${e.toFixed(4)}`:Nm(e);function _g(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];for(let e=t.nextNode();e;e=t.nextNode()){let t=e;t.data.includes(`SOL`)&&!t.parentElement?.closest(hg)&&n.push(t)}for(let e of n){let t=e.data,n=[],r=0;for(let e of t.matchAll(mg)){let i=t[e.index-1];if(i&&/[\w$.]/.test(i))continue;n.push(t.slice(r,e.index));let a=document.createElement(`span`);a.className=`solamt`,a.dataset.sol=(e[1]+(e[2]??``)).replace(/,/g,``),a.dataset.orig=e[0],a.textContent=e[0],n.push(a),r=e.index+e[0].length}n.length&&(n.push(t.slice(r)),e.replaceWith(...n))}}function vg(){_g(lf),document.querySelectorAll(`.solamt`).forEach(e=>{let t=Number(e.dataset.sol);e.dataset.orig??=`${H(t*V)} SOL`;let n=lg&&ug?gg(t*ug):e.dataset.shown===`usd`?e.dataset.orig:null;n!==null&&e.textContent!==n&&(e.textContent=n),e.dataset.shown=lg&&ug?`usd`:`sol`,e.classList.toggle(`usd`,lg&&!!ug)}),document.querySelectorAll(`.coinamt`).forEach(e=>{let t=dg.get(e.dataset.mint),n=lg&&!!t;e.dataset.orig??=e.textContent??``;let r=n?gg(Number(e.dataset.amt)*t):e.dataset.shown===`usd`?e.dataset.orig:null;r!==null&&e.textContent!==r&&(e.textContent=r),e.dataset.shown=n?`usd`:`coin`,e.classList.toggle(`usd`,n)})}function yg(e){e&&e!==ug&&(ug=e,lg&&vg())}async function bg(){W&&yg(await mf(!0)??(await ga(W,[`So11111111111111111111111111111111111111112`],!0)).get(`So11111111111111111111111111111111111111112`)??null)}function xg(){let e=!1;new MutationObserver(()=>{e||(e=!0,queueMicrotask(()=>{e=!1,vg()}))}).observe(lf,{childList:!0,subtree:!0,characterData:!0}),lf.addEventListener(`click`,async e=>{let t=e.target.closest?.(`.solamt, .coinamt`);if(t){if(e.preventDefault(),e.stopPropagation(),ug||await bg().catch(()=>{}),!(t.classList.contains(`coinamt`)?dg.has(t.dataset.mint):ug)&&!lg)return Zt(`error`);P(),lg=!lg,vg(),N.set(cg,lg?`1`:``).catch(()=>{})}},!0),Gt()&&(N.get(cg).then(async e=>{e===`1`&&(lg=!0,await bg(),vg())}).catch(()=>{}),setInterval(()=>{lg&&!document.hidden&&bg().catch(()=>{})},6e4))}Qd||(xg(),Af().catch($));