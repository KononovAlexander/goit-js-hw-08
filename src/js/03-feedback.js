import throttle from 'lodash.throttle';
    const feedbackForm = document.querySelector('.feedback-form');
    const data = {};
    const email = document.querySelector('[name="email"]');
    const message = document.querySelector('[name="message"]');
    const dataStore = JSON.parse(localStorage.getItem('feedback-form-state'));

if (dataStore) {
    if (dataStore.hasOwnProperty("email") && dataStore.hasOwnProperty("message")) {        
        email.value = dataStore.email;
        message.value = dataStore.message;
    }
    if (dataStore.hasOwnProperty("email") && !(dataStore.hasOwnProperty("message"))) {
        email.value = dataStore.email;
        data.email = dataStore.email;
    }

    if (dataStore.hasOwnProperty("message") && !(dataStore.hasOwnProperty("email"))) {
        message.value = dataStore.message;
        data.message = dataStore.message;
    }
}

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('data: ', data);
    
    email.value = null; 
    message.value = null;
    localStorage.clear();
    
});
 
feedbackForm.addEventListener('input', throttle((event) => {
    event.preventDefault();
    let target = event.target;
    if (target === email) {
        data.email = email.value;
    }
    if (target === message) {
        data.message = message.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));        

}, 500)
    
);
