// 1. find the elements on the page 
const button = document.querySelector("button");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const nameInput = document.querySelector("#name");
const form = document.querySelector("form");
const profileCard = document.querySelector("#profileCard");
const displayName = document.querySelector("#displayName");
const messagebox = document.querySelector("#message");
const emailInput = document.querySelector("#email");
const heading = document.querySelector("#heading");

// 2. listen for click on button
button.addEventListener("click", function (event) {
    // this stop the page from auto refreshing
    event.preventDefault();

    // check is password match
    
    if (password.value !== confirm.value) {
        messagebox.textContent = "Password does not match! Please try again.";
        messagebox.style.color = "red"; // this make text color red

    } else if (password.value === "") {
        messagebox.textContent = "Please enter password.";
        messagebox.style.color = "red"; // this make text red
    
    } else {
        localStorage.setItem("username", nameInput.value);
        localStorage.setItem("useremail", emailInput.value);
        form.style.display = "none";
        messagebox.style.display = "none";
        displayName.textContent= nameInput.value;
        document.querySelector("#displayEmail").textContent = emailInput.value;
        profileCard.style.display = "block";

    }
    
});

const savedName = localStorage.getItem ("username");
const savedEmail = localStorage.getItem("useremail");
if (savedName) {
    displayName.textContent = savedName;
    document.querySelector("#displayEmail").textContent = savedEmail;

    profileCard.style.display = "block";
    form.style.display = "none";
    messagebox.style.display = "none";
    heading.style.display = "none";
}

document.querySelector("#logoutbtn").addEventListener("click", function() {
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    profileCard.style.display = "none";
    form.style.display = "block";
    form.reset();
    messagebox.style.display = "block";
    messagebox.textContent = "Your are has been logged out.";
    messagebox.style.color = "blue";

});

const savedUser = localStorage.getItem("username");

if (savedUser) {
    heading.textContent = "Welcome back", + savedUser +"!";
    document.querySelector("form").style.display = "none";
    document.querySelector("message").textContent = "";
}

const logoutBtn = document.querySelector("#logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });
}