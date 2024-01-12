export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.message'),
    buttonClose: document.querySelector('.close'),
    weight: document.querySelector('#weight'),
    height: document.querySelector('#height'),

    open(){
        this.wrapper.classList.add('open');
    },
    close(){
        this.wrapper.classList.remove('open');
    },
    cleaCampos(){
        this.weight.value = '';
        this.height.value = '';
        this.weight.focus();
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
    Modal.cleaCampos();    
    
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(e){
    if(e.key === 'Escape'){
        Modal.close();
        Modal.cleaCampos();
    }
}