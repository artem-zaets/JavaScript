// Init User service
const user = new UserService();
// Init User UI
const userUI = new UserUI();
// Init Image UI
const imageUI = new ImageUI();

const imageDel = new ImageService();

// UI elements
const inputCover = document.getElementById("coverImg");

const inputImages = document.getElementById("userPhotos");

const imgCont = document.getElementById("imagesRow");

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
                console.log(data);
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