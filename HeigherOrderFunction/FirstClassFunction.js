// assign function to a variable.
const double = (x) => {
    return x + x
}

const result = double(8);
console.log(result);

// assign function as parameter
isMorning = () => {
    console.log("Good Morning!");
}

isEvening = () => {
    console.log("Good Evening!");
}

greed = (time, isMorning, isEvening) => {
    if (time === "morning") {
        isMorning();
    }
    else {
        isEvening();
    }
}

greed("evening", isMorning, isEvening);