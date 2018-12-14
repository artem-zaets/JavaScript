class ResetServise {
    reset(email) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/reset-password`, {
                method: "POST",
                body: JSON.stringify({email}),
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