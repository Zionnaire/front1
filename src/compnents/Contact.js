import img1 from '../img/Group.png'
import img2 from '../img/Icon (11).png'
import img3 from '../img/Icon (12).png'
import img4 from '../img/Icon (13).png'


export default function Contact(){
    return (
        <section class="section-7">
<div class="section-7-1">
    <div class="section-7-2">
        <div class="sect-7-1">
            <div class="sect-con7">
            <p>Have a any questions?</p>
            <p>Contact Us</p>
            </div>
            <div class="comm">
                <div class="comm_classic">
                    <div class="comm-logo-1">
                        <img src={img1} alt="" srcset=""/>
                    </div>
                    <div class="comm-cont1">
                    <p id="help">Phone Number</p>
                    <p id="num">+0(850) 544 7514</p>
                    </div>
                </div>
                
                <div class="comm_classic">
                    <div class="comm-logo-1">
                        <img src={img2} alt="" srcset=""/>
                    </div>
                    <div class="comm-cont1">
                    <p id="dept">E-Mail Address</p>
                    <p id="sale">hello@crosson.com</p>
                    </div>
                </div>

                <div class="comm_classic">
                    <div class="comm-logo-1">
                        <img src={img3} alt="" srcset=""/>
                    </div>
                    <div class="comm-cont1">
                        <p id="hq">Headquarters</p>
                    <p id="Apple">One Apple Park Way; Cupertino
                        CA 95014, U.S.A.
                    </p>
                    <h6 id="sale"><a href="#">Get Direction</a></h6>
                    </div>
                </div>
            </div>
        </div>

            <div class="sect-7-2">
                <div class="products">
                    <h1>Products</h1>
                    <ul>
                        <li>Filling Machines</li>
                        <li>Bottle Filling Machines</li>
                        <li>Package Machines</li>
                        <li>Linear Machines</li>
                        <li>Rotary Machines</li>
                    </ul>
                </div>
                <div class="products">
                    <h1>Solutions</h1>
                    <ul>
                        <li>End of Line Solutions</li>
                        <li>Food industry Machines Software</li>
                        <li>Research Solutions</li>
                        <li>Conveyor Solutions</li>
                        <li>Special Solutions Your Needs</li>
                    </ul>
                </div>
                <div class="products">
                    <h1>Corporate</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Our Values</li>
                        <li>Human Resources</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="career">
                    <div class="career-icon">
                        <img src={img4} alt=""/>
                    </div>
                    <div class="career-cont">
                    <h1>Career Opportunities</h1>
                    <h3>Cake pudding lollipop pastry cupcake chocolate.
                        Gummi bears halvah <a href="#">sesame snaps.</a>
                    </h3>
                    <div class="hero_cont_1">
                        <div class="hero-btn">
                            <button class="btn-products">Opennig Positions</button>
                        </div>
                        <div class="hero-icon">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
    )
}