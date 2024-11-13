import{s as bi,l as ph,m as mh,u as P,p as lp,q as cp,v as Zt,i as Xt,x as $t,y as $e,g as me,z as Mn,A as Ve,o as xe,a as Je,b as We,B as ws,C as Ro,D as up,N as Rs,E as se,G as _t,H as gh,I as Lr,J as Pi,K as dp,L as Ai,r as bt,M as wi,O as Yn,j as _h,P as hp,Q as vh,d as lt,F as Yi,R as De,c as ft,w as gt,S as $i,k as Ot,U as fp,t as Zn,n as In,V as ys,W as pp,X as xh,Y as mp,Z as yh,$ as gp,T as _p,a0 as il,a1 as vp,a2 as Mh,a3 as xp,a4 as fc,f as Co,_ as yp}from"./index-89a57a4b.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="163",cr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mp=0,pc=1,bp=2,bh=1,Sp=2,jn=3,ei=0,jt=1,wn=2,Si=0,Nr=1,mc=2,gc=3,_c=4,Ep=5,Wi=100,Tp=101,Ap=102,wp=103,Rp=104,Cp=200,Pp=201,Lp=202,Ip=203,rl=204,sl=205,Np=206,Dp=207,Up=208,Op=209,Fp=210,Bp=211,kp=212,Hp=213,zp=214,Vp=0,Gp=1,Wp=2,Po=3,Xp=4,$p=5,jp=6,qp=7,Sh=0,Kp=1,Yp=2,Ei=0,Zp=1,Jp=2,Qp=3,em=4,tm=5,nm=6,im=7,vc="attached",rm="detached",Eh=300,Hr=301,zr=302,ol=303,al=304,Vo=306,Vr=1e3,vi=1001,Lo=1002,Gt=1003,Th=1004,vs=1005,rn=1006,Eo=1007,Jn=1008,Ti=1009,sm=1010,om=1011,Ah=1012,wh=1013,Gr=1014,Cn=1015,Io=1016,Rh=1017,Ch=1018,Os=1020,am=35902,lm=1021,cm=1022,xn=1023,um=1024,dm=1025,Dr=1026,Cs=1027,Ph=1028,Lh=1029,hm=1030,Ih=1031,Nh=1033,aa=33776,la=33777,ca=33778,ua=33779,xc=35840,yc=35841,Mc=35842,bc=35843,Dh=36196,Sc=37492,Ec=37496,Tc=37808,Ac=37809,wc=37810,Rc=37811,Cc=37812,Pc=37813,Lc=37814,Ic=37815,Nc=37816,Dc=37817,Uc=37818,Oc=37819,Fc=37820,Bc=37821,da=36492,kc=36494,Hc=36495,fm=36283,zc=36284,Vc=36285,Gc=36286,Ps=2300,Wr=2301,ha=2302,Wc=2400,Xc=2401,$c=2402,pm=2500,mm=0,Uh=1,ll=2,gm=3200,_m=3201,Oh=0,vm=1,_i="",zt="srgb",It="srgb-linear",Ml="display-p3",Go="display-p3-linear",No="linear",ut="srgb",Do="rec709",Uo="p3",dr=7680,jc=519,xm=512,ym=513,Mm=514,Fh=515,bm=516,Sm=517,Em=518,Tm=519,cl=35044,qc="300 es",Qn=2e3,Oo=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kc=1234567;const Ms=Math.PI/180,Xr=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function bl(i,e){return(i%e+e)%e}function Am(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function wm(i,e,t){return i!==e?(t-i)/(e-i):0}function bs(i,e,t){return(1-t)*i+t*e}function Rm(i,e,t,n){return bs(i,e,1-Math.exp(-t*n))}function Cm(i,e=1){return e-Math.abs(bl(i,e*2)-e)}function Pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Im(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nm(i,e){return i+Math.random()*(e-i)}function Dm(i){return i*(.5-Math.random())}function Um(i){i!==void 0&&(Kc=i);let e=Kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(i){return i*Ms}function Fm(i){return i*Xr}function Bm(i){return(i&i-1)===0&&i!==0}function km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zm(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bh={DEG2RAD:Ms,RAD2DEG:Xr,generateUUID:bn,clamp:Pt,euclideanModulo:bl,mapLinear:Am,inverseLerp:wm,lerp:bs,damp:Rm,pingpong:Cm,smoothstep:Pm,smootherstep:Lm,randInt:Im,randFloat:Nm,randFloatSpread:Dm,seededRandom:Um,degToRad:Om,radToDeg:Fm,isPowerOfTwo:Bm,ceilPowerOfTwo:km,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:zm,normalize:rt,denormalize:vn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],M=r[1],x=r[4],S=r[7],C=r[2],w=r[5],A=r[8];return s[0]=o*_+a*M+l*C,s[3]=o*m+a*x+l*w,s[6]=o*f+a*S+l*A,s[1]=c*_+u*M+d*C,s[4]=c*m+u*x+d*w,s[7]=c*f+u*S+d*A,s[2]=h*_+p*M+g*C,s[5]=h*m+p*x+g*w,s[8]=h*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*d+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new ze;function kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vm(){const i=Ls("canvas");return i.style.display="block",i}const Yc={};function Hh(i){i in Yc||(Yc[i]=!0,console.warn(i))}const Zc=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jc=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[It]:{transfer:No,primaries:Do,toReference:i=>i,fromReference:i=>i},[zt]:{transfer:ut,primaries:Do,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:No,primaries:Uo,toReference:i=>i.applyMatrix3(Jc),fromReference:i=>i.applyMatrix3(Zc)},[Ml]:{transfer:ut,primaries:Uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jc),fromReference:i=>i.applyMatrix3(Zc).convertLinearToSRGB()}},Gm=new Set([It,Go]),it={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Gs[e].toReference,r=Gs[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gs[i].primaries},getTransfer:function(i){return i===_i?No:Gs[i].transfer}};function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hr;class Wm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=Ls("canvas")),hr.width=e.width,hr.height=e.height;const n=hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ur(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ur(t[n]/255)*255):t[n]=Ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xm=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ma(r[o].image)):s.push(ma(r[o]))}else s=ma(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $m=0;class Rt extends sr{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=vi,r=vi,s=rn,o=Jn,a=xn,l=Ti,c=Rt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=bn(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Eh;Rt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,C=(f+1)/2,w=(u+h)/4,A=(d+_)/4,I=(g+m)/4;return x>S&&x>C?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=A/n):S>C?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=w/r,s=I/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=I/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends jm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qm extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*_,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,f*M);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*M;if(l=l*m+h*S,c=c*m+p*S,u=u*m+g*S,d=d*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new N,Qc=new Nn;class On{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Xs.subVectors(this.max,as),fr.subVectors(e.a,as),pr.subVectors(e.b,as),mr.subVectors(e.c,as),si.subVectors(pr,fr),oi.subVectors(mr,pr),Di.subVectors(fr,mr);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Di.z,Di.y,si.z,0,-si.x,oi.z,0,-oi.x,Di.z,0,-Di.x,-si.y,si.x,0,-oi.y,oi.x,0,-Di.y,Di.x,0];return!_a(t,fr,pr,mr,Xs)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,fr,pr,mr,Xs))?!1:($s.crossVectors(si,oi),t=[$s.x,$s.y,$s.z],_a(t,fr,pr,mr,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new N,new N,new N,new N,new N,new N,new N,new N],fn=new N,Ws=new On,fr=new N,pr=new N,mr=new N,si=new N,oi=new N,Di=new N,as=new N,Xs=new N,$s=new N,Ui=new N;function _a(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ui.fromArray(i,s);const a=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Km=new On,ls=new N,va=new N;class Fn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Km.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(va)),this.expandByPoint(ls.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new N,xa=new N,js=new N,ai=new N,ya=new N,qs=new N,Ma=new N;class es{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xa.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(xa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=ai.dot(this.direction),l=-ai.dot(js),c=ai.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xa).addScaledVector(js,h),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){ya.subVectors(t,e),qs.subVectors(n,e),Ma.crossVectors(ya,qs);let o=this.direction.dot(Ma),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(ai,qs));if(l<0)return null;const c=a*this.direction.dot(ya.cross(ai));if(c<0||l+c>o)return null;const u=-a*ai.dot(Ma);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,r,s,o,a,l,c,u,d,h,p,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,p,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,Zm)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(n,en),li.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(n,en)),li.normalize(),Ks.crossVectors(en,li),r[0]=li.x,r[4]=Ks.x,r[8]=en.x,r[1]=li.y,r[5]=Ks.y,r[9]=en.y,r[2]=li.z,r[6]=Ks.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],x=n[7],S=n[11],C=n[15],w=r[0],A=r[4],I=r[8],E=r[12],y=r[1],U=r[5],k=r[9],L=r[13],$=r[2],q=r[6],B=r[10],Z=r[14],H=r[3],Q=r[7],ee=r[11],fe=r[15];return s[0]=o*w+a*y+l*$+c*H,s[4]=o*A+a*U+l*q+c*Q,s[8]=o*I+a*k+l*B+c*ee,s[12]=o*E+a*L+l*Z+c*fe,s[1]=u*w+d*y+h*$+p*H,s[5]=u*A+d*U+h*q+p*Q,s[9]=u*I+d*k+h*B+p*ee,s[13]=u*E+d*L+h*Z+p*fe,s[2]=g*w+_*y+m*$+f*H,s[6]=g*A+_*U+m*q+f*Q,s[10]=g*I+_*k+m*B+f*ee,s[14]=g*E+_*L+m*Z+f*fe,s[3]=M*w+x*y+S*$+C*H,s[7]=M*A+x*U+S*q+C*Q,s[11]=M*I+x*k+S*B+C*ee,s[15]=M*E+x*L+S*Z+C*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*p-n*l*p)+_*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=d*m*c-_*h*c+_*l*p-a*m*p-d*l*f+a*h*f,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,S=u*_*c-g*d*c+g*a*p-o*_*p-u*a*f+o*d*f,C=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,w=t*M+n*x+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=M*A,e[1]=(_*h*s-d*m*s-_*r*p+n*m*p+d*r*f-n*h*f)*A,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*f+n*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*A,e[8]=S*A,e[9]=(g*d*s-u*_*s-g*n*p+t*_*p+u*n*f-t*d*f)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*f+t*a*f)*A,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*p-t*a*p)*A,e[12]=C*A,e[13]=(u*_*r-g*d*r+g*n*h-t*_*h-u*n*m+t*d*m)*A,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,_=o*u,m=o*d,f=a*d,M=l*c,x=l*u,S=l*d,C=n.x,w=n.y,A=n.z;return r[0]=(1-(_+f))*C,r[1]=(p+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(h+f))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+x)*A,r[9]=(m-M)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=gr.set(r[0],r[1],r[2]).length();const o=gr.set(r[4],r[5],r[6]).length(),a=gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/s,u=1/o,d=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Qn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let p,g;if(a===Qn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Oo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Qn){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,p=(n+r)*u;let g,_;if(a===Qn)g=(o+s)*d,_=-2*d;else if(a===Oo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gr=new N,pn=new Be,Ym=new N(0,0,0),Zm=new N(1,1,1),li=new N,Ks=new N,en=new N,eu=new Be,tu=new Nn;class Dn{constructor(e=0,t=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jm=0;const nu=new N,_r=new Nn,Vn=new Be,Ys=new N,cs=new N,Qm=new N,eg=new Nn,iu=new N(1,0,0),ru=new N(0,1,0),su=new N(0,0,1),ou={type:"added"},tg={type:"removed"},vr={type:"childadded",child:null},ba={type:"childremoved",child:null};class pt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new N,t=new Dn,n=new Nn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new ze}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(cs,Ys,this.up):Vn.lookAt(Ys,cs,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(Vn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tg),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new N,Gn=new N,Sa=new N,Wn=new N,xr=new N,yr=new N,au=new N,Ea=new N,Ta=new N,Aa=new N;class Rn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mn.subVectors(r,t),Gn.subVectors(n,t),Sa.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Gn),l=mn.dot(Sa),c=Gn.dot(Gn),u=Gn.dot(Sa),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static isFrontFacing(e,t,n,r){return mn.subVectors(n,t),Gn.subVectors(e,t),mn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;xr.subVectors(r,n),yr.subVectors(s,n),Ea.subVectors(e,n);const l=xr.dot(Ea),c=yr.dot(Ea);if(l<=0&&c<=0)return t.copy(n);Ta.subVectors(e,r);const u=xr.dot(Ta),d=yr.dot(Ta);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(xr,o);Aa.subVectors(e,s);const p=xr.dot(Aa),g=yr.dot(Aa);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(yr,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return au.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(au,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(xr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=bl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=wa(o,s,e+1/3),this.g=wa(o,s,e),this.b=wa(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return it.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Pt(Ut.r*255,0,255))*65536+Math.round(Pt(Ut.g*255,0,255))*256+Math.round(Pt(Ut.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=zt){it.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Zs);const n=bs(ci.h,Zs.h,t),r=bs(ci.s,Zs.s,t),s=bs(ci.l,Zs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ut=new Le;Le.NAMES=Gh;let ng=0;class Pn extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Nr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=sl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ji extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new N,Js=new we;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}}class Wh extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ig=0;const ln=new Be,Ra=new pt,Mr=new N,tn=new On,us=new On,wt=new N;class En extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Xh:Wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(tn.min,us.min),tn.expandByPoint(wt),wt.addVectors(tn.max,us.max),tn.expandByPoint(wt)):(tn.expandByPoint(us.min),tn.expandByPoint(us.max))}tn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),wt.add(Mr)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;const c=new N,u=new N,d=new N,h=new we,p=new we,g=new we,_=new N,m=new N;function f(I,E,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[I].add(_),a[E].add(_),a[y].add(_),l[I].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,E=M.length;I<E;++I){const y=M[I],U=y.start,k=y.count;for(let L=U,$=U+k;L<$;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new N,S=new N,C=new N,w=new N;function A(I){C.fromBufferAttribute(r,I),w.copy(C);const E=a[I];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(w,E);const U=S.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,U)}for(let I=0,E=M.length;I<E;++I){const y=M[I],U=y.start,k=y.count;for(let L=U,$=U+k;L<$;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Wt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new Be,Oi=new es,Qs=new Fn,cu=new N,br=new N,Sr=new N,Er=new N,Ca=new N,eo=new N,to=new we,no=new we,io=new we,uu=new N,du=new N,hu=new N,ro=new N,so=new N;class sn extends pt{constructor(e=new En,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ca.fromBufferAttribute(d,e),o?eo.addScaledVector(Ca,u):eo.addScaledVector(Ca.sub(t),u))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Qs.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Qs,cu)===null||Oi.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,C=x;S<C;S+=3){const w=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);r=oo(this,f,e,n,c,u,d,w,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=oo(this,o,e,n,c,u,d,M,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,C=x;S<C;S+=3){const w=S,A=S+1,I=S+2;r=oo(this,f,e,n,c,u,d,w,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,x=m+1,S=m+2;r=oo(this,o,e,n,c,u,d,M,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rg(i,e,t,n,r,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ei,a),l===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:i}}function oo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,br),i.getVertexPosition(l,Sr),i.getVertexPosition(c,Er);const u=rg(i,e,t,n,br,Sr,Er,ro);if(u){r&&(to.fromBufferAttribute(r,a),no.fromBufferAttribute(r,l),io.fromBufferAttribute(r,c),u.uv=Rn.getInterpolation(ro,br,Sr,Er,to,no,io,new we)),s&&(to.fromBufferAttribute(s,a),no.fromBufferAttribute(s,l),io.fromBufferAttribute(s,c),u.uv1=Rn.getInterpolation(ro,br,Sr,Er,to,no,io,new we)),o&&(uu.fromBufferAttribute(o,a),du.fromBufferAttribute(o,l),hu.fromBufferAttribute(o,c),u.normal=Rn.getInterpolation(ro,br,Sr,Er,uu,du,hu,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Rn.getNormal(br,Sr,Er,d.normal),u.face=d}return u}class Fs extends En{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(d,2));function g(_,m,f,M,x,S,C,w,A,I,E){const y=S/A,U=C/I,k=S/2,L=C/2,$=w/2,q=A+1,B=I+1;let Z=0,H=0;const Q=new N;for(let ee=0;ee<B;ee++){const fe=ee*U-L;for(let Ce=0;Ce<q;Ce++){const Ge=Ce*y-k;Q[_]=Ge*M,Q[m]=fe*x,Q[f]=$,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Ce/A),d.push(1-ee/I),Z+=1}}for(let ee=0;ee<I;ee++)for(let fe=0;fe<A;fe++){const Ce=h+fe+q*ee,Ge=h+fe+q*(ee+1),j=h+(fe+1)+q*(ee+1),ne=h+(fe+1)+q*ee;l.push(Ce,Ge,ne),l.push(Ge,j,ne),H+=6}a.addGroup(p,H,E),p+=H,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=$r(i[t]);for(const r in n)e[r]=n[r]}return e}function sg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const og={clone:$r,merge:Ht};var ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jh extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new N,fu=new we,pu=new we;class Vt extends jh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Ar=1;class cg extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Tr,Ar,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Tr,Ar,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Tr,Ar,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Tr,Ar,e,t);a.layers=this.layers,this.add(a);const l=new Vt(Tr,Ar,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Tr,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qh extends Rt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ug extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fs(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Si});s.uniforms.tEquirect.value=t;const o=new sn(r,s),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=rn),new cg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Pa=new N,dg=new N,hg=new ze;class mi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Pa.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hg.getNormalMatrix(e),r=this.coplanarPoint(Pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Fn,ao=new N;class El{constructor(e=new mi,t=new mi,n=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],M=r[13],x=r[14],S=r[15];if(n[0].setComponents(l-s,h-c,m-p,S-f).normalize(),n[1].setComponents(l+s,h+c,m+p,S+f).normalize(),n[2].setComponents(l+o,h+u,m+g,S+M).normalize(),n[3].setComponents(l-o,h-u,m-g,S-M).normalize(),n[4].setComponents(l-a,h-d,m-_,S-x).normalize(),t===Qn)n[5].setComponents(l+a,h+d,m+_,S+x).normalize();else if(t===Oo)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wo extends En{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*h-o;for(let x=0;x<c;x++){const S=x*d-s;g.push(S,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const x=M+c*f,S=M+c*(f+1),C=M+1+c*(f+1),w=M+1+c*f;p.push(x,S,w),p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,P_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:_g,alphatest_fragment:vg,alphatest_pars_fragment:xg,aomap_fragment:yg,aomap_pars_fragment:Mg,batching_pars_vertex:bg,batching_vertex:Sg,begin_vertex:Eg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:wg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Ig,color_fragment:Ng,color_pars_fragment:Dg,color_pars_vertex:Ug,color_vertex:Og,common:Fg,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:kg,displacementmap_pars_vertex:Hg,displacementmap_vertex:zg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:Xg,envmap_fragment:$g,envmap_common_pars_fragment:jg,envmap_pars_fragment:qg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:a_,envmap_vertex:Yg,fog_vertex:Zg,fog_pars_vertex:Jg,fog_fragment:Qg,fog_pars_fragment:e_,gradientmap_pars_fragment:t_,lightmap_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:s_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:u_,lights_phong_pars_fragment:d_,lights_physical_fragment:h_,lights_physical_pars_fragment:f_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:y_,map_fragment:M_,map_pars_fragment:b_,map_particle_fragment:S_,map_particle_pars_fragment:E_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:A_,morphinstance_vertex:w_,morphcolor_vertex:R_,morphnormal_vertex:C_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:I_,normal_fragment_maps:N_,normal_pars_fragment:D_,normal_pars_vertex:U_,normal_vertex:O_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:z_,opaque_fragment:V_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:X_,dithering_fragment:$_,dithering_pars_fragment:j_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:Y_,shadowmap_pars_vertex:Z_,shadowmap_vertex:J_,shadowmask_pars_fragment:Q_,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:rv,specularmap_pars_fragment:sv,tonemapping_fragment:ov,tonemapping_pars_fragment:av,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:uv,uv_pars_vertex:dv,uv_vertex:hv,worldpos_vertex:fv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:_v,cube_vert:vv,cube_frag:xv,depth_vert:yv,depth_frag:Mv,distanceRGBA_vert:bv,distanceRGBA_frag:Sv,equirect_vert:Ev,equirect_frag:Tv,linedashed_vert:Av,linedashed_frag:wv,meshbasic_vert:Rv,meshbasic_frag:Cv,meshlambert_vert:Pv,meshlambert_frag:Lv,meshmatcap_vert:Iv,meshmatcap_frag:Nv,meshnormal_vert:Dv,meshnormal_frag:Uv,meshphong_vert:Ov,meshphong_frag:Fv,meshphysical_vert:Bv,meshphysical_frag:kv,meshtoon_vert:Hv,meshtoon_frag:zv,points_vert:Vv,points_frag:Gv,shadow_vert:Wv,shadow_frag:Xv,sprite_vert:$v,sprite_frag:jv},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},An={basic:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ht([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ht([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ht([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ht([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ht([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};An.physical={uniforms:Ht([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const lo={r:0,b:0,g:0},Bi=new Dn,qv=new Be;function Kv(i,e,t,n,r,s,o){const a=new Le(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(m,f){let M=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vo)?(u===void 0&&(u=new sn(new Fs(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:$r(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bi.copy(f.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Bi)),u.material.toneMapped=it.getTransfer(x.colorSpace)!==ut,(d!==x||h!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new sn(new Wo(2,2),new Ri({name:"BackgroundMaterial",uniforms:$r(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(lo,$h(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Yv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(y,U,k,L,$){let q=!1;const B=d(L,k,U);s!==B&&(s=B,c(s.object)),q=p(y,L,k,$),q&&g(y,L,k,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,U,k,L),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,U,k){const L=k.wireframe===!0;let $=n[y.id];$===void 0&&($={},n[y.id]=$);let q=$[U.id];q===void 0&&(q={},$[U.id]=q);let B=q[L];return B===void 0&&(B=h(l()),q[L]=B),B}function h(y){const U=[],k=[],L=[];for(let $=0;$<t;$++)U[$]=0,k[$]=0,L[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,U,k,L){const $=s.attributes,q=U.attributes;let B=0;const Z=k.getAttributes();for(const H in Z)if(Z[H].location>=0){const ee=$[H];let fe=q[H];if(fe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),ee===void 0||ee.attribute!==fe||fe&&ee.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function g(y,U,k,L){const $={},q=U.attributes;let B=0;const Z=k.getAttributes();for(const H in Z)if(Z[H].location>=0){let ee=q[H];ee===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const fe={};fe.attribute=ee,ee&&ee.data&&(fe.data=ee.data),$[H]=fe,B++}s.attributes=$,s.attributesNum=B,s.index=L}function _(){const y=s.newAttributes;for(let U=0,k=y.length;U<k;U++)y[U]=0}function m(y){f(y,0)}function f(y,U){const k=s.newAttributes,L=s.enabledAttributes,$=s.attributeDivisors;k[y]=1,L[y]===0&&(i.enableVertexAttribArray(y),L[y]=1),$[y]!==U&&(i.vertexAttribDivisor(y,U),$[y]=U)}function M(){const y=s.newAttributes,U=s.enabledAttributes;for(let k=0,L=U.length;k<L;k++)U[k]!==y[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function x(y,U,k,L,$,q,B){B===!0?i.vertexAttribIPointer(y,U,k,$,q):i.vertexAttribPointer(y,U,k,L,$,q)}function S(y,U,k,L){_();const $=L.attributes,q=k.getAttributes(),B=U.defaultAttributeValues;for(const Z in q){const H=q[Z];if(H.location>=0){let Q=$[Z];if(Q===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const ee=Q.normalized,fe=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;const Ge=Ce.buffer,j=Ce.type,ne=Ce.bytesPerElement,ue=j===i.INT||j===i.UNSIGNED_INT||Q.gpuType===wh;if(Q.isInterleavedBufferAttribute){const ae=Q.data,Te=ae.stride,ie=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)f(H.location+Ee,ae.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee,fe/H.locationSize,j,ee,Te*ne,(ie+fe/H.locationSize*Ee)*ne,ue)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)f(H.location+ae,Q.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ae=0;ae<H.locationSize;ae++)x(H.location+ae,fe/H.locationSize,j,ee,fe*ne,fe/H.locationSize*ae*ne,ue)}}else if(B!==void 0){const ee=B[Z];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(H.location,ee);break;case 3:i.vertexAttrib3fv(H.location,ee);break;case 4:i.vertexAttrib4fv(H.location,ee);break;default:i.vertexAttrib1fv(H.location,ee)}}}}M()}function C(){I();for(const y in n){const U=n[y];for(const k in U){const L=U[k];for(const $ in L)u(L[$].object),delete L[$];delete U[k]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const U=n[y.id];for(const k in U){const L=U[k];for(const $ in L)u(L[$].object),delete L[$];delete U[k]}delete n[y.id]}function A(y){for(const U in n){const k=n[U];if(k[y.id]===void 0)continue;const L=k[y.id];for(const $ in L)u(L[$].object),delete L[$];delete k[y.id]}}function I(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Zv(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{d.multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Jv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:f,maxSamples:M}}function Qv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new mi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let S=f.clippingState||null;l.value=S,S=u(g,h,x,p);for(let C=0;C!==x;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function e0(i){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=Hr:a===al&&(o.mapping=zr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ug(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Tl extends jh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,mu=[.125,.215,.35,.446,.526,.582],Xi=20,La=new Tl,gu=new Le;let Ia=null,Na=0,Da=0,Ua=!1;const Gi=(1+Math.sqrt(5))/2,wr=1/Gi,_u=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Gi,wr),new N(0,Gi,-wr),new N(wr,0,Gi),new N(-wr,0,Gi),new N(Gi,wr,0),new N(-Gi,wr,0)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Na,Da),this._renderer.xr.enabled=Ua,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Io,format:xn,colorSpace:It,depthBuffer:!1},r=xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(s)),this._blurMaterial=n0(s,e,t)}return r}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,r){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(gu),u.toneMapping=Ei,u.autoClear=!1;const p=new ji({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new sn(new Fs,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(gu),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;co(r,M*x,f>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_u[(r-1)%_u.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new sn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const f=[];let M=0;for(let A=0;A<Xi;++A){const I=A/_,E=Math.exp(-I*I/2);f.push(E),A===0?M+=E:A<m&&(M+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const S=this._sizeLods[r],C=3*S*(r>x-Ir?r-x+Ir:0),w=4*(this._cubeSize-S);co(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(d,La)}}function t0(i){const e=[],t=[],n=[];let r=i;const s=i-Ir+1+mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ir?l=mu[o-i+Ir-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,I=w>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(E,_*g*w),x.set(h,m*g*w);const y=[w,w,w,w,w,w];S.set(y,f*g*w)}const C=new En;C.setAttribute("position",new Wt(M,_)),C.setAttribute("uv",new Wt(x,m)),C.setAttribute("faceIndex",new Wt(S,f)),e.push(C),r>Ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xu(i,e,t){const n=new er(i,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function n0(i,e,t){const n=new Float32Array(Xi),r=new N(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function yu(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Mu(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ol||l===al,u=l===Hr||l===zr;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new vu(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new vu(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function r0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function s0(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,S=M.length;x<S;x+=3){const C=M[x+0],w=M[x+1],A=M[x+2];h.push(C,w,w,A,A,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const C=x+0,w=x+1,A=x+2;h.push(C,w,w,A,A,C)}}else return;const m=new(kh(h)?Xh:Wh)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function o0(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,d*o,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(d[_]/o,h[_]);else{g.multiDrawElementsWEBGL(n,h,0,s,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function a0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function l0(i,e,t){const n=new WeakMap,r=new ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*C*4*d),A=new Vh(w,S,C,d);A.type=Cn,A.needsUpdate=!0;const I=x*4;for(let y=0;y<d;y++){const U=m[y],k=f[y],L=M[y],$=S*C*4*y;for(let q=0;q<U.count;q++){const B=q*I;p===!0&&(r.fromBufferAttribute(U,q),w[$+B+0]=r.x,w[$+B+1]=r.y,w[$+B+2]=r.z,w[$+B+3]=0),g===!0&&(r.fromBufferAttribute(k,q),w[$+B+4]=r.x,w[$+B+5]=r.y,w[$+B+6]=r.z,w[$+B+7]=0),_===!0&&(r.fromBufferAttribute(L,q),w[$+B+8]=r.x,w[$+B+9]=r.y,w[$+B+10]=r.z,w[$+B+11]=L.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new we(S,C)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function c0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Yh extends Rt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Dr,u!==Dr&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Dr&&(n=Gr),n===void 0&&u===Cs&&(n=Os),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zh=new Rt,Jh=new Yh(1,1);Jh.compareFunction=Fh;const Qh=new Vh,ef=new qm,tf=new qh,bu=[],Su=[],Eu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function p0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Et(t,n)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Et(t,n)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),Et(t,n)}}function _0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function T0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Jh:Zh;t.setTexture2D(e||s,r)}function A0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ef,r)}function w0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tf,r)}function R0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qh,r)}function C0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return h0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,e){i.uniform1fv(this.addr,e)}function L0(i,e){const t=ts(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){const t=ts(e,this.size,3);i.uniform3fv(this.addr,t)}function N0(i,e){const t=ts(e,this.size,4);i.uniform4fv(this.addr,t)}function D0(i,e){const t=ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U0(i,e){const t=ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O0(i,e){const t=ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function B0(i,e){i.uniform2iv(this.addr,e)}function k0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function z0(i,e){i.uniform1uiv(this.addr,e)}function V0(i,e){i.uniform2uiv(this.addr,e)}function G0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function X0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zh,s[o])}function $0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ef,s[o])}function j0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tf,s[o])}function q0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qh,s[o])}function K0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return I0;case 35666:return N0;case 35674:return D0;case 35675:return U0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return z0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return q0}}class Y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}}class Z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K0(t.type)}}class J0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function wu(i,e){i.seq.push(e),i.map[e.id]=e}function Q0(i,e,t){const n=i.name,r=n.length;for(Oa.lastIndex=0;;){const s=Oa.exec(n),o=Oa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wu(t,c===void 0?new Y0(a,i,e):new Z0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new J0(a),wu(t,d)),t=d}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Q0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ru(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ex=37297;let tx=0;function nx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ix(i){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(i);let n;switch(e===t?n="":e===Uo&&t===Do?n="LinearDisplayP3ToLinearSRGB":e===Do&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case It:case Go:return[n,"LinearTransferOETF"];case zt:case Ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nx(i.getShaderSource(e),o)}else return r}function rx(i,e){const t=ix(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sx(i,e){let t;switch(e){case Zp:t="Linear";break;case Jp:t="Reinhard";break;case Qp:t="OptimizedCineon";break;case em:t="ACESFilmic";break;case nm:t="AgX";break;case im:t="Neutral";break;case tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function ax(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xs(i){return i!==""}function Pu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(cx,dx)}const ux=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dx(i,e){let t=He[e];if(t===void 0){const n=ux.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(hx,fx)}function fx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function px(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function mx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hr:case zr:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function _x(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Kp:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function vx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xx(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=px(t),c=mx(t),u=gx(t),d=_x(t),h=vx(t),p=ox(t),g=ax(s),_=r.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),f=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?He.tonemapping_pars_fragment:"",t.toneMapping!==Ei?sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),o=ul(o),o=Pu(o,t),o=Lu(o,t),a=ul(a),a=Pu(a,t),a=Lu(a,t),o=Iu(o),a=Iu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,S=M+f+a,C=Ru(r,r.VERTEX_SHADER,x),w=Ru(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(U){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(w).trim();let q=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,w);else{const Z=Cu(r,C,"vertex"),H=Cu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+Z+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||$==="")&&(B=!1);B&&(U.diagnostics={runnable:q,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:$,prefix:f}})}r.deleteShader(C),r.deleteShader(w),I=new To(r,_),E=lx(r,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,ex)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let yx=0;class Mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bx(e),t.set(e,n)),n}}class bx{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}}function Sx(i,e,t,n,r,s,o){const a=new Sl,l=new Mx,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,U,k,L){const $=k.fog,q=L.geometry,B=E.isMeshStandardMaterial?k.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),H=Z&&Z.mapping===Vo?Z.image.height:null,Q=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=ee!==void 0?ee.length:0;let Ce=0;q.morphAttributes.position!==void 0&&(Ce=1),q.morphAttributes.normal!==void 0&&(Ce=2),q.morphAttributes.color!==void 0&&(Ce=3);let Ge,j,ne,ue;if(Q){const Tt=An[Q];Ge=Tt.vertexShader,j=Tt.fragmentShader}else Ge=E.vertexShader,j=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const ae=i.getRenderTarget(),Te=L.isInstancedMesh===!0,ie=L.isBatchedMesh===!0,Ee=!!E.map,O=!!E.matcap,Pe=!!Z,ye=!!E.aoMap,at=!!E.lightMap,Ae=!!E.bumpMap,Ke=!!E.normalMap,R=!!E.displacementMap,b=!!E.emissiveMap,G=!!E.metalnessMap,K=!!E.roughnessMap,J=E.anisotropy>0,te=E.clearcoat>0,Me=E.iridescence>0,D=E.sheen>0,oe=E.transmission>0,ge=J&&!!E.anisotropyMap,re=te&&!!E.clearcoatMap,de=te&&!!E.clearcoatNormalMap,Ie=te&&!!E.clearcoatRoughnessMap,_e=Me&&!!E.iridescenceMap,ve=Me&&!!E.iridescenceThicknessMap,je=D&&!!E.sheenColorMap,Ye=D&&!!E.sheenRoughnessMap,tt=!!E.specularMap,Qe=!!E.specularColorMap,nt=!!E.specularIntensityMap,be=oe&&!!E.transmissionMap,v=oe&&!!E.thicknessMap,z=!!E.gradientMap,Y=!!E.alphaMap,le=E.alphaTest>0,pe=!!E.alphaHash,Ze=!!E.extensions;let Xe=Ei;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const dt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:j,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ie,instancing:Te,instancingColor:Te&&L.instanceColor!==null,instancingMorph:Te&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:It,alphaToCoverage:!!E.alphaToCoverage,map:Ee,matcap:O,envMap:Pe,envMapMode:Pe&&Z.mapping,envMapCubeUVHeight:H,aoMap:ye,lightMap:at,bumpMap:Ae,normalMap:Ke,displacementMap:h&&R,emissiveMap:b,normalMapObjectSpace:Ke&&E.normalMapType===vm,normalMapTangentSpace:Ke&&E.normalMapType===Oh,metalnessMap:G,roughnessMap:K,anisotropy:J,anisotropyMap:ge,clearcoat:te,clearcoatMap:re,clearcoatNormalMap:de,clearcoatRoughnessMap:Ie,iridescence:Me,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:D,sheenColorMap:je,sheenRoughnessMap:Ye,specularMap:tt,specularColorMap:Qe,specularIntensityMap:nt,transmission:oe,transmissionMap:be,thicknessMap:v,gradientMap:z,opaque:E.transparent===!1&&E.blending===Nr&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:le,alphaHash:pe,combine:E.combine,mapUv:Ee&&_(E.map.channel),aoMapUv:ye&&_(E.aoMap.channel),lightMapUv:at&&_(E.lightMap.channel),bumpMapUv:Ae&&_(E.bumpMap.channel),normalMapUv:Ke&&_(E.normalMap.channel),displacementMapUv:R&&_(E.displacementMap.channel),emissiveMapUv:b&&_(E.emissiveMap.channel),metalnessMapUv:G&&_(E.metalnessMap.channel),roughnessMapUv:K&&_(E.roughnessMap.channel),anisotropyMapUv:ge&&_(E.anisotropyMap.channel),clearcoatMapUv:re&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(E.sheenRoughnessMap.channel),specularMapUv:tt&&_(E.specularMap.channel),specularColorMapUv:Qe&&_(E.specularColorMap.channel),specularIntensityMapUv:nt&&_(E.specularIntensityMap.channel),transmissionMapUv:be&&_(E.transmissionMap.channel),thicknessMapUv:v&&_(E.thicknessMap.channel),alphaMapUv:Y&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ke||J),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(Ee||Y),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===jt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ze&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(M(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const y=g[E.type];let U;if(y){const k=An[y];U=og.clone(k.uniforms)}else U=E.uniforms;return U}function C(E,y){let U;for(let k=0,L=u.length;k<L;k++){const $=u[k];if($.cacheKey===y){U=$,++U.usedTimes;break}}return U===void 0&&(U=new xx(i,y,E,s),u.push(U)),U}function w(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function Ex(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Du(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Tx),n.length>1&&n.sort(h||Du),r.length>1&&r.sort(h||Du)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ax(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Uu,i.set(n,[o])):r>=s.length?(o=new Uu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Le};break;case"SpotLight":t={position:new N,direction:new N,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cx=0;function Px(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lx(i){const e=new wx,t=Rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new Be,o=new Be;function a(c,u){let d=0,h=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let g=0,_=0,m=0,f=0,M=0,x=0,S=0,C=0,w=0,A=0,I=0;c.sort(Px);const E=u===!0?Math.PI:1;for(let U=0,k=c.length;U<k;U++){const L=c[U],$=L.color,q=L.intensity,B=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=$.r*q*E,h+=$.g*q*E,p+=$.b*q*E;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],q);I++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=L.shadow.matrix,x++}n.directional[g]=H,g++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy($).multiplyScalar(q*E),H.distance=B,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[m]=H;const Q=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Q.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[m]=Q.matrix,L.castShadow){const ee=t.get(L);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[m]=ee,n.spotShadowMap[m]=Z,C++}m++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy($).multiplyScalar(q),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[f]=H,f++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*E),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=L.shadow.matrix,S++}n.point[_]=H,_++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(q*E),H.groundColor.copy(L.groundColor).multiplyScalar(q*E),n.hemi[M]=H,M++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const y=n.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==m||y.rectAreaLength!==f||y.hemiLength!==M||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==w||y.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=f,n.point.length=_,n.hemi.length=M,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=C+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,y.directionalLength=g,y.pointLength=_,y.spotLength=m,y.rectAreaLength=f,y.hemiLength=M,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=w,y.numLightProbes=I,n.version=Cx++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const x=c[f];if(x.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ou(i){const e=new Lx(i),t=[],n=[];function r(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ix(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ou(i),e.set(r,[a])):s>=o.length?(a=new Ou(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Nx extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dx extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fx(i,e,t){let n=new El;const r=new we,s=new we,o=new ct,a=new Nx({depthPacking:_m}),l=new Dx,c={},u=t.maxTextureSize,d={[ei]:jt,[jt]:ei,[wn]:wn},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ux,fragmentShader:Ox}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let f=this.type;this.render=function(w,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=f!==jn&&this.type===jn,$=f===jn&&this.type!==jn;for(let q=0,B=w.length;q<B;q++){const Z=w[q],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Q=H.getFrameExtents();if(r.multiply(Q),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,H.mapSize.y=s.y)),H.map===null||L===!0||$===!0){const fe=this.type!==jn?{minFilter:Gt,magFilter:Gt}:{};H.map!==null&&H.map.dispose(),H.map=new er(r.x,r.y,fe),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ee=H.getViewportCount();for(let fe=0;fe<ee;fe++){const Ce=H.getViewport(fe);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),k.viewport(o),H.updateMatrices(Z,fe),n=H.getFrustum(),S(A,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&M(H,I),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,U)};function M(w,A){const I=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new er(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,I,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function x(w,A,I,E){let y=null;const U=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)y=U;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=y.uuid,L=A.uuid;let $=c[k];$===void 0&&($={},c[k]=$);let q=$[L];q===void 0&&(q=y.clone(),$[L]=q,A.addEventListener("dispose",C)),y=q}if(y.visible=A.visible,y.wireframe=A.wireframe,E===jn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=I}return y}function S(w,A,I,E,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const L=e.update(w),$=w.material;if(Array.isArray($)){const q=L.groups;for(let B=0,Z=q.length;B<Z;B++){const H=q[B],Q=$[H.materialIndex];if(Q&&Q.visible){const ee=x(w,Q,E,y);w.onBeforeShadow(i,w,A,I,L,ee,H),i.renderBufferDirect(I,null,L,ee,w,H),w.onAfterShadow(i,w,A,I,L,ee,H)}}}else if($.visible){const q=x(w,$,E,y);w.onBeforeShadow(i,w,A,I,L,q,null),i.renderBufferDirect(I,null,L,q,w,null),w.onAfterShadow(i,w,A,I,L,q,null)}}const k=w.children;for(let L=0,$=k.length;L<$;L++)S(k[L],A,I,E,y)}function C(w){w.target.removeEventListener("dispose",C);for(const I in c){const E=c[I],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function Bx(i){function e(){let v=!1;const z=new ct;let Y=null;const le=new ct(0,0,0,0);return{setMask:function(pe){Y!==pe&&!v&&(i.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){v=pe},setClear:function(pe,Ze,Xe,dt,Tt){Tt===!0&&(pe*=dt,Ze*=dt,Xe*=dt),z.set(pe,Ze,Xe,dt),le.equals(z)===!1&&(i.clearColor(pe,Ze,Xe,dt),le.copy(z))},reset:function(){v=!1,Y=null,le.set(-1,0,0,0)}}}function t(){let v=!1,z=null,Y=null,le=null;return{setTest:function(pe){pe?ue(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(pe){z!==pe&&!v&&(i.depthMask(pe),z=pe)},setFunc:function(pe){if(Y!==pe){switch(pe){case Vp:i.depthFunc(i.NEVER);break;case Gp:i.depthFunc(i.ALWAYS);break;case Wp:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Xp:i.depthFunc(i.EQUAL);break;case $p:i.depthFunc(i.GEQUAL);break;case jp:i.depthFunc(i.GREATER);break;case qp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=pe}},setLocked:function(pe){v=pe},setClear:function(pe){le!==pe&&(i.clearDepth(pe),le=pe)},reset:function(){v=!1,z=null,Y=null,le=null}}}function n(){let v=!1,z=null,Y=null,le=null,pe=null,Ze=null,Xe=null,dt=null,Tt=null;return{setTest:function(ot){v||(ot?ue(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ot){z!==ot&&!v&&(i.stencilMask(ot),z=ot)},setFunc:function(ot,xt,yt){(Y!==ot||le!==xt||pe!==yt)&&(i.stencilFunc(ot,xt,yt),Y=ot,le=xt,pe=yt)},setOp:function(ot,xt,yt){(Ze!==ot||Xe!==xt||dt!==yt)&&(i.stencilOp(ot,xt,yt),Ze=ot,Xe=xt,dt=yt)},setLocked:function(ot){v=ot},setClear:function(ot){Tt!==ot&&(i.clearStencil(ot),Tt=ot)},reset:function(){v=!1,z=null,Y=null,le=null,pe=null,Ze=null,Xe=null,dt=null,Tt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,M=null,x=null,S=null,C=null,w=new Le(0,0,0),A=0,I=!1,E=null,y=null,U=null,k=null,L=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=B>=2);let H=null,Q={};const ee=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ce=new ct().fromArray(ee),Ge=new ct().fromArray(fe);function j(v,z,Y,le){const pe=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(v,Ze),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<Y;Xe++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(z+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Ze}const ne={};ne[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),s.setFunc(Po),Ae(!1),Ke(pc),ue(i.CULL_FACE),ye(Si);function ue(v){c[v]!==!0&&(i.enable(v),c[v]=!0)}function ae(v){c[v]!==!1&&(i.disable(v),c[v]=!1)}function Te(v,z){return u[v]!==z?(i.bindFramebuffer(v,z),u[v]=z,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function ie(v,z){let Y=h,le=!1;if(v){Y=d.get(z),Y===void 0&&(Y=[],d.set(z,Y));const pe=v.textures;if(Y.length!==pe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Xe=pe.length;Ze<Xe;Ze++)Y[Ze]=i.COLOR_ATTACHMENT0+Ze;Y.length=pe.length,le=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,le=!0);le&&i.drawBuffers(Y)}function Ee(v){return p!==v?(i.useProgram(v),p=v,!0):!1}const O={[Wi]:i.FUNC_ADD,[Tp]:i.FUNC_SUBTRACT,[Ap]:i.FUNC_REVERSE_SUBTRACT};O[wp]=i.MIN,O[Rp]=i.MAX;const Pe={[Cp]:i.ZERO,[Pp]:i.ONE,[Lp]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[Up]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Ip]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[Op]:i.ONE_MINUS_DST_COLOR,[Dp]:i.ONE_MINUS_DST_ALPHA,[Bp]:i.CONSTANT_COLOR,[kp]:i.ONE_MINUS_CONSTANT_COLOR,[Hp]:i.CONSTANT_ALPHA,[zp]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(v,z,Y,le,pe,Ze,Xe,dt,Tt,ot){if(v===Si){g===!0&&(ae(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),v!==Ep){if(v!==_||ot!==I){if((m!==Wi||x!==Wi)&&(i.blendEquation(i.FUNC_ADD),m=Wi,x=Wi),ot)switch(v){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,M=null,S=null,C=null,w.set(0,0,0),A=0,_=v,I=ot}return}pe=pe||z,Ze=Ze||Y,Xe=Xe||le,(z!==m||pe!==x)&&(i.blendEquationSeparate(O[z],O[pe]),m=z,x=pe),(Y!==f||le!==M||Ze!==S||Xe!==C)&&(i.blendFuncSeparate(Pe[Y],Pe[le],Pe[Ze],Pe[Xe]),f=Y,M=le,S=Ze,C=Xe),(dt.equals(w)===!1||Tt!==A)&&(i.blendColor(dt.r,dt.g,dt.b,Tt),w.copy(dt),A=Tt),_=v,I=!1}function at(v,z){v.side===wn?ae(i.CULL_FACE):ue(i.CULL_FACE);let Y=v.side===jt;z&&(Y=!Y),Ae(Y),v.blending===Nr&&v.transparent===!1?ye(Si):ye(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),r.setMask(v.colorWrite);const le=v.stencilWrite;o.setTest(le),le&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),b(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(v){E!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),E=v)}function Ke(v){v!==Mp?(ue(i.CULL_FACE),v!==y&&(v===pc?i.cullFace(i.BACK):v===bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),y=v}function R(v){v!==U&&(q&&i.lineWidth(v),U=v)}function b(v,z,Y){v?(ue(i.POLYGON_OFFSET_FILL),(k!==z||L!==Y)&&(i.polygonOffset(z,Y),k=z,L=Y)):ae(i.POLYGON_OFFSET_FILL)}function G(v){v?ue(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function K(v){v===void 0&&(v=i.TEXTURE0+$-1),H!==v&&(i.activeTexture(v),H=v)}function J(v,z,Y){Y===void 0&&(H===null?Y=i.TEXTURE0+$-1:Y=H);let le=Q[Y];le===void 0&&(le={type:void 0,texture:void 0},Q[Y]=le),(le.type!==v||le.texture!==z)&&(H!==Y&&(i.activeTexture(Y),H=Y),i.bindTexture(v,z||ne[v]),le.type=v,le.texture=z)}function te(){const v=Q[H];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function Me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function D(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function je(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ye(v){Ce.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Ce.copy(v))}function tt(v){Ge.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),Ge.copy(v))}function Qe(v,z){let Y=l.get(z);Y===void 0&&(Y=new WeakMap,l.set(z,Y));let le=Y.get(v);le===void 0&&(le=i.getUniformBlockIndex(z,v.name),Y.set(v,le))}function nt(v,z){const le=l.get(z).get(v);a.get(z)!==le&&(i.uniformBlockBinding(z,le,v.__bindingPointIndex),a.set(z,le))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,Q={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,M=null,x=null,S=null,C=null,w=new Le(0,0,0),A=0,I=!1,E=null,y=null,U=null,k=null,L=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ae,bindFramebuffer:Te,drawBuffers:ie,useProgram:Ee,setBlending:ye,setMaterial:at,setFlipSided:Ae,setCullFace:Ke,setLineWidth:R,setPolygonOffset:b,setScissorTest:G,activeTexture:K,bindTexture:J,unbindTexture:te,compressedTexImage2D:Me,compressedTexImage3D:D,texImage2D:ve,texImage3D:je,updateUBOMapping:Qe,uniformBlockBinding:nt,texStorage2D:Ie,texStorage3D:_e,texSubImage2D:oe,texSubImage3D:ge,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Ye,viewport:tt,reset:be}}function kx(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):Ls("canvas")}function _(R,b,G){let K=1;const J=Ke(R);if((J.width>G||J.height>G)&&(K=G/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(K*J.width),Me=Math.floor(K*J.height);d===void 0&&(d=g(te,Me));const D=b?g(te,Me):d;return D.width=te,D.height=Me,D.getContext("2d").drawImage(R,0,0,te,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+Me+")."),D}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Gt&&R.minFilter!==rn}function f(R){i.generateMipmap(R)}function M(R,b,G,K,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=b;if(b===i.RED&&(G===i.FLOAT&&(te=i.R32F),G===i.HALF_FLOAT&&(te=i.R16F),G===i.UNSIGNED_BYTE&&(te=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.R8UI),G===i.UNSIGNED_SHORT&&(te=i.R16UI),G===i.UNSIGNED_INT&&(te=i.R32UI),G===i.BYTE&&(te=i.R8I),G===i.SHORT&&(te=i.R16I),G===i.INT&&(te=i.R32I)),b===i.RG&&(G===i.FLOAT&&(te=i.RG32F),G===i.HALF_FLOAT&&(te=i.RG16F),G===i.UNSIGNED_BYTE&&(te=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RG8UI),G===i.UNSIGNED_SHORT&&(te=i.RG16UI),G===i.UNSIGNED_INT&&(te=i.RG32UI),G===i.BYTE&&(te=i.RG8I),G===i.SHORT&&(te=i.RG16I),G===i.INT&&(te=i.RG32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),b===i.RGBA){const Me=J?No:it.getTransfer(K);G===i.FLOAT&&(te=i.RGBA32F),G===i.HALF_FLOAT&&(te=i.RGBA16F),G===i.UNSIGNED_BYTE&&(te=Me===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function S(R){const b=R.target;b.removeEventListener("dispose",S),w(b),b.isVideoTexture&&u.delete(b)}function C(R){const b=R.target;b.removeEventListener("dispose",C),I(b)}function w(R){const b=n.get(R);if(b.__webglInit===void 0)return;const G=R.source,K=h.get(G);if(K){const J=K[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(R),Object.keys(K).length===0&&h.delete(G)}n.remove(R)}function A(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const G=R.source,K=h.get(G);delete K[b.__cacheKey],o.memory.textures--}function I(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let J=0;J<b.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[K][J]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=R.textures;for(let K=0,J=G.length;K<J;K++){const te=n.get(G[K]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(R)}let E=0;function y(){E=0}function U(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function k(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function L(R,b){const G=n.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,R,b);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function $(R,b){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function q(R,b){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function B(R,b){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ge(G,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const Z={[Vr]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},H={[Gt]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},Q={[xm]:i.NEVER,[Tm]:i.ALWAYS,[ym]:i.LESS,[Fh]:i.LEQUAL,[Mm]:i.EQUAL,[Em]:i.GEQUAL,[bm]:i.GREATER,[Sm]:i.NOTEQUAL};function ee(R,b){if(b.type===Cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===Eo||b.magFilter===vs||b.magFilter===Jn||b.minFilter===rn||b.minFilter===Eo||b.minFilter===vs||b.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Z[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,H[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,H[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gt||b.minFilter!==vs&&b.minFilter!==Jn||b.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function fe(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));const K=b.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const te=k(b);if(te!==R.__cacheKey){J[te]===void 0&&(J[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[te].usedTimes++;const Me=J[R.__cacheKey];Me!==void 0&&(J[R.__cacheKey].usedTimes--,Me.usedTimes===0&&A(b)),R.__cacheKey=te,R.__webglTexture=J[te].texture}return G}function Ce(R,b,G){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const J=fe(R,b),te=b.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+G);const Me=n.get(te);if(te.version!==Me.__version||J===!0){t.activeTexture(i.TEXTURE0+G);const D=it.getPrimaries(it.workingColorSpace),oe=b.colorSpace===_i?null:it.getPrimaries(b.colorSpace),ge=b.colorSpace===_i||D===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let re=_(b.image,!1,r.maxTextureSize);re=Ae(b,re);const de=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type);let _e=M(b.internalFormat,de,Ie,b.colorSpace,b.isVideoTexture);ee(K,b);let ve;const je=b.mipmaps,Ye=b.isVideoTexture!==!0&&_e!==Dh,tt=Me.__version===void 0||J===!0,Qe=te.dataReady,nt=x(b,re);if(b.isDepthTexture)_e=i.DEPTH_COMPONENT16,b.type===Cn?_e=i.DEPTH_COMPONENT32F:b.type===Gr?_e=i.DEPTH_COMPONENT24:b.type===Os&&(_e=i.DEPTH24_STENCIL8),tt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,_e,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,de,Ie,null));else if(b.isDataTexture)if(je.length>0){Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,nt,_e,je[0].width,je[0].height);for(let be=0,v=je.length;be<v;be++)ve=je[be],Ye?Qe&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,ve.width,ve.height,de,Ie,ve.data):t.texImage2D(i.TEXTURE_2D,be,_e,ve.width,ve.height,0,de,Ie,ve.data);b.generateMipmaps=!1}else Ye?(tt&&t.texStorage2D(i.TEXTURE_2D,nt,_e,re.width,re.height),Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,de,Ie,re.data)):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,de,Ie,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,_e,je[0].width,je[0].height,re.depth);for(let be=0,v=je.length;be<v;be++)ve=je[be],b.format!==xn?de!==null?Ye?Qe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ve.width,ve.height,re.depth,de,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,_e,ve.width,ve.height,re.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ve.width,ve.height,re.depth,de,Ie,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,_e,ve.width,ve.height,re.depth,0,de,Ie,ve.data)}else{Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,nt,_e,je[0].width,je[0].height);for(let be=0,v=je.length;be<v;be++)ve=je[be],b.format!==xn?de!==null?Ye?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,ve.width,ve.height,de,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,be,_e,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Qe&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,ve.width,ve.height,de,Ie,ve.data):t.texImage2D(i.TEXTURE_2D,be,_e,ve.width,ve.height,0,de,Ie,ve.data)}else if(b.isDataArrayTexture)Ye?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,_e,re.width,re.height,re.depth),Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Ie,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,re.width,re.height,re.depth,0,de,Ie,re.data);else if(b.isData3DTexture)Ye?(tt&&t.texStorage3D(i.TEXTURE_3D,nt,_e,re.width,re.height,re.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Ie,re.data)):t.texImage3D(i.TEXTURE_3D,0,_e,re.width,re.height,re.depth,0,de,Ie,re.data);else if(b.isFramebufferTexture){if(tt)if(Ye)t.texStorage2D(i.TEXTURE_2D,nt,_e,re.width,re.height);else{let be=re.width,v=re.height;for(let z=0;z<nt;z++)t.texImage2D(i.TEXTURE_2D,z,_e,be,v,0,de,Ie,null),be>>=1,v>>=1}}else if(je.length>0){if(Ye&&tt){const be=Ke(je[0]);t.texStorage2D(i.TEXTURE_2D,nt,_e,be.width,be.height)}for(let be=0,v=je.length;be<v;be++)ve=je[be],Ye?Qe&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,de,Ie,ve):t.texImage2D(i.TEXTURE_2D,be,_e,de,Ie,ve);b.generateMipmaps=!1}else if(Ye){if(tt){const be=Ke(re);t.texStorage2D(i.TEXTURE_2D,nt,_e,be.width,be.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ie,re)}else t.texImage2D(i.TEXTURE_2D,0,_e,de,Ie,re);m(b)&&f(K),Me.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ge(R,b,G){if(b.image.length!==6)return;const K=fe(R,b),J=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const te=n.get(J);if(J.version!==te.__version||K===!0){t.activeTexture(i.TEXTURE0+G);const Me=it.getPrimaries(it.workingColorSpace),D=b.colorSpace===_i?null:it.getPrimaries(b.colorSpace),oe=b.colorSpace===_i||Me===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ge=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,de=[];for(let v=0;v<6;v++)!ge&&!re?de[v]=_(b.image[v],!0,r.maxCubemapSize):de[v]=re?b.image[v].image:b.image[v],de[v]=Ae(b,de[v]);const Ie=de[0],_e=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),je=M(b.internalFormat,_e,ve,b.colorSpace),Ye=b.isVideoTexture!==!0,tt=te.__version===void 0||K===!0,Qe=J.dataReady;let nt=x(b,Ie);ee(i.TEXTURE_CUBE_MAP,b);let be;if(ge){Ye&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,je,Ie.width,Ie.height);for(let v=0;v<6;v++){be=de[v].mipmaps;for(let z=0;z<be.length;z++){const Y=be[z];b.format!==xn?_e!==null?Ye?Qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z,0,0,Y.width,Y.height,_e,Y.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z,je,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z,0,0,Y.width,Y.height,_e,ve,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z,je,Y.width,Y.height,0,_e,ve,Y.data)}}}else{if(be=b.mipmaps,Ye&&tt){be.length>0&&nt++;const v=Ke(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,je,v.width,v.height)}for(let v=0;v<6;v++)if(re){Ye?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,de[v].width,de[v].height,_e,ve,de[v].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,je,de[v].width,de[v].height,0,_e,ve,de[v].data);for(let z=0;z<be.length;z++){const le=be[z].image[v].image;Ye?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z+1,0,0,le.width,le.height,_e,ve,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z+1,je,le.width,le.height,0,_e,ve,le.data)}}else{Ye?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,_e,ve,de[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,je,_e,ve,de[v]);for(let z=0;z<be.length;z++){const Y=be[z];Ye?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z+1,0,0,_e,ve,Y.image[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,z+1,je,_e,ve,Y.image[v])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),te.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function j(R,b,G,K,J,te){const Me=s.convert(G.format,G.colorSpace),D=s.convert(G.type),oe=M(G.internalFormat,Me,D,G.colorSpace);if(!n.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>te),de=Math.max(1,b.height>>te);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,te,oe,re,de,b.depth,0,Me,D,null):t.texImage2D(J,te,oe,re,de,0,Me,D,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ye(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(G).__webglTexture,0,Pe(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(G).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(R,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let K=i.DEPTH_COMPONENT24;if(G||ye(b)){const J=b.depthTexture;J&&J.isDepthTexture&&(J.type===Cn?K=i.DEPTH_COMPONENT32F:J.type===Gr&&(K=i.DEPTH_COMPONENT24));const te=Pe(b);ye(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,K,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,K,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const K=Pe(b);G&&ye(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,b.width,b.height):ye(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const K=b.textures;for(let J=0;J<K.length;J++){const te=K[J],Me=s.convert(te.format,te.colorSpace),D=s.convert(te.type),oe=M(te.internalFormat,Me,D,te.colorSpace),ge=Pe(b);G&&ye(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,oe,b.width,b.height):ye(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,oe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,J=Pe(b);if(b.depthTexture.format===Dr)ye(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Cs)ye(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ae(R){const b=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,R)}else if(G){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=i.createRenderbuffer(),ne(b.__webglDepthbuffer[K],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ne(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(R,b,G){const K=n.get(R);b!==void 0&&j(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ae(R)}function ie(R){const b=R.texture,G=n.get(R),K=n.get(b);R.addEventListener("dispose",C);const J=R.textures,te=R.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),te){G.__webglFramebuffer=[];for(let D=0;D<6;D++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[D]=[];for(let oe=0;oe<b.mipmaps.length;oe++)G.__webglFramebuffer[D][oe]=i.createFramebuffer()}else G.__webglFramebuffer[D]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let D=0;D<b.mipmaps.length;D++)G.__webglFramebuffer[D]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Me)for(let D=0,oe=J.length;D<oe;D++){const ge=n.get(J[D]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let D=0;D<J.length;D++){const oe=J[D];G.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[D]);const ge=s.convert(oe.format,oe.colorSpace),re=s.convert(oe.type),de=M(oe.internalFormat,ge,re,oe.colorSpace,R.isXRRenderTarget===!0),Ie=Pe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,G.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ee(i.TEXTURE_CUBE_MAP,b);for(let D=0;D<6;D++)if(b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)j(G.__webglFramebuffer[D][oe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,oe);else j(G.__webglFramebuffer[D],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);m(b)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let D=0,oe=J.length;D<oe;D++){const ge=J[D],re=n.get(ge);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),ee(i.TEXTURE_2D,ge),j(G.__webglFramebuffer,R,ge,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,0),m(ge)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let D=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(D=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,K.__webglTexture),ee(D,b),b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)j(G.__webglFramebuffer[oe],R,b,i.COLOR_ATTACHMENT0,D,oe);else j(G.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,D,0);m(b)&&f(D),t.unbindTexture()}R.depthBuffer&&ae(R)}function Ee(R){const b=R.textures;for(let G=0,K=b.length;G<K;G++){const J=b[G];if(m(J)){const te=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(J).__webglTexture;t.bindTexture(te,Me),f(te),t.unbindTexture()}}}function O(R){if(R.samples>0&&ye(R)===!1){const b=R.textures,G=R.width,K=R.height;let J=i.COLOR_BUFFER_BIT;const te=[],Me=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=n.get(R),oe=b.length>1;if(oe)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){te.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&te.push(Me);const re=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(re===!1&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&D.__isTransmissionRenderTarget!==!0&&(J|=i.STENCIL_BUFFER_BIT)),oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,D.__webglColorRenderbuffer[ge]),re===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),oe){const de=n.get(b[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,D.__webglColorRenderbuffer[ge]);const re=n.get(b[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function Ae(R,b){const G=R.colorSpace,K=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==It&&G!==_i&&(it.getTransfer(G)===ut?(K!==xn||J!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=y,this.setTexture2D=L,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ye}function Hx(i,e){function t(n,r=_i){let s;const o=it.getTransfer(r);if(n===Ti)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===am)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sm)return i.BYTE;if(n===om)return i.SHORT;if(n===Ah)return i.UNSIGNED_SHORT;if(n===wh)return i.INT;if(n===Gr)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Io)return i.HALF_FLOAT;if(n===lm)return i.ALPHA;if(n===cm)return i.RGB;if(n===xn)return i.RGBA;if(n===um)return i.LUMINANCE;if(n===dm)return i.LUMINANCE_ALPHA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===Lh)return i.RED_INTEGER;if(n===hm)return i.RG;if(n===Ih)return i.RG_INTEGER;if(n===Nh)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ua)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===yc||n===Mc||n===bc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Sc||n===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sc)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ec)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Nc||n===Dc||n===Uc||n===Oc||n===Fc||n===Bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===kc||n===Hc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fm||n===zc||n===Vc||n===Gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class zx extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ri({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sn(new Wo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $x extends sr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const _=new Xx,m=t.getContextAttributes();let f=null,M=null;const x=[],S=[],C=new we;let w=null;const A=new Vt;A.layers.enable(1),A.viewport=new ct;const I=new Vt;I.layers.enable(2),I.viewport=new ct;const E=[A,I],y=new zx;y.layers.enable(1),y.layers.enable(2);let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=x[j];return ne===void 0&&(ne=new Fa,x[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=x[j];return ne===void 0&&(ne=new Fa,x[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=x[j];return ne===void 0&&(ne=new Fa,x[j]=ne),ne.getHandSpace()};function L(j){const ne=S.indexOf(j.inputSource);if(ne===-1)return;const ue=x[ne];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let j=0;j<x.length;j++){const ne=S[j];ne!==null&&(S[j]=null,x[j].disconnect(ne))}U=null,k=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new er(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ue=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Cs:Dr,ue=m.stencil?Os:Gr);const Te={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new er(h.textureWidth,h.textureHeight,{format:xn,type:Ti,depthTexture:new Yh(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ie=e.properties.get(M);ie.__ignoreDepthValues=h.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(j){for(let ne=0;ne<j.removed.length;ne++){const ue=j.removed[ne],ae=S.indexOf(ue);ae>=0&&(S[ae]=null,x[ae].disconnect(ue))}for(let ne=0;ne<j.added.length;ne++){const ue=j.added[ne];let ae=S.indexOf(ue);if(ae===-1){for(let ie=0;ie<x.length;ie++)if(ie>=S.length){S.push(ue),ae=ie;break}else if(S[ie]===null){S[ie]=ue,ae=ie;break}if(ae===-1)break}const Te=x[ae];Te&&Te.connect(ue)}}const B=new N,Z=new N;function H(j,ne,ue){B.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const ae=B.distanceTo(Z),Te=ne.projectionMatrix.elements,ie=ue.projectionMatrix.elements,Ee=Te[14]/(Te[10]-1),O=Te[14]/(Te[10]+1),Pe=(Te[9]+1)/Te[5],ye=(Te[9]-1)/Te[5],at=(Te[8]-1)/Te[0],Ae=(ie[8]+1)/ie[0],Ke=Ee*at,R=Ee*Ae,b=ae/(-at+Ae),G=b*-at;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(G),j.translateZ(b),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const K=Ee+b,J=O+b,te=Ke-G,Me=R+(ae-G),D=Pe*O/J*K,oe=ye*O/J*K;j.projectionMatrix.makePerspective(te,Me,D,oe,K,J),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Q(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),y.near=I.near=A.near=j.near,y.far=I.far=A.far=j.far,(U!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,k=y.far,A.near=U,A.far=k,I.near=U,I.far=k,A.updateProjectionMatrix(),I.updateProjectionMatrix(),j.updateProjectionMatrix());const ne=j.parent,ue=y.cameras;Q(y,ne);for(let ae=0;ae<ue.length;ae++)Q(ue[ae],ne);ue.length===2?H(y,A,I):y.projectionMatrix.copy(A.projectionMatrix),ee(j,y,ne)};function ee(j,ne,ue){ue===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null};let fe=null;function Ce(j,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ae=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let ie=0;ie<ue.length;ie++){const Ee=ue[ie];let O=null;if(p!==null)O=p.getViewport(Ee);else{const ye=d.getViewSubImage(h,Ee);O=ye.viewport,ie===0&&(e.setRenderTargetTextures(M,ye.colorTexture,h.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(M))}let Pe=E[ie];Pe===void 0&&(Pe=new Vt,Pe.layers.enable(ie),Pe.viewport=new ct,E[ie]=Pe),Pe.matrix.fromArray(Ee.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ee.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(O.x,O.y,O.width,O.height),ie===0&&(y.matrix.copy(Pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Pe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const ie=d.getDepthInformation(ue[0]);ie&&ie.isValid&&ie.texture&&_.init(e,ie,r.renderState)}}for(let ue=0;ue<x.length;ue++){const ae=S[ue],Te=x[ue];ae!==null&&Te!==void 0&&Te.update(ae,ne,c||o)}_.render(e,y),fe&&fe(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ge=new Kh;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}}const ki=new Dn,jx=new Be;function qx(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$h(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),x=M.envMap,S=M.envMapRotation;if(x&&(m.envMap.value=x,ki.copy(S),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(ki)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const C=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*C,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Kx(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(M,C);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const x=d();M.__bindingPointIndex=x;const S=i.createBuffer(),C=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=r[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=S.length;w<A;w++){const I=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,y=I.length;E<y;E++){const U=I[E];if(p(U,w,E,C)===!0){const k=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let q=0;q<L.length;q++){const B=L[q],Z=_(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+$,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,S,C){const w=M.value,A=x+"_"+S;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const I=C[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(M){const x=M.uniforms;let S=0;const C=16;for(let A=0,I=x.length;A<I;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,U=E.length;y<U;y++){const k=E[y],L=Array.isArray(k.value)?k.value:[k.value];for(let $=0,q=L.length;$<q;$++){const B=L[$],Z=_(B),H=S%C;H!==0&&C-H<Z.boundary&&(S+=C-H),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Z.storage}}}const w=S%C;return w>0&&(S+=C-w),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Yx{constructor(e={}){const{canvas:t=Vm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,A=null,I=-1,E=null;const y=new ct,U=new ct;let k=null;const L=new Le(0);let $=0,q=t.width,B=t.height,Z=1,H=null,Q=null;const ee=new ct(0,0,q,B),fe=new ct(0,0,q,B);let Ce=!1;const Ge=new El;let j=!1,ne=!1;const ue=new Be,ae=new we,Te=new N,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return A===null?Z:1}let O=n;function Pe(T,F){const W=t.getContext(T,F);return W!==null?W:null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",z,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){const F="webgl2";if(O=Pe(F,T),O===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,at,Ae,Ke,R,b,G,K,J,te,Me,D,oe,ge,re,de,Ie,_e,ve,je,Ye,tt,Qe,nt;function be(){ye=new r0(O),ye.init(),at=new Jv(O,ye,e),tt=new Hx(O,ye),Ae=new Bx(O),Ke=new a0(O),R=new Ex,b=new kx(O,ye,Ae,R,at,tt,Ke),G=new e0(x),K=new i0(x),J=new fg(O),Qe=new Yv(O,J),te=new s0(O,J,Ke,Qe),Me=new c0(O,te,J,Ke),ve=new l0(O,at,b),de=new Qv(R),D=new Sx(x,G,K,ye,at,Qe,de),oe=new qx(x,R),ge=new Ax,re=new Ix(ye),_e=new Kv(x,G,K,Ae,Me,h,l),Ie=new Fx(x,Me,at),nt=new Kx(O,Ke,at,Ae),je=new Zv(O,ye,Ke),Ye=new o0(O,ye,Ke),Ke.programs=D.programs,x.capabilities=at,x.extensions=ye,x.properties=R,x.renderLists=ge,x.shadowMap=Ie,x.state=Ae,x.info=Ke}be();const v=new $x(x,O);this.xr=v,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(q,B,!1))},this.getSize=function(T){return T.set(q,B)},this.setSize=function(T,F,W=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,B=F,t.width=Math.floor(T*Z),t.height=Math.floor(F*Z),W===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(q*Z,B*Z).floor()},this.setDrawingBufferSize=function(T,F,W){q=T,B=F,Z=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,F,W,X){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,F,W,X),Ae.viewport(y.copy(ee).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,F,W,X){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,F,W,X),Ae.scissor(U.copy(fe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){Ae.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(T=!0,F=!0,W=!0){let X=0;if(T){let V=!1;if(A!==null){const he=A.texture.format;V=he===Nh||he===Ih||he===Lh}if(V){const he=A.texture.type,Se=he===Ti||he===Gr||he===Ah||he===Os||he===Rh||he===Ch,Re=_e.getClearColor(),Ne=_e.getClearAlpha(),Oe=Re.r,Ue=Re.g,Fe=Re.b;Se?(p[0]=Oe,p[1]=Ue,p[2]=Fe,p[3]=Ne,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Oe,g[1]=Ue,g[2]=Fe,g[3]=Ne,O.clearBufferiv(O.COLOR,0,g))}else X|=O.COLOR_BUFFER_BIT}F&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ge.dispose(),re.dispose(),R.dispose(),G.dispose(),K.dispose(),Me.dispose(),Qe.dispose(),nt.dispose(),D.dispose(),v.dispose(),v.removeEventListener("sessionstart",xt),v.removeEventListener("sessionend",yt),Jt.stop()};function z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Ke.autoReset,F=Ie.enabled,W=Ie.autoUpdate,X=Ie.needsUpdate,V=Ie.type;be(),Ke.autoReset=T,Ie.enabled=F,Ie.autoUpdate=W,Ie.needsUpdate=X,Ie.type=V}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const F=T.target;F.removeEventListener("dispose",pe),Ze(F)}function Ze(T){Xe(T),R.remove(T)}function Xe(T){const F=R.get(T).programs;F!==void 0&&(F.forEach(function(W){D.releaseProgram(W)}),T.isShaderMaterial&&D.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,X,V,he){F===null&&(F=ie);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Re=rp(T,F,W,X,V);Ae.setMaterial(X,Se);let Ne=W.index,Oe=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(W),Ne===void 0)return;Oe=2}const Ue=W.drawRange,Fe=W.attributes.position;let vt=Ue.start*Oe,Qt=(Ue.start+Ue.count)*Oe;he!==null&&(vt=Math.max(vt,he.start*Oe),Qt=Math.min(Qt,(he.start+he.count)*Oe)),Ne!==null?(vt=Math.max(vt,0),Qt=Math.min(Qt,Ne.count)):Fe!=null&&(vt=Math.max(vt,0),Qt=Math.min(Qt,Fe.count));const At=Qt-vt;if(At<0||At===1/0)return;Qe.setup(V,X,Re,W,Ne);let kn,mt=je;if(Ne!==null&&(kn=J.get(Ne),mt=Ye,mt.setIndex(kn)),V.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*Ee()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(V.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*Ee()),V.isLineSegments?mt.setMode(O.LINES):V.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else V.isPoints?mt.setMode(O.POINTS):V.isSprite&&mt.setMode(O.TRIANGLES);if(V.isBatchedMesh)mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)mt.renderInstances(vt,At,V.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ia=Math.min(W.instanceCount,ke);mt.renderInstances(vt,At,ia)}else mt.render(vt,At)};function dt(T,F,W){T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=jt,T.needsUpdate=!0,Vs(T,F,W),T.side=ei,T.needsUpdate=!0,Vs(T,F,W),T.side=wn):Vs(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),m=re.get(W),m.init(),M.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==W&&T.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const X=new Set;return T.traverse(function(V){const he=V.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Re=he[Se];dt(Re,W,V),X.add(Re)}else dt(he,W,V),X.add(he)}),M.pop(),m=null,X},this.compileAsync=function(T,F,W=null){const X=this.compile(T,F,W);return new Promise(V=>{function he(){if(X.forEach(function(Se){R.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){V(T);return}setTimeout(he,10)}ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Tt=null;function ot(T){Tt&&Tt(T)}function xt(){Jt.stop()}function yt(){Jt.start()}const Jt=new Kh;Jt.setAnimationLoop(ot),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(T){Tt=T,v.setAnimationLoop(T),T===null?Jt.stop():Jt.start()},v.addEventListener("sessionstart",xt),v.addEventListener("sessionend",yt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(F),F=v.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,A),m=re.get(T,M.length),m.init(),M.push(m),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,j=de.init(this.clippingPlanes,ne),_=ge.get(T,f.length),_.init(),f.push(_),on(T,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,Q),this.info.render.frame++,j===!0&&de.beginShadows();const W=m.state.shadowsArray;if(Ie.render(W,T,F),j===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1)&&_e.render(_,T),m.setupLights(x._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let V=0,he=X.length;V<he;V++){const Se=X[V];ii(_,T,Se,Se.viewport)}}else ii(_,T,F);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(x,T,F),Qe.resetDefaultState(),I=-1,E=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function on(T,F,W,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){X&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Se=Me.update(T),Re=T.material;Re.visible&&_.push(T,Se,Re,W,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const Se=Me.update(T),Re=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Te.copy(Se.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Re)){const Ne=Se.groups;for(let Oe=0,Ue=Ne.length;Oe<Ue;Oe++){const Fe=Ne[Oe],vt=Re[Fe.materialIndex];vt&&vt.visible&&_.push(T,Se,vt,W,Te.z,Fe)}}else Re.visible&&_.push(T,Se,Re,W,Te.z,null)}}const he=T.children;for(let Se=0,Re=he.length;Se<Re;Se++)on(he[Se],F,W,X)}function ii(T,F,W,X){const V=T.opaque,he=T.transmissive,Se=T.transparent;m.setupLightsView(W),j===!0&&de.setGlobalState(x.clippingPlanes,W),he.length>0&&lr(V,he,F,W),X&&Ae.viewport(y.copy(X)),V.length>0&&Ii(V,F,W),he.length>0&&Ii(he,F,W),Se.length>0&&Ii(Se,F,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function lr(T,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new er(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Io:Ti,minFilter:Jn,samples:4,stencilBuffer:s});const Oe=R.get(m.state.transmissionRenderTarget);Oe.__isTransmissionRenderTarget=!0}const he=m.state.transmissionRenderTarget;x.getDrawingBufferSize(ae),he.setSize(ae.x,ae.y);const Se=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(L),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Ei,Ii(T,W,X),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he);let Ne=!1;for(let Oe=0,Ue=F.length;Oe<Ue;Oe++){const Fe=F[Oe],vt=Fe.object,Qt=Fe.geometry,At=Fe.material,kn=Fe.group;if(At.side===wn&&vt.layers.test(X.layers)){const mt=At.side;At.side=jt,At.needsUpdate=!0,lc(vt,W,X,Qt,At,kn),At.side=mt,At.needsUpdate=!0,Ne=!0}}Ne===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he)),x.setRenderTarget(Se),x.setClearColor(L,$),x.toneMapping=Re}function Ii(T,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let V=0,he=T.length;V<he;V++){const Se=T[V],Re=Se.object,Ne=Se.geometry,Oe=X===null?Se.material:X,Ue=Se.group;Re.layers.test(W.layers)&&lc(Re,F,W,Ne,Oe,Ue)}}function lc(T,F,W,X,V,he){T.onBeforeRender(x,F,W,X,V,he),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,F,W,X,T,he),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=jt,V.needsUpdate=!0,x.renderBufferDirect(W,F,X,V,T,he),V.side=ei,V.needsUpdate=!0,x.renderBufferDirect(W,F,X,V,T,he),V.side=wn):x.renderBufferDirect(W,F,X,V,T,he),T.onAfterRender(x,F,W,X,V,he)}function Vs(T,F,W){F.isScene!==!0&&(F=ie);const X=R.get(T),V=m.state.lights,he=m.state.shadowsArray,Se=V.state.version,Re=D.getParameters(T,V.state,he,F,W),Ne=D.getProgramCacheKey(Re);let Oe=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?K:G).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",pe),Oe=new Map,X.programs=Oe);let Ue=Oe.get(Ne);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===Se)return uc(T,Re),Ue}else Re.uniforms=D.getUniforms(T),T.onBuild(W,Re,x),T.onBeforeCompile(Re,x),Ue=D.acquireProgram(Re,Ne),Oe.set(Ne,Ue),X.uniforms=Re.uniforms;const Fe=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=de.uniform),uc(T,Re),X.needsLights=op(T),X.lightsStateVersion=Se,X.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function cc(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=To.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function uc(T,F){const W=R.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function rp(T,F,W,X,V){F.isScene!==!0&&(F=ie),b.resetTextureUnits();const he=F.fog,Se=X.isMeshStandardMaterial?F.environment:null,Re=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It,Ne=(X.isMeshStandardMaterial?K:G).get(X.envMap||Se),Oe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!W.morphAttributes.position,vt=!!W.morphAttributes.normal,Qt=!!W.morphAttributes.color;let At=Ei;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=x.toneMapping);const kn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=kn!==void 0?kn.length:0,ke=R.get(X),ia=m.state.lights;if(j===!0&&(ne===!0||T!==E)){const an=T===E&&X.id===I;de.setState(X,T,an)}let ht=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ia.state.version||ke.outputColorSpace!==Re||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ke.instancingMorph===!1&&V.morphTexture!==null||ke.envMap!==Ne||X.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==de.numPlanes||ke.numIntersection!==de.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==Ue||ke.morphTargets!==Fe||ke.morphNormals!==vt||ke.morphColors!==Qt||ke.toneMapping!==At||ke.morphTargetsCount!==mt)&&(ht=!0):(ht=!0,ke.__version=X.version);let Ni=ke.currentProgram;ht===!0&&(Ni=Vs(X,F,V));let dc=!1,os=!1,ra=!1;const Nt=Ni.getUniforms(),ri=ke.uniforms;if(Ae.useProgram(Ni.program)&&(dc=!0,os=!0,ra=!0),X.id!==I&&(I=X.id,os=!0),dc||E!==T){Nt.setValue(O,"projectionMatrix",T.projectionMatrix),Nt.setValue(O,"viewMatrix",T.matrixWorldInverse);const an=Nt.map.cameraPosition;an!==void 0&&an.setValue(O,Te.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,os=!0,ra=!0)}if(V.isSkinnedMesh){Nt.setOptional(O,V,"bindMatrix"),Nt.setOptional(O,V,"bindMatrixInverse");const an=V.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Nt.setValue(O,"boneTexture",an.boneTexture,b))}V.isBatchedMesh&&(Nt.setOptional(O,V,"batchingTexture"),Nt.setValue(O,"batchingTexture",V._matricesTexture,b));const sa=W.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&ve.update(V,W,Ni),(os||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,Nt.setValue(O,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ri.envMap.value=Ne,ri.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(ri.envMapIntensity.value=F.environmentIntensity),os&&(Nt.setValue(O,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&sp(ri,ra),he&&X.fog===!0&&oe.refreshFogUniforms(ri,he),oe.refreshMaterialUniforms(ri,X,Z,B,m.state.transmissionRenderTarget),To.upload(O,cc(ke),ri,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(To.upload(O,cc(ke),ri,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Nt.setValue(O,"center",V.center),Nt.setValue(O,"modelViewMatrix",V.modelViewMatrix),Nt.setValue(O,"normalMatrix",V.normalMatrix),Nt.setValue(O,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const an=X.uniformsGroups;for(let oa=0,ap=an.length;oa<ap;oa++){const hc=an[oa];nt.update(hc,Ni),nt.bind(hc,Ni)}}return Ni}function sp(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function op(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,W){R.get(T.texture).__webglTexture=F,R.get(T.depthTexture).__webglTexture=W;const X=R.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const W=R.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){A=T,C=F,w=W;let X=!0,V=null,he=!1,Se=!1;if(T){const Ne=R.get(T);Ne.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?b.setupRenderTarget(T):Ne.__hasExternalTextures&&b.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);const Ue=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?V=Ue[F][W]:V=Ue[F],he=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?V=R.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[W]:V=Ue,y.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else y.copy(ee).multiplyScalar(Z).floor(),U.copy(fe).multiplyScalar(Z).floor(),k=Ce;if(Ae.bindFramebuffer(O.FRAMEBUFFER,V)&&X&&Ae.drawBuffers(T,V),Ae.viewport(y),Ae.scissor(U),Ae.setScissorTest(k),he){const Ne=R.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,W)}else if(Se){const Ne=R.get(T.texture),Oe=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,Oe)}I=-1},this.readRenderTargetPixels=function(T,F,W,X,V,he,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){Ae.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Ne=T.texture,Oe=Ne.format,Ue=Ne.type;if(Oe!==xn&&tt.convert(Oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===Io&&(ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float"));if(Ue!==Ti&&tt.convert(Ue)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Ue!==Cn&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&W>=0&&W<=T.height-V&&O.readPixels(F,W,X,V,tt.convert(Oe),tt.convert(Ue),he)}finally{const Ne=A!==null?R.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,F,W=0){const X=Math.pow(2,-W),V=Math.floor(F.image.width*X),he=Math.floor(F.image.height*X);b.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,T.x,T.y,V,he),Ae.unbindTexture()},this.copyTextureToTexture=function(T,F,W,X=0){const V=F.image.width,he=F.image.height,Se=tt.convert(W.format),Re=tt.convert(W.type);b.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,T.x,T.y,V,he,Se,Re,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,T.x,T.y,Se,Re,F.image),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W,X,V=0){const he=Math.round(T.max.x-T.min.x),Se=Math.round(T.max.y-T.min.y),Re=T.max.z-T.min.z+1,Ne=tt.convert(X.format),Oe=tt.convert(X.type);let Ue;if(X.isData3DTexture)b.setTexture3D(X,0),Ue=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Ue=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qt=O.getParameter(O.UNPACK_SKIP_PIXELS),At=O.getParameter(O.UNPACK_SKIP_ROWS),kn=O.getParameter(O.UNPACK_SKIP_IMAGES),mt=W.isCompressedTexture?W.mipmaps[V]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(Ue,V,F.x,F.y,F.z,he,Se,Re,Ne,Oe,mt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,V,F.x,F.y,F.z,he,Se,Re,Ne,mt.data):O.texSubImage3D(Ue,V,F.x,F.y,F.z,he,Se,Re,Ne,Oe,mt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,At),O.pixelStorei(O.UNPACK_SKIP_IMAGES,kn),V===0&&X.generateMipmaps&&O.generateMipmap(Ue),Ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Ae.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ml?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Go?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zx extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new N;class wl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fu=new N,Bu=new ct,ku=new ct,Qx=new N,Hu=new Be,uo=new N,Ba=new Fn,zu=new Be,ka=new es;class ey extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vc,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(r),e.ray.intersectsSphere(Ba)!==!1&&(zu.copy(r).invert(),ka.copy(e.ray).applyMatrix4(zu),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Bu.fromBufferAttribute(r.attributes.skinIndex,e),ku.fromBufferAttribute(r.attributes.skinWeight,e),Fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ku.getComponent(s);if(o!==0){const a=Bu.getComponent(s);Hu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Qx.copy(Fu).applyMatrix4(Hu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nf extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rf extends Rt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Gt,u=Gt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vu=new Be,ty=new Be;class Rl{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ty;Vu.multiplyMatrices(a,t[s]),Vu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Rl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rf(t,e,e,xn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new nf),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class dl extends Wt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rr=new Be,Gu=new Be,ho=[],Wu=new On,ny=new Be,ds=new sn,hs=new Fn;class iy extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ny)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),Wu.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(Wu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),hs.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Rr),Gu.multiplyMatrices(n,Rr),ds.matrixWorld=Gu,ds.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=s,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rf(new Float32Array(r*this.count),r,this.count,Ph,Cn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cl extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new N,$u=new N,ju=new Be,Ha=new es,fo=new Fn;class Pl extends pt{constructor(e=new En,t=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Xu.fromBufferAttribute(t,r-1),$u.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Xu.distanceTo($u);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;ju.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(ju);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,d=new N,h=new N,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=f,S=M-1;x<S;x+=p){const C=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,w),Ha.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=f,S=M-1;x<S;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ha.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const qu=new N,Ku=new N;class sf extends Pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qu.fromBufferAttribute(t,r),Ku.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qu.distanceTo(Ku);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ry extends Pl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class of extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new Be,hl=new es,po=new Fn,mo=new N;class sy extends pt{constructor(e=new En,t=new of){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;Yu.copy(r).invert(),hl.copy(e.ray).applyMatrix4(Yu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);mo.fromBufferAttribute(d,m),Zu(mo,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,_=p;g<_;g++)mo.fromBufferAttribute(d,g),Zu(mo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zu(i,e,t,n,r,s,o){const a=hl.distanceSqToPoint(i);if(a<t){const l=new N;hl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ll extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function go(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function oy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ay(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ju(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function af(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Bs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ly extends Bs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xc:s=e,a=2*t-n;break;case $c:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:o=e,l=2*n-t;break;case $c:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,f=-h*m+2*h*_-h*g,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let C=0;C!==a;++C)s[C]=f*o[u+C]+M*o[c+C]+x*o[l+C]+S*o[d+C];return s}}class cy extends Bs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class uy extends Bs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&oy(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ha,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Wr;class ns extends Bn{}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ps;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class lf extends Bn{}lf.prototype.ValueTypeName="color";class jr extends Bn{}jr.prototype.ValueTypeName="number";class dy extends Bs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class tr extends Bn{InterpolantFactoryMethodLinear(e){return new dy(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=Wr;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends Bn{}is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ps;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends Bn{}qr.prototype.ValueTypeName="vector";class hy{constructor(e="",t=-1,n=[],r=pm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(py(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Bn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ay(l);l=Ju(l,1,u),c=Ju(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new jr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,g,_){if(p.length!==0){const m=[],f=[];af(p,m,f,g),m.length!==0&&_.push(new d(h,m,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let M=0;M!==h[g].morphTargets.length;++M){const x=h[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}r.push(new jr(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(qr,p+".position",h,"pos",r),n(tr,p+".quaternion",h,"rot",r),n(qr,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return lf;case"quaternion":return tr;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function py(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fy(i.type);if(i.times===void 0){const t=[],n=[];af(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class my{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const gy=new my;class rs{constructor(e){this.manager=e!==void 0?e:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class _y extends Error{constructor(e,t){super(e),this.response=t}}class cf extends rs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:r});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xn[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){M();function M(){d.read().then(({done:x,value:S})=>{if(x)f.close();else{_+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,A=u.length;w<A;w++){const I=u[w];I.onProgress&&I.onProgress(C)}f.enqueue(S),M()}})}}});return new Response(m)}else throw new _y(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{xi.add(e,c);const u=Xn[e];delete Xn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vy extends rs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ls("img");function l(){u(),xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xy extends rs{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,o=new vy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class $o extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class yy extends $o{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const za=new Be,Qu=new N,ed=new N;class Il{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class My extends Il{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class by extends $o{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new My}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const td=new Be,fs=new N,Va=new N;class Sy extends Il{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),r.makeTranslation(-fs.x,-fs.y,-fs.z),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td)}}class Ey extends $o{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Sy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ty extends Il{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ay extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ty}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ss{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wy extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),xi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});xi.add(e,l),s.manager.itemStart(e)}}const Nl="\\[\\]\\.:\\/",Ry=new RegExp("["+Nl+"]","g"),Dl="[^"+Nl+"]",Cy="[^"+Nl.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Ly=/(WCOD+)?/.source.replace("WCOD",Cy),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Dy=new RegExp("^"+Py+Ly+Iy+Ny+"$"),Uy=["material","materials","bones","map"];class Oy{constructor(e,t,n){const r=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ry,"")}static parseTrackName(e){const t=Dy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Uy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Oy;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const nd=new Be;class Fy{constructor(e,t,n=0,r=1/0){this.ray=new es(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(e,t=!0,n=[]){return fl(e,this,n,t),n.sort(id),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fl(e[r],this,n,t);return n.sort(id),n}}function id(i,e){return i.distance-e.distance}function fl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)fl(r[s],e,t,!0)}}class rd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class By extends sf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new En;r.setAttribute("position",new Sn(t,3)),r.setAttribute("color",new Sn(n,3));const s=new Cl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new Le,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function sd(i,e){if(e===mm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ll||e===Uh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===ll)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class ky extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ss.extractUrlBase(e);o=Ss.resolveURL(c,this.path)}else o=Ss.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new cf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===uf){try{o[qe.KHR_BINARY_GLTF]=new rM(e)}catch(d){r&&r(d);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _M(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case qe.KHR_MATERIALS_UNLIT:o[d]=new Vy;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new sM(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[d]=new oM;break;case qe.KHR_MESH_QUANTIZATION:o[d]=new aM;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Hy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zy{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],It);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ay(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ey(u),c.distance=d;break;case"spot":c=new by(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Vy{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return ji}extendParams(e,t,n){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,zt))}return Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Wy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(s)}}class Xy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class $y{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class jy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class qy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],It),Promise.all(s)}}class Ky{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Yy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(s)}}class Zy{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Jy{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Qy{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class eM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nM{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,h,r.mode,r.filter),p})})}else return null}}class iM{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==cn.TRIANGLES&&c.mode!==cn.TRIANGLE_STRIP&&c.mode!==cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of d){const _=new Be,m=new N,f=new Nn,M=new N(1,1,1),x=new iy(g.geometry,g.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,_.compose(m,f,M));for(const S in l)if(S==="_COLOR_0"){const C=l[S];x.instanceColor=new dl(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);pt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const uf="glTF",ps=12,od={JSON:1313821514,BIN:5130562};class rM{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ps),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ps,s=new DataView(e,ps);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===od.JSON){const c=new Uint8Array(e,ps+o,a);this.content=n.decode(c)}else if(l===od.BIN){const c=ps+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=pl[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=pl[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Or[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(p)},a,c,It,h)})})}}class oM{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aM{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class df extends Bs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(n-t)/u,h=d*d,p=h*d,g=e*c,_=g-c,m=-2*p+3*h,f=p-h,M=1-m,x=f-h+d;for(let S=0;S!==a;S++){const C=o[_+S+a],w=o[_+S+l]*u,A=o[g+S+a],I=o[g+S]*u;s[S]=M*C+x*w+m*A+f*I}return s}}const lM=new Nn;class cM extends df{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return lM.fromArray(s).normalize().toArray(s),s}}const cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ad={9728:Gt,9729:rn,9984:Th,9985:Eo,9986:vs,9987:Jn},ld={33071:vi,33648:Lo,10497:Vr},Ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uM={CUBICSPLINE:void 0,LINEAR:Wr,STEP:Ps},Wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ll({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),i.DefaultMaterial}function Hi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hM(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function fM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pM(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xa(t.attributes):e=i.indices+":"+Xa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Xa(i.targets[n]);return e}function Xa(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ml(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gM=new Be;class _M{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new xy(this.options.manager):this.textureLoader=new wy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Hi(s,a,r),gi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Ss.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ga[r.type],a=Or[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Wt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ga[r.type],c=Or[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(p&&p!==d){const f=Math.floor(h/p),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let x=t.cache.get(M);x||(_=new c(a,f*p,r.count*p/u),x=new Jx(_,p/u),t.cache.add(M,x)),m=new wl(x,l,h%p/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new Wt(_,l,g);if(r.sparse!==void 0){const f=Ga.SCALAR,M=Or[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,C=new M(o[1],x,r.sparse.count*f),w=new c(o[2],S,r.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,I=C.length;A<I;A++){const E=C[A];if(m.setX(E,w[A*l]),l>=2&&m.setY(E,w[A*l+1]),l>=3&&m.setZ(E,w[A*l+2]),l>=4&&m.setW(E,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=ad[h.magFilter]||rn,u.minFilter=ad[h.minFilter]||Jn,u.wrapS=ld[h.wrapS]||Vr,u.wrapT=ld[h.wrapT]||Vr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Rt(_);m.needsUpdate=!0,h(m)}),t.load(Ss.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||mM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new of,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cl,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ll}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const d=r[qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],It),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,zt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=wn);const u=s.alphaMode||Wa.OPAQUE;if(u===Wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ji&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==ji&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ji){const d=s.emissiveFactor;a.emissive=new Le().setRGB(d[0],d[1],d[2],It)}return s.emissiveTexture!==void 0&&o!==ji&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,zt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),gi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Hi(r,d,s),d})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return cd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=pM(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=cd(new En,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?dM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let f;const M=c[p];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new ey(_,M):new sn(_,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?f.geometry=sd(f.geometry,Uh):m.mode===cn.TRIANGLE_FAN&&(f.geometry=sd(f.geometry,ll));else if(m.mode===cn.LINES)f=new sf(_,M);else if(m.mode===cn.LINE_STRIP)f=new Pl(_,M);else if(m.mode===cn.LINE_LOOP)f=new ry(_,M);else if(m.mode===cn.POINTS)f=new sy(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&fM(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),gi(f,s),m.extensions&&Hi(r,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Hi(r,d[0],s),d[0];const h=new qi;s.extensions&&Hi(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Bh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Tl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Be;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Rl(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const p=r.channels[d],g=r.samplers[p.sampler],_=p.target,m=_.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],g=d[2],_=d[3],m=d[4],f=[];for(let M=0,x=h.length;M<x;M++){const S=h[M],C=p[M],w=g[M],A=_[M],I=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,C,w,A,I);if(E)for(let y=0;y<E.length;y++)f.push(E[y])}return new hy(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,gM)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new nf:c.length>1?u=new qi:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),gi(u,s),s.extensions&&Hi(n,u,s),s.matrix!==void 0){const d=new Be;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new qi;n.name&&(s.name=r.createUniqueName(n.name)),gi(s,n),n.extensions&&Hi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,p]of r.associations)(h instanceof Pn||h instanceof Rt)&&d.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&d.set(h,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];di[s.path]===di.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(di[s.path]){case di.weights:c=jr;break;case di.rotation:c=tr;break;case di.position:case di.scale:c=qr;break;default:switch(n.itemSize){case 1:c=jr;break;case 2:case 3:default:c=qr;break}break}const u=r.interpolation!==void 0?uM[r.interpolation]:Wr,d=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+di[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ml(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof tr?cM:df;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vM(i,e,t){const n=e.attributes,r=new On;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=ml(Or[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=ml(Or[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Fn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function cd(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=pl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return it.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),gi(i,e),vM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?hM(i,e.targets,t):i})}const ud={type:"change"},$a={type:"start"},dd={type:"end"},_o=new es,hd=new mi,xM=Math.cos(70*Bh.DEG2RAD);class yM extends sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",de),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ud),n.update(),s=r.NONE},this.update=function(){const v=new N,z=new Nn().setFromUnitVectors(e.up,new N(0,1,0)),Y=z.clone().invert(),le=new N,pe=new Nn,Ze=new N,Xe=2*Math.PI;return function(Tt=null){const ot=n.object.position;v.copy(ot).sub(n.target),v.applyQuaternion(z),a.setFromVector3(v),n.autoRotate&&s===r.NONE&&k(y(Tt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xt=n.minAzimuthAngle,yt=n.maxAzimuthAngle;isFinite(xt)&&isFinite(yt)&&(xt<-Math.PI?xt+=Xe:xt>Math.PI&&(xt-=Xe),yt<-Math.PI?yt+=Xe:yt>Math.PI&&(yt-=Xe),xt<=yt?a.theta=Math.max(xt,Math.min(yt,a.theta)):a.theta=a.theta>(xt+yt)/2?Math.max(xt,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Jt=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)a.radius=ee(a.radius);else{const on=a.radius;a.radius=ee(a.radius*c),Jt=on!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(Y),ot.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let on=null;if(n.object.isPerspectiveCamera){const ii=v.length();on=ee(ii*c);const lr=ii-on;n.object.position.addScaledVector(S,lr),n.object.updateMatrixWorld(),Jt=!!lr}else if(n.object.isOrthographicCamera){const ii=new N(C.x,C.y,0);ii.unproject(n.object);const lr=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Jt=lr!==n.object.zoom;const Ii=new N(C.x,C.y,0);Ii.unproject(n.object),n.object.position.sub(Ii).add(ii),n.object.updateMatrixWorld(),on=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;on!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(on).add(n.object.position):(_o.origin.copy(n.object.position),_o.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_o.direction))<xM?e.lookAt(n.target):(hd.setFromNormalAndCoplanarPoint(n.object.up,n.target),_o.intersectPlane(hd,n.target))))}else if(n.object.isOrthographicCamera){const on=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),on!==n.object.zoom&&(n.object.updateProjectionMatrix(),Jt=!0)}return c=1,w=!1,Jt||le.distanceToSquared(n.object.position)>o||8*(1-pe.dot(n.object.quaternion))>o||Ze.distanceToSquared(n.target)>o?(n.dispatchEvent(ud),le.copy(n.object.position),pe.copy(n.object.quaternion),Ze.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",G),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",D),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",J),n.domElement.getRootNode().removeEventListener("keydown",ge,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new rd,l=new rd;let c=1;const u=new N,d=new we,h=new we,p=new we,g=new we,_=new we,m=new we,f=new we,M=new we,x=new we,S=new N,C=new we;let w=!1;const A=[],I={};let E=!1;function y(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function U(v){const z=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*z)}function k(v){l.theta-=v}function L(v){l.phi-=v}const $=function(){const v=new N;return function(Y,le){v.setFromMatrixColumn(le,0),v.multiplyScalar(-Y),u.add(v)}}(),q=function(){const v=new N;return function(Y,le){n.screenSpacePanning===!0?v.setFromMatrixColumn(le,1):(v.setFromMatrixColumn(le,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(Y),u.add(v)}}(),B=function(){const v=new N;return function(Y,le){const pe=n.domElement;if(n.object.isPerspectiveCamera){const Ze=n.object.position;v.copy(Ze).sub(n.target);let Xe=v.length();Xe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*Y*Xe/pe.clientHeight,n.object.matrix),q(2*le*Xe/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(Y*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),q(le*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(v,z){if(!n.zoomToCursor)return;w=!0;const Y=n.domElement.getBoundingClientRect(),le=v-Y.left,pe=z-Y.top,Ze=Y.width,Xe=Y.height;C.x=le/Ze*2-1,C.y=-(pe/Xe)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function fe(v){d.set(v.clientX,v.clientY)}function Ce(v){Q(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function Ge(v){g.set(v.clientX,v.clientY)}function j(v){h.set(v.clientX,v.clientY),p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;k(2*Math.PI*p.x/z.clientHeight),L(2*Math.PI*p.y/z.clientHeight),d.copy(h),n.update()}function ne(v){M.set(v.clientX,v.clientY),x.subVectors(M,f),x.y>0?Z(U(x.y)):x.y<0&&H(U(x.y)),f.copy(M),n.update()}function ue(v){_.set(v.clientX,v.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_),n.update()}function ae(v){Q(v.clientX,v.clientY),v.deltaY<0?H(U(v.deltaY)):v.deltaY>0&&Z(U(v.deltaY)),n.update()}function Te(v){let z=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),z=!0;break}z&&(v.preventDefault(),n.update())}function ie(v){if(A.length===1)d.set(v.pageX,v.pageY);else{const z=nt(v),Y=.5*(v.pageX+z.x),le=.5*(v.pageY+z.y);d.set(Y,le)}}function Ee(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const z=nt(v),Y=.5*(v.pageX+z.x),le=.5*(v.pageY+z.y);g.set(Y,le)}}function O(v){const z=nt(v),Y=v.pageX-z.x,le=v.pageY-z.y,pe=Math.sqrt(Y*Y+le*le);f.set(0,pe)}function Pe(v){n.enableZoom&&O(v),n.enablePan&&Ee(v)}function ye(v){n.enableZoom&&O(v),n.enableRotate&&ie(v)}function at(v){if(A.length==1)h.set(v.pageX,v.pageY);else{const Y=nt(v),le=.5*(v.pageX+Y.x),pe=.5*(v.pageY+Y.y);h.set(le,pe)}p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;k(2*Math.PI*p.x/z.clientHeight),L(2*Math.PI*p.y/z.clientHeight),d.copy(h)}function Ae(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const z=nt(v),Y=.5*(v.pageX+z.x),le=.5*(v.pageY+z.y);_.set(Y,le)}m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_)}function Ke(v){const z=nt(v),Y=v.pageX-z.x,le=v.pageY-z.y,pe=Math.sqrt(Y*Y+le*le);M.set(0,pe),x.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),Z(x.y),f.copy(M);const Ze=(v.pageX+z.x)*.5,Xe=(v.pageY+z.y)*.5;Q(Ze,Xe)}function R(v){n.enableZoom&&Ke(v),n.enablePan&&Ae(v)}function b(v){n.enableZoom&&Ke(v),n.enableRotate&&at(v)}function G(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",K),n.domElement.addEventListener("pointerup",J)),!tt(v)&&(je(v),v.pointerType==="touch"?Ie(v):te(v)))}function K(v){n.enabled!==!1&&(v.pointerType==="touch"?_e(v):Me(v))}function J(v){switch(Ye(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",J),n.dispatchEvent(dd),s=r.NONE;break;case 1:const z=A[0],Y=I[z];Ie({pointerId:z,pageX:Y.x,pageY:Y.y});break}}function te(v){let z;switch(v.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case cr.DOLLY:if(n.enableZoom===!1)return;Ce(v),s=r.DOLLY;break;case cr.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Ge(v),s=r.PAN}else{if(n.enableRotate===!1)return;fe(v),s=r.ROTATE}break;case cr.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;fe(v),s=r.ROTATE}else{if(n.enablePan===!1)return;Ge(v),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent($a)}function Me(v){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;j(v);break;case r.DOLLY:if(n.enableZoom===!1)return;ne(v);break;case r.PAN:if(n.enablePan===!1)return;ue(v);break}}function D(v){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(v.preventDefault(),n.dispatchEvent($a),ae(oe(v)),n.dispatchEvent(dd))}function oe(v){const z=v.deltaMode,Y={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(z){case 1:Y.deltaY*=16;break;case 2:Y.deltaY*=100;break}return v.ctrlKey&&!E&&(Y.deltaY*=10),Y}function ge(v){v.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(v){v.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function de(v){n.enabled===!1||n.enablePan===!1||Te(v)}function Ie(v){switch(Qe(v),A.length){case 1:switch(n.touches.ONE){case ur.ROTATE:if(n.enableRotate===!1)return;ie(v),s=r.TOUCH_ROTATE;break;case ur.PAN:if(n.enablePan===!1)return;Ee(v),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ur.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(v),s=r.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(v),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent($a)}function _e(v){switch(Qe(v),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;at(v),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ae(v),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(v),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;b(v),n.update();break;default:s=r.NONE}}function ve(v){n.enabled!==!1&&v.preventDefault()}function je(v){A.push(v.pointerId)}function Ye(v){delete I[v.pointerId];for(let z=0;z<A.length;z++)if(A[z]==v.pointerId){A.splice(z,1);return}}function tt(v){for(let z=0;z<A.length;z++)if(A[z]==v.pointerId)return!0;return!1}function Qe(v){let z=I[v.pointerId];z===void 0&&(z=new we,I[v.pointerId]=z),z.set(v.pageX,v.pageY)}function nt(v){const z=v.pointerId===A[0]?A[1]:A[0];return I[z]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",G),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",D,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}const fd=i=>{if(i.tabIndex>0||i.tabIndex===0&&i.getAttribute("tabIndex")!==null)return!0;if(i.tabIndex<0||i.hasAttribute("disabled")||i.getAttribute("aria-disabled")==="true")return!1;switch(i.nodeName){case"A":return!!i.href&&i.rel!=="ignore";case"INPUT":return!(i.type==="hidden"||i.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},qn=(i,e,{checkForDefaultPrevented:t=!0}={})=>r=>{const s=i==null?void 0:i(r);if(t===!1||!s)return e==null?void 0:e(r)};var MM=Object.defineProperty,bM=Object.defineProperties,SM=Object.getOwnPropertyDescriptors,pd=Object.getOwnPropertySymbols,EM=Object.prototype.hasOwnProperty,TM=Object.prototype.propertyIsEnumerable,md=(i,e,t)=>e in i?MM(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,AM=(i,e)=>{for(var t in e||(e={}))EM.call(e,t)&&md(i,t,e[t]);if(pd)for(var t of pd(e))TM.call(e,t)&&md(i,t,e[t]);return i},wM=(i,e)=>bM(i,SM(e));function RM(i,e){var t;const n=bi();return ph(()=>{n.value=i()},wM(AM({},e),{flush:(t=e==null?void 0:e.flush)!=null?t:"sync"})),mh(n)}var gd;const qt=typeof window<"u",CM=i=>typeof i=="string",hf=()=>{},PM=qt&&((gd=window==null?void 0:window.navigator)==null?void 0:gd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ff(i){return typeof i=="function"?i():P(i)}function LM(i){return i}function Ul(i){return lp()?(cp(i),!0):!1}function IM(i,e=!0){Zt()?Xt(i):e?i():$t(i)}function yi(i){var e;const t=ff(i);return(e=t==null?void 0:t.$el)!=null?e:t}const Ol=qt?window:void 0;function Fr(...i){let e,t,n,r;if(CM(i[0])||Array.isArray(i[0])?([t,n,r]=i,e=Ol):[e,t,n,r]=i,!e)return hf;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,d,h,p)=>(u.addEventListener(d,h,p),()=>u.removeEventListener(d,h,p)),l=$e(()=>[yi(e),ff(r)],([u,d])=>{o(),u&&s.push(...t.flatMap(h=>n.map(p=>a(u,h,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Ul(c),c}let _d=!1;function NM(i,e,t={}){const{window:n=Ol,ignore:r=[],capture:s=!0,detectIframe:o=!1}=t;if(!n)return;PM&&!_d&&(_d=!0,Array.from(n.document.body.children).forEach(h=>h.addEventListener("click",hf)));let a=!0;const l=h=>r.some(p=>{if(typeof p=="string")return Array.from(n.document.querySelectorAll(p)).some(g=>g===h.target||h.composedPath().includes(g));{const g=yi(p);return g&&(h.target===g||h.composedPath().includes(g))}}),u=[Fr(n,"click",h=>{const p=yi(i);if(!(!p||p===h.target||h.composedPath().includes(p))){if(h.detail===0&&(a=!l(h)),!a){a=!0;return}e(h)}},{passive:!0,capture:s}),Fr(n,"pointerdown",h=>{const p=yi(i);p&&(a=!h.composedPath().includes(p)&&!l(h))},{passive:!0}),o&&Fr(n,"blur",h=>{var p;const g=yi(i);((p=n.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(g!=null&&g.contains(n.document.activeElement))&&e(h)})].filter(Boolean);return()=>u.forEach(h=>h())}function DM(i,e=!1){const t=me(),n=()=>t.value=!!i();return n(),IM(n,e),t}const vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xd="__vueuse_ssr_handlers__";vd[xd]=vd[xd]||{};var yd=Object.getOwnPropertySymbols,UM=Object.prototype.hasOwnProperty,OM=Object.prototype.propertyIsEnumerable,FM=(i,e)=>{var t={};for(var n in i)UM.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&yd)for(var n of yd(i))e.indexOf(n)<0&&OM.call(i,n)&&(t[n]=i[n]);return t};function BM(i,e,t={}){const n=t,{window:r=Ol}=n,s=FM(n,["window"]);let o;const a=DM(()=>r&&"ResizeObserver"in r),l=()=>{o&&(o.disconnect(),o=void 0)},c=$e(()=>yi(i),d=>{l(),a.value&&r&&d&&(o=new ResizeObserver(e),o.observe(d,s))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Ul(u),{isSupported:a,stop:u}}var Md;(function(i){i.UP="UP",i.RIGHT="RIGHT",i.DOWN="DOWN",i.LEFT="LEFT",i.NONE="NONE"})(Md||(Md={}));var kM=Object.defineProperty,bd=Object.getOwnPropertySymbols,HM=Object.prototype.hasOwnProperty,zM=Object.prototype.propertyIsEnumerable,Sd=(i,e,t)=>e in i?kM(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,VM=(i,e)=>{for(var t in e||(e={}))HM.call(e,t)&&Sd(i,t,e[t]);if(bd)for(var t of bd(e))zM.call(e,t)&&Sd(i,t,e[t]);return i};const GM={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};VM({linear:LM},GM);const WM=()=>qt&&/firefox/i.test(window.navigator.userAgent),Fl=i=>{let e,t;return i.type==="touchend"?(t=i.changedTouches[0].clientY,e=i.changedTouches[0].clientX):i.type.startsWith("touch")?(t=i.touches[0].clientY,e=i.touches[0].clientX):(t=i.clientY,e=i.clientX),{clientX:e,clientY:t}};var XM=typeof global=="object"&&global&&global.Object===Object&&global;const $M=XM;var jM=typeof self=="object"&&self&&self.Object===Object&&self,qM=$M||jM||Function("return this")();const jo=qM;var KM=jo.Symbol;const Ci=KM;var pf=Object.prototype,YM=pf.hasOwnProperty,ZM=pf.toString,ms=Ci?Ci.toStringTag:void 0;function JM(i){var e=YM.call(i,ms),t=i[ms];try{i[ms]=void 0;var n=!0}catch{}var r=ZM.call(i);return n&&(e?i[ms]=t:delete i[ms]),r}var QM=Object.prototype,eb=QM.toString;function tb(i){return eb.call(i)}var nb="[object Null]",ib="[object Undefined]",Ed=Ci?Ci.toStringTag:void 0;function Bl(i){return i==null?i===void 0?ib:nb:Ed&&Ed in Object(i)?JM(i):tb(i)}function kl(i){return i!=null&&typeof i=="object"}var rb="[object Symbol]";function qo(i){return typeof i=="symbol"||kl(i)&&Bl(i)==rb}function sb(i,e){for(var t=-1,n=i==null?0:i.length,r=Array(n);++t<n;)r[t]=e(i[t],t,i);return r}var ob=Array.isArray;const ks=ob;var ab=1/0,Td=Ci?Ci.prototype:void 0,Ad=Td?Td.toString:void 0;function mf(i){if(typeof i=="string")return i;if(ks(i))return sb(i,mf)+"";if(qo(i))return Ad?Ad.call(i):"";var e=i+"";return e=="0"&&1/i==-ab?"-0":e}var lb=/\s/;function cb(i){for(var e=i.length;e--&&lb.test(i.charAt(e)););return e}var ub=/^\s+/;function db(i){return i&&i.slice(0,cb(i)+1).replace(ub,"")}function nr(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}var wd=0/0,hb=/^[-+]0x[0-9a-f]+$/i,fb=/^0b[01]+$/i,pb=/^0o[0-7]+$/i,mb=parseInt;function Rd(i){if(typeof i=="number")return i;if(qo(i))return wd;if(nr(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=nr(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=db(i);var t=fb.test(i);return t||pb.test(i)?mb(i.slice(2),t?2:8):hb.test(i)?wd:+i}function gb(i){return i}var _b="[object AsyncFunction]",vb="[object Function]",xb="[object GeneratorFunction]",yb="[object Proxy]";function Mb(i){if(!nr(i))return!1;var e=Bl(i);return e==vb||e==xb||e==_b||e==yb}var bb=jo["__core-js_shared__"];const ja=bb;var Cd=function(){var i=/[^.]+$/.exec(ja&&ja.keys&&ja.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function Sb(i){return!!Cd&&Cd in i}var Eb=Function.prototype,Tb=Eb.toString;function Ab(i){if(i!=null){try{return Tb.call(i)}catch{}try{return i+""}catch{}}return""}var wb=/[\\^$.*+?()[\]{}|]/g,Rb=/^\[object .+?Constructor\]$/,Cb=Function.prototype,Pb=Object.prototype,Lb=Cb.toString,Ib=Pb.hasOwnProperty,Nb=RegExp("^"+Lb.call(Ib).replace(wb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Db(i){if(!nr(i)||Sb(i))return!1;var e=Mb(i)?Nb:Rb;return e.test(Ab(i))}function Ub(i,e){return i==null?void 0:i[e]}function Hl(i,e){var t=Ub(i,e);return Db(t)?t:void 0}function Ob(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)}var Fb=800,Bb=16,kb=Date.now;function Hb(i){var e=0,t=0;return function(){var n=kb(),r=Bb-(n-t);if(t=n,r>0){if(++e>=Fb)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}function zb(i){return function(){return i}}var Vb=function(){try{var i=Hl(Object,"defineProperty");return i({},"",{}),i}catch{}}();const Fo=Vb;var Gb=Fo?function(i,e){return Fo(i,"toString",{configurable:!0,enumerable:!1,value:zb(e),writable:!0})}:gb;const Wb=Gb;var Xb=Hb(Wb);const $b=Xb;var jb=9007199254740991,qb=/^(?:0|[1-9]\d*)$/;function gf(i,e){var t=typeof i;return e=e??jb,!!e&&(t=="number"||t!="symbol"&&qb.test(i))&&i>-1&&i%1==0&&i<e}function Kb(i,e,t){e=="__proto__"&&Fo?Fo(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t}function _f(i,e){return i===e||i!==i&&e!==e}var Yb=Object.prototype,Zb=Yb.hasOwnProperty;function Jb(i,e,t){var n=i[e];(!(Zb.call(i,e)&&_f(n,t))||t===void 0&&!(e in i))&&Kb(i,e,t)}var Pd=Math.max;function Qb(i,e,t){return e=Pd(e===void 0?i.length-1:e,0),function(){for(var n=arguments,r=-1,s=Pd(n.length-e,0),o=Array(s);++r<s;)o[r]=n[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=n[r];return a[e]=t(o),Ob(i,this,a)}}var eS=9007199254740991;function tS(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=eS}var nS="[object Arguments]";function Ld(i){return kl(i)&&Bl(i)==nS}var vf=Object.prototype,iS=vf.hasOwnProperty,rS=vf.propertyIsEnumerable,sS=Ld(function(){return arguments}())?Ld:function(i){return kl(i)&&iS.call(i,"callee")&&!rS.call(i,"callee")};const xf=sS;var oS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,aS=/^\w*$/;function lS(i,e){if(ks(i))return!1;var t=typeof i;return t=="number"||t=="symbol"||t=="boolean"||i==null||qo(i)?!0:aS.test(i)||!oS.test(i)||e!=null&&i in Object(e)}var cS=Hl(Object,"create");const Is=cS;function uS(){this.__data__=Is?Is(null):{},this.size=0}function dS(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var hS="__lodash_hash_undefined__",fS=Object.prototype,pS=fS.hasOwnProperty;function mS(i){var e=this.__data__;if(Is){var t=e[i];return t===hS?void 0:t}return pS.call(e,i)?e[i]:void 0}var gS=Object.prototype,_S=gS.hasOwnProperty;function vS(i){var e=this.__data__;return Is?e[i]!==void 0:_S.call(e,i)}var xS="__lodash_hash_undefined__";function yS(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Is&&e===void 0?xS:e,this}function ir(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ir.prototype.clear=uS;ir.prototype.delete=dS;ir.prototype.get=mS;ir.prototype.has=vS;ir.prototype.set=yS;function MS(){this.__data__=[],this.size=0}function Ko(i,e){for(var t=i.length;t--;)if(_f(i[t][0],e))return t;return-1}var bS=Array.prototype,SS=bS.splice;function ES(i){var e=this.__data__,t=Ko(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():SS.call(e,t,1),--this.size,!0}function TS(i){var e=this.__data__,t=Ko(e,i);return t<0?void 0:e[t][1]}function AS(i){return Ko(this.__data__,i)>-1}function wS(i,e){var t=this.__data__,n=Ko(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}function ss(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ss.prototype.clear=MS;ss.prototype.delete=ES;ss.prototype.get=TS;ss.prototype.has=AS;ss.prototype.set=wS;var RS=Hl(jo,"Map");const CS=RS;function PS(){this.size=0,this.__data__={hash:new ir,map:new(CS||ss),string:new ir}}function LS(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}function Yo(i,e){var t=i.__data__;return LS(e)?t[typeof e=="string"?"string":"hash"]:t.map}function IS(i){var e=Yo(this,i).delete(i);return this.size-=e?1:0,e}function NS(i){return Yo(this,i).get(i)}function DS(i){return Yo(this,i).has(i)}function US(i,e){var t=Yo(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}function or(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}or.prototype.clear=PS;or.prototype.delete=IS;or.prototype.get=NS;or.prototype.has=DS;or.prototype.set=US;var OS="Expected a function";function zl(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(OS);var t=function(){var n=arguments,r=e?e.apply(this,n):n[0],s=t.cache;if(s.has(r))return s.get(r);var o=i.apply(this,n);return t.cache=s.set(r,o)||s,o};return t.cache=new(zl.Cache||or),t}zl.Cache=or;var FS=500;function BS(i){var e=zl(i,function(n){return t.size===FS&&t.clear(),n}),t=e.cache;return e}var kS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,HS=/\\(\\)?/g,zS=BS(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(kS,function(t,n,r,s){e.push(r?s.replace(HS,"$1"):n||t)}),e});const VS=zS;function GS(i){return i==null?"":mf(i)}function Zo(i,e){return ks(i)?i:lS(i,e)?[i]:VS(GS(i))}var WS=1/0;function Vl(i){if(typeof i=="string"||qo(i))return i;var e=i+"";return e=="0"&&1/i==-WS?"-0":e}function yf(i,e){e=Zo(e,i);for(var t=0,n=e.length;i!=null&&t<n;)i=i[Vl(e[t++])];return t&&t==n?i:void 0}function XS(i,e,t){var n=i==null?void 0:yf(i,e);return n===void 0?t:n}function $S(i,e){for(var t=-1,n=e.length,r=i.length;++t<n;)i[r+t]=e[t];return i}var Id=Ci?Ci.isConcatSpreadable:void 0;function jS(i){return ks(i)||xf(i)||!!(Id&&i&&i[Id])}function Mf(i,e,t,n,r){var s=-1,o=i.length;for(t||(t=jS),r||(r=[]);++s<o;){var a=i[s];e>0&&t(a)?e>1?Mf(a,e-1,t,n,r):$S(r,a):n||(r[r.length]=a)}return r}function qS(i){var e=i==null?0:i.length;return e?Mf(i,1):[]}function KS(i){return $b(Qb(i,void 0,qS),i+"")}function YS(i,e){return i!=null&&e in Object(i)}function ZS(i,e,t){e=Zo(e,i);for(var n=-1,r=e.length,s=!1;++n<r;){var o=Vl(e[n]);if(!(s=i!=null&&t(i,o)))break;i=i[o]}return s||++n!=r?s:(r=i==null?0:i.length,!!r&&tS(r)&&gf(o,r)&&(ks(i)||xf(i)))}function JS(i,e){return i!=null&&ZS(i,e,YS)}var QS=function(){return jo.Date.now()};const qa=QS;var eE="Expected a function",tE=Math.max,nE=Math.min;function iE(i,e,t){var n,r,s,o,a,l,c=0,u=!1,d=!1,h=!0;if(typeof i!="function")throw new TypeError(eE);e=Rd(e)||0,nr(t)&&(u=!!t.leading,d="maxWait"in t,s=d?tE(Rd(t.maxWait)||0,e):s,h="trailing"in t?!!t.trailing:h);function p(w){var A=n,I=r;return n=r=void 0,c=w,o=i.apply(I,A),o}function g(w){return c=w,a=setTimeout(f,e),u?p(w):o}function _(w){var A=w-l,I=w-c,E=e-A;return d?nE(E,s-I):E}function m(w){var A=w-l,I=w-c;return l===void 0||A>=e||A<0||d&&I>=s}function f(){var w=qa();if(m(w))return M(w);a=setTimeout(f,_(w))}function M(w){return a=void 0,h&&n?p(w):(n=r=void 0,o)}function x(){a!==void 0&&clearTimeout(a),c=0,n=l=r=a=void 0}function S(){return a===void 0?o:M(qa())}function C(){var w=qa(),A=m(w);if(n=arguments,r=this,l=w,A){if(a===void 0)return g(l);if(d)return clearTimeout(a),a=setTimeout(f,e),p(l)}return a===void 0&&(a=setTimeout(f,e)),o}return C.cancel=x,C.flush=S,C}function Bo(i){for(var e=-1,t=i==null?0:i.length,n={};++e<t;){var r=i[e];n[r[0]]=r[1]}return n}function Zi(i){return i==null}function rE(i){return i===void 0}function sE(i,e,t,n){if(!nr(i))return i;e=Zo(e,i);for(var r=-1,s=e.length,o=s-1,a=i;a!=null&&++r<s;){var l=Vl(e[r]),c=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return i;if(r!=o){var u=a[l];c=n?n(u,l,a):void 0,c===void 0&&(c=nr(u)?u:gf(e[r+1])?[]:{})}Jb(a,l,c),a=a[l]}return i}function oE(i,e,t){for(var n=-1,r=e.length,s={};++n<r;){var o=e[n],a=yf(i,o);t(a,o)&&sE(s,Zo(o,i),a)}return s}function aE(i,e){return oE(i,e,function(t,n){return JS(i,n)})}var lE=KS(function(i,e){return i==null?{}:aE(i,e)});const cE=lE,uE=i=>i===void 0,bf=i=>typeof i=="boolean",rr=i=>typeof i=="number",Br=i=>typeof Element>"u"?!1:i instanceof Element,dE=i=>Mn(i)?!Number.isNaN(Number(i)):!1;function gl(i,e="px"){if(!i)return"";if(rr(i)||dE(i))return`${i}${e}`;if(Mn(i))return i}/*! Element Plus Icons Vue v2.3.1 */var hE=Ve({name:"ArrowDown",__name:"arrow-down",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"})]))}}),fE=hE,pE=Ve({name:"CircleCheck",__name:"circle-check",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),We("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})]))}}),mE=pE,gE=Ve({name:"CircleClose",__name:"circle-close",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"}),We("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"})]))}}),Sf=gE,_E=Ve({name:"Close",__name:"close",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),vE=_E,xE=Ve({name:"Hide",__name:"hide",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),We("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})]))}}),yE=xE,ME=Ve({name:"Loading",__name:"loading",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})]))}}),Ef=ME,bE=Ve({name:"View",__name:"view",setup(i){return(e,t)=>(xe(),Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[We("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})]))}}),SE=bE;const Tf="__epPropKey",et=i=>i,EE=i=>ws(i)&&!!i[Tf],Jo=(i,e)=>{if(!ws(i)||EE(i))return i;const{values:t,required:n,default:r,type:s,validator:o}=i,l={type:s,required:!!n,validator:t||o?c=>{let u=!1,d=[];if(t&&(d=Array.from(t),Ro(i,"default")&&d.push(r),u||(u=d.includes(c))),o&&(u||(u=o(c))),!u&&d.length>0){const h=[...new Set(d)].map(p=>JSON.stringify(p)).join(", ");up(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[Tf]:!0};return Ro(i,"default")&&(l.default=r),l},Bt=i=>Bo(Object.entries(i).map(([e,t])=>[e,Jo(t,e)])),ko=et([String,Object,Function]),TE={validating:Ef,success:mE,error:Sf},ar=(i,e)=>{if(i.install=t=>{for(const n of[i,...Object.values(e??{})])t.component(n.name,n)},e)for(const[t,n]of Object.entries(e))i[t]=n;return i},AE=i=>(i.install=Rs,i),yn={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ji="update:modelValue",wE="change",RE=["","default","small","large"],CE=i=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(i),PE=i=>i,LE=["class","style"],IE=/^on[A-Z]/,NE=(i={})=>{const{excludeListeners:e=!1,excludeKeys:t}=i,n=se(()=>((t==null?void 0:t.value)||[]).concat(LE)),r=Zt();return r?se(()=>{var s;return Bo(Object.entries((s=r.proxy)==null?void 0:s.$attrs).filter(([o])=>!n.value.includes(o)&&!(e&&IE.test(o))))}):se(()=>({}))},DE=({from:i,replacement:e,scope:t,version:n,ref:r,type:s="API"},o)=>{$e(()=>P(o),a=>{},{immediate:!0})};var UE={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const OE=i=>(e,t)=>FE(e,t,P(i)),FE=(i,e,t)=>XS(t,i,i).replace(/\{(\w+)\}/g,(n,r)=>{var s;return`${(s=e==null?void 0:e[r])!=null?s:`{${r}}`}`}),BE=i=>{const e=se(()=>P(i).name),t=gh(i)?i:me(i);return{lang:e,locale:t,t:OE(i)}},kE=Symbol("localeContextKey"),Af=i=>{const e=i||_t(kE,me());return BE(se(()=>e.value||UE))},Ka="el",HE="is-",zi=(i,e,t,n,r)=>{let s=`${i}-${e}`;return t&&(s+=`-${t}`),n&&(s+=`__${n}`),r&&(s+=`--${r}`),s},zE=Symbol("namespaceContextKey"),Gl=i=>{const e=i||(Zt()?_t(zE,me(Ka)):me(Ka));return se(()=>P(e)||Ka)},Ft=(i,e)=>{const t=Gl(e);return{namespace:t,b:(_="")=>zi(t.value,i,_,"",""),e:_=>_?zi(t.value,i,"",_,""):"",m:_=>_?zi(t.value,i,"","",_):"",be:(_,m)=>_&&m?zi(t.value,i,_,m,""):"",em:(_,m)=>_&&m?zi(t.value,i,"",_,m):"",bm:(_,m)=>_&&m?zi(t.value,i,_,"",m):"",bem:(_,m,f)=>_&&m&&f?zi(t.value,i,_,m,f):"",is:(_,...m)=>{const f=m.length>=1?m[0]:!0;return _&&f?`${HE}${_}`:""},cssVar:_=>{const m={};for(const f in _)_[f]&&(m[`--${t.value}-${f}`]=_[f]);return m},cssVarName:_=>`--${t.value}-${_}`,cssVarBlock:_=>{const m={};for(const f in _)_[f]&&(m[`--${t.value}-${i}-${f}`]=_[f]);return m},cssVarBlockName:_=>`--${t.value}-${i}-${_}`}},VE=Jo({type:et(Boolean),default:null}),GE=Jo({type:et(Function)}),wf=i=>{const e=`update:${i}`,t=`onUpdate:${i}`,n=[e],r={[i]:VE,[t]:GE};return{useModelToggle:({indicator:o,toggleReason:a,shouldHideWhenRouteChanges:l,shouldProceed:c,onShow:u,onHide:d})=>{const h=Zt(),{emit:p}=h,g=h.props,_=se(()=>Lr(g[t])),m=se(()=>g[i]===null),f=A=>{o.value!==!0&&(o.value=!0,a&&(a.value=A),Lr(u)&&u(A))},M=A=>{o.value!==!1&&(o.value=!1,a&&(a.value=A),Lr(d)&&d(A))},x=A=>{if(g.disabled===!0||Lr(c)&&!c())return;const I=_.value&&qt;I&&p(e,!0),(m.value||!I)&&f(A)},S=A=>{if(g.disabled===!0||!qt)return;const I=_.value&&qt;I&&p(e,!1),(m.value||!I)&&M(A)},C=A=>{bf(A)&&(g.disabled&&A?_.value&&p(e,!1):o.value!==A&&(A?f():M()))},w=()=>{o.value?S():x()};return $e(()=>g[i],C),l&&h.appContext.config.globalProperties.$route!==void 0&&$e(()=>({...h.proxy.$route}),()=>{l.value&&o.value&&S()}),Xt(()=>{C(g[i])}),{hide:S,show:x,toggle:w,hasUpdateHandler:_}},useModelToggleProps:r,useModelToggleEmits:n}};wf("modelValue");const Rf=i=>{const e=Zt();return se(()=>{var t,n;return(n=(t=e==null?void 0:e.proxy)==null?void 0:t.$props)==null?void 0:n[i]})};var Kt="top",dn="bottom",hn="right",Yt="left",Wl="auto",Hs=[Kt,dn,hn,Yt],Kr="start",Ns="end",WE="clippingParents",Cf="viewport",gs="popper",XE="reference",Nd=Hs.reduce(function(i,e){return i.concat([e+"-"+Kr,e+"-"+Ns])},[]),Xl=[].concat(Hs,[Wl]).reduce(function(i,e){return i.concat([e,e+"-"+Kr,e+"-"+Ns])},[]),$E="beforeRead",jE="read",qE="afterRead",KE="beforeMain",YE="main",ZE="afterMain",JE="beforeWrite",QE="write",eT="afterWrite",tT=[$E,jE,qE,KE,YE,ZE,JE,QE,eT];function Un(i){return i?(i.nodeName||"").toLowerCase():null}function Tn(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function Yr(i){var e=Tn(i).Element;return i instanceof e||i instanceof Element}function un(i){var e=Tn(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function $l(i){if(typeof ShadowRoot>"u")return!1;var e=Tn(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function nT(i){var e=i.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},s=e.elements[t];!un(s)||!Un(s)||(Object.assign(s.style,n),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function iT(i){var e=i.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],s=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(l,c){return l[c]="",l},{});!un(r)||!Un(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){r.removeAttribute(l)}))})}}var Pf={name:"applyStyles",enabled:!0,phase:"write",fn:nT,effect:iT,requires:["computeStyles"]};function Ln(i){return i.split("-")[0]}var Qi=Math.max,Ho=Math.min,Zr=Math.round;function Jr(i,e){e===void 0&&(e=!1);var t=i.getBoundingClientRect(),n=1,r=1;if(un(i)&&e){var s=i.offsetHeight,o=i.offsetWidth;o>0&&(n=Zr(t.width)/o||1),s>0&&(r=Zr(t.height)/s||1)}return{width:t.width/n,height:t.height/r,top:t.top/r,right:t.right/n,bottom:t.bottom/r,left:t.left/n,x:t.left/n,y:t.top/r}}function jl(i){var e=Jr(i),t=i.offsetWidth,n=i.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:i.offsetLeft,y:i.offsetTop,width:t,height:n}}function Lf(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&$l(t)){var n=e;do{if(n&&i.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ti(i){return Tn(i).getComputedStyle(i)}function rT(i){return["table","td","th"].indexOf(Un(i))>=0}function Li(i){return((Yr(i)?i.ownerDocument:i.document)||window.document).documentElement}function Qo(i){return Un(i)==="html"?i:i.assignedSlot||i.parentNode||($l(i)?i.host:null)||Li(i)}function Dd(i){return!un(i)||ti(i).position==="fixed"?null:i.offsetParent}function sT(i){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,t=navigator.userAgent.indexOf("Trident")!==-1;if(t&&un(i)){var n=ti(i);if(n.position==="fixed")return null}var r=Qo(i);for($l(r)&&(r=r.host);un(r)&&["html","body"].indexOf(Un(r))<0;){var s=ti(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function zs(i){for(var e=Tn(i),t=Dd(i);t&&rT(t)&&ti(t).position==="static";)t=Dd(t);return t&&(Un(t)==="html"||Un(t)==="body"&&ti(t).position==="static")?e:t||sT(i)||e}function ql(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Es(i,e,t){return Qi(i,Ho(e,t))}function oT(i,e,t){var n=Es(i,e,t);return n>t?t:n}function If(){return{top:0,right:0,bottom:0,left:0}}function Nf(i){return Object.assign({},If(),i)}function Df(i,e){return e.reduce(function(t,n){return t[n]=i,t},{})}var aT=function(i,e){return i=typeof i=="function"?i(Object.assign({},e.rects,{placement:e.placement})):i,Nf(typeof i!="number"?i:Df(i,Hs))};function lT(i){var e,t=i.state,n=i.name,r=i.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=Ln(t.placement),l=ql(a),c=[Yt,hn].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var d=aT(r.padding,t),h=jl(s),p=l==="y"?Kt:Yt,g=l==="y"?dn:hn,_=t.rects.reference[u]+t.rects.reference[l]-o[l]-t.rects.popper[u],m=o[l]-t.rects.reference[l],f=zs(s),M=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,x=_/2-m/2,S=d[p],C=M-h[u]-d[g],w=M/2-h[u]/2+x,A=Es(S,w,C),I=l;t.modifiersData[n]=(e={},e[I]=A,e.centerOffset=A-w,e)}}function cT(i){var e=i.state,t=i.options,n=t.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||!Lf(e.elements.popper,r)||(e.elements.arrow=r))}var uT={name:"arrow",enabled:!0,phase:"main",fn:lT,effect:cT,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Qr(i){return i.split("-")[1]}var dT={top:"auto",right:"auto",bottom:"auto",left:"auto"};function hT(i){var e=i.x,t=i.y,n=window,r=n.devicePixelRatio||1;return{x:Zr(e*r)/r||0,y:Zr(t*r)/r||0}}function Ud(i){var e,t=i.popper,n=i.popperRect,r=i.placement,s=i.variation,o=i.offsets,a=i.position,l=i.gpuAcceleration,c=i.adaptive,u=i.roundOffsets,d=i.isFixed,h=o.x,p=h===void 0?0:h,g=o.y,_=g===void 0?0:g,m=typeof u=="function"?u({x:p,y:_}):{x:p,y:_};p=m.x,_=m.y;var f=o.hasOwnProperty("x"),M=o.hasOwnProperty("y"),x=Yt,S=Kt,C=window;if(c){var w=zs(t),A="clientHeight",I="clientWidth";if(w===Tn(t)&&(w=Li(t),ti(w).position!=="static"&&a==="absolute"&&(A="scrollHeight",I="scrollWidth")),w=w,r===Kt||(r===Yt||r===hn)&&s===Ns){S=dn;var E=d&&w===C&&C.visualViewport?C.visualViewport.height:w[A];_-=E-n.height,_*=l?1:-1}if(r===Yt||(r===Kt||r===dn)&&s===Ns){x=hn;var y=d&&w===C&&C.visualViewport?C.visualViewport.width:w[I];p-=y-n.width,p*=l?1:-1}}var U=Object.assign({position:a},c&&dT),k=u===!0?hT({x:p,y:_}):{x:p,y:_};if(p=k.x,_=k.y,l){var L;return Object.assign({},U,(L={},L[S]=M?"0":"",L[x]=f?"0":"",L.transform=(C.devicePixelRatio||1)<=1?"translate("+p+"px, "+_+"px)":"translate3d("+p+"px, "+_+"px, 0)",L))}return Object.assign({},U,(e={},e[S]=M?_+"px":"",e[x]=f?p+"px":"",e.transform="",e))}function fT(i){var e=i.state,t=i.options,n=t.gpuAcceleration,r=n===void 0?!0:n,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,l=a===void 0?!0:a,c={placement:Ln(e.placement),variation:Qr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ud(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ud(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Uf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:fT,data:{}},vo={passive:!0};function pT(i){var e=i.state,t=i.instance,n=i.options,r=n.scroll,s=r===void 0?!0:r,o=n.resize,a=o===void 0?!0:o,l=Tn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,vo)}),a&&l.addEventListener("resize",t.update,vo),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,vo)}),a&&l.removeEventListener("resize",t.update,vo)}}var Of={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:pT,data:{}},mT={left:"right",right:"left",bottom:"top",top:"bottom"};function Ao(i){return i.replace(/left|right|bottom|top/g,function(e){return mT[e]})}var gT={start:"end",end:"start"};function Od(i){return i.replace(/start|end/g,function(e){return gT[e]})}function Kl(i){var e=Tn(i),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Yl(i){return Jr(Li(i)).left+Kl(i).scrollLeft}function _T(i){var e=Tn(i),t=Li(i),n=e.visualViewport,r=t.clientWidth,s=t.clientHeight,o=0,a=0;return n&&(r=n.width,s=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=n.offsetLeft,a=n.offsetTop)),{width:r,height:s,x:o+Yl(i),y:a}}function vT(i){var e,t=Li(i),n=Kl(i),r=(e=i.ownerDocument)==null?void 0:e.body,s=Qi(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Qi(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+Yl(i),l=-n.scrollTop;return ti(r||t).direction==="rtl"&&(a+=Qi(t.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Zl(i){var e=ti(i),t=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+n)}function Ff(i){return["html","body","#document"].indexOf(Un(i))>=0?i.ownerDocument.body:un(i)&&Zl(i)?i:Ff(Qo(i))}function Ts(i,e){var t;e===void 0&&(e=[]);var n=Ff(i),r=n===((t=i.ownerDocument)==null?void 0:t.body),s=Tn(n),o=r?[s].concat(s.visualViewport||[],Zl(n)?n:[]):n,a=e.concat(o);return r?a:a.concat(Ts(Qo(o)))}function _l(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function xT(i){var e=Jr(i);return e.top=e.top+i.clientTop,e.left=e.left+i.clientLeft,e.bottom=e.top+i.clientHeight,e.right=e.left+i.clientWidth,e.width=i.clientWidth,e.height=i.clientHeight,e.x=e.left,e.y=e.top,e}function Fd(i,e){return e===Cf?_l(_T(i)):Yr(e)?xT(e):_l(vT(Li(i)))}function yT(i){var e=Ts(Qo(i)),t=["absolute","fixed"].indexOf(ti(i).position)>=0,n=t&&un(i)?zs(i):i;return Yr(n)?e.filter(function(r){return Yr(r)&&Lf(r,n)&&Un(r)!=="body"}):[]}function MT(i,e,t){var n=e==="clippingParents"?yT(i):[].concat(e),r=[].concat(n,[t]),s=r[0],o=r.reduce(function(a,l){var c=Fd(i,l);return a.top=Qi(c.top,a.top),a.right=Ho(c.right,a.right),a.bottom=Ho(c.bottom,a.bottom),a.left=Qi(c.left,a.left),a},Fd(i,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Bf(i){var e=i.reference,t=i.element,n=i.placement,r=n?Ln(n):null,s=n?Qr(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,l;switch(r){case Kt:l={x:o,y:e.y-t.height};break;case dn:l={x:o,y:e.y+e.height};break;case hn:l={x:e.x+e.width,y:a};break;case Yt:l={x:e.x-t.width,y:a};break;default:l={x:e.x,y:e.y}}var c=r?ql(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Kr:l[c]=l[c]-(e[u]/2-t[u]/2);break;case Ns:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function Ds(i,e){e===void 0&&(e={});var t=e,n=t.placement,r=n===void 0?i.placement:n,s=t.boundary,o=s===void 0?WE:s,a=t.rootBoundary,l=a===void 0?Cf:a,c=t.elementContext,u=c===void 0?gs:c,d=t.altBoundary,h=d===void 0?!1:d,p=t.padding,g=p===void 0?0:p,_=Nf(typeof g!="number"?g:Df(g,Hs)),m=u===gs?XE:gs,f=i.rects.popper,M=i.elements[h?m:u],x=MT(Yr(M)?M:M.contextElement||Li(i.elements.popper),o,l),S=Jr(i.elements.reference),C=Bf({reference:S,element:f,strategy:"absolute",placement:r}),w=_l(Object.assign({},f,C)),A=u===gs?w:S,I={top:x.top-A.top+_.top,bottom:A.bottom-x.bottom+_.bottom,left:x.left-A.left+_.left,right:A.right-x.right+_.right},E=i.modifiersData.offset;if(u===gs&&E){var y=E[r];Object.keys(I).forEach(function(U){var k=[hn,dn].indexOf(U)>=0?1:-1,L=[Kt,dn].indexOf(U)>=0?"y":"x";I[U]+=y[L]*k})}return I}function bT(i,e){e===void 0&&(e={});var t=e,n=t.placement,r=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?Xl:l,u=Qr(n),d=u?a?Nd:Nd.filter(function(g){return Qr(g)===u}):Hs,h=d.filter(function(g){return c.indexOf(g)>=0});h.length===0&&(h=d);var p=h.reduce(function(g,_){return g[_]=Ds(i,{placement:_,boundary:r,rootBoundary:s,padding:o})[Ln(_)],g},{});return Object.keys(p).sort(function(g,_){return p[g]-p[_]})}function ST(i){if(Ln(i)===Wl)return[];var e=Ao(i);return[Od(i),e,Od(e)]}function ET(i){var e=i.state,t=i.options,n=i.name;if(!e.modifiersData[n]._skip){for(var r=t.mainAxis,s=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!0:o,l=t.fallbackPlacements,c=t.padding,u=t.boundary,d=t.rootBoundary,h=t.altBoundary,p=t.flipVariations,g=p===void 0?!0:p,_=t.allowedAutoPlacements,m=e.options.placement,f=Ln(m),M=f===m,x=l||(M||!g?[Ao(m)]:ST(m)),S=[m].concat(x).reduce(function(j,ne){return j.concat(Ln(ne)===Wl?bT(e,{placement:ne,boundary:u,rootBoundary:d,padding:c,flipVariations:g,allowedAutoPlacements:_}):ne)},[]),C=e.rects.reference,w=e.rects.popper,A=new Map,I=!0,E=S[0],y=0;y<S.length;y++){var U=S[y],k=Ln(U),L=Qr(U)===Kr,$=[Kt,dn].indexOf(k)>=0,q=$?"width":"height",B=Ds(e,{placement:U,boundary:u,rootBoundary:d,altBoundary:h,padding:c}),Z=$?L?hn:Yt:L?dn:Kt;C[q]>w[q]&&(Z=Ao(Z));var H=Ao(Z),Q=[];if(s&&Q.push(B[k]<=0),a&&Q.push(B[Z]<=0,B[H]<=0),Q.every(function(j){return j})){E=U,I=!1;break}A.set(U,Q)}if(I)for(var ee=g?3:1,fe=function(j){var ne=S.find(function(ue){var ae=A.get(ue);if(ae)return ae.slice(0,j).every(function(Te){return Te})});if(ne)return E=ne,"break"},Ce=ee;Ce>0;Ce--){var Ge=fe(Ce);if(Ge==="break")break}e.placement!==E&&(e.modifiersData[n]._skip=!0,e.placement=E,e.reset=!0)}}var TT={name:"flip",enabled:!0,phase:"main",fn:ET,requiresIfExists:["offset"],data:{_skip:!1}};function Bd(i,e,t){return t===void 0&&(t={x:0,y:0}),{top:i.top-e.height-t.y,right:i.right-e.width+t.x,bottom:i.bottom-e.height+t.y,left:i.left-e.width-t.x}}function kd(i){return[Kt,hn,dn,Yt].some(function(e){return i[e]>=0})}function AT(i){var e=i.state,t=i.name,n=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=Ds(e,{elementContext:"reference"}),a=Ds(e,{altBoundary:!0}),l=Bd(o,n),c=Bd(a,r,s),u=kd(l),d=kd(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var wT={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:AT};function RT(i,e,t){var n=Ln(i),r=[Yt,Kt].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:i})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[Yt,hn].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function CT(i){var e=i.state,t=i.options,n=i.name,r=t.offset,s=r===void 0?[0,0]:r,o=Xl.reduce(function(u,d){return u[d]=RT(d,e.rects,s),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=o}var PT={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:CT};function LT(i){var e=i.state,t=i.name;e.modifiersData[t]=Bf({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var kf={name:"popperOffsets",enabled:!0,phase:"read",fn:LT,data:{}};function IT(i){return i==="x"?"y":"x"}function NT(i){var e=i.state,t=i.options,n=i.name,r=t.mainAxis,s=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!1:o,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,d=t.padding,h=t.tether,p=h===void 0?!0:h,g=t.tetherOffset,_=g===void 0?0:g,m=Ds(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),f=Ln(e.placement),M=Qr(e.placement),x=!M,S=ql(f),C=IT(S),w=e.modifiersData.popperOffsets,A=e.rects.reference,I=e.rects.popper,E=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,y=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),U=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(w){if(s){var L,$=S==="y"?Kt:Yt,q=S==="y"?dn:hn,B=S==="y"?"height":"width",Z=w[S],H=Z+m[$],Q=Z-m[q],ee=p?-I[B]/2:0,fe=M===Kr?A[B]:I[B],Ce=M===Kr?-I[B]:-A[B],Ge=e.elements.arrow,j=p&&Ge?jl(Ge):{width:0,height:0},ne=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:If(),ue=ne[$],ae=ne[q],Te=Es(0,A[B],j[B]),ie=x?A[B]/2-ee-Te-ue-y.mainAxis:fe-Te-ue-y.mainAxis,Ee=x?-A[B]/2+ee+Te+ae+y.mainAxis:Ce+Te+ae+y.mainAxis,O=e.elements.arrow&&zs(e.elements.arrow),Pe=O?S==="y"?O.clientTop||0:O.clientLeft||0:0,ye=(L=U==null?void 0:U[S])!=null?L:0,at=Z+ie-ye-Pe,Ae=Z+Ee-ye,Ke=Es(p?Ho(H,at):H,Z,p?Qi(Q,Ae):Q);w[S]=Ke,k[S]=Ke-Z}if(a){var R,b=S==="x"?Kt:Yt,G=S==="x"?dn:hn,K=w[C],J=C==="y"?"height":"width",te=K+m[b],Me=K-m[G],D=[Kt,Yt].indexOf(f)!==-1,oe=(R=U==null?void 0:U[C])!=null?R:0,ge=D?te:K-A[J]-I[J]-oe+y.altAxis,re=D?K+A[J]+I[J]-oe-y.altAxis:Me,de=p&&D?oT(ge,K,re):Es(p?ge:te,K,p?re:Me);w[C]=de,k[C]=de-K}e.modifiersData[n]=k}}var DT={name:"preventOverflow",enabled:!0,phase:"main",fn:NT,requiresIfExists:["offset"]};function UT(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function OT(i){return i===Tn(i)||!un(i)?Kl(i):UT(i)}function FT(i){var e=i.getBoundingClientRect(),t=Zr(e.width)/i.offsetWidth||1,n=Zr(e.height)/i.offsetHeight||1;return t!==1||n!==1}function BT(i,e,t){t===void 0&&(t=!1);var n=un(e),r=un(e)&&FT(e),s=Li(e),o=Jr(i,r),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((Un(e)!=="body"||Zl(s))&&(a=OT(e)),un(e)?(l=Jr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Yl(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function kT(i){var e=new Map,t=new Set,n=[];i.forEach(function(s){e.set(s.name,s)});function r(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var l=e.get(a);l&&r(l)}}),n.push(s)}return i.forEach(function(s){t.has(s.name)||r(s)}),n}function HT(i){var e=kT(i);return tT.reduce(function(t,n){return t.concat(e.filter(function(r){return r.phase===n}))},[])}function zT(i){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(i())})})),e}}function VT(i){var e=i.reduce(function(t,n){var r=t[n.name];return t[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var Hd={placement:"bottom",modifiers:[],strategy:"absolute"};function zd(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Jl(i){i===void 0&&(i={});var e=i,t=e.defaultModifiers,n=t===void 0?[]:t,r=e.defaultOptions,s=r===void 0?Hd:r;return function(o,a,l){l===void 0&&(l=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Hd,s),modifiersData:{},elements:{reference:o,popper:a},attributes:{},styles:{}},u=[],d=!1,h={state:c,setOptions:function(_){var m=typeof _=="function"?_(c.options):_;g(),c.options=Object.assign({},s,c.options,m),c.scrollParents={reference:Yr(o)?Ts(o):o.contextElement?Ts(o.contextElement):[],popper:Ts(a)};var f=HT(VT([].concat(n,c.options.modifiers)));return c.orderedModifiers=f.filter(function(M){return M.enabled}),p(),h.update()},forceUpdate:function(){if(!d){var _=c.elements,m=_.reference,f=_.popper;if(zd(m,f)){c.rects={reference:BT(m,zs(f),c.options.strategy==="fixed"),popper:jl(f)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(I){return c.modifiersData[I.name]=Object.assign({},I.data)});for(var M=0;M<c.orderedModifiers.length;M++){if(c.reset===!0){c.reset=!1,M=-1;continue}var x=c.orderedModifiers[M],S=x.fn,C=x.options,w=C===void 0?{}:C,A=x.name;typeof S=="function"&&(c=S({state:c,options:w,name:A,instance:h})||c)}}}},update:zT(function(){return new Promise(function(_){h.forceUpdate(),_(c)})}),destroy:function(){g(),d=!0}};if(!zd(o,a))return h;h.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function p(){c.orderedModifiers.forEach(function(_){var m=_.name,f=_.options,M=f===void 0?{}:f,x=_.effect;if(typeof x=="function"){var S=x({state:c,name:m,instance:h,options:M}),C=function(){};u.push(S||C)}})}function g(){u.forEach(function(_){return _()}),u=[]}return h}}Jl();var GT=[Of,kf,Uf,Pf];Jl({defaultModifiers:GT});var WT=[Of,kf,Uf,Pf,PT,TT,DT,uT,wT],XT=Jl({defaultModifiers:WT});const $T=(i,e,t={})=>{const n={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const c=jT(l);Object.assign(o.value,c)},requires:["computeStyles"]},r=se(()=>{const{onFirstUpdate:l,placement:c,strategy:u,modifiers:d}=P(t);return{onFirstUpdate:l,placement:c||"bottom",strategy:u||"absolute",modifiers:[...d||[],n,{name:"applyStyles",enabled:!1}]}}),s=bi(),o=me({styles:{popper:{position:P(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=()=>{s.value&&(s.value.destroy(),s.value=void 0)};return $e(r,l=>{const c=P(s);c&&c.setOptions(l)},{deep:!0}),$e([i,e],([l,c])=>{a(),!(!l||!c)&&(s.value=XT(l,c,P(r)))}),Pi(()=>{a()}),{state:se(()=>{var l;return{...((l=P(s))==null?void 0:l.state)||{}}}),styles:se(()=>P(o).styles),attributes:se(()=>P(o).attributes),update:()=>{var l;return(l=P(s))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=P(s))==null?void 0:l.forceUpdate()},instanceRef:se(()=>P(s))}};function jT(i){const e=Object.keys(i.elements),t=Bo(e.map(r=>[r,i.styles[r]||{}])),n=Bo(e.map(r=>[r,i.attributes[r]]));return{styles:t,attributes:n}}function Vd(){let i;const e=(n,r)=>{t(),i=window.setTimeout(n,r)},t=()=>window.clearTimeout(i);return Ul(()=>t()),{registerTimeout:e,cancelTimeout:t}}const Gd={prefix:Math.floor(Math.random()*1e4),current:0},qT=Symbol("elIdInjection"),Hf=()=>Zt()?_t(qT,Gd):Gd,zf=i=>{const e=Hf(),t=Gl();return RM(()=>P(i)||`${t.value}-id-${e.prefix}-${e.current++}`)};let Pr=[];const Wd=i=>{const e=i;e.key===yn.esc&&Pr.forEach(t=>t(e))},KT=i=>{Xt(()=>{Pr.length===0&&document.addEventListener("keydown",Wd),qt&&Pr.push(i)}),Pi(()=>{Pr=Pr.filter(e=>e!==i),Pr.length===0&&qt&&document.removeEventListener("keydown",Wd)})},Vf=()=>{const i=Gl(),e=Hf(),t=se(()=>`${i.value}-popper-container-${e.prefix}`),n=se(()=>`#${t.value}`);return{id:t,selector:n}},YT=i=>{const e=document.createElement("div");return e.id=i,document.body.appendChild(e),e},ZT=()=>{const{id:i,selector:e}=Vf();return dp(()=>{qt&&(document.body.querySelector(e.value)||YT(i.value))}),{id:i,selector:e}},JT=Bt({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),QT=({showAfter:i,hideAfter:e,autoClose:t,open:n,close:r})=>{const{registerTimeout:s}=Vd(),{registerTimeout:o,cancelTimeout:a}=Vd();return{onOpen:u=>{s(()=>{n(u);const d=P(t);rr(d)&&d>0&&o(()=>{r(u)},d)},P(i))},onClose:u=>{a(),s(()=>{r(u)},P(e))}}},Gf=Symbol("elForwardRef"),eA=i=>{Ai(Gf,{setForwardRef:t=>{i.value=t}})},tA=i=>({mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}}),Xd={current:0},$d=me(0),nA=2e3,jd=Symbol("elZIndexContextKey"),iA=Symbol("zIndexContextKey"),rA=i=>{const e=Zt()?_t(jd,Xd):Xd,t=i||(Zt()?_t(iA,void 0):void 0),n=se(()=>{const o=P(t);return rr(o)?o:nA}),r=se(()=>n.value+$d.value),s=()=>(e.current++,$d.value=e.current,r.value);return!qt&&_t(jd),{initialZIndex:n,currentZIndex:r,nextZIndex:s}};function sA(i){let e;function t(){if(i.value==null)return;const{selectionStart:r,selectionEnd:s,value:o}=i.value;if(r==null||s==null)return;const a=o.slice(0,Math.max(0,r)),l=o.slice(Math.max(0,s));e={selectionStart:r,selectionEnd:s,value:o,beforeTxt:a,afterTxt:l}}function n(){if(i.value==null||e==null)return;const{value:r}=i.value,{beforeTxt:s,afterTxt:o,selectionStart:a}=e;if(s==null||o==null||a==null)return;let l=r.length;if(r.endsWith(o))l=r.length-o.length;else if(r.startsWith(s))l=s.length;else{const c=s[a-1],u=r.indexOf(c,a-1);u!==-1&&(l=u+1)}i.value.setSelectionRange(l,l)}return[t,n]}const Ql=Jo({type:String,values:RE,required:!1}),oA=Symbol("size"),aA=()=>{const i=_t(oA,{});return se(()=>P(i.size)||"")};function Wf(i,{beforeFocus:e,afterFocus:t,beforeBlur:n,afterBlur:r}={}){const s=Zt(),{emit:o}=s,a=bi(),l=me(!1),c=h=>{Lr(e)&&e(h)||l.value||(l.value=!0,o("focus",h),t==null||t())},u=h=>{var p;Lr(n)&&n(h)||h.relatedTarget&&((p=a.value)!=null&&p.contains(h.relatedTarget))||(l.value=!1,o("blur",h),r==null||r())},d=()=>{var h,p;(h=a.value)!=null&&h.contains(document.activeElement)&&a.value!==document.activeElement||(p=i.value)==null||p.focus()};return $e(a,h=>{h&&h.setAttribute("tabindex","-1")}),Fr(a,"focus",c,!0),Fr(a,"blur",u,!0),Fr(a,"click",d,!0),{isFocused:l,wrapperRef:a,handleFocus:c,handleBlur:u}}function lA({afterComposition:i,emit:e}){const t=me(!1),n=a=>{e==null||e("compositionstart",a),t.value=!0},r=a=>{var l;e==null||e("compositionupdate",a);const c=(l=a.target)==null?void 0:l.value,u=c[c.length-1]||"";t.value=!CE(u)},s=a=>{e==null||e("compositionend",a),t.value&&(t.value=!1,$t(()=>i(a)))};return{isComposing:t,handleComposition:a=>{a.type==="compositionend"?s(a):r(a)},handleCompositionStart:n,handleCompositionUpdate:r,handleCompositionEnd:s}}const cA=Bt({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),ea=i=>cE(cA,i),uA=Symbol(),qd=me();function dA(i,e=void 0){const t=Zt()?_t(uA,qd):qd;return i?se(()=>{var n,r;return(r=(n=t.value)==null?void 0:n[i])!=null?r:e}):t}var Ct=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};const hA=Bt({size:{type:et([Number,String])},color:{type:String}}),fA=Ve({name:"ElIcon",inheritAttrs:!1}),pA=Ve({...fA,props:hA,setup(i){const e=i,t=Ft("icon"),n=se(()=>{const{size:r,color:s}=e;return!r&&!s?{}:{fontSize:uE(r)?void 0:gl(r),"--color":s}});return(r,s)=>(xe(),Je("i",wi({class:P(t).b(),style:P(n)},r.$attrs),[bt(r.$slots,"default")],16))}});var mA=Ct(pA,[["__file","icon.vue"]]);const Kn=ar(mA),ec=Symbol("formContextKey"),zo=Symbol("formItemContextKey"),tc=(i,e={})=>{const t=me(void 0),n=e.prop?t:Rf("size"),r=e.global?t:aA(),s=e.form?{size:void 0}:_t(ec,void 0),o=e.formItem?{size:void 0}:_t(zo,void 0);return se(()=>n.value||P(i)||(o==null?void 0:o.size)||(s==null?void 0:s.size)||r.value||"")},ta=i=>{const e=Rf("disabled"),t=_t(ec,void 0);return se(()=>e.value||P(i)||(t==null?void 0:t.disabled)||!1)},nc=()=>{const i=_t(ec,void 0),e=_t(zo,void 0);return{form:i,formItem:e}},Xf=(i,{formItemContext:e,disableIdGeneration:t,disableIdManagement:n})=>{t||(t=me(!1)),n||(n=me(!1));const r=me();let s;const o=se(()=>{var a;return!!(!(i.label||i.ariaLabel)&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return Xt(()=>{s=$e([Yn(i,"id"),t],([a,l])=>{const c=a??(l?void 0:zf().value);c!==r.value&&(e!=null&&e.removeInputId&&(r.value&&e.removeInputId(r.value),!(n!=null&&n.value)&&!l&&c&&e.addInputId(c)),r.value=c)},{immediate:!0})}),_h(()=>{s&&s(),e!=null&&e.removeInputId&&r.value&&e.removeInputId(r.value)}),{isLabeledByFormItem:o,inputId:r}};let gn;const gA=`
  height:0 !important;
  visibility:hidden !important;
  ${WM()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,_A=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function vA(i){const e=window.getComputedStyle(i),t=e.getPropertyValue("box-sizing"),n=Number.parseFloat(e.getPropertyValue("padding-bottom"))+Number.parseFloat(e.getPropertyValue("padding-top")),r=Number.parseFloat(e.getPropertyValue("border-bottom-width"))+Number.parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:_A.map(o=>`${o}:${e.getPropertyValue(o)}`).join(";"),paddingSize:n,borderSize:r,boxSizing:t}}function Kd(i,e=1,t){var n;gn||(gn=document.createElement("textarea"),document.body.appendChild(gn));const{paddingSize:r,borderSize:s,boxSizing:o,contextStyle:a}=vA(i);gn.setAttribute("style",`${a};${gA}`),gn.value=i.value||i.placeholder||"";let l=gn.scrollHeight;const c={};o==="border-box"?l=l+s:o==="content-box"&&(l=l-r),gn.value="";const u=gn.scrollHeight-r;if(rr(e)){let d=u*e;o==="border-box"&&(d=d+r+s),l=Math.max(d,l),c.minHeight=`${d}px`}if(rr(t)){let d=u*t;o==="border-box"&&(d=d+r+s),l=Math.min(d,l)}return c.height=`${l}px`,(n=gn.parentNode)==null||n.removeChild(gn),gn=void 0,c}const xA=Bt({id:{type:String,default:void 0},size:Ql,disabled:Boolean,modelValue:{type:et([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:et([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:ko},prefixIcon:{type:ko},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:et([Object,Array,String]),default:()=>PE({})},autofocus:Boolean,rows:{type:Number,default:2},...ea(["ariaLabel"])}),yA={[Ji]:i=>Mn(i),input:i=>Mn(i),change:i=>Mn(i),focus:i=>i instanceof FocusEvent,blur:i=>i instanceof FocusEvent,clear:()=>!0,mouseleave:i=>i instanceof MouseEvent,mouseenter:i=>i instanceof MouseEvent,keydown:i=>i instanceof Event,compositionstart:i=>i instanceof CompositionEvent,compositionupdate:i=>i instanceof CompositionEvent,compositionend:i=>i instanceof CompositionEvent},MA=Ve({name:"ElInput",inheritAttrs:!1}),bA=Ve({...MA,props:xA,emits:yA,setup(i,{expose:e,emit:t}){const n=i,r=hp(),s=NE(),o=vh(),a=se(()=>[n.type==="textarea"?_.b():g.b(),g.m(h.value),g.is("disabled",p.value),g.is("exceed",Ce.value),{[g.b("group")]:o.prepend||o.append,[g.m("prefix")]:o.prefix||n.prefixIcon,[g.m("suffix")]:o.suffix||n.suffixIcon||n.clearable||n.showPassword,[g.bm("suffix","password-clear")]:H.value&&Q.value,[g.b("hidden")]:n.type==="hidden"},r.class]),l=se(()=>[g.e("wrapper"),g.is("focus",I.value)]),{form:c,formItem:u}=nc(),{inputId:d}=Xf(n,{formItemContext:u}),h=tc(),p=ta(),g=Ft("input"),_=Ft("textarea"),m=bi(),f=bi(),M=me(!1),x=me(!1),S=me(),C=bi(n.inputStyle),w=se(()=>m.value||f.value),{wrapperRef:A,isFocused:I,handleFocus:E,handleBlur:y}=Wf(w,{beforeFocus(){return p.value},afterBlur(){var D;n.validateEvent&&((D=u==null?void 0:u.validate)==null||D.call(u,"blur").catch(oe=>void 0))}}),U=se(()=>{var D;return(D=c==null?void 0:c.statusIcon)!=null?D:!1}),k=se(()=>(u==null?void 0:u.validateState)||""),L=se(()=>k.value&&TE[k.value]),$=se(()=>x.value?SE:yE),q=se(()=>[r.style]),B=se(()=>[n.inputStyle,C.value,{resize:n.resize}]),Z=se(()=>Zi(n.modelValue)?"":String(n.modelValue)),H=se(()=>n.clearable&&!p.value&&!n.readonly&&!!Z.value&&(I.value||M.value)),Q=se(()=>n.showPassword&&!p.value&&!!Z.value&&(!!Z.value||I.value)),ee=se(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!p.value&&!n.readonly&&!n.showPassword),fe=se(()=>Z.value.length),Ce=se(()=>!!ee.value&&fe.value>Number(n.maxlength)),Ge=se(()=>!!o.suffix||!!n.suffixIcon||H.value||n.showPassword||ee.value||!!k.value&&U.value),[j,ne]=sA(m);BM(f,D=>{if(Te(),!ee.value||n.resize!=="both")return;const oe=D[0],{width:ge}=oe.contentRect;S.value={right:`calc(100% - ${ge+15+6}px)`}});const ue=()=>{const{type:D,autosize:oe}=n;if(!(!qt||D!=="textarea"||!f.value))if(oe){const ge=ws(oe)?oe.minRows:void 0,re=ws(oe)?oe.maxRows:void 0,de=Kd(f.value,ge,re);C.value={overflowY:"hidden",...de},$t(()=>{f.value.offsetHeight,C.value=de})}else C.value={minHeight:Kd(f.value).minHeight}},Te=(D=>{let oe=!1;return()=>{var ge;if(oe||!n.autosize)return;((ge=f.value)==null?void 0:ge.offsetParent)===null||(D(),oe=!0)}})(ue),ie=()=>{const D=w.value,oe=n.formatter?n.formatter(Z.value):Z.value;!D||D.value===oe||(D.value=oe)},Ee=async D=>{j();let{value:oe}=D.target;if(n.formatter&&(oe=n.parser?n.parser(oe):oe),!Pe.value){if(oe===Z.value){ie();return}t(Ji,oe),t("input",oe),await $t(),ie(),ne()}},O=D=>{t("change",D.target.value)},{isComposing:Pe,handleCompositionStart:ye,handleCompositionUpdate:at,handleCompositionEnd:Ae}=lA({emit:t,afterComposition:Ee}),Ke=()=>{x.value=!x.value,R()},R=async()=>{var D;await $t(),(D=w.value)==null||D.focus()},b=()=>{var D;return(D=w.value)==null?void 0:D.blur()},G=D=>{M.value=!1,t("mouseleave",D)},K=D=>{M.value=!0,t("mouseenter",D)},J=D=>{t("keydown",D)},te=()=>{var D;(D=w.value)==null||D.select()},Me=()=>{t(Ji,""),t("change",""),t("clear"),t("input","")};return $e(()=>n.modelValue,()=>{var D;$t(()=>ue()),n.validateEvent&&((D=u==null?void 0:u.validate)==null||D.call(u,"change").catch(oe=>void 0))}),$e(Z,()=>ie()),$e(()=>n.type,async()=>{await $t(),ie(),ue()}),Xt(()=>{!n.formatter&&n.parser,ie(),$t(ue)}),e({input:m,textarea:f,ref:w,textareaStyle:B,autosize:Yn(n,"autosize"),isComposing:Pe,focus:R,blur:b,select:te,clear:Me,resizeTextarea:ue}),(D,oe)=>(xe(),Je("div",{class:De([P(a),{[P(g).bm("group","append")]:D.$slots.append,[P(g).bm("group","prepend")]:D.$slots.prepend}]),style:In(P(q)),onMouseenter:K,onMouseleave:G},[lt(" input "),D.type!=="textarea"?(xe(),Je(Yi,{key:0},[lt(" prepend slot "),D.$slots.prepend?(xe(),Je("div",{key:0,class:De(P(g).be("group","prepend"))},[bt(D.$slots,"prepend")],2)):lt("v-if",!0),We("div",{ref_key:"wrapperRef",ref:A,class:De(P(l))},[lt(" prefix slot "),D.$slots.prefix||D.prefixIcon?(xe(),Je("span",{key:0,class:De(P(g).e("prefix"))},[We("span",{class:De(P(g).e("prefix-inner"))},[bt(D.$slots,"prefix"),D.prefixIcon?(xe(),ft(P(Kn),{key:0,class:De(P(g).e("icon"))},{default:gt(()=>[(xe(),ft($i(D.prefixIcon)))]),_:1},8,["class"])):lt("v-if",!0)],2)],2)):lt("v-if",!0),We("input",wi({id:P(d),ref_key:"input",ref:m,class:P(g).e("inner")},P(s),{minlength:D.minlength,maxlength:D.maxlength,type:D.showPassword?x.value?"text":"password":D.type,disabled:P(p),readonly:D.readonly,autocomplete:D.autocomplete,tabindex:D.tabindex,"aria-label":D.ariaLabel,placeholder:D.placeholder,style:D.inputStyle,form:D.form,autofocus:D.autofocus,role:D.containerRole,onCompositionstart:P(ye),onCompositionupdate:P(at),onCompositionend:P(Ae),onInput:Ee,onChange:O,onKeydown:J}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role","onCompositionstart","onCompositionupdate","onCompositionend"]),lt(" suffix slot "),P(Ge)?(xe(),Je("span",{key:1,class:De(P(g).e("suffix"))},[We("span",{class:De(P(g).e("suffix-inner"))},[!P(H)||!P(Q)||!P(ee)?(xe(),Je(Yi,{key:0},[bt(D.$slots,"suffix"),D.suffixIcon?(xe(),ft(P(Kn),{key:0,class:De(P(g).e("icon"))},{default:gt(()=>[(xe(),ft($i(D.suffixIcon)))]),_:1},8,["class"])):lt("v-if",!0)],64)):lt("v-if",!0),P(H)?(xe(),ft(P(Kn),{key:1,class:De([P(g).e("icon"),P(g).e("clear")]),onMousedown:fp(P(Rs),["prevent"]),onClick:Me},{default:gt(()=>[Ot(P(Sf))]),_:1},8,["class","onMousedown"])):lt("v-if",!0),P(Q)?(xe(),ft(P(Kn),{key:2,class:De([P(g).e("icon"),P(g).e("password")]),onClick:Ke},{default:gt(()=>[(xe(),ft($i(P($))))]),_:1},8,["class"])):lt("v-if",!0),P(ee)?(xe(),Je("span",{key:3,class:De(P(g).e("count"))},[We("span",{class:De(P(g).e("count-inner"))},Zn(P(fe))+" / "+Zn(D.maxlength),3)],2)):lt("v-if",!0),P(k)&&P(L)&&P(U)?(xe(),ft(P(Kn),{key:4,class:De([P(g).e("icon"),P(g).e("validateIcon"),P(g).is("loading",P(k)==="validating")])},{default:gt(()=>[(xe(),ft($i(P(L))))]),_:1},8,["class"])):lt("v-if",!0)],2)],2)):lt("v-if",!0)],2),lt(" append slot "),D.$slots.append?(xe(),Je("div",{key:1,class:De(P(g).be("group","append"))},[bt(D.$slots,"append")],2)):lt("v-if",!0)],64)):(xe(),Je(Yi,{key:1},[lt(" textarea "),We("textarea",wi({id:P(d),ref_key:"textarea",ref:f,class:[P(_).e("inner"),P(g).is("focus",P(I))]},P(s),{minlength:D.minlength,maxlength:D.maxlength,tabindex:D.tabindex,disabled:P(p),readonly:D.readonly,autocomplete:D.autocomplete,style:P(B),"aria-label":D.ariaLabel,placeholder:D.placeholder,form:D.form,autofocus:D.autofocus,rows:D.rows,role:D.containerRole,onCompositionstart:P(ye),onCompositionupdate:P(at),onCompositionend:P(Ae),onInput:Ee,onFocus:P(E),onBlur:P(y),onChange:O,onKeydown:J}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","role","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),P(ee)?(xe(),Je("span",{key:0,style:In(S.value),class:De(P(g).e("count"))},Zn(P(fe))+" / "+Zn(D.maxlength),7)):lt("v-if",!0)],64))],38))}});var SA=Ct(bA,[["__file","input.vue"]]);const EA=ar(SA),ic=Symbol("popper"),$f=Symbol("popperContent"),TA=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],jf=Bt({role:{type:String,values:TA,default:"tooltip"}}),AA=Ve({name:"ElPopper",inheritAttrs:!1}),wA=Ve({...AA,props:jf,setup(i,{expose:e}){const t=i,n=me(),r=me(),s=me(),o=me(),a=se(()=>t.role),l={triggerRef:n,popperInstanceRef:r,contentRef:s,referenceRef:o,role:a};return e(l),Ai(ic,l),(c,u)=>bt(c.$slots,"default")}});var RA=Ct(wA,[["__file","popper.vue"]]);const qf=Bt({arrowOffset:{type:Number,default:5}}),CA=Ve({name:"ElPopperArrow",inheritAttrs:!1}),PA=Ve({...CA,props:qf,setup(i,{expose:e}){const t=i,n=Ft("popper"),{arrowOffset:r,arrowRef:s,arrowStyle:o}=_t($f,void 0);return $e(()=>t.arrowOffset,a=>{r.value=a}),Pi(()=>{s.value=void 0}),e({arrowRef:s}),(a,l)=>(xe(),Je("span",{ref_key:"arrowRef",ref:s,class:De(P(n).e("arrow")),style:In(P(o)),"data-popper-arrow":""},null,6))}});var LA=Ct(PA,[["__file","arrow.vue"]]);const IA="ElOnlyChild",NA=Ve({name:IA,setup(i,{slots:e,attrs:t}){var n;const r=_t(Gf),s=tA((n=r==null?void 0:r.setForwardRef)!=null?n:Rs);return()=>{var o;const a=(o=e.default)==null?void 0:o.call(e,t);if(!a||a.length>1)return null;const l=Kf(a);return l?ys(pp(l,t),[[s]]):null}}});function Kf(i){if(!i)return null;const e=i;for(const t of e){if(ws(t))switch(t.type){case mp:continue;case xh:case"svg":return Yd(t);case Yi:return Kf(t.children);default:return t}return Yd(t)}return null}function Yd(i){const e=Ft("only-child");return Ot("span",{class:e.e("content")},[i])}const Yf=Bt({virtualRef:{type:et(Object)},virtualTriggering:Boolean,onMouseenter:{type:et(Function)},onMouseleave:{type:et(Function)},onClick:{type:et(Function)},onKeydown:{type:et(Function)},onFocus:{type:et(Function)},onBlur:{type:et(Function)},onContextmenu:{type:et(Function)},id:String,open:Boolean}),DA=Ve({name:"ElPopperTrigger",inheritAttrs:!1}),UA=Ve({...DA,props:Yf,setup(i,{expose:e}){const t=i,{role:n,triggerRef:r}=_t(ic,void 0);eA(r);const s=se(()=>a.value?t.id:void 0),o=se(()=>{if(n&&n.value==="tooltip")return t.open&&t.id?t.id:void 0}),a=se(()=>{if(n&&n.value!=="tooltip")return n.value}),l=se(()=>a.value?`${t.open}`:void 0);let c;const u=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return Xt(()=>{$e(()=>t.virtualRef,d=>{d&&(r.value=yi(d))},{immediate:!0}),$e(r,(d,h)=>{c==null||c(),c=void 0,Br(d)&&(u.forEach(p=>{var g;const _=t[p];_&&(d.addEventListener(p.slice(2).toLowerCase(),_),(g=h==null?void 0:h.removeEventListener)==null||g.call(h,p.slice(2).toLowerCase(),_))}),fd(d)&&(c=$e([s,o,a,l],p=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,_)=>{Zi(p[_])?d.removeAttribute(g):d.setAttribute(g,p[_])})},{immediate:!0}))),Br(h)&&fd(h)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(p=>h.removeAttribute(p))},{immediate:!0})}),Pi(()=>{if(c==null||c(),c=void 0,r.value&&Br(r.value)){const d=r.value;u.forEach(h=>{const p=t[h];p&&d.removeEventListener(h.slice(2).toLowerCase(),p)}),r.value=void 0}}),e({triggerRef:r}),(d,h)=>d.virtualTriggering?lt("v-if",!0):(xe(),ft(P(NA),wi({key:0},d.$attrs,{"aria-controls":P(s),"aria-describedby":P(o),"aria-expanded":P(l),"aria-haspopup":P(a)}),{default:gt(()=>[bt(d.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var OA=Ct(UA,[["__file","trigger.vue"]]);const Ya="focus-trap.focus-after-trapped",Za="focus-trap.focus-after-released",FA="focus-trap.focusout-prevented",Zd={cancelable:!0,bubbles:!1},BA={cancelable:!0,bubbles:!1},Jd="focusAfterTrapped",Qd="focusAfterReleased",kA=Symbol("elFocusTrap"),rc=me(),na=me(0),sc=me(0);let xo=0;const Zf=i=>{const e=[],t=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const r=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||r?NodeFilter.FILTER_SKIP:n.tabIndex>=0||n===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e},eh=(i,e)=>{for(const t of i)if(!HA(t,e))return t},HA=(i,e)=>{if(getComputedStyle(i).visibility==="hidden")return!0;for(;i;){if(e&&i===e)return!1;if(getComputedStyle(i).display==="none")return!0;i=i.parentElement}return!1},zA=i=>{const e=Zf(i),t=eh(e,i),n=eh(e.reverse(),i);return[t,n]},VA=i=>i instanceof HTMLInputElement&&"select"in i,fi=(i,e)=>{if(i&&i.focus){const t=document.activeElement;i.focus({preventScroll:!0}),sc.value=window.performance.now(),i!==t&&VA(i)&&e&&i.select()}};function th(i,e){const t=[...i],n=i.indexOf(e);return n!==-1&&t.splice(n,1),t}const GA=()=>{let i=[];return{push:n=>{const r=i[0];r&&n!==r&&r.pause(),i=th(i,n),i.unshift(n)},remove:n=>{var r,s;i=th(i,n),(s=(r=i[0])==null?void 0:r.resume)==null||s.call(r)}}},WA=(i,e=!1)=>{const t=document.activeElement;for(const n of i)if(fi(n,e),document.activeElement!==t)return},nh=GA(),XA=()=>na.value>sc.value,yo=()=>{rc.value="pointer",na.value=window.performance.now()},ih=()=>{rc.value="keyboard",na.value=window.performance.now()},$A=()=>(Xt(()=>{xo===0&&(document.addEventListener("mousedown",yo),document.addEventListener("touchstart",yo),document.addEventListener("keydown",ih)),xo++}),Pi(()=>{xo--,xo<=0&&(document.removeEventListener("mousedown",yo),document.removeEventListener("touchstart",yo),document.removeEventListener("keydown",ih))}),{focusReason:rc,lastUserFocusTimestamp:na,lastAutomatedFocusTimestamp:sc}),Mo=i=>new CustomEvent(FA,{...BA,detail:i}),jA=Ve({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Jd,Qd,"focusin","focusout","focusout-prevented","release-requested"],setup(i,{emit:e}){const t=me();let n,r;const{focusReason:s}=$A();KT(g=>{i.trapped&&!o.paused&&e("release-requested",g)});const o={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},a=g=>{if(!i.loop&&!i.trapped||o.paused)return;const{key:_,altKey:m,ctrlKey:f,metaKey:M,currentTarget:x,shiftKey:S}=g,{loop:C}=i,w=_===yn.tab&&!m&&!f&&!M,A=document.activeElement;if(w&&A){const I=x,[E,y]=zA(I);if(E&&y){if(!S&&A===y){const k=Mo({focusReason:s.value});e("focusout-prevented",k),k.defaultPrevented||(g.preventDefault(),C&&fi(E,!0))}else if(S&&[E,I].includes(A)){const k=Mo({focusReason:s.value});e("focusout-prevented",k),k.defaultPrevented||(g.preventDefault(),C&&fi(y,!0))}}else if(A===I){const k=Mo({focusReason:s.value});e("focusout-prevented",k),k.defaultPrevented||g.preventDefault()}}};Ai(kA,{focusTrapRef:t,onKeydown:a}),$e(()=>i.focusTrapEl,g=>{g&&(t.value=g)},{immediate:!0}),$e([t],([g],[_])=>{g&&(g.addEventListener("keydown",a),g.addEventListener("focusin",u),g.addEventListener("focusout",d)),_&&(_.removeEventListener("keydown",a),_.removeEventListener("focusin",u),_.removeEventListener("focusout",d))});const l=g=>{e(Jd,g)},c=g=>e(Qd,g),u=g=>{const _=P(t);if(!_)return;const m=g.target,f=g.relatedTarget,M=m&&_.contains(m);i.trapped||f&&_.contains(f)||(n=f),M&&e("focusin",g),!o.paused&&i.trapped&&(M?r=m:fi(r,!0))},d=g=>{const _=P(t);if(!(o.paused||!_))if(i.trapped){const m=g.relatedTarget;!Zi(m)&&!_.contains(m)&&setTimeout(()=>{if(!o.paused&&i.trapped){const f=Mo({focusReason:s.value});e("focusout-prevented",f),f.defaultPrevented||fi(r,!0)}},0)}else{const m=g.target;m&&_.contains(m)||e("focusout",g)}};async function h(){await $t();const g=P(t);if(g){nh.push(o);const _=g.contains(document.activeElement)?n:document.activeElement;if(n=_,!g.contains(_)){const f=new Event(Ya,Zd);g.addEventListener(Ya,l),g.dispatchEvent(f),f.defaultPrevented||$t(()=>{let M=i.focusStartEl;Mn(M)||(fi(M),document.activeElement!==M&&(M="first")),M==="first"&&WA(Zf(g),!0),(document.activeElement===_||M==="container")&&fi(g)})}}}function p(){const g=P(t);if(g){g.removeEventListener(Ya,l);const _=new CustomEvent(Za,{...Zd,detail:{focusReason:s.value}});g.addEventListener(Za,c),g.dispatchEvent(_),!_.defaultPrevented&&(s.value=="keyboard"||!XA()||g.contains(document.activeElement))&&fi(n??document.body),g.removeEventListener(Za,c),nh.remove(o)}}return Xt(()=>{i.trapped&&h(),$e(()=>i.trapped,g=>{g?h():p()})}),Pi(()=>{i.trapped&&p(),t.value&&(t.value.removeEventListener("keydown",a),t.value.removeEventListener("focusin",u),t.value.removeEventListener("focusout",d),t.value=void 0)}),{onKeydown:a}}});function qA(i,e,t,n,r,s){return bt(i.$slots,"default",{handleKeydown:i.onKeydown})}var KA=Ct(jA,[["render",qA],["__file","focus-trap.vue"]]);const YA=["fixed","absolute"],ZA=Bt({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:et(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Xl,default:"bottom"},popperOptions:{type:et(Object),default:()=>({})},strategy:{type:String,values:YA,default:"absolute"}}),Jf=Bt({...ZA,id:String,style:{type:et([String,Array,Object])},className:{type:et([String,Array,Object])},effect:{type:et(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:et([String,Array,Object])},popperStyle:{type:et([String,Array,Object])},referenceEl:{type:et(Object)},triggerTargetEl:{type:et(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...ea(["ariaLabel"])}),JA={mouseenter:i=>i instanceof MouseEvent,mouseleave:i=>i instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},QA=(i,e=[])=>{const{placement:t,strategy:n,popperOptions:r}=i,s={placement:t,strategy:n,...r,modifiers:[...tw(i),...e]};return nw(s,r==null?void 0:r.modifiers),s},ew=i=>{if(qt)return yi(i)};function tw(i){const{offset:e,gpuAcceleration:t,fallbackPlacements:n}=i;return[{name:"offset",options:{offset:[0,e??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:t}}]}function nw(i,e){e&&(i.modifiers=[...i.modifiers,...e??[]])}const iw=0,rw=i=>{const{popperInstanceRef:e,contentRef:t,triggerRef:n,role:r}=_t(ic,void 0),s=me(),o=me(),a=se(()=>({name:"eventListeners",enabled:!!i.visible})),l=se(()=>{var f;const M=P(s),x=(f=P(o))!=null?f:iw;return{name:"arrow",enabled:!rE(M),options:{element:M,padding:x}}}),c=se(()=>({onFirstUpdate:()=>{g()},...QA(i,[P(l),P(a)])})),u=se(()=>ew(i.referenceEl)||P(n)),{attributes:d,state:h,styles:p,update:g,forceUpdate:_,instanceRef:m}=$T(u,t,c);return $e(m,f=>e.value=f),Xt(()=>{$e(()=>{var f;return(f=P(u))==null?void 0:f.getBoundingClientRect()},()=>{g()})}),{attributes:d,arrowRef:s,contentRef:t,instanceRef:m,state:h,styles:p,role:r,forceUpdate:_,update:g}},sw=(i,{attributes:e,styles:t,role:n})=>{const{nextZIndex:r}=rA(),s=Ft("popper"),o=se(()=>P(e).popper),a=me(rr(i.zIndex)?i.zIndex:r()),l=se(()=>[s.b(),s.is("pure",i.pure),s.is(i.effect),i.popperClass]),c=se(()=>[{zIndex:P(a)},P(t).popper,i.popperStyle||{}]),u=se(()=>n.value==="dialog"?"false":void 0),d=se(()=>P(t).arrow||{});return{ariaModal:u,arrowStyle:d,contentAttrs:o,contentClass:l,contentStyle:c,contentZIndex:a,updateZIndex:()=>{a.value=rr(i.zIndex)?i.zIndex:r()}}},ow=(i,e)=>{const t=me(!1),n=me();return{focusStartRef:n,trapped:t,onFocusAfterReleased:c=>{var u;((u=c.detail)==null?void 0:u.focusReason)!=="pointer"&&(n.value="first",e("blur"))},onFocusAfterTrapped:()=>{e("focus")},onFocusInTrap:c=>{i.visible&&!t.value&&(c.target&&(n.value=c.target),t.value=!0)},onFocusoutPrevented:c=>{i.trapping||(c.detail.focusReason==="pointer"&&c.preventDefault(),t.value=!1)},onReleaseRequested:()=>{t.value=!1,e("close")}}},aw=Ve({name:"ElPopperContent"}),lw=Ve({...aw,props:Jf,emits:JA,setup(i,{expose:e,emit:t}){const n=i,{focusStartRef:r,trapped:s,onFocusAfterReleased:o,onFocusAfterTrapped:a,onFocusInTrap:l,onFocusoutPrevented:c,onReleaseRequested:u}=ow(n,t),{attributes:d,arrowRef:h,contentRef:p,styles:g,instanceRef:_,role:m,update:f}=rw(n),{ariaModal:M,arrowStyle:x,contentAttrs:S,contentClass:C,contentStyle:w,updateZIndex:A}=sw(n,{styles:g,attributes:d,role:m}),I=_t(zo,void 0),E=me();Ai($f,{arrowStyle:x,arrowRef:h,arrowOffset:E}),I&&Ai(zo,{...I,addInputId:Rs,removeInputId:Rs});let y;const U=(L=!0)=>{f(),L&&A()},k=()=>{U(!1),n.visible&&n.focusOnShow?s.value=!0:n.visible===!1&&(s.value=!1)};return Xt(()=>{$e(()=>n.triggerTargetEl,(L,$)=>{y==null||y(),y=void 0;const q=P(L||p.value),B=P($||p.value);Br(q)&&(y=$e([m,()=>n.ariaLabel,M,()=>n.id],Z=>{["role","aria-label","aria-modal","id"].forEach((H,Q)=>{Zi(Z[Q])?q.removeAttribute(H):q.setAttribute(H,Z[Q])})},{immediate:!0})),B!==q&&Br(B)&&["role","aria-label","aria-modal","id"].forEach(Z=>{B.removeAttribute(Z)})},{immediate:!0}),$e(()=>n.visible,k,{immediate:!0})}),Pi(()=>{y==null||y(),y=void 0}),e({popperContentRef:p,popperInstanceRef:_,updatePopper:U,contentStyle:w}),(L,$)=>(xe(),Je("div",wi({ref_key:"contentRef",ref:p},P(S),{style:P(w),class:P(C),tabindex:"-1",onMouseenter:q=>L.$emit("mouseenter",q),onMouseleave:q=>L.$emit("mouseleave",q)}),[Ot(P(KA),{trapped:P(s),"trap-on-focus-in":!0,"focus-trap-el":P(p),"focus-start-el":P(r),onFocusAfterTrapped:P(a),onFocusAfterReleased:P(o),onFocusin:P(l),onFocusoutPrevented:P(c),onReleaseRequested:P(u)},{default:gt(()=>[bt(L.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}});var cw=Ct(lw,[["__file","content.vue"]]);const uw=ar(RA),oc=Symbol("elTooltip"),ac=Bt({...JT,...Jf,appendTo:{type:et([String,Object])},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:et(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...ea(["ariaLabel"])}),Qf=Bt({...Yf,disabled:Boolean,trigger:{type:et([String,Array]),default:"hover"},triggerKeys:{type:et(Array),default:()=>[yn.enter,yn.space]}}),{useModelToggleProps:dw,useModelToggleEmits:hw,useModelToggle:fw}=wf("visible"),pw=Bt({...jf,...dw,...ac,...Qf,...qf,showArrow:{type:Boolean,default:!0}}),mw=[...hw,"before-show","before-hide","show","hide","open","close"],gw=(i,e)=>yh(i)?i.includes(e):i===e,Cr=(i,e,t)=>n=>{gw(P(i),e)&&t(n)},_w=Ve({name:"ElTooltipTrigger"}),vw=Ve({..._w,props:Qf,setup(i,{expose:e}){const t=i,n=Ft("tooltip"),{controlled:r,id:s,open:o,onOpen:a,onClose:l,onToggle:c}=_t(oc,void 0),u=me(null),d=()=>{if(P(r)||t.disabled)return!0},h=Yn(t,"trigger"),p=qn(d,Cr(h,"hover",a)),g=qn(d,Cr(h,"hover",l)),_=qn(d,Cr(h,"click",S=>{S.button===0&&c(S)})),m=qn(d,Cr(h,"focus",a)),f=qn(d,Cr(h,"focus",l)),M=qn(d,Cr(h,"contextmenu",S=>{S.preventDefault(),c(S)})),x=qn(d,S=>{const{code:C}=S;t.triggerKeys.includes(C)&&(S.preventDefault(),c(S))});return e({triggerRef:u}),(S,C)=>(xe(),ft(P(OA),{id:P(s),"virtual-ref":S.virtualRef,open:P(o),"virtual-triggering":S.virtualTriggering,class:De(P(n).e("trigger")),onBlur:P(f),onClick:P(_),onContextmenu:P(M),onFocus:P(m),onMouseenter:P(p),onMouseleave:P(g),onKeydown:P(x)},{default:gt(()=>[bt(S.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var xw=Ct(vw,[["__file","trigger.vue"]]);const yw=Bt({to:{type:et([String,Object]),required:!0},disabled:Boolean}),Mw=Ve({__name:"teleport",props:yw,setup(i){return(e,t)=>e.disabled?bt(e.$slots,"default",{key:0}):(xe(),ft(gp,{key:1,to:e.to},[bt(e.$slots,"default")],8,["to"]))}});var bw=Ct(Mw,[["__file","teleport.vue"]]);const Sw=ar(bw),Ew=Ve({name:"ElTooltipContent",inheritAttrs:!1}),Tw=Ve({...Ew,props:ac,setup(i,{expose:e}){const t=i,{selector:n}=Vf(),r=Ft("tooltip"),s=me(null);let o;const{controlled:a,id:l,open:c,trigger:u,onClose:d,onOpen:h,onShow:p,onHide:g,onBeforeShow:_,onBeforeHide:m}=_t(oc,void 0),f=se(()=>t.transition||`${r.namespace.value}-fade-in-linear`),M=se(()=>t.persistent);Pi(()=>{o==null||o()});const x=se(()=>P(M)?!0:P(c)),S=se(()=>t.disabled?!1:P(c)),C=se(()=>t.appendTo||n.value),w=se(()=>{var B;return(B=t.style)!=null?B:{}}),A=me(!0),I=()=>{g(),A.value=!0},E=()=>{if(P(a))return!0},y=qn(E,()=>{t.enterable&&P(u)==="hover"&&h()}),U=qn(E,()=>{P(u)==="hover"&&d()}),k=()=>{var B,Z;(Z=(B=s.value)==null?void 0:B.updatePopper)==null||Z.call(B),_==null||_()},L=()=>{m==null||m()},$=()=>{p(),o=NM(se(()=>{var B;return(B=s.value)==null?void 0:B.popperContentRef}),()=>{if(P(a))return;P(u)!=="hover"&&d()})},q=()=>{t.virtualTriggering||d()};return $e(()=>P(c),B=>{B?A.value=!1:o==null||o()},{flush:"post"}),$e(()=>t.content,()=>{var B,Z;(Z=(B=s.value)==null?void 0:B.updatePopper)==null||Z.call(B)}),e({contentRef:s}),(B,Z)=>(xe(),ft(P(Sw),{disabled:!B.teleported,to:P(C)},{default:gt(()=>[Ot(_p,{name:P(f),onAfterLeave:I,onBeforeEnter:k,onAfterEnter:$,onBeforeLeave:L},{default:gt(()=>[P(x)?ys((xe(),ft(P(cw),wi({key:0,id:P(l),ref_key:"contentRef",ref:s},B.$attrs,{"aria-label":B.ariaLabel,"aria-hidden":A.value,"boundaries-padding":B.boundariesPadding,"fallback-placements":B.fallbackPlacements,"gpu-acceleration":B.gpuAcceleration,offset:B.offset,placement:B.placement,"popper-options":B.popperOptions,strategy:B.strategy,effect:B.effect,enterable:B.enterable,pure:B.pure,"popper-class":B.popperClass,"popper-style":[B.popperStyle,P(w)],"reference-el":B.referenceEl,"trigger-target-el":B.triggerTargetEl,visible:P(S),"z-index":B.zIndex,onMouseenter:P(y),onMouseleave:P(U),onBlur:q,onClose:P(d)}),{default:gt(()=>[bt(B.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[il,P(S)]]):lt("v-if",!0)]),_:3},8,["name"])]),_:3},8,["disabled","to"]))}});var Aw=Ct(Tw,[["__file","content.vue"]]);const ww=Ve({name:"ElTooltip"}),Rw=Ve({...ww,props:pw,emits:mw,setup(i,{expose:e,emit:t}){const n=i;ZT();const r=zf(),s=me(),o=me(),a=()=>{var f;const M=P(s);M&&((f=M.popperInstanceRef)==null||f.update())},l=me(!1),c=me(),{show:u,hide:d,hasUpdateHandler:h}=fw({indicator:l,toggleReason:c}),{onOpen:p,onClose:g}=QT({showAfter:Yn(n,"showAfter"),hideAfter:Yn(n,"hideAfter"),autoClose:Yn(n,"autoClose"),open:u,close:d}),_=se(()=>bf(n.visible)&&!h.value);Ai(oc,{controlled:_,id:r,open:mh(l),trigger:Yn(n,"trigger"),onOpen:f=>{p(f)},onClose:f=>{g(f)},onToggle:f=>{P(l)?g(f):p(f)},onShow:()=>{t("show",c.value)},onHide:()=>{t("hide",c.value)},onBeforeShow:()=>{t("before-show",c.value)},onBeforeHide:()=>{t("before-hide",c.value)},updatePopper:a}),$e(()=>n.disabled,f=>{f&&l.value&&(l.value=!1)});const m=f=>{var M,x;const S=(x=(M=o.value)==null?void 0:M.contentRef)==null?void 0:x.popperContentRef,C=(f==null?void 0:f.relatedTarget)||document.activeElement;return S&&S.contains(C)};return vp(()=>l.value&&d()),e({popperRef:s,contentRef:o,isFocusInsideContent:m,updatePopper:a,onOpen:p,onClose:g,hide:d}),(f,M)=>(xe(),ft(P(uw),{ref_key:"popperRef",ref:s,role:f.role},{default:gt(()=>[Ot(xw,{disabled:f.disabled,trigger:f.trigger,"trigger-keys":f.triggerKeys,"virtual-ref":f.virtualRef,"virtual-triggering":f.virtualTriggering},{default:gt(()=>[f.$slots.default?bt(f.$slots,"default",{key:0}):lt("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ot(Aw,{ref_key:"contentRef",ref:o,"aria-label":f.ariaLabel,"boundaries-padding":f.boundariesPadding,content:f.content,disabled:f.disabled,effect:f.effect,enterable:f.enterable,"fallback-placements":f.fallbackPlacements,"hide-after":f.hideAfter,"gpu-acceleration":f.gpuAcceleration,offset:f.offset,persistent:f.persistent,"popper-class":f.popperClass,"popper-style":f.popperStyle,placement:f.placement,"popper-options":f.popperOptions,pure:f.pure,"raw-content":f.rawContent,"reference-el":f.referenceEl,"trigger-target-el":f.triggerTargetEl,"show-after":f.showAfter,strategy:f.strategy,teleported:f.teleported,transition:f.transition,"virtual-triggering":f.virtualTriggering,"z-index":f.zIndex,"append-to":f.appendTo},{default:gt(()=>[bt(f.$slots,"content",{},()=>[f.rawContent?(xe(),Je("span",{key:0,innerHTML:f.content},null,8,["innerHTML"])):(xe(),Je("span",{key:1},Zn(f.content),1))]),f.showArrow?(xe(),ft(P(LA),{key:0,"arrow-offset":f.arrowOffset},null,8,["arrow-offset"])):lt("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Cw=Ct(Rw,[["__file","tooltip.vue"]]);const Pw=ar(Cw),ep=Symbol("buttonGroupContextKey"),Lw=(i,e)=>{DE({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},se(()=>i.type==="text"));const t=_t(ep,void 0),n=dA("button"),{form:r}=nc(),s=tc(se(()=>t==null?void 0:t.size)),o=ta(),a=me(),l=vh(),c=se(()=>i.type||(t==null?void 0:t.type)||""),u=se(()=>{var g,_,m;return(m=(_=i.autoInsertSpace)!=null?_:(g=n.value)==null?void 0:g.autoInsertSpace)!=null?m:!1}),d=se(()=>i.tag==="button"?{ariaDisabled:o.value||i.loading,disabled:o.value||i.loading,autofocus:i.autofocus,type:i.nativeType}:{}),h=se(()=>{var g;const _=(g=l.default)==null?void 0:g.call(l);if(u.value&&(_==null?void 0:_.length)===1){const m=_[0];if((m==null?void 0:m.type)===xh){const f=m.children;return/^\p{Unified_Ideograph}{2}$/u.test(f.trim())}}return!1});return{_disabled:o,_size:s,_type:c,_ref:a,_props:d,shouldAddSpace:h,handleClick:g=>{if(o.value||i.loading){g.stopPropagation();return}i.nativeType==="reset"&&(r==null||r.resetFields()),e("click",g)}}},Iw=["default","primary","success","warning","info","danger","text",""],Nw=["button","submit","reset"],vl=Bt({size:Ql,disabled:Boolean,type:{type:String,values:Iw,default:""},icon:{type:ko},nativeType:{type:String,values:Nw,default:"button"},loading:Boolean,loadingIcon:{type:ko,default:()=>Ef},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:et([String,Object]),default:"button"}}),Dw={click:i=>i instanceof MouseEvent};function Lt(i,e){Uw(i)&&(i="100%");var t=Ow(i);return i=e===360?i:Math.min(e,Math.max(0,parseFloat(i))),t&&(i=parseInt(String(i*e),10)/100),Math.abs(i-e)<1e-6?1:(e===360?i=(i<0?i%e+e:i%e)/parseFloat(String(e)):i=i%e/parseFloat(String(e)),i)}function bo(i){return Math.min(1,Math.max(0,i))}function Uw(i){return typeof i=="string"&&i.indexOf(".")!==-1&&parseFloat(i)===1}function Ow(i){return typeof i=="string"&&i.indexOf("%")!==-1}function tp(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function So(i){return i<=1?"".concat(Number(i)*100,"%"):i}function Ki(i){return i.length===1?"0"+i:String(i)}function Fw(i,e,t){return{r:Lt(i,255)*255,g:Lt(e,255)*255,b:Lt(t,255)*255}}function rh(i,e,t){i=Lt(i,255),e=Lt(e,255),t=Lt(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),s=0,o=0,a=(n+r)/2;if(n===r)o=0,s=0;else{var l=n-r;switch(o=a>.5?l/(2-n-r):l/(n+r),n){case i:s=(e-t)/l+(e<t?6:0);break;case e:s=(t-i)/l+2;break;case t:s=(i-e)/l+4;break}s/=6}return{h:s,s:o,l:a}}function Ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*(6*t):t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function Bw(i,e,t){var n,r,s;if(i=Lt(i,360),e=Lt(e,100),t=Lt(t,100),e===0)r=t,s=t,n=t;else{var o=t<.5?t*(1+e):t+e-t*e,a=2*t-o;n=Ja(a,o,i+1/3),r=Ja(a,o,i),s=Ja(a,o,i-1/3)}return{r:n*255,g:r*255,b:s*255}}function sh(i,e,t){i=Lt(i,255),e=Lt(e,255),t=Lt(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),s=0,o=n,a=n-r,l=n===0?0:a/n;if(n===r)s=0;else{switch(n){case i:s=(e-t)/a+(e<t?6:0);break;case e:s=(t-i)/a+2;break;case t:s=(i-e)/a+4;break}s/=6}return{h:s,s:l,v:o}}function kw(i,e,t){i=Lt(i,360)*6,e=Lt(e,100),t=Lt(t,100);var n=Math.floor(i),r=i-n,s=t*(1-e),o=t*(1-r*e),a=t*(1-(1-r)*e),l=n%6,c=[t,o,s,s,a,t][l],u=[a,t,t,o,s,s][l],d=[s,s,a,t,t,o][l];return{r:c*255,g:u*255,b:d*255}}function oh(i,e,t,n){var r=[Ki(Math.round(i).toString(16)),Ki(Math.round(e).toString(16)),Ki(Math.round(t).toString(16))];return n&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Hw(i,e,t,n,r){var s=[Ki(Math.round(i).toString(16)),Ki(Math.round(e).toString(16)),Ki(Math.round(t).toString(16)),Ki(zw(n))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function zw(i){return Math.round(parseFloat(i)*255).toString(16)}function ah(i){return nn(i)/255}function nn(i){return parseInt(i,16)}function Vw(i){return{r:i>>16,g:(i&65280)>>8,b:i&255}}var xl={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gw(i){var e={r:0,g:0,b:0},t=1,n=null,r=null,s=null,o=!1,a=!1;return typeof i=="string"&&(i=$w(i)),typeof i=="object"&&($n(i.r)&&$n(i.g)&&$n(i.b)?(e=Fw(i.r,i.g,i.b),o=!0,a=String(i.r).substr(-1)==="%"?"prgb":"rgb"):$n(i.h)&&$n(i.s)&&$n(i.v)?(n=So(i.s),r=So(i.v),e=kw(i.h,n,r),o=!0,a="hsv"):$n(i.h)&&$n(i.s)&&$n(i.l)&&(n=So(i.s),s=So(i.l),e=Bw(i.h,n,s),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(i,"a")&&(t=i.a)),t=tp(t),{ok:o,format:i.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var Ww="[-\\+]?\\d+%?",Xw="[-\\+]?\\d*\\.\\d+%?",Mi="(?:".concat(Xw,")|(?:").concat(Ww,")"),Qa="[\\s|\\(]+(".concat(Mi,")[,|\\s]+(").concat(Mi,")[,|\\s]+(").concat(Mi,")\\s*\\)?"),el="[\\s|\\(]+(".concat(Mi,")[,|\\s]+(").concat(Mi,")[,|\\s]+(").concat(Mi,")[,|\\s]+(").concat(Mi,")\\s*\\)?"),_n={CSS_UNIT:new RegExp(Mi),rgb:new RegExp("rgb"+Qa),rgba:new RegExp("rgba"+el),hsl:new RegExp("hsl"+Qa),hsla:new RegExp("hsla"+el),hsv:new RegExp("hsv"+Qa),hsva:new RegExp("hsva"+el),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function $w(i){if(i=i.trim().toLowerCase(),i.length===0)return!1;var e=!1;if(xl[i])i=xl[i],e=!0;else if(i==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=_n.rgb.exec(i);return t?{r:t[1],g:t[2],b:t[3]}:(t=_n.rgba.exec(i),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=_n.hsl.exec(i),t?{h:t[1],s:t[2],l:t[3]}:(t=_n.hsla.exec(i),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=_n.hsv.exec(i),t?{h:t[1],s:t[2],v:t[3]}:(t=_n.hsva.exec(i),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=_n.hex8.exec(i),t?{r:nn(t[1]),g:nn(t[2]),b:nn(t[3]),a:ah(t[4]),format:e?"name":"hex8"}:(t=_n.hex6.exec(i),t?{r:nn(t[1]),g:nn(t[2]),b:nn(t[3]),format:e?"name":"hex"}:(t=_n.hex4.exec(i),t?{r:nn(t[1]+t[1]),g:nn(t[2]+t[2]),b:nn(t[3]+t[3]),a:ah(t[4]+t[4]),format:e?"name":"hex8"}:(t=_n.hex3.exec(i),t?{r:nn(t[1]+t[1]),g:nn(t[2]+t[2]),b:nn(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function $n(i){return!!_n.CSS_UNIT.exec(String(i))}var jw=function(){function i(e,t){e===void 0&&(e=""),t===void 0&&(t={});var n;if(e instanceof i)return e;typeof e=="number"&&(e=Vw(e)),this.originalInput=e;var r=Gw(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=t.format)!==null&&n!==void 0?n:r.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return i.prototype.isDark=function(){return this.getBrightness()<128},i.prototype.isLight=function(){return!this.isDark()},i.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},i.prototype.getLuminance=function(){var e=this.toRgb(),t,n,r,s=e.r/255,o=e.g/255,a=e.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*t+.7152*n+.0722*r},i.prototype.getAlpha=function(){return this.a},i.prototype.setAlpha=function(e){return this.a=tp(e),this.roundA=Math.round(100*this.a)/100,this},i.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},i.prototype.toHsv=function(){var e=sh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},i.prototype.toHsvString=function(){var e=sh(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(n,"%, ").concat(r,"%)"):"hsva(".concat(t,", ").concat(n,"%, ").concat(r,"%, ").concat(this.roundA,")")},i.prototype.toHsl=function(){var e=rh(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},i.prototype.toHslString=function(){var e=rh(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(n,"%, ").concat(r,"%)"):"hsla(".concat(t,", ").concat(n,"%, ").concat(r,"%, ").concat(this.roundA,")")},i.prototype.toHex=function(e){return e===void 0&&(e=!1),oh(this.r,this.g,this.b,e)},i.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},i.prototype.toHex8=function(e){return e===void 0&&(e=!1),Hw(this.r,this.g,this.b,this.a,e)},i.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},i.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},i.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},i.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(n,")"):"rgba(".concat(e,", ").concat(t,", ").concat(n,", ").concat(this.roundA,")")},i.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(Lt(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},i.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(Lt(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},i.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+oh(this.r,this.g,this.b,!1),t=0,n=Object.entries(xl);t<n.length;t++){var r=n[t],s=r[0],o=r[1];if(e===o)return s}return!1},i.prototype.toString=function(e){var t=!!e;e=e??this.format;var n=!1,r=this.a<1&&this.a>=0,s=!t&&r&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},i.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},i.prototype.clone=function(){return new i(this.toString())},i.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=bo(t.l),new i(t)},i.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new i(t)},i.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=bo(t.l),new i(t)},i.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},i.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},i.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=bo(t.s),new i(t)},i.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=bo(t.s),new i(t)},i.prototype.greyscale=function(){return this.desaturate(100)},i.prototype.spin=function(e){var t=this.toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,new i(t)},i.prototype.mix=function(e,t){t===void 0&&(t=50);var n=this.toRgb(),r=new i(e).toRgb(),s=t/100,o={r:(r.r-n.r)*s+n.r,g:(r.g-n.g)*s+n.g,b:(r.b-n.b)*s+n.b,a:(r.a-n.a)*s+n.a};return new i(o)},i.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var n=this.toHsl(),r=360/t,s=[this];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,s.push(new i(n));return s},i.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new i(e)},i.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),n=t.h,r=t.s,s=t.v,o=[],a=1/e;e--;)o.push(new i({h:n,s:r,v:s})),s=(s+a)%1;return o},i.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new i({h:(t+72)%360,s:e.s,l:e.l}),new i({h:(t+216)%360,s:e.s,l:e.l})]},i.prototype.onBackground=function(e){var t=this.toRgb(),n=new i(e).toRgb(),r=t.a+n.a*(1-t.a);return new i({r:(t.r*t.a+n.r*n.a*(1-t.a))/r,g:(t.g*t.a+n.g*n.a*(1-t.a))/r,b:(t.b*t.a+n.b*n.a*(1-t.a))/r,a:r})},i.prototype.triad=function(){return this.polyad(3)},i.prototype.tetrad=function(){return this.polyad(4)},i.prototype.polyad=function(e){for(var t=this.toHsl(),n=t.h,r=[this],s=360/e,o=1;o<e;o++)r.push(new i({h:(n+o*s)%360,s:t.s,l:t.l}));return r},i.prototype.equals=function(e){return this.toRgbString()===new i(e).toRgbString()},i}();function hi(i,e=20){return i.mix("#141414",e).toString()}function qw(i){const e=ta(),t=Ft("button");return se(()=>{let n={},r=i.color;if(r){const s=r.match(/var\((.*?)\)/);s&&(r=window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));const o=new jw(r),a=i.dark?o.tint(20).toString():hi(o,20);if(i.plain)n=t.cssVarBlock({"bg-color":i.dark?hi(o,90):o.tint(90).toString(),"text-color":r,"border-color":i.dark?hi(o,50):o.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":a,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":a}),e.value&&(n[t.cssVarBlockName("disabled-bg-color")]=i.dark?hi(o,90):o.tint(90).toString(),n[t.cssVarBlockName("disabled-text-color")]=i.dark?hi(o,50):o.tint(50).toString(),n[t.cssVarBlockName("disabled-border-color")]=i.dark?hi(o,80):o.tint(80).toString());else{const l=i.dark?hi(o,30):o.tint(30).toString(),c=o.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(n=t.cssVarBlock({"bg-color":r,"text-color":c,"border-color":r,"hover-bg-color":l,"hover-text-color":c,"hover-border-color":l,"active-bg-color":a,"active-border-color":a}),e.value){const u=i.dark?hi(o,50):o.tint(50).toString();n[t.cssVarBlockName("disabled-bg-color")]=u,n[t.cssVarBlockName("disabled-text-color")]=i.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,n[t.cssVarBlockName("disabled-border-color")]=u}}}return n})}const Kw=Ve({name:"ElButton"}),Yw=Ve({...Kw,props:vl,emits:Dw,setup(i,{expose:e,emit:t}){const n=i,r=qw(n),s=Ft("button"),{_ref:o,_size:a,_type:l,_disabled:c,_props:u,shouldAddSpace:d,handleClick:h}=Lw(n,t),p=se(()=>[s.b(),s.m(l.value),s.m(a.value),s.is("disabled",c.value),s.is("loading",n.loading),s.is("plain",n.plain),s.is("round",n.round),s.is("circle",n.circle),s.is("text",n.text),s.is("link",n.link),s.is("has-bg",n.bg)]);return e({ref:o,size:a,type:l,disabled:c,shouldAddSpace:d}),(g,_)=>(xe(),ft($i(g.tag),wi({ref_key:"_ref",ref:o},P(u),{class:P(p),style:P(r),onClick:P(h)}),{default:gt(()=>[g.loading?(xe(),Je(Yi,{key:0},[g.$slots.loading?bt(g.$slots,"loading",{key:0}):(xe(),ft(P(Kn),{key:1,class:De(P(s).is("loading"))},{default:gt(()=>[(xe(),ft($i(g.loadingIcon)))]),_:1},8,["class"]))],64)):g.icon||g.$slots.icon?(xe(),ft(P(Kn),{key:1},{default:gt(()=>[g.icon?(xe(),ft($i(g.icon),{key:0})):bt(g.$slots,"icon",{key:1})]),_:3})):lt("v-if",!0),g.$slots.default?(xe(),Je("span",{key:2,class:De({[P(s).em("text","expand")]:P(d)})},[bt(g.$slots,"default")],2)):lt("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var Zw=Ct(Yw,[["__file","button.vue"]]);const Jw={size:vl.size,type:vl.type},Qw=Ve({name:"ElButtonGroup"}),e1=Ve({...Qw,props:Jw,setup(i){const e=i;Ai(ep,Mh({size:Yn(e,"size"),type:Yn(e,"type")}));const t=Ft("button");return(n,r)=>(xe(),Je("div",{class:De(P(t).b("group"))},[bt(n.$slots,"default")],2))}});var np=Ct(e1,[["__file","button-group.vue"]]);const lh=ar(Zw,{ButtonGroup:np});AE(np);const pi=new Map;if(qt){let i;document.addEventListener("mousedown",e=>i=e),document.addEventListener("mouseup",e=>{if(i){for(const t of pi.values())for(const{documentHandler:n}of t)n(e,i);i=void 0}})}function ch(i,e){let t=[];return yh(e.arg)?t=e.arg:Br(e.arg)&&t.push(e.arg),function(n,r){const s=e.instance.popperRef,o=n.target,a=r==null?void 0:r.target,l=!e||!e.instance,c=!o||!a,u=i.contains(o)||i.contains(a),d=i===o,h=t.length&&t.some(g=>g==null?void 0:g.contains(o))||t.length&&t.includes(a),p=s&&(s.contains(o)||s.contains(a));l||c||u||d||h||p||e.value(n,r)}}const t1={beforeMount(i,e){pi.has(i)||pi.set(i,[]),pi.get(i).push({documentHandler:ch(i,e),bindingFn:e.value})},updated(i,e){pi.has(i)||pi.set(i,[]);const t=pi.get(i),n=t.findIndex(s=>s.bindingFn===e.oldValue),r={documentHandler:ch(i,e),bindingFn:e.value};n>=0?t.splice(n,1,r):t.push(r)},unmounted(i){pi.delete(i)}},n1=Bt({color:{type:et(Object),required:!0},vertical:{type:Boolean,default:!1}});let tl=!1;function Us(i,e){if(!qt)return;const t=function(s){var o;(o=e.drag)==null||o.call(e,s)},n=function(s){var o;document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n),document.onselectstart=null,document.ondragstart=null,tl=!1,(o=e.end)==null||o.call(e,s)},r=function(s){var o;tl||(s.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n),document.addEventListener("touchmove",t),document.addEventListener("touchend",n),tl=!0,(o=e.start)==null||o.call(e,s))};i.addEventListener("mousedown",r),i.addEventListener("touchstart",r,{passive:!1})}const i1=i=>{const e=Zt(),{t}=Af(),n=bi(),r=bi(),s=se(()=>i.color.get("alpha")),o=se(()=>t("el.colorpicker.alphaLabel"));function a(d){var h;d.target!==n.value&&l(d),(h=n.value)==null||h.focus()}function l(d){if(!r.value||!n.value)return;const p=e.vnode.el.getBoundingClientRect(),{clientX:g,clientY:_}=Fl(d);if(i.vertical){let m=_-p.top;m=Math.max(n.value.offsetHeight/2,m),m=Math.min(m,p.height-n.value.offsetHeight/2),i.color.set("alpha",Math.round((m-n.value.offsetHeight/2)/(p.height-n.value.offsetHeight)*100))}else{let m=g-p.left;m=Math.max(n.value.offsetWidth/2,m),m=Math.min(m,p.width-n.value.offsetWidth/2),i.color.set("alpha",Math.round((m-n.value.offsetWidth/2)/(p.width-n.value.offsetWidth)*100))}}function c(d){const{code:h,shiftKey:p}=d,g=p?10:1;switch(h){case yn.left:case yn.down:d.preventDefault(),d.stopPropagation(),u(-g);break;case yn.right:case yn.up:d.preventDefault(),d.stopPropagation(),u(g);break}}function u(d){let h=s.value+d;h=h<0?0:h>100?100:h,i.color.set("alpha",h)}return{thumb:n,bar:r,alpha:s,alphaLabel:o,handleDrag:l,handleClick:a,handleKeydown:c}},r1=(i,{bar:e,thumb:t,handleDrag:n})=>{const r=Zt(),s=Ft("color-alpha-slider"),o=me(0),a=me(0),l=me();function c(){if(!t.value||i.vertical)return 0;const M=r.vnode.el,x=i.color.get("alpha");return M?Math.round(x*(M.offsetWidth-t.value.offsetWidth/2)/100):0}function u(){if(!t.value)return 0;const M=r.vnode.el;if(!i.vertical)return 0;const x=i.color.get("alpha");return M?Math.round(x*(M.offsetHeight-t.value.offsetHeight/2)/100):0}function d(){if(i.color&&i.color.value){const{r:M,g:x,b:S}=i.color.toRgb();return`linear-gradient(to right, rgba(${M}, ${x}, ${S}, 0) 0%, rgba(${M}, ${x}, ${S}, 1) 100%)`}return""}function h(){o.value=c(),a.value=u(),l.value=d()}Xt(()=>{if(!e.value||!t.value)return;const M={drag:x=>{n(x)},end:x=>{n(x)}};Us(e.value,M),Us(t.value,M),h()}),$e(()=>i.color.get("alpha"),()=>h()),$e(()=>i.color.value,()=>h());const p=se(()=>[s.b(),s.is("vertical",i.vertical)]),g=se(()=>s.e("bar")),_=se(()=>s.e("thumb")),m=se(()=>({background:l.value})),f=se(()=>({left:gl(o.value),top:gl(a.value)}));return{rootKls:p,barKls:g,barStyle:m,thumbKls:_,thumbStyle:f,update:h}},s1="ElColorAlphaSlider",o1=Ve({name:s1}),a1=Ve({...o1,props:n1,setup(i,{expose:e}){const t=i,{alpha:n,alphaLabel:r,bar:s,thumb:o,handleDrag:a,handleClick:l,handleKeydown:c}=i1(t),{rootKls:u,barKls:d,barStyle:h,thumbKls:p,thumbStyle:g,update:_}=r1(t,{bar:s,thumb:o,handleDrag:a});return e({update:_,bar:s,thumb:o}),(m,f)=>(xe(),Je("div",{class:De(P(u))},[We("div",{ref_key:"bar",ref:s,class:De(P(d)),style:In(P(h)),onClick:P(l)},null,14,["onClick"]),We("div",{ref_key:"thumb",ref:o,class:De(P(p)),style:In(P(g)),"aria-label":P(r),"aria-valuenow":P(n),"aria-orientation":m.vertical?"vertical":"horizontal","aria-valuemin":"0","aria-valuemax":"100",role:"slider",tabindex:"0",onKeydown:P(c)},null,46,["aria-label","aria-valuenow","aria-orientation","onKeydown"])],2))}});var l1=Ct(a1,[["__file","alpha-slider.vue"]]);const c1=Ve({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(i){const e=Ft("color-hue-slider"),t=Zt(),n=me(),r=me(),s=me(0),o=me(0),a=se(()=>i.color.get("hue"));$e(()=>a.value,()=>{h()});function l(p){p.target!==n.value&&c(p)}function c(p){if(!r.value||!n.value)return;const _=t.vnode.el.getBoundingClientRect(),{clientX:m,clientY:f}=Fl(p);let M;if(i.vertical){let x=f-_.top;x=Math.min(x,_.height-n.value.offsetHeight/2),x=Math.max(n.value.offsetHeight/2,x),M=Math.round((x-n.value.offsetHeight/2)/(_.height-n.value.offsetHeight)*360)}else{let x=m-_.left;x=Math.min(x,_.width-n.value.offsetWidth/2),x=Math.max(n.value.offsetWidth/2,x),M=Math.round((x-n.value.offsetWidth/2)/(_.width-n.value.offsetWidth)*360)}i.color.set("hue",M)}function u(){if(!n.value)return 0;const p=t.vnode.el;if(i.vertical)return 0;const g=i.color.get("hue");return p?Math.round(g*(p.offsetWidth-n.value.offsetWidth/2)/360):0}function d(){if(!n.value)return 0;const p=t.vnode.el;if(!i.vertical)return 0;const g=i.color.get("hue");return p?Math.round(g*(p.offsetHeight-n.value.offsetHeight/2)/360):0}function h(){s.value=u(),o.value=d()}return Xt(()=>{if(!r.value||!n.value)return;const p={drag:g=>{c(g)},end:g=>{c(g)}};Us(r.value,p),Us(n.value,p),h()}),{bar:r,thumb:n,thumbLeft:s,thumbTop:o,hueValue:a,handleClick:l,update:h,ns:e}}});function u1(i,e,t,n,r,s){return xe(),Je("div",{class:De([i.ns.b(),i.ns.is("vertical",i.vertical)])},[We("div",{ref:"bar",class:De(i.ns.e("bar")),onClick:i.handleClick},null,10,["onClick"]),We("div",{ref:"thumb",class:De(i.ns.e("thumb")),style:In({left:i.thumbLeft+"px",top:i.thumbTop+"px"})},null,6)],2)}var d1=Ct(c1,[["render",u1],["__file","hue-slider.vue"]]);const h1=Bt({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:Ql,popperClass:{type:String,default:""},tabindex:{type:[String,Number],default:0},teleported:ac.teleported,predefine:{type:et(Array)},validateEvent:{type:Boolean,default:!0},...ea(["ariaLabel"])}),f1={[Ji]:i=>Mn(i)||Zi(i),[wE]:i=>Mn(i)||Zi(i),activeChange:i=>Mn(i)||Zi(i),focus:i=>i instanceof FocusEvent,blur:i=>i instanceof FocusEvent},ip=Symbol("colorPickerContextKey"),uh=function(i,e,t){return[i,e*t/((i=(2-e)*t)<1?i:2-i)||0,i/2]},p1=function(i){return Mn(i)&&i.includes(".")&&Number.parseFloat(i)===1},m1=function(i){return Mn(i)&&i.includes("%")},kr=function(i,e){p1(i)&&(i="100%");const t=m1(i);return i=Math.min(e,Math.max(0,Number.parseFloat(`${i}`))),t&&(i=Number.parseInt(`${i*e}`,10)/100),Math.abs(i-e)<1e-6?1:i%e/Number.parseFloat(e)},dh={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},wo=i=>{i=Math.min(Math.round(i),255);const e=Math.floor(i/16),t=i%16;return`${dh[e]||e}${dh[t]||t}`},hh=function({r:i,g:e,b:t}){return Number.isNaN(+i)||Number.isNaN(+e)||Number.isNaN(+t)?"":`#${wo(i)}${wo(e)}${wo(t)}`},nl={A:10,B:11,C:12,D:13,E:14,F:15},Vi=function(i){return i.length===2?(nl[i[0].toUpperCase()]||+i[0])*16+(nl[i[1].toUpperCase()]||+i[1]):nl[i[1].toUpperCase()]||+i[1]},g1=function(i,e,t){e=e/100,t=t/100;let n=e;const r=Math.max(t,.01);t*=2,e*=t<=1?t:2-t,n*=r<=1?r:2-r;const s=(t+e)/2,o=t===0?2*n/(r+n):2*e/(t+e);return{h:i,s:o*100,v:s*100}},fh=(i,e,t)=>{i=kr(i,255),e=kr(e,255),t=kr(t,255);const n=Math.max(i,e,t),r=Math.min(i,e,t);let s;const o=n,a=n-r,l=n===0?0:a/n;if(n===r)s=0;else{switch(n){case i:{s=(e-t)/a+(e<t?6:0);break}case e:{s=(t-i)/a+2;break}case t:{s=(i-e)/a+4;break}}s/=6}return{h:s*360,s:l*100,v:o*100}},_s=function(i,e,t){i=kr(i,360)*6,e=kr(e,100),t=kr(t,100);const n=Math.floor(i),r=i-n,s=t*(1-e),o=t*(1-r*e),a=t*(1-(1-r)*e),l=n%6,c=[t,o,s,s,a,t][l],u=[a,t,t,o,s,s][l],d=[s,s,a,t,t,o][l];return{r:Math.round(c*255),g:Math.round(u*255),b:Math.round(d*255)}};class As{constructor(e={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const t in e)Ro(e,t)&&(this[t]=e[t]);e.value?this.fromString(e.value):this.doOnChange()}set(e,t){if(arguments.length===1&&typeof e=="object"){for(const n in e)Ro(e,n)&&this.set(n,e[n]);return}this[`_${e}`]=t,this.doOnChange()}get(e){return e==="alpha"?Math.floor(this[`_${e}`]):this[`_${e}`]}toRgb(){return _s(this._hue,this._saturation,this._value)}fromString(e){if(!e){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const t=(n,r,s)=>{this._hue=Math.max(0,Math.min(360,n)),this._saturation=Math.max(0,Math.min(100,r)),this._value=Math.max(0,Math.min(100,s)),this.doOnChange()};if(e.includes("hsl")){const n=e.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,s)=>s>2?Number.parseFloat(r):Number.parseInt(r,10));if(n.length===4?this._alpha=Number.parseFloat(n[3])*100:n.length===3&&(this._alpha=100),n.length>=3){const{h:r,s,v:o}=g1(n[0],n[1],n[2]);t(r,s,o)}}else if(e.includes("hsv")){const n=e.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,s)=>s>2?Number.parseFloat(r):Number.parseInt(r,10));n.length===4?this._alpha=Number.parseFloat(n[3])*100:n.length===3&&(this._alpha=100),n.length>=3&&t(n[0],n[1],n[2])}else if(e.includes("rgb")){const n=e.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,s)=>s>2?Number.parseFloat(r):Number.parseInt(r,10));if(n.length===4?this._alpha=Number.parseFloat(n[3])*100:n.length===3&&(this._alpha=100),n.length>=3){const{h:r,s,v:o}=fh(n[0],n[1],n[2]);t(r,s,o)}}else if(e.includes("#")){const n=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(n))return;let r,s,o;n.length===3?(r=Vi(n[0]+n[0]),s=Vi(n[1]+n[1]),o=Vi(n[2]+n[2])):(n.length===6||n.length===8)&&(r=Vi(n.slice(0,2)),s=Vi(n.slice(2,4)),o=Vi(n.slice(4,6))),n.length===8?this._alpha=Vi(n.slice(6))/255*100:(n.length===3||n.length===6)&&(this._alpha=100);const{h:a,s:l,v:c}=fh(r,s,o);t(a,l,c)}}compare(e){return Math.abs(e._hue-this._hue)<2&&Math.abs(e._saturation-this._saturation)<1&&Math.abs(e._value-this._value)<1&&Math.abs(e._alpha-this._alpha)<1}doOnChange(){const{_hue:e,_saturation:t,_value:n,_alpha:r,format:s}=this;if(this.enableAlpha)switch(s){case"hsl":{const o=uh(e,t/100,n/100);this.value=`hsla(${e}, ${Math.round(o[1]*100)}%, ${Math.round(o[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${e}, ${Math.round(t)}%, ${Math.round(n)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${hh(_s(e,t,n))}${wo(r*255/100)}`;break}default:{const{r:o,g:a,b:l}=_s(e,t,n);this.value=`rgba(${o}, ${a}, ${l}, ${this.get("alpha")/100})`}}else switch(s){case"hsl":{const o=uh(e,t/100,n/100);this.value=`hsl(${e}, ${Math.round(o[1]*100)}%, ${Math.round(o[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${e}, ${Math.round(t)}%, ${Math.round(n)}%)`;break}case"rgb":{const{r:o,g:a,b:l}=_s(e,t,n);this.value=`rgb(${o}, ${a}, ${l})`;break}default:this.value=hh(_s(e,t,n))}}}const _1=Ve({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0},enableAlpha:{type:Boolean,required:!0}},setup(i){const e=Ft("color-predefine"),{currentColor:t}=_t(ip),n=me(s(i.colors,i.color));$e(()=>t.value,o=>{const a=new As;a.fromString(o),n.value.forEach(l=>{l.selected=a.compare(l)})}),ph(()=>{n.value=s(i.colors,i.color)});function r(o){i.color.fromString(i.colors[o])}function s(o,a){return o.map(l=>{const c=new As;return c.enableAlpha=i.enableAlpha,c.format="rgba",c.fromString(l),c.selected=c.value===a.value,c})}return{rgbaColors:n,handleSelect:r,ns:e}}});function v1(i,e,t,n,r,s){return xe(),Je("div",{class:De(i.ns.b())},[We("div",{class:De(i.ns.e("colors"))},[(xe(!0),Je(Yi,null,xp(i.rgbaColors,(o,a)=>(xe(),Je("div",{key:i.colors[a],class:De([i.ns.e("color-selector"),i.ns.is("alpha",o._alpha<100),{selected:o.selected}]),onClick:l=>i.handleSelect(a)},[We("div",{style:In({backgroundColor:o.value})},null,4)],10,["onClick"]))),128))],2)],2)}var x1=Ct(_1,[["render",v1],["__file","predefine.vue"]]);const y1=Ve({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(i){const e=Ft("color-svpanel"),t=Zt(),n=me(0),r=me(0),s=me("hsl(0, 100%, 50%)"),o=se(()=>{const c=i.color.get("hue"),u=i.color.get("value");return{hue:c,value:u}});function a(){const c=i.color.get("saturation"),u=i.color.get("value"),d=t.vnode.el,{clientWidth:h,clientHeight:p}=d;r.value=c*h/100,n.value=(100-u)*p/100,s.value=`hsl(${i.color.get("hue")}, 100%, 50%)`}function l(c){const d=t.vnode.el.getBoundingClientRect(),{clientX:h,clientY:p}=Fl(c);let g=h-d.left,_=p-d.top;g=Math.max(0,g),g=Math.min(g,d.width),_=Math.max(0,_),_=Math.min(_,d.height),r.value=g,n.value=_,i.color.set({saturation:g/d.width*100,value:100-_/d.height*100})}return $e(()=>o.value,()=>{a()}),Xt(()=>{Us(t.vnode.el,{drag:c=>{l(c)},end:c=>{l(c)}}),a()}),{cursorTop:n,cursorLeft:r,background:s,colorValue:o,handleDrag:l,update:a,ns:e}}});function M1(i,e,t,n,r,s){return xe(),Je("div",{class:De(i.ns.b()),style:In({backgroundColor:i.background})},[We("div",{class:De(i.ns.e("white"))},null,2),We("div",{class:De(i.ns.e("black"))},null,2),We("div",{class:De(i.ns.e("cursor")),style:In({top:i.cursorTop+"px",left:i.cursorLeft+"px"})},[We("div")],6)],6)}var b1=Ct(y1,[["render",M1],["__file","sv-panel.vue"]]);const S1=Ve({name:"ElColorPicker"}),E1=Ve({...S1,props:h1,emits:f1,setup(i,{expose:e,emit:t}){const n=i,{t:r}=Af(),s=Ft("color"),{formItem:o}=nc(),a=tc(),l=ta(),{inputId:c,isLabeledByFormItem:u}=Xf(n,{formItemContext:o}),d=me(),h=me(),p=me(),g=me(),_=me(),m=me(),{isFocused:f,handleFocus:M,handleBlur:x}=Wf(_,{beforeFocus(){return l.value},beforeBlur(ie){var Ee;return(Ee=g.value)==null?void 0:Ee.isFocusInsideContent(ie)},afterBlur(){q(!1),Q()}});let S=!0;const C=Mh(new As({enableAlpha:n.showAlpha,format:n.colorFormat||"",value:n.modelValue})),w=me(!1),A=me(!1),I=me(""),E=se(()=>!n.modelValue&&!A.value?"transparent":$(C,n.showAlpha)),y=se(()=>!n.modelValue&&!A.value?"":C.value),U=se(()=>u.value?void 0:n.ariaLabel||r("el.colorpicker.defaultLabel")),k=se(()=>u.value?o==null?void 0:o.labelId:void 0),L=se(()=>[s.b("picker"),s.is("disabled",l.value),s.bm("picker",a.value),s.is("focused",f.value)]);function $(ie,Ee){if(!(ie instanceof As))throw new TypeError("color should be instance of _color Class");const{r:O,g:Pe,b:ye}=ie.toRgb();return Ee?`rgba(${O}, ${Pe}, ${ye}, ${ie.get("alpha")/100})`:`rgb(${O}, ${Pe}, ${ye})`}function q(ie){w.value=ie}const B=iE(q,100,{leading:!0});function Z(){l.value||q(!0)}function H(){B(!1),Q()}function Q(){$t(()=>{n.modelValue?C.fromString(n.modelValue):(C.value="",$t(()=>{A.value=!1}))})}function ee(){l.value||B(!w.value)}function fe(){C.fromString(I.value)}function Ce(){const ie=C.value;t(Ji,ie),t("change",ie),n.validateEvent&&(o==null||o.validate("change").catch(Ee=>void 0)),B(!1),$t(()=>{const Ee=new As({enableAlpha:n.showAlpha,format:n.colorFormat||"",value:n.modelValue});C.compare(Ee)||Q()})}function Ge(){B(!1),t(Ji,null),t("change",null),n.modelValue!==null&&n.validateEvent&&(o==null||o.validate("change").catch(ie=>void 0)),Q()}function j(){w.value&&(H(),f.value&&ae())}function ne(ie){ie.preventDefault(),ie.stopPropagation(),q(!1),Q()}function ue(ie){switch(ie.code){case yn.enter:case yn.space:ie.preventDefault(),ie.stopPropagation(),Z(),m.value.focus();break;case yn.esc:ne(ie);break}}function ae(){_.value.focus()}function Te(){_.value.blur()}return Xt(()=>{n.modelValue&&(I.value=y.value)}),$e(()=>n.modelValue,ie=>{ie?ie&&ie!==C.value&&(S=!1,C.fromString(ie)):A.value=!1}),$e(()=>[n.colorFormat,n.showAlpha],()=>{C.enableAlpha=n.showAlpha,C.format=n.colorFormat||C.format,C.doOnChange(),t(Ji,C.value)}),$e(()=>y.value,ie=>{I.value=ie,S&&t("activeChange",ie),S=!0}),$e(()=>C.value,()=>{!n.modelValue&&!A.value&&(A.value=!0)}),$e(()=>w.value,()=>{$t(()=>{var ie,Ee,O;(ie=d.value)==null||ie.update(),(Ee=h.value)==null||Ee.update(),(O=p.value)==null||O.update()})}),Ai(ip,{currentColor:y}),e({color:C,show:Z,hide:H,focus:ae,blur:Te}),(ie,Ee)=>(xe(),ft(P(Pw),{ref_key:"popper",ref:g,visible:w.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[P(s).be("picker","panel"),P(s).b("dropdown"),ie.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:ie.teleported,transition:`${P(s).namespace.value}-zoom-in-top`,persistent:"",onHide:O=>q(!1)},{content:gt(()=>[ys((xe(),Je("div",{onKeydown:fc(ne,["esc"])},[We("div",{class:De(P(s).be("dropdown","main-wrapper"))},[Ot(d1,{ref_key:"hue",ref:d,class:"hue-slider",color:P(C),vertical:""},null,8,["color"]),Ot(b1,{ref_key:"sv",ref:h,color:P(C)},null,8,["color"])],2),ie.showAlpha?(xe(),ft(l1,{key:0,ref_key:"alpha",ref:p,color:P(C)},null,8,["color"])):lt("v-if",!0),ie.predefine?(xe(),ft(x1,{key:1,ref:"predefine","enable-alpha":ie.showAlpha,color:P(C),colors:ie.predefine},null,8,["enable-alpha","color","colors"])):lt("v-if",!0),We("div",{class:De(P(s).be("dropdown","btns"))},[We("span",{class:De(P(s).be("dropdown","value"))},[Ot(P(EA),{ref_key:"inputRef",ref:m,modelValue:I.value,"onUpdate:modelValue":O=>I.value=O,"validate-event":!1,size:"small",onKeyup:fc(fe,["enter"]),onBlur:fe},null,8,["modelValue","onUpdate:modelValue","onKeyup"])],2),Ot(P(lh),{class:De(P(s).be("dropdown","link-btn")),text:"",size:"small",onClick:Ge},{default:gt(()=>[Co(Zn(P(r)("el.colorpicker.clear")),1)]),_:1},8,["class"]),Ot(P(lh),{plain:"",size:"small",class:De(P(s).be("dropdown","btn")),onClick:Ce},{default:gt(()=>[Co(Zn(P(r)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,["onKeydown"])),[[P(t1),j]])]),default:gt(()=>[We("div",wi({id:P(c),ref_key:"triggerRef",ref:_},ie.$attrs,{class:P(L),role:"button","aria-label":P(U),"aria-labelledby":P(k),"aria-description":P(r)("el.colorpicker.description",{color:ie.modelValue||""}),"aria-disabled":P(l),tabindex:P(l)?-1:ie.tabindex,onKeydown:ue,onFocus:P(M),onBlur:P(x)}),[P(l)?(xe(),Je("div",{key:0,class:De(P(s).be("picker","mask"))},null,2)):lt("v-if",!0),We("div",{class:De(P(s).be("picker","trigger")),onClick:ee},[We("span",{class:De([P(s).be("picker","color"),P(s).is("alpha",ie.showAlpha)])},[We("span",{class:De(P(s).be("picker","color-inner")),style:In({backgroundColor:P(E)})},[ys(Ot(P(Kn),{class:De([P(s).be("picker","icon"),P(s).is("icon-arrow-down")])},{default:gt(()=>[Ot(P(fE))]),_:1},8,["class"]),[[il,ie.modelValue||A.value]]),ys(Ot(P(Kn),{class:De([P(s).be("picker","empty"),P(s).is("icon-close")])},{default:gt(()=>[Ot(P(vE))]),_:1},8,["class"]),[[il,!ie.modelValue&&!A.value]])],6)],2)],2)],16,["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex","onFocus","onBlur"])]),_:1},8,["visible","popper-class","teleported","transition","onHide"]))}});var T1=Ct(E1,[["__file","color-picker.vue"]]);const A1=ar(T1);const w1={class:"tool"},R1={class:"btn"},C1={__name:"index",setup(i){const e=me(null);let t,n,r,s,o=new Map,a=new N,l=me(!1),c=me("");Xt(()=>{u()}),_h(()=>{r.dispose(),r.domElement.removeEventListener("click",g)});function u(){t=new Zx,t.background=new Le(2503224),n=new Vt(75,window.innerWidth/window.innerHeight,.1,1e3),n.position.set(100,100,100),n.lookAt(t.position),r=new Yx,r.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(r.domElement);const f=new By(500);t.add(f);const M=new yy(16777147,526368,1);t.add(M),s=new yM(n,r.domElement),s.enableDamping=!0,r.domElement.addEventListener("click",g,!1),h(),d()}function d(){requestAnimationFrame(d),s.update(),r.render(t,n)}function h(){new ky().load("/model/ChangQiao.glb",M=>{t.add(M.scene),M.scene.scale.set(.05,.05,.05),new On().setFromObject(M.scene).getCenter(a),a.negate(),M.scene.position.add(a),p(M.scene)},void 0,M=>{console.error(M)})}function p(f){f.traverse(M=>{M.isMesh&&o.set(M,M.position.clone())})}function g(f){var w;f.preventDefault();const M=new we(f.clientX/window.innerWidth*2-1,-(f.clientY/window.innerHeight)*2+1),x=new Fy;x.setFromCamera(M,n);const S=x.intersectObjects(t.children,!0);console.log(S);const C=(w=S[0])==null?void 0:w.object;if(C.isMesh){const A=C.material.clone();let I=c.value.slice(1)||"0xffffff";console.log("color",I),A.color.set(+`0x${I}`),C.material=A}}function _(f){m(!l.value),l.value=!l.value}function m(f){t.traverse(M=>{if(M.isMesh){let x=o.get(M);if(f&&x){let S=M.position.clone().sub(a).normalize();M.position.add(S.multiplyScalar(1e3*Math.random()))}else!f&&x&&M.position.copy(x)}})}return(f,M)=>(xe(),Je(Yi,null,[We("div",{ref_key:"canvasContainer",ref:e,style:{width:"100%",height:"100vh"}},null,512),We("div",w1,[We("div",{class:"btn",onClick:_},Zn(P(l)?"合并":"拆解"),1),M[2]||(M[2]=We("hr",null,null,-1)),We("div",R1,[M[1]||(M[1]=Co(" 颜色： ")),Ot(P(A1),{modelValue:P(c),"onUpdate:modelValue":M[0]||(M[0]=x=>gh(c)?c.value=x:c=x)},null,8,["modelValue"]),Co(" "+Zn(P(c)),1)])])],64))}},I1=yp(C1,[["__scopeId","data-v-7a6811b3"]]);export{I1 as default};
