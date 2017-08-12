void function(){

indCfg = document.getElementById('main').getElementsByTagName('div')[0];
indCfg.parentNode.appendChild(indCfg);

var ele = document.createElement('style');
ele.type = 'text/css';
var head = document.getElementsByTagName('head');
head.item(0).appendChild(ele);
ele.innerText ="#header {font-size: 14px; }";

k=document.evaluate('//*[@id="headSearchBox"]',document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null).iterateNext();
k.accessKey="k";
var temp =document.createElement('div');
temp.innerHTML='(k&#x0332;)';
k.placeholder+=temp.innerText;

}();
