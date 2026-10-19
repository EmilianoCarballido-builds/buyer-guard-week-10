import {test} from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import {readFileSync} from 'node:fs';
test('blank-looking product and questions stop checklist and show correction',async()=>{
 for(const field of ['product','q1','q2']){
 const nodes=new Map();const node=()=>({hidden:false,textContent:'',checked:false,replaceChildren(){},addEventListener(){},setAttribute(){}});const get=id=>{if(!nodes.has(id))nodes.set(id,node());return nodes.get(id);};
 const f=get('purchase');f.elements={};for(const name of ['product','q1','q2'])f.elements[name]={value:'valid',setCustomValidity(s){this.error=s;},reportValidity(){this.reported=true;},addEventListener(){}};f.elements[field].value='   ';
 vm.runInNewContext(readFileSync(new URL('../public/app.js',import.meta.url),'utf8'),{document:{getElementById:get,querySelectorAll:()=>[]},Intl});
 await f.onsubmit({preventDefault(){}});assert.equal(get('review').hidden,true);assert.equal(f.elements[field].error,'Escribe texto, no solo espacios.');assert.equal(f.elements[field].reported,true);
 }
});
