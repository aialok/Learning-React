function customRender(reactElement, container) {

    // const domElement = document.createElement(reactElement.type);

    // document.innerHTML = reactElement.children;

    // domElement.setAttribute('src', reactElement.props.src)  
    // domElement.setAttribute('alt', reactElement.props.alt)
    // domElement.setAttribute('height', reactElement.props.height)
    // domElement.setAttribute('width', reactElement.props.width)

    const domElement = document.createElement(reactElement.type);
    document.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {

        domElement.setAttribute(prop, reactElement.props[prop] )


    }

    

    container.appendChild(domElement);

}


const reactElement = {
    type: 'img',
    props : {
        src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XZe0tP8Vvir0lKLJPEiCn2B8QBJ0RGsrPA&usqp=CAU',
        alt : 'John Wick',
        height : '500px',
        width : '500px'

    },

    children : 'Hello World'

}


const mainContainer = document.getElementById("root");




customRender(reactElement, mainContainer)
