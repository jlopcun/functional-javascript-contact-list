const setElem = tag => document.createElement(tag),
getElem = id => document.getElementById(id),
querySelector = (element,node) => element.querySelector(node)

const addClass = R.curry(function(className,elem){
    elem.classList.add(className)
    return elem
})

const addAttr = R.curry(function(attrName,attrVal,elem){
    elem.setAttribute(attrName,attrVal)
    return elem
})

const append = R.curry(function(node,elem){
    elem.appendChild(node)
    return elem
})

const createTemplate = function(template){
    return getElem(template).content.cloneNode(true)
}