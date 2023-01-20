import img1 from '../img/Icon (1).png'
import img2 from '../img/Icon (2).png'
import img3 from '../img/Icon.png'
let WhoWeAre =()=>{
    return(
        <section class="section-2">
        <div class="section-2_2">
            <div class="setion-2_3">
                <div class="sect-cont1">
                    <h5>WHO WE ARE</h5>
                    <h1>Crosson is an international group 
                        dedicated to the food industry.
                    </h1>
                    <p>Crosson has twenty years’ experience in food, quality, automation and software which has been established in the food sector for Research, Efficiency and Solution Production.</p>
                    <p> It was not long to discover that supported to knowledge by scientific perspectives, would be the solution to the real needs of the sector. </p>

                    <div class="sect-2_cont_2">
                        <div class="sect-bind">
                        <div class="sect-2-btn">
                            <button class="btn-products">About Us</button>
                        </div>
                        <div class="sect-2-icon">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        </div>
                        <h6><a href="#">Quality Certificates</a></h6>
                    </div>
                </div>
                <div class="sect_2_bind">
                <div class="sect-cont2">
                    <div class="sect-cont2_img">
                        <img src={img1} class="sect_img" alt=""/>
                    </div>
                    <div class="sect_content_2">
                        <h3>Exported to 24 Countries</h3>
                        <h6>168 companies in 24 countries use our machines</h6>
                    </div>
                </div>
                <div class="sect-cont2">
                    <div class="sect-cont2_img">
                        <img src={img2} class="sect_img" alt=""/>
                    </div>
                    <div class="sect_content_2">
                        <h3>8 Billion Products Per Day</h3>
                        <h6>8 billion products are produced daily from our machines.</h6>
                    </div>
                </div>
                <div class="sect-cont2">
                    <div class="sect-cont2_img">
                        <img src={img3} class="sect_img" alt=""/>
                    </div>
                    <div class="sect_content_2">
                        <h3>We touch 850 million people a day</h3>
                        <h6>850 million people use products made by their machines every day</h6>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default WhoWeAre