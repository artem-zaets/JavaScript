class ImageService {
    remove(idImg, tokenImg) {
        return new Promise((resolve, reject) => {
            const imageUserInt = new ImageUI();
             // Get token 
            const token = localStorage.getItem("social_user_token");
            // Get id
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");
           fetch(`${env.apiUrl}/public/users/remove-photo/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      image_id: idImg,
      image_url: tokenImg
    }),
    headers: {
      "Content-type": "application/json",
      "x-access-token": token
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .then(imageUserInt.removeImage(idImg));
        });
    }
    getInfo(id) {
         return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/users/image-info/${id}`)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    }
