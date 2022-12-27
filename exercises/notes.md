https://www.youtube.com/watch?v=XF1_MlZ5l6M (Web Dev Simplified - sooo helpful)

bubbling goes from innermost element out (child, parent, grandparent, document)
capturing goes from outermost elemnt in (document, grandparent, parent, child)
capture is set to false by default, it is the third parameter in the call
if capture is true it will run first, then bubbling
can stopPropagation at any point so once that is hit no other capture or bubbling occur depending on where you put it
you can also set an event to happen only once {once:true}
can removeEventListener after so many clicks, time, etc, just make sure to create a variable to use with both functions otherwise it thinks it is two seperate functions

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if e.target.matches(selector)) callback(e)
    })
}

then can use 
addGlobalEventListener("click", "div", e => {
    console.log("Hi")
})

this way no matter when you create a new div it will be included in the eventListener
