class UserUi{
    constructor() {
        this._container = document.querySelector('ul');
        this._container1 = document.querySelector('.posts-wrapper');
    }
    
    addUser(users){
        const template = UserUi._createTemplate(users);
        this._container.insertAdjacentHTML('afterbegin', template);
    }
    
    addUserInfo(users){
        const template = UserUi._createUserInfo(users);
        this._container1.insertAdjacentHTML('beforeend', template);
    }
    
    static _createTemplate({username, id}){
        return `<li class = 'li' id = '${id}'>${username}</li>`
    }
    static _createUserInfo(users){
        return `<ul class = 'usersInfo'>
                    <li>${users.username}'s information:</li>
                    <li>name ${users.name}</li>
                    <li>email ${users.email}</li>
                    <li>phone ${users.phone}</li>
                    <li>website ${users.website}</li>
                </ul>`
    }
}

function generateUsers(users){
    const ui = new UserUi;
    users.forEach(user => ui.addUser(user));
}

function generateUsersInfo(users, id){
    const ui = new UserUi;
    users.forEach(user => {
        if(user.id === id){
            ui.addUserInfo(user);
        } 
    });
}

const container = document.querySelector('ul');
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('li')){
        if(document.querySelector('.usersInfo')){
            document.querySelector('.usersInfo').remove();
        }
        const id = parseFloat(e.target.id);
        generateUsersInfo(JSON.parse(xhr.responseText), id);
    }
});



const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.addEventListener("load", () => {
    generateUsers(JSON.parse(xhr.responseText));
    console.log(JSON.parse(xhr.responseText));
});
xhr.send();
