function customRenderFunc(reactElement, container){
    newElement = document.createElement(reactElement.type);
    for(const prop in reactElement.props){
        newElement.setAttribute(prop, reactElement.props[prop]);
    }
    newElement.innerHTML = reactElement.childen;

    container.appendChild(newElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com/UjjawalGusain/React/tree/main/02_hello_world_component',
        target: '_blank_'
    },
    childen: 'Click here!!!'
}

const root = document.getElementById('root');


// This function renders an element
customRenderFunc(reactElement, root)