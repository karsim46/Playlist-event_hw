document.addEventListener('DOMContentLoaded', () => {
    // console.log(Playlist);
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const listeningListItem = createListeningListItem(event.target);
    const playList = document.querySelector('#listening-list');
    playList.appendChild(listeningListItem);

    event.target.reset();
}

const createListeningListItem = function(form) {
    const listeningListItem = document.createElement('li');
    listeningListItem.classList.add('listening-list-item');

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    listeningListItem.appendChild(title);

    const artist = document.createElement('h3');
    artist.textContent = form.artist.value;
    listeningListItem.appendChild(artist);

    const category = document.createElement('p');
    category.textContent = form.category.value;
    listeningListItem.appendChild(category);

    return listeningListItem;
}

const handDeleteAllClick = function() {
    const listeningList = document.querySelector('#listening-list');
    listeningList.innerHTML = '';
}