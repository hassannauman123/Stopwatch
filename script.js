/*
GOAL:
1. Buttons functionality
2. Time Display functionality using buttons
*/

//Basically for all the buttons, we make constants, and set their value to these 
// vars that hold ref of DOM elements 
const timeDisplay = document.querySelector('.timeDisplay');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');


//declare variables for time and interval
let startTime;
let intervalID; //this will update the timeDisplay

//start function to start time
function start() {
    startTime = Date.now();
    endTime = Date.now();
    //setInterval updates time every 10ms
    intervalID = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        //Vars to convert hh/mm/ss
        const secs = Math.floor(elapsedTime / 1000);
        const mins = Math.floor(secs / 60);
        const hrs = Math.floor(mins / 60);
        //now create string in format of hh/mm/ss
        //pad number with leading zero using pad function.
        //Pad fnc is used to add leading or trailing characters to a string to make it a specific length 
        const formattedTime = `${pad(hrs)}: ${pad(mins)}: ${pad(secs)}`;

        //update buttons/elements with the above formatted time string
        /*
         .textContent property is a built-in property of the Element object
         that allows you to get or set the text content of an element
        */
        timeDisplay.textContent = formattedTime;
    }, 1000);
}
function stop() {
    //clears interval by passing intervalID
    clearInterval(intervalID);
}

//clears the interval by passing intervalID, then reset to time to zero
function reset() {
    /*
    clearInterval() is a built-in function in JavaScript. It is used to stop the
    execution of a previously started setInterval() method 
    */
    clearInterval(intervalID);

    timeDisplay.textContent = '00:00:00';

}

//pad fnc adds a leading zero to a number if its less then 10
function pad(number) {
    /*
     "? :" is used to perform a conditional check. The condition being checked is whether number is less than 10. If the condition is true,
     the expression before the colon : is evaluated and a 0 is added before number, which in this case is the string '0' concatenated with 
     the number using the + operator. If the condition is false, the expression after the colon is evaluated, which is simply the number. 
    */
    return number < 10 ? '0' + number : number;
}


//Now we make our buttons responsive to their respective actions
startBtn.addEventListener('click',start); //call start upon clicking
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
