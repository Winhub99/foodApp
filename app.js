import React from 'react'
import  ReactDOM  from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const heading1 = React.createElement('h1',{id:"header1" },"Namste everyone!")
const heading2 = React.createElement('h2',{id:"header2"},"This is it!")
const container2 = React.createElement('div',{id:"container2"},[heading1,heading2])

root.render(container2)