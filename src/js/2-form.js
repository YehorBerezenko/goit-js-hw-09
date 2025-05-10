let formData = {
    email: '',
    message: ''
}



const ST_KEY = "feedback-form-state";
const formElem = document.querySelector('.feedback-form');


const savedData = localStorage.getItem(ST_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  formElem.elements.email.value = formData.email || '';
  formElem.elements.message.value = formData.message || '';
}

formElem.addEventListener('input', handleFormInput);


function handleFormInput(event) {
    event.preventDefault();
    const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
    
}


formElem.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
       alert('Fill please all fields');
    return;
    }
    
    console.log(formData);
  localStorage.removeItem(ST_KEY);
  formData = { email: '', message: '' };
  formElem.reset();
}





