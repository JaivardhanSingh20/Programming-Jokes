const modalWindow = document.getElementById('modal-window');
const overlay = document.getElementById('overlay');
const nextJokeBtn = document.getElementById('btn-1');
const aboutCreatorBtn = document.getElementById('btn-2');
const closeModalBtn = document.getElementById('close-modal');
const paraElm = document.querySelectorAll('.para');

const api = `https://official-joke-api.appspot.com/random_joke` ; 

const showNextJoke = event => {

// Creating an instance of XMLHttpRequest Class.
const xhr = new XMLHttpRequest();

// Creating an asynchronous connection by making a GET request.
xhr.open('GET' , api , true);

// During on progress.
xhr.onprogress = function(){
    console.log('Loading started');
}

// When the api is ready to load.
xhr.onload = function(){
    const {setup , punchline} = JSON.parse(this.response);
    if(this.status === 200 && this.readyState === 4){
      paraElm[0].innerHTML = `${setup}` ; 
      paraElm[1].innerHTML = `${punchline}`;
    }
    else{
        paraElm[0].innerHTML = `What's red and bad for your teeth?` ; 
        paraElm[1].innerHTML = 'A Brick' ; 
    }
}

// Sending the request.
xhr.send();
}


const toggleModalWindow = event => {
    modalWindow.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

// Calling showNextJoke for the first time when the page mounts/loads for the first time.
showNextJoke();

nextJokeBtn.addEventListener('click' , showNextJoke);
closeModalBtn.addEventListener('click' , toggleModalWindow);
aboutCreatorBtn.addEventListener('click' , toggleModalWindow);
overlay.addEventListener('click' , toggleModalWindow);

