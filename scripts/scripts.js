// const kp1 = document.querySelector("#keyphrase");
// const kp2 = document.querySelector("#keyphrase2");
// const message = document.querySelector("#formmessage");

// kp2.addEventListener("focusout", checkSame);

// // This should be refactored.
// function checkSame() {
// 	if (kp1.value !== kp2.value) {
// 		message.textContent = "❗Key Phrases DO NOT MATCH!";
// 		message.style.visibility = "show";
// 		kp2.style.backgroundColor = "#fff0f3";
// 		kp2.value = "";
// 		kp2.focus();
// 	} else {
// 		message.style.display = "none";
// 		kp2.style.backgroundColor = "#fff";
// 		kp2.style.color = "#000";
// 	}
// }

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    const emailInput = document.getElementById('email');
    const emailRegex = /[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!emailRegex.test(emailInput.value)) {
        alert('❗Please enter a valid email address with the domain "byui.edu".');
        return false;
    }

    if (password !== confirmPassword) {
        alert(" ❗ Passwords do not match. Please try again.");
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

function updateRating() {
    var ratingValue = document.getElementById("pageRating").value;
    document.getElementById("ratingValue").innerText = ratingValue;
}



  