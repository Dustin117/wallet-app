var e=1024,t=2157,n={base:0,plate:2157,coins:4314,mask:{y:4486,w:512,h:1079}},r=[{sx:0,w:70,h:100,x:440,y:1095},{sx:70,w:48,h:144,x:465,y:1264},{sx:118,w:104,h:172,x:297,y:1401},{sx:222,w:46,h:150,x:388,y:1463},{sx:268,w:82,h:144,x:565,y:1462},{sx:350,w:86,h:150,x:492,y:1568},{sx:436,w:60,h:96,x:613,y:1384},{sx:496,w:66,h:116,x:335,y:1692}],i=[0,240,255],a=[255,43,214],o=[57,255,136],s=[255,59,107],c=[255,184,0],l=[i,a,o,s],u=(e,t=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${t})`;function d(e){let t=(e%4+4)%4,n=Math.floor(t),r=t-n,i=l[n],a=l[(n+1)%4];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}var f=`01$#%&@*+=<>?/\\|{}[];:~^`,p=e=>`700 ${e}px ui-monospace, Menlo, Consolas, "DejaVu Sans Mono", monospace`,m=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296},h=(e,t=0)=>{let n=Math.floor(e),r=e-n,i=r*r*(3-2*r),a=m(n+t*7919);return(a+(m(n+1+t*7919)-a)*i)*2-1},g=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),_=(e,t,n)=>{let r=g((n-e)/(t-e));return r*r*(3-2*r)},v=e=>1-(1-g(e))**3,y=e=>(e=g(e),e<.5?4*e*e*e:1-(-2*e+2)**3/2),b=(e,t)=>Object.assign(document.createElement(`canvas`),{width:e,height:t}),x={x:462,y:740,rx:222,ry:400},S={x:462,y:900,z:-30},C=175,w=58,T={x0:345,x1:624,y0:622,y1:834},E={x:362,y:664,w:246,h:142,r:18},D=2400,O={x:772,y:1445,rx:112,ry:142},k={x:762,y:1592},ee=70,te={x:838,y:1618},ne={x:727,y:1437,rx:32,ry:72},re=[{x:40,y:112,w:450,h:140},{x:30,y:252,w:218,h:400}],ie=13,ae={x:818,y:108,w:184,h:395},A=[[735,1310],[790,1316],[830,1333],[851,1325],[868,1343],[867,1386],[852,1421],[850,1500],[842,1550],[832,1588],[862,1600],[882,1640],[890,1750],[888,1850],[882,1930],[874,2012],[840,2033],[798,2022],[790,1942],[780,1904],[700,1908],[678,1882],[638,1862],[622,1800],[626,1650],[643,1603],[688,1583],[676,1550],[670,1480],[670,1400],[683,1348],[703,1322]],oe=r.map(e=>({...e,cx:e.x+e.w/2,cy:e.y+e.h/2,rx:(e.w-16)/2,ry:(e.h-16)/2})),se=[5,2,4,3,6,1,0,7],ce=.75,le={x:518,y:1010},j={x0:400,x1:614,y0:836,y1:1962,cw:13,ch:17},ue=Math.floor((j.x1-j.x0)/j.cw),de=Math.floor((j.y1-j.y0)/j.ch),fe={x:380,y:816,w:254,h:1166},pe=14,me=18,he=`01$#%&@*+=<>?/\\|{}[];:~^ABCDEFXYZ27`,ge=35,_e=.75,ve=Math.round(e*_e),ye=Math.round(t*_e),be=null,xe=!1,Se=0,Ce=null,we=[],Te=null,Ee=new Float32Array(ue*de),De=null,Oe=null,ke=null,Ae=[],je=[];function Me(){if(be||Date.now()<Se)return;let e=new Image;be=e,e.onerror=()=>{be===e&&(be=null),Se=Date.now()+2e3},e.onload=()=>{try{Pe(e),xe=!0}catch{be===e&&(be=null),Se=Date.now()+2e3}},e.src=`./hacker-2.webp`}var Ne=Me;function Pe(e){Ce=b(ve,ye);let t=Ce.getContext(`2d`,{willReadFrequently:!0});t.drawImage(e,0,n.mask.y,n.mask.w,n.mask.h,0,0,ve,ye);let r=t.getImageData(0,0,ve,ye),i=[{x0:ve,y0:ye,x1:0,y1:0},{x0:ve,y0:ye,x1:0,y1:0}],a=1250*_e;for(let e=0;e<ye;e++)for(let t=0;t<ve;t++){let n=(e*ve+t)*4,o=r.data[n];if(r.data[n+3]=o,r.data[n]=r.data[n+1]=r.data[n+2]=0,o>2){let n=i[e<a?0:1];t<n.x0&&(n.x0=t),e<n.y0&&(n.y0=e),t>n.x1&&(n.x1=t),e>n.y1&&(n.y1=e)}}t.putImageData(r,0,0),we=i.filter(e=>e.x1>e.x0).map(e=>({x:e.x0/_e-4,y:e.y0/_e-4,w:(e.x1-e.x0)/_e+8,h:(e.y1-e.y0)/_e+8}));for(let t of oe){let r=b(t.w,t.h),i=r.getContext(`2d`,{willReadFrequently:!0});i.drawImage(e,t.sx,n.coins,t.w,t.h,0,0,t.w,t.h);let a=i.getImageData(0,0,t.w,t.h),o=new Float32Array(t.w*t.h),s=new Float32Array(t.w*t.h);for(let e=0;e<t.h;e++)for(let n=0;n<t.w;n++){let r=(n-t.w/2)/(t.rx+4),i=(e-t.h/2)/(t.ry+4);o[e*t.w+n]=1-_(.88,1.08,Math.sqrt(r*r+i*i));let a=m(Math.floor(n/3)*131+Math.floor(e/3)*977+t.cx),c=m(Math.floor(n/7)*71+Math.floor(e/7)*313+t.cy);s[e*t.w+n]=g(.32*a+.18*c+.5*(e/t.h))}Ae.push({src:a,work:i.createImageData(t.w,t.h),a:o,n:s,cv:r,edge:b(t.w,t.h),p:0,drawnP:-1})}let s=[[436,836],[600,836],[600,1e3],[593,1300],[596,1600],[606,1800],[614,1962],[398,1962],[414,1800],[440,1600],[452,1300],[452,1e3]],c=fe,l=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});l.shadowColor=`#fff`,l.shadowBlur=18,l.shadowOffsetX=4e3,l.fillStyle=`#fff`,l.beginPath(),s.forEach(([e,t],n)=>n?l.lineTo(e-c.x-4e3,t-c.y):l.moveTo(e-c.x-4e3,t-c.y)),l.closePath(),l.fill();let d=l.getImageData(0,0,c.w,c.h);Te=b(c.w,c.h);let f=Te.getContext(`2d`),h=f.createImageData(c.w,c.h);for(let e=0;e<c.w*c.h;e++)h.data[e*4+3]=d.data[e*4+3]*.58;f.putImageData(h,0,0);let v=b(c.w,c.h).getContext(`2d`,{willReadFrequently:!0});v.drawImage(e,c.x,n.base+c.y,c.w,c.h,0,0,c.w,c.h);let y=v.getImageData(0,0,c.w,c.h).data,x=[];for(let e=0;e<ue;e++)for(let t=0;t<de;t++){let n=0,r=0;for(let i=0;i<j.ch;i+=2)for(let a=0;a<j.cw;a+=2)n+=y[((j.y0+t*j.ch+i-c.y)*c.w+(j.x0+e*j.cw+a-c.x))*4],r++;let i=Math.round(j.x0+e*j.cw+j.cw/2-c.x),a=Math.round(j.y0+t*j.ch+j.ch/2-c.y),o=n/r/255*(d.data[(a*c.w+i)*4+3]/255);Ee[e*de+t]=o,x.push(o)}x.sort((e,t)=>e-t);let S=x[Math.floor(x.length*.95)]||1;for(let e=0;e<Ee.length;e++)Ee[e]=g(Ee[e]/S)**.85;let C=e=>{let t=b(490,me),n=t.getContext(`2d`);n.font=p(15),n.textAlign=`center`,n.textBaseline=`middle`,n.shadowColor=e,n.shadowBlur=4,n.fillStyle=e;for(let e=0;e<ge;e++)n.fillText(he[e],e*pe+pe/2,10);return t};De=C(`rgb(235,255,245)`),Oe=C(u(o)),ke=C(`rgb(90,235,255)`);for(let e=0;e<3;e++){let t=b(180,390),n=t.getContext(`2d`),r=n.createImageData(180,390);for(let t=0;t<r.data.length;t+=4)r.data[t]=r.data[t+1]=r.data[t+2]=m(t+e*99991)*255,r.data[t+3]=255;n.putImageData(r,0,0),je.push(t)}}var M=0,Fe=-10,Ie=[],Le=oe.map(()=>-1),Re=0,ze=`RUN`;function Be(){Fe=M,ze=`RUN`,Ie=[],Le.fill(-1),Re=0;for(let e of Ae)e.drawnP=-1}function Ve(){Ie.push(M),Ie.length>12&&Ie.shift(),Re<se.length&&(Le[se[Re++]]=M)}var He=e=>Le[e]<0?0:g((M-Le[e])/ce),Ue=(e,t,n=0)=>{let r=0;for(let i of Ie)r+=Math.exp(-(((e-i-n)/t)**2));return r},We=e=>.17*h(e*.27,1)+.04*h(e*.71,2)+.014*h(e*1.3,3)+.006*h(e*4.1,4);function Ge(e){let t=We(e),n=Ue(e,.14,.05),r=.06+.05*h(e*.23,5)+.012*h(e*1.1,6)+.006*Math.sin(e*11)*Math.max(0,h(e*.31,7))+.025*n,i=.2*t+.02*h(e*.25,8)+.01*h(e*.9,9),a=Math.sin(2*Math.PI*e/3.4)+.25*h(e*.7,5),o=5*Math.sin(2*Math.PI*e/7.3+.6)+2*h(e*.5,6),s=-.9*We(e-.3)+.06*h(e*.2,10),c=.3*s+.012*h(e*1.6,7);return{yaw:t,pitch:r,roll:i,breath:a,sway:o,rLook:s,rTilt:c,rBob:4*Math.sin(e*2*Math.PI*.62)+5*Ue(e,.12,.12),rArm:.035*Math.sin(e*2*Math.PI*.31+1)+.02*h(e*1.2,8),cy:Math.cos(t),sy:Math.sin(t),cp:Math.cos(r),sp:Math.sin(r),cr:Math.cos(i),sr:Math.sin(i),cl:Math.cos(s),sl:Math.sin(s),ct:Math.cos(c),st:Math.sin(c)}}var Ke=(e,t)=>_(T.x0,T.x0+12,e)*(1-_(T.x1-12,T.x1,e))*_(T.y0,T.y0+12,t)*(1-_(T.y1-12,T.y1,t)),qe=(e,t,n,r,i,a,o)=>_(n-o,n+o,e)*(1-_(i-o,i+o,e))*_(r-o,r+o,t)*(1-_(a-o,a+o,t));function Je(e,n,r,i,a=!0){let o=e,s=n,c=0,l=(e-x.x)/x.rx,u=(n-x.y)/x.ry,d=Math.sqrt(l*l+u*u),f=a?1-_(.7,1,d):0;if(f>1e-4){let t=(e-(T.x0+T.x1)/2)/((T.x1-T.x0)/2),i=C*Math.sqrt(Math.max(0,1-d*d))+w*Ke(e,n)*(1+.4*(1-t*t)),a=e-S.x,l=n-S.y,u=i-S.z,p=a*r.cy+u*r.sy,m=-a*r.sy+u*r.cy,h=l*r.cp+m*r.sp,g=-l*r.sp+m*r.cp,_=p*r.cr-h*r.sr+S.x,v=p*r.sr+h*r.cr+S.y,y=g+S.z,b=D/(D-y),E=D/(D-i);o+=f*((_-x.x)*b-(e-x.x)*E),s+=f*((v-x.y)*b-(n-x.y)*E),c=f*y}let p=Math.max(a?1-_(.85,1.08,d):0,(1-_(600,660,e))*_(880,1020,n));if(p>1e-4){let i=(t-n)/t;s-=p*i*5.5*r.breath,o+=p*i*r.sway,o+=p*_(950,1300,n)*(1-_(1500,1900,n))*(e-330)*.004*r.breath}if(a&&e>600&&n>1280){let t=(e-O.x)/O.rx,i=(n-O.y)/O.ry,a=Math.sqrt(t*t+i*i),l=1-_(.86,1.1,a),u=Math.max(l,qe(e,n,628,1560,902,2035,22));if(u>1e-4){let t=e,i=n,d=0,f=qe(e,n,806,1600,898,2030,18)*(1-l);if(f>1e-4){let e=r.rArm*f*_(1600,1700,n),a=t-te.x,o=i-te.y;t=te.x+a*Math.cos(e)-o*Math.sin(e),i=te.y+a*Math.sin(e)+o*Math.cos(e)}if(l>1e-4){let e=ee*Math.sqrt(Math.max(0,1-a*a)),n=t-O.x;t+=l*(n*r.cl+e*r.sl-n),d=l*(-n*r.sl+e*r.cl);let o=t-k.x,s=i-k.y,c=l>=.999?r.ct:Math.cos(r.rTilt*l),u=l>=.999?r.st:Math.sin(r.rTilt*l);t=k.x+o*c-s*u,i=k.y+o*u+s*c}i+=r.rBob*(l>0?1:.4)*_(2040,1500,n)*u,o+=t-e,s+=i-n,c=Math.max(c,d)}}i[0]=o,i[1]=s,i[2]=c}function Ye(n,r,i){let a=r/2/n.s+8/n.s,o=i/2/n.s+8/n.s;return n.cx=g(n.cx,Math.min(a,e/2),Math.max(e-a,e/2)),n.cy=g(n.cy,Math.min(o,t/2),Math.max(t-o,t/2)),n}function Xe(n,r){let i=Math.max(n/e,r/t)*1.01,a=y((M-Fe-.8)/7),o=n/390;return Ye({s:i*(1+.45*a)*(1+.012*Ue(M,.1)),cx:512+36*a,cy:t/2+(925-t/2)*a,ox:(1.3*h(M*.8,11)+.45*h(M*3.1,12))*o,oy:(1.3*h(M*.7,13)+.45*h(M*2.9,14))*o,rot:.0025*h(M*.6,15)},n,r)}var Ze=[0,0,0];function Qe(n,r,i,a){let o=Math.max(n/e,r/t)*1.01,s=n*.68/E.w;Je(E.x+E.w/2,E.y+E.h/2,a,Ze);let c=Math.random()<.12?(Math.random()-.5)*4*(n/390):0;return Ye({s:o+(s-o)*i,cx:e/2+(Ze[0]-e/2)*i,cy:t/2+(Ze[1]+150-t/2)*i,ox:c,oy:0,rot:0},n,r)}var $e=null,et=!1;function tt(){if($e||et)return $e;try{let n=b(2,2),r=n.getContext(`webgl`,{alpha:!1,antialias:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!1})??n.getContext(`experimental-webgl`);if(!r)throw Error(`no WebGL`);let i=(e,t)=>{let n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(r.getShaderInfoLog(n)??`shader`);return n},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,`attribute vec3 aPos; attribute vec2 aUV; uniform vec2 uRes; varying vec2 vUV;
      void main(){ vUV=aUV; vec2 c=aPos.xy/uRes*2.0-1.0; gl_Position=vec4(c.x,-c.y,clamp(-aPos.z/3000.0,-0.99,0.99),1.0); }`)),r.attachShader(a,i(r.FRAGMENT_SHADER,`precision mediump float; varying vec2 vUV; uniform sampler2D uTex; uniform float uGain;
      void main(){ vec4 c=texture2D(uTex,vUV); gl_FragColor=vec4(c.rgb*uGain,c.a); }`)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`link`);let o=r.getAttribLocation(a,`aPos`),s=r.getAttribLocation(a,`aUV`),c=null;try{let n=r.createProgram();if(r.attachShader(n,i(r.VERTEX_SHADER,`attribute vec3 aPos; attribute vec2 aUV; uniform vec2 uRes; varying vec2 vUV; varying vec2 vCell;
        void main(){ vUV=aUV; vCell=(aUV*vec2(${e}.0,${t}.0)-vec2(${j.x0}.0,${j.y0}.0))/vec2(${j.cw}.0,${j.ch}.0);
          vec2 c=aPos.xy/uRes*2.0-1.0; gl_Position=vec4(c.x,-c.y,clamp(-aPos.z/3000.0,-0.99,0.99),1.0); }`)),r.attachShader(n,i(r.FRAGMENT_SHADER,`#ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif
        varying vec2 vUV; varying vec2 vCell; uniform sampler2D uCells; uniform sampler2D uGlyphs; uniform sampler2D uMask;
        uniform float uGain; uniform float uMaskOn;
        void main(){
          vec2 n=vec2(${ue}.0,${de}.0);
          if(vCell.x<0.0||vCell.y<0.0||vCell.x>=n.x||vCell.y>=n.y) discard;
          vec2 ci=floor(vCell);
          vec4 d=texture2D(uCells,(ci+0.5)/n);
          if(d.r<0.003) discard;
          vec2 f=(vCell-ci)*vec2(${j.cw}.0/${pe}.0,${j.ch}.0/${me}.0);
          vec4 g=texture2D(uGlyphs,vec2((floor(d.g*255.0+0.5)+f.x)/${ge}.0,(floor(d.b*255.0+0.5)+f.y)/3.0));
          float m=uMaskOn>0.5?texture2D(uMask,vUV).a:1.0;
          gl_FragColor=vec4(g.rgb*(g.a*d.r*m*uGain),0.0);
        }`)),r.bindAttribLocation(n,o,`aPos`),r.bindAttribLocation(n,s,`aUV`),r.linkProgram(n),!r.getProgramParameter(n,r.LINK_STATUS))throw Error(`link stream`);r.useProgram(n),r.uniform1i(r.getUniformLocation(n,`uCells`),1),r.uniform1i(r.getUniformLocation(n,`uGlyphs`),2),r.uniform1i(r.getUniformLocation(n,`uMask`),0);let a=e=>{let t=r.createTexture();return r.bindTexture(r.TEXTURE_2D,t),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),t},l=new Uint8Array(ue*de*4),u=a(r.NEAREST);r.texImage2D(r.TEXTURE_2D,0,r.RGBA,ue,de,0,r.RGBA,r.UNSIGNED_BYTE,l),c={prog:n,uRes:r.getUniformLocation(n,`uRes`),uGain:r.getUniformLocation(n,`uGain`),uMaskOn:r.getUniformLocation(n,`uMaskOn`),cells:u,glyphs:a(r.LINEAR),glyphsSent:!1,data:l},r.bindTexture(r.TEXTURE_2D,null)}catch{c=null}r.useProgram(a);let l=(e,t,n,i,a,o)=>{let s=(a+1)*(o+1),c=new Float32Array(s*2),l=new Float32Array(s*2),u=0;for(let r=0;r<=o;r++)for(let s=0;s<=a;s++,u++)c[u*2]=e+n*s/a,c[u*2+1]=t+i*r/o,l[u*2]=s/a,l[u*2+1]=r/o;let d=new Uint16Array(a*o*6);u=0;for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t,r=n+a+1;d.set([n,n+1,r,n+1,r+1,r],u),u+=6}let f={n:s,art:c,pos:new Float32Array(s*3),count:d.length,posBuf:r.createBuffer(),uvBuf:r.createBuffer(),idxBuf:r.createBuffer()};return r.bindBuffer(r.ARRAY_BUFFER,f.uvBuf),r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,f.posBuf),r.bufferData(r.ARRAY_BUFFER,f.pos.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,f.idxBuf),r.bufferData(r.ELEMENT_ARRAY_BUFFER,d,r.STATIC_DRAW),f},u=()=>{let e=r.createTexture();return r.bindTexture(r.TEXTURE_2D,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),e};$e={c:n,gl:r,aPos:o,aUV:s,uRes:r.getUniformLocation(a,`uRes`),uGain:r.getUniformLocation(a,`uGain`),pic:l(0,0,e,t,Math.round(e/8),Math.round(t/8)),glass:l(E.x,E.y,E.w,E.h,48,28),texPic:u(),texBack:u(),texHud:u(),prog:a,stream:c},n.addEventListener(`webglcontextlost`,()=>{$e=null,et=!0})}catch{$e=null,et=!0}return $e}function nt(e,t,n,r,i,a,o,s){let c=Math.cos(r.rot),l=Math.sin(r.rot);for(let e=0;e<t.n;e++){Je(t.art[e*2],t.art[e*2+1],n,Ze,s);let u=(Ze[0]-r.cx)*r.s,d=(Ze[1]-r.cy)*r.s;t.pos[e*3]=i/2+u*c-d*l+r.ox,t.pos[e*3+1]=a/2+u*l+d*c+r.oy,t.pos[e*3+2]=Ze[2]+o}e.gl.bindBuffer(e.gl.ARRAY_BUFFER,t.posBuf),e.gl.bufferSubData(e.gl.ARRAY_BUFFER,0,t.pos)}function rt(e,t,n){let r=e.gl;r.bindTexture(r.TEXTURE_2D,n),r.bindBuffer(r.ARRAY_BUFFER,t.posBuf),r.enableVertexAttribArray(e.aPos),r.vertexAttribPointer(e.aPos,3,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,t.uvBuf),r.enableVertexAttribArray(e.aUV),r.vertexAttribPointer(e.aUV,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.idxBuf),r.drawElements(r.TRIANGLES,t.count,r.UNSIGNED_SHORT,0)}var it=new WeakMap,at=(e,t,n,r=!1,i)=>{if(e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r),i)e.texSubImage2D(e.TEXTURE_2D,0,i.qx,i.qy,e.RGBA,e.UNSIGNED_BYTE,n);else{let r=`${n.width}x${n.height}`;it.get(t)===r?e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n):(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),it.set(t,r))}e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)},ot={},st=0,ct=()=>st=performance.now(),lt=e=>{let t=performance.now();ot[e]=(ot[e]||0)+t-st,st=t},ut=b(ve,ye),dt=ut.getContext(`2d`);function ft(e){A.forEach(([t,n],r)=>{let i=760+(t-760)*1.04,a=1670+(n-1670)*1.02;r?e.lineTo(i,a):e.moveTo(i,a)}),e.closePath()}function pt(e){oe.forEach((t,n)=>{let r=Ae[n],i=He(n);if(r.p=i,!(i>=1)){if(r.drawnP!==i){r.drawnP=i;let e=r.work.data,n=r.src.data,a=r.edge.getContext(`2d`),o=i>0?a.createImageData(t.w,t.h):null;for(let a=0;a<t.w*t.h;a++){let t=r.n[a];e[a*4]=n[a*4],e[a*4+1]=n[a*4+1],e[a*4+2]=n[a*4+2],e[a*4+3]=255*r.a[a]*(i<=0?1:_(i,i+.03,t*1.08)),o&&(o.data[a*4]=120,o.data[a*4+1]=255,o.data[a*4+2]=190,o.data[a*4+3]=255*Math.max(0,1-Math.abs(t*1.08-i-.025)/.05)*r.a[a])}r.cv.getContext(`2d`).putImageData(r.work,0,0),o?a.putImageData(o,0,0):a.clearRect(0,0,t.w,t.h)}e.drawImage(r.cv,t.x,t.y)}})}var mt=42;function ht(e,t){e.save(),e.globalCompositeOperation=`lighter`,oe.forEach((n,r)=>{let i=Ae[r],a=Le[r];if(!(a<0||t>a+ce+2.2)){i.p>0&&i.p<1&&(e.globalAlpha=1,e.drawImage(i.edge,n.x,n.y),e.globalAlpha=.45,e.drawImage(i.edge,n.x-2,n.y-2,n.w+4,n.h+4));for(let i=0;i<mt;i++){let o=m(r*7919+i*31+1),s=m(r*7919+i*31+2),c=m(r*7919+i*31+3),l=n.cx+(o-.5)*2*n.rx*.9,u=n.cy+(s-.5)*2*n.ry*.9,d=g(.5*s+.5*m(i*13+r)),f=240+c*260,p=1.1+c*.9,h=t-(a+d*ce);if(h<0||h>p)continue;let v=u-f*h,y=_(0,.6,h),b=l+(le.x-l)*.55*y+Math.sin(h*9+i)*4,x=g((p-h)*2)*_(840,930,v);if(!(x<=.02))for(let n=0;n<4;n++){let r=Math.floor(m(i*17+n*5+Math.floor((t+c)*12))*ge);e.globalAlpha=x*(n===0?1:.55*(1-n/4)),e.drawImage(n===0?De:Oe,r*pe,0,pe,me,b-pe/2,v+n*15-me/2,pe,me)}}}}),e.restore()}function gt(e,t,n=-1e9,r=1e9){e.save(),e.globalCompositeOperation=`lighter`;let i=de*j.ch,a=[];for(let o=0;o<ue;o++){let s=j.x0+o*j.cw;a.length=0;for(let e=0;e<3;e++){let n=150+m(o*101+e*7+5)*300,r=8+Math.floor(m(o*31+e*3)*18),s=i+r*j.ch;a.push({head:j.y1-(t*n+m(o*13+e)*s)%s,len:r})}for(let i=0;i<de;i++){let c=Ee[o*de+i];if(c<.015)continue;let l=j.y0+i*j.ch;if(l<n||l>r)continue;let u=0,d=!1;for(let e of a){let t=(l-e.head)/j.ch;t>=0&&t<e.len&&(u=Math.max(u,(1-t/e.len)**1.5),t<1&&(d=!0))}let f=.35+.65*c,p=c*.07+f*u*(.55+.45*m(o*3+1))+(d?.45*f:0);if(p<.03)continue;let h=d?14:2+m(o*7+i)*3,_=Math.floor(m(o*977+i*131+Math.floor(t*h+m(i*3+o)))*ge),v=d?De:l<1150+m(o*5+i)*500?Oe:ke;e.globalAlpha=g(p*1.15),e.drawImage(v,_*pe,0,pe,me,s,l,j.cw+1,j.ch+1)}}e.restore()}function _t(e,t){let n=e.data;n.fill(0);let r=de*j.ch,i=[0,0,0],a=[0,0,0];for(let e=0;e<ue;e++){for(let n=0;n<3;n++){let o=150+m(e*101+n*7+5)*300,s=8+Math.floor(m(e*31+n*3)*18),c=r+s*j.ch;i[n]=j.y1-(t*o+m(e*13+n)*c)%c,a[n]=s}for(let r=0;r<de;r++){let o=Ee[e*de+r];if(o<.015)continue;let s=j.y0+r*j.ch,c=0,l=!1;for(let e=0;e<3;e++){let t=(s-i[e])/j.ch;t>=0&&t<a[e]&&(c=Math.max(c,(1-t/a[e])**1.5),t<1&&(l=!0))}let u=.35+.65*o,d=o*.07+u*c*(.55+.45*m(e*3+1))+(l?.45*u:0);if(d<.03)continue;let f=l?14:2+m(e*7+r)*3,p=(r*ue+e)*4;n[p]=Math.round(g(d*1.15)*255),n[p+1]=Math.floor(m(e*977+r*131+Math.floor(t*f+m(r*3+e)))*ge),n[p+2]=l?0:s<1150+m(e*5+r)*500?1:2}}}function vt(e,t,n,r,i,a=1){let o=e.stream,s=e.gl;if(s.useProgram(o.prog),s.uniform2f(o.uRes,n,r),s.uniform1f(o.uGain,a),s.uniform1f(o.uMaskOn,+!!i),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,o.cells),i||(_t(o,t),s.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,de,s.RGBA,s.UNSIGNED_BYTE,o.data)),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,o.glyphs),!o.glyphsSent){let e=b(490,54),t=e.getContext(`2d`);[De,Oe,ke].forEach((e,n)=>t.drawImage(e,0,n*me)),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,e),o.glyphsSent=!0}s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,e.texPic),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE);let c=e.pic;s.bindBuffer(s.ARRAY_BUFFER,c.posBuf),s.enableVertexAttribArray(e.aPos),s.vertexAttribPointer(e.aPos,3,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,c.uvBuf),s.enableVertexAttribArray(e.aUV),s.vertexAttribPointer(e.aUV,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,c.idxBuf),s.drawElements(s.TRIANGLES,c.count,s.UNSIGNED_SHORT,0),s.useProgram(e.prog)}var yt=!1,bt=new Map;function xt(e){let t=Math.max(0,Math.floor(e.x*_e)),n=Math.max(0,Math.floor(e.y*_e)),r=Math.min(ve,Math.ceil((e.x+e.w)*_e))-t,i=Math.min(ye,Math.ceil((e.y+e.h)*_e))-n,a=`${t},${n},${r},${i}`,o=bt.get(a);return o||bt.set(a,o={qx:t,qy:n,c:b(Math.max(1,r),Math.max(1,i))}),o}var St={};function Ct(r){let i=St[r];if(!i){i=St[r]=b(ve,ye);let a=i.getContext(`2d`);a.setTransform(_e,0,0,_e,0,0),a.drawImage(be,0,r===`plate`?n.plate:n.base,e,t,0,0,e,t),a.drawImage(Te,fe.x,fe.y)}return i}var wt={};function Tt(r,i,l,f){let p=l===`front`,h=f?f.c:ut,_=f?f.c.getContext(`2d`):dt,y=f?-f.qx:0,b=f?-f.qy:0,x=()=>_.setTransform(_e,0,0,_e,y,b),S=f?f.qy/_e-j.ch:-1e9,C=f?(f.qy+f.c.height)/_e+j.ch:1e9;if(p&&!f){S=1e9,C=-1e9;for(let e of we)e.x<j.x1+j.cw&&e.x+e.w>j.x0&&(S=Math.min(S,e.y-j.ch),C=Math.max(C,e.y+e.h+j.ch))}if(x(),_.globalCompositeOperation=`source-over`,_.globalAlpha=1,_.save(),p){_.beginPath();for(let e of we)_.rect(e.x,e.y,e.w,e.h);_.clip()}_.setTransform(1,0,0,1,y,b),_.drawImage(Ct(l===`back`?`plate`:`base`),0,0),x(),pt(_);let w=re.map(e=>Math.floor(e.h/ie)),D=w[0]+w[1],O=D*.32+2.5,k=Math.min(D,(r+4)%O/.32),ee=0,te=null;_.fillStyle=`#000`,re.forEach((e,t)=>{for(let n=0;n<w[t];n++,ee++){let t=e.y+n*ie;if(ee+1<=k)continue;let r=ee<k?k-ee:0,i=e.w*r;_.fillRect(e.x+i,t,e.w-i,ie),r>0&&(te={x:e.x+i,y:t})}});let A=ae,oe=r*18%A.h;_.drawImage(be,A.x,n.base+A.y+oe,A.w,A.h-oe,A.x,A.y,A.w,A.h-oe),oe>.5&&_.drawImage(be,A.x,n.base+A.y,A.w,oe,A.x,A.y+A.h-oe,A.w,oe),_.globalCompositeOperation=`multiply`,_.fillStyle=`rgb(140,165,255)`,_.fillRect(0,0,e,t);let se=_.createRadialGradient(300,1450,80,300,1450,800);se.addColorStop(0,`rgba(215,150,255,1)`),se.addColorStop(1,`rgba(140,165,255,0)`),_.fillStyle=se,_.fillRect(0,600,650,1557);let ce=_.createLinearGradient(600,200,1e3,1950);f||(wt[l]=r);let le=wt[l]??r;for(let e=0;e<=8;e++)ce.addColorStop(e/8,u(d(le*.45+e*.7)));_.fillStyle=ce,_.beginPath(),_.moveTo(612,180),_.lineTo(1024,180),_.lineTo(1024,2040),_.lineTo(640,2040),_.lineTo(640,1290),_.lineTo(612,1e3),_.closePath(),ft(_),_.fill(`evenodd`);let ue=_.createLinearGradient(400,0,600,0);ue.addColorStop(0,`rgba(120,200,255,1)`),ue.addColorStop(.5,`rgba(225,255,255,1)`),ue.addColorStop(1,`rgba(120,200,255,1)`),_.fillStyle=ue,_.fillRect(400,830,200,1130),_.fillStyle=u(o),re.forEach(e=>_.fillRect(e.x-4,e.y-4,e.w+8,e.h+8)),_.fillStyle=u(a),_.fillRect(35,62,970,48),_.fillStyle=u(s),_.fillRect(A.x-6,A.y-6,A.w+12,A.h+12);let de=g(Ue(r,.25)),fe=[a[0]+(o[0]-a[0])*de,a[1]+(o[1]-a[1])*de,a[2]+(o[2]-a[2])*de];_.save(),_.translate((T.x0+T.x1)/2,(T.y0+T.y1)/2),_.scale(1,(T.y1-T.y0)/(T.x1-T.x0));let pe=_.createRadialGradient(0,0,90,0,0,175);pe.addColorStop(0,u(fe)),pe.addColorStop(1,u(fe,0)),_.fillStyle=pe,_.fillRect(-300,-300,600,600),_.restore(),_.fillStyle=`rgb(120,240,255)`,_.beginPath(),ft(_),_.fill();let me=_.createRadialGradient(ne.x,ne.y,8,ne.x,ne.y,70);me.addColorStop(0,u(c)),me.addColorStop(1,`rgba(120,240,255,1)`),_.fillStyle=me,_.fillRect(640,1340,150,160),_.globalCompositeOperation=`lighter`,_.globalAlpha=.55,_.setTransform(1,0,0,1,0,0),_.drawImage(h,0,0),x(),_.globalAlpha=1;let he=te;he&&Math.floor(r*3)%2==0&&(_.fillStyle=u(o,.9),_.fillRect(he.x+2,he.y+1,8,11)),C>S&&(l===`flat`||!yt)&&gt(_,r,S,C),ht(_,r),_.globalCompositeOperation=`source-over`;let ge=v((r-Fe-.35)/.3);if(ge>0){_.fillStyle=`rgba(3,6,8,${.8*ge})`,_.beginPath(),_.roundRect(E.x,E.y,E.w,E.h,E.r),_.fill(),_.globalCompositeOperation=`lighter`;let e=_.createRadialGradient(E.x+E.w/2,E.y+E.h/2,60,E.x+E.w/2,E.y+E.h/2,300);e.addColorStop(0,u(o,.22*ge)),e.addColorStop(1,u(o,0)),_.fillStyle=e,_.fillRect(E.x-260,E.y-240,E.w+520,E.h+520),_.strokeStyle=u(o,.3*ge),_.lineWidth=3,_.beginPath(),_.roundRect(E.x-1,E.y-1,E.w+2,E.h+2,E.r+1),_.stroke()}_.globalCompositeOperation=`lighter`;let ve=.5+.25*Math.sin(r*3.1)+.9*Ue(r,.1),ye=ne.x-i.rLook*30,xe=ne.y-6;_.save(),_.translate(ye,xe),_.scale(1,1.9);let Se=_.createRadialGradient(0,0,2,0,0,40);Se.addColorStop(0,u([255,250,220],g(.6*ve))),Se.addColorStop(.35,u(c,g(.45*ve))),Se.addColorStop(1,u(c,0)),_.fillStyle=Se,_.fillRect(-45,-45,90,90),_.restore();let Te=_.createRadialGradient(ye,xe,10,ye,xe,160);Te.addColorStop(0,u(c,.16*ve)),Te.addColorStop(1,u(c,0)),_.fillStyle=Te,_.fillRect(ye-170,xe-170,340,340),_.globalCompositeOperation=`source-over`;let Ee=Math.floor(r/3.3),De=(r-Ee*3.3-m(Ee+51)*2.6)/.16;if(De>0&&De<1){let e=Math.sin(Math.PI*De);_.fillStyle=`rgba(6,10,20,0.92)`,_.beginPath(),_.ellipse(ne.x,ne.y-ne.ry+ne.ry*e,ne.rx+6,ne.ry*e+2,0,0,Math.PI*2),_.fill()}_.restore(),p&&(_.setTransform(1,0,0,1,0,0),_.globalCompositeOperation=`destination-in`,_.drawImage(Ce,y,b),_.globalCompositeOperation=`source-over`),_.setTransform(1,0,0,1,0,0)}var Et=1024,Dt=592,Ot=b(Et,Dt),kt=Ot.getContext(`2d`),At=b(Et/2,Dt/2),jt=46,Mt=54,Nt=68,Pt=118,Ft=new WeakMap,It=e=>e.match(/^\[(ok|\*|!)\]/);function Lt(){let e=[];return document.querySelectorAll(`#loadTerm .tl`).forEach(t=>{let n=(t.firstChild?.textContent??``).replace(/\s+$/,``),r=Ft.get(t),i=n.startsWith(`[ok]`);r?r.text!==n&&(i&&!r.text.startsWith(`[ok]`)&&(r.okAt=M,Ve()),r.text=n,r.changed=M):(r={text:n,at:M,changed:M,okAt:-9},Ft.set(t,r),i&&(r.okAt=M,Ve())),e.push(r)}),e}var Rt=28;function zt(e){let t=[],n=e;for(;n.length>Rt;){let e=n.lastIndexOf(` `,Rt);e<Rt/2&&(e=Rt),t.push(n.slice(0,e)),n=`  `+n.slice(e).trimStart()}return t.push(n),t}function Bt(e,t,n,r,o,s,c=16){e.globalCompositeOperation=`lighter`,e.fillStyle=u(i,.22*s),e.fillText(t,n-2.5,r),e.fillStyle=u(a,.18*s),e.fillText(t,n+2.5,r+1),e.shadowColor=u(o,.85*s),e.shadowBlur=c,e.fillStyle=u(o,s),e.fillText(t,n,r),e.shadowBlur=0,e.fillStyle=`rgba(230,255,240,${.35*s})`,e.fillText(t,n,r),e.globalCompositeOperation=`source-over`}function Vt(e,t,n){e.globalCompositeOperation=`destination-in`;let r=e.createRadialGradient(Et/2,Dt/2,Dt*.3,Et/2,Dt/2,Et*.62);r.addColorStop(0,`rgba(0,0,0,1)`),r.addColorStop(.8,`rgba(0,0,0,0.75)`),r.addColorStop(1,`rgba(0,0,0,0.25)`),e.fillStyle=r,e.fillRect(0,0,Et,Dt),e.globalCompositeOperation=`source-over`,e.fillStyle=`rgba(0,0,0,0.33)`;for(let t=0;t<Dt;t+=5)e.fillRect(0,t,Et,2);e.globalCompositeOperation=`lighter`;let i=Et*(.3-n.yaw*2.2+.03*Math.sin(t*.7)),a=e.createLinearGradient(i-170,0,i+170,Dt*.4);a.addColorStop(0,`rgba(255,190,245,0)`),a.addColorStop(.5,`rgba(255,200,245,0.13)`),a.addColorStop(1,`rgba(255,190,245,0)`),e.fillStyle=a,e.beginPath(),e.moveTo(i-120,0),e.lineTo(i+40,0),e.lineTo(i-80,Dt),e.lineTo(i-240,Dt),e.closePath(),e.fill();let o=e.createLinearGradient(0,0,0,Dt*.32);o.addColorStop(0,`rgba(255,170,240,0.12)`),o.addColorStop(1,`rgba(255,170,240,0)`),e.fillStyle=o,e.fillRect(0,0,Et,Dt*.32);let s=e.createRadialGradient(Et*1.02,Dt*.6,10,Et*1.02,Dt*.6,Et*.32);s.addColorStop(0,u(d(t*.45+2),.16)),s.addColorStop(1,u(d(t*.45+2),0)),e.fillStyle=s,e.fillRect(0,0,Et,Dt),e.globalCompositeOperation=`destination-in`,e.fillStyle=`#000`,e.beginPath(),e.roundRect(4,4,1016,584,70),e.fill(),e.globalCompositeOperation=`source-over`}function Ht(e,t){let n=kt;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,n.shadowBlur=0,n.fillStyle=`#000`,n.fillRect(0,0,Et,Dt);let r=Lt(),i=(e-Fe-.35)/.35;if(i<=0)return;n.save();let l=Math.max(6,Dt*v(i));n.beginPath(),n.rect(0,(Dt-l)/2,Et,l),n.clip(),i<1&&(n.fillStyle=u(o,.5*(1-i)),n.fillRect(0,(Dt-l)/2,Et,l)),n.fillStyle=`rgba(20,255,140,0.028)`,n.fillRect(0,0,Et,Dt),n.fillStyle=`rgba(57,255,136,0.05)`;for(let e=32;e<Et;e+=48)n.fillRect(e,0,1.5,Dt);for(let e=30;e<Dt;e+=48)n.fillRect(0,e,Et,1.5);let d=r.find(e=>e.text.startsWith(`$`))?.text.match(/--([\w-]+)/)?.[1];d&&(ze=d.replace(/-/g,` `).toUpperCase()),n.font=p(28),n.textBaseline=`top`,Bt(n,`OBJECTIVE // ${ze}`.slice(0,34),jt,38,o,.75,8),Math.floor(e*2.2)%2==0&&(n.fillStyle=u(a,.95),n.shadowColor=u(a),n.shadowBlur=14,n.beginPath(),n.arc(860,52,10,0,Math.PI*2),n.fill(),n.shadowBlur=0),Bt(n,`LIVE`,880,38,a,.85,8),n.fillStyle=u(o,.35),n.fillRect(jt,84,932,2),n.save(),n.beginPath(),n.rect(0,112,Et,346),n.clip(),n.font=p(Mt),Rt=Math.max(16,Math.floor((932-Mt*.6)/n.measureText(`0`).width));let h=[];for(let e of r)zt(e.text).forEach((t,n)=>h.push({text:t,line:e,first:n===0}));let _=h.slice(-7);_.forEach((t,r)=>{let i=0;for(let t=r+1;t<_.length;t++)i+=v((e-_[t].line.at)/.22);let a=t.line,l=v((e-a.at)/.22),d=390-i*Nt+(1-l)*Nt*.6;if(d<50)return;let p=g((d-(Pt-Nt*.6))/(Nt*.8)),h=t.text;if(a.text.startsWith(`$`)&&t.first)h=h.slice(0,Math.floor((e-a.at)*26));else{let t=(e-a.changed)/.28;if(t<1){let n=Math.floor(e*30);h=[...h].map((e,r)=>e===` `||m(r*31+n*7)<t*1.4-r/h.length*.4?e:f[Math.floor(m(r+n*13)*24)]).join(``)}}let y=r===_.length-1,b=Math.exp(-(((e-a.okAt)/.12)**2)),x=(y||a===_[_.length-1].line?1:.62)*p*(.85+.15*l),S=t.first?It(h):null,C=jt;if(S){let e=S[1]===`ok`?o:S[1]===`!`?s:c;Bt(n,S[0],C,d,e,g(x+b),14+20*b),C+=n.measureText(S[0]).width,Bt(n,h.slice(S[0].length),C,d,S[1]===`!`?s:o,g(x+b*.6),14)}else Bt(n,h,C,d,o,x,14);b>.02&&(n.globalCompositeOperation=`lighter`,n.fillStyle=u(o,.18*b),n.fillRect(0,d-6,Et,Nt),n.globalCompositeOperation=`source-over`),y&&Math.floor(e*3.3)%2==0&&(n.fillStyle=u(o,.9*x),n.shadowColor=u(o),n.shadowBlur=12,n.fillRect(jt+n.measureText(h).width+6,d+5,Mt*.55,Mt*.86),n.shadowBlur=0)}),n.restore();let y=r.filter(e=>It(e.text)),b=y.filter(e=>!e.text.startsWith(`[*]`)).length,x=Math.max(1,y.length),S=732/x;for(let t=0;t<x;t++){let r=y[t],i=jt+t*S;if(n.fillStyle=u(o,.18),n.fillRect(i+3,510,S-7,18),!r)continue;let a=It(r.text)[1],l=a===`ok`?o:a===`!`?s:c,d=a===`*`?.25+.6*(1-Math.exp(-(e-r.at)/3))+.05*Math.sin(e*6+t):1;n.fillStyle=u(l,a===`*`?.8:.95),n.shadowColor=u(l),n.shadowBlur=12,n.fillRect(i+3,510,(S-7)*d,18),n.shadowBlur=0}y.length&&(n.font=p(34),Bt(n,`${b}/${y.length}`,828,500,o,.9,10)),n.restore(),Vt(n,e,t)}var Ut=null,Wt=null,Gt=null,Kt=null,qt=0,Jt=null;function Yt(e,t,n,r,i,a,o=!1){if(!Ut||Ut.width!==Math.ceil(n/4)||Ut.height!==Math.ceil(r/4)){Ut=b(Math.ceil(n/4),Math.ceil(r/4)),Wt=b(Math.ceil(n/12),Math.ceil(r/12)),Gt=b(n,r);let e=Gt.getContext(`2d`),t=Math.max(3,Math.round(n/270));e.fillStyle=`rgba(0,0,0,0.17)`;for(let i=0;i<r;i+=t)e.fillRect(0,i,n,t*.4);let i=e.createRadialGradient(n/2,r*.45,n*.35,n/2,r*.5,r*.72);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(1,`rgba(0,0,0,0.6)`),e.fillStyle=i,e.fillRect(0,0,n,r)}if(o&&!Kt){Kt=b(108,135);let e=Kt.getContext(`2d`),t=e.createRadialGradient(54,60.75,37.8,54,67.5,97.2);t.addColorStop(0,`rgba(0,0,0,0)`),t.addColorStop(1,`rgba(0,0,0,0.6)`),e.fillStyle=t,e.fillRect(0,0,108,135)}e.save(),e.setTransform(1,0,0,1,0,0);let s=Ut.getContext(`2d`),c=Wt.getContext(`2d`);if(s.imageSmoothingEnabled=c.imageSmoothingEnabled=!0,!o)s.drawImage(t,0,0,Ut.width,Ut.height),c.drawImage(Ut,0,0,Wt.width,Wt.height),e.globalCompositeOperation=`lighter`,e.globalAlpha=.24*i,e.drawImage(Ut,0,0,n,r),e.globalAlpha=.3*i,e.drawImage(Wt,0,0,n,r);else{if((!Jt||Jt.width!==Ut.width||Jt.height!==Ut.height)&&(Jt=b(Ut.width,Ut.height)),qt++%2==0){s.drawImage(t,0,0,Ut.width,Ut.height),c.drawImage(Ut,0,0,Wt.width,Wt.height);let e=Jt.getContext(`2d`);e.globalCompositeOperation=`copy`,e.globalAlpha=.24*i,e.drawImage(Ut,0,0),e.globalCompositeOperation=`lighter`,e.globalAlpha=.3*i,e.drawImage(Wt,0,0,Jt.width,Jt.height)}e.globalCompositeOperation=`lighter`,e.drawImage(Jt,0,0,n,r)}if(e.globalAlpha=1,e.globalCompositeOperation=`source-over`,a>0)for(let i=0;i<4+a*6;i++){let i=Math.random()*r,o=(4+Math.random()*36)*(n/390);e.drawImage(t,0,i,n,o,(Math.random()-.5)*80*(n/390)*a,i,n,o)}o?e.drawImage(Kt,0,0,n,r):e.drawImage(Gt,0,0),je.length&&!o&&(e.globalCompositeOperation=`overlay`,e.globalAlpha=.07,e.imageSmoothingEnabled=!1,e.drawImage(je[Math.floor(M*24)%je.length],0,0,n,r),e.imageSmoothingEnabled=!0),e.restore()}var Xt={back:!0,front:!0,hud:!0};function Zt(n,r,i,a,o,s,c=Xt){let l=M,u=tt();if(ct(),!s||c.hud){if(s){let e=c.hudHalf?At.getContext(`2d`):kt,t=c.hudHalf?.5:1;e.setTransform(t,0,0,t,0,0),e.globalCompositeOperation=`source-over`,e.globalAlpha=1,e.drawImage(s,0,0,Et,Dt),Vt(e,l,o),e.setTransform(1,0,0,1,0,0)}else Ht(l,o)}if(n&&(n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1),!u){if(!n)return;Tt(l,o,`flat`),n.fillStyle=`#000`,n.fillRect(0,0,r,i);let s=(e,t)=>[r/2+(e-a.cx)*a.s+a.ox,i/2+(t-a.cy)*a.s+a.oy],[c,u]=s(0,0);n.drawImage(ut,c,u,e*a.s,t*a.s);let[d,f]=s(E.x,E.y);n.globalCompositeOperation=`lighter`,n.drawImage(Ot,d,f,E.w*a.s,E.h*a.s),n.globalCompositeOperation=`source-over`;return}let d=u.gl;if(d.useProgram(u.prog),yt=!!u.stream,(u.c.width!==r||u.c.height!==i)&&(u.c.width=r,u.c.height=i),d.viewport(0,0,r,i),d.uniform2f(u.uRes,r,i),d.uniform1f(u.uGain,1),d.clearColor(0,0,0,1),d.depthMask(!0),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),d.disable(d.BLEND),lt(`hud`),c.back||!it.has(u.texBack))Tt(l,o,`back`),at(d,u.texBack,ut);else for(let e of c.backParts??[]){let t=xt(e);Tt(l,o,`back`,t),at(d,u.texBack,t.c,!1,t)}if(lt(`back`),d.disable(d.DEPTH_TEST),nt(u,u.pic,o,a,r,i,0,!1),rt(u,u.pic,u.texBack),u.stream&&(vt(u,l,r,i,!1),d.disable(d.BLEND)),lt(`gpu`),c.front||!it.has(u.texPic))Tt(l,o,`front`),at(d,u.texPic,ut,!0);else for(let e of c.frontParts??[]){let t=xt(e);Tt(l,o,`front`,t),at(d,u.texPic,t.c,!0,t)}lt(`front`),d.enable(d.DEPTH_TEST),d.depthFunc(d.LESS),d.enable(d.BLEND),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA),nt(u,u.pic,o,a,r,i,0,!0),rt(u,u.pic,u.texPic),u.stream&&(d.depthFunc(d.LEQUAL),d.depthMask(!1),vt(u,l,r,i,!0),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA),d.depthMask(!0)),c.hud&&at(d,u.texHud,s&&c.hudHalf?At:Ot),lt(`hud`),nt(u,u.glass,o,a,r,i,2,!0),d.depthFunc(d.LEQUAL),d.depthMask(!1),d.blendFunc(d.ONE,d.ONE),rt(u,u.glass,u.texHud),d.disable(d.BLEND),lt(`gpu`),n&&n.drawImage(u.c,0,0)}function Qt(e,t,n){let r=M-Fe;if(r>=.5)return;let i=v((r-.02)/.12),a=v((r-.14)/.3),o=Math.max(3*i,n*a);e.save(),e.fillStyle=`#000`,e.fillRect(0,0,t,(n-o)/2),e.fillRect(0,(n+o)/2,t,(n-o)/2+1),e.fillRect(0,0,t*(1-i)/2,n),e.fillRect(t-t*(1-i)/2,0,t*(1-i)/2+1,n),e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(220,255,240,${(1-a)*.9})`,e.fillRect(t*(1-i)/2,(n-o)/2,t*i,o),e.restore()}var $t=1;function en(e,t){M+=t,Me();let n=Math.min(2,window.devicePixelRatio||1)*$t,r=Math.max(2,Math.round((e.clientWidth||390)*n)),i=Math.max(2,Math.round((e.clientHeight||844)*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=e.getContext(`2d`);if(a.setTransform(1,0,0,1,0,0),!xe){a.fillStyle=`#02000a`,a.fillRect(0,0,r,i),Lt();return}let s=Ge(M);Zt(a,r,i,Xe(r,i),s);let c=m(Math.floor(M*6)+909)<.04?.5:0;for(let e of Ie)M-e>0&&M-e<.16&&(c=.8);Yt(a,e,r,i,1,c);let l=Ue(M,.12,.05);l>.01&&(a.globalCompositeOperation=`lighter`,a.fillStyle=u(o,g(.16*l)),a.fillRect(0,0,r,i),a.globalCompositeOperation=`source-over`),Qt(a,r,i)}var tn=0;function nn(e,t,n,r,i,a,o,s){if(M+=i,Me(),e.setTransform(1,0,0,1,0,0),!xe){e.fillStyle=`#04010c`,e.fillRect(0,0,n,r);return}let c=Ge(M),l=!!s?.lite,u=tn++,d=l?{back:u%3==0,front:u%2==0,hud:s.glassChanged!==!1||u%3==0}:Xt;Zt(e,n,r,Qe(n,r,a,c),c,o,d),Yt(e,t,n,r,.8,Math.random()<.15?.6:0,l)}function rn(e,t,n,r,i,a,o){if(M+=n,Me(),!xe)return null;let s=tt();if(!s)return null;let c=Ge(M),l=tn++,u=l%8,d=u===4,f=u===0;if(Zt(null,e,t,Qe(e,t,r,c),c,i,{back:f,front:d,hud:a||l%6==2,hudHalf:!0,backParts:f?[]:u%2==0?s.stream?[]:[an]:u===1?on:u===5?[sn]:[cn],frontParts:d?[]:u%2==0?s.stream?[]:fn():u===3||u===7?[cn]:u===1?pn():[]}),o&&!hn&&(o.bloom||o.slices?.length))try{gn(s,e,t,o),lt(`post`)}catch{hn=!0,s.gl.bindFramebuffer(s.gl.FRAMEBUFFER,null)}return s.c}var an={x:fe.x-4,y:fe.y-4,w:fe.w+8,h:fe.h+24},on=re.map(e=>({x:e.x-6,y:e.y-6,w:e.w+12,h:e.h+12})),sn={x:ae.x-8,y:ae.y-8,w:ae.w+16,h:ae.h+16},cn={x:ne.x-210,y:ne.y-190,w:420,h:380},ln=(e,t)=>{let n=Math.max(e.x,t.x),r=Math.max(e.y,t.y),i=Math.min(e.x+e.w,t.x+t.w),a=Math.min(e.y+e.h,t.y+t.h);return i>n&&a>r?{x:n,y:r,w:i-n,h:a-r}:null},un=null,dn=null,fn=()=>un??=we.map(e=>ln(e,an)).filter(e=>!!e),pn=()=>dn??=we.flatMap(e=>on.map(t=>ln(e,t))).filter(e=>!!e),mn=null,hn=!1;function gn(e,t,n,r){let i=e.gl,a=(e,t,n=i.RGBA)=>{let r=i.createTexture();return i.bindTexture(i.TEXTURE_2D,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,n,e,t,0,n,i.UNSIGNED_BYTE,null),r};if(!mn||mn.fw!==t||mn.fh!==n){if(mn){i.deleteTexture(mn.frame);for(let e of mn.levels)i.deleteTexture(e.tex),i.deleteFramebuffer(e.fb)}let e=[2,4,12].map(e=>[Math.max(2,Math.ceil(t/e)),Math.max(2,Math.ceil(n/e))]).map(([e,t])=>{let n=a(e,t),r=i.createFramebuffer();if(i.bindFramebuffer(i.FRAMEBUFFER,r),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,n,0),i.checkFramebufferStatus(i.FRAMEBUFFER)!==i.FRAMEBUFFER_COMPLETE)throw Error(`fb`);return{tex:n,fb:r,w:e,h:t}});i.bindFramebuffer(i.FRAMEBUFFER,null),mn={frame:a(t,n,i.RGB),fw:t,fh:n,levels:e,pos:mn?.pos??i.createBuffer(),uv:mn?.uv??i.createBuffer()}}let o=mn;i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindTexture(i.TEXTURE_2D,o.frame),i.copyTexSubImage2D(i.TEXTURE_2D,0,0,0,0,0,t,n),i.disable(i.DEPTH_TEST),i.depthMask(!1);let s=(t,n,r,a,s,c,l,u,d,f,p)=>{i.uniform2f(e.uRes,t,n),i.uniform1f(e.uGain,p),i.bindBuffer(i.ARRAY_BUFFER,o.pos),i.bufferData(i.ARRAY_BUFFER,new Float32Array([r,a,0,s,a,0,r,c,0,s,c,0]),i.STREAM_DRAW),i.enableVertexAttribArray(e.aPos),i.vertexAttribPointer(e.aPos,3,i.FLOAT,!1,0,0),i.bindBuffer(i.ARRAY_BUFFER,o.uv),i.bufferData(i.ARRAY_BUFFER,new Float32Array([l,u,d,u,l,f,d,f]),i.STREAM_DRAW),i.enableVertexAttribArray(e.aUV),i.vertexAttribPointer(e.aUV,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLE_STRIP,0,4)},c=(e,t,n)=>s(e,t,0,0,e,t,0,1,1,0,n);if(r.slices?.length){i.disable(i.BLEND),i.viewport(0,0,t,n);for(let e of r.slices){let r=e.y*n,i=Math.min(n,(e.y+e.h)*n),a=e.dx*t;s(t,n,a,r,t+a,i,0,1-r/n,1,1-i/n,1)}r.bloom&&i.copyTexSubImage2D(i.TEXTURE_2D,0,0,0,0,0,t,n)}if(r.bloom){i.disable(i.BLEND);let e=o.frame;for(let t of o.levels)i.bindFramebuffer(i.FRAMEBUFFER,t.fb),i.viewport(0,0,t.w,t.h),i.bindTexture(i.TEXTURE_2D,e),c(t.w,t.h,1),e=t.tex;i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,t,n),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE),i.bindTexture(i.TEXTURE_2D,o.levels[1].tex),c(t,n,.192),i.bindTexture(i.TEXTURE_2D,o.levels[2].tex),c(t,n,.24),i.disable(i.BLEND)}i.bindFramebuffer(i.FRAMEBUFFER,null),i.depthMask(!0)}var _n=()=>`<div class="hackloader" id="hackloader"><canvas class="hackart" id="hackart" aria-hidden="true"></canvas></div>`,vn=()=>(document.getElementById(`after`)?.childElementCount??0)>0,yn=!1,bn=0,xn=null;function Sn(){let e=document.getElementById(`hackart`);if(e&&e!==xn&&(xn=e,Be()),e&&en(e,0),yn)return;yn=!0,bn=0;let t=0,n=e=>{let r=document.getElementById(`hackart`);if(r&&vn()&&(document.getElementById(`hackloader`)?.remove(),document.getElementById(`app`)?.classList.remove(`loading`)),!r||vn())yn=!1;else{if(r!==xn&&(xn=r,Be()),(!bn||e-bn>=31)&&!document.body.classList.contains(`replaying`)){let n=bn?e-bn:33,i=Math.min(.1,n/1e3);bn=e,t=n>50&&xe?t+n:0,t>1500&&$t>.6&&($t=Math.max(.6,$t*.85),t=0),en(r,i)}requestAnimationFrame(n)}};requestAnimationFrame(n)}function Cn(e,t,n){if(!xe)return null;let r=Ge(M),i=Qe(e,t,n,r);return Je(E.x+E.w/2,E.y+E.h/2,r,Ze),{x:e/2+(Ze[0]-i.cx)*i.s,y:t/2+(Ze[1]-i.cy)*i.s,w:E.w*i.s}}var N=window.Telegram?.WebApp;function wn(){return!!N&&N.isVersionAtLeast(`9.0`)&&!!N.SecureStorage}var Tn=15e3;function En(e,t,n=Tn){return new Promise((r,i)=>{let a=setTimeout(()=>i(Error(`Telegram didn't respond (${e}).`)),n);try{t((t,n,o)=>{clearTimeout(a),t?i(Error(`${e} failed: ${t}`)):r({value:n,canRestore:!!o})})}catch(t){clearTimeout(a),i(Error(`${e} failed: ${t instanceof Error?t.message:String(t)}`))}})}var Dn={get:e=>En(`secure read`,t=>N.SecureStorage.getItem(e,t)),set:(e,t)=>En(`secure save`,n=>N.SecureStorage.setItem(e,t,n)),remove:e=>En(`secure remove`,t=>N.SecureStorage.removeItem(e,t)),restore:e=>En(`secure restore`,t=>N.SecureStorage.restoreItem(e,t))},On=5e3;async function kn(e,t){try{return await En(e,t,On)}catch(n){if(!(n instanceof Error)||!n.message.startsWith(`Telegram didn't respond`))throw n;return En(e,t,On*2)}}var P={get:async e=>(await kn(`device read`,t=>N.DeviceStorage.getItem(e,t))).value,set:(e,t)=>kn(`device save`,n=>N.DeviceStorage.setItem(e,t,n)),remove:e=>kn(`device remove`,t=>N.DeviceStorage.removeItem(e,t))};function An(e){N?.HapticFeedback?.notificationOccurred(e)}function F(){N?.HapticFeedback?.impactOccurred?.(`light`)}function jn(){N?.HapticFeedback?.impactOccurred?.(`heavy`)}function Mn(e){N?N.openLink(e):window.open(e,`_blank`)}var Nn=[57,255,136],Pn=[0,240,255],Fn=[255,43,214],In=(e,t=1)=>`rgba(${e[0]},${e[1]},${e[2]},${t})`,Ln=`SNATCHED`,Rn=`01$#%&@*+=<>?/\\|`,zn=e=>`900 ${e}px Orbitron, Rajdhani, sans-serif`,Bn=0,Vn=.85,Hn=1.25,Un=1.65,Wn=1.3,Gn=3,Kn={covered:.32,slam:.4,hacker:1.0333333333333332,final:4.633333333333333},qn=.95/Gn,Jn=Kn.final+qn,Yn=Jn+.4,Xn=e=>1-(1-Math.min(1,Math.max(0,e)))**3,I=(e,t)=>e+Math.random()*(t-e),Zn=e=>e[Math.floor(Math.random()*e.length)],Qn=e=>[...Ln].map(t=>Math.random()<e?Zn([...Rn]):t).join(``);function $n(e,t,n,r,i=document.createElement(`canvas`)){i.width=e,i.height=t;let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=i.getContext(`2d`);o.font=zn(100);let s=t=>100*e*r/o.measureText(t).width,c=Math.min(s(Ln),s(`SNATCHED`)*1.5,t*.55);return{c:i,ctx:o,wc:a,wctx:a.getContext(`2d`),W:e,H:t,u:n,base:c}}function er(e,t=0){e.ctx.fillStyle=`#04010c`,e.ctx.fillRect(0,0,e.W,e.H),t>0&&(e.ctx.fillStyle=`rgba(230,255,240,${t})`,e.ctx.fillRect(0,0,e.W,e.H))}function tr(e,t=.22){e.ctx.fillStyle=`rgba(0,0,0,${t})`;for(let t=0;t<e.H;t+=3*e.u)e.ctx.fillRect(0,t,e.W,e.u)}function nr(e,t){let{W:n,H:r,u:i,wctx:a,ctx:o}=e,{x:s=n/2,y:c=r/2,size:l=1,rot:u=0,skew:d=0,color:f=Nn,split:p=0,slices:m=0,blur:h=0,alpha:g=1}=t,_=t.text??Ln;a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,n,r),a.translate(s,c),a.rotate(u),a.transform(1,0,d,1,0,0),a.font=zn(e.base*l),a.textAlign=`center`,a.textBaseline=`middle`,a.filter=h>0?`blur(${h*i}px)`:`none`,p&&(a.globalCompositeOperation=`lighter`,a.fillStyle=In(Fn,.85),a.fillText(_,-p*i,0),a.fillStyle=In(Pn,.85),a.fillText(_,p*i,p*i*.3)),a.globalCompositeOperation=`source-over`,a.shadowColor=In(f,.9),a.shadowBlur=30*i,a.fillStyle=In(f),a.fillText(_,0,0),a.shadowBlur=0,a.fillStyle=`rgba(255,255,255,0.55)`,a.fillText(_,0,0),a.filter=`none`,o.save(),o.globalAlpha=g,o.drawImage(e.wc,0,0);for(let t=0;t<m;t++){let t=I(c-e.base*l*.6,c+e.base*l*.5),r=I(3,22)*i;o.fillStyle=`#04010c`,o.fillRect(0,t,n,r),o.drawImage(e.wc,0,t,n,r,I(-60,60)*i,t,n,r)}o.restore()}var rr=null,ir=0,ar=-1;function or(e,t){let{W:n,H:r,ctx:i}=e;rr||(rr=document.createElement(`canvas`),rr.width=Math.ceil(n/4),rr.height=Math.ceil(r/4));let a=rr.getContext(`2d`),o=a.createImageData(rr.width,rr.height),s=o.data;for(let e=0;e<s.length;e+=4){let t=Math.random()*255,n=Math.random();s[e]=n<.05?0:t,s[e+1]=n>.96?40:t,s[e+2]=n>.93&&n<.96?120:t,s[e+3]=255}a.putImageData(o,0,0),t>ir+.2&&Math.random()<.09&&(ir=t+I(.08,.22));let c=.5+.5*Math.sin(t*9)*Math.sin(t*3.7),l=t<ir?I(.38,.58):.08+.2*Math.max(0,c);i.save(),i.imageSmoothingEnabled=!1,i.globalAlpha=l,i.drawImage(rr,0,0,n,r);for(let e=0;e<3;e++){let e=I(0,r),t=I(4,24);i.drawImage(rr,0,e/r*rr.height,rr.width,t/r*rr.height,I(-60,60),e,n,t)}(ar<0||t-ar>1.1+Math.random()*.6)&&(ar=t);let u=(t-ar)/.7;if(u<1){let e=-.2*r+u*1.4*r,t=r*.22,a=i.createLinearGradient(0,e,0,e+t);a.addColorStop(0,`rgba(120,255,200,0)`),a.addColorStop(.7,`rgba(160,255,220,0.35)`),a.addColorStop(.75,`rgba(220,255,240,0.6)`),a.addColorStop(1,`rgba(120,255,200,0)`),i.globalAlpha=1,i.globalCompositeOperation=`lighter`,i.fillStyle=a,i.fillRect(0,e,n,t),i.globalCompositeOperation=`source-over`}i.globalAlpha=.5,i.fillStyle=`#000`,i.fillRect(0,(1-t*.8%1.3)*r,n,r*.08),i.restore(),tr(e,.25)}function sr(e,t,n,r=``){let{W:i,H:a,u:o}=e,s=(e,n=0)=>{er(e,n),r===`g`&&or(e,t)};if(e.ctx.setTransform(1,0,0,1,0,0),e.ctx.globalAlpha=1,e.ctx.globalCompositeOperation=`source-over`,t<Vn){n(`slam`+r);let c=(t-Bn)/.2,l=c<1?2.8-1.8*Xn(c):1+(t>.55&&t<.65?.18:0),u=t<.05||t>.55&&t<.59;s(e,u?.9:0),nr(e,{size:l,y:a/2+(Math.random()<.2?I(-30,30)*o:0),x:i/2+(Math.random()<.2?I(-20,20)*o:0),split:c<1?26:I(3,12),slices:Math.random()<.3?4:0,color:u?[20,0,40]:Nn,text:Math.random()<.12?Qn(.25):Ln}),tr(e)}else if(t<Hn){n(`diag`+r);let c=Xn((t-Vn)/.15),l=-.38*c,u=1+.35*c;s(e,t-Vn<.04?.6:0);for(let t=3;t>=1;t--)nr(e,{size:u,rot:l,skew:-.25*c,x:i/2-t*22*o*c,y:a/2+t*34*o*c,color:t%2?Fn:Pn,alpha:.09*(4-t)});nr(e,{size:u,rot:l,skew:-.25*c,split:I(6,16),slices:Math.random()<.4?5:0,color:Math.floor(t*12)%4==0?Fn:Nn,x:i/2+I(-6,6)*o}),tr(e)}else if(t<Un){let n=(t-Hn)/.3999999999999999,r=Math.sin(Math.PI*Math.min(1,n*1.15))*16,c=Xn((n-.45)/.55);s(e),nr(e,{size:1.35-.35*c,rot:-.38*(1-c),skew:-.25*(1-c),blur:r,split:r*.6});for(let t=0;t<3;t++){let r=(n*1.6+t/3)%1*a,s=50*o;e.ctx.drawImage(e.c,0,r,i,s,I(-30,30)*o,r,i,s);let c=e.ctx.createLinearGradient(0,r,0,r+s);c.addColorStop(0,`rgba(180,255,220,0)`),c.addColorStop(.5,`rgba(180,255,220,0.25)`),c.addColorStop(1,`rgba(180,255,220,0)`),e.ctx.fillStyle=c,e.ctx.fillRect(0,r,i,s)}tr(e,.3)}else{s(e);let t=r===`g`&&Math.random()<.12;nr(e,{split:t?I(8,16):3,slices:t?4:0,text:t?Qn(.3):Ln,color:t&&Math.random()<.5?Fn:Nn,x:i/2+(Math.random()<.3?I(-4,4)*o:0)}),tr(e)}}var cr=!1;function lr(e=`SNATCHED`){if(jn(),cr||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return setTimeout(jn,140),Promise.resolve();cr=!0,Ln=e;let t=()=>{},n=new Promise(e=>t=e),r=document.createElement(`canvas`);r.className=`snatchfx`,r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,e),document.body.append(r);let i=Math.min(2,window.devicePixelRatio||1),a=$n(Math.round(window.innerWidth*i),Math.round(window.innerHeight*i),i,.88,r),{W:o,H:s,ctx:c}=a,l=$n(640,250,1,.94),u=document.createElement(`canvas`);u.width=o,u.height=s;let d=u.getContext(`2d`),f=document.createElement(`canvas`);f.width=Math.ceil(o/(3*i)),f.height=Math.ceil(s/(3*i));let p=f.getContext(`2d`),m=p.createImageData(f.width,f.height);function h(e,t=`source-over`){if(e<=0)return;let n=m.data;for(let e=0;e<n.length;e+=4){let t=Math.random()*255,r=Math.random();n[e]=r<.04?0:t,n[e+1]=r>.97?40:t,n[e+2]=r>.94&&r<.97?120:t,n[e+3]=255}p.putImageData(m,0,0),c.save(),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation=t,c.globalAlpha=e,c.imageSmoothingEnabled=!1,c.drawImage(f,0,0,o,s);for(let e=0;e<4;e++){let e=I(0,s),t=I(4,26)*i;c.drawImage(f,0,e/s*f.height,f.width,t/s*f.height,I(-80,80)*i,e,o,t)}let r=S*1.7%1.4*s-.2*s;c.globalAlpha=e*.6,c.fillStyle=`#000`,c.fillRect(0,r,o,s*.1),c.restore()}let g=e=>e<.1?.4*(1-e/.1)+.12:Math.random()<.14?I(.22,.36):I(.07,.14),_=Array.from({length:14},(e,t)=>({delay:I(0,.14),from:t%2?1:-1}));function v(e){c.clearRect(0,0,o,s);let t=s/14;_.forEach((n,r)=>{let a=Xn((e-n.delay)/.16),s=o*a,l=n.from<0?0:o-s;c.fillStyle=`#04010c`,c.fillRect(l,r*t,s,t+1),a>0&&a<1&&(c.fillStyle=In(r%3==0?Fn:r%3==1?Pn:Nn,.9),c.fillRect(n.from<0?s-4*i:l,r*t,4*i,t+1))}),h(.16,`source-atop`)}function y(e){c.fillStyle=`rgba(230,255,240,${.3*(1-e)})`,c.fillRect(0,0,o,s);for(let e=0;e<5;e++){let e=I(0,s),t=I(6,40)*i;c.drawImage(r,0,e,o,t,I(-50,50)*i,e,o,t)}}function b(e,t){e<.4?(er(l),tr(l)):sr(l,(e-.4)*Wn,()=>{},`g`);let n=Math.min(1,e/(Kn.final-Kn.hacker)),a=n<.5?4*n*n*n:1-(-2*n+2)**3/2;if(nn(c,r,o,s,t,a,l.c),Math.random()<.15)for(let e=0;e<3;e++){let e=I(0,s),t=I(4,30)*i;c.drawImage(r,0,e,o,t,I(-30,30)*i,e,o,t)}}let x=performance.now(),S=0,C=1/0,w=new Set,T=e=>{w.has(e)||(w.add(e),jn())};r.addEventListener(`pointerdown`,()=>{t(),C===1/0&&(C=S)});let E=e=>{let n=(e-x)/1e3,l=Math.min(.1,Math.max(0,n-S));S=n;let f=C<1/0?Math.max(Jn,Jn+(n-C)):n;if(c.setTransform(1,0,0,1,0,0),c.globalAlpha=1,c.globalCompositeOperation=`source-over`,f<Kn.slam)v(f),f>=Kn.covered&&t(),f>Kn.slam-.06&&(c.fillStyle=`#fff`,c.fillRect(0,s/2-3*i,o,6*i));else if(f<Kn.hacker){t(),sr(a,(f-Kn.slam)*Gn,T);let e=(f-Kn.slam)*Gn,n=Math.min(...[Bn,Vn,Hn].map(t=>e>=t?(e-t)/Gn:9));h(g(n))}else if(f<Kn.final)T(`hacker`),b(f-Kn.hacker,l),tr(a,.18),f-Kn.hacker<.08&&y((f-Kn.hacker)/.08),f-Kn.hacker<.18&&h(.32*(1-(f-Kn.hacker)/.18));else if(f<Jn){T(`final`);let e=(f-Kn.final)*Gn,t=e/.18,n=e>.4&&e<.52;er(a,e<.04?.8:0),nr(a,{size:t<1?1.9-.9*Xn(t):n?1.25:1,rot:n?.3:0,skew:n?.3:0,split:t<1?20:n?18:2+Math.sin(f*30)*2,slices:n||Math.random()<.1?5:0,color:n?Fn:Nn}),tr(a),h(g(f-Kn.final)),d.clearRect(0,0,o,s),d.drawImage(r,0,0)}else if(f<Yn){t(),w.has(`buffered`)||(w.add(`buffered`),d.getImageData(o>>1,s>>1,1,1).data[3]===0&&(er(a),nr(a,{}),d.drawImage(r,0,0)));let e=(f-Jn)/(Yn-Jn),n=Math.max(.004,1-Xn(e/.45)),l=e<.45?1:Math.max(.01,1-Xn((e-.45)/.35));c.fillStyle=`#04010c`,c.fillRect(0,0,o,s),c.drawImage(u,o/2-o*l/2,s/2-s*n/2,o*l,s*n),c.globalCompositeOperation=`lighter`,c.fillStyle=`rgba(220,255,240,${Math.min(1,e*3)*(1-e)})`,c.fillRect(o/2-o*l/2,s/2-Math.max(2*i,s*n/2),o*l,Math.max(4*i,s*n)),r.style.opacity=e<.6?`1`:String(1-(e-.6)/.4)}else{r.remove(),cr=!1,t();return}requestAnimationFrame(E)};return requestAnimationFrame(E),n}var ur=`@font-face{font-family:Orbitron;font-weight:400 900;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:500;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}@font-face{font-family:Rajdhani;font-weight:700;font-display:swap;src:url(data:font/woff2;base64,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)format("woff2")}:root{--bg:#05010f;--text:#e8f9ff;--hint:#8f9cc8;--cyan:#00f0ff;--pink:#ff2bd6;--panel:#0a0f24d9;--row:#0c0a22d9;--danger:#ff3b6b;--amber:#ffb800;--button:var(--cyan);--display:"Orbitron", "Rajdhani", sans-serif;--cut:polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));--cut-s:polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px));--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}*{box-sizing:border-box}html{background:var(--bg)}body{min-height:100vh;color:var(--text);-webkit-tap-highlight-color:transparent;background:linear-gradient(#05010f 0%,#0b0420 55%,#1a0633 100%) fixed;margin:0;font:500 17px/1.4 Rajdhani,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body:before{content:"";z-index:0;pointer-events:none;transform-origin:bottom;background:linear-gradient(#ff2bd626 2px,#0000 2px) 0 0/100% 26px,linear-gradient(90deg,#00f0ff38 2px,#0000 2px) 0 0/34px 100%;height:42vh;animation:3s linear infinite floor;position:fixed;bottom:0;left:-50%;right:-50%;transform:perspective(220px)rotateX(58deg);-webkit-mask:linear-gradient(#0000,#000 70%);mask:linear-gradient(#0000,#000 70%)}@keyframes floor{to{background-position:0 26px,0 0}}body:after{content:"";z-index:50;pointer-events:none;background:repeating-linear-gradient(0deg,#ffffff07 0 1px,#0000 1px 3px);position:fixed;inset:0}main{z-index:1;max-width:480px;margin:0 auto;padding:16px 16px 40px;position:relative}.brand{align-items:center;gap:10px;margin:0 0 16px;display:flex}.brand .logo{background:var(--cyan);color:#000;width:38px;height:38px;clip-path:var(--cut-s);box-shadow:0 0 18px var(--cyan);flex:none;place-items:center;font-size:20px;display:grid}.brand .name{font:900 19px/1 var(--display);letter-spacing:1px;color:#fff;text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 16px #00f0ff88;position:relative}.glitch:before,.glitch:after{content:attr(data-text);pointer-events:none;position:absolute;inset:0;overflow:hidden}.glitch:before{color:var(--cyan);text-shadow:-2px 0 var(--pink);animation:3.2s step-end infinite slice}.glitch:after{color:var(--pink);text-shadow:2px 0 var(--cyan);animation:2.7s step-end infinite reverse slice}@keyframes slice{0%,86%,to{clip-path:inset(0 0 100%);transform:none}88%{clip-path:inset(20% 0 55%);transform:translate(-3px)}90%{clip-path:inset(60% 0 10%);transform:translate(3px)}92%{clip-path:inset(40% 0 35%);transform:translate(-2px)}94%{clip-path:inset(0 0 100%)}}h1{font:900 18px/1.2 var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--cyan);text-shadow:0 0 12px #00f0ff88;margin:6px 0 12px}h2{font:600 12px/1.2 var(--display);text-transform:uppercase;letter-spacing:2.5px;color:var(--hint);margin:22px 2px 10px}p{margin:0 0 14px}b{font-weight:700}.muted{color:var(--hint);font-size:15px}.note,.warning{border-left:3px solid var(--amber);clip-path:var(--cut-s);background:#ffb80014;padding:10px 12px;font-size:15px}.warning{border-left-color:var(--danger);background:#ff3b6b17}.error{color:var(--danger);font-size:15px}a{color:var(--cyan)}a.tx,a.acct,a.coin{color:var(--cyan);border-bottom:1px dashed #00f0ff88;text-decoration:none}.total{clip-path:var(--cut);background:var(--panel);border:1px solid var(--cyan);margin:0 0 14px;padding:16px;position:relative;box-shadow:inset 0 0 22px #ff2bd626,inset 0 0 0 1px #00f0ff55}.total small{font:600 11px var(--display);text-transform:uppercase;letter-spacing:2px;color:var(--hint);display:block}.total .big{font:900 32px/1.15 var(--display);color:var(--cyan);text-shadow:0 0 14px #00f0ffaa;word-break:break-word;margin:6px 0 2px}.total .big .unit{margin-left:6px;font-size:16px}.total .sub{color:var(--pink);font-weight:700}.ticking{text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ffaa}.card{clip-path:var(--cut);background:var(--panel);border:1px solid #00f0ff66;padding:14px;position:relative}.card .label{font:600 11px var(--display);text-transform:uppercase;letter-spacing:1.5px;color:var(--hint)}.card .label .bal{color:var(--cyan);letter-spacing:0;text-transform:none;font:700 15px Rajdhani,sans-serif}.card .address{word-break:break-all;color:var(--text);margin:6px 0 10px;font:14px/1.35 ui-monospace,Menlo,monospace}.card button{margin:0}.list{margin:0 0 16px;padding:0;list-style:none}.list li{background:var(--row);border-left:3px solid var(--pink);clip-path:var(--cut-s);align-items:center;gap:10px;margin:0 0 8px;padding:10px 12px;display:flex}.list li>span{color:var(--cyan);font:700 13px var(--display);flex:none;width:36px}.list li code{word-break:break-word;flex:1;min-width:0;font:500 16px/1.35 Rajdhani,sans-serif}.list li code small,.list li small{color:var(--hint);font:500 14px/1.35 Rajdhani,sans-serif}.list li .bal{color:var(--cyan);font-weight:700}.coins li{border-left-color:var(--cyan)}.coins .grow{flex:1;min-width:0}.coins .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:17px;display:block;overflow:hidden}.coins .grow small{display:block}.coins .right{text-align:right;white-space:nowrap;font-size:16px;font-weight:700}.coins .right small{font-weight:500;display:block}.coins .right.up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.coins .right.down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.coins .right .move{font:700 12px var(--display);letter-spacing:.5px}.coins .right.up .move{color:#39ff88}.coins .right.down .move{color:var(--danger)}.coins li:has(.right.up){border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.coins li:has(.right.down){border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.live{font:700 10px var(--display);letter-spacing:1.5px;color:#39ff88;vertical-align:2px;border:1px solid #39ff88aa;margin-left:8px;padding:1px 6px;animation:2s ease-in-out infinite livePulse;display:inline-block}.live:before{content:"● "}.live.beat{animation:.6s ease-out liveBeat,2s ease-in-out .6s infinite livePulse}@keyframes livePulse{50%{opacity:.45}}@keyframes liveBeat{0%{box-shadow:0 0 12px #39ff88}}.coins .right.bump .val{animation:.7s ease-out valBump}@keyframes valBump{0%{text-shadow:0 0 14px;filter:brightness(1.8)}}@media (prefers-reduced-motion:reduce){.live,.live.beat,.coins .right.bump .val{animation:none}}.av{background:hsl(var(--hue,190) 90% 55%);color:#05010f;width:36px;height:36px;font:900 12px var(--display);box-shadow:0 0 10px hsl(var(--hue,190) 90% 55% / .5);border-radius:4px;flex:none;place-items:center;display:grid;position:relative;overflow:hidden}.av img{object-fit:cover;background:#05010f;width:100%;height:100%;position:absolute;inset:0}.av.sol{color:#fff;background:linear-gradient(135deg,#9945ff,#14f195)}label{color:var(--hint);margin:0 0 14px;font-size:15px;display:block}label.check{color:var(--text);align-items:center;gap:10px;font-size:17px;display:flex}input,textarea{width:100%;color:var(--text);clip-path:var(--cut-s);background:#0a0f24;border:1px solid #00f0ff55;border-radius:0;outline:none;margin-top:6px;padding:12px;font:500 17px Rajdhani,sans-serif;display:block}input:focus,textarea:focus{border-color:var(--cyan);box-shadow:inset 0 0 12px #00f0ff44}input[type=checkbox]{clip-path:none;width:20px;height:20px;accent-color:var(--pink);margin:0}button{width:100%;font:700 12.5px var(--display);text-transform:uppercase;letter-spacing:1.5px;clip-path:var(--cut-s);color:var(--cyan);box-shadow:inset 0 0 0 1px var(--cyan), inset 0 0 12px #00f0ff40;background:#00f0ff12;border:0;border-radius:0;margin:0 0 10px;padding:14px 10px;transition:transform 80ms,filter .15s;display:block}button:active{filter:brightness(1.3);transform:scale(.98)}button.primary{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5}button.danger{color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger);background:#ff3b6b10}button:disabled{opacity:.4;filter:grayscale(.6)}.row{gap:8px;display:flex}.row button{flex:1}.words{counter-reset:w;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 14px;padding:0;list-style:none;display:grid}.words li{counter-increment:w;background:var(--row);border-left:2px solid var(--cyan);clip-path:var(--cut-s);padding:8px 10px;font-size:18px;font-weight:700}.words li:before{content:counter(w) ". ";color:var(--pink);font-weight:500}.center{text-align:center;color:var(--hint);font:600 13px var(--display);letter-spacing:1.5px;text-transform:uppercase;padding-top:80px}.spinner{border:3px solid #00f0ff22;border-top-color:var(--cyan);border-right-color:var(--pink);border-radius:50%;width:46px;height:46px;margin:0 auto 16px;animation:.7s linear infinite spin;box-shadow:0 0 18px #00f0ff55}@keyframes spin{to{transform:rotate(360deg)}}pre.details{white-space:pre-wrap;word-break:break-word;background:var(--row);clip-path:var(--cut-s);padding:10px 12px;font-size:13px}.version{text-align:center;color:var(--hint);font:600 10px var(--display);letter-spacing:2px;opacity:.7;margin-top:28px}.pickrow{align-items:center;gap:8px;display:flex}.pickrow input{width:22px;height:22px;accent-color:var(--pink);flex:none;margin:0;padding:0}.burst{z-index:100;pointer-events:none;background:#05010fcc;place-items:center;animation:1.3s forwards burst;display:grid;position:fixed;inset:0}.burst:before{content:"";background:repeating-linear-gradient(0deg,#00f0ff22 0 2px,#0000 2px 9px),repeating-linear-gradient(0deg,#0000 0 37px,#ff2bd655 37px 41px);animation:.18s steps(2,end) infinite bars;position:absolute;inset:0}.burst-word{font:900 52px/1 var(--display);color:#fff;letter-spacing:3px;text-shadow:4px 0 var(--pink), -4px 0 var(--cyan), 0 0 30px var(--cyan);animation:.12s steps(2,end) 6 jolt;position:relative}.burst-word:before,.burst-word:after{content:attr(data-text);position:absolute;inset:0}.burst-word:before{color:var(--cyan);animation:.25s step-end infinite cut1}.burst-word:after{color:var(--pink);animation:.2s step-end infinite cut2}@keyframes burst{0%{opacity:0}6%{opacity:1}75%{opacity:1}to{opacity:0}}@keyframes bars{to{background-position:0 9px,0 41px}}@keyframes jolt{0%{transform:translate(-6px,2px)skew(-8deg)}50%{transform:translate(5px,-2px)skew(6deg)}}@keyframes cut1{0%{clip-path:inset(10% 0 60%);transform:translate(-8px)}50%{clip-path:inset(55% 0 20%);transform:translate(6px)}}@keyframes cut2{0%{clip-path:inset(70% 0 5%);transform:translate(7px)}50%{clip-path:inset(25% 0 50%);transform:translate(-5px)}}.shake main{animation:.45s shake}@keyframes shake{0%,to{filter:none;transform:none}20%{filter:hue-rotate(60deg);transform:translate(-4px,1px)}40%{transform:translate(4px,-1px)}60%{filter:hue-rotate(-60deg);transform:translate(-2px)}80%{transform:translate(2px)}}@media (prefers-reduced-motion:reduce){*,:before,:after{transition:none!important;animation:none!important}}.list li small.error{color:var(--danger)}.pinvalue{opacity:0;pointer-events:none;border:0;width:1px;height:1px;margin:0;padding:0;position:absolute}.pindots{justify-content:center;gap:14px;margin:0 0 4px;padding:14px 0 18px;display:flex}.pindots i{background:0 0;border:2px solid #00f0ff66;width:16px;height:16px;transition:background .1s,box-shadow .1s,border-color .1s;transform:rotate(45deg)}.pindots.active i{border-color:var(--cyan)}.pindots i.on{background:var(--pink);border-color:var(--pink);box-shadow:0 0 12px var(--pink)}.pindots.nope{animation:.4s nope}.pindots.nope i{border-color:var(--danger)}@keyframes nope{20%{transform:translate(-10px)}40%{transform:translate(9px)}60%{transform:translate(-6px)}80%{transform:translate(4px)}}.keypad{grid-template-columns:repeat(3,1fr);gap:10px;margin:6px 0 16px;display:grid}.keypad .key{font:900 24px/1 var(--display);letter-spacing:0;color:var(--text);text-shadow:0 0 10px #00f0ffaa;-webkit-user-select:none;user-select:none;background:#0c0a22e6;margin:0;padding:16px 0;box-shadow:inset 0 0 0 1px #00f0ff88,inset 0 0 14px #00f0ff30}.keypad .key:active{background:var(--pink);color:#fff;box-shadow:0 0 22px var(--pink), inset 0 0 0 1px #fff;filter:none;transform:scale(.96)}.keypad .key.fn{color:var(--pink);text-shadow:0 0 8px #ff2bd688;font-size:15px}.coinhead{align-items:center;gap:12px;margin:0 0 12px;display:flex}.coinhead .av{width:46px;height:46px;font-size:15px}.coinhead b{font-size:20px;display:block}.coinhead small{color:var(--hint);font-size:14px}.avail{justify-content:space-between;align-items:baseline;margin:0 2px 6px;display:flex}.avail small{font:600 11px var(--display);letter-spacing:2px;color:var(--hint);text-transform:uppercase}.avail>span{font:900 18px var(--display);color:var(--cyan);text-shadow:0 0 10px #00f0ffaa}.amountbox{padding:8px 16px 10px}.amount{text-align:center;padding:12px 0 4px}.amount .num{font:900 46px/1 var(--display);color:#fff;text-shadow:3px 0 var(--pink), -3px 0 var(--cyan), 0 0 22px #00f0ff88;word-break:break-all}.amount .num:after{content:"";background:var(--pink);vertical-align:-.05em;width:3px;height:.85em;box-shadow:0 0 8px var(--pink);margin-left:4px;animation:1s step-end infinite blink;display:inline-block}.amount .num.over{color:var(--danger);text-shadow:0 0 18px var(--danger)}@keyframes blink{50%{opacity:0}}.amount .unit{font:700 16px var(--display);color:var(--cyan);margin-left:6px}.amount .usd{color:var(--hint);min-height:1.4em;margin-top:8px;font-size:15px}input.slider{appearance:none;clip-path:none;width:100%;height:34px;box-shadow:none;background:0 0;border:0;margin:8px 0 2px;padding:0}input.slider::-webkit-slider-runnable-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px;box-shadow:0 0 10px #ff2bd688}input.slider::-webkit-slider-thumb{-webkit-appearance:none;background:var(--pink);width:24px;height:24px;box-shadow:0 0 16px var(--pink), inset 0 0 0 2px #fff;border:0;margin-top:-10px;transform:rotate(45deg)}input.slider::-moz-range-track{background:linear-gradient(90deg, var(--cyan), var(--pink));height:4px}input.slider::-moz-range-thumb{background:var(--pink);border:2px solid #fff;border-radius:0;width:22px;height:22px;transform:rotate(45deg)}input.slider:focus{box-shadow:none}.ticks{color:var(--hint);font:600 10px var(--display);justify-content:space-between;margin:0 2px 10px;display:flex}.chips{grid-template-columns:repeat(4,1fr);gap:8px;margin:0 0 12px;display:grid}.chips button{margin:0;padding:9px 0;font-size:11px}.walletsrow{background:var(--row);border-left:3px solid var(--cyan);clip-path:var(--cut-s);justify-content:space-between;align-items:center;margin:0 0 12px;padding:8px 12px;display:flex}.walletsrow small{color:var(--hint);font-size:13px;display:block}.stepper{align-items:center;gap:12px;display:flex}.stepper button{width:40px;margin:0;padding:8px 0;font-size:18px}.stepper b{font:900 22px var(--display);color:var(--cyan);text-align:center;min-width:28px}.stepper.wide{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px;display:grid}.stepper.wide button{width:auto}.keypad{gap:8px;margin:0 0 12px}.keypad .key{padding:14px 0}.keypad .key.dot{font-size:30px;line-height:.8}button.go{padding:16px 10px;font-size:14px}.stepper button{padding:4px 0 6px;font:700 26px/1 Rajdhani,sans-serif}.coins li[data-mint]{cursor:pointer}.coins li[data-mint]:active{filter:brightness(1.3)}.coinhead .live{margin-left:auto}.avail .paid{color:var(--hint);text-shadow:none}.avail.pl.up>span{color:#39ff88;text-shadow:0 0 10px #39ff88aa}.avail.pl.down>span{color:var(--danger);text-shadow:0 0 10px #ff3b6baa}button.gold{color:#1a1000;background:var(--amber);text-shadow:none;box-shadow:inset 0 0 14px #fff6,0 0 16px #ffb80066}button.gold.on{box-shadow:inset 0 0 0 2px #fff,0 0 22px #ffb800cc}.initnote{text-align:center;margin:0 0 12px;font-size:14px}.avail[hidden]{display:none}.solamt,.coinamt{cursor:pointer;text-underline-offset:3px;-webkit-text-decoration:underline dotted #ffffff40;text-decoration:underline dotted #ffffff40}.solamt.usd,.coinamt.usd{color:#39ff88;text-shadow:0 0 8px #39ff8866}.seg{grid-template-columns:1fr 1fr;gap:8px;margin:0 0 10px;display:grid}.seg button{opacity:.55;margin:0;padding:11px 0;font-size:13px}.seg button.on{opacity:1;box-shadow:inset 0 0 0 2px var(--cyan), 0 0 14px #00f0ff66}.seg.small button{padding:8px 0;font-size:11px}.amountbox #when{color:var(--hint);margin-bottom:2px;font-size:12px;display:block}button.small{width:auto;margin:6px 0 0;padding:6px 14px;font-size:11px}.coins small.inorder{color:var(--amber)}.brand .navback{width:38px;height:38px;font:900 22px/1 var(--display);color:var(--cyan);box-shadow:inset 0 0 0 2px var(--cyan), 0 0 12px #00f0ff55;clip-path:var(--cut-s);background:0 0;flex:none;place-items:center;margin:0;padding:0;display:grid}.brand .navback:active{background:var(--cyan);color:#000}#app:has(#after:empty) .navback{visibility:hidden}.openwallet{cursor:pointer}.openwallet:active{filter:brightness(1.3)}.openwallet .open{float:right;color:var(--cyan);font:700 11px var(--display);letter-spacing:1px}.loader{z-index:40;background:#000;position:fixed;inset:0}.loader .ascii{width:100%;height:100%;display:block}.loader .ascii i{font-style:normal}.ascii .kc{color:var(--cyan);text-shadow:0 0 6px #00f0ffaa}.ascii .kp{color:var(--pink);text-shadow:0 0 6px #ff2bd6aa}.ascii .kg{color:#39ff88;text-shadow:0 0 6px #39ff88aa}.ascii .kr{color:var(--danger);text-shadow:0 0 6px #ff3b6baa}.ascii .ka{color:var(--amber);text-shadow:0 0 8px #ffb800cc}.ascii .kw{color:#fff;text-shadow:0 0 8px #fff}.ascii .kd{color:#1a2050}.ascii .kh{color:#2c3a8c}.ascii .kv{color:#5b3ab8}.ascii .kf{color:#3a1f4f}.ascii .kc,.ascii .kp,.ascii .kg,.ascii .kr{opacity:.9}.loadtag{font:900 16px var(--display);letter-spacing:3px;color:var(--cyan);text-shadow:2px 0 var(--pink), -2px 0 var(--cyan), 0 0 14px #00f0ff88;margin:14px 0 4px}.loadtag.hit{color:#39ff88;text-shadow:2px 0 var(--pink), -2px 0 #39ff88, 0 0 18px #39ff88;animation:.25s steps(2,end) 2 tagjolt}@keyframes tagjolt{50%{transform:translate(3px)skew(-8deg)}}.loadlabel{color:var(--hint);font:600 12px var(--display);letter-spacing:1.5px;text-transform:uppercase;margin:4px 16px}.loader .ascii.flash{filter:brightness(1.5)saturate(1.4);box-shadow:inset 0 0 0 2px #39ff88,0 0 40px #39ff88aa}.ascii .kC{color:#00f0ff;opacity:.28}.ascii .kP{color:#ff2bd6;opacity:.28}.ascii .kG{color:#39ff88;opacity:.28}.ascii .kR{color:#ff3b6b;opacity:.28}#app.loading .brand,#app.loading .version,#app.loading .note{display:none}.hackloader{z-index:40;background:#000;position:fixed;inset:0;overflow:hidden}.hackloader .hackart{background:#02000a;width:100%;height:100%;display:block;position:absolute;inset:0}.hackloader .loadterm{z-index:1;visibility:hidden;color:#39ff88;text-shadow:0 0 6px #39ff88aa}.hackloader .loadterm .cur{background:#39ff88}.brand .logo.sol{background:#05010f;position:relative;overflow:hidden;box-shadow:0 0 18px #00f0ff66,inset 0 0 0 1px #00f0ff88}.logo.sol svg{width:26px;height:19px;position:absolute;top:9px;left:6px}.logo.sol .sol-main{filter:drop-shadow(0 0 4px #9a5cff);animation:3.2s step-end infinite solmain}.logo.sol .sol-c,.logo.sol .sol-p{opacity:0;mix-blend-mode:screen}.logo.sol .sol-c{animation:3.2s step-end infinite solc}.logo.sol .sol-p{animation:3.2s step-end infinite solp}@keyframes solmain{0%,84%,to{clip-path:none;transform:none}86%{clip-path:inset(0 0 40%);transform:translate(2px)}89%{clip-path:none;transform:translate(-2px)skew(-8deg)}92%{clip-path:inset(35% 0 0);transform:translate(1px)}95%{clip-path:none;transform:none}}@keyframes solc{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(0 0 55%);transform:translate(-3px)}89%{opacity:.85;clip-path:inset(40% 0 25%);transform:translate(-2px,1px)}92%{opacity:.7;clip-path:inset(70% 0 0);transform:translate(-4px)}95%{opacity:.5;clip-path:none;transform:translate(-1px)}}@keyframes solp{0%,84%,97%,to{opacity:0;clip-path:none;transform:none}86%{opacity:.85;clip-path:inset(45% 0 0);transform:translate(3px)}89%{opacity:.85;clip-path:inset(0 0 60%);transform:translate(2px,-1px)}92%{opacity:.7;clip-path:inset(20% 0 45%);transform:translate(4px)}95%{opacity:.5;clip-path:none;transform:translate(1px)}}@media (prefers-reduced-motion:reduce){.logo.sol svg{animation:none!important}}.snatchfx{z-index:60;touch-action:none;width:100vw;height:100vh;position:fixed;inset:0}.pnl .pv{font:700 16px var(--display);letter-spacing:.5px;white-space:nowrap;color:var(--hint)}.pnl .pv.big{flex:none;font-size:17px}.pnl .pv.up,.total.pnl .up{color:#39ff88;text-shadow:0 0 8px #39ff88cc,0 0 18px #39ff8866}.pnl .pv.down,.total.pnl .down{color:var(--danger);text-shadow:0 0 8px #ff3b6bcc,0 0 18px #ff3b6b66}.pnl .pv.none{letter-spacing:0;color:var(--hint);text-shadow:none;font:500 13px Rajdhani,sans-serif}.card .label .pv{font-size:15px}.total.pnl{cursor:pointer}.total.pnl .big span{transition:color .2s}.list.pnl li.pnlup{border-left-color:#39ff88;box-shadow:inset 3px 0 12px -6px #39ff88}.list.pnl li.pnldown{border-left-color:var(--danger);box-shadow:inset 3px 0 12px -6px var(--danger)}.pnl .right{cursor:pointer}.pnltabs{gap:8px;margin:0 0 14px;display:flex}.pnltabs button{font:700 16px var(--display);flex:1;margin:0;padding:10px 0}.pnltabs button.on{background:var(--pink);color:#fff;text-shadow:0 0 6px #fffa;box-shadow:inset 0 0 14px #fff5,0 0 14px #ff2bd688}.trades li{border-left-color:var(--cyan)}.trades .grow{flex:1;min-width:0}.trades .grow b{text-overflow:ellipsis;white-space:nowrap;font-size:16px;display:block;overflow:hidden}.trades .grow small{display:block}.trades .tag{width:44px;font:700 11px var(--display);letter-spacing:1px;color:var(--cyan);flex:none}.trades li.sell .tag{color:var(--pink)}.trades .right{text-align:right}.trades .right small{color:var(--hint);font:500 13px Rajdhani,sans-serif;display:block}.trades .pv.spent{color:var(--text);text-shadow:none}.loadterm{left:12px;right:12px;bottom:calc(24px + env(safe-area-inset-bottom));pointer-events:none;color:#00f0ff;text-shadow:0 0 6px #00f0ffaa;font:700 12px/16px ui-monospace,Menlo,Consolas,monospace;position:absolute}.loadterm .tl{white-space:pre;opacity:.6;background:#0009;width:fit-content;max-width:100%;padding:0 3px;overflow:hidden}.loadterm .tl:nth-last-child(2){opacity:.8}.loadterm .tl:last-child{opacity:1}.loadterm .cur{vertical-align:-1px;background:#00f0ff;width:8px;height:12px;margin-left:2px;animation:.66s step-end infinite termBlink;display:inline-block}@keyframes termBlink{50%{opacity:0}}.sharecard{clip-path:var(--cut);aspect-ratio:1080/1350;background:#000;margin:12px 0;box-shadow:0 0 24px #00f0ff44}.sharecard img{-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto;width:100%;height:100%;display:block}.sharecard.hint{animation:1.2s ease-out 2 cardHint}@keyframes cardHint{50%{box-shadow:0 0 36px #ff2bd6}}.cardme{color:var(--hint);align-items:center;gap:10px;margin:10px 2px;display:flex}.cardme input{width:20px;height:20px;accent-color:var(--pink)}.coins small.share{color:var(--pink);font:700 11px var(--display);letter-spacing:.5px}.chart{background:var(--panel);clip-path:var(--cut-s);border:1px solid #00f0ff55;margin:0 0 12px;padding:8px 8px 4px;position:relative;box-shadow:inset 0 0 22px #ff2bd61f}.chartbar{flex-wrap:wrap;align-items:baseline;gap:4px 8px;margin-bottom:4px;display:flex}.chartbar .cprice{font:800 15px var(--display);color:var(--text);text-shadow:0 0 10px #00f0ff66}.chartbar .cmove{color:#39ff88;white-space:nowrap;font:700 13px Rajdhani,sans-serif}.chartbar .cmove.down{color:var(--danger)}.chartbar .ctabs{order:3;justify-content:space-between;width:100%;display:flex}.chartbar .ctabs button{all:unset;cursor:pointer;font:700 10px var(--display);color:var(--hint);letter-spacing:.5px;padding:4px 8px}.chartbar .ctabs button.on{color:#000;background:var(--cyan);box-shadow:0 0 10px var(--cyan)}.chart canvas{touch-action:pan-y;width:100%;height:220px;display:block}.chart .cnote{color:var(--hint);text-align:center;min-height:0;font-size:12px}.chart .cnote:empty,.chartbar .cname{display:none}.chartbar .cfull{all:unset;cursor:pointer;color:var(--cyan);filter:drop-shadow(0 0 6px #00f0ff99);order:2;align-self:center;margin-left:auto;padding:3px 4px;line-height:0}html.chartopen,html.chartopen body{overflow:hidden}.chartfull{z-index:30;background:var(--bg);position:fixed;inset:0}.chartfull .fullwrap{transform-origin:0 0;box-sizing:border-box;--st:calc(var(--tg-safe-area-inset-top,env(safe-area-inset-top,0px)) + var(--tg-content-safe-area-inset-top,0px));--sr:calc(var(--tg-safe-area-inset-right,env(safe-area-inset-right,0px)) + var(--tg-content-safe-area-inset-right,0px));--sb:calc(var(--tg-safe-area-inset-bottom,env(safe-area-inset-bottom,0px)) + var(--tg-content-safe-area-inset-bottom,0px));--sl:calc(var(--tg-safe-area-inset-left,env(safe-area-inset-left,0px)) + var(--tg-content-safe-area-inset-left,0px));padding:calc(var(--st) + 6px) calc(var(--sr) + 8px) calc(var(--sb) + 6px) calc(var(--sl) + 8px);display:flex;position:absolute;top:0;left:0}.chartfull .fullwrap.rot{padding:calc(var(--sr) + 8px) calc(var(--sb) + 8px) calc(var(--sl) + 8px) calc(var(--st) + 8px)}.chart.big{flex-direction:column;flex:1;min-width:0;min-height:0;margin:0;padding:8px 10px 6px;display:flex}.chart.big canvas{touch-action:none;flex:1 1 0;height:0;min-height:0}.chart.big .chartbar{flex-wrap:nowrap;align-items:center;gap:10px}.chart.big .cname{font:800 13px var(--display);color:var(--pink,#ff2bd6);text-shadow:0 0 10px #ff2bd666;text-overflow:ellipsis;white-space:nowrap;max-width:26%;display:block;overflow:hidden}.chart.big .ctabs{order:2;gap:2px;width:auto;margin-left:auto}.chart.big .cfull{order:3;margin-left:4px}.brand .name{white-space:nowrap;min-width:0}.brand .fsbtn{width:34px;height:34px;color:var(--cyan);clip-path:var(--cut-s);cursor:pointer;background:0 0;flex:none;place-items:center;margin:0 0 0 auto;padding:0;display:grid;box-shadow:inset 0 0 0 2px #00f0ffaa,0 0 10px #00f0ff44}.brand .fsbtn:active,.brand .fsbtn.on:active{background:var(--cyan);color:#000}.brand .fsbtn.on{color:var(--pink);box-shadow:inset 0 0 0 2px #ff2bd6aa,0 0 10px #ff2bd644}html.tgfull main{padding-top:calc(16px + var(--tg-safe-area-inset-top,0px) + var(--tg-content-safe-area-inset-top,0px));padding-bottom:calc(40px + var(--tg-safe-area-inset-bottom,0px))}.brand:has(.fsbtn) .name{font-size:min(19px,4.25vw)}@media (orientation:landscape) and (width>=600px){main{max-width:none;padding-left:max(16px, calc(var(--tg-safe-area-inset-left,0px) + 12px), calc(env(safe-area-inset-left) + 8px));padding-right:max(16px, calc(var(--tg-safe-area-inset-right,0px) + 12px), calc(env(safe-area-inset-right) + 8px));flex-wrap:wrap;align-content:flex-start;column-gap:12px;display:flex}main>*{flex:0 0 100%;min-width:0}main>button{flex:calc(50% - 6px)}.list{grid-template-columns:repeat(auto-fill,minmax(320px,1fr));column-gap:12px;display:grid}}.replayov{z-index:60;background:#000;flex-direction:column;justify-content:center;align-items:center;display:flex;position:fixed;inset:0}.replayov .rbox{background:#000;flex:none;position:relative}.replayov .rlayer{width:100%;height:100%;display:block;position:absolute;inset:0}.replayov .rnote{color:#00f0ff;text-shadow:0 0 8px #00f0ff99;font:600 14px ui-monospace,Menlo,Consolas,monospace;position:absolute;top:40%;left:16px;right:16px}.replayov .rbar{left:0;right:0;bottom:max(14px, env(safe-area-inset-bottom));justify-content:center;gap:10px;padding:0 16px;display:flex;position:absolute}.replayov .rbar button{background:#040618bf;flex:0 180px;width:auto;margin:0}.replayov .rbar button[hidden]{display:none}.replayov .rnote{top:auto;bottom:calc(max(14px, env(safe-area-inset-bottom)) + 64px);text-align:center}.replayov .rstats{left:0;right:0;top:calc(8px + var(--tg-safe-area-inset-top,env(safe-area-inset-top,0px)) + var(--tg-content-safe-area-inset-top,0px));text-align:center;color:#00f0ffbf;font:600 11px ui-monospace,Menlo,Consolas,monospace;position:absolute}.replayov .rnote[hidden],.replayov .rstats[hidden]{display:none}body.replaying #app{visibility:hidden}`,dr=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function fr(e,t,n,{ms:r=1100,delay:i=0,final:a=n(t)}={}){if(dr()||!Number.isFinite(t)||t===0){e.textContent=a;return}e.classList.add(`ticking`);let o=performance.now()+i,s=i=>{let c=Math.min(1,Math.max(0,(i-o)/r));c>=1?(e.textContent=a,e.classList.remove(`ticking`)):(e.textContent=n(t*(1-2**(-10*c))).replace(/\d(?=\d?$)/g,()=>String(Math.floor(Math.random()*10))),requestAnimationFrame(s))};requestAnimationFrame(s)}function pr(e,t){let n=e.replace(/[^A-Za-z0-9◎]/g,``).slice(0,2).toUpperCase()||`?`;return`<div class="av" style="--hue:${[...e].reduce((e,t)=>(e*31+t.charCodeAt(0))%360,7)}"><b>${n}</b>${t?`<img alt="" loading="lazy" src="${t.replace(/["<>&]/g,encodeURIComponent)}">`:``}</div>`}function mr(){document.querySelectorAll(`.av img`).forEach(e=>e.addEventListener(`error`,()=>e.remove()))}var hr=1200,gr=`./oni-1.webp`,_r=[[130,95],[235,235],[285,95],[340,175],[480,140],[625,170],[665,100],[720,215],[835,85],[815,330],[845,420],[800,530],[785,700],[765,850],[705,965],[640,1065],[560,1125],[400,1125],[320,1065],[250,965],[200,850],[180,700],[150,530],[110,420],[150,330]],vr=800,yr=4.1,br=.3,xr=` .:-=+*#%@`,Sr=8,Cr=13,wr=[{x:12,y:22,w:320,h:225,color:`#ff5a3a`},{x:355,y:22,w:330,h:125,color:`#f0a040`},{x:695,y:22,w:255,h:300,color:`#f5dc55`},{x:12,y:265,w:140,h:560,color:`#a77cf0`},{x:12,y:880,w:320,h:300,color:`#e6e0f0`},{x:770,y:470,w:180,h:700,color:`#b9a3f0`}],Tr=18,L=30,Er=32,R=Math.ceil(960/L),Dr=Math.ceil(hr/Er),Or=`鬼武龍金魂刀影雷炎血夜神忍斬闇狐命運盗奪`,kr=`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン`,Ar=`0123456789`,jr=[...[...Or].map(e=>({ch:e,flip:!1})),...[...kr].map(e=>({ch:e,flip:!0})),...[...kr].map(e=>({ch:e,flip:!0})),...[...Ar].map(e=>({ch:e,flip:!1}))],Mr=`600 27px "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans JP", "Noto Sans CJK JP", sans-serif`,Nr=12,Pr=14,Fr=2,Ir=.7,Lr=8,Rr=Math.round(640/Er),zr=4,Br=.6,Vr=1.1,Hr=480,Ur=`600 15px ui-monospace, Menlo, Consolas, monospace`,Wr=55,Gr=null,Kr=!1,qr=null,Jr=null,Yr=null,Xr=null,Zr=null,Qr=null,$r=null,ei=null,ti=null,ni=0,ri=null,ii=null,ai=null,oi=null,si=null,ci=null,li=null,ui=null,di=null,fi=null,pi=null,mi=null,hi=null,gi=null,_i=null,vi=null,yi=null,bi=0,xi=(e=960,t=hr)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function Si(){let e=xi(),t=e.getContext(`2d`);return t.beginPath(),_r.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t.fillStyle=`#fff`,t.shadowColor=`#fff`,t.shadowBlur=36,t.fill(),t.shadowBlur=0,t.fill(),e}function Ci(e){let t=Si();Jr=xi();let n=Jr.getContext(`2d`);n.fillStyle=`#fff`,n.fillRect(0,0,960,hr),n.globalCompositeOperation=`destination-out`,n.drawImage(t,0,0),fa=null,qr=xi(),n=qr.getContext(`2d`),n.drawImage(e,0,0),n.globalCompositeOperation=`destination-in`,n.drawImage(Jr,0,0);let r=Math.ceil(960/Sr),i=Math.ceil(hr/Cr),a=xi(r,i).getContext(`2d`,{willReadFrequently:!0});a.drawImage(e,0,0,r,i);let o=a.getImageData(0,0,r,i).data;ti=o,ni=r,Yr=xi(),n=Yr.getContext(`2d`),n.fillStyle=`#000`,n.fillRect(0,0,960,hr),n.font=`700 12px ui-monospace, Menlo, Consolas, monospace`,n.textBaseline=`top`;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let i=(e*r+t)*4,a=o[i],s=o[i+1],c=o[i+2],l=(.3*a+.59*s+.11*c)/255,u=xr[Math.min(9,Math.floor(l**.7*10*1.15))];if(u===` `)continue;let d=Math.min(2.2,1.4/Math.max(.25,Math.max(a,s,c)/255));n.fillStyle=`rgb(${Math.min(255,a*d)|0},${Math.min(255,s*d)|0},${Math.min(255,c*d)|0})`,n.fillText(u,t*Sr,e*Cr)}n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0);let s=t=>{let n=xi(),r=n.getContext(`2d`);return r.drawImage(e,0,0),r.globalCompositeOperation=`multiply`,r.fillStyle=t,r.fillRect(0,0,960,hr),n};Xr=s(`#ff0000`),Zr=s(`#00ffff`),Qr=xi(),$r=t,ri=xi(),Di(e,t),Kr=!0}var wi=e=>e<0?0:e>1?1:e,Ti=(e,t,n)=>{let r=wi((n-e)/(t-e));return r*r*(3-2*r)},Ei=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296};function Di(e,t){let n=xi(R,Dr).getContext(`2d`,{willReadFrequently:!0});n.drawImage(e,0,0,R,Dr);let r=n.getImageData(0,0,R,Dr).data;n.clearRect(0,0,R,Dr),n.drawImage(t,0,0,R,Dr);let i=n.getImageData(0,0,R,Dr).data,a=new Float32Array(R*Dr);for(let e=0;e<a.length;e++)a[e]=(.3*r[e*4]+.59*r[e*4+1]+.11*r[e*4+2])/255;let o=(e,t)=>a[Math.max(0,Math.min(Dr-1,t))*R+Math.max(0,Math.min(R-1,e))];ii=new Float32Array(R*Dr);for(let e=0;e<Dr;e++)for(let t=0;t<R;t++){let n=o(t+1,e)-o(t-1,e),r=o(t,e+1)-o(t,e-1),a=o(t,e)**1.1*1.7+Math.sqrt(n*n+r*r)*.8;ii[e*R+t]=wi(a)*(i[(e*R+t)*4+3]/255)}ai=new Int16Array(R).fill(-1);for(let e=0;e<R;e++)for(let t=0;t<Dr;t++)if(ii[t*R+e]>.02){ai[e]=t;break}bi=0;for(let e=0;e<R;e++)for(let t=0;t<Dr;t++)ii[t*R+e]>.02&&(bi=Math.max(bi,Ni(e,t)));bi+=2.05;let s=xi(),c=s.getContext(`2d`,{willReadFrequently:!0});c.drawImage(e,0,0);let l=c.getImageData(0,0,960,hr),u=l.data;for(let e=0;e<u.length;e+=4){let t=u[e],n=u[e+1],r=u[e+2],i=(.3*t+.59*n+.11*r)/255,a=255*(.32+.68*Math.min(1,i*1.6)**.6)/Math.max(t,n,r,1);u[e]=Math.min(255,t*a+18),u[e+1]=Math.min(255,n*a+18),u[e+2]=Math.min(255,r*a+18)}for(let e=0;e<u.length;e+=4)u[e]=Math.min(255,u[e]*1.4),u[e+1]=Math.min(255,u[e+1]*1.4),u[e+2]=Math.min(255,u[e+2]*1.4);c.putImageData(l,0,0),oi=xi(),oi.getContext(`2d`).drawImage(s,0,0);let d=jr.length;si=xi(d*L,Er),ci=xi(d*58,60);let f=(e,t,n,r)=>{let i=jr[t];e.save(),e.translate(n,r),i.flip&&e.scale(-1,1),e.fillText(i.ch,0,0),e.strokeText(i.ch,0,0),e.restore()};for(let[e,t]of[[si,!1],[ci,!0]]){let n=e.getContext(`2d`);n.font=Mr,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#fff`,n.strokeStyle=`#fff`,n.lineWidth=.6,n.lineJoin=`round`,t&&(n.shadowColor=`#fff`,n.shadowBlur=12);for(let e=0;e<d;e++)t?f(n,e,e*58+Pr+L/2,31):f(n,e,e*L+L/2,17)}li=xi();let p=t=>{let n=xi(R*t,Dr*t);return n.getContext(`2d`).drawImage(e,0,0,960/L*t,hr/Er*t),n};ui=p(2),di=p(6),fi=xi();let m=fi.getContext(`2d`);m.beginPath(),_r.forEach(([e,t],n)=>n?m.lineTo(e,t):m.moveTo(e,t)),m.closePath(),m.fillStyle=`#fff`,m.strokeStyle=`#fff`,m.lineJoin=`round`,m.shadowColor=`#fff`,m.shadowBlur=90,m.lineWidth=150,m.fill(),m.stroke(),m.shadowBlur=0,m.lineWidth=110,m.fill(),m.stroke(),m.globalCompositeOperation=`destination-out`,m.drawImage(t,0,0),pi=xi(960,hr+360);let h=pi.getContext(`2d`);h.font=`600 12px ui-monospace, Menlo, Consolas, monospace`,h.textBaseline=`top`;let g=[`#9a7cff`,`#c05cff`,`#ff4d6d`,`#ffb84d`,`#7d6bff`];for(let e=0;e<pi.height;e+=15)for(let t=0;t<960;){let n=60+Math.floor(Math.random()*260);if(Math.random()<.7){h.fillStyle=g[Math.floor(Ei(Math.floor(t/240)*31+Math.floor(e/220)*7)*g.length)],h.globalAlpha=.35+Math.random()*.5;let r=Math.random(),i=r<.35?Ki(Math.ceil(n/27)):r<.6?`0x${qi()} ${Ki(Math.ceil(n/40))}`:r<.8?`[ok] ${qi()} ${Yi(1,99)}`:`$ ${Ji([`scan`,`decode`,`tail -f`,`xxd`,`sync`])} ${qi()}`;h.fillText(i.slice(0,Math.floor(n/7.3)),t,e)}t+=n+18}h.globalAlpha=1,mi=xi(),hi=xi(),gi=xi(),_i=xi(),vi=xi(R,Dr),yi=vi.getContext(`2d`).createImageData(R,Dr)}var Oi=e=>Vr*(Math.abs(e+.5-Hr/L)/(R/2))**1.1+Ei(e*17+5)*.2,ki=(e,t)=>Math.max(Rr-t*zr,ai[e]),Ai=(e,t)=>Ir+t*Br+Oi(e)+Ei(e*131+t*977+3)*.55,ji=(e,t)=>Lr*(.8+.5*Ei(e*53+t*29+11)),Mi=e=>e>=Rr?0:Math.ceil((Rr-e)/zr);function Ni(e,t){if(ai[e]<0)return 1/0;let n=Mi(t);return Ai(e,n)+(t-ki(e,n)+1)/ji(e,n)}var Pi=Math.ceil(18/zr)+1,Fi=Ni,Ii=null,Li=e=>Ti(.08,.3,e)*(1-Ti(.5,.8,e)),Ri=e=>Ti(.45,.75,e)*(1-Ti(1.05,1.45,e)),zi=e=>Ti(.95,1.6,e),Bi=e=>Ti(-.02,.06,e)*(.15+.85*Math.exp(-Math.max(0,e)/.7))*(1-Ti(2.2,3.2,e)),Vi=[];for(let e=0;e<R;e++)for(let t=0;t<4;t++){let n=6+Math.floor(Ei(e*31+t*3+1)*15),r=Dr+n+4,i=1+Math.floor(Ei(e*101+t*7+5)*3);Vi.push({c:e,len:n,span:r,rate:i*r/Nr,phase:Ei(e*13+t+9)*r})}var Hi=(e,t)=>{let n=.5*(1+Math.floor(Ei(e*7+3)*3)),r=Math.floor(t*n+Ei(e*7+2)*7);return Math.floor(Ei(e*977+r*7919)*jr.length)},Ui=0;function Wi(){if(Gr||Date.now()<Ui)return;let e=new Image;Gr=e,e.onload=()=>Ci(e),e.onerror=()=>{Gr===e&&(Gr=null),Ui=Date.now()+2e3},e.src=gr}var Gi=Wi,Ki=e=>Array.from({length:e},()=>Math.floor(Math.random()*256).toString(16).padStart(2,`0`)).join(` `),qi=()=>Array.from({length:2},()=>Math.floor(Math.random()*65536).toString(16).padStart(4,`0`)).join(``),Ji=e=>e[Math.floor(Math.random()*e.length)],Yi=(e,t,n=0)=>(e+Math.random()*(t-e)).toFixed(n),Xi=[()=>[`$ ssh root@node${Yi(1,99)}.snatch`,`> handshake ok`,`> session ${qi()}`],()=>[`$ ./scan --wallets --deep`,`[+] ${qi()}..${qi().slice(0,4)} found`,`[+] ${Yi(2,40)} wallets live`],()=>[`$ jup quote SOL ${Ji([`BONK`,`WIF`,`PUMP`,`TARGET`])}`,`[*] route ${Yi(1,4)} hops ${Yi(.05,.9,2)}%`,`[ok] out ${Yi(1e3,99999)}`],()=>[`$ tail -f mempool.log`,`tx ${qi()} ${Yi(.1,9,2)} SOL`,`tx ${qi()} ${Yi(.1,9,2)} SOL`,`tx ${qi()} ${Yi(.1,9,2)} SOL`],()=>[`$ decrypt --key ****${Yi(1e3,9999)}`,`0x${qi()}: ${Ki(6)}`,`0x${qi()}: ${Ki(6)}`,`[ok] unlocked`],()=>[`$ claw --lock target`,`[*] locking ${qi()}`,`[!!] TARGET LOCKED`],()=>[`$ snatch --now`,`[>] ${Yi(1,60,1)} SOL tracked`,`[ok] SNATCHED`],()=>[`$ ping rpc.solana`,`64 bytes time=${Yi(9,80)}ms`,`64 bytes time=${Yi(9,80)}ms`],()=>[`$ cat /dev/oni | xxd`,`${Ki(8)}`,`${Ki(8)}`,`${Ki(8)}`]],Zi=wr.map(()=>({lines:[],typing:``,typed:0,queue:[],wait:Math.random()*.8}));function Qi(e,t,n){if(e.wait>0)e.wait-=n;else if(e.typing||(e.queue.length||(e.queue=Ji(Xi)()),e.typing=e.queue.shift(),e.typed=e.typing.startsWith(`$`)?0:e.typing.length),e.typed=Math.min(e.typing.length,e.typed+Wr*n*(.7+Math.random()*.6)),e.typed>=e.typing.length){for(e.lines.push(e.typing),e.typing=``,e.typed=0;e.lines.length>t-1;)e.lines.shift();e.wait=e.queue.length?.05+Math.random()*.15:.35+Math.random()*.7}}var $i=``;function ea(e,t){let n=String(Math.floor(t*3)%2);if(wr.forEach((t,r)=>{let i=Zi[r];Qi(i,Math.floor(t.h/Tr),e),n+=`|${i.lines.length}:${i.lines[i.lines.length-1]?.length??0}:${i.typing.length}:${Math.floor(i.typed)}`}),n===$i)return;$i=n;let r=Qr.getContext(`2d`);r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,hr),r.font=Ur,r.textBaseline=`top`,wr.forEach((e,n)=>{let i=Zi[n],a=i.typing.slice(0,Math.floor(i.typed)),o=[...i.lines,a];r.save(),r.beginPath(),r.rect(e.x,e.y,e.w,e.h),r.clip();let s=e.y+e.h-o.length*Tr;if(o.forEach((t,n)=>{let i=s+n*Tr,a=Math.min(e.w,r.measureText(t).width+6);r.fillStyle=`rgba(0,0,0,0.6)`,r.fillRect(e.x,i,a,Tr),r.fillStyle=e.color,r.globalAlpha=n===o.length-1?1:.55+.4*n/o.length,r.fillText(t,e.x+3,i+1),r.globalAlpha=1}),Math.floor(t*3)%2==0){let t=e.x+3+r.measureText(a).width;r.fillStyle=e.color,r.fillRect(t,s+(o.length-1)*Tr+2,9,14)}r.restore()}),r.globalCompositeOperation=`destination-in`,r.drawImage(Jr,0,0)}var ta=3,na=Array.from({length:Math.ceil(960/ta)},()=>({len:16+Math.random()**2*240,lead:Math.random()<.18?4+Math.random()*30:0,speed:1+Math.random()*4,phase:Math.random()*7,width:Math.random()<.25?3:1.8,on:Math.random()>.22})),ra=0,ia=.8,aa=1,oa=null,sa=0;function ca(e){oa||=new Float32Array(R*Dr);let t=yi.data,n=0,r=0;for(let i=0;i<Dr;i++)for(let a=0;a<R;a++){let o=i*R+a,s=e-Fi(a,i)-Ei(o*13+7)*.35;oa[o]=s;let c=zi(s);t[o*4+3]=255*c,ii[o]>.02&&(n+=c,r++)}sa=r?n/r:1,vi.getContext(`2d`).putImageData(yi,0,0);let i=gi.getContext(`2d`);i.globalCompositeOperation=`source-over`,i.clearRect(0,0,960,hr),i.drawImage(vi,0,0,R*L,Dr*Er),i.globalCompositeOperation=`destination-in`,i.drawImage($r,0,0);let a=_i.getContext(`2d`);a.globalCompositeOperation=`source-over`,a.clearRect(0,0,960,hr),a.drawImage(Yr,0,0),a.globalCompositeOperation=`destination-in`,a.drawImage(gi,0,0)}function la(e,t){let n=mi.getContext(`2d`);n.globalCompositeOperation=`source-over`,n.clearRect(0,0,960,hr),n.globalAlpha=1-Ti(.88,1,sa),n.drawImage(fi,0,0),n.globalAlpha=1;let r=hi.getContext(`2d`);r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,hr),r.drawImage($r,0,0),r.globalCompositeOperation=`destination-out`,r.drawImage(gi,0,0),n.globalCompositeOperation=`lighter`,n.drawImage(hi,0,0),r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,hr),r.fillStyle=`#000`,r.fillRect(0,0,960,hr),r.globalCompositeOperation=`destination-in`,r.drawImage(mi,0,0),e.drawImage(hi,0,0),r.globalCompositeOperation=`source-over`,r.clearRect(0,0,960,hr),r.drawImage(pi,0,-(t/Fr*22%360)),r.globalCompositeOperation=`destination-in`,r.drawImage(mi,0,0),e.globalAlpha=.65,e.drawImage(hi,0,0),e.imageSmoothingEnabled=!1;for(let t=0;t<R*Dr;t++){if(ii[t]<=.02)continue;let n=oa[t];if(n<.08||n>1.6)continue;let r=t%R,i=(t-r)/R,a=1-zi(n),o=Li(n)*a*.9;o>.01&&(e.globalAlpha=o,e.drawImage(ui,r*2,i*2,2,2,r*L,i*Er,L,Er));let s=Ri(n)*a*.95;s>.01&&(e.globalAlpha=s,e.drawImage(di,r*6,i*6,6,6,r*L,i*Er,L,Er))}e.imageSmoothingEnabled=!0,e.globalAlpha=1}function ua(e,t,n,r){let i=li.getContext(`2d`);i.globalCompositeOperation=`source-over`,i.globalAlpha=1,i.clearRect(0,0,960,hr);let a=[],o=[],s=(e,s,c,l,u)=>{for(let d=0;d<c;d++){let f=s-d;if(f<0||f>=Dr)continue;let p=f*R+e,m=ii[p];if(m<=.02)continue;let h=u?l:r&&n<Fi(e,f)?0:1;if(h<=0)continue;let g=(1-d/c)**1.15;if(o.push(p,Math.min(1,g*h)),d===0){a.push(p,Math.min(1,.45+.7*m)*Math.min(1,h),(Math.floor(t*15)+e*3)%jr.length);continue}let _=Math.min(1,(.22+m**.7)*g*h);i.globalAlpha=_;let v=Hi(p,t);i.drawImage(si,v*L,0,L,Er,e*L,f*Er,L,Er)}};for(let e of Vi)s(e.c,Math.floor((t*e.rate+e.phase)%e.span)-e.len,e.len,1,!1);if(r&&Ii)for(let e of Ii(n))s(e.c,e.hr,e.len,1.4,!0);else if(r){for(let e=0;e<R;e++)if(!(ai[e]<0))for(let t=0;t<Pi&&!(t>0&&Rr-(t-1)*zr<=ai[e]);t++){let r=n-Ai(e,t);if(r<0)continue;let i=ki(e,t)-1+Math.floor(r*ji(e,t));i-11>Dr||s(e,i,Math.min(11,i-ki(e,t)+1),1.4,!0)}}if(r)for(let e=0;e<R*Dr;e++){let n=ii[e];if(n<=.02)continue;let r=Bi(oa[e])*(.35+.65*n)*.6;if(r<=.01)continue;let a=e%R,o=(e-a)/R;i.globalAlpha=r,i.drawImage(si,Hi(e,t)*L,0,L,Er,a*L,o*Er,L,Er)}e.fillStyle=`#000`;for(let t=0;t<o.length;t+=2){let n=o[t],r=n%R;e.globalAlpha=.45*o[t+1],e.fillRect(r*L,(n-r)/R*Er,L,Er)}i.globalAlpha=1,i.globalCompositeOperation=`source-in`,i.drawImage(oi,0,0),e.globalCompositeOperation=`lighter`,e.globalAlpha=1,e.drawImage(li,0,0);for(let t=0;t<a.length;t+=3){let n=a[t],r=n%R,i=(n-r)/R;e.globalAlpha=.9*a[t+1],e.drawImage(ci,a[t+2]*58,0,58,60,r*L-Pr,i*Er-Pr,58,60)}e.globalCompositeOperation=`source-over`;for(let t=0;t<a.length;t+=3){let n=a[t],r=n%R,i=(n-r)/R;e.globalAlpha=a[t+1],e.drawImage(si,a[t+2]*L,0,L,Er,r*L,i*Er,L,Er)}e.globalAlpha=1}function da(e,t,n,r,i,a,o){let s=i?gi:$r,c=i?_i:Yr;if(!fa){fa=xi();let e=fa.getContext(`2d`);e.drawImage(Gr,0,0),e.globalCompositeOperation=`lighter`,e.globalAlpha=.16,e.drawImage(qr,0,0)}e.drawImage(fa,0,0),ea(r,t),e.globalAlpha=.62,e.drawImage(Qr,0,0),e.globalAlpha=1,i&&la(e,n),e.globalAlpha=br+Math.sin(t*7)*.03+(a?.25*o:0),e.drawImage(c,0,0),e.globalAlpha=1,ua(e,t,n,i);let l=25+1325*(t%yr/yr);for(let t=0;t<17;t++){let n=l-170+t*170/17;e.globalAlpha=.06+t/16*.6,e.drawImage(c,0,n,960,11,0,n,960,11)}e.globalAlpha=1;let u=ri.getContext(`2d`);u.globalCompositeOperation=`source-over`,u.globalAlpha=1;let d=Math.max(0,Math.floor(l-630)),f=Math.min(hr,Math.ceil(l+40)),p=Math.max(1,f-d);u.clearRect(0,d,960,p);let m=Math.max(0,Math.min(Math.ceil(hr/Cr)-1,Math.floor(l/Cr)));na.forEach((e,n)=>{if(!e.on)return;let r=n*ta,i=e.len*(.7+.3*Math.sin(t*e.speed+e.phase));Math.random()<.05&&(i*=1.4+Math.random());let a=(m*ni+Math.min(ni-1,Math.floor(r/Sr)))*4,o=ti[a],s=ti[a+1],c=ti[a+2],d=Math.min(2.6,1.6/Math.max(.2,Math.max(o,s,c)/255)),f=`${Math.min(255,o*d)|0},${Math.min(255,s*d)|0},${Math.min(255,c*d)|0}`;u.fillStyle=`rgba(${f},0.3)`,u.fillRect(r,l-i,e.width,i*.45),u.fillStyle=`rgba(${f},0.6)`,u.fillRect(r,l-i*.55,e.width,i*.3),u.fillStyle=`rgba(${f},1)`,u.fillRect(r,l-i*.25,e.width,i*.25),e.lead&&(u.fillStyle=`rgba(${f},0.35)`,u.fillRect(r,l,e.width,e.lead*(.6+.4*Math.sin(t*2+e.phase)))),i>150&&n%4==0&&(u.fillStyle=`rgba(${f},0.9)`,u.fillRect(r-1.5,l-i-4,4,4))}),u.fillStyle=`rgba(255,255,255,0.35)`;for(let e=0;e<960;e+=24)u.fillRect(e,l-Math.random()*2,18+Math.random()*8,1.5);u.globalCompositeOperation=`destination-in`,u.drawImage(s,0,d,960,p,0,d,960,p),e.globalCompositeOperation=`lighter`,f>d&&e.drawImage(ri,0,d,960,p,0,d,960,p),e.globalCompositeOperation=`source-over`}var fa=null,pa=0,ma=0,ha=!1,ga=0,_a=()=>Math.floor(pa/yr);function va(e,t){let n=_a();pa+=t,Wi();let r=e.getContext(`2d`),i=Math.min(2,window.devicePixelRatio||1),a=Math.round((e.clientWidth||340)*i),o=Math.round((e.clientHeight||600)*i);if((e.width!==a||e.height!==o)&&(e.width=a,e.height=o),r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation=`source-over`,r.globalAlpha=1,r.fillStyle=`#000`,r.fillRect(0,0,a,o),!Kr||!Gr){ga=pa;return}let s=(pa-ga)*Fr,c=s<bi;c&&ca(s);let l=c?gi:$r,u=a/o,d=Math.min(960,Math.max(vr,hr*u)),f=d/u,p=a/d,m=-((960-d)/2)*p,h=-((hr-f)/2)*p;_a()!==n&&_a()%3==0?(ra=pa+.32,aa=2):pa>=ia&&(ra=pa+.06+Math.random()*.18,aa=.6+Math.random()*.8,ia=pa+.5+Math.random()*1.8);let g=pa<ra;r.setTransform(p,0,0,p,m,h),f>1200&&(r.globalAlpha=.6,r.save(),r.scale(1,-1),r.drawImage(qr,0,0),r.drawImage(qr,0,-2*hr),r.restore(),r.globalAlpha=1),da(r,pa,s,t,c,g,aa),r.setTransform(1,0,0,1,0,0);let _=g?3+Math.floor(Math.random()*6*aa):+(Math.random()<.12);if(g||_){ei||=xi(a,o),(ei.width!==a||ei.height!==o)&&(ei.width=a,ei.height=o);let t=ei.getContext(`2d`);t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,t.clearRect(0,0,a,o);let n=g?(Math.random()-.5)*14*aa*p:0,i=g?(Math.random()-.5)*6*aa*p:0;t.drawImage(e,n,i);for(let r=0;r<_;r++){let r=Math.random()*o,s=(4+Math.random()*(g?40:10))*p,c=(Math.random()-.5)*(g?80:24)*p*aa;t.drawImage(e,0,r,a,s,c+n,r+i,a,s)}if(g){let e=(6+Math.random()*10)*aa;t.setTransform(p,0,0,p,m+n,h+i),t.globalCompositeOperation=`lighter`,t.globalAlpha=.45,t.drawImage(Xr,e,0),t.drawImage(Zr,-e,0),t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-atop`,t.globalAlpha=1;for(let e=0;e<3;e++)t.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,t.fillRect(0,Math.random()*o,a,(1+Math.random()*2)*p);Math.random()<.3&&(t.fillStyle=`rgba(0,0,0,0.35)`,t.fillRect(0,0,a,o))}t.globalCompositeOperation=`destination-in`,t.setTransform(p,0,0,p,m,h),t.drawImage(l,0,0),r.drawImage(ei,0,0)}r.fillStyle=`rgba(0,0,0,0.18)`;for(let e=pa*40%4*p;e<o;e+=4*p)r.fillRect(0,e,a,1.5*p);let v=r.createRadialGradient(a/2,o/2,Math.min(a,o)*.42,a/2,o/2,Math.hypot(a,o)*.55);v.addColorStop(0,`rgba(0,0,0,0)`),v.addColorStop(1,`rgba(0,0,0,0.6)`),r.fillStyle=v,r.fillRect(0,0,a,o),r.setTransform(1,0,0,1,0,0)}var ya={RC_W:L,RC_H:Er,RCOLS:R,RROWS:Dr};function ba(){return Wi(),Kr}var xa=()=>qr,Sa=(e,t)=>!!ii&&ii[t*R+e]>.02;function Ca(e,t,n,r,i=0){if(!Kr||!Gr)return null;let a=!!r&&t<r.end,o=Fi,s=Ii;r&&(Fi=r.hit,Ii=r.streams);try{a&&ca(t),da(e,t,t,n,a,i>0,i)}finally{Fi=o,Ii=s}return a?gi:$r}var wa=e=>`<div class="loader"><canvas class="ascii" id="ascii" role="img" aria-label="${e.replace(/"/g,`&quot;`)}"></canvas></div>`;function Ta(){let e=document.getElementById(`ascii`);if(ha||(ga=pa),e&&va(e,0),ha)return;ha=!0,ma=0;let t=e=>{let n=document.getElementById(`ascii`);if(!n){ha=!1;return}let r=ma?Math.min(.1,(e-ma)/1e3):1/60;ma=e,document.body.classList.contains(`replaying`)||va(n,r),requestAnimationFrame(t)};requestAnimationFrame(t)}var Ea=`<polygon points="53,0 351,0 298,68 0,68"/><polygon points="0,94 298,94 351,162 53,162"/><polygon points="53,188 351,188 298,256 0,256"/>`,Da=(e,t,n=``)=>`<svg class="${e}" viewBox="0 0 351 256" aria-hidden="true">${n}<g fill="${t}">${Ea}</g></svg>`,Oa=`<defs><linearGradient id="solgrad" gradientUnits="userSpaceOnUse" x1="0" y1="256" x2="351" y2="0"><stop offset="0" stop-color="#e028fc"/><stop offset="0.5" stop-color="#7c8be0"/><stop offset="1" stop-color="#1fe9b1"/></linearGradient></defs>`,ka=()=>`<div class="logo sol" aria-label="Solana">${Da(`sol-c`,`#00f0ff`)}${Da(`sol-p`,`#ff2bd6`)}${Da(`sol-main`,`url(#solgrad)`,Oa)}</div>`,Aa=1080,ja=1350,Ma=`"Orbitron", "Rajdhani", sans-serif`,Na=`"Rajdhani", -apple-system, sans-serif`,Pa={main:`#2bff88`,glow:`rgba(43,255,136,0.75)`,tint:[20,255,140]},Fa={main:`#ff3b6b`,glow:`rgba(255,59,107,0.75)`,tint:[255,40,90]},Ia=null;function La(e,t){Ia=n=>`${e}/img?u=${encodeURIComponent(n)}&api-key=${encodeURIComponent(t)}`}async function Ra(e){if(!Ia||!/^https:\/\//.test(e))return null;try{let t=new AbortController,n=setTimeout(()=>t.abort(),8e3),r=await fetch(Ia(e),{signal:t.signal}),i=r.ok?await r.blob():null;if(clearTimeout(n),!i||!i.type.startsWith(`image/`))return null;let a=await za(URL.createObjectURL(i),!1,6e3);return a&&Ha(a)?a:null}catch{return null}}function za(e,t,n){return new Promise(r=>{let i=new Image;t&&(i.crossOrigin=`anonymous`);let a=setTimeout(()=>r(null),n);i.onload=()=>{clearTimeout(a),r(i)},i.onerror=()=>{clearTimeout(a),r(null)},i.src=e})}var Ba=new Map;function Va(e,t){let n=`${t}:${e}`,r=Ba.get(n);return r||(r=t?za(e,!0,4e3).then(t=>t&&Ha(t)?t:Ra(e)):za(e,!1,6e3),Ba.set(n,r)),r}function Ha(e){try{let t=document.createElement(`canvas`);t.width=t.height=2;let n=t.getContext(`2d`);return n.drawImage(e,0,0,2,2),n.getImageData(0,0,1,1),!0}catch{return!1}}var Ua=(e,t)=>{let n=Math.abs(e);return t===`sol`?`${n>=100?n.toFixed(1):n>=1?n.toFixed(2):n.toFixed(3)} SOL`:`$${n>=1e3?Math.round(n).toLocaleString(`en-US`):n.toFixed(2)}`},Wa=e=>{let t=Math.abs(e);return`${e>=0?`+`:`−`}${t>=1e3?Math.round(t).toLocaleString(`en-US`):t>=100?Math.round(t):t.toFixed(1)}%`},Ga=(e,t)=>{let n=Math.max(0,t-e);if(n<60)return`${Math.max(1,Math.round(n))}s`;let r=Math.round(n/60);if(r<60)return`${r}m`;let i=Math.floor(r/60);return i<48?`${i}h ${r%60}m`:`${Math.floor(i/24)}d ${i%24}h`};function Ka(e,t,n,r,i,a){let o=r;for(;o>20&&(e.font=`${n} ${o}px ${i}`,!(e.measureText(t).width<=a));o-=4);return o}function qa(e,t,n,r,i,a){e.beginPath(),e.moveTo(t,n),e.lineTo(t+r-a,n),e.lineTo(t+r,n+a),e.lineTo(t+r,n+i),e.lineTo(t+a,n+i),e.lineTo(t,n+i-a),e.closePath()}function Ja(e,t,n,r,i=1,a){let o=r?Pa:Fa;if(n===`oni`){let n=ja/1200*960,r=t.width||960;e.drawImage(t,0,0,r,r*1200/960,150,0,n,ja)}else{let n=1500,r=ja/n*1024;e.drawImage(t,0,230,1024,n,418.4,0,r,ja),e.save(),e.globalCompositeOperation=`multiply`;let i=e.createLinearGradient(0,0,Aa,ja);i.addColorStop(0,`#00f0ff`),i.addColorStop(.45,`#7a3cff`),i.addColorStop(.7,`#ff2bd6`),i.addColorStop(1,`rgb(${o.tint.join(`,`)})`),e.fillStyle=i,e.fillRect(0,0,Aa,ja),e.restore()}e.save(),e.globalCompositeOperation=`source-over`,e.globalAlpha=i,a?(e.drawImage(a.dark,0,0,Aa,ja),e.globalCompositeOperation=`screen`,e.drawImage(a.light,0,0,Aa,ja)):(Ya(e,o,`dark`),e.globalCompositeOperation=`screen`,Ya(e,o,`light`)),e.restore()}function Ya(e,t,n){if(n===`dark`){let t=e.createLinearGradient(0,0,Aa,0);t.addColorStop(0,`rgba(5,1,15,0.97)`),t.addColorStop(.42,`rgba(5,1,15,0.82)`),t.addColorStop(.75,`rgba(5,1,15,0.15)`),t.addColorStop(1,`rgba(5,1,15,0.05)`),e.fillStyle=t,e.fillRect(0,0,Aa,ja);let n=e.createLinearGradient(0,ja*.55,0,ja);n.addColorStop(0,`rgba(5,1,15,0)`),n.addColorStop(.55,`rgba(5,1,15,0.9)`),n.addColorStop(1,`rgba(5,1,15,0.98)`),e.fillStyle=n,e.fillRect(0,ja*.55,Aa,ja*.45);return}let r=e.createRadialGradient(Aa*.8,ja*.35,50,Aa*.8,ja*.35,Aa);r.addColorStop(0,`rgba(${t.tint.join(`,`)},0.18)`),r.addColorStop(1,`rgba(${t.tint.join(`,`)},0)`),e.fillStyle=r,e.fillRect(0,0,Aa,ja)}function Xa(e,t){let n=e?Pa:Fa,r=e=>{let r=t*.5,i=Object.assign(document.createElement(`canvas`),{width:Math.round(Aa*r),height:Math.round(ja*r)}),a=i.getContext(`2d`);return a.scale(r,r),Ya(a,n,e),i};return{dark:r(`dark`),light:r(`light`)}}function Za(e,t){let n=t||1,r=()=>(n=n*16807%2147483647)/2147483647;e.save(),e.fillStyle=`rgba(0,0,0,0.22)`;for(let t=0;t<ja;t+=4)e.fillRect(0,t,Aa,1.5);for(let t=0;t<7;t++){let t=r()*ja,n=3+r()*14,i=(r()-.5)*60;e.drawImage(e.canvas,0,t,Aa,n,i,t,Aa,n)}e.restore()}function Qa(e,t,n,r){let i=r/256,a=[[53,0,351,0,298,68,0,68],[0,94,298,94,351,162,53,162],[53,188,351,188,298,256,0,256]],o=e.createLinearGradient(t,n+r,t+351*i,n);o.addColorStop(0,`#e028fc`),o.addColorStop(.5,`#7c8be0`),o.addColorStop(1,`#1fe9b1`);let s=(r,o)=>{e.fillStyle=o;for(let o of a){e.beginPath();for(let a=0;a<8;a+=2)e.lineTo(t+r+o[a]*i,n+o[a+1]*i);e.closePath(),e.fill()}};e.save(),e.globalAlpha=.6,s(-4,`#00f0ff`),s(4,`#ff2bd6`),e.globalAlpha=1,s(0,o),e.restore()}function $a(e,t,n,r,i,a,o){if(e.save(),e.beginPath(),e.arc(n,r,i,0,Math.PI*2),e.closePath(),t){e.clip();let a=Math.max(2*i/t.width,2*i/t.height);e.drawImage(t,n-t.width*a/2,r-t.height*a/2,t.width*a,t.height*a)}else{let t=e.createLinearGradient(n-i,r-i,n+i,r+i);t.addColorStop(0,`#ff2bd6`),t.addColorStop(1,`#00f0ff`),e.fillStyle=t,e.fill(),e.fillStyle=`#05010f`,e.font=`900 ${Math.round(i*1.05)}px ${Ma}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(a.slice(0,1).toUpperCase()||`?`,n,r+i*.05)}e.restore(),e.save(),e.strokeStyle=o,e.lineWidth=5,e.shadowColor=o,e.shadowBlur=18,e.beginPath(),e.arc(n,r,i+3,0,Math.PI*2),e.stroke(),e.restore()}function eo(e,t,n,r,i,a){e.save(),e.textAlign=`left`,e.textBaseline=`alphabetic`,e.globalAlpha=.7,e.fillStyle=`#00f0ff`,e.fillText(t,n-6,r),e.fillStyle=`#ff2bd6`,e.fillText(t,n+6,r),e.globalAlpha=1,e.shadowColor=a,e.shadowBlur=40,e.fillStyle=i,e.fillText(t,n,r),e.shadowBlur=0,e.fillText(t,n,r),e.restore()}async function to(e,t){await Promise.all([document.fonts.load(`900 100px "Orbitron"`),document.fonts.load(`700 40px "Rajdhani"`),document.fonts.load(`500 40px "Rajdhani"`)]).catch(()=>{});let[n,r,i]=await Promise.all([Va(t,!1),e.logo?Va(e.logo,!0):Promise.resolve(null),e.user?.photo?Va(e.user.photo,!0):Promise.resolve(null)]);return{art:n,logo:r,user:i}}async function no(e,t,n,r){e.width=Aa,e.height=ja;let i=e.getContext(`2d`),a=await to(t,r);i.fillStyle=`#05010f`,i.fillRect(0,0,Aa,ja),a.art&&Ja(i,a.art,n,t.pct>=0),Za(i,Math.round(t.lastAt+t.pct*1e3)),ro(i,t,a)}function ro(e,t,n,r=1){let{logo:i,user:a}=n,o=t.pct>=0,s=o?Pa:Fa,c=Math.max(0,Math.min(1,r));t={...t,pct:t.pct*c,pnl:t.pnl*c,paid:t.paid*c,got:t.got*c,lastAt:t.firstAt+(t.lastAt-t.firstAt)*c},Qa(e,72,70,46),e.fillStyle=`#e8f9ff`,e.font=`900 34px ${Ma}`,e.textBaseline=`alphabetic`,e.textAlign=`left`,e.shadowColor=`rgba(0,240,255,0.8)`,e.shadowBlur=16,e.fillText(`KRYPTO SNATCHER`,152,108),e.shadowBlur=0;let l=230;t.user?($a(e,a&&Ha(a)?a:null,114,l,42,t.user.name,`#ff2bd6`),e.fillStyle=`#e8f9ff`,e.font=`700 44px ${Na}`,e.fillText(t.user.name.slice(0,22),180,l+15),l+=110):l+=30,$a(e,i&&Ha(i)?i:null,122,l+40,50,t.symbol,s.main),e.fillStyle=`#ffffff`,Ka(e,`$${t.symbol}`,900,64,Ma,560),e.fillText(`$${t.symbol}`,197,l+50),e.fillStyle=`#8f9cc8`,e.font=`500 32px ${Na}`,e.fillText(t.name.slice(0,32),200,l+92);let u=Wa(t.pct);Ka(e,u,900,190,Ma,936),eo(e,u,72,l+330,s.main,s.glow),e.font=`700 58px ${Na}`,e.fillStyle=s.main,e.fillStyle=t.pnl>=0?Pa.main:Fa.main,e.fillText(`${t.pnl>=0?`+`:`−`}${Ua(t.pnl,t.unit)} ${t.pnl>=0?`profit`:`loss`}`,76,l+420);let d=t.finished?o?`PRINTED`:`REKT`:`STILL HOLDING`;e.font=`900 30px ${Ma}`;let f=e.measureText(d).width+48;qa(e,72,l+460,f,56,12),e.fillStyle=o?`rgba(43,255,136,0.14)`:`rgba(255,59,107,0.14)`,e.fill(),e.strokeStyle=s.main,e.lineWidth=3,e.stroke(),e.fillStyle=s.main,e.fillText(d,96,l+499),qa(e,72,1020,936,200,22),e.fillStyle=`rgba(10,15,36,0.86)`,e.fill(),e.strokeStyle=`rgba(0,240,255,0.55)`,e.lineWidth=2,e.stroke(),[{k:`PUT IN`,v:Ua(t.paid,t.unit),c:`#e8f9ff`},{k:t.finished?`GOT BACK`:`WORTH NOW`,v:Ua(t.got,t.unit),c:s.main},{k:`HELD`,v:Ga(t.firstAt,t.lastAt),c:`#e8f9ff`}].forEach((t,n)=>{let r=72+312*n+36;e.fillStyle=`#8f9cc8`,e.font=`700 26px ${Ma}`,e.fillText(t.k,r,1090),e.fillStyle=t.c,Ka(e,t.v,700,54,Na,262),e.fillText(t.v,r,1160),n&&(e.fillStyle=`rgba(0,240,255,0.25)`,e.fillRect(72+312*n,1060,2,120))}),e.fillStyle=`#8f9cc8`,e.font=`500 30px ${Na}`;let p=new Date(t.lastAt*1e3).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`});e.fillText(`${t.wallets} wallet${t.wallets===1?``:`s`} · ${p}`,72,1278),e.textAlign=`right`,e.fillStyle=`#00f0ff`,e.font=`700 28px ${Ma}`,e.fillText(o?`> GG_`:`> RUN IT BACK_`,1008,1278),e.textAlign=`left`}function io(e,t){return new Promise(n=>{try{e.toBlob(e=>n(e?new File([e],t,{type:`image/png`}):null),`image/png`)}catch{n(null)}})}var ao=`https://api.geckoterminal.com/api/v2`,oo=null;function so(e,t){oo=n=>`${e}/gt${n}${n.includes(`?`)?`&`:`?`}api-key=${encodeURIComponent(t)}`}var co={direct:{cool:0,strikes:0,sent:[]},relay:{cool:0,strikes:0,sent:[]}},lo={direct:8,relay:20},uo=3,fo=600,po=6e3,mo=2e3,ho=`chartRelayKey`,go=(()=>{try{return Date.now()-Number(localStorage.getItem(ho)||0)<2592e5}catch{return!1}})(),_o=e=>new Promise(t=>setTimeout(t,e));function vo(e){let t=Date.now();return e.sent=e.sent.filter(e=>t-e<6e4),e.sent.length}var yo={direct:new Set,relay:new Set},bo=e=>[...yo[e]].some(e=>Date.now()-e>mo);function xo(){return(go?[`relay`,`direct`]:[`direct`,`relay`]).filter(e=>e===`direct`||oo).sort((e,t)=>Number(bo(e))-Number(bo(t)))}function So(e,t){let n=co[e],r=lo[e]-(t?uo:0),i=Math.max(Date.now(),n.cool);return vo(n)>=r&&(i=Math.max(i,n.sent[n.sent.length-r]+6e4)),i}function Co(e,t){let n=co[e];n.strikes++;let r=t?8e3:e===`direct`?15e3:8e3;n.cool=Date.now()+Math.min(t?6e4:6e5,r*2**(n.strikes-1))}var wo=[],To=new Map,Eo=!1,Do=0,Oo=0,ko=0;function Ao(e,t,n){let r=To.get(e);if(r){let i=wo.find(t=>t.path===e);if(i&&!t){i.prefetch=!1;let e=i.alive;i.alive=()=>e()||n()}return r}let i=new Promise(r=>wo.push({path:e,prefetch:t,alive:n,done:r}));return To.set(e,i),i.finally(()=>To.delete(e)),jo(),i}async function jo(){if(!Eo){Eo=!0;try{for(;wo.length;){for(let e=wo.length-1;e>=0;e--)wo[e].alive()||wo.splice(e,1)[0].done({ok:!1,why:`failed`,retryAt:0});wo.sort((e,t)=>Number(e.prefetch)-Number(t.prefetch));let e=wo.find(e=>!e.prefetch||ko===0);if(!e||Oo>=2)break;let t=xo(),n=t.filter(t=>So(t,e.prefetch)<=Date.now());if(!n.length){let n=Math.min(...t.map(t=>So(t,e.prefetch)));n-Date.now()>1500||e.prefetch?(wo.splice(wo.indexOf(e),1),e.done({ok:!1,why:`busy`,retryAt:n})):await _o(n-Date.now());continue}let r=Do+fo-Date.now();r>0?await _o(r):(wo.splice(wo.indexOf(e),1),Oo++,e.prefetch&&ko++,Do=Date.now(),Mo(e.path,n,e.prefetch).catch(()=>({ok:!1,why:`failed`,retryAt:Date.now()+5e3})).then(t=>e.done(t)).finally(()=>{Oo--,e.prefetch&&ko--,jo()}))}}finally{Eo=!1}}}async function Mo(e,t,n){let r=!1;for(let n of t){let t=co[n],i=n===`direct`?ao+e:oo(e);t.sent.push(Date.now()),Do=Date.now();let a=Date.now();yo[n].add(a);let o=new AbortController,s=setTimeout(()=>o.abort(),po);try{let e=await fetch(i,{headers:{accept:`application/json`},signal:o.signal});if(e.status===429){r=!0,Co(n,!0);continue}if(e.status===404){if((await e.text().catch(()=>``)).includes(`"errors"`))return t.strikes=0,{ok:!1,why:`missing`,retryAt:Date.now()+12e4};continue}if(!e.ok){e.status>=500&&Co(n,!1);continue}let a=await e.json();if(t.strikes=0,t.cool=0,n===`relay`){go=e.headers.get(`x-chart-source`)===`key`;try{go?localStorage.setItem(ho,String(Date.now())):localStorage.removeItem(ho)}catch{}}return{ok:!0,data:a}}catch{Co(n,!1)}finally{clearTimeout(s),yo[n].delete(a)}}let i=Math.min(...xo().map(e=>So(e,n)));return{ok:!1,why:r?`busy`:`failed`,retryAt:Math.max(i,Date.now()+3e3)}}var No=432e5,Po=36e5,Fo=new Map;function Io(e){let t=Date.now(),n=Fo.get(e);if(n)return n.info===null?t-n.at<12e4?null:void 0:n.info;try{let n=JSON.parse(localStorage.getItem(`gtpool:${e}`)||`null`);if(!n||n.born===void 0)return;let r=n.born!==null&&t/1e3-n.born<172800;if(t-n.at>(r?Po:No))return;let i={p:n.p,born:n.born};return Fo.set(e,{info:i,at:n.at}),i}catch{return}}function Lo(e,t){if(Fo.set(e,{info:t,at:Date.now()}),t)try{localStorage.setItem(`gtpool:${e}`,JSON.stringify({...t,at:Date.now()}))}catch{}}var Ro=e=>{let t=e?Date.parse(e):NaN;return Number.isFinite(t)?Math.floor(t/1e3):null};async function zo(e,t){let n=Io(e);if(n)return{ok:!0,data:n};if(n===null)return{ok:!1,why:`missing`,retryAt:Date.now()+12e4};let r=await Ao(`/networks/solana/tokens/${e}/pools?page=1`,!1,t);if(!r.ok)return r.why===`missing`&&Lo(e,null),r;let i=r.data?.data?.[0]?.attributes;if(!i?.address)return Lo(e,null),{ok:!1,why:`missing`,retryAt:Date.now()+12e4};let a={p:i.address,born:Ro(i.pool_created_at)};return Lo(e,a),{ok:!0,data:a}}async function Bo(e,t){let n=await Ao(`/networks/solana/tokens/${e}/pools?page=1`,!1,t);if(!n.ok)return n;let r=[];for(let e of n.data?.data??[])e.attributes?.address&&r.push({p:e.attributes.address,born:Ro(e.attributes.pool_created_at)});return{ok:!0,data:r}}function Vo(e){let t=[...new Set(e)].filter(e=>Io(e)===void 0).slice(0,30);t.length<2||Ao(`/networks/solana/tokens/multi/${t.join(`,`)}?include=top_pools`,!0,()=>!0).then(e=>{if(!e.ok)return;let t=new Map((e.data.included??[]).filter(e=>e.type===`pool`).map(e=>[e.id,e.attributes]));for(let n of e.data.data??[]){let e=n.attributes?.address,r=n.relationships?.top_pools?.data?.[0]?.id,i=r?t.get(r):void 0;e&&i?.address&&Lo(e,{p:i.address,born:Ro(i.pool_created_at)})}}).catch(()=>{})}var Ho={m1:{tf:`minute`,agg:1,sec:60,keep:400},m5:{tf:`minute`,agg:5,sec:300,keep:1e3},h1:{tf:`hour`,agg:1,sec:3600,keep:1e3},d1:{tf:`day`,agg:1,sec:86400,keep:1e3}},Uo=new Map,Wo=`gtcIndex`,Go=16,Ko=e=>Number(e.toPrecision(7));function qo(e){let t=Uo.get(e);if(t)return t;try{let t=JSON.parse(localStorage.getItem(`gtc:${e}`)||`null`);if(!t?.l?.length)return null;let n={at:t.at,start:t.start,list:t.l.map(([e,t,n,r,i])=>({t:e,o:t,h:n,l:r,c:i}))};return Uo.set(e,n),n}catch{return null}}function Jo(e,t){Uo.set(e,t);try{let n=JSON.parse(localStorage.getItem(Wo)||`[]`);n=[e,...n.filter(t=>t!==e)];for(let e of n.splice(Go))localStorage.removeItem(`gtc:${e}`);localStorage.setItem(Wo,JSON.stringify(n)),localStorage.setItem(`gtc:${e}`,JSON.stringify({at:t.at,start:t.start,l:t.list.map(e=>[e.t,Ko(e.o),Ko(e.h),Ko(e.l),Ko(e.c)])}))}catch{}}function Yo(e,t){return qo(`${e}|${t}`)}function Xo(e){let t=e?.data?.attributes?.ohlcv_list;return Array.isArray(t)?t.filter(e=>Array.isArray(e)&&e.length>=5&&e.slice(0,5).every(e=>Number.isFinite(Number(e))&&Number(e)>=0)).map(([e,t,n,r,i])=>({t:Number(e),o:Number(t),h:Number(n),l:Number(r),c:Number(i)})).filter(e=>e.o>0&&e.c>0).sort((e,t)=>e.t-t.t):null}function Zo(e,t){let n=new Map(e.list.map(e=>[e.t,e]));for(let e of t)n.set(e.t,e);e.list=[...n.values()].sort((e,t)=>e.t-t.t)}var Qo=e=>[5,20,100,300,1e3].find(t=>t>=e)??1e3,$o=(e,t,n,r,i)=>`/networks/solana/pools/${e}/ohlcv/${Ho[n].tf}?aggregate=${Ho[n].agg}&limit=${r}&currency=usd&token=${t}&include_empty_intervals=true${i?`&before_timestamp=${i}`:``}`,es=(e,t)=>e===`d1`?Math.min(t,175):t,ts=new Map;function ns(...e){let t=`${e[0]}|${e[2]}`,n=(ts.get(t)??Promise.resolve()).catch(()=>{}).then(()=>rs(...e));return ts.set(t,n),n.finally(()=>ts.get(t)===n&&ts.delete(t)).catch(()=>{}),n}async function rs(e,t,n,r,i){let a=Ho[n],o=`${e}|${n}`,s=qo(o)??{list:[],at:0,start:null},c=Date.now()/1e3,l=!1,u=null,d=s.list[s.list.length-1];if(!d||Date.now()-s.at>i.freshMs){let o=d?Math.ceil((c-d.t)/a.sec)+1:Math.ceil((c-r)/a.sec)+2;o>1e3&&(s.list=[],s.start=null);let f=Qo(Math.max(3,Math.min(1e3,o))),p=await Ao($o(e,t,n,f),i.prefetch,i.alive),m=p.ok?Xo(p.data):null;if(!p.ok)u=p;else if(!m)u={ok:!1,why:`failed`,retryAt:Date.now()+1e4};else{let e=!s.list.length;Zo(s,m),s.at=Date.now(),e&&m.length<es(n,f)&&(s.start=m.length?m[0].t:null),l=!0}}for(let o=0;!u&&s.start===null&&s.list.length&&s.list[0].t>r+a.sec&&o<3;o++){let r=await Ao($o(e,t,n,1e3,s.list[0].t),i.prefetch,i.alive),a=r.ok?Xo(r.data):null;if(!r.ok||!a)break;let o=a.filter(e=>e.t<s.list[0].t);if(!o.length){s.start=s.list[0].t;break}Zo(s,o),o.length<es(n,1e3)&&(s.start=s.list[0].t),l=!0}if(l){let e=Math.ceil((c-r)/a.sec)+4,t=Math.max(a.keep,e);s.list.length>t&&(s.list=s.list.slice(-t),s.start=null),Jo(o,s)}return u?{s:s.list.length?s:null,a:u}:{s,a:{ok:!0,data:s}}}var is=`#ff2bd6`,as=`#00f0ff`,os=`#ff3b6b`,z=Math.random,ss=[0,.33,.66].map(e=>({x:e,w:z()<.3?1.3:.9,len:.25+z()**2*.9,speed:1+z()*4,phase:z()*7})),cs=[[`scan`,30],[`glitch`,12],[`band`,20],[`fix`,14],[`roll`,14],[`static`,10]];function ls(){let e=z()*100;for(let[t,n]of cs){if(e<n)return t;e-=n}return`scan`}function us(e){let t=ls(),n={type:t,t0:e,dur:1,power:.5+z()*1.5,nb:e,bu:0},r=()=>{let e=.15+z()*.4,t=z()*(1-e);n.z0=t,n.z1=t+e};return t===`scan`?(n.scan=!0,n.s0=z()*.85,n.s1=z()<.7?1:Math.min(1,n.s0+.15+z()*.6),n.dur=(n.s1-n.s0)*(.6+z()*2)+.1):t===`glitch`?(n.z0=0,n.z1=1,n.dur=.3+z()*1.6):t===`band`?(r(),n.dur=.3+z()*2):t===`fix`?(r(),n.scan=!0,n.fix=!0,n.s0=Math.max(0,n.z0-.05-z()*.3),n.s1=Math.min(1,n.z1+.05+z()*.3),n.dur=.6+z()*1.8):t===`roll`?(n.h=.18+z()*.14,n.r0=z()*.6-n.h,n.dur=.5+z()*1.6):(z()<.5?(n.z0=0,n.z1=1):r(),n.dur=.08+z()*.3),n}function ds(){let e=()=>document.createElement(`canvas`),t=e(),n=e(),r={[as]:e(),[os]:e()},i=!1,a=new Map,o=0,s=e=>{let n=r[e];if(!i){for(let[e,n]of Object.entries(r)){n.width=t.width,n.height=t.height;let r=n.getContext(`2d`);r.drawImage(t,0,0),r.globalCompositeOperation=`source-in`,r.fillStyle=e,r.fillRect(0,0,n.width,n.height)}i=!0}return n};return{layer(e,n,r){(t.width!==e||t.height!==n)&&(t.width=e,t.height=n);let a=t.getContext(`2d`);return a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,e,n),a.setTransform(r,0,0,r,0,0),i=!1,a},render(e,r,i,c,l=!1){o++,e.save();let u=e.getTransform();if(e.setTransform(1,0,0,1,u.e,u.f),l)e.drawImage(t,0,0),e.restore();else{for(let l of r){let r=a.get(l.key);if(!r){if(r={fx:[],next:i+z()*1.5,breath:4+z()*6,phase:z()*7,drift:20+z()*40,seen:o},z()<.6){let e=us(i);e.t0-=z()*e.dur*.8,r.fx.push(e)}a.set(l.key,r)}r.seen=o,i>=r.next&&(r.fx.length<3&&r.fx.push(us(i)),r.next=i+.15-Math.log(1-z())*1.1),r.fx=r.fx.filter(e=>i<e.t0+e.dur);let u=Math.round((l.x-3)*c),d=Math.round((l.w+6)*c),f=Math.round(l.hy*c),p=Math.max(1,Math.round((l.ly-l.hy)*c)),m=3*c,h=l.w*c,g=(l.y-l.hy)*c,_=l.h*c;(n.width<d||n.height<p)&&(n.width=Math.max(n.width,d),n.height=Math.max(n.height,p));let v=n.getContext(`2d`);v.setTransform(1,0,0,1,0,0),v.globalCompositeOperation=`source-over`,v.globalAlpha=1,v.clearRect(0,0,d,p),v.drawImage(t,u,f,d,p,0,0,d,p);let y=[],b=[],x=[];for(let e of r.fx){let t=(i-e.t0)/e.dur;if(e.scan){let n=e.s0+(e.s1-e.s0)*t;b.push(n);let r=(g+_*n)/p;e.fix&&r<e.z1&&y.push([Math.max(e.z0,r),e.z1,e.power])}if((e.type===`glitch`||e.type===`band`)&&(i>=e.nb&&(e.bu=i+.04+z()*.25,e.nb=e.bu+.03+z()*.45),i<e.bu&&y.push([e.z0,e.z1,e.power])),e.type===`roll`){let n=e.r0+(1-e.r0+.05)*t;y.push([n,Math.min(1,n+e.h),e.power])}e.type===`static`&&x.push([e.z0,e.z1])}for(let[e,n,r]of y){let i=Math.max(0,e*p),a=Math.min(p,n*p);if(a-i<1)continue;v.clearRect(0,i,d,a-i);let o=1+Math.floor(z()*3),l=(z()-.5)*2*r*c;for(let e=0;e<o;e++){let n=i+(a-i)*e/o,p=(a-i)/o+1,m=l+(z()-.5)*7*r*c;v.globalCompositeOperation=`lighter`,v.globalAlpha=.55,v.drawImage(s(as),u,f+n,d,p,m-2*c,n,d,p),v.drawImage(s(os),u,f+n,d,p,m+2*c,n,d,p),v.globalCompositeOperation=`source-over`,v.globalAlpha=z()<.25?.35:1,v.drawImage(t,u,f+n,d,p,m,n,d,p),v.globalAlpha=1}z()<.5&&(v.fillStyle=`rgba(255,255,255,${.3+z()*.5})`,v.fillRect(l,i+z()*(a-i),d,(.5+z())*c)),z()<.4&&x.push([e,n])}v.globalCompositeOperation=`source-atop`;for(let[e,t]of x){let n=Math.max(g,e*p),r=Math.min(g+_,t*p),i=(r-n)*h/(c*c*1.8);for(let e=0;e<i;e++){let e=z();v.fillStyle=e<.4?`#fff`:e<.7?is:e<.85?as:`#05010f`,v.fillRect(m+z()*h,n+z()*(r-n),c,c)}}v.globalCompositeOperation=`lighter`;for(let e of b){let t=g+_*e;v.save(),v.beginPath(),v.rect(m,g,h,_),v.clip();for(let e of ss){let n=e.len*_*(.7+.3*Math.sin(i*e.speed+e.phase+l.key));z()<.06&&(n*=1.4+z());let r=m+e.x*h,a=e.w*c;v.fillStyle=`rgba(255,150,240,0.3)`,v.fillRect(r,t-n,a,n*.45),v.fillStyle=`rgba(255,170,245,0.6)`,v.fillRect(r,t-n*.55,a,n*.3),v.fillStyle=`rgba(255,228,252,1)`,v.fillRect(r,t-n*.25,a,n*.25)}v.fillStyle=`rgba(255,255,255,0.65)`,v.fillRect(m,t-z()*1.2*c,h*(.6+z()*.4),.8*c),v.restore()}v.globalCompositeOperation=`source-atop`,v.fillStyle=`rgba(5,1,15,0.24)`;for(let e=g+(i*r.drift+r.phase*3)%4*c;e<g+_;e+=(3+z()*2)*c)v.fillRect(m,e,h,(.7+z()*.8)*c);e.globalAlpha=Math.min(1,.93+Math.sin(i*r.breath+r.phase)*.07),e.drawImage(n,0,0,d,p,u,f,d,p),e.globalAlpha=1}if(o%120==0)for(let[e,t]of a)o-t.seen>60&&a.delete(e);e.restore()}}}}var fs=1.1,ps=4.8,ms=13.75,hs=.8,gs=ms/hs,B=Aa,_s=ja,vs=960,ys=1200,bs=ja/ys,xs=Aa-vs*bs+150,Ss=(e,t)=>[xs+e*bs,t*bs],Cs=e=>e<0?0:e>1?1:e,ws=(e,t,n)=>{let r=Cs((n-e)/(t-e));return r*r*(3-2*r)},V=e=>{let t=Math.imul(e|0,374761393)+668265263|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296},Ts=(e,t,n)=>{let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=(e,t)=>V(e*7919+t*104729+n*15485863),c=a*a*(3-2*a),l=o*o*(3-2*o),u=s(r,i),d=s(r+1,i),f=s(r,i+1),p=s(r+1,i+1);return u+(d-u)*c+(f-u)*l+(u-d-f+p)*c*l},Es=(e,t)=>Object.assign(document.createElement(`canvas`),{width:e,height:t}),Ds=0,Os=ja,ks=(e,t,n,r,i,a)=>{let o=t.width/B;e.drawImage(t,0,(n-Ds)*o,t.width,r*o,i,a,B,r)},As=(e,t,n,r,i,a)=>{let o=t.width/B;e.drawImage(t,0,n*o,t.width,r*o,i,a,B,r)},js=e=>`600 ${e}px "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans JP", "Noto Sans CJK JP", sans-serif`,Ms=[{at:Ss(480,640),t:6.800000000000001,rmax:700,dur:1.6,ch:`鬼`,drop:0},{at:[300,330],t:7.1000000000000005,rmax:620,dur:1.5,ch:`炎`,drop:.35},{at:[960,250],t:7.250000000000001,rmax:620,dur:1.5,ch:`魂`,drop:.35},{at:[220,1090],t:7.3500000000000005,rmax:620,dur:1.5,ch:`斬`,drop:.35},{at:[900,1200],t:7.450000000000001,rmax:620,dur:1.45,ch:`龍`,drop:.35}],Ns=6.3500000000000005,Ps=(e,t)=>t<e.t?-1:e.rmax*Cs((t-e.t)/e.dur)**.8;function Fs(e){if(e<40)return[];let t=Math.hypot(640,e*.5)+60;return[{at:[620,-e*.55],t:7.370000000000001,rmax:t,dur:1.45,ch:`雷`,drop:.3},{at:[420,ja+e*.55],t:7.470000000000001,rmax:t,dur:1.42,ch:`影`,drop:.38}]}var Is=(e,t)=>{let n=1/0;for(let r of Ms){let i=Math.hypot(e-r.at[0],(t-r.at[1])*.95),a=Math.min(1,i/r.rmax)**1.25;i<=r.rmax&&(n=Math.min(n,r.t+r.dur*a))}return n},Ls=9.450000000000001,Rs=Math.max(...Ms.map(e=>e.t+e.dur))+.2,zs=(e,t,n)=>80*(Ts(e/70,t/70-n*2.2,2)-.5)+30*(Ts(e/24,t/24-n*4,3)-.5),{RC_W:Bs,RC_H:Vs,RCOLS:Hs,RROWS:Us}=ya,Ws=16,Gs=null,Ks=null;function qs(){if(!Gs){Gs=new Float32Array(Hs*Us),Ks=new Int16Array(Hs).fill(-1);for(let e=0;e<Hs;e++){let t=1/0;for(let n=0;n<Us;n++){let[r,i]=Ss((e+.5)*Bs,(n+.5)*Vs),a=Is(r,i)+.05;Gs[n*Hs+e]=a,Sa(e,n)&&a<t&&(t=a,Ks[e]=n)}}}let e=(e,t)=>Gs[t*Hs+e],t=(t,n)=>{let r=Ks[t];return r<0||n<r?e(t,n):Math.max(e(t,n),e(t,r)+(n-r)/Ws)},n=0;for(let e=0;e<Hs;e++)for(let r=0;r<Us;r++)Sa(e,r)&&(n=Math.max(n,t(e,r)));return{hit:t,end:n+2.2,streams:t=>{let n=[];for(let r=0;r<Hs;r++){let i=Ks[r];if(i<0)continue;let a=t-e(r,i);if(a<0)continue;let o=i-1+Math.floor(a*Ws);o-11>Us||n.push({c:r,hr:o,len:Math.min(11,o-i+1)})}return n}}}var Js=36,Ys=600,Xs=B-72,Zs=590,Qs=62,$s=Js+Xs-26,ec=736,tc=1156,nc=`#00f0ff`,rc=`#ff2bd6`,ic=`#39ff88`,ac=`#ffd84a`,oc=900;function sc(e,t){return t&&t>e.l*.5&&t<e.h*2?Math.min(e.h,Math.max(e.l,t)):(e.o+e.c)/2}function cc(e,t){let n=e.c>=e.o,r=[[0,e.o],[.3,n?e.l:e.h],[.68,n?e.h:e.l],[1,e.c]];if(t){let e=Math.min(.97,Math.max(.03,t[0]));for(let t of r.slice(1,3))Math.abs(t[0]-e)<.12&&(t[0]=e<.5?Math.min(.95,e+.15):Math.max(.05,e-.15));r.push([e,t[1]]),r.sort((e,t)=>e[0]-t[0])}return r}function lc(e,t){let n=e[0][1],r=e[0][1],i=e[0][1];for(let a=1;a<e.length;a++){let[o,s]=e[a-1],[c,l]=e[a];if(t>=c)i=l;else{i=c>o?s+(l-s)*(t-o)/(c-o):l,n=Math.min(n,i),r=Math.max(r,i);break}n=Math.min(n,l),r=Math.max(r,l)}return{cur:i,lo:n,hi:r}}function uc(e){let t=e.candles,n=t.length,r=t[0].t,i=t=>Math.min(n-.001,Math.max(0,(t-r)/e.sec)),a=i(e.buyAt),o=e.sellAt===null?null:Math.max(a+.5,i(e.sellAt)),s=sc(t[Math.floor(a)],e.buyPrice),c=o===null?null:sc(t[Math.floor(o)],e.sellPrice),l=Math.min(...t.map(e=>e.l),s,c??s),u=Math.max(...t.map(e=>e.h),s,c??s),d=u/l>5?Math.log:e=>e,f=d(l),p=d(u),m=(p-f)*.07||Math.abs(f)*.05||1;l=f-m,u=p+m;let h=e=>tc-(d(e)-l)/(u-l)*420,g=Math.max(n,36),_=($s-Qs)/g,v=Qs+(g-n)/2*_,y=Math.max(2,Math.floor(_*.72));y=Math.min(_*.92,y*1.3);let b=Math.max(2,n*.05),x=e=>Math.exp(e<0?-((e/b)**2):-((e/(b*.3))**2)),S=e=>Math.max(.2,1-.72*x(e-a)-(o===null?0:.72*x(e-o))),C=new Float32Array(901);for(let e=1;e<=oc;e++)C[e]=C[e-1]+1/S((e-.5)*n/oc);let w=C[oc];for(let e=0;e<=oc;e++)C[e]=C[e]/w*ps;let T=e=>{let t=e/n*oc,r=Math.min(899,Math.floor(t));return fs+C[r]+(C[r+1]-C[r])*(t-r)},E=[];for(let e=0;e<230;e++){let t=V(e*11+1)<.3;E.push({a:t?V(e*11+2)*Math.PI*2:-Math.PI/2+(V(e*11+2)-.5)*Math.PI*1.25,v:420+1500*V(e*11+3)**1.3,born:e<160?0:V(e*11+4)*.3,life:.45+V(e*11+5)*.95,w:1.4+V(e*11+6)*2.4,hot:V(e*11+7)})}let D=[];for(let e=0;e<70;e++)D.push({a:V(e*5+900)*Math.PI*2,v:300+900*V(e*5+901),born:0,life:.5+.7*V(e*5+902),w:18+18*V(e*5+903),hot:V(e*5+904)});let O=[];for(let e=0;e<110;e++)O.push({x:Js+V(e*3+500)*Xs,y:340+V(e*3+501)*850,at:.2+.32*V(e*3+502),bend:(V(e*3+503)-.5)*260,glyph:`01$#%&@*+<>/\\|{}[]=`[Math.floor(V(e*3+504)*19)],col:V(e*3+505)<.5?nc:rc});return{ch:e,n,step:_,x0:v,bw:y,buyI:a,sellI:o,buyP:s,sellP:c,y:h,tab:C,buyT:T(a),sellT:o===null?1/0:T(o),sparks:E,shards:D,pull:O,fx:ds()}}function dc(e,t){let n=t-fs;if(n<=0)return 0;if(n>=ps)return e.n;let r=0,i=oc;for(;i-r>1;){let t=r+i>>1;e.tab[t]<=n?r=t:i=t}let a=(n-e.tab[r])/Math.max(1e-6,e.tab[i]-e.tab[r]);return(r+a)*e.n/oc}var fc=1,pc=216,mc=(e,t)=>Math.max(1,Math.round(t*e));function hc(e,t){let n=Es(mc(e,B),mc(e,t+4)),r=n.getContext(`2d`);r.setTransform(e,0,0,e,0,0),r.fillStyle=`rgba(0,0,0,0.16)`;for(let e=0;e<t+4;e+=4)r.fillRect(0,e,B,1.5);return n}async function gc(e,t=!1,n=_s){let r=Es(108,135),i=Es(640,250);for(let e=0;e<100&&(nn(r.getContext(`2d`),r,r.width,r.height,0,.18,i),!Cn(B,_s,.18));e++)await new Promise(e=>setTimeout(e,50));return await document.fonts.load(`900 40px "Orbitron"`,`SNATCHED`).catch(()=>{}),n=Math.max(_s,Math.round(n)),{S:e,HT:n,OY:(n-_s)/2,layered:t,tmp:Es(mc(e,B),mc(e,n)),glass:i,glassKey:``,term:[],scan:hc(e,n)}}var _c=e=>{Ds=-e.OY,Os=e.HT};function vc(e,t){e.S=t,e.scan=hc(t,e.HT),e.tmp=Es(mc(t,B),mc(t,e.HT))}var yc=.75;function bc(e,t,n,r,i,a,o){let s=t.canvas.width,c=t.canvas.height;t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation=`source-over`,t.globalAlpha=1;let l=xc(o),u=e.layered?rn(mc(e.S*yc,B),mc(e.S*yc,e.HT),n,r,e.glass,i,{bloom:!0,slices:l>0?Sc(o,l,e.HT):void 0}):null;return u?a?t.drawImage(u,0,0,s,c):t.clearRect(0,0,s,c):nn(t,t.canvas,s,c,n,r,e.glass,{lite:!0,glassChanged:i}),t.setTransform(e.S,0,0,e.S,0,e.OY*e.S),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,u}var xc=e=>e<0?0:V(Math.floor(e*30)*13+91)<.035?.6:0;function Sc(e,t,n){let r=Math.floor(e*30),i=[];for(let e=0;e<4+t*6;e++){let a=r*29+e*5;i.push({y:V(a),h:(11+V(a+1)*100)/n,dx:(V(a+2)-.5)*220*t/B})}return i}function Cc(){let e=Es(108,135),t=e.getContext(`2d`),n=t.createRadialGradient(54,60.75,37.8,54,67.5,97.2);return n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,0.6)`),t.fillStyle=n,t.fillRect(0,0,108,135),e}function wc(e){e.last=0,e.textDone=!1,e.textCount=-1,e.candKey=-1,e.glassKey=``}var Tc=.4,Ec=.9,Dc=.5,Oc=`700 40px ui-monospace, Menlo, Consolas, "DejaVu Sans Mono", monospace`,kc=[];function Ac(e,t,n,r){let{width:i,height:a}=e.canvas,o=1/4,s=null;e.save(),e.setTransform(1,0,0,1,0,0),e.globalCompositeOperation=`source-over`;for(let c=0;c<=t.length;c++,o/=2){let l=kc[c]??=Es(Math.ceil(i*o),Math.ceil(a*o)),u=l.getContext(`2d`);u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,l.width,l.height),s?u.drawImage(s,0,0,l.width,l.height):(u.setTransform(o,0,0,o,0,0),r(u)),s=l,c>0&&t[c-1]>0&&(e.globalAlpha=Math.min(1,n*t[c-1]),e.drawImage(l,0,0,i,a))}e.restore()}function jc(e,t,n,r){let i=Math.floor(r*2.5)%2==0,a=`term:${n}:${i}:${t.join(`|`)}`;if(a===e.glassKey)return!1;e.glassKey=a;let o=e.glass.getContext(`2d`),{width:s,height:c}=e.glass;o.setTransform(1,0,0,1,0,0),o.globalCompositeOperation=`source-over`,o.globalAlpha=1,o.fillStyle=`#020a06`,o.fillRect(0,0,s,c),o.font=Oc,o.textAlign=`left`,o.textBaseline=`top`;let l=(c-t.length*50)/2+2,u=0,d=l,f=(e,r)=>{let i=n;e.font=Oc,e.textAlign=`left`,e.textBaseline=`top`,t.forEach((t,n)=>{let a=t.slice(0,Math.max(0,Math.min(t.length,i)));i-=t.length;let o=l+n*50;e.fillStyle=t.startsWith(`[x]`)?`#ff3b6b`:t.startsWith(`$`)?`#9dffc8`:`#39ff88`,e.fillText(a,34,o),a.length&&!r&&(u=34+e.measureText(a).width,d=o)})};Ac(o,[.9,.5],1,e=>f(e,!0)),f(o,!1),i&&(o.fillStyle=`#39ff88`,o.fillRect(u+4,d+4,20,38)),o.fillStyle=`rgba(0,0,0,0.35)`;for(let e=0;e<c;e+=5)o.fillRect(0,e,s,2);return!0}function Mc(e,t,n,r,i,a){_c(e);let o=jc(e,r,i,a);e.term=r;let s=bc(e,t,n,Tc,o,!1,a+.5);return t.drawImage(e.scan,0,Ds+a*40%4-4,B,Os+4),s}async function Nc(e,t,n){if(n.candles.length<5)return null;let r=await to(t,gr);for(let e=0;e<100&&!ba();e++)await new Promise(e=>setTimeout(e,50));if(!ba())return null;let i=[...Ms,...Fs(e.OY)];await document.fonts.load(js(40),i.map(e=>e.ch).join(``)).catch(()=>{}),i.forEach(e=>fl(e.ch));let a=e.S,o=Math.round(pc*e.HT/B),s=Es(pc,o),c=Es(pc,o),l=Xa(t.pct>=0,a);return Object.assign(e,{trade:t,assets:r,build:qs(),play:uc(n),art:Es(mc(a*bs*fc,vs),mc(a*bs*fc,ys)),wash:l,oni:Es(mc(a,B),mc(a,e.HT)),ext:e.OY>0?Pc(e,l):null,ignites:i,text:Es(mc(a,B),mc(a,_s)),textDone:!1,textCount:-1,panel:null,cand:Es(mc(a,B),mc(a,_s)),candKey:-1,downs:[],fh:o,fireDist:null,fire:s,fireData:s.getContext(`2d`).createImageData(pc,o),burn:c,burnData:c.getContext(`2d`).createImageData(pc,o),glow:Es(Math.round(pc/3),Math.round(o/3)),last:0})}function Pc(e,t){let n=e.S,r=e.OY,i=e=>{let t=Es(mc(n,B),2*mc(n,r)),i=t.getContext(`2d`),a=mc(n,r);for(let r of[!1,!0])i.save(),i.beginPath(),i.rect(0,r?a:0,t.width,a),i.clip(),i.setTransform(n,0,0,-n,0,r?a+_s*n:a),e(i),i.restore();return t},a=xa();return{OY:r,bg:i(e=>{if(e.fillStyle=`#05010f`,e.fillRect(0,0,B,_s),a){e.drawImage(a,xs,0,vs*bs,ys*bs);let t=e.createLinearGradient(0,0,0,220);t.addColorStop(0,`rgba(5,1,15,0)`),t.addColorStop(1,`rgba(5,1,15,0.4)`),e.fillStyle=t,e.fillRect(0,0,B,_s)}}),dark:i(e=>e.drawImage(t.dark,0,0,B,_s)),light:i(e=>e.drawImage(t.light,0,0,B,_s))}}function Fc(e,t,n){let r=n=>{let r=n.height/2;e.drawImage(n,0,0,n.width,r,0,-t.OY,B,t.OY),e.drawImage(n,0,r,n.width,r,0,_s,B,t.OY)};e.globalCompositeOperation=`source-over`,e.globalAlpha=1,r(t.bg),e.globalAlpha=n,r(t.dark),e.globalCompositeOperation=`screen`,r(t.light),e.globalCompositeOperation=`source-over`,e.globalAlpha=1}var Ic=e=>({buy:e.play.buyT/hs,sell:e.play.sellT/hs});function Lc(e,t){let{buyT:n,sellT:r}=e.play,i=e.glass.getContext(`2d`),{width:a,height:o}=e.glass;i.globalCompositeOperation=`source-over`,i.globalAlpha=1;let s=t>=r,c=t>=n,l=c?s?`MERGED`:`SNATCHED`:`WATCHING`,u=c?s?ac:ic:`#00f0ff`,d=c?s?t-r:t-n:99,f=d<.45?`${l}:${Math.floor(t*30)}`:l;if(f===e.glassKey)return!1;e.glassKey=f,i.setTransform(1,0,0,1,0,0);let p=d<.16?1-d/.16:0;i.fillStyle=`#020a06`,i.fillRect(0,0,a,o),p>0&&(i.fillStyle=s?`rgba(255,190,40,${.3*p})`:`rgba(60,255,140,${.45*p})`,i.fillRect(0,0,a,o));let m=(l.length>7?104:124)*(1+.28*Math.exp(-d*14));i.font=`900 ${m}px "Orbitron", sans-serif`;let h=i.measureText(l).width;h>a*.94&&(m*=a*.94/h,i.font=`900 ${m}px "Orbitron", sans-serif`),i.textAlign=`center`,i.textBaseline=`middle`;let g=Math.floor(t*30),_=d>.05&&d<.4,v=_?(V(g)-.5)*26:0;i.globalAlpha=_?.6+.4*V(g+7):1;let y=i.font;Ac(i,[0,1,1,.8],(_?.6+.4*V(g+7):1)*(.85+.3*p),e=>{e.font=y,e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=u,e.fillText(l,a/2+v,o/2+6)}),d<.4&&(i.globalCompositeOperation=`lighter`,i.fillStyle=`rgba(255,40,200,0.7)`,i.fillText(l,a/2+v-10,o/2+6),i.fillStyle=`rgba(0,240,255,0.7)`,i.fillText(l,a/2+v+10,o/2+6),i.globalCompositeOperation=`source-over`),i.fillStyle=p>.5?`#ffffff`:u,p>.5&&(i.strokeStyle=`#000`,i.lineWidth=6,i.strokeText(l,a/2+v,o/2+6)),i.fillText(l,a/2+v,o/2+6),i.globalAlpha=1,i.fillStyle=`rgba(0,0,0,0.35)`;for(let e=0;e<o;e+=5)i.fillRect(0,e,a,2);return!0}function Rc(e){if(e.panel)return e.panel;let t=e.S,n=Es(mc(t,Xs+8),mc(t,598)),r=n.getContext(`2d`);r.setTransform(t,0,0,t,-32*t,-596*t),r.fillStyle=`rgba(4,6,24,0.7)`,r.fillRect(Js,Ys,Xs,Zs),r.strokeStyle=`rgba(0,240,255,0.35)`,r.lineWidth=2,r.strokeRect(Js,Ys,Xs,Zs),r.strokeStyle=`rgba(170,110,255,0.14)`,r.lineWidth=1;for(let e=0;e<=4;e++){let t=Math.round(ec+420*e/4)+.5;r.beginPath(),r.moveTo(Qs,t),r.lineTo($s,t),r.stroke()}for(let e=0;e<=6;e++){let t=Math.round(Qs+($s-Qs)*e/6)+.5;r.beginPath(),r.moveTo(t,ec),r.lineTo(t,tc),r.stroke()}let i=e.play.ch;r.textBaseline=`alphabetic`,r.textAlign=`left`,r.font=`900 46px "Orbitron", sans-serif`,r.fillStyle=`#ffffff`,r.fillText(`$${e.trade.symbol}`,64,670),r.font=`700 24px "Orbitron", sans-serif`,r.fillStyle=`#ff2bd6`;let a=i.sec>=86400?`1D`:i.sec>=3600?`${i.sec/3600}H`:`${i.sec/60}M`;return r.fillText(`• REPLAY · ${a}${i.sample?` · SAMPLE DATA`:``}`,66,706),e.panel=n,n}function zc(e,t){let n=e.play;if(e.candKey===t)return;e.candKey=t;let{ch:r,step:i,bw:a,y:o}=n,s=e.S,c=e.cand.getContext(`2d`);c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,e.cand.width,e.cand.height),c.setTransform(s,0,0,s,0,0);let l=n.fx.layer(e.cand.width,e.cand.height,s);e.downs=[];let u=a/2;for(let s=0;s<t;s++){let t=r.candles[s],d=t.c>=t.o,f=n.x0+(s+.5)*i,p=Math.round(o(Math.max(t.o,t.c))),m=Math.max(p+2,Math.round(o(Math.min(t.o,t.c)))),h=n.sellI!==null&&s>n.sellI,g=d||h?c:l;g.globalAlpha=h?.3:1,g.fillStyle=h?`#8a8fb0`:d?nc:rc,g.fillRect(Math.round(f)-1,Math.round(o(t.h)),2,Math.max(1,Math.round(o(t.l))-Math.round(o(t.h)))),g.fillRect(f-u,p,a,m-p),g.globalAlpha=1,!d&&!h&&e.downs.push({key:t.t,x:f-u,y:p,w:a,h:m-p,hy:Math.round(o(t.h))-2,ly:Math.round(o(t.l))+2})}}function Bc(e,t,n){let r=e.ch.candles[t];return lc(cc(r,Math.floor(e.buyI)===t?[e.buyI-t,e.buyP]:e.sellI!==null&&Math.floor(e.sellI)===t?[e.sellI-t,e.sellP]:void 0),n)}function Vc(e,t,n,r){let i=t.play,{ch:a,n:o,step:s,bw:c,y:l,buyT:u,sellT:d}=i,f=dc(i,n),p=e=>i.x0+e*s,m=ws(.1,.9000000000000001,n);if(e.save(),r&&n<1.5){let t=Math.min(ws(0,.25,n),1-ws(1,1.5,n)),i=.75+.25*V(Math.floor(n*30)*5+1),a=r.x,o=r.y+r.w*.22,s=e.createLinearGradient(0,o,0,Ys);s.addColorStop(0,`rgba(0,240,255,${.32*t*i})`),s.addColorStop(1,`rgba(0,240,255,${.06*t*i})`),e.fillStyle=s,e.globalCompositeOperation=`lighter`,e.beginPath(),e.moveTo(a-r.w*.3,o),e.lineTo(a+r.w*.3,o),e.lineTo(Js+Xs,Ys+Zs*.5*(1-m)),e.lineTo(Js,Ys+Zs*.5*(1-m)),e.closePath(),e.fill(),e.globalCompositeOperation=`source-over`}if(m<=0){e.restore();return}let h=Rc(t);if(m<1){let t=Zs*m,r=Ys+(Zs-t)/2;e.save(),e.beginPath(),e.rect(32,r,Xs+8,t),e.clip(),e.globalAlpha=.55+.45*V(Math.floor(n*30)*3+2)*(1-m)+.45*m,e.drawImage(h,32,596,Xs+8,598),e.restore(),e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(0,240,255,${.9*(1-m)+.2})`,e.fillRect(Js,r-1.5,Xs,3),e.fillRect(Js,r+t-1.5,Xs,3),e.globalCompositeOperation=`source-over`,e.restore();return}if(e.drawImage(h,32,596,Xs+8,598),n>=d&&i.sellI!==null&&i.sellP!==null){let t=n-d,r=.14+.3*Math.exp(-t*5),a=i.sellP>=i.buyP,o=l(i.buyP),s=l(i.sellP),c=e.createLinearGradient(0,o,0,s);c.addColorStop(0,`rgba(${a?`57,255,136`:`255,59,107`},${r*.3})`),c.addColorStop(1,`rgba(${a?`57,255,136`:`255,59,107`},${r})`),e.fillStyle=c,e.fillRect(p(i.buyI),Math.min(o,s),p(i.sellI)-p(i.buyI),Math.abs(s-o))}if(n>=u){let t=i.sellI!==null&&n>=d?i.sellI:f;e.strokeStyle=`rgba(57,255,136,0.55)`,e.setLineDash([8,8]),e.lineWidth=2,e.beginPath(),e.moveTo(p(i.buyI),Math.round(l(i.buyP))+.5),e.lineTo(p(t),Math.round(l(i.buyP))+.5),e.stroke(),e.setLineDash([])}let g=Math.min(o-1,Math.floor(f)),_=f<o;zc(t,_?g:o),e.drawImage(t.cand,0,0,B,_s),i.fx.render(e,t.downs,n,t.S,!1);let v=a.candles[g].c;if(_){let t=Bc(i,g,f-g);v=t.cur;let n=a.candles[g].o,r=t.cur,o=p(g+.5),s=c/2,u=Math.round(l(Math.max(n,r))),d=Math.max(u+2,Math.round(l(Math.min(n,r)))),m=i.sellI!==null&&g>i.sellI;e.globalAlpha=m?.3:1,e.fillStyle=m?`#8a8fb0`:r>=n?nc:rc,e.fillRect(Math.round(o)-1,Math.round(l(t.hi)),2,Math.max(1,Math.round(l(t.lo))-Math.round(l(t.hi)))),e.fillRect(o-s,u,c,d-u),e.globalAlpha=1,e.globalCompositeOperation=`lighter`,e.globalAlpha=.5,e.fillStyle=`#ff2bd6`,e.fillRect(o-s-3,u,c,d-u),e.fillStyle=`#00f0ff`,e.fillRect(o-s+3,u,c,d-u),e.globalAlpha=1,e.globalCompositeOperation=`source-over`;let h=p(f),_=l(v),y=e.createLinearGradient(h-40,0,h,0);y.addColorStop(0,`rgba(0,240,255,0)`),y.addColorStop(1,`rgba(0,240,255,0.22)`),e.fillStyle=y,e.fillRect(h-40,726,40,440),e.fillStyle=`rgba(0,240,255,0.8)`,e.fillRect(h,726,1.5,440),e.strokeStyle=`rgba(255,255,255,0.35)`,e.lineWidth=1,e.setLineDash([4,6]),e.beginPath(),e.moveTo(Qs,Math.round(_)+.5),e.lineTo($s,Math.round(_)+.5),e.stroke(),e.setLineDash([]),e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(0,240,255,0.25)`,e.beginPath(),e.arc(h,_,16,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`source-over`,e.fillStyle=`#eaffff`,e.beginPath(),e.arc(h,_,7,0,Math.PI*2),e.fill()}let y=(t,n,r,i)=>{let a=p(t),o=l(n);e.strokeStyle=`${i}99`,e.setLineDash([6,8]),e.lineWidth=2,e.beginPath(),e.moveTo(a,730),e.lineTo(a,1162),e.stroke(),e.setLineDash([]),e.globalCompositeOperation=`lighter`,e.globalAlpha=.35,e.fillStyle=i,e.beginPath(),e.arc(a,o,20,0,Math.PI*2),e.fill(),e.globalAlpha=1,e.globalCompositeOperation=`source-over`,e.fillStyle=i,e.beginPath(),e.arc(a,o,10,0,Math.PI*2),e.fill(),e.fillStyle=`#ffffff`,e.beginPath(),e.arc(a,o,4,0,Math.PI*2),e.fill(),e.font=`900 26px "Orbitron", sans-serif`,e.fillStyle=i,e.textAlign=a>$s-120?`right`:`left`,e.fillText(r,a+(a>$s-120?-16:16),o-18),e.textAlign=`left`};n>=u&&y(i.buyI,i.buyP,`BUY`,ic),n>=d&&i.sellI!==null&&y(i.sellI,i.sellP,`SELL`,ac);let b=`WATCHING`,x=`#00f0ff`;if(n>=u){let e=n>=d?t.trade.pct:(v/i.buyP-1)*100;b=`${e>=0?`+`:`−`}${Math.abs(e).toFixed(1)}%`,x=n>=d?ac:e>=0?ic:`#ff3b6b`}e.font=`900 ${b===`WATCHING`?34:52}px "Orbitron", sans-serif`,e.textAlign=`right`,e.textBaseline=`alphabetic`,e.globalCompositeOperation=`lighter`,e.globalAlpha=.18,e.fillStyle=x;for(let[t,n]of[[-3,0],[3,0],[0,-3],[0,3]])e.fillText(b,Js+Xs-28+t,676+n);e.globalAlpha=1,e.globalCompositeOperation=`source-over`,e.fillText(b,Js+Xs-28,676),e.restore()}var Hc=2100;function Uc(e,t,n,r){if(!e.path){let t=Math.ceil(e.life*120)+2,r=new Float32Array(t*2),i=0,a=0,o=Math.cos(e.a)*e.v,s=Math.sin(e.a)*e.v,c=1/120;for(let e=1;e<t;e++)o*=.985,s=s*.985+Hc*c,i+=o*c,a+=s*c,a>n&&s>0&&(a=n,s*=-.38,o*=.65),r[e*2]=i,r[e*2+1]=a;e.path=r}let i=e.path,a=i.length/2-1,o=(e,t)=>{let n=Math.min(a,Math.max(0,e*120)),o=Math.min(a-1,Math.floor(n)),s=n-o;r[t]=i[o*2]+(i[o*2+2]-i[o*2])*s,r[t+1]=i[o*2+1]+(i[o*2+3]-i[o*2+1])*s};o(t,0),o(Math.max(0,t-.045),2)}var Wc=[0,0,0,0];function Gc(e,t,n){let r=n-t.buyT;if(r<0||r>1.6)return;let i=t.x0+t.buyI*t.step,a=t.y(t.buyP);if(e.save(),e.globalCompositeOperation=`lighter`,r<.14){let t=1-r/.14,n=e.createRadialGradient(i,a,0,i,a,520);n.addColorStop(0,`rgba(235,255,240,${.95*t})`),n.addColorStop(.25,`rgba(57,255,136,${.5*t})`),n.addColorStop(1,`rgba(57,255,136,0)`),e.fillStyle=n,e.fillRect(0,Ds,B,Os)}if(r<.5){let t=1-r/.5,n=e.createLinearGradient(Js,0,Js+Xs,0);n.addColorStop(0,`rgba(57,255,136,0)`),n.addColorStop(Math.max(.01,Math.min(.99,(i-Js)/Xs)),`rgba(220,255,230,${t})`),n.addColorStop(1,`rgba(57,255,136,0)`),e.fillStyle=n,e.fillRect(Js,a-2-6*t,Xs,4+12*t)}for(let[t,n,o]of[[0,`57,255,136`,7],[.07,`255,255,255`,3],[.14,`0,240,255`,4]]){let s=r-t;if(s<0||s>.7)continue;let c=1-s/.7;e.strokeStyle=`rgba(${n},${c})`,e.lineWidth=o*(.5+c),e.beginPath(),e.arc(i,a,14+520*(1-(1-s/.7)**3),0,Math.PI*2),e.stroke()}let o=1176-a;for(let n of t.sparks){let t=r-n.born;if(t<0||t>n.life)continue;Uc(n,t,o,Wc);let s=1-t/n.life,c=s*(.7+.3*n.hot),l=c>.6?255:120+225*c,u=c>.75?230:c>.45?80:130*(1-c);e.strokeStyle=`rgba(255,${l|0},${u|0},${Math.min(1,s*1.4)})`,c<.4&&(e.strokeStyle=`rgba(57,255,136,${s*1.6})`),e.lineWidth=n.w*(.5+s),e.lineCap=`round`,e.beginPath(),e.moveTo(i+Wc[2],a+Wc[3]),e.lineTo(i+Wc[0],a+Wc[1]),e.stroke(),c>.5&&(e.fillStyle=`rgba(255,255,230,${s*.5})`,e.beginPath(),e.arc(i+Wc[0],a+Wc[1],n.w*2.2,0,Math.PI*2),e.fill())}if(r<.5){let t=1-r/.5,n=e.createRadialGradient(i,a,0,i,a,90*(.6+t));n.addColorStop(0,`rgba(255,255,255,${t})`),n.addColorStop(1,`rgba(57,255,136,0)`),e.fillStyle=n,e.fillRect(i-200,a-200,400,400)}e.restore()}function Kc(e,t){let n=t-e.buyT;if(n<0||n>.75)return null;let r=34*Math.exp(-n*6.5),i=(V(Math.floor(t*60)*3+1)-.5)*2,a=(V(Math.floor(t*60)*3+2)-.5)*2,o=+(n<.034);return{dx:r*i,dy:r*a+o*30,rot:r*.0011*i}}function qc(e,t,n){if(t.sellI===null)return;let r=t.sellT-n;if(r<=0||r>.6)return;let i=t.x0+t.sellI*t.step,a=t.y(t.sellP),o=t.x0+t.buyI*t.step,s=t.y(t.buyP);e.save(),e.globalCompositeOperation=`lighter`;let c=Cs(1-r/.5);if(c>0){let t=c*c*c,n=o+(i-o)*t,r=s+(a-s)*t,l=Math.max(0,t-.25),u=e.createLinearGradient(o+(i-o)*l,s+(a-s)*l,n,r);u.addColorStop(0,`rgba(255,216,74,0)`),u.addColorStop(1,`rgba(255,240,190,0.95)`),e.strokeStyle=u,e.lineWidth=5,e.beginPath(),e.moveTo(o+(i-o)*l,s+(a-s)*l),e.lineTo(n,r),e.stroke();let d=e.createRadialGradient(n,r,0,n,r,40);d.addColorStop(0,`rgba(255,250,220,0.95)`),d.addColorStop(1,`rgba(255,216,74,0)`),e.fillStyle=d,e.fillRect(n-40,r-40,80,80)}e.font=`700 22px ui-monospace, Menlo, Consolas, monospace`,e.textAlign=`center`,e.textBaseline=`middle`;for(let n of t.pull){if(r>n.at)continue;let t=1-r/n.at,o=t*t*t,s=i-n.x,c=a-n.y,l=Math.hypot(s,c)||1,u=n.bend*Math.sin(t*Math.PI)*(1-t),d=n.x+s*o+-c/l*u,f=n.y+c*o+s/l*u;e.globalAlpha=Math.min(1,t*2.5),e.fillStyle=n.col,e.fillText(n.glyph,d,f);let p=Math.max(0,t-.08)**3;e.strokeStyle=n.col,e.lineWidth=1.5,e.beginPath(),e.moveTo(n.x+s*p,n.y+c*p),e.lineTo(d,f),e.stroke()}e.globalAlpha=1;let l=220*(r/.6)**1.5;e.strokeStyle=`rgba(255,216,74,${.9*(1-r/.6)})`,e.lineWidth=3,e.beginPath(),e.arc(i,a,10+l,0,Math.PI*2),e.stroke(),e.restore()}function Jc(e,t,n){let r=t.play;if(r.sellI===null)return;let i=n-r.sellT;if(i<0||i>1.4)return;let a=r.x0+r.sellI*r.step,o=r.y(r.sellP);if(e.save(),e.globalCompositeOperation=`lighter`,i<.18){let t=1-i/.18,n=e.createRadialGradient(a,o,0,a,o,520);n.addColorStop(0,`rgba(255,250,230,${.9*t})`),n.addColorStop(.2,`rgba(255,216,74,${.3*t})`),n.addColorStop(1,`rgba(255,43,214,0)`),e.fillStyle=n,e.fillRect(0,Ds,B,Os)}for(let[t,n]of[[0,`255,216,74`],[.09,`255,43,214`]]){let r=i-t;if(r<0||r>.75)continue;let s=1-r/.75,c=16+480*(1-(1-r/.75)**3);e.strokeStyle=`rgba(${n},${s})`,e.lineWidth=6*s+1,e.save(),e.translate(a,o),e.rotate(Math.PI/4+r*1.5),e.strokeRect(-c/1.4,-c/1.4,c*2/1.4,c*2/1.4),e.restore()}e.font=`700 24px ui-monospace, Menlo, Consolas, monospace`,e.textAlign=`center`,e.textBaseline=`middle`,r.shards.forEach((t,r)=>{if(i>t.life)return;let s=1-i/t.life,c=t.v/3.2*(1-Math.exp(-i*3.2));e.globalAlpha=s,e.fillStyle=t.hot<.5?`#ffd84a`:`#ff2bd6`,e.fillText(`01$#%&@*+<>`[(r+Math.floor(n*20))%11],a+Math.cos(t.a)*c,o+Math.sin(t.a)*c)}),e.globalAlpha=1,e.restore()}function Yc(e,t,n){let r=n-t.play.sellT;if(r<0||r>.45)return;let i=Math.exp(-r*6),a=t.tmp.getContext(`2d`);a.setTransform(1,0,0,1,0,0),a.globalCompositeOperation=`copy`,a.globalAlpha=1,a.drawImage(e.canvas,0,0,t.tmp.width,t.tmp.height),a.globalCompositeOperation=`source-over`;let o=Math.floor(n*30);e.save(),e.globalCompositeOperation=`screen`,e.globalAlpha=.22*i,e.drawImage(t.tmp,-16*i,Ds,B,Os),e.drawImage(t.tmp,16*i,Ds,B,Os),e.globalCompositeOperation=`source-over`,e.globalAlpha=1;let s=Math.round((4+Math.floor(V(o)*7))*(Os/_s));for(let n=0;n<s;n++){let r=o*31+n*7,a=Ds+V(r)*Os,s=8+V(r+1)*70;ks(e,t.tmp,a,s,(V(r+2)-.5)*120*i,a)}e.restore()}function Xc(e,t){let n=e.fireData.data,r=e.burnData.data,i=e.ignites,a=i.map(e=>Ps(e,t)),o=i.length,s=e.fh;if(!e.fireDist){let t=e.fireDist=new Float32Array(pc*s*o);for(let e=0;e<s;e++)for(let n=0;n<pc;n++)for(let r=0;r<o;r++){let a=i[r].at;t[(e*pc+n)*o+r]=Math.hypot((n+.5)*B/pc-a[0],(Ds+(e+.5)*Os/s-a[1])*.95)}}let c=e.fireDist;for(let e=0;e<s;e++)for(let i=0;i<pc;i++){let l=(i+.5)*B/pc,u=Ds+(e+.5)*Os/s,d=-1e9,f=(e*pc+i)*o;for(let e=0;e<o;e++){if(a[e]<0)continue;let t=a[e]-c[f+e];t>d&&(d=t)}let p=(e*pc+i)*4;if(d<-320){n[p+3]=0,r[p+3]=0;continue}if(d>270){n[p+3]=0,r[p+3]=255;continue}d+=zs(l,u,t)*Cs((d+400)/200);let m=d>-70&&d<78?Math.exp(-(((d-4)/19)**2))*(.6+.6*Ts(l/40,u/40-t*2.5,7)):0;d>0&&d<170&&(m=Math.max(m,.5*Math.exp(-d/30)*Ts(l/18,u/18-t*3,5)**2)),d<0&&d>-200&&(m=Math.max(m,1.1*Math.exp(d/55)*Ts(l/22,u/14+t*6,6)**2.4*1.8)),m*=1-ws(Rs-.4,Rs+.4,t);let h=Cs(m*1.15),g,_,v;h<.35?[g,_,v]=[140+300*h,20+60*h,10]:h<.7?[g,_,v]=[255,41+400*(h-.35),10+60*(h-.35)]:[g,_,v]=[255,Math.min(255,181+250*(h-.7)),31+700*(h-.7)],n[p]=g,n[p+1]=_,n[p+2]=v,n[p+3]=255*Cs(m*1.4),r[p+3]=255*ws(-10,30,d)}e.fire.getContext(`2d`).putImageData(e.fireData,0,0),e.burn.getContext(`2d`).putImageData(e.burnData,0,0)}var Zc={},Qc={},$c=0,el=()=>$c=performance.now(),tl=e=>{let t=performance.now();Zc[e]=(Zc[e]||0)+t-$c,$c=t};function nl(e=!1){let t={parts:{...Zc},hacker:{...ot},phases:Object.fromEntries(Object.entries(Qc).map(([e,t])=>[e,t.n?t.ms/t.n:0]))};if(e){for(let e in Zc)delete Zc[e];for(let e in Qc)delete Qc[e];for(let e in ot)delete ot[e]}return t}var rl=e=>e<fs?`build`:e<Ms[0].t?`chart`:e<Rs?`burn`:e<11.450000000000001?`card`:`alive`;function il(e,t){return Kc(e.play,t*hs)}function al(e,t,n,r){let i=performance.now();el();let a=ol(e,t,n,r),o=Qc[rl(n*hs)]??={ms:0,n:0};return o.ms+=performance.now()-i,o.n++,a}function ol(e,t,n,r){let i=n*hs,a=e.last?Math.max(0,Math.min(.1,i-e.last)):1/30;e.last=i;let o=e.S;_c(e),t.setTransform(o,0,0,o,0,e.OY*o),t.globalCompositeOperation=`source-over`,t.globalAlpha=1;let s=i>=Ms[0].t,c=i>=Rs,l=null;if(!c){let n=e.play,o=i<Dc&&e.term.length?jc(e,e.term,999,i):Lc(e,i),c=e=>i>=e&&i-e<1.2?Math.exp(-(i-e)*3.5):0,u=.18+.22000000000000003*(1-ws(0,Ec,i))+.1*c(n.buyT)+.12*c(n.sellT),d=n.sellI!==null&&i>=n.sellT&&i-n.sellT<=.45,f=!r?.cssShake&&!!Kc(n,i);tl(`glass`),l=bc(e,t,a,u,o,d||f,s?-1:i),tl(`hacker`);let p=i<1.5?Cn(B,e.HT,u):null,m=p&&{...p,y:p.y+Ds};t.save(),Vc(t,e,i,m),qc(t,n,i),Gc(t,n,i),Jc(t,e,i),t.restore(),tl(`chart`);let h=r?.cssShake?null:Kc(n,i);if(h){let n=e.tmp.getContext(`2d`);n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation=`copy`,n.drawImage(t.canvas,0,0,e.tmp.width,e.tmp.height),n.globalCompositeOperation=`source-over`,t.save(),t.fillStyle=`#000`,t.fillRect(0,Ds,B,Os),t.translate(B/2+h.dx,Ds+Os/2+h.dy),t.rotate(h.rot),t.scale(1.06,1.06),t.translate(-B/2,-Ds-Os/2),t.drawImage(e.tmp,0,Ds,B,Os),t.restore()}Yc(t,e,i),tl(`tear`)}if(s){let n=e.art.getContext(`2d`),r=e.art.width/vs;n.setTransform(r,0,0,r,0,0),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,n.fillStyle=`#000`,n.fillRect(0,0,vs,ys);let s=sl(i);Ca(n,i,a,e.build,s),tl(`oni`);let l=.3+.7*ws(9.05,10.05,i);if(!c||s>0){let n=e.oni.getContext(`2d`);n.setTransform(o,0,0,o,0,e.OY*o),n.globalCompositeOperation=`source-over`,n.globalAlpha=1,n.fillStyle=`#05010f`,n.fillRect(0,Ds,B,Os),e.ext&&Fc(n,e.ext,l),Ja(n,e.art,`oni`,e.trade.pct>=0,l,e.wash),s>0&&cl(n,e,i,s),tl(`onilayer`),c||(Xc(e,i),tl(`firefield`),n.globalCompositeOperation=`destination-in`,n.drawImage(e.burn,0,Ds,B,Os),n.globalCompositeOperation=`source-over`),t.drawImage(e.oni,0,Ds,B,Os),tl(`onilayer`)}else t.fillStyle=`#05010f`,t.fillRect(0,Ds,B,Os),e.ext&&Fc(t,e.ext,l),Ja(t,e.art,`oni`,e.trade.pct>=0,l,e.wash),t.setTransform(o,0,0,o,0,e.OY*o),t.globalCompositeOperation=`source-over`,t.globalAlpha=1,tl(`onilayer`)}if(i>=Ls){let n=ws(9.750000000000002,11.250000000000002,Ls+Math.ceil((i-Ls)*15)/15)**.7;if(!e.textDone&&n!==e.textCount){e.textCount=n;let t=e.text.getContext(`2d`);t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.text.width,e.text.height),t.setTransform(o,0,0,o,0,0),ro(t,e.trade,e.assets,n),e.textDone=n>=1}ll(t,e,i),tl(`text`)}if(s&&!c){let n=e.glow.getContext(`2d`);n.clearRect(0,0,e.glow.width,e.glow.height),n.drawImage(e.fire,0,0,e.glow.width,e.glow.height),t.globalCompositeOperation=`lighter`,t.globalAlpha=.75,t.drawImage(e.glow,-B*.02,Ds-Os*.02,B*1.04,Os*1.04),t.globalAlpha=1,t.drawImage(e.fire,0,Ds,B,Os),ul(t,i,e.ignites),t.globalCompositeOperation=`source-over`}return pl(t,i,e.ignites),tl(`fire`),t.globalAlpha=1,t.drawImage(e.scan,0,Ds+i*40%4-4,B,Os+4),tl(`scan`),l}function sl(e){if(e<Rs)return 0;let t=e-Rs;if(t%3.2<.28&&t>1)return 1.6;let n=Math.floor(e/.25);return V(n*17+3)<.12&&e-n*.25<.06+V(n*17+4)*.16?.6+V(n*17+5)*.6:0}function cl(e,t,n,r){let i=t.tmp.getContext(`2d`);i.setTransform(1,0,0,1,0,0),i.globalCompositeOperation=`copy`,i.drawImage(t.oni,0,0,t.tmp.width,t.tmp.height),i.globalCompositeOperation=`source-over`;let a=3+Math.floor(V(Math.floor(n*30))*5*r);for(let i=0;i<a;i++){let a=Math.floor(n*30)*31+i*7,o=V(a)*_s,s=6+V(a+1)*40,c=(V(a+2)-.5)*70*r;ks(e,t.tmp,o,s,c,o)}r>1&&(e.globalCompositeOperation=`lighter`,e.globalAlpha=.25,e.drawImage(t.tmp,10*r,Ds,B,Os),e.globalAlpha=1,e.globalCompositeOperation=`source-over`)}function ll(e,t,n){let r=ws(Ls,10.15,n),i=Math.floor(n*30),a=n<10.250000000000002,o=!a&&V(Math.floor(n*4)*13+5)<.08;if(!a&&!o){e.drawImage(t.text,0,0,B,_s);return}let s=a?1-r*.8:.4;if(!(a&&V(i*3+1)>.35+.65*r)){e.globalAlpha=a?.4+.6*r:1,e.globalCompositeOperation=`lighter`,e.globalAlpha*=.5,e.drawImage(t.text,-14*s,0,B,_s),e.drawImage(t.text,14*s,0,B,_s),e.globalCompositeOperation=`source-over`,e.globalAlpha=a?.4+.6*r:1;for(let n=0;n<6;n++){let r=n*_s/6,a=(V(i*17+n)-.5)*90*s;As(e,t.text,r,_s/6,a,r)}e.globalAlpha=1}}function ul(e,t,n){for(let r=0;r<44*n.length;r++){let i=n[r%n.length],a=i.t+V(r*7+2)*(i.dur+.3),o=.6+V(r*7+3)*1.1,s=t-a;if(s<0||s>o)continue;let c=V(r*7+1)*Math.PI*2,l=Math.max(0,Ps(i,a)),u=40+V(r*7+4)*160,d=i.at[0]+Math.cos(c)*l+Math.cos(c)*u*s*.6+Math.sin(s*9+c*5)*6,f=i.at[1]+Math.sin(c)*l-u*s,p=1-s/o;e.fillStyle=`rgba(255,${150+100*p|0},${40+160*p*p|0},${p})`,e.beginPath(),e.arc(d,f,(1.5+V(r*7+5)*3)*(.5+p),0,Math.PI*2),e.fill()}}var dl=new Map;function fl(e){let t=dl.get(e);if(t)return t;let n=.5,r=t=>{let r=Es(240,240),i=r.getContext(`2d`);return i.scale(n,n),i.font=js(220),i.textAlign=`center`,i.textBaseline=`middle`,i.shadowColor=`rgb(255,${120+135*t|0},${40+215*t|0})`,i.shadowBlur=(40+60*t)*n,i.fillStyle=`rgb(255,${170+85*t|0},${90+165*t|0})`,i.fillText(e,240,240),r};return t={warm:r(0),hot:r(1),size:480},dl.set(e,t),t}function pl(e,t,n){e.save(),e.textAlign=`center`,e.textBaseline=`middle`,n.forEach((n,r)=>{let i=r===0?Ns:n.t-n.drop;if(t<i||t>n.t+.6)return;let[a,o]=n.at,s=a,c=o,l=120,u=1,d=0;if(r===0){let e=(t-Ns)/(n.t-Ns);l=150+70*ws(0,1,e),d=ws(.3,1,e),u=t<n.t?ws(0,.15,e):1-ws(n.t,n.t+.5,t),e<.4&&V(Math.floor(t*30)*7)<.3&&(u*=.4)}else{let r=Cs((t-i)/n.drop);if(c=o-(1-r*r)*(o-Ds+120),u=t<n.t?1:1-ws(n.t,n.t+.4,t),d=.6,t<n.t){let t=e.createLinearGradient(0,c-260,0,c);t.addColorStop(0,`rgba(255,120,40,0)`),t.addColorStop(1,`rgba(255,220,160,0.8)`),e.fillStyle=t,e.fillRect(s-5,c-260,10,240)}}let f=fl(n.ch),p=l/220*f.size;e.globalAlpha=u*(1-d),1-d>.01&&e.drawImage(f.warm,s-p/2,c-p/2,p,p),e.globalAlpha=u*d,d>.01&&e.drawImage(f.hot,s-p/2,c-p/2,p,p),e.font=js(l),e.globalAlpha=u,e.fillStyle=`rgb(255,${170+85*d|0},${90+165*d|0})`,e.fillText(n.ch,s,c);let m=Math.exp(-(((t-n.t-.03)/(r===0?.09:.06))**2));if(m>.01){let t=e.createRadialGradient(a,o,0,a,o,r===0?420:220);t.addColorStop(0,`rgba(255,250,235,${.95*m})`),t.addColorStop(1,`rgba(255,120,30,0)`),e.globalCompositeOperation=`lighter`,e.globalAlpha=1,e.fillStyle=t,e.fillRect(0,Ds,B,Os),e.globalCompositeOperation=`source-over`}}),e.restore()}function ml(e,t){let n=e.sellAt??t,r=Math.max(60,n-e.buyAt),i=r*.35,a=e.sellAt?r*.22:0;for(let r of[`m1`,`m5`,`h1`,`d1`]){let o=Ho[r].sec,s=e.buyAt-i,c=Math.min(t,n+a);if(!((c-s)/o>110||(t-s)/o>2900))return(c-s)/o<40&&(i=40*o-(c-e.buyAt),s=e.buyAt-i),{base:r,sec:o,from:s,to:c}}return{base:`d1`,sec:Ho.d1.sec,from:e.buyAt-i,to:Math.min(t,n+a)}}var hl=e=>{try{N?.HapticFeedback?.impactOccurred?.(e)}catch{}},gl=[`$ ./objective --`,`  scanning the market`,`[*] Snatching free money`],_l=30,vl=gl.join(``).length,yl=[1,.82];async function bl(e,t){let n=document.createElement(`div`);n.className=`replayov`,n.innerHTML=`<div class="rbox"><canvas class="rlayer rtop"></canvas></div><div class="rnote" hidden></div><div class="rstats" hidden></div>
    <div class="rbar"><button class="ragain" hidden>Replay again</button><button class="rclose">Close</button></div>`,document.body.appendChild(n),document.body.classList.add(`replaying`);let r=n.querySelector(`.rbox`),i=n.querySelector(`.rtop`),a=Cc();a.className=`rlayer`,r.insertBefore(a,i);let o=n.querySelector(`.rnote`),s=n.querySelector(`.rstats`),c=n.querySelector(`.ragain`),l=!0,u=0,d=()=>l,f=null,p=!0,m=e=>{e&&e!==f&&(f=e,e.classList.add(`rlayer`),r.insertBefore(e,a));let t=!!e;if(t!==p){p=t;for(let e of[f,a])e&&(e.style.visibility=t?``:`hidden`)}};n.querySelector(`.rclose`).addEventListener(`click`,()=>{l=!1,cancelAnimationFrame(u),f&&(f.classList.remove(`rlayer`),f.style.visibility=``,f.remove()),n.remove(),document.body.classList.remove(`replaying`)});let h=n.getBoundingClientRect(),g=h.width||390,_=h.height||844,v=Math.min(g,_*1080/1350),y=Math.min(2808,Math.max(1350,Math.round(1080*_/v)));r.style.width=`${v}px`,r.style.height=`${v*y/1080}px`;let b=v/1080,x=Math.min(1.6,Math.max(.5,v*Math.min(2,window.devicePixelRatio||1)/1080)),S=0,C=()=>x*yl[S],w=()=>{i.width=Math.round(1080*C()),i.height=Math.round(y*C())};w();let T=i.getContext(`2d`),E=gl,D=!1,O=(e,t)=>{D=!0,E=[gl[0],gl[1],`[x] ${e}`],o.textContent=t,o.hidden=!1},k=null,ee=await gc(C(),!0,y);if(!l)return;let te=(async()=>{let e=Date.now()/1e3,n=ml(t,e),r=e=>e.t>=n.from-n.sec&&e.t<=n.to,i=e=>e.length>=5&&e[0].t<=t.buyAt+n.sec&&e[e.length-1].t+n.sec>=(t.sellAt??e[e.length-1].t),a=!1,o=async e=>{let t=await e();for(let n=0;n<3&&!t.ok&&l&&(await new Promise(e=>setTimeout(e,Math.min(12e3,Math.max(1500,(t.retryAt??0)-Date.now())))),l);n++)t=await e();return t.ok||(a=!0),t.v},s=e=>o(async()=>{let a=await ns(e,t.mint,n.base,n.from-n.sec,{prefetch:!1,alive:d,freshMs:6e4}),o=(a.s?.list??[]).filter(r);return{ok:a.a.ok||i(o),retryAt:a.a.ok?0:a.a.retryAt,v:o}}),c=await o(async()=>{let e=await zo(t.mint,d);return{ok:e.ok||e.why===`missing`,retryAt:e.ok?0:e.retryAt,v:e}});if(!l)return null;if(!c.ok)return O(c.why===`missing`?`no chart for this coin`:`chart unreachable`,c.why===`missing`?`This coin has no chart on GeckoTerminal.`:`Couldn't reach the chart. Try again in a moment.`),null;let u=await s(c.data.p);if(!l)return null;if(!i(u)){let n=(await o(async()=>{let e=await Bo(t.mint,d);return{ok:e.ok,retryAt:e.ok?0:e.retryAt,v:e.ok?e.data:[]}})).filter(n=>n.p!==c.data.p&&(n.born===null||n.born<=(t.sellAt??e))).sort((e,t)=>(t.born??0)-(e.born??0)).slice(0,3);for(let e of n){if(!l)return null;let t=await s(e.p),n=new Map(t.map(e=>[e.t,e]));for(let e of u)n.set(e.t,e);if(u=[...n.values()].sort((e,t)=>e.t-t.t),i(u))break}}if(!l)return null;if(u.length>160&&(u=u.slice(-160)),!i(u)){let n=e-(t.sellAt??t.buyAt)<1200;return a?O(`chart busy`,`The chart service is busy right now. Try again in a minute.`):n?O(`chart not there yet`,`The chart hasn't caught up to this trade yet. Try again in a few minutes.`):O(`no chart for trade`,`GeckoTerminal has no candles for when you made this trade.`),null}return{candles:u,sec:n.sec,buyAt:t.buyAt,buyPrice:t.buyPrice,sellAt:t.sellAt,sellPrice:t.sellPrice}})(),ne=!1,re=null;if(te.then(e=>{re=e,ne=!0}),await new Promise(t=>{let n=0,r=0,i=0,a=0,o=!1,s=0,c=d=>{if(!l||k)return;n||=d;let f=(d-n)/1e3,p=r?Math.min(.1,(d-r)/1e3):1/60;r=d;let h=D?999:Math.max(0,Math.floor((f-.25)*_l)),g=performance.now();m(Mc(ee,T,p,E,h,f));let _=performance.now()-g;!o&&++i>4&&(a+=_,i===16&&(a/12>16&&S<yl.length-1&&(S++,vc(ee,C()),w()),i=4,a=0)),h>=vl&&!s&&(s=f),ne&&re&&s&&f-s>.35&&!o&&(o=!0,Nc(ee,e,re).then(e=>{k=e,k?t():O(`replay failed`,`Couldn't get the replay ready.`)})),u=requestAnimationFrame(c)};u=requestAnimationFrame(c)}),!l||!k)return;let ie=k,ae=Ic(ie),A=()=>{c.hidden=!0,s.hidden=!0;let e=!1,t=0,n=0,i=0,a=0,o=1,d=0,f=0,p=0,h=0,g=0;nl(!0);let _=v=>{if(!l||(u=requestAnimationFrame(_),t||=v,o===2&&f&&v-f<1e3/30-4))return;if(f&&v-t<17187.5){let e=v-f;p+=e,g++,e>h&&(h=e)}f=v;let y=(v-t)/1e3,x=performance.now();m(al(ie,T,y,{cssShake:!0}));let S=il(ie,y);S?(r.style.transform=`translate(${(S.dx*b).toFixed(1)}px,${(S.dy*b).toFixed(1)}px) rotate(${S.rot.toFixed(4)}rad) scale(1.06)`,e=!0):e&&=(r.style.transform=``,!1);let w=performance.now()-x;if(y<17.1875&&(i++,a+=w,n=n?n*.9+w*.1:w,i>10&&o===1&&n>15&&(o=2)),!(d&1)&&y>=ae.buy&&(d|=1,hl(`heavy`)),!(d&2)&&y>=ae.sell&&(d|=2,hl(`heavy`)),y>17.1875&&c.hidden){c.hidden=!1;let e=a/Math.max(1,i),t=nl(),n=e=>e.toFixed(1),r=Object.entries(t.parts).map(([e,t])=>[e,t/Math.max(1,i)]).filter(([,e])=>e>=.1).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`${e} ${n(t)}`).join(` · `),l=Object.entries(t.hacker).map(([e,t])=>[e,t/Math.max(1,i)]).filter(([,e])=>e>=.1).sort((e,t)=>t[1]-e[1]).map(([e,t])=>`${e} ${n(t)}`).join(` · `),u=Object.entries(t.phases).map(([e,t])=>`${e} ${n(t)}`).join(` · `);s.innerHTML=[`${n(e)} ms/frame · ${Math.round(i/gs)} fps · size ${Math.round(C()*100)}% · ${o===2?`30`:`60`} mode · gap ${n(p/Math.max(1,g))}/${Math.round(h)} ms`,`by part: ${r}`,`hacker: ${l}`,`by stage: ${u}`].map(e=>`<div>${e}</div>`).join(``);let d=!1;try{d=localStorage.getItem(`replayStats`)===`1`}catch{}s.hidden=!d}y>25.1875&&cancelAnimationFrame(u)};u=requestAnimationFrame(_)};c.addEventListener(`click`,()=>{cancelAnimationFrame(u),wc(ie),A()}),A()}var xl=`solHourly`,Sl=3600,Cl=null,wl=()=>Cl??=P.get(xl).then(e=>new Map(Object.entries(JSON.parse(e||`{}`)).map(([e,t])=>[Number(e),Number(t)]))).catch(()=>new Map);async function Tl(e,t){let n=new Map,r=e=>new Date(e*1e3).toISOString(),i=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/candles?granularity=3600&start=${r(e)}&end=${r(t)}`,{signal:AbortSignal.timeout(6e3)});if(!i.ok)throw Error(`coinbase ${i.status}`);for(let[e,,,t,r]of await i.json())n.set(e,(t+r)/2);return n}async function El(e,t){let n=new Map,r=await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=${e-Sl}&to=${t+Sl}`,{signal:AbortSignal.timeout(6e3)});if(!r.ok)throw Error(`coingecko ${r.status}`);let{prices:i}=await r.json();for(let[e,t]of i){let r=Math.floor(e/1e3/Sl)*Sl;n.has(r)||n.set(r,t)}return n}async function Dl(e){let t=await wl(),n=Date.now()/1e3,r=[...new Set(e.filter(e=>e>0).map(e=>Math.floor(e/Sl)*Sl))].sort((e,t)=>e-t).filter(e=>!t.has(e)),i=!1;for(let e=0;e<r.length;){let a=r[e],o=Math.min(a+299*Sl,Math.floor(n/Sl)*Sl),s;try{s=await Tl(a,o)}catch{s=await El(a,o).catch(()=>new Map)}if(!s.size)break;for(let[e,r]of s)e<n-2*Sl&&!t.has(e)&&(t.set(e,r),i=!0);for(let[e,n]of s)t.has(e)||t.set(e,n);for(;e<r.length&&r[e]<=o;)e++}if(i){let e=Object.fromEntries([...t].filter(([e])=>e<n-2*Sl).map(([e,t])=>[e,Math.round(t*100)/100]));P.set(xl,JSON.stringify(e)).catch(()=>{})}let a=new Map;for(let n of e){let e=Math.floor(n/Sl)*Sl;for(let r of[0,-1,1,-2,2,-3,3]){let i=t.get(e+r*Sl);if(i){a.set(n,i);break}}}return a}var Ol=`fullscreen`,kl=`<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M2 7V2h5M13 2h5v5M18 13v5h-5M7 18H2v-5"/></svg>`,Al=`<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M7 2v5H2M18 7h-5V2M13 18v-5h5M2 13h5v5"/></svg>`,jl=()=>!!N&&N.isVersionAtLeast(`8.0`)&&typeof N.requestFullscreen==`function`,Ml=()=>!!N?.isFullscreen;function Nl(){document.documentElement.classList.toggle(`tgfull`,Ml());let e=document.getElementById(`fsBtn`);e&&(e.innerHTML=Ml()?Al:kl,e.setAttribute(`aria-label`,Ml()?`Leave full screen`:`Full screen`),e.classList.toggle(`on`,Ml()))}function Pl(e){try{localStorage.setItem(Ol,e?`1`:`0`)}catch{}}var Fl=()=>jl()?`<button type="button" id="fsBtn" class="fsbtn" aria-label="Full screen">${Ml()?Al:kl}</button>`:``;function Il(){let e=document.getElementById(`fsBtn`);e&&(Nl(),e.addEventListener(`click`,()=>{F();try{Ml()?(Pl(!1),N.exitFullscreen?.()):(Pl(!0),N.unlockOrientation?.(),N.requestFullscreen())}catch{}}))}function Ll(){if(jl())try{for(let e of[`fullscreenChanged`,`fullscreenFailed`])N.onEvent?.(e,Nl);Nl();let e=!0;try{e=localStorage.getItem(Ol)!==`0`}catch{}e&&!Ml()&&(N.unlockOrientation?.(),N.requestFullscreen())}catch{}}var Rl=[{key:`1m`,base:`m1`,size:60},{key:`5m`,base:`m5`,size:300},{key:`15m`,base:`m5`,size:900},{key:`1h`,base:`h1`,size:3600},{key:`4h`,base:`h1`,size:14400},{key:`1D`,base:`d1`,size:86400},{key:`All`,base:`d1`,size:86400}],zl=Rl[Rl.length-1],Bl=72,Vl=3600,Hl=86400,Ul=720;function Wl(e,t){let n=Math.max(60,t-e),r=(t,n)=>({base:t,size:n,count:null,from:e});if(n<=4*Vl)return r(`m1`,60);if(n<=20*Vl)return r(`m5`,300);if(n<=80*Vl)return r(`m5`,900);if(n<=10*Hl)return r(`h1`,Vl);if(n<=40*Hl)return r(`h1`,4*Vl);let i=Math.max(e,t-Ul*Hl);return{base:`d1`,size:Hl*Math.max(1,Math.ceil((t-i)/Hl/240)),count:null,from:i}}function Gl(e,t,n){return e===zl?t?Wl(t,n):null:{base:e.base,size:e.size,count:Bl,from:n-Bl*e.size}}var Kl={m1:4320,m5:Bl*900,h1:288*Vl,d1:Bl*Hl};function ql(e,t,n,r){if(!e.list.length)return[];let i=t.size,a=Ho[t.base].sec,o=[];for(let t of e.list){let e=Math.floor(t.t/i)*i,n=o[o.length-1];n&&n.t===e?(n.h=Math.max(n.h,t.h),n.l=Math.min(n.l,t.l),n.c=t.c):o.push({t:e,o:t.o,h:t.h,l:t.l,c:t.c})}let s=Date.now()/1e3,c=e.list[e.list.length-1].t+a,l=n.length?n[n.length-1].at:0,u=Math.max(Math.floor(Math.max(s,l)/i)*i,o[o.length-1].t),d=t.count?u-(t.count-1)*i:Math.floor(t.from/i)*i;d=Math.max(d,o[0].t,u-3e3*i);let f=0,p=null;for(;f<o.length&&o[f].t<d;)p=o[f++].c;let m=[];for(let e=d;e<=u;e+=i)if(f<o.length&&o[f].t===e)m.push(o[f]),p=o[f++].c;else{let t=p??o[f]?.o;if(t==null)continue;m.push({t:e,o:t,h:t,l:t,c:t})}if(!m.length)return m;let h=m[0].t,g=new Map;for(let e of n){if(e.at<c)continue;let t=Math.floor((e.at-h)/i);if(t<0||t>=m.length)continue;let n=g.get(t)??[];n.push(e.p*r),g.set(t,n)}if(g.size){let e=Math.min(...g.keys());for(let t=e;t<m.length;t++){let e=m[t],n=g.get(t);if(e.t>=c&&t>0){let n=m[t-1].c;m[t]={t:e.t,o:n,h:n,l:n,c:n}}else m[t]={...e};for(let e of n??[])m[t].h=Math.max(m[t].h,e),m[t].l=Math.min(m[t].l,e),m[t].c=e}}return m}var Jl=`₀₁₂₃₄₅₆₇₈₉`;function Yl(e){if(!Number.isFinite(e)||e<=0)return`$0`;if(e>=1e3)return`$${Math.round(e).toLocaleString(`en-US`)}`;if(e>=1)return`$${e.toFixed(2)}`;if(e>=.01)return`$${e.toFixed(4)}`;let t=Math.floor(-Math.log10(e)),n=Math.round(e*10**(t+4)).toString().slice(0,4);return t<4?`$0.${`0`.repeat(t)}${n}`:`$0.0${String(t).split(``).map(e=>Jl[Number(e)]).join(``)}${n}`}var Xl=`#39ff88`,Zl=`#00f0ff`,Ql=`#ff2bd6`,$l=Zl,eu=Ql,tu=`rgba(170,110,255,0.14)`,nu=`#ffd84a`,ru=`#8f9cc8`,iu=`chartFrame`,au=`<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M2 7V2h5M13 2h5v5M18 13v5h-5M7 18H2v-5"/></svg>`,ou=`<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M4 4l12 12M16 4L4 16"/></svg>`,su=()=>`<div class="chart" id="chart">
  <div class="chartbar"><span class="cname" id="cName"></span><span class="cprice" id="cPrice">…</span><span class="cmove" id="cMove"></span><button type="button" class="cfull" id="cFull" aria-label="Full screen">${au}</button><span class="ctabs">${Rl.map(e=>`<button type="button" data-f="${e.key}">${e.key}</button>`).join(``)}</span></div>
  <canvas id="chartCanvas"></canvas>
  <div class="cnote" id="cNote">Loading the chart…</div>
</div>`,cu=(e,t)=>{e&&e.textContent!==t&&(e.textContent=t)},lu=()=>window.Telegram?.WebApp;function uu(e,t=``){let n=document.getElementById(`chart`),r=document.getElementById(`chartCanvas`),i=document.getElementById(`cNote`),a=r.getContext(`2d`),o=Rl[0];try{o=Rl.find(e=>e.key===localStorage.getItem(iu))??Rl[0]}catch{}let s=null,c=null,l=null,u=[],d={trades:[],paid:null,targets:[]},f=ds(),p=0,m=(()=>{try{return matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}})(),h=[],g=1,_=!1,v=0,y=0,b=!1,x=0,S=0,C=0,w=!1,T=null,E=null,D=()=>n.isConnected&&(!E||E.holder.isConnected);document.getElementById(`cName`).textContent=t,n.candles=()=>u;let O=()=>n.querySelectorAll(`.ctabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.f===o.key)),k=e=>{i.textContent!==e&&(i.textContent=e)},ee=()=>{u=l&&c?ql(l,c,h,g):[],fe()},te=()=>{if(!l?.list.length||!c)return;let e=l.list[l.list.length-1];if(_&&e.t===v)return;let t=Ho[c.base].sec,n=h.filter(n=>n.at>=e.t-30&&n.at<=e.t+t+30);if(!n.length)return;let r=e.c/n[n.length-1].p;r>.5&&r<1.5&&(g=_?g*.5+r*.5:r,_=!0,v=e.t)},ne=e=>{clearTimeout(S),clearInterval(C),x=Math.max(Date.now()+3e3,e.retryAt),e.why===`missing`&&(x=Date.now()+12e4);let t=()=>{if(!D())return clearInterval(C);let t=Math.max(1,Math.ceil((x-Date.now())/1e3));e.why===`missing`?k(u.length?``:`No chart for this coin yet (GeckoTerminal hasn't listed it).`):u.length?k(`${e.why===`busy`?`GeckoTerminal is busy`:`Couldn't reach GeckoTerminal`}, so the candles may lag a little (the price is still live). Checking again in ${t}s.`):e.why===`busy`?k(`GeckoTerminal is busy (too many requests). Trying again in ${t}s…`):k(`Couldn't reach GeckoTerminal. Trying again in ${t}s…`)};t(),C=window.setInterval(t,1e3),S=window.setTimeout(()=>{clearInterval(C),x=0,D()&&ae().catch(()=>{})},x-Date.now())},re=()=>{clearTimeout(S),clearInterval(C),x=0,k(``)},ie=async t=>{let n=Date.now()/1e3,r=await ns(s.p,e,`d1`,n-Ul*Hl,{prefetch:!1,alive:t,freshMs:6e4});if(!r.a.ok)return r.a;if(r.s.list.length>=3)return{ok:!0,data:r.s.start??n-Ul*Hl};let i=await ns(s.p,e,`m1`,n-59940,{prefetch:!1,alive:t,freshMs:6e4});return i.a.ok?{ok:!0,data:i.s.start??i.s.list[0]?.t??n-Hl}:i.a},ae=async()=>{let t=++y,n=()=>D()&&t===y;b=!0;try{if(!s){let t=await zo(e,n);if(!n())return;if(!t.ok)return ne(t);s={...t.data}}let t=Date.now()/1e3,r=Gl(o,s.born,t);if(!r){let e=await ie(n);if(!n())return;if(!e.ok)return ne(e);s.born=e.data,r=Wl(e.data,t)}(!c||c.base!==r.base)&&(l=Yo(s.p,r.base)),c=r,te(),ee();let i=await ns(s.p,e,r.base,r.from,{prefetch:!1,alive:n,freshMs:2e4});if(!n())return;if(i.s&&(l=i.s),te(),ee(),!i.a.ok)return ne(i.a);re(),u.length||k(`No trades in this time frame yet.`),w||(w=!0,A().catch(()=>{}))}finally{t===y&&(b=!1)}},A=async()=>{let t=[`m5`,`h1`,`m1`,`d1`].filter(e=>e!==c?.base);for(let n of t){if(!D()||!s)return;let t=Yo(s.p,n);if(!(t&&Date.now()-t.at<9e4)&&!(await ns(s.p,e,n,Date.now()/1e3-Kl[n],{prefetch:!0,alive:D,freshMs:9e4})).a.ok)return}};(async()=>{O();for(let e=0;D();e++){if(e&&await new Promise(e=>setTimeout(e,3e4)),!D())return;document.hidden||b||x||await ae().catch(()=>{})}})(),n.querySelectorAll(`.ctabs button`).forEach(e=>e.addEventListener(`click`,()=>{let t=Rl.find(t=>t.key===e.dataset.f);if(!t||t===o)return;o=t;try{localStorage.setItem(iu,t.key)}catch{}O(),T=null;let n=s?Gl(t,s.born,Date.now()/1e3):null;l=n&&s?Yo(s.p,n.base):null,c=n,ee(),u.length||k(`Loading the chart…`),clearTimeout(S),clearInterval(C),x=0,ae().catch(()=>{})}));let oe=e=>{let t=r.getBoundingClientRect();T=E?.rot?e.clientY-t.top:e.clientX-t.left,fe()};r.addEventListener(`pointerdown`,oe),r.addEventListener(`pointermove`,e=>T!==null&&oe(e));let se=()=>{T=null,fe()};r.addEventListener(`pointerup`,se),r.addEventListener(`pointercancel`,se),r.addEventListener(`pointerleave`,se),window.addEventListener(`resize`,()=>D()&&(E?le():fe()));let ce=document.getElementById(`cFull`),le=()=>{if(!E)return;let e=window.innerWidth,t=window.innerHeight;E.rot=t>e,E.wrap.classList.toggle(`rot`,E.rot),E.wrap.style.width=`${E.rot?t:e}px`,E.wrap.style.height=`${E.rot?e:t}px`,E.wrap.style.transform=E.rot?`translateX(${e}px) rotate(90deg)`:``,fe()},j=()=>le(),ue=()=>{if(E)return;let e=document.createComment(`chart`);n.before(e);let t=document.createElement(`div`);t.className=`chartfull`;let r=document.createElement(`div`);r.className=`fullwrap`,r.append(n),t.append(r),document.body.append(t),n.classList.add(`big`),document.documentElement.classList.add(`chartopen`),ce.innerHTML=ou,ce.setAttribute(`aria-label`,`Close full screen`);let i=lu(),a=!1;try{i?.isVersionAtLeast?.(`8.0`)&&i.requestFullscreen&&!i.isFullscreen&&(i.requestFullscreen(),a=!0);for(let e of[`fullscreenChanged`,`viewportChanged`,`safeAreaChanged`,`contentSafeAreaChanged`])i?.onEvent?.(e,j)}catch{}let o=window.setInterval(()=>E&&!E.holder.isConnected&&de(),1e3);E={shell:t,wrap:r,holder:e,rot:!1,tgFull:a,timer:o},le(),requestAnimationFrame(le)},de=()=>{if(!E)return;let e=E;E=null,clearInterval(e.timer),e.holder.isConnected?e.holder.replaceWith(n):n.remove(),e.shell.remove(),n.classList.remove(`big`),document.documentElement.classList.remove(`chartopen`),ce.innerHTML=au,ce.setAttribute(`aria-label`,`Full screen`);let t=lu();try{for(let e of[`fullscreenChanged`,`viewportChanged`,`safeAreaChanged`,`contentSafeAreaChanged`])t?.offEvent?.(e,j);e.tgFull&&t?.isFullscreen&&t.exitFullscreen?.()}catch{}T=null,fe()};ce.addEventListener(`click`,()=>E?de():ue());function fe(){if(!D())return;let e=Math.max(20,Math.floor(((r.clientWidth||340)-62)/7));he(c?.count&&u.length>e?u.slice(-e):u)}let pe=0,me=e=>{D()&&(!m&&p&&!document.hidden&&!document.body.classList.contains(`replaying`)&&e-pe>=33&&(pe=e,fe()),requestAnimationFrame(me))};requestAnimationFrame(me);function he(e){let t=Math.min(3,window.devicePixelRatio||1),n=r.clientWidth||340,i=r.clientHeight||220;(r.width!==Math.round(n*t)||r.height!==Math.round(i*t))&&(r.width=Math.round(n*t),r.height=Math.round(i*t)),a.setTransform(t,0,0,t,0,0),a.clearRect(0,0,n,i);let o=document.getElementById(`cPrice`),s=document.getElementById(`cMove`);if(!e.length){let e=h.length?h[h.length-1].p*g:null;o&&(o.textContent=e?Yl(e):`…`),s&&(s.textContent=``);return}let l=n-62,u=i-14-18,_=e.length,v=c.size,y=l/Math.max(_,Math.min(c.count||30,Math.max(20,Math.floor(l/7)))),b=l-_*y,x=1/0,S=-1/0;for(let t of e)x=Math.min(x,t.l),S=Math.max(S,t.h);let C=S-x||S*.02||1,w=[];d.paid&&w.push({p:d.paid,label:`PAID`,col:`#ffb800`});for(let e of d.targets)w.push({p:e.usd,label:e.label,col:nu});for(let e of w)e.p>=x-C*.8&&e.p<=S+C*.8&&(x=Math.min(x,e.p),S=Math.max(S,e.p));let E=(S-x||S*.02||1)*.08;x-=E,S+=E;let D=e=>14+(1-(e-x)/(S-x))*u;a.font=`600 10px "Rajdhani", sans-serif`,a.textBaseline=`middle`,a.textAlign=`left`;let O=D(e[_-1].c),k=u>260?6:4;for(let e=0;e<k;e++){let t=x+(S-x)*(e+.5)/k,n=Math.round(D(t))+.5,r=Math.abs(n-O)<14;a.strokeStyle=tu,a.lineWidth=1,a.beginPath(),a.moveTo(0,n),a.lineTo(l,n),a.stroke(),a.fillStyle=ru,r||a.fillText(Yl(t),l+6,n)}a.strokeStyle=tu;for(let e of[.08,.29,.5,.71,.92]){let t=Math.round(b+(Math.floor(e*(_-1))+.5)*y)+.5;a.beginPath(),a.moveTo(t,14),a.lineTo(t,14+u),a.stroke()}a.textAlign=`center`,a.textBaseline=`alphabetic`;let ee=e[_-1].t-e[0].t+v,te=e=>{let t=new Date(e*1e3);if(ee>=2592e4)return t.toLocaleDateString(`en-US`,{month:`short`,year:`2-digit`}).replace(` `,` '`);if(ee>=259200)return t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`});let n=t.toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`}).replace(/\s?[AP]M$/i,``);return ee>=86400?`${t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})} ${n}`:n};for(let t of l>560?[.08,.29,.5,.71,.92]:[.08,.5,.92]){let n=Math.floor(t*(_-1));a.fillStyle=ru,a.fillText(te(e[n].t),b+(n+.5)*y,i-4)}let ne=(e,t,n,r)=>{let i=e>S,o=e<x;a.setLineDash([4,4]),a.strokeStyle=n,a.globalAlpha=.7,a.lineWidth=1;let s=i?14:o?14+u:Math.round(D(e))+.5;if(r===`line`&&!i&&!o&&(a.beginPath(),a.moveTo(0,s),a.lineTo(l,s),a.stroke()),a.setLineDash([]),a.globalAlpha=1,r===`line`)return;a.font=`700 9px "Orbitron", sans-serif`,a.textAlign=`left`,a.textBaseline=`middle`,a.fillStyle=n;let c=`${t} ${Yl(e)}${i?` ↑`:o?` ↓`:``}`,d=i?20:o?14+u-6:s-7;a.fillStyle=`rgba(5,1,15,0.8)`,a.fillRect(2,d-6,a.measureText(c).width+6,12),a.fillStyle=n,a.fillText(c,5,d)};for(let e of w)ne(e.p,e.label,e.col,`line`);let re=Math.max(1,Math.floor(y*.72));re%2==0&&re--;let ie=Math.round(re*1.3*t)/t,ae=(ie-1)/2,A=f.layer(r.width,r.height,t),oe=[];e.forEach((e,t)=>{let n=Math.round(b+(t+.5)*y),r=e.c>=e.o,i=r?$l:eu,o=D(e.o),s=D(e.c),c=Math.round(Math.min(o,s)),l=Math.max(c+1,Math.round(Math.max(o,s))),u=r?a:A;r||oe.push({key:e.t,x:n-ae,y:c,w:ie,h:l-c,hy:Math.round(D(e.h))-2,ly:Math.round(D(e.l))+2}),t===_-1&&(u.globalAlpha=.6,u.fillStyle=eu,u.fillRect(n-ae-2,c-1,ie,l-c),u.fillStyle=$l,u.fillRect(n-ae+2,c+1,ie,l-c),u.globalAlpha=1,u.shadowColor=i,u.shadowBlur=12),u.strokeStyle=i,u.lineWidth=1,u.beginPath(),u.moveTo(n+.5,Math.round(D(e.h))),u.lineTo(n+.5,c),u.moveTo(n+.5,l),u.lineTo(n+.5,Math.round(D(e.l))),u.stroke(),u.fillStyle=i,u.fillRect(n-ae,c,ie,l-c),u.shadowBlur=0}),a.shadowBlur=0,p=oe.length,f.render(a,oe,performance.now()/1e3,t,m);for(let e of w)ne(e.p,e.label,e.col,`label`);let se=e[0].t,ce=Math.max(1,Math.ceil(12/y)),le=new Map;for(let e of d.trades){let t=Math.floor((e.at-se)/v);if(t<0||t>=_)continue;let n=`${Math.floor((_-1-t)/ce)}:${e.side}`,r=le.get(n)??{i:t,side:e.side,count:0};r.count++,r.i=Math.max(r.i,t),le.set(n,r)}for(let t of le.values()){let n=t.i,r=e[n],i=b+(n+.5)*y,o=t.side===1,s=o?D(r.l)+10:D(r.h)-10;a.fillStyle=o?Xl:Ql,a.shadowColor=a.fillStyle,a.shadowBlur=8,a.beginPath(),o?(a.moveTo(i,s-5),a.lineTo(i+5,s+4),a.lineTo(i-5,s+4)):(a.moveTo(i,s+5),a.lineTo(i+5,s-4),a.lineTo(i-5,s-4)),a.closePath(),a.fill(),a.shadowBlur=0,a.font=`800 8px "Orbitron", sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`${o?`B`:`S`}${t.count>1?t.count:``}`,i,o?s+12:s-12)}let j=e[_-1],ue=Math.round(D(j.c))+.5,de=j.c>=j.o?$l:eu;a.setLineDash([2,3]),a.strokeStyle=de,a.globalAlpha=.8,a.beginPath(),a.moveTo(0,ue),a.lineTo(l,ue),a.stroke(),a.setLineDash([]),a.globalAlpha=1,a.fillStyle=de,a.shadowColor=de,a.shadowBlur=10,a.fillRect(l+1,ue-8,61,16),a.shadowBlur=0,a.fillStyle=`#000`,a.font=`700 10px "Rajdhani", sans-serif`,a.textAlign=`left`,a.textBaseline=`middle`,a.fillText(Yl(j.c),l+5,ue+.5);let fe=j;if(T!==null){let t=Math.max(0,Math.min(_-1,Math.floor((T-b)/y)));fe=e[t];let n=b+(t+.5)*y;a.strokeStyle=`rgba(232,249,255,0.5)`,a.beginPath(),a.moveTo(Math.round(n)+.5,14),a.lineTo(Math.round(n)+.5,14+u),a.stroke(),a.fillStyle=`rgba(5,1,15,0.85)`,a.fillRect(4,14,168,30),a.fillStyle=`#e8f9ff`,a.font=`600 10px "Rajdhani", sans-serif`,a.textAlign=`left`,a.textBaseline=`top`,a.fillText(`${new Date(fe.t*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}`,9,17),a.fillText(`O ${Yl(fe.o)}  H ${Yl(fe.h)}  L ${Yl(fe.l)}  C ${Yl(fe.c)}`,9,30)}if(cu(o,Yl(fe.c)),s){let t=e[0].o,n=t>0?(j.c/t-1)*100:0,r=j.t-e[0].t+v,i=86400,a=r>=365*i?`${Math.round(r/(365*i)*10)/10}y`:r>=60*i?`${Math.round(r/(30*i))}mo`:r>=2*i?`${Math.round(r/i)}d`:r>=7200?`${Math.round(r/3600)}h`:`${Math.round(r/60)}m`;cu(s,`${n>=0?`▲`:`▼`} ${Math.abs(n)>=100?Math.round(Math.abs(n)):Math.abs(n).toFixed(1)}% · ${a}`),s.classList.toggle(`down`,n<0)}}return{live(e){if(!(e>0)||!D())return;let t=Date.now()/1e3;h.push({at:t,p:e}),(h.length>2500||h[0].at<t-4*Vl)&&(h=h.filter(e=>e.at>=t-4*Vl).slice(-2e3)),te(),ee()},marks(e){d=e,fe()}}}var du=e=>Object.freeze(e());function fu(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}function pu(e){if(!fu(e))throw TypeError(`Uint8Array expected`)}function mu(e,t){if(typeof t!=`string`)throw TypeError(`${e}: string expected`);return!0}function hu(e,t=`number`){if(typeof e!=`number`)throw TypeError(`${t}: expected number, got ${typeof e}`);if(!Number.isSafeInteger(e))throw RangeError(`${t}: expected safe integer, got ${e}`)}function gu(...e){let t=e=>e,n=(e,t)=>n=>e(t(n));return{encode:e.map(e=>e.encode).reduceRight(n,t),decode:e.map(e=>e.decode).reduce(n,t)}}var _u=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})(),vu=(()=>{try{let e=new TextDecoder;return e.decode(Uint8Array.of(65,48,43,127))===`A0+`?e:void 0}catch{return}})(),yu=8192;function bu(e){let t=e.length;if(vu!==void 0&&t>=12)return vu.decode(e);if(t<=yu)return String.fromCharCode.apply(null,e);let n=``;for(let r=0;r<t;r+=yu)n+=String.fromCharCode.apply(null,e.subarray(r,r+yu));return n}function xu(e){if(hu(e),e<=0||e>8)throw RangeError(`radix2: bits should be in (0..8]`);let t=_u[e]-1;return{encode:n=>{pu(n);let r=n.length,i=new Uint8Array(Math.ceil(r*8/e)),a=0,o=0,s=0;for(let c=0;c<r;)for(c+2<r?(a=a<<24|n[c]<<16|n[c+1]<<8|n[c+2],o+=24,c+=3):(a=(a<<8|n[c])&65535,o+=8,c++);o-=e,i[s++]=a>>o&t,!(o<e););return o>0&&(i[s]=a<<e-o&t),i},decode:t=>{let n=t.length,r=new Uint8Array(Math.floor(n*e/8)),i=0,a=0,o=0;for(let s=0;s<n;s++)for(i=(i<<e|t[s])&65535,a+=e;a>=8;a-=8)r[o++]=i>>a-8&255;if(i=i<<8-a&255,a>=e)throw Error(`Excess padding`);if(i>0)throw Error(`Non-zero padding: ${i}`);return r}}}function Su(e,t){let n=e.length;if(n>128)throw Error(`alphabet: max 128 letters`);let r=new Uint8Array(n),i=new Int8Array(128).fill(-1);for(let t=0;t<n;t++){let n=e.charCodeAt(t);if(e.codePointAt(t)!==n||n>127)throw Error(`alphabet: single-char ASCII letters only`);r[t]=n,i[n]=t}if(t!==void 0)for(let e of Object.keys(t)){let n=e.charCodeAt(0),r=i[t[e].charCodeAt(0)];if(e.length!==1||n>127||r===void 0||r===-1)throw Error(`alphabet: invalid alias ${e}`);i[n]=r}return{encode:e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++){let i=e[n],a=r[i];if(a===void 0)throw Error(`alphabet.encode: invalid digit ${i}`);t[n]=a}return bu(t)},decode:t=>{mu(`decode`,t);let n=t.length,r=new Uint8Array(n);for(let a=0;a<n;a++){let n=t.charCodeAt(a),o=n<128?i[n]:-1;if(o===-1)throw Error(`Unknown letter "${t[a]}". Allowed: ${e}`);r[a]=o}return r}}}function Cu(e,t=`=`){return hu(e),mu(`padding`,t),{encode(n){for(;n.length*e%8;)n+=t;return n},decode(n){mu(`decode`,n);let r=n.length;if(r*e%8)throw Error(`padding: invalid length`);for(;r>0&&n[r-1]===t;r--)if((r-1)*e%8==0)throw Error(`padding: excess padding`);return n.slice(0,r)}}}var wu=typeof Uint8Array.from([]).toBase64==`function`&&typeof Uint8Array.fromBase64==`function`,Tu=/[\t\n\f\r ]/,Eu=(e,t)=>{mu(`base64`,e);let n=t?`base64url`:`base64`;if(e.length>0&&Tu.test(e))throw Error(`invalid base64`);return Uint8Array.fromBase64(e,{alphabet:n,lastChunkHandling:`strict`})},Du=du(()=>gu(xu(6),Su(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),Cu(6))),Ou=du(()=>wu?{encode(e){return pu(e),e.toBase64()},decode(e){return Eu(e,!1)}}:Du),ku=656356768,Au=65536,ju=2048,Mu=4096,Nu=(e,t)=>({encode:n=>{pu(n);let r=n.length;if(r===0)return new Uint8Array;if(r>=Au)throw Error(`invalid length`);let i=0;for(;i<r-1&&n[i]===0;)i++;let a=Math.ceil(r/2),o=new Uint16Array(a),s=r&1;s&&(o[0]=n[0]);for(let e=s,t=s;e<r;e+=2,t++)o[t]=n[e]<<8|n[e+1];let c=[],l=0;for(;l<a;){let e=0;for(let n=l;n<a;n++){let r=e*65536+o[n],i=Math.floor(r/t);e=r-i*t,o[n]=i,i===0&&n===l&&l++}c.push(e)}let u=c.length-1,d=u*5;for(let t=c[u];d++,!(t<e);t=Math.floor(t/e));let f=new Uint8Array(i+d),p=f.length-1;for(let t=0;t<u;t++){let n=c[t];for(let t=0;t<5;t++)f[p--]=n%e,n=Math.floor(n/e)}for(let t=c[u];p>=i;t=Math.floor(t/e))f[p--]=t%e;return f},decode:t=>{pu(t);let n=t.length;if(n===0)return new Uint8Array;if(n>=Au)throw Error(`invalid length`);let r=0;for(;r<n-1&&t[r]===0;)r++;let i=new Uint16Array(Math.ceil(n*6/16)+1),a=0,o=0,s=n%5||5;for(;o<n;){let n=0,r=1;for(let i=o+s;o<i;o++){let i=t[o];if(i>=e)throw Error(`invalid integer: ${i}`);n=n*e+i,r*=e}s=5;let c=n;for(let e=0;e<a;e++){let t=i[e]*r+c;c=Math.floor(t/65536),i[e]=t-c*65536}for(;c>0;c=Math.floor(c/65536))i[a++]=c%65536}let c=a===0?1:a*2-(i[a-1]<256),l=new Uint8Array(r+c),u=l.length-1;for(let e=0;e<a;e++){let t=i[e];l[u--]=t&255,u>=r&&(l[u--]=t>>8)}return l}}),Pu=(e,t)=>{let n=Su(t);return{encode(t){if(pu(t),t.length>ju)throw Error(`invalid length`);return n.encode(e.encode(t))},decode(t){if(mu(`baseN.decode`,t),t.length>Mu)throw Error(`invalid length`);return e.decode(n.decode(t))}}},Fu=Nu(58,ku),Iu=e=>Pu(Fu,e),Lu=du(()=>Iu(`123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`)),Ru=`https://api.jup.ag`,zu=!1;function Bu(e){Ru=`${e}/jup`,zu=!0}var Vu=`So11111111111111111111111111111111111111112`,Hu=6e4,Uu=60,Wu={trade:0,screen:6,background:24},Gu={trade:0,screen:1,background:2},Ku=12,qu=[],Ju=null,Yu=0,Xu=0,Zu=[],Qu,$u=e=>new Promise(t=>setTimeout(t,e));function ed(e,t){if(t<Yu)return Yu-t;if(Xu>=Ku)return-1;for(;qu.length&&qu[0]<=t-Hu;)qu.shift();let n=Uu-Wu[e],r=qu.length<n?0:qu[qu.length-n]+Hu-t;return Ju&&t<Ju.reset&&Ju.left-qu.filter(e=>e>Ju.at).length<=Wu[e]&&(r=Math.max(r,Ju.reset-t)),r}function td(){for(clearTimeout(Qu);Zu.length;){let e=ed(Zu[0].lane,Date.now());if(e>0&&(Qu=setTimeout(td,e)),e!==0)return;qu.push(Date.now()),Xu++,Zu.shift().go()}}var nd=e=>new Promise(t=>{let n=Zu.findIndex(t=>Gu[t.lane]>Gu[e]);n<0?Zu.push({lane:e,go:t}):Zu.splice(n,0,{lane:e,go:t}),td()}),rd=`jupPassInHeader`,id=(()=>{try{return Date.now()-Number(localStorage.getItem(rd)||0)<36e5}catch{return!1}})();function ad(e,t,n,r){return r?fetch(`${Ru}${e}${e.includes(`?`)?`&`:`?`}relaypass=${encodeURIComponent(t)}`,{method:n?.method??`GET`,body:n?.body}):fetch(Ru+e,{...n,headers:{"x-api-key":t,"content-type":`application/json`,...n?.headers}})}async function od(e,t,n,r=`screen`){let i=e.startsWith(`/swap/v2/execute`),a=Date.now()+3e4;for(let o=0;;o++){i||await nd(r);let o;try{let r=zu&&!id;if(o=await ad(e,t,n,r),o.status===403&&r){id=!0;try{localStorage.setItem(rd,String(Date.now()))}catch{}o=await ad(e,t,n,!1)}}finally{i||(Xu--,td())}let s=o.headers.get(`x-ratelimit-remaining`),c=Number(o.headers.get(`x-ratelimit-reset`));if(!i&&s!==null&&c>0&&(Ju={left:Number(s),at:Date.now(),reset:c*1e3}),o.status===429&&Date.now()<a){let e=c>0?c*1e3+100:Date.now()+1e3,t=Math.min(Math.max(e,Date.now()+250),Date.now()+1e4);i?await $u(t-Date.now()):(Yu=Math.max(Yu,t),td());continue}let l=await o.json().catch(()=>({}));if(!o.ok){let e=l?.error??l?.message??`HTTP ${o.status}`;throw o.status===403?Error(`The bot's owner hasn't let you in, or this link is old. Open the app from a fresh message in the bot.`):o.status===429?Error(`Jupiter is busy right now (too many requests on the bot's key). Try again in a minute.`):Error(o.status===401?`Jupiter rejected the API key.`:`Jupiter: ${e}`)}return l}}function sd(e,t,n,r){return cd(e,Vu,t,String(n),r)}function cd(e,t,n,r,i){return od(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r,taker:i})}`,e,void 0,`trade`)}function ld(e,t,n){return od(`/swap/v2/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:Ou.encode(t),requestId:n})})}var ud=e=>Ou.decode(e),dd=`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;async function fd(e,t,n,r,i=!1){try{if(r<=0n)return null;let a=await od(`/swap/v2/order?${new URLSearchParams({inputMint:t,outputMint:n,amount:r.toString()})}`,e,void 0,i?`background`:`screen`),o=Number(a.outAmount);return o>0?o:null}catch{return null}}var pd=(e,t,n,r=!1)=>fd(e,t,Vu,n,r);async function md(e,t=!1){try{let e=await fetch(`https://api.exchange.coinbase.com/products/SOL-USD/ticker`,{signal:AbortSignal.timeout(3e3)}),t=e.ok?Number((await e.json()).price):0;if(t>0)return t}catch{}let n=await fd(e,Vu,dd,1000000000n,t);return n===null?null:n/1e6}async function hd(e,t,n=!1){let r=new Map;for(let i=0;i<t.length;i+=100){let a=t.slice(i,i+100);try{let t=await od(`/tokens/v2/search?query=${a.join(`,`)}`,e,void 0,n?`background`:`screen`);for(let e of t)a.includes(e.id)&&e.usdPrice&&e.usdPrice>0&&r.set(e.id,e.usdPrice)}catch{}}return r}async function gd(e,t){try{let n=(await od(`/tokens/v2/search?query=${t}`,e)).find(e=>e.id===t);return n?`${n.name??``} (${n.symbol??`?`})`:null}catch{return null}}function _d(e,t,n,r,i){return od(`/trigger/v1/createOrder`,e,{method:`POST`,body:JSON.stringify({inputMint:n,outputMint:Vu,maker:t,payer:t,params:{makingAmount:r.toString(),takingAmount:i.toString()},computeUnitPrice:`auto`,wrapAndUnwrapSol:!0})},`trade`)}function vd(e,t,n){return od(`/trigger/v1/cancelOrder`,e,{method:`POST`,body:JSON.stringify({maker:t,order:n,computeUnitPrice:`auto`})},`trade`)}function yd(e,t,n){return od(`/trigger/v1/execute`,e,{method:`POST`,body:JSON.stringify({signedTransaction:Ou.encode(t),requestId:n})},`trade`)}async function bd(e,t,n){return(await od(`/trigger/v1/getTriggerOrders?${new URLSearchParams({user:t,orderStatus:n,page:`1`})}`,e)).orders??[]}var xd=`https://pumpportal.fun/api/trade-local`,Sd=[{slippage:15,share:.85},{slippage:30,share:.75}];function Cd(e,t,n,r){return Td({publicKey:e,action:`buy`,mint:t,amount:(n/1e9).toFixed(9),denominatedInSol:`true`,slippage:String(r)})}function wd(e,t,n,r){return Td({publicKey:e,action:`sell`,mint:t,amount:n,denominatedInSol:`false`,slippage:String(r)})}async function Td(e){let t;try{t=await fetch(xd,{method:`POST`,headers:{"content-type":`application/x-www-form-urlencoded`},body:new URLSearchParams({...e,priorityFee:`0.0001`,pool:`auto`})})}catch{throw Error(`Couldn't reach PumpPortal from the app.`)}if(!t.ok){let e=(await t.text().catch(()=>``)).trim();throw Error(`PumpPortal: ${e.slice(0,200)||`HTTP ${t.status}`}`)}return new Uint8Array(await t.arrayBuffer())}var Ed=BigInt(2**32-1),Dd=BigInt(32);function Od(e,t=!1){return t?{h:Number(e&Ed),l:Number(e>>Dd&Ed)}:{h:Number(e>>Dd&Ed)|0,l:Number(e&Ed)|0}}function kd(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=Od(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var Ad=e=>e/2**32|0,jd=e=>e>>>0;function Md(e,t,n,r){let i=Ad(n),a=jd(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var Nd=(e,t,n)=>e>>>n,Pd=(e,t,n)=>e<<32-n|t>>>n,Fd=(e,t,n)=>e>>>n|t<<32-n,Id=(e,t,n)=>e<<32-n|t>>>n,Ld=(e,t,n)=>e<<64-n|t>>>n-32,Rd=(e,t,n)=>e>>>n-32|t<<64-n;function zd(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Bd=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),Vd=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Hd=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),Ud=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,Wd=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),Gd=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function Kd(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var qd=e=>e?`"${e}" `:``;function Jd(e,t=``){if(typeof e!=`number`)throw TypeError(qd(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(qd(t)+`expected integer >= 0, got `+e);return e}function Yd(e,t,n=``){if(Kd(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Jd(t,`length`);let r=Kd(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=qd(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}function Xd(e){if(typeof e!=`function`||typeof e.create!=`function`)throw TypeError(`expected hash wrapped by utils.createHasher`);if(Jd(e.outputLen),Jd(e.blockLen),e.outputLen<1||e.blockLen<1)throw Error(`hash blockLen / outputLen must be >= 1`)}var Zd=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},Qd=(e,t)=>{Zd(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function $d(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function ef(e,t){Yd(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function tf(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function nf(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function rf(e,t){return e<<32-t|e>>>t}var af=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,of=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function sf(e){if(Yd(e),af)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=of[e[n]];return t}function cf(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function lf(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(af)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=cf(e.charCodeAt(i)),a=cf(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function uf(e){if(typeof e!=`string`)throw TypeError(`string expected`);let t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{tf(t)}}function df(e,t=``){return typeof e==`string`?uf(e):Yd(e,void 0,t)}function ff(...e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];Yd(r),t+=r.length}let n=new Uint8Array(t);for(let t=0,r=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.length}return n}function pf(e,t,n=`opts`){return Qd(e,`defaults`),t!==void 0&&Qd(t,n),Object.assign(Object.create(null),e,t)}function mf(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=pf({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function hf(e=32){Jd(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}var gf=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function _f(e,t,n){return e&t^~e&n}function vf(e,t,n){return e&t^e&n^t&n}var yf=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=nf(this.buffer)}update(e){$d(this),Yd(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=nf(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){$d(this),ef(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Md(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:nf(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},bf=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),xf=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Sf=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Cf=new Uint32Array(64),wf=class extends yf{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Cf[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Cf[e-15],n=Cf[e-2],r=rf(t,7)^rf(t,18)^t>>>3,i=rf(n,17)^rf(n,19)^n>>>10;Cf[e]=i+Cf[e-7]+r+Cf[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=rf(o,6)^rf(o,11)^rf(o,25),u=l+t+_f(o,s,c)+Sf[e]+Cf[e]|0,d=(rf(n,2)^rf(n,13)^rf(n,22))+vf(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){tf(Cf)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),tf(this.buffer)}},Tf=class extends wf{constructor(){super(32,bf)}},Ef=kd(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),Df=Ef[0],Of=Ef[1],kf=new Uint32Array(80),Af=new Uint32Array(80),jf=class extends yf{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)kf[n]=e.getUint32(t),Af[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=kf[e-15]|0,n=Af[e-15]|0,r=Fd(t,n,1)^Fd(t,n,8)^Nd(t,n,7),i=Id(t,n,1)^Id(t,n,8)^Pd(t,n,7),a=kf[e-2]|0,o=Af[e-2]|0,s=Fd(a,o,19)^Ld(a,o,61)^Nd(a,o,6),c=Hd(i,Id(a,o,19)^Rd(a,o,61)^Pd(a,o,6),Af[e-7],Af[e-16]),l=Ud(c,r,s,kf[e-7],kf[e-16]);kf[e]=l|0,Af[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=Fd(u,d,14)^Fd(u,d,18)^Ld(u,d,41),v=Id(u,d,14)^Id(u,d,18)^Rd(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=Wd(_,v,b,Of[e],Af[e]),S=Gd(x,g,t,y,Df[e],kf[e]),C=x|0,w=Fd(n,r,28)^Ld(n,r,34)^Ld(n,r,39),T=Id(n,r,28)^Rd(n,r,34)^Rd(n,r,39),E=n&i^n&o^i&o,D=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=zd(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let O=Bd(C,T,D);n=Vd(O,S,w,E),r=O|0}({h:n,l:r}=zd(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=zd(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=zd(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=zd(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=zd(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=zd(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=zd(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=zd(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){tf(kf,Af)}destroy(){this.destroyed=!0,tf(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Mf=class extends jf{constructor(){super(64,xf)}},Nf=mf(()=>new Tf,gf(1)),Pf=mf(()=>new Mf,gf(3));function Ff(e,t,n=()=>{}){if(!Array.isArray(e))throw TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}var If=(e,t,n)=>Yd(e,t,n),Lf=Jd;function Rf(e,t=`object`){if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`);return e}function zf(e,t){if(typeof e!=`function`)throw TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}var Bf=sf,Vf=(...e)=>ff(...e),Hf=e=>lf(e),Uf=Kd,Wf=e=>hf(e),Gf=BigInt(0),Kf=BigInt(1),qf=e=>e?`"${e}" `:``;function Jf(e,t=``){if(typeof e!=`boolean`)throw TypeError(qf(t)+`expected boolean, got type=`+typeof e);return e}function Yf(e){if(typeof e==`bigint`){if(!rp(e))throw RangeError(`positive bigint expected, got `+e)}else Lf(e);return e}function Xf(e,t=``){if(typeof e!=`number`){let n=t&&`"${t}" `;throw TypeError(n+`expected number, got type=`+typeof e)}if(!Number.isSafeInteger(e)){let n=t&&`"${t}" `;throw RangeError(n+`expected safe integer, got `+e)}}function Zf(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);return e===``?Gf:BigInt(`0x`+e)}function Qf(e){return Zf(sf(e))}function $f(e){return Zf(sf(np(Yd(e)).reverse()))}function ep(e,t){if(Jd(t),t===0)throw Error(`zero output length is invalid`);e=Yf(e);let n=t*2,r=e.toString(16);if(r.length>n)throw RangeError(`number is too large`);return lf(r.padStart(n,`0`))}function tp(e,t){return ep(e,t).reverse()}function np(e){return Uint8Array.from(If(e))}function rp(e){return typeof e==`bigint`&&Gf<=e}function ip(e,t,n){return rp(e)&&rp(t)&&rp(n)&&t<=e&&e<n}function ap(e,t,n,r){if(!ip(t,n,r))throw RangeError(`expected valid `+e+`: `+n+` <= n < `+r+`, got `+t)}function op(e){if(e<Gf)throw Error(`expected non-negative bigint, got `+e);return e===Gf?0:e.toString(2).length}var sp=e=>(Xf(e,`n`),(Kf<<BigInt(e))-Kf);function cp(e,t={},n={},r=`object`){Rf(e,r),Rf(t,`fields`),Rf(n,`optFields`);function i(t,n,i){let a=r===`object`?`param "${String(t)}"`:`"${r}.${String(t)}"`,o=e[t];if(!Object.hasOwn(e,t)&&(i?o!==void 0:n!==`function`))throw TypeError(`${a} is invalid: expected own property`);if(i&&o===void 0)return;let s=typeof o;if(s!==n||o===null)throw TypeError(`${a} is invalid: expected ${n}, got ${s}`)}let a=(e,t)=>Object.entries(e).forEach(([e,n])=>i(e,n,t));a(t,!1),a(n,!0)}var lp=BigInt(0),up=BigInt(1),dp=BigInt(2),fp=BigInt(3),pp=BigInt(4),mp=BigInt(5),hp=BigInt(7),gp=BigInt(8),_p=BigInt(9),vp=BigInt(15),yp=BigInt(16),bp=BigInt(`0x10000000000000000`);function xp(e,t){if(t<=lp)throw Error(`mod: expected positive modulus, got `+t);let n=e%t;return n>=lp?n:t+n}function Sp(e,t,n){if(n<=up)throw Error(`pow: expected modulus > 1, got `+n);if(typeof t!=`bigint`)throw TypeError(`invalid exponent: expected bigint, got `+typeof t);if(t<lp)throw Error(`invalid exponent, negatives unsupported`);if(t===lp)return up;if(t===up)return e;let r=e%n;if(r<lp&&(r+=n),t<bp){let e=up;for(;t>lp;)t&up&&(e=e*r%n),r=r*r%n,t>>=up;return e}let i=[];for(;t>lp;)i.push(Number(t&vp)),t>>=pp;let a=Array(16);a[0]=up,a[1]=r;for(let e=2;e<16;e++)a[e]=a[e-1]*r%n;let o=a[i[i.length-1]];for(let e=i.length-2;e>=0;e--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let t=i[e];t!==0&&(o=o*a[t]%n)}return o}function Cp(e,t,n){if(n<=up)throw Error(`pow2: expected modulus > 1, got `+n);if(t<lp)throw Error(`pow2: expected non-negative exponent, got `+t);let r=e;for(;t-->lp;)r*=r,r%=n;return r}function wp(e,t){if(e===lp)throw Error(`invert: expected non-zero number`);if(t<=up)throw Error(`invert: expected modulus > 1, got `+t);let n=xp(e,t),r=t,i=lp,a=up;for(;n!==lp;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==up)throw Error(`invert: does not exist`);return xp(i,t)}function Tp(e,t,n){let r=e;if(!r.eql(r.sqr(t),n))throw Error(`Cannot find square root`)}function Ep(e,t){if((e&up)===lp)throw Error(t+`: expected odd modulus, got `+e)}function Dp(e,t){let n=e,r=(n.ORDER+up)/pp,i=n.pow(t,r);return Tp(n,i,t),i}function Op(e,t){let n=e,r=(n.ORDER-mp)/gp,i=n.mul(t,dp),a=n.pow(i,r),o=n.mul(t,a),s=n.mul(n.mul(o,dp),a),c=n.mul(o,n.sub(s,n.ONE));return Tp(n,c,t),c}function kp(e){let t=Bp(e),n=Ap(e),r=n(t,t.neg(t.ONE)),i=n(t,r),a=n(t,t.neg(r)),o=(e+hp)/yp;return((e,t)=>{let n=e,s=n.pow(t,o),c=n.mul(s,r),l=n.mul(s,i),u=n.mul(s,a),d=n.eql(n.sqr(c),t),f=n.eql(n.sqr(l),t);s=n.cmov(s,c,d),c=n.cmov(u,l,f);let p=n.eql(n.sqr(c),t),m=n.cmov(s,c,p);return Tp(n,m,t),m})}function Ap(e){if(e<fp)throw Error(`sqrt is not defined for small field`);Ep(e,`tonelliShanks`);let t=e-up,n=0;for(;t%dp===lp;)t/=dp,n++;let r=dp,i=Bp(e);for(;Ip(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Dp;let a=i.pow(r,t),o=(t+up)/dp;return function(e,r){let i=e;if(i.is0(r))return r;if(Ip(i,r)!==1)throw Error(`Cannot find square root`);let s=n,c=i.mul(i.ONE,a),l=i.pow(r,t),u=i.pow(r,o);for(;!i.eql(l,i.ONE);){if(i.is0(l))throw Error(`Cannot find square root: probably non-prime P`);let e=1,t=i.sqr(l);for(;!i.eql(t,i.ONE);)if(e++,t=i.sqr(t),e===s)throw Error(`Cannot find square root`);let n=up<<BigInt(s-e-1),r=i.pow(c,n);s=e,c=i.sqr(r),l=i.mul(l,c),u=i.mul(u,r)}return u}}function jp(e){return Ep(e,`Fp.sqrt`),e%pp===fp?Dp:e%gp===mp?Op:e%yp===_p?kp(e):Ap(e)}var Mp=(e,t)=>(xp(e,t)&up)===up,Np=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Pp(e){if(Rf(e,`field`),typeof e.ORDER!=`bigint`)throw TypeError(`param "ORDER" is invalid: expected bigint, got `+typeof e.ORDER);Xf(e.BYTES,`BYTES`),Xf(e.BITS,`BITS`);for(let t of Np)zf(e[t],`field.`+t);if(e.BYTES<1||e.BITS<1)throw Error(`invalid field: expected BYTES/BITS > 0`);if(e.ORDER<=up)throw Error(`invalid field: expected ORDER > 1, got `+e.ORDER);return e}function Fp(e,t,n=!1){Pp(e),Ff(t,`nums`),Jf(n,`passZero`);let r=e,i=Array(t.length).fill(n?r.ZERO:void 0),a=t.reduce((e,t,n)=>r.is0(t)?e:(i[n]=e,r.mul(e,t)),r.ONE),o=r.inv(a);return t.reduceRight((e,t,n)=>r.is0(t)?e:(i[n]=r.mul(e,i[n]),r.mul(e,t)),o),i}function Ip(e,t){Pp(e);let n=e;Ep(n.ORDER,`FpLegendre`);let r=(n.ORDER-up)/dp,i=n.pow(t,r),a=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),s=n.eql(i,n.neg(n.ONE));if(!a&&!o&&!s)throw Error(`invalid Legendre symbol result`);return a?1:o?0:-1}function Lp(e,t){if(t!==void 0&&Lf(t),e<=lp)throw Error(`invalid n length: expected positive n, got `+e);if(t!==void 0&&t<1)throw Error(`invalid n length: expected positive bit length, got `+t);let n=op(e);if(t!==void 0&&t<n)throw Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);let r=t===void 0?n:t;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var Rp=new WeakMap,zp=class{ORDER;BITS;BYTES;isLE;ZERO=lp;ONE=up;_lengths;_mod;constructor(e,t={}){if(e<=up)throw Error(`invalid field: expected ORDER > 1, got `+e);let n;this.isLE=!1,typeof t==`object`&&t&&(typeof t.BITS==`number`&&(n=t.BITS),typeof t.sqrt==`function`&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE==`boolean`&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes==`boolean`&&(this._mod=t.modFromBytes));let{nBitLength:r,nByteLength:i}=Lp(e,n);if(i>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);this.ORDER=e,this.BITS=r,this.BYTES=i,Object.freeze(this)}create(e){return xp(e,this.ORDER)}isValid(e){if(typeof e!=`bigint`)throw TypeError(`invalid field element: expected bigint, got `+typeof e);return lp<=e&&e<this.ORDER}is0(e){return e===lp}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&up)===up}neg(e){return xp(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return xp(e*e,this.ORDER)}add(e,t){return xp(e+t,this.ORDER)}sub(e,t){return xp(e-t,this.ORDER)}mul(e,t){return xp(e*t,this.ORDER)}pow(e,t){return Sp(e,t,this.ORDER)}div(e,t){return xp(e*wp(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return wp(e,this.ORDER)}sqrt(e){let t=Rp.get(this);return t||Rp.set(this,t=jp(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?tp(e,this.BYTES):ep(e,this.BYTES)}fromBytes(e,t=!1){If(e);let{_lengths:n,BYTES:r,isLE:i,ORDER:a,_mod:o}=this;if(n){if(e.length<1||!n.includes(e.length)||e.length>r)throw Error(`Field.fromBytes: expected `+n+` bytes, got `+e.length);let t=new Uint8Array(r);t.set(e,i?0:t.length-e.length),e=t}if(e.length!==r)throw Error(`Field.fromBytes: expected `+r+` bytes, got `+e.length);let s=i?$f(e):Qf(e);if(o&&(s=xp(s,a)),!t&&!this.isValid(s))throw Error(`invalid field element: outside of range 0..ORDER`);return s}invertBatch(e){return Fp(this,e,!0)}cmov(e,t,n){return Jf(n,`condition`),n?t:e}};function Bp(e,t={}){return Object.freeze(zp.prototype),new zp(e,t)}var Vp=BigInt(0),Hp=BigInt(1),Up=BigInt(4),Wp=16,Gp=128,Kp=5,qp=2**31;function Jp(e){let t=e;if(typeof t!=`function`)throw TypeError(`"Point" expected constructor, got type=`+typeof e);zf(t.fromAffine,`Point.fromAffine`),zf(t.fromBytes,`Point.fromBytes`),zf(t.fromHex,`Point.fromHex`),Rf(t.BASE,`Point.BASE`),Rf(t.ZERO,`Point.ZERO`),Pp(t.Fp),Pp(t.Fn)}function Yp(e,t){Jp(e),$p(t,e);let n=Fp(e.Fp,t.map(e=>e.Z));return t.map((t,r)=>e.fromAffine(t.toAffine(n[r])))}function Xp(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw Error(`invalid window size, expected [`+n+`..`+t+`], got W=`+e)}function Zp(e,t){let n=e*(4*t+128);if(n>qp)throw Error(`invalid window size: table would need ~`+Math.ceil(n/2**20)+` MiB, max `+qp/2**20+` MiB`)}function Qp(e,t){if(e!==void 0){zf(e,`randomBytes`);try{let n=e(t);if(!Uf(n)||n.length!==t)return}catch{return}return e}}function $p(e,t){Ff(e,`points`),e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function em(e,t,n){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,r)=>{if(!(n===void 0?t.isValid(e):rp(e)&&e<n))throw Error(`invalid scalar at index `+r)})}var tm=new WeakMap;function nm(e){return tm.get(e)||1}function rm(e,t){let n=e.double(),r=[e];for(let e=1;e<t;e++)r.push(r[e-1].add(n));return r}function im(e,t){let n=2**t,r=n/2,i=BigInt(n-1),a=[];for(;e>Vp;){let t=0;e&Hp&&(t=Number(e&i),t>=r&&(t-=n),e-=BigInt(t)),a.push(t),e>>=Hp}return a}function am(e,t,n){let r=2**t,i=r/2,a=BigInt(r-1),o=BigInt(t),s=[];for(let t=0;t<n;t++){let t=Number(e&a);e>>=o,t>i&&(t-=r,e+=Hp),s.push(t)}if(e!==Vp)throw Error(`invalid wnaf`);return s}function om(e,t,n){let r=0;for(let e of n)r=Math.max(r,e.length);let i=e;for(let e=r-1;e>=0;e--){e!==r-1&&(i=i.double());for(let r=0;r<n.length;r++){let a=n[r][e];if(a){let e=t[r][Math.abs(a)-1>>1];i=i.add(a<0?e.negate():e)}}}return i}var sm=class{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){Jp(e),this.randomBytes=Qp(t,Wp),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,n){let r=Math.ceil(n/t)+1,i=2**(t-1),a=[],o=e;for(let e=0;e<r;e++){let e=o;for(let t=0;t<i;t++)a.push(e),e=e.add(o);o=a[a.length-1].double()}return{W:t,bits:n,windows:r,comp:a}}wnafCachedCT(e,t){let{W:n,windows:r,comp:i}=e,a=2**(n-1),o=am(t,n,r),s=this.ZERO,c=this.BASE;for(let e=0;e<r;e++){let t=o[e],n=e*a,r=Math.abs(t)-1,l=i[n];for(let e=1;e<a;e++)l=e===r?i[n+e]:l;let u=l.negate();t===0?c=c.add(i[n]):s=s.add(t<0?u:l)}return{p:s,f:c}}getWnafPrecomputes(e,t,n,r){let i=this.wnafPrecomputes.get(t),a=i?.find(t=>t.W===e&&t.bits===n);return a||(a=this.buildWnafTable(t,e,n),typeof r==`function`&&(a={...a,comp:r(a.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw TypeError(`"point" expected Point instance, got type=`+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!ip(t,Hp,this.Point.Fn.ORDER))throw Error(`invalid scalar`)}runCT(e,t,n,r){let i=nm(e);return i===1?this.fixedWindowCT(e,t,n):this.wnafCachedCT(this.getWnafPrecomputes(i,e,n,r),t)}mulCT(e,t,n){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,n)}mulCTBlinded(e,t,n){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw Error(`randomBytes is required for scalar blinding`);let r=this.Point.Fn.BITS+Gp,i=this.randomBytes(Wp);if(!Uf(i)||i.length!==Wp)throw Error(`randomBytes returned invalid byte array`);i[0]=i[0]&63|128;let a=t+Qf(i)*this.Point.Fn.ORDER;return this.runCT(e,a,r,n)}fixedWindowCT(e,t,n){let r=Kp,i=sp(r),a=Array(32);a[0]=this.ZERO;for(let t=1;t<32;t++)a[t]=a[t-1].add(e);let o=Math.ceil(n/r),s=this.ZERO;for(let e=o-1;e>=0;e--){if(e!==o-1)for(let e=0;e<r;e++)s=s.double();let n=Number(t>>BigInt(e*r)&i),c=a[0];for(let e=1;e<32;e++)c=e===n?a[e]:c;s=s.add(c)}return{p:s,f:s}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===Hp||e===this.BASE&&(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,n,r){return this.shouldBlind(e,n)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,n){if(this.assertPoint(e),!rp(t))throw Error(`invalid scalar`);let r=nm(e);if(r===1||t>=this.Point.Fn.ORDER)return cm(this.Point,[e],[t],!0);let i=this.getWnafPrecomputes(r,e,this.bits,n);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),Xp(t,this.bits),Zp((Math.ceil((this.bits+Gp)/t)+1)*2**(t-1),this.Point.Fp.BYTES),tm.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return nm(e)!==1}};function cm(e,t,n,r=!1){if(Jp(e),$p(t,e),Jf(r,`allowOversized`),em(n,e.Fn,r?e.Fn.ORDER**Up:void 0),t.length!==n.length)throw Error(`arrays of points and scalars must have equal length`);let i=t.map(e=>rm(e,4)),a=n.map(e=>im(e,4));return om(e.ZERO,i,a)}function lm(e,t,n){if(t){if(t.ORDER!==e)throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);return Pp(t),t}return Bp(e,{isLE:n})}function um(e,t,n={},r){if(e!==`weierstrass`&&e!==`edwards`)throw Error(`expected curve type "weierstrass" or "edwards"`);if(r===void 0&&(r=e===`edwards`),!t||typeof t!=`object`)throw Error(`expected valid ${e} CURVE object`);cp(n);for(let e of[`p`,`n`,`h`]){let n=t[e];if(!(rp(n)&&n!==Vp))throw Error(`CURVE.${e} must be positive bigint`)}let i=lm(t.p,n.Fp,r),a=lm(t.n,n.Fn,r),o=[`Gx`,`Gy`,`a`,e===`weierstrass`?`b`:`d`];for(let e of o)if(!i.isValid(t[e]))throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:i,Fn:a}}function dm(e,t){return function(n){let r=e(n);return{secretKey:r,publicKey:t(r)}}}var fm=BigInt(0),pm=BigInt(1),mm=BigInt(2),hm=BigInt(4),gm=BigInt(8);function _m(e,t,n,r){let i=e.sqr(n),a=e.sqr(r),o=e.add(e.mul(t.a,i),a),s=e.add(e.ONE,e.mul(t.d,e.mul(i,a)));return e.eql(o,s)}function vm(e,t={}){cp(t,{},{},`extraOpts`);let n=t,r=um(`edwards`,e,n,n.FpFnLE),{Fp:i,Fn:a}=r,o=r.CURVE,{h:s}=o;if(Ip(i,o.a)!==1)throw Error(`edwards: CURVE.a must be a square in Fp for complete addition formulas`);if(Ip(i,o.d)!==-1)throw Error(`edwards: CURVE.d must be a non-square in Fp for complete addition formulas`);cp(n,{},{uvRatio:`function`,randomBytes:`function`});let c=n.randomBytes===void 0?Wf:n.randomBytes,l=mm<<BigInt(i.BYTES*8)-pm;function u(e){if(!i.isOdd)throw Error(`Field does not have .isOdd()`);return i.isOdd(e)}let d=n.uvRatio===void 0?(e,t)=>{try{return{isValid:!0,value:i.sqrt(i.div(e,t))}}catch{return{isValid:!1,value:fm}}}:n.uvRatio;if(!_m(i,o,o.Gx,o.Gy))throw Error(`bad curve params: generator point`);let f=i.eql(o.a,i.neg(i.ONE))?e=>i.neg(e):i.eql(o.a,i.ONE)?e=>e:e=>i.mul(o.a,e);function p(e,t,n=!1){let r=n?pm:fm;return ap(`coordinate `+e,t,r,l),t}function m(e){if(!(e instanceof h))throw Error(`EdwardsPoint expected`)}class h{static BASE=new h(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy));static ZERO=new h(i.ZERO,i.ONE,i.ONE,i.ZERO);static Fp=i;static Fn=a;X;Y;Z;T;constructor(e,t,n,r){this.X=p(`x`,e),this.Y=p(`y`,t),this.Z=p(`z`,n,!0),this.T=p(`t`,r),Object.freeze(this)}static CURVE(){return o}static fromAffine(e){if(e instanceof h)throw Error(`extended point not allowed`);let{x:t,y:n}=e||{};return p(`x`,t),p(`y`,n),new h(t,n,i.ONE,i.mul(t,n))}static fromBytes(e,t=!1){let n=i.BYTES,{a:r,d:a}=o;e=np(If(e,n,`point`)),Jf(t,`zip215`);let s=np(e),c=e[n-1];s[n-1]=c&-129;let f=$f(s);ap(`point.y`,f,fm,t?l:i.ORDER);let p=i.sqr(f),m=i.sub(p,i.ONE),g=i.sub(i.mulN(a,p),r),{isValid:_,value:v}=d(m,g);if(!_)throw Error(`bad point: invalid y coordinate`);let y=u(v),b=!!(c&128);if(!t&&i.is0(v)&&b)throw Error(`bad point: x=0 and x_0=1`);return b!==y&&(v=i.neg(v)),h.fromAffine({x:v,y:f})}static fromHex(e,t=!1){return h.fromBytes(Hf(e),t)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(e=6,t=!0){return _.setWindowSize(this,e),t||this.multiply(mm),this}assertValidity(){let e=this,{a:t,d:n}=o;if(e.is0())throw Error(`bad point: ZERO`);let{X:r,Y:a,Z:s,T:c}=e,l=i.sqr(r),u=i.sqr(a),d=i.sqr(s),f=i.sqr(d),p=i.mul(l,t),m=i.mul(i.add(p,u),d),h=i.add(f,i.mul(n,i.mul(l,u)));if(!i.eql(m,h))throw Error(`bad point: equation left != right (1)`);let g=i.mul(r,a),_=i.mul(s,c);if(!i.eql(g,_))throw Error(`bad point: equation left != right (2)`)}equals(e){m(e);let{X:t,Y:n,Z:r}=this,{X:a,Y:o,Z:s}=e,c=i.mul(t,s),l=i.mul(a,r),u=i.mul(n,s),d=i.mul(o,r);return i.eql(c,l)&&i.eql(u,d)}is0(){return this.equals(h.ZERO)}negate(){return new h(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:e,Y:t,Z:n}=this,r=i.sqr(e),a=i.sqr(t),o=i.mul(i.sqr(n),mm),s=f(r),c=i.addN(e,t),l=i.sub(i.subN(i.sqr(c),r),a),u=i.addN(s,a),d=i.subN(u,o),p=i.subN(s,a),m=i.mul(l,d),g=i.mul(u,p),_=i.mul(l,p),v=i.mul(d,u);return new h(m,g,v,_)}add(e){m(e);let{d:t}=o,{X:n,Y:r,Z:a,T:s}=this,{X:c,Y:l,Z:u,T:d}=e,p=i.mul(n,c),g=i.mul(r,l),_=i.mul(i.mulN(s,t),d),v=i.mul(a,u),y=i.sub(i.subN(i.mulN(i.addN(n,r),i.addN(c,l)),p),g),b=i.subN(v,_),x=i.addN(v,_),S=i.sub(g,f(p)),C=i.mul(y,b),w=i.mul(x,S),T=i.mul(y,S),E=i.mul(b,x);return new h(C,w,E,T)}subtract(e){return m(e),this.add(e.negate())}multiply(e){if(!a.isValidNot0(e))throw RangeError(`invalid scalar: expected 1 <= sc < curve.n`);let{p:t,f:n}=_.mulSecret(this,e,s,g);return g([t,n])[0]}multiplyUnsafe(e){if(!a.isValid(e))throw RangeError(`invalid scalar: expected 0 <= sc < curve.n`);return e===fm?h.ZERO:this.is0()||e===pm?this:_.mulUnsafe(this,e,g)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return _.mulUnsafe(this,o.n).is0()}toAffine(e){let t=this,n=e;if(n!=null&&typeof n!=`bigint`)throw TypeError(`"invertedZ" expected bigint, got type=`+typeof n);let{X:r,Y:a,Z:o}=t,s=t.is0();n??=s?i.create(gm):i.inv(o);let c=i.mul(r,n),l=i.mul(a,n),u=i.mul(o,n);if(s)return{x:i.ZERO,y:i.ONE};if(!i.eql(u,i.ONE))throw Error(`invZ was invalid`);return{x:c,y:l}}clearCofactor(){return s===pm?this:s===mm?this.double():s===hm?this.double().double():s===gm?this.double().double().double():this.multiplyUnsafe(s)}toBytes(){let{x:e,y:t}=this.toAffine(),n=i.toBytes(t);return n[n.length-1]|=u(e)?128:0,n}toHex(){return Bf(this.toBytes())}toString(){return`<Point ${this.is0()?`ZERO`:this.toHex()}>`}}let g=e=>Yp(h,e),_=new sm(h,c);return _.bits>=6&&h.BASE.precompute(6),Object.freeze(h.prototype),Object.freeze(h),h}function ym(e,t,n={}){if(Jp(e),typeof t!=`function`)throw Error(`"hash" function param is required`);let r=t,i=n;cp(i,{},{adjustScalarBytes:`function`,randomBytes:`function`,domain:`function`,prehash:`function`,zip215:`boolean`,mapToCurve:`function`,toMontgomery:`function`,toMontgomerySecret:`function`});let{prehash:a}=i,{BASE:o,Fp:s,Fn:c}=e,l=r.outputLen,u=2*s.BYTES;if(l!==void 0&&(Xf(l,`hash.outputLen`),l!==u))throw Error(`hash.outputLen must be ${u}, got ${l}`);let d=i.randomBytes===void 0?Wf:i.randomBytes,f=i.toMontgomery,p=i.toMontgomerySecret,m=i.adjustScalarBytes===void 0?e=>e:i.adjustScalarBytes,h=i.domain===void 0?(e,t,n)=>{if(Jf(n,`phflag`),t.length||n)throw Error(`Contexts/pre-hash are not supported`);return e}:i.domain;function g(e){return c.create($f(e))}function _(e){let t=T.secretKey;If(e,T.secretKey,`secretKey`);let n=If(r(e),2*t,`hashedSecretKey`),i=m(n.slice(0,t));return{head:i,prefix:n.slice(t,2*t),scalar:g(i)}}function v(e){let{head:t,prefix:n,scalar:r}=_(e),i=o.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}}function y(e){return v(e).pointBytes}function b(e=Uint8Array.of(),...t){let n=Vf(...t);return g(r(h(n,If(e,void 0,`context`),!!a)))}function x(e,t,n={}){cp(n,{},{},`options`),e=np(If(e,void 0,`message`)),a&&(e=a(e));let{prefix:r,scalar:i,pointBytes:s}=v(t),l=b(n.context,r,e),u=o.multiply(l).toBytes(),d=b(n.context,u,s,e),f=c.create(l+d*i);if(!c.isValid(f))throw Error(`sign failed: invalid s`);return If(Vf(u,c.toBytes(f)),T.signature,`result`)}let S={zip215:i.zip215};function C(t,n,r,i=S){cp(i);let{context:s}=i,c=i.zip215===void 0?!!S.zip215:i.zip215,l=T.signature;t=If(t,l,`signature`),n=If(n,void 0,`message`),r=If(r,T.publicKey,`publicKey`),c!==void 0&&Jf(c,`zip215`),a&&(n=a(n));let u=l/2,d=t.subarray(0,u),f=$f(t.subarray(u,l)),p,m,h;try{p=e.fromBytes(r,c),m=e.fromBytes(d,c),h=o.multiplyUnsafe(f)}catch{return!1}if(!c&&p.isSmallOrder())return!1;let g=b(s,d,r,n);return m.add(p.multiplyUnsafe(g)).subtract(h).clearCofactor().is0()}let w=s.BYTES,T={secretKey:w,publicKey:w,signature:2*w,seed:w};function E(e){return e=e===void 0?d(T.seed):e,If(e,T.seed,`seed`)}function D(e){return Uf(e)&&e.length===T.secretKey}function O(t,n){try{return!!e.fromBytes(t,n===void 0?S.zip215:n)}catch{return!1}}let k={getExtendedPublicKey:v,randomSecretKey:E,isValidSecretKey:D,isValidPublicKey:O,toMontgomery(t){if(f===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return f(e.fromBytes(t))},toMontgomerySecret(e){if(p===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return p(e)}};return Object.freeze(T),Object.freeze(k),Object.freeze({keygen:dm(E,y),getPublicKey:y,sign:x,verify:C,utils:k,Point:e,lengths:T})}var bm=BigInt(1),xm=BigInt(2),Sm=BigInt(5),Cm=BigInt(8),wm=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`),Tm={p:wm,n:BigInt(`0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`),h:Cm,a:BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`),d:BigInt(`0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`),Gx:BigInt(`0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`),Gy:BigInt(`0x6666666666666666666666666666666666666666666666666666666666666658`)};function Em(e){let t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),a=wm,o=e*e%a*e%a,s=Cp(Cp(o,xm,a)*o%a,bm,a)*e%a,c=Cp(s,Sm,a)*s%a,l=Cp(c,t,a)*c%a,u=Cp(l,n,a)*l%a,d=Cp(u,r,a)*u%a;return{pow_p_5_8:Cp(Cp(Cp(Cp(d,i,a)*d%a,i,a)*d%a,t,a)*c%a,xm,a)*e%a,b2:o}}function Dm(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}var Om=BigInt(`19681161376707505956807079304988542015446066515923890162744021073123829784752`);function km(e,t){let n=wm,r=xp(t*t*t,n),i=Em(e*xp(r*r*t,n)).pow_p_5_8,a=xp(e*r*i,n),o=xp(t*a*a,n),s=a,c=xp(a*Om,n),l=o===e,u=o===xp(-e,n),d=o===xp(-e*Om,n);return l&&(a=s),(u||d)&&(a=c),Mp(a,n)&&(a=xp(-a,n)),{isValid:l||u,value:a}}var Am=vm(Tm,{uvRatio:km}),jm=Am.Fp;function Mm(e){let{y:t}=e;return jm.toBytes(jm.div(bm+t,bm-t))}function Nm(e){let t=Am.Fp.BYTES;return Yd(e,t),Dm(Pf(e.subarray(0,t))).subarray(0,t)}function Pm(e){return ym(Am,Pf,Object.assign({adjustScalarBytes:Dm,toMontgomery:Mm,toMontgomerySecret:Nm,zip215:!0},e))}var Fm=Pm({}),Im=[`https://api.mainnet.solana.com`,`https://api.mainnet-beta.solana.com`],Lm=`https://api.mainnet-beta.solana.com`,H=null,Rm=!1,zm=null;function Bm(e,t){H=`${t?`${t}/rpc`:`https://mainnet.helius-rpc.com/`}?api-key=${encodeURIComponent(e)}`,Rm=!!t,zm=(n,r)=>`${t?`${t}/tx/${n}`:`https://mainnet.helius-rpc.com/v0/addresses/${n}/transactions`}?api-key=${encodeURIComponent(e)}&limit=100${r?`&before-signature=${r}`:``}`,Im=[H,...Im]}var U=1e9,Vm=5e3,Hm=890880,Um=`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`,Wm=`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`,W=e=>(e/U).toFixed(4).replace(/\.?0+$/,``),Gm=e=>new Promise(t=>setTimeout(t,e)),Km=class extends Error{},qm=class extends Error{},Jm=class{limit;ms;times=[];constructor(e,t){this.limit=e,this.ms=t}prune(e){for(;this.times.length&&this.times[0]<=e-this.ms;)this.times.shift()}when(e=1){let t=Date.now();this.prune(t);let n=this.times.length,r=n-(this.limit-Math.min(e,this.limit))-1;return Math.max(t,n?this.times[n-1]:0,r>=0?this.times[r]+this.ms:0)}delay(){return this.when(1)-Date.now()}book(e,t){let n=this.times.length;for(;n>0&&this.times[n-1]>t;)n--;this.times.splice(n,0,...Array(e).fill(t))}async take(){let e=this.when(1);this.book(1,e),e>Date.now()&&await Gm(e-Date.now())}room(){let e=Date.now();return this.prune(e),this.times.length&&this.times[this.times.length-1]>e?0:this.limit-this.times.length}takeNow(e){this.book(e,Date.now())}},Ym=new Set([`getAsset`,`getAssetBatch`,`getAssetsByOwner`]),Xm={helius:new Jm(9,1100),heliusDas:new Jm(2,1100),heliusSend:new Jm(1,1050),history:new Jm(2,1100),publicAll:new Jm(90,1e4),publicMethod:new Map},Zm=e=>(Xm.publicMethod.has(e)||Xm.publicMethod.set(e,new Jm(35,1e4)),Xm.publicMethod.get(e)),Qm=new Map,$m=4e3,eh=(e,t)=>void(e!==H&&Qm.set(`${e} ${t}`,Date.now()+$m)),th=(e,t)=>(Qm.get(`${e} ${t}`)??0)>Date.now();function nh(e,t){return e===H?Math.max(...t.map(e=>(Ym.has(e)?Xm.heliusDas:Xm.helius).delay())):t.some(t=>th(e,t))?1/0:Math.max(Xm.publicAll.delay(),...t.map(e=>Zm(e).delay()))}async function rh(e,t){let n=new Map,r=e=>n.set(e,(n.get(e)??0)+1);for(let n of t)e===H?(n===`sendTransaction`&&r(Xm.heliusSend),r(Ym.has(n)?Xm.heliusDas:Xm.helius)):(r(Xm.publicAll),r(Zm(n)));let i=Math.max(...[...n].map(([e,t])=>e.when(t)));for(let[e,t]of n)e.book(t,i);i>Date.now()&&await Gm(i-Date.now())}function ih(e){Xm.publicAll.takeNow(1),Zm(e).takeNow(1)}function ah(e){let t=Im.filter(t=>!th(t,e)),n=t.length?t:Im;return!H||Xm.helius.delay()<120||nh(Lm,[e])>0?n:[Lm,...n.filter(e=>e!==Lm)]}var oh=(e,t)=>fetch(e,{method:`POST`,...e===H&&Rm?{}:{headers:{"content-type":`application/json`}},body:JSON.stringify(t)});async function sh(e,t){for(let n=0;;n++){let r=[],i=0;for(let n of ah(e))try{return await ch(n,e,t,0)}catch(e){if(e instanceof Km)throw e;e instanceof qm&&i++,r.push(`${new URL(n).hostname}: ${e instanceof Error?e.message:String(e)}`)}if(i&&n<3)await Gm(500*(n+1));else throw Error(`Couldn't reach the Solana network (${e}). ${r.join(`; `)}`)}}async function ch(e,t,n,r=3,i=!1){for(let a=0;;a++){i&&e!==H?ih(t):await rh(e,[t]);let o=await oh(e,{jsonrpc:`2.0`,id:1,method:t,params:n});if(o.status===429){if(eh(e,t),a<r){await Gm(400*(a+1));continue}throw new qm(`HTTP 429`)}if(!o.ok)throw Error(`HTTP ${o.status}`);let s=await o.json();if(s.error){if(s.error.code===-32005||s.error.code===429){if(eh(e,t),a<r){await Gm(400*(a+1));continue}throw new qm(s.error.message)}throw new Km(s.error.message)}return s.result}}async function lh(e,t,n=!1){try{n&&e!==H?t.forEach(e=>ih(e.method)):await rh(e,t.map(e=>e.method));let r=await oh(e,t.map((e,t)=>({jsonrpc:`2.0`,id:t,...e})));if(r.status===429){for(let n of t)eh(e,n.method);throw new qm(`HTTP 429`)}if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.json();if(!Array.isArray(i))throw Error(`not a batch`);let a=t.map((e,t)=>i.find(e=>e.id===t)),o=t.filter((e,t)=>a[t]?.error?.code===-32005||a[t]?.error?.code===429);if(o.length){for(let t of o)eh(e,t.method);throw new qm(a.find(e=>e?.error).error.message)}if(a.some(e=>!e||e.error))throw Error(a.find(e=>e?.error)?.error?.message??`missing answer`);return a.map(e=>e.result)}catch(r){if(r instanceof qm)throw r;return await Promise.all(t.map(t=>ch(e,t.method,t.params,3,n)))}}async function uh(e){return(await mh(e)).name}var dh=new Map;function fh(e){let t=dh.get(e);return t||(t=ch(H,`getAsset`,{id:e}),dh.set(e,t),t.catch(()=>dh.delete(e))),t}var ph=e=>e.content?.files?.map(e=>e.cdn_uri).find(e=>e?.startsWith(`https://cdn.helius-rpc.com/`));async function mh(e){if(!H)return{name:null};try{let t=await fh(e),n=t.content?.metadata;return{name:n?.name?`${n.name} (${n.symbol||`?`})`:null,logo:ph(t)}}catch{return{name:null}}}async function hh(e){if(!H)return{name:null,symbol:null};try{let t=await fh(e);return{name:t.content?.metadata?.name||null,symbol:t.content?.metadata?.symbol||t.token_info?.symbol||null,decimals:t.token_info?.decimals,logo:ph(t)}}catch{return{name:null,symbol:null}}}async function gh(e){return(await sh(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}])).value.map(e=>e?.lamports??0)}function _h(e){let t=[];for(;;){let n=e&127;if(e>>=7,e===0)return t.push(n),t;t.push(n|128)}}function vh(e,t){let n=0;for(let r=0;r<3;r++){let i=e[t+r];if(n|=(i&127)<<7*r,!(i&128))return[n,r+1]}throw Error(`Bad transaction length prefix`)}function yh(e,t){let n=e.slice(),[r,i]=vh(n,0),a=n.subarray(i+64*r),o=a[0]&128?1:0,s=a[o];o+=3;let[,c]=vh(a,o);o+=c;let l=Lu.decode(t.address),u=-1;for(let e=0;e<s;e++)a.subarray(o+32*e,o+32*e+32).every((e,t)=>e===l[t])&&(u=e);if(u<0)throw Error(`This trade isn't addressed to your wallet, so it was not signed.`);return n.set(Fm.sign(a,t.secret),i+64*u),n}function bh(e,t,n){let r=new Map([[e.address,{signer:!0,writable:!0}]]),i=(e,t,n)=>{let i=r.get(e)??{signer:!1,writable:!1};r.set(e,{signer:i.signer||t,writable:i.writable||n})};for(let e of t)e.keys.forEach(e=>i(e.pubkey,e.isSigner,e.isWritable)),i(e.programId,!1,!1);let a=([t,n])=>t===e.address?0:n.signer?n.writable?1:2:n.writable?3:4,o=[...r.entries()].sort((e,t)=>a(e)-a(t));if(o.some(([t,n])=>n.signer&&t!==e.address))throw Error(`Only the paying wallet can sign here.`);let s=new Map(o.map(([e],t)=>[e,t])),c=o.filter(([,e])=>!e.signer&&!e.writable).length,l=Uint8Array.from([1,0,c,..._h(o.length),...o.flatMap(([e])=>[...Lu.decode(e)]),...Lu.decode(n),..._h(t.length),...t.flatMap(e=>[s.get(e.programId),..._h(e.keys.length),...e.keys.map(e=>s.get(e.pubkey)),..._h(e.data.length),...e.data])]);return yh(Uint8Array.from([..._h(1),...new Uint8Array(64),...l]),e)}var xh=`11111111111111111111111111111111`;function Sh(e,t,n){let r=new Uint8Array(12),i=new DataView(r.buffer);return i.setUint32(0,2,!0),i.setBigUint64(4,BigInt(n),!0),{programId:xh,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],data:r}}function Ch(e,t,n){return{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:Uint8Array.from([9])}}var wh=`ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL`;function Th(e){return Eh(Lu.decode(e))}function Eh(e){try{return Fm.Point.fromBytes(e),!0}catch{return!1}}var Dh=new Map;function Oh(e,t,n){let r=`${e}${t}${n}`,i=Dh.get(r);return i||(i=kh([Lu.decode(e),Lu.decode(n),Lu.decode(t)],wh),Dh.size>5e3&&Dh.clear(),Dh.set(r,i)),i}function kh(e,t){let n=Lu.decode(t),r=new TextEncoder().encode(`ProgramDerivedAddress`);for(let t=255;t>=0;t--){let i=[...e,Uint8Array.of(t),n,r],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;let s=Nf(a);if(!Eh(s))return Lu.encode(s)}throw Error(`Couldn't work out the coin account address.`)}function Ah(e,t,n,r,i){return{programId:wh,keys:[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:xh,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1}],data:Uint8Array.of(1)}}function jh(e,t,n,r){let i=new Uint8Array(10),a=new DataView(i.buffer);return i[0]=12,a.setBigUint64(1,r,!0),i[9]=e.decimals,{programId:e.program,keys:[{pubkey:e.address,isSigner:!1,isWritable:!0},{pubkey:e.mint,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],data:i}}async function Mh(e){let t=await sh(`getAccountInfo`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]);return t.value?{owner:t.value.owner,lamports:t.value.lamports}:null}var Nh=xh;async function Ph(e){return(await sh(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`}])).value.map(e=>e?{owner:e.owner,lamports:e.lamports,data:e.data?Ou.decode(e.data[0]):new Uint8Array}:null)}async function Fh(e,t){let{err:n,logs:r,accounts:i}=(await sh(`simulateTransaction`,[Ou.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:t}}])).value;return{err:n,logs:r??[],accounts:(i??t.map(()=>null)).map(e=>e?{owner:e.owner,lamports:e.lamports,data:Ou.decode(e.data[0])}:null)}}function Ih(e){return!e||e.data.length<72?0n:new DataView(e.data.buffer,e.data.byteOffset).getBigUint64(64,!0)}var Lh=`ComputeBudget111111111111111111111111111111`;function Rh(e,t){let n=new Uint8Array(5);n[0]=2,new DataView(n.buffer).setUint32(1,e,!0);let r=new Uint8Array(9);return r[0]=3,new DataView(r.buffer).setBigUint64(1,BigInt(t),!0),[{programId:Lh,keys:[],data:n},{programId:Lh,keys:[],data:r}]}function zh(e,t,n,r=Um){return Ch({address:e,program:r},t,n)}function Bh(e,t,n,r){return Vh(e,[{to:t,lamports:n}],r)}function Vh(e,t,n){return bh(e,t.map(({to:t,lamports:n})=>Sh(e.address,t,n)),n)}async function Hh(e,t){let n=t?[{mint:t}]:[{programId:Um},{programId:Wm}];return(await Promise.all(n.map(t=>sh(`getTokenAccountsByOwner`,[e,t,{encoding:`jsonParsed`,commitment:`confirmed`}])))).flatMap(e=>e.value.map(({pubkey:e,account:t})=>{let n=t.data.parsed.info;return{address:e,program:t.owner,mint:n.mint,raw:BigInt(n.tokenAmount.amount),decimals:n.tokenAmount.decimals,lamports:t.lamports}}))}var Uh=null;function Wh(e=2e4){if(Uh&&Date.now()-Uh.at<e)return Uh.value;let t=sh(`getLatestBlockhash`,[{commitment:`confirmed`}]).then(e=>e.value.blockhash),n={at:Date.now(),value:t};return Uh=n,t.catch(()=>Uh===n&&(Uh=null)),t}var Gh=()=>void Wh(8e3).catch(()=>{}),Kh=/custom program error: 0x177[234]\b/,qh=class extends Error{slippage;constructor(e,t){super(e),this.slippage=t}};async function Jh(e){let t=[Ou.encode(e),{encoding:`base64`,preflightCommitment:`confirmed`}],n=H?Xm.heliusSend.room()>0?[H,Lm]:[Lm]:Im,r=e=>new Promise((n,r)=>{let i=e.length,a=null,o=null;for(let s of e)ch(s,`sendTransaction`,t,1).then(n,e=>{e instanceof Km?a??=e:o??=e,--i===0&&r(a??o)})});try{try{return await r(n)}catch(e){if(e instanceof Km||!H||n.includes(H))throw e;return await r([H])}}catch(e){throw e instanceof Km?Kh.test(e.message)?new qh(`The price moved too far before the trade went through, so it was stopped. Nothing was spent.`,!0):new qh(`The network turned the trade down before it ran, so nothing was spent (${e.message}).`,!1):Error(`Couldn't reach the Solana network to send it (${e instanceof Error?e.message:String(e)}).`)}}var Yh=new Map,Xh=!1;function Zh(e,t=45e3){return new Promise(n=>{let r=Yh.get(e);Yh.set(e,{end:Date.now()+t,done:r?e=>{r.done(e),n(e)}:n}),Xh||Qh()})}async function Qh(){Xh=!0;try{for(await Gm(300);Yh.size;){let e=Date.now(),t=[...Yh.keys()].slice(0,200);try{(await sh(`getSignatureStatuses`,[t])).value.forEach((e,n)=>{let r=e?.err?`failed`:e&&(e.confirmationStatus===`confirmed`||e.confirmationStatus===`finalized`)?`confirmed`:null;r&&(Yh.get(t[n])?.done(r),Yh.delete(t[n]))})}catch{}for(let[e,t]of Yh)Date.now()>t.end&&(t.done(`timeout`),Yh.delete(e));Yh.size&&await Gm(Math.max(0,300-(Date.now()-e)))}}finally{Xh=!1}}function $h(e){return`https://solscan.io/account/${e}`}function eg(e){return`https://solscan.io/tx/${e}`}var tg=`So11111111111111111111111111111111111111112`,ng=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),rg=new Map;function ig(e,t){let n=`${e}:${t??``}`,r=rg.get(n);if(r&&Date.now()-r.at<6e4)return r.value.then(e=>e?.clone()??null);let i=(async()=>{for(let n=0;;n++){await Xm.history.take();let r=await fetch(zm(e,t),{signal:AbortSignal.timeout(15e3)});if(r.status!==429||n>=3)return r;await Gm(700*(n+1))}})(),a={at:Date.now(),value:i};return rg.set(n,a),i.then(e=>(!e||!e.ok)&&rg.get(n)===a&&rg.delete(n),()=>rg.get(n)===a&&rg.delete(n)),i.then(e=>e?.clone()??null)}async function ag(e,t,n,r=10){if(!zm)return null;let i=0,a=0,o=0,s;for(let c=0;c<r;c++){let r;try{let t=await ig(e,s);if(!t?.ok)return c?{lamports:i,usd:a,coins:o}:null;r=await t.json()}catch{return c?{lamports:i,usd:a,coins:o}:null}for(let n of r){if(n.transactionError)continue;let r=new Set;for(let t of n.tokenTransfers??[])t.toUserAccount===e&&t.toTokenAccount&&r.add(t.toTokenAccount),t.fromUserAccount===e&&t.fromTokenAccount&&r.add(t.fromTokenAccount);let s=0;for(let t of n.nativeTransfers??[])r.has(t.toUserAccount)||r.has(t.fromUserAccount)||(t.fromUserAccount===e&&(s-=t.amount),t.toUserAccount===e&&(s+=t.amount));let c=0,l=new Map;for(let r of n.tokenTransfers??[]){let n=+(r.toUserAccount===e)-(r.fromUserAccount===e);n&&(r.mint===tg?s+=n*Math.round(r.tokenAmount*1e9):ng.has(r.mint)&&r.mint!==t?c+=n*r.tokenAmount:l.set(r.mint,(l.get(r.mint)??0)+n*r.tokenAmount))}let u=l.get(t)??0;if(u<=0||[...l].some(([e,n])=>e!==t&&Math.abs(n)>1e-6))continue;let d=s<0?-s:0,f=c<0?-c:0;d<5e5&&f<.05||(i+=d,a+=f,o+=u)}if(o>=n*.999||r.length<100)break;s=r[r.length-1].signature}return{lamports:i,usd:a,coins:o}}function og(e,t){if(e.transactionError)return null;let n=new Set;for(let r of e.tokenTransfers??[])r.toUserAccount===t&&r.toTokenAccount&&n.add(r.toTokenAccount),r.fromUserAccount===t&&r.fromTokenAccount&&n.add(r.fromTokenAccount);let r=0;for(let i of e.nativeTransfers??[])n.has(i.toUserAccount)||n.has(i.fromUserAccount)||(i.fromUserAccount===t&&(r-=i.amount),i.toUserAccount===t&&(r+=i.amount));let i=0,a=new Map;for(let n of e.tokenTransfers??[]){let e=+(n.toUserAccount===t)-(n.fromUserAccount===t);e&&(n.mint===tg?r+=e*Math.round(n.tokenAmount*1e9):ng.has(n.mint)?i+=e*n.tokenAmount:a.set(n.mint,(a.get(n.mint)??0)+e*n.tokenAmount))}let o=[...a].filter(([,e])=>Math.abs(e)>1e-6);if(o.length!==1)return null;let[s,c]=o[0],l=c>0?1:-1;if(l===-1&&r<=0&&i<=0){let n=e.accountData?.find(e=>e.account===t)?.nativeBalanceChange??0;n>0&&(r=n)}let u=l===1?-r:r,d=l===1?-i:i;return u<5e5&&d<.05?null:{sig:e.signature,at:e.timestamp??0,mint:s,side:l,coins:Math.abs(c),lamports:Math.max(0,u),usd:Math.max(0,d)}}async function sg(e,t,n=10){if(!zm)return null;let r=[],i,a;for(let o=0;o<n;o++){let n;try{let t=await ig(e,a);if(!t?.ok)return o?{trades:r,top:i,reachedStop:!1}:null;n=await t.json()}catch{return o?{trades:r,top:i,reachedStop:!1}:null}o===0&&(i=n[0]?.signature??t);for(let a of n){if(a.signature===t)return{trades:r,top:i,reachedStop:!0};let n=og(a,e);n&&r.push(n)}if(n.length<100)return{trades:r,top:i,reachedStop:!0};a=n[n.length-1].signature}return{trades:r,top:i,reachedStop:!1}}async function cg(e){let t=e=>[e,{limit:1,commitment:`confirmed`}],n=e.map(()=>void 0),r=async r=>{for(let i of H?[H,Lm]:[Lm])try{n[r]=(await ch(i,`getSignaturesForAddress`,t(e[r])))[0]?.signature??null;return}catch{}},i=[];for(let t=0;t<e.length;t+=30)i.push(t);return await Promise.all(i.map(async i=>{let a=e.slice(i,i+30),o=()=>Promise.all(a.map((e,t)=>n[i+t]===void 0?r(i+t):null));if(a.length<3&&H)return o();let s=Zm(`getSignaturesForAddress`);if(th(Lm,`getSignaturesForAddress`)||s.room()<a.length||Xm.publicAll.room()<a.length)return o();s.takeNow(a.length),Xm.publicAll.takeNow(a.length);try{let e=await oh(Lm,a.map((e,n)=>({jsonrpc:`2.0`,id:n,method:`getSignaturesForAddress`,params:t(e)}))),r=e.ok?await e.json():[];(e.status===429||Array.isArray(r)&&r.some(e=>e.error?.code===-32005||e.error?.code===429))&&eh(Lm,`getSignaturesForAddress`);for(let e of Array.isArray(r)?r:[])e.result&&(n[i+e.id]=e.result[0]?.signature??null)}catch{}return o()})),n}async function lg(e){let t=[];for(let n=0;n<e.length;n+=100){let r=await sh(`getMultipleAccounts`,[e.slice(n,n+100),{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:64,length:8}}]);for(let e of r.value){let n=e?Ou.decode(e.data[0]):null;t.push(n&&n.length===8?new DataView(n.buffer,n.byteOffset).getBigUint64(0,!0):null)}}return t}async function ug(e,t,n){let r=n?[n]:[Um,Wm],i=e.flatMap(e=>r.map(n=>Oh(e,t,n))),a=[t,...e,...i],o=[];for(let e=0;e<a.length;e+=100)o.push(a.slice(e,e+100));let s=(await Promise.all(o.map(e=>sh(`getMultipleAccounts`,[e,{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:44,length:28}}])))).flatMap(e=>e.value),c=s[0],l=c?Ou.decode(c.data[0]):null,u=!!c&&(c.owner===`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`||c.owner===`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)&&!!l?.length,d=u?r.indexOf(c.owner):-1,f=t=>{if(d<0)return null;let n=s[1+e.length+t*r.length+d];return n&&n.owner===c.owner?n:null};return{decimals:u?l[0]:void 0,program:u?c.owner:void 0,lamports:e.map((e,t)=>s[1+t]?.lamports??0),raw:e.map((e,t)=>{let n=f(t),r=n?Ou.decode(n.data[0]):null;return r&&r.length>=28?new DataView(r.buffer,r.byteOffset).getBigUint64(20,!0):0n}),deposit:e.map((e,t)=>f(t)?.lamports??0),accounts:e.map((e,t)=>f(t)?i[t*r.length+d]:null)}}async function dg(e){let t=new Map;if(!H||!e.length)return t;for(let n=0;n<e.length;n+=1e3)try{let r=await ch(H,`getAssetBatch`,{ids:e.slice(n,n+1e3)});for(let e of r)e&&t.set(e.id,{name:e.content?.metadata?.name||null,symbol:e.content?.metadata?.symbol||e.token_info?.symbol||null,logo:ph(e),decimals:e.token_info?.decimals,price:e.token_info?.price_info?.price_per_token||void 0})}catch{}return t}function fg(e){return H?e.some(e=>th(Lm,e))?[H,Lm]:[Lm,H]:[Lm]}var pg=[`getTokenAccountsByOwner`,`getMultipleAccounts`];async function mg(e,t=fg(pg)){let n=null;for(let r of t)try{let[t,n,i]=await lh(r,[{method:`getTokenAccountsByOwner`,params:[e,{programId:Um},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getTokenAccountsByOwner`,params:[e,{programId:Wm},{encoding:`jsonParsed`,commitment:`confirmed`}]},{method:`getMultipleAccounts`,params:[[e],{encoding:`base64`,commitment:`confirmed`,dataSlice:{offset:0,length:0}}]}],!0),a=[...t.value,...n.value].map(({pubkey:e,account:t})=>({address:e,mint:t.data.parsed.info.mint,raw:BigInt(t.data.parsed.info.tokenAmount.amount)})).filter(e=>e.raw>0n).slice(0,60);return{node:r,lamports:i.value[0]?.lamports??0,accounts:a}}catch(e){n=e}throw n instanceof Error?n:Error(String(n))}async function hg(e,t,n){let r=await(n??mg(t)).catch(()=>mg(t)),i=null,a=[r.node,...fg([`simulateTransaction`]).filter(e=>e!==r.node)];a.length>1&&th(a[0],`simulateTransaction`)&&a.push(a.shift());for(let n of a)try{n!==r.node&&(r=await mg(t,[n]));let i=await ch(n,`simulateTransaction`,[Ou.encode(e),{encoding:`base64`,sigVerify:!1,replaceRecentBlockhash:!0,commitment:`confirmed`,accounts:{encoding:`base64`,addresses:[t,...r.accounts.map(e=>e.address)]}}],n===H?2:0,!0);if(i.value.err)return{failed:!0,solOut:0,coinsOut:new Map,takenOver:!1};let a=i.value.accounts??[],o=a[0],s=!!o&&o.owner!==xh,c=new Map;return r.accounts.forEach((e,n)=>{let r=a[n+1],i=r?Ou.decode(r.data[0]):new Uint8Array;i.length>=64&&Lu.encode(i.slice(32,64))!==t&&(s=!0);let o=i.length>=72?new DataView(i.buffer,i.byteOffset).getBigUint64(64,!0):0n;o<e.raw&&c.set(e.mint,(c.get(e.mint)??0n)+(e.raw-o))}),{failed:!1,solOut:r.lamports-(o?.lamports??0),coinsOut:c,takenOver:s}}catch(e){i=e}throw i instanceof Error?i:Error(String(i))}var gg=`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`,_g=`pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA`,vg=`So11111111111111111111111111111111111111112`,yg=Nh,bg=`ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw`,xg=`5PHirr8joyTMp9JMm6nW7hNDVyEYdkzDqazxPD7RaTjx`,Sg=`4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf`,Cg=`8Wf5TiAheLUqBrKXeYg2JtAFFMWtKdG2BSFgqUcPVwTt`,wg=`Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1`,Tg=`5YxQFdt3Tr9zJLvkFccqXVUwhdTWJQc1fFg2YPbxvxeD`,Eg=Uint8Array.from([43,100,73,19,233,246,111,148]),Dg=e=>new TextEncoder().encode(e),Og=e=>Lu.decode(e),kg=kh([Dg(`__event_authority`)],_g);function Ag(e){return kh([Dg(`bonding-curve`),Og(e)],gg)}function jg(e,t){let n=kh([Dg(`pool-authority`),Og(e)],gg);return kh([Dg(`pool`),Uint8Array.of(0,0),Og(n),Og(e),Og(t)],_g)}async function Mg(e){let[t,n]=await Ph([Ag(e),e]);if(!t||t.owner!==gg||t.data.length<115||!n)return null;let r=Lu.encode(t.data.slice(83,115));if(r===yg||r===vg)return null;let i=t.data[48]!==0,a=t.data[81]!==0,o=t.data[82]!==0,[s,c]=await Ph([r,jg(e,r)]);if(!s)throw Error(`This coin's price coin couldn't be found.`);let l=i?c?.owner===_g?`pool`:null:`curve`;if(!l)throw Error(`This coin is between pump.fun and its pool right now, so it can't be traded for a moment. Try again shortly.`);if(l===`curve`&&a||l===`pool`&&c.data.length>=244&&c.data[243]!==0)throw Error(`pump.fun doesn't allow this kind of trade on "mayhem mode" coins.`);let u=l===`pool`&&c.data.length>=245&&c.data[244]!==0;if(l===`curve`&&o||u)throw Error(`pump.fun doesn't allow this kind of trade on cashback coins.`);let d=e=>{if(e!==`TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`&&e!==`TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`)throw Error(`This coin uses a token program the app doesn't know.`);return e};return{mint:e,mintProgram:d(n.owner),quote:r,quoteProgram:d(s.owner),venue:l}}function Ng(e,t,n,r,i){let a={mint:t.mint,program:t.mintProgram},o={mint:t.quote,program:t.quoteProgram},[s,c]=n===`buy`?[o,a]:[a,o],l=(e,t)=>Oh(e,t.mint,t.program),u=t.venue===`curve`?Ag(t.mint):jg(t.mint,t.quote),d=e=>({pubkey:e,isSigner:!1,isWritable:!0}),f=e=>({pubkey:e,isSigner:!1,isWritable:!1}),p=new Uint8Array(24);p.set(Eg,0);let m=new DataView(p.buffer);m.setBigUint64(8,r,!0),m.setBigUint64(16,i,!0);let h={programId:_g,keys:[{pubkey:e,isSigner:!0,isWritable:!0},d(l(e,s)),d(l(e,c)),f(bg),f(xg),d(kh([Dg(`user_volume_accumulator`),Og(e)],_g)),d(l(Tg,o)),f(Um),f(Wm),f(Nh),f(kg),f(_g),f(gg),f(Sg),f(Cg),f(wg),f(t.mint),f(t.quote),d(u),d(l(u,a)),d(l(u,o))],data:p};return[...Rh(3e5,2e5),Ah(e,l(e,c),e,c.mint,c.program),Ah(e,l(Tg,o),Tg,o.mint,o.program),h]}function Pg(e,t,n){return n===`coin`?Oh(e,t.mint,t.mintProgram):Oh(e,t.quote,t.quoteProgram)}var Fg=`walletCoins`,Ig=1,Lg=null,Rg=()=>({v:Ig,wallets:{},coins:{}}),zg=()=>Lg??=P.get(Fg).then(e=>{let t=JSON.parse(e||`null`);return t&&t.v===Ig?t:Rg()}).catch(Rg),Bg;function Vg(){clearTimeout(Bg),Bg=setTimeout(async()=>{let e=await zg();P.set(Fg,JSON.stringify(e)).catch(()=>{})},300)}var Hg=([e,t,n,r,i,a])=>({address:e,mint:t,program:n,raw:BigInt(r),decimals:i,lamports:a}),Ug=e=>[e.address,e.mint,e.program,e.raw.toString(),e.decimals,e.lamports],Wg=(e,t)=>t.map(t=>({address:t,lamports:e.wallets[t].lamports,accounts:e.wallets[t].accounts.map(Hg)}));async function Gg(e){let t=await zg();return e.every(e=>t.wallets[e])?Wg(t,e):null}async function Kg(e){Yg=null;let t=await zg();for(let n of e)t.wallets[n]&&(t.wallets[n].stale=!0);Vg()}async function qg(e,t,n){if(!t.length)return;let r=t.map(e=>e.address).filter(e=>!n.has(e)),[i,a]=await Promise.all([Promise.all(t.map(e=>Hh(e.address))),r.length?cg(r):Promise.resolve([])]),o=new Map(n);r.forEach((e,t)=>o.set(e,a[t])),t.forEach(({address:t,lamports:n},r)=>{let a=e.wallets[t],s=o.get(t);e.wallets[t]={at:Date.now(),lamports:n,sig:s===void 0?a?.sig:s,sigAt:s===void 0?a?.sigAt:Date.now(),accounts:i[r].map(Ug)}})}async function Jg(e,t){let n=new Map;for(let r of t)for(let t of e.wallets[r].accounts)BigInt(t[3])>0n&&n.set(t[1],t[4]);let r=[...n.keys()].filter(t=>!e.coins[t]);if(!r.length)return;let i=await dg(r);for(let t of r){let r=i.get(t);r&&(e.coins[t]={name:r.name,symbol:r.symbol,logo:r.logo,decimals:r.decimals??n.get(t),price:r.price})}}var Yg=null;function Xg(e){let t=e.join(`,`);if(Yg&&Yg.key===t&&Date.now()-Yg.at<4e3)return Yg.value;let n=Zg(e),r={key:t,at:Date.now(),value:n};return Yg=r,n.then(()=>Yg===r&&(r.at=Date.now()),()=>Yg===r&&(Yg=null)),n}async function Zg(e){let t=await zg(),n=e=>t.wallets[e]&&!t.wallets[e].stale,r=e.flatMap(e=>n(e)?t.wallets[e].accounts.map(t=>({owner:e,a:t})):[]),i=e.filter(e=>!t.wallets[e]),[a,o,s]=await Promise.all([gh(e),r.length?lg(r.map(e=>e.a[0])):Promise.resolve([]),i.length?cg(i):Promise.resolve([])]),c=new Map(i.map((e,t)=>[e,s[t]])),l=new Set;return e.forEach((e,n)=>{let r=t.wallets[e];(!r||r.stale||r.lamports!==a[n])&&(!r&&c.get(e)===null&&!a[n]?t.wallets[e]={at:Date.now(),lamports:0,sig:null,sigAt:Date.now(),accounts:[]}:l.add(e))}),r.forEach(({owner:e,a:t},n)=>{let r=o[n];r===null?l.add(e):t[3]=r.toString()}),await qg(t,[...l].map(t=>({address:t,lamports:a[e.indexOf(t)]})),c),e.forEach((e,n)=>{t.wallets[e].lamports=a[n],t.wallets[e].at=Date.now()}),await Jg(t,e),Vg(),Wg(t,e)}async function Qg(e,t=!1){let n=await zg(),r=e.filter(e=>n.wallets[e]&&!n.wallets[e].stale&&(t||Date.now()-(n.wallets[e].sigAt??0)>12e4));if(!r.length)return null;let i=await cg(r),a=new Map(r.map((e,t)=>[e,i[t]])),o=r.filter(e=>a.get(e)!==void 0&&a.get(e)!==n.wallets[e].sig);for(let e of r)a.get(e)!==void 0&&(n.wallets[e].sigAt=Date.now());return o.length?(await qg(n,o.map(e=>({address:e,lamports:n.wallets[e].lamports})),a),await Jg(n,e),Vg(),Wg(n,e)):(Vg(),null)}async function $g(e){let t=await zg(),n=new Map;for(let t of e.accounts){if(t.raw===0n)continue;let e=n.get(t.mint)??{raw:0n,decimals:t.decimals};e.raw+=t.raw,n.set(t.mint,e)}return[...n].map(([e,{raw:n,decimals:r}])=>{let i=t.coins[e],a=Number(n)/10**r;return{mint:e,name:i?.name??null,symbol:i?.symbol??null,amount:a,usd:i?.price?i.price*a:null,decimals:r,logo:i?.logo}})}async function e_(e){let t=await zg(),n=!1;for(let[r,i]of e)t.coins[r]&&i>0&&t.coins[r].price!==i&&(t.coins[r].price=i,n=!0);n&&Vg()}async function t_(e){return(await zg()).coins[e]??null}async function n_(e){let t=await zg();for(let n of Object.values(t.wallets))for(let t of n.accounts)if(t[1]===e)return t[2]}var r_=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(Xd(e),Yd(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),tf(r)}update(e){return $d(this),this.iHash.update(e),this}digestInto(e){$d(this),ef(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},i_=(()=>{let e=((e,t,n)=>new r_(e,t).update(n).digest());return e.create=(e,t)=>new r_(e,t),e})();function a_(e,t,n,r){Xd(e);let{c:i,dkLen:a,asyncTick:o}=pf({dkLen:32,asyncTick:10},r);if(Jd(i,`c`),Jd(a,`dkLen`),Jd(o,`asyncTick`),i<1)throw Error(`"c" (iterations) must be >= 1`);if(a<1)throw Error(`"dkLen" must be >= 1`);if(a>(2**32-1)*e.outputLen)throw Error(`derived key too long`);let s=df(t,`password`);try{let t=df(n,`salt`);try{let n=new Uint8Array(a),{iHash:r,oHash:c,outputLen:l}=i_.create(e,s);return{c:i,dkLen:a,asyncTick:o,DK:n,outputLen:l,eng:o_(r,c,t,new Uint8Array(l))}}finally{typeof n==`string`&&tf(t)}}finally{typeof t==`string`&&tf(s)}}function o_(e,t,n,r){let i=new Uint8Array(4),a=nf(i),o=e._cloneInto().update(n),s=t._cloneInto(),c=e._cloneInto,l=t._cloneInto;return{u1:(e,n)=>{a.setInt32(0,e,!1),o._cloneInto(s).update(i).digestInto(r),t._cloneInto(s).update(r).digestInto(r),n.set(r.subarray(0,n.length))},rounds:(n,i)=>{for(let a=1;a<n;a++){c.call(e,s).update(r).digestInto(r),l.call(t,s).update(r).digestInto(r);for(let e=0;e<i.length;e++)i[e]^=r[e]}},output:n=>(e.destroy(),t.destroy(),o.destroy(),s.destroy(),tf(r),n)}}function s_(e,t,n,r){let{c:i,dkLen:a,DK:o,outputLen:s,eng:c}=a_(e,t,n,r);for(let e=1,t=0;t<a;e++,t+=s){let n=o.subarray(t,t+s);c.u1(e,n),c.rounds(i,n)}return c.output(o)}var c_=e=>e[0]===`あいこくしん`;function l_(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;let n=e.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function u_(e){if(typeof e!=`string`)throw TypeError(`invalid mnemonic type: `+typeof e);if(!l_(e))throw TypeError(`expected well-formed Unicode string`);return e.normalize(`NFKD`)}function d_(e){let t=u_(e),n=t.split(` `);if(![12,15,18,21,24].includes(n.length))throw Error(`Invalid mnemonic`);return{nfkd:t,words:n}}function f_(e){if(Yd(e),![16,20,24,28,32].includes(e.length))throw RangeError(`invalid entropy length`)}function p_(e,t=128){if(Jd(t),t%32!=0||t>256)throw RangeError(`Invalid entropy`);return y_(hf(t/8),e)}var m_=e=>{let t=8-e.length/4;return Nf(e)[0]>>t<<t};function h_(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!=`string`)throw TypeError(`Wordlist: expected array of 2048 strings`);e.forEach(e=>{if(typeof e!=`string`)throw TypeError(`wordlist: non-string element: `+e);if(!l_(e))throw TypeError(`wordlist: expected well-formed Unicode string`)})}function g_(e,t){h_(t);let n=new Uint8Array(e.length+1);n.set(e),n[e.length]=m_(e);let r=[],i=0,a=0;for(let e of n)i=i<<8|e,a+=8,a>=11&&(a-=11,r.push(t[i>>>a&2047]),i&=(1<<a)-1);return r}function __(e,t){h_(t);let n=e.length/3*4,r=new Uint8Array(n+1),i=0,a=0,o=0;for(let n of e){let e=t.indexOf(n);if(e===-1)throw Error(`Unknown word: `+n);for(i=i<<11|e,a+=11;a>=8;)a-=8,r[o++]=i>>>a&255;i&=(1<<a)-1}a>0&&(r[o]=i<<8-a);let s=r.subarray(0,n);if(r[n]!==m_(s))throw Error(`Invalid checksum`);return Uint8Array.from(s)}function v_(e,t){let{words:n}=d_(e),r=__(n,t);return f_(r),r}function y_(e,t){return f_(e),g_(e,t).join(c_(t)?`　`:` `)}function b_(e,t){try{v_(e,t)}catch{return!1}return!0}var x_=e=>{if(typeof e!=`string`)throw TypeError(`invalid passphrase type: `+typeof e);return u_(`mnemonic`+e)};function S_(e,t=``){return s_(Pf,d_(e).nfkd,x_(t),{c:2048,dkLen:64})}var C_=Object.freeze(`abandon
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
`));function w_(){return p_(C_,128)}function T_(e){return e.trim().toLowerCase().split(/\s+/).join(` `)}function E_(e){return b_(T_(e),C_)}function D_(e,t){let n=i_(Pf,new TextEncoder().encode(`ed25519 seed`),e),r=n.slice(0,32),i=n.slice(32);for(let e of[44,501,t,0]){let t=new Uint8Array(37);t.set(r,1),new DataView(t.buffer).setUint32(33,(e|2147483648)>>>0),n=i_(Pf,i,t),r=n.slice(0,32),i=n.slice(32)}return r}function O_(e,t){let n=S_(T_(e));return Array.from({length:t},(e,t)=>{let r=D_(n,t);return{index:t,address:Lu.encode(Fm.getPublicKey(r)),secret:r}})}var k_=3e5,A_=e=>btoa(String.fromCharCode(...e)),j_=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function M_(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:k_,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}function N_(e,t){return P_(T_(e),t)}async function P_(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await M_(t,n),a=new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,new TextEncoder().encode(e))),o={v:1,salt:A_(n),iv:A_(r),data:A_(a)};return JSON.stringify(o)}async function F_(e,t){let n=JSON.parse(e),r=await M_(t,j_(n.salt));try{let e=await crypto.subtle.decrypt({name:`AES-GCM`,iv:j_(n.iv)},r,j_(n.data));return new TextDecoder().decode(e)}catch{return null}}function I_(e){return Lu.encode(new Uint8Array([...e.secret,...Lu.decode(e.address)]))}function L_(e){let t=e.trim().replace(/^["']|["']$/g,``),n;try{if(t.startsWith(`[`)){let e=JSON.parse(t);if(!Array.isArray(e)||!e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return null;n=new Uint8Array(e)}else n=Lu.decode(t.replace(/\s+/g,``))}catch{return null}if(n.length!==64)return null;let r=n.slice(0,32),i=Fm.getPublicKey(r);return i.every((e,t)=>e===n[32+t])?{address:Lu.encode(i),secret:r}:null}var R_=`vault`,z_=`addresses`,B_=`imports`,V_=new Map;function H_(e){let t=V_.get(e);if(!t){let n=Dn.get(e);t=n,V_.set(e,n),n.then(t=>t.value===null&&V_.get(e)===n&&V_.delete(e),()=>V_.get(e)===n&&V_.delete(e))}return t}async function U_(e,t){V_.delete(e),await Dn.set(e,t),V_.delete(e)}async function W_(e){V_.delete(e),await Dn.remove(e),V_.delete(e)}var G_=`importList`,K_=`costBasis`,q_=20;document.head.append(Object.assign(document.createElement(`style`),{textContent:ur}));var G=new URLSearchParams(location.search),K=G.get(`jk`),J_=G.get(`rk`),Y_=`https://krypto-relay.dustin-m-shamp.workers.dev`,X_=G.get(`relay`)===Y_?Y_:void 0;X_&&Bu(X_),J_&&(X_||!G.has(`relay`))&&Bm(J_,X_),X_&&J_&&(so(X_,J_),La(X_,J_));var Z_=document.querySelector(`meta[name="app-version"]`)?.content??`?`,Q_=G.get(`v`),$_=!!Q_&&/^\d+(\.\d+)+$/.test(Q_)&&((e,t)=>{let[n,r]=[e.split(`.`).map(Number),t.split(`.`).map(Number)];for(let e=0;e<Math.max(n.length,r.length);e++)if((n[e]??0)!==(r[e]??0))return(n[e]??0)>(r[e]??0);return!1})(Q_,Z_),ev=$_&&!G.get(`r`);if(ev){let e=new URL(location.href);e.searchParams.set(`r`,String(Date.now())),location.replace(e.toString())}var tv=G.get(`buy`),nv=Math.min(100,Math.max(1,Number(G.get(`pct`))||100)),rv=G.get(`sol`)?{total:Math.round(Number(G.get(`sol`))*U),count:G.get(`n`)?Number(G.get(`n`)):null,split:G.get(`split`)?G.get(`split`).split(`-`).map(Number):null}:null,iv=G.get(`sell`),av=Math.min(100,Math.max(1,Number(G.get(`spct`))||100)),ov=G.get(`main`)===`1`,sv=G.get(`w`)?G.get(`w`).split(`-`).map(Number):null,cv=G.get(`send`),lv=G.get(`to`),uv=document.getElementById(`app`),dv=new Map;function fv(e,t,n){let r=dv.get(e);if(r&&Date.now()-r.at<r.ttl)return r.value;let i=n();return dv.set(e,{at:Date.now(),ttl:t,value:i}),i.catch(()=>dv.delete(e)),i}var pv=()=>dv.clear(),mv=e=>fv(`bal:${e.join(`,`)}`,3e4,()=>gh(e)),hv=(e=!1)=>fv(`solusd`,3e4,()=>K?md(K,e):Promise.resolve(null)),gv=e=>fv(`orders:${e}`,3e4,()=>bd(K,e,`active`)),_v=e=>fv(`coin:${e}`,864e5,()=>hh(e)),vv=(e,t=!1)=>fv(`prices:${[...e].sort().join(`,`)}`,15e3,()=>hd(K,e,t)),yv=null;function bv(){pv(),Sn(),uv.classList.add(`loading`),Ty(kv(uv.querySelector(`h1`)?.textContent??`trade`)),yv?.disconnect();let e=new Map;yv=new MutationObserver(()=>{if(!document.getElementById(`hackloader`)){yv?.disconnect();return}let t=document.getElementById(`funding`),n=t?[[`funding`,`main`,t.textContent??``]]:[];uv.querySelectorAll(`code[id^="status-"]`).forEach(e=>{let t=e.parentElement?.querySelector(`span`)?.textContent?.trim()??``;n.push([e.id,t,e.textContent??``])});for(let[t,r,i]of n){let n=i.replace(/\s*·\s*(view|check)\s*$/i,``).replace(/\s+/g,` `).trim();n&&n!==`waiting`&&e.get(t)!==n&&(e.set(t,n),Ty(`${n.startsWith(`✓`)?`[ok]`:n.startsWith(`✗`)||/fail/i.test(n)?`[!]`:`[*]`} ${r} ${n.replace(/^[✓✗]\s*/,``)}`,t))}}),yv.observe(uv,{subtree:!0,childList:!0,characterData:!0})}var xv=[],Sv=!1,Cv=!1,wv=new Set([`home`,`welcome`]);function q(e,t){if(Sv&&xv.pop(),wv.has(e))xv.length=0;else{let t=xv.findIndex(t=>t.key===e);t>=0&&(xv.length=t)}xv.push({key:e,open:t}),Sv=!0}function Tv(){F();let e=e=>{let t=e?e.open:Z;Promise.resolve().then(()=>t()).catch($)};if(!Cv&&xv.length)return e(xv.pop());xv.pop(),e(xv.pop())}function J(e,t=!1){t||(Cv=Sv,Sv=!1);let n=xv[xv.length-1],r=Cv&&n&&wv.has(n.key),i=$_?`<p class="note">Version ${Q(Q_)} is still being published. Everything here works; close and reopen in a minute to get it.</p>`:``;uv.innerHTML=`<header class="brand">${r?``:`<button type="button" id="navBack" class="navback" aria-label="Back">←</button>`}${ka()}<div class="name glitch" data-text="KRYPTO SNATCHER">KRYPTO SNATCHER</div>${Fl()}</header>`+i+e+`<p class="version">KRYPTO_SNATCHER // v${Z_}${X_?` · RELAY`:J_?` · HELIUS`:``}</p>`,uv.classList.toggle(`loading`,!!uv.querySelector(`.loader`)),document.getElementById(`navBack`)?.addEventListener(`click`,Tv),Il(),window.scrollTo(0,0)}function Y(e){return document.getElementById(e)}function X(e,t){Y(e).addEventListener(`click`,t)}function Ev(e){return`${e.slice(0,6)}…${e.slice(-6)}`}function Dv(e){An(`error`);let t=Y(`error`);t.textContent=e,t.hidden=!1}var Ov=new Set([`your`,`the`,`my`,`a`,`an`,`of`,`on`,`to`,`it`,`what`,`each`,`every`,`in`,`from`,`this`]),kv=e=>`$ ./objective --${e.toLowerCase().replace(/[^a-z0-9 ]+/g,` `).split(/\s+/).filter(e=>e&&!Ov.has(e)).join(`-`)||`run`}`;function Av(e){J(wa(e),!0),Ta(),Ty(kv(e))}async function jv(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,An(`success`),setTimeout(()=>t.textContent=n,1200)}catch{prompt(`Copy this address:`,e)}}async function Mv(){if(!wn()){J(`
      <h1>Open this on your phone</h1>
      <p>Your wallets are kept in your phone's secure storage, which only the Telegram app on iPhone or Android provides.</p>
      <p class="muted">Make sure Telegram is up to date, then open this from the bot on your phone.</p>`);return}N.ready(),N.expand(),Ll();try{N.setHeaderColor?.(`#05010f`),N.setBackgroundColor?.(`#05010f`)}catch{}let e=ay().catch(()=>null);H_(B_).catch(()=>{}),Gi(),setTimeout(Ne,1500),tv&&K&&(mh(tv).catch(()=>{}),e.then(e=>{if(!e)return;let t=e.map(e=>e.address),n=gh(t);n.catch(()=>{}),sy={at:Date.now(),key:t.join(`,`),value:n}}));let{value:t,canRestore:n}=await H_(R_);if(t){if(G.get(`view`)===`holdings`)return ux();if(G.get(`view`)===`sweep`)return Ix();if(G.get(`splitsol`)){let e=G.get(`splitsol`);return Ab(e===`all`?`all`:Math.round(Number(e)*U),Number(G.get(`n`))||null,G.get(`split`)?G.get(`split`).split(`-`).map(Number):null)}if(cv&&lv){let e=Number(G.get(`amt`)),t=Number(G.get(`sendpct`));return hS({what:cv,to:lv,only:sv,side:G.get(`side`)===`1`,amount:e>0?e:null,pct:t>0&&t<100?t:null})}return iv===`*`?sS(av,ov,sv):iv?Wx(iv,av,ov,sv):tv&&rv?Db(tv,rv):tv&&G.get(`pick`)?jb(tv,Number(G.get(`n`))||null,G.get(`side`)===`1`):tv?yb(tv,nv):Z()}Nv(n)}function Nv(e){q(`welcome`,()=>Nv(e)),J(`
    <h1>Your wallets</h1>
    <p>Your wallets are created and kept on this phone, locked with a PIN. The bot never sees your keys.</p>
    ${e?`<button id="restoreDevice" class="primary">Restore my saved wallets</button>`:``}
    <button id="create" class="${e?``:`primary`}">Create new wallets</button>
    <button id="import">I already have a 12-word phrase</button>`),e&&X(`restoreDevice`,async()=>{let{value:e}=await Dn.restore(R_);await Dn.restore(B_).catch(()=>null),V_.clear(),e?Z():Nv(!1)}),X(`create`,()=>Fv(w_())),X(`import`,Lv)}function Pv(e){return`<ol class="words">${e.split(` `).map(e=>`<li>${e}</li>`).join(``)}</ol>`}function Fv(e){q(`newPhrase`,()=>Fv(e)),J(`
    <h1>Your 12-word backup</h1>
    <p>Write these words down on paper, in order. They are the only way to get your wallets back if you lose this phone.</p>
    ${Pv(e)}
    <p class="warning">Never share these words or type them anywhere else. Anyone who has them controls your money.</p>
    <label class="check"><input type="checkbox" id="saved"> I wrote all 12 words down</label>
    <button id="next" class="primary" disabled>Continue</button>`),Y(`saved`).addEventListener(`change`,()=>Y(`next`).disabled=!Y(`saved`).checked),X(`next`,()=>Iv(e))}function Iv(e){q(`quiz`,()=>Iv(e));let t=e.split(` `),n=Math.floor(Math.random()*6),r=6+Math.floor(Math.random()*6);J(`
    <h1>Check your backup</h1>
    <p>Type these two words from your paper.</p>
    <label>Word #${n+1}<input id="wa" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <label>Word #${r+1}<input id="wb" autocapitalize="off" autocomplete="off" spellcheck="false"></label>
    <p id="error" class="error" hidden></p>
    <button id="check" class="primary">Check</button>
    <button id="back">Show the words again</button>`),X(`check`,()=>{if(Y(`wa`).value.trim().toLowerCase()!==t[n]||Y(`wb`).value.trim().toLowerCase()!==t[r])return Dv(`Those don't match. Check your paper, or go back to see the words again.`);Uv(e)}),X(`back`,()=>Fv(e))}function Lv(){q(`import`,Lv),J(`
    <h1>Enter your 12 words</h1>
    <p>Type your words in order, separated by spaces.</p>
    <textarea id="phrase" rows="4" autocapitalize="off" autocomplete="off" spellcheck="false"></textarea>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Continue</button>
    <button id="back">Back</button>`),X(`next`,()=>{let e=T_(Y(`phrase`).value);if(!E_(e))return Dv(`That isn't a valid 12-word phrase. Check for typos.`);Uv(e)}),X(`back`,()=>Mv())}var Rv=e=>`<input id="${e}" class="pinvalue" type="password" inputmode="none" maxlength="6" autocomplete="off" tabindex="-1">
   <div class="pindots" data-for="${e}">${`<i></i>`.repeat(6)}</div>`,zv=(e=`clear`)=>`<div class="keypad">${[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,e,`0`,`back`].map(e=>`<button type="button" class="key${/\d/.test(e)?``:` fn ${e}`}" data-k="${e}">${e===`back`?`⌫`:e===`clear`?`CLR`:e===`dot`?`.`:e}</button>`).join(``)}</div>`;function Bv(e){document.querySelectorAll(`.key`).forEach(t=>t.addEventListener(`click`,()=>{F(),e(t.dataset.k)}))}function Vv(e,t){let n=e[0],r=()=>e.forEach(e=>{let t=document.querySelector(`.pindots[data-for="${e}"]`);t.classList.toggle(`active`,e===n);let r=Y(e).value.length;t.querySelectorAll(`i`).forEach((e,t)=>e.classList.toggle(`on`,t<r))});e.forEach(e=>{Y(e).addEventListener(`input`,r),document.querySelector(`.pindots[data-for="${e}"]`).addEventListener(`click`,()=>(n=e,r()))}),Bv(i=>{document.querySelectorAll(`.pindots.nope`).forEach(e=>e.classList.remove(`nope`));let a=Y(n);if(i===`back`?a.value=a.value.slice(0,-1):i===`clear`?a.value=``:a.value.length<6&&(a.value+=i),Y(`error`).hidden=!0,a.value.length===6&&/\d/.test(i)){let i=e[e.indexOf(n)+1];i&&(n=i),r(),t(a.id)}else r()}),r()}function Hv(e){Y(e).value=``;let t=document.querySelector(`.pindots[data-for="${e}"]`);t.querySelectorAll(`i`).forEach(e=>e.classList.remove(`on`)),t.classList.remove(`nope`),t.offsetWidth,t.classList.add(`nope`)}function Uv(e){q(`setPin`,()=>Uv(e)),J(`
    <h1>Choose a 6-digit PIN</h1>
    <p>You'll enter this PIN to approve trades and to see your backup words.</p>
    <label>PIN</label>${Rv(`pin1`)}
    <label>Same PIN again</label>${Rv(`pin2`)}
    <p id="error" class="error" hidden></p>
    ${zv()}
    <button id="next" class="primary">Continue</button>`);let t=()=>{let t=Y(`pin1`).value;if(!/^\d{6}$/.test(t))return Dv(`The PIN must be exactly 6 digits.`);if(t!==Y(`pin2`).value)return Hv(`pin2`),Dv(`The two PINs don't match. Enter it again.`);ry(e,t)};Vv([`pin1`,`pin2`],e=>e===`pin2`&&t()),X(`next`,t)}var Wv=0,Gv=0;function Kv(e,t){/ to (buy|fund|split|send|sell)\b/.test(e)&&Gh(),J(`
    <h1>${e}</h1>
    ${Rv(`pin`)}
    <p id="error" class="error" hidden></p>
    ${zv()}
    <button id="unlock" class="primary">Unlock</button>
    <button id="cancel">Cancel</button>`),X(`cancel`,Z),Vv([`pin`],()=>Y(`unlock`).click()),X(`unlock`,async()=>{if(Date.now()<Gv)return Dv(`Too many wrong PINs. Try again in ${Math.ceil((Gv-Date.now())/1e3)} seconds.`);let e=Y(`pin`).value,{value:n}=await H_(R_);if(!n)return Mv();Y(`unlock`).disabled=!0,Y(`unlock`).textContent=`Checking…`;let r=Xv(e).catch(()=>[]),i=await F_(n,e);if(Y(`unlock`).disabled=!1,Y(`unlock`).textContent=`Unlock`,!i)return Hv(`pin`),Wv++,Wv>=5&&(Gv=Date.now()+3e4*2**(Wv-5)),Dv(`Wrong PIN.`);Wv=0,qv=await r,$v().catch(()=>{}),t(i,e)})}var qv=[],Jv=0,Yv=null;async function Xv(e){let{value:t}=await H_(B_);if(!t)return[];let n=await F_(t,e);return n?JSON.parse(n).flatMap(({name:e,key:t})=>{let n=L_(t);return n?[{name:e,...n}]:[]}):[]}async function Zv(e,t){e=e.filter((t,n)=>e.findIndex(e=>e.address===t.address)===n),await U_(B_,await P_(JSON.stringify(e.map(e=>({name:e.name,key:I_({index:0,...e})}))),t)),qv=e,await Qv(e)}async function Qv(e){let t=e.map(({name:e,address:t})=>({name:e,address:t}));try{await P.set(G_,JSON.stringify(t)),oy()}catch{let e=Yv;iy=e?Promise.resolve([...e,...t.map((t,n)=>({index:e.length+n,address:t.address,name:t.name}))]):null}}async function $v(){if(!qv.length)return;let e=JSON.parse(await P.get(G_).catch(()=>null)||`[]`);e.length===qv.length&&e.every((e,t)=>e.address===qv[t].address)||await Qv(qv)}function ey(e,t){let n=O_(e,Math.min(t,Jv||t));for(let e=n.length;e<t;e++){let t=qv[e-Jv];if(!t)throw Error(`The key for wallet #${e} is missing. Open the app again from the bot and retry.`);n.push({index:e,address:t.address,secret:t.secret})}return n}function ty(){q(`importKey`,ty),J(`
    <h1>Import a wallet</h1>
    <p>Paste the private key of a wallet from another app (in Phantom: Settings → Manage Accounts → the wallet → Show Private Key). It becomes one more side wallet here.</p>
    <textarea id="key" rows="3" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Private key"></textarea>
    <label>Name (optional)<input id="name" maxlength="20" autocomplete="off" placeholder="Phantom 1"></label>
    <p class="muted">It's locked with your PIN on this phone, like your 12 words. Your 12 words don't back it up, so keep its key in the app it came from too.</p>
    <p id="error" class="error" hidden></p>
    <button id="next" class="primary">Import</button>
    <button id="cancel">Cancel</button>`),X(`cancel`,Z),X(`next`,async()=>{let e=L_(document.getElementById(`key`).value);if(!e)return Dv(`That doesn't look like a Solana private key. Copy it again from your wallet app and paste the whole thing.`);let t=await ay()??[],n=t.find(t=>t.address===e.address);if(n)return Dv(`That wallet is already here (${n.index===0?`main`:`#${n.index}`}).`);let r=t.length-Jv;if(r>=q_)return Dv(`You can import up to ${q_} wallets.`);let i=Y(`name`).value.trim().slice(0,20)||`Imported ${r+1}`;Kv(`Enter your PIN to import it`,async(t,n)=>{Av(`Saving…`);try{await Zv([...qv,{name:i,...e}],n)}catch(e){return $(e)}An(`success`),Z()})})}function ny(e){q(`removeImport:${e.address}`,()=>ny(e)),J(`
    <h1>Remove ${Q(e.name??``)} (#${e.index})?</h1>
    <p>This only removes it from Krypto Snatcher. The wallet and its money stay where they are.</p>
    <p class="warning">If you don't have its private key anywhere else, export it first, or move its coins and SOL out. Your 12 words can't bring it back.</p>
    <button id="exportFirst">Export its key first</button>
    <button id="yes" class="danger">Remove it</button>
    <button id="no" class="primary">Keep it</button>`),X(`no`,Z),X(`exportFirst`,()=>mb(e)),X(`yes`,()=>Kv(`Enter your PIN to remove it`,async(t,n)=>{Av(`Saving…`),await Zv(qv.filter(t=>t.address!==e.address),n),Z()}))}function ry(e,t,n=5){q(`chooseCount`,()=>ry(e,t,n)),J(`
    <h1>How many side wallets?</h1>
    <p>You get one main wallet that you deposit SOL into, plus side wallets for split buys.</p>
    <input id="count" class="pinvalue" type="text" inputmode="none" tabindex="-1" value="${n}">
    <div class="total amountbox"><small>Side wallets (0 to 30)</small><div class="amount"><span class="num" id="countShow">${n}</span></div></div>
    <div class="stepper wide"><button id="minus" type="button">−</button><button id="plus" type="button">+</button></div>
    <p id="error" class="error" hidden></p>
    ${zv()}
    <button id="next" class="primary">Create wallets</button>`);let r=!0,i=e=>{Y(`count`).value=e,Y(`countShow`).textContent=e||`0`,Y(`countShow`).classList.toggle(`over`,Number(e)>30),Y(`error`).hidden=!0};Bv(e=>{let t=r?``:Y(`count`).value;r=!1,e===`back`?i(t.slice(0,-1)):e===`clear`?i(``):t.length<2&&i(String(Number(t+e)))});let a=e=>{r=!0,i(String(Math.min(30,Math.max(0,(Number(Y(`count`).value)||0)+e))))};X(`minus`,()=>a(-1)),X(`plus`,()=>a(1)),X(`next`,async()=>{let n=Number(Y(`count`).value);if(!Number.isInteger(n)||n<0||n>30)return Dv(`Pick a whole number from 0 to 30.`);Av(`Setting up your wallets…`);let r=O_(e,n+1).map(({index:e,address:t})=>({index:e,address:t}));t&&await U_(R_,await N_(e,t)),await P.set(z_,JSON.stringify(r)),oy(),!t&&qv.length&&(await P.set(G_,JSON.stringify(qv.map(({name:e,address:t})=>({name:e,address:t})))),oy()),An(`success`),Z()})}var iy=null;function ay(){if(!iy){let e=ly();iy=e,e.then(t=>!t&&iy===e&&(iy=null),()=>iy===e&&(iy=null))}return iy}var oy=()=>iy=null,sy=null;function cy(e){let t=sy;return sy=null,t&&t.key===e.join(`,`)&&Date.now()-t.at<5e3?t.value.catch(()=>gh(e)):gh(e)}async function ly(){let[e,t]=await Promise.all([P.get(z_),P.get(G_)]);if(!e)return null;let n=JSON.parse(e);Jv=n.length,Yv=n;let r=JSON.parse(t||`[]`);return[...n,...r.map((e,t)=>({index:n.length+t,address:e.address,name:e.name}))]}async function Z(){q(`home`,Z);let e=await ay();if(!e)return Kv(`Unlock your wallets`,e=>ry(e,null));let[t,...n]=e;J(`
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
    ${n.length?`<ul class="list">${n.map(e=>`<li class="openwallet" data-index="${e.index}"><span>#${e.index}</span><code>${e.name?`<b>${Q(e.name)}</b> · `:``}${Ev(e.address)}<br><small class="bal" data-index="${e.index}">…</small></code>
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
    <button id="remove" class="danger">Remove wallets from this phone</button>`),document.querySelectorAll(`.copy`).forEach(e=>e.addEventListener(`click`,()=>jv(e.dataset.address,e))),document.querySelectorAll(`.export`).forEach(t=>t.addEventListener(`click`,()=>mb(e[Number(t.dataset.index)]))),document.querySelectorAll(`.unimport`).forEach(t=>t.addEventListener(`click`,()=>ny(e[Number(t.dataset.index)]))),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,n=>{n.target.closest(`button, a, .solamt, .coinamt`)||(F(),dy(e[Number(t.dataset.index)]).catch($))})),X(`importKey`,ty),X(`holdings`,()=>ux().catch($)),X(`holdingsTop`,()=>ux().catch($)),X(`pnl`,()=>Vy().catch($)),X(`sellAll`,()=>sS(100,!1,null).catch($)),n.length&&X(`sweep`,()=>Ix().catch($)),X(`change`,()=>Kv(`Enter your PIN`,e=>ry(e,null,Jv-1))),X(`reveal`,()=>Kv(`Enter your PIN`,e=>{J(`
        <h1>Your 12 backup words</h1>
        ${Pv(e)}
        <p class="warning">Never share these words. Anyone who has them controls your money.</p>
        <button id="done" class="primary">Done</button>`),X(`done`,Z)})),X(`remove`,_S),mv(e.map(e=>e.address)).then(e=>{document.querySelectorAll(`.bal`).forEach(t=>{let n=e[Number(t.dataset.index)];fr(t,n,e=>`${pb(e)} SOL`,{ms:900,final:`${W(n)} SOL`})});let t=document.getElementById(`totalSol`),n=e.reduce((e,t)=>e+t,0);t&&fr(t,n,pb,{ms:1200,final:W(n)});let r=document.getElementById(`totalWrap`);r&&(r.dataset.sol=String(n/U),r.classList.add(`solamt`),yS&&OS())}).catch(e=>{let t=document.getElementById(`totalSol`);t&&(t.textContent=`—`),document.querySelectorAll(`.bal`).forEach(e=>e.textContent=`balance unavailable`);let n=document.createElement(`p`);n.className=`error`,n.textContent=e instanceof Error?e.message:String(e),document.querySelector(`h1`).after(n)})}var uy=null;async function dy(e){let t=`wallet:${e.address}`;q(t,()=>dy(e));let n=Symbol(`wallet`);uy=n;let r=()=>uy===n&&xv[xv.length-1]?.key===t,[i,a]=await Promise.all([dx(),vx()]),o=a.filter(t=>t.wallet===e.address).length;await fx([e],`Opening the wallet…`,r,(t,n,r)=>fy(e,t[0],n?.[0]??null,r,{costs:i,autoHere:o}))}async function fy(e,t,n,r,{costs:i,autoHere:a}){let o=e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`,s=t.lamports,c=0,l=(await $g(t)).filter(e=>!Wb(e)||!(c+=1)),u=new Map;for(let e of[...l,...n??[]]){let t=u.get(e.mint)??{coin:e,amount:0,inOrders:0,usd:null};t.amount+=e.amount,nx(e)?t.inOrders+=e.amount:e.usd!==null&&(t.usd=(t.usd??0)+e.usd),u.set(e.mint,t)}let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=fS(e),p=window.scrollY;J(`
    <h1>${o} <span id="holdSync" class="live${r===`saved`?``:` synced`}">${r===`saved`?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total"><small>SOL in this wallet</small><div class="big"><span class="solamt" data-sol="${s/U}">${W(s)}</span><span class="unit">SOL</span></div><div class="sub" id="coinsUsd"></div></div>
    <div class="card"><div class="label">Address</div><div class="address">${e.address}</div>
      <div class="row"><button id="copyAddr">Copy address</button><button id="exportKey">Export key</button></div></div>
    <h2>Coins${u.size&&K?` <span id="live" class="live">LIVE</span>`:``}</h2>
    ${u.size?`<ul class="list coins">${[...u.values()].map(e=>`<li data-mint="${e.coin.mint}">${pr(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(Ub(e.coin))}</b>${e.inOrders?`<small class="inorder">🎯 ${SS(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
              <div class="right"><span class="val">${e.usd===null?``:Hb(e.usd)}</span><small class="move"></small><small>${SS(e.coin.mint,e.amount)}</small></div></li>`).join(``)}</ul><p class="muted">Tap a coin to sell some of it from this wallet, set an auto-sell, or buy more.</p>`:`<p class="muted">No coins in this wallet.</p>`}
    ${c?`<p class="muted">${c} junk coin${c===1?``:`s`} hidden.</p>`:``}
    ${u.size?`<button id="sellAll" class="danger">Sell all coins in this wallet</button>`:``}
    ${a?`<button id="autoSells" class="gold">🎯 Auto-sells · ${a} placed</button>`:``}
    ${e.index===0?``:`<button id="solToMain">Send all its SOL to main</button>`}
    ${e.index!==0&&u.size?`<button id="allToMain">Send everything (coins + SOL) to main</button>`:``}
    <button id="solscan">View on Solscan</button>
    ${e.name?`<button id="unimport" class="danger">Remove this imported wallet</button>`:``}
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,p),mr(),X(`copyAddr`,()=>jv(e.address,Y(`copyAddr`))),X(`exportKey`,()=>mb(e)),X(`solscan`,()=>Mn($h(e.address))),X(`home`,Z),u.size&&X(`sellAll`,()=>sS(100,!1,[e.index]).catch($)),a&&X(`autoSells`,()=>kx().catch($));let m=t=>hS({what:t,to:`0`,only:[e.index],side:!1,amount:null,pct:null}).catch($);e.index!==0&&X(`solToMain`,()=>m(`sol`)),e.index!==0&&u.size&&X(`allToMain`,()=>m(`*`)),e.name&&X(`unimport`,()=>ny(e));let h=new Map;if(document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let n=u.get(t.dataset.mint);F(),hx({mint:n.coin.mint,label:Ub(n.coin),short:n.coin.symbol||n.coin.name||`?`,logo:n.coin.logo,amount:n.amount,raw:d(n),wallets:f,holders:[{address:e.address,amount:n.amount}],decimals:n.coin.decimals??0,inOrders:n.inOrders,only:[e.index],value:h.get(n.coin.mint)??null}).catch($)})),!u.size||!K)return;let g=Y(`live`),_=async e=>{let t=[...u],[n,r]=await Promise.all([hv(e).catch(()=>null),Promise.all(t.map(([t,n])=>pd(K,t,d(n),e).catch(()=>null)))]);if(!g.isConnected)return;kS(n);let a=0,o=new Map;t.forEach(([e,t],s)=>{let c=r[s],l=document.querySelector(`.coins li[data-mint="${e}"]`);if(!l||c===null)return;h.set(e,c),n&&(t.usd=c/U*n,a+=t.usd,l.querySelector(`.val`).textContent=Hb(t.usd),t.amount>0&&(CS(e,t.usd/t.amount),o.set(e,t.usd/t.amount)));let u=i[e],f=!Gb.has(e)&&Jb(u)?Yb(u,n):null,p=l.querySelector(`.right`);if(f){let e=f/Number(BigInt(u.raw))*Number(d(t)),n=(c-e)/e*100,r=Math.abs(n)>=.5;p.classList.toggle(`up`,r&&n>0),p.classList.toggle(`down`,r&&n<0),p.querySelector(`.move`).textContent=r?`${n>0?`▲`:`▼`} ${Math.abs(n)>=100?Math.round(Math.abs(n)):Math.abs(n).toFixed(1)}% since buy`:``}}),e_(o).catch(()=>{}),a>0&&(Y(`coinsUsd`).textContent=`+ ${Hb(a)} in coins`),g.classList.remove(`beat`),g.offsetWidth,g.classList.add(`beat`)};(async()=>{for(let e=0;g.isConnected;e++)document.hidden||await _(e>0),await new Promise(e=>setTimeout(e,5e3))})().catch(()=>{})}var py=1,my=1500,hy=([e,t,n,r,i,a,o])=>({sig:e,at:t,mint:n,side:r,coins:i,lamports:a,usd:o}),gy=e=>[e.sig,e.at,e.mint,e.side,e.coins,e.lamports,Math.round(e.usd*1e6)/1e6];async function _y(e){try{let t=JSON.parse(await P.get(`pnl_${e}`)||`null`);return t&&t.v===py?t:null}catch{return null}}var vy=(e,t)=>fv(`trades:${e}`,9e4,async()=>{let n=`pnl_${e}`,r=await _y(e),i=await Cy(t,8e3,void 0);if(i===null)return await P.set(n,JSON.stringify({v:py,sig:null,trades:[]})).catch(()=>{}),[];if(r&&i&&r.sig===i)return r.trades.map(hy);let a=await sg(e,r?.top,5);if(!a){if(r)return r.trades.map(hy);throw Error(`Couldn't read this wallet's history right now.`)}let o=new Set(a.trades.map(e=>e.sig)),s=[...a.trades,...r?.trades.map(hy).filter(e=>!o.has(e.sig))??[]].sort((e,t)=>t.at-e.at).slice(0,my),c={v:py,top:a.top,sig:i,trades:s.map(gy)};return await P.set(n,JSON.stringify(c)).catch(()=>{}),s}),yy=(e,t,n)=>{let r=t.get(e.at)??n??0;return e.lamports/U*r+e.usd},by=(e,t,n)=>{let r=t.get(e.at)??n;return e.lamports/U+(r?e.usd/r:0)};function xy(e,t,n,r,i,a){let o=0,s=0,c=0,l=0,u=0,d=0;for(let e of t)e.side===1?(o+=e.coins,c+=yy(e,i,a),l+=by(e,i,a)):(s+=e.coins,u+=yy(e,i,a),d+=by(e,i,a));let f=Math.min(s,o),p=Math.max(0,Math.min(n,o-f)),m=o>0?(f+p)/o:0,h=s>0?f/s:0,g=c*m,_=l*m,v=u*h,y=d*h,b=p*(r??0),x=a?b/a:0,S=v+b-g,C=y+x-_;return{mint:e,trades:t,bought:o,sold:s,held:n,paidUsd:g,paidSol:_,backUsd:v,backSol:y,nowUsd:b,nowSol:x,pnlUsd:S,pnlSol:C,pct:g>=.01&&!Gb.has(e)?S/g*100:null,avgUsd:o>0?c/o:0,avgSol:o>0?l/o:0,price:r}}function Sy(e){let t=e.filter(e=>e.pct!==null),n=t.reduce((e,t)=>e+t.pnlUsd,0),r=t.reduce((e,t)=>e+t.pnlSol,0),i=t.reduce((e,t)=>e+t.paidUsd,0);return{pnlUsd:n,pnlSol:r,paidUsd:i,pct:i>=.01?n/i*100:null}}var Cy=(e,t,n)=>Promise.race([e.catch(()=>n),new Promise(e=>setTimeout(()=>e(n),t))]),wy=0;function Ty(e,t){let n=document.querySelector(`.loader, .hackloader`);if(!n)return;let r=document.getElementById(`loadTerm`);r||(r=document.createElement(`div`),r.id=`loadTerm`,r.className=`loadterm`,n.append(r));let i=t?Array.from(r.children).find(e=>e.dataset.key===t):null;if(i){i.firstChild.textContent=e;return}clearInterval(wy),r.querySelectorAll(`.typing`).forEach(e=>{e.classList.remove(`typing`),e.firstChild.textContent=e.dataset.full}),r.querySelector(`.cur`)?.remove();let a=document.createElement(`div`);for(a.className=`tl`,t&&(a.dataset.key=t),a.append(document.createTextNode(``),Object.assign(document.createElement(`i`),{className:`cur`})),r.append(a);r.children.length>6;)r.firstElementChild.remove();if(!e.startsWith(`$`)){a.firstChild.textContent=e;return}a.dataset.full=e,a.classList.add(`typing`);let o=0;wy=window.setInterval(()=>{o+=1,a.firstChild.textContent=e.slice(0,o),o>=e.length&&(clearInterval(wy),a.classList.remove(`typing`))},28)}var Ey=null,Dy=(e,t)=>`[${`#`.repeat(Math.round(e/t*12)).padEnd(12,`.`)}]`;async function Oy(e,t){let n=0;t?.(`[*] ${e.length} wallet${e.length===1?``:`s`} to read`);let r=cg(e.map(e=>e.address));return r.catch(()=>{}),jx(e,6,async(i,a)=>{let o=await Cy(vy(i.address,r.then(e=>e[a])),45e3,null);return n++,t?.(`[+] read ${n}/${e.length} ${Dy(n,e.length)}`,`read`),o})}var ky=async(e,t)=>jy(e,await Oy(e,t),t),Ay=async e=>{let t=e.map(e=>e.address);return await Cy(Xg(t),2e4,null)??await Gg(t)};async function jy(e,t,n,r){let i=t.filter(e=>e===null).length,a=e.map((e,n)=>({w:e,trades:t[n]??[]})).filter(e=>e.trades.length);n?.(`[*] checking what's still held`);let o=r??(a.length?await Ay(e):null),s=await Promise.all(a.map(async e=>{let t=o?.find(t=>t.address===e.w.address);return t?$g(t):[]})),c=[...new Set(s.flatMap((e,t)=>e.filter(e=>a[t].trades.some(t=>t.mint===e.mint)).map(e=>e.mint)))];n?.(`[*] pulling prices + SOL history`);let l=a.flatMap(e=>e.trades.map(e=>e.at)),[u,d,f]=await Promise.all([Cy(hv(),15e3,null),K&&c.length?Cy(vv(c),15e3,new Map):Promise.resolve(new Map),Cy(Dl(l),12e3,new Map)]),p=l.length>0&&f.size<l.length/2;return n?.(`[ok] P&L ready`),u&&kS(u),{rows:a.map(({w:e,trades:t},n)=>{let r=new Map;for(let e of t)r.set(e.mint,[...r.get(e.mint)??[],e]);let i=[...r].map(([e,t])=>{let r=s[n].find(t=>t.mint===e),i=d.get(e)??(r&&r.usd!==null&&r.amount>0?r.usd/r.amount:null);return xy(e,t,r?.amount??0,i,f,u)});return i.sort((e,t)=>Math.abs(t.pnlUsd)-Math.abs(e.pnlUsd)),{wallet:e,trades:t,coins:i,total:Sy(i),held:s[n]}}),unread:i,oldPrices:p,solAt:f,solNow:u}}var My=`pct`,Ny=[`pct`,`sol`,`usd`],Py=(e,t)=>`${e>0?`+`:e<0?`−`:``}${t}`,Fy=e=>{let t=Math.abs(e);return`${e>0?`▲`:e<0?`▼`:``} ${t>=100?Math.round(t).toLocaleString(`en-US`):t.toFixed(1)}%`.trim()},Iy=e=>Py(e,`${W(Math.abs(e)*U)} SOL`),Ly=e=>Py(e,ES(Math.abs(e)));function Ry(e,t){if(e.pct===null)return{text:`no buy price`,dir:``};let n=t===`pct`?e.pct:t===`sol`?e.pnlSol:e.pnlUsd,r=Math.abs(e.pct)<.05?``:n>0?`up`:n<0?`down`:``;return{text:t===`pct`?Fy(e.pct):t===`sol`?Iy(e.pnlSol):Ly(e.pnlUsd),dir:r}}function zy(e,t=Ny){let n=t.includes(My)?My:t[0];document.querySelectorAll(`[data-pnl]`).forEach(t=>{let r=e.get(t.dataset.pnl);if(!r)return;let{text:i,dir:a}=Ry(r,n);t.textContent=i,t.classList.toggle(`up`,a===`up`),t.classList.toggle(`down`,a===`down`),t.classList.toggle(`none`,r.pct===null),t.closest(`li`)?.classList.toggle(`pnlup`,a===`up`),t.closest(`li`)?.classList.toggle(`pnldown`,a===`down`)}),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.mode===n))}var By=e=>e.index===0?`Main wallet`:`${e.name?`${Q(e.name)} · `:``}Wallet #${e.index}`;async function Vy(){q(`pnl`,Vy),My=`pct`;let e=await ay();if(!e)return Z();let[t,n]=await Promise.all([Promise.all(e.map(e=>_y(e.address))),Gg(e.map(e=>e.address))]),r=t.every(Boolean);Av(`Reading your trades on the blockchain…`),r&&Ty(`[*] using saved trades`);let i=r?await jy(e,t.map(e=>e.trades.map(hy)),Ty,n):await ky(e,Ty),a=Symbol(`pnl`);if(Hy=a,Ey=i,Uy(i,r,!1),!r)return;let o=n?Ay(e):Promise.resolve(null),s=await Oy(e,(e,t)=>{let n=t===`read`&&e.match(/\d+\/\d+/)?.[0],r=document.getElementById(`pnlSync`);n&&r&&Hy===a&&(r.textContent=`SYNCING ${n}`)}),c=await o;if(Hy!==a||!document.getElementById(`pnlTotal`))return;let l=e=>e.map(e=>e?`${e.length}:${e[0]?.sig??``}`:`?`).join(`,`),u=l(s)!==l(t.map(e=>e.trades.map(hy)))||!!n&&!!c&&ax(c)!==ax(n),d=document.getElementById(`pnlSync`);if(!u){d&&(d.textContent=`UP TO DATE`);return}let f=await jy(e,s,void 0,c);Hy===a&&document.getElementById(`pnlTotal`)&&(Ey=f,Uy(f,!1,!0))}var Hy=null;function Uy({rows:e,unread:t,oldPrices:n},r,i){let a=Sy(e.flatMap(e=>e.coins)),o=new Map([[`total`,a]]);for(let t of e)o.set(t.wallet.address,t.total);let s=e.find(e=>e.wallet.index===0),c=e.filter(e=>e.wallet.index!==0),l=e=>{let t=new Set(e.trades.map(e=>e.mint)).size;return`${e.trades.length} trade${e.trades.length===1?``:`s`} · ${t} coin${t===1?``:`s`}`};J(`
    <h1>Wallet P&amp;L <span id="pnlSync" class="live">${r?`SYNCING`:`UP TO DATE`}</span></h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${a.pct===null?``:`on ${ES(a.paidUsd)} put in · tap to switch % / $`}</div></div>
    ${s?`<div class="card openwallet pnl" data-address="${s.wallet.address}">
      <div class="label">Main wallet · <span class="pv" data-pnl="${s.wallet.address}"></span> <span class="open">OPEN ›</span></div>
      <div class="address">${s.wallet.address}</div>
      <p class="muted">${l(s)}</p>
    </div>`:``}
    ${c.length?`<h2>Side wallets (${c.length})</h2><ul class="list pnl">${c.map(e=>`<li class="openwallet" data-address="${e.wallet.address}"><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}${Ev(e.wallet.address)}<br><small>${l(e)}</small></code><b class="pv big" data-pnl="${e.wallet.address}"></b></li>`).join(``)}</ul>`:``}
    ${e.length?`<p class="muted">Only wallets that have bought or sold are listed. Tap a wallet to see its trades.</p>`:`<p class="muted">None of your wallets has bought or sold a coin yet.</p>`}
    ${e.length?`<button id="finished" class="primary">Finished trades · share cards</button><button id="allTx" class="primary">Show all transactions</button>`:``}
    ${t?`<p class="warning">${t} wallet${t===1?`'s`:`s'`} history couldn't be read right now. Try again in a minute.</p>`:``}
    ${n?`<p class="muted">SOL's past prices didn't load, so dollars use today's SOL price for now.</p>`:``}
    <button id="home">Back to my wallets</button>`,i);let u=[`pct`,`usd`];zy(o,u),X(`home`,Z),e.length&&(X(`allTx`,()=>Qy().catch($)),X(`finished`,()=>ub().catch($))),X(`pnlTotal`,()=>{a.pct!==null&&(F(),My=My===`usd`?`pct`:`usd`,zy(o,u))}),document.querySelectorAll(`.openwallet`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.find(e=>e.wallet.address===t.dataset.address);F(),$y(n.wallet).catch($)}))}var Wy=e=>e?new Date(e*1e3).toLocaleString(`en-US`,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}):``,Gy=`coinNames`;async function Ky(e,t){let n=new Map;for(let e of t)(e.name||e.symbol)&&n.set(e.mint,{label:Ub(e),short:e.symbol||e.name||`?`,logo:e.logo});let r={};try{r=JSON.parse(await P.get(Gy)||`{}`)}catch{r={}}for(let t of e)!n.has(t)&&r[t]&&n.set(t,r[t]);let i=[...new Set(e)].filter(e=>!n.has(e)),a=!1;for(let[e,t]of n)(!r[e]||r[e].label!==t.label||r[e].logo!==t.logo)&&(r[e]=t,a=!0);if(i.length){let e=await Cy(dg(i),1e4,new Map);for(let[t,i]of e){let e={label:i.name?`${i.name}${i.symbol?` (${i.symbol})`:``}`:i.symbol??Ev(t),short:i.symbol||i.name||`?`,logo:i.logo};n.set(t,e),r[t]=e}e.size&&(a=!0)}return a&&P.set(Gy,JSON.stringify(r)).catch(()=>{}),e=>n.get(e)??{label:Ev(e),short:`?`}}function qy(e,t,n){let r=new Map,i=new Map,a=e.trades.map((e,t)=>({t:e,i:t})).sort((e,t)=>e.t.at-t.t.at||t.t.side-e.t.side||t.i-e.i);for(let{t:e}of a){let a=i.get(e.mint)??{qty:0,usd:0,sol:0};if(i.set(e.mint,a),e.side===1){a.qty+=e.coins,a.usd+=yy(e,t,n),a.sol+=by(e,t,n);continue}let o=Math.min(e.coins,a.qty),s=a.qty>0?o/a.qty:0,c=e.coins>0?o/e.coins:0,l=a.usd*s,u=a.sol*s,d=yy(e,t,n)*c,f=by(e,t,n)*c;a.qty-=o,a.usd-=l,a.sol-=u;let p=o>0&&l>=.01&&!Gb.has(e.mint);r.set(e.sig,{pct:p?(d-l)/l*100:null,solPct:p&&u>0?(f-u)/u*100:null,pnlUsd:d-l,pnlSol:f-u,paidUsd:l,paidSol:u,gotUsd:d,gotSol:f})}return r}function Jy(e,t,n,r){for(let[i,a]of qy(e,t,n))r.set(i,a)}function Yy(e,t,n,r,i){return`<ul class="list trades pnl">${e.map(e=>{let a=t(e.mint),o={sol:`${W(by(e,n,r)*U)} SOL`,usd:ES(yy(e,n,r))};return`<li data-sig="${e.sig}" class="${e.side===1?`buy`:`sell`}"><span class="tag">${e.side===1?`BUY`:`SELL`}</span><div class="grow"><b>${Q(a.label)}</b><small>${i?`${i(e)} · `:``}${Wy(e.at)} · ${Vb(e.coins)} coins</small></div><div class="right">${e.side===1?`<span class="pv spent" data-sol="${o.sol}" data-usd="${o.usd}">${o.sol}</span><small>paid</small>`:`<span class="pv" data-pnl="${e.sig}"></span><small class="got" data-sol="${o.sol}" data-usd="${o.usd}">got ${o.sol}</small>`}</div></li>`}).join(``)}</ul>`}function Xy(){let e=My===`usd`;document.querySelectorAll(`.trades .spent`).forEach(t=>t.textContent=e?t.dataset.usd:t.dataset.sol),document.querySelectorAll(`.trades .got`).forEach(t=>t.textContent=`got ${e?t.dataset.usd:t.dataset.sol}`)}function Zy(e,t){let n=()=>{F(),My=Ny[(Ny.indexOf(My)+1)%Ny.length],e()};document.querySelectorAll(`.pnltabs button`).forEach(t=>t.addEventListener(`click`,()=>{F(),My=t.dataset.mode,e()})),X(`pnlTotal`,n),document.querySelectorAll(`.pnl .right`).forEach(e=>e.addEventListener(`click`,e=>{e.target.closest(`.share`)||(e.stopPropagation(),n())})),document.querySelectorAll(`.trades li[data-sig]`).forEach(e=>e.addEventListener(`click`,()=>{t&&e.classList.contains(`sell`)?(F(),t(e.dataset.sig)):Mn(eg(e.dataset.sig))}))}async function Qy(){q(`pnlall`,Qy),My=`pct`;let e=Ey;if(!e){let t=await ay();if(!t)return Z();Av(`Gathering every wallet's trades…`),e=Ey=await ky(t,Ty)}let{rows:t,solAt:n,solNow:r}=e,i=t.flatMap(e=>e.trades.map(t=>({t,w:e.wallet}))).sort((e,t)=>t.t.at-e.t.at),a=await Ky(i.map(e=>e.t.mint),t.flatMap(e=>e.held)),o=Sy(t.flatMap(e=>e.coins)),s=new Map([[`total`,o]]);for(let e of t)Jy(e,n,r,s);let c=new Map(i.map(e=>[e.t.sig,e.w])),l=e=>{let t=c.get(e.sig);return t.index===0?`Main`:t.name?`${Q(t.name)} #${t.index}`:`#${t.index}`},u=i.filter(e=>e.t.side===1).length,d=i.length-u;J(`
    <h1>All transactions</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss across your wallets</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u} buy${u===1?``:`s`} · ${d} sell${d===1?``:`s`} · ${t.length} wallet${t.length===1?``:`s`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>History (${i.length} trade${i.length===1?``:`s`})</h2>
    ${Yy(i.map(e=>e.t),a,n,r,l)}
    <p class="muted">Tap a figure to switch between %, SOL and $. Tap a sell for its share card, a buy to open it on Solscan.</p>
    <button id="back">Back to Wallet P&amp;L</button>`);let f=()=>{zy(s),Xy()};f(),Zy(f,e=>{let i=c.get(e);lb(t.find(e=>e.wallet.address===i.address),e,a,n,r,()=>Qy())}),X(`back`,()=>Vy().catch($))}async function $y(e){q(`pnl:${e.address}`,()=>$y(e)),My=`pct`;let t=Ey?.rows.some(t=>t.wallet.address===e.address)?Ey:null;t||=(Av(`Pulling this wallet's trades from the blockchain…`),await ky([e],Ty));let{solAt:n,solNow:r}=t,i=t.rows.find(t=>t.wallet.address===e.address);if(!i){J(`<h1>${By(e)}</h1><p class="muted">No trades found for this wallet.</p><button id="back">Back to Wallet P&amp;L</button>`),X(`back`,()=>Vy().catch($));return}let a=await Ky(i.coins.map(e=>e.mint),t.rows.flatMap(e=>e.held)),o=new Map(i.coins.map(e=>[e.mint,e])),s=new Map([[`total`,i.total]]);for(let e of i.coins)s.set(e.mint,e);Jy(i,n,r,s);let c=e=>[e.bought?`bought ${Vb(e.bought)}`:``,e.sold?`sold ${Vb(e.sold)}`:``,e.held?`holding ${Vb(e.held)}`:``].filter(Boolean).join(` · `),l=(e,t)=>{let n=e=>`${W(e*U)} SOL`,r=e.bought?`${n(e.avgSol*e.bought)} › ${Vb(e.bought)} ${t}`:`${Vb(e.sold)} ${t}`,i=[e.sold?`${n(e.backSol)} sold`:``,e.nowSol>0?`${n(e.nowSol)} held`:``].filter(Boolean).join(` + `);return i?`${r} › ${i}`:r},u=i.total;J(`
    <h1>${By(e)}</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss · all trades</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${u.pct===null?`No buy prices found yet`:`on ${ES(u.paidUsd)} put in`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    <h2>Coins (${i.coins.length})</h2>
    <ul class="list coins pnl">${i.coins.map(e=>{let t=a(e.mint);return`<li data-mint="${e.mint}">${pr(t.short,t.logo)}<div class="grow"><b>${Q(t.label)}</b><small class="cl" data-line="${Q(c(e))}" data-flow="${Q(l(e,t.short))}">${c(e)}</small></div>
          <div class="right"><span class="pv" data-pnl="${e.mint}"></span><small class="tv" data-paid="${e.mint}"></small>${e.pct===null?``:`<small class="share">SHARE ›</small>`}</div></li>`}).join(``)}</ul>
    <h2>History (${i.trades.length} trade${i.trades.length===1?``:`s`})</h2>
    ${Yy(i.trades,a,n,r)}
    <p class="muted">Tap a coin for its share card, a figure to switch between %, SOL and $. In the history, tap a sell for its share card, a buy to open it on Solscan. Dollars use SOL's price when each trade happened.</p>
    <button id="solscan">View wallet on Solscan</button>
    <button id="back">Back to Wallet P&amp;L</button>`),mr();let d=()=>{zy(s);let e=My===`usd`,t=My===`sol`;document.querySelectorAll(`.coins .cl`).forEach(e=>e.textContent=t?e.dataset.flow:e.dataset.line),Xy(),document.querySelectorAll(`.coins [data-paid]`).forEach(n=>{let r=o.get(n.dataset.paid);n.textContent=r.pct===null?r.bought?`all sent away`:`no buy found`:t?``:`paid ${e?ES(r.paidUsd):`${W(r.paidSol*U)} SOL`}`})};d(),Zy(d,t=>lb(i,t,a,n,r,()=>$y(e))),document.querySelectorAll(`.coins li[data-mint]`).forEach(t=>t.addEventListener(`click`,()=>{let s=o.get(t.dataset.mint),c=ob([{...i,coins:[s]}],a,n,r)[0];c&&(F(),fb(c,()=>$y(e)).catch($))})),X(`solscan`,()=>Mn($h(e.address))),X(`back`,()=>Vy().catch($))}var eb=`usd`,tb=`cardShowMe`,nb=()=>{try{return localStorage.getItem(tb)!==`0`}catch{return!0}},rb=()=>{let e=N?.initDataUnsafe?.user;return e?.first_name?{name:e.first_name,photo:e.photo_url}:void 0},ib=(e,t)=>t>0?e/t*100:0,ab=.05;function ob(e,t,n,r){let i=new Map;for(let t of e)for(let e of t.coins){let t=i.get(e.mint)??{list:[],trades:[]};t.list.push(e),t.trades.push(...e.trades),i.set(e.mint,t)}let a=Math.floor(Date.now()/1e3),o=[];for(let[e,{list:s,trades:c}]of i){let i=s.reduce((e,t)=>e+t.held,0),l=s.find(e=>e.price!==null)?.price??null,u=xy(e,c,i,l,n,r);if(u.pct===null)continue;let d=t(e),f=Math.max(0,Math.min(i,u.bought-Math.min(u.sold,u.bought))),p=f<=0||f<=u.bought*.001||l!==null&&f*l<ab,m=c.filter(e=>e.side===1&&e.at),h=c.filter(e=>e.at).map(e=>e.at);o.push({key:e,symbol:d.short,name:d.label.replace(/\s*\([^)]*\)$/,``)||d.label,logo:d.logo,pct:u.pct,usd:{paid:u.paidUsd,got:u.backUsd+u.nowUsd,pnl:u.pnlUsd,pct:u.pct},sol:{paid:u.paidSol,got:u.backSol+u.nowSol,pnl:u.pnlSol,pct:ib(u.pnlSol,u.paidSol)},firstAt:m.length?Math.min(...m.map(e=>e.at)):Math.min(...h,a),lastAt:p&&Math.max(...h,0)||a,wallets:s.length,finished:p,replay:cb(e,c,p,n,r)})}return o}var sb=(e,t,n)=>(e.coins>0?yy(e,t,n)/e.coins:0)||null;function cb(e,t,n,r,i){let a=t.filter(e=>e.at).sort((e,t)=>e.at-t.at),o=a.find(e=>e.side===1);if(!o)return;let s=a.filter(e=>e.side===-1&&e.at>=o.at),c=s.length?s[s.length-1]:null;return{mint:e,buyAt:o.at,buyPrice:sb(o,r,i),sellAt:c?c.at:null,sellPrice:c?sb(c,r,i):null}}function lb(e,t,n,r,i,a){let o=e.trades.find(e=>e.sig===t),s=qy(e,r,i).get(t);if(!s||s.pct===null)return Mn(eg(t));let c=n(o.mint),l=e.trades.filter(e=>e.mint===o.mint&&e.side===1&&e.at&&e.at<=o.at).sort((e,t)=>e.at-t.at),u=l.map(e=>e.at);fb({key:t,symbol:c.short,name:c.label.replace(/\s*\([^)]*\)$/,``)||c.label,logo:c.logo,pct:s.pct,usd:{paid:s.paidUsd,got:s.gotUsd,pnl:s.pnlUsd,pct:s.pct},sol:{paid:s.paidSol,got:s.gotSol,pnl:s.pnlSol,pct:s.solPct??ib(s.pnlSol,s.paidSol)},firstAt:u.length?Math.min(...u):o.at,lastAt:o.at,wallets:1,finished:!0,sig:t,replay:l.length?{mint:o.mint,buyAt:l[0].at,buyPrice:sb(l[0],r,i),sellAt:o.at,sellPrice:sb(o,r,i)}:void 0},a).catch($)}async function ub(){q(`finished`,ub),My=`pct`;let e=Ey;if(!e){let t=await ay();if(!t)return Z();Av(`Gathering every wallet's trades…`),e=Ey=await ky(t,Ty)}let{rows:t}=e,n=ob(t,await Ky(t.flatMap(e=>e.coins.map(e=>e.mint)),t.flatMap(e=>e.held)),e.solAt,e.solNow).sort((e,t)=>t.lastAt-e.lastAt),r=n.filter(e=>e.finished),i=n.filter(e=>!e.finished),a=new Map(n.map(e=>[e.key,{pct:e.pct,pnlUsd:e.usd.pnl,pnlSol:e.sol.pnl}])),o=r.reduce((e,t)=>e+t.usd.paid,0),s=r.reduce((e,t)=>e+t.usd.pnl,0);a.set(`total`,{pct:o>=.01?s/o*100:null,pnlUsd:s,pnlSol:r.reduce((e,t)=>e+t.sol.pnl,0)});let c=e=>`<li data-mint="${e.key}">${pr(e.symbol,e.logo)}<div class="grow"><b>${Q(e.name)}</b><small class="paid" data-usd="${ES(e.usd.paid)}" data-sol="${W(e.sol.paid*U)} SOL">put in ${ES(e.usd.paid)}</small><small>${e.wallets} wallet${e.wallets===1?``:`s`}${e.finished?` · ${Wy(e.lastAt)}`:``}</small></div><div class="right"><span class="pv" data-pnl="${e.key}"></span><small class="share">SHARE ›</small></div></li>`;J(`
    <h1>Finished trades</h1>
    <div class="total pnl" id="pnlTotal"><small>Profit / loss on coins sold out</small><div class="big"><span data-pnl="total">…</span></div><div class="sub">${r.length?`${r.length} coin${r.length===1?``:`s`} · on ${ES(o)} put in`:`Nothing sold out yet`}</div></div>
    <div class="pnltabs"><button data-mode="pct">%</button><button data-mode="sol">SOL</button><button data-mode="usd">$</button></div>
    ${r.length?`<h2>Sold out (${r.length})</h2><ul class="list coins pnl">${r.map(c).join(``)}</ul>`:`<p class="muted">No coin is fully sold yet.</p>`}
    ${i.length?`<h2>Still holding (${i.length})</h2><ul class="list coins pnl">${i.map(c).join(``)}</ul>`:``}
    <p class="muted">Each coin is added up across all your wallets. Tap one for its share card. A single sell has its own card too: tap it in a wallet's history.</p>
    <button id="back">Back to Wallet P&amp;L</button>`),mr();let l=()=>{zy(a);let e=My===`sol`;document.querySelectorAll(`.coins .paid`).forEach(t=>t.textContent=`put in ${e?t.dataset.sol:t.dataset.usd}`)};l(),Zy(l),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{F(),fb(n.find(t=>t.key===e.dataset.mint),()=>ub()).catch($)})),X(`back`,()=>Vy().catch($))}function db(e,t){try{let n=atob(e.slice(e.indexOf(`,`)+1)),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return new File([r],t,{type:`image/png`})}catch{return null}}async function fb(e,t){q(`card:${e.key}`,()=>fb(e,t));let n=rb();J(`
    <h1>Share card</h1>
    <div class="sharecard" id="cardBox"><img id="cardImg" alt="Share card for ${Q(e.symbol)}"></div>
    <div class="pnltabs"><button data-unit="usd">$</button><button data-unit="sol">SOL</button></div>
    ${n?`<label class="cardme"><input type="checkbox" id="cardMe"> Show my Telegram name${n.photo?` and photo`:``}</label>`:``}
    <button id="share" class="primary">Share</button>
    ${e.replay?`<button id="replay">▶ Replay on the chart</button>`:``}
    <p class="muted" id="shareNote">No wallet addresses or transaction links are on the card.</p>
    ${e.sig?`<button id="solscan">View this sell on Solscan</button>`:``}
    <button id="back">Back</button>`);let r=document.createElement(`canvas`),i=Y(`cardImg`),a=null,o=`${e.symbol.replace(/[^\w-]/g,``)||`trade`}-pnl.png`,s=Promise.resolve(),c=()=>s=s.then(async()=>{let t=e[eb],s={symbol:e.symbol,name:e.name,logo:e.logo,pct:t.pct,paid:t.paid,got:t.got,pnl:t.pnl,unit:eb,firstAt:e.firstAt,lastAt:e.lastAt,wallets:e.wallets,finished:e.finished,user:n&&nb()?n:void 0};if(await no(r,s,`oni`,gr),a=null,!document.body.contains(i))return;let c;try{c=r.toDataURL(`image/png`)}catch{await no(r,{...s,logo:void 0,user:s.user&&{name:s.user.name}},`oni`,gr),c=r.toDataURL(`image/png`)}i.src=c,a=db(c,o),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.classList.toggle(`on`,e.dataset.unit===eb))});c().catch($),document.querySelectorAll(`.pnltabs button`).forEach(e=>e.addEventListener(`click`,()=>{F(),eb=e.dataset.unit,c().catch($)}));let l=document.getElementById(`cardMe`);l&&(l.checked=nb(),l.addEventListener(`change`,()=>{try{localStorage.setItem(tb,l.checked?`1`:`0`)}catch{}c().catch($)})),X(`share`,async()=>{F(),a||(await s,a??=await io(r,o));let e=Y(`shareNote`);if(a&&navigator.canShare?.({files:[a]}))try{await navigator.share({files:[a]});return}catch(e){if(e instanceof Error&&e.name===`AbortError`)return}e.textContent=`Press and hold the card, then tap Save to Photos or Share.`,e.classList.add(`warning`),Y(`cardBox`).classList.add(`hint`)}),e.replay&&X(`replay`,()=>{F();let t=e[eb];bl({symbol:e.symbol,name:e.name,logo:e.logo,pct:t.pct,paid:t.paid,got:t.got,pnl:t.pnl,unit:eb,firstAt:e.firstAt,lastAt:e.lastAt,wallets:e.wallets,finished:e.finished,user:n&&nb()?n:void 0},e.replay).catch($)}),e.sig&&X(`solscan`,()=>Mn(eg(e.sig))),X(`back`,()=>Promise.resolve(t()).catch($))}var pb=e=>(e/U).toFixed(4);function mb(e){let t=e.index===0?`main wallet`:e.name?`${e.name} (#${e.index})`:`side wallet #${e.index}`;Kv(`Export ${Q(t)}`,n=>{let r=ey(n,e.index+1)[e.index],i=I_(r);J(`
      <h1>Private key: ${Q(t)}</h1>
      <p class="warning">Anyone with this key controls this wallet. Only paste it into your own wallet app (Phantom: Add / Connect Wallet → Import Private Key).</p>
      <div class="card"><div class="address" id="key"></div></div>
      <button id="copyKey" class="primary">Copy key</button>
      <button id="done">Done</button>`),Y(`key`).textContent=i,X(`copyKey`,()=>jv(i,Y(`copyKey`))),X(`done`,Z)})}var hb=2e6,gb=25e5,_b=1e6;function vb(e,t,n){return e.map((e,r)=>{let i=t[r],a=i-hb-gb,o=Math.floor(a*n/100);return a<_b?{wallet:e,balance:i,action:i>5e3?`return`:`skip`,lamports:i-Vm}:o<_b?{wallet:e,balance:i,action:`skip`,lamports:0}:{wallet:e,balance:i,action:`buy`,lamports:o}}).filter(e=>e.balance>0)}async function yb(e,t){if(q(`buy:${e}`,()=>yb(e,t)),!K)return J(`
      <h1>Open this from the bot</h1>
      <p>To buy, send <b>buy &lt;token address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),X(`home`,Z);let n=await ay();if(!n)return Z();let[r,...i]=n;Av(`Checking your wallet balances…`);let[[,...a],o]=await Promise.all([cy(n.map(e=>e.address)),uh(e).then(t=>t??gd(K,e))]),s=vb(i,a,t),c=s.filter(e=>e.action===`buy`),l=c.reduce((e,t)=>e+t.lamports,0),u=e=>e.action===`buy`?`buys with <b>${W(e.lamports)} SOL</b>`:e.action===`return`?`too little to buy, sends ${W(e.lamports)} SOL back to main`:t<100?`${t}% is too little to buy, left as is`:`too little to do anything, left as is`;J(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>${t===100?`Spending all SOL in each funded side wallet`:`Spending ${t}% of each funded side wallet`}</h2>
    ${s.length?`<ul class="list">${s.map(e=>`<li><span>#${e.wallet.index}</span><code>${W(e.balance)} SOL<br><small>${u(e)}</small></code></li>`).join(``)}</ul>`:`<p class="warning">None of your side wallets has SOL. Send SOL to the side wallets you want to buy with, then try again.</p>`}
    ${c.length?`<p><b>Total: ${W(l)} SOL across ${c.length} wallet${c.length===1?``:`s`}.</b></p>
           <p class="muted">Each wallet keeps ${W(hb)} SOL so it can pay the fee to sell later. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again). Prices can move while the buys go through one by one.</p>
           <button id="go" class="primary">Enter PIN and buy</button>`:``}
    <button id="cancel">Cancel</button>`),Y(`mint`).textContent=e,X(`cancel`,Z),c.length&&X(`go`,()=>Kv(`Enter your PIN to buy`,t=>Bb(t,e,r,s)))}var bb=45e5,xb=1e7,Sb=10;function Cb(e,t,n,r){let i=n.map((e,t)=>t);if(r&&n.length===1){let e=t.findIndex(e=>e>=n[0]+bb);i=[e>=0?e:0]}return i.map((r,i)=>({wallet:e[r],balance:t[r],share:n[i],send:Math.max(0,n[i]+bb-t[r])}))}function wb(e){let t=e.filter(e=>e.send>0);return t.reduce((e,t)=>e+t.send,0)+Math.ceil(t.length/Sb)*Vm}function Tb(e,t){return Array.from({length:t},()=>Math.floor(e/t))}function Eb(e,t,n,r,i=!0){let a=e=>({rows:[],mainCost:0,problem:e}),o=e=>n-e>=890880||n===e;if(!(r.total>0))return a(`The amount to spend is missing.`);let s;if(r.split){if(r.split.length>e.length)return a(`You asked for ${r.split.length} wallets but have ${e.length} side wallets.`);let n=r.split.reduce((e,t)=>e+t,0);s=Cb(e,t,r.split.map(e=>Math.floor(r.total*e/n)),!1)}else if(r.count){if(r.count>e.length)return a(`You asked for ${r.count} wallets but have ${e.length} side wallets.`);s=Cb(e,t,Tb(r.total,r.count),!0)}else{let n=Math.max(1,Math.min(e.length,Math.floor(r.total/xb)));for(s=Cb(e,t,Tb(r.total,n),!1);n>1&&!o(wb(s));)n--,s=Cb(e,t,Tb(r.total,n),!1)}let c=wb(s);if(s.some(e=>e.share<_b))return{rows:s,mainCost:c,problem:`That's less than ${W(_b)} SOL per wallet. Use a bigger amount or fewer wallets.`};if(!o(c)){if(!i)return{rows:s,mainCost:c,problem:`too much`};let o=r.split?1:r.count??Math.max(1,Math.min(e.length,Math.floor(r.total/xb))),l=[];for(let i=o;i>=1;i--){let a=r.split?r:{...r,count:i},o=0,s=r.total;for(;s-o>1e3;){let r=Math.floor((o+s)/2);Eb(e,t,n,{...a,total:r},!1).problem===`too much`?s=r:o=r}let c=Eb(e,t,n,{...a,total:o},!1);o>0&&!c.problem&&l.push({plan:c,spend:o})}let u=Math.max(0,...l.map(e=>e.spend)),d=l.find(e=>e.spend>=u*.9);if(d){let e=d.plan.rows.length;return{...d.plan,adjusted:`The main wallet only has ${W(n)} SOL, so this spends ${W(d.spend)} SOL${e<s.length?` across ${e} wallet${e===1?``:`s`}`:``} instead of ${W(r.total)} SOL.`}}return a(`The main wallet has ${W(n)} SOL, which isn't enough for even one buy. A side wallet needs about ${W(55e5+Hm)} SOL from main for the smallest buy, fees, and the ${W(Hm)} SOL Solana makes a wallet keep.`)}return{rows:s,mainCost:c,problem:null}}async function Db(e,t){if(q(`fundedBuy:${e}`,()=>Db(e,t)),!K)return yb(e,100);let n=await ay();if(!n)return Z();let[r,...i]=n;Av(`Checking your wallet balances…`);let[a,o]=await Promise.all([cy(n.map(e=>e.address)),uh(e).then(t=>t??gd(K,e))]),[s,...c]=a,l=Eb(i,c,s,t),u=l.rows.length||t.split?.length||t.count||0,d=l.rows.length?l.rows.reduce((e,t)=>e+t.share,0):t.total,f=t.split?`split ${t.split.join(`/`)} across ${u} side wallets`:u?`across ${u} side wallet${u===1?``:`s`}`:`split evenly across as many side wallets as possible`;J(`
    <h1>Buy ${o?Q(o):`token`}</h1>
    <div class="card"><div class="label">Token address</div><div class="address" id="mint"></div></div>
    <h2>Spending ${W(d)} SOL, ${f}</h2>
    ${l.adjusted&&!l.problem?`<p class="note">${Q(l.adjusted)}</p>`:``}
    ${l.rows.length?`<ul class="list">${l.rows.map(e=>`<li><span>#${e.wallet.index}</span><code>buys with <b>${W(e.share)} SOL</b><br><small>${e.send>0?`gets ${W(e.send)} SOL from main first`:`already has ${W(e.balance)} SOL, nothing sent`}</small></code></li>`).join(``)}</ul>`:``}
    ${l.problem?`<p class="warning">${Q(l.problem)}</p>`:`<p><b>From main: ${W(l.mainCost)} SOL</b> (main has ${W(s)} SOL).</p>
           <p class="muted">Each wallet gets ${W(bb)} SOL on top of its buy: ${W(hb)} SOL stays in it so it can pay the fee to sell later, and the rest covers the buy's fees and token deposit. Jupiter charges 0.1% per buy (0.5% for tokens under a day old). Coins too new for Jupiter are bought through PumpPortal (0.5%), which leaves about 15% of each amount unspent as room for price moves (25% if the price jumps and it tries again).</p>
           <button id="go" class="primary">${l.adjusted?`Buy with ${W(d)} SOL instead`:`Enter PIN, fund and buy`}</button>`}
    <button id="cancel">Cancel</button>`),Y(`mint`).textContent=e,X(`cancel`,Z),!l.problem&&X(`go`,()=>Ob(e,r,l))}function Ob(e,t,n){let r=n.rows.map(e=>({wallet:e.wallet,balance:e.balance,action:`buy`,lamports:e.share})),i=n.rows.filter(e=>e.send>0),a=async(e,t)=>{if(!i.length)return t(`The side wallets already had enough SOL.`);let n=[];for(let e=0;e<i.length;e+=Sb)n.push(i.slice(e,e+Sb));let r=await Wh(),a=await Promise.allSettled(n.map(async t=>{let n=await Jh(Vh(e[0],t.map(e=>({to:e.wallet.address,lamports:e.send})),r));return{signature:n,outcome:await Zh(n)}})),o=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,s=a.find(e=>e.status===`rejected`||e.value.outcome!==`confirmed`);if(s)throw s.status===`rejected`?s.reason:(t(`<span class="error">✗ Sending SOL from main ${s.value.outcome===`failed`?`failed`:`is taking too long`}</span> · ${o(s.value.signature)}`),new zb);let c=a.map(e=>o(e.value.signature));t(`✓ Sent SOL from main to ${i.length} of ${i.length} side wallets · ${c.join(` `)}`)};Kv(`Enter your PIN to fund and buy`,n=>Bb(n,e,t,r,a))}var kb=1e6;async function Ab(e,t,n){q(`split`,()=>Ab(e,t,n));let r=await ay();if(!r)return Z();let[i,...a]=r,o=e=>{J(`
      <h1>Split SOL</h1>
      <p class="warning">${e}</p>
      <button id="home" class="primary">Back to my wallets</button>`),X(`home`,Z)};if(!a.length)return o(`You don't have any side wallets yet. Add some on the wallets screen first.`);let s=n?.length??t??a.length;if(s>a.length)return o(`You asked for ${s} wallets, but you have ${a.length} side wallet${a.length===1?``:`s`}. Add more on the wallets screen, or pick fewer.`);let c=a.slice(0,s);Av(`Checking your wallets…`);let l=await gh([i,...c].map(e=>e.address)),u=l[0],d=Math.ceil(s/Sb)*Vm,f=e===`all`?u-d-kb:e;if(f<=0)return o(`Main has ${W(u)} SOL, which isn't enough to split.`);let p=u-f-d;if(p<0||p>0&&p<890880)return o(`Main has ${W(u)} SOL. Splitting ${W(f)} SOL plus fees would leave ${p<0?`less than nothing`:`${W(p)} SOL, below the ${W(Hm)} SOL Solana makes a wallet keep`}. The most you can split is ${W(Math.max(0,u-d-Hm))} SOL, or use "split all sol".`);let m=n??c.map(()=>1),h=m.reduce((e,t)=>e+t,0),g=c.map((e,t)=>({wallet:e,balance:l[t+1],send:Math.floor(f*m[t]/h)}));g[0].send+=f-g.reduce((e,t)=>e+t.send,0);let _=g.filter(e=>e.send<=0||e.balance+e.send<890880);if(_.length)return o(`${_.map(e=>`#${e.wallet.index}`).join(`, `)} would get too little: an empty wallet has to receive at least ${W(Hm)} SOL. Split more SOL, or across fewer wallets.`);J(`
    <h1>Split ${W(f)} SOL</h1>
    <p>From main (${W(u)} SOL) to ${s} wallet${s===1?``:`s`}${n?`, split ${n.join(`/`)}`:`, evenly`}.</p>
    <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code>${e.wallet.name?`<b>${Q(e.wallet.name)}</b> · `:``}gets <b>${W(e.send)} SOL</b><br><small>has ${W(e.balance)} now</small></code></li>`).join(``)}</ul>
    <p class="muted">Main keeps ${W(p)} SOL. Network fees: ${d<1e5?`less than 0.0001`:W(d)} SOL.</p>
    <button id="go" class="primary">Enter PIN and split</button>
    <button id="cancel">Cancel</button>`),X(`cancel`,Z),X(`go`,()=>Kv(`Enter your PIN to split`,async e=>{let[t]=ey(e,1);J(`
        <h1>Splitting…</h1>
    ${_n()}
        <p class="muted">Keep this screen open until it finishes.</p>
        <ul class="list">${g.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),bv();let n=0,r=[];for(let e=0;e<g.length;e+=Sb)r.push(g.slice(e,e+Sb));g.forEach(e=>Y(`status-${e.wallet.index}`).textContent=`sending…`);let a=await Wh().catch(()=>null);await Promise.all(r.map(async e=>{let r;try{let i=await Jh(Vh(t,e.map(e=>({to:e.wallet.address,lamports:e.send})),a??await Wh())),o=await Zh(i),s=`<a href="#" class="tx" data-sig="${i}">view</a>`;o===`confirmed`?(n+=e.length,r=`✓ sent {amount} SOL · ${s}`):r=`<span class="error">✗ ${o===`failed`?`failed`:`taking long`}</span> · ${s}`}catch(e){r=`<span class="error">✗ ${Q(Mb(e))}</span>`}e.forEach(e=>Y(`status-${e.wallet.index}`).innerHTML=r.replace(`{amount}`,W(e.send))),uS()})),Kg([i.address,...g.map(e=>e.wallet.address)]).catch(()=>{}),t.secret.fill(0),An(n?`success`:`error`),n&&await lr(`SPLIT`),Y(`after`).innerHTML=`<p><b>Done: ${n} of ${g.length} wallets got their SOL.</b></p>
        <button id="home" class="primary">Back to my wallets</button>`,X(`home`,Z)}))}async function jb(e,t,n=!1){if(q(`buyAmount:${e}`,()=>jb(e,t,n)),!K)return yb(e,100);let r=await ay();if(!r)return Z();let[i,...a]=r;if(!a.length)return J(`
      <h1>No side wallets yet</h1>
      <p>Buys run from side wallets. Add some with "Change number of side wallets" on the home screen.</p>
      <button id="home" class="primary">Go to my wallets</button>`),X(`home`,Z);Av(`Checking your wallet balances…`);let[o,s]=await Promise.all([cy(r.map(e=>e.address)),mh(e)]),c=s.name??await gd(K,e).catch(()=>null)??Ev(e),[l,...u]=o,d=1e5,f=e=>Math.floor(e/d)*d,p=e=>u[e]-hb-gb,m=a.map((e,t)=>t).filter(e=>p(e)>=_b).sort((e,t)=>p(t)-p(e)),h=e=>m.slice(0,e).reduce((e,t)=>e+p(t),0),g=(e,t)=>m.slice(0,t).map(n=>({wallet:a[n],balance:u[n],action:`buy`,lamports:Math.min(p(n),Math.floor(e*p(n)/h(t)))})),_=e=>Math.ceil(_b*h(e)/p(m[e-1])/d)*d,v=n?m.map((e,t)=>f(h(t+1))):a.map((e,t)=>{let n=t+1,r=e=>Eb(a,u,l,{total:e,count:n,split:null},!1).problem!==`too much`,i=0,o=l;for(;o-i>d;){let e=Math.floor((i+o)/2);r(e)?i=e:o=e}let s=f(i);return s>=_b*n?s:0}),y=v.length,b=Math.max(0,...v),x=n?h(m.length):l,S=e=>n?_(e):_b*e,C=e=>{if(n){if(!e)return y;for(let t=y;t>1;t--)if(e<=v[t-1]&&e>=_(t))return t;return 1}for(let t=Math.min(a.length,Math.max(1,Math.floor(e/xb)));t>1;t--)if(e<=v[t-1])return t;return 1},w=t&&t<=y?t:null,T=``,E=!n&&m.length>0;J(`
    <div class="coinhead">${pr(c,s.logo)}<div><b>${Q(c)}</b><small>${Ev(e)}${e.endsWith(`pump`)?` · pump.fun`:``}</small></div></div>
    <div class="avail"><small>${n?`In side wallets`:`Available`}</small><span><span id="avail">0.0000</span> SOL</span></div>
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">SOL</span><div class="usd" id="amtNote"></div></div>
    </div>
    ${E?`<button id="useSide" type="button" hidden>Use side-wallet SOL instead (${W(h(m.length))} SOL)</button>`:``}
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span id="tickMid"></span><span>MAX</span></div>
    <div class="chips"><button type="button" data-f="0.25">25%</button><button type="button" data-f="0.5">50%</button><button type="button" data-f="0.75">75%</button><button type="button" data-f="1">MAX</button></div>
    <div class="walletsrow"><div><b>${n?`Side wallets`:`Wallets`}</b><small id="each"></small></div>
      <div class="stepper"><button id="minus" type="button">−</button><b id="count"></b><button id="plus" type="button">+</button></div></div>
    ${zv(`dot`)}
    <button id="go" class="primary go"></button>
    <button id="cancel">Cancel</button>`),mr(),fr(Y(`avail`),x,pb,{ms:1100,final:pb(x)}),X(`cancel`,Z),E&&X(`useSide`,()=>jb(e,null,!0));let D=e=>Math.round((Number(e)||0)*U),O=()=>{let e=D(T);return{total:e,count:Math.max(1,w??C(e)),max:w?v[w-1]:b}},k=e=>`${e} wallet${e===1?``:`s`}`,ee=(e=!1)=>{let{total:t,count:r,max:i}=O();Y(`amt`).textContent=T||`0`,Y(`count`).textContent=String(y?r:0),Y(`each`).textContent=n?t?`spread by balance${w?``:` · auto`}`:w?`you picked this, most SOL first`:`auto: every wallet with SOL`:t?`${W(Math.floor(t/r))} SOL each${w?``:` · auto`}`:w?`you picked this`:`auto: as many as the amount allows`,Y(`tickMid`).textContent=pb(i/2).replace(/0+$/,``).replace(/\.$/,``),e||(Y(`slider`).value=String(i?Math.min(1e3,Math.round(t/i*1e3)):0));let a=t>i,o=t>0&&!a&&t<S(r);Y(`amt`).classList.toggle(`over`,a&&i>0),Y(`amtNote`).textContent=i?a?`Max with ${k(r)} is ${W(i)} SOL`:o?`At least ${W(S(r))} SOL for ${k(r)}`:t?n?`from ${k(r)} · each keeps ${W(hb)} SOL for selling`:`split over ${k(r)} · each keeps ${W(bb)} SOL for fees`:`Type an amount or drag the slider`:n?`None of your side wallets has enough SOL to buy`:`Main needs at least ${W(55e5+Hm+Vm)} SOL to buy`,E&&(Y(`useSide`).hidden=i>0);let s=Y(`go`);s.disabled=!t||a||o,s.textContent=t&&!a&&!o?`⚡ Snatch it · ${T} SOL`:`⚡ Snatch it`},te=e=>{T=e>0?pb(e).replace(/0+$/,``).replace(/\.$/,``):``};Bv(e=>{if(e===`back`)T=T.slice(0,-1);else if(e===`dot`)T=T.includes(`.`)?T:(T||`0`)+`.`;else if(/\d/.test(e)){let[,t]=T.split(`.`);if(t!==void 0&&t.length>=4||T.replace(`.`,``).length>=9)return;T=T===`0`?e:T+e}ee()}),Y(`slider`).addEventListener(`input`,()=>{let{max:e}=O();te(f(Number(Y(`slider`).value)/1e3*e)),ee(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{F(),te(f(O().max*Number(e.dataset.f))),ee()}));let ne=e=>{y&&(F(),w=Math.min(y,Math.max(1,O().count+e)),ee())};X(`minus`,()=>ne(-1)),X(`plus`,()=>ne(1)),X(`go`,()=>{let{total:t,count:r}=O();if(n){let n=g(t,r);return Kv(`Enter your PIN to buy`,t=>Bb(t,e,i,n))}let o=Eb(a,u,l,{total:t,count:r,split:null},!1);if(o.problem)return Y(`amtNote`).textContent=o.problem===`too much`?`Main can't cover that, try a little less`:o.problem,An(`error`);Ob(e,i,o)}),ee()}var Mb=e=>e instanceof Error?e.message:String(e),Nb=8e6;async function Pb(e,t,n,r){let i;try{i=await hg(e,t,r)}catch(e){throw Error(`Couldn't double-check this trade before signing (${Mb(e)}). Nothing was signed; try again in a moment.`)}if(i.failed)return;let a=e=>{throw Error(`Stopped for safety: ${e}. Nothing was signed. Tell Dustin if this keeps happening.`)};i.takenOver&&a(`this trade would hand control of your wallet or its coins to someone else`),i.solOut>n.sol&&a(`this trade would take ${W(i.solOut)} SOL from the wallet, more than the ${W(n.sol)} SOL it should cost at most`);for(let[e,t]of i.coinsOut)e===n.mint&&(n.coins===void 0||t<=n.coins)||a(e===n.mint?`this trade would send more of the coin than you chose to sell`:`this trade would send away a coin you didn't choose to trade`)}async function Fb(e,t,n,r){return await Pb(e,t.address,n,r),yh(e,t)}var Ib=10,Lb=e=>{let t=mg(e);return t.catch(()=>{}),t};async function Rb(e,t,n){let r=await sd(K,e,t,n);if(!r.transaction&&t-2e6>=_b&&(t-=2e6,r=await sd(K,e,t,n)),!r.transaction)throw Error(r.errorMessage??`Jupiter couldn't find a way to buy this token.`);return{order:r,lamports:t}}var zb=class extends Error{};async function Bb(e,t,n,r,i){let a=r.filter(e=>e.action!==`skip`),o=ey(e,Math.max(...a.map(e=>e.wallet.index))+1);J(`
    <h1>Buying…</h1>
    ${_n()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${i?`<p id="funding">Sending SOL from main to the side wallets…</p>`:``}
    <ul class="list">${a.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),bv();let s=(e,t)=>Y(`status-${e}`).innerHTML=t,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;if(i)try{await i(o,e=>Y(`funding`).innerHTML=e)}catch(e){return e instanceof zb||(Y(`funding`).innerHTML=`<span class="error">✗ Sending SOL from main failed: ${Q(Mb(e))}</span>`),a.forEach(e=>s(e.wallet.index,`not bought`)),o.forEach(e=>e.secret.fill(0)),An(`error`),Y(`after`).innerHTML=`<p><b>Nothing was bought.</b> Any SOL that did reach a side wallet stays there; "Send all side-wallet SOL to main" brings it back.</p>
        <button id="home" class="primary">Back to my wallets</button>`,uS(),X(`home`,Z)}let l=0,u=null,d=!1;await jx(a,Ib,async e=>{let r=o[e.wallet.index];try{if(e.action===`buy`&&d){s(e.wallet.index,`skipped: same problem as above, nothing spent`);return}if(e.action===`buy`){s(e.wallet.index,`buying…`);let n=$b(r.address,t).catch(()=>null),i=Lb(r.address),a=null;if(!u)try{a=await Rb(t,e.lamports,r.address)}catch(e){u=Mb(e)}let o=await n,d=a?null:await qx(t);if(d){await iS(d,r,e.lamports,t=>s(e.wallet.index,t),c)&&(l++,tx(t,r.address,o));return}if(!a){s(e.wallet.index,`buying through pump.fun…`);let n=0,a=await lS(e.wallet.index,s,u,(i,a)=>(n=Math.floor(e.lamports*a),Cd(r.address,t,n,i)),r,e=>({sol:Math.ceil(n*(1+e/100))+Nb}),i),d=await Zh(a);d===`confirmed`?(l++,tx(t,r.address,o),s(e.wallet.index,`✓ bought with ${W(n)} SOL via pump.fun · ${c(a,`view`)}`)):s(e.wallet.index,`<span class="error">✗ buy ${d===`failed`?`failed`:`is taking long`}</span> · ${c(a,`check`)}`);return}let{order:f,lamports:p}=a,m=await ld(K,await Fb(ud(f.transaction),r,{sol:p+Nb},i),f.requestId);if(m.status!==`Success`)throw Error(m.error??`The buy didn't go through (code ${m.code}).`);l++,tx(t,r.address,o),s(e.wallet.index,`✓ bought with ${W(p)} SOL · ${c(m.signature,`view`)}`)}else{s(e.wallet.index,`sending back to main…`);let t=await Jh(Bh(r,n.address,e.lamports,await Wh())),i=await Zh(t);s(e.wallet.index,i===`confirmed`?`✓ sent ${W(e.lamports)} SOL to main · ${c(t,`view`)}`:`✗ sending back ${i===`failed`?`failed`:`is taking long`} · ${c(t,`check`)}`)}}catch(t){Mb(t).includes(`priced in another coin`)&&(d=!0),s(e.wallet.index,`<span class="error">✗ ${Q(Mb(t))}</span>`)}}),Kg([n.address,...a.map(e=>e.wallet.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),An(l?`success`:`error`),l&&await lr(),Y(`after`).innerHTML=`<p><b>Done: ${l} of ${a.filter(e=>e.action===`buy`).length} buys went through.</b></p>
    <button id="home" class="primary">Back to my wallets</button>`,uS(),X(`home`,Z)}var Vb=e=>new Intl.NumberFormat(`en-US`,e>=1e6?{notation:`compact`,maximumFractionDigits:2}:{maximumFractionDigits:e>=1?2:6}).format(e),Hb=e=>`$${e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`,Ub=e=>e.name?`${e.name}${e.symbol?` (${e.symbol})`:``}`:e.symbol??Ev(e.mint),Wb=e=>e.usd===null&&(/https?:|www\.|\.(io|com|xyz|net|org|fun|app|site|gg|co)\b/i.test(`${e.name} ${e.symbol}`)||(e.name??``).length>40),Gb=new Set([`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`]),Kb=3,qb=e=>!!e?.chain&&e.chain!==Kb,Jb=e=>!!e&&BigInt(e.raw)>0n&&(e.lamports>0||(e.usd??0)>0)&&!qb(e),Yb=(e,t)=>e.usd?t?e.lamports+e.usd/t*U:null:e.lamports,Xb=(e,t)=>{let n=Number(t)/Number(BigInt(e.raw)),r=e.lamports*n,i=(e.usd??0)*n;return[r>0?`${W(r)} SOL`:``,i>0?Hb(i):``].filter(Boolean).join(` + `)},Zb=e=>!Jb(e)&&(!e||e.chain!==Kb||!e.checked||Date.now()-e.checked>432e5);async function Qb(e,t,n){let r=0,i=0,a=0,o=!1;for(let n of t){let t=await ag(n.address,e,n.amount);t&&(o=!0,r+=t.lamports,i+=t.usd,a+=t.coins)}if(!o)return null;let s=JSON.parse(await P.get(K_).catch(()=>null)||`{}`);if(Jb(s[e])&&!s[e].chain)return s[e];let c=a>0&&(r>0||i>0)?{lamports:r,...i>0?{usd:i}:{},raw:BigInt(Math.round(a*10**n)).toString(),chain:Kb}:{lamports:0,raw:`0`,checked:Date.now(),chain:Kb};return s[e]=c,await P.set(K_,JSON.stringify(s)).catch(()=>{}),c}async function $b(e,t){let n=await ug([e],t,await n_(t));return{lamports:n.lamports[0]+n.deposit[0],raw:n.raw[0]}}var ex=Promise.resolve();function tx(e,t,n){n&&(ex=ex.then(async()=>{try{for(let r=0;r<5;r++){let r=await $b(t,e),i=r.raw-n.raw,a=n.lamports-r.lamports;if(i>0n&&a>0){let t=JSON.parse(await P.get(K_)||`{}`),n=t[e]??{lamports:0,raw:`0`};t[e]={lamports:n.lamports+a,...n.usd?{usd:n.usd}:{},raw:(BigInt(n.raw)+i).toString()},await P.set(K_,JSON.stringify(t));return}await new Promise(e=>setTimeout(e,1500))}}catch{}}))}var nx=e=>e.inOrder===!0;async function rx(e){let t=await t_(e);return t&&t.decimals!==void 0?t:_v(e).catch(()=>t??{name:null,symbol:null})}async function ix(e){let t=e.map(()=>[]);if(!K)return t;let n=await vx(),r=new Set(n.map(e=>e.wallet)),i=await Promise.all(e.map(e=>r.has(e.address)?gv(e.address).catch(()=>[]):Promise.resolve([]))),a=[...new Set(i.flat().map(e=>e.inputMint))].filter(e=>e!==Vu),o=new Map(await Promise.all(a.map(async e=>[e,await rx(e)])));for(let[e,n]of i.entries())for(let r of n){let n=BigInt(r.rawRemainingMakingAmount||r.rawMakingAmount||`0`),i=o.get(r.inputMint);n<=0n||!i||i.decimals===void 0||t[e].push({mint:r.inputMint,name:i.name,symbol:i.symbol,logo:i.logo,decimals:i.decimals,amount:Number(n)/10**i.decimals,usd:null,inOrder:!0})}return t}var ax=e=>JSON.stringify(e.map(e=>[e.lamports,e.accounts.map(e=>`${e.mint}:${e.raw}`)])),ox=null,sx=!1,cx=new Set,lx=e=>ox===e&&xv[xv.length-1]?.key===`holdings`;async function ux(){q(`holdings`,ux);let e=await ay();if(!e)return Z();let t=Symbol(`holdings`);ox=t;let n=sx;sx=!1;let r={me:t,wallets:e,costs:await dx()};await fx(e,`Looking up what each wallet holds…`,()=>lx(t),(e,t,n)=>px(r,e,t,n),n)}var dx=()=>P.get(K_).then(e=>JSON.parse(e||`{}`)).catch(()=>({}));async function fx(e,t,n,r,i=!1){let a=e.map(e=>e.address),o=Xg(a);o.catch(()=>{});let s=ix(e);s.catch(()=>{});let c=()=>Cy(s,8e3,null),l=()=>n()&&!!document.getElementById(`holdSync`),u=await Gg(a);if(u){let e=await Cy(s,150,null);await r(u,e,`saved`);let t=await o.catch(()=>null);if(!l())return;if(!t){Y(`holdSync`).textContent=`NOT SYNCED`;return}if(e&&ax(t)===ax(u)){let e=Y(`holdSync`);e.textContent=`UP TO DATE`,e.classList.add(`synced`)}else{let n=e??await c();if(!l())return;await r(t,n,`quiet`)}}else{Av(t);let[e,i]=await Promise.all([o,c()]);if(!n())return;await r(e,i,`fresh`)}let d=await Qg(a,i).catch(()=>null);d&&l()&&await r(d,await c(),`quiet`)}async function px(e,t,n,r){let{me:i,wallets:a,costs:o}=e,s=0,c=await Promise.all(t.map(async e=>(await $g(e)).filter(e=>!Wb(e)||!(s+=1)))),l=t.map(e=>e.lamports);n?.forEach((e,t)=>c[t].push(...e));let u=new Map;c.forEach((e,t)=>e.forEach(e=>{let n=u.get(e.mint)??{coin:e,amount:0,usd:null,wallets:[],inOrders:0};n.amount+=e.amount,e.usd===null?nx(e)&&n.usd!==null&&n.amount>e.amount&&(n.usd+=n.usd/(n.amount-e.amount)*e.amount):n.usd=(n.usd??0)+e.usd,nx(e)&&(n.inOrders+=e.amount),n.wallets.includes(a[t].index)||n.wallets.push(a[t].index),u.set(e.mint,n)}));let d=e=>BigInt(Math.floor(e.amount*10**(e.coin.decimals??0))),f=bS,p=new Map,m=0,h=()=>{for(let[e,t]of u){let n=p.get(e);n!==void 0&&f&&(t.usd=n/1e9*f),t.usd!==null&&t.amount>0&&CS(e,t.usd/t.amount)}},g=async()=>{if(!K)return;let[e,t]=await Promise.all([hv().catch(()=>null),u.size?vv([...u.keys()]).catch(()=>new Map):Promise.resolve(new Map)]);f=e??f,kS(f);for(let[e,n]of u){let r=t.get(e);r&&f?p.set(e,r*n.amount/f*1e9):n.usd!==null&&f&&!p.has(e)&&p.set(e,n.usd/f*1e9)}h()},_=async()=>{if(!K)return;let[e,t]=await Promise.all([hv(!0).catch(()=>null),Promise.all([...u].map(([e,t])=>pd(K,e,d(t),!0).catch(()=>null)))]);f=e??f,kS(f);let n=[];if([...u.keys()].forEach((e,r)=>{let i=t[r];i===null?n.push(e):p.set(e,i)}),m=n.length,n.length&&f){let e=await hd(K,n,!0).catch(()=>new Map);for(let[t,n]of e)p.set(t,n*u.get(t).amount/f*1e9)}h();let r=new Map;for(let[e,t]of u)t.usd!==null&&t.amount>0&&p.has(e)&&r.set(e,t.usd/t.amount);e_(r).catch(()=>{})};r===`fresh`?await g():h();let v=e=>a.flatMap((t,n)=>c[n].filter(t=>t.mint===e).map(e=>({address:t.address,amount:e.amount}))),y=e=>{let t=p.get(e);if(t===void 0||Gb.has(e))return null;let n=o[e],r=u.get(e),i,a=!1,s=Jb(n)?Yb(n,f):null;if(s&&(i=s/Number(BigInt(n.raw))*Number(d(r)),a=!0),!i)return null;let c=(t-i)/i*100;return Math.abs(c)<.5?null:{pct:c,sinceBuy:a}},b=e=>e===null?``:`${e.pct>0?`▲`:`▼`} ${Math.abs(e.pct)>=100?Math.round(Math.abs(e.pct)):Math.abs(e.pct).toFixed(1)}%${e.sinceBuy?` since buy`:``}`,x=e=>e===null?``:e.pct>0?` up`:` down`,S=(await vx()).length;if(!lx(i)||r===`quiet`&&!document.getElementById(`holdSync`))return;let C=l.reduce((e,t)=>e+t,0),w=a.filter((e,t)=>l[t]>0||c[t].length),T=e=>e===0?`Main`:`#${e}`,E=[...u.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),D=E.reduce((e,t)=>e+(t.usd??0),0),O=a.filter((e,t)=>l[t]>0).length,k=(e,t)=>`${e} ${t}${e===1?``:`s`}`,ee=e=>Hb(e).replace(/^\$0\.00$/,`$${e.toFixed(4)}`),te=(e,t)=>r===`quiet`?t===`usd`?ee(e):W(e):`<span class="tk" data-to="${e}" data-kind="${t}">${t===`usd`?`$0.00`:`0.0000`}</span>`,ne=r===`saved`?`SYNCING`:`UP TO DATE`,re=window.scrollY;J(`
    <h1>Your holdings <span id="holdSync" class="live${r===`saved`?``:` synced`}">${ne}</span></h1>
    <div class="total">
      <small>${D>0?`Coins across ${k(w.length,`wallet`)}`:`SOL across ${k(w.length,`wallet`)}`}</small>
      <div class="big">${D>0?`<span id="usdTotal">${te(D,`usd`)}</span>`:`<span class="solamt" data-sol="${C/U}">${te(C,`sol`)}<span class="unit">SOL</span></span>`}</div>
      ${D>0?`<div class="sub">+ <span class="solamt" data-sol="${C/U}">${te(C,`sol`)} SOL</span></div>`:``}
    </div>
    <h2>Across all wallets${E.length&&K?` <span id="live" class="live">LIVE</span>`:``}</h2>
    <ul class="list coins">
      <li id="solRow"><div class="av sol"><b>◎</b></div><div class="grow"><b>SOL</b><small>in ${k(O,`wallet`)}</small></div>
        <div class="right"><span class="solamt" data-sol="${C/U}">${te(C,`sol`)}<small>SOL</small></span></div></li>
      ${E.map(e=>{let t=y(e.coin.mint);return`<li data-mint="${e.coin.mint}">${pr(e.coin.symbol||e.coin.name||`?`,e.coin.logo)}<div class="grow"><b>${Q(Ub(e.coin))}</b><small>in ${e.wallets.length===1?``:`${e.wallets.length} wallets: `}${e.wallets.map(T).join(`, `)}</small>${e.inOrders?`<small class="inorder">🎯 ${SS(e.coin.mint,e.inOrders)} waiting in auto-sell</small>`:``}</div>
          <div class="right${x(t)}"><span class="val">${e.usd===null?``:te(e.usd,`usd`)}</span><small class="move">${b(t)}</small><small>${SS(e.coin.mint,e.amount)}</small></div></li>`}).join(``)}
    </ul>
    <p class="muted">${E.length?`Tap a coin to sell some of it, set an auto-sell, or buy more. `:``}Tap SOL for its chart.</p>
    <h2>Per wallet</h2>
    <p class="muted">Tap a wallet to open it.</p>
    <ul class="list">${w.map(e=>{let t=a.indexOf(e);return`<li class="openwallet" data-index="${t}"><span>${T(e.index)}</span><code><span class="bal">${W(l[t])} SOL</span>${c[t].map(e=>`<br><small>${nx(e)?`🎯 `:``}${Q(Ub(e))}: ${SS(e.mint,e.amount)}${nx(e)?` in auto-sell`:``}</small>`).join(``)}<br><a href="#" class="acct" data-address="${e.address}">view on Solscan</a></code></li>`}).join(``)}</ul>
    ${w.length<a.length?`<p class="muted">${a.length-w.length} empty wallets not shown.</p>`:``}
    ${s?`<p class="muted">${s} junk coin${s===1?``:`s`} hidden: ads strangers send to active wallets. They're worthless; don't visit the websites in their names.</p>`:``}
    <p class="muted" id="noLive"></p>
    ${E.length?`<button id="sellAll" class="danger">Sell all coins</button>`:``}
    ${S?`<button id="autoSells" class="gold">🎯 Auto-sells · ${S} placed</button>`:``}
    <button id="refresh" class="primary">Refresh</button>
    <button id="home">Back to my wallets</button>`,r===`quiet`),r===`quiet`&&window.scrollTo(0,re),S&&X(`autoSells`,()=>kx().catch($)),E.length&&X(`sellAll`,()=>sS(100,!1,null).catch($)),document.querySelectorAll(`.acct`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),Mn($h(e.dataset.address))})),X(`refresh`,()=>{pv(),sx=!0,ux().catch($)}),X(`home`,Z),document.querySelectorAll(`.openwallet`).forEach(e=>e.addEventListener(`click`,t=>{t.target.closest(`button, a, .solamt, .coinamt`)||(F(),dy(a[Number(e.dataset.index)]).catch($))})),Vo([Vu,...E.map(e=>e.coin.mint).filter(e=>!Gb.has(e))]),Y(`solRow`).addEventListener(`click`,e=>{e.target.closest(`.solamt`)||(F(),mx(C,O).catch($))}),document.querySelectorAll(`.coins li[data-mint]`).forEach(e=>e.addEventListener(`click`,()=>{let t=u.get(e.dataset.mint);F(),hx({mint:t.coin.mint,label:Ub(t.coin),short:t.coin.symbol||t.coin.name||`?`,logo:t.coin.logo,amount:t.amount,raw:d(t),wallets:t.wallets.map(T).join(`, `),holders:v(t.coin.mint),decimals:t.coin.decimals??0,inOrders:t.inOrders,value:p.get(t.coin.mint)??null}).catch($)})),mr(),document.querySelectorAll(`.tk`).forEach((e,t)=>{let n=Number(e.dataset.to),r=e.dataset.kind===`usd`;fr(e,n,r?Hb:pb,{ms:1100,delay:Math.min(t,12)*70,final:r?ee(n):W(n)})});let ie=Y(`holdSync`),ae=()=>ie.isConnected;jx([...u],3,async([e,t])=>{if(Gb.has(e)||!Zb(o[e])||cx.has(e)||!ae())return;cx.add(e);let n=await Qb(e,v(e),t.coin.decimals??0).catch(()=>null).finally(()=>cx.delete(e));n&&(o[e]=n)}).catch(()=>{});let A=e=>{let t=document.getElementById(`live`);e&&t&&(t.classList.remove(`beat`),t.offsetWidth,t.classList.add(`beat`));let n=0;for(let[e,t]of u){n+=t.usd??0;let r=document.querySelector(`li[data-mint="${e}"]`);if(!r||t.usd===null)continue;let i=r.querySelector(`.right`),a=i.querySelector(`.val`),o=ee(t.usd);a.textContent!==o&&(a.textContent=o,i.classList.remove(`bump`),i.offsetWidth,i.classList.add(`bump`));let s=y(e);i.classList.toggle(`up`,!!s&&s.pct>0),i.classList.toggle(`down`,!!s&&s.pct<0),i.querySelector(`.move`).textContent=b(s)}let r=document.getElementById(`usdTotal`);r&&n>0&&(r.textContent=ee(n)),Y(`noLive`).textContent=m?`${m===1?`1 coin has`:`${m} coins have`} no live sell price right now, so ${m===1?`its`:`their`} value may lag.`:``};K&&u.size&&(async()=>{if(r!==`fresh`){if(await g(),!ae())return;A(!1)}r!==`quiet`&&await new Promise(e=>setTimeout(e,1200));for(let e=0;ae();e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),ae()&&!document.hidden){if(await _(),!ae())return;A(!0)}})().catch(()=>{})}async function mx(e,t){q(`solchart`,()=>mx(e,t));let n=t=>t?` · ${Hb(e/U*t)}`:``;J(`
    <div class="coinhead"><div class="av sol"><b>◎</b></div><div><b>Solana (SOL)</b><small>${W(e)} SOL · in ${t} wallet${t===1?``:`s`}</small></div><span id="live" class="live">LIVE</span></div>
    ${su()}
    <div class="avail"><small>Worth now</small><span id="worth">${W(e)} SOL${n(bS)}</span></div>
    <button id="back">Back to holdings</button>`),X(`back`,()=>Tv());let r=uu(Vu,`SOL`),i=Y(`live`);for(let t=0;i.isConnected;t++){if(t&&await new Promise(e=>setTimeout(e,1e4)),!i.isConnected)return;if(document.hidden)continue;let a=await hv(!0).catch(()=>null);if(!i.isConnected)return;a&&(kS(a),r.live(a),Y(`worth`).textContent=`${W(e)} SOL${n(a)}`,i.classList.remove(`beat`),i.offsetWidth,i.classList.add(`beat`))}}async function hx(e){if(q(`coin:${e.mint}:${e.only?.join(`,`)??``}`,()=>hx(e)),!K)return ux();let t=Promise.all([pd(K,e.mint,e.raw),hv()]);t.catch(()=>{});let[n,r]=await Promise.all([dx(),vx()]),i=Gb.has(e.mint)?void 0:n[e.mint],a=!Gb.has(e.mint)&&Zb(i),o=i&&Jb(i)?i:null,s=null,c=e.value??null,l=bS,u=!0,d=()=>{let t=o?Yb(o,l):null;s=t?Math.round(t/Number(BigInt(o.raw))*Number(e.raw)):null};d();let f=t,p=null,m=async()=>{let[t,n]=await(f??Promise.all([pd(K,e.mint,e.raw,!0),hv(!0)])).catch(()=>[null,null]);f=null,u=!1,t!==null&&(c=t),n!==null&&(l=n),kS(n),d(),c!==null&&l&&e.amount>0&&(CS(e.mint,c/U*l/e.amount),p?.live(c/U*l/e.amount)),g()},h=[],g=()=>{if(!p)return;let t=(e,t)=>l&&t>0?e/U*l/t:null,n=new Set,i=r.filter(t=>t.mint===e.mint&&!n.has(t.x)&&n.add(t.x)).map(n=>({usd:t(Number(n.taking),Number(n.making)/10**e.decimals),label:`🎯 ${Sx(n.x)}`})).filter(e=>e.usd!==null&&e.usd>0);p.marks({trades:h,paid:s?t(s,e.amount):null,targets:i})},_=()=>s&&c&&c>s?Math.min(100,Math.ceil(s/c*1e4)/100):null,v=e=>String(Math.round(e*100)/100),y=e=>l?` · ${b(e/U*l)}`:``,b=e=>e<.01?`$${e.toFixed(4)}`:Hb(e),x=r.filter(t=>t.mint===e.mint).length,S=``,C=!1;J(`
    <div class="coinhead">${pr(e.short,e.logo)}<div><b>${Q(e.label)}</b><small>${SS(e.mint,e.amount,` coins`)} · in ${Q(e.wallets)}</small></div><span id="live" class="live">LIVE</span></div>
    ${Gb.has(e.mint)?``:su()}
    <div class="avail"><small>Worth now</small><span id="worth"></span></div>
    <div class="avail"><small id="paidLabel"></small><span class="paid" id="paidText"></span></div>
    <div class="avail pl" id="plRow"><small>Profit</small><span id="pl"></span></div>
    ${e.inOrders?`<p class="muted initnote">🎯 ${SS(e.mint,e.inOrders)} of these wait in auto-sell orders. Selling here only sells the rest; cancel the order first to sell those.</p>`:``}
    <div class="total amountbox">
      <div class="amount"><span class="num" id="amt">0</span><span class="unit">%</span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1" value="0">
    <div class="ticks"><span>0</span><span>50%</span><span>ALL</span></div>
    <div class="chips"><button type="button" data-p="25">25%</button><button type="button" data-p="50">50%</button><button type="button" data-p="75">75%</button><button type="button" data-p="100">MAX</button></div>
    <div id="initialBox"></div>
    ${zv(`dot`)}
    <button id="go" class="danger go"></button>
    <div id="autoBox"></div>
    <button id="buyMore" class="primary">⚡ Buy more</button>
    <button id="back">${e.only?`Back to the wallet`:`Back to holdings`}</button>`),mr();let w=()=>Math.min(100,Number(S)||0),T=()=>{Y(`worth`).textContent=c===null?u?`…`:`no live price`:`${W(c)} SOL${y(c)}`,Y(`paidLabel`).textContent=`You paid${i?.chain?` · on-chain`:``}`,Y(`paidText`).textContent=o?Xb(o,e.raw):a?`looking it up…`:`—`;let t=Y(`autoBox`),n=!!o&&!Gb.has(e.mint);n!==!!t.firstElementChild&&(t.innerHTML=n?`<button id="auto" class="gold">🎯 Auto-sell${x?` · ${x} waiting`:``}</button>`:``,n&&X(`auto`,()=>Ex(e,o).catch($)));let r=Y(`plRow`);if(r.hidden=!(s&&c!==null),s&&c!==null){let e=c-s,t=e/s*100;r.classList.toggle(`up`,e>0),r.classList.toggle(`down`,e<0),Y(`pl`).textContent=`${e>=0?`▲ +`:`▼ −`}${W(Math.abs(e))} SOL (${Math.abs(t)>=100?Math.round(Math.abs(t)):Math.abs(t).toFixed(1)}%)`}let l=_();Y(`initialBox`).innerHTML=i?.out?`<p class="muted initnote">✓ Initial investment already taken out. The rest is riding free.</p>`:l===null?`<p class="muted initnote">${Gb.has(e.mint)?`A stablecoin is always worth about $1, so there's no profit to take here.`:s?`💰 Sell initial investment shows up once this coin is worth more than you paid.`:a?`Looking up what you paid for this coin in your wallet's trade history…`:i?.checked?`Couldn't find what you paid for this coin in your wallet's trade history, so Sell initial investment isn't available.`:`Couldn't read your wallet's trade history right now, so Sell initial investment isn't available yet.`}</p>`:`<button id="initial" class="gold">💰 Sell initial investment · ${v(l)}%</button>`,l!==null&&!i?.out&&X(`initial`,()=>{F(),C=!0,E()})},E=(t=!1)=>{let n=_();C&&n!==null&&(S=v(n));let r=w();Y(`amt`).textContent=S||`0`,t||(Y(`slider`).value=String(Math.round(r*10)));let i=c===null?null:Math.round(c*r/100);Y(`amtNote`).textContent=r?C&&n!==null?`gets back the ${o?Xb(o,e.raw):`${W(s)} SOL`} you paid · ${v(100-r)}% keeps riding`:i===null?`${Vb(e.amount*r/100)} coins`:`≈ ${W(i)} SOL${y(i)} · ${Vb(e.amount*r/100)} coins`:`Type a % or drag the slider`,document.querySelector(`#initial`)?.classList.toggle(`on`,C);let a=Y(`go`);a.disabled=!r,a.textContent=r?`Sell ${r===100?`all of it`:`${S}%`}`:`Sell`},D=()=>C=!1;Bv(e=>{if(D(),e===`back`)S=S.slice(0,-1);else if(e===`dot`)S=S.includes(`.`)?S:(S||`0`)+`.`;else if(/\d/.test(e)){let[,t]=S.split(`.`);if(t!==void 0&&t.length>=2)return;let n=S===`0`?e:S+e;S=Number(n)>100?`100`:n}E()}),Y(`slider`).addEventListener(`input`,()=>{D();let e=Number(Y(`slider`).value);S=e?v(e/10):``,E(!0)}),document.querySelectorAll(`.chips button`).forEach(e=>e.addEventListener(`click`,()=>{F(),D(),S=e.dataset.p,E()})),X(`go`,()=>{let t=w();if(!t)return;let n=C&&_()!==null,r=n?async()=>{let t=JSON.parse(await P.get(K_)||`{}`);t[e.mint]&&(t[e.mint].out=!0),await P.set(K_,JSON.stringify(t))}:void 0,i=(t,n)=>Wx(e.label,Math.round(t*100)/100,!1,e.only??null,{mint:e.mint,label:e.label},r,n).catch($);if(!e.inOrders)return i(t,!1);let a=Math.max(0,e.amount-e.inOrders),o=n?Math.min(100,t*e.amount/(a||1)):t,s=t=>{let n=c===null||!e.amount?null:Math.round(c*t/e.amount);return n===null?``:` ≈ <span class="solamt" data-sol="${n/U}">${W(n)} SOL</span>${y(n)}`},l=a*o/100,u=e.amount*t/100;F(),J(`
      <h1>Sell ${Q(e.label)}</h1>
      <p>🎯 ${SS(e.mint,e.inOrders)} of your ${SS(e.mint,e.amount)} coins are locked in auto-sell orders.</p>
      ${a>0?`<button id="freeOnly" class="primary">Sell only the free coins<br><small>${SS(e.mint,l)} coins (${v(o)}% of ${SS(e.mint,a)})${s(l)}</small></button>`:`<p class="muted">All of it is in auto-sell orders, so there are no free coins to sell.</p>`}
      <button id="withOrders" class="danger">Sell from all coins, including the locked ones<br><small>${SS(e.mint,u)} coins (${v(t)}% of ${SS(e.mint,e.amount)})${s(u)} · cancels the auto-sell orders first</small></button>
      <button id="back">Back</button>`),a>0&&X(`freeOnly`,()=>i(o,!1)),X(`withOrders`,()=>i(t,!0)),X(`back`,()=>hx(e).catch($))}),X(`buyMore`,()=>jb(e.mint,null).catch($)),X(`back`,()=>e.only?Tv():ux().catch($)),T(),E();let O=Y(`live`);if(!Gb.has(e.mint)){p=uu(e.mint,e.label),c!==null&&l&&e.amount>0&&p.live(c/U*l/e.amount),g();let t=e.holders.map(e=>e.address),n=cg(t);Promise.all(t.map((e,t)=>vy(e,n.then(e=>e[t])).catch(()=>[]))).then(t=>{h=t.flat().filter(t=>t.mint===e.mint).map(e=>({at:e.at,side:e.side})),O.isConnected&&g()}).catch(()=>{})}a&&Qb(e.mint,e.holders,e.decimals).catch(()=>null).then(e=>{e&&(i=e),o=i&&Jb(i)?i:null,a=!1,d(),O.isConnected&&(T(),E())}),(async()=>{for(let e=0;O.isConnected;e++)if(e&&await new Promise(e=>setTimeout(e,5e3)),O.isConnected&&!document.hidden){if(await m(),!O.isConnected)return;O.classList.remove(`beat`),O.offsetWidth,O.classList.add(`beat`),T(),E()}})().catch(()=>{})}var gx=`autoSells`,_x=5;async function vx(){return JSON.parse(await P.get(gx).catch(()=>null)||`[]`)}var yx=e=>P.set(gx,JSON.stringify(e)),bx=Promise.resolve();function xx(e){let t=bx.then(async()=>yx(e(await vx())));return bx=t.catch(()=>{}),t}var Sx=e=>`${Math.round(e*100)/100}x`,Cx=e=>`+${Math.round((e-1)*1e4)/100}%`,wx=e=>{let t=1+24*(e/1e3)**2;return t<10?Math.round(t*10)/10:Math.round(t)},Tx=e=>Math.round(Math.sqrt(Math.min(1,Math.max(0,(e-1)/24)))*1e3);async function Ex(e,t){q(`autoSell:${e.mint}`,()=>Ex(e,t));let n=await ay();if(!n)return Z();Av(`Checking which wallets hold it…`);let r=new Set(e.holders.map(e=>e.address)),i=n.filter(e=>r.has(e.address)),a=e.raw-BigInt(Math.round((e.inOrders??0)*10**e.decimals)),o=a>0n?Promise.all([pd(K,e.mint,a),hv()]):null;o?.catch(()=>{});let s=await ug(i.map(e=>e.address),e.mint,await n_(e.mint)),c=i.map((e,t)=>({wallet:e,held:s.raw[t]})).filter(e=>e.held>0n),l=c.reduce((e,t)=>e+t.held,0n);if(!l)return hx(e);let u=null,d=null,f=!0,p=async()=>{let t=!f,n=f&&o&&(a===l||Number(a>l?a-l:l-a)/Number(l)<.001);f=!1;let[r,i]=await(n?o.then(([e,t])=>[e===null?null:Math.round(e*Number(l)/Number(a)),t]):Promise.all([pd(K,e.mint,l,t),hv(t)]));r!==null&&(u=r),i!==null&&(d=i)};await p();let m=()=>{let e=Yb(t,d);return e?e/Number(BigInt(t.raw)):null},h=()=>u!==null&&m()?u/(m()*Number(l)):null,g=(await vx()).filter(t=>t.mint===e.mint),_=t.out?`all`:`initial`,v=`x`,y=2,b=`2`,x=e=>e===0?`Main`:`#${e}`,S=e=>d?e/U*d:null,C=()=>{let e=m();return!e||y<=1?[]:c.map(t=>{let n=_===`all`?t.held:t.held*10000n/BigInt(Math.round(y*1e4)),r=BigInt(Math.ceil(Number(n)*e*y)),i=u===null?null:u*Number(n)/Number(l);return{wallet:t.wallet,held:t.held,making:n,taking:r,usdNow:i===null?null:S(i)}})},w=e=>e.usdNow===null||e.usdNow>=_x;J(`
    <div class="coinhead">${pr(e.short,e.logo)}<div><b>Auto-sell ${Q(e.label)}</b><small>You paid ${Xb(t,l)} · now <span id="nowX"></span></small></div></div>
    <div class="seg" id="kindSeg"><button type="button" data-v="initial">💰 Sell initial</button><button type="button" data-v="all">Sell all</button></div>
    <div class="seg small" id="unitSeg"><button type="button" data-v="x">Multiplier ×</button><button type="button" data-v="pct">Percentage %</button></div>
    <div class="total amountbox">
      <small id="when">when it reaches</small>
      <div class="amount"><span class="num" id="amt"></span><span class="unit" id="unit"></span><div class="usd" id="amtNote"></div></div>
    </div>
    <input id="slider" class="slider" type="range" min="0" max="1000" step="1">
    <div class="ticks" id="ticks"></div>
    ${zv(`dot`)}
    <ul class="list" id="plan"></ul>
    <p class="muted" id="planNote"></p>
    <button id="go" class="gold go">Set auto-sell</button>
    <div id="existing"></div>
    <p class="muted">The coins in an order wait in Jupiter's on-chain order account, so they leave your holdings until it sells or you cancel it. This only sells on the way up; it can't stop a loss.</p>
    <button id="back">Back to ${Q(e.short)}</button>`),mr();let T=()=>{Y(`existing`).innerHTML=g.length?`<h2>Waiting orders for this coin</h2><ul class="list">${g.map(e=>`<li><span>${x(e.index)}</span><code>${e.kind===`initial`?`💰 initial`:`all`} at ${Sx(e.x)} → ${W(Number(e.taking))} SOL</code></li>`).join(``)}</ul><button id="manage">See or cancel auto-sells</button>`:``,g.length&&X(`manage`,()=>kx().catch($))},E=(t=!1)=>{document.querySelectorAll(`#kindSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===_)),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===v)),Y(`amt`).textContent=b||`0`,Y(`unit`).textContent=v===`x`?`x`:`%`,Y(`ticks`).innerHTML=v===`x`?`<span>1x</span><span>7x</span><span>25x</span>`:`<span>+0%</span><span>+600%</span><span>+2400%</span>`,t||(Y(`slider`).value=String(Tx(y)));let n=h();Y(`nowX`).textContent=n===null?`no live price`:`${Sx(n)} (${n>=1?`▲ +`:`▼ −`}${Math.abs(Math.round((n-1)*1e3)/10)}%)`;let r=m(),i=C(),a=i.filter(w),o=Y(`go`),s=``,c=``;r?y<=1?c=_===`initial`?`Pick more than 1x: at 1x getting back what you paid means selling all of it.`:`Pick more than 1x.`:n!==null&&y<=n&&(c=`That's below today's price (${Sx(n)}), so it would sell straight away. Use Sell on the coin screen for that.`):c=`Can't work out today's price of what you paid.`;let l=_===`all`?100:Math.round(1e4/y)/100,u=i.reduce((e,t)=>e+Number(t.taking),0),d=S(u);Y(`amtNote`).textContent=c?``:`${v===`x`?Cx(y):Sx(y)} · sells ${_===`all`?`all of it`:`${l}%`} for ≈ ${W(u)} SOL${d?` · ${Hb(d)}`:``}${_===`initial`?` · ${Math.round((100-l)*100)/100}% keeps riding`:``}`,Y(`plan`).innerHTML=c?``:i.map(t=>`<li><span>${x(t.wallet.index)}</span><code>${w(t)?`sell ${zx(t.making,e.decimals)} for ${W(Number(t.taking))} SOL`:`<span class="error">skipped: worth ${Hb(t.usdNow)} now, under Jupiter's $${_x} minimum</span>`}</code></li>`).join(``),!c&&!a.length?s=`Every wallet's order would be under Jupiter's $${_x} minimum (worth now). Gather the coins in fewer wallets, or pick Sell all.`:!c&&a.length<i.length&&(s=`Jupiter only takes orders worth at least $${_x} right now, so ${i.length-a.length} wallet${i.length-a.length===1?` is`:`s are`} skipped.`),Y(`planNote`).textContent=c||s,Y(`planNote`).classList.toggle(`error`,!!c),o.disabled=!!c||!a.length,o.textContent=c||!a.length?`Set auto-sell`:`Set auto-sell in ${a.length} wallet${a.length===1?``:`s`}`},D=()=>{let e=Number(b)||0;y=v===`x`?e:1+e/100},O=()=>{b=String(v===`x`?Math.round(y*100)/100:Math.round((y-1)*1e4)/100)};document.querySelectorAll(`#kindSeg button`).forEach(e=>e.addEventListener(`click`,()=>{F(),_=e.dataset.v,E()})),document.querySelectorAll(`#unitSeg button`).forEach(e=>e.addEventListener(`click`,()=>{F(),v=e.dataset.v,O(),E()})),Bv(e=>{if(e===`back`)b=b.slice(0,-1);else if(e===`dot`)b=b.includes(`.`)?b:(b||`0`)+`.`;else if(/\d/.test(e)){let[,t]=b.split(`.`);if(t!==void 0&&t.length>=2||b.replace(`.`,``).length>=7)return;b=b===`0`?e:b+e}D(),E()}),Y(`slider`).addEventListener(`input`,()=>{y=wx(Number(Y(`slider`).value)),O(),E(!0)}),X(`back`,()=>hx(e).catch($)),X(`go`,()=>{let t=C().filter(w);if(!t.length)return;let n={kind:_,x:y};Kv(`Enter your PIN to set the auto-sell`,r=>Dx(r,e,t,n).catch($))}),T(),E();let k=Y(`nowX`);(async()=>{for(;k.isConnected;)await new Promise(e=>setTimeout(e,5e3)),k.isConnected&&!document.hidden&&(await p(),k.isConnected&&E())})().catch(()=>{})}async function Dx(e,t,n,r){pv();let i=ey(e,Math.max(...n.map(e=>e.wallet.index))+1),a=e=>e===0?`Main`:`#${e}`;J(`
    <h1>Setting auto-sell…</h1>
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${a(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let o=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,s=0;await jx(n,Ib,async e=>{let n=Y(`status-${e.wallet.index}`);try{n.textContent=`placing the order…`;let a=Lb(e.wallet.address),c=await _d(K,e.wallet.address,t.mint,e.making,e.taking);if(!c.transaction)throw Error(`Jupiter didn't send an order to sign.`);let l=await yd(K,await Fb(ud(c.transaction),i[e.wallet.index],{sol:Nb,mint:t.mint,coins:e.making},a),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter's order didn't go through (code ${l.code}).`);s++,await xx(n=>[...n,{order:c.order??``,wallet:e.wallet.address,index:e.wallet.index,mint:t.mint,label:t.label,kind:r.kind,x:r.x,making:e.making.toString(),taking:e.taking.toString(),at:Date.now()}]),n.innerHTML=`✓ sells ${zx(e.making,t.decimals)} at ${Sx(r.x)} for ${W(Number(e.taking))} SOL · ${o(l.signature,`view`)}`}catch(e){n.innerHTML=`<span class="error">✗ ${Q(Ox(e))}</span>`}}),Kg(n.map(e=>e.wallet.address)).catch(()=>{}),i.forEach(e=>e.secret.fill(0)),An(s?`success`:`error`),Y(`after`).innerHTML=`<p><b>Done: auto-sell set in ${s} of ${n.length} wallets.</b>${s?` It sells when ${Q(t.label)} reaches ${Sx(r.x)} what you paid.`:``}</p>
    <button id="list" class="primary">See my auto-sells</button>
    <button id="holdings">See my holdings</button>`,uS(),X(`list`,()=>kx().catch($)),X(`holdings`,()=>ux().catch($))}function Ox(e){let t=Mb(e);return/at least 5 USD/i.test(t)?`worth under $${_x} right now (Jupiter's minimum)`:/insufficient|lamports|rent/i.test(t)?`not enough SOL in this wallet for the order's fee and deposit (~0.003 SOL)`:t}async function kx(){if(q(`autoSells`,kx),!K)return ux();let e=await vx(),t=e=>e===0?`Main`:`#${e}`;if(!e.length)return J(`
      <h1>Auto-sells</h1>
      <p class="muted">No auto-sells yet. Tap a coin in your holdings, then 🎯 Auto-sell.</p>
      <button id="holdings" class="primary">See my holdings</button>`),X(`holdings`,()=>ux().catch($));Av(`Checking your orders on Jupiter…`);let n=[...new Set(e.map(e=>e.wallet))],r=new Map,i=new Map,a=!1;await Promise.all(n.map(async t=>{try{for(let e of await bd(K,t,`active`))r.set(e.orderKey,e);if(e.some(e=>e.wallet===t&&!r.has(e.order)))for(let e of await bd(K,t,`history`))i.set(e.orderKey,e)}catch{a=!0}}));let o=JSON.parse(await P.get(K_).catch(()=>null)||`{}`),s=!1,c=e=>{if(r.has(e.order))return`waiting`;let t=i.get(e.order);return t?/complete|fill/i.test(t.status)?`sold`:`cancelled`:`unknown`};for(let t of e)t.kind===`initial`&&c(t)===`sold`&&o[t.mint]&&!o[t.mint].out&&(o[t.mint].out=!0,s=!0);s&&await P.set(K_,JSON.stringify(o)),a||await yx(e.filter(e=>[`waiting`,`unknown`].includes(c(e))));let l=e.filter(e=>c(e)===`waiting`),u=e=>({waiting:`waiting`,sold:`✓ sold`,cancelled:`cancelled`,unknown:a?`couldn't check`:`not found on Jupiter`})[c(e)];J(`
    <h1>Auto-sells</h1>
    <ul class="list">${e.map((e,n)=>`<li><span>${t(e.index)}</span><code><b>${Q(e.label)}</b> · ${e.kind===`initial`?`💰 sell initial`:`sell all`} at ${Sx(e.x)}<br><small>${W(Number(e.taking))} SOL · ${u(e)}</small>${c(e)===`waiting`?`<br><button type="button" class="cancel small" data-i="${n}">Cancel</button>`:``}</code></li>`).join(``)}</ul>
    ${a?`<p class="error">Couldn't reach Jupiter for every wallet. Try Refresh.</p>`:``}
    ${l.length>1?`<button id="cancelAll" class="danger">Cancel all ${l.length}</button>`:``}
    <p class="muted">Cancelling gives the coins back to the wallet.</p>
    <button id="refresh" class="primary">Refresh</button>
    <button id="holdings">See my holdings</button>`),X(`refresh`,()=>kx().catch($)),X(`holdings`,()=>ux().catch($)),document.querySelectorAll(`button.cancel`).forEach(t=>t.addEventListener(`click`,()=>{let n=e[Number(t.dataset.i)];Kv(`Enter your PIN to cancel`,e=>Ax(e,[n]).catch($))})),l.length>1&&X(`cancelAll`,()=>Kv(`Enter your PIN to cancel them all`,e=>Ax(e,l).catch($)))}async function Ax(e,t){pv();let n=ey(e,Math.max(...t.map(e=>e.index))+1),r=e=>e===0?`Main`:`#${e}`;J(`
    <h1>Cancelling…</h1>
    <ul class="list">${t.map((e,t)=>`<li><span>${r(e.index)}</span><code id="status-${t}">${Q(e.label)} · waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`);let i=0,a=new Set,o=new Map;t.forEach((e,t)=>o.set(e.wallet,[...o.get(e.wallet)??[],t])),await jx([...o.values()],Ib,async e=>{for(let[r,o]of e.entries()){let e=t[o],s=Y(`status-${o}`);try{s.textContent=`cancelling…`;let t=n[e.index];if(t.address!==e.wallet)throw Error(`this wallet's number changed; cancel it on jup.ag instead`);let o=r===0?Lb(e.wallet):void 0,c=await vd(K,e.wallet,e.order),l=await yd(K,await Fb(ud(c.transaction),t,{sol:Nb},o),c.requestId);if(l.status!==`Success`)throw Error(l.error??`Jupiter didn't cancel it (code ${l.code}).`);i++,a.add(e.order),s.innerHTML=`✓ cancelled, coins back in the wallet · <a href="#" class="tx" data-sig="${l.signature}">view</a>`}catch(e){s.innerHTML=`<span class="error">✗ ${Q(Mb(e))}</span>`}}}),Kg([...o.keys()]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),a.size&&await xx(e=>e.filter(e=>!a.has(e.order))),An(i?`success`:`error`),Y(`after`).innerHTML=`<p><b>Cancelled ${i} of ${t.length}.</b></p><button id="list" class="primary">See my auto-sells</button>`,uS(),X(`list`,()=>kx().catch($))}async function jx(e,t,n){let r=Array(e.length),i=0;return await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;i<e.length;){let t=i++;r[t]=await n(e[t],t)}})),r}var Mx=12;function Nx(e,t,n,r){if(e<5e3)return null;let i=t.filter(e=>e.raw===0n).slice(0,Mx),a=i.reduce((e,t)=>e+t.lamports,0),o=t.some(e=>e.raw>0n&&!r?.has(e.mint))?hb:0,s=n?Math.max(0,e+a-Vm-o):0;return!i.length&&!s||!i.length&&s<5e4?null:{close:i,refund:a,keep:o,send:s}}async function Px(e,t,n){let r=await Jh(bh(e,[...n.close.map(t=>Ch(t,e.address,e.address)),...n.send>0?[Sh(e.address,t.address,n.send)]:[]],await Wh())),i=await Zh(r);if(i!==`confirmed`)throw Error(`${i===`failed`?`failed`:`is taking long`} (${r})`);return r}function Fx(e){let[t,...n]=[e.send?`sends ${W(e.send)} SOL to main`:``,e.close.length?`gets back ${W(e.refund)} SOL in deposits from ${e.close.length} empty coin account${e.close.length===1?``:`s`}`:``,e.keep?`keeps ${W(e.keep)} SOL to sell its coins later`:``].filter(Boolean);return t+(n.length?`<br><small>${n.join(`<br>`)}</small>`:``)}async function Ix(){q(`sweep`,Ix);let e=await ay();if(!e)return Z();let[t,...n]=e;Av(`Checking your side wallets…`);let r=await Xg(n.map(e=>e.address)),i=n.map((e,t)=>({wallet:e,plan:Nx(r[t].lamports,r[t].accounts,!0)})).filter(e=>e.plan!==null),a=i.reduce((e,t)=>e+t.plan.send,0);J(`
    <h1>Send side-wallet SOL to main</h1>
    ${i.length?`<ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code>${Fx(e.plan)}</code></li>`).join(``)}</ul>
           <p><b>Total to main: ${W(a)} SOL</b></p>
           <p class="muted">Empty coin accounts are closed so their deposits come back too.</p>
           <button id="go" class="primary">Enter PIN and send</button>`:`<p class="muted">There's no SOL to send back right now. Side wallets that hold coins keep ${W(hb)} SOL so they can sell them later.</p>`}
    <button id="cancel">Back to my wallets</button>`),X(`cancel`,Z),i.length&&X(`go`,()=>Kv(`Enter your PIN to send`,async e=>{let n=ey(e,Math.max(...i.map(e=>e.wallet.index))+1);J(`
        <h1>Sending to main…</h1>
    ${_n()}
        <ul class="list">${i.map(e=>`<li><span>#${e.wallet.index}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
        <div id="after"></div>`),bv();let r=0;await jx(i,Ib,async e=>{let i=Y(`status-${e.wallet.index}`);try{i.textContent=`sending…`;let a=await Px(n[e.wallet.index],t,e.plan);r++,i.innerHTML=`✓ ${e.plan.send?`sent ${W(e.plan.send)} SOL`:`got back ${W(e.plan.refund)} SOL`} · <a href="#" class="tx" data-sig="${a}">view</a>`}catch(e){i.innerHTML=`<span class="error">✗ ${Q(Mb(e))}</span>`}}),Kg([t.address,...i.map(e=>e.wallet.address)]).catch(()=>{}),n.forEach(e=>e.secret.fill(0)),An(r?`success`:`error`),r&&await lr(`MERGED`),Y(`after`).innerHTML=`<p><b>Done: ${r} of ${i.length} wallets.</b></p><button id="home" class="primary">Back to my wallets</button>`,uS(),X(`home`,Z)}))}var Lx=e=>/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(e);function Rx(e,t){let n=e.toString().padStart(t+1,`0`),r=n.slice(0,n.length-t),i=n.slice(n.length-t).replace(/0+$/,``);return i?`${r}.${i}`:r}var zx=(e,t)=>Vb(Number(Rx(e,t)));async function Bx(e,t){if(Lx(e)){let t=await t_(e);return[{mint:e,label:t?.name?`${t.name}${t.symbol?` (${t.symbol})`:``}`:await uh(e)??Ev(e)}]}let n=e=>(e??``).toLowerCase().replace(/[^a-z0-9]/g,``),r=n(e),i=async e=>{if(!e)return[];let t=(await Promise.all(e.map(e=>$g(e)))).flat().filter(e=>!Wb(e)),i=e=>{let n=new Map;for(let r of t)e(r)&&n.set(r.mint,Ub(r));return[...n].map(([e,t])=>({mint:e,label:t}))},a=i(e=>n(e.symbol)===r||n(e.name)===r);return a.length||r.length<3?a:i(e=>n(e.symbol).startsWith(r)||n(e.name).startsWith(r))},a=t.map(e=>e.address),o=await i(await Gg(a));return o.length?o:i(await Xg(a))}async function Vx(e,t){let n=new Set((await vx()).map(e=>e.wallet)),r=e.filter(e=>n.has(e.address)),i=await Promise.all(r.map(e=>bd(K,e.address,`active`).catch(()=>[])));return r.flatMap((e,n)=>i[n].filter(e=>e.inputMint===t).map(t=>({wallet:e.address,order:t.orderKey,raw:BigInt(t.rawRemainingMakingAmount||t.rawMakingAmount||`0`)})))}async function Hx(e,t,n){let r=async()=>(await Hh(e.address,t)).reduce((e,t)=>e+t.raw,0n),i=await r();for(let t of n){let n=await vd(K,e.address,t.order),r=await yd(K,await Fb(ud(n.transaction),e,{sol:Nb}),n.requestId);if(r.status!==`Success`)throw Error(r.error??`Jupiter didn't cancel the auto-sell order (code ${r.code}).`)}let a=i+n.reduce((e,t)=>e+t.raw,0n);for(let e=0;e<20;e++){let e=await r();if(e>=a)return e;await new Promise(e=>setTimeout(e,500))}return r()}var Ux=5e4;async function Wx(e,t,n,r,i,a,o=!1){if(q(`sell:${i?.mint??e}:${r?.join(`,`)??``}`,()=>Wx(e,t,n,r,i,a,o)),!K)return J(`
      <h1>Open this from the bot</h1>
      <p>To sell, send <b>sell &lt;coin name or address&gt;</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),X(`home`,Z);let s=await ay();if(!s)return Z();let[c]=s,l=i,u=e=>n_(e).then(t=>ug(s.map(e=>e.address),e,t)),d=!l&&Lx(e)?u(e):null;if(d?.catch(()=>{}),!l){Av(Lx(e)?`Finding the coin in your wallets…`:`Looking for ${Q(e)} in your wallets…`);let i=await Bx(e,s);if(!i.length)return J(`
        <h1>Coin not found</h1>
        <p>None of your wallets hold a coin called <b>${Q(e)}</b>. Check the name in <b>holdings</b>, or send <b>sell</b> with the coin's address instead.</p>
        <button id="home" class="primary">Back to my wallets</button>`),X(`home`,Z);if(i.length>1)return J(`
        <h1>Which ${Q(e)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${i.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${Ev(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(o=>o.addEventListener(`click`,()=>Wx(e,t,n,r,i[Number(o.dataset.i)],a).catch($))),X(`home`,Z);l=i[0]}Av(`Checking how much each wallet holds…`);let f=l.mint,[p,m]=await Promise.all([d&&f===e?d:u(f),o?Vx(s,f):Promise.resolve([])]),h=e=>m.filter(t=>t.wallet===e).reduce((e,t)=>e+t.raw,0n),g=[],_=[];s.forEach((e,n)=>{if(r&&!r.includes(e.index))return;let i=p.raw[n]+h(e.address);if(i===0n)return void(r&&_.push(e.index));let a=t===100?i:i*BigInt(Math.round(t*100))/10000n,o=p.decimals??0;a>0n&&g.push({wallet:e,balance:p.lamports[n],raw:i,sell:a,decimals:o,orders:m.filter(t=>t.wallet===e.address)})});let v=e=>e===0?`Main`:`#${e}`,y=e=>e.balance>=Ux,b=r?.filter(e=>e>=s.length)??[],x=[_.length?`${_.map(v).join(`, `)} ${_.length===1?`doesn't`:`don't`} hold this coin.`:``,b.length?`You don't have ${b.map(v).join(`, `)}.`:``].filter(Boolean);if(J(`
    <h1>Sell ${Q(l.label)}</h1>
    <div class="card"><div class="label">Coin address</div><div class="address" id="mint"></div></div>
    ${m.length?`<p class="muted">Includes the coins in your auto-sell orders: those orders are cancelled first, then the coins are sold.</p>`:``}
    ${g.length?`<h2>Selling ${t===100?`all of it`:`${t}%`} from <span id="picked"></span></h2>
           <p class="muted">Untick any wallet you want to leave out.</p>
           <ul class="list">${g.map((e,n)=>`<li><label class="pickrow"><input type="checkbox" class="sellbox" data-i="${n}" ${y(e)?`checked`:`disabled`}>
                 <span>${v(e.wallet.index)}</span></label><code>sells <b>${SS(l.mint,Number(Rx(e.sell,e.decimals)))}</b>${t<100?` of ${SS(l.mint,Number(Rx(e.raw,e.decimals)))}`:``}${e.orders?.length?`<br><small>🎯 cancels ${e.orders.length===1?`its auto-sell order`:`${e.orders.length} auto-sell orders`} first</small>`:``}${y(e)?``:`<br><small class="error">not enough SOL to pay the fee, skipped</small>`}</code></li>`).join(``)}</ul>
           ${x.length?`<p class="muted">${x.join(` `)}</p>`:``}
           ${t===100?`<p class="muted">Afterwards each wallet closes its empty ${Q(l.label)} account and gets its ~0.002 SOL deposit back.</p>`:``}
           ${n?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold other coins keep ${W(hb)} SOL to sell those later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Prices can move while the sales go through one by one.</p>
           ${g.some(y)?`<button id="go" class="primary">Enter PIN and sell</button>`:``}`:`<p class="warning">${r?`${x.join(` `)||`Those wallets don't hold this coin.`}`:`None of your wallets hold this coin.`}</p>`}
    <button id="cancel">Cancel</button>`),Y(`mint`).textContent=l.mint,X(`cancel`,Z),g.some(y)){let e=Array.from(document.querySelectorAll(`.sellbox`)),r=()=>e.filter(e=>e.checked).map(e=>g[Number(e.dataset.i)]),i=()=>{let e=r().length;Y(`picked`).textContent=`${e} wallet${e===1?``:`s`}`,Y(`go`).disabled=e===0};e.forEach(e=>e.addEventListener(`change`,i)),i(),X(`go`,()=>{let e=r();e.length&&Kv(`Enter your PIN to sell`,r=>Gx(r,l.mint,c,e,t,n,a))})}}async function Gx(e,t,n,r,i,a,o){let s=ey(e,Math.max(...r.map(e=>e.wallet.index))+1),c=e=>e===0?`Main`:`#${e}`;J(`
    <h1>Selling…</h1>
    ${_n()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${r.map(e=>`<li><span>${c(e.wallet.index)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),bv();let l=(e,t)=>Y(`status-${e}`).innerHTML=t,u=(e,t)=>Y(`status-${e}`).innerHTML+=t,d=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`,f=0,p=0,m=0,h={jupiter:null};await jx(r,Ib,async e=>{let r=s[e.wallet.index];if(e.orders?.length)try{l(e.wallet.index,`cancelling the auto-sell order…`);let n=await Hx(r,t,e.orders),a=new Set(e.orders.map(e=>e.order));if(await xx(e=>e.filter(e=>!a.has(e.order))),e.raw=n,e.sell=i===100?n:n*BigInt(Math.round(i*100))/10000n,e.sell<=0n)throw Error(`the coins didn't come back from the order yet; try again in a moment`)}catch(t){l(e.wallet.index,`<span class="error">✗ ${Q(Mb(t))}</span>`);return}let o=e.orders?.length?void 0:Lb(r.address),c=await oS(e,t,r,i,h,l,d,o);if(c&&f++,i!==100&&!a)return;let g=a&&e.wallet.index!==0;try{let a=0,o=[];for(let n=0;n<5&&([[a],o]=await Promise.all([gh([e.wallet.address]),Hh(e.wallet.address)]),c&&i===100&&!o.every(e=>e.mint!==t||e.raw===0n));n++)await new Promise(e=>setTimeout(e,500));let s=Nx(a,o,g);if(!s)return;u(e.wallet.index,`<br><small>${g?`sending to main…`:`getting the deposit back…`}</small>`);let l=await Px(r,n,s);p+=s.send,m+=s.refund,Y(`status-${e.wallet.index}`).querySelector(`small:last-of-type`).innerHTML=`${s.send?`sent ${W(s.send)} SOL to main`:`got back ${W(s.refund)} SOL deposit`} · ${d(l,`view`)}`}catch(t){u(e.wallet.index,`<br><small class="error">✗ collecting: ${Q(Mb(t))}</small>`)}}),Kg([n.address,...r.map(e=>e.wallet.address)]).catch(()=>{}),s.forEach(e=>e.secret.fill(0)),An(f?`success`:`error`),f&&await lr(`PRINTED`),f&&o&&await o().catch(()=>{}),Y(`after`).innerHTML=`<p><b>Done: sold in ${f} of ${r.length} wallets.</b>${m?` Got back ${W(m)} SOL in deposits.`:``}${p?` Sent ${W(p)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,uS(),X(`holdings`,()=>ux().catch($)),X(`home`,Z)}var Kx=new Map;function qx(e){return Kx.has(e)||Kx.set(e,Mg(e)),Kx.get(e)}var Jx=new Map;function Yx(e){return Jx.has(e)||Jx.set(e,uh(e).then(t=>t?.match(/\(([^)]+)\)$/)?.[1]??t??Ev(e)).catch(()=>Ev(e))),Jx.get(e)}var Xx=[15,30],Zx=21e5,Qx=/custom program error: 0x(179a|1798|1774)\b/;async function $x(e,t){let[n]=await Ph([t]);return Ih(n)}async function eS(e,t,n){for(let r=0;r<20;r++){let r=await $x(e,t);if(r!==n)return r;await new Promise(e=>setTimeout(e,400))}return $x(e,t)}async function tS(e,t,n,r){try{if(await eS(e.address,t,r)!==0n)return;await Jh(bh(e,[zh(t,e.address,e.address,n)],await Wh()))}catch{}}async function nS(e,t,n,r,i,a){let o=Pg(t.address,e,n===`buy`?`coin`:`quote`),s=Pg(t.address,e,n===`buy`?`quote`:`coin`),c=n===`buy`?e.quoteProgram:e.mintProgram,l=async a=>bh(t,[...Ng(t.address,e,n,r,a),...i?[zh(s,t.address,t.address,c)]:[]],await Wh()),u=await $x(t.address,o);for(let e=0;;e++){let n=Xx[e],r=await Fh(await l(1n),[o]);if(r.err){let e=r.logs.filter(e=>/Error|failed/i.test(e)).slice(-1)[0]??JSON.stringify(r.err);throw Error(`pump.fun turned the trade down before it ran (${e}).`)}let i=Ih(r.accounts[0])-u;if(i<=0n)throw Error(`pump.fun's swap would give nothing back.`);let s=i*BigInt(100-n)/100n||1n;try{let e=await Jh(await l(s)),n=await Zh(e);if(n!==`confirmed`)throw Error(`the trade ${n===`failed`?`failed`:`is taking long`} (${e})`);return{signature:e,got:await eS(t.address,o,u)-u}}catch(t){let n=Xx[e+1];if(!(n&&Qx.test(Mb(t))))throw t;a(`price jumped, trying again with ${n}% room…`)}}}async function rS(e,t,n,r){let i=await cd(K,t,n,r.toString(),e.address);if(!i.transaction)throw Error(i.errorMessage??`Jupiter couldn't make that swap.`);let a=t===`So11111111111111111111111111111111111111112`?{sol:Number(r)+Nb}:{sol:Nb,mint:t,coins:r},o=await ld(K,await Fb(ud(i.transaction),e,a),i.requestId);if(o.status!==`Success`)throw Error(o.error??`Jupiter's swap didn't go through (code ${o.code}).`);return{signature:o.signature,out:i.outAmount}}async function iS(e,t,n,r,i){let a=Q(await Yx(e.quote)),o=Pg(t.address,e,`quote`),s=n-Zx;if(s<_b)return r(`<span class="error">✗ too little SOL for this coin: it's priced in ${a}, which needs an extra ~0.002 SOL account</span>`),!1;let c=await $x(t.address,o),l;try{r(`this coin is priced in ${a}: swapping ${W(s)} SOL for ${a}…`),l=(await rS(t,Vu,e.quote,BigInt(s))).signature}catch(e){return r(`<span class="error">✗ couldn't get ${a} to buy with (${Q(Mb(e))}). Nothing was bought.</span>`),!1}let u=await eS(t.address,o,c)-c;if(u<=0n)return r(`<span class="error">✗ the ${a} swap went through but nothing arrived yet · ${i(l,`view`)}</span>`),!1;try{r(`got ${a} · buying the coin on pump.fun…`);let{signature:n}=await nS(e,t,`buy`,u,c===0n,r);return r(`✓ bought with ${W(s)} SOL (via ${a}) · ${i(l,`swap`)} · ${i(n,`buy`)}`),!0}catch(n){let s=Q(Mb(n));try{r(`buy failed, swapping the ${a} back to SOL…`);let n=await rS(t,e.quote,Vu,u);c===0n&&await tS(t,o,e.quoteProgram,u),r(`<span class="error">✗ ${s}</span><br><small>Swapped the ${a} back to SOL${n.out?` (~${W(Number(n.out))} SOL)`:``} · ${i(n.signature,`view`)}</small>`)}catch(e){r(`<span class="error">✗ ${s}</span><br><small class="error">This wallet now holds the ${a} it got (${i(l,`view`)}); swapping it back failed too (${Q(Mb(e))}). Sell it with "sell ${a}".</small>`)}return!1}}async function aS(e,t,n,r,i){let a=Q(await Yx(e.quote)),o=Pg(t.address,e,`quote`),s=await $x(t.address,o),c;try{r(`this coin is priced in ${a}: selling it for ${a} on pump.fun…`),c=await nS(e,t,`sell`,n.sell,!1,r)}catch(e){return r(`<span class="error">✗ ${Q(Mb(e))}</span>`),!1}try{r(`sold for ${a} · swapping the ${a} to SOL…`);let l=await rS(t,e.quote,Vu,c.got);return s===0n&&await tS(t,o,e.quoteProgram,c.got),r(`✓ sold ${zx(n.sell,n.decimals)}${l.out?` for ~${W(Number(l.out))} SOL`:``} (via ${a}) · ${i(c.signature,`sale`)} · ${i(l.signature,`swap`)}`),!0}catch(e){return r(`✓ sold ${zx(n.sell,n.decimals)} for ${a} · ${i(c.signature,`view`)}<br><small class="error">Swapping the ${a} to SOL failed (${Q(Mb(e))}). This wallet holds it now: sell it with "sell ${a}".</small>`),!0}}async function oS(e,t,n,r,i,a,o,s){try{a(e.wallet.index,`selling…`);let c=null;if(!i.jupiter)try{if(c=await cd(K,t,Vu,e.sell.toString(),n.address),!c.transaction)throw Error(c.errorMessage??`Jupiter couldn't find a way to sell this coin.`)}catch(e){i.jupiter=Mb(e),c=null}if(c){let r=await ld(K,await Fb(ud(c.transaction),n,{sol:Nb,mint:t,coins:e.sell},s),c.requestId);if(r.status!==`Success`)throw Error(r.error??`The sale didn't go through (code ${r.code}).`);let i=c.outAmount?` for ~${W(Number(c.outAmount))} SOL`:``;return a(e.wallet.index,`✓ sold ${zx(e.sell,e.decimals)}${i} · ${o(r.signature,`view`)}`),!0}let l=await qx(t);if(l)return await aS(l,n,e,t=>a(e.wallet.index,t),o);a(e.wallet.index,`selling through pump.fun…`);let u=r===100?`100%`:Rx(e.sell,e.decimals),d=await lS(e.wallet.index,a,i.jupiter,e=>wd(n.address,t,u,e),n,()=>({sol:Nb,mint:t,coins:r===100?void 0:e.sell}),s),f=await Zh(d);return f===`confirmed`?(a(e.wallet.index,`✓ sold ${zx(e.sell,e.decimals)} via pump.fun · ${o(d,`view`)}`),!0):(a(e.wallet.index,`<span class="error">✗ sale ${f===`failed`?`failed`:`is taking long`}</span> · ${o(d,`check`)}`),!1)}catch(t){return a(e.wallet.index,`<span class="error">✗ ${Q(Mb(t))}</span>`),!1}}async function sS(e,t,n){if(q(`sellAll:${n?.join(`,`)??``}`,()=>sS(e,t,n)),!K)return J(`
      <h1>Open this from the bot</h1>
      <p>To sell everything, send <b>sell all</b> to the bot and tap the button it sends back.</p>
      <button id="home" class="primary">Go to my wallets</button>`),X(`home`,Z);let r=await ay();if(!r)return Z();let[i]=r,a=r.filter(e=>!n||n.includes(e.index));Av(`Checking every coin in every wallet…`);let o=await Xg(a.map(e=>e.address)),s=o.map(e=>e.lamports),c=o.map(e=>e.accounts),l=await Promise.all(o.map(e=>$g(e))),u=new Map;l.flat().forEach(e=>u.set(e.mint,e));let d=new Map,f=0;a.forEach((t,n)=>{let r=new Map;for(let e of c[n]){if(e.raw===0n)continue;let t=r.get(e.mint)??{raw:0n,decimals:e.decimals};t.raw+=e.raw,r.set(e.mint,t)}for(let[i,{raw:a,decimals:o}]of r){if(i===`So11111111111111111111111111111111111111112`)continue;let r=u.get(i);if(r&&Wb(r)){f++;continue}let c=e===100?a:a*BigInt(Math.round(e*100))/10000n;if(c===0n)continue;let l=d.get(i)??{mint:i,label:r?Ub(r):Ev(i),logo:r?.logo,usd:null,rows:[]};r?.usd!=null&&(l.usd=(l.usd??0)+r.usd),l.rows.push({wallet:t,balance:s[n],raw:a,sell:c,decimals:o}),d.set(i,l)}});let p=[...d.values()].sort((e,t)=>(t.usd??0)-(e.usd??0)),m=e=>e===0?`Main`:`#${e}`,h=e=>e.balance>=Ux,g=e=>e.rows.filter(h);if(J(`
    <h1>Sell all coins</h1>
    ${p.length?`<h2>Selling ${e===100?`everything`:`${e}% of each`} · <span id="picked"></span></h2>
           <p class="muted">Every coin is checked. Untick any you want to keep.</p>
           <ul class="list coins">${p.map((e,t)=>{let n=e.rows.filter(e=>!h(e));return`<li><input type="checkbox" class="coinbox" data-i="${t}" ${g(e).length?`checked`:`disabled`}>${pr(e.label,e.logo)}<div class="grow"><b>${Q(e.label)}</b><small>from ${g(e).map(e=>m(e.wallet.index)).join(`, `)||`no wallet`}${n.length?`</small><small class="error">${n.map(e=>m(e.wallet.index)).join(`, `)}: not enough SOL for the fee, skipped`:``}</small></div><div class="right">${e.usd===null?``:Hb(e.usd)}</div></li>`}).join(``)}</ul>
           ${f?`<p class="muted">${f} junk coin${f===1?``:`s`} left alone: worthless ads strangers send to wallets.</p>`:``}
           ${e===100?`<p class="muted">Afterwards each wallet closes its empty coin accounts and gets their ~0.002 SOL deposits back.</p>`:``}
           ${t?`<p>Then all the SOL in these wallets goes to main. Wallets that still hold coins keep ${W(hb)} SOL to sell them later.</p>`:``}
           <p class="muted">Jupiter charges 0.1% per sale (0.5% for coins under a day old). Coins too new for Jupiter are sold through PumpPortal (0.5%). Sales go through one at a time, so prices can move along the way.</p>
           <button id="go" class="primary">Enter PIN and sell everything</button>`:`<p class="warning">${n?`Those wallets don't hold any coins.`:`Your wallets don't hold any coins to sell.`}</p>`}
    <button id="cancel">Cancel</button>`),mr(),X(`cancel`,Z),!p.length)return;let _=Array.from(document.querySelectorAll(`.coinbox`)),v=()=>_.filter(e=>e.checked).map(e=>p[Number(e.dataset.i)]),y=()=>{let e=v().length;Y(`picked`).textContent=`${e} coin${e===1?``:`s`}`,Y(`go`).disabled=e===0};_.forEach(e=>e.addEventListener(`change`,y)),y(),X(`go`,()=>{let n=v().map(e=>({...e,rows:g(e)}));n.length&&Kv(`Enter your PIN to sell everything`,r=>cS(r,i,n,e,t))})}async function cS(e,t,n,r,i){let a=[...new Map(n.flatMap(e=>e.rows.map(e=>[e.wallet.index,e.wallet]))).values()].sort((e,t)=>e.index-t.index),o=ey(e,Math.max(...a.map(e=>e.index))+1),s=e=>e===0?`Main`:`#${e}`,c=(e,t)=>`<a href="#" class="tx" data-sig="${e}">${t}</a>`;J(`
    <h1>Selling everything…</h1>
    ${_n()}
    <p class="muted">Keep this screen open until it finishes.</p>
    ${n.map((e,t)=>`<h2>${Q(e.label)}</h2><ul class="list">${e.rows.map(e=>`<li><span>${s(e.wallet.index)}</span><code id="status-${t}-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>`).join(``)}
    <div id="cleanup"></div>
    <div id="after"></div>`),bv();let l=0,u=0,d=0,f=0,p=new Map(n.map(e=>[e.mint,{jupiter:null}])),m=r===100||i;m&&(Y(`cleanup`).innerHTML=`<h2>Cleaning up</h2><ul class="list">${a.map(e=>`<li><span>${s(e.index)}</span><code id="clean-${e.index}">waiting</code></li>`).join(``)}</ul>`),await jx(a,Ib,async e=>{let a=o[e.index],s=n.flatMap((t,n)=>t.rows.filter(t=>t.wallet.index===e.index).map(e=>({coin:t,ci:n,row:e})));for(let[e,{coin:t,ci:n,row:i}]of s.entries()){let o=(e,t)=>Y(`status-${n}-${e}`).innerHTML=t;u++;let s=e===0?Lb(a.address):void 0;await oS(i,t.mint,a,r,p.get(t.mint),o,c,s)&&l++}if(!m)return;let h=Y(`clean-${e.index}`),g=i&&e.index!==0;try{let n=0,i=[],o=new Set(s.map(e=>e.coin.mint));for(let t=0;t<5&&([[n],i]=await Promise.all([gh([e.address]),Hh(e.address)]),!(r!==100||i.every(e=>!o.has(e.mint)||e.raw===0n)));t++)await new Promise(e=>setTimeout(e,500));let l=Nx(n,i,g);if(!l){h.textContent=`nothing to do`;return}h.textContent=g?`sending to main…`:`getting deposits back…`;let u=await Px(a,t,l);d+=l.send,f+=l.refund,h.innerHTML=`${l.send?`sent ${W(l.send)} SOL to main`:`got back ${W(l.refund)} SOL in deposits`} · ${c(u,`view`)}`}catch(e){h.innerHTML=`<span class="error">✗ ${Q(Mb(e))}</span>`}}),Kg([t.address,...a.map(e=>e.address)]).catch(()=>{}),o.forEach(e=>e.secret.fill(0)),An(l?`success`:`error`),l&&await lr(`PRINTED`),Y(`after`).innerHTML=`<p><b>Done: ${l} of ${u} sales went through.</b>${f?` Got back ${W(f)} SOL in deposits.`:``}${d?` Sent ${W(d)} SOL to main.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,uS(),X(`holdings`,()=>ux().catch($)),X(`home`,Z)}async function lS(e,t,n,r,i,a,o){for(let s=0;;s++){let{slippage:c,share:l}=Sd[s],u;try{u=await r(c,l)}catch(e){throw Error(`${n} · ${Mb(e)}`)}try{return await Jh(await Fb(u,i,a(c),s===0?o:void 0))}catch(r){if(/custom program error: 0x17af\b/.test(Mb(r)))throw Error(`Nothing was spent. This coin is priced in another coin (like PUMP) instead of SOL, and pump.fun's SOL route can't buy or sell it. Jupiter couldn't either (${n??`no route`}). Try again later, once Jupiter lists it, or trade it on pump.fun itself.`);let i=Sd[s+1];if(!(r instanceof qh&&r.slippage&&i))throw r;t(e,`price jumped, trying again with ${i.slippage}% room…`)}}}function uS(){document.querySelectorAll(`.tx:not([data-bound])`).forEach(e=>{e.dataset.bound=`1`,e.addEventListener(`click`,t=>{t.preventDefault(),Mn(eg(e.dataset.sig))})})}function Q(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var dS=4;function fS(e){return e.index===0?`Main`:`#${e.index}`}function pS(e,t){let n=Math.min(t,20),[r,i=``]=e.toFixed(n).split(`.`);return BigInt(r+i)*10n**BigInt(t-n)}function mS(e,t){J(`
    <h1>${Q(e)}</h1>
    <p class="warning">${t}</p>
    <button id="home" class="primary">Back to my wallets</button>`),X(`home`,Z)}async function hS(e,t){q(`send:${JSON.stringify(e)}`,()=>hS(e,t));let n=await ay();if(!n)return Z();let[r]=n,i;if(/^\d+$/.test(e.to)){let t=n[Number(e.to)];if(!t)return mS(`No such wallet`,`You don't have #${Q(e.to)}. Your wallets go from main to #${n.length-1}.`);i={address:t.address,label:fS(t),mine:t}}else{let t=n.find(t=>t.address===e.to);if(t)i={address:t.address,label:fS(t),mine:t};else{if(!Lx(e.to)||!Th(e.to))return mS(`Not a wallet address`,`That address can't receive SOL or coins: it isn't a normal wallet. Nothing was sent.`);Av(`Checking the address…`);let t=await Mh(e.to);if(t&&t.owner!==`11111111111111111111111111111111`)return mS(`Not a wallet address`,`That address belongs to a coin or a program, not a person's wallet. Anything sent there would be lost, so nothing was sent.`);i={address:e.to,label:Ev(e.to),mine:null}}}let a=e.what===`sol`?`sol`:e.what===`*`?`all`:`coin`,o=[],s=n.filter(t=>t!==i.mine&&(!e.only||e.only.includes(t.index))&&!(e.side&&t.index===0));if(e.only){let t=e.only.filter(e=>e>=n.length);t.length&&o.push(`You don't have ${t.map(e=>`#${e}`).join(`, `)}.`)}else a===`sol`&&e.amount!==null&&i.mine?.index!==0&&!e.side&&(s=[r]);if(!s.length)return mS(`Nothing to send from`,`There's no other wallet to send from.`);let c=t;if(a===`coin`&&!c){Av(Lx(e.what)?`Finding the coin in your wallets…`:`Looking for ${Q(e.what)} in your wallets…`);let t=await Bx(e.what,n);if(!t.length)return mS(`Coin not found`,`None of your wallets hold a coin called <b>${Q(e.what)}</b>. Check the name in <b>holdings</b>, or use the coin's address.`);if(t.length>1)return J(`
        <h1>Which ${Q(e.what)}?</h1>
        <p class="muted">You hold more than one coin with that name.</p>
        ${t.map((e,t)=>`<button class="pick" data-i="${t}">${Q(e.label)}<br><small>${Ev(e.mint)}</small></button>`).join(``)}
        <button id="home">Cancel</button>`),document.querySelectorAll(`.pick`).forEach(n=>n.addEventListener(`click`,()=>hS(e,t[Number(n.dataset.i)]).catch($))),X(`home`,Z);c=t[0]}Av(`Checking what each wallet holds…`);let[l,[u]]=await Promise.all([Xg(s.map(e=>e.address)),gh([i.address])]),d=l.map(e=>e.lamports),f=l.map(e=>e.accounts),p=a===`all`?await Promise.all(l.map(e=>$g(e))):[],m=new Map;p.flat().forEach(e=>m.set(e.mint,e));let h=new Set([...m.values()].filter(Wb).map(e=>e.mint)),g=e=>f[e].some(e=>e.raw>0n&&!h.has(e.mint)),_=s.map((e,t)=>({wallet:e,balance:d[t],coins:[],sol:0,allSol:!1,skipped:[]}));if(a!==`sol`){if(_.forEach((t,n)=>{for(let r of f[n]){if(r.raw===0n||h.has(r.mint)||c&&r.mint!==c.mint)continue;let n=m.get(r.mint),i=e.pct?r.raw*BigInt(Math.round(e.pct*100))/10000n:r.raw;i>0n&&t.coins.push({account:r,amount:i,label:c?.label??(n?Ub(n):Ev(r.mint)),opens:0})}}),a===`coin`&&e.amount!==null){let t=_.flatMap(e=>e.coins.map(t=>({r:e,c:t}))).sort((e,t)=>t.c.account.raw>e.c.account.raw?1:-1),n=t[0]?.c.account.decimals??0,r=pS(e.amount,n),i=t.reduce((e,t)=>e+t.c.account.raw,0n);if(r>i)return mS(`Not enough coins`,`${e.only?`Those wallets`:`Your wallets`} hold ${zx(i,n)} ${Q(c.label)}, less than the ${Vb(e.amount)} you asked to send. Nothing was sent.`);for(let{r:e,c:n}of t)n.amount=r<n.account.raw?r:n.account.raw,r-=n.amount,n.amount===0n&&(e.coins=e.coins.filter(e=>e!==n))}let t=new Map;for(let e of _)for(let n of e.coins)t.set(n.account.mint,Oh(i.address,n.account.mint,n.account.program));let n=[...t.keys()],r=n.length?await gh(n.map(e=>t.get(e))):[],o=new Set(n.filter((e,t)=>r[t]>0));for(let e of _){for(let t of e.coins)o.has(t.account.mint)||(t.opens=t.account.lamports,o.add(t.account.mint));let t=Math.ceil(e.coins.length/dS),n=e.coins.slice(0,dS).reduce((e,t)=>e+t.opens,0);e.coins.length&&e.balance<n+t*5e3&&(e.skipped.push(`not enough SOL to move its coins (needs about ${W(n+t*Vm)} SOL to open the coin's account at ${Q(i.label)}, has ${W(e.balance)})`),e.coins=[])}}let v=e=>{let t=Math.ceil(e.coins.length/dS),n=e.coins.reduce((e,t)=>e+(t.amount===t.account.raw?t.account.lamports:0),0);return e.balance-t*Vm-e.coins.reduce((e,t)=>e+t.opens,0)+n};if(a===`sol`||a===`all`){if(_.forEach((t,n)=>{let r=(a===`sol`||t.skipped.length>0)&&g(n),i=r?hb:0,o=v(t)-Vm-i;if(o<=0){a===`sol`&&r&&t.balance>5e3&&t.skipped.push(`keeps its ${W(t.balance)} SOL: it holds coins and needs ${W(hb)} SOL to sell them`);return}let s=e.pct?Math.floor(o*e.pct/100):o;e.pct&&v(t)-5e3-s<Math.max(890880,i)&&(s=v(t)-Vm-Math.max(Hm,i)),s>=5e4&&(t.sol=s),t.allSol=!e.pct&&e.amount===null}),a===`sol`&&e.amount!==null){let t=Math.round(e.amount*U),n=[..._].sort((e,t)=>t.sol-e.sol),r=n.reduce((e,t)=>e+t.sol,0);if(t>r)return mS(`Not enough SOL`,`${s.length===1?fS(s[0]):`Those wallets`} can send at most ${W(r)} SOL after fees${_.some((e,t)=>g(t))?` (wallets holding coins keep ${W(hb)} SOL to sell them)`:``}. Nothing was sent.`);for(let e of n){let n=Math.min(t,e.sol),r=e.balance-Vm-n;n>0&&r>0&&r<890880&&(n=Math.max(0,e.balance-Vm-Hm)),e.sol=n,t-=n}if(t>0)return mS(`Can't send that exact amount`,`Solana makes a wallet keep at least ${W(Hm)} SOL or nothing at all, so that amount doesn't fit. Try a slightly smaller amount, or "all". Nothing was sent.`)}let t=u;for(let e of[..._].sort((e,t)=>t.sol-e.sol))e.sol&&(t+e.sol<890880?(e.skipped.push(`its ${W(e.sol)} SOL is too little to start an empty wallet (Solana needs ${W(Hm)} SOL)`),e.sol=0):t+=e.sol)}let y=_.filter(e=>e.coins.length||e.sol),b=_.filter(e=>e.coins.length||e.sol||e.skipped.length),x=y.reduce((e,t)=>e+t.sol,0),S=y.reduce((e,t)=>e+t.coins.reduce((e,t)=>e+t.opens,0),0),C=a===`sol`?e.amount===null?e.pct?`Send ${e.pct}% of the SOL`:`Send all the SOL`:`Send ${Vb(e.amount)} SOL`:a===`all`?`Send everything`:`Send ${e.amount===null?e.pct?`${e.pct}% of `:`all `:Vb(e.amount)+` `}${Q(c.label)}`,w=e=>{let t=e.coins.slice(0,3).map(e=>`${zx(e.amount,e.account.decimals)} ${Q(e.label)}`);return e.coins.length>3&&t.push(`${e.coins.length-3} more coin${e.coins.length===4?``:`s`}`),t.join(`<br>`)},T=a===`all`?_.reduce((e,t,n)=>e+f[n].filter(e=>e.raw>0n&&h.has(e.mint)).length,0):0;J(`
    <h1>${C}</h1>
    <div class="card"><div class="label">To ${Q(i.label)}${i.mine?.name?` · ${Q(i.mine.name)}`:``}</div><div class="address" id="dest"></div></div>
    ${i.mine?``:`<p class="warning">This isn't one of your wallets. Check every letter of the address: sends can't be undone.</p>`}
    ${b.length?`<ul class="list">${b.map(e=>`<li><span>${fS(e.wallet)}</span><code>${[w(e),e.sol?`${W(e.sol)} SOL`:``].filter(Boolean).join(`<br>`)||`nothing`}${e.skipped.length?`<br><small class="error">${e.skipped.join(`<br>`)}</small>`:``}</code></li>`).join(``)}</ul>`:``}
    ${y.length&&x?`<p><b>SOL to ${Q(i.label)}: ${W(x)}</b></p>`:``}
    ${o.length?`<p class="muted">${o.join(` `)}</p>`:``}
    ${S?`<p class="muted">${Q(i.label)} doesn't have an account for some of these coins yet. Opening one costs about 0.002 SOL each (${W(S)} SOL in all), paid by the sending wallet. Emptied coin accounts are closed, so senders get their own deposits back.</p>`:``}
    ${a===`sol`&&e.amount===null?`<p class="muted">Wallets that still hold coins keep ${W(hb)} SOL so they can sell them later.</p>`:``}
    ${T?`<p class="muted">${T} junk coin${T===1?``:`s`} left behind: worthless ads strangers send to wallets.</p>`:``}
    ${y.length?`<button id="go" class="primary">Enter PIN and send</button>`:`<p class="warning">There's nothing to send${b.length?` (see above)`:e.only?` from those wallets`:``}.</p>`}
    <button id="cancel">Cancel</button>`),Y(`dest`).textContent=i.address,X(`cancel`,Z),y.length&&X(`go`,()=>Kv(`Enter your PIN to send`,e=>gS(e,i,y,h,u).catch($)))}async function gS(e,t,n,r,i){let a=ey(e,Math.max(...n.map(e=>e.wallet.index))+1);J(`
    <h1>Sending to ${Q(t.label)}…</h1>
    ${_n()}
    <p class="muted">Keep this screen open until it finishes.</p>
    <ul class="list">${n.map(e=>`<li><span>${fS(e.wallet)}</span><code id="status-${e.wallet.index}">waiting</code></li>`).join(``)}</ul>
    <div id="after"></div>`),bv();let o=e=>Y(`status-${e.wallet.index}`),s=e=>`<a href="#" class="tx" data-sig="${e}">view</a>`,c=async e=>{let t=await Jh(e),n=await Zh(t);if(n!==`confirmed`)throw Error(`${n===`failed`?`failed`:`is taking long`} (${t})`);return t},l=0,u=0,d=async e=>{let n=a[e.wallet.index],i=[],d=!0;try{for(let r=0;r<e.coins.length;r+=dS){let a=e.coins.slice(r,r+dS);o(e).innerHTML=[...i,`sending ${a.map(e=>Q(e.label)).join(`, `)}…`].join(`<br>`);let l=a.flatMap(e=>{let r=Oh(t.address,e.account.mint,e.account.program);return[Ah(n.address,r,t.address,e.account.mint,e.account.program),jh(e.account,r,n.address,e.amount),...e.amount===e.account.raw?[Ch(e.account,n.address,n.address)]:[]]}),u=await c(bh(n,l,await Wh()));i.push(`✓ ${a.map(e=>`${zx(e.amount,e.account.decimals)} ${Q(e.label)}`).join(`, `)} · ${s(u)}`)}if(e.sol){o(e).innerHTML=[...i,`sending SOL…`].join(`<br>`);let a,l=e.sol,[[d,f],p]=await Promise.all([gh([n.address,t.address]),Hh(n.address)]);if(e.allSol){let e=Nx(d,p,!0,r);if(!e||!e.send)throw Error(`no SOL left to send`);if(f+e.send<890880)throw Error(`${W(e.send)} SOL is too little to start an empty wallet`);l=e.send,a=await Px(n,t,e)}else{if(d<l+5e3)throw Error(`only ${W(d)} SOL there now`);a=await c(bh(n,[Sh(n.address,t.address,l)],await Wh()))}u+=l,i.push(`✓ ${W(l)} SOL · ${s(a)}`)}}catch(e){d=!1,i.push(`<span class="error">✗ ${Q(Mb(e))}</span>`)}o(e).innerHTML=i.join(`<br>`),uS(),d&&l++},f=[...n].filter(e=>e.sol).sort((e,t)=>t.sol-e.sol)[0],p=n.filter(e=>e.coins.some(e=>e.opens>0)||e===f&&i<890880);await jx(p,Ib,d),await jx(n.filter(e=>!p.includes(e)),Ib,d),Kg([t.address,...n.map(e=>e.wallet.address)]).catch(()=>{}),a.forEach(e=>e.secret.fill(0)),An(l?`success`:`error`),l&&await lr(`SENT`),Y(`after`).innerHTML=`<p><b>Done: ${l} of ${n.length} wallet${n.length===1?``:`s`} sent.</b>${u?` ${W(u)} SOL went to ${Q(t.label)}.`:``}</p>
    <button id="holdings" class="primary">See my holdings</button>
    <button id="home">Back to my wallets</button>`,uS(),X(`holdings`,()=>ux().catch($)),X(`home`,Z)}function _S(){q(`remove`,_S),J(`
    <h1>Remove wallets from this phone?</h1>
    <p class="warning">If you haven't written down your 12 words, any money in these wallets will be lost forever.</p>
    <p>Type <b>REMOVE</b> to confirm.</p>
    <input id="confirm" autocapitalize="characters" autocomplete="off">
    <p id="error" class="error" hidden></p>
    <button id="yes" class="danger">Remove</button>
    <button id="no" class="primary">Keep my wallets</button>`),X(`no`,Z),X(`yes`,async()=>{if(Y(`confirm`).value.trim()!==`REMOVE`)return Dv(`Type REMOVE to confirm.`);await W_(R_),await P.remove(z_),await W_(B_),await P.remove(G_),oy(),qv=[],Mv()})}function $(e){console.error(e);let t=e instanceof Error?e.message:String(e);J(`
    <h1>Something went wrong</h1>
    <p>Please send a screenshot of this screen to the bot's owner.</p>
    <pre class="details"></pre>
    <button id="retry" class="primary">Start over</button>`),document.querySelector(`.details`).textContent=`${t}\nTelegram ${N?.version??`?`} on ${N?.platform??`?`}`,X(`retry`,()=>Mv().catch($))}window.addEventListener(`unhandledrejection`,e=>$(e.reason)),window.addEventListener(`error`,e=>$(e.error??e.message));var vS=`showUsd`,yS=!1,bS=null,xS=new Map,SS=(e,t,n=``)=>`<span class="coinamt" data-mint="${e}" data-amt="${t}">${Vb(t)}${n}</span>`;function CS(e,t){t>0&&xS.get(e)!==t&&(xS.set(e,t),yS&&OS())}var wS=/(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?\s?SOL\b(?: · \$[\d,]+(?:\.\d+)?)?/g,TS=`button, input, textarea, a, .keypad, .amountbox, .solamt, .coinamt, .pnl, script, style`,ES=e=>e<.01&&e>0?`$${e.toFixed(4)}`:Hb(e);function DS(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];for(let e=t.nextNode();e;e=t.nextNode()){let t=e;t.data.includes(`SOL`)&&!t.parentElement?.closest(TS)&&n.push(t)}for(let e of n){let t=e.data,n=[],r=0;for(let e of t.matchAll(wS)){let i=t[e.index-1];if(i&&/[\w$.]/.test(i))continue;n.push(t.slice(r,e.index));let a=document.createElement(`span`);a.className=`solamt`,a.dataset.sol=(e[1]+(e[2]??``)).replace(/,/g,``),a.dataset.orig=e[0],a.textContent=e[0],n.push(a),r=e.index+e[0].length}n.length&&(n.push(t.slice(r)),e.replaceWith(...n))}}function OS(){DS(uv),document.querySelectorAll(`.solamt`).forEach(e=>{let t=Number(e.dataset.sol);e.dataset.orig??=`${W(t*U)} SOL`;let n=yS&&bS?ES(t*bS):e.dataset.shown===`usd`?e.dataset.orig:null;n!==null&&e.textContent!==n&&(e.textContent=n),e.dataset.shown=yS&&bS?`usd`:`sol`,e.classList.toggle(`usd`,yS&&!!bS)}),document.querySelectorAll(`.coinamt`).forEach(e=>{let t=xS.get(e.dataset.mint),n=yS&&!!t;e.dataset.orig??=e.textContent??``;let r=n?ES(Number(e.dataset.amt)*t):e.dataset.shown===`usd`?e.dataset.orig:null;r!==null&&e.textContent!==r&&(e.textContent=r),e.dataset.shown=n?`usd`:`coin`,e.classList.toggle(`usd`,n)})}function kS(e){e&&e!==bS&&(bS=e,yS&&OS())}async function AS(){K&&kS(await hv(!0)??(await hd(K,[`So11111111111111111111111111111111111111112`],!0)).get(`So11111111111111111111111111111111111111112`)??null)}function jS(){let e=!1;new MutationObserver(()=>{e||(e=!0,queueMicrotask(()=>{e=!1,OS()}))}).observe(uv,{childList:!0,subtree:!0,characterData:!0}),uv.addEventListener(`click`,async e=>{let t=e.target.closest?.(`.solamt, .coinamt`);if(t){if(e.preventDefault(),e.stopPropagation(),bS||await AS().catch(()=>{}),!(t.classList.contains(`coinamt`)?xS.has(t.dataset.mint):bS)&&!yS)return An(`error`);F(),yS=!yS,OS(),P.set(vS,yS?`1`:``).catch(()=>{})}},!0),wn()&&(P.get(vS).then(async e=>{e===`1`&&(yS=!0,await AS(),OS())}).catch(()=>{}),setInterval(()=>{yS&&!document.hidden&&AS().catch(()=>{})},6e4))}ev||(jS(),Mv().catch($));