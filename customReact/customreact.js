function customRender(reactElement, Container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setattribute ('href', reactElement.props.href)
    domElement.setattribute ('target', reactElement.props.target)
    Container.appendChild(domElement)*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if (prop === 'children')  continue

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}

//react look everything as an object


const reactElement ={
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)