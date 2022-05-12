const createFooter = () => {
    let footer  = document.querySelector('footer');
    footer.innerHTML= `
    <div class="footer-content">
                   <img src="../image/logo3-drop.png" class="logo" alt="">
                   <div class="footer-ul-container">
                    <ul class = "category">
                        <li class="category-title">Skincare</li>
                        <li><a href="#" class="footer-link"> Lakme</a></li>
                        <li><a href="#" class="footer-link"> Nivea</a></li>
                        <li><a href="#" class="footer-link"> PondsPonds</a></li>
                        <li><a href="#" class="footer-link"> Mamaearth</a></li>
                        <li><a href="#" class="footer-link"> Ponds</a></li>
                        <li><a href="#" class="footer-link"> Vaseline</a></li>
                        <li><a href="#" class="footer-link"> LOreal</a></li>
                    </ul>
                    <ul class = "category">
                        <li class="category-title">DailyMed</li>
                        <li><a href="#" class="footer-link"> Dettol</a></li>
                        <li><a href="#" class="footer-link"> Savlon</a></li>
                        <li><a href="#" class="footer-link"> SurfExcel</a></li>
                        <li><a href="#" class="footer-link"> Lifebuoy</a></li>
                        <li><a href="#" class="footer-link"> Rin</a></li>
                        <li><a href="#" class="footer-link"> Harpic</a></li>
                        <li><a href="#" class="footer-link"> Tide</a></li>
                    </ul>
               </div>
               </div>
                <p class="footer-title">about company</p>
                <p class="info">MedTimely is a delivery based network based on Tripura, India. we provide fastest medicine delivery at your doorsteps with little to no hustle, the medicine you require , we deliver</p>
                <p class="info"> Support emails : medtimely@pm.me,
                    customersupport@medtimely.me</p>
                <p class="info">Contact us : +919366855940</p>
                <div class="footer-social-container">
                    <div>
                        <a href="#" class="social-link" > terms & services </a>
                        <a href="#" class="social-link" > privacy policy </a>
                </div>
                    <div>
                        <a href="#" class="social-link" > facebook </a>
                        <a href="#" class="social-link" > instagram </a>
                        <a href="#" class="social-link" > twitter </a>
                    </div>
                </div>
                <p class="footer-credit">© 2020 MedTimely. All rights reserved.</p>
    `;

}
createFooter();