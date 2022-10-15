window.onload = function()
{   
    //This gets all the sqaure elemts and stores them in a variable.
    const square_elements = document.querySelectorAll(".square")

    //looping through each fo the sqaure elements
    square_elements.forEach(square =>
    {   
        //every time we click the square it should perform the handleclick function once.  so it should not be repeated
        square.addEventListener('click', handleclick, {once: true})
    })

    //this function  takes parameter event
    function handleclick(e)
    {
        console.log('clicked')
    }
}


