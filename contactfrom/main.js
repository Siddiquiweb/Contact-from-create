alert("hi")
const from = document.querySelector("from");
const fullName = document.getElementById("Name");
const Email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `fullName : ${fullName .value}<br> Email: ${Email.value}<br> phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host: "smtp.yourisp.com",
        Username: "rehhmanenterprice123@gmail.com",
        Password: "CA843CE15EE3A266EA7970F43694F5DC9FD6",
        To: 'rehhmanenterprice123@gmail.com',
        From: "rehhmanenterprice123@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

from.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});