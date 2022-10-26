// 1. Change the span with the class `mess-with-me` to have a font size of 40px. (A span is an inline element tag, typically used inside a block of text)

let spanMessWithMe = document.querySelectorAll('span')[1]

spanMessWithMe.style.fontSize = '40px'

// 2. Change the paragraph with the class `mess-with-me` to have a background color of green.

let paraMessWithMe = document.querySelectorAll('p')[1]

paraMessWithMe.style.background = 'green'

// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

let secondDino = document.querySelector('#hide-me-area')

secondDino.style.display = 'none'

// 4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

let firstDino = document.querySelector('#triceratops')

firstDino.style.width = '324px'


// ## Event Listener Challenges

// 1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.

spanMessWithMe.addEventListener('click', function(){
    spanMessWithMe.style.color = 'orange'
})

// 2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

firstDino.addEventListener('click', function(){
    firstDino.style.border = '2px solid red'
})

// 3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

let featheredDino = document.querySelector('#feathers')
featheredDino.addEventListener('click', function(){
    featheredDino.style.opacity = .5
})

// 4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

let rowOfDinos = document.querySelector('#row')
let button = document.querySelector('#toggle')

button.addEventListener('click', function(){
    if(rowOfDinos.style.background.length > 0){
        rowOfDinos.style.background = ''
    } else{
        rowOfDinos.style.background = 'black'
    }
})

// 5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!

let biggify = document.querySelector('#biggify')
biggify.addEventListener('mouseover', function(){
    biggify.style.width = '200px'
})

// ## Stretch Goals

// 1. Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener. **Hint:** when you haven't explicitly set the background color **through JavaScript** yet, its value will always be an empty string, no matter what you've set it to in other sources (like the browser's default white background, or through your own CSS file).

// Completed above

// 2. Add a new event listener so that when the `biggify` dinosaur is no longer hovered, they change back to their original size.  **Hint:** same as the above one, but for its width! **Hint 2:** You'll have to use a different kind of event than you did before, but... it's a related event with a similar name.

biggify.addEventListener('mouseout', function(){
    biggify.style.width = ''
})






