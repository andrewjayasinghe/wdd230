
const date = new Date();
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

const __textYear = document.querySelector("#footer_year")
const __modifiedDate = document.querySelector("#last_modified_date")

__textYear.textContent = date.getFullYear();
__modifiedDate.textContent = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()} ${time}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const titlename = document.querySelector("#title");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
        titlename.style.color = "#fff"
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        titlename.style.color = "#000"
		modeButton.textContent = "🕶️";
	}
});


const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
