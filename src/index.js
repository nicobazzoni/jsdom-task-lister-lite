const form = document.getElementById("create-task-form")
form.addEventListener("submit", submitAction)
const tasks = document.getElementById("tasks")
var editButton=document.createElement("button");

let button = document.querySelector('#new-task-description');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();

function submitAction(e){
  e.preventDefault()
  const description = e.target["new-task-description"].value
  const priority = e.target.priority.value
  newTask(description, priority)
  e.target.reset()
}

function newTask(description, priority){
  const task = document.createElement("li")
  task.innerText = description
  task.classList.add(priority)
  const button = document.createElement("button")
  button.innerText = "x"
  button.addEventListener("click", function(){
    task.remove()
  })
  task.appendChild(button)
  tasks.appendChild(task)
}



