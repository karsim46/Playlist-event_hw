document.addEventListener('DOMContentLoaded', () =>{
    console.log(Playlist);
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

    const listeningListItem = createListeningListItem(event.target);
    const playList = document.querySelector('#listening-list');
    playList.appendChild(listeningListItem);

    event.target.reset();
}

const createListeningListItem = function(form) {
    const listeningListItem = document.createElement('li');
    listeningListItem.classList.add('listening-list-item');


    return listeningListItem;
}