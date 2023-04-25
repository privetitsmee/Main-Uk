const dateNumb = document.querySelector('.menu_p-date')
const day = 5;

function showDate(){
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - day);
    dateNumb.innerHTML = currentDate.toLocaleDateString('en-US')
}
showDate()



let modal = document.querySelector('.popup')
let button = document.querySelector('.popup_button')

function showModal(e){
        modal.style.display = 'block';
        button.addEventListener('click', (e) => {
            if(e.target === button){
                modal.style.display = 'none';
            }  
        })
}

document.addEventListener("mouseleave", function(event){
    modal.style.display = 'block'
});
document.addEventListener("click", function(event){
    modal.style.display = 'none'
});

setTimeout(showModal, 20000)





let time = 600
const countdown = document.querySelector('.js-timer')

setInterval(updateCountdown, 1000)

function updateCountdown(){
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdown.innerHTML = `${minutes} : ${seconds}`
    time--
}



