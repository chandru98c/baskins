// const header = document.querySelector("header");
// --------------------------------------------------------------------------------sticky header
const header = document.getElementById("head");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});


//  -----------------------------------------------------------------------------------scroll icon
window.addEventListener("scroll", function() {
    var scrolll = document.getElementById("scrolll");
    if (window.scrollY > 200) {
        scrolll.style.transition = "opacity .50s ease"; 
        scrolll.style.opacity = "1";
    } else {
        scrolll.style.opacity = "0"; 
        scrolll.style.transition = "opacity .50s ease";
    }
});

let menu = document.querySelector('#menuicon');
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.remove("open")
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 900,
    reset: true,
    opacity: 0
    

})

sr.reveal('.home-text');
sr.reveal('.home-img');
sr.reveal('.container');
sr.reveal('.about-img');
sr.reveal('.about-text');
sr.reveal('.middle-text');
sr.reveal('.row-btn,.shop-content,form,.review-content,.contact',);


// ======================================================name checking


// document.getElementById("submitBtn").addEventListener("click", function(event) {
//     var nameInput = document.getElementById("nameInput");
//     var icon = document.getElementById("id-icon");

//     if (nameInput.value.trim() === "" || containsNumber(nameInput.value)) {
//         event.preventDefault(); 
//         icon.classList.add("invalid");
//     }
// });

// function containsNumber(input) {
//     return /\d/.test(input);
// }
document.getElementById("submitBtn").addEventListener("click", function(event) {
    var nameInput = document.getElementById("nameInput");
    var icon = document.getElementById("id-icon");

    if (nameInput.value.trim() === "" || containsNumber(nameInput.value)) {
        event.preventDefault(); 
        icon.classList.remove("valid"); 
        icon.classList.add("invalid");
    } else {
        icon.classList.remove("invalid"); 
        icon.classList.add("valid"); 
    }
});

function containsNumber(input) {
    return /\d/.test(input);
}






// =================================================mobile checking

// document.getElementById("submitBtn").addEventListener("click", function(event) {
//     var mobileInput = document.getElementById("mobileInput");
//     var mobileIcon = document.getElementById("mobile-icon");

//     if (mobileInput.value.trim() === "" || !isValidPhoneNumber(mobileInput.value.trim())) {
//         event.preventDefault();
//         mobileIcon.classList.add("invalid");
//     }
// });

// function isValidPhoneNumber(input) {
//     return /^\d{10}$/.test(input);
// }
document.getElementById("submitBtn").addEventListener("click", function(event) {
    var mobileInput = document.getElementById("mobileInput");
    var mobileIcon = document.getElementById("mobile-icon");

    if (mobileInput.value.trim() === "" || !isValidPhoneNumber(mobileInput.value.trim())) {
        event.preventDefault();
        mobileIcon.classList.remove("valid");
        mobileIcon.classList.add("invalid");
    } else {
        mobileIcon.classList.remove("invalid"); 
        mobileIcon.classList.add("valid");
    }
});

function isValidPhoneNumber(input) {
    return /^\d{10}$/.test(input);
}





// ========================================================email checking

// document.getElementById("submitBtn").addEventListener("click", function(event) {
//     var emailInput = document.getElementById("emailInput");
//     var emailIcon = document.getElementById("email-icon");

//     if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
//         event.preventDefault();
//         emailIcon.classList.add("invalid");
//     }
// });

// function isValidEmail(email) {
   
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

document.getElementById("submitBtn").addEventListener("click", function(event) {
    var emailInput = document.getElementById("emailInput");
    var emailIcon = document.getElementById("email-icon");

    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
        event.preventDefault();
        emailIcon.classList.add("invalid");
        emailIcon.classList.remove("valid");
    } else {
        emailIcon.classList.remove("invalid");
        emailIcon.classList.add("valid");
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}






// ========================================================date incomplete chex=cking

// document.getElementById("submitBtn").addEventListener("click", function(event) {
//     var dateInput = document.getElementById("dateInput");
//     var dateIcon = document.getElementById("date-icon");

//     if (dateInput.value.trim() === "" || !isValidDate(dateInput.value)) {
//         event.preventDefault(); 
//         dateIcon.classList.add("invalid");
//     }
// });

// function isValidDate(dateString) {
   
//     return dateString.trim() !== "";
// }
document.getElementById("submitBtn").addEventListener("click", function(event) {
    var dateInput = document.getElementById("dateInput");
    var dateIcon = document.getElementById("date-icon");

    if (dateInput.value.trim() === "" || !isValidDate(dateInput.value)) {
        event.preventDefault(); 
        dateIcon.classList.add("invalid");
    } else {
        dateIcon.classList.remove("invalid"); 
        dateIcon.classList.add("valid");
    }
});

document.getElementById("dateInput").addEventListener("input", function() {
    var dateInput = document.getElementById("dateInput");
    var dateIcon = document.getElementById("date-icon");

    if (dateInput.value.trim() !== "" && isValidDate(dateInput.value)) {
        dateIcon.classList.remove("invalid");
        dateIcon.classList.add("valid"); 
    } else {
        dateIcon.classList.remove("valid"); 
    }
});

function isValidDate(dateString) {
    return dateString.trim() !== "";
}


// =================================================msg checking
document.getElementById("submitBtn").addEventListener("click", function(event) {
    var messageInput = document.getElementById("messageInput");
    var msgIcon = document.getElementById("msg-icon");

    if (messageInput.value.trim() === "") {
        event.preventDefault(); 
        msgIcon.classList.add("invalid");
        msgIcon.classList.remove("valid");
    } else {
        msgIcon.classList.remove("invalid");
        msgIcon.classList.add("valid");
    }
});

