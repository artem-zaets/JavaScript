let storage = {
    current_todos: [],
    deleted_todos: []
};

/**
 * add_new_todo - функция для добавления новой задачи
 * @param {String} title - заголовок задачи 
 * @param {String} text - текст задачи
 * @returns {void}
 */
const add_new_todo = (title, text) => {
    if (!title) return console.log("Введите заголовок задачи.");
    if (!text) return console.log("Введите текст задачи.");

    const new_todo = { title, text, id: generate_id() };

    storage.current_todos.push(new_todo);

    return storage.current_todos;
}

/**
 * generate_id - создает произвольную строку 
 * @returns {string} - новый id
 */
const generate_id = () => {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    const arrWords = words.split('');
    let id = arrWords.reduce((id, item) => {
        item = Math.floor(Math.random() * arrWords.length);
        return id + arrWords[item];
    }, '');
    id = id.substr(0, 11);
    return id;
}
console.log(generate_id());

/**
 * delete_todo_item - удаление одной задачи
 * @param {sting} id 
 */
const delete_todo_item = id => {
    if (!id) return console.log("Передайте id удаляемой задачи.");

    storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);

    return storage.current_todos;
}

/**
 * edit_todo_item - редактирование задачи
 * @param {string} id - id редактируемой задачи
 * @param {string} title - новый заголовок
 * @param {string} text - новый текст
 */
const edit_todo_item = (id, title, text) => {
     if (!id) return console.log("Передайте id удаляемой задачи.");
     if (!title) return console.log("Введите заголовок.");
     if (!text) return console.log("Введите текст.");
     let index = 0;
     for(let i = 0; i <= storage.current_todos.length; i++){
         if (id === storage.current_todos[i].id){
             index = i;
             break;
         }
     }
    storage.current_todos[index].title = title;
    storage.current_todos[index].text = text;
    return storage;
}
console.log(storage);
