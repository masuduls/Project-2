// my variables for the 3 buttons 
let dadJoke = "They're both Paris sites.";

const displayDadJoke = () => { //Arrow Function
    console.log (`"What do a tick and the Eiffel Tower have in common?": ${dadJoke}`); // String Template Literal
} 

function toggleGuests(sectionId) {
    let section = document.getElementById(sectionId); 
    section.style.display = (section.style.display === 'none') ? 'flex' : 'none'; //Ternary Operator 
}
