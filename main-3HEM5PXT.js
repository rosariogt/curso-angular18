import"./chunk-3WSD4L7A.js";import{a as j}from"./chunk-TIPSJLT4.js";import{b as L,c as M,d as T,e as x,g as S,i as O}from"./chunk-DNGF5CVO.js";import{a as k}from"./chunk-2FMVVD3A.js";import{f as I,g as N}from"./chunk-L5C6TMJ6.js";import{Ca as P,Da as F,Ea as _,Fa as E,La as s,N as u,O as f,Sa as l,U as m,W as p,Z as g,_a as R,fb as w,ia as y,pa as C,ua as v,va as b,wa as D,xa as A}from"./chunk-JOGKIU2S.js";var B=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-landing"]],standalone:!0,features:[l],decls:1,vars:0,template:function(o,r){o&1&&s(0,"app-nav")},dependencies:[O]})}return n})();var X=()=>[import("./chunk-G7GS4MND.js").then(n=>n.EpisodeListComponent)];function Y(n,e){n&1&&s(0,"app-episode-list")}function q(n,e){n&1&&s(0,"app-loading")}var V=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-episode-list-page"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[900]],template:function(o,r){o&1&&(P(0,Y,1,0)(1,q,1,0),_(2,0,X,null,1,null,null,0,F),E())},dependencies:[k],changeDetection:0})}return n})();var z=[{path:"landing",component:B},{path:"characters",pathMatch:"full",loadComponent:()=>import("./chunk-AZAC6KGO.js").then(n=>n.CharacterListPageComponent)},{path:"character",component:j},{path:"episodes",component:V}];var G="@",J=(()=>{let e=class e{constructor(o,r,i,a,d){this.doc=o,this.delegate=r,this.zone=i,this.animationType=a,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=m(b,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-AZ2N3WH7.js").then(r=>r)).catch(r=>{throw new u(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,r){let i=this.delegate.createRenderer(o,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new h(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let W=d.createRenderer(o,r);a.use(W),this.scheduler?.notify(9)}).catch(d=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){v()},e.\u0275prov=f({token:e,factory:e.\u0275fac});let n=e;return n})(),h=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(G)}};function U(n="animations"){return A("NgAsyncAnimations"),g([{provide:D,useFactory:(e,t,o)=>new J(e,t,o,n),deps:[w,M,y]},{provide:C,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Z={providers:[R({eventCoalescing:!0}),S(z),L(),U()]};var H=(()=>{class n{title="project";isTablet=!1;breakpointObserver=m(I);constructor(){this.breakpointObserver.observe([N.Tablet]).subscribe(t=>{this.isTablet=t.matches,console.log("Es una tablet...")})}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-root"]],standalone:!0,features:[l],decls:1,vars:0,template:function(o,r){o&1&&s(0,"router-outlet")},dependencies:[x],changeDetection:0})}return n})();T(H,Z).catch(n=>console.error(n));
