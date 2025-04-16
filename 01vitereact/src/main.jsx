import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return  (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const reactElement = {
//   type: "a",
//   props: {
//       href: "http://google.com",
//       target: "_black"
//   },
//   children: "Click me to visit google"
// }
const anotherUser = "Chai aur REact";
const reactElement = React.createElement(
  "a",
  {href: "https://google.com", target: "_blank"},
  "click me to Visit Google",
  anotherUser
)


createRoot(document.getElementById('root')).render(
  reactElement
)
