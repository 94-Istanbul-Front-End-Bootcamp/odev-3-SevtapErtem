const username = document.getElementById("username");
const password = document.getElementById("password");
const eMail = document.getElementById("eMail");
const checkbox = document.getElementById("checkbox");

function validate() {
  //for username
  if (username.value.trim() === "") {
    let parent = username.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "Bu alan boş bırakılamaz.";
  } else {
    let parent = username.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "";
  }

  //for password
  if (password.value.trim() === "") {
    let parent = password.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "Bu alan boş bırakılamaz.";
  } else if (password.value.length < 8) {
    let parent = password.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "Şifre en az 8 karakterden oluşmalıdır.";
  } else {
    let parent = password.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "";
  }

  //for eMail
  if (eMail.value.trim() === "") {
    let parent = eMail.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "Bu alan boş bırakılamaz.";
  } else if (eMail.value.indexOf("@") <= 0) {
    let parent = eMail.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "Geçerli bir email adresi giriniz.";
  } else {
    let parent = eMail.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "";
  }

  //for checkbox
  if (checkbox.checked === false) {
    let parent = checkbox.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "Bu alan boş bırakılamaz.";
  } else {
    let parent = checkbox.parentElement;
    let message = parent.querySelector("small");
    message.innerText = "";
  }
}

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validate();
});
