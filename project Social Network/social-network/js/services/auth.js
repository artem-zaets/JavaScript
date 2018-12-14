class AuthService {
    register(email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year) {
        return new Promise((resolve, reject) => {
            const AjaxBody = {email: email, password: password, nickname: nickname, first_name: first_name, last_name: last_name, phone: phone, gender_orientation: gender_orientation, city: city, country: country, date_of_birth_day: date_of_birth_day, date_of_birth_month: date_of_birth_month, date_of_birth_year: date_of_birth_year}
            fetch(`${env.apiUrl}/public/auth/signup`, {
                method: "POST",
                body: JSON.stringify(AjaxBody),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
}