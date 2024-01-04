import React from "react";
import { useState } from "react";

// Details for website slides
let item1 = "Coding"
let item2 = "Creativity"
let item3 = "Spirit"

const myArray = [item1, item2, item3]

function SlideOne() {

//Setting up useState
const [words, setWords] = useState(0);

function CheckArray(index) {
    if (index === myArray.length - 1) {
    return 0;
    } else {
        return index + 1 
    }
    
}

    return (
        <div>
            <h2>Code you can rely on</h2>
            <div>
                <p>{myArray[words]}</p> 
            </div>
            <button
            type="button"
            onClick={() =>setWords(CheckArray(words))}>Next</button>
        </div>
    )
}

export default SlideOne;