import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement ={
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}
function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target="_blank">Visist Google </a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'}, //second element is always the object fo react createelement
    'click me to visit google'
)
createRoot(document.getElementById('root')).render(
    <App />
)
