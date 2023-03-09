const modalWindow = document.getElementById('modal-window');
const overlay = document.getElementById('overlay');
const nextJokeBtn = document.getElementById('btn-1');
const aboutCreatorBtn = document.getElementById('btn-2');
const closeModalBtn = document.getElementById('close-modal');


const toggleModalWindow = event => {
    modalWindow.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}


closeModalBtn.addEventListener('click' , toggleModalWindow);
aboutCreatorBtn.addEventListener('click' , toggleModalWindow);
overlay.addEventListener('click' , toggleModalWindow);