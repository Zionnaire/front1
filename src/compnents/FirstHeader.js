import img1 from '../img/Logo Dark.png'
import img2 from '../img/Group.png'
import img3 from '../img/UK.png'
function Firstheader(){
    return(
        <header class="first-header">
        <div class="head-1">
            <div class="head-2">
                <div class="classic">
                <div class="head-logo-1">
                    <img src={img2} alt="" srcset=""/>
                </div>
                <div class="head-cont1">
                <p id="help">Do you need help?</p>
                <p id="num">+0(850) 544 7514</p>
                </div>
            </div>
            <div class="head-logo-2">
                <img src={img1} alt="" srcset=""/>
            </div>
            <div class="clip">
            <div class="head-social">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="classic-2">
                <img src={img3} alt="Uk-flag" class="uk-flag" srcset=""/>
               <div class="classic-cont">
                <p id="lang">Language</p>
                <p id="eng">English</p>
               </div>
            </div>
            </div>
            </div>
        </div>
    </header>
    )
}

export default Firstheader