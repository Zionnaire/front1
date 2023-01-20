import img1 from '../img/Image (8).png'
import img2 from '../img/Image (9).png'
import img3 from '../img/Image (10).png'
import img4 from '../img/Icon (10).png'
import img5 from '../img/Group.png'
import img6 from '../img/Icon (11).png'

export default function() {
    return(
        <section class="section-4">
        <div class="section-4-2">
            <div class="section-4-3">
                <div class="first-cont">
                    <h1>Filling and Packaging Machines</h1>
                    <div class="sub_cont">
                    <h6>
                        Liquorice lemon drops powder chocolate
                        liquorice candy dessert gummi bears.
                        Caramels marzipan donut jujubes sweet roll.
                        Powder croissant toffee shortbread chocolate sweet pie. 
                    </h6>
                    <div class="sub_cont_2">
                    <p>Read More</p>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="sub_cont_3">
                <div class="sub_cont_31">
                <div class="sub-img">
                    <img src={img1} alt=""/>
                </div>
                <h4>Linear Machines</h4>
                </div>
                <div class="sub_cont_31">
                    <div class="sub-img">
                        <img src={img2} alt=""/>
                    </div>
                    <h4>Rotary Machines</h4>
                    </div>
                    <div class="sub_cont_31">
                        <div class="sub-img">
                            <img src={img3} alt=""/>
                        </div>
                        <h4>Bottle Filling Machines</h4>
                        </div>
                </div>
                </div>
                <div class="second-cont">
                    <div class="_sub_cont1">
                        <div class="plan">
                        <h5>Let's Plan an 
                            Online Meeting
                        </h5>
                        <p>We are Available Now</p>
                        </div>
                        <div class="_sub_img">
                            <img src={img4} alt=""/>
                        </div>
                    </div>
                    <div class="_sub_cont2">
                        <h2>Are you interested? Contact our
                            sales department now
                        </h2>
                        <div class="_sub_sub">
                        <div class="_sub_classic">
                            <div class="_sub-logo-1">
                                <img src={img5} alt="" srcset=""/>
                            </div>
                            <div class="_sub-cont1">
                            <p id="help"><b>Erkan giris</b>/ Sales Manager</p>
                            <p id="num">+0(850) 544 7514</p>
                            </div>
                        </div>
                        <div class="_sub_classic">
                            <div class="_sub-logo-1">
                                <img src={img6} alt="" srcset=""/>
                            </div>
                            <div class="_sub-cont1">
                            <p id="dept">Sales Department</p>
                            <p id="sale">sales@crosson.com</p>
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