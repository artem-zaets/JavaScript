// Init User service
const user = new UserService();
// Init User UI
const userUI = new UserUI();
// Init Image UI
const imageUI = new ImageUI();

const imageDel = new ImageService();

const imageModal = new ImageModal();

const imageComments = new CommentsService();

// UI elements
const inputCover = document.getElementById("coverImg");

const inputImages = document.getElementById("userPhotos");

const imgCont = document.getElementById("imagesRow");

const imageWrap = document.querySelector(".images-wrap");

const formComment = document.getElementById("commFormSender");

const commentsContainer = document.getElementById("comCont");


user.getInfo()
    .then((data) => {
        userUI.renderUserInfo(data);
        return data;
    })
    .then((data) => {
        imageUI.clearContainer();
        data.my_images.forEach((img) => imageUI.addImage(img));
        return data;
    })
    .catch((error) => console.log(error));

inputCover.addEventListener("change", (e) => {
    if (inputCover.files.length) {
        user.uploadCover(inputCover.files[0])
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});

inputImages.addEventListener("change", (e) => {
    if (inputImages.files.length) {
        user.uploadImage()
            .then((data) => {
                console.log(data, userImg);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});

imgCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-alt")){
        const imgId = e.target.closest(".img-wrap").dataset.imgId;
        const imgUrl = e.target.closest(".img-wrap").firstElementChild.src.substr(56);
        imageDel.remove(imgId, imgUrl)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }    
});

// Get one image info
imageWrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("on-hover")) {
        const id = e.target.closest("[data-img-id]").dataset.imgId;
        $('#imageModal').modal('toggle');

        imageDel.getInfo(id)
            .then((data) => imageModal.renderInfo(data))
            .catch((error) => {
                console.log(error);
            });
    }
});

formComment.addEventListener("submit", (e) => {
   e.preventDefault();
    const id = document.querySelector('.mw-100.image').id;
    console.log(id);
    const commText = document.querySelector('#comment').value;
    user.addComment(id, commText)
    .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
     document.querySelector('#comment').value = '';
});

commentsContainer.addEventListener("click", (e) => {
   if (e.target.classList.contains("fa-trash-alt")){
       const id = document.querySelector('.mw-100.image').id;
       const commId = e.target.closest('.comment-item').id;
       imageComments.removeComment(id, commId)
        .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
   } 
});

commentsContainer.addEventListener("click", (e) => {
   if (e.target.classList.contains("fa-edit")){
       const commId = e.target.closest('.comment-item').id;
       const id = document.querySelector('.mw-100.image').id;
       let commentText = e.target.closest(".ml-auto").previousElementSibling.children[1].textContent;
       $('.bd-example-modal-sm').modal('toggle');
       document.querySelector('#modal-cont').innerHTML = `
                                        <input value = "${commentText}" class = "input-modal"></input>
                                        <button type="button" class="btn btn-primary" id="send-changes">Save changes</button>
                                    `;
       
       document.querySelector('#send-changes').addEventListener("click", (e) => {
       const newComment =  document.querySelector('.input-modal').value;
           $('.bd-example-modal-sm').modal('hide');
        imageComments.redactComment(commId, newComment, id)
           .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
       });
   } 
});

// Remove loader
$('#imageModal').on('hidden.bs.modal', (e) => imageModal.loaderToggle());