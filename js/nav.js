const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
    <img src="../image/logo3-drop.png" class="MedTimely" alt="">
    <div class="Top-items" >
        <div   class="searchbar">
            <input type="text" class="search-box" placeholder="Search Medicine">
            <button class = "search-btn">search</button>
        </div>
        <a>
           <img src = "../image/user1.png" id="user-img" alt="">
           <div class="login-logout-popup hide">
           <p class="account-info"> Login as, name</p>
           <button class="btn" id="user-btn">Log out </button>
           
</div>
        </a>
        <a href="#"><img src = "../image/cart.png" alt=""> </a>

    </div>
</div>
    <ul class="links-container">
    <li class="link-item"> <a href="#" class="link">Home</a> </li>
    <li class="link-item"> <a href="#" class="link">SkinCare</a> </li>
    <li class="link-item"> <a href="#" class="link">DailyMed</a> </li>
    <li class="link-item"> <a href="#" class="link">BabyHealth</a> </li>
    <li class="link-item"> <a href="#" class="link">More</a> </li>

    </ul>
    `;
}
createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null){
        //means user is logged in
        popuptext.innerHTML = `Login as, ${user.name}`;
        actionBtn.innerHTML = `Log out`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        //means user is not logged out
        popuptext.innerHTML = `Login to MedTimely`;
        actionBtn.innerHTML = `Login`;
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}