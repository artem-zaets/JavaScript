class UserService {
    getInfo() {
        return new Promise((resolve, reject) => {
            // Get token 
            const token = localStorage.getItem("social_user_token");
            // Get id
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");

            fetch(`${env.apiUrl}/public/users/get-info/${id}`, {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        })
    }

    uploadCover(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('coverImg', file);
            // Get token 
            const token = localStorage.getItem("social_user_token");
            // Get id
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");
    
            fetch(`${env.apiUrl}/public/users/upload-cover/${id}`, {
                method: "POST",
                body: formData,
                headers: {
                    "x-access-token": token
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
    
    uploadImage(){
        let userImg;
        return new Promise((resolve, reject) => {
            const imageUI = new ImageUI();
           const formData = new FormData();
           const photosInputs = document.getElementById('userPhotos');
           const[...photosArr] = photosInputs.files;
           photosArr.forEach((photo, i) => {
           formData.append("userPhotos", photo);
           });
            console.log(formData.getAll('userPhotos'));
            // Get token 
            const token = localStorage.getItem("social_user_token");
            // Get id
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");
            
            fetch(`${env.apiUrl}/public/users/upload-photos/${id}`, {
                method: 'POST',
                body: formData,
                headers: {
                    "x-access-token": token
            }
            })
        .then(response => response.json())
        .then(json => {
                this.getInfo()
                .then((data) => {
                    console.log(data);
                    for(let i = 1; i <= json.images.length; i++){
                        imageUI.addImage(data.my_images[data.my_images.length - i]);
                    }
                })
                console.log(json);
            });
            });
    }
    
    addComment(id, commText){
        return new Promise((resolve, reject) => {
            const imageDel = new ImageService();
            const imageModal = new ImageModal();
            // Get token 
            const token = localStorage.getItem("social_user_token");
            fetch(`${env.apiUrl}/public/users/comment/${id}`, {
                method: 'POST',
                body: JSON.stringify({
                    comment_text: commText
            }),
            headers: {
            "Content-type": "application/json",
            "x-access-token": token
            }
                })
  .then(response => response.json())
  .then(json => {
                console.log(json);
                imageDel.getInfo(id)
                .then((data) => imageModal.renderInfo(data))
                })
            
        });
    }
}