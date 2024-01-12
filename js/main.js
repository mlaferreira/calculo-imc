import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notANumber } from "./utils.js";
//VARIÁVEIS 
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
//const modalWrapper = document.querySelector('.modal-wrapper');
//const modalMessage = document.querySelector('.message');
//const modalBtnClose = document.querySelector('.close');





form.onsubmit = function(e){
    e.preventDefault();

    const weigth = inputWeight.value;
    const height = inputHeight.value;

    const showAlertError = notANumber(weigth) || notANumber(height);
    if(showAlertError){
        AlertError.open();
        return;
    }
   AlertError.close();
    const result = IMC(weigth,height);
    const message = `Seu IMC é de ${result}`;
    Modal.open();
    Modal.message.innerText = message;
    
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();