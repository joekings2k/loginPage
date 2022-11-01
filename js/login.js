let userName = prompt("Enter your first name");
let firstletter = userName.slice(0, 1).toUpperCase();
let rest = userName.slice(1, userName.length).toLocaleLowerCase();
let finPrint = `${firstletter}${rest}`;

const h1 = document.querySelector("h1");
h1.innerHTML = `Welcome back ${finPrint}`;
const loginBtn = document.querySelector(".loginBtn");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
let valid = document.querySelector(".correctem");
let wrong = document.querySelector(".wrongem");
let validPass = document.querySelector(".correctps");
let wrongpass = document.querySelector(".wrongps");
let modal = document.querySelector(".modal");
let overlay = document.querySelector("#overlay");
let closebtn = document.querySelector(".closebtn");
let checkDetails = document.querySelector(".check");
let inputs = document.querySelectorAll("#input");

let users = [
  {
    email: "erons@gmail.com",
    password: "Testing123",
  },
  {
    email: "phill@gmail.com",
    password: "Trying123",
  },
  {
    email: "jane@gmail.com",
    password: "Trying123",
  },
  {
    email: "emma@gmail.com",
    password: "Trying123",
  },
];

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    ValidateEmail(input1);
    ValidatePassword(input2);
  });
});

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("clicked");
  setTimeout(() => {
    loginBtn.classList.remove("clicked");
  }, 150);
});

function ValidateEmail(email) {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailFormat)) {
    input1.classList.add("inputcorrect");
    valid.classList.add("visibles");
    input1.classList.remove("inputwrong");
    wrong.classList.remove("visibles");
    return true;
  } else if (email.value === "") {
    input1.classList.remove("inputcorrect");
    valid.classList.remove("visibles");
    input1.classList.remove("inputwrong");
    wrong.classList.remove("visibles");
    return false;
  } else {
    input1.classList.add("inputwrong");
    wrong.classList.add("visibles");
    input1.classList.remove("inputcorrect");
    valid.classList.remove("visibles");
    return false;
  }
}

function ValidatePassword(password) {
  let paswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (password.value.match(paswordFormat)) {
    input2.classList.add("inputcorrect");
    validPass.classList.add("visibles");
    input2.classList.remove("inputwrong");
    wrongpass.classList.remove("visibles");
    return true;
  } else if (password.value === "") {
    input2.classList.remove("inputcorrect");
    validPass.classList.remove("visibles");
    input2.classList.remove("inputwrong");
    wrongpass.classList.remove("visibles");
    return false;
  } else {
    input2.classList.add("inputwrong");
    wrongpass.classList.add("visibles");
    input2.classList.remove("inputcorrect");
    validPass.classList.remove("visibles");
    return false;
  }
}
loginBtn.addEventListener("click", () => {
  users.map((user) => {
    if (user.email.includes(input1.value) && ValidateEmail(input1) === true) {
      if (
        user.password.includes(input2.value) &&
        ValidatePassword(input2) === true
      ) {
        activateModal(modal, overlay);
        checkDetails.classList.remove("active2");
      } else {
        checkDetails.classList.add("active2");
        setTimeout(() => {
          checkDetails.classList.remove("active2");
        }, 1000);
      }
    } else {
      checkDetails.classList.add("active2");
      setTimeout(() => {
        checkDetails.classList.remove("active2");
      }, 1000);
    }
  });
});

let activateModal = (item1, item2) => {
  item1.classList.add("active");
  item2.classList.add("active");
};

let removeModal = (item1, item2) => {
  item1.classList.remove("active");
  item2.classList.remove("active");
};

closebtn.addEventListener("click", () => {
  removeModal(modal, overlay);
});
