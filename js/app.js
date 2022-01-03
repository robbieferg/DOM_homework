document.addEventListener('DOMcontentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

    const gameListItem = createGameListItem(event.target);
    const gameList = document.querySelector('#game-list');
    gameList.appendChild(gameListItem);

    event.target.reset();
}