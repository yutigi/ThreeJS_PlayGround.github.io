(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{2717:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/FBXSceneLightingPage",function(){return t(3627)}])},3627:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(5893),i=t(5988),a=t(7294),s=t(2212),o=t(9365),c=t(2967),d=t(1217);class h extends s.yxD{constructor(e){super(e),this.type=s.cLu}parse(e){const n=function(e,n){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(n||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(n||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(n||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(n||""))}return-1},t=function(e,n,t){n=n||1024;let r=e.pos,i=-1,a=0,s="",o=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=o.indexOf("\n"))&&a<n&&r<e.byteLength;)s+=o,a+=o.length,r+=128,o+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==t&&(e.pos+=a+i+1),s+o.slice(0,i))},r=function(e,n,t,r){const i=e[n+3],a=Math.pow(2,i-128)/255;t[r+0]=e[n+0]*a,t[r+1]=e[n+1]*a,t[r+2]=e[n+2]*a},i=function(e,n,t,r){const i=e[n+3],a=Math.pow(2,i-128)/255;t[r+0]=s.A5E.toHalfFloat(Math.min(e[n+0]*a,65504)),t[r+1]=s.A5E.toHalfFloat(Math.min(e[n+1]*a,65504)),t[r+2]=s.A5E.toHalfFloat(Math.min(e[n+2]*a,65504))},a=new Uint8Array(e);a.pos=0;const o=function(e){const r=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,o={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let c,d;if(e.pos>=e.byteLength||!(c=t(e)))return n(1,"no header found");if(!(d=c.match(/^#\?(\S+)/)))return n(3,"bad initial token");for(o.valid|=1,o.programtype=d[1],o.string+=c+"\n";c=t(e),!1!==c;)if(o.string+=c+"\n","#"!==c.charAt(0)){if((d=c.match(r))&&(o.gamma=parseFloat(d[1],10)),(d=c.match(i))&&(o.exposure=parseFloat(d[1],10)),(d=c.match(a))&&(o.valid|=2,o.format=d[1]),(d=c.match(s))&&(o.valid|=4,o.height=parseInt(d[1],10),o.width=parseInt(d[2],10)),2&o.valid&&4&o.valid)break}else o.comments+=c+"\n";return 2&o.valid?4&o.valid?o:n(3,"missing image size specifier"):n(3,"missing format specifier")}(a);if(-1!==o){const e=o.width,t=o.height,c=function(e,t,r){const i=t;if(i<8||i>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(i!==(e[2]<<8|e[3]))return n(3,"wrong scanline width");const a=new Uint8Array(4*t*r);if(!a.length)return n(4,"unable to allocate buffer space");let s=0,o=0;const c=4*i,d=new Uint8Array(4),h=new Uint8Array(c);let l=r;for(;l>0&&o<e.byteLength;){if(o+4>e.byteLength)return n(1);if(d[0]=e[o++],d[1]=e[o++],d[2]=e[o++],d[3]=e[o++],2!=d[0]||2!=d[1]||(d[2]<<8|d[3])!=i)return n(3,"bad rgbe scanline format");let t,r=0;for(;r<c&&o<e.byteLength;){t=e[o++];const i=t>128;if(i&&(t-=128),0===t||r+t>c)return n(3,"bad scanline data");if(i){const n=e[o++];for(let e=0;e<t;e++)h[r++]=n}else h.set(e.subarray(o,o+t),r),r+=t,o+=t}const w=i;for(let e=0;e<w;e++){let n=0;a[s]=h[e+n],n+=i,a[s+1]=h[e+n],n+=i,a[s+2]=h[e+n],n+=i,a[s+3]=h[e+n],s+=4}l--}return a}(a.subarray(a.pos),e,t);if(-1!==c){let n,a,d,h;switch(this.type){case s.ywz:n=c,a=s.aoB,d=s.ywz;break;case s.VzW:h=c.length/4;const e=new Float32Array(3*h);for(let n=0;n<h;n++)r(c,4*n,e,3*n);n=e,a=s.UCm,d=s.VzW;break;case s.cLu:h=c.length/4;const t=new Uint16Array(3*h);for(let n=0;n<h;n++)i(c,4*n,t,3*n);n=t,a=s.UCm,d=s.cLu;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:e,height:t,data:n,header:o.string,gamma:o.gamma,exposure:o.exposure,format:a,type:d}}}return null}setDataType(e){return this.type=e,this}load(e,n,t,r){return super.load(e,(function(e,t){switch(e.type){case s.ywz:e.encoding=s.KC9,e.minFilter=s.TyD,e.magFilter=s.TyD,e.generateMipmaps=!1,e.flipY=!0;break;case s.VzW:case s.cLu:e.encoding=s.rnI,e.minFilter=s.wem,e.magFilter=s.wem,e.generateMipmaps=!1,e.flipY=!0}n&&n(e,t)}),t,r)}}var l=t(6591),w=t(4065),u=t(4458);function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var m=function(){function e(n){var t=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.windowResize=function(){t.windowsize.width=window.innerWidth,t.windowsize.height=window.innerHeight,t.camera.aspect=t.windowsize.width/t.windowsize.height,t.camera.updateProjectionMatrix(),t.composer.setSize(t.windowsize.width,t.windowsize.height),t.renderer.setSize(t.windowsize.width,t.windowsize.height)},this.UpdateRender=function(){requestAnimationFrame(t.UpdateRender),t.controls.update(),t.renderer.render(t.scene,t.camera),t.composer.render()},this.canvas=n,this.windowsize={width:window.innerWidth,height:window.innerHeight},this.init(),this.UpdateRender(),window.addEventListener("resize",this.windowResize)}var n,t,r;return n=e,(t=[{key:"init",value:function(){var e=this;this.renderer=new s.CP7({canvas:this.canvas,antialias:!0}),this.renderer.setSize(this.windowsize.width,this.windowsize.height),this.renderer.toneMapping=s.LY2,this.renderer.toneMappingExposure=1,this.renderer.physicallyCorrectLights=!0,this.renderer.shadowMap.type=s.ntZ,this.renderer.shadowMap.enabled=!0,this.scene=new s.xsS,this.camera=new s.cPb(50,this.windowsize.width/this.windowsize.height,.001,1e6),this.camera.position.set(0,4,5),this.camera.lookAt(0,0,0),this.composer=new w.xC(this.renderer),this.composer.setSize(this.windowsize.width,this.windowsize.height),this.renderPass=new u.C(this.scene,this.camera),this.bloompass=new l.m(new s.FM8(window.innerWidth,window.innerHeight),5,1,.8),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloompass),this.controls=new o.z(this.camera,this.renderer.domElement),this.controls.update(),(new s.dpR).load("ash_uvgrid01.jpg");var n=new s.anP(this.renderer);n.compileCubemapShader();var t=new h;t.setDataType(s.ywz),t.load("Ice_Lake_Ref.hdr",(function(t){var r=n.fromEquirectangular(t);t.dispose(),n.dispose(),e.scene.environment=r.texture,e.scene.background=r.texture})),(new c.y).load("S01_Lighting.fbx",(function(n){var t=e;n.castShadow=!0,n.traverse((function(e){if(console.log(e),f(e,s.cek)){e.intensity*=.1;var n=new s.cek;n.color=e.color,n.intensity=e.intensity,n.power=e.power,n.castShadow=!0,n.position.set(e.position.x,e.position.y,e.position.z),t.scene.add(n)}}))})),(new d.E).load("S01.glb",(function(n){var t=n.scene;t.traverse((function(e){if(f(e,s.Kj0)){if(console.log(e.name),"Mushroom_Quad"!=e.name)e.receiveShadow=!0;else{var n=new s.EJi({map:e.material.map});e.material=n,e.material.roughness=.8,e.material.metalness=.1,e.material.emissiveIntensity=10}e.castShadow=!0,console.log(e.material)}})),e.scene.add(t)}))}}])&&p(n.prototype,t),r&&p(n,r),e}(),g=function(){var e=(0,a.useRef)(null);return(0,a.useEffect)((function(){document.title="FBXSceneLighting",new m(e.current)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{id:"a2381c73485df529",children:"* {margin:0;\npadding:0;\nbox-sizing:border-box}\ncanvas {display:block}"}),(0,r.jsx)("canvas",{ref:e,className:"jsx-a2381c73485df529"})]})}}},function(e){e.O(0,[774,737,840,579,967,888,179],(function(){return n=2717,e(e.s=n);var n}));var n=e.O();_N_E=n}]);