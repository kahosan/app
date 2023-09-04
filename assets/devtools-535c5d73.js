import{j as m,a as S,b as h,g as v}from"./index-021ad583.js";import{e as p}from"./messenger-provider-a886fcd3.js";import{i as R}from"./plugins/core/outputs/index-176024f4.js";import"./preload-helper-75e41364.js";window.require=function(e){throw new Error(`Cannot find module '${e}'`)};function g({code:e,lang:s,devtoolsWindow:{simport:n}}){const[o,r]=React.useState(void 0);n("ui/components/code_highlighter/CodeHighlighter.js").then(({highlightNode:i})=>r(()=>i));const t=React.useRef(null);return React.useEffect(()=>{const i=t.current;i&&(i.textContent=e,o==null||o(i,`text/${s}`))},[e,s,o]),m.jsx("pre",{ref:t,style:{cursor:"text",userSelect:"text",whiteSpace:"pre-wrap",margin:"0",padding:"0 4px"}})}let a=[];function W(e){a=e,d.forEach(s=>s(a))}const d=[],$=e=>(d.push(e),p.send("compile"),()=>{const s=d.indexOf(e);d.splice(s,1)});function j(){return React.useSyncExternalStore($,()=>a)}function b({UI:e,devtoolsWindow:{simport:s}}){const n=j(),o=React.useMemo(()=>n.find(({name:t})=>t.endsWith("(compile error)")),[n]),r=React.useMemo(()=>o?n.filter(({name:t})=>t.endsWith("(compile error)")).map(({text:t})=>t).join(`

`):n.filter(({name:t})=>t.endsWith(".js")).map(({name:t,text:i,editorText:l})=>`// @filename:${t}
${l.match(/^\/\/ @devtools.output.compiled\r?\n/)?i:l}`).join(`

`),[o,n]);return m.jsx(g,{code:r,lang:o?"text":"javascript",devtoolsWindow:{simport:s}})}function y({UI:e,devtoolsWindow:{simport:s}}){const n=j();return m.jsx(g,{code:React.useMemo(()=>n.filter(({name:o})=>o.endsWith(".d.ts")).map(({name:o,text:r})=>`// @filename:${o}
${r}`).join(`

`),[n]),lang:"typescript",devtoolsWindow:{simport:s}})}const{babelTransformOptions:C={}}=v(R)??{},B=S({panels:[h("outputs.js",".JS","react",b),h("outputs.d.ts",".D.TS","react",y)],load(){let e;function s(r){const t=e;e=()=>{t==null||t(),r==null||r()}}const n=p.on("run",()=>{a.forEach(({name:r,text:t})=>{if(r==="/index.js")try{e==null||e(),s((0,eval)(`(function () { const module = { exports: {} }; const exports = module.exports; ${t}; return module.exports; })()`).dispose)}catch(i){console.error(i)}})}),o=p.on("compile-completed",r=>{const i=Object.entries(r).reduce((l,[P,{originalText:u,outputFiles:w}])=>l.concat(w.map(({name:c,text:f})=>{var x;if(c.endsWith(".js")){c=c.slice(7);try{return{name:c,text:((x=Babel.transform(f,{presets:["es2015"],...C,filename:c}))==null?void 0:x.code)??"",editorText:u}}catch(E){return{name:`${c} (compile error)`,originalText:f,text:E.message,editorText:u}}}return{name:c,text:f,editorText:u}})),[]);W(i)});return()=>{n==null||n(),o==null||o(),e==null||e()}}});export{B as default};
