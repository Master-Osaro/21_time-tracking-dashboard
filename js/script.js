//Assign variables
let work = document.querySelector('.card__work .card-inner__duration');
let work_prev = document.querySelector('.card__work .card-inner__previous');
let play = document.querySelector('.card__play .card-inner__duration');
let play_prev = document.querySelector('.card__play .card-inner__previous');
let study = document.querySelector('.card__study .card-inner__duration');
let study_prev = document.querySelector('.card__study .card-inner__previous');
let exercise = document.querySelector('.card__exercise .card-inner__duration');
let exercise_prev = document.querySelector('.card__exercise .card-inner__previous');
let social = document.querySelector('.card__social .card-inner__duration');
let social_prev = document.querySelector('.card__social .card-inner__previous');
let selfcare = document.querySelector('.card__self-care .card-inner__duration');
let selfcare_prev = document.querySelector('.card__self-care .card-inner__previous');

let toggle__daily = document.querySelector('.toggle__daily');
let toggle__weekly = document.querySelector('.toggle__weekly');
let toggle__monthly = document.querySelector('.toggle__monthly');

//Add click listeners to choose period to display:
toggle__daily.addEventListener('click', function(e) {
    e.preventDefault();
    setValues("day");
})
toggle__weekly.addEventListener('click', function(e) {
    e.preventDefault();
    setValues("week");
})
toggle__monthly.addEventListener('click', function(e) {
    e.preventDefault();
    setValues("month");
})



//Values for Daily, Week and Month as Objects
let day = {
    work: {
        current: "5hrs",
        previous: "7hrs"
    },
    play: {
        current: "1hr",
        previous: "2hrs"
    },
    study: {
        current: "0hrs",
        previous: "1hr"
    },
    exercise: {
        current: "1hr",
        previous: "1hr"
    },
    social: {
        current: "1hr",
        previous: "3hrs"
    },
    selfcare: {
        current: "0hrs",
        previous: "1hr"
    }

}
let week = {
    work: {
        current: "32hrs",
        previous: "36hrs"
    },
    play: {
        current: "10hrs",
        previous: "8hrs"
    },
    study: {
        current: "4hrs",
        previous: "7hrs"
    },
    exercise: {
        current: "4hrs",
        previous: "5hrs"
    },
    social: {
        current: "5hrs",
        previous: "10hrs"
    },
    selfcare: {
        current: "2hrs",
        previous: "2hrs"
    }

}

let month = {
    work: {
        current: "103hrs",
        previous: "128hrs"
    },
    play: {
        current: "23hrs",
        previous: "29hrs"
    },
    study: {
        current: "13hrs",
        previous: "19hrs"
    },
    exercise: {
        current: "11hrs",
        previous: "18hrs"
    },
    social: {
        current: "21hrs",
        previous: "23hrs"
    },
    selfcare: {
        current: "7hrs",
        previous: "11hrs"
    }

}


//Function to set values based on the period clicked: Daily, weekly or monthly
function setValues(periodString) {
    if (periodString == "day") {
        //set period to the day object containg Daily values
        period = day;

        //add active class to highlight current selection
        toggle__daily.classList.add("active");

        //ensure active class is removed from other selections
        toggle__monthly.classList.remove("active");
        toggle__weekly.classList.remove("active");
    } else if (periodString == "week") {
        //set period to the week object containing Weekly values
        period = week;

        //add active class to highlight current selection
        toggle__weekly.classList.add("active");

        //ensure active class is removed from other selections
        toggle__monthly.classList.remove("active");
        toggle__daily.classList.remove("active");
    } else if (periodString == "month") {
        //set period to the month object containing Monthly values
        period = month;

        //add active class to highlight current selection
        toggle__monthly.classList.add("active");

        //ensure active class is removed from other selections
        toggle__weekly.classList.remove("active");
        toggle__daily.classList.remove("active");


    }
    //change text fields in the DOM based on the 'period' clicked: Daily, Weekly or Monthly
    work.innerHTML = period.work.current;
    work_prev.innerHTML = "Prev. " + periodString + " - " + period.work.previous;
    play.innerHTML = period.play.current;
    play_prev.innerHTML = "Prev. " + periodString + " - " + period.play.previous;
    study.innerHTML = period.study.current;
    study_prev.innerHTML = "Prev. " + periodString + " - " + period.study.previous;
    exercise.innerHTML = period.exercise.current;
    exercise_prev.innerHTML = "Prev. " + periodString + " - " + period.exercise.previous;
    social.innerHTML = period.social.current;
    social_prev.innerHTML = "Prev. " + periodString + " - " + period.social.previous;
    selfcare.innerHTML = period.selfcare.current;
    selfcare_prev.innerHTML = "Prev. " + periodString + " - " + period.selfcare.previous;
}