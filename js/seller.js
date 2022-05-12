let loader = document.querySelector('.loader');
const becomeSellerElement = document.querySelector('.become-seller');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');


window.onload = () => {
    if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            becomeSellerElement.classList.remove('hide');

        } else {
            location.replace('/login');
        }
    } else {
        location.replace('/login');
    }
}

showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})

//form submission

const applyFormButton = document.querySelector('#apply-form-btn')
const businessName =  document.querySelector('#business-name')
const address = document.querySelector('#business-add')
const about = document.querySelector('#about')
const number = document.querySelector('#termscond')
const legitInfo = document.querySelector('#legitInfo')

applyFormButton.addEventListener('click', () => {
    if(!businessName.value.length || !address.value.length || !about.value.length){
     showAlert('fill all the inputs');
    } else if(!tac.checked || !legitInfo.checked){
        showAlert('you must agree to our terms and conditions');

    }
    else{
        // make server request
    }
})