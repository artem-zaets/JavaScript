class CommentsService {
    removeComment(id, comId) {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem("social_user_token");
            const imageServ = new ImageService();
            const imageModal = new ImageModal();
            fetch(`${env.apiUrl}/public/users/comment/${comId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      image_id: id // image id
    }),
    headers: {
      "Content-type": "application/json",
      "x-access-token": token
    }
  })
  .then(response => response.json())
  .then(json => {
                 console.log(json);
                imageServ.getInfo(id)
                .then((data) => imageModal.renderInfo(data))
            })
        });
    }
    
    redactComment(id, text, imgId){
        return new Promise((resolve, reject) => {
            const imageServ = new ImageService();
            const imageModal = new ImageModal();
            const token = localStorage.getItem("social_user_token");
        fetch(`${env.apiUrl}/public/users/comment/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      comment_text: text
    }),
    headers: {
      "Content-type": "application/json",
      "x-access-token": token
    }
  })
  .then(response => response.json())
  .then(json => {
             console.log(json);
                imageServ.getInfo(imgId)
                .then((data) => imageModal.renderInfo(data))
        });
    })                       
}
}