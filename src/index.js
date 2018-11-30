const DOMNodeCollection = require('./dom_node_collection.js');


function $l(selector) {
  let nodeArray = [];
  
  if (selector instanceof HTMLElement) {
    nodeArray.push(selector);
  } else if (typeof selector === "string") {
    const nodeList = document.querySelectorAll(selector);
    for (var i = 0; i < nodeList.length; i++) {
      nodeArray.push(nodeList[i]);
    }
  }
  
  return new DOMNodeCollection(nodeArray);
}

window.$l = $l;