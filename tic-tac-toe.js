window.onload = function()
{
      
    //This gets all the sqaure elemts and stores them in a variable.
    const square_elements = document.querySelectorAll("#board div")
    const o_class = 'O'
    const x_class = 'X' 
    let o_turn
    const Winning_comb = [
        [0,1,2], 
        [3,4,5], 
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    //looping through each fo the sqaure elements
    square_elements.forEach(square =>
    {   
        //This line generates my sqaure classes.
        square.classList.add("square")
        //every time we click the square it should perform the handleclick function once.  so it should not be repeated
        square.addEventListener('click', handleclick, {once: true})
    })

    //this function  takes one parameter, event
    function handleclick(e)
    {
        //console.log('clicked')
        const square = e.target
        const currentclass = o_turn ? o_class : x_class
        marker(square, currentclass)
    }

    //This functions allows us to populate our grid with classes
    function marker(sqaure, currentclass)
    {
        sqaure.classList.add(currentclass)
        console.log('clicked')  
    }

}


