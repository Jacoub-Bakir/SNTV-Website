(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "Oct 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
            if(Math.floor((distance % (day)) / (hour)) < 10){ document.getElementById("hours").innerText = "0" +  Math.floor((distance % (day)) / (hour)) + " :"; }else{ document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) +" :"; }
            if(Math.floor((distance % (hour)) / (minute)) < 10){document.getElementById("minutes").innerText = "0" + Math.floor((distance % (hour)) / (minute)) +" :" ; }else{ document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) +" :";}
            if(Math.floor((distance % (minute)) / second) < 10){document.getElementById("seconds").innerText = "0" + Math.floor((distance % (minute)) / second); }else{ document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);}
  
          //do something later when date is reached
          if (distance < 0) {
            
            countdown = document.getElementById("countdown"),
  
            countdown.style.display = "none";
            // content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());





const drop_btn = document.querySelector(".drop-btn span");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const setting_drop = document.querySelector(".setting-drop");
const help_drop = document.querySelector(".help-drop");
const setting_item = document.querySelector(".setting-item");
const help_item = document.querySelector(".help-item");
const setting_btn = document.querySelector(".back-setting-btn");
const help_btn = document.querySelector(".back-help-btn");
drop_btn.onclick = (()=>{
    menu_wrapper.classList.toggle("show");
    const nav = document.querySelector(".nav");
    window.onclick = function(event) {
        var isClickInsideElement = nav.contains(event.target);
        if (!isClickInsideElement) {
            menu_wrapper.classList.remove("show");
        }
    };
});
setting_item.onclick = (()=>{
    menu_bar.style.marginLeft = "-300px";
    setTimeout(()=>{
    setting_drop.style.display = "block";
    }, 100);
});
help_item.onclick = (()=>{
    menu_bar.style.marginLeft = "-300px";
    setTimeout(()=>{
    help_drop.style.display = "block";
    }, 100);
});
setting_btn.onclick = (()=>{
    menu_bar.style.marginLeft = "0px";
    setting_drop.style.display = "none";
});
help_btn.onclick = (()=>{
    help_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});




let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 70;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #1676ba ${progressValue * 3.6}deg,
    #dbecf8 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


function AddNewTripButton(){
  const stopPageEvents = document.querySelector('.container__main section');
  const addNewTripPage = document.querySelector('.addNewTrip-wrapper');
  stopPageEvents.style.pointerEvents = "none";
  addNewTripPage.style.display = "block";

}

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.selected-date');
const dates_element = document.querySelector(' .dates');
const mth_element = document.querySelector(' .dates .month .mth');
const next_mth_element = document.querySelector(' .dates .month .next-mth');
const prev_mth_element = document.querySelector(' .dates .month .prev-mth');
const days_element = document.querySelector(' .dates .days');
const date_container_element = document.querySelector(".date-container");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



let date = new Date();
const theDay = date.getDate();
const theMonth = date.getMonth();
const theYear = date.getFullYear();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day + 1;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();


// EVENT LISTENERS

date_picker_element.addEventListener('click', toggleDatePicker);
selected_date_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.style.opacity = "0.5";


// FUNCTIONS
function toggleDatePicker (e) {
    dates_element.classList.toggle('active');
    // const dateContainer = document.querySelector(".container"); 
    // window.onclick = function(event) {
    //     var isClickInsideElement = dateContainer.contains(event.target);
        
    //     if (!isClickInsideElement ) {
    //         dates_element.classList.remove("active"); 
    //     }
    // };
	
}

function goToNextMonth (e) {

    prev_mth_element.addEventListener('click', goToPrevMonth);
    prev_mth_element.style.opacity = "1";
	month++;
	date.setMonth(date.getMonth() + 1);
	mth_element.textContent = months[date.getMonth()] + ' ' + date.getFullYear();
	populateDates();
}

function goToPrevMonth (e) {
    
    month--;
    if(month <= theMonth && year <= theYear){
        prev_mth_element.removeEventListener('click', goToPrevMonth);
        prev_mth_element.style.opacity = "0.5";
    }
	date.setMonth(date.getMonth() - 1);
	mth_element.textContent = months[date.getMonth()] + ' ' + date.getFullYear();
	populateDates();
    
}

function populateDates (e) {
	days_element.innerHTML = '';
	
    date.setDate(1);


  var lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  
  var prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  var firstDayIndex = date.getDay();

  var lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  var nextDays = 7 - lastDayIndex - 1;
  
  

  for (let x = firstDayIndex ; x > 0; x--) {
    const prev_date_element = document.createElement('div');
    prev_date_element.classList.add('day');
    prev_date_element.classList.add('prev-date');  
    prev_date_element.textContent = prevLastDay - x + 1;
    days_element.appendChild(prev_date_element);
  }

  for (let i =1 ; i <= lastDay; i++) {
    var day_element;

    if(i < theDay && month == theMonth){
        day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.classList.add('prev-date'); 
        day_element.textContent = i;
        days_element.appendChild(day_element);
    }else{
        
        day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i;
        days_element.appendChild(day_element);
        
        day_element.addEventListener('click', function () {
                
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;

            populateDates();
            
        });

        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
            day_element.classList.add('selected');
                    
        }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    const next_date_element = document.createElement('div');
    next_date_element.classList.add('day');
    next_date_element.classList.add('next-date');  
    next_date_element.textContent = j;
    days_element.appendChild(next_date_element);
  }
  
  
  
  
}


function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}



const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');

const hr_up = document.querySelector('.time-picker .hour .hr-up');
const hr_down = document.querySelector('.time-picker .hour .hr-down');

const min_up = document.querySelector('.time-picker .minute .min-up');
const min_down = document.querySelector('.time-picker .minute .min-down');

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);

function hour_change (e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}
	

	if (e.target.value == "") {
		e.target.value = formatTime(hour);
	}
	
	hour = e.target.value;
	// setTime();
}

function minute_change (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}
	
	
	if (e.target.value == "") {
		e.target.value = formatTime(minute);
	}

	
	minute = e.target.value;
	// setTime();
}

function hour_up () {
	hour++;
	if (hour > 23) {
		hour = 0;
	}
	setTime();
}
function hour_down () {
	hour--;
	if (hour < 0) {
		hour = 23;
	}
	setTime();
}

function minute_up () {
	minute++;
	if (minute > 59) {
		minute = 0;
		hour++;
		if(hour > 23){
			hour = 0;
		}
	}
	setTime();
}
function minute_down () {
	minute--;
	if (minute < 0) {
		minute = 59;
		hour--;
		if(hour<0){
			hour = 23;
		}
	}
	setTime();
}

function setTime () {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute);
}

function formatTime (time) {
	if (time < 10){
		time = '0' + time;
	}
	return time;
}