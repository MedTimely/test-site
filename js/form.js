//redirect to home page if user logged in
window.onload = () => {
    if (sessionStorage.user){
    user = JSON.parse(sessionStorage.user);
    if(compareToken(user.authToken, user.email)){
        location.replace('/');
    }
  }
}
//select inputs
const loader = document.querySelector('.loader');
const submitBtn =  document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#termscond') || null;
const notification = document.querySelector('label[for="notification"]') || null;


submitBtn.addEventListener('click',() =>{
   if(name != null ){ //signup page
    if(name.value.length < 3){
        showAlert('Name must be at least 3 characters long');

   } else if(!email.value.length ){
       showAlert('Email is required');
   }  else if(!number.value.length){
       showAlert('Number is required');
   } else if(!Number(number.value) || number.value.length < 10){
       showAlert('Number must be at least 10 digits long');

   } else if(password.value.length < 8){
       showAlert(('Password must be at least 8 characters long'));
   } else if(!tac.checked){
       showAlert('You must agree to our terms and conditions');
   } else {
       loader.style.display = 'block';
       sendData('/signup',{
           name: name.value,
           email: email.value,
           password: password.value,
           number: number.value,
           tac: tac.checked,
           notification: notification.checked,
           seller: false
       })
  }
   }else{
       //login page
       if(!email.value.length || !password.value.length){
           showAlert('fill all the inputs'); 
   } else {
           loader.style.display = 'block';
           sendData('/login',{
               email: email.value,
               password: password.value,
           })
   }
}
    
})