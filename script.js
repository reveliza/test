var root = document.getElementById('root');
var START_BUTTON = document.getElementById('slide-1-start');

startQuizListener();
addAnswerValidations();


function startQuizListener() {
    START_BUTTON.addEventListener('click', () => {
        switchSlides('slide-2', 'slide-1')
    })
}

function addAnswerValidations() {
    validate1stQ();
    validate2stQ();
    validate3stQ();
}

function validate1stQ(){
    var next = document.getElementById('slide-2-next');
    
    next.addEventListener('click', () => {
        var answer = document.querySelector('#slide-2 input');
        if(answer.value.toLowerCase() === 'sarkanarmijas iela 57') {
            switchSlides('slide-3', 'slide-2');
        } else {
            switchSlides('slide-1', 'slide-2');
        }
        answer.value = "";
    })
}

function validate2stQ(){
    var next = document.getElementById('slide-3-next');

    next.addEventListener('click', () => {
        var answer = document.querySelector('#slide-3 input');
        if(answer.value.toLowerCase() === 'jā, tehnikumā ir kopmītnes.') {
            switchSlides('slide-4', 'slide-3');
        } else {
            switchSlides('slide-1', 'slide-3');
        }
        answer.value = "";
    })
}

function validate3stQ(){
    var next = document.getElementById('slide-4-next');
    
    next.addEventListener('click', () => {
        var inputs = document.querySelectorAll('#slide-4 input');
        var answer = [].slice.call(inputs).map((el) => {
            return el.value;
        }).join('');
        
        if(answer.toLowerCase() === 'rkdtlvulla') {
            switchSlides('slide-5', 'slide-4');
        } else {
            switchSlides('slide-1', 'slide-4');
        }

        [].slice.call(inputs).forEach((el) => {
            el.value = "";
        });
    })
}


function switchSlides(next, prev){
    showSlide(next);
    hideSlide(prev);
}

function showSlide(id) {
    document.getElementById(id).classList.remove("hidden");
}

function hideSlide(id){
    document.getElementById(id).classList.add("hidden");
}
