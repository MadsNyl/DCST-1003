

const users = {
    madsnyl: "test123",
    madslian: "test124",
    madskr: "test1235",
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");
const msg = document.getElementById("msg");
let tries = 0;

button.addEventListener("click", () => {
    if (!users.hasOwnProperty(username.value)) {
        msg.innerText = "Brukernavn finnes ikke.";
        return;
    }

    if (users[username.value] !== password.value) {
        tries++;
        if (tries >= 3) {
            msg.innerText = "Du har brukt opp forsøkene dine.";
            return;
        }
        msg.innerText = "Feil passord.";
        return;
    }

    msg.innerText = "Du er logget inn.";
});