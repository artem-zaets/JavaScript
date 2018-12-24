// Init Auth Service
const auth = new AuthService();
// Init Message Module
const message = new Message();
message.init();

// Login UI
const form = document.forms["signUpForm"];
const emailInput = form.elements["email"];
const firstName = form.elements["first_name"];
const lastName = form.elements["last_name"];
const passwordInput = form.elements["password"];
const nickname = form.elements["nick_name"];
const phone = form.elements["phone"];
const city = form.elements["city"];
const country = form.elements["country"];
const dateOfBrthDay = form.elements["day_of_birth"];
const dateOfBrthMonth = form.elements["month_of_birth"];
const dateOfBrthYear = form.elements["year_of_birth"];
const gender_orientation = form.elements["gender"];

// Login handler
function submitHandler(e) {
    e.preventDefault();
    const validation = new Validation(form);
    validation.init();

    if (!validation.check()) return console.error("Validation error.");
    
    auth.register(emailInput.value, passwordInput.value, nickname.value, firstName.value, lastName.value, phone.value,  gender_orientation.value, city.value, country.value, dateOfBrthDay.value, dateOfBrthMonth.value, dateOfBrthYear.value)
        .then((res) => {
            if (!res.error) {
                localStorage.setItem("social_user_id", res.id);
                localStorage.setItem("social_user_token", res.token);
                window.location = "login.html";
            } else {
                message.show({text: res.message, error: res.error});
            }
        });
}

form.addEventListener("submit", submitHandler);