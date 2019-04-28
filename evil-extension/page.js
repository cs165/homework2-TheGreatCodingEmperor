const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  var allNode = node.childNodes;
  for(let n = 0; n < allNode.length; n++){
    if(allNode[n].nodeName==="SCRIPT"||allNode[n].nodeName=="STYLE"){return;}
    else if(allNode[n].nodeType===Node.ELEMENT_NODE){transformTextNodes(allNode[n]);}
    else if(allNode[n].nodeType===Node.TEXT_NODE){
         //console.log(allNode[n].textContent);
      var text = allNode[n].textContent;
      for(let t in MATCH_LIST){
           var reg =  new RegExp(t+'(,)','g');
             text=text.replace(reg,MATCH_LIST[t]+"&Z@%,");
           reg = new RegExp('(,)'+t+'($)','g');
             text=text.replace(reg,","+MATCH_LIST[t]+"&Z@%");
      }
      var reg =  new RegExp("&Z@%",'g');
      text=text.replace(reg,"");
      var sp = text.split(" ");
      for(let i=0;i< sp.length;i++){
          if(MATCH_LIST.hasOwnProperty(sp[i])){
              sp[i]=MATCH_LIST[sp[i]];
          }
      }
      var newText ="";
      for(let i=0;i< sp.length;i++){
        newText = newText+sp[i];
        if(i<sp.length-1)newText=newText+" ";
      }
      allNode[n].textContent=newText;
    }
  }
 }

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
