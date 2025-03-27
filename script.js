// color change
document.getElementById('clr-change').addEventListener('click',function(){
    const randomNumber=Math.random()*16777215;
    const randomColor='#'+ Math.floor(randomNumber).toString(16).padStart(6,'0')
    document.body.style.backgroundColor=randomColor

})

// date
const currentDate = new Date();

// weekday
const weekdayIndex = currentDate.getDay();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const weekday = weekdays[weekdayIndex];

// month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[currentDate.getMonth()]; 

// date
const day = currentDate.getDate();

// year
const year = currentDate.getFullYear();

document.getElementById("today").innerHTML = `${weekday} <br> 
<span class="font-bold">${monthName} ${day} ${year}</span>
 `;

//  new page

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = "../blog.html"
})


// complete btn1
document.getElementById("com-btn1").addEventListener("click",function(){
    alert("board Updated Successfully")
    
    const time = new Date();
    let hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    const amPm = hours>= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
    
    const p = document.createElement('p');
    p.textContent = 'You have completed the task Fix Mobile Button Issue at '+ timeString;
    p.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','ml-2','mr-2','text-sm','bg-[#F4F7FF]')
    document.getElementById("history-container").appendChild(p)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('task-point');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    console.log(updateCount)
    if(updateCount<=0){
        alert('Congrates!!! you have completed all current task.')
    }
})
// COMPLETE BTN2
document.getElementById("com-btn2").addEventListener("click",function(){
    alert("board Updated Successfully")
    
    const time = new Date();
    let hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    const amPm = hours>= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
    
    const p = document.createElement('p');
    p.textContent = 'You have completed the task Add Dark Mode Issue at '+ timeString;
    p.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','ml-2','mr-2','text-sm','bg-[#F4F7FF]')
    document.getElementById("history-container").appendChild(p)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('task-point');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    
    if(updateCount<=0){
        alert('Congrates!!! you have completed all current task.')
    }
})
// COMPLETE BTN3
document.getElementById("com-btn3").addEventListener("click",function(){
    alert("board Updated Successfully")
    
    const time = new Date();
    let hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    const amPm = hours>= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
    
    const p = document.createElement('p');
    p.textContent = 'You have completed the task Optimize Home page  Issue at '+ timeString;
    p.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','ml-2','mr-2','text-sm','bg-[#F4F7FF]')
    document.getElementById("history-container").appendChild(p)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('task-point');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    console.log(updateCount)
    if(updateCount<=0){
        alert('Congrates!!! you have completed all current task.')
    }
})
// COMPLETE BTN4
document.getElementById("com-btn4").addEventListener("click",function(){
    alert("board Updated Successfully")
    
    const time = new Date();
    let hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    const amPm = hours>= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
    
    const p = document.createElement('p');
    p.textContent = 'You have completed the task Add new emoji 🤲  Issue at '+ timeString;
    p.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','ml-2','mr-2','text-sm','bg-[#F4F7FF]')
    document.getElementById("history-container").appendChild(p)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('task-point');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    console.log(updateCount)
    if(updateCount<=0){
        alert('Congrates!!! you have completed all current task.')
    }
})
// COMPLETE BTN5
document.getElementById("com-btn5").addEventListener("click",function(){
    alert("board Updated Successfully")
    
    const time = new Date();
    let hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    const amPm = hours>= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
    
    const p = document.createElement('p');
    p.textContent = 'You have completed the task Fix Mobile Button Issu  Issue at '+ timeString;
    p.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','ml-2','mr-2','text-sm','bg-[#F4F7FF]')
    document.getElementById("history-container").appendChild(p)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('task-point');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    console.log(updateCount)
    if(updateCount<=0){
        alert('Congrates!!! you have completed all current task.')
    }
})
// COMPLETE BTN6
document.getElementById("com-btn6").addEventListener("click",function(){
    alert("board Updated Successfully")
    
    const time = new Date();
    let hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    const amPm = hours>= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
    
    const p = document.createElement('p');
    p.textContent = 'You have completed the task Improve Job searching  Issue at '+ timeString;
    p.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','ml-2','mr-2','text-sm','bg-[#F4F7FF]')
    document.getElementById("history-container").appendChild(p)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('task-point');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    console.log(updateCount)
    if(updateCount<=0){
        alert('Congrates!!! you have completed all current task.')
    }
})

// clear history 
document.getElementById("clear").addEventListener("click", function () {
    const history = document.getElementById("history-container")
    history.innerHTML = ""
})




    
    


  