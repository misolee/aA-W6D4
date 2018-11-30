class DOMNodeCollection {
  constructor(htmlArray){
    this.htmlArray = htmlArray;
  }
  
  html(string) {
    if (string) {
      return this.htmlArray.map((node) => {
        node.innerHTML = string;
      });
    } else {
      return this.htmlArray[0].innerHTML();
    }
  }
  
  empty() {
    return this.htmlArray.map((node) => {
      node.innerHTML = '';
    });
  }
  
  append(argument) {
    this.htmlArray.map((node) => {
      node.innerHTML += argument;
    });
  }
  
  attr(attribute, value) {
    this.htmlArray.map((node) => {
      if (value) {
        node.setAttribute(attribute, value);
      } else {
        node.setAttribute(attribute);
      }
    });
  }
  
  addClass(newClass) {
    this.htmlArray.map((node) => {
      let currentClass = node.className;
      if (!currentClass.length) {
        node.setAttribute("class", newClass);
      } else {
        node.setAttribute("class", `${currentClass} ${newClass}`);
      }
    });
  }
  
  removeClass() {
    this.htmlArray.map((node) => {
      node.setAttribute("class", "");
    });
  }
  
  children() {
    let allChildren = [];
    this.htmlArray.map((node) => {
      let nodeChildren = node.children;
      for (var i = 0; i < nodeChildren.length; i++) {
        allChildren.push(nodeChildren[i]);
      }
    });
    
    return new DOMNodeCollection(allChildren);
  }
  
  parent() {
    let parents = [];
    this.htmlArray.map((node) => {
      let parent = node.parentNode;
      if (!parents.includes(parent)) {
        parents.push(parent);
      }
    });
    
    return new DOMNodeCollection(parents);
  }
  
  find(selector) {
    let selectedChildren = [];
    this.htmlArray.map((node) => {
      let children = node.querySelectorAll(selector);
      for (var i = 0; i < children.length; i++) {
        selectedChildren.push(children[i]);
      }  
    });
    return new DOMNodeCollection(selectedChildren);
  }
  
  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }
}


module.exports = DOMNodeCollection;
