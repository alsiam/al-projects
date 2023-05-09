const localStorageList = () => {
    const list = getList();
    for (const taskName in list) {
        displayList(taskName)
    }
}
const addItem = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    if (!inputValue) {
        return
    }

    // display List
    displayList(inputValue);

    // Local Storage
    addList(inputValue);

    // clear input field
    inputField.value = '';

}
const displayList = taskName => {
    const ul = document.getElementById('ul-list');
    const li = document.createElement('li');
    li.innerHTML = taskName;

    ul.appendChild(li);
}
const getList = () => {
    const list = localStorage.getItem('list');
    let listObject;
    if (list) {
        listObject = JSON.parse(list);
    }
    else {
        listObject = {};
    }
    return listObject;
}
const addList = taskName => {
    const list = getList();
    if (list[taskName]) {
        list[taskName] = list[taskName] + 1;
    } else {
        list[taskName] = 1;
    }
    const listStringified = JSON.stringify(list);
    localStorage.setItem('list', listStringified);

}
localStorageList();
const resetAll = () => {
    document.getElementById('ul-list').textContent = '';
    localStorage.removeItem('list');
}