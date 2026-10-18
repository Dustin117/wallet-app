var e=1024,t=2157,n={base:0,plate:2157,coins:4314,mask:{y:4486,w:512,h:1079}},r=[{sx:0,w:70,h:100,x:440,y:1095},{sx:70,w:48,h:144,x:465,y:1264},{sx:118,w:104,h:172,x:297,y:1401},{sx:222,w:46,h:150,x:388,y:1463},{sx:268,w:82,h:144,x:565,y:1462},{sx:350,w:86,h:150,x:492,y:1568},{sx:436,w:60,h:96,x:613,y:1384},{sx:496,w:66,h:116,x:335,y:1692}],i=[0,240,255],a=[255,43,214],o=[57,255,136],s=[255,59,107],c=[255,184,0],l=[i,a,o,s],u=(e,t=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${t})`;function d(e){let t=(e%4+4)%4,n=Math.floor(t),r=t-n,i=l[n],a=l[(n+1)%4];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}var f=`01$#%&@*+=<>?/\\|{}[];:~^`,p=e=>`700 ${e}px ui-monospace, Menlo, Consolas, "DejaVu Sans Mono", monospace`,m=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296},h=(e,t=0)=>{let n=Math.floor(e),r=e-n,i=r*r*(3-2*r),a=m(n+t*7919);return(a+(m(n+1+t*7919)-a)*i)*2-1},g=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),_=(e,t,n)=>{let r=g((n-e)/(t-e));return r*r*(3-2*r)},v=e=>1-(1-g(e))**3,y=e=>(e=g(e),e<.5?4*e*e*e:1-(-2*e+2)**3/2),b=(e,t)=>Object.assign(document.createElement(`canvas`),{width:e,height:t}),x={x:462,y:740,rx:222,ry:400},S={x:462,y:900,z:-30},C=175,w=58,T={x0:345,x1:624,y0:622,y1:834},E={x:362,y:664,w:246,h:142,r:18},D=2400,O={x:772,y:1445,rx:112,ry:142},k={x:762,y:1592},ee=70,te={x:838,y:1618},A={x:727,y:1437,rx:32,ry:72},ne=[{x:40,y:112,w:450,h:140},{x:30,y:252,w:218,h:400}],re=13,ie={x:818,y:108,w:184,h:395},ae=[[735,1310],[790,1316],[830,1333],[851,1325],[868,1343],[867,1386],[852,1421],[850,1500],[842,1550],[832,1588],[862,1600],[882,1640],[890,1750],[888,1850],[882,1930],[874,2012],[840,2033],[798,2022],[790,1942],[780,1904],[700,1908],[678,1882],[638,1862],[622,1800],[626,1650],[643,1603],[688,1583],[676,1550],[670,1480],[670,1400],[683,1348],[703,1322]],oe=r.map(e=>({...e,cx:e.x+e.w/2,cy:e.y+e.h/2,rx:(e.w-16)/2,ry:(e.h-16)/2})),se=[5,2,4,3,6,1,0,7],ce=.75,le={x:518,y:1010},j={x0:400,x1:614,y0:836,y1:1962,cw:13,ch:17},ue=Math.floor((j.x1-j.x0)/j.cw),de=Math.floor((j.y1-j.y0)/j.ch),fe={x:380,y:816,w:254,h:1166},pe=14,me=18,he=`01$#%&@*+=<>?/\\|{}[];:~^ABCDEFXYZ27`,ge=35,_e=.75,ve=Math.round(e*_e),ye=Math.round(t*_e),be=null,xe=!1,Se=0,Ce=null,we=[],Te=null,Ee=new Float32Array(ue*de),De=null,Oe=null,ke=null,Ae=[],je=[];function Me(){if(be||Date.now()<Se)return;let e=new Image;be=e,e.onerror=()=>{be===e&&(be=null),Se=Date.now()+2e3},e.onload=()=>{try{Pe(e),xe=!0}catch{be===e&&(be=null),Se=Date.now()+2e3}},e.src=`./hacker-2.webp`}var Ne=Me;function Pe(e){Ce=b(ve,ye);let t=Ce.getContext(`2d`,{willReadFrequently:!0});t.drawImage(e,0,n.mask.y,n.mask.w,n.mask.h,0,0,ve,ye);let r=t.getImageData(0,0,ve,ye),i=[{x0:ve,y0:ye,x1:0,y1:0},{x0:ve,y0:ye,x1:0,y1:0}],a=1250*_e;for(let e=0;e<ye;e++)for(let t=0;t<ve;t++){let n=(e*ve+t)*4,o=r.data[n];if(r.data[n+3]=o,r.data[n]=r.data[n+1]=r.data[n+2]=0,o>2){let n=i[e<a?0:1];t<n.x0&&(n.x0=t),e<n.y0&&(n.y0=e),t>n.x1&&(n.x1=t),e>n.y1&&(n.y1=e)}}t.putImageData(r,0,0),we=i.filter(e=>e.x1>e.x0).map(e=>({x:e.x0/_e-4,y:e.y0/_e-4,w:(e.x1-e.x0)/_e+8,h:(e.y1-e.y0)/_e+8}));for(let t of oe){let r=b(t.w,t.h),i=r.getContext(`2d`,{willReadFrequently:!0});i.drawImage(e,t.sx,n.coins,t.w,t.h,0,0,t.w,t.h);let a=i.getImageData(0,0,t.w,t.h),o=new Float32Array(t.w*t.h),s=new Float32Array(t.w*t.h);for(let e=0;e<t.h;e++)for(let n=0;n<t.w;n++){let r=(n-t.w/2)/(t.rx+4),i=(e-t.h/2)/(t.ry+4);o[e*t.w+n]=1-_(.88,1.08,Math.sqrt(r*r+i*i));let a=m(Math.floor(n/3)*131+Math.floor(e/3)*977+t.cx),c=m(Math.floor(n/7)*71+Math.floor(e/7)*313+t.cy);s[e*t.w+n]=g(.32*a+.18*c+.5*(e/t.h))}Ae.push({src:a,work:i.createImageData(t.w,t.h),a:o,n:s,cv:r,edge:b(t.w,t.h),p:0,drawnP:-1})}let s=[[436,836],[600,836],[600,1e3],[593,1300],[596,1600],[606,1800],[614,1962],[398,1962],[414,1800],[440,1600],[452,1300],[452,1e3]],c=fe,l=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});l.shadowColor=`#fff`,l.shadowBlur=18,l.shadowOffsetX=4e3,l.fillStyle=`#fff`,l.beginPath(),s.forEach(([e,t],n)=>n?l.lineTo(e-c.x-4e3,t-c.y):l.moveTo(e-c.x-4e3,t-c.y)),l.closePath(),l.fill();let d=l.getImageData(0,0,c.w,c.h);Te=b(c.w,c.h);let f=Te.getContext(`2d`),h=f.createImageData(c.w,c.h);for(let e=0;e<c.w*c.h;e++)h.data[e*4+3]=d.data[e*4+3]*.58;f.putImageData(h,0,0);let v=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});v.drawImage(e,c.x,n.base+c.y,c.w,c.h,0,0,c.w,c.h);let y=v.getImageData(0,0,c.w,c.h).data,x=[];for(let e=0;e<ue;e++)for(let t=0;t<de;t++){let n=0,r=0;for(let i=0;i<j.ch;i+=2)for(let a=0;a<j.cw;a+=2)n+=y[((j.y0+t*j.ch+i-c.y)*c.w+(j.x0+e*j.cw+a-c.x))*4],r++;let i=Math.round(j.x0+e*j.cw+j.cw/2-c.x),a=Math.round(j.y0+t*j.ch+j.ch/2-c.y),o=n/r/255*(d.data[(a*c.w+i)*4+3]/255);Ee[e*de+t]=o,x.push(o)}x.sort((e,t)=>e-t);let S=x[Math.floor(x.length*.95)]||1;for(let e=0;e<Ee.length;e++)Ee[e]=g(Ee[e]/S)**.85;let C=e=>{let t=b(490,me),n=t.getContext(`2d`);n.font=p(15),n.textAlign=`center`,n.textBaseline=`middle`,n.shadowColor=e,n.shadowBlur=4,n.fillStyle=e;for(let e=0;e<ge;e++)n.fillText(he[e],e*pe+pe/2,10);return t};De=C(`rgb(235,255,245)`),Oe=C(u(o)),ke=C(`rgb(90,235,255)`);for(let e=0;e<3;e++){let t=b(180,390),n=t.getContext(`2d`),r=n.createImageData(180,390);for(let t=0;t<r.data.length;t+=4)r.data[t]=r.data[t+1]=r.data[t+2]=m(t+e*99991)*255,r.data[t+3]=255;n.putImageData(r,0,0),je.push(t)}}var M=0,Fe=-10,Ie=[],Le=oe.map(()=>-1),Re=0,ze=`RUN`;function Be(){Fe=M,ze=`RUN`,Ie=[],Le.fill(-1),Re=0;for(let e of Ae)e.drawnP=-1}function Ve(){Ie.push(M),Ie.length>12&&Ie.shift(),Re<se.length&&(Le[se[Re++]]=M)}var He=e=>Le[e]<0?0:g((M-Le[e])/ce),Ue=(e,t,n=0)=>{let r=0;for(let i of Ie)r+=Math.exp(-(((e-i-n)/t)**2));return r},We=e=>.17*h(e*.27,1)+.04*h(e*.71,2)+.014*h(e*1.3,3)+.006*h(e*4.1,4);function Ge(e){let t=We(e),n=Ue(e,.14,.05),r=.06+.05*h(e*.23,5)+.012*h(e*1.1,6)+.006*Math.sin(e*11)*Math.max(0,h(e*.31,7))+.025*n,i=.2*t+.02*h(e*.25,8)+.01*h(e*.9,9),a=Math.sin(2*Math.PI*e/3.4)+.25*h(e*.7,5),o=5*Math.sin(2*Math.PI*e/7.3+.6)+2*h(e*.5,6),s=-.9*We(e-.3)+.06*h(e*.2,10),c=.3*s+.012*h(e*1.6,7);return{yaw:t,pitch:r,roll:i,breath:a,sway:o,rLook:s,rTilt:c,rBob:4*Math.sin(e*2*Math.PI*.62)+5*Ue(e,.12,.12),rArm:.035*Math.sin(e*2*Math.PI*.31+1)+.02*h(e*1.2,8),cy:Math.cos(t),sy:Math.sin(t),cp:Math.cos(r),sp:Math.sin(r),cr:Math.cos(i),sr:Math.sin(i),cl:Math.cos(s),sl:Math.sin(s),ct:Math.cos(c),st:Math.sin(c)}}var Ke=(e,t)=>_(T.x0,T.x0+12,e)*(1-_(T.x1-12,T.x1,e))*_(T.y0,T.y0+12,t)*(1-_(T.y1-12,T.y1,t)),qe=(e,t,n,r,i,a,o)=>_(n-o,n+o,e)*(1-_(i-o,i+o,e))*_(r-o,r+o,t)*(1-_(a-o,a+o,t));function Je(e,n,r,i,a=!0){let o=e,s=n,c=0,l=(e-x.x)/x.rx,u=(n-x.y)/x.ry,d=Math.sqrt(l*l+u*u),f=a?1-_(.7,1,d):0;if(f>1e-4){let t=(e-(T.x0+T.x1)/2)/((T.x1-T.x0)/2),i=C*Math.sqrt(Math.max(0,1-d*d))+w*Ke(e,n)*(1+.4*(1-t*t)),a=e-S.x,l=n-S.y,u=i-S.z,p=a*r.cy+u*r.sy,m=-a*r.sy+u*r.cy,h=l*r.cp+m*r.sp,g=-l*r.sp+m*r.cp,_=p*r.cr-h*r.sr+S.x,v=p*r.sr+h*r.cr+S.y,y=g+S.z,b=D/(D-y),E=D/(D-i);o+=f*((_-x.x)*b-(e-x.x)*E),s+=f*((v-x.y)*b-(n-x.y)*E),c=f*y}let p=Math.max(a?1-_(.85,1.08,d):0,(1-_(600,660,e))*_(880,1020,n));if(p>1e-4){let i=(t-n)/t;s-=p*i*5.5*r.breath,o+=p*i*r.sway,o+=p*_(950,1300,n)*(1-_(1500,1900,n))*(e-330)*.004*r.breath}if(a&&e>600&&n>1280){let t=(e-O.x)/O.rx,i=(n-O.y)/O.ry,a=Math.sqrt(t*t+i*i),l=1-_(.86,1.1,a),u=Math.max(l,qe(e,n,628,1560,902,2035,22));if(u>1e-4){let t=e,i=n,d=0,f=qe(e,n,806,1600,898,2030,18)*(1-l);if(f>1e-4){let e=r.rArm*f*_(1600,1700,n),a=t-te.x,o=i-te.y;t=te.x+a*Math.cos(e)-o*Math.sin(e),i=te.y+a*Math.sin(e)+o*Math.cos(e)}if(l>1e-4){let e=ee*Math.sqrt(Math.max(0,1-a*a)),n=t-O.x;t+=l*(n*r.cl+e*r.sl-n),d=l*(-n*r.sl+e*r.cl);let o=t-k.x,s=i-k.y,c=l>=.999?r.ct:Math.cos(r.rTilt*l),u=l>=.999?r.st:Math.sin(r.rTilt*l);t=k.x+o*c-s*u,i=k.y+o*u+s*c}i+=r.rBob*(l>0?1:.4)*_(2040,1500,n)*u,o+=t-e,s+=i-n,c=Math.max(c,d)}}i[0]=o,i[1]=s,i[2]=c}function Ye(n,r,i){let a=r/2/n.s+8/n.s,o=i/2/n.s+8/n.s;return n.cx=g(n.cx,Math.min(a,e/2),Math.max(e-a,e/2)),n.cy=g(n.cy,Math.min(o,t/2),Math.max(t-o,t/2)),n}function Xe(n,r){let i=Math.max(n/e,r/t)*1.01,a=y((M-Fe-.8)/7),o=n/390;return Ye({s:i*(1+.45*a)*(1+.012*Ue(M,.1)),cx:512+36*a,cy:t/2+(925-t/2)*a,ox:(1.3*h(M*.8,11)+.45*h(M*3.1,12))*o,oy:(1.3*h(M*.7,13)+.45*h(M*2.9,14))*o,rot:.0025*h(M*.6,15)},n,r)}var Ze=[0,0,0];function Qe(n,r,i,a){let o=Math.max(n/e,r/t)*1.01,s=n*.68/E.w;Je(E.x+E.w/2,E.y+E.h/2,a,Ze);let c=Math.random()<.12?(Math.random()-.5)*4*(n/390):0;return Ye({s:o+(s-o)*i,cx:e/2+(Ze[0]-e/2)*i,cy:t/2+(Ze[1]+150-t/2)*i,ox:c,oy:0,rot:0},n,r)}var $e=null,et=!1;function tt(){if($e||et)return $e;try{let n=b(2,2),r=n.getContext(`webgl`,{alpha:!1,antialias:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!1})??n.getContext(`experimental-webgl`);if(!r)throw Error(`no WebGL`);let i=(e,t)=>{let n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(r.getShaderInfoLog(n)??`shader`);return n},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,`attribute vec3 aPos; attribute vec2 aUV; uniform vec2 uRes; varying vec2 vUV;
      void main(){ vUV=aUV; vec2 c=aPos.xy/uRes*2.0-1.0; gl_Position=vec4(c.x,-c.y,clamp(-aPos.z/3000.0,-0.99,0.99),1.0); }`)),r.attachShader(a,i(r.FRAGMENT_SHADER,`precision mediump float; varying vec2 vUV; uniform sampler2D uTex; uniform float uGain;
      void main(){ vec4 c=texture2D(uTex,vUV); gl_FragColor=vec4(c.rgb*uGain,c.a); }`)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`link`);r.useProgram(a);let o=(e,t,n,i,a,o)=>{let s=(a+1)*(o+1),c=new Float32Array(s*2),l=new Float32Array(s*2),u=0;for(let r=0;r<=o;r++)for(let s=0;s<=a;s++,u++)c[u*2]=e+n*s/a,c[u*2+1]=t+i*r/o,l[u*2]=s/a,l[u*2+1]=r/o;let d=new Uint16Array(a*o*6);u=0;for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t,r=n+a+1;d.set([n,n+1,r,n+1,r+1,r],u),u+=6}let f={n:s,art:c,pos:new Float32Array(s*3),count:d.length,posBuf:r.createBuffer(),uvBuf:r.createBuffer(),idxBuf:r.createBuffer()};return r.bindBuffer(r.ARRAY_BUFFER,f.uvBuf),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,f.posBuf),r.bufferData(r.ARRAY_BUFFER,f.pos.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,f.idxBuf),r.bufferData(r.ELEMENT_ARRAY_BUFFER,d,r.STATIC_DRAW),f},s=()=>{let e=r.createTexture();return r.bindTexture(r.TEXTURE_2D,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),e};$e={c:n,gl:r,aPos:r.getAttribLocation(a,`aPos`),aUV:r.getAttribLocation(a,`aUV`),uRes:r.getUniformLocation(a,`uRes`),uGain:r.getUniformLocation(a,`uGain`),pic:o(0,0,e,t,Math.round(e/8),Math.round(t/8)),glass:o(E.x,E.y,E.w,E.h,48,28),texPic:s(),texBack:s(),texHud:s()},n.addEventListener(`webglcontextlost`,()=>{$e=null,et=!0})}catch{$e=null,et=!0}return $e}function nt(e,t,n,r,i,a,o,s){let c=Math.cos(r.rot),l=Math.sin(r.rot);for(let e=0;e<t.n;e++){Je(t.art[e*2],t.art[e*2+1],n,Ze,s);let u=(Ze[0]-r.cx)*r.s,d=(Ze[1]-r.cy)*r.s;t.pos[e*3]=i/2+u*c-d*l+r.ox,t.pos[e*3+1]=a/2+u*l+d*c+r.oy,t.pos[e*3+2]=Ze[2]+o}e.gl.bindBuffer(e.gl.ARRAY_BUFFER,t.posBuf),e.gl.bufferSubData(e.gl.ARRAY_BUFFER,0,t.pos)}function rt(e,t,n){let r=e.gl;r.bindTexture(r.TEXTURE_2D,n),r.bindBuffer(r.ARRAY_BUFFER,t.posBuf),r.enableVertexAttribArray(e.aPos),r.vertexAttribPointer(e.aPos,3,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,t.uvBuf),r.enableVertexAttribArray(e.aUV),r.vertexAttribPointer(e.aUV,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.idxBuf),r.drawElements(r.TRIANGLES,t.count,r.UNSIGNED_SHORT,0)}var it=(e,t,n,r=!1)=>{e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)},at=b(ve,ye),ot=at.getContext(`2d`);function st(e){ae.forEach(([t,n],r)=>{let i=760+(t-760)*1.04,a=1670+(n-1670)*1.02;r?e.lineTo(i,a):e.moveTo(i,a)}),e.closePath()}function ct(e){oe.forEach((t,n)=>{let r=Ae[n],i=He(n);if(r.p=i,!(i>=1)){if(r.drawnP!==i){r.drawnP=i;let e=r.work.data,n=r.src.data,a=r.edge.getContext(`2d`),o=i>0?a.createImageData(t.w,t.h):null;for(let a=0;a<t.w*t.h;a++){let t=r.n[a];e[a*4]=n[a*4],e[a*4+1]=n[a*4+1],e[a*4+2]=n[a*4+2],e[a*4+3]=255*r.a[a]*(i<=0?1:_(i,i+.03,t*1.08)),o&&(o.data[a*4]=120,o.data[a*4+1]=255,o.data[a*4+2]=190,o.data[a*4+3]=255*Math.max(0,1-Math.abs(t*1.08-i-.025)/.05)*r.a[a])}r.cv.getContext(`2d`).putImageData(r.work,0,0),o?a.putImageData(o,0,0):a.clearRect(0,0,t.w,t.h)}e.drawImage(r.cv,t.x,t.y)}})}var lt=42;function ut(e,t){e.save(),e.globalCompositeOperation=`lighter`,oe.forEach((n,r)=>{let i=Ae[r],a=Le[r];if(!(a<0||t>a+ce+2.2)){i.p>0&&i.p<1&&(e.globalAlpha=1,e.drawImage(i.edge,n.x,n.y),e.globalAlpha=.45,e.drawImage(i.edge,n.x-2,n.y-2,n.w+4,n.h+4));for(let i=0;i<lt;i++){let o=m(r*7919+i*31+1),s=m(r*7919+i*31+2),c=m(r*7919+i*31+3),l=n.cx+(o-.5)*2*n.rx*.9,u=n.cy+(s-.5)*2*n.ry*.9,d=g(.5*s+.5*m(i*13+r)),f=240+c*260,p=1.1+c*.9,h=t-(a+d*ce);if(h<0||h>p)continue;let v=u-f*h,y=_(0,.6,h),b=l+(le.x-l)*.55*y+Math.sin(h*9+i)*4,x=g((p-h)*2)*_(840,930,v);if(!(x<=.02))for(let n=0;n<4;n++){let r=Math.floor(m(i*17+n*5+Math.floor((t+c)*12))*ge);e.globalAlpha=x*(n===0?1:.55*(1-n/4)),e.drawImage(n===0?De:Oe,r*pe,0,pe,me,b-pe/2,v+n*15-me/2,pe,me)}}}}),e.restore()}function dt(e,t){e.save(),e.globalCompositeOperation=`lighter`;let n=de*j.ch,r=[];for(let i=0;i<ue;i++){let a=j.x0+i*j.cw;r.length=0;for(let e=0;e<3;e++){let a=150+m(i*101+e*7+5)*300,o=8+Math.floor(m(i*31+e*3)*18),s=n+o*j.ch;r.push({head:j.y1-(t*a+m(i*13+e)*s)%s,len:o})}for(let n=0;n<de;n++){let o=Ee[i*de+n];if(o<.015)continue;let s=j.y0+n*j.ch,c=0,l=!1;for(let e of r){let t=(s-e.head)/j.ch;t>=0&&t<e.len&&(c=Math.max(c,(1-t/e.len)**1.5),t<1&&(l=!0))}let u=.35+.65*o,d=o*.07+u*c*(.55+.45*m(i*3+1))+(l?.45*u:0);if(d<.03)continue;let f=l?14:2+m(i*7+n)*3,p=Math.floor(m(i*977+n*131+Math.floor(t*f+m(n*3+i)))*ge),h=l?De:s<1150+m(i*5+n)*500?Oe:ke;e.globalAlpha=g(d*1.15),e.drawImage(h,p*pe,0,pe,me,a,s,j.cw+1,j.ch+1)}}e.restore()}function ft(r,i,l){let f=l===`front`,p=ot;if(p.setTransform(_e,0,0,_e,0,0),p.globalCompositeOperation=`source-over`,p.globalAlpha=1,p.save(),f){p.beginPath();for(let e of we)p.rect(e.x,e.y,e.w,e.h);p.clip()}p.drawImage(be,0,l===`back`?n.plate:n.base,e,t,0,0,e,t),p.drawImage(Te,fe.x,fe.y),ct(p);let h=ne.map(e=>Math.floor(e.h/re)),_=h[0]+h[1],y=_*.32+2.5,b=Math.min(_,(r+4)%y/.32),x=0,S=null;p.fillStyle=`#000`,ne.forEach((e,t)=>{for(let n=0;n<h[t];n++,x++){let t=e.y+n*re;if(x+1<=b)continue;let r=x<b?b-x:0,i=e.w*r;p.fillRect(e.x+i,t,e.w-i,re),r>0&&(S={x:e.x+i,y:t})}});let C=ie,w=r*18%C.h;p.drawImage(be,C.x,n.base+C.y+w,C.w,C.h-w,C.x,C.y,C.w,C.h-w),w>.5&&p.drawImage(be,C.x,n.base+C.y,C.w,w,C.x,C.y+C.h-w,C.w,w),p.globalCompositeOperation=`multiply`,p.fillStyle=`rgb(140,165,255)`,p.fillRect(0,0,e,t);let D=p.createRadialGradient(300,1450,80,300,1450,800);D.addColorStop(0,`rgba(215,150,255,1)`),D.addColorStop(1,`rgba(140,165,255,0)`),p.fillStyle=D,p.fillRect(0,600,650,1557);let O=p.createLinearGradient(600,200,1e3,1950);for(let e=0;e<=8;e++)O.addColorStop(e/8,u(d(r*.45+e*.7)));p.fillStyle=O,p.beginPath(),p.moveTo(612,180),p.lineTo(1024,180),p.lineTo(1024,2040),p.lineTo(640,2040),p.lineTo(640,1290),p.lineTo(612,1e3),p.closePath(),st(p),p.fill(`evenodd`);let k=p.createLinearGradient(400,0,600,0);k.addColorStop(0,`rgba(120,200,255,1)`),k.addColorStop(.5,`rgba(225,255,255,1)`),k.addColorStop(1,`rgba(120,200,255,1)`),p.fillStyle=k,p.fillRect(400,830,200,1130),p.fillStyle=u(o),ne.forEach(e=>p.fillRect(e.x-4,e.y-4,e.w+8,e.h+8)),p.fillStyle=u(a),p.fillRect(35,62,970,48),p.fillStyle=u(s),p.fillRect(C.x-6,C.y-6,C.w+12,C.h+12);let ee=g(Ue(r,.25)),te=[a[0]+(o[0]-a[0])*ee,a[1]+(o[1]-a[1])*ee,a[2]+(o[2]-a[2])*ee];p.save(),p.translate((T.x0+T.x1)/2,(T.y0+T.y1)/2),p.scale(1,(T.y1-T.y0)/(T.x1-T.x0));let ae=p.createRadialGradient(0,0,90,0,0,175);ae.addColorStop(0,u(te)),ae.addColorStop(1,u(te,0)),p.fillStyle=ae,p.fillRect(-300,-300,600,600),p.restore(),p.fillStyle=`rgb(120,240,255)`,p.beginPath(),st(p),p.fill();let oe=p.createRadialGradient(A.x,A.y,8,A.x,A.y,70);oe.addColorStop(0,u(c)),oe.addColorStop(1,`rgba(120,240,255,1)`),p.fillStyle=oe,p.fillRect(640,1340,150,160),p.globalCompositeOperation=`lighter`,p.globalAlpha=.55,p.setTransform(1,0,0,1,0,0),p.drawImage(at,0,0),p.setTransform(_e,0,0,_e,0,0),p.globalAlpha=1;let se=S;se&&Math.floor(r*3)%2==0&&(p.fillStyle=u(o,.9),p.fillRect(se.x+2,se.y+1,8,11)),dt(p,r),ut(p,r),p.globalCompositeOperation=`source-over`;let ce=v((r-Fe-.35)/.3);if(ce>0){p.fillStyle=`rgba(3,6,8,${.8*ce})`,p.beginPath(),p.roundRect(E.x,E.y,E.w,E.h,E.r),p.fill(),p.globalCompositeOperation=`lighter`;let e=p.createRadialGradient(E.x+E.w/2,E.y+E.h/2,60,E.x+E.w/2,E.y+E.h/2,300);e.addColorStop(0,u(o,.22*ce)),e.addColorStop(1,u(o,0)),p.fillStyle=e,p.fillRect(E.x-260,E.y-240,E.w+520,E.h+520),p.strokeStyle=u(o,.3*ce),p.lineWidth=3,p.beginPath(),p.roundRect(E.x-1,E.y-1,E.w+2,E.h+2,E.r+1),p.stroke()}p.globalCompositeOperation=`lighter`;let le=.5+.25*Math.sin(r*3.1)+.9*Ue(r,.1),j=A.x-i.rLook*30,ue=A.y-6;p.save(),p.translate(j,ue),p.scale(1,1.9);let de=p.createRadialGradient(0,0,2,0,0,40);de.addColorStop(0,u([255,250,220],g(.6*le))),de.addColorStop(.35,u(c,g(.45*le))),de.addColorStop(1,u(c,0)),p.fillStyle=de,p.fillRect(-45,-45,90,90),p.restore();let pe=p.createRadialGradient(j,ue,10,j,ue,160);pe.addColorStop(0,u(c,.16*le)),pe.addColorStop(1,u(c,0)),p.fillStyle=pe,p.fillRect(j-170,ue-170,340,340),p.globalCompositeOperation=`source-over`;let me=Math.floor(r/3.3),he=(r-me*3.3-m(me+51)*2.6)/.16;if(he>0&&he<1){let e=Math.sin(Math.PI*he);p.fillStyle=`rgba(6,10,20,0.92)`,p.beginPath(),p.ellipse(A.x,A.y-A.ry+A.ry*e,A.rx+6,A.ry*e+2,0,0,Math.PI*2),p.fill()}p.restore(),f&&(p.setTransform(1,0,0,1,0,0),p.globalCompositeOperation=`destination-in`,p.drawImage(Ce,0,0),p.globalCompositeOperation=`source-over`),p.setTransform(1,0,0,1,0,0)}var pt=1024,mt=592,ht=b(pt,mt),gt=ht.getContext(`2d`),_t=46,vt=54,yt=68,bt=118,xt=new WeakMap,St=e=>e.match(/^\[(ok|\*|!)\]/);function Ct(){let e=[];return document.querySelectorAll(`#loadTerm .tl`).forEach(t=>{let n=(t.firstChild?.textContent??``).replace(/\s+$/,``),r=xt.get(t),i=n.startsWith(`[ok]`);r?r.text!==n&&(i&&!r.text.startsWith(`[ok]`)&&(r.okAt=M,Ve()),r.text=n,r.changed=M):(r={text:n,at:M,changed:M,okAt:-9},xt.set(t,r),i&&(r.okAt=M,Ve())),e.push(r)}),e}var wt=28;function Tt(e){let t=[],n=e;for(;n.length>wt;){let e=n.lastIndexOf(` `,wt);e<wt/2&&(e=wt),t.push(n.slice(0,e)),n=`  `+n.slice(e).trimStart()}return t.push(n),t}function Et(e,t,n,r,o,s,c=16){e.globalCompositeOperation=`lighter`,e.fillStyle=u(i,.22*s),e.fillText(t,n-2.5,r),e.fillStyle=u(a,.18*s),e.fillText(t,n+2.5,r+1),e.shadowColor=u(o,.85*s),e.shadowBlur=c,e.fillStyle=u(o,s),e.fillText(t,n,r),e.shadowBlur=0,e.fillStyle=`rgba(230,255,240,${.35*s})`,e.fillText(t,n,r),e.globalCompositeOperation=`source-over`}function Dt(e,t,n){e.globalCompositeOperation=`destination-in`;let r=e.createRadialGradient(pt/2,mt/2,mt*.3,pt/2,mt/2,pt*.62);r.addColorStop(0,`rgba(0,0,0,1)`),r.addColorStop(.8,`rgba(0,0,0,0.75)`),r.addColorStop(1,`rgba(0,0,0,0.25)`),e.fillStyle=r,e.fillRect(0,0,pt,mt),e.globalCompositeOperation=`source-over`,e.fillStyle=`rgba(0,0,0,0.33)`;for(let t=0;t<mt;t+=5)e.fillRect(0,t,pt,2);e.globalCompositeOperation=`lighter`;let i=pt*(.3-n.yaw*2.2+.03*Math.sin(t*.7)),a=e.createLinearGradient(i-170,0,i+170,mt*.4);a.addColorStop(0,`rgba(255,190,245,0)`),a.addColorStop(.5,`rgba(255,200,245,0.13)`),a.addColorStop(1,`rgba(255,190,245,0)`),e.fillStyle=a,e.beginPath(),e.moveTo(i-120,0),e.lineTo(i+40,0),e.lineTo(i-80,mt),e.lineTo(i-240,mt),e.closePath(),e.fill();let o=e.createLinearGradient(0,0,0,mt*.32);o.addColorStop(0,`rgba(255,170,240,0.12)`),o.addColorStop(1,`rgba(255,170,240,0)`),e.fillStyle=o,e.fillRect(0,0,pt,mt*.32);let s=e.createRadialGradient(pt*1.02,mt*.6,10,pt*1.02,mt*.6,pt*.32);s.addColorStop(0,u(d(t*.45+2),.16)),s.addColorStop(1,u(d(t*.45+2),0)),e.fillStyle=s,e.fillRect(0,0,pt,mt),e.globalCompositeOperation=`destination-in`,e.fillStyle=`#000`,e.beginPath(),e.roundRect(4,4,1016,584,70),e.fill(),e.globalCompositeOperation=`source-over`}function Ot(e,t){let n=gt;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,n.shadowBlur=0,n.fillStyle=`#000`,n.fillRect(0,0,pt,mt);let r=Ct(),i=(e-Fe-.35)/.35;if(i<=0)return;n.save();let l=Math.max(6,mt*v(i));n.beginPath(),n.rect(0,(mt-l)/2,pt,l),n.clip(),i<1&&(n.fillStyle=u(o,.5*(1-i)),n.fillRect(0,(mt-l)/2,pt,l)),n.fillStyle=`rgba(20,255,140,0.028)`,n.fillRect(0,0,pt,mt),n.fillStyle=`rgba(57,255,136,0.05)`;for(let e=32;e<pt;e+=48)n.fillRect(e,0,1.5,mt);for(let e=30;e<mt;e+=48)n.fillRect(0,e,pt,1.5);let d=r.find(e=>e.text.startsWith(`$`))?.text.match(/--([\w-]+)/)?.[1];d&&(ze=d.replace(/-/g,` `).toUpperCase()),n.font=p(28),n.textBaseline=`top`,Et(n,`OBJECTIVE // ${ze}`.slice(0,34),_t,38,o,.75,8),Math.floor(e*2.2)%2==0&&(n.fillStyle=u(a,.95),n.shadowColor=u(a),n.shadowBlur=14,n.beginPath(),n.arc(860,52,10,0,Math.PI*2),n.fill(),n.shadowBlur=0),Et(n,`LIVE`,880,38,a,.85,8),n.fillStyle=u(o,.35),n.fillRect(_t,84,932,2),n.save(),n.beginPath(),n.rect(0,112,pt,346),n.clip(),n.font=p(vt),wt=Math.max(16,Math.floor((932-vt*.6)/n.measureText(`0`).width));let h=[];for(let e of r)Tt(e.text).forEach((t,n)=>h.push({text:t,line:e,first:n===0}));let _=h.slice(-7);_.forEach((t,r)=>{let i=0;for(let t=r+1;t<_.length;t++)i+=v((e-_[t].line.at)/.22);let a=t.line,l=v((e-a.at)/.22),d=390-i*yt+(1-l)*yt*.6;if(d<50)return;let p=g((d-(bt-yt*.6))/(yt*.8)),h=t.text;if(a.text.startsWith(`$`)&&t.first)h=h.slice(0,Math.floor((e-a.at)*26));else{let t=(e-a.changed)/.28;if(t<1){let n=Math.floor(e*30);h=[...h].map((e,r)=>e===` `||m(r*31+n*7)<t*1.4-r/h.length*.4?e:f[Math.floor(m(r+n*13)*24)]).join(``)}}let y=r===_.length-1,b=Math.exp(-(((e-a.okAt)/.12)**2)),x=(y||a===_[_.length-1].line?1:.62)*p*(.85+.15*l),S=t.first?St(h):null,C=_t;if(S){let e=S[1]===`ok`?o:S[1]===`!`?s:c;Et(n,S[0],C,d,e,g(x+b),14+20*b),C+=n.measureText(S[0]).width,Et(n,h.slice(S[0].length),C,d,S[1]===`!`?s:o,g(x+b*.6),14)}else Et(n,h,C,d,o,x,14);b>.02&&(n.globalCompositeOperation=`lighter`,n.fillStyle=u(o,.18*b),n.fillRect(0,d-6,pt,yt),n.globalCompositeOperation=`source-over`),y&&Math.floor(e*3.3)%2==0&&(n.fillStyle=u(o,.9*x),n.shadowColor=u(o),n.shadowBlur=12,n.fillRect(_t+n.measureText(h).width+6,d+5,vt*.55,vt*.86),n.shadowBlur=0)}),n.restore();let y=r.filter(e=>St(e.text)),b=y.filter(e=>!e.text.startsWith(`[*]`)).length,x=Math.max(1,y.length),S=732/x;for(let t=0;t<x;t++){let r=y[t],i=_t+t*S;if(n.fillStyle=u(o,.18),n.fillRect(i+3,510,S-7,18),!r)continue;let a=St(r.text)[1],l=a===`ok`?o:a===`!`?s:c,d=a===`*`?.25+.6*(1-Math.exp(-(e-r.at)/3))+.05*Math.sin(e*6+t):1;n.fillStyle=u(l,a===`*`?.8:.95),n.shadowColor=u(l),n.shadowBlur=12,n.fillRect(i+3,510,(S-7)*d,18),n.shadowBlur=0}y.length&&(n.font=p(34),Et(n,`${b}/${y.length}`,828,500,o,.9,10)),n.restore(),Dt(n,e,t)}var kt=null,At=null,jt=null;function Mt(e,t,n,r,i,a){if(!kt||kt.width!==Math.ceil(n/4)||kt.height!==Math.ceil(r/4)){kt=b(Math.ceil(n/4),Math.ceil(r/4)),At=b(Math.ceil(n/12),Math.ceil(r/12)),jt=b(n,r);let e=jt.getContext(`2d`),t=Math.max(3,Math.round(n/270));e.fillStyle=`rgba(0,0,0,0.17)`;for(let i=0;i<r;i+=t)e.fillRect(0,i,n,t*.4);let i=e.createRadialGradient(n/2,r*.45,n*.35,n/2,r*.5,r*.72);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(1,`rgba(0,0,0,0.6)`),e.fillStyle=i,e.fillRect(0,0,n,r)}e.save(),e.setTransform(1,0,0,1,0,0);let o=kt.getContext(`2d`),s=At.getContext(`2d`);if(o.imageSmoothingEnabled=s.imageSmoothingEnabled=!0,o.drawImage(t,0,0,kt.width,kt.height),s.drawImage(kt,0,0,At.width,At.height),e.globalCompositeOperation=`lighter`,e.globalAlpha=.24*i,e.drawImage(kt,0,0,n,r),e.globalAlpha=.3*i,e.drawImage(At,0,0,n,r),e.globalAlpha=1,e.globalCompositeOperation=`source-over`,a>0)for(let i=0;i<4+a*6;i++){let i=Math.random()*r,o=(4+Math.random()*36)*(n/390);e.drawImage(t,0,i,n,o,(Math.random()-.5)*80*(n/390)*a,i,n,o)}e.drawImage(jt,0,0),je.length&&(e.globalCompositeOperation=`overlay`,e.globalAlpha=.07,e.imageSmoothingEnabled=!1,e.drawImage(je[Math.floor(M*24)%je.length],0,0,n,r),e.imageSmoothingEnabled=!0),e.restore()}function Nt(n,r,i,a,o,s){let c=M,l=tt();if(s?(gt.setTransform(1,0,0,1,0,0),gt.globalCompositeOperation=`source-over`,gt.globalAlpha=1,gt.drawImage(s,0,0,pt,mt),Dt(gt,c,o)):Ot(c,o),n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,!l){ft(c,o,`flat`),n.fillStyle=`#000`,n.fillRect(0,0,r,i);let s=(e,t)=>[r/2+(e-a.cx)*a.s+a.ox,i/2+(t-a.cy)*a.s+a.oy],[l,u]=s(0,0);n.drawImage(at,l,u,e*a.s,t*a.s);let[d,f]=s(E.x,E.y);n.globalCompositeOperation=`lighter`,n.drawImage(ht,d,f,E.w*a.s,E.h*a.s),n.globalCompositeOperation=`source-over`;return}let u=l.gl;(l.c.width!==r||l.c.height!==i)&&(l.c.width=r,l.c.height=i),u.viewport(0,0,r,i),u.uniform2f(l.uRes,r,i),u.uniform1f(l.uGain,1),u.clearColor(0,0,0,1),u.depthMask(!0),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.disable(u.BLEND),ft(c,o,`back`),it(u,l.texBack,at),u.disable(u.DEPTH_TEST),nt(l,l.pic,o,a,r,i,0,!1),rt(l,l.pic,l.texBack),ft(c,o,`front`),it(u,l.texPic,at,!0),u.enable(u.DEPTH_TEST),u.depthFunc(u.LESS),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA),nt(l,l.pic,o,a,r,i,0,!0),rt(l,l.pic,l.texPic),it(u,l.texHud,ht),nt(l,l.glass,o,a,r,i,2,!0),u.depthFunc(u.LEQUAL),u.depthMask(!1),u.blendFunc(u.ONE,u.ONE),rt(l,l.glass,l.texHud),u.disable(u.BLEND),n.drawImage(l.c,0,0)}function Pt(e,t,n){let r=M-Fe;if(r>=.5)return;let i=v((r-.02)/.12),a=v((r-.14)/.3),o=Math.max(3*i,n*a);e.save(),e.fillStyle=`#000`,e.fillRect(0,0,t,(n-o)/2),e.fillRect(0,(n+o)/2,t,(n-o)/2+1),e.fillRect(0,0,t*(1-i)/2,n),e.fillRect(t-t*(1-i)/2,0,t*(1-i)/2+1,n),e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(220,255,240,${(1-a)*.9})`,e.fillRect(t*(1-i)/2,(n-o)/2,t*i,o),e.restore()}var Ft=1;function It(e,t){M+=t,Me();let n=Math.min(2,window.devicePixelRatio||1)*Ft,r=Math.max(2,Math.round((e.clientWidth||390)*n)),i=Math.max(2,Math.round((e.clientHeight||844)*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=e.getContext(`2d`);if(a.setTransform(1,0,0,1,0,0),!xe){a.fillStyle=`#02000a`,a.fillRect(0,0,r,i),Ct();return}let s=Ge(M);Nt(a,r,i,Xe(r,i),s);let c=m(Math.floor(M*6)+909)<.04?.5:0;for(let e of Ie)M-e>0&&M-e<.16&&(c=.8);Mt(a,e,r,i,1,c);let l=Ue(M,.12,.05);l>.01&&(a.globalCompositeOperation=`lighter`,a.fillStyle=u(o,g(.16*l)),a.fillRect(0,0,r,i),a.globalCompositeOperation=`source-over`),Pt(a,r,i)}function Lt(e,t,n,r,i,a,o){if(M+=i,Me(),e.setTransform(1,0,0,1,0,0),!xe){e.fillStyle=`#04010c`,e.fillRect(0,0,n,r);return}let s=Ge(M);Nt(e,n,r,Qe(n,r,a,s),s,o),Mt(e,t,n,r,.8,Math.random()<.15?.6:0)}var Rt=()=>`<div class="hackloader" id="hackloader"><canvas class="hackart" id="hackart" aria-hidden="true"></canvas></div>`,zt=()=>(document.getElementById(`after`)?.childElementCount??0)>0,Bt=!1,Vt=0,Ht=null;function Ut(){let e=document.getElementById(`hackart`);if(e&&e!==Ht&&(Ht=e,Be()),e&&It(e,0),Bt)return;Bt=!0,Vt=0;let t=0,n=e=>{let r=document.getElementById(`hackart`);if(r&&zt()&&(document.getElementById(`hackloader`)?.remove(),document.getElementById(`app`)?.classList.remove(`loading`)),!r||zt())Bt=!1;else{if(r!==Ht&&(Ht=r,Be()),!Vt||e-Vt>=31){let n=Vt?e-Vt:33,i=Math.min(.1,n/1e3);Vt=e,t=n>50&&xe?t+n:0,t>1500&&Ft>.6&&(Ft=Math.max(.6,Ft*.85),t=0),It(r,i)}requestAnimationFrame(n)}};requestAnimationFrame(n)}var N=window.Telegram?.WebApp;function Wt(){return!!N&&N.isVersionAtLeast(`9.0`)&&!!N.SecureStorage}var Gt=15e3;function Kt(e,t,n=Gt){return new Promise((r,i)=>{let a=setTimeout(()=>i(Error(`Telegram didn't respond (${e}).`)),n);try{t((t,n,o)=>{clearTimeout(a),t?i(Error(`${e} failed: ${t}`)):r({value:n,canRestore:!!o})})}catch(t){clearTimeout(a),i(Error(`${e} failed: ${t instanceof Error?t.message:String(t)}`))}})}var qt={get:e=>Kt(`secure read`,t=>N.SecureStorage.getItem(e,t)),set:(e,t)=>Kt(`secure save`,n=>N.SecureStorage.setItem(e,t,n)),remove:e=>Kt(`secure remove`,t=>N.SecureStorage.removeItem(e,t)),restore:e=>Kt(`secure restore`,t=>N.SecureStorage.restoreItem(e,t))},Jt=5e3;async function Yt(e,t){try{return await Kt(e,t,Jt)}catch(n){if(!(n instanceof Error)||!n.message.startsWith(`Telegram didn't respond`))throw n;return Kt(e,t,Jt*2)}}var P={get:async e=>(await Yt(`device read`,t=>N.DeviceStorage.getItem(e,t))).value,set:(e,t)=>Yt(`device save`,n=>N.DeviceStorage.setItem(e,t,n)),remove:e=>Yt(`device remove`,t=>N.DeviceStorage.removeItem(e,t))};function Xt(e){N?.HapticFeedback?.notificationOccurred(e)}function F(){N?.HapticFeedback?.impactOccurred?.(`light`)}function Zt(){N?.HapticFeedback?.impactOccurred?.(`heavy`)}function Qt(e){N?N.openLink(e):window.open(e,`_blank`)}var $t=[57,255,136],en=[0,240,255],tn=[255,43,214],nn=(e,t=1)=>`rgba(${e[0]},${e[1]},${e[2]},${t})`,rn=`SNATCHED`,an=`01$#%&@*+=<>?/\\|`,on=e=>`900 ${e}px Orbitron, Rajdhani, sans-serif`,sn=0,cn=.85,ln=1.25,un=1.65,dn=1.3,fn=3,pn={covered:.32,slam:.4,hacker:1.0333333333333332,final:4.633333333333333},mn=.95/fn,hn=pn.final+mn,gn=hn+.4,_n=e=>1-(1-Math.min(1,Math.max(0,e)))**3,I=(e,t)=>e+Math.random()*(t-e),vn=e=>e[Math.floor(Math.random()*e.length)],yn=e=>[...rn].map(t=>Math.random()<e?vn([...an]):t).join(``);function bn(e,t,n,r,i=document.createElement(`canvas`)){i.width=e,i.height=t;let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=i.getContext(`2d`);o.font=on(100);let s=t=>100*e*r/o.measureText(t).width,c=Math.min(s(rn),s(`SNATCHED`)*1.5,t*.55);return{c:i,ctx:o,wc:a,wctx:a.getContext(`2d`),W:e,H:t,u:n,base:c}}function xn(e,t=0){e.ctx.fillStyle=`#04010c`,e.ctx.fillRect(0,0,e.W,e.H),t>0&&(e.ctx.fillStyle=`rgba(230,255,240,${t})`,e.ctx.fillRect(0,0,e.W,e.H))}function Sn(e,t=.22){e.ctx.fillStyle=`rgba(0,0,0,${t})`;for(let t=0;t<e.H;t+=3*e.u)e.ctx.fillRect(0,t,e.W,e.u)}function Cn(e,t){let{W:n,H:r,u:i,wctx:a,ctx:o}=e,{x:s=n/2,y:c=r/2,size:l=1,rot:u=0,skew:d=0,color:f=$t,split:p=0,slices:m=0,blur:h=0,alpha:g=1}=t,_=t.text??rn;a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,n,r),a.translate(s,c),a.rotate(u),a.transform(1,0,d,1,0,0),a.font=on(e.base*l),a.textAlign=`center`,a.textBaseline=`middle`,a.filter=h>0?`blur(${h*i}px)`:`none`,p&&(a.globalCompositeOperation=`lighter`,a.fillStyle=nn(tn,.85),a.fillText(_,-p*i,0),a.fillStyle=nn(en,.85),a.fillText(_,p*i,p*i*.3)),a.globalCompositeOperation=`source-over`,a.shadowColor=nn(f,.9),a.shadowBlur=30*i,a.fillStyle=nn(f),a.fillText(_,0,0),a.shadowBlur=0,a.fillStyle=`rgba(255,255,255,0.55)`,a.fillText(_,0,0),a.filter=`none`,o.save(),o.globalAlpha=g,o.drawImage(e.wc,0,0);for(let t=0;t<m;t++){let t=I(c-e.base*l*.6,c+e.base*l*.5),r=I(3,22)*i;o.fillStyle=`#04010c`,o.fillRect(0,t,n,r),o.drawImage(e.wc,0,t,n,r,I(-60,60)*i,t,n,r)}o.restore()}var wn=null,Tn=0,En=-1;function Dn(e,t){let{W:n,H:r,ctx:i}=e;wn||(wn=document.createElement(`canvas`),wn.width=Math.ceil(n/4),wn.height=Math.ceil(r/4));let a=wn.getContext(`2d`),o=a.createImageData(wn.width,wn.height),s=o.data;for(let e=0;e<s.length;e+=4){let t=Math.random()*255,n=Math.random();s[e]=n<.05?0:t,s[e+1]=n>.96?40:t,s[e+2]=n>.93&&n<.96?120:t,s[e+3]=255}a.putImageData(o,0,0),t>Tn+.2&&Math.random()<.09&&(Tn=t+I(.08,.22));let c=.5+.5*Math.sin(t*9)*Math.sin(t*3.7),l=t<Tn?I(.38,.58):.08+.2*Math.max(0,c);i.save(),i.imageSmoothingEnabled=!1,i.globalAlpha=l,i.drawImage(wn,0,0,n,r);for(let e=0;e<3;e++){let e=I(0,r),t=I(4,24);i.drawImage(wn,0,e/r*wn.height,wn.width,t/r*wn.height,I(-60,60),e,n,t)}(En<0||t-En>1.1+Math.random()*.6)&&(En=t);let u=(t-En)/.7;if(u<1){let e=-.2*r+u*1.4*r,t=r*.22,a=i.createLinearGradient(0,e,0,e+t);a.addColorStop(0,`rgba(120,255,200,0)`),a.addColorStop(.7,`rgba(160,255,220,0.35)`),a.addColorStop(.75,`rgba(220,255,240,0.6)`),a.addColorStop(1,`rgba(120,255,200,0)`),i.globalAlpha=1,i.globalCompositeOperation=`lighter`,i.fillStyle=a,i.fillRect(0,e,n,t),i.globalCompositeOperation=`source-over`}i.globalAlpha=.5,i.fillStyle=`#000`,i.fillRect(0,(1-t*.8%1.3)*r,n,r*.08),i.restore(),Sn(e,.25)}function On(e,t,n,r=``){let{W:i,H:a,u:o}=e,s=(e,n=0)=>{xn(e,n),r===`g`&&Dn(e,t)};if(e.ctx.setTransform(1,0,0,1,0,0),e.ctx.globalAlpha=1,e.ctx.globalCompositeOperation=`source-over`,t<cn){n(`slam`+r);let c=(t-sn)/.2,l=c<1?2.8-1.8*_n(c):1+(t>.55&&t<.65?.18:0),u=t<.05||t>.55&&t<.59;s(e,u?.9:0),Cn(e,{size:l,y:a/2+(Math.random()<.2?I(-30,30)*o:0),x:i/2+(Math.random()<.2?I(-20,20)*o:0),split:c<1?26:I(3,12),slices:Math.random()<.3?4:0,color:u?[20,0,40]:$t,text:Math.random()<.12?yn(.25):rn}),Sn(e)}else if(t<ln){n(`diag`+r);let c=_n((t-cn)/.15),l=-.38*c,u=1+.35*c;s(e,t-cn<.04?.6:0);for(let t=3;t>=1;t--)Cn(e,{size:u,rot:l,skew:-.25*c,x:i/2-t*22*o*c,y:a/2+t*34*o*c,color:t%2?tn:en,alpha:.09*(4-t)});Cn(e,{size:u,rot:l,skew:-.25*c,split:I(6,16),slices:Math.random()<.4?5:0,color:Math.floor(t*12)%4==0?tn:$t,x:i/2+I(-6,6)*o}),Sn(e)}else if(t<un){let n=(t-ln)/.3999999999999999,r=Math.sin(Math.PI*Math.min(1,n*1.15))*16,c=_n((n-.45)/.55);s(e),Cn(e,{size:1.35-.35*c,rot:-.38*(1-c),skew:-.25*(1-c),blur:r,split:r*.6});for(let t=0;t<3;t++){let r=(n*1.6+t/3)%1*a,s=50*o;e.ctx.drawImage(e.c,0,r,i,s,I(-30,30)*o,r,i,s);let c=e.ctx.createLinearGradient(0,r,0,r+s);c.addColorStop(0,`rgba(180,255,220,0)`),c.addColorStop(.5,`rgba(180,255,220,0.25)`),c.addColorStop(1,`rgba(180,255,220,0)`),e.ctx.fillStyle=c,e.ctx.fillRect(0,r,i,s)}Sn(e,.3)}else{s(e);let t=r===`g`&&Math.random()<.12;Cn(e,{split:t?I(8,16):3,slices:t?4:0,text:t?yn(.3):rn,color:t&&Math.random()<.5?tn:$t,x:i/2+(Math.random()<.3?I(-4,4)*o:0)}),Sn(e)}}var kn=!1;function An(e=`SNATCHED`){if(Zt(),kn||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return setTimeout(Zt,140),Promise.resolve();kn=!0,rn=e;let t=()=>{},n=new Promise(e=>t=e),r=document.createElement(`canvas`);r.className=`snatchfx`,r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,e),document.body.append(r);let i=Math.min(2,window.devicePixelRatio||1),a=bn(Math.round(window.innerWidth*i),Math.round(window.innerHeight*i),i,.88,r),{W:o,H:s,ctx:c}=a,l=bn(640,250,1,.94),u=document.createElement(`canvas`);u.width=o,u.height=s;let d=u.getContext(`2d`),f=document.createElement(`canvas`);f.width=Math.ceil(o/(3*i)),f.height=Math.ceil(s/(3*i));let p=f.getContext(`2d`),m=p.createImageData(f.width,f.height);function h(e,t=`source-over`){if(e<=0)return;let n=m.data;for(let e=0;e<n.length;e+=4){let t=Math.random()*255,r=Math.random();n[e]=r<.04?0:t,n[e+1]=r>.97?40:t,n[e+2]=r>.94&&r<.97?120:t,n[e+3]=255}p.putImageData(m,0,0),c.save(),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation=t,c.globalAlpha=e,c.imageSmoothingEnabled=!1,c.drawImage(f,0,0,o,s);for(let e=0;e<4;e++){let e=I(0,s),t=I(4,26)*i;c.drawImage(f,0,e/s*f.height,f.width,t/s*f.height,I(-80,80)*i,e,o,t)}let r=S*1.7%1.4*s-.2*s;c.globalAlpha=e*.6,c.fillStyle=`#000`,c.fillRect(0,r,o,s*.1),c.restore()}let g=e=>e<.1?.4*(1-e/.1)+.12:Math.random()<.14?I(.22,.36):I(.07,.14),_=Array.from({length:14},(e,t)=>({delay:I(0,.14),from:t%2?1:-1}));function v(e){c.clearRect(0,0,o,s);let t=s/14;_.forEach((n,r)=>{let a=_n((e-n.delay)/.16),s=o*a,l=n.from<0?0:o-s;c.fillStyle=`#04010c`,c.fillRect(l,r*t,s,t+1),a>0&&a<1&&(c.fillStyle=nn(r%3==0?tn:r%3==1?en:$t,.9),c.fillRect(n.from<0?s-4*i:l,r*t,4*i,t+1))}),h(.16,`source-atop`)}function y(e){c.fillStyle=`rgba(230,255,240,${.3*(1-e)})`,c.fillRect(0,0,o,s);for(let e=0;e<5;e++){let e=I(0,s),t=I(6,40)*i;c.drawImage(r,0,e,o,t,I(-50,50)*i,e,o,t)}}function b(e,t){e<.4?(xn(l),Sn(l)):On(l,(e-.4)*dn,()=>{},`g`);let n=Math.min(1,e/(pn.final-pn.hacker)),a=n<.5?4*n*n*n:1-(-2*n+2)**3/2;if(Lt(c,r,o,s,t,a,l.c),Math.random()<.15)for(let e=0;e<3;e++){let e=I(0,s),t=I(4,30)*i;c.drawImage(r,0,e,o,t,I(-30,30)*i,e,o,t)}}let x=performance.now(),S=0,C=1/0,w=new Set,T=e=>{w.has(e)||(w.add(e),Zt())};r.addEventListener(`pointerdown`,()=>{t(),C===1/0&&(C=S)});let E=e=>{let n=(e-x)/1e3,l=Math.min(.1,Math.max(0,n-S));S=n;let f=C<1/0?Math.max(hn,hn+(n-C)):n;if(c.setTransform(1,0,0,1,0,0),c.globalAlpha=1,c.globalCompositeOperation=`source-over`,f<pn.slam)v(f),f>=pn.covered&&t(),f>pn.slam-.06&&(c.fillStyle=`#fff`,c.fillRect(0,s/2-3*i,o,6*i));else if(f<pn.hacker){t(),On(a,(f-pn.slam)*fn,T);let e=(f-pn.slam)*fn,n=Math.min(...[sn,cn,ln].map(t=>e>=t?(e-t)/fn:9));h(g(n))}else if(f<pn.final)T(`hacker`),b(f-pn.hacker,l),Sn(a,.18),f-pn.hacker<.08&&y((f-pn.hacker)/.08),f-pn.hacker<.18&&h(.32*(1-(f-pn.hacker)/.18));else if(f<hn){T(`final`);let e=(f-pn.final)*fn,t=e/.18,n=e>.4&&e<.52;xn(a,e<.04?.8:0),Cn(a,{size:t<1?1.9-.9*_n(t):n?1.25:1,rot:n?.3:0,skew:n?.3:0,split:t<1?20:n?18:2+Math.sin(f*30)*2,slices:n||Math.random()<.1?5:0,color:n?tn:$t}),Sn(a),h(g(f-pn.final)),d.clearRect(0,0,o,s),d.drawImage(r,0,0)}else if(f<gn){t(),w.has(`buffered`)||(w.add(`buffered`),d.getImageData(o>>1,s>>1,1,1).data[3]===0&&(xn(a),Cn(a,{}),d.drawImage(r,0,0)));let e=(f-hn)/(gn-hn),n=Math.max(.004,1-_n(e/.45)),l=e<.45?1:Math.max(.01,1-_n((e-.45)/.35));c.fillStyle=`#04010c`,c.fillRect(0,0,o,s),c.drawImage(u,o/2-o*l/2,s/2-s*n/2,o*l,s*n),c.globalCompositeOperation=`lighter`,c.fillStyle=`rgba(220,255,240,${Math.min(1,e*3)*(1-e)})`,c.fillRect(o/2-o*l/2,s/2-Math.max(2*i,s*n/2),o*l,Math.max(4*i,s*n)),r.style.opacity=e<.6?`1`:String(1-(e-.6)/.4)}else{r.remove(),kn=!1,t();return}requestAnimationFrame(E)};return requestAnimationFrame(E),n}var jn=`@font-face{font-family:Orbitron;font-weight:400 900;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:500;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:700;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}:root{--bg:#05010f;--text:#e8f9ff;--hint:#8f9cc8;--cyan:#00f0ff;--pink:#ff2bd6;--panel:#0a0f24d9;--row:#0c0a22d9;--danger:#ff3b6b;--amber:#ffb800;--button:var(--cyan);--display:"Orbitron", "Rajdhani", sans-serif;--cut:polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));--cut-s:polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px));--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}*{box-sizing:border-box}html{background:var(--bg)}body{min-height:100vh;color:var(--text);-webkit-tap-highlight-color:transparent;background:linear-gradient(#05010f 0%,#0b0420 55%,#1a0633 100%) fixed;margin:0;font:500 17px/1.4 Rajdhani,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body:before{content:"";z-index:0;pointer-events:none;transform-origin:bottom;background:linear-gradient(#ff2bd626 2px,#0000 2px) 0 0/100% 26px,linear-gradient(90deg,#00f0ff38 2px,#0000 2px) 0 0/34px 100%;height:42vh;animation:3s linear infinite floor;position:fixed;bottom:0;left:-50%;right:-50%;transform:perspective(220px)rotateX(58deg);-webkit-mask:linear-gradient(#0000,#000 70%);mask:linear-gradient(#0000,#000 70%)}@keyframes floor{to{background-position:0 26px,0 0}}body:after{content:"";z-index:50;pointer-events:none;background:repeating-linear-gradient(0deg,#ffffff07 0 1px,#0000 1px 3px);position:fixed;inset:0}main{z-index:1;max-width:480px;margin:0 auto;padding:16px 16px 40px;position:relative}.brand{align-items:center;gap:10px;margin:0 0 16px;display:flex}.brand .logo{background:var(--cyan);color:#000;width:38px;height:38px;clip-path:var(--cut-s);box-shadow:0 0 18px var(--cyan);flex:none;place-items:center;font-size:20px;display:grid}.brand .name{font:900 19px/1 var(--display);letter-spacing:1px;color:#fff;text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 16px #00f0ff88;position:relative}.glitch:before,.glitch:after{content:attr(data-text);pointer-events:none;position:absolute;inset:0;overflow:hidden}.glitch:before{color:var(--cyan);text-shadow:-2px 0 var(--pink);animation:3.2s step-end infinite slice}.glitch:after{color:var(--pink);text-shadow:2px 0 var(--cyan);animation:2.7s step-end infinite reverse slice}@keyframes slice{0%,86%,to{clip-path:inset(0 0 100%);transform:none}88%{clip-path:inset(20% 0 55%);transform:translate(-3px)}90%{clip-path:inset(60% 0 10%);transform:translate(3px)}92%{clip-path:inset(40% 0 35%);transform:translate(-2px)}94%{clip-path:inset(0 0 100%)}}h1{font:900 18px/1.2 var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--cyan);text-shadow:0 0 12px #00f0ff88;margin:6px 0 12px}h2{font:600 12px/1.2 var(--display);text-transform:uppercase;letter-spacing:2.5px;color:var(--hint);margin:22px 2px 10px}p{margin:0 0 14px}b{font-weight:700}.muted{color:var(--hint);font-size:15px}.note,.warning{border-left:3px solid var(--amber);clip-path:var(--cut-s);background:#ffb80014;padding:10px 12px;font-size:15px}.warning{border-left-color:var(--danger);background:#ff3b6b17}.error{color:var(--danger);font-size:15px}a{color:var(--cyan)}a.tx,a.acct,a.coin{color:var(--cyan);border-bottom:1px dashed #00f0ff88;text-decoration:none}.total{clip-path:var(--cut);background:var(--panel);border:1px solid var(--cyan);margin:0 0 14px;padding:16px;position:relative;box-shadow:inset 0 0 22px #ff2bd626,inset 0 0 0 1px #00f0ff55}.total small{font:600 11px var(--display);text-transform:uppercase;letter-spacing:2px;color:var(--hint);display:block}.total .big{font:900 32px/1.15 var(--display);color:var(--cyan);text-shadow:0 0 14px #00f0ffaa;word-break:break-word;margin:6px 0 2px}.total .big .unit{margin-left:6px;font-size:16px}.total .sub{color:var(--pink);font-weight:700}.ticking{text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ffaa}.card{clip-path:var(--cut);background:var(--panel);border:1px solid #00f0ff66;padding:14px;position:relative}.card .label{font:600 11px var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--hint)}.card .label .bal{color:var(--cyan);letter-spacing:0;text-transform:none;font:700 15px Rajdhani,sans-serif}.card .address{word-break:break-all;color:var(--text);margin:6px 0 10px;font:14px/1.35 ui-monospace,Menlo,monospace}.card button{margin:0}.list{margin:0 0 16px;padding:0;list-style:none}.list li{background:var(--row);border-left:3px solid var(--pink);clip-path:var(--cut-s);align-items:center;gap:10px;margin:0 0 8px;padding:10px 12px;display:flex}.list li>span{color:var(--cyan);font:700 13px var(--display);flex:none;width:36px}.list li code{word-break:break-word;flex:1;min-width:0;font:500 16px/1.35 Rajdhani,sans-serif}.list li code small,.list li small{color:var(--hint);font:500 14px/1.35 Rajdhani,sans-serif}.list li .bal{color:var(--cyan);font-weight:700}.coins li{border-left-color:var(--cyan)}.coins .grow{flex:1;min-width:0}.coins .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:17px;display:block;overflow:hidden}.coins .grow small{display:block}.coins .right{text-align:right;white-space:nowrap;font-size:16px;font-weight:700}.coins .right small{font-weight:500;display:block}.coins .right.up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.coins .right.down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.coins .right .move{font:700 12px var(--display);letter-spacing:.5px}.coins .right.up .move{color:#39ff88}.coins .right.down .move{color:var(--danger)}.coins li:has(.right.up){border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.coins li:has(.right.down){border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.live{font:700 10px var(--display);letter-spacing:1.5px;color:#39ff88;vertical-align:2px;border:1px solid #39ff88aa;margin-left:8px;padding:1px 6px;animation:2s ease-in-out infinite livePulse;display:inline-block}.live:before{content:"● "}.live.beat{animation:.6s ease-out liveBeat,2s ease-in-out .6s infinite livePulse}@keyframes livePulse{50%{opacity:.45}}@keyframes liveBeat{0%{box-shadow:0 0 12px #39ff88}}.coins .right.bump .val{animation:.7s ease-out valBump}@keyframes valBump{0%{text-shadow:0 0 14px;filter:brightness(1.8)}}@media (prefers-reduced-motion:reduce){.live,.live.beat,.coins .right.bump .val{animation:none}}.av{background:hsl(var(--hue,190) 90% 55%);color:#05010f;width:36px;height:36px;font:900 12px var(--display);box-shadow:0 0 10px hsl(var(--hue,190) 90% 55% / .5);border-radius:4px;flex:none;place-items:center;display:grid;position:relative;overflow:hidden}.av img{object-fit:cover;background:#05010f;width:100%;height:100%;position:absolute;inset:0}.av.sol{color:#fff;background:linear-gradient(135deg,#9945ff,#14f195)}label{color:var(--hint);margin:0 0 14px;font-size:15px;display:block}label.check{color:var(--text);align-items:center;gap:10px;font-size:17px;display:flex}input,textarea{width:100%;color:var(--text);clip-path:var(--cut-s);background:#0a0f24;border:1px solid #00f0ff55;border-radius:0;outline:none;margin-top:6px;padding:12px;font:500 17px Rajdhani,sans-serif;display:block}input:focus,textarea:focus{border-color:var(--cyan);box-shadow:inset 0 0 12px #00f0ff44}input[type=checkbox]{clip-path:none;width:20px;height:20px;accent-color:var(--pink);margin:0}button{width:100%;font:700 12.5px var(--display);text-transform:uppercase;letter-spacing:1.5px;clip-path:var(--cut-s);color:var(--cyan);box-shadow:inset 0 0 0 1px var(--cyan), inset 0 0 12px #00f0ff40;background:#00f0ff12;border:0;border-radius:0;margin:0 0 10px;padding:14px 10px;transition:transform 80ms,filter .15s;display:block}button:active{filter:brightness(1.3);transform:scale(.98)}button.primary{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5}button.danger{color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger);background:#ff3b6b10}button:disabled{opacity:.4;filter:grayscale(.6)}.row{gap:8px;display:flex}.row button{flex:1}.words{counter-reset:w;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 14px;padding:0;list-style:none;display:grid}.words li{counter-increment:w;background:var(--row);border-left:2px solid var(--cyan);clip-path:var(--cut-s);padding:8px 10px;font-size:18px;font-weight:700}.words li:before{content:counter(w) ". ";color:var(--pink);font-weight:500}.center{text-align:center;color:var(--hint);font:600 13px var(--display);letter-spacing:1.5px;text-transform:uppercase;padding-top:80px}.spinner{border:3px solid #00f0ff22;border-top-color:var(--cyan);border-right-color:var(--pink);border-radius:50%;width:46px;height:46px;margin:0 auto 16px;animation:.7s linear infinite spin;box-shadow:0 0 18px #00f0ff55}@keyframes spin{to{transform:rotate(360deg)}}pre.details{white-space:pre-wrap;word-break:break-word;background:var(--row);clip-path:var(--cut-s);padding:10px 12px;font-size:13px}.version{text-align:center;color:var(--hint);font:600 10px var(--display);letter-spacing:2px;opacity:.7;margin-top:28px}.pickrow{align-items:center;gap:8px;display:flex}.pickrow input{width:22px;height:22px;accent-color:var(--pink);flex:none;margin:0;padding:0}.burst{z-index:100;pointer-events:none;background:#05010fcc;place-items:center;animation:1.3s forwards burst;display:grid;position:fixed;inset:0}.burst:before{content:"";background:repeating-linear-gradient(0deg,#00f0ff22 0 2px,#0000 2px 9px),repeating-linear-gradient(0deg,#0000 0 37px,#ff2bd655 37px 41px);animation:.18s steps(2,end) infinite bars;position:absolute;inset:0}.burst-word{font:900 52px/1 var(--display);color:#fff;letter-spacing:3px;text-shadow:4px 0 var(--pink), -4px 0 var(--cyan), 0 0 30px var(--cyan);animation:.12s steps(2,end) 6 jolt;position:relative}.burst-word:before,.burst-word:after{content:attr(data-text);position:absolute;inset:0}.burst-word:before{color:var(--cyan);animation:.25s step-end infinite cut1}.burst-word:after{color:var(--pink);animation:.2s step-end infinite cut2}@keyframes burst{0%{opacity:0}6%{opacity:1}75%{opacity:1}to{opacity:0}}@keyframes bars{to{background-position:0 9px,0 41px}}@keyframes jolt{0%{transform:translate(-6px,2px)skew(-8deg)}50%{transform:translate(5px,-2px)skew(6deg)}}@keyframes cut1{0%{clip-path:inset(10% 0 60%);transform:translate(-8px)}50%{clip-path:inset(55% 0 20%);transform:translate(6px)}}@keyframes cut2{0%{clip-path:inset(70% 0 5%);transform:translate(7px)}50%{clip-path:inset(25% 0 50%);transform:translate(-5px)}}.shake main{animation:.45s shake}@keyframes shake{0%,to{filter:none;transform:none}20%{filter:hue-rotate(60deg);transform:translate(-4px,1px)}40%{transform:translate(4px,-1px)}60%{filter:hue-rotate(-60deg);transform:translate(-2px)}80%{transform:translate(2px)}}@media (prefers-reduced-motion:reduce){*,:before,:after{transition:none!important;animation:none!important}}.list li small.error{color:var(--danger)}.pinvalue{opacity:0;pointer-events:none;border:0;width:1px;height:1px;margin:0;padding:0;position:absolute}.pindots{justify-content:center;gap:14px;margin:0 0 4px;padding:14px 0 18px;display:flex}.pindots i{background:0 0;border:2px solid #00f0ff66;width:16px;height:16px;transition:background .1s,box-shadow .1s,border-color .1s;transform:rotate(45deg)}.pindots.active i{border-color:var(--cyan)}.pindots i.on{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px var(--pink)}.pindots.nope{animation:.4s nope}.pindots.nope i{border-color:var(--danger)}@keyframes nope{20%{transform:translate(-10px)}40%{transform:translate(9px)}60%{transform:translate(-6px)}80%{transform:translate(4px)}}.keypad{grid-template-columns:repeat(3,1fr);gap:10px;margin:6px 0 16px;display:grid}.keypad .key{font:900 24px/1 var(--display);letter-spacing:0;color:var(--text);text-shadow:0 0 10px #00f0ffaa;-webkit-user-select:none;user-select:none;background:#0c0a22e6;margin:0;padding:16px 0;box-shadow:inset 0 0 0 1px #00f0ff88,inset 0 0 14px #00f0ff30}.keypad .key:active{background:var(--pink);color:#fff;box-shadow:0 0 22px var(--pink), inset 0 0 0 1px #fff;filter:none;transform:scale(.96)}.keypad .key.fn{color:var(--pink);text-shadow:0 0 8px #ff2bd688;font-size:15px}.coinhead{align-items:center;gap:12px;margin:0 0 12px;display:flex}.coinhead .av{width:46px;height:46px;font-size:15px}.coinhead b{font-size:20px;display:block}.coinhead small{color:var(--hint);font-size:14px}.avail{justify-content:space-between;align-items:baseline;margin:0 2px 6px;display:flex}.avail small{font:600 11px var(--display);letter-spacing:2px;color:var(--hint);text-transform:uppercase}.avail>span{font:900 18px var(--display);color:var(--cyan);text-shadow:0 0 10px #00f0ffaa}.amountbox{padding:8px 16px 10px}.amount{text-align:center;padding:12px 0 4px}.amount .num{font:900 46px/1 var(--display);color:#fff;text-shadow:3px 0 var(--pink), -3px 0 var(--cyan), 0 0 22px #00f0ff88;word-break:break-all}.amount .num:after{content:"";background:var(--pink);vertical-align:-.05em;width:3px;height:.85em;box-shadow:0 0 8px var(--pink);margin-left:4px;animation:1s step-end infinite blink;display:inline-block}.amount .num.over{color:var(--danger);text-shadow:0 0 18px var(--danger)}@keyframes blink{50%{opacity:0}}.amount .unit{font:700 16px var(--display);color:var(--cyan);margin-left:6px}.amount .usd{color:var(--hint);min-height:1.4em;margin-top:8px;font-size:15px}input.slider{appearance:none;clip-path:none;width:100%;height:34px;box-shadow:none;background:0 0;border:0;margin:8px 0 2px;padding:0}input.slider::-webkit-slider-runnable-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px;box-shadow:0 0 10px #ff2bd688}input.slider::-webkit-slider-thumb{-webkit-appearance:none;background:var(--pink);width:24px;height:24px;box-shadow:0 0 16px var(--pink), inset 0 0 0 2px #fff;border:0;margin-top:-10px;transform:rotate(45deg)}input.slider::-moz-range-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px}input.slider::-moz-range-thumb{background:var(--pink);border:2px solid #fff;border-radius:0;width:22px;height:22px;transform:rotate(45deg)}input.slider:focus{box-shadow:none}.ticks{color:var(--hint);font:600 10px var(--display);justify-content:space-between;margin:0 2px 10px;display:flex}.chips{grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 12px;display:grid}.chips button{margin:0;padding:9px 0;font-size:11px}.walletsrow{background:var(--row);border-left:3px solid var(--cyan);clip-path:var(--cut-s);justify-content:space-between;align-items:center;margin:0 0 12px;padding:8px 12px;display:flex}.walletsrow small{color:var(--hint);font-size:13px;display:block}.stepper{align-items:center;gap:12px;display:flex}.stepper button{width:40px;margin:0;padding:8px 0;font-size:18px}.stepper b{font:900 22px var(--display);color:var(--cyan);text-align:center;min-width:28px}.stepper.wide{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px;display:grid}.stepper.wide button{width:auto}.keypad{gap:8px;margin:0 0 12px}.keypad .key{padding:14px 0}.keypad .key.dot{font-size:30px;line-height:.8}button.go{padding:16px 10px;font-size:14px}.stepper button{padding:4px 0 6px;font:700 26px/1 Rajdhani,sans-serif}.coins li[data-mint]{cursor:pointer}.coins li[data-mint]:active{filter:brightness(1.3)}.coinhead .live{margin-left:auto}.avail .paid{color:var(--hint);text-shadow:none}.avail.pl.up>span{color:#39ff88;text-shadow:0 0 10px #39ff88aa}.avail.pl.down>span{color:var(--danger);text-shadow:0 0 10px #ff3b6baa}button.gold{color:#1a1000;background:var(--amber);text-shadow:none;box-shadow:inset 0 0 14px #fff6,0 0 16px #ffb80066}button.gold.on{box-shadow:inset 0 0 0 2px #fff,0 0 22px #ffb800cc}.initnote{text-align:center;margin:0 0 12px;font-size:14px}.avail[hidden]{display:none}.solamt,.coinamt{cursor:pointer;text-underline-offset:3px;-webkit-text-decoration:underline dotted #ffffff40;text-decoration:underline dotted #ffffff40}.solamt.usd,.coinamt.usd{color:#39ff88;text-shadow:0 0 8px #39ff8866}.seg{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 10px;display:grid}.seg button{opacity:.55;margin:0;padding:11px 0;font-size:13px}.seg button.on{opacity:1;box-shadow:inset 0 0 0 2px var(--cyan), 0 0 14px #00f0ff66}.seg.small button{padding:8px 0;font-size:11px}.amountbox #when{color:var(--hint);margin-bottom:2px;font-size:12px;display:block}button.small{width:auto;margin:6px 0 0;padding:6px 14px;font-size:11px}.coins small.inorder{color:var(--amber)}.brand .navback{width:38px;height:38px;font:900 22px/1 var(--display);color:var(--cyan);box-shadow:inset 0 0 0 2px var(--cyan), 0 0 12px #00f0ff55;clip-path:var(--cut-s);background:0 0;flex:none;place-items:center;margin:0;padding:0;display:grid}.brand .navback:active{background:var(--cyan);color:#000}#app:has(#after:empty) .navback{visibility:hidden}.openwallet{cursor:pointer}.openwallet:active{filter:brightness(1.3)}.openwallet .open{float:right;color:var(--cyan);font:700 11px var(--display);letter-spacing:1px}.loader{z-index:40;background:#000;position:fixed;inset:0}.loader .ascii{width:100%;height:100%;display:block}.loader .ascii i{font-style:normal}.ascii .kc{color:var(--cyan);text-shadow:0 0 6px #00f0ffaa}.ascii .kp{color:var(--pink);text-shadow:0 0 6px #ff2bd6aa}.ascii .kg{color:#39ff88;text-shadow:0 0 6px #39ff88aa}.ascii .kr{color:var(--danger);text-shadow:0 0 6px #ff3b6baa}.ascii .ka{color:var(--amber);text-shadow:0 0 8px #ffb800cc}.ascii .kw{color:#fff;text-shadow:0 0 8px #fff}.ascii .kd{color:#1a2050}.ascii .kh{color:#2c3a8c}.ascii .kv{color:#5b3ab8}.ascii .kf{color:#3a1f4f}.ascii .kc,.ascii .kp,.ascii .kg,.ascii .kr{opacity:.9}.loadtag{font:900 16px var(--display);letter-spacing:3px;color:var(--cyan);text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ff88;margin:14px 0 4px}.loadtag.hit{color:#39ff88;text-shadow:2px 0 var(--pink), -2px 0 #39ff88, 0 0 18px #39ff88;animation:.25s steps(2,end) 2 tagjolt}@keyframes tagjolt{50%{transform:translate(3px)skew(-8deg)}}.loadlabel{color:var(--hint);font:600 12px var(--display);letter-spacing:1.5px;text-transform:uppercase;margin:4px 16px}.loader .ascii.flash{filter:brightness(1.5)saturate(1.4);box-shadow:inset 0 0 0 2px #39ff88,0 0 40px #39ff88aa}.ascii .kC{color:#00f0ff;opacity:.28}.ascii .kP{color:#ff2bd6;opacity:.28}.ascii .kG{color:#39ff88;opacity:.28}.ascii .kR{color:#ff3b6b;opacity:.28}#app.loading .brand,#app.loading .version,#app.loading .note{display:none}.hackloader{z-index:40;background:#000;position:fixed;inset:0;overflow:hidden}.hackloader .hackart{background:#02000a;width:100%;height:100%;display:block;position:absolute;inset:0}.hackloader .loadterm{z-index:1;visibility:hidden;color:#39ff88;text-shadow:0 0 6px #39ff88aa}.hackloader .loadterm .cur{background:#39ff88}.brand .logo.sol{background:#05010f;position:relative;overflow:hidden;box-shadow:0 0 18px #00f0ff66,inset 0 0 0 1px #00f0ff88}.logo.sol svg{width:26px;height:19px;position:absolute;top:9px;left:6px}.logo.sol .sol-main{filter:drop-shadow(0 0 4px #9a5cff);animation:3.2s step-end infinite solmain}.logo.sol .sol-c,.logo.sol .sol-p{opacity:0;mix-blend-mode:screen}.logo.sol .sol-c{animation:3.2s step-end infinite solc}.logo.sol .sol-p{animation:3.2s step-end infinite solp}@keyframes solmain{0%,84%,to{clip-path:none;transform:none}86%{clip-path:inset(0 0 40%);transform:translate(2px)}89%{clip-path:none;transform:translate(-2px)skew(-8deg)}92%{clip-path:inset(35% 0 0);transform:translate(1px)}95%{clip-path:none;transform:none}}@keyframes solc{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(0 0 55%);transform:translate(-3px)}89%{opacity:.85;clip-path:inset(40% 0 25%);transform:translate(-2px,1px)}92%{opacity:.7;clip-path:inset(70% 0 0);transform:translate(-4px)}95%{opacity:.5;clip-path:none;transform:translate(-1px)}}@keyframes solp{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(45% 0 0);transform:translate(3px)}89%{opacity:.85;clip-path:inset(0 0 60%);transform:translate(2px,-1px)}92%{opacity:.7;clip-path:inset(20% 0 45%);transform:translate(4px)}95%{opacity:.5;clip-path:none;transform:translate(1px)}}@media (prefers-reduced-motion:reduce){.logo.sol svg{animation:none!important}}.snatchfx{z-index:60;touch-action:none;width:100vw;height:100vh;position:fixed;inset:0}.pnl .pv{font:700 16px var(--display);letter-spacing:.5px;white-space:nowrap;color:var(--hint)}.pnl .pv.big{flex:none;font-size:17px}.pnl .pv.up,.total.pnl .up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.pnl .pv.down,.total.pnl .down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.pnl .pv.none{letter-spacing:0;color:var(--hint);text-shadow:none;font:500 13px Rajdhani,sans-serif}.card .label .pv{font-size:15px}.total.pnl{cursor:pointer}.total.pnl .big span{transition:color .2s}.list.pnl li.pnlup{border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.list.pnl li.pnldown{border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.pnl .right{cursor:pointer}.pnltabs{gap:8px;margin:0 0 14px;display:flex}.pnltabs button{font:700 16px var(--display);flex:1;margin:0;padding:10px 0}.pnltabs button.on{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5,0 0 14px #ff2bd688}.trades li{border-left-color:var(--cyan)}.trades .grow{flex:1;min-width:0}.trades .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:16px;display:block;overflow:hidden}.trades .grow small{display:block}.trades .tag{width:44px;font:700 11px var(--display);letter-spacing:1px;color:var(--cyan);flex:none}.trades li.sell .tag{color:var(--pink)}.trades .right{text-align:right}.trades .right small{color:var(--hint);font:500 13px Rajdhani,sans-serif;display:block}.trades .pv.spent{color:var(--text);text-shadow:none}.loadterm{left:12px;right:12px;bottom:calc(24px + env(safe-area-inset-bottom));pointer-events:none;color:#00f0ff;text-shadow:0 0 6px #00f0ffaa;font:700 12px/16px ui-monospace,Menlo,Consolas,monospace;position:absolute}.loadterm .tl{white-space:pre;opacity:.6;background:#0009;width:fit-content;max-width:100%;padding:0 3px;overflow:hidden}.loadterm .tl:nth-last-child(2){opacity:.8}.loadterm .tl:last-child{opacity:1}.loadterm .cur{vertical-align:-1px;background:#00f0ff;width:8px;height:12px;margin-left:2px;animation:.66s step-end infinite termBlink;display:inline-block}@keyframes termBlink{50%{opacity:0}}.sharecard{clip-path:var(--cut);aspect-ratio:1080/1350;background:#000;margin:12px 0;box-shadow:0 0 24px #00f0ff44}.sharecard img{-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto;width:100%;height:100%;display:block}.sharecard.hint{animation:1.2s ease-out 2 cardHint}@keyframes cardHint{50%{box-shadow:0 0 36px #ff2bd6}}.cardme{color:var(--hint);align-items:center;gap:10px;margin:10px 2px;display:flex}.cardme input{width:20px;height:20px;accent-color:var(--pink)}.coins small.share{color:var(--pink);font:700 11px var(--display);letter-spacing:.5px}.chart{background:var(--panel);clip-path:var(--cut-s);border:1px solid #00f0ff55;margin:0 0 12px;padding:8px 8px 4px;position:relative;box-shadow:inset 0 0 22px #ff2bd61f}.chartbar{flex-wrap:wrap;align-items:baseline;gap:4px 8px;margin-bottom:4px;display:flex}.chartbar .cprice{font:800 15px var(--display);color:var(--text);text-shadow:0 0 10px #00f0ff66}.chartbar .cmove{color:#39ff88;white-space:nowrap;font:700 13px Rajdhani,sans-serif}.chartbar .cmove.down{color:var(--danger)}.chartbar .ctabs{order:3;justify-content:space-between;width:100%;display:flex}.chartbar .ctabs button{all:unset;cursor:pointer;font:700 10px var(--display);color:var(--hint);letter-spacing:.5px;padding:4px 8px}.chartbar .ctabs button.on{color:#000;background:var(--cyan);box-shadow:0 0 10px var(--cyan)}.chart canvas{touch-action:pan-y;width:100%;height:220px;display:block}.chart .cnote{color:var(--hint);text-align:center;min-height:0;font-size:12px}.chart .cnote:empty,.chartbar .cname{display:none}.chartbar .cfull{all:unset;cursor:pointer;color:var(--cyan);filter:drop-shadow(0 0 6px #00f0ff99);order:2;align-self:center;margin-left:auto;padding:3px 4px;line-height:0}html.chartopen,html.chartopen body{overflow:hidden}.chartfull{z-index:30;background:var(--bg);position:fixed;inset:0}.chartfull .fullwrap{transform-origin:0 0;box-sizing:border-box;--st:calc(var(--tg-safe-area-inset-top,env(safe-area-inset-top,0px)) + var(--tg-content-safe-area-inset-top,0px));--sr:calc(var(--tg-safe-area-inset-right,env(safe-area-inset-right,0px)) + var(--tg-content-safe-area-inset-right,0px));--sb:calc(var(--tg-safe-area-inset-bottom,env(safe-area-inset-bottom,0px)) + var(--tg-content-safe-area-inset-bottom,0px));--sl:calc(var(--tg-safe-area-inset-left,env(safe-area-inset-left,0px)) + var(--tg-content-safe-area-inset-left,0px));padding:calc(var(--st) + 6px) calc(var(--sr) + 8px) calc(var(--sb) + 6px) calc(var(--sl) + 8px);display:flex;position:absolute;top:0;left:0}.chartfull .fullwrap.rot{padding:calc(var(--sr) + 8px) calc(var(--sb) + 8px) calc(var(--sl) + 8px) calc(var(--st) + 8px)}.chart.big{flex-direction:column;flex:1;min-width:0;min-height:0;margin:0;padding:8px 10px 6px;display:flex}.chart.big canvas{touch-action:none;flex:1 1 0;height:0;min-height:0}.chart.big .chartbar{flex-wrap:nowrap;align-items:center;gap:10px}.chart.big .cname{font:800 13px var(--display);color:var(--pink,#ff2bd6);text-shadow:0 0 10px #ff2bd666;text-overflow:ellipsis;white-space:nowrap;max-width:26%;display:block;overflow:hidden}.chart.big .ctabs{order:2;gap:2px;width:auto;margin-left:auto}.chart.big .cfull{order:3;margin-left:4px}.brand .name{white-space:nowrap;min-width:0}.brand .fsbtn{width:34px;height:34px;color:var(--cyan);clip-path:var(--cut-s);cursor:pointer;background:0 0;flex:none;place-items:center;margin:0 0 0 auto;padding:0;display:grid;box-shadow:inset 0 0 0 2px #00f0ffaa,0 0 10px #00f0ff44}.brand .fsbtn:active,.brand .fsbtn.on:active{background:var(--cyan);color:#000}.brand .fsbtn.on{color:var(--pink);box-shadow:inset 0 0 0 2px #ff2bd6aa,0 0 10px #ff2bd644}html.tgfull main{padding-top:calc(16px + var(--tg-safe-area-inset-top,0px) + var(--tg-content-safe-area-inset-top,0px));padding-bottom:calc(40px + var(--tg-safe-area-inset-bottom,0px))}.brand:has(.fsbtn) .name{font-size:min(19px,4.25vw)}`,Mn=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function Nn(e,t,n,{ms:r=1100,delay:i=0,final:a=n(t)}={}){if(Mn()||!Number.isFinite(t)||t===0){e.textContent=a;return}e.classList.add(`ticking`);let o=performance.now()+i,s=i=>{let c=Math.min(1,Math.max(0,(i-o)/r));c>=1?(e.textContent=a,e.classList.remove(`ticking`)):(e.textContent=n(t*(1-2**(-10*c))).replace(/\d(?=\d?$)/g,()=>String(Math.floor(Math.random()*10))),requestAnimationFrame(s))};requestAnimationFrame(s)}function Pn(e,t){let n=e.replace(/[^A-Za-z0-9◎]/g,``).slice(0,2).toUpperCase()||`?`;return`<div class="av" style="--hue:${[...e].reduce((e,t)=>(e*31+t.charCodeAt(0))%360,7)}"><b>${n}</b>${t?`<img alt="" loading="lazy" src="${t.replace(/["<>&]/g,encodeURIComponent)}">`:``}</div>`}function Fn(){document.querySelectorAll(`.av img`).forEach(e=>e.addEventListener(`error`,()=>e.remove()))}var In=1200,Ln=`./oni-1.webp`,Rn=[[130,95],[235,235],[285,95],[340,175],[480,140],[625,170],[665,100],[720,215],[835,85],[815,330],[845,420],[800,530],[785,700],[765,850],[705,965],[640,1065],[560,1125],[400,1125],[320,1065],[250,965],[200,850],[180,700],[150,530],[110,420],[150,330]],zn=800,Bn=4.1,Vn=.3,Hn=` .:-=+*#%@`,Un=8,Wn=13,Gn=[{x:12,y:22,w:320,h:225,color:`#ff5a3a`},{x:355,y:22,w:330,h:125,color:`#f0a040`},{x:695,y:22,w:255,h:300,color:`#f5dc55`},{x:12,y:265,w:140,h:560,color:`#a77cf0`},{x:12,y:880,w:320,h:300,color:`#e6e0f0`},{x:770,y:470,w:180,h:700,color:`#b9a3f0`}],Kn=18,L=30,qn=32,R=Math.ceil(960/L),z=Math.ceil(In/qn),Jn=`鬼武龍金魂刀影雷炎血夜神忍斬闇狐命運盗奪`,Yn=`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン`,Xn=`0123456789`,Zn=[...[...Jn].map(e=>({ch:e,flip:!1})),...[...Yn].map(e=>({ch:e,flip:!0})),...[...Yn].map(e=>({ch:e,flip:!0})),...[...Xn].map(e=>({ch:e,flip:!1}))],Qn=`600 27px "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans JP", "Noto Sans CJK JP", sans-serif`,$n=12,er=14,tr=2,nr=.7,rr=8,ir=Math.round(640/qn),ar=4,or=.6,sr=1.1,cr=480,lr=`600 15px ui-monospace, Menlo, Consolas, monospace`,ur=55,dr=null,fr=!1,pr=null,mr=null,hr=null,gr=null,_r=null,vr=null,yr=null,br=null,xr=null,Sr=0,Cr=null,wr=null,Tr=null,Er=null,Dr=null,Or=null,kr=null,Ar=null,jr=null,Mr=null,Nr=null,Pr=null,Fr=null,Ir=null,Lr=null,Rr=null,zr=null,Br=0,Vr=(e=960,t=In)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function Hr(){let e=Vr(),t=e.getContext(`2d`);return t.beginPath(),Rn.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t.fillStyle=`#fff`,t.shadowColor=`#fff`,t.shadowBlur=36,t.fill(),t.shadowBlur=0,t.fill(),e}function Ur(e){let t=Hr();mr=Vr();let n=mr.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(0,0,960,In),n.globalCompositeOperation=`destination-out`,n.drawImage(t,0,0),pr=Vr(),n=pr.getContext(`2d`),n.drawImage(e,0,0),n.globalCompositeOperation=`destination-in`,n.drawImage(mr,0,0);let r=Math.ceil(960/Un),i=Math.ceil(In/Wn),a=Vr(r,i).getContext(`2d`,{willReadFrequently:!0});a.drawImage(e,0,0,r,i);let o=a.getImageData(0,0,r,i).data;xr=o,Sr=r,hr=Vr(),n=hr.getContext(`2d`),n.fillStyle=`#000`,n.fillRect(0,0,960,In),n.font=`700 12px ui-monospace, Menlo, Consolas, monospace`,n.textBaseline=`top`;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let i=(e*r+t)*4,a=o[i],s=o[i+1],c=o[i+2],l=(.3*a+.59*s+.11*c)/255,u=Hn[Math.min(9,Math.floor(l**.7*10*1.15))];if(u===` `)continue;let d=Math.min(2.2,1.4/Math.max(.25,Math.max(a,s,c)/255));n.fillStyle=`rgb(${Math.min(255,a*d)|0},${Math.min(255,s*d)|0},${Math.min(255,c*d)|0})`,n.fillText(u,t*Un,e*Wn)}n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0);let s=t=>{let n=Vr(),r=n.getContext(`2d`);return r.drawImage(e,0,0),r.globalCompositeOperation=`multiply`,r.fillStyle=t,r.fillRect(0,0,960,In),n};gr=s(`#ff0000`),_r=s(`#00ffff`),vr=Vr(),yr=t,Cr=Vr(),qr(e,t),fr=!0}var Wr=e=>e<0?0:e>1?1:e,Gr=(e,t,n)=>{let r=Wr((n-e)/(t-e));return r*r*(3-2*r)},Kr=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296};function qr(e,t){let n=Vr(R,z).getContext(`2d`,{willReadFrequently:!0});n.drawImage(e,0,0,R,z);let r=n.getImageData(0,0,R,z).data;n.clearRect(0,0,R,z),n.drawImage(t,0,0,R,z);let i=n.getImageData(0,0,R,z).data,a=new Float32Array(R*z);for(let e=0;e<a.length;e++)a[e]=(.3*r[e*4]+.59*r[e*4+1]+.11*r[e*4+2])/255;let o=(e,t)=>a[Math.max(0,Math.min(z-1,t))*R+Math.max(0,Math.min(R-1,e))];wr=new Float32Array(R*z);for(let e=0;e<z;e++)for(let t=0;t<R;t++){let n=o(t+1,e)-o(t-1,e),r=o(t,e+1)-o(t,e-1),a=o(t,e)**1.1*1.7+Math.sqrt(n*n+r*r)*.8;wr[e*R+t]=Wr(a)*(i[(e*R+t)*4+3]/255)}Tr=new Int16Array(R).fill(-1);for(let e=0;e<R;e++)for(let t=0;t<z;t++)if(wr[t*R+e]>.02){Tr[e]=t;break}Br=0;for(let e=0;e<R;e++)for(let t=0;t<z;t++)wr[t*R+e]>.02&&(Br=Math.max(Br,$r(e,t)));Br+=2.05,Er=Vr();let s=Er.getContext(`2d`,{willReadFrequently:!0});s.drawImage(e,0,0);let c=s.getImageData(0,0,960,In),l=c.data;for(let e=0;e<l.length;e+=4){let t=l[e],n=l[e+1],r=l[e+2],i=(.3*t+.59*n+.11*r)/255,a=255*(.32+.68*Math.min(1,i*1.6)**.6)/Math.max(t,n,r,1);l[e]=Math.min(255,t*a+18),l[e+1]=Math.min(255,n*a+18),l[e+2]=Math.min(255,r*a+18)}s.putImageData(c,0,0);let u=Zn.length;Dr=Vr(u*L,qn),Or=Vr(u*58,60);let d=(e,t,n,r)=>{let i=Zn[t];e.save(),e.translate(n,r),i.flip&&e.scale(-1,1),e.fillText(i.ch,0,0),e.strokeText(i.ch,0,0),e.restore()};for(let[e,t]of[[Dr,!1],[Or,!0]]){let n=e.getContext(`2d`);n.font=Qn,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#fff`,n.strokeStyle=`#fff`,n.lineWidth=.6,n.lineJoin=`round`,t&&(n.shadowColor=`#fff`,n.shadowBlur=12);for(let e=0;e<u;e++)t?d(n,e,e*58+er+L/2,31):d(n,e,e*L+L/2,17)}kr=Vr();let f=t=>{let n=Vr(R*t,z*t);return n.getContext(`2d`).drawImage(e,0,0,960/L*t,In/qn*t),n};Ar=f(2),jr=f(6),Mr=Vr();let p=Mr.getContext(`2d`);p.beginPath(),Rn.forEach(([e,t],n)=>n?p.lineTo(e,t):p.moveTo(e,t)),p.closePath(),p.fillStyle=`#fff`,p.strokeStyle=`#fff`,p.lineJoin=`round`,p.shadowColor=`#fff`,p.shadowBlur=90,p.lineWidth=150,p.fill(),p.stroke(),p.shadowBlur=0,p.lineWidth=110,p.fill(),p.stroke(),p.globalCompositeOperation=`destination-out`,p.drawImage(t,0,0),Nr=Vr(960,In+360);let m=Nr.getContext(`2d`);m.font=`600 12px ui-monospace, Menlo, Consolas, monospace`,m.textBaseline=`top`;let h=[`#9a7cff`,`#c05cff`,`#ff4d6d`,`#ffb84d`,`#7d6bff`];for(let e=0;e<Nr.height;e+=15)for(let t=0;t<960;){let n=60+Math.floor(Math.random()*260);if(Math.random()<.7){m.fillStyle=h[Math.floor(Kr(Math.floor(t/240)*31+Math.floor(e/220)*7)*h.length)],m.globalAlpha=.35+Math.random()*.5;let r=Math.random(),i=r<.35?ui(Math.ceil(n/27)):r<.6?`0x${di()} ${ui(Math.ceil(n/40))}`:r<.8?`[ok] ${di()} ${pi(1,99)}`:`$ ${fi([`scan`,`decode`,`tail -f`,`xxd`,`sync`])} ${di()}`;m.fillText(i.slice(0,Math.floor(n/7.3)),t,e)}t+=n+18}m.globalAlpha=1,Pr=Vr(),Fr=Vr(),Ir=Vr(),Lr=Vr(),Rr=Vr(R,z),zr=Rr.getContext(`2d`).createImageData(R,z)}var Jr=e=>sr*(Math.abs(e+.5-cr/L)/(R/2))**1.1+Kr(e*17+5)*.2,Yr=(e,t)=>Math.max(ir-t*ar,Tr[e]),Xr=(e,t)=>nr+t*or+Jr(e)+Kr(e*131+t*977+3)*.55,Zr=(e,t)=>rr*(.8+.5*Kr(e*53+t*29+11)),Qr=e=>e>=ir?0:Math.ceil((ir-e)/ar);function $r(e,t){if(Tr[e]<0)return 1/0;let n=Qr(t);return Xr(e,n)+(t-Yr(e,n)+1)/Zr(e,n)}var ei=Math.ceil(18/ar)+1,ti=e=>Gr(.08,.3,e)*(1-Gr(.5,.8,e)),ni=e=>Gr(.45,.75,e)*(1-Gr(1.05,1.45,e)),ri=e=>Gr(.95,1.6,e),ii=e=>Gr(-.02,.06,e)*(.15+.85*Math.exp(-Math.max(0,e)/.7))*(1-Gr(2.2,3.2,e)),ai=[];for(let e=0;e<R;e++)for(let t=0;t<4;t++){let n=6+Math.floor(Kr(e*31+t*3+1)*15),r=z+n+4,i=1+Math.floor(Kr(e*101+t*7+5)*3);ai.push({c:e,len:n,span:r,rate:i*r/$n,phase:Kr(e*13+t+9)*r})}var oi=(e,t)=>{let n=.5*(1+Math.floor(Kr(e*7+3)*3)),r=Math.floor(t*n+Kr(e*7+2)*7);return Math.floor(Kr(e*977+r*7919)*Zn.length)},si=0;function ci(){if(dr||Date.now()<si)return;let e=new Image;dr=e,e.onload=()=>Ur(e),e.onerror=()=>{dr===e&&(dr=null),si=Date.now()+2e3},e.src=Ln}var li=ci,ui=e=>Array.from({length:e},()=>Math.floor(Math.random()*256).toString(16).padStart(2,`0`)).join(` `),di=()=>Array.from({length:2},()=>Math.floor(Math.random()*65536).toString(16).padStart(4,`0`)).join(``),fi=e=>e[Math.floor(Math.random()*e.length)],pi=(e,t,n=0)=>(e+Math.random()*(t-e)).toFixed(n),mi=[()=>[`$ ssh root@node${pi(1,99)}.snatch`,`> handshake ok`,`> session ${di()}`],()=>[`$ ./scan --wallets --deep`,`[+] ${di()}..${di().slice(0,4)} found`,`[+] ${pi(2,40)} wallets live`],()=>[`$ jup quote SOL ${fi([`BONK`,`WIF`,`PUMP`,`TARGET`])}`,`[*] route ${pi(1,4)} hops ${pi(.05,.9,2)}%`,`[ok] out ${pi(1e3,99999)}`],()=>[`$ tail -f mempool.log`,`tx ${di()} ${pi(.1,9,2)} SOL`,`tx ${di()} ${pi(.1,9,2)} SOL`,`tx ${di()} ${pi(.1,9,2)} SOL`],()=>[`$ decrypt --key ****${pi(1e3,9999)}`,`0x${di()}: ${ui(6)}`,`0x${di()}: ${ui(6)}`,`[ok] unlocked`],()=>[`$ claw --lock target`,`[*] locking ${di()}`,`[!!] TARGET LOCKED`],()=>[`$ snatch --now`,`[>] ${pi(1,60,1)} SOL tracked`,`[ok] SNATCHED`],()=>[`$ ping rpc.solana`,`64 bytes time=${pi(9,80)}ms`,`64 bytes time=${pi(9,80)}ms`],()=>[`$ cat /dev/oni | xxd`,`${ui(8)}`,`${ui(8)}`,`${ui(8)}`]],hi=Gn.map(()=>({lines:[],typing:``,typed:0,queue:[],wait:Math.random()*.8}));function gi(e,t,n){if(e.wait>0)e.wait-=n;else if(e.typing||(e.queue.length||(e.queue=fi(mi)()),e.typing=e.queue.shift(),e.typed=e.typing.startsWith(`$`)?0:e.typing.length),e.typed=Math.min(e.typing.length,e.typed+ur*n*(.7+Math.random()*.6)),e.typed>=e.typing.length){for(e.lines.push(e.typing),e.typing=``,e.typed=0;e.lines.length>t-1;)e.lines.shift();e.wait=e.queue.length?.05+Math.random()*.15:.35+Math.random()*.7}}function _i(e){let t=vr.getContext(`2d`);t.globalCompositeOperation=`source-over`,t.clearRect(0,0,960,In),t.font=lr,t.textBaseline=`top`,Gn.forEach((n,r)=>{let i=hi[r];gi(i,Math.floor(n.h/Kn),e);let a=i.typing.slice(0,Math.floor(i.typed)),o=[...i.lines,a];t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip();let s=n.y+n.h-o.length*Kn;if(o.forEach((e,r)=>{let i=s+r*Kn,a=Math.min(n.w,t.measureText(e).width+6);t.fillStyle=`rgba(0,0,0,0.6)`,t.fillRect(n.x,i,a,Kn),t.fillStyle=n.color,t.globalAlpha=r===o.length-1?1:.55+.4*r/o.length,t.fillText(e,n.x+3,i+1),t.globalAlpha=1}),Math.floor(Oi*3)%2==0){let e=n.x+3+t.measureText(a).width;t.fillStyle=n.color,t.fillRect(e,s+(o.length-1)*Kn+2,9,14)}t.restore()}),t.globalCompositeOperation=`destination-in`,t.drawImage(mr,0,0)}var vi=3,yi=Array.from({length:Math.ceil(960/vi)},()=>({len:16+Math.random()**2*240,lead:Math.random()<.18?4+Math.random()*30:0,speed:1+Math.random()*4,phase:Math.random()*7,width:Math.random()<.25?3:1.8,on:Math.random()>.22})),bi=0,xi=.8,Si=1,Ci=null,wi=0;function Ti(e){Ci||=new Float32Array(R*z);let t=zr.data,n=0,r=0;for(let i=0;i<z;i++)for(let a=0;a<R;a++){let o=i*R+a,s=e-$r(a,i)-Kr(o*13+7)*.35;Ci[o]=s;let c=ri(s);t[o*4+3]=255*c,wr[o]>.02&&(n+=c,r++)}wi=r?n/r:1,Rr.getContext(`2d`).putImageData(zr,0,0);let i=Ir.getContext(`2d`);i.globalCompositeOperation=`source-over`,i.clearRect(0,0,960,In),i.drawImage(Rr,0,0,R*L,z*qn),i.globalCompositeOperation=`destination-in`,i.drawImage(yr,0,0);let a=Lr.getContext(`2d`);a.globalCompositeOperation=`source-over`,a.clearRect(0,0,960,In),a.drawImage(hr,0,0),a.globalCompositeOperation=`destination-in`,a.drawImage(Ir,0,0)}function Ei(e,t){let n=Pr.getContext(`2d`);n.globalCompositeOperation=`source-over`,n.clearRect(0,0,960,In),n.globalAlpha=1-Gr(.88,1,wi),n.drawImage(Mr,0,0),n.globalAlpha=1;let r=Fr.getContext(`2d`);r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,In),r.drawImage(yr,0,0),r.globalCompositeOperation=`destination-out`,r.drawImage(Ir,0,0),n.globalCompositeOperation=`lighter`,n.drawImage(Fr,0,0),r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,In),r.fillStyle=`#000`,r.fillRect(0,0,960,In),r.globalCompositeOperation=`destination-in`,r.drawImage(Pr,0,0),e.drawImage(Fr,0,0),r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,In),r.drawImage(Nr,0,-(t/tr*22%360)),r.globalCompositeOperation=`destination-in`,r.drawImage(Pr,0,0),e.globalAlpha=.65,e.drawImage(Fr,0,0),e.imageSmoothingEnabled=!1;for(let t=0;t<R*z;t++){if(wr[t]<=.02)continue;let n=Ci[t];if(n<.08||n>1.6)continue;let r=t%R,i=(t-r)/R,a=1-ri(n),o=ti(n)*a*.9;o>.01&&(e.globalAlpha=o,e.drawImage(Ar,r*2,i*2,2,2,r*L,i*qn,L,qn));let s=ni(n)*a*.95;s>.01&&(e.globalAlpha=s,e.drawImage(jr,r*6,i*6,6,6,r*L,i*qn,L,qn))}e.imageSmoothingEnabled=!0,e.globalAlpha=1}function Di(e,t,n,r){let i=kr.getContext(`2d`);i.globalCompositeOperation=`source-over`,i.globalAlpha=1,i.clearRect(0,0,960,In);let a=[],o=[],s=(e,s,c,l,u)=>{for(let d=0;d<c;d++){let f=s-d;if(f<0||f>=z)continue;let p=f*R+e,m=wr[p];if(m<=.02)continue;let h=u?l:r&&n<$r(e,f)?0:1;if(h<=0)continue;let g=(1-d/c)**1.15;if(o.push(p,Math.min(1,g*h)),d===0){a.push(p,Math.min(1,.45+.7*m)*Math.min(1,h),(Math.floor(t*15)+e*3)%Zn.length);continue}let _=Math.min(1,(.22+m**.7)*g*h);i.globalAlpha=_;let v=oi(p,t);i.drawImage(Dr,v*L,0,L,qn,e*L,f*qn,L,qn)}};for(let e of ai)s(e.c,Math.floor((t*e.rate+e.phase)%e.span)-e.len,e.len,1,!1);if(r){for(let e=0;e<R;e++)if(!(Tr[e]<0))for(let t=0;t<ei&&!(t>0&&ir-(t-1)*ar<=Tr[e]);t++){let r=n-Xr(e,t);if(r<0)continue;let i=Yr(e,t)-1+Math.floor(r*Zr(e,t));i-11>z||s(e,i,Math.min(11,i-Yr(e,t)+1),1.4,!0)}for(let e=0;e<R*z;e++){let n=wr[e];if(n<=.02)continue;let r=ii(Ci[e])*(.35+.65*n)*.6;if(r<=.01)continue;let a=e%R,o=(e-a)/R;i.globalAlpha=r,i.drawImage(Dr,oi(e,t)*L,0,L,qn,a*L,o*qn,L,qn)}}e.fillStyle=`#000`;for(let t=0;t<o.length;t+=2){let n=o[t],r=n%R;e.globalAlpha=.45*o[t+1],e.fillRect(r*L,(n-r)/R*qn,L,qn)}i.globalAlpha=1,i.globalCompositeOperation=`source-in`,i.drawImage(Er,0,0),e.globalCompositeOperation=`lighter`,e.globalAlpha=1,e.drawImage(kr,0,0),e.globalAlpha=.4,e.drawImage(kr,0,0);for(let t=0;t<a.length;t+=3){let n=a[t],r=n%R,i=(n-r)/R;e.globalAlpha=.9*a[t+1],e.drawImage(Or,a[t+2]*58,0,58,60,r*L-er,i*qn-er,58,60)}e.globalCompositeOperation=`source-over`;for(let t=0;t<a.length;t+=3){let n=a[t],r=n%R,i=(n-r)/R;e.globalAlpha=a[t+1],e.drawImage(Dr,a[t+2]*L,0,L,qn,r*L,i*qn,L,qn)}e.globalAlpha=1}var Oi=0,ki=0,Ai=!1,ji=0,Mi=()=>Math.floor(Oi/Bn);function Ni(e,t){let n=Mi();Oi+=t,ci();let r=e.getContext(`2d`),i=Math.min(2,window.devicePixelRatio||1),a=Math.round((e.clientWidth||340)*i),o=Math.round((e.clientHeight||600)*i);if((e.width!==a||e.height!==o)&&(e.width=a,e.height=o),r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation=`source-over`,r.globalAlpha=1,r.fillStyle=`#000`,r.fillRect(0,0,a,o),!fr||!dr){ji=Oi;return}let s=(Oi-ji)*tr,c=s<Br;c&&Ti(s);let l=c?Ir:yr,u=c?Lr:hr,d=a/o,f=Math.min(960,Math.max(zn,In*d)),p=f/d,m=a/f,h=-((960-f)/2)*m,g=-((In-p)/2)*m;Mi()!==n&&Mi()%3==0?(bi=Oi+.32,Si=2):Oi>=xi&&(bi=Oi+.06+Math.random()*.18,Si=.6+Math.random()*.8,xi=Oi+.5+Math.random()*1.8);let _=Oi<bi;r.setTransform(m,0,0,m,h,g),p>1200&&(r.globalAlpha=.6,r.save(),r.scale(1,-1),r.drawImage(pr,0,0),r.drawImage(pr,0,-2*In),r.restore(),r.globalAlpha=1),r.drawImage(dr,0,0),r.globalCompositeOperation=`lighter`,r.globalAlpha=.16,r.drawImage(pr,0,0),r.globalCompositeOperation=`source-over`,_i(t),r.globalAlpha=.62,r.drawImage(vr,0,0),r.globalAlpha=1,c&&Ei(r,s),r.globalAlpha=Vn+Math.sin(Oi*7)*.03+(_?.25*Si:0),r.drawImage(u,0,0),r.globalAlpha=1,Di(r,Oi,s,c);let v=25+1325*(Oi%Bn/Bn);for(let e=0;e<17;e++){let t=v-170+e*170/17;r.globalAlpha=.06+e/16*.6,r.drawImage(u,0,t,960,11,0,t,960,11)}r.globalAlpha=1;let y=Cr.getContext(`2d`);y.globalCompositeOperation=`source-over`,y.globalAlpha=1,y.clearRect(0,0,960,In);let b=Math.max(0,Math.min(Math.ceil(In/Wn)-1,Math.floor(v/Wn)));yi.forEach((e,t)=>{if(!e.on)return;let n=t*vi,r=e.len*(.7+.3*Math.sin(Oi*e.speed+e.phase));Math.random()<.05&&(r*=1.4+Math.random());let i=(b*Sr+Math.min(Sr-1,Math.floor(n/Un)))*4,a=xr[i],o=xr[i+1],s=xr[i+2],c=Math.min(2.6,1.6/Math.max(.2,Math.max(a,o,s)/255)),l=`${Math.min(255,a*c)|0},${Math.min(255,o*c)|0},${Math.min(255,s*c)|0}`;y.fillStyle=`rgba(${l},0.3)`,y.fillRect(n,v-r,e.width,r*.45),y.fillStyle=`rgba(${l},0.6)`,y.fillRect(n,v-r*.55,e.width,r*.3),y.fillStyle=`rgba(${l},1)`,y.fillRect(n,v-r*.25,e.width,r*.25),e.lead&&(y.fillStyle=`rgba(${l},0.35)`,y.fillRect(n,v,e.width,e.lead*(.6+.4*Math.sin(Oi*2+e.phase)))),r>150&&t%4==0&&(y.fillStyle=`rgba(${l},0.9)`,y.fillRect(n-1.5,v-r-4,4,4))}),y.fillStyle=`rgba(255,255,255,0.35)`;for(let e=0;e<960;e+=24)y.fillRect(e,v-Math.random()*2,18+Math.random()*8,1.5);y.globalCompositeOperation=`destination-in`,y.drawImage(l,0,0),r.globalCompositeOperation=`lighter`,r.drawImage(Cr,0,0),r.globalCompositeOperation=`source-over`,r.setTransform(1,0,0,1,0,0);let x=_?3+Math.floor(Math.random()*6*Si):+(Math.random()<.12);if(_||x){br||=Vr(a,o),(br.width!==a||br.height!==o)&&(br.width=a,br.height=o);let t=br.getContext(`2d`);t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,t.clearRect(0,0,a,o);let n=_?(Math.random()-.5)*14*Si*m:0,i=_?(Math.random()-.5)*6*Si*m:0;t.drawImage(e,n,i);for(let r=0;r<x;r++){let r=Math.random()*o,s=(4+Math.random()*(_?40:10))*m,c=(Math.random()-.5)*(_?80:24)*m*Si;t.drawImage(e,0,r,a,s,c+n,r+i,a,s)}if(_){let e=(6+Math.random()*10)*Si;t.setTransform(m,0,0,m,h+n,g+i),t.globalCompositeOperation=`lighter`,t.globalAlpha=.45,t.drawImage(gr,e,0),t.drawImage(_r,-e,0),t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-atop`,t.globalAlpha=1;for(let e=0;e<3;e++)t.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,t.fillRect(0,Math.random()*o,a,(1+Math.random()*2)*m);Math.random()<.3&&(t.fillStyle=`rgba(0,0,0,0.35)`,t.fillRect(0,0,a,o))}t.globalCompositeOperation=`destination-in`,t.setTransform(m,0,0,m,h,g),t.drawImage(l,0,0),r.drawImage(br,0,0)}r.fillStyle=`rgba(0,0,0,0.18)`;for(let e=Oi*40%4*m;e<o;e+=4*m)r.fillRect(0,e,a,1.5*m);let S=r.createRadialGradient(a/2,o/2,Math.min(a,o)*.42,a/2,o/2,Math.hypot(a,o)*.55);S.addColorStop(0,`rgba(0,0,0,0)`),S.addColorStop(1,`rgba(0,0,0,0.6)`),r.fillStyle=S,r.fillRect(0,0,a,o),r.setTransform(1,0,0,1,0,0)}var Pi=e=>`<div class="loader"><canvas class="ascii" id="ascii" role="img" aria-label="${e.replace(/"/g,`&quot;`)}"></canvas></div>`;function Fi(){let e=document.getElementById(`ascii`);if(Ai||(ji=Oi),e&&Ni(e,0),Ai)return;Ai=!0,ki=0;let t=e=>{let n=document.getElementById(`ascii`);if(!n){Ai=!1;return}let r=ki?Math.min(.1,(e-ki)/1e3):1/60;ki=e,Ni(n,r),requestAnimationFrame(t)};requestAnimationFrame(t)}var Ii=`<polygon points="53,0 351,0 298,68 0,68"/><polygon points="0,94 298,94 351,162 53,162"/><polygon points="53,188 351,188 298,256 0,256"/>`,Li=(e,t,n=``)=>`<svg class="${e}" viewBox="0 0 351 256" aria-hidden="true">${n}<g fill="${t}">${Ii}</g></svg>`,Ri=`<defs><linearGradient id="solgrad" gradientUnits="userSpaceOnUse" x1="0" y1="256" x2="351" y2="0"><stop offset="0" stop-color="#e028fc"/><stop offset="0.5" stop-color="#7c8be0"/><stop offset="1" stop-color="#1fe9b1"/></linearGradient></defs>`,zi=()=>`<div class="logo sol" aria-label="Solana">${Li(`sol-c`,`#00f0ff`)}${Li(`sol-p`,`#ff2bd6`)}${Li(`sol-main`,`url(#solgrad)`,Ri)}</div>`,Bi=1080,Vi=1350,Hi=`"Orbitron", "Rajdhani", sans-serif`,Ui=`"Rajdhani", -apple-system, sans-serif`,Wi={main:`#2bff88`,glow:`rgba(43,255,136,0.75)`,tint:[20,255,140]},Gi={main:`#ff3b6b`,glow:`rgba(255,59,107,0.75)`,tint:[255,40,90]},Ki=new Map;function qi(e,t){let n=`${t}:${e}`,r=Ki.get(n);return r||(r=new Promise(n=>{let r=new Image;t&&(r.crossOrigin=`anonymous`);let i=setTimeout(()=>n(null),6e3);r.onload=()=>{clearTimeout(i),n(r)},r.onerror=()=>{clearTimeout(i),n(null)},r.src=e}),Ki.set(n,r)),r}function Ji(e){try{let t=document.createElement(`canvas`);t.width=t.height=2;let n=t.getContext(`2d`);return n.drawImage(e,0,0,2,2),n.getImageData(0,0,1,1),!0}catch{return!1}}var Yi=(e,t)=>{let n=Math.abs(e);return t===`sol`?`${n>=100?n.toFixed(1):n>=1?n.toFixed(2):n.toFixed(3)} SOL`:`$${n>=1e3?Math.round(n).toLocaleString(`en-US`):n.toFixed(2)}`},Xi=e=>{let t=Math.abs(e);return`${e>=0?`+`:`−`}${t>=1e3?Math.round(t).toLocaleString(`en-US`):t>=100?Math.round(t):t.toFixed(1)}%`},Zi=(e,t)=>{let n=Math.max(0,t-e);if(n<60)return`${Math.max(1,Math.round(n))}s`;let r=Math.round(n/60);if(r<60)return`${r}m`;let i=Math.floor(r/60);return i<48?`${i}h ${r%60}m`:`${Math.floor(i/24)}d ${i%24}h`};function Qi(e,t,n,r,i,a){let o=r;for(;o>20&&(e.font=`${n} ${o}px ${i}`,!(e.measureText(t).width<=a));o-=4);return o}function $i(e,t,n,r,i,a){e.beginPath(),e.moveTo(t,n),e.lineTo(t+r-a,n),e.lineTo(t+r,n+a),e.lineTo(t+r,n+i),e.lineTo(t+a,n+i),e.lineTo(t,n+i-a),e.closePath()}function ea(e,t,n,r){let i=r?Wi:Gi;if(n===`oni`){let n=Vi/1200*960;e.drawImage(t,0,0,960,1200,150,0,n,Vi)}else{let n=1500,r=Vi/n*1024;e.drawImage(t,0,230,1024,n,418.4,0,r,Vi),e.save(),e.globalCompositeOperation=`multiply`;let a=e.createLinearGradient(0,0,Bi,Vi);a.addColorStop(0,`#00f0ff`),a.addColorStop(.45,`#7a3cff`),a.addColorStop(.7,`#ff2bd6`),a.addColorStop(1,`rgb(${i.tint.join(`,`)})`),e.fillStyle=a,e.fillRect(0,0,Bi,Vi),e.restore()}e.save(),e.globalCompositeOperation=`source-over`;let a=e.createLinearGradient(0,0,Bi,0);a.addColorStop(0,`rgba(5,1,15,0.97)`),a.addColorStop(.42,`rgba(5,1,15,0.82)`),a.addColorStop(.75,`rgba(5,1,15,0.15)`),a.addColorStop(1,`rgba(5,1,15,0.05)`),e.fillStyle=a,e.fillRect(0,0,Bi,Vi);let o=e.createLinearGradient(0,Vi*.55,0,Vi);o.addColorStop(0,`rgba(5,1,15,0)`),o.addColorStop(.55,`rgba(5,1,15,0.9)`),o.addColorStop(1,`rgba(5,1,15,0.98)`),e.fillStyle=o,e.fillRect(0,Vi*.55,Bi,Vi*.45);let s=e.createRadialGradient(Bi*.8,Vi*.35,50,Bi*.8,Vi*.35,Bi);s.addColorStop(0,`rgba(${i.tint.join(`,`)},0.18)`),s.addColorStop(1,`rgba(${i.tint.join(`,`)},0)`),e.globalCompositeOperation=`screen`,e.fillStyle=s,e.fillRect(0,0,Bi,Vi),e.restore()}function ta(e,t){let n=t||1,r=()=>(n=n*16807%2147483647)/2147483647;e.save(),e.fillStyle=`rgba(0,0,0,0.22)`;for(let t=0;t<Vi;t+=4)e.fillRect(0,t,Bi,1.5);for(let t=0;t<7;t++){let t=r()*Vi,n=3+r()*14,i=(r()-.5)*60;e.drawImage(e.canvas,0,t,Bi,n,i,t,Bi,n)}e.restore()}function na(e,t,n,r){let i=r/256,a=[[53,0,351,0,298,68,0,68],[0,94,298,94,351,162,53,162],[53,188,351,188,298,256,0,256]],o=e.createLinearGradient(t,n+r,t+351*i,n);o.addColorStop(0,`#e028fc`),o.addColorStop(.5,`#7c8be0`),o.addColorStop(1,`#1fe9b1`);let s=(r,o)=>{e.fillStyle=o;for(let o of a){e.beginPath();for(let a=0;a<8;a+=2)e.lineTo(t+r+o[a]*i,n+o[a+1]*i);e.closePath(),e.fill()}};e.save(),e.globalAlpha=.6,s(-4,`#00f0ff`),s(4,`#ff2bd6`),e.globalAlpha=1,s(0,o),e.restore()}function ra(e,t,n,r,i,a,o){if(e.save(),e.beginPath(),e.arc(n,r,i,0,Math.PI*2),e.closePath(),t){e.clip();let a=Math.max(2*i/t.width,2*i/t.height);e.drawImage(t,n-t.width*a/2,r-t.height*a/2,t.width*a,t.height*a)}else{let t=e.createLinearGradient(n-i,r-i,n+i,r+i);t.addColorStop(0,`#ff2bd6`),t.addColorStop(1,`#00f0ff`),e.fillStyle=t,e.fill(),e.fillStyle=`#05010f`,e.font=`900 ${Math.round(i*1.05)}px ${Hi}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(a.slice(0,1).toUpperCase()||`?`,n,r+i*.05)}e.restore(),e.save(),e.strokeStyle=o,e.lineWidth=5,e.shadowColor=o,e.shadowBlur=18,e.beginPath(),e.arc(n,r,i+3,0,Math.PI*2),e.stroke(),e.restore()}function ia(e,t,n,r,i,a){e.save(),e.textAlign=`left`,e.textBaseline=`alphabetic`,e.globalAlpha=.7,e.fillStyle=`#00f0ff`,e.fillText(t,n-6,r),e.fillStyle=`#ff2bd6`,e.fillText(t,n+6,r),e.globalAlpha=1,e.shadowColor=a,e.shadowBlur=40,e.fillStyle=i,e.fillText(t,n,r),e.shadowBlur=0,e.fillText(t,n,r),e.restore()}async function aa(e,t,n,r){e.width=Bi,e.height=Vi;let i=e.getContext(`2d`);await Promise.all([document.fonts.load(`900 100px "Orbitron"`),document.fonts.load(`700 40px "Rajdhani"`),document.fonts.load(`500 40px "Rajdhani"`)]).catch(()=>{});let[a,o,s]=await Promise.all([qi(r,!1),t.logo?qi(t.logo,!0):Promise.resolve(null),t.user?.photo?qi(t.user.photo,!0):Promise.resolve(null)]),c=t.pct>=0,l=c?Wi:Gi;i.fillStyle=`#05010f`,i.fillRect(0,0,Bi,Vi),a&&ea(i,a,n,c),ta(i,Math.round(t.lastAt+t.pct*1e3)),na(i,72,70,46),i.fillStyle=`#e8f9ff`,i.font=`900 34px ${Hi}`,i.textBaseline=`alphabetic`,i.textAlign=`left`,i.shadowColor=`rgba(0,240,255,0.8)`,i.shadowBlur=16,i.fillText(`KRYPTO SNATCHER`,152,108),i.shadowBlur=0;let u=230;t.user?(ra(i,s&&Ji(s)?s:null,114,u,42,t.user.name,`#ff2bd6`),i.fillStyle=`#e8f9ff`,i.font=`700 44px ${Ui}`,i.fillText(t.user.name.slice(0,22),180,u+15),u+=110):u+=30,ra(i,o&&Ji(o)?o:null,122,u+40,50,t.symbol,l.main),i.fillStyle=`#ffffff`,Qi(i,`$${t.symbol}`,900,64,Hi,560),i.fillText(`$${t.symbol}`,197,u+50),i.fillStyle=`#8f9cc8`,i.font=`500 32px ${Ui}`,i.fillText(t.name.slice(0,32),200,u+92);let d=Xi(t.pct);Qi(i,d,900,190,Hi,936),ia(i,d,72,u+330,l.main,l.glow),i.font=`700 58px ${Ui}`,i.fillStyle=l.main,i.fillStyle=t.pnl>=0?Wi.main:Gi.main,i.fillText(`${t.pnl>=0?`+`:`−`}${Yi(t.pnl,t.unit)} ${t.pnl>=0?`profit`:`loss`}`,76,u+420);let f=t.finished?c?`PRINTED`:`REKT`:`STILL HOLDING`;i.font=`900 30px ${Hi}`;let p=i.measureText(f).width+48;$i(i,72,u+460,p,56,12),i.fillStyle=c?`rgba(43,255,136,0.14)`:`rgba(255,59,107,0.14)`,i.fill(),i.strokeStyle=l.main,i.lineWidth=3,i.stroke(),i.fillStyle=l.main,i.fillText(f,96,u+499),$i(i,72,1020,936,200,22),i.fillStyle=`rgba(10,15,36,0.86)`,i.fill(),i.strokeStyle=`rgba(0,240,255,0.55)`,i.lineWidth=2,i.stroke(),[{k:`PUT IN`,v:Yi(t.paid,t.unit),c:`#e8f9ff`},{k:t.finished?`GOT BACK`:`WORTH NOW`,v:Yi(t.got,t.unit),c:l.main},{k:`HELD`,v:Zi(t.firstAt,t.lastAt),c:`#e8f9ff`}].forEach((e,t)=>{let n=72+312*t+36;i.fillStyle=`#8f9cc8`,i.font=`700 26px ${Hi}`,i.fillText(e.k,n,1090),i.fillStyle=e.c,Qi(i,e.v,700,54,Ui,262),i.fillText(e.v,n,1160),t&&(i.fillStyle=`rgba(0,240,255,0.25)`,i.fillRect(72+312*t,1060,2,120))}),i.fillStyle=`#8f9cc8`,i.font=`500 30px ${Ui}`;let m=new Date(t.lastAt*1e3).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`});i.fillText(`${t.wallets} wallet${t.wallets===1?``:`s`} · ${m}`,72,1278),i.textAlign=`right`,i.fillStyle=`#00f0ff`,i.font=`700 28px ${Hi}`,i.fillText(c?`> GG_`:`> RUN IT BACK_`,1008,1278),i.textAlign=`left`}function oa(e,t){return new Promise(n=>{try{e.toBlob(e=>n(e?new File([e],t,{type:`image/png`}):null),`image/png`)}catch{n(null)}})}var sa=`solHourly`,ca=3600,la=null,ua=()=>la??=P.get(sa).then(e=>new Map(Object.entries(JSON.parse(e||`{}`)).map(([e,t])=>[Number(e),Number(t)]))).catch(()=>new Map);async function da(e,t){let n=new Map,r=e=>new Date(e*1e3).toISOString(),i=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/candles?granularity=3600&start=${r(e)}&end=${r(t)}`,{signal:AbortSignal.timeout(6e3)});if(!i.ok)throw Error(`coinbase ${i.status}`);for(let[e,,,t,r]of await i.json())n.set(e,(t+r)/2);return n}async function fa(e,t){let n=new Map,r=await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=${e-ca}&to=${t+ca}`,{signal:AbortSignal.timeout(6e3)});if(!r.ok)throw Error(`coingecko ${r.status}`);let{prices:i}=await r.json();for(let[e,t]of i){let r=Math.floor(e/1e3/ca)*ca;n.has(r)||n.set(r,t)}return n}async function pa(e){let t=await ua(),n=Date.now()/1e3,r=[...new Set(e.filter(e=>e>0).map(e=>Math.floor(e/ca)*ca))].sort((e,t)=>e-t).filter(e=>!t.has(e)),i=!1;for(let e=0;e<r.length;){let a=r[e],o=Math.min(a+299*ca,Math.floor(n/ca)*ca),s;try{s=await da(a,o)}catch{s=await fa(a,o).catch(()=>new Map)}if(!s.size)break;for(let[e,r]of s)e<n-2*ca&&!t.has(e)&&(t.set(e,r),i=!0);for(let[e,n]of s)t.has(e)||t.set(e,n);for(;e<r.length&&r[e]<=o;)e++}if(i){let e=Object.fromEntries([...t].filter(([e])=>e<n-2*ca).map(([e,t])=>[e,Math.round(t*100)/100]));P.set(sa,JSON.stringify(e)).catch(()=>{})}let a=new Map;for(let n of e){let e=Math.floor(n/ca)*ca;for(let r of[0,-1,1,-2,2,-3,3]){let i=t.get(e+r*ca);if(i){a.set(n,i);break}}}return a}var ma=`fullscreen`,ha=`<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M2 7V2h5M13 2h5v5M18 13v5h-5M7 18H2v-5"/></svg>`,ga=`<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M7 2v5H2M18 7h-5V2M13 18v-5h5M2 13h5v5"/></svg>`,_a=()=>!!N&&N.isVersionAtLeast(`8.0`)&&typeof N.requestFullscreen==`function`,va=()=>!!N?.isFullscreen;function ya(){document.documentElement.classList.toggle(`tgfull`,va());let e=document.getElementById(`fsBtn`);e&&(e.innerHTML=va()?ga:ha,e.setAttribute(`aria-label`,va()?`Leave full screen`:`Full screen`),e.classList.toggle(`on`,va()))}function ba(e){try{localStorage.setItem(ma,e?`1`:`0`)}catch{}}var xa=()=>_a()?`<button type="button" id="fsBtn" class="fsbtn" aria-label="Full screen">${va()?ga:ha}</button>`:``;function Sa(){let e=document.getElementById(`fsBtn`);e&&(ya(),e.addEventListener(`click`,()=>{F();try{va()?(ba(!1),N.exitFullscreen?.()):(ba(!0),N.unlockOrientation?.(),N.requestFullscreen())}catch{}}))}function Ca(){if(_a())try{for(let e of[`fullscreenChanged`,`fullscreenFailed`])N.onEvent?.(e,ya);ya();let e=!0;try{e=localStorage.getItem(ma)!==`0`}catch{}e&&!va()&&(N.unlockOrientation?.(),N.requestFullscreen())}catch{}}var wa=`https://api.geckoterminal.com/api/v2`,Ta=null;function Ea(e,t){Ta=n=>`${e}/gt${n}${n.includes(`?`)?`&`:`?`}api-key=${encodeURIComponent(t)}`}var Da=!0,Oa=0,ka=0,Aa=6500;async function ja(e){if(Date.now()<Oa)return null;let t=Math.max(0,ka-Date.now());ka=Math.max(Date.now(),ka)+Aa,t&&await new Promise(e=>setTimeout(e,t));let n=[],r=Ta?Ta(e):null;Da&&n.push([wa+e,!0]),r&&n.push([r,!1]),Da||n.push([wa+e,!0]);for(let[e,t]of n)try{let n=await fetch(e,{headers:{accept:`application/json`}});if(n.status===429)return Oa=Date.now()+6e4,null;if(!n.ok){if(n.status===404)return null;continue}return t&&!Da&&(Da=!0),await n.json()}catch{t&&(Da=!1)}return null}var Ma=432e5,Na=new Map;function Pa(e){let t=Na.get(e);return t||(t=(async()=>{try{let t=JSON.parse(localStorage.getItem(`gtpool:${e}`)||`null`);if(t&&Date.now()-t.at<Ma&&t.born!==void 0)return{p:t.p,born:t.born}}catch{}let t=(await ja(`/networks/solana/tokens/${e}/pools?page=1`))?.data?.[0]?.attributes;if(!t?.address)return null;let n=t.pool_created_at?Date.parse(t.pool_created_at):NaN,r={p:t.address,born:Number.isFinite(n)?Math.floor(n/1e3):null};try{localStorage.setItem(`gtpool:${e}`,JSON.stringify({...r,at:Date.now()}))}catch{}return r})(),Na.set(e,t),t.then(t=>t||Na.delete(e)).catch(()=>Na.delete(e)),t)}var Fa=[{key:`1m`,tf:`minute`,agg:1,sec:60},{key:`5m`,tf:`minute`,agg:5,sec:300},{key:`15m`,tf:`minute`,agg:15,sec:900},{key:`1h`,tf:`hour`,agg:1,sec:3600},{key:`4h`,tf:`hour`,agg:4,sec:14400},{key:`1D`,tf:`day`,agg:1,sec:86400},{key:`All`,tf:`day`,agg:1,sec:86400}],Ia=Fa[Fa.length-1],La=72,Ra=240,za=4,Ba=[{tf:`minute`,agg:1,sec:60},{tf:`minute`,agg:5,sec:300},{tf:`minute`,agg:15,sec:900},{tf:`hour`,agg:1,sec:3600},{tf:`hour`,agg:4,sec:14400},{tf:`hour`,agg:12,sec:43200},{tf:`day`,agg:1,sec:86400}];function Va(e){for(let t of Ba)if(e/t.sec<=Ra)return{...t,limit:Math.min(1e3,Math.ceil(e/t.sec)+2),days:1};let t=Math.ceil(e/86400/Ra);return{tf:`day`,agg:1,sec:86400*t,limit:1e3,days:t}}function Ha(e,t){let n=[];for(let r of e){let e=Math.floor(r.t/t)*t,i=n[n.length-1];i&&i.t===e?(i.h=Math.max(i.h,r.h),i.l=Math.min(i.l,r.l),i.c=r.c):n.push({...r,t:e})}return n}async function Ua(e,t,n,r,i){let a=`aggregate=${n.agg}&limit=${r}&currency=usd&token=${t}&include_empty_intervals=true${i?`&before_timestamp=${i}`:``}`,o=(await ja(`/networks/solana/pools/${e}/ohlcv/${n.tf}?${a}`))?.data?.attributes?.ohlcv_list;return Array.isArray(o)?o.filter(e=>Array.isArray(e)&&e.length>=5&&e.slice(0,5).every(e=>Number.isFinite(Number(e)))).map(([e,t,n,r,i])=>({t:Number(e),o:Number(t),h:Number(n),l:Number(r),c:Number(i)})).sort((e,t)=>e.t-t.t):null}var Wa=`₀₁₂₃₄₅₆₇₈₉`;function Ga(e){if(!Number.isFinite(e)||e<=0)return`$0`;if(e>=1e3)return`$${Math.round(e).toLocaleString(`en-US`)}`;if(e>=1)return`$${e.toFixed(2)}`;if(e>=.01)return`$${e.toFixed(4)}`;let t=Math.floor(-Math.log10(e)),n=Math.round(e*10**(t+4)).toString().slice(0,4);return t<4?`$0.${`0`.repeat(t)}${n}`:`$0.0${String(t).split(``).map(e=>Wa[Number(e)]).join(``)}${n}`}var Ka=`#39ff88`,qa=`#ff3b6b`,Ja=`#00f0ff`,Ya=`#ff2bd6`,Xa=`#ffd84a`,Za=`#8f9cc8`,Qa=`chartFrame`,$a=`<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M2 7V2h5M13 2h5v5M18 13v5h-5M7 18H2v-5"/></svg>`,eo=`<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M4 4l12 12M16 4L4 16"/></svg>`,to=()=>`<div class="chart" id="chart">
  <div class="chartbar"><span class="cname" id="cName"></span><span class="cprice" id="cPrice">…</span><span class="cmove" id="cMove"></span><button type="button" class="cfull" id="cFull" aria-label="Full screen">${$a}</button><span class="ctabs">${Fa.map(e=>`<button type="button" data-f="${e.key}">${e.key}</button>`).join(``)}</span></div>
  <canvas id="chartCanvas"></canvas>
  <div class="cnote" id="cNote">Loading the chart…</div>
</div>`,no=()=>window.Telegram?.WebApp;function ro(e,t=``){let n=document.getElementById(`chart`),r=document.getElementById(`chartCanvas`),i=document.getElementById(`cNote`),a=r.getContext(`2d`),o=Fa[0];try{o=Fa.find(e=>e.key===localStorage.getItem(Qa))??Fa[0]}catch{}let s=[],c={trades:[],paid:null,targets:[]},l=null,u=[],d=1,f=0,p=0,m,h=o,g=null,_=null,v=null,y=null,b=()=>n.isConnected&&(!y||y.holder.isConnected);document.getElementById(`cName`).textContent=t;let x=()=>n.querySelectorAll(`.ctabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.f===o.key)),S=()=>{if(l===null||!s.length)return;let e=Date.now()/1e3,t=s[s.length-1],n=Math.floor(e/h.sec)*h.sec;n>t.t?(s.push({t:n,o:t.c,h:Math.max(t.c,l),l:Math.min(t.c,l),c:l}),o!==Ia&&s.length>La&&s.shift()):n===t.t&&(t.c=l,t.h=Math.max(t.h,l),t.l=Math.min(t.l,l))},C=async()=>{let t=++p;if(m===void 0&&(m=await Pa(e)),t!==p||!b())return;if(!m){i.textContent=`No chart for this coin yet (GeckoTerminal hasn't listed it).`;return}let n;if(o===Ia?n=await w(m,t):(h=o,n=await Ua(m.p,e,o,La)),t!==p||!b())return;if(!n){i.textContent=Date.now()<Oa?`Chart paused for a minute (too many requests). It picks up again by itself.`:`Couldn't load the chart right now. Trying again shortly.`;return}if(!n.length){i.textContent=`No trades in this time frame yet.`,s=[],A();return}s=n,f=Date.now();let r=s[s.length-1],a=u.filter(e=>e.at>=(r.t-h.sec)*1e3);if(a.length){let e=r.c/a[a.length-1].p;e>.5&&e<1.5&&(d=d===1?e:d*.5+e*.5)}u.length&&(l=u[u.length-1].p*d),S(),i.textContent=``,A()},w=async(t,n)=>{let r=Date.now()/1e3,a=()=>n===p&&b(),o=e=>_.days>1?Ha(e,_.sec):e;if(!_||!g){let n=null,c=t.born?r-t.born:null;if(c===null)for(let i of[Ba[Ba.length-1],Ba[0]]){let o=await Ua(t.p,e,i,1e3);if(!o||!a())return o;if(n={size:i,list:o},c=o.length?r-o[0].t+i.sec:i.sec,o.length>=2)break}_=Va(Math.max(c??60,60)),h=_;let l=n&&n.size.tf===_.tf&&n.size.agg===_.agg?n.list:await Ua(t.p,e,_,_.limit);if(!l||!a())return l;for(let n=1;_.tf===`day`&&n<za&&l.length>=150&&!(t.born&&l[0].t<=t.born+86400);n++){s=o(l),i.textContent=`Loading older candles…`,A();let n=await Ua(t.p,e,_,1e3,l[0].t);if(!a())return null;let r=(n??[]).filter(e=>e.t<l[0].t);if(!r.length)break;l=[...r,...l]}return i.textContent=``,g=l,o(l)}h=_;let c=await Ua(t.p,e,_,Math.min(_.limit,200));if(!c)return c;let l=new Map(g.map(e=>[e.t,e]));for(let e of c)l.set(e.t,e);return g=[...l.values()].sort((e,t)=>e.t-t.t),o(g)};(async()=>{x();for(let e=0;b();e++){if(e&&await new Promise(e=>setTimeout(e,3e4)),!b())return;document.hidden||await C().catch(()=>{})}})(),n.querySelectorAll(`.ctabs button`).forEach(e=>e.addEventListener(`click`,()=>{let t=Fa.find(t=>t.key===e.dataset.f);if(t&&t!==o){o=t;try{localStorage.setItem(Qa,t.key)}catch{}x(),s=[],h=t===Ia&&_?_:t,i.textContent=`Loading the chart…`,A(),C().catch(()=>{})}}));let T=e=>{let t=r.getBoundingClientRect();v=y?.rot?e.clientY-t.top:e.clientX-t.left,A()};r.addEventListener(`pointerdown`,T),r.addEventListener(`pointermove`,e=>v!==null&&T(e));let E=()=>{v=null,A()};r.addEventListener(`pointerup`,E),r.addEventListener(`pointercancel`,E),r.addEventListener(`pointerleave`,E),window.addEventListener(`resize`,()=>b()&&(y?O():A()));let D=document.getElementById(`cFull`),O=()=>{if(!y)return;let e=window.innerWidth,t=window.innerHeight;y.rot=t>e,y.wrap.classList.toggle(`rot`,y.rot),y.wrap.style.width=`${y.rot?t:e}px`,y.wrap.style.height=`${y.rot?e:t}px`,y.wrap.style.transform=y.rot?`translateX(${e}px) rotate(90deg)`:``,A()},k=()=>O(),ee=()=>{if(y)return;let e=document.createComment(`chart`);n.before(e);let t=document.createElement(`div`);t.className=`chartfull`;let r=document.createElement(`div`);r.className=`fullwrap`,r.append(n),t.append(r),document.body.append(t),n.classList.add(`big`),document.documentElement.classList.add(`chartopen`),D.innerHTML=eo,D.setAttribute(`aria-label`,`Close full screen`);let i=no(),a=!1;try{i?.isVersionAtLeast?.(`8.0`)&&i.requestFullscreen&&!i.isFullscreen&&(i.requestFullscreen(),a=!0);for(let e of[`fullscreenChanged`,`viewportChanged`,`safeAreaChanged`,`contentSafeAreaChanged`])i?.onEvent?.(e,k)}catch{}let o=window.setInterval(()=>y&&!y.holder.isConnected&&te(),1e3);y={shell:t,wrap:r,holder:e,rot:!1,tgFull:a,timer:o},O(),requestAnimationFrame(O)},te=()=>{if(!y)return;let e=y;y=null,clearInterval(e.timer),e.holder.isConnected?e.holder.replaceWith(n):n.remove(),e.shell.remove(),n.classList.remove(`big`),document.documentElement.classList.remove(`chartopen`),D.innerHTML=$a,D.setAttribute(`aria-label`,`Full screen`);let t=no();try{for(let e of[`fullscreenChanged`,`viewportChanged`,`safeAreaChanged`,`contentSafeAreaChanged`])t?.offEvent?.(e,k);e.tgFull&&t?.isFullscreen&&t.exitFullscreen?.()}catch{}v=null,A()};D.addEventListener(`click`,()=>y?te():ee());function A(){if(!b())return;let e=Math.min(3,window.devicePixelRatio||1),t=r.clientWidth||340,n=r.clientHeight||220;(r.width!==Math.round(t*e)||r.height!==Math.round(n*e))&&(r.width=Math.round(t*e),r.height=Math.round(n*e)),a.setTransform(e,0,0,e,0,0),a.clearRect(0,0,t,n);let u=document.getElementById(`cPrice`),d=document.getElementById(`cMove`);if(!s.length){u&&(u.textContent=l?Ga(l):`…`),d&&(d.textContent=``);return}let p=t-62,m=n-14-18,g=s.length,_=p/(o===Ia?Math.max(g,30):La),y=p-g*_,x=1/0,S=-1/0;for(let e of s)x=Math.min(x,e.l),S=Math.max(S,e.h);let C=S-x||S*.02||1,w=[];c.paid&&w.push({p:c.paid,label:`PAID`,col:`#ffb800`});for(let e of c.targets)w.push({p:e.usd,label:e.label,col:Xa});for(let e of w)e.p>=x-C*.8&&e.p<=S+C*.8&&(x=Math.min(x,e.p),S=Math.max(S,e.p));let T=(S-x||S*.02||1)*.08;x-=T,S+=T;let E=e=>14+(1-(e-x)/(S-x))*m;a.font=`600 10px "Rajdhani", sans-serif`,a.textBaseline=`middle`,a.textAlign=`left`;let D=E(s[g-1].c),O=m>260?6:4;for(let e=0;e<O;e++){let t=x+(S-x)*(e+.5)/O,n=Math.round(E(t))+.5,r=Math.abs(n-D)<14;a.strokeStyle=`rgba(0,240,255,0.08)`,a.lineWidth=1,a.beginPath(),a.moveTo(0,n),a.lineTo(p,n),a.stroke(),a.fillStyle=Za,r||a.fillText(Ga(t),p+6,n)}a.textAlign=`center`,a.textBaseline=`alphabetic`;let k=s[g-1].t-s[0].t+h.sec,ee=e=>{let t=new Date(e*1e3);if(k>=2592e4)return t.toLocaleDateString(`en-US`,{month:`short`,year:`2-digit`}).replace(` `,` '`);if(k>=259200)return t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`});let n=t.toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`}).replace(/\s?[AP]M$/i,``);return k>=86400?`${t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})} ${n}`:n};for(let e of p>560?[.08,.29,.5,.71,.92]:[.15,.5,.85]){let t=Math.floor(e*(g-1));a.fillStyle=Za,a.fillText(ee(s[t].t),y+(t+.5)*_,n-4)}let te=(e,t,n,r)=>{let i=e>S,o=e<x;a.setLineDash([4,4]),a.strokeStyle=n,a.globalAlpha=.7,a.lineWidth=1;let s=i?14:o?14+m:Math.round(E(e))+.5;if(r===`line`&&!i&&!o&&(a.beginPath(),a.moveTo(0,s),a.lineTo(p,s),a.stroke()),a.setLineDash([]),a.globalAlpha=1,r===`line`)return;a.font=`700 9px "Orbitron", sans-serif`,a.textAlign=`left`,a.textBaseline=`middle`,a.fillStyle=n;let c=`${t} ${Ga(e)}${i?` ↑`:o?` ↓`:``}`,l=i?20:o?14+m-6:s-7;a.fillStyle=`rgba(5,1,15,0.8)`,a.fillRect(2,l-6,a.measureText(c).width+6,12),a.fillStyle=n,a.fillText(c,5,l)};for(let e of w)te(e.p,e.label,e.col,`line`);let A=Math.max(1.5,_*.62);s.forEach((e,t)=>{let n=y+(t+.5)*_,r=e.c>=e.o?Ka:qa;a.strokeStyle=r,a.fillStyle=r,a.shadowColor=r,a.shadowBlur=t===g-1?12:5,a.lineWidth=1,a.beginPath(),a.moveTo(Math.round(n)+.5,E(e.h)),a.lineTo(Math.round(n)+.5,E(e.l)),a.stroke();let i=E(e.o),o=E(e.c);a.fillRect(n-A/2,Math.min(i,o),A,Math.max(1,Math.abs(o-i)))}),a.shadowBlur=0;for(let e of w)te(e.p,e.label,e.col,`label`);let ne=s[0].t,re=Math.max(1,Math.ceil(12/_)),ie=new Map;for(let e of c.trades){let t=Math.floor((e.at-ne)/h.sec);if(t<0||t>=g)continue;let n=`${Math.floor((g-1-t)/re)}:${e.side}`,r=ie.get(n)??{i:t,side:e.side,count:0};r.count++,r.i=Math.max(r.i,t),ie.set(n,r)}for(let e of ie.values()){let t=e.i,n=s[t],r=y+(t+.5)*_,i=e.side===1,o=i?E(n.l)+10:E(n.h)-10;a.fillStyle=i?Ka:Ya,a.shadowColor=a.fillStyle,a.shadowBlur=8,a.beginPath(),i?(a.moveTo(r,o-5),a.lineTo(r+5,o+4),a.lineTo(r-5,o+4)):(a.moveTo(r,o+5),a.lineTo(r+5,o-4),a.lineTo(r-5,o-4)),a.closePath(),a.fill(),a.shadowBlur=0,a.font=`800 8px "Orbitron", sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`${i?`B`:`S`}${e.count>1?e.count:``}`,r,i?o+12:o-12)}let ae=s[g-1],oe=Math.round(E(ae.c))+.5;a.setLineDash([2,3]),a.strokeStyle=Ja,a.globalAlpha=.8,a.beginPath(),a.moveTo(0,oe),a.lineTo(p,oe),a.stroke(),a.setLineDash([]),a.globalAlpha=1,a.fillStyle=Ja,a.shadowColor=Ja,a.shadowBlur=10,a.fillRect(p+1,oe-8,61,16),a.shadowBlur=0,a.fillStyle=`#000`,a.font=`700 10px "Rajdhani", sans-serif`,a.textAlign=`left`,a.textBaseline=`middle`,a.fillText(Ga(ae.c),p+5,oe+.5);let se=ae;if(v!==null){let e=Math.max(0,Math.min(g-1,Math.floor((v-y)/_)));se=s[e];let t=y+(e+.5)*_;a.strokeStyle=`rgba(232,249,255,0.5)`,a.beginPath(),a.moveTo(Math.round(t)+.5,14),a.lineTo(Math.round(t)+.5,14+m),a.stroke(),a.fillStyle=`rgba(5,1,15,0.85)`,a.fillRect(4,14,168,30),a.fillStyle=`#e8f9ff`,a.font=`600 10px "Rajdhani", sans-serif`,a.textAlign=`left`,a.textBaseline=`top`,a.fillText(`${new Date(se.t*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}`,9,17),a.fillText(`O ${Ga(se.o)}  H ${Ga(se.h)}  L ${Ga(se.l)}  C ${Ga(se.c)}`,9,30)}if(u&&(u.textContent=Ga(se.c)),d){let e=s[0].o,t=e>0?(ae.c/e-1)*100:0,n=ae.t-s[0].t+h.sec,r=86400,i=n>=365*r?`${Math.round(n/(365*r)*10)/10}y`:n>=60*r?`${Math.round(n/(30*r))}mo`:n>=2*r?`${Math.round(n/r)}d`:n>=7200?`${Math.round(n/3600)}h`:`${Math.round(n/60)}m`;d.textContent=`${t>=0?`▲`:`▼`} ${Math.abs(t)>=100?Math.round(Math.abs(t)):Math.abs(t).toFixed(1)}% · ${i}`,d.classList.toggle(`down`,t<0)}f&&!/^(Couldn|Chart paused|Loading)/.test(i.textContent??``)&&(i.textContent=``)}return{live(e){e>0&&b()&&(u.push({at:Date.now(),p:e}),u.length>40&&(u=u.slice(-40)),l=e*d,S(),A())},marks(e){c=e,A()}}}var io=e=>Object.freeze(e());function ao(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}function oo(e){if(!ao(e))throw TypeError(`Uint8Array expected`)}function so(e,t){if(typeof t!=`string`)throw TypeError(`${e}: string expected`);return!0}function co(e,t=`number`){if(typeof e!=`number`)throw TypeError(`${t}: expected number, got ${typeof e}`);if(!Number.isSafeInteger(e))throw RangeError(`${t}: expected safe integer, got ${e}`)}function lo(...e){let t=e=>e,n=(e,t)=>n=>e(t(n));return{encode:e.map(e=>e.encode).reduceRight(n,t),decode:e.map(e=>e.decode).reduce(n,t)}}var uo=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})(),fo=(()=>{try{let e=new TextDecoder;return e.decode(Uint8Array.of(65,48,43,127))===`A0+`?e:void 0}catch{return}})(),po=8192;function mo(e){let t=e.length;if(fo!==void 0&&t>=12)return fo.decode(e);if(t<=po)return String.fromCharCode.apply(null,e);let n=``;for(let r=0;r<t;r+=po)n+=String.fromCharCode.apply(null,e.subarray(r,r+po));return n}function ho(e){if(co(e),e<=0||e>8)throw RangeError(`radix2: bits should be in (0..8]`);let t=uo[e]-1;return{encode:n=>{oo(n);let r=n.length,i=new Uint8Array(Math.ceil(r*8/e)),a=0,o=0,s=0;for(let c=0;c<r;)for(c+2<r?(a=a<<24|n[c]<<16|n[c+1]<<8|n[c+2],o+=24,c+=3):(a=(a<<8|n[c])&65535,o+=8,c++);o-=e,i[s++]=a>>o&t,!(o<e););return o>0&&(i[s]=a<<e-o&t),i},decode:t=>{let n=t.length,r=new Uint8Array(Math.floor(n*e/8)),i=0,a=0,o=0;for(let s=0;s<n;s++)for(i=(i<<e|t[s])&65535,a+=e;a>=8;a-=8)r[o++]=i>>a-8&255;if(i=i<<8-a&255,a>=e)throw Error(`Excess padding`);if(i>0)throw Error(`Non-zero padding: ${i}`);return r}}}function go(e,t){let n=e.length;if(n>128)throw Error(`alphabet: max 128 letters`);let r=new Uint8Array(n),i=new Int8Array(128).fill(-1);for(let t=0;t<n;t++){let n=e.charCodeAt(t);if(e.codePointAt(t)!==n||n>127)throw Error(`alphabet: single-char ASCII letters only`);r[t]=n,i[n]=t}if(t!==void 0)for(let e of Object.keys(t)){let n=e.charCodeAt(0),r=i[t[e].charCodeAt(0)];if(e.length!==1||n>127||r===void 0||r===-1)throw Error(`alphabet: invalid alias ${e}`);i[n]=r}return{encode:e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++){let i=e[n],a=r[i];if(a===void 0)throw Error(`alphabet.encode: invalid digit ${i}`);t[n]=a}return mo(t)},decode:t=>{so(`decode`,t);let n=t.length,r=new Uint8Array(n);for(let a=0;a<n;a++){let n=t.charCodeAt(a),o=n<128?i[n]:-1;if(o===-1)throw Error(`Unknown letter "${t[a]}". Allowed: ${e}`);r[a]=o}return r}}}function _o(e,t=`=`){return co(e),so(`padding`,t),{encode(n){for(;n.length*e%8;)n+=t;return n},decode(n){so(`decode`,n);let r=n.length;if(r*e%8)throw Error(`padding: invalid length`);for(;r>0&&n[r-1]===t;r--)if((r-1)*e%8==0)throw Error(`padding: excess padding`);return n.slice(0,r)}}}var vo=typeof Uint8Array.from([]).toBase64==`function`&&typeof Uint8Array.fromBase64==`function`,yo=/[\t\n\f\r ]/,bo=(e,t)=>{so(`base64`,e);let n=t?`base64url`:`base64`;if(e.length>0&&yo.test(e))throw Error(`invalid base64`);return Uint8Array.fromBase64(e,{alphabet:n,lastChunkHandling:`strict`})},xo=io(()=>lo(ho(6),go(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),_o(6))),So=io(()=>vo?{encode(e){return oo(e),e.toBase64()},decode(e){return bo(e,!1)}}:xo),Co=656356768,wo=65536,To=2048,Eo=4096,Do=(e,t)=>({encode:n=>{oo(n);let r=n.length;if(r===0)return new Uint8Array;if(r>=wo)throw Error(`invalid length`);let i=0;for(;i<r-1&&n[i]===0;)i++;let a=Math.ceil(r/2),o=new Uint16Array(a),s=r&1;s&&(o[0]=n[0]);for(let e=s,t=s;e<r;e+=2,t++)o[t]=n[e]<<8|n[e+1];let c=[],l=0;for(;l<a;){let e=0;for(let n=l;n<a;n++){let r=e*65536+o[n],i=Math.floor(r/t);e=r-i*t,o[n]=i,i===0&&n===l&&l++}c.push(e)}let u=c.length-1,d=u*5;for(let t=c[u];d++,!(t<e);t=Math.floor(t/e));let f=new Uint8Array(i+d),p=f.length-1;for(let t=0;t<u;t++){let n=c[t];for(let t=0;t<5;t++)f[p--]=n%e,n=Math.floor(n/e)}for(let t=c[u];p>=i;t=Math.floor(t/e))f[p--]=t%e;return f},decode:t=>{oo(t);let n=t.length;if(n===0)return new Uint8Array;if(n>=wo)throw Error(`invalid length`);let r=0;for(;r<n-1&&t[r]===0;)r++;let i=new Uint16Array(Math.ceil(n*6/16)+1),a=0,o=0,s=n%5||5;for(;o<n;){let n=0,r=1;for(let i=o+s;o<i;o++){let i=t[o];if(i>=e)throw Error(`invalid integer: ${i}`);n=n*e+i,r*=e}s=5;let c=n;for(let e=0;e<a;e++){let t=i[e]*r+c;c=Math.floor(t/65536),i[e]=t-c*65536}for(;c>0;c=Math.floor(c/65536))i[a++]=c%65536}let c=a===0?1:a*2-(i[a-1]<256),l=new Uint8Array(r+c),u=l.length-1;for(let e=0;e<a;e++){let t=i[e];l[u--]=t&255,u>=r&&(l[u--]=t>>8)}return l}}),Oo=(e,t)=>{let n=go(t);return{encode(t){if(oo(t),t.length>To)throw Error(`invalid length`);return n.encode(e.encode(t))},decode(t){if(so(`baseN.decode`,t),t.length>Eo)throw Error(`invalid length`);return e.decode(n.decode(t))}}},ko=Do(58,Co),Ao=e=>Oo(ko,e),jo=io(()=>Ao(`123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`)),Mo=`https://api.jup.ag`,No=!1;function Po(e){Mo=`${e}/jup`,No=!0}var Fo=`So11111111111111111111111111111111111111112`,Io=6e4,Lo=60,Ro={trade:0,screen:6,background:24},zo={trade:0,screen:1,background:2},Bo=12,Vo=[],Ho=null,Uo=0,Wo=0,Go=[],Ko,qo=e=>new Promise(t=>setTimeout(t,e));function Jo(e,t){if(t<Uo)return Uo-t;if(Wo>=Bo)return-1;for(;Vo.length&&Vo[0]<=t-Io;)Vo.shift();let n=Lo-Ro[e],r=Vo.length<n?0:Vo[Vo.length-n]+Io-t;return Ho&&t<Ho.reset&&Ho.left-Vo.filter(e=>e>Ho.at).length<=Ro[e]&&(r=Math.max(r,Ho.reset-t)),r}function Yo(){for(clearTimeout(Ko);Go.length;){let e=Jo(Go[0].lane,Date.now());if(e>0&&(Ko=setTimeout(Yo,e)),e!==0)return;Vo.push(Date.now()),Wo++,Go.shift().go()}}var Xo=e=>new Promise(t=>{let n=Go.findIndex(t=>zo[t.lane]>zo[e]);n<0?Go.push({lane:e,go:t}):Go.splice(n,0,{lane:e,go:t}),Yo()}),Zo=`jupPassInHeader`,Qo=(()=>{try{return Date.now()-Number(localStorage.getItem(Zo)||0)<36e5}catch{return!1}})();function $o(e,t,n,r){return r?fetch(`${Mo}${e}${e.includes(`?`)?`&`:`?`}relaypass=${encodeURIComponent(t)}`,{method:n?.method??`GET`,body:n?.body}):fetch(Mo+e,{...n,headers:{"x-api-key":t,"content-type":`application/json`,...n?.headers}})}async function es(e,t,n,r=`screen`){let i=e.startsWith(`/swap/v2/execute`),a=Date.now()+3e4;for(let o=0;;o++){i||await Xo(r);let o;try{let r=No&&!Qo;if(o=await $o(e,t,n,r),o.status===403&&r){Qo=!0;try{localStorage.setItem(Zo,String(Date.now()))}catch{}o=await $o(e,t,n,!1)}}finally{i||(Wo--,Yo())}let s=o.headers.get(`x-ratelimit-remaining`),c=Number(o.headers.get(`x-ratelimit-reset`));if(!i&&s!==null&&c>0&&(Ho={left:Number(s),at:Date.now(),reset:c*1e3}),o.status===429&&Date.now()<a){let e=c>0?c*1e3+100:Date.now()+1e3,t=Math.min(Math.max(e,Date.now()+250),Date.now()+1e4);i?await qo(t-Date.now()):(Uo=Math.max(Uo,t),Yo());continue}let l=await o.json().catch(()=>({}));if(!o.ok){let e=l?.error??l?.message??`HTTP ${o.status}`;throw o.status===403?Error(`The bot's owner hasn't let you in, or this link is old. Open the app from a fresh message in the bot.`):o.status===429?Error(`Jupiter is busy right now (too many requests on the bot's key). Try again in a minute.`):Error(o.status===401?`Jupiter rejected the API key.`:`Jupiter: ${e}`)}return l}}function ts(e,t,n,r){return ns(e,Fo,t,String(n),r)}function ns(e,t,n,r,i){return es(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r,taker:i})}`,e,void 0,`trade`)}function rs(e,t,n){return es(`/swap/v2/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:So.encode(t),requestId:n})})}var is=e=>So.decode(e),as=`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;async function os(e,t,n,r,i=!1){try{if(r<=0n)return null;let a=await es(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r.toString()})}`,e,void 0,i?`background`:`screen`),o=Number(a.outAmount);return o>0?o:null}catch{return null}}var ss=(e,t,n,r=!1)=>os(e,t,Fo,n,r);async function cs(e,t=!1){try{let e=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/ticker`,{signal:AbortSignal.timeout(3e3)}),t=e.ok?Number((await e.json()).price):0;if(t>0)return t}catch{}let n=await os(e,Fo,as,1000000000n,t);return n===null?null:n/1e6}async function ls(e,t,n=!1){let r=new Map;for(let i=0;i<t.length;i+=100){let a=t.slice(i,i+100);try{let t=await es(`/tokens/v2/search?query=${a.join(`,`)}`,e,void 0,n?`background`:`screen`);for(let e of t)a.includes(e.id)&&e.usdPrice&&e.usdPrice>0&&r.set(e.id,e.usdPrice)}catch{}}return r}async function us(e,t){try{let n=(await es(`/tokens/v2/search?query=${t}`,e)).find(e=>e.id===t);return n?`${n.name??``} (${n.symbol??`?`})`:null}catch{return null}}function ds(e,t,n,r,i){return es(`/trigger/v1/createOrder`,e,{method:`POST`,body:JSON.stringify({inputMint:n,outputMint:Fo,maker:t,payer:t,params:{makingAmount:r.toString(),takingAmount:i.toString()},computeUnitPrice:`auto`,wrapAndUnwrapSol:!0})},`trade`)}function fs(e,t,n){return es(`/trigger/v1/cancelOrder`,e,{method:`POST`,body:JSON.stringify({maker:t,order:n,computeUnitPrice:`auto`})},`trade`)}function ps(e,t,n){return es(`/trigger/v1/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:So.encode(t),requestId:n})},`trade`)}async function ms(e,t,n){return(await es(`/trigger/v1/getTriggerOrders?${new URLSearchParams({user:t,orderStatus:n,page:`1`})}`,e)).orders??[]}var hs=`https://pumpportal.fun/api/trade-local`,gs=[{slippage:15,share:.85},{slippage:30,share:.75}];function _s(e,t,n,r){return ys({publicKey:e,action:`buy`,mint:t,amount:(n/1e9).toFixed(9),denominatedInSol:`true`,slippage:String(r)})}function vs(e,t,n,r){return ys({publicKey:e,action:`sell`,mint:t,amount:n,denominatedInSol:`false`,slippage:String(r)})}async function ys(e){let t;try{t=await fetch(hs,{method:`POST`,headers:{"content-type":`application/x-www-form-urlencoded`},body:new URLSearchParams({...e,priorityFee:`0.0001`,pool:`auto`})})}catch{throw Error(`Couldn't reach PumpPortal from the app.`)}if(!t.ok){let e=(await t.text().catch(()=>``)).trim();throw Error(`PumpPortal: ${e.slice(0,200)||`HTTP ${t.status}`}`)}return new Uint8Array(await t.arrayBuffer())}var bs=BigInt(2**32-1),xs=BigInt(32);function Ss(e,t=!1){return t?{h:Number(e&bs),l:Number(e>>xs&bs)}:{h:Number(e>>xs&bs)|0,l:Number(e&bs)|0}}function Cs(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=Ss(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var ws=e=>e/2**32|0,Ts=e=>e>>>0;function Es(e,t,n,r){let i=ws(n),a=Ts(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var Ds=(e,t,n)=>e>>>n,Os=(e,t,n)=>e<<32-n|t>>>n,ks=(e,t,n)=>e>>>n|t<<32-n,As=(e,t,n)=>e<<32-n|t>>>n,js=(e,t,n)=>e<<64-n|t>>>n-32,Ms=(e,t,n)=>e>>>n-32|t<<64-n;function Ns(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Ps=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),Fs=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Is=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),Ls=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,Rs=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),zs=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function Bs(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var Vs=e=>e?`"${e}" `:``;function Hs(e,t=``){if(typeof e!=`number`)throw TypeError(Vs(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(Vs(t)+`expected integer >= 0, got `+e);return e}function Us(e,t,n=``){if(Bs(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Hs(t,`length`);let r=Bs(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=Vs(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}function Ws(e){if(typeof e!=`function`||typeof e.create!=`function`)throw TypeError(`expected hash wrapped by utils.createHasher`);if(Hs(e.outputLen),Hs(e.blockLen),e.outputLen<1||e.blockLen<1)throw Error(`hash blockLen / outputLen must be >= 1`)}var Gs=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},Ks=(e,t)=>{Gs(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function qs(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function Js(e,t){Us(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function Ys(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function Xs(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Zs(e,t){return e<<32-t|e>>>t}var Qs=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,$s=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function ec(e){if(Us(e),Qs)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=$s[e[n]];return t}function tc(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function nc(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(Qs)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=tc(e.charCodeAt(i)),a=tc(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function rc(e){if(typeof e!=`string`)throw TypeError(`string expected`);let t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{Ys(t)}}function ic(e,t=``){return typeof e==`string`?rc(e):Us(e,void 0,t)}function ac(...e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];Us(r),t+=r.length}let n=new Uint8Array(t);for(let t=0,r=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.length}return n}function oc(e,t,n=`opts`){return Ks(e,`defaults`),t!==void 0&&Ks(t,n),Object.assign(Object.create(null),e,t)}function sc(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=oc({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function cc(e=32){Hs(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}var lc=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function uc(e,t,n){return e&t^~e&n}function dc(e,t,n){return e&t^e&n^t&n}var fc=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=Xs(this.buffer)}update(e){qs(this),Us(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=Xs(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){qs(this),Js(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Es(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:Xs(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},pc=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),mc=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),hc=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),gc=new Uint32Array(64),_c=class extends fc{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)gc[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=gc[e-15],n=gc[e-2],r=Zs(t,7)^Zs(t,18)^t>>>3,i=Zs(n,17)^Zs(n,19)^n>>>10;gc[e]=i+gc[e-7]+r+gc[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=Zs(o,6)^Zs(o,11)^Zs(o,25),u=l+t+uc(o,s,c)+hc[e]+gc[e]|0,d=(Zs(n,2)^Zs(n,13)^Zs(n,22))+dc(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){Ys(gc)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),Ys(this.buffer)}},vc=class extends _c{constructor(){super(32,pc)}},yc=Cs(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),bc=yc[0],xc=yc[1],Sc=new Uint32Array(80),Cc=new Uint32Array(80),wc=class extends fc{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Sc[n]=e.getUint32(t),Cc[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=Sc[e-15]|0,n=Cc[e-15]|0,r=ks(t,n,1)^ks(t,n,8)^Ds(t,n,7),i=As(t,n,1)^As(t,n,8)^Os(t,n,7),a=Sc[e-2]|0,o=Cc[e-2]|0,s=ks(a,o,19)^js(a,o,61)^Ds(a,o,6),c=Is(i,As(a,o,19)^Ms(a,o,61)^Os(a,o,6),Cc[e-7],Cc[e-16]),l=Ls(c,r,s,Sc[e-7],Sc[e-16]);Sc[e]=l|0,Cc[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=ks(u,d,14)^ks(u,d,18)^js(u,d,41),v=As(u,d,14)^As(u,d,18)^Ms(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=Rs(_,v,b,xc[e],Cc[e]),S=zs(x,g,t,y,bc[e],Sc[e]),C=x|0,w=ks(n,r,28)^js(n,r,34)^js(n,r,39),T=As(n,r,28)^Ms(n,r,34)^Ms(n,r,39),E=n&i^n&o^i&o,D=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=Ns(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let O=Ps(C,T,D);n=Fs(O,S,w,E),r=O|0}({h:n,l:r}=Ns(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=Ns(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=Ns(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=Ns(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=Ns(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=Ns(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=Ns(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=Ns(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){Ys(Sc,Cc)}destroy(){this.destroyed=!0,Ys(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Tc=class extends wc{constructor(){super(64,mc)}},Ec=sc(()=>new vc,lc(1)),Dc=sc(()=>new Tc,lc(3));function Oc(e,t,n=()=>{}){if(!Array.isArray(e))throw TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}var kc=(e,t,n)=>Us(e,t,n),Ac=Hs;function jc(e,t=`object`){if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`);return e}function Mc(e,t){if(typeof e!=`function`)throw TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}var Nc=ec,Pc=(...e)=>ac(...e),Fc=e=>nc(e),Ic=Bs,Lc=e=>cc(e),Rc=BigInt(0),zc=BigInt(1),Bc=e=>e?`"${e}" `:``;function Vc(e,t=``){if(typeof e!=`boolean`)throw TypeError(Bc(t)+`expected boolean, got type=`+typeof e);return e}function Hc(e){if(typeof e==`bigint`){if(!Xc(e))throw RangeError(`positive bigint expected, got `+e)}else Ac(e);return e}function Uc(e,t=``){if(typeof e!=`number`){let n=t&&`"${t}" `;throw TypeError(n+`expected number, got type=`+typeof e)}if(!Number.isSafeInteger(e)){let n=t&&`"${t}" `;throw RangeError(n+`expected safe integer, got `+e)}}function Wc(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);return e===``?Rc:BigInt(`0x`+e)}function Gc(e){return Wc(ec(e))}function Kc(e){return Wc(ec(Yc(Us(e)).reverse()))}function qc(e,t){if(Hs(t),t===0)throw Error(`zero output length is invalid`);e=Hc(e);let n=t*2,r=e.toString(16);if(r.length>n)throw RangeError(`number is too large`);return nc(r.padStart(n,`0`))}function Jc(e,t){return qc(e,t).reverse()}function Yc(e){return Uint8Array.from(kc(e))}function Xc(e){return typeof e==`bigint`&&Rc<=e}function Zc(e,t,n){return Xc(e)&&Xc(t)&&Xc(n)&&t<=e&&e<n}function Qc(e,t,n,r){if(!Zc(t,n,r))throw RangeError(`expected valid `+e+`: `+n+` <= n < `+r+`, got `+t)}function $c(e){if(e<Rc)throw Error(`expected non-negative bigint, got `+e);return e===Rc?0:e.toString(2).length}var el=e=>(Uc(e,`n`),(zc<<BigInt(e))-zc);function tl(e,t={},n={},r=`object`){jc(e,r),jc(t,`fields`),jc(n,`optFields`);function i(t,n,i){let a=r===`object`?`param "${String(t)}"`:`"${r}.${String(t)}"`,o=e[t];if(!Object.hasOwn(e,t)&&(i?o!==void 0:n!==`function`))throw TypeError(`${a} is invalid: expected own property`);if(i&&o===void 0)return;let s=typeof o;if(s!==n||o===null)throw TypeError(`${a} is invalid: expected ${n}, got ${s}`)}let a=(e,t)=>Object.entries(e).forEach(([e,n])=>i(e,n,t));a(t,!1),a(n,!0)}var nl=BigInt(0),B=BigInt(1),rl=BigInt(2),il=BigInt(3),al=BigInt(4),ol=BigInt(5),sl=BigInt(7),cl=BigInt(8),ll=BigInt(9),ul=BigInt(15),dl=BigInt(16),fl=BigInt(`0x10000000000000000`);function pl(e,t){if(t<=nl)throw Error(`mod: expected positive modulus, got `+t);let n=e%t;return n>=nl?n:t+n}function ml(e,t,n){if(n<=B)throw Error(`pow: expected modulus > 1, got `+n);if(typeof t!=`bigint`)throw TypeError(`invalid exponent: expected bigint, got `+typeof t);if(t<nl)throw Error(`invalid exponent, negatives unsupported`);if(t===nl)return B;if(t===B)return e;let r=e%n;if(r<nl&&(r+=n),t<fl){let e=B;for(;t>nl;)t&B&&(e=e*r%n),r=r*r%n,t>>=B;return e}let i=[];for(;t>nl;)i.push(Number(t&ul)),t>>=al;let a=Array(16);a[0]=B,a[1]=r;for(let e=2;e<16;e++)a[e]=a[e-1]*r%n;let o=a[i[i.length-1]];for(let e=i.length-2;e>=0;e--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let t=i[e];t!==0&&(o=o*a[t]%n)}return o}function hl(e,t,n){if(n<=B)throw Error(`pow2: expected modulus > 1, got `+n);if(t<nl)throw Error(`pow2: expected non-negative exponent, got `+t);let r=e;for(;t-->nl;)r*=r,r%=n;return r}function gl(e,t){if(e===nl)throw Error(`invert: expected non-zero number`);if(t<=B)throw Error(`invert: expected modulus > 1, got `+t);let n=pl(e,t),r=t,i=nl,a=B;for(;n!==nl;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==B)throw Error(`invert: does not exist`);return pl(i,t)}function _l(e,t,n){let r=e;if(!r.eql(r.sqr(t),n))throw Error(`Cannot find square root`)}function vl(e,t){if((e&B)===nl)throw Error(t+`: expected odd modulus, got `+e)}function yl(e,t){let n=e,r=(n.ORDER+B)/al,i=n.pow(t,r);return _l(n,i,t),i}function bl(e,t){let n=e,r=(n.ORDER-ol)/cl,i=n.mul(t,rl),a=n.pow(i,r),o=n.mul(t,a),s=n.mul(n.mul(o,rl),a),c=n.mul(o,n.sub(s,n.ONE));return _l(n,c,t),c}function xl(e){let t=Ml(e),n=Sl(e),r=n(t,t.neg(t.ONE)),i=n(t,r),a=n(t,t.neg(r)),o=(e+sl)/dl;return((e,t)=>{let n=e,s=n.pow(t,o),c=n.mul(s,r),l=n.mul(s,i),u=n.mul(s,a),d=n.eql(n.sqr(c),t),f=n.eql(n.sqr(l),t);s=n.cmov(s,c,d),c=n.cmov(u,l,f);let p=n.eql(n.sqr(c),t),m=n.cmov(s,c,p);return _l(n,m,t),m})}function Sl(e){if(e<il)throw Error(`sqrt is not defined for small field`);vl(e,`tonelliShanks`);let t=e-B,n=0;for(;t%rl===nl;)t/=rl,n++;let r=rl,i=Ml(e);for(;Ol(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return yl;let a=i.pow(r,t),o=(t+B)/rl;return function(e,r){let i=e;if(i.is0(r))return r;if(Ol(i,r)!==1)throw Error(`Cannot find square root`);let s=n,c=i.mul(i.ONE,a),l=i.pow(r,t),u=i.pow(r,o);for(;!i.eql(l,i.ONE);){if(i.is0(l))throw Error(`Cannot find square root: probably non-prime P`);let e=1,t=i.sqr(l);for(;!i.eql(t,i.ONE);)if(e++,t=i.sqr(t),e===s)throw Error(`Cannot find square root`);let n=B<<BigInt(s-e-1),r=i.pow(c,n);s=e,c=i.sqr(r),l=i.mul(l,c),u=i.mul(u,r)}return u}}function Cl(e){return vl(e,`Fp.sqrt`),e%al===il?yl:e%cl===ol?bl:e%dl===ll?xl(e):Sl(e)}var wl=(e,t)=>(pl(e,t)&B)===B,Tl=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function El(e){if(jc(e,`field`),typeof e.ORDER!=`bigint`)throw TypeError(`param "ORDER" is invalid: expected bigint, got `+typeof e.ORDER);Uc(e.BYTES,`BYTES`),Uc(e.BITS,`BITS`);for(let t of Tl)Mc(e[t],`field.`+t);if(e.BYTES<1||e.BITS<1)throw Error(`invalid field: expected BYTES/BITS > 0`);if(e.ORDER<=B)throw Error(`invalid field: expected ORDER > 1, got `+e.ORDER);return e}function Dl(e,t,n=!1){El(e),Oc(t,`nums`),Vc(n,`passZero`);let r=e,i=Array(t.length).fill(n?r.ZERO:void 0),a=t.reduce((e,t,n)=>r.is0(t)?e:(i[n]=e,r.mul(e,t)),r.ONE),o=r.inv(a);return t.reduceRight((e,t,n)=>r.is0(t)?e:(i[n]=r.mul(e,i[n]),r.mul(e,t)),o),i}function Ol(e,t){El(e);let n=e;vl(n.ORDER,`FpLegendre`);let r=(n.ORDER-B)/rl,i=n.pow(t,r),a=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),s=n.eql(i,n.neg(n.ONE));if(!a&&!o&&!s)throw Error(`invalid Legendre symbol result`);return a?1:o?0:-1}function kl(e,t){if(t!==void 0&&Ac(t),e<=nl)throw Error(`invalid n length: expected positive n, got `+e);if(t!==void 0&&t<1)throw Error(`invalid n length: expected positive bit length, got `+t);let n=$c(e);if(t!==void 0&&t<n)throw Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);let r=t===void 0?n:t;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var Al=new WeakMap,jl=class{ORDER;BITS;BYTES;isLE;ZERO=nl;ONE=B;_lengths;_mod;constructor(e,t={}){if(e<=B)throw Error(`invalid field: expected ORDER > 1, got `+e);let n;this.isLE=!1,typeof t==`object`&&t&&(typeof t.BITS==`number`&&(n=t.BITS),typeof t.sqrt==`function`&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE==`boolean`&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes==`boolean`&&(this._mod=t.modFromBytes));let{nBitLength:r,nByteLength:i}=kl(e,n);if(i>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);this.ORDER=e,this.BITS=r,this.BYTES=i,Object.freeze(this)}create(e){return pl(e,this.ORDER)}isValid(e){if(typeof e!=`bigint`)throw TypeError(`invalid field element: expected bigint, got `+typeof e);return nl<=e&&e<this.ORDER}is0(e){return e===nl}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&B)===B}neg(e){return pl(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return pl(e*e,this.ORDER)}add(e,t){return pl(e+t,this.ORDER)}sub(e,t){return pl(e-t,this.ORDER)}mul(e,t){return pl(e*t,this.ORDER)}pow(e,t){return ml(e,t,this.ORDER)}div(e,t){return pl(e*gl(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return gl(e,this.ORDER)}sqrt(e){let t=Al.get(this);return t||Al.set(this,t=Cl(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?Jc(e,this.BYTES):qc(e,this.BYTES)}fromBytes(e,t=!1){kc(e);let{_lengths:n,BYTES:r,isLE:i,ORDER:a,_mod:o}=this;if(n){if(e.length<1||!n.includes(e.length)||e.length>r)throw Error(`Field.fromBytes: expected `+n+` bytes, got `+e.length);let t=new Uint8Array(r);t.set(e,i?0:t.length-e.length),e=t}if(e.length!==r)throw Error(`Field.fromBytes: expected `+r+` bytes, got `+e.length);let s=i?Kc(e):Gc(e);if(o&&(s=pl(s,a)),!t&&!this.isValid(s))throw Error(`invalid field element: outside of range 0..ORDER`);return s}invertBatch(e){return Dl(this,e,!0)}cmov(e,t,n){return Vc(n,`condition`),n?t:e}};function Ml(e,t={}){return Object.freeze(jl.prototype),new jl(e,t)}var Nl=BigInt(0),Pl=BigInt(1),Fl=BigInt(4),Il=16,Ll=128,Rl=5,zl=2**31;function Bl(e){let t=e;if(typeof t!=`function`)throw TypeError(`"Point" expected constructor, got type=`+typeof e);Mc(t.fromAffine,`Point.fromAffine`),Mc(t.fromBytes,`Point.fromBytes`),Mc(t.fromHex,`Point.fromHex`),jc(t.BASE,`Point.BASE`),jc(t.ZERO,`Point.ZERO`),El(t.Fp),El(t.Fn)}function Vl(e,t){Bl(e),Gl(t,e);let n=Dl(e.Fp,t.map(e=>e.Z));return t.map((t,r)=>e.fromAffine(t.toAffine(n[r])))}function Hl(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw Error(`invalid window size, expected [`+n+`..`+t+`], got W=`+e)}function Ul(e,t){let n=e*(4*t+128);if(n>zl)throw Error(`invalid window size: table would need ~`+Math.ceil(n/2**20)+` MiB, max `+zl/2**20+` MiB`)}function Wl(e,t){if(e!==void 0){Mc(e,`randomBytes`);try{let n=e(t);if(!Ic(n)||n.length!==t)return}catch{return}return e}}function Gl(e,t){Oc(e,`points`),e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function Kl(e,t,n){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,r)=>{if(!(n===void 0?t.isValid(e):Xc(e)&&e<n))throw Error(`invalid scalar at index `+r)})}var ql=new WeakMap;function Jl(e){return ql.get(e)||1}function Yl(e,t){let n=e.double(),r=[e];for(let e=1;e<t;e++)r.push(r[e-1].add(n));return r}function Xl(e,t){let n=2**t,r=n/2,i=BigInt(n-1),a=[];for(;e>Nl;){let t=0;e&Pl&&(t=Number(e&i),t>=r&&(t-=n),e-=BigInt(t)),a.push(t),e>>=Pl}return a}function Zl(e,t,n){let r=2**t,i=r/2,a=BigInt(r-1),o=BigInt(t),s=[];for(let t=0;t<n;t++){let t=Number(e&a);e>>=o,t>i&&(t-=r,e+=Pl),s.push(t)}if(e!==Nl)throw Error(`invalid wnaf`);return s}function Ql(e,t,n){let r=0;for(let e of n)r=Math.max(r,e.length);let i=e;for(let e=r-1;e>=0;e--){e!==r-1&&(i=i.double());for(let r=0;r<n.length;r++){let a=n[r][e];if(a){let e=t[r][Math.abs(a)-1>>1];i=i.add(a<0?e.negate():e)}}}return i}var $l=class{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){Bl(e),this.randomBytes=Wl(t,Il),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,n){let r=Math.ceil(n/t)+1,i=2**(t-1),a=[],o=e;for(let e=0;e<r;e++){let e=o;for(let t=0;t<i;t++)a.push(e),e=e.add(o);o=a[a.length-1].double()}return{W:t,bits:n,windows:r,comp:a}}wnafCachedCT(e,t){let{W:n,windows:r,comp:i}=e,a=2**(n-1),o=Zl(t,n,r),s=this.ZERO,c=this.BASE;for(let e=0;e<r;e++){let t=o[e],n=e*a,r=Math.abs(t)-1,l=i[n];for(let e=1;e<a;e++)l=e===r?i[n+e]:l;let u=l.negate();t===0?c=c.add(i[n]):s=s.add(t<0?u:l)}return{p:s,f:c}}getWnafPrecomputes(e,t,n,r){let i=this.wnafPrecomputes.get(t),a=i?.find(t=>t.W===e&&t.bits===n);return a||(a=this.buildWnafTable(t,e,n),typeof r==`function`&&(a={...a,comp:r(a.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw TypeError(`"point" expected Point instance, got type=`+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!Zc(t,Pl,this.Point.Fn.ORDER))throw Error(`invalid scalar`)}runCT(e,t,n,r){let i=Jl(e);return i===1?this.fixedWindowCT(e,t,n):this.wnafCachedCT(this.getWnafPrecomputes(i,e,n,r),t)}mulCT(e,t,n){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,n)}mulCTBlinded(e,t,n){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw Error(`randomBytes is required for scalar blinding`);let r=this.Point.Fn.BITS+Ll,i=this.randomBytes(Il);if(!Ic(i)||i.length!==Il)throw Error(`randomBytes returned invalid byte array`);i[0]=i[0]&63|128;let a=t+Gc(i)*this.Point.Fn.ORDER;return this.runCT(e,a,r,n)}fixedWindowCT(e,t,n){let r=Rl,i=el(r),a=Array(32);a[0]=this.ZERO;for(let t=1;t<32;t++)a[t]=a[t-1].add(e);let o=Math.ceil(n/r),s=this.ZERO;for(let e=o-1;e>=0;e--){if(e!==o-1)for(let e=0;e<r;e++)s=s.double();let n=Number(t>>BigInt(e*r)&i),c=a[0];for(let e=1;e<32;e++)c=e===n?a[e]:c;s=s.add(c)}return{p:s,f:s}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===Pl||e===this.BASE&&(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,n,r){return this.shouldBlind(e,n)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,n){if(this.assertPoint(e),!Xc(t))throw Error(`invalid scalar`);let r=Jl(e);if(r===1||t>=this.Point.Fn.ORDER)return eu(this.Point,[e],[t],!0);let i=this.getWnafPrecomputes(r,e,this.bits,n);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),Hl(t,this.bits),Ul((Math.ceil((this.bits+Ll)/t)+1)*2**(t-1),this.Point.Fp.BYTES),ql.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return Jl(e)!==1}};function eu(e,t,n,r=!1){if(Bl(e),Gl(t,e),Vc(r,`allowOversized`),Kl(n,e.Fn,r?e.Fn.ORDER**Fl:void 0),t.length!==n.length)throw Error(`arrays of points and scalars must have equal length`);let i=t.map(e=>Yl(e,4)),a=n.map(e=>Xl(e,4));return Ql(e.ZERO,i,a)}function tu(e,t,n){if(t){if(t.ORDER!==e)throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);return El(t),t}return Ml(e,{isLE:n})}function nu(e,t,n={},r){if(e!==`weierstrass`&&e!==`edwards`)throw Error(`expected curve type "weierstrass" or "edwards"`);if(r===void 0&&(r=e===`edwards`),!t||typeof t!=`object`)throw Error(`expected valid ${e} CURVE object`);tl(n);for(let e of[`p`,`n`,`h`]){let n=t[e];if(!(Xc(n)&&n!==Nl))throw Error(`CURVE.${e} must be positive bigint`)}let i=tu(t.p,n.Fp,r),a=tu(t.n,n.Fn,r),o=[`Gx`,`Gy`,`a`,e===`weierstrass`?`b`:`d`];for(let e of o)if(!i.isValid(t[e]))throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:i,Fn:a}}function ru(e,t){return function(n){let r=e(n);return{secretKey:r,publicKey:t(r)}}}var iu=BigInt(0),au=BigInt(1),ou=BigInt(2),su=BigInt(4),cu=BigInt(8);function lu(e,t,n,r){let i=e.sqr(n),a=e.sqr(r),o=e.add(e.mul(t.a,i),a),s=e.add(e.ONE,e.mul(t.d,e.mul(i,a)));return e.eql(o,s)}function uu(e,t={}){tl(t,{},{},`extraOpts`);let n=t,r=nu(`edwards`,e,n,n.FpFnLE),{Fp:i,Fn:a}=r,o=r.CURVE,{h:s}=o;if(Ol(i,o.a)!==1)throw Error(`edwards: CURVE.a must be a square in Fp for complete addition formulas`);if(Ol(i,o.d)!==-1)throw Error(`edwards: CURVE.d must be a non-square in Fp for complete addition formulas`);tl(n,{},{uvRatio:`function`,randomBytes:`function`});let c=n.randomBytes===void 0?Lc:n.randomBytes,l=ou<<BigInt(i.BYTES*8)-au;function u(e){if(!i.isOdd)throw Error(`Field does not have .isOdd()`);return i.isOdd(e)}let d=n.uvRatio===void 0?(e,t)=>{try{return{isValid:!0,value:i.sqrt(i.div(e,t))}}catch{return{isValid:!1,value:iu}}}:n.uvRatio;if(!lu(i,o,o.Gx,o.Gy))throw Error(`bad curve params: generator point`);let f=i.eql(o.a,i.neg(i.ONE))?e=>i.neg(e):i.eql(o.a,i.ONE)?e=>e:e=>i.mul(o.a,e);function p(e,t,n=!1){let r=n?au:iu;return Qc(`coordinate `+e,t,r,l),t}function m(e){if(!(e instanceof h))throw Error(`EdwardsPoint expected`)}class h{static BASE=new h(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy));static ZERO=new h(i.ZERO,i.ONE,i.ONE,i.ZERO);static Fp=i;static Fn=a;X;Y;Z;T;constructor(e,t,n,r){this.X=p(`x`,e),this.Y=p(`y`,t),this.Z=p(`z`,n,!0),this.T=p(`t`,r),Object.freeze(this)}static CURVE(){return o}static fromAffine(e){if(e instanceof h)throw Error(`extended point not allowed`);let{x:t,y:n}=e||{};return p(`x`,t),p(`y`,n),new h(t,n,i.ONE,i.mul(t,n))}static fromBytes(e,t=!1){let n=i.BYTES,{a:r,d:a}=o;e=Yc(kc(e,n,`point`)),Vc(t,`zip215`);let s=Yc(e),c=e[n-1];s[n-1]=c&-129;let f=Kc(s);Qc(`point.y`,f,iu,t?l:i.ORDER);let p=i.sqr(f),m=i.sub(p,i.ONE),g=i.sub(i.mulN(a,p),r),{isValid:_,value:v}=d(m,g);if(!_)throw Error(`bad point: invalid y coordinate`);let y=u(v),b=!!(c&128);if(!t&&i.is0(v)&&b)throw Error(`bad point: x=0 and x_0=1`);return b!==y&&(v=i.neg(v)),h.fromAffine({x:v,y:f})}static fromHex(e,t=!1){return h.fromBytes(Fc(e),t)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(e=6,t=!0){return _.setWindowSize(this,e),t||this.multiply(ou),this}assertValidity(){let e=this,{a:t,d:n}=o;if(e.is0())throw Error(`bad point: ZERO`);let{X:r,Y:a,Z:s,T:c}=e,l=i.sqr(r),u=i.sqr(a),d=i.sqr(s),f=i.sqr(d),p=i.mul(l,t),m=i.mul(i.add(p,u),d),h=i.add(f,i.mul(n,i.mul(l,u)));if(!i.eql(m,h))throw Error(`bad point: equation left != right (1)`);let g=i.mul(r,a),_=i.mul(s,c);if(!i.eql(g,_))throw Error(`bad point: equation left != right (2)`)}equals(e){m(e);let{X:t,Y:n,Z:r}=this,{X:a,Y:o,Z:s}=e,c=i.mul(t,s),l=i.mul(a,r),u=i.mul(n,s),d=i.mul(o,r);return i.eql(c,l)&&i.eql(u,d)}is0(){return this.equals(h.ZERO)}negate(){return new h(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:e,Y:t,Z:n}=this,r=i.sqr(e),a=i.sqr(t),o=i.mul(i.sqr(n),ou),s=f(r),c=i.addN(e,t),l=i.sub(i.subN(i.sqr(c),r),a),u=i.addN(s,a),d=i.subN(u,o),p=i.subN(s,a),m=i.mul(l,d),g=i.mul(u,p),_=i.mul(l,p),v=i.mul(d,u);return new h(m,g,v,_)}add(e){m(e);let{d:t}=o,{X:n,Y:r,Z:a,T:s}=this,{X:c,Y:l,Z:u,T:d}=e,p=i.mul(n,c),g=i.mul(r,l),_=i.mul(i.mulN(s,t),d),v=i.mul(a,u),y=i.sub(i.subN(i.mulN(i.addN(n,r),i.addN(c,l)),p),g),b=i.subN(v,_),x=i.addN(v,_),S=i.sub(g,f(p)),C=i.mul(y,b),w=i.mul(x,S),T=i.mul(y,S),E=i.mul(b,x);return new h(C,w,E,T)}subtract(e){return m(e),this.add(e.negate())}multiply(e){if(!a.isValidNot0(e))throw RangeError(`invalid scalar: expected 1 <= sc < curve.n`);let{p:t,f:n}=_.mulSecret(this,e,s,g);return g([t,n])[0]}multiplyUnsafe(e){if(!a.isValid(e))throw RangeError(`invalid scalar: expected 0 <= sc < curve.n`);return e===iu?h.ZERO:this.is0()||e===au?this:_.mulUnsafe(this,e,g)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return _.mulUnsafe(this,o.n).is0()}toAffine(e){let t=this,n=e;if(n!=null&&typeof n!=`bigint`)throw TypeError(`"invertedZ" expected bigint, got type=`+typeof n);let{X:r,Y:a,Z:o}=t,s=t.is0();n??=s?i.create(cu):i.inv(o);let c=i.mul(r,n),l=i.mul(a,n),u=i.mul(o,n);if(s)return{x:i.ZERO,y:i.ONE};if(!i.eql(u,i.ONE))throw Error(`invZ was invalid`);return{x:c,y:l}}clearCofactor(){return s===au?this:s===ou?this.double():s===su?this.double().double():s===cu?this.double().double().double():this.multiplyUnsafe(s)}toBytes(){let{x:e,y:t}=this.toAffine(),n=i.toBytes(t);return n[n.length-1]|=u(e)?128:0,n}toHex(){return Nc(this.toBytes())}toString(){return`<Point ${this.is0()?`ZERO`:this.toHex()}>`}}let g=e=>Vl(h,e),_=new $l(h,c);return _.bits>=6&&h.BASE.precompute(6),Object.freeze(h.prototype),Object.freeze(h),h}function du(e,t,n={}){if(Bl(e),typeof t!=`function`)throw Error(`"hash" function param is required`);let r=t,i=n;tl(i,{},{adjustScalarBytes:`function`,randomBytes:`function`,domain:`function`,prehash:`function`,zip215:`boolean`,mapToCurve:`function`,toMontgomery:`function`,toMontgomerySecret:`function`});let{prehash:a}=i,{BASE:o,Fp:s,Fn:c}=e,l=r.outputLen,u=2*s.BYTES;if(l!==void 0&&(Uc(l,`hash.outputLen`),l!==u))throw Error(`hash.outputLen must be ${u}, got ${l}`);let d=i.randomBytes===void 0?Lc:i.randomBytes,f=i.toMontgomery,p=i.toMontgomerySecret,m=i.adjustScalarBytes===void 0?e=>e:i.adjustScalarBytes,h=i.domain===void 0?(e,t,n)=>{if(Vc(n,`phflag`),t.length||n)throw Error(`Contexts/pre-hash are not supported`);return e}:i.domain;function g(e){return c.create(Kc(e))}function _(e){let t=T.secretKey;kc(e,T.secretKey,`secretKey`);let n=kc(r(e),2*t,`hashedSecretKey`),i=m(n.slice(0,t));return{head:i,prefix:n.slice(t,2*t),scalar:g(i)}}function v(e){let{head:t,prefix:n,scalar:r}=_(e),i=o.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}}function y(e){return v(e).pointBytes}function b(e=Uint8Array.of(),...t){let n=Pc(...t);return g(r(h(n,kc(e,void 0,`context`),!!a)))}function x(e,t,n={}){tl(n,{},{},`options`),e=Yc(kc(e,void 0,`message`)),a&&(e=a(e));let{prefix:r,scalar:i,pointBytes:s}=v(t),l=b(n.context,r,e),u=o.multiply(l).toBytes(),d=b(n.context,u,s,e),f=c.create(l+d*i);if(!c.isValid(f))throw Error(`sign failed: invalid s`);return kc(Pc(u,c.toBytes(f)),T.signature,`result`)}let S={zip215:i.zip215};function C(t,n,r,i=S){tl(i);let{context:s}=i,c=i.zip215===void 0?!!S.zip215:i.zip215,l=T.signature;t=kc(t,l,`signature`),n=kc(n,void 0,`message`),r=kc(r,T.publicKey,`publicKey`),c!==void 0&&Vc(c,`zip215`),a&&(n=a(n));let u=l/2,d=t.subarray(0,u),f=Kc(t.subarray(u,l)),p,m,h;try{p=e.fromBytes(r,c),m=e.fromBytes(d,c),h=o.multiplyUnsafe(f)}catch{return!1}if(!c&&p.isSmallOrder())return!1;let g=b(s,d,r,n);return m.add(p.multiplyUnsafe(g)).subtract(h).clearCofactor().is0()}let w=s.BYTES,T={secretKey:w,publicKey:w,signature:2*w,seed:w};function E(e){return e=e===void 0?d(T.seed):e,kc(e,T.seed,`seed`)}function D(e){return Ic(e)&&e.length===T.secretKey}function O(t,n){try{return!!e.fromBytes(t,n===void 0?S.zip215:n)}catch{return!1}}let k={getExtendedPublicKey:v,randomSecretKey:E,isValidSecretKey:D,isValidPublicKey:O,toMontgomery(t){if(f===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return f(e.fromBytes(t))},toMontgomerySecret(e){if(p===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return p(e)}};return Object.freeze(T),Object.freeze(k),Object.freeze({keygen:ru(E,y),getPublicKey:y,sign:x,verify:C,utils:k,Point:e,lengths:T})}var fu=BigInt(1),pu=BigInt(2),mu=BigInt(5),hu=BigInt(8),gu=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`),_u={p:gu,n:BigInt(`0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`),h:hu,a:BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`),d:BigInt(`0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`),Gx:BigInt(`0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`),Gy:BigInt(`0x6666666666666666666666666666666666666666666666666666666666666658`)};function vu(e){let t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),a=gu,o=e*e%a*e%a,s=hl(hl(o,pu,a)*o%a,fu,a)*e%a,c=hl(s,mu,a)*s%a,l=hl(c,t,a)*c%a,u=hl(l,n,a)*l%a,d=hl(u,r,a)*u%a;return{pow_p_5_8:hl(hl(hl(hl(d,i,a)*d%a,i,a)*d%a,t,a)*c%a,pu,a)*e%a,b2:o}}function yu(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}var bu=BigInt(`19681161376707505956807079304988542015446066515923890162744021073123829784752`);function xu(e,t){let n=gu,r=pl(t*t*t,n),i=vu(e*pl(r*r*t,n)).pow_p_5_8,a=pl(e*r*i,n),o=pl(t*a*a,n),s=a,c=pl(a*bu,n),l=o===e,u=o===pl(-e,n),d=o===pl(-e*bu,n);return l&&(a=s),(u||d)&&(a=c),wl(a,n)&&(a=pl(-a,n)),{isValid:l||u,value:a}}var Su=uu(_u,{uvRatio:xu}),Cu=Su.Fp;function wu(e){let{y:t}=e;return Cu.toBytes(Cu.div(fu+t,fu-t))}function Tu(e){let t=Su.Fp.BYTES;return Us(e,t),yu(Dc(e.subarray(0,t))).subarray(0,t)}function Eu(e){return du(Su,Dc,Object.assign({adjustScalarBytes:yu,toMontgomery:wu,toMontgomerySecret:Tu,zip215:!0},e))}var Du=Eu({}),Ou=[`https://api.mainnet.solana.com`,`https://api.mainnet-beta.solana.com`],ku=`https://api.mainnet-beta.solana.com`,V=null,Au=!1,ju=null;function Mu(e,t){V=`${t?`${t}/rpc`:`https://mainnet.helius-rpc.com/`}?api-key=${encodeURIComponent(e)}`,Au=!!t,ju=(n,r)=>`${t?`${t}/tx/${n}`:`https://mainnet.helius-rpc.com/v0/addresses/${n}/transactions`}?api-key=${encodeURIComponent(e)}&limit=100${r?`&before-signature=${r}`:``}`,Ou=[V,...Ou]}var H=1e9,Nu=5e3,Pu=890880,Fu=`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`,Iu=`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`,U=e=>(e/H).toFixed(4).replace(/\.?0+$/,``),Lu=e=>new Promise(t=>setTimeout(t,e)),Ru=class extends Error{},zu=class extends Error{},Bu=class{limit;ms;times=[];constructor(e,t){this.limit=e,this.ms=t}prune(e){for(;this.times.length&&this.times[0]<=e-this.ms;)this.times.shift()}when(e=1){let t=Date.now();this.prune(t);let n=this.times.length,r=n-(this.limit-Math.min(e,this.limit))-1;return Math.max(t,n?this.times[n-1]:0,r>=0?this.times[r]+this.ms:0)}delay(){return this.when(1)-Date.now()}book(e,t){let n=this.times.length;for(;n>0&&this.times[n-1]>t;)n--;this.times.splice(n,0,...Array(e).fill(t))}async take(){let e=this.when(1);this.book(1,e),e>Date.now()&&await Lu(e-Date.now())}room(){let e=Date.now();return this.prune(e),this.times.length&&this.times[this.times.length-1]>e?0:this.limit-this.times.length}takeNow(e){this.book(e,Date.now())}},Vu=new Set([`getAsset`,`getAssetBatch`,`getAssetsByOwner`]),Hu={helius:new Bu(9,1100),heliusDas:new Bu(2,1100),heliusSend:new Bu(1,1050),history:new Bu(2,1100),publicAll:new Bu(90,1e4),publicMethod:new Map},Uu=e=>(Hu.publicMethod.has(e)||Hu.publicMethod.set(e,new Bu(35,1e4)),Hu.publicMethod.get(e)),Wu=new Map,Gu=4e3,Ku=(e,t)=>void(e!==V&&Wu.set(`${e} ${t}`,Date.now()+Gu)),qu=(e,t)=>(Wu.get(`${e} ${t}`)??0)>Date.now();function Ju(e,t){return e===V?Math.max(...t.map(e=>(Vu.has(e)?Hu.heliusDas:Hu.helius).delay())):t.some(t=>qu(e,t))?1/0:Math.max(Hu.publicAll.delay(),...t.map(e=>Uu(e).delay()))}async function Yu(e,t){let n=new Map,r=e=>n.set(e,(n.get(e)??0)+1);for(let n of t)e===V?(n===`sendTransaction`&&r(Hu.heliusSend),r(Vu.has(n)?Hu.heliusDas:Hu.helius)):(r(Hu.publicAll),r(Uu(n)));let i=Math.max(...[...n].map(([e,t])=>e.when(t)));for(let[e,t]of n)e.book(t,i);i>Date.now()&&await Lu(i-Date.now())}function Xu(e){Hu.publicAll.takeNow(1),Uu(e).takeNow(1)}function Zu(e){let t=Ou.filter(t=>!qu(t,e)),n=t.length?t:Ou;return!V||Hu.helius.delay()<120||Ju(ku,[e])>0?n:[ku,...n.filter(e=>e!==ku)]}var Qu=(e,t)=>fetch(e,{method:`POST`,...e===V&&Au?{}:{headers:{"content-type":`application/json`}},body:JSON.stringify(t)});async function $u(e,t){for(let n=0;;n++){let r=[],i=0;for(let n of Zu(e))try{return await ed(n,e,t,0)}catch(e){if(e instanceof Ru)throw e;e instanceof zu&&i++,r.push(`${new URL(n).hostname}: ${e instanceof Error?e.message:String(e)}`)}if(i&&n<3)await Lu(500*(n+1));else throw Error(`Couldn't reach the Solana network (${e}). ${r.join(`; `)}`)}}async function ed(e,t,n,r=3,i=!1){for(let a=0;;a++){i&&e!==V?Xu(t):await Yu(e,[t]);let o=await Qu(e,{jsonrpc:`2.0`,id:1,method:t,params:n});if(o.status===429){if(Ku(e,t),a<r){await Lu(400*(a+1));continue}throw new zu(`HTTP 429`)}if(!o.ok)throw Error(`HTTP ${o.status}`);let s=await o.json();if(s.error){if(s.error.code===-32005||s.error.code===429){if(Ku(e,t),a<r){await Lu(400*(a+1));continue}throw new zu(s.error.message)}throw new Ru(s.error.message)}return s.result}}async function td(e,t,n=!1){try{n&&e!==V?t.forEach(e=>Xu(e.method)):await Yu(e,t.map(e=>e.method));let r=await Qu(e,t.map((e,t)=>({jsonrpc:`2.0`,id:t,...e})));if(r.status===429){for(let n of t)Ku(e,n.method);throw new zu(`HTTP 429`)}if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.json();if(!Array.isArray(i))throw Error(`not a batch`);let a=t.map((e,t)=>i.find(e=>e.id===t)),o=t.filter((e,t)=>a[t]?.error?.code===-32005||a[t]?.error?.code===429);if(o.length){for(let t of o)Ku(e,t.method);throw new zu(a.find(e=>e?.error).error.message)}if(a.some(e=>!e||e.error))throw Error(a.find(e=>e?.error)?.error?.message??`missing answer`);return a.map(e=>e.result)}catch(r){if(r instanceof zu)throw r;return await Promise.all(t.map(t=>ed(e,t.method,t.params,3,n)))}}async function nd(e){return(await od(e)).name}var rd=new Map;function id(e){let t=rd.get(e);return t||(t=ed(V,`getAsset`,{id:e}),rd.set(e,t),t.catch(()=>rd.delete(e))),t}var ad=e=>e.content?.files?.map(e=>e.cdn_uri).find(e=>e?.startsWith(`https://cdn.helius-rpc.com/`));async function od(e){if(!V)return{name:null};try{let t=await id(e),n=t.content?.metadata;return{name:n?.name?`${n.name} (${n.symbol||`?`})`:null,logo:ad(t)}}catch{return{name:null}}}async function sd(e){if(!V)return{name:null,symbol:null};try{let t=await id(e);return{name:t.content?.metadata?.name||null,symbol:t.content?.metadata?.symbol||t.token_info?.symbol||null,decimals:t.token_info?.decimals,logo:ad(t)}}catch{return{name:null,symbol:null}}}async function cd(e){return(await $u(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}])).value.map(e=>e?.lamports??0)}function ld(e){let t=[];for(;;){let n=e&127;if(e>>=7,e===0)return t.push(n),t;t.push(n|128)}}function ud(e,t){let n=0;for(let r=0;r<3;r++){let i=e[t+r];if(n|=(i&127)<<7*r,!(i&128))return[n,r+1]}throw Error(`Bad transaction length prefix`)}function dd(e,t){let n=e.slice(),[r,i]=ud(n,0),a=n.subarray(i+64*r),o=a[0]&128?1:0,s=a[o];o+=3;let[,c]=ud(a,o);o+=c;let l=jo.decode(t.address),u=-1;for(let e=0;e<s;e++)a.subarray(o+32*e,o+32*e+32).every((e,t)=>e===l[t])&&(u=e);if(u<0)throw Error(`This trade isn't addressed to your wallet, so it was not signed.`);return n.set(Du.sign(a,t.secret),i+64*u),n}function fd(e,t,n){let r=new Map([[e.address,{signer:!0,writable:!0}]]),i=(e,t,n)=>{let i=r.get(e)??{signer:!1,writable:!1};r.set(e,{signer:i.signer||t,writable:i.writable||n})};for(let e of t)e.keys.forEach(e=>i(e.pubkey,e.isSigner,e.isWritable)),i(e.programId,!1,!1);let a=([t,n])=>t===e.address?0:n.signer?n.writable?1:2:n.writable?3:4,o=[...r.entries()].sort((e,t)=>a(e)-a(t));if(o.some(([t,n])=>n.signer&&t!==e.address))throw Error(`Only the paying wallet can sign here.`);let s=new Map(o.map(([e],t)=>[e,t])),c=o.filter(([,e])=>!e.signer&&!e.writable).length,l=Uint8Array.from([1,0,c,...ld(o.length),...o.flatMap(([e])=>[...jo.decode(e)]),...jo.decode(n),...ld(t.length),...t.flatMap(e=>[s.get(e.programId),...ld(e.keys.length),...e.keys.map(e=>s.get(e.pubkey)),...ld(e.data.length),...e.data])]);return dd(Uint8Array.from([...ld(1),...new Uint8Array(64),...l]),e)}var pd=`11111111111111111111111111111111`;function md(e,t,n){let r=new Uint8Array(12),i=new DataView(r.buffer);return i.setUint32(0,2,!0),i.setBigUint64(4,BigInt(n),!0),{programId:pd,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],data:r}}function hd(e,t,n){return{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:Uint8Array.from([9])}}var gd=`ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`;function _d(e){return vd(jo.decode(e))}function vd(e){try{return Du.Point.fromBytes(e),!0}catch{return!1}}var yd=new Map;function bd(e,t,n){let r=`${e}${t}${n}`,i=yd.get(r);return i||(i=xd([jo.decode(e),jo.decode(n),jo.decode(t)],gd),yd.size>5e3&&yd.clear(),yd.set(r,i)),i}function xd(e,t){let n=jo.decode(t),r=new TextEncoder().encode(`ProgramDerivedAddress`);for(let t=255;t>=0;t--){let i=[...e,Uint8Array.of(t),n,r],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;let s=Ec(a);if(!vd(s))return jo.encode(s)}throw Error(`Couldn't work out the coin account address.`)}function Sd(e,t,n,r,i){return{programId:gd,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:pd,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1}],data:Uint8Array.of(1)}}function Cd(e,t,n,r){let i=new Uint8Array(10),a=new DataView(i.buffer);return i[0]=12,a.setBigUint64(1,r,!0),i[9]=e.decimals,{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:e.mint,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:i}}async function wd(e){let t=await $u(`getAccountInfo`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]);return t.value?{owner:t.value.owner,lamports:t.value.lamports}:null}var Td=pd;async function Ed(e){return(await $u(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`}])).value.map(e=>e?{owner:e.owner,lamports:e.lamports,data:e.data?So.decode(e.data[0]):new Uint8Array}:null)}async function Dd(e,t){let{err:n,logs:r,accounts:i}=(await $u(`simulateTransaction`,[So.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:t}}])).value;return{err:n,logs:r??[],accounts:(i??t.map(()=>null)).map(e=>e?{owner:e.owner,lamports:e.lamports,data:So.decode(e.data[0])}:null)}}function Od(e){return!e||e.data.length<72?0n:new DataView(e.data.buffer,e.data.byteOffset).getBigUint64(64,!0)}var kd=`ComputeBudget111111111111111111111111111111`;function Ad(e,t){let n=new Uint8Array(5);n[0]=2,new DataView(n.buffer).setUint32(1,e,!0);let r=new Uint8Array(9);return r[0]=3,new DataView(r.buffer).setBigUint64(1,BigInt(t),!0),[{programId:kd,keys:[],data:n},{programId:kd,keys:[],data:r}]}function jd(e,t,n,r=Fu){return hd({address:e,program:r},t,n)}function Md(e,t,n,r){return Nd(e,[{to:t,lamports:n}],r)}function Nd(e,t,n){return fd(e,t.map(({to:t,lamports:n})=>md(e.address,t,n)),n)}async function Pd(e,t){let n=t?[{mint:t}]:[{programId:Fu},{programId:Iu}];return(await Promise.all(n.map(t=>$u(`getTokenAccountsByOwner`,[e,t,{encoding:`jsonParsed`,commitment:`confirmed`}])))).flatMap(e=>e.value.map(({pubkey:e,account:t})=>{let n=t.data.parsed.info;return{address:e,program:t.owner,mint:n.mint,raw:BigInt(n.tokenAmount.amount),decimals:n.tokenAmount.decimals,lamports:t.lamports}}))}var Fd=null;function Id(e=2e4){if(Fd&&Date.now()-Fd.at<e)return Fd.value;let t=$u(`getLatestBlockhash`,[{commitment:`confirmed`}]).then(e=>e.value.blockhash),n={at:Date.now(),value:t};return Fd=n,t.catch(()=>Fd===n&&(Fd=null)),t}var Ld=()=>void Id(8e3).catch(()=>{}),Rd=/custom program error: 0x177[234]\b/,zd=class extends Error{slippage;constructor(e,t){super(e),this.slippage=t}};async function Bd(e){let t=[So.encode(e),{encoding:`base64`,preflightCommitment:`confirmed`}],n=V?Hu.heliusSend.room()>0?[V,ku]:[ku]:Ou,r=e=>new Promise((n,r)=>{let i=e.length,a=null,o=null;for(let s of e)ed(s,`sendTransaction`,t,1).then(n,e=>{e instanceof Ru?a??=e:o??=e,--i===0&&r(a??o)})});try{try{return await r(n)}catch(e){if(e instanceof Ru||!V||n.includes(V))throw e;return await r([V])}}catch(e){throw e instanceof Ru?Rd.test(e.message)?new zd(`The price moved too far before the trade went through, so it was stopped. Nothing was spent.`,!0):new zd(`The network turned the trade down before it ran, so nothing was spent (${e.message}).`,!1):Error(`Couldn't reach the Solana network to send it (${e instanceof Error?e.message:String(e)}).`)}}var Vd=new Map,Hd=!1;function Ud(e,t=45e3){return new Promise(n=>{let r=Vd.get(e);Vd.set(e,{end:Date.now()+t,done:r?e=>{r.done(e),n(e)}:n}),Hd||Wd()})}async function Wd(){Hd=!0;try{for(await Lu(300);Vd.size;){let e=Date.now(),t=[...Vd.keys()].slice(0,200);try{(await $u(`getSignatureStatuses`,[t])).value.forEach((e,n)=>{let r=e?.err?`failed`:e&&(e.confirmationStatus===`confirmed`||e.confirmationStatus===`finalized`)?`confirmed`:null;r&&(Vd.get(t[n])?.done(r),Vd.delete(t[n]))})}catch{}for(let[e,t]of Vd)Date.now()>t.end&&(t.done(`timeout`),Vd.delete(e));Vd.size&&await Lu(Math.max(0,300-(Date.now()-e)))}}finally{Hd=!1}}function Gd(e){return`https://solscan.io/account/${e}`}function Kd(e){return`https://solscan.io/tx/${e}`}var qd=`So11111111111111111111111111111111111111112`,Jd=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),Yd=new Map;function Xd(e,t){let n=`${e}:${t??``}`,r=Yd.get(n);if(r&&Date.now()-r.at<6e4)return r.value.then(e=>e?.clone()??null);let i=(async()=>{for(let n=0;;n++){await Hu.history.take();let r=await fetch(ju(e,t),{signal:AbortSignal.timeout(15e3)});if(r.status!==429||n>=3)return r;await Lu(700*(n+1))}})(),a={at:Date.now(),value:i};return Yd.set(n,a),i.then(e=>(!e||!e.ok)&&Yd.get(n)===a&&Yd.delete(n),()=>Yd.get(n)===a&&Yd.delete(n)),i.then(e=>e?.clone()??null)}async function Zd(e,t,n,r=10){if(!ju)return null;let i=0,a=0,o=0,s;for(let c=0;c<r;c++){let r;try{let t=await Xd(e,s);if(!t?.ok)return c?{lamports:i,usd:a,coins:o}:null;r=await t.json()}catch{return c?{lamports:i,usd:a,coins:o}:null}for(let n of r){if(n.transactionError)continue;let r=new Set;for(let t of n.tokenTransfers??[])t.toUserAccount===e&&t.toTokenAccount&&r.add(t.toTokenAccount),t.fromUserAccount===e&&t.fromTokenAccount&&r.add(t.fromTokenAccount);let s=0;for(let t of n.nativeTransfers??[])r.has(t.toUserAccount)||r.has(t.fromUserAccount)||(t.fromUserAccount===e&&(s-=t.amount),t.toUserAccount===e&&(s+=t.amount));let c=0,l=new Map;for(let r of n.tokenTransfers??[]){let n=+(r.toUserAccount===e)-(r.fromUserAccount===e);n&&(r.mint===qd?s+=n*Math.round(r.tokenAmount*1e9):Jd.has(r.mint)&&r.mint!==t?c+=n*r.tokenAmount:l.set(r.mint,(l.get(r.mint)??0)+n*r.tokenAmount))}let u=l.get(t)??0;if(u<=0||[...l].some(([e,n])=>e!==t&&Math.abs(n)>1e-6))continue;let d=s<0?-s:0,f=c<0?-c:0;d<5e5&&f<.05||(i+=d,a+=f,o+=u)}if(o>=n*.999||r.length<100)break;s=r[r.length-1].signature}return{lamports:i,usd:a,coins:o}}function Qd(e,t){if(e.transactionError)return null;let n=new Set;for(let r of e.tokenTransfers??[])r.toUserAccount===t&&r.toTokenAccount&&n.add(r.toTokenAccount),r.fromUserAccount===t&&r.fromTokenAccount&&n.add(r.fromTokenAccount);let r=0;for(let i of e.nativeTransfers??[])n.has(i.toUserAccount)||n.has(i.fromUserAccount)||(i.fromUserAccount===t&&(r-=i.amount),i.toUserAccount===t&&(r+=i.amount));let i=0,a=new Map;for(let n of e.tokenTransfers??[]){let e=+(n.toUserAccount===t)-(n.fromUserAccount===t);e&&(n.mint===qd?r+=e*Math.round(n.tokenAmount*1e9):Jd.has(n.mint)?i+=e*n.tokenAmount:a.set(n.mint,(a.get(n.mint)??0)+e*n.tokenAmount))}let o=[...a].filter(([,e])=>Math.abs(e)>1e-6);if(o.length!==1)return null;let[s,c]=o[0],l=c>0?1:-1;if(l===-1&&r<=0&&i<=0){let n=e.accountData?.find(e=>e.account===t)?.nativeBalanceChange??0;n>0&&(r=n)}let u=l===1?-r:r,d=l===1?-i:i;return u<5e5&&d<.05?null:{sig:e.signature,at:e.timestamp??0,mint:s,side:l,coins:Math.abs(c),lamports:Math.max(0,u),usd:Math.max(0,d)}}async function $d(e,t,n=10){if(!ju)return null;let r=[],i,a;for(let o=0;o<n;o++){let n;try{let t=await Xd(e,a);if(!t?.ok)return o?{trades:r,top:i,reachedStop:!1}:null;n=await t.json()}catch{return o?{trades:r,top:i,reachedStop:!1}:null}o===0&&(i=n[0]?.signature??t);for(let a of n){if(a.signature===t)return{trades:r,top:i,reachedStop:!0};let n=Qd(a,e);n&&r.push(n)}if(n.length<100)return{trades:r,top:i,reachedStop:!0};a=n[n.length-1].signature}return{trades:r,top:i,reachedStop:!1}}async function ef(e){let t=e=>[e,{limit:1,commitment:`confirmed`}],n=e.map(()=>void 0),r=async r=>{for(let i of V?[V,ku]:[ku])try{n[r]=(await ed(i,`getSignaturesForAddress`,t(e[r])))[0]?.signature??null;return}catch{}},i=[];for(let t=0;t<e.length;t+=30)i.push(t);return await Promise.all(i.map(async i=>{let a=e.slice(i,i+30),o=()=>Promise.all(a.map((e,t)=>n[i+t]===void 0?r(i+t):null));if(a.length<3&&V)return o();let s=Uu(`getSignaturesForAddress`);if(qu(ku,`getSignaturesForAddress`)||s.room()<a.length||Hu.publicAll.room()<a.length)return o();s.takeNow(a.length),Hu.publicAll.takeNow(a.length);try{let e=await Qu(ku,a.map((e,n)=>({jsonrpc:`2.0`,id:n,method:`getSignaturesForAddress`,params:t(e)}))),r=e.ok?await e.json():[];(e.status===429||Array.isArray(r)&&r.some(e=>e.error?.code===-32005||e.error?.code===429))&&Ku(ku,`getSignaturesForAddress`);for(let e of Array.isArray(r)?r:[])e.result&&(n[i+e.id]=e.result[0]?.signature??null)}catch{}return o()})),n}async function tf(e){let t=[];for(let n=0;n<e.length;n+=100){let r=await $u(`getMultipleAccounts`,[e.slice(n,n+100),{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:64,length:8}}]);for(let e of r.value){let n=e?So.decode(e.data[0]):null;t.push(n&&n.length===8?new DataView(n.buffer,n.byteOffset).getBigUint64(0,!0):null)}}return t}async function nf(e,t,n){let r=n?[n]:[Fu,Iu],i=e.flatMap(e=>r.map(n=>bd(e,t,n))),a=[t,...e,...i],o=[];for(let e=0;e<a.length;e+=100)o.push(a.slice(e,e+100));let s=(await Promise.all(o.map(e=>$u(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:44,length:28}}])))).flatMap(e=>e.value),c=s[0],l=c?So.decode(c.data[0]):null,u=!!c&&(c.owner===`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`||c.owner===`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)&&!!l?.length,d=u?r.indexOf(c.owner):-1,f=t=>{if(d<0)return null;let n=s[1+e.length+t*r.length+d];return n&&n.owner===c.owner?n:null};return{decimals:u?l[0]:void 0,program:u?c.owner:void 0,lamports:e.map((e,t)=>s[1+t]?.lamports??0),raw:e.map((e,t)=>{let n=f(t),r=n?So.decode(n.data[0]):null;return r&&r.length>=28?new DataView(r.buffer,r.byteOffset).getBigUint64(20,!0):0n}),deposit:e.map((e,t)=>f(t)?.lamports??0),accounts:e.map((e,t)=>f(t)?i[t*r.length+d]:null)}}async function rf(e){let t=new Map;if(!V||!e.length)return t;for(let n=0;n<e.length;n+=1e3)try{let r=await ed(V,`getAssetBatch`,{ids:e.slice(n,n+1e3)});for(let e of r)e&&t.set(e.id,{name:e.content?.metadata?.name||null,symbol:e.content?.metadata?.symbol||e.token_info?.symbol||null,logo:ad(e),decimals:e.token_info?.decimals,price:e.token_info?.price_info?.price_per_token||void 0})}catch{}return t}function af(e){return V?e.some(e=>qu(ku,e))?[V,ku]:[ku,V]:[ku]}var of=[`getTokenAccountsByOwner`,`getMultipleAccounts`];async function sf(e,t=af(of)){let n=null;for(let r of t)try{let[t,n,i]=await td(r,[{method:`getTokenAccountsByOwner`,params:[e,{programId:Fu},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getTokenAccountsByOwner`,params:[e,{programId:Iu},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getMultipleAccounts`,params:[[e],{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]}],!0),a=[...t.value,...n.value].map(({pubkey:e,account:t})=>({address:e,mint:t.data.parsed.info.mint,raw:BigInt(t.data.parsed.info.tokenAmount.amount)})).filter(e=>e.raw>0n).slice(0,60);return{node:r,lamports:i.value[0]?.lamports??0,accounts:a}}catch(e){n=e}throw n instanceof Error?n:Error(String(n))}async function cf(e,t,n){let r=await(n??sf(t)).catch(()=>sf(t)),i=null,a=[r.node,...af([`simulateTransaction`]).filter(e=>e!==r.node)];a.length>1&&qu(a[0],`simulateTransaction`)&&a.push(a.shift());for(let n of a)try{n!==r.node&&(r=await sf(t,[n]));let i=await ed(n,`simulateTransaction`,[So.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:[t,...r.accounts.map(e=>e.address)]}}],n===V?2:0,!0);if(i.value.err)return{failed:!0,solOut:0,coinsOut:new Map,takenOver:!1};let a=i.value.accounts??[],o=a[0],s=!!o&&o.owner!==pd,c=new Map;return r.accounts.forEach((e,n)=>{let r=a[n+1],i=r?So.decode(r.data[0]):new Uint8Array;i.length>=64&&jo.encode(i.slice(32,64))!==t&&(s=!0);let o=i.length>=72?new DataView(i.buffer,i.byteOffset).getBigUint64(64,!0):0n;o<e.raw&&c.set(e.mint,(c.get(e.mint)??0n)+(e.raw-o))}),{failed:!1,solOut:r.lamports-(o?.lamports??0),coinsOut:c,takenOver:s}}catch(e){i=e}throw i instanceof Error?i:Error(String(i))}var lf=`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`,uf=`pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA`,df=`So11111111111111111111111111111111111111112`,ff=Td,pf=`ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw`,mf=`5PHirr8joyTMp9JMm6nW7hNDVyEYdkzDqazxPD7RaTjx`,hf=`4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`,gf=`8Wf5TiAheLUqBrKXeYg2JtAFFMWtKdG2BSFgqUcPVwTt`,_f=`Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`,vf=`5YxQFdt3Tr9zJLvkFccqXVUwhdTWJQc1fFg2YPbxvxeD`,yf=Uint8Array.from([43,100,73,19,233,246,111,148]),bf=e=>new TextEncoder().encode(e),xf=e=>jo.decode(e),Sf=xd([bf(`__event_authority`)],uf);function Cf(e){return xd([bf(`bonding-curve`),xf(e)],lf)}function wf(e,t){let n=xd([bf(`pool-authority`),xf(e)],lf);return xd([bf(`pool`),Uint8Array.of(0,0),xf(n),xf(e),xf(t)],uf)}async function Tf(e){let[t,n]=await Ed([Cf(e),e]);if(!t||t.owner!==lf||t.data.length<115||!n)return null;let r=jo.encode(t.data.slice(83,115));if(r===ff||r===df)return null;let i=t.data[48]!==0,a=t.data[81]!==0,o=t.data[82]!==0,[s,c]=await Ed([r,wf(e,r)]);if(!s)throw Error(`This coin's price coin couldn't be found.`);let l=i?c?.owner===uf?`pool`:null:`curve`;if(!l)throw Error(`This coin is between pump.fun and its pool right now, so it can't be traded for a moment. Try again shortly.`);if(l===`curve`&&a||l===`pool`&&c.data.length>=244&&c.data[243]!==0)throw Error(`pump.fun doesn't allow this kind of trade on "mayhem mode" coins.`);let u=l===`pool`&&c.data.length>=245&&c.data[244]!==0;if(l===`curve`&&o||u)throw Error(`pump.fun doesn't allow this kind of trade on cashback coins.`);let d=e=>{if(e!==`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`&&e!==`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)throw Error(`This coin uses a token program the app doesn't know.`);return e};return{mint:e,mintProgram:d(n.owner),quote:r,quoteProgram:d(s.owner),venue:l}}function Ef(e,t,n,r,i){let a={mint:t.mint,program:t.mintProgram},o={mint:t.quote,program:t.quoteProgram},[s,c]=n===`buy`?[o,a]:[a,o],l=(e,t)=>bd(e,t.mint,t.program),u=t.venue===`curve`?Cf(t.mint):wf(t.mint,t.quote),d=e=>({pubkey:e,isSigner:!1,isWritable:!0}),f=e=>({pubkey:e,isSigner:!1,isWritable:!1}),p=new Uint8Array(24);p.set(yf,0);let m=new DataView(p.buffer);m.setBigUint64(8,r,!0),m.setBigUint64(16,i,!0);let h={programId:uf,keys:[{pubkey:e,isSigner:!0,isWritable:!0},d(l(e,s)),d(l(e,c)),f(pf),f(mf),d(xd([bf(`user_volume_accumulator`),xf(e)],uf)),d(l(vf,o)),f(Fu),f(Iu),f(Td),f(Sf),f(uf),f(lf),f(hf),f(gf),f(_f),f(t.mint),f(t.quote),d(u),d(l(u,a)),d(l(u,o))],data:p};return[...Ad(3e5,2e5),Sd(e,l(e,c),e,c.mint,c.program),Sd(e,l(vf,o),vf,o.mint,o.program),h]}function Df(e,t,n){return n===`coin`?bd(e,t.mint,t.mintProgram):bd(e,t.quote,t.quoteProgram)}var Of=`walletCoins`,kf=1,Af=null,jf=()=>({v:kf,wallets:{},coins:{}}),Mf=()=>Af??=P.get(Of).then(e=>{let t=JSON.parse(e||`null`);return t&&t.v===kf?t:jf()}).catch(jf),Nf;function Pf(){clearTimeout(Nf),Nf=setTimeout(async()=>{let e=await Mf();P.set(Of,JSON.stringify(e)).catch(()=>{})},300)}var Ff=([e,t,n,r,i,a])=>({address:e,mint:t,program:n,raw:BigInt(r),decimals:i,lamports:a}),If=e=>[e.address,e.mint,e.program,e.raw.toString(),e.decimals,e.lamports],Lf=(e,t)=>t.map(t=>({address:t,lamports:e.wallets[t].lamports,accounts:e.wallets[t].accounts.map(Ff)}));async function Rf(e){let t=await Mf();return e.every(e=>t.wallets[e])?Lf(t,e):null}async function zf(e){Hf=null;let t=await Mf();for(let n of e)t.wallets[n]&&(t.wallets[n].stale=!0);Pf()}async function Bf(e,t,n){if(!t.length)return;let r=t.map(e=>e.address).filter(e=>!n.has(e)),[i,a]=await Promise.all([Promise.all(t.map(e=>Pd(e.address))),r.length?ef(r):Promise.resolve([])]),o=new Map(n);r.forEach((e,t)=>o.set(e,a[t])),t.forEach(({address:t,lamports:n},r)=>{let a=e.wallets[t],s=o.get(t);e.wallets[t]={at:Date.now(),lamports:n,sig:s===void 0?a?.sig:s,sigAt:s===void 0?a?.sigAt:Date.now(),accounts:i[r].map(If)}})}async function Vf(e,t){let n=new Map;for(let r of t)for(let t of e.wallets[r].accounts)BigInt(t[3])>0n&&n.set(t[1],t[4]);let r=[...n.keys()].filter(t=>!e.coins[t]);if(!r.length)return;let i=await rf(r);for(let t of r){let r=i.get(t);r&&(e.coins[t]={name:r.name,symbol:r.symbol,logo:r.logo,decimals:r.decimals??n.get(t),price:r.price})}}var Hf=null;function Uf(e){let t=e.join(`,`);if(Hf&&Hf.key===t&&Date.now()-Hf.at<4e3)return Hf.value;let n=Wf(e),r={key:t,at:Date.now(),value:n};return Hf=r,n.then(()=>Hf===r&&(r.at=Date.now()),()=>Hf===r&&(Hf=null)),n}async function Wf(e){let t=await Mf(),n=e=>t.wallets[e]&&!t.wallets[e].stale,r=e.flatMap(e=>n(e)?t.wallets[e].accounts.map(t=>({owner:e,a:t})):[]),i=e.filter(e=>!t.wallets[e]),[a,o,s]=await Promise.all([cd(e),r.length?tf(r.map(e=>e.a[0])):Promise.resolve([]),i.length?ef(i):Promise.resolve([])]),c=new Map(i.map((e,t)=>[e,s[t]])),l=new Set;return e.forEach((e,n)=>{let r=t.wallets[e];(!r||r.stale||r.lamports!==a[n])&&(!r&&c.get(e)===null&&!a[n]?t.wallets[e]={at:Date.now(),lamports:0,sig:null,sigAt:Date.now(),accounts:[]}:l.add(e))}),r.forEach(({owner:e,a:t},n)=>{let r=o[n];r===null?l.add(e):t[3]=r.toString()}),await Bf(t,[...l].map(t=>({address:t,lamports:a[e.indexOf(t)]})),c),e.forEach((e,n)=>{t.wallets[e].lamports=a[n],t.wallets[e].at=Date.now()}),await Vf(t,e),Pf(),Lf(t,e)}async function Gf(e,t=!1){let n=await Mf(),r=e.filter(e=>n.wallets[e]&&!n.wallets[e].stale&&(t||Date.now()-(n.wallets[e].sigAt??0)>12e4));if(!r.length)return null;let i=await ef(r),a=new Map(r.map((e,t)=>[e,i[t]])),o=r.filter(e=>a.get(e)!==void 0&&a.get(e)!==n.wallets[e].sig);for(let e of r)a.get(e)!==void 0&&(n.wallets[e].sigAt=Date.now());return o.length?(await Bf(n,o.map(e=>({address:e,lamports:n.wallets[e].lamports})),a),await Vf(n,e),Pf(),Lf(n,e)):(Pf(),null)}async function Kf(e){let t=await Mf(),n=new Map;for(let t of e.accounts){if(t.raw===0n)continue;let e=n.get(t.mint)??{raw:0n,decimals:t.decimals};e.raw+=t.raw,n.set(t.mint,e)}return[...n].map(([e,{raw:n,decimals:r}])=>{let i=t.coins[e],a=Number(n)/10**r;return{mint:e,name:i?.name??null,symbol:i?.symbol??null,amount:a,usd:i?.price?i.price*a:null,decimals:r,logo:i?.logo}})}async function qf(e){let t=await Mf(),n=!1;for(let[r,i]of e)t.coins[r]&&i>0&&t.coins[r].price!==i&&(t.coins[r].price=i,n=!0);n&&Pf()}async function Jf(e){return(await Mf()).coins[e]??null}async function Yf(e){let t=await Mf();for(let n of Object.values(t.wallets))for(let t of n.accounts)if(t[1]===e)return t[2]}var Xf=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(Ws(e),Us(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),Ys(r)}update(e){return qs(this),this.iHash.update(e),this}digestInto(e){qs(this),Js(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Zf=(()=>{let e=((e,t,n)=>new Xf(e,t).update(n).digest());return e.create=(e,t)=>new Xf(e,t),e})();function Qf(e,t,n,r){Ws(e);let{c:i,dkLen:a,asyncTick:o}=oc({dkLen:32,asyncTick:10},r);if(Hs(i,`c`),Hs(a,`dkLen`),Hs(o,`asyncTick`),i<1)throw Error(`"c" (iterations) must be >= 1`);if(a<1)throw Error(`"dkLen" must be >= 1`);if(a>(2**32-1)*e.outputLen)throw Error(`derived key too long`);let s=ic(t,`password`);try{let t=ic(n,`salt`);try{let n=new Uint8Array(a),{iHash:r,oHash:c,outputLen:l}=Zf.create(e,s);return{c:i,dkLen:a,asyncTick:o,DK:n,outputLen:l,eng:$f(r,c,t,new Uint8Array(l))}}finally{typeof n==`string`&&Ys(t)}}finally{typeof t==`string`&&Ys(s)}}function $f(e,t,n,r){let i=new Uint8Array(4),a=Xs(i),o=e._cloneInto().update(n),s=t._cloneInto(),c=e._cloneInto,l=t._cloneInto;return{u1:(e,n)=>{a.setInt32(0,e,!1),o._cloneInto(s).update(i).digestInto(r),t._cloneInto(s).update(r).digestInto(r),n.set(r.subarray(0,n.length))},rounds:(n,i)=>{for(let a=1;a<n;a++){c.call(e,s).update(r).digestInto(r),l.call(t,s).update(r).digestInto(r);for(let e=0;e<i.length;e++)i[e]^=r[e]}},output:n=>(e.destroy(),t.destroy(),o.destroy(),s.destroy(),Ys(r),n)}}function ep(e,t,n,r){let{c:i,dkLen:a,DK:o,outputLen:s,eng:c}=Qf(e,t,n,r);for(let e=1,t=0;t<a;e++,t+=s){let n=o.subarray(t,t+s);c.u1(e,n),c.rounds(i,n)}return c.output(o)}var tp=e=>e[0]===`あいこくしん`;function np(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;let n=e.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function rp(e){if(typeof e!=`string`)throw TypeError(`invalid mnemonic type: `+typeof e);if(!np(e))throw TypeError(`expected well-formed Unicode string`);return e.normalize(`NFKD`)}function ip(e){let t=rp(e),n=t.split(` `);if(![12,15,18,21,24].includes(n.length))throw Error(`Invalid mnemonic`);return{nfkd:t,words:n}}function ap(e){if(Us(e),![16,20,24,28,32].includes(e.length))throw RangeError(`invalid entropy length`)}function op(e,t=128){if(Hs(t),t%32!=0||t>256)throw RangeError(`Invalid entropy`);return fp(cc(t/8),e)}var sp=e=>{let t=8-e.length/4;return Ec(e)[0]>>t<<t};function cp(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!=`string`)throw TypeError(`Wordlist: expected array of 2048 strings`);e.forEach(e=>{if(typeof e!=`string`)throw TypeError(`wordlist: non-string element: `+e);if(!np(e))throw TypeError(`wordlist: expected well-formed Unicode string`)})}function lp(e,t){cp(t);let n=new Uint8Array(e.length+1);n.set(e),n[e.length]=sp(e);let r=[],i=0,a=0;for(let e of n)i=i<<8|e,a+=8,a>=11&&(a-=11,r.push(t[i>>>a&2047]),i&=(1<<a)-1);return r}function up(e,t){cp(t);let n=e.length/3*4,r=new Uint8Array(n+1),i=0,a=0,o=0;for(let n of e){let e=t.indexOf(n);if(e===-1)throw Error(`Unknown word: `+n);for(i=i<<11|e,a+=11;a>=8;)a-=8,r[o++]=i>>>a&255;i&=(1<<a)-1}a>0&&(r[o]=i<<8-a);let s=r.subarray(0,n);if(r[n]!==sp(s))throw Error(`Invalid checksum`);return Uint8Array.from(s)}function dp(e,t){let{words:n}=ip(e),r=up(n,t);return ap(r),r}function fp(e,t){return ap(e),lp(e,t).join(tp(t)?`　`:` `)}function pp(e,t){try{dp(e,t)}catch{return!1}return!0}var mp=e=>{if(typeof e!=`string`)throw TypeError(`invalid passphrase type: `+typeof e);return rp(`mnemonic`+e)};function hp(e,t=``){return ep(Dc,ip(e).nfkd,mp(t),{c:2048,dkLen:64})}var gp=Object.freeze(`abandon
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
`));function _p(){return op(gp,128)}function vp(e){return e.trim().toLowerCase().split(/\s+/).join(` `)}function yp(e){return pp(vp(e),gp)}function bp(e,t){let n=Zf(Dc,new TextEncoder().encode(`ed25519 seed`),e),r=n.slice(0,32),i=n.slice(32);for(let e of[44,501,t,0]){let t=new Uint8Array(37);t.set(r,1),new DataView(t.buffer).setUint32(33,(e|2147483648)>>>0),n=Zf(Dc,i,t),r=n.slice(0,32),i=n.slice(32)}return r}function xp(e,t){let n=hp(vp(e));return Array.from({length:t},(e,t)=>{let r=bp(n,t);return{index:t,address:jo.encode(Du.getPublicKey(r)),secret:r}})}var Sp=3e5,Cp=e=>btoa(String.fromCharCode(...e)),wp=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function Tp(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:Sp,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}function Ep(e,t){return Dp(vp(e),t)}async function Dp(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await Tp(t,n),a=new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,new TextEncoder().encode(e))),o={v:1,salt:Cp(n),iv:Cp(r),data:Cp(a)};return JSON.stringify(o)}async function Op(e,t){let n=JSON.parse(e),r=await Tp(t,wp(n.salt));try{let e=await crypto.subtle.decrypt({name:`AES-GCM`,iv:wp(n.iv)},r,wp(n.data));return new TextDecoder().decode(e)}catch{return null}}function kp(e){return jo.encode(new Uint8Array([...e.secret,...jo.decode(e.address)]))}function Ap(e){let t=e.trim().replace(/^["']|["']$/g,``),n;try{if(t.startsWith(`[`)){let e=JSON.parse(t);if(!Array.isArray(e)||!e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return null;n=new Uint8Array(e)}else n=jo.decode(t.replace(/\s+/g,``))}catch{return null}if(n.length!==64)return null;let r=n.slice(0,32),i=Du.getPublicKey(r);return i.every((e,t)=>e===n[32+t])?{address:jo.encode(i),secret:r}:null}var jp=`vault`,Mp=`addresses`,Np=`imports`,Pp=new Map;function Fp(e){let t=Pp.get(e);if(!t){let n=qt.get(e);t=n,Pp.set(e,n),n.then(t=>t.value===null&&Pp.get(e)===n&&Pp.delete(e),()=>Pp.get(e)===n&&Pp.delete(e))}return t}async function Ip(e,t){Pp.delete(e),await qt.set(e,t),Pp.delete(e)}async function Lp(e){Pp.delete(e),await qt.remove(e),Pp.delete(e)}var Rp=`importList`,zp=`costBasis`,Bp=20;document.head.append(Object.assign(document.createElement(`style`),{textContent:jn}));var W=new URLSearchParams(location.search),G=W.get(`jk`),Vp=W.get(`rk`),Hp=`https://krypto-relay.dustin-m-shamp.workers.dev`,Up=W.get(`relay`)===Hp?Hp:void 0;Up&&Po(Up),Vp&&(Up||!W.has(`relay`))&&Mu(Vp,Up),Up&&Vp&&Ea(Up,Vp);var Wp=document.querySelector(`meta[name="app-version"]`)?.content??`?`,Gp=W.get(`v`),Kp=!!Gp&&/^\d+(\.\d+)+$/.test(Gp)&&((e,t)=>{let[n,r]=[e.split(`.`).map(Number),t.split(`.`).map(Number)];for(let e=0;e<Math.max(n.length,r.length);e++)if((n[e]??0)!==(r[e]??0))return(n[e]??0)>(r[e]??0);return!1})(Gp,Wp),qp=Kp&&!W.get(`r`);if(qp){let e=new URL(location.href);e.searchParams.set(`r`,String(Date.now())),location.replace(e.toString())}var Jp=W.get(`buy`),Yp=Math.min(100,Math.max(1,Number(W.get(`pct`))||100)),Xp=W.get(`sol`)?{total:Math.round(Number(W.get(`sol`))*H),count:W.get(`n`)?Number(W.get(`n`)):null,split:W.get(`split`)?W.get(`split`).split(`-`).map(Number):null}:null,Zp=W.get(`sell`),Qp=Math.min(100,Math.max(1,Number(W.get(`spct`))||100)),$p=W.get(`main`)===`1`,em=W.get(`w`)?W.get(`w`).split(`-`).map(Number):null,tm=W.get(`send`),nm=W.get(`to`),rm=document.getElementById(`app`),im=new Map;function am(e,t,n){let r=im.get(e);if(r&&Date.now()-r.at<r.ttl)return r.value;let i=n();return im.set(e,{at:Date.now(),ttl:t,value:i}),i.catch(()=>im.delete(e)),i}var om=()=>im.clear(),sm=e=>am(`bal:${e.join(`,`)}`,3e4,()=>cd(e)),cm=(e=!1)=>am(`solusd`,3e4,()=>G?cs(G,e):Promise.resolve(null)),lm=e=>am(`orders:${e}`,3e4,()=>ms(G,e,`active`)),um=e=>am(`coin:${e}`,864e5,()=>sd(e)),dm=(e,t=!1)=>am(`prices:${[...e].sort().join(`,`)}`,15e3,()=>ls(G,e,t)),fm=null;function pm(){om(),Ut(),rm.classList.add(`loading`),vh(Sm(rm.querySelector(`h1`)?.textContent??`trade`)),fm?.disconnect();let e=new Map;fm=new MutationObserver(()=>{if(!document.getElementById(`hackloader`)){fm?.disconnect();return}let t=document.getElementById(`funding`),n=t?[[`funding`,`main`,t.textContent??``]]:[];rm.querySelectorAll(`code[id^="status-"]`).forEach(e=>{let t=e.parentElement?.querySelector(`span`)?.textContent?.trim()??``;n.push([e.id,t,e.textContent??``])});for(let[t,r,i]of n){let n=i.replace(/\s*·\s*(view|check)\s*$/i,``).replace(/\s+/g,` `).trim();n&&n!==`waiting`&&e.get(t)!==n&&(e.set(t,n),vh(`${n.startsWith(`✓`)?`[ok]`:n.startsWith(`✗`)||/fail/i.test(n)?`[!]`:`[*]`} ${r} ${n.replace(/^[✓✗]\s*/,``)}`,t))}}),fm.observe(rm,{subtree:!0,childList:!0,characterData:!0})}var mm=[],hm=!1,gm=!1,_m=new Set([`home`,`welcome`]);function K(e,t){if(hm&&mm.pop(),_m.has(e))mm.length=0;else{let t=mm.findIndex(t=>t.key===e);t>=0&&(mm.length=t)}mm.push({key:e,open:t}),hm=!0}function vm(){F();let e=e=>{let t=e?e.open:X;Promise.resolve().then(()=>t()).catch($)};if(!gm&&mm.length)return e(mm.pop());mm.pop(),e(mm.pop())}function q(e,t=!1){t||(gm=hm,hm=!1);let n=mm[mm.length-1],r=gm&&n&&_m.has(n.key),i=Kp?`<p class="note">Version ${Q(Gp)} is still being published. Everything here works; close and reopen in a minute to get it.</p>`:``;rm.innerHTML=`<header class="brand">${r?``:`<button type="button" id="navBack" class="navback" aria-label="Back">←</button>`}${zi()}<div class="name glitch" data-text="KRYPTO SNATCHER">KRYPTO SNATCHER</div>${xa()}</header>`+i+e+`<p class="version">KRYPTO_SNATCHER // v${Wp}${Up?` · RELAY`:Vp?` · HELIUS`:``}</p>`,rm.classList.toggle(`loading`,!!rm.querySelector(`.loader`)),document.getElementById(`navBack`)?.addEventListener(`click`,vm),Sa(),window.scrollTo(0,0)}function J(e){return document.getElementById(e)}function Y(e,t){J(e).addEventListener(`click`,t)}function ym(e){return`${e.slice(0,6)}…${e.slice(-6)}`}function bm(e){Xt(`error`);let t=J(`error`);t.textContent=e,t.hidden=!1}var xm=new Set([`your`,`the`,`my`,`a`,`an`,`of`,`on`,`to`,`it`,`what`,`each`,`every`,`in`,`from`,`this`]),Sm=e=>`$ ./objective --${e.toLowerCase().replace(/[^a-z0-9 ]+/g,` `).split(/\s+/).filter(e=>e&&!xm.has(e)).join(`-`)||`run`}`;function Cm(e){q(Pi(e),!0),Fi(),vh(Sm(e))}async function wm(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,Xt(`success`),setTimeout(()=>t.textContent=n,1200)}catch{prompt(`Copy this address:`,e)}}async function Tm(){if(!Wt()){q(`
      <h1>Open this on your phone</h1>
      <p>Your wallets are kept in your phone's secure storage, which only the Telegram app on iPhone or Android provides.</p>
      <p class="muted">Make sure Telegram is up to date, then open this from the bot on your phone.</p>`);return}N.ready(),N.expand(),Ca();try{N.setHeaderColor?.(`#05010f`),N.setBackgroundColor?.(`#05010f`)}catch{}let e=Qm().catch(()=>null);Fp(Np).catch(()=>{}),li(),setTimeout(Ne,1500),Jp&&G&&(od(Jp).catch(()=>{}),e.then(e=>{if(!e)return;let t=e.map(e=>e.address),n=cd(t);n.catch(()=>{}),eh={at:Date.now(),key:t.join(`,`),value:n}}));let{value:t,canRestore:n}=await Fp(jp);if(t){if(W.get(`view`)===`holdings`)return Xg();if(W.get(`view`)===`sweep`)return S_();if(W.get(`splitsol`)){let e=W.get(`splitsol`);return _g(e===`all`?`all`:Math.round(Number(e)*H),Number(W.get(`n`))||null,W.get(`split`)?W.get(`split`).split(`-`).map(Number):null)}if(tm&&nm){let e=Number(W.get(`amt`)),t=Number(W.get(`sendpct`));return tv({what:tm,to:nm,only:em,side:W.get(`side`)===`1`,amount:e>0?e:null,pct:t>0&&t<100?t:null})}return Zp===`*`?q_(Qp,$p,em):Zp?A_(Zp,Qp,$p,em):Jp&&Xp?mg(Jp,Xp):Jp&&W.get(`pick`)?vg(Jp,Number(W.get(`n`))||null,W.get(`side`)===`1`):Jp?og(Jp,Yp):X()}Em(n)}function Em(e){K(`welcome`,()=>Em(e)),q(`
    <h1>Your wallets</h1>
    <p>Your wallets are created and kept on this phone, locked with a PIN. The bot never sees your keys.</p>
    ${e?`<button id="restoreDevice" class="primary">Restore my saved wallets</button>`:``}
    <button id="create" class="${e?``:`primary`}">Create new wallets</button>
    <button id="import">I already have a 12-word phrase</button>`),e&&Y(`restoreDevice`,async()=>{let{value:e}=await qt.restore(jp);await qt.restore(Np).catch(()=>null),Pp.clear(),e?X():Em(!1)}),Y(`create`,()=>Om(_p())),Y(`import`,Am)}function Dm(e){return`<ol class="words">${e.split(` `).map(e=>`<li>${e}</li>`).join(``)}</ol>`}function Om(e){K(`newPhrase`,()=>Om(e)),q(`
    <h1>Your 12-word backup</h1>
    <p>Write these words down on paper, in order. They are the only way to get your wallets back if you lose this phone.</p>
    ${Dm(e)}
    <p class="warning">Never share these words or type them anywhere else. Anyone who has them controls your money.</p>
    <label class="check"><input type="checkbox" id="saved"> I wrote all 12 words down</label>
    <button id="next" class="primary" disabled>Continue</button>`),J(`saved`).addEventListener(`change`,()=>J(`next`).disabled=!J(`saved`).checked),Y(`next`,()=>km(e))}function km(e){K(`quiz`,()=>km(e));let t=e.split(` `),n=Math.floor(Math.random()*6),r=6+Math.floor(Math.random()*6);q(`
    <h1>Check your backup</h1>
    <p>Type these two words from your paper.</p>
    <label>Word #${n+1}<input id="wa" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <label>Word #${r+1}<input id="wb" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <p id="error" class="error" hidden></p>
    <button id="check" class="primary">Check</button>
    <button id="back">Show the words again</button>`),Y(`check`,()=>{if(J(`wa`).value.trim().toLowerCase()!==t[n]||J(`wb`).value.trim().toLowerCase()!==t[r])return bm(`Those don't match. Check your paper, or go back to see the words again.`);Im(e)}),Y(`back`,()=>Om(e))}function Am(){K(`import`,Am),q(`
    <h1>Enter your 12 words</h1>
    <p>Type your words in order, separated by spaces.</p>
    <textarea id="phrase" rows="4" autocapitalize="off" autocomplete="off" spellcheck="false"></textarea>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Continue</button>
    <button id="back">Back</button>`),Y(`next`,()=>{let e=vp(J(`phrase`).value);if(!yp(e))return bm(`That isn't a valid 12-word phrase. Check for typos.`);Im(e)}),Y(`back`,()=>Tm())}var jm=e=>`<input id="${e}" class="pinvalue" type="password" inputmode="none" maxlength="6" autocomplete="off" tabindex="-1">
   <div class="pindots" data-for="${e}">${`<i></i>`.repeat(6)}</div>`,Mm=(e=`clear`)=>`<div class="keypad">${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,e,`0`,`back`].map(e=>`<button type="button" class="key${/\d/.test(e)?``:` fn ${e}`}" data-k="${e}">${e===`back`?`⌫`:e===`clear`?`CLR`:e===`dot`?`.`:e}</button>`).join(``)}</div>`;function Nm(e){document.querySelectorAll(`.key`).forEach(t=>t.addEventListener(`click`,()=>{F(),e(t.dataset.k)}))}function Pm(e,t){let n=e[0],r=()=>e.forEach(e=>{let t=document.querySelector(`.pindots[data-for="${e}"]`);t.classList.toggle(`active`,e===n);let r=J(e).value.length;t.querySelectorAll(`i`).forEach((e,t)=>e.classList.toggle(`on`,t<r))});e.forEach(e=>{J(e).addEventListener(`input`,r),document.querySelector(`.pindots[data-for="${e}"]`).addEventListener(`click`,()=>(n=e,r()))}),Nm(i=>{document.querySelectorAll(`.pindots.nope`).forEach(e=>e.classList.remove(`nope`));let a=J(n);if(i===`back`?a.value=a.value.slice(0,-1):i===`clear`?a.value=``:a.value.length<6&&(a.value+=i),J(`error`).hidden=!0,a.value.length===6&&/\d/.test(i)){let i=e[e.indexOf(n)+1];i&&(n=i),r(),t(a.id)}else r()}),r()}function Fm(e){J(e).value=``;let t=document.querySelector(`.pindots[data-for="${e}"]`);t.querySelectorAll(`i`).forEach(e=>e.classList.remove(`on`)),t.classList.remove(`nope`),t.offsetWidth,t.classList.add(`nope`)}function Im(e){K(`setPin`,()=>Im(e)),q(`
    <h1>Choose a 6-digit PIN</h1>
    <p>You'll enter this PIN to approve trades and to see your backup words.</p>
    <label>PIN</label>${jm(`pin1`)}
    <label>Same PIN again</label>${jm(`pin2`)}
    <p id="error" class="error" hidden></p>
    ${Mm()}
    <button id="next" class="primary">Continue</button>`);let t=()=>{let t=J(`pin1`).value;if(!/^\d{6}$/.test(t))return bm(`The PIN must be exactly 6 digits.`);if(t!==J(`pin2`).value)return Fm(`pin2`),bm(`The two PINs don't match. Enter it again.`);Xm(e,t)};Pm([`pin1`,`pin2`],e=>e===`pin2`&&t()),Y(`next`,t)}var Lm=0,Rm=0;function zm(e,t){/ to (buy|fund|split|send|sell)\b/.test(e)&&Ld(),q(`
    <h1>${e}</h1>
    ${jm(`pin`)}
    <p id="error" class="error" hidden></p>
    ${Mm()}
    <button id="unlock" class="primary">Unlock</button>
    <button id="cancel">Cancel</button>`),Y(`cancel`,X),Pm([`pin`],()=>J(`unlock`).click()),Y(`unlock`,async()=>{if(Date.now()<Rm)return bm(`Too many wrong PINs. Try again in ${Math.ceil((Rm-Date.now())/1e3)} seconds.`);let e=J(`pin`).value,{value:n}=await Fp(jp);if(!n)return Tm();J(`unlock`).disabled=!0,J(`unlock`).textContent=`Checking…`;let r=Um(e).catch(()=>[]),i=await Op(n,e);if(J(`unlock`).disabled=!1,J(`unlock`).textContent=`Unlock`,!i)return Fm(`pin`),Lm++,Lm>=5&&(Rm=Date.now()+3e4*2**(Lm-5)),bm(`Wrong PIN.`);Lm=0,Bm=await r,Km().catch(()=>{}),t(i,e)})}var Bm=[],Vm=0,Hm=null;async function Um(e){let{value:t}=await Fp(Np);if(!t)return[];let n=await Op(t,e);return n?JSON.parse(n).flatMap(({name:e,key:t})=>{let n=Ap(t);return n?[{name:e,...n}]:[]}):[]}async function Wm(e,t){e=e.filter((t,n)=>e.findIndex(e=>e.address===t.address)===n),await Ip(Np,await Dp(JSON.stringify(e.map(e=>({name:e.name,key:kp({index:0,...e})}))),t)),Bm=e,await Gm(e)}async function Gm(e){let t=e.map(({name:e,address:t})=>({name:e,address:t}));try{await P.set(Rp,JSON.stringify(t)),$m()}catch{let e=Hm;Zm=e?Promise.resolve([...e,...t.map((t,n)=>({index:e.length+n,address:t.address,name:t.name}))]):null}}async function Km(){if(!Bm.length)return;let e=JSON.parse(await P.get(Rp).catch(()=>null)||`[]`);e.length===Bm.length&&e.every((e,t)=>e.address===Bm[t].address)||await Gm(Bm)}function qm(e,t){let n=xp(e,Math.min(t,Vm||t));for(let e=n.length;e<t;e++){let t=Bm[e-Vm];if(!t)throw Error(`The key for wallet #${e} is missing. Open the app again from the bot and retry.`);n.push({index:e,address:t.address,secret:t.secret})}return n}function Jm(){K(`importKey`,Jm),q(`
    <h1>Import a wallet</h1>
    <p>Paste the private key of a wallet from another app (in Phantom: Settings → Manage Accounts → the wallet → Show Private Key). It becomes one more side wallet here.</p>
    <textarea id="key" rows="3" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Private key"></textarea>
    <label>Name (optional)<input id="name" maxlength="20" autocomplete="off" placeholder="Phantom 1"></label>
    <p class="muted">It's locked with your PIN on this phone, like your 12 words. Your 12 words don't back it up, so keep its key in the app it came from too.</p>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Import</button>
    <button id="cancel">Cancel</button>`),Y(`cancel`,X),Y(`next`,async()=>{let e=Ap(document.getElementById(`key`).value);if(!e)return bm(`That doesn't look like a Solana private key. Copy it again from your wallet app and paste the whole thing.`);let t=await Qm()??[],n=t.find(t=>t.address===e.address);if(n)return bm(`That wallet is already here (${n.index===0?`main`:`#${n.index}`}).`);let r=t.length-Vm;if(r>=Bp)return bm(`You can import up to ${Bp} wallets.`);let i=J(`name`).value.trim().slice(0,20)||`Imported ${r+1}`;zm(`Enter your PIN to import it`,async(t,n)=>{Cm(`Saving…`);try{await Wm([...Bm,{name:i,...e}],n)}catch(e){return $(e)}Xt(`success`),X()})})}function Ym(e){K(`removeImport:${e.address}`,()=>Ym(e)),q(`
    <h1>Remove ${Q(e.name??``)} (#${e.index})?</h1>
    <p>This only removes it from Krypto Snatcher. The wallet and its money stay where they are.</p>
    <p class="warning">If you don't have its private key anywhere else, export it first, or move its coins and SOL out. Your 12 words can't bring it back.</p>
    <button id="exportFirst">Export its key first</button>
    <button id="yes" class="danger">Remove it</button>
    <button id="no" class="primary">Keep it</button>`),Y(`no`,X),Y(`exportFirst`,()=>tg(e)),Y(`yes`,()=>zm(`Enter your PIN to remove it`,async(t,n)=>{Cm(`Saving…`),await Wm(Bm.filter(t=>t.address!==e.address),n),X()}))}function Xm(e,t,n=5){K(`chooseCount`,()=>Xm(e,t,n)),q(`
    <h1>How many side wallets?</h1>
    <p>You get one main wallet that you deposit SOL into, plus side wallets for split buys.</p>
    <input id="count" class="pinvalue" type="text" inputmode="none" tabindex="-1" value="${n}">
    <div class="total amountbox"><small>Side wallets (0 to 30)</small><div class="amount"><span class="num" id="countShow">${n}</span></div></div>
    <div class="stepper wide"><button id="minus" type="button">−</button><button id="plus" type="button">+</button></div>
    <p id="error" class="error" hidden></p>
    ${Mm()}
    <button id="next" class="primary">Create wallets</button>`);let r=!0,i=e=>{J(`count`).value=e,J(`countShow`).textContent=e||`0`,J(`countShow`).classList.toggle(`over`,Number(e)>30),J(`error`).hidden=!0};Nm(e=>{let t=r?``:J(`count`).value;r=!1,e===`back`?i(t.slice(0,-1)):e===`clear`?i(``):t.length<2&&i(String(Number(t+e)))});let a=e=>{r=!0,i(String(Math.min(30,Math.max(0,(Number(J(`count`).value)||0)+e))))};Y(`minus`,()=>a(-1)),Y(`plus`,()=>a(1)),Y(`next`,async()=>{let n=Number(J(`count`).value);if(!Number.isInteger(n)||n<0||n>30)return bm(`Pick a whole number from 0 to 30.`);Cm(`Setting up your wallets…`);let r=xp(e,n+1).map(({index:e,address:t})=>({index:e,address:t}));t&&await Ip(jp,await Ep(e,t)),await P.set(Mp,JSON.stringify(r)),$m(),!t&&Bm.length&&(await P.set(Rp,JSON.stringify(Bm.map(({name:e,address:t})=>({name:e,address:t})))),$m()),Xt(`success`),X()})}var Zm=null;function Qm(){if(!Zm){let e=nh();Zm=e,e.then(t=>!t&&Zm===e&&(Zm=null),()=>Zm===e&&(Zm=null))}return Zm}var $m=()=>Zm=null,eh=null;function th(e){let t=eh;return eh=null,t&&t.key===e.join(`,`)&&Date.now()-t.at<5e3?t.value.catch(()=>cd(e)):cd(e)}async function nh(){let[e,t]=await Promise.all([P.get(Mp),P.get(Rp)]);if(!e)return null;let n=JSON.parse(e);Vm=n.length,Hm=n;let r=JSON.parse(t||`[]`);return[...n,...r.map((e,t)=>({index:n.length+t,address:e.address,name:e.name}))]}async function X(){K(`home`,X);let e=await Qm();if(!e)return zm(`Unlock your wallets`,e=>Xm(e,null));let[t,...n]=e;q(`
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
    ${n.length?`<ul class="list">${n.map(e=>`<li class="openwallet" data-index="${e.index}"><span>#${e.index}</span><code>${e.name?`<b>${Q(e.name)}</b> · `:``}${ym(e.address)}<br><small class="bal" data-index="${e.index}">…</small></code>
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
    <button id="remove" class="danger">Remove wallets from this phone</button>`),document.querySelectorAll(`.copy`).forEach(e=>e.addEventListener(`click`,()=>wm(e.dataset.address,e))),document.querySelectorAll(`.export`).forEach(t=>t.addEventListener(`click`,()=>tg(e[Number(t.dataset.index)]))),document.querySelectorAll(`.unimport`).forEach(t=>t.addEventListener(`click`,()=>Ym(e[Number(t.dataset.index)]))),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,n=>{n.target.closest(`button, a, .solamt, .coinamt`)||(F(),ih(e[Number(t.dataset.index)]).catch($))})),Y(`importKey`,Jm),Y(`holdings`,()=>Xg().catch($)),Y(`holdingsTop`,()=>Xg().catch($)),Y(`pnl`,()=>Ph().catch($)),Y(`sellAll`,()=>q_(100,!1,null).catch($)),n.length&&Y(`sweep`,()=>S_().catch($)),Y(`change`,()=>zm(`Enter your PIN`,e=>Xm(e,null,Vm-1))),Y(`reveal`,()=>zm(`Enter your PIN`,e=>{q(`
        <h1>Your 12 backup words</h1>
        ${Dm(e)}
        <p class="warning">Never share these words. Anyone who has them controls your money.</p>
        <button id="done" class="primary">Done</button>`),Y(`done`,X)})),Y(`remove`,rv),sm(e.map(e=>e.address)).then(e=>{document.querySelectorAll(`.bal`).forEach(t=>{let n=e[Number(t.dataset.index)];Nn(t,n,e=>`${eg(e)} SOL`,{ms:900,final:`${U(n)} SOL`})});let t=document.getElementById(`totalSol`),n=e.reduce((e,t)=>e+t,0);t&&Nn(t,n,eg,{ms:1200,final:U(n)});let r=document.getElementById(`totalWrap`);r&&(r.dataset.sol=String(n/H),r.classList.add(`solamt`),av&&mv())}).catch(e=>{let t=document.getElementById(`totalSol`);t&&(t.textContent=`—`),document.querySelectorAll(`.bal`).forEach(e=>e.textContent=`balance unavailable`);let n=document.createElement(`p`);n.className=`error`,n.textContent=e instanceof Error?e.message:String(e),document.querySelector(`h1`).after(n)})}var rh=null;async function ih(e){let t=`wallet:${e.address}`;K(t,()=>ih(e));let n=Symbol(`wallet`);rh=n;let r=()=>rh===n&&mm[mm.length-1]?.key===t,[i,a]=await Promise.all([Zg(),i_()]),o=a.filter(t=>t.wallet===e.address).length;await Qg([e],`Opening the wallet…`,r,(t,n,r)=>ah(e,t[0],n?.[0]??null,r,{costs:i,autoHere:o}))}async function ah(e,t,n,r,{costs:i,autoHere:a}){let o=e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`,s=t.lamports,c=0,l=(await Kf(t)).filter(e=>!Ag(e)||!(c+=1)),u=new Map;for(let e of[...l,...n??[]]){let t=u.get(e.mint)??{coin:e,amount:0,inOrders:0,usd:null};t.amount+=e.amount,Hg(e)?t.inOrders+=e.amount:e.usd!==null&&(t.usd=(t.usd??0)+e.usd),u.set(e.mint,t)}let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=Q_(e),p=window.scrollY;q(`
    <h1>${o} <span id="holdSync" class="live${r===`saved`?``:` synced`}">${r===`saved`?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total"><small>SOL in this wallet</small><div class="big"><span class="solamt" data-sol="${s/H}">${U(s)}</span><span class="unit">SOL</span></div><div class="sub" id="coinsUsd"></div></div>
    <div class="card"><div class="label">Address</div><div class="address">${e.address}</div>
      <div class="row"><button id="copyAddr">Copy address</button><button id="exportKey">Export key</button></div></div>
    <h2>Coins${u.size&&G?` <span id="live" class="live">LIVE</span>`:``}</h2>
    ${u.size?`<ul class="list coins">${[...u.values()].map(e=>`<li data-mint="${e.coin.mint}">${Pn(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(kg(e.coin))}</b>${e.inOrders?`<small class="inorder">🎯 ${cv(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
              <div class="right"><span class="val">${e.usd===null?``:Og(e.usd)}</span><small class="move"></small><small>${cv(e.coin.mint,e.amount)}</small></div></li>`).join(``)}</ul><p class="muted">Tap a coin to sell some of it from this wallet, set an auto-sell, or buy more.</p>`:`<p class="muted">No coins in this wallet.</p>`}
    ${c?`<p class="muted">${c} junk coin${c===1?``:`s`} hidden.</p>`:``}
    ${u.size?`<button id="sellAll" class="danger">Sell all coins in this wallet</button>`:``}
    ${a?`<button id="autoSells" class="gold">🎯 Auto-sells · ${a} placed</button>`:``}
    ${e.index===0?``:`<button id="solToMain">Send all its SOL to main</button>`}
    ${e.index!==0&&u.size?`<button id="allToMain">Send everything (coins + SOL) to main</button>`:``}
    <button id="solscan">View on Solscan</button>
    ${e.name?`<button id="unimport" class="danger">Remove this imported wallet</button>`:``}
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,p),Fn(),Y(`copyAddr`,()=>wm(e.address,J(`copyAddr`))),Y(`exportKey`,()=>tg(e)),Y(`solscan`,()=>Qt(Gd(e.address))),Y(`home`,X),u.size&&Y(`sellAll`,()=>q_(100,!1,[e.index]).catch($)),a&&Y(`autoSells`,()=>h_().catch($));let m=t=>tv({what:t,to:`0`,only:[e.index],side:!1,amount:null,pct:null}).catch($);e.index!==0&&Y(`solToMain`,()=>m(`sol`)),e.index!==0&&u.size&&Y(`allToMain`,()=>m(`*`)),e.name&&Y(`unimport`,()=>Ym(e));let h=new Map;if(document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=u.get(t.dataset.mint);F(),t_({mint:n.coin.mint,label:kg(n.coin),short:n.coin.symbol||n.coin.name||`?`,logo:n.coin.logo,amount:n.amount,raw:d(n),wallets:f,holders:[{address:e.address,amount:n.amount}],decimals:n.coin.decimals??0,inOrders:n.inOrders,only:[e.index],value:h.get(n.coin.mint)??null}).catch($)})),!u.size||!G)return;let g=J(`live`),_=async e=>{let t=[...u],[n,r]=await Promise.all([cm(e).catch(()=>null),Promise.all(t.map(([t,n])=>ss(G,t,d(n),e).catch(()=>null)))]);if(!g.isConnected)return;hv(n);let a=0,o=new Map;t.forEach(([e,t],s)=>{let c=r[s],l=document.querySelector(`.coins li[data-mint="${e}"]`);if(!l||c===null)return;h.set(e,c),n&&(t.usd=c/H*n,a+=t.usd,l.querySelector(`.val`).textContent=Og(t.usd),t.amount>0&&(lv(e,t.usd/t.amount),o.set(e,t.usd/t.amount)));let u=i[e],f=!jg.has(e)&&Pg(u)?Fg(u,n):null,p=l.querySelector(`.right`);if(f){let e=f/Number(BigInt(u.raw))*Number(d(t)),n=(c-e)/e*100,r=Math.abs(n)>=.5;p.classList.toggle(`up`,r&&n>0),p.classList.toggle(`down`,r&&n<0),p.querySelector(`.move`).textContent=r?`${n>0?`▲`:`▼`} ${Math.abs(n)>=100?Math.round(Math.abs(n)):Math.abs(n).toFixed(1)}% since buy`:``}}),qf(o).catch(()=>{}),a>0&&(J(`coinsUsd`).textContent=`+ ${Og(a)} in coins`),g.classList.remove(`beat`),g.offsetWidth,g.classList.add(`beat`)};(async()=>{for(let e=0;g.isConnected;e++)document.hidden||await _(e>0),await new Promise(e=>setTimeout(e,5e3))})().catch(()=>{})}var oh=1,sh=1500,ch=([e,t,n,r,i,a,o])=>({sig:e,at:t,mint:n,side:r,coins:i,lamports:a,usd:o}),lh=e=>[e.sig,e.at,e.mint,e.side,e.coins,e.lamports,Math.round(e.usd*1e6)/1e6];async function uh(e){try{let t=JSON.parse(await P.get(`pnl_${e}`)||`null`);return t&&t.v===oh?t:null}catch{return null}}var dh=(e,t)=>am(`trades:${e}`,9e4,async()=>{let n=`pnl_${e}`,r=await uh(e),i=await gh(t,8e3,void 0);if(i===null)return await P.set(n,JSON.stringify({v:oh,sig:null,trades:[]})).catch(()=>{}),[];if(r&&i&&r.sig===i)return r.trades.map(ch);let a=await $d(e,r?.top,5);if(!a){if(r)return r.trades.map(ch);throw Error(`Couldn't read this wallet's history right now.`)}let o=new Set(a.trades.map(e=>e.sig)),s=[...a.trades,...r?.trades.map(ch).filter(e=>!o.has(e.sig))??[]].sort((e,t)=>t.at-e.at).slice(0,sh),c={v:oh,top:a.top,sig:i,trades:s.map(lh)};return await P.set(n,JSON.stringify(c)).catch(()=>{}),s}),fh=(e,t,n)=>{let r=t.get(e.at)??n??0;return e.lamports/H*r+e.usd},ph=(e,t,n)=>{let r=t.get(e.at)??n;return e.lamports/H+(r?e.usd/r:0)};function mh(e,t,n,r,i,a){let o=0,s=0,c=0,l=0,u=0,d=0;for(let e of t)e.side===1?(o+=e.coins,c+=fh(e,i,a),l+=ph(e,i,a)):(s+=e.coins,u+=fh(e,i,a),d+=ph(e,i,a));let f=Math.min(s,o),p=Math.max(0,Math.min(n,o-f)),m=o>0?(f+p)/o:0,h=s>0?f/s:0,g=c*m,_=l*m,v=u*h,y=d*h,b=p*(r??0),x=a?b/a:0,S=v+b-g,C=y+x-_;return{mint:e,trades:t,bought:o,sold:s,held:n,paidUsd:g,paidSol:_,backUsd:v,backSol:y,nowUsd:b,nowSol:x,pnlUsd:S,pnlSol:C,pct:g>=.01&&!jg.has(e)?S/g*100:null,avgUsd:o>0?c/o:0,avgSol:o>0?l/o:0}}function hh(e){let t=e.filter(e=>e.pct!==null),n=t.reduce((e,t)=>e+t.pnlUsd,0),r=t.reduce((e,t)=>e+t.pnlSol,0),i=t.reduce((e,t)=>e+t.paidUsd,0);return{pnlUsd:n,pnlSol:r,paidUsd:i,pct:i>=.01?n/i*100:null}}var gh=(e,t,n)=>Promise.race([e.catch(()=>n),new Promise(e=>setTimeout(()=>e(n),t))]),_h=0;function vh(e,t){let n=document.querySelector(`.loader, .hackloader`);if(!n)return;let r=document.getElementById(`loadTerm`);r||(r=document.createElement(`div`),r.id=`loadTerm`,r.className=`loadterm`,n.append(r));let i=t?Array.from(r.children).find(e=>e.dataset.key===t):null;if(i){i.firstChild.textContent=e;return}clearInterval(_h),r.querySelectorAll(`.typing`).forEach(e=>{e.classList.remove(`typing`),e.firstChild.textContent=e.dataset.full}),r.querySelector(`.cur`)?.remove();let a=document.createElement(`div`);for(a.className=`tl`,t&&(a.dataset.key=t),a.append(document.createTextNode(``),Object.assign(document.createElement(`i`),{className:`cur`})),r.append(a);r.children.length>6;)r.firstElementChild.remove();if(!e.startsWith(`$`)){a.firstChild.textContent=e;return}a.dataset.full=e,a.classList.add(`typing`);let o=0;_h=window.setInterval(()=>{o+=1,a.firstChild.textContent=e.slice(0,o),o>=e.length&&(clearInterval(_h),a.classList.remove(`typing`))},28)}var yh=null,bh=(e,t)=>`[${`#`.repeat(Math.round(e/t*12)).padEnd(12,`.`)}]`;async function xh(e,t){let n=0;t?.(`[*] ${e.length} wallet${e.length===1?``:`s`} to read`);let r=ef(e.map(e=>e.address));return r.catch(()=>{}),__(e,6,async(i,a)=>{let o=await gh(dh(i.address,r.then(e=>e[a])),45e3,null);return n++,t?.(`[+] read ${n}/${e.length} ${bh(n,e.length)}`,`read`),o})}var Sh=async(e,t)=>wh(e,await xh(e,t),t),Ch=async e=>{let t=e.map(e=>e.address);return await gh(Uf(t),2e4,null)??await Rf(t)};async function wh(e,t,n,r){let i=t.filter(e=>e===null).length,a=e.map((e,n)=>({w:e,trades:t[n]??[]})).filter(e=>e.trades.length);n?.(`[*] checking what's still held`);let o=r??(a.length?await Ch(e):null),s=await Promise.all(a.map(async e=>{let t=o?.find(t=>t.address===e.w.address);return t?Kf(t):[]})),c=[...new Set(s.flatMap((e,t)=>e.filter(e=>a[t].trades.some(t=>t.mint===e.mint)).map(e=>e.mint)))];n?.(`[*] pulling prices + SOL history`);let l=a.flatMap(e=>e.trades.map(e=>e.at)),[u,d,f]=await Promise.all([gh(cm(),15e3,null),G&&c.length?gh(dm(c),15e3,new Map):Promise.resolve(new Map),gh(pa(l),12e3,new Map)]),p=l.length>0&&f.size<l.length/2;return n?.(`[ok] P&L ready`),u&&hv(u),{rows:a.map(({w:e,trades:t},n)=>{let r=new Map;for(let e of t)r.set(e.mint,[...r.get(e.mint)??[],e]);let i=[...r].map(([e,t])=>{let r=s[n].find(t=>t.mint===e),i=d.get(e)??(r&&r.usd!==null&&r.amount>0?r.usd/r.amount:null);return mh(e,t,r?.amount??0,i,f,u)});return i.sort((e,t)=>Math.abs(t.pnlUsd)-Math.abs(e.pnlUsd)),{wallet:e,trades:t,coins:i,total:hh(i),held:s[n]}}),unread:i,oldPrices:p,solAt:f,solNow:u}}var Th=`pct`,Eh=[`pct`,`sol`,`usd`],Dh=(e,t)=>`${e>0?`+`:e<0?`−`:``}${t}`,Oh=e=>{let t=Math.abs(e);return`${e>0?`▲`:e<0?`▼`:``} ${t>=100?Math.round(t).toLocaleString(`en-US`):t.toFixed(1)}%`.trim()},kh=e=>Dh(e,`${U(Math.abs(e)*H)} SOL`),Ah=e=>Dh(e,fv(Math.abs(e)));function jh(e,t){if(e.pct===null)return{text:`no buy price`,dir:``};let n=t===`pct`?e.pct:t===`sol`?e.pnlSol:e.pnlUsd,r=Math.abs(e.pct)<.05?``:n>0?`up`:n<0?`down`:``;return{text:t===`pct`?Oh(e.pct):t===`sol`?kh(e.pnlSol):Ah(e.pnlUsd),dir:r}}function Mh(e,t=Eh){let n=t.includes(Th)?Th:t[0];document.querySelectorAll(`[data-pnl]`).forEach(t=>{let r=e.get(t.dataset.pnl);if(!r)return;let{text:i,dir:a}=jh(r,n);t.textContent=i,t.classList.toggle(`up`,a===`up`),t.classList.toggle(`down`,a===`down`),t.classList.toggle(`none`,r.pct===null),t.closest(`li`)?.classList.toggle(`pnlup`,a===`up`),t.closest(`li`)?.classList.toggle(`pnldown`,a===`down`)}),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.mode===n))}var Nh=e=>e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`;async function Ph(){K(`pnl`,Ph),Th=`pct`;let e=await Qm();if(!e)return X();let[t,n]=await Promise.all([Promise.all(e.map(e=>uh(e.address))),Rf(e.map(e=>e.address))]),r=t.every(Boolean);Cm(`Reading your trades on the blockchain…`),r&&vh(`[*] using saved trades`);let i=r?await wh(e,t.map(e=>e.trades.map(ch)),vh,n):await Sh(e,vh),a=Symbol(`pnl`);if(Fh=a,yh=i,Ih(i,r,!1),!r)return;let o=n?Ch(e):Promise.resolve(null),s=await xh(e,(e,t)=>{let n=t===`read`&&e.match(/\d+\/\d+/)?.[0],r=document.getElementById(`pnlSync`);n&&r&&Fh===a&&(r.textContent=`SYNCING ${n}`)}),c=await o;if(Fh!==a||!document.getElementById(`pnlTotal`))return;let l=e=>e.map(e=>e?`${e.length}:${e[0]?.sig??``}`:`?`).join(`,`),u=l(s)!==l(t.map(e=>e.trades.map(ch)))||!!n&&!!c&&Gg(c)!==Gg(n),d=document.getElementById(`pnlSync`);if(!u){d&&(d.textContent=`UP TO DATE`);return}let f=await wh(e,s,void 0,c);Fh===a&&document.getElementById(`pnlTotal`)&&(yh=f,Ih(f,!1,!0))}var Fh=null;function Ih({rows:e,unread:t,oldPrices:n},r,i){let a=hh(e.flatMap(e=>e.coins)),o=new Map([[`total`,a]]);for(let t of e)o.set(t.wallet.address,t.total);let s=e.find(e=>e.wallet.index===0),c=e.filter(e=>e.wallet.index!==0),l=e=>{let t=new Set(e.trades.map(e=>e.mint)).size;return`${e.trades.length} trade${e.trades.length===1?``:`s`} · ${t} coin${t===1?``:`s`}`};q(`
    <h1>Wallet P&amp;L <span id="pnlSync" class="live">${r?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${a.pct===null?``:`on ${fv(a.paidUsd)} put in · tap to switch % / $`}</div></div>
    ${s?`<div class="card openwallet pnl" data-address="${s.wallet.address}">
      <div class="label">Main wallet · <span class="pv" data-pnl="${s.wallet.address}"></span> <span class="open">OPEN ›</span></div>
      <div class="address">${s.wallet.address}</div>
      <p class="muted">${l(s)}</p>
    </div>`:``}
    ${c.length?`<h2>Side wallets (${c.length})</h2><ul class="list pnl">${c.map(e=>`<li class="openwallet" data-address="${e.wallet.address}"><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}${ym(e.wallet.address)}<br><small>${l(e)}</small></code><b class="pv big" data-pnl="${e.wallet.address}"></b></li>`).join(``)}</ul>`:``}
    ${e.length?`<p class="muted">Only wallets that have bought or sold are listed. Tap a wallet to see its trades.</p>`:`<p class="muted">None of your wallets has bought or sold a coin yet.</p>`}
    ${e.length?`<button id="finished" class="primary">Finished trades · share cards</button><button id="allTx" class="primary">Show all transactions</button>`:``}
    ${t?`<p class="warning">${t} wallet${t===1?`'s`:`s'`} history couldn't be read right now. Try again in a minute.</p>`:``}
    ${n?`<p class="muted">SOL's past prices didn't load, so dollars use today's SOL price for now.</p>`:``}
    <button id="home">Back to my wallets</button>`,i);let u=[`pct`,`usd`];Mh(o,u),Y(`home`,X),e.length&&(Y(`allTx`,()=>Wh().catch($)),Y(`finished`,()=>Qh().catch($))),Y(`pnlTotal`,()=>{a.pct!==null&&(F(),Th=Th===`usd`?`pct`:`usd`,Mh(o,u))}),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.find(e=>e.wallet.address===t.dataset.address);F(),Gh(n.wallet).catch($)}))}var Lh=e=>e?new Date(e*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}):``,Rh=`coinNames`;async function zh(e,t){let n=new Map;for(let e of t)(e.name||e.symbol)&&n.set(e.mint,{label:kg(e),short:e.symbol||e.name||`?`,logo:e.logo});let r={};try{r=JSON.parse(await P.get(Rh)||`{}`)}catch{r={}}for(let t of e)!n.has(t)&&r[t]&&n.set(t,r[t]);let i=[...new Set(e)].filter(e=>!n.has(e)),a=!1;for(let[e,t]of n)(!r[e]||r[e].label!==t.label||r[e].logo!==t.logo)&&(r[e]=t,a=!0);if(i.length){let e=await gh(rf(i),1e4,new Map);for(let[t,i]of e){let e={label:i.name?`${i.name}${i.symbol?` (${i.symbol})`:``}`:i.symbol??ym(t),short:i.symbol||i.name||`?`,logo:i.logo};n.set(t,e),r[t]=e}e.size&&(a=!0)}return a&&P.set(Rh,JSON.stringify(r)).catch(()=>{}),e=>n.get(e)??{label:ym(e),short:`?`}}function Bh(e,t,n,r){let i=new Map(e.coins.map(e=>[e.mint,e]));for(let a of e.trades){let e=i.get(a.mint);if(a.side!==-1)continue;let o=fh(a,t,n),s=ph(a,t,n),c=e.avgUsd*a.coins,l=e.bought>0&&c>=.01&&!jg.has(a.mint);r.set(a.sig,{pct:l?(o-c)/c*100:null,pnlUsd:o-c,pnlSol:s-e.avgSol*a.coins})}}function Vh(e,t,n,r,i){return`<ul class="list trades pnl">${e.map(e=>{let a=t(e.mint),o={sol:`${U(ph(e,n,r)*H)} SOL`,usd:fv(fh(e,n,r))};return`<li data-sig="${e.sig}" class="${e.side===1?`buy`:`sell`}"><span class="tag">${e.side===1?`BUY`:`SELL`}</span><div class="grow"><b>${Q(a.label)}</b><small>${i?`${i(e)} · `:``}${Lh(e.at)} · ${Dg(e.coins)} coins</small></div><div class="right">${e.side===1?`<span class="pv spent" data-sol="${o.sol}" data-usd="${o.usd}">${o.sol}</span><small>paid</small>`:`<span class="pv" data-pnl="${e.sig}"></span><small class="got" data-sol="${o.sol}" data-usd="${o.usd}">got ${o.sol}</small>`}</div></li>`}).join(``)}</ul>`}function Hh(){let e=Th===`usd`;document.querySelectorAll(`.trades .spent`).forEach(t=>t.textContent=e?t.dataset.usd:t.dataset.sol),document.querySelectorAll(`.trades .got`).forEach(t=>t.textContent=`got ${e?t.dataset.usd:t.dataset.sol}`)}function Uh(e,t){let n=()=>{F(),Th=Eh[(Eh.indexOf(Th)+1)%Eh.length],e()};document.querySelectorAll(`.pnltabs button`).forEach(t=>t.addEventListener(`click`,()=>{F(),Th=t.dataset.mode,e()})),Y(`pnlTotal`,n),document.querySelectorAll(`.pnl .right`).forEach(e=>e.addEventListener(`click`,e=>{e.target.closest(`.share`)||(e.stopPropagation(),n())})),document.querySelectorAll(`.trades li[data-sig]`).forEach(e=>e.addEventListener(`click`,()=>{t&&e.classList.contains(`sell`)?(F(),t(e.dataset.sig)):Qt(Kd(e.dataset.sig))}))}async function Wh(){K(`pnlall`,Wh),Th=`pct`;let e=yh;if(!e){let t=await Qm();if(!t)return X();Cm(`Gathering every wallet's trades…`),e=yh=await Sh(t,vh)}let{rows:t,solAt:n,solNow:r}=e,i=t.flatMap(e=>e.trades.map(t=>({t,w:e.wallet}))).sort((e,t)=>t.t.at-e.t.at),a=await zh(i.map(e=>e.t.mint),t.flatMap(e=>e.held)),o=hh(t.flatMap(e=>e.coins)),s=new Map([[`total`,o]]);for(let e of t)Bh(e,n,r,s);let c=new Map(i.map(e=>[e.t.sig,e.w])),l=e=>{let t=c.get(e.sig);return t.index===0?`Main`:t.name?`${Q(t.name)} #${t.index}`:`#${t.index}`},u=i.filter(e=>e.t.side===1).length,d=i.length-u;q(`
    <h1>All transactions</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u} buy${u===1?``:`s`} · ${d} sell${d===1?``:`s`} · ${t.length} wallet${t.length===1?``:`s`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>History (${i.length} trade${i.length===1?``:`s`})</h2>
    ${Vh(i.map(e=>e.t),a,n,r,l)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a sell for its share card, a buy to open it on Solscan.</p>
    <button id="back">Back to Wallet P&amp;L</button>`);let f=()=>{Mh(s),Hh()};f(),Uh(f,e=>{let i=c.get(e);Zh(t.find(e=>e.wallet.address===i.address),e,s,a,n,r,()=>Wh())}),Y(`back`,()=>Ph().catch($))}async function Gh(e){K(`pnl:${e.address}`,()=>Gh(e)),Th=`pct`;let t=yh?.rows.some(t=>t.wallet.address===e.address)?yh:null;t||=(Cm(`Pulling this wallet's trades from the blockchain…`),await Sh([e],vh));let{solAt:n,solNow:r}=t,i=t.rows.find(t=>t.wallet.address===e.address);if(!i){q(`<h1>${Nh(e)}</h1><p class="muted">No trades found for this wallet.</p><button id="back">Back to Wallet P&amp;L</button>`),Y(`back`,()=>Ph().catch($));return}let a=await zh(i.coins.map(e=>e.mint),t.rows.flatMap(e=>e.held)),o=new Map(i.coins.map(e=>[e.mint,e])),s=new Map([[`total`,i.total]]);for(let e of i.coins)s.set(e.mint,e);Bh(i,n,r,s);let c=e=>[e.bought?`bought ${Dg(e.bought)}`:``,e.sold?`sold ${Dg(e.sold)}`:``,e.held?`holding ${Dg(e.held)}`:``].filter(Boolean).join(` · `),l=(e,t)=>{let n=e=>`${U(e*H)} SOL`,r=e.bought?`${n(e.avgSol*e.bought)} › ${Dg(e.bought)} ${t}`:`${Dg(e.sold)} ${t}`,i=[e.sold?`${n(e.backSol)} sold`:``,e.nowSol>0?`${n(e.nowSol)} held`:``].filter(Boolean).join(` + `);return i?`${r} › ${i}`:r},u=i.total;q(`
    <h1>${Nh(e)}</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss · all trades</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u.pct===null?`No buy prices found yet`:`on ${fv(u.paidUsd)} put in`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>Coins (${i.coins.length})</h2>
    <ul class="list coins pnl">${i.coins.map(e=>{let t=a(e.mint);return`<li data-mint="${e.mint}">${Pn(t.short,t.logo)}<div class="grow"><b>${Q(t.label)}</b><small class="cl" data-line="${Q(c(e))}" data-flow="${Q(l(e,t.short))}">${c(e)}</small></div>
          <div class="right"><span class="pv" data-pnl="${e.mint}"></span><small class="tv" data-paid="${e.mint}"></small>${e.pct===null?``:`<small class="share">SHARE ›</small>`}</div></li>`}).join(``)}</ul>
    <h2>History (${i.trades.length} trade${i.trades.length===1?``:`s`})</h2>
    ${Vh(i.trades,a,n,r)}
    <p class="muted">Tap a coin for its share card, a figure to switch between %, SOL and $. In the history, tap a sell for its share card, a buy to open it on Solscan. Dollars use SOL's price when each trade happened.</p>
    <button id="solscan">View wallet on Solscan</button>
    <button id="back">Back to Wallet P&amp;L</button>`),Fn();let d=()=>{Mh(s);let e=Th===`usd`,t=Th===`sol`;document.querySelectorAll(`.coins .cl`).forEach(e=>e.textContent=t?e.dataset.flow:e.dataset.line),Hh(),document.querySelectorAll(`.coins [data-paid]`).forEach(n=>{let r=o.get(n.dataset.paid);n.textContent=r.pct===null?r.bought?`all sent away`:`no buy found`:t?``:`paid ${e?fv(r.paidUsd):`${U(r.paidSol*H)} SOL`}`})};d(),Uh(d,t=>Zh(i,t,s,a,n,r,()=>Gh(e))),document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=o.get(t.dataset.mint),r=Xh([{...i,coins:[n]}],a)[0];r&&(F(),$h(r,()=>Gh(e)).catch($))})),Y(`solscan`,()=>Qt(Gd(e.address))),Y(`back`,()=>Ph().catch($))}var Kh=`usd`,qh=`cardShowMe`,Jh=()=>{try{return localStorage.getItem(qh)!==`0`}catch{return!0}},Yh=()=>{let e=N?.initDataUnsafe?.user;return e?.first_name?{name:e.first_name,photo:e.photo_url}:void 0};function Xh(e,t){let n=new Map;for(let t of e)for(let e of t.coins){if(e.pct===null)continue;let t=n.get(e.mint)??{list:[],trades:[]};t.list.push(e),t.trades.push(...e.trades),n.set(e.mint,t)}let r=Math.floor(Date.now()/1e3);return[...n].map(([e,{list:n,trades:i}])=>{let a=e=>n.reduce((t,n)=>t+e(n),0),o=a(e=>e.paidUsd),s=t(e),c=n.every(e=>e.held<=0),l=i.filter(e=>e.side===1&&e.at),u=i.filter(e=>e.at).map(e=>e.at);return{key:e,symbol:s.short,name:s.label.replace(/\s*\([^)]*\)$/,``)||s.label,logo:s.logo,pct:o>=.01?a(e=>e.pnlUsd)/o*100:0,usd:{paid:o,got:a(e=>e.backUsd+e.nowUsd),pnl:a(e=>e.pnlUsd)},sol:{paid:a(e=>e.paidSol),got:a(e=>e.backSol+e.nowSol),pnl:a(e=>e.pnlSol)},firstAt:l.length?Math.min(...l.map(e=>e.at)):Math.min(...u,r),lastAt:c&&Math.max(...u,0)||r,wallets:n.length,finished:c}})}function Zh(e,t,n,r,i,a,o){let s=e.trades.find(e=>e.sig===t),c=n.get(t),l=e.coins.find(e=>e.mint===s.mint);if(!c||c.pct===null||!l)return Qt(Kd(t));let u=r(s.mint),d=e.trades.filter(e=>e.mint===s.mint&&e.side===1&&e.at&&e.at<=s.at).map(e=>e.at),f=fh(s,i,a),p=ph(s,i,a);$h({key:t,symbol:u.short,name:u.label.replace(/\s*\([^)]*\)$/,``)||u.label,logo:u.logo,pct:c.pct,usd:{paid:l.avgUsd*s.coins,got:f,pnl:c.pnlUsd},sol:{paid:l.avgSol*s.coins,got:p,pnl:c.pnlSol},firstAt:d.length?Math.min(...d):s.at,lastAt:s.at,wallets:1,finished:!0,sig:t},o).catch($)}async function Qh(){K(`finished`,Qh),Th=`pct`;let e=yh;if(!e){let t=await Qm();if(!t)return X();Cm(`Gathering every wallet's trades…`),e=yh=await Sh(t,vh)}let{rows:t}=e,n=Xh(t,await zh(t.flatMap(e=>e.coins.map(e=>e.mint)),t.flatMap(e=>e.held))).sort((e,t)=>t.lastAt-e.lastAt),r=n.filter(e=>e.finished),i=n.filter(e=>!e.finished),a=new Map(n.map(e=>[e.key,{pct:e.pct,pnlUsd:e.usd.pnl,pnlSol:e.sol.pnl}])),o=r.reduce((e,t)=>e+t.usd.paid,0),s=r.reduce((e,t)=>e+t.usd.pnl,0);a.set(`total`,{pct:o>=.01?s/o*100:null,pnlUsd:s,pnlSol:r.reduce((e,t)=>e+t.sol.pnl,0)});let c=e=>`<li data-mint="${e.key}">${Pn(e.symbol,e.logo)}<div class="grow"><b>${Q(e.name)}</b><small class="paid" data-usd="${fv(e.usd.paid)}" data-sol="${U(e.sol.paid*H)} SOL">put in ${fv(e.usd.paid)}</small><small>${e.wallets} wallet${e.wallets===1?``:`s`}${e.finished?` · ${Lh(e.lastAt)}`:``}</small></div><div class="right"><span class="pv" data-pnl="${e.key}"></span><small class="share">SHARE ›</small></div></li>`;q(`
    <h1>Finished trades</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss on coins sold out</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${r.length?`${r.length} coin${r.length===1?``:`s`} · on ${fv(o)} put in`:`Nothing sold out yet`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    ${r.length?`<h2>Sold out (${r.length})</h2><ul class="list coins pnl">${r.map(c).join(``)}</ul>`:`<p class="muted">No coin is fully sold yet.</p>`}
    ${i.length?`<h2>Still holding (${i.length})</h2><ul class="list coins pnl">${i.map(c).join(``)}</ul>`:``}
    <p class="muted">Each coin is added up across all your wallets. Tap one for its share card. A single sell has its own card too: tap it in a wallet's history.</p>
    <button id="back">Back to Wallet P&amp;L</button>`),Fn();let l=()=>{Mh(a);let e=Th===`sol`;document.querySelectorAll(`.coins .paid`).forEach(t=>t.textContent=`put in ${e?t.dataset.sol:t.dataset.usd}`)};l(),Uh(l),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{F(),$h(n.find(t=>t.key===e.dataset.mint),()=>Qh()).catch($)})),Y(`back`,()=>Ph().catch($))}async function $h(e,t){K(`card:${e.key}`,()=>$h(e,t));let n=Yh();q(`
    <h1>Share card</h1>
    <div class="sharecard" id="cardBox"><img id="cardImg" alt="Share card for ${Q(e.symbol)}"></div>
    <div class="pnltabs"><button data-unit="usd">$</button><button data-unit="sol">SOL</button></div>
    ${n?`<label class="cardme"><input type="checkbox" id="cardMe"> Show my Telegram name${n.photo?` and photo`:``}</label>`:``}
    <button id="share" class="primary">Share</button>
    <p class="muted" id="shareNote">No wallet addresses or transaction links are on the card.</p>
    ${e.sig?`<button id="solscan">View this sell on Solscan</button>`:``}
    <button id="back">Back</button>`);let r=document.createElement(`canvas`),i=J(`cardImg`),a=null,o=Promise.resolve(),s=()=>o=o.then(async()=>{let t=e[Kh],o={symbol:e.symbol,name:e.name,logo:e.logo,pct:e.pct,paid:t.paid,got:t.got,pnl:t.pnl,unit:Kh,firstAt:e.firstAt,lastAt:e.lastAt,wallets:e.wallets,finished:e.finished,user:n&&Jh()?n:void 0};if(await aa(r,o,`oni`,Ln),a=null,document.body.contains(i)){try{i.src=r.toDataURL(`image/png`)}catch{await aa(r,{...o,logo:void 0,user:o.user&&{name:o.user.name}},`oni`,Ln),i.src=r.toDataURL(`image/png`)}document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.unit===Kh))}});s().catch($),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.addEventListener(`click`,()=>{F(),Kh=e.dataset.unit,s().catch($)}));let c=document.getElementById(`cardMe`);c&&(c.checked=Jh(),c.addEventListener(`change`,()=>{try{localStorage.setItem(qh,c.checked?`1`:`0`)}catch{}s().catch($)})),Y(`share`,async()=>{F(),await o,a??=await oa(r,`${e.symbol.replace(/[^\w-]/g,``)||`trade`}-pnl.png`);let t=J(`shareNote`);if(a&&navigator.canShare?.({files:[a]}))try{await navigator.share({files:[a]});return}catch(e){if(e instanceof Error&&e.name===`AbortError`)return}t.textContent=`Press and hold the card, then tap Save to Photos or Share.`,t.classList.add(`warning`),J(`cardBox`).classList.add(`hint`)}),e.sig&&Y(`solscan`,()=>Qt(Kd(e.sig))),Y(`back`,()=>Promise.resolve(t()).catch($))}var eg=e=>(e/H).toFixed(4);function tg(e){let t=e.index===0?`main wallet`:e.name?`${e.name} (#${e.index})`:`side wallet #${e.index}`;zm(`Export ${Q(t)}`,n=>{let r=qm(n,e.index+1)[e.index],i=kp(r);q(`
      <h1>Private key: ${Q(t)}</h1>
      <p class="warning">Anyone with this key controls this wallet. Only paste it into your own wallet app (Phantom: Add / Connect Wallet → Import Private Key).</p>
      <div class="card"><div class="address" id="key"></div></div>
      <button id="copyKey" class="primary">Copy key</button>
      <button id="done">Done</button>`),J(`key`).textContent=i,Y(`copyKey`,()=>wm(i,J(`copyKey`))),Y(`done`,X)})}var ng=2e6,rg=25e5,ig=1e6;function ag(e,t,n){return e.map((e,r)=>{let i=t[r],a=i-ng-rg,o=Math.floor(a*n/100);return a<ig?{wallet:e,balance:i,action:i>5e3?`return`:`skip`,lamports:i-Nu}:o<ig?{wallet:e,balance:i,action:`skip`,lamports:0}:{wallet:e,balance:i,action:`buy`,lamports:o}}).filter(e=>e.balance>0)}async function og(e,t){if(K(`buy:${e}`,()=>og(e,t)),!G)return q(`
      <h1>Open this from the bot</h1>
      <p>To buy, send <b>buy &lt;token address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);let n=await Qm();if(!n)return X();let[r,...i]=n;Cm(`Checking your wallet balances…`);let[[,...a],o]=await Promise.all([th(n.map(e=>e.address)),nd(e).then(t=>t??us(G,e))]),s=ag(i,a,t),c=s.filter(e=>e.action===`buy`),l=c.reduce((e,t)=>e+t.lamports,0),u=e=>e.action===`buy`?`buys with <b>${U(e.lamports)} SOL</b>`:e.action===`return`?`too little to buy, sends ${U(e.lamports)} SOL back to main`:t<100?`${t}% is too little to buy, left as is`:`too little to do anything, left as is`;q(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>${t===100?`Spending all SOL in each funded side wallet`:`Spending ${t}% of each funded side wallet`}</h2>
    ${s.length?`<ul class="list">${s.map(e=>`<li><span>#${e.wallet.index}</span><code>${U(e.balance)} SOL<br><small>${u(e)}</small></code></li>`).join(``)}</ul>`:`<p class="warning">None of your side wallets has SOL. Send SOL to the side wallets you want to buy with, then try again.</p>`}
    ${c.length?`<p><b>Total: ${U(l)} SOL across ${c.length} wallet${c.length===1?``:`s`}.</b></p>
           <p class="muted">Each wallet keeps ${U(ng)} SOL so it can pay the fee to sell later. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again). Prices can move while the buys go through one by one.</p>
           <button id="go" class="primary">Enter PIN and buy</button>`:``}
    <button id="cancel">Cancel</button>`),J(`mint`).textContent=e,Y(`cancel`,X),c.length&&Y(`go`,()=>zm(`Enter your PIN to buy`,t=>Eg(t,e,r,s)))}var sg=45e5,cg=1e7,lg=10;function ug(e,t,n,r){let i=n.map((e,t)=>t);if(r&&n.length===1){let e=t.findIndex(e=>e>=n[0]+sg);i=[e>=0?e:0]}return i.map((r,i)=>({wallet:e[r],balance:t[r],share:n[i],send:Math.max(0,n[i]+sg-t[r])}))}function dg(e){let t=e.filter(e=>e.send>0);return t.reduce((e,t)=>e+t.send,0)+Math.ceil(t.length/lg)*Nu}function fg(e,t){return Array.from({length:t},()=>Math.floor(e/t))}function pg(e,t,n,r,i=!0){let a=e=>({rows:[],mainCost:0,problem:e}),o=e=>n-e>=890880||n===e;if(!(r.total>0))return a(`The amount to spend is missing.`);let s;if(r.split){if(r.split.length>e.length)return a(`You asked for ${r.split.length} wallets but have ${e.length} side wallets.`);let n=r.split.reduce((e,t)=>e+t,0);s=ug(e,t,r.split.map(e=>Math.floor(r.total*e/n)),!1)}else if(r.count){if(r.count>e.length)return a(`You asked for ${r.count} wallets but have ${e.length} side wallets.`);s=ug(e,t,fg(r.total,r.count),!0)}else{let n=Math.max(1,Math.min(e.length,Math.floor(r.total/cg)));for(s=ug(e,t,fg(r.total,n),!1);n>1&&!o(dg(s));)n--,s=ug(e,t,fg(r.total,n),!1)}let c=dg(s);if(s.some(e=>e.share<ig))return{rows:s,mainCost:c,problem:`That's less than ${U(ig)} SOL per wallet. Use a bigger amount or fewer wallets.`};if(!o(c)){if(!i)return{rows:s,mainCost:c,problem:`too much`};let o=r.split?1:r.count??Math.max(1,Math.min(e.length,Math.floor(r.total/cg))),l=[];for(let i=o;i>=1;i--){let a=r.split?r:{...r,count:i},o=0,s=r.total;for(;s-o>1e3;){let r=Math.floor((o+s)/2);pg(e,t,n,{...a,total:r},!1).problem===`too much`?s=r:o=r}let c=pg(e,t,n,{...a,total:o},!1);o>0&&!c.problem&&l.push({plan:c,spend:o})}let u=Math.max(0,...l.map(e=>e.spend)),d=l.find(e=>e.spend>=u*.9);if(d){let e=d.plan.rows.length;return{...d.plan,adjusted:`The main wallet only has ${U(n)} SOL, so this spends ${U(d.spend)} SOL${e<s.length?` across ${e} wallet${e===1?``:`s`}`:``} instead of ${U(r.total)} SOL.`}}return a(`The main wallet has ${U(n)} SOL, which isn't enough for even one buy. A side wallet needs about ${U(55e5+Pu)} SOL from main for the smallest buy, fees, and the ${U(Pu)} SOL Solana makes a wallet keep.`)}return{rows:s,mainCost:c,problem:null}}async function mg(e,t){if(K(`fundedBuy:${e}`,()=>mg(e,t)),!G)return og(e,100);let n=await Qm();if(!n)return X();let[r,...i]=n;Cm(`Checking your wallet balances…`);let[a,o]=await Promise.all([th(n.map(e=>e.address)),nd(e).then(t=>t??us(G,e))]),[s,...c]=a,l=pg(i,c,s,t),u=l.rows.length||t.split?.length||t.count||0,d=l.rows.length?l.rows.reduce((e,t)=>e+t.share,0):t.total,f=t.split?`split ${t.split.join(`/`)} across ${u} side wallets`:u?`across ${u} side wallet${u===1?``:`s`}`:`split evenly across as many side wallets as possible`;q(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>Spending ${U(d)} SOL, ${f}</h2>
    ${l.adjusted&&!l.problem?`<p class="note">${Q(l.adjusted)}</p>`:``}
    ${l.rows.length?`<ul class="list">${l.rows.map(e=>`<li><span>#${e.wallet.index}</span><code>buys with <b>${U(e.share)} SOL</b><br><small>${e.send>0?`gets ${U(e.send)} SOL from main first`:`already has ${U(e.balance)} SOL, nothing sent`}</small></code></li>`).join(``)}</ul>`:``}
    ${l.problem?`<p class="warning">${Q(l.problem)}</p>`:`<p><b>From main: ${U(l.mainCost)} SOL</b> (main has ${U(s)} SOL).</p>
           <p class="muted">Each wallet gets ${U(sg)} SOL on top of its buy: ${U(ng)} SOL stays in it so it can pay the fee to sell later, and the rest covers the buy's fees and token deposit. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again).</p>
           <button id="go" class="primary">${l.adjusted?`Buy with ${U(d)} SOL instead`:`Enter PIN, fund and buy`}</button>`}
    <button id="cancel">Cancel</button>`),J(`mint`).textContent=e,Y(`cancel`,X),!l.problem&&Y(`go`,()=>hg(e,r,l))}function hg(e,t,n){let r=n.rows.map(e=>({wallet:e.wallet,balance:e.balance,action:`buy`,lamports:e.share})),i=n.rows.filter(e=>e.send>0),a=async(e,t)=>{if(!i.length)return t(`The side wallets already had enough SOL.`);let n=[];for(let e=0;e<i.length;e+=lg)n.push(i.slice(e,e+lg));let r=await Id(),a=await Promise.allSettled(n.map(async t=>{let n=await Bd(Nd(e[0],t.map(e=>({to:e.wallet.address,lamports:e.send})),r));return{signature:n,outcome:await Ud(n)}})),o=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,s=a.find(e=>e.status===`rejected`||e.value.outcome!==`confirmed`);if(s)throw s.status===`rejected`?s.reason:(t(`<span class="error">✗ Sending SOL from main ${s.value.outcome===`failed`?`failed`:`is taking too long`}</span> · ${o(s.value.signature)}`),new Tg);let c=a.map(e=>o(e.value.signature));t(`✓ Sent SOL from main to ${i.length} of ${i.length} side wallets · ${c.join(` `)}`)};zm(`Enter your PIN to fund and buy`,n=>Eg(n,e,t,r,a))}var gg=1e6;async function _g(e,t,n){K(`split`,()=>_g(e,t,n));let r=await Qm();if(!r)return X();let[i,...a]=r,o=e=>{q(`
      <h1>Split SOL</h1>
      <p class="warning">${e}</p>
      <button id="home" class="primary">Back to my wallets</button>`),Y(`home`,X)};if(!a.length)return o(`You don't have any side wallets yet. Add some on the wallets screen first.`);let s=n?.length??t??a.length;if(s>a.length)return o(`You asked for ${s} wallets, but you have ${a.length} side wallet${a.length===1?``:`s`}. Add more on the wallets screen, or pick fewer.`);let c=a.slice(0,s);Cm(`Checking your wallets…`);let l=await cd([i,...c].map(e=>e.address)),u=l[0],d=Math.ceil(s/lg)*Nu,f=e===`all`?u-d-gg:e;if(f<=0)return o(`Main has ${U(u)} SOL, which isn't enough to split.`);let p=u-f-d;if(p<0||p>0&&p<890880)return o(`Main has ${U(u)} SOL. Splitting ${U(f)} SOL plus fees would leave ${p<0?`less than nothing`:`${U(p)} SOL, below the ${U(Pu)} SOL Solana makes a wallet keep`}. The most you can split is ${U(Math.max(0,u-d-Pu))} SOL, or use "split all sol".`);let m=n??c.map(()=>1),h=m.reduce((e,t)=>e+t,0),g=c.map((e,t)=>({wallet:e,balance:l[t+1],send:Math.floor(f*m[t]/h)}));g[0].send+=f-g.reduce((e,t)=>e+t.send,0);let _=g.filter(e=>e.send<=0||e.balance+e.send<890880);if(_.length)return o(`${_.map(e=>`#${e.wallet.index}`).join(`, `)} would get too little: an empty wallet has to receive at least ${U(Pu)} SOL. Split more SOL, or across fewer wallets.`);q(`
    <h1>Split ${U(f)} SOL</h1>
    <p>From main (${U(u)} SOL) to ${s} wallet${s===1?``:`s`}${n?`, split ${n.join(`/`)}`:`, evenly`}.</p>
    <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}gets <b>${U(e.send)} SOL</b><br><small>has ${U(e.balance)} now</small></code></li>`).join(``)}</ul>
    <p class="muted">Main keeps ${U(p)} SOL. Network fees: ${d<1e5?`less than 0.0001`:U(d)} SOL.</p>
    <button id="go" class="primary">Enter PIN and split</button>
    <button id="cancel">Cancel</button>`),Y(`cancel`,X),Y(`go`,()=>zm(`Enter your PIN to split`,async e=>{let[t]=qm(e,1);q(`
        <h1>Splitting…</h1>
    ${Rt()}
        <p class="muted">Keep this screen open until it finishes.</p>
        <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),pm();let n=0,r=[];for(let e=0;e<g.length;e+=lg)r.push(g.slice(e,e+lg));g.forEach(e=>J(`status-${e.wallet.index}`).textContent=`sending…`);let a=await Id().catch(()=>null);await Promise.all(r.map(async e=>{let r;try{let i=await Bd(Nd(t,e.map(e=>({to:e.wallet.address,lamports:e.send})),a??await Id())),o=await Ud(i),s=`<a href="#" class="tx" data-sig="${i}">view</a>`;o===`confirmed`?(n+=e.length,r=`✓ sent {amount} SOL · ${s}`):r=`<span class="error">✗ ${o===`failed`?`failed`:`taking long`}</span> · ${s}`}catch(e){r=`<span class="error">✗ ${Q(Z(e))}</span>`}e.forEach(e=>J(`status-${e.wallet.index}`).innerHTML=r.replace(`{amount}`,U(e.send))),X_()})),zf([i.address,...g.map(e=>e.wallet.address)]).catch(()=>{}),t.secret.fill(0),Xt(n?`success`:`error`),n&&await An(`SPLIT`),J(`after`).innerHTML=`<p><b>Done: ${n} of ${g.length} wallets got their SOL.</b></p>
        <button id="home" class="primary">Back to my wallets</button>`,Y(`home`,X)}))}async function vg(e,t,n=!1){if(K(`buyAmount:${e}`,()=>vg(e,t,n)),!G)return og(e,100);let r=await Qm();if(!r)return X();let[i,...a]=r;if(!a.length)return q(`
      <h1>No side wallets yet</h1>
      <p>Buys run from side wallets. Add some with "Change number of side wallets" on the home screen.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);Cm(`Checking your wallet balances…`);let[o,s]=await Promise.all([th(r.map(e=>e.address)),od(e)]),c=s.name??await us(G,e).catch(()=>null)??ym(e),[l,...u]=o,d=1e5,f=e=>Math.floor(e/d)*d,p=e=>u[e]-ng-rg,m=a.map((e,t)=>t).filter(e=>p(e)>=ig).sort((e,t)=>p(t)-p(e)),h=e=>m.slice(0,e).reduce((e,t)=>e+p(t),0),g=(e,t)=>m.slice(0,t).map(n=>({wallet:a[n],balance:u[n],action:`buy`,lamports:Math.min(p(n),Math.floor(e*p(n)/h(t)))})),_=e=>Math.ceil(ig*h(e)/p(m[e-1])/d)*d,v=n?m.map((e,t)=>f(h(t+1))):a.map((e,t)=>{let n=t+1,r=e=>pg(a,u,l,{total:e,count:n,split:null},!1).problem!==`too much`,i=0,o=l;for(;o-i>d;){let e=Math.floor((i+o)/2);r(e)?i=e:o=e}let s=f(i);return s>=ig*n?s:0}),y=v.length,b=Math.max(0,...v),x=n?h(m.length):l,S=e=>n?_(e):ig*e,C=e=>{if(n){if(!e)return y;for(let t=y;t>1;t--)if(e<=v[t-1]&&e>=_(t))return t;return 1}for(let t=Math.min(a.length,Math.max(1,Math.floor(e/cg)));t>1;t--)if(e<=v[t-1])return t;return 1},w=t&&t<=y?t:null,T=``,E=!n&&m.length>0;q(`
    <div class="coinhead">${Pn(c,s.logo)}<div><b>${Q(c)}</b><small>${ym(e)}${e.endsWith(`pump`)?` · pump.fun`:``}</small></div></div>
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
    ${Mm(`dot`)}
    <button id="go" class="primary go"></button>
    <button id="cancel">Cancel</button>`),Fn(),Nn(J(`avail`),x,eg,{ms:1100,final:eg(x)}),Y(`cancel`,X),E&&Y(`useSide`,()=>vg(e,null,!0));let D=e=>Math.round((Number(e)||0)*H),O=()=>{let e=D(T);return{total:e,count:Math.max(1,w??C(e)),max:w?v[w-1]:b}},k=e=>`${e} wallet${e===1?``:`s`}`,ee=(e=!1)=>{let{total:t,count:r,max:i}=O();J(`amt`).textContent=T||`0`,J(`count`).textContent=String(y?r:0),J(`each`).textContent=n?t?`spread by balance${w?``:` · auto`}`:w?`you picked this, most SOL first`:`auto: every wallet with SOL`:t?`${U(Math.floor(t/r))} SOL each${w?``:` · auto`}`:w?`you picked this`:`auto: as many as the amount allows`,J(`tickMid`).textContent=eg(i/2).replace(/0+$/,``).replace(/\.$/,``),e||(J(`slider`).value=String(i?Math.min(1e3,Math.round(t/i*1e3)):0));let a=t>i,o=t>0&&!a&&t<S(r);J(`amt`).classList.toggle(`over`,a&&i>0),J(`amtNote`).textContent=i?a?`Max with ${k(r)} is ${U(i)} SOL`:o?`At least ${U(S(r))} SOL for ${k(r)}`:t?n?`from ${k(r)} · each keeps ${U(ng)} SOL for selling`:`split over ${k(r)} · each keeps ${U(sg)} SOL for fees`:`Type an amount or drag the slider`:n?`None of your side wallets has enough SOL to buy`:`Main needs at least ${U(55e5+Pu+Nu)} SOL to buy`,E&&(J(`useSide`).hidden=i>0);let s=J(`go`);s.disabled=!t||a||o,s.textContent=t&&!a&&!o?`⚡ Snatch it · ${T} SOL`:`⚡ Snatch it`},te=e=>{T=e>0?eg(e).replace(/0+$/,``).replace(/\.$/,``):``};Nm(e=>{if(e===`back`)T=T.slice(0,-1);else if(e===`dot`)T=T.includes(`.`)?T:(T||`0`)+`.`;else if(/\d/.test(e)){let[,t]=T.split(`.`);if(t!==void 0&&t.length>=4||T.replace(`.`,``).length>=9)return;T=T===`0`?e:T+e}ee()}),J(`slider`).addEventListener(`input`,()=>{let{max:e}=O();te(f(Number(J(`slider`).value)/1e3*e)),ee(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{F(),te(f(O().max*Number(e.dataset.f))),ee()}));let A=e=>{y&&(F(),w=Math.min(y,Math.max(1,O().count+e)),ee())};Y(`minus`,()=>A(-1)),Y(`plus`,()=>A(1)),Y(`go`,()=>{let{total:t,count:r}=O();if(n){let n=g(t,r);return zm(`Enter your PIN to buy`,t=>Eg(t,e,i,n))}let o=pg(a,u,l,{total:t,count:r,split:null},!1);if(o.problem)return J(`amtNote`).textContent=o.problem===`too much`?`Main can't cover that, try a little less`:o.problem,Xt(`error`);hg(e,i,o)}),ee()}var Z=e=>e instanceof Error?e.message:String(e),yg=8e6;async function bg(e,t,n,r){let i;try{i=await cf(e,t,r)}catch(e){throw Error(`Couldn't double-check this trade before signing (${Z(e)}). Nothing was signed; try again in a moment.`)}if(i.failed)return;let a=e=>{throw Error(`Stopped for safety: ${e}. Nothing was signed. Tell Dustin if this keeps happening.`)};i.takenOver&&a(`this trade would hand control of your wallet or its coins to someone else`),i.solOut>n.sol&&a(`this trade would take ${U(i.solOut)} SOL from the wallet, more than the ${U(n.sol)} SOL it should cost at most`);for(let[e,t]of i.coinsOut)e===n.mint&&(n.coins===void 0||t<=n.coins)||a(e===n.mint?`this trade would send more of the coin than you chose to sell`:`this trade would send away a coin you didn't choose to trade`)}async function xg(e,t,n,r){return await bg(e,t.address,n,r),dd(e,t)}var Sg=10,Cg=e=>{let t=sf(e);return t.catch(()=>{}),t};async function wg(e,t,n){let r=await ts(G,e,t,n);if(!r.transaction&&t-2e6>=ig&&(t-=2e6,r=await ts(G,e,t,n)),!r.transaction)throw Error(r.errorMessage??`Jupiter couldn't find a way to buy this token.`);return{order:r,lamports:t}}var Tg=class extends Error{};async function Eg(e,t,n,r,i){let a=r.filter(e=>e.action!==`skip`),o=qm(e,Math.max(...a.map(e=>e.wallet.index))+1);q(`
    <h1>Buying…</h1>
    ${Rt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${i?`<p id="funding">Sending SOL from main to the side wallets…</p>`:``}
    <ul class="list">${a.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),pm();let s=(e,t)=>J(`status-${e}`).innerHTML=t,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;if(i)try{await i(o,e=>J(`funding`).innerHTML=e)}catch(e){return e instanceof Tg||(J(`funding`).innerHTML=`<span class="error">✗ Sending SOL from main failed: ${Q(Z(e))}</span>`),a.forEach(e=>s(e.wallet.index,`not bought`)),o.forEach(e=>e.secret.fill(0)),Xt(`error`),J(`after`).innerHTML=`<p><b>Nothing was bought.</b> Any SOL that did reach a side wallet stays there; "Send all side-wallet SOL to main" brings it back.</p>
        <button id="home" class="primary">Back to my wallets</button>`,X_(),Y(`home`,X)}let l=0,u=null,d=!1;await __(a,Sg,async e=>{let r=o[e.wallet.index];try{if(e.action===`buy`&&d){s(e.wallet.index,`skipped: same problem as above, nothing spent`);return}if(e.action===`buy`){s(e.wallet.index,`buying…`);let n=zg(r.address,t).catch(()=>null),i=Cg(r.address),a=null;if(!u)try{a=await wg(t,e.lamports,r.address)}catch(e){u=Z(e)}let o=await n,d=a?null:await N_(t);if(d){await W_(d,r,e.lamports,t=>s(e.wallet.index,t),c)&&(l++,Vg(t,r.address,o));return}if(!a){s(e.wallet.index,`buying through pump.fun…`);let n=0,a=await Y_(e.wallet.index,s,u,(i,a)=>(n=Math.floor(e.lamports*a),_s(r.address,t,n,i)),r,e=>({sol:Math.ceil(n*(1+e/100))+yg}),i),d=await Ud(a);d===`confirmed`?(l++,Vg(t,r.address,o),s(e.wallet.index,`✓ bought with ${U(n)} SOL via pump.fun · ${c(a,`view`)}`)):s(e.wallet.index,`<span class="error">✗ buy ${d===`failed`?`failed`:`is taking long`}</span> · ${c(a,`check`)}`);return}let{order:f,lamports:p}=a,m=await rs(G,await xg(is(f.transaction),r,{sol:p+yg},i),f.requestId);if(m.status!==`Success`)throw Error(m.error??`The buy didn't go through (code ${m.code}).`);l++,Vg(t,r.address,o),s(e.wallet.index,`✓ bought with ${U(p)} SOL · ${c(m.signature,`view`)}`)}else{s(e.wallet.index,`sending back to main…`);let t=await Bd(Md(r,n.address,e.lamports,await Id())),i=await Ud(t);s(e.wallet.index,i===`confirmed`?`✓ sent ${U(e.lamports)} SOL to main · ${c(t,`view`)}`:`✗ sending back ${i===`failed`?`failed`:`is taking long`} · ${c(t,`check`)}`)}}catch(t){Z(t).includes(`priced in another coin`)&&(d=!0),s(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`)}}),zf([n.address,...a.map(e=>e.wallet.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),Xt(l?`success`:`error`),l&&await An(),J(`after`).innerHTML=`<p><b>Done: ${l} of ${a.filter(e=>e.action===`buy`).length} buys went through.</b></p>
    <button id="home" class="primary">Back to my wallets</button>`,X_(),Y(`home`,X)}var Dg=e=>new Intl.NumberFormat(`en-US`,e>=1e6?{notation:`compact`,maximumFractionDigits:2}:{maximumFractionDigits:e>=1?2:6}).format(e),Og=e=>`$${e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`,kg=e=>e.name?`${e.name}${e.symbol?` (${e.symbol})`:``}`:e.symbol??ym(e.mint),Ag=e=>e.usd===null&&(/https?:|www\.|\.(io|com|xyz|net|org|fun|app|site|gg|co)\b/i.test(`${e.name} ${e.symbol}`)||(e.name??``).length>40),jg=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),Mg=3,Ng=e=>!!e?.chain&&e.chain!==Mg,Pg=e=>!!e&&BigInt(e.raw)>0n&&(e.lamports>0||(e.usd??0)>0)&&!Ng(e),Fg=(e,t)=>e.usd?t?e.lamports+e.usd/t*H:null:e.lamports,Ig=(e,t)=>{let n=Number(t)/Number(BigInt(e.raw)),r=e.lamports*n,i=(e.usd??0)*n;return[r>0?`${U(r)} SOL`:``,i>0?Og(i):``].filter(Boolean).join(` + `)},Lg=e=>!Pg(e)&&(!e||e.chain!==Mg||!e.checked||Date.now()-e.checked>432e5);async function Rg(e,t,n){let r=0,i=0,a=0,o=!1;for(let n of t){let t=await Zd(n.address,e,n.amount);t&&(o=!0,r+=t.lamports,i+=t.usd,a+=t.coins)}if(!o)return null;let s=JSON.parse(await P.get(zp).catch(()=>null)||`{}`);if(Pg(s[e])&&!s[e].chain)return s[e];let c=a>0&&(r>0||i>0)?{lamports:r,...i>0?{usd:i}:{},raw:BigInt(Math.round(a*10**n)).toString(),chain:Mg}:{lamports:0,raw:`0`,checked:Date.now(),chain:Mg};return s[e]=c,await P.set(zp,JSON.stringify(s)).catch(()=>{}),c}async function zg(e,t){let n=await nf([e],t,await Yf(t));return{lamports:n.lamports[0]+n.deposit[0],raw:n.raw[0]}}var Bg=Promise.resolve();function Vg(e,t,n){n&&(Bg=Bg.then(async()=>{try{for(let r=0;r<5;r++){let r=await zg(t,e),i=r.raw-n.raw,a=n.lamports-r.lamports;if(i>0n&&a>0){let t=JSON.parse(await P.get(zp)||`{}`),n=t[e]??{lamports:0,raw:`0`};t[e]={lamports:n.lamports+a,...n.usd?{usd:n.usd}:{},raw:(BigInt(n.raw)+i).toString()},await P.set(zp,JSON.stringify(t));return}await new Promise(e=>setTimeout(e,1500))}}catch{}}))}var Hg=e=>e.inOrder===!0;async function Ug(e){let t=await Jf(e);return t&&t.decimals!==void 0?t:um(e).catch(()=>t??{name:null,symbol:null})}async function Wg(e){let t=e.map(()=>[]);if(!G)return t;let n=await i_(),r=new Set(n.map(e=>e.wallet)),i=await Promise.all(e.map(e=>r.has(e.address)?lm(e.address).catch(()=>[]):Promise.resolve([]))),a=[...new Set(i.flat().map(e=>e.inputMint))].filter(e=>e!==Fo),o=new Map(await Promise.all(a.map(async e=>[e,await Ug(e)])));for(let[e,n]of i.entries())for(let r of n){let n=BigInt(r.rawRemainingMakingAmount||r.rawMakingAmount||`0`),i=o.get(r.inputMint);n<=0n||!i||i.decimals===void 0||t[e].push({mint:r.inputMint,name:i.name,symbol:i.symbol,logo:i.logo,decimals:i.decimals,amount:Number(n)/10**i.decimals,usd:null,inOrder:!0})}return t}var Gg=e=>JSON.stringify(e.map(e=>[e.lamports,e.accounts.map(e=>`${e.mint}:${e.raw}`)])),Kg=null,qg=!1,Jg=new Set,Yg=e=>Kg===e&&mm[mm.length-1]?.key===`holdings`;async function Xg(){K(`holdings`,Xg);let e=await Qm();if(!e)return X();let t=Symbol(`holdings`);Kg=t;let n=qg;qg=!1;let r={me:t,wallets:e,costs:await Zg()};await Qg(e,`Looking up what each wallet holds…`,()=>Yg(t),(e,t,n)=>$g(r,e,t,n),n)}var Zg=()=>P.get(zp).then(e=>JSON.parse(e||`{}`)).catch(()=>({}));async function Qg(e,t,n,r,i=!1){let a=e.map(e=>e.address),o=Uf(a);o.catch(()=>{});let s=Wg(e);s.catch(()=>{});let c=()=>gh(s,8e3,null),l=()=>n()&&!!document.getElementById(`holdSync`),u=await Rf(a);if(u){let e=await gh(s,150,null);await r(u,e,`saved`);let t=await o.catch(()=>null);if(!l())return;if(!t){J(`holdSync`).textContent=`NOT SYNCED`;return}if(e&&Gg(t)===Gg(u)){let e=J(`holdSync`);e.textContent=`UP TO DATE`,e.classList.add(`synced`)}else{let n=e??await c();if(!l())return;await r(t,n,`quiet`)}}else{Cm(t);let[e,i]=await Promise.all([o,c()]);if(!n())return;await r(e,i,`fresh`)}let d=await Gf(a,i).catch(()=>null);d&&l()&&await r(d,await c(),`quiet`)}async function $g(e,t,n,r){let{me:i,wallets:a,costs:o}=e,s=0,c=await Promise.all(t.map(async e=>(await Kf(e)).filter(e=>!Ag(e)||!(s+=1)))),l=t.map(e=>e.lamports);n?.forEach((e,t)=>c[t].push(...e));let u=new Map;c.forEach((e,t)=>e.forEach(e=>{let n=u.get(e.mint)??{coin:e,amount:0,usd:null,wallets:[],inOrders:0};n.amount+=e.amount,e.usd===null?Hg(e)&&n.usd!==null&&n.amount>e.amount&&(n.usd+=n.usd/(n.amount-e.amount)*e.amount):n.usd=(n.usd??0)+e.usd,Hg(e)&&(n.inOrders+=e.amount),n.wallets.includes(a[t].index)||n.wallets.push(a[t].index),u.set(e.mint,n)}));let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=ov,p=new Map,m=0,h=()=>{for(let[e,t]of u){let n=p.get(e);n!==void 0&&f&&(t.usd=n/1e9*f),t.usd!==null&&t.amount>0&&lv(e,t.usd/t.amount)}},g=async()=>{if(!G)return;let[e,t]=await Promise.all([cm().catch(()=>null),u.size?dm([...u.keys()]).catch(()=>new Map):Promise.resolve(new Map)]);f=e??f,hv(f);for(let[e,n]of u){let r=t.get(e);r&&f?p.set(e,r*n.amount/f*1e9):n.usd!==null&&f&&!p.has(e)&&p.set(e,n.usd/f*1e9)}h()},_=async()=>{if(!G)return;let[e,t]=await Promise.all([cm(!0).catch(()=>null),Promise.all([...u].map(([e,t])=>ss(G,e,d(t),!0).catch(()=>null)))]);f=e??f,hv(f);let n=[];if([...u.keys()].forEach((e,r)=>{let i=t[r];i===null?n.push(e):p.set(e,i)}),m=n.length,n.length&&f){let e=await ls(G,n,!0).catch(()=>new Map);for(let[t,n]of e)p.set(t,n*u.get(t).amount/f*1e9)}h();let r=new Map;for(let[e,t]of u)t.usd!==null&&t.amount>0&&p.has(e)&&r.set(e,t.usd/t.amount);qf(r).catch(()=>{})};r===`fresh`?await g():h();let v=e=>a.flatMap((t,n)=>c[n].filter(t=>t.mint===e).map(e=>({address:t.address,amount:e.amount}))),y=e=>{let t=p.get(e);if(t===void 0||jg.has(e))return null;let n=o[e],r=u.get(e),i,a=!1,s=Pg(n)?Fg(n,f):null;if(s&&(i=s/Number(BigInt(n.raw))*Number(d(r)),a=!0),!i)return null;let c=(t-i)/i*100;return Math.abs(c)<.5?null:{pct:c,sinceBuy:a}},b=e=>e===null?``:`${e.pct>0?`▲`:`▼`} ${Math.abs(e.pct)>=100?Math.round(Math.abs(e.pct)):Math.abs(e.pct).toFixed(1)}%${e.sinceBuy?` since buy`:``}`,x=e=>e===null?``:e.pct>0?` up`:` down`,S=(await i_()).length;if(!Yg(i)||r===`quiet`&&!document.getElementById(`holdSync`))return;let C=l.reduce((e,t)=>e+t,0),w=a.filter((e,t)=>l[t]>0||c[t].length),T=e=>e===0?`Main`:`#${e}`,E=[...u.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),D=E.reduce((e,t)=>e+(t.usd??0),0),O=a.filter((e,t)=>l[t]>0).length,k=(e,t)=>`${e} ${t}${e===1?``:`s`}`,ee=e=>Og(e).replace(/^\$0\.00$/,`$${e.toFixed(4)}`),te=(e,t)=>r===`quiet`?t===`usd`?ee(e):U(e):`<span class="tk" data-to="${e}" data-kind="${t}">${t===`usd`?`$0.00`:`0.0000`}</span>`,A=r===`saved`?`SYNCING`:`UP TO DATE`,ne=window.scrollY;q(`
    <h1>Your holdings <span id="holdSync" class="live${r===`saved`?``:` synced`}">${A}</span></h1>
    <div class="total">
      <small>${D>0?`Coins across ${k(w.length,`wallet`)}`:`SOL across ${k(w.length,`wallet`)}`}</small>
      <div class="big">${D>0?`<span id="usdTotal">${te(D,`usd`)}</span>`:`<span class="solamt" data-sol="${C/H}">${te(C,`sol`)}<span class="unit">SOL</span></span>`}</div>
      ${D>0?`<div class="sub">+ <span class="solamt" data-sol="${C/H}">${te(C,`sol`)} SOL</span></div>`:``}
    </div>
    <h2>Across all wallets${E.length&&G?` <span id="live" class="live">LIVE</span>`:``}</h2>
    <ul class="list coins">
      <li id="solRow"><div class="av sol"><b>◎</b></div><div class="grow"><b>SOL</b><small>in ${k(O,`wallet`)}</small></div>
        <div class="right"><span class="solamt" data-sol="${C/H}">${te(C,`sol`)}<small>SOL</small></span></div></li>
      ${E.map(e=>{let t=y(e.coin.mint);return`<li data-mint="${e.coin.mint}">${Pn(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(kg(e.coin))}</b><small>in ${e.wallets.length===1?``:`${e.wallets.length} wallets: `}${e.wallets.map(T).join(`, `)}</small>${e.inOrders?`<small class="inorder">🎯 ${cv(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
          <div class="right${x(t)}"><span class="val">${e.usd===null?``:te(e.usd,`usd`)}</span><small class="move">${b(t)}</small><small>${cv(e.coin.mint,e.amount)}</small></div></li>`}).join(``)}
    </ul>
    <p class="muted">${E.length?`Tap a coin to sell some of it, set an auto-sell, or buy more. `:``}Tap SOL for its chart.</p>
    <h2>Per wallet</h2>
    <p class="muted">Tap a wallet to open it.</p>
    <ul class="list">${w.map(e=>{let t=a.indexOf(e);return`<li class="openwallet" data-index="${t}"><span>${T(e.index)}</span><code><span class="bal">${U(l[t])} SOL</span>${c[t].map(e=>`<br><small>${Hg(e)?`🎯 `:``}${Q(kg(e))}: ${cv(e.mint,e.amount)}${Hg(e)?` in auto-sell`:``}</small>`).join(``)}<br><a href="#" class="acct" data-address="${e.address}">view on Solscan</a></code></li>`}).join(``)}</ul>
    ${w.length<a.length?`<p class="muted">${a.length-w.length} empty wallets not shown.</p>`:``}
    ${s?`<p class="muted">${s} junk coin${s===1?``:`s`} hidden: ads strangers send to active wallets. They're worthless; don't visit the websites in their names.</p>`:``}
    <p class="muted" id="noLive"></p>
    ${E.length?`<button id="sellAll" class="danger">Sell all coins</button>`:``}
    ${S?`<button id="autoSells" class="gold">🎯 Auto-sells · ${S} placed</button>`:``}
    <button id="refresh" class="primary">Refresh</button>
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,ne),S&&Y(`autoSells`,()=>h_().catch($)),E.length&&Y(`sellAll`,()=>q_(100,!1,null).catch($)),document.querySelectorAll(`.acct`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),Qt(Gd(e.dataset.address))})),Y(`refresh`,()=>{om(),qg=!0,Xg().catch($)}),Y(`home`,X),document.querySelectorAll(`.openwallet`).forEach(e=>e.addEventListener(`click`,t=>{t.target.closest(`button, a, .solamt, .coinamt`)||(F(),ih(a[Number(e.dataset.index)]).catch($))})),J(`solRow`).addEventListener(`click`,e=>{e.target.closest(`.solamt`)||(F(),e_(C,O).catch($))}),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{let t=u.get(e.dataset.mint);F(),t_({mint:t.coin.mint,label:kg(t.coin),short:t.coin.symbol||t.coin.name||`?`,logo:t.coin.logo,amount:t.amount,raw:d(t),wallets:t.wallets.map(T).join(`, `),holders:v(t.coin.mint),decimals:t.coin.decimals??0,inOrders:t.inOrders,value:p.get(t.coin.mint)??null}).catch($)})),Fn(),document.querySelectorAll(`.tk`).forEach((e,t)=>{let n=Number(e.dataset.to),r=e.dataset.kind===`usd`;Nn(e,n,r?Og:eg,{ms:1100,delay:Math.min(t,12)*70,final:r?ee(n):U(n)})});let re=J(`holdSync`),ie=()=>re.isConnected;__([...u],3,async([e,t])=>{if(jg.has(e)||!Lg(o[e])||Jg.has(e)||!ie())return;Jg.add(e);let n=await Rg(e,v(e),t.coin.decimals??0).catch(()=>null).finally(()=>Jg.delete(e));n&&(o[e]=n)}).catch(()=>{});let ae=e=>{let t=document.getElementById(`live`);e&&t&&(t.classList.remove(`beat`),t.offsetWidth,t.classList.add(`beat`));let n=0;for(let[e,t]of u){n+=t.usd??0;let r=document.querySelector(`li[data-mint="${e}"]`);if(!r||t.usd===null)continue;let i=r.querySelector(`.right`),a=i.querySelector(`.val`),o=ee(t.usd);a.textContent!==o&&(a.textContent=o,i.classList.remove(`bump`),i.offsetWidth,i.classList.add(`bump`));let s=y(e);i.classList.toggle(`up`,!!s&&s.pct>0),i.classList.toggle(`down`,!!s&&s.pct<0),i.querySelector(`.move`).textContent=b(s)}let r=document.getElementById(`usdTotal`);r&&n>0&&(r.textContent=ee(n)),J(`noLive`).textContent=m?`${m===1?`1 coin has`:`${m} coins have`} no live sell price right now, so ${m===1?`its`:`their`} value may lag.`:``};G&&u.size&&(async()=>{if(r!==`fresh`){if(await g(),!ie())return;ae(!1)}r!==`quiet`&&await new Promise(e=>setTimeout(e,1200));for(let e=0;ie();e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),ie()&&!document.hidden){if(await _(),!ie())return;ae(!0)}})().catch(()=>{})}async function e_(e,t){K(`solchart`,()=>e_(e,t));let n=t=>t?` · ${Og(e/H*t)}`:``;q(`
    <div class="coinhead"><div class="av sol"><b>◎</b></div><div><b>Solana (SOL)</b><small>${U(e)} SOL · in ${t} wallet${t===1?``:`s`}</small></div><span id="live" class="live">LIVE</span></div>
    ${to()}
    <div class="avail"><small>Worth now</small><span id="worth">${U(e)} SOL${n(ov)}</span></div>
    <button id="back">Back to holdings</button>`),Y(`back`,()=>vm());let r=ro(Fo,`SOL`),i=J(`live`);for(let t=0;i.isConnected;t++){if(t&&await new Promise(e=>setTimeout(e,1e4)),!i.isConnected)return;if(document.hidden)continue;let a=await cm(!0).catch(()=>null);if(!i.isConnected)return;a&&(hv(a),r.live(a),J(`worth`).textContent=`${U(e)} SOL${n(a)}`,i.classList.remove(`beat`),i.offsetWidth,i.classList.add(`beat`))}}async function t_(e){if(K(`coin:${e.mint}:${e.only?.join(`,`)??``}`,()=>t_(e)),!G)return Xg();let t=Promise.all([ss(G,e.mint,e.raw),cm()]);t.catch(()=>{});let[n,r]=await Promise.all([Zg(),i_()]),i=jg.has(e.mint)?void 0:n[e.mint],a=!jg.has(e.mint)&&Lg(i),o=i&&Pg(i)?i:null,s=null,c=e.value??null,l=ov,u=!0,d=()=>{let t=o?Fg(o,l):null;s=t?Math.round(t/Number(BigInt(o.raw))*Number(e.raw)):null};d();let f=t,p=null,m=async()=>{let[t,n]=await(f??Promise.all([ss(G,e.mint,e.raw,!0),cm(!0)])).catch(()=>[null,null]);f=null,u=!1,t!==null&&(c=t),n!==null&&(l=n),hv(n),d(),c!==null&&l&&e.amount>0&&(lv(e.mint,c/H*l/e.amount),p?.live(c/H*l/e.amount)),g()},h=[],g=()=>{if(!p)return;let t=(e,t)=>l&&t>0?e/H*l/t:null,n=new Set,i=r.filter(t=>t.mint===e.mint&&!n.has(t.x)&&n.add(t.x)).map(n=>({usd:t(Number(n.taking),Number(n.making)/10**e.decimals),label:`🎯 ${c_(n.x)}`})).filter(e=>e.usd!==null&&e.usd>0);p.marks({trades:h,paid:s?t(s,e.amount):null,targets:i})},_=()=>s&&c&&c>s?Math.min(100,Math.ceil(s/c*1e4)/100):null,v=e=>String(Math.round(e*100)/100),y=e=>l?` · ${b(e/H*l)}`:``,b=e=>e<.01?`$${e.toFixed(4)}`:Og(e),x=r.filter(t=>t.mint===e.mint).length,S=``,C=!1;q(`
    <div class="coinhead">${Pn(e.short,e.logo)}<div><b>${Q(e.label)}</b><small>${cv(e.mint,e.amount,` coins`)} · in ${Q(e.wallets)}</small></div><span id="live" class="live">LIVE</span></div>
    ${jg.has(e.mint)?``:to()}
    <div class="avail"><small>Worth now</small><span id="worth"></span></div>
    <div class="avail"><small id="paidLabel"></small><span class="paid" id="paidText"></span></div>
    <div class="avail pl" id="plRow"><small>Profit</small><span id="pl"></span></div>
    ${e.inOrders?`<p class="muted initnote">🎯 ${cv(e.mint,e.inOrders)} of these wait in auto-sell orders. Selling here only sells the rest; cancel the order first to sell those.</p>`:``}
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">%</span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span>50%</span><span>ALL</span></div>
    <div class="chips"><button type="button" data-p="25">25%</button><button type="button" data-p="50">50%</button><button type="button" data-p="75">75%</button><button type="button" data-p="100">MAX</button></div>
    <div id="initialBox"></div>
    ${Mm(`dot`)}
    <button id="go" class="danger go"></button>
    <div id="autoBox"></div>
    <button id="buyMore" class="primary">⚡ Buy more</button>
    <button id="back">${e.only?`Back to the wallet`:`Back to holdings`}</button>`),Fn();let w=()=>Math.min(100,Number(S)||0),T=()=>{J(`worth`).textContent=c===null?u?`…`:`no live price`:`${U(c)} SOL${y(c)}`,J(`paidLabel`).textContent=`You paid${i?.chain?` · on-chain`:``}`,J(`paidText`).textContent=o?Ig(o,e.raw):a?`looking it up…`:`—`;let t=J(`autoBox`),n=!!o&&!jg.has(e.mint);n!==!!t.firstElementChild&&(t.innerHTML=n?`<button id="auto" class="gold">🎯 Auto-sell${x?` · ${x} waiting`:``}</button>`:``,n&&Y(`auto`,()=>f_(e,o).catch($)));let r=J(`plRow`);if(r.hidden=!(s&&c!==null),s&&c!==null){let e=c-s,t=e/s*100;r.classList.toggle(`up`,e>0),r.classList.toggle(`down`,e<0),J(`pl`).textContent=`${e>=0?`▲ +`:`▼ −`}${U(Math.abs(e))} SOL (${Math.abs(t)>=100?Math.round(Math.abs(t)):Math.abs(t).toFixed(1)}%)`}let l=_();J(`initialBox`).innerHTML=i?.out?`<p class="muted initnote">✓ Initial investment already taken out. The rest is riding free.</p>`:l===null?`<p class="muted initnote">${jg.has(e.mint)?`A stablecoin is always worth about $1, so there's no profit to take here.`:s?`💰 Sell initial investment shows up once this coin is worth more than you paid.`:a?`Looking up what you paid for this coin in your wallet's trade history…`:i?.checked?`Couldn't find what you paid for this coin in your wallet's trade history, so Sell initial investment isn't available.`:`Couldn't read your wallet's trade history right now, so Sell initial investment isn't available yet.`}</p>`:`<button id="initial" class="gold">💰 Sell initial investment · ${v(l)}%</button>`,l!==null&&!i?.out&&Y(`initial`,()=>{F(),C=!0,E()})},E=(t=!1)=>{let n=_();C&&n!==null&&(S=v(n));let r=w();J(`amt`).textContent=S||`0`,t||(J(`slider`).value=String(Math.round(r*10)));let i=c===null?null:Math.round(c*r/100);J(`amtNote`).textContent=r?C&&n!==null?`gets back the ${o?Ig(o,e.raw):`${U(s)} SOL`} you paid · ${v(100-r)}% keeps riding`:i===null?`${Dg(e.amount*r/100)} coins`:`≈ ${U(i)} SOL${y(i)} · ${Dg(e.amount*r/100)} coins`:`Type a % or drag the slider`,document.querySelector(`#initial`)?.classList.toggle(`on`,C);let a=J(`go`);a.disabled=!r,a.textContent=r?`Sell ${r===100?`all of it`:`${S}%`}`:`Sell`},D=()=>C=!1;Nm(e=>{if(D(),e===`back`)S=S.slice(0,-1);else if(e===`dot`)S=S.includes(`.`)?S:(S||`0`)+`.`;else if(/\d/.test(e)){let[,t]=S.split(`.`);if(t!==void 0&&t.length>=2)return;let n=S===`0`?e:S+e;S=Number(n)>100?`100`:n}E()}),J(`slider`).addEventListener(`input`,()=>{D();let e=Number(J(`slider`).value);S=e?v(e/10):``,E(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{F(),D(),S=e.dataset.p,E()})),Y(`go`,()=>{let t=w();if(!t)return;let n=C&&_()!==null,r=n?async()=>{let t=JSON.parse(await P.get(zp)||`{}`);t[e.mint]&&(t[e.mint].out=!0),await P.set(zp,JSON.stringify(t))}:void 0,i=(t,n)=>A_(e.label,Math.round(t*100)/100,!1,e.only??null,{mint:e.mint,label:e.label},r,n).catch($);if(!e.inOrders)return i(t,!1);let a=Math.max(0,e.amount-e.inOrders),o=n?Math.min(100,t*e.amount/(a||1)):t,s=t=>{let n=c===null||!e.amount?null:Math.round(c*t/e.amount);return n===null?``:` ≈ <span class="solamt" data-sol="${n/H}">${U(n)} SOL</span>${y(n)}`},l=a*o/100,u=e.amount*t/100;F(),q(`
      <h1>Sell ${Q(e.label)}</h1>
      <p>🎯 ${cv(e.mint,e.inOrders)} of your ${cv(e.mint,e.amount)} coins are locked in auto-sell orders.</p>
      ${a>0?`<button id="freeOnly" class="primary">Sell only the free coins<br><small>${cv(e.mint,l)} coins (${v(o)}% of ${cv(e.mint,a)})${s(l)}</small></button>`:`<p class="muted">All of it is in auto-sell orders, so there are no free coins to sell.</p>`}
      <button id="withOrders" class="danger">Sell from all coins, including the locked ones<br><small>${cv(e.mint,u)} coins (${v(t)}% of ${cv(e.mint,e.amount)})${s(u)} · cancels the auto-sell orders first</small></button>
      <button id="back">Back</button>`),a>0&&Y(`freeOnly`,()=>i(o,!1)),Y(`withOrders`,()=>i(t,!0)),Y(`back`,()=>t_(e).catch($))}),Y(`buyMore`,()=>vg(e.mint,null).catch($)),Y(`back`,()=>e.only?vm():Xg().catch($)),T(),E();let O=J(`live`);if(!jg.has(e.mint)){p=ro(e.mint,e.label),c!==null&&l&&e.amount>0&&p.live(c/H*l/e.amount),g();let t=e.holders.map(e=>e.address),n=ef(t);Promise.all(t.map((e,t)=>dh(e,n.then(e=>e[t])).catch(()=>[]))).then(t=>{h=t.flat().filter(t=>t.mint===e.mint).map(e=>({at:e.at,side:e.side})),O.isConnected&&g()}).catch(()=>{})}a&&Rg(e.mint,e.holders,e.decimals).catch(()=>null).then(e=>{e&&(i=e),o=i&&Pg(i)?i:null,a=!1,d(),O.isConnected&&(T(),E())}),(async()=>{for(let e=0;O.isConnected;e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),O.isConnected&&!document.hidden){if(await m(),!O.isConnected)return;O.classList.remove(`beat`),O.offsetWidth,O.classList.add(`beat`),T(),E()}})().catch(()=>{})}var n_=`autoSells`,r_=5;async function i_(){return JSON.parse(await P.get(n_).catch(()=>null)||`[]`)}var a_=e=>P.set(n_,JSON.stringify(e)),o_=Promise.resolve();function s_(e){let t=o_.then(async()=>a_(e(await i_())));return o_=t.catch(()=>{}),t}var c_=e=>`${Math.round(e*100)/100}x`,l_=e=>`+${Math.round((e-1)*1e4)/100}%`,u_=e=>{let t=1+24*(e/1e3)**2;return t<10?Math.round(t*10)/10:Math.round(t)},d_=e=>Math.round(Math.sqrt(Math.min(1,Math.max(0,(e-1)/24)))*1e3);async function f_(e,t){K(`autoSell:${e.mint}`,()=>f_(e,t));let n=await Qm();if(!n)return X();Cm(`Checking which wallets hold it…`);let r=new Set(e.holders.map(e=>e.address)),i=n.filter(e=>r.has(e.address)),a=e.raw-BigInt(Math.round((e.inOrders??0)*10**e.decimals)),o=a>0n?Promise.all([ss(G,e.mint,a),cm()]):null;o?.catch(()=>{});let s=await nf(i.map(e=>e.address),e.mint,await Yf(e.mint)),c=i.map((e,t)=>({wallet:e,held:s.raw[t]})).filter(e=>e.held>0n),l=c.reduce((e,t)=>e+t.held,0n);if(!l)return t_(e);let u=null,d=null,f=!0,p=async()=>{let t=!f,n=f&&o&&(a===l||Number(a>l?a-l:l-a)/Number(l)<.001);f=!1;let[r,i]=await(n?o.then(([e,t])=>[e===null?null:Math.round(e*Number(l)/Number(a)),t]):Promise.all([ss(G,e.mint,l,t),cm(t)]));r!==null&&(u=r),i!==null&&(d=i)};await p();let m=()=>{let e=Fg(t,d);return e?e/Number(BigInt(t.raw)):null},h=()=>u!==null&&m()?u/(m()*Number(l)):null,g=(await i_()).filter(t=>t.mint===e.mint),_=t.out?`all`:`initial`,v=`x`,y=2,b=`2`,x=e=>e===0?`Main`:`#${e}`,S=e=>d?e/H*d:null,C=()=>{let e=m();return!e||y<=1?[]:c.map(t=>{let n=_===`all`?t.held:t.held*10000n/BigInt(Math.round(y*1e4)),r=BigInt(Math.ceil(Number(n)*e*y)),i=u===null?null:u*Number(n)/Number(l);return{wallet:t.wallet,held:t.held,making:n,taking:r,usdNow:i===null?null:S(i)}})},w=e=>e.usdNow===null||e.usdNow>=r_;q(`
    <div class="coinhead">${Pn(e.short,e.logo)}<div><b>Auto-sell ${Q(e.label)}</b><small>You paid ${Ig(t,l)} · now <span id="nowX"></span></small></div></div>
    <div class="seg" id="kindSeg"><button type="button" data-v="initial">💰 Sell initial</button><button type="button" data-v="all">Sell all</button></div>
    <div class="seg small" id="unitSeg"><button type="button" data-v="x">Multiplier ×</button><button type="button" data-v="pct">Percentage %</button></div>
    <div class="total amountbox">
      <small id="when">when it reaches</small>
      <div class="amount"><span class="num" id="amt"></span><span class="unit" id="unit"></span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1">
    <div class="ticks" id="ticks"></div>
    ${Mm(`dot`)}
    <ul class="list" id="plan"></ul>
    <p class="muted" id="planNote"></p>
    <button id="go" class="gold go">Set auto-sell</button>
    <div id="existing"></div>
    <p class="muted">The coins in an order wait in Jupiter's on-chain order account, so they leave your holdings until it sells or you cancel it. This only sells on the way up; it can't stop a loss.</p>
    <button id="back">Back to ${Q(e.short)}</button>`),Fn();let T=()=>{J(`existing`).innerHTML=g.length?`<h2>Waiting orders for this coin</h2><ul class="list">${g.map(e=>`<li><span>${x(e.index)}</span><code>${e.kind===`initial`?`💰 initial`:`all`} at ${c_(e.x)} → ${U(Number(e.taking))} SOL</code></li>`).join(``)}</ul><button id="manage">See or cancel auto-sells</button>`:``,g.length&&Y(`manage`,()=>h_().catch($))},E=(t=!1)=>{document.querySelectorAll(`#kindSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===_)),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===v)),J(`amt`).textContent=b||`0`,J(`unit`).textContent=v===`x`?`x`:`%`,J(`ticks`).innerHTML=v===`x`?`<span>1x</span><span>7x</span><span>25x</span>`:`<span>+0%</span><span>+600%</span><span>+2400%</span>`,t||(J(`slider`).value=String(d_(y)));let n=h();J(`nowX`).textContent=n===null?`no live price`:`${c_(n)} (${n>=1?`▲ +`:`▼ −`}${Math.abs(Math.round((n-1)*1e3)/10)}%)`;let r=m(),i=C(),a=i.filter(w),o=J(`go`),s=``,c=``;r?y<=1?c=_===`initial`?`Pick more than 1x: at 1x getting back what you paid means selling all of it.`:`Pick more than 1x.`:n!==null&&y<=n&&(c=`That's below today's price (${c_(n)}), so it would sell straight away. Use Sell on the coin screen for that.`):c=`Can't work out today's price of what you paid.`;let l=_===`all`?100:Math.round(1e4/y)/100,u=i.reduce((e,t)=>e+Number(t.taking),0),d=S(u);J(`amtNote`).textContent=c?``:`${v===`x`?l_(y):c_(y)} · sells ${_===`all`?`all of it`:`${l}%`} for ≈ ${U(u)} SOL${d?` · ${Og(d)}`:``}${_===`initial`?` · ${Math.round((100-l)*100)/100}% keeps riding`:``}`,J(`plan`).innerHTML=c?``:i.map(t=>`<li><span>${x(t.wallet.index)}</span><code>${w(t)?`sell ${T_(t.making,e.decimals)} for ${U(Number(t.taking))} SOL`:`<span class="error">skipped: worth ${Og(t.usdNow)} now, under Jupiter's $${r_} minimum</span>`}</code></li>`).join(``),!c&&!a.length?s=`Every wallet's order would be under Jupiter's $${r_} minimum (worth now). Gather the coins in fewer wallets, or pick Sell all.`:!c&&a.length<i.length&&(s=`Jupiter only takes orders worth at least $${r_} right now, so ${i.length-a.length} wallet${i.length-a.length===1?` is`:`s are`} skipped.`),J(`planNote`).textContent=c||s,J(`planNote`).classList.toggle(`error`,!!c),o.disabled=!!c||!a.length,o.textContent=c||!a.length?`Set auto-sell`:`Set auto-sell in ${a.length} wallet${a.length===1?``:`s`}`},D=()=>{let e=Number(b)||0;y=v===`x`?e:1+e/100},O=()=>{b=String(v===`x`?Math.round(y*100)/100:Math.round((y-1)*1e4)/100)};document.querySelectorAll(`#kindSeg button`).forEach(e=>e.addEventListener(`click`,()=>{F(),_=e.dataset.v,E()})),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.addEventListener(`click`,()=>{F(),v=e.dataset.v,O(),E()})),Nm(e=>{if(e===`back`)b=b.slice(0,-1);else if(e===`dot`)b=b.includes(`.`)?b:(b||`0`)+`.`;else if(/\d/.test(e)){let[,t]=b.split(`.`);if(t!==void 0&&t.length>=2||b.replace(`.`,``).length>=7)return;b=b===`0`?e:b+e}D(),E()}),J(`slider`).addEventListener(`input`,()=>{y=u_(Number(J(`slider`).value)),O(),E(!0)}),Y(`back`,()=>t_(e).catch($)),Y(`go`,()=>{let t=C().filter(w);if(!t.length)return;let n={kind:_,x:y};zm(`Enter your PIN to set the auto-sell`,r=>p_(r,e,t,n).catch($))}),T(),E();let k=J(`nowX`);(async()=>{for(;k.isConnected;)await new Promise(e=>setTimeout(e,5e3)),k.isConnected&&!document.hidden&&(await p(),k.isConnected&&E())})().catch(()=>{})}async function p_(e,t,n,r){om();let i=qm(e,Math.max(...n.map(e=>e.wallet.index))+1),a=e=>e===0?`Main`:`#${e}`;q(`
    <h1>Setting auto-sell…</h1>
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${a(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let o=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,s=0;await __(n,Sg,async e=>{let n=J(`status-${e.wallet.index}`);try{n.textContent=`placing the order…`;let a=Cg(e.wallet.address),c=await ds(G,e.wallet.address,t.mint,e.making,e.taking);if(!c.transaction)throw Error(`Jupiter didn't send an order to sign.`);let l=await ps(G,await xg(is(c.transaction),i[e.wallet.index],{sol:yg,mint:t.mint,coins:e.making},a),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter's order didn't go through (code ${l.code}).`);s++,await s_(n=>[...n,{order:c.order??``,wallet:e.wallet.address,index:e.wallet.index,mint:t.mint,label:t.label,kind:r.kind,x:r.x,making:e.making.toString(),taking:e.taking.toString(),at:Date.now()}]),n.innerHTML=`✓ sells ${T_(e.making,t.decimals)} at ${c_(r.x)} for ${U(Number(e.taking))} SOL · ${o(l.signature,`view`)}`}catch(e){n.innerHTML=`<span class="error">✗ ${Q(m_(e))}</span>`}}),zf(n.map(e=>e.wallet.address)).catch(()=>{}),i.forEach(e=>e.secret.fill(0)),Xt(s?`success`:`error`),J(`after`).innerHTML=`<p><b>Done: auto-sell set in ${s} of ${n.length} wallets.</b>${s?` It sells when ${Q(t.label)} reaches ${c_(r.x)} what you paid.`:``}</p>
    <button id="list" class="primary">See my auto-sells</button>
    <button id="holdings">See my holdings</button>`,X_(),Y(`list`,()=>h_().catch($)),Y(`holdings`,()=>Xg().catch($))}function m_(e){let t=Z(e);return/at least 5 USD/i.test(t)?`worth under $${r_} right now (Jupiter's minimum)`:/insufficient|lamports|rent/i.test(t)?`not enough SOL in this wallet for the order's fee and deposit (~0.003 SOL)`:t}async function h_(){if(K(`autoSells`,h_),!G)return Xg();let e=await i_(),t=e=>e===0?`Main`:`#${e}`;if(!e.length)return q(`
      <h1>Auto-sells</h1>
      <p class="muted">No auto-sells yet. Tap a coin in your holdings, then 🎯 Auto-sell.</p>
      <button id="holdings" class="primary">See my holdings</button>`),Y(`holdings`,()=>Xg().catch($));Cm(`Checking your orders on Jupiter…`);let n=[...new Set(e.map(e=>e.wallet))],r=new Map,i=new Map,a=!1;await Promise.all(n.map(async t=>{try{for(let e of await ms(G,t,`active`))r.set(e.orderKey,e);if(e.some(e=>e.wallet===t&&!r.has(e.order)))for(let e of await ms(G,t,`history`))i.set(e.orderKey,e)}catch{a=!0}}));let o=JSON.parse(await P.get(zp).catch(()=>null)||`{}`),s=!1,c=e=>{if(r.has(e.order))return`waiting`;let t=i.get(e.order);return t?/complete|fill/i.test(t.status)?`sold`:`cancelled`:`unknown`};for(let t of e)t.kind===`initial`&&c(t)===`sold`&&o[t.mint]&&!o[t.mint].out&&(o[t.mint].out=!0,s=!0);s&&await P.set(zp,JSON.stringify(o)),a||await a_(e.filter(e=>[`waiting`,`unknown`].includes(c(e))));let l=e.filter(e=>c(e)===`waiting`),u=e=>({waiting:`waiting`,sold:`✓ sold`,cancelled:`cancelled`,unknown:a?`couldn't check`:`not found on Jupiter`})[c(e)];q(`
    <h1>Auto-sells</h1>
    <ul class="list">${e.map((e,n)=>`<li><span>${t(e.index)}</span><code><b>${Q(e.label)}</b> · ${e.kind===`initial`?`💰 sell initial`:`sell all`} at ${c_(e.x)}<br><small>${U(Number(e.taking))} SOL · ${u(e)}</small>${c(e)===`waiting`?`<br><button type="button" class="cancel small" data-i="${n}">Cancel</button>`:``}</code></li>`).join(``)}</ul>
    ${a?`<p class="error">Couldn't reach Jupiter for every wallet. Try Refresh.</p>`:``}
    ${l.length>1?`<button id="cancelAll" class="danger">Cancel all ${l.length}</button>`:``}
    <p class="muted">Cancelling gives the coins back to the wallet.</p>
    <button id="refresh" class="primary">Refresh</button>
    <button id="holdings">See my holdings</button>`),Y(`refresh`,()=>h_().catch($)),Y(`holdings`,()=>Xg().catch($)),document.querySelectorAll(`button.cancel`).forEach(t=>t.addEventListener(`click`,()=>{let n=e[Number(t.dataset.i)];zm(`Enter your PIN to cancel`,e=>g_(e,[n]).catch($))})),l.length>1&&Y(`cancelAll`,()=>zm(`Enter your PIN to cancel them all`,e=>g_(e,l).catch($)))}async function g_(e,t){om();let n=qm(e,Math.max(...t.map(e=>e.index))+1),r=e=>e===0?`Main`:`#${e}`;q(`
    <h1>Cancelling…</h1>
    <ul class="list">${t.map((e,t)=>`<li><span>${r(e.index)}</span><code id="status-${t}">${Q(e.label)} · waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let i=0,a=new Set,o=new Map;t.forEach((e,t)=>o.set(e.wallet,[...o.get(e.wallet)??[],t])),await __([...o.values()],Sg,async e=>{for(let[r,o]of e.entries()){let e=t[o],s=J(`status-${o}`);try{s.textContent=`cancelling…`;let t=n[e.index];if(t.address!==e.wallet)throw Error(`this wallet's number changed; cancel it on jup.ag instead`);let o=r===0?Cg(e.wallet):void 0,c=await fs(G,e.wallet,e.order),l=await ps(G,await xg(is(c.transaction),t,{sol:yg},o),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter didn't cancel it (code ${l.code}).`);i++,a.add(e.order),s.innerHTML=`✓ cancelled, coins back in the wallet · <a href="#" class="tx" data-sig="${l.signature}">view</a>`}catch(e){s.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}}),zf([...o.keys()]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),a.size&&await s_(e=>e.filter(e=>!a.has(e.order))),Xt(i?`success`:`error`),J(`after`).innerHTML=`<p><b>Cancelled ${i} of ${t.length}.</b></p><button id="list" class="primary">See my auto-sells</button>`,X_(),Y(`list`,()=>h_().catch($))}async function __(e,t,n){let r=Array(e.length),i=0;return await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;i<e.length;){let t=i++;r[t]=await n(e[t],t)}})),r}var v_=12;function y_(e,t,n,r){if(e<5e3)return null;let i=t.filter(e=>e.raw===0n).slice(0,v_),a=i.reduce((e,t)=>e+t.lamports,0),o=t.some(e=>e.raw>0n&&!r?.has(e.mint))?ng:0,s=n?Math.max(0,e+a-Nu-o):0;return!i.length&&!s||!i.length&&s<5e4?null:{close:i,refund:a,keep:o,send:s}}async function b_(e,t,n){let r=await Bd(fd(e,[...n.close.map(t=>hd(t,e.address,e.address)),...n.send>0?[md(e.address,t.address,n.send)]:[]],await Id())),i=await Ud(r);if(i!==`confirmed`)throw Error(`${i===`failed`?`failed`:`is taking long`} (${r})`);return r}function x_(e){let[t,...n]=[e.send?`sends ${U(e.send)} SOL to main`:``,e.close.length?`gets back ${U(e.refund)} SOL in deposits from ${e.close.length} empty coin account${e.close.length===1?``:`s`}`:``,e.keep?`keeps ${U(e.keep)} SOL to sell its coins later`:``].filter(Boolean);return t+(n.length?`<br><small>${n.join(`<br>`)}</small>`:``)}async function S_(){K(`sweep`,S_);let e=await Qm();if(!e)return X();let[t,...n]=e;Cm(`Checking your side wallets…`);let r=await Uf(n.map(e=>e.address)),i=n.map((e,t)=>({wallet:e,plan:y_(r[t].lamports,r[t].accounts,!0)})).filter(e=>e.plan!==null),a=i.reduce((e,t)=>e+t.plan.send,0);q(`
    <h1>Send side-wallet SOL to main</h1>
    ${i.length?`<ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code>${x_(e.plan)}</code></li>`).join(``)}</ul>
           <p><b>Total to main: ${U(a)} SOL</b></p>
           <p class="muted">Empty coin accounts are closed so their deposits come back too.</p>
           <button id="go" class="primary">Enter PIN and send</button>`:`<p class="muted">There's no SOL to send back right now. Side wallets that hold coins keep ${U(ng)} SOL so they can sell them later.</p>`}
    <button id="cancel">Back to my wallets</button>`),Y(`cancel`,X),i.length&&Y(`go`,()=>zm(`Enter your PIN to send`,async e=>{let n=qm(e,Math.max(...i.map(e=>e.wallet.index))+1);q(`
        <h1>Sending to main…</h1>
    ${Rt()}
        <ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),pm();let r=0;await __(i,Sg,async e=>{let i=J(`status-${e.wallet.index}`);try{i.textContent=`sending…`;let a=await b_(n[e.wallet.index],t,e.plan);r++,i.innerHTML=`✓ ${e.plan.send?`sent ${U(e.plan.send)} SOL`:`got back ${U(e.plan.refund)} SOL`} · <a href="#" class="tx" data-sig="${a}">view</a>`}catch(e){i.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),zf([t.address,...i.map(e=>e.wallet.address)]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),Xt(r?`success`:`error`),r&&await An(`MERGED`),J(`after`).innerHTML=`<p><b>Done: ${r} of ${i.length} wallets.</b></p><button id="home" class="primary">Back to my wallets</button>`,X_(),Y(`home`,X)}))}var C_=e=>/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(e);function w_(e,t){let n=e.toString().padStart(t+1,`0`),r=n.slice(0,n.length-t),i=n.slice(n.length-t).replace(/0+$/,``);return i?`${r}.${i}`:r}var T_=(e,t)=>Dg(Number(w_(e,t)));async function E_(e,t){if(C_(e)){let t=await Jf(e);return[{mint:e,label:t?.name?`${t.name}${t.symbol?` (${t.symbol})`:``}`:await nd(e)??ym(e)}]}let n=e=>(e??``).toLowerCase().replace(/[^a-z0-9]/g,``),r=n(e),i=async e=>{if(!e)return[];let t=(await Promise.all(e.map(e=>Kf(e)))).flat().filter(e=>!Ag(e)),i=e=>{let n=new Map;for(let r of t)e(r)&&n.set(r.mint,kg(r));return[...n].map(([e,t])=>({mint:e,label:t}))},a=i(e=>n(e.symbol)===r||n(e.name)===r);return a.length||r.length<3?a:i(e=>n(e.symbol).startsWith(r)||n(e.name).startsWith(r))},a=t.map(e=>e.address),o=await i(await Rf(a));return o.length?o:i(await Uf(a))}async function D_(e,t){let n=new Set((await i_()).map(e=>e.wallet)),r=e.filter(e=>n.has(e.address)),i=await Promise.all(r.map(e=>ms(G,e.address,`active`).catch(()=>[])));return r.flatMap((e,n)=>i[n].filter(e=>e.inputMint===t).map(t=>({wallet:e.address,order:t.orderKey,raw:BigInt(t.rawRemainingMakingAmount||t.rawMakingAmount||`0`)})))}async function O_(e,t,n){let r=async()=>(await Pd(e.address,t)).reduce((e,t)=>e+t.raw,0n),i=await r();for(let t of n){let n=await fs(G,e.address,t.order),r=await ps(G,await xg(is(n.transaction),e,{sol:yg}),n.requestId);if(r.status!==`Success`)throw Error(r.error??`Jupiter didn't cancel the auto-sell order (code ${r.code}).`)}let a=i+n.reduce((e,t)=>e+t.raw,0n);for(let e=0;e<20;e++){let e=await r();if(e>=a)return e;await new Promise(e=>setTimeout(e,500))}return r()}var k_=5e4;async function A_(e,t,n,r,i,a,o=!1){if(K(`sell:${i?.mint??e}:${r?.join(`,`)??``}`,()=>A_(e,t,n,r,i,a,o)),!G)return q(`
      <h1>Open this from the bot</h1>
      <p>To sell, send <b>sell &lt;coin name or address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);let s=await Qm();if(!s)return X();let[c]=s,l=i,u=e=>Yf(e).then(t=>nf(s.map(e=>e.address),e,t)),d=!l&&C_(e)?u(e):null;if(d?.catch(()=>{}),!l){Cm(C_(e)?`Finding the coin in your wallets…`:`Looking for ${Q(e)} in your wallets…`);let i=await E_(e,s);if(!i.length)return q(`
        <h1>Coin not found</h1>
        <p>None of your wallets hold a coin called <b>${Q(e)}</b>. Check the name in <b>holdings</b>, or send <b>sell</b> with the coin's address instead.</p>
        <button id="home" class="primary">Back to my wallets</button>`),Y(`home`,X);if(i.length>1)return q(`
        <h1>Which ${Q(e)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${i.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${ym(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(o=>o.addEventListener(`click`,()=>A_(e,t,n,r,i[Number(o.dataset.i)],a).catch($))),Y(`home`,X);l=i[0]}Cm(`Checking how much each wallet holds…`);let f=l.mint,[p,m]=await Promise.all([d&&f===e?d:u(f),o?D_(s,f):Promise.resolve([])]),h=e=>m.filter(t=>t.wallet===e).reduce((e,t)=>e+t.raw,0n),g=[],_=[];s.forEach((e,n)=>{if(r&&!r.includes(e.index))return;let i=p.raw[n]+h(e.address);if(i===0n)return void(r&&_.push(e.index));let a=t===100?i:i*BigInt(Math.round(t*100))/10000n,o=p.decimals??0;a>0n&&g.push({wallet:e,balance:p.lamports[n],raw:i,sell:a,decimals:o,orders:m.filter(t=>t.wallet===e.address)})});let v=e=>e===0?`Main`:`#${e}`,y=e=>e.balance>=k_,b=r?.filter(e=>e>=s.length)??[],x=[_.length?`${_.map(v).join(`, `)} ${_.length===1?`doesn't`:`don't`} hold this coin.`:``,b.length?`You don't have ${b.map(v).join(`, `)}.`:``].filter(Boolean);if(q(`
    <h1>Sell ${Q(l.label)}</h1>
    <div class="card"><div class="label">Coin address</div><div class="address" id="mint"></div></div>
    ${m.length?`<p class="muted">Includes the coins in your auto-sell orders: those orders are cancelled first, then the coins are sold.</p>`:``}
    ${g.length?`<h2>Selling ${t===100?`all of it`:`${t}%`} from <span id="picked"></span></h2>
           <p class="muted">Untick any wallet you want to leave out.</p>
           <ul class="list">${g.map((e,n)=>`<li><label class="pickrow"><input type="checkbox" class="sellbox" data-i="${n}" ${y(e)?`checked`:`disabled`}>
                 <span>${v(e.wallet.index)}</span></label><code>sells <b>${cv(l.mint,Number(w_(e.sell,e.decimals)))}</b>${t<100?` of ${cv(l.mint,Number(w_(e.raw,e.decimals)))}`:``}${e.orders?.length?`<br><small>🎯 cancels ${e.orders.length===1?`its auto-sell order`:`${e.orders.length} auto-sell orders`} first</small>`:``}${y(e)?``:`<br><small class="error">not enough SOL to pay the fee, skipped</small>`}</code></li>`).join(``)}</ul>
           ${x.length?`<p class="muted">${x.join(` `)}</p>`:``}
           ${t===100?`<p class="muted">Afterwards each wallet closes its empty ${Q(l.label)} account and gets its ~0.002 SOL deposit back.</p>`:``}
           ${n?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold other coins keep ${U(ng)} SOL to sell those later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Prices can move while the sales go through one by one.</p>
           ${g.some(y)?`<button id="go" class="primary">Enter PIN and sell</button>`:``}`:`<p class="warning">${r?`${x.join(` `)||`Those wallets don't hold this coin.`}`:`None of your wallets hold this coin.`}</p>`}
    <button id="cancel">Cancel</button>`),J(`mint`).textContent=l.mint,Y(`cancel`,X),g.some(y)){let e=Array.from(document.querySelectorAll(`.sellbox`)),r=()=>e.filter(e=>e.checked).map(e=>g[Number(e.dataset.i)]),i=()=>{let e=r().length;J(`picked`).textContent=`${e} wallet${e===1?``:`s`}`,J(`go`).disabled=e===0};e.forEach(e=>e.addEventListener(`change`,i)),i(),Y(`go`,()=>{let e=r();e.length&&zm(`Enter your PIN to sell`,r=>j_(r,l.mint,c,e,t,n,a))})}}async function j_(e,t,n,r,i,a,o){let s=qm(e,Math.max(...r.map(e=>e.wallet.index))+1),c=e=>e===0?`Main`:`#${e}`;q(`
    <h1>Selling…</h1>
    ${Rt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${r.map(e=>`<li><span>${c(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),pm();let l=(e,t)=>J(`status-${e}`).innerHTML=t,u=(e,t)=>J(`status-${e}`).innerHTML+=t,d=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,f=0,p=0,m=0,h={jupiter:null};await __(r,Sg,async e=>{let r=s[e.wallet.index];if(e.orders?.length)try{l(e.wallet.index,`cancelling the auto-sell order…`);let n=await O_(r,t,e.orders),a=new Set(e.orders.map(e=>e.order));if(await s_(e=>e.filter(e=>!a.has(e.order))),e.raw=n,e.sell=i===100?n:n*BigInt(Math.round(i*100))/10000n,e.sell<=0n)throw Error(`the coins didn't come back from the order yet; try again in a moment`)}catch(t){l(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`);return}let o=e.orders?.length?void 0:Cg(r.address),c=await K_(e,t,r,i,h,l,d,o);if(c&&f++,i!==100&&!a)return;let g=a&&e.wallet.index!==0;try{let a=0,o=[];for(let n=0;n<5&&([[a],o]=await Promise.all([cd([e.wallet.address]),Pd(e.wallet.address)]),c&&i===100&&!o.every(e=>e.mint!==t||e.raw===0n));n++)await new Promise(e=>setTimeout(e,500));let s=y_(a,o,g);if(!s)return;u(e.wallet.index,`<br><small>${g?`sending to main…`:`getting the deposit back…`}</small>`);let l=await b_(r,n,s);p+=s.send,m+=s.refund,J(`status-${e.wallet.index}`).querySelector(`small:last-of-type`).innerHTML=`${s.send?`sent ${U(s.send)} SOL to main`:`got back ${U(s.refund)} SOL deposit`} · ${d(l,`view`)}`}catch(t){u(e.wallet.index,`<br><small class="error">✗ collecting: ${Q(Z(t))}</small>`)}}),zf([n.address,...r.map(e=>e.wallet.address)]).catch(()=>{}),s.forEach(e=>e.secret.fill(0)),Xt(f?`success`:`error`),f&&await An(`PRINTED`),f&&o&&await o().catch(()=>{}),J(`after`).innerHTML=`<p><b>Done: sold in ${f} of ${r.length} wallets.</b>${m?` Got back ${U(m)} SOL in deposits.`:``}${p?` Sent ${U(p)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,X_(),Y(`holdings`,()=>Xg().catch($)),Y(`home`,X)}var M_=new Map;function N_(e){return M_.has(e)||M_.set(e,Tf(e)),M_.get(e)}var P_=new Map;function F_(e){return P_.has(e)||P_.set(e,nd(e).then(t=>t?.match(/\(([^)]+)\)$/)?.[1]??t??ym(e)).catch(()=>ym(e))),P_.get(e)}var I_=[15,30],L_=21e5,R_=/custom program error: 0x(179a|1798|1774)\b/;async function z_(e,t){let[n]=await Ed([t]);return Od(n)}async function B_(e,t,n){for(let r=0;r<20;r++){let r=await z_(e,t);if(r!==n)return r;await new Promise(e=>setTimeout(e,400))}return z_(e,t)}async function V_(e,t,n,r){try{if(await B_(e.address,t,r)!==0n)return;await Bd(fd(e,[jd(t,e.address,e.address,n)],await Id()))}catch{}}async function H_(e,t,n,r,i,a){let o=Df(t.address,e,n===`buy`?`coin`:`quote`),s=Df(t.address,e,n===`buy`?`quote`:`coin`),c=n===`buy`?e.quoteProgram:e.mintProgram,l=async a=>fd(t,[...Ef(t.address,e,n,r,a),...i?[jd(s,t.address,t.address,c)]:[]],await Id()),u=await z_(t.address,o);for(let e=0;;e++){let n=I_[e],r=await Dd(await l(1n),[o]);if(r.err){let e=r.logs.filter(e=>/Error|failed/i.test(e)).slice(-1)[0]??JSON.stringify(r.err);throw Error(`pump.fun turned the trade down before it ran (${e}).`)}let i=Od(r.accounts[0])-u;if(i<=0n)throw Error(`pump.fun's swap would give nothing back.`);let s=i*BigInt(100-n)/100n||1n;try{let e=await Bd(await l(s)),n=await Ud(e);if(n!==`confirmed`)throw Error(`the trade ${n===`failed`?`failed`:`is taking long`} (${e})`);return{signature:e,got:await B_(t.address,o,u)-u}}catch(t){let n=I_[e+1];if(!(n&&R_.test(Z(t))))throw t;a(`price jumped, trying again with ${n}% room…`)}}}async function U_(e,t,n,r){let i=await ns(G,t,n,r.toString(),e.address);if(!i.transaction)throw Error(i.errorMessage??`Jupiter couldn't make that swap.`);let a=t===`So11111111111111111111111111111111111111112`?{sol:Number(r)+yg}:{sol:yg,mint:t,coins:r},o=await rs(G,await xg(is(i.transaction),e,a),i.requestId);if(o.status!==`Success`)throw Error(o.error??`Jupiter's swap didn't go through (code ${o.code}).`);return{signature:o.signature,out:i.outAmount}}async function W_(e,t,n,r,i){let a=Q(await F_(e.quote)),o=Df(t.address,e,`quote`),s=n-L_;if(s<ig)return r(`<span class="error">✗ too little SOL for this coin: it's priced in ${a}, which needs an extra ~0.002 SOL account</span>`),!1;let c=await z_(t.address,o),l;try{r(`this coin is priced in ${a}: swapping ${U(s)} SOL for ${a}…`),l=(await U_(t,Fo,e.quote,BigInt(s))).signature}catch(e){return r(`<span class="error">✗ couldn't get ${a} to buy with (${Q(Z(e))}). Nothing was bought.</span>`),!1}let u=await B_(t.address,o,c)-c;if(u<=0n)return r(`<span class="error">✗ the ${a} swap went through but nothing arrived yet · ${i(l,`view`)}</span>`),!1;try{r(`got ${a} · buying the coin on pump.fun…`);let{signature:n}=await H_(e,t,`buy`,u,c===0n,r);return r(`✓ bought with ${U(s)} SOL (via ${a}) · ${i(l,`swap`)} · ${i(n,`buy`)}`),!0}catch(n){let s=Q(Z(n));try{r(`buy failed, swapping the ${a} back to SOL…`);let n=await U_(t,e.quote,Fo,u);c===0n&&await V_(t,o,e.quoteProgram,u),r(`<span class="error">✗ ${s}</span><br><small>Swapped the ${a} back to SOL${n.out?` (~${U(Number(n.out))} SOL)`:``} · ${i(n.signature,`view`)}</small>`)}catch(e){r(`<span class="error">✗ ${s}</span><br><small class="error">This wallet now holds the ${a} it got (${i(l,`view`)}); swapping it back failed too (${Q(Z(e))}). Sell it with "sell ${a}".</small>`)}return!1}}async function G_(e,t,n,r,i){let a=Q(await F_(e.quote)),o=Df(t.address,e,`quote`),s=await z_(t.address,o),c;try{r(`this coin is priced in ${a}: selling it for ${a} on pump.fun…`),c=await H_(e,t,`sell`,n.sell,!1,r)}catch(e){return r(`<span class="error">✗ ${Q(Z(e))}</span>`),!1}try{r(`sold for ${a} · swapping the ${a} to SOL…`);let l=await U_(t,e.quote,Fo,c.got);return s===0n&&await V_(t,o,e.quoteProgram,c.got),r(`✓ sold ${T_(n.sell,n.decimals)}${l.out?` for ~${U(Number(l.out))} SOL`:``} (via ${a}) · ${i(c.signature,`sale`)} · ${i(l.signature,`swap`)}`),!0}catch(e){return r(`✓ sold ${T_(n.sell,n.decimals)} for ${a} · ${i(c.signature,`view`)}<br><small class="error">Swapping the ${a} to SOL failed (${Q(Z(e))}). This wallet holds it now: sell it with "sell ${a}".</small>`),!0}}async function K_(e,t,n,r,i,a,o,s){try{a(e.wallet.index,`selling…`);let c=null;if(!i.jupiter)try{if(c=await ns(G,t,Fo,e.sell.toString(),n.address),!c.transaction)throw Error(c.errorMessage??`Jupiter couldn't find a way to sell this coin.`)}catch(e){i.jupiter=Z(e),c=null}if(c){let r=await rs(G,await xg(is(c.transaction),n,{sol:yg,mint:t,coins:e.sell},s),c.requestId);if(r.status!==`Success`)throw Error(r.error??`The sale didn't go through (code ${r.code}).`);let i=c.outAmount?` for ~${U(Number(c.outAmount))} SOL`:``;return a(e.wallet.index,`✓ sold ${T_(e.sell,e.decimals)}${i} · ${o(r.signature,`view`)}`),!0}let l=await N_(t);if(l)return await G_(l,n,e,t=>a(e.wallet.index,t),o);a(e.wallet.index,`selling through pump.fun…`);let u=r===100?`100%`:w_(e.sell,e.decimals),d=await Y_(e.wallet.index,a,i.jupiter,e=>vs(n.address,t,u,e),n,()=>({sol:yg,mint:t,coins:r===100?void 0:e.sell}),s),f=await Ud(d);return f===`confirmed`?(a(e.wallet.index,`✓ sold ${T_(e.sell,e.decimals)} via pump.fun · ${o(d,`view`)}`),!0):(a(e.wallet.index,`<span class="error">✗ sale ${f===`failed`?`failed`:`is taking long`}</span> · ${o(d,`check`)}`),!1)}catch(t){return a(e.wallet.index,`<span class="error">✗ ${Q(Z(t))}</span>`),!1}}async function q_(e,t,n){if(K(`sellAll:${n?.join(`,`)??``}`,()=>q_(e,t,n)),!G)return q(`
      <h1>Open this from the bot</h1>
      <p>To sell everything, send <b>sell all</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),Y(`home`,X);let r=await Qm();if(!r)return X();let[i]=r,a=r.filter(e=>!n||n.includes(e.index));Cm(`Checking every coin in every wallet…`);let o=await Uf(a.map(e=>e.address)),s=o.map(e=>e.lamports),c=o.map(e=>e.accounts),l=await Promise.all(o.map(e=>Kf(e))),u=new Map;l.flat().forEach(e=>u.set(e.mint,e));let d=new Map,f=0;a.forEach((t,n)=>{let r=new Map;for(let e of c[n]){if(e.raw===0n)continue;let t=r.get(e.mint)??{raw:0n,decimals:e.decimals};t.raw+=e.raw,r.set(e.mint,t)}for(let[i,{raw:a,decimals:o}]of r){if(i===`So11111111111111111111111111111111111111112`)continue;let r=u.get(i);if(r&&Ag(r)){f++;continue}let c=e===100?a:a*BigInt(Math.round(e*100))/10000n;if(c===0n)continue;let l=d.get(i)??{mint:i,label:r?kg(r):ym(i),logo:r?.logo,usd:null,rows:[]};r?.usd!=null&&(l.usd=(l.usd??0)+r.usd),l.rows.push({wallet:t,balance:s[n],raw:a,sell:c,decimals:o}),d.set(i,l)}});let p=[...d.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),m=e=>e===0?`Main`:`#${e}`,h=e=>e.balance>=k_,g=e=>e.rows.filter(h);if(q(`
    <h1>Sell all coins</h1>
    ${p.length?`<h2>Selling ${e===100?`everything`:`${e}% of each`} · <span id="picked"></span></h2>
           <p class="muted">Every coin is checked. Untick any you want to keep.</p>
           <ul class="list coins">${p.map((e,t)=>{let n=e.rows.filter(e=>!h(e));return`<li><input type="checkbox" class="coinbox" data-i="${t}" ${g(e).length?`checked`:`disabled`}>${Pn(e.label,e.logo)}<div class="grow"><b>${Q(e.label)}</b><small>from ${g(e).map(e=>m(e.wallet.index)).join(`, `)||`no wallet`}${n.length?`</small><small class="error">${n.map(e=>m(e.wallet.index)).join(`, `)}: not enough SOL for the fee, skipped`:``}</small></div><div class="right">${e.usd===null?``:Og(e.usd)}</div></li>`}).join(``)}</ul>
           ${f?`<p class="muted">${f} junk coin${f===1?``:`s`} left alone: worthless ads strangers send to wallets.</p>`:``}
           ${e===100?`<p class="muted">Afterwards each wallet closes its empty coin accounts and gets their ~0.002 SOL deposits back.</p>`:``}
           ${t?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold coins keep ${U(ng)} SOL to sell them later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Sales go through one at a time, so prices can move along the way.</p>
           <button id="go" class="primary">Enter PIN and sell everything</button>`:`<p class="warning">${n?`Those wallets don't hold any coins.`:`Your wallets don't hold any coins to sell.`}</p>`}
    <button id="cancel">Cancel</button>`),Fn(),Y(`cancel`,X),!p.length)return;let _=Array.from(document.querySelectorAll(`.coinbox`)),v=()=>_.filter(e=>e.checked).map(e=>p[Number(e.dataset.i)]),y=()=>{let e=v().length;J(`picked`).textContent=`${e} coin${e===1?``:`s`}`,J(`go`).disabled=e===0};_.forEach(e=>e.addEventListener(`change`,y)),y(),Y(`go`,()=>{let n=v().map(e=>({...e,rows:g(e)}));n.length&&zm(`Enter your PIN to sell everything`,r=>J_(r,i,n,e,t))})}async function J_(e,t,n,r,i){let a=[...new Map(n.flatMap(e=>e.rows.map(e=>[e.wallet.index,e.wallet]))).values()].sort((e,t)=>e.index-t.index),o=qm(e,Math.max(...a.map(e=>e.index))+1),s=e=>e===0?`Main`:`#${e}`,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;q(`
    <h1>Selling everything…</h1>
    ${Rt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${n.map((e,t)=>`<h2>${Q(e.label)}</h2><ul class="list">${e.rows.map(e=>`<li><span>${s(e.wallet.index)}</span><code id="status-${t}-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>`).join(``)}
    <div id="cleanup"></div>
    <div id="after"></div>`),pm();let l=0,u=0,d=0,f=0,p=new Map(n.map(e=>[e.mint,{jupiter:null}])),m=r===100||i;m&&(J(`cleanup`).innerHTML=`<h2>Cleaning up</h2><ul class="list">${a.map(e=>`<li><span>${s(e.index)}</span><code id="clean-${e.index}">waiting</code></li>`).join(``)}</ul>`),await __(a,Sg,async e=>{let a=o[e.index],s=n.flatMap((t,n)=>t.rows.filter(t=>t.wallet.index===e.index).map(e=>({coin:t,ci:n,row:e})));for(let[e,{coin:t,ci:n,row:i}]of s.entries()){let o=(e,t)=>J(`status-${n}-${e}`).innerHTML=t;u++;let s=e===0?Cg(a.address):void 0;await K_(i,t.mint,a,r,p.get(t.mint),o,c,s)&&l++}if(!m)return;let h=J(`clean-${e.index}`),g=i&&e.index!==0;try{let n=0,i=[],o=new Set(s.map(e=>e.coin.mint));for(let t=0;t<5&&([[n],i]=await Promise.all([cd([e.address]),Pd(e.address)]),!(r!==100||i.every(e=>!o.has(e.mint)||e.raw===0n)));t++)await new Promise(e=>setTimeout(e,500));let l=y_(n,i,g);if(!l){h.textContent=`nothing to do`;return}h.textContent=g?`sending to main…`:`getting deposits back…`;let u=await b_(a,t,l);d+=l.send,f+=l.refund,h.innerHTML=`${l.send?`sent ${U(l.send)} SOL to main`:`got back ${U(l.refund)} SOL in deposits`} · ${c(u,`view`)}`}catch(e){h.innerHTML=`<span class="error">✗ ${Q(Z(e))}</span>`}}),zf([t.address,...a.map(e=>e.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),Xt(l?`success`:`error`),l&&await An(`PRINTED`),J(`after`).innerHTML=`<p><b>Done: ${l} of ${u} sales went through.</b>${f?` Got back ${U(f)} SOL in deposits.`:``}${d?` Sent ${U(d)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,X_(),Y(`holdings`,()=>Xg().catch($)),Y(`home`,X)}async function Y_(e,t,n,r,i,a,o){for(let s=0;;s++){let{slippage:c,share:l}=gs[s],u;try{u=await r(c,l)}catch(e){throw Error(`${n} · ${Z(e)}`)}try{return await Bd(await xg(u,i,a(c),s===0?o:void 0))}catch(r){if(/custom program error: 0x17af\b/.test(Z(r)))throw Error(`Nothing was spent. This coin is priced in another coin (like PUMP) instead of SOL, and pump.fun's SOL route can't buy or sell it. Jupiter couldn't either (${n??`no route`}). Try again later, once Jupiter lists it, or trade it on pump.fun itself.`);let i=gs[s+1];if(!(r instanceof zd&&r.slippage&&i))throw r;t(e,`price jumped, trying again with ${i.slippage}% room…`)}}}function X_(){document.querySelectorAll(`.tx:not([data-bound])`).forEach(e=>{e.dataset.bound=`1`,e.addEventListener(`click`,t=>{t.preventDefault(),Qt(Kd(e.dataset.sig))})})}function Q(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var Z_=4;function Q_(e){return e.index===0?`Main`:`#${e.index}`}function $_(e,t){let n=Math.min(t,20),[r,i=``]=e.toFixed(n).split(`.`);return BigInt(r+i)*10n**BigInt(t-n)}function ev(e,t){q(`
    <h1>${Q(e)}</h1>
    <p class="warning">${t}</p>
    <button id="home" class="primary">Back to my wallets</button>`),Y(`home`,X)}async function tv(e,t){K(`send:${JSON.stringify(e)}`,()=>tv(e,t));let n=await Qm();if(!n)return X();let[r]=n,i;if(/^\d+$/.test(e.to)){let t=n[Number(e.to)];if(!t)return ev(`No such wallet`,`You don't have #${Q(e.to)}. Your wallets go from main to #${n.length-1}.`);i={address:t.address,label:Q_(t),mine:t}}else{let t=n.find(t=>t.address===e.to);if(t)i={address:t.address,label:Q_(t),mine:t};else{if(!C_(e.to)||!_d(e.to))return ev(`Not a wallet address`,`That address can't receive SOL or coins: it isn't a normal wallet. Nothing was sent.`);Cm(`Checking the address…`);let t=await wd(e.to);if(t&&t.owner!==`11111111111111111111111111111111`)return ev(`Not a wallet address`,`That address belongs to a coin or a program, not a person's wallet. Anything sent there would be lost, so nothing was sent.`);i={address:e.to,label:ym(e.to),mine:null}}}let a=e.what===`sol`?`sol`:e.what===`*`?`all`:`coin`,o=[],s=n.filter(t=>t!==i.mine&&(!e.only||e.only.includes(t.index))&&!(e.side&&t.index===0));if(e.only){let t=e.only.filter(e=>e>=n.length);t.length&&o.push(`You don't have ${t.map(e=>`#${e}`).join(`, `)}.`)}else a===`sol`&&e.amount!==null&&i.mine?.index!==0&&!e.side&&(s=[r]);if(!s.length)return ev(`Nothing to send from`,`There's no other wallet to send from.`);let c=t;if(a===`coin`&&!c){Cm(C_(e.what)?`Finding the coin in your wallets…`:`Looking for ${Q(e.what)} in your wallets…`);let t=await E_(e.what,n);if(!t.length)return ev(`Coin not found`,`None of your wallets hold a coin called <b>${Q(e.what)}</b>. Check the name in <b>holdings</b>, or use the coin's address.`);if(t.length>1)return q(`
        <h1>Which ${Q(e.what)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${t.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${ym(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(n=>n.addEventListener(`click`,()=>tv(e,t[Number(n.dataset.i)]).catch($))),Y(`home`,X);c=t[0]}Cm(`Checking what each wallet holds…`);let[l,[u]]=await Promise.all([Uf(s.map(e=>e.address)),cd([i.address])]),d=l.map(e=>e.lamports),f=l.map(e=>e.accounts),p=a===`all`?await Promise.all(l.map(e=>Kf(e))):[],m=new Map;p.flat().forEach(e=>m.set(e.mint,e));let h=new Set([...m.values()].filter(Ag).map(e=>e.mint)),g=e=>f[e].some(e=>e.raw>0n&&!h.has(e.mint)),_=s.map((e,t)=>({wallet:e,balance:d[t],coins:[],sol:0,allSol:!1,skipped:[]}));if(a!==`sol`){if(_.forEach((t,n)=>{for(let r of f[n]){if(r.raw===0n||h.has(r.mint)||c&&r.mint!==c.mint)continue;let n=m.get(r.mint),i=e.pct?r.raw*BigInt(Math.round(e.pct*100))/10000n:r.raw;i>0n&&t.coins.push({account:r,amount:i,label:c?.label??(n?kg(n):ym(r.mint)),opens:0})}}),a===`coin`&&e.amount!==null){let t=_.flatMap(e=>e.coins.map(t=>({r:e,c:t}))).sort((e,t)=>t.c.account.raw>e.c.account.raw?1:-1),n=t[0]?.c.account.decimals??0,r=$_(e.amount,n),i=t.reduce((e,t)=>e+t.c.account.raw,0n);if(r>i)return ev(`Not enough coins`,`${e.only?`Those wallets`:`Your wallets`} hold ${T_(i,n)} ${Q(c.label)}, less than the ${Dg(e.amount)} you asked to send. Nothing was sent.`);for(let{r:e,c:n}of t)n.amount=r<n.account.raw?r:n.account.raw,r-=n.amount,n.amount===0n&&(e.coins=e.coins.filter(e=>e!==n))}let t=new Map;for(let e of _)for(let n of e.coins)t.set(n.account.mint,bd(i.address,n.account.mint,n.account.program));let n=[...t.keys()],r=n.length?await cd(n.map(e=>t.get(e))):[],o=new Set(n.filter((e,t)=>r[t]>0));for(let e of _){for(let t of e.coins)o.has(t.account.mint)||(t.opens=t.account.lamports,o.add(t.account.mint));let t=Math.ceil(e.coins.length/Z_),n=e.coins.slice(0,Z_).reduce((e,t)=>e+t.opens,0);e.coins.length&&e.balance<n+t*5e3&&(e.skipped.push(`not enough SOL to move its coins (needs about ${U(n+t*Nu)} SOL to open the coin's account at ${Q(i.label)}, has ${U(e.balance)})`),e.coins=[])}}let v=e=>{let t=Math.ceil(e.coins.length/Z_),n=e.coins.reduce((e,t)=>e+(t.amount===t.account.raw?t.account.lamports:0),0);return e.balance-t*Nu-e.coins.reduce((e,t)=>e+t.opens,0)+n};if(a===`sol`||a===`all`){if(_.forEach((t,n)=>{let r=(a===`sol`||t.skipped.length>0)&&g(n),i=r?ng:0,o=v(t)-Nu-i;if(o<=0){a===`sol`&&r&&t.balance>5e3&&t.skipped.push(`keeps its ${U(t.balance)} SOL: it holds coins and needs ${U(ng)} SOL to sell them`);return}let s=e.pct?Math.floor(o*e.pct/100):o;e.pct&&v(t)-5e3-s<Math.max(890880,i)&&(s=v(t)-Nu-Math.max(Pu,i)),s>=5e4&&(t.sol=s),t.allSol=!e.pct&&e.amount===null}),a===`sol`&&e.amount!==null){let t=Math.round(e.amount*H),n=[..._].sort((e,t)=>t.sol-e.sol),r=n.reduce((e,t)=>e+t.sol,0);if(t>r)return ev(`Not enough SOL`,`${s.length===1?Q_(s[0]):`Those wallets`} can send at most ${U(r)} SOL after fees${_.some((e,t)=>g(t))?` (wallets holding coins keep ${U(ng)} SOL to sell them)`:``}. Nothing was sent.`);for(let e of n){let n=Math.min(t,e.sol),r=e.balance-Nu-n;n>0&&r>0&&r<890880&&(n=Math.max(0,e.balance-Nu-Pu)),e.sol=n,t-=n}if(t>0)return ev(`Can't send that exact amount`,`Solana makes a wallet keep at least ${U(Pu)} SOL or nothing at all, so that amount doesn't fit. Try a slightly smaller amount, or "all". Nothing was sent.`)}let t=u;for(let e of[..._].sort((e,t)=>t.sol-e.sol))e.sol&&(t+e.sol<890880?(e.skipped.push(`its ${U(e.sol)} SOL is too little to start an empty wallet (Solana needs ${U(Pu)} SOL)`),e.sol=0):t+=e.sol)}let y=_.filter(e=>e.coins.length||e.sol),b=_.filter(e=>e.coins.length||e.sol||e.skipped.length),x=y.reduce((e,t)=>e+t.sol,0),S=y.reduce((e,t)=>e+t.coins.reduce((e,t)=>e+t.opens,0),0),C=a===`sol`?e.amount===null?e.pct?`Send ${e.pct}% of the SOL`:`Send all the SOL`:`Send ${Dg(e.amount)} SOL`:a===`all`?`Send everything`:`Send ${e.amount===null?e.pct?`${e.pct}% of `:`all `:Dg(e.amount)+` `}${Q(c.label)}`,w=e=>{let t=e.coins.slice(0,3).map(e=>`${T_(e.amount,e.account.decimals)} ${Q(e.label)}`);return e.coins.length>3&&t.push(`${e.coins.length-3} more coin${e.coins.length===4?``:`s`}`),t.join(`<br>`)},T=a===`all`?_.reduce((e,t,n)=>e+f[n].filter(e=>e.raw>0n&&h.has(e.mint)).length,0):0;q(`
    <h1>${C}</h1>
    <div class="card"><div class="label">To ${Q(i.label)}${i.mine?.name?` · ${Q(i.mine.name)}`:``}</div><div class="address" id="dest"></div></div>
    ${i.mine?``:`<p class="warning">This isn't one of your wallets. Check every letter of the address: sends can't be undone.</p>`}
    ${b.length?`<ul class="list">${b.map(e=>`<li><span>${Q_(e.wallet)}</span><code>${[w(e),e.sol?`${U(e.sol)} SOL`:``].filter(Boolean).join(`<br>`)||`nothing`}${e.skipped.length?`<br><small class="error">${e.skipped.join(`<br>`)}</small>`:``}</code></li>`).join(``)}</ul>`:``}
    ${y.length&&x?`<p><b>SOL to ${Q(i.label)}: ${U(x)}</b></p>`:``}
    ${o.length?`<p class="muted">${o.join(` `)}</p>`:``}
    ${S?`<p class="muted">${Q(i.label)} doesn't have an account for some of these coins yet. Opening one costs about 0.002 SOL each (${U(S)} SOL in all), paid by the sending wallet. Emptied coin accounts are closed, so senders get their own deposits back.</p>`:``}
    ${a===`sol`&&e.amount===null?`<p class="muted">Wallets that still hold coins keep ${U(ng)} SOL so they can sell them later.</p>`:``}
    ${T?`<p class="muted">${T} junk coin${T===1?``:`s`} left behind: worthless ads strangers send to wallets.</p>`:``}
    ${y.length?`<button id="go" class="primary">Enter PIN and send</button>`:`<p class="warning">There's nothing to send${b.length?` (see above)`:e.only?` from those wallets`:``}.</p>`}
    <button id="cancel">Cancel</button>`),J(`dest`).textContent=i.address,Y(`cancel`,X),y.length&&Y(`go`,()=>zm(`Enter your PIN to send`,e=>nv(e,i,y,h,u).catch($)))}async function nv(e,t,n,r,i){let a=qm(e,Math.max(...n.map(e=>e.wallet.index))+1);q(`
    <h1>Sending to ${Q(t.label)}…</h1>
    ${Rt()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${Q_(e.wallet)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),pm();let o=e=>J(`status-${e.wallet.index}`),s=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,c=async e=>{let t=await Bd(e),n=await Ud(t);if(n!==`confirmed`)throw Error(`${n===`failed`?`failed`:`is taking long`} (${t})`);return t},l=0,u=0,d=async e=>{let n=a[e.wallet.index],i=[],d=!0;try{for(let r=0;r<e.coins.length;r+=Z_){let a=e.coins.slice(r,r+Z_);o(e).innerHTML=[...i,`sending ${a.map(e=>Q(e.label)).join(`, `)}…`].join(`<br>`);let l=a.flatMap(e=>{let r=bd(t.address,e.account.mint,e.account.program);return[Sd(n.address,r,t.address,e.account.mint,e.account.program),Cd(e.account,r,n.address,e.amount),...e.amount===e.account.raw?[hd(e.account,n.address,n.address)]:[]]}),u=await c(fd(n,l,await Id()));i.push(`✓ ${a.map(e=>`${T_(e.amount,e.account.decimals)} ${Q(e.label)}`).join(`, `)} · ${s(u)}`)}if(e.sol){o(e).innerHTML=[...i,`sending SOL…`].join(`<br>`);let a,l=e.sol,[[d,f],p]=await Promise.all([cd([n.address,t.address]),Pd(n.address)]);if(e.allSol){let e=y_(d,p,!0,r);if(!e||!e.send)throw Error(`no SOL left to send`);if(f+e.send<890880)throw Error(`${U(e.send)} SOL is too little to start an empty wallet`);l=e.send,a=await b_(n,t,e)}else{if(d<l+5e3)throw Error(`only ${U(d)} SOL there now`);a=await c(fd(n,[md(n.address,t.address,l)],await Id()))}u+=l,i.push(`✓ ${U(l)} SOL · ${s(a)}`)}}catch(e){d=!1,i.push(`<span class="error">✗ ${Q(Z(e))}</span>`)}o(e).innerHTML=i.join(`<br>`),X_(),d&&l++},f=[...n].filter(e=>e.sol).sort((e,t)=>t.sol-e.sol)[0],p=n.filter(e=>e.coins.some(e=>e.opens>0)||e===f&&i<890880);await __(p,Sg,d),await __(n.filter(e=>!p.includes(e)),Sg,d),zf([t.address,...n.map(e=>e.wallet.address)]).catch(()=>{}),a.forEach(e=>e.secret.fill(0)),Xt(l?`success`:`error`),l&&await An(`SENT`),J(`after`).innerHTML=`<p><b>Done: ${l} of ${n.length} wallet${n.length===1?``:`s`} sent.</b>${u?` ${U(u)} SOL went to ${Q(t.label)}.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,X_(),Y(`holdings`,()=>Xg().catch($)),Y(`home`,X)}function rv(){K(`remove`,rv),q(`
    <h1>Remove wallets from this phone?</h1>
    <p class="warning">If you haven't written down your 12 words, any money in these wallets will be lost forever.</p>
    <p>Type <b>REMOVE</b> to confirm.</p>
    <input id="confirm" autocapitalize="characters" autocomplete="off">
    <p id="error" class="error" hidden></p>
    <button id="yes" class="danger">Remove</button>
    <button id="no" class="primary">Keep my wallets</button>`),Y(`no`,X),Y(`yes`,async()=>{if(J(`confirm`).value.trim()!==`REMOVE`)return bm(`Type REMOVE to confirm.`);await Lp(jp),await P.remove(Mp),await Lp(Np),await P.remove(Rp),$m(),Bm=[],Tm()})}function $(e){console.error(e);let t=e instanceof Error?e.message:String(e);q(`
    <h1>Something went wrong</h1>
    <p>Please send a screenshot of this screen to the bot's owner.</p>
    <pre class="details"></pre>
    <button id="retry" class="primary">Start over</button>`),document.querySelector(`.details`).textContent=`${t}\nTelegram ${N?.version??`?`} on ${N?.platform??`?`}`,Y(`retry`,()=>Tm().catch($))}window.addEventListener(`unhandledrejection`,e=>$(e.reason)),window.addEventListener(`error`,e=>$(e.error??e.message));var iv=`showUsd`,av=!1,ov=null,sv=new Map,cv=(e,t,n=``)=>`<span class="coinamt" data-mint="${e}" data-amt="${t}">${Dg(t)}${n}</span>`;function lv(e,t){t>0&&sv.get(e)!==t&&(sv.set(e,t),av&&mv())}var uv=/(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?\s?SOL\b(?: · \$[\d,]+(?:\.\d+)?)?/g,dv=`button, input, textarea, a, .keypad, .amountbox, .solamt, .coinamt, .pnl, script, style`,fv=e=>e<.01&&e>0?`$${e.toFixed(4)}`:Og(e);function pv(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];for(let e=t.nextNode();e;e=t.nextNode()){let t=e;t.data.includes(`SOL`)&&!t.parentElement?.closest(dv)&&n.push(t)}for(let e of n){let t=e.data,n=[],r=0;for(let e of t.matchAll(uv)){let i=t[e.index-1];if(i&&/[\w$.]/.test(i))continue;n.push(t.slice(r,e.index));let a=document.createElement(`span`);a.className=`solamt`,a.dataset.sol=(e[1]+(e[2]??``)).replace(/,/g,``),a.dataset.orig=e[0],a.textContent=e[0],n.push(a),r=e.index+e[0].length}n.length&&(n.push(t.slice(r)),e.replaceWith(...n))}}function mv(){pv(rm),document.querySelectorAll(`.solamt`).forEach(e=>{let t=Number(e.dataset.sol);e.dataset.orig??=`${U(t*H)} SOL`;let n=av&&ov?fv(t*ov):e.dataset.shown===`usd`?e.dataset.orig:null;n!==null&&e.textContent!==n&&(e.textContent=n),e.dataset.shown=av&&ov?`usd`:`sol`,e.classList.toggle(`usd`,av&&!!ov)}),document.querySelectorAll(`.coinamt`).forEach(e=>{let t=sv.get(e.dataset.mint),n=av&&!!t;e.dataset.orig??=e.textContent??``;let r=n?fv(Number(e.dataset.amt)*t):e.dataset.shown===`usd`?e.dataset.orig:null;r!==null&&e.textContent!==r&&(e.textContent=r),e.dataset.shown=n?`usd`:`coin`,e.classList.toggle(`usd`,n)})}function hv(e){e&&e!==ov&&(ov=e,av&&mv())}async function gv(){G&&hv(await cm(!0)??(await ls(G,[`So11111111111111111111111111111111111111112`],!0)).get(`So11111111111111111111111111111111111111112`)??null)}function _v(){let e=!1;new MutationObserver(()=>{e||(e=!0,queueMicrotask(()=>{e=!1,mv()}))}).observe(rm,{childList:!0,subtree:!0,characterData:!0}),rm.addEventListener(`click`,async e=>{let t=e.target.closest?.(`.solamt, .coinamt`);if(t){if(e.preventDefault(),e.stopPropagation(),ov||await gv().catch(()=>{}),!(t.classList.contains(`coinamt`)?sv.has(t.dataset.mint):ov)&&!av)return Xt(`error`);F(),av=!av,mv(),P.set(iv,av?`1`:``).catch(()=>{})}},!0),Wt()&&(P.get(iv).then(async e=>{e===`1`&&(av=!0,await gv(),mv())}).catch(()=>{}),setInterval(()=>{av&&!document.hidden&&gv().catch(()=>{})},6e4))}qp||(_v(),Tm().catch($));