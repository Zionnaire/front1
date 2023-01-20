import img1 from '../img/Icon (3).png'
import img2 from '../img/Icon (7).png'
import img3 from '../img/Icon (4).png'
import img4 from '../img/Icon (8).png'
import img5 from '../img/Icon (5).png'
import img6 from '../img/Icon (6).png'



export default function WhatWeDo(){
    return(
        <section class="section-3">
        <div class="section-3-2">
            <div class="section-3-3">
                <div class="sect-3_1">
                    <div class="sect_31">
                    <h5>WHAT WE DO</h5>
                    <h1>With our flexible production capacity
                        and high technology, we produce
                        customized solutions for your needs.
                    </h1>
                    </div>
                    <div class="sect_32">
                        <div class="sect_32_img">
                            <img src={img1} alt=""/>
                        </div>
                        <div class="sect_32_cont">
                            <h2>Watch Our Machines</h2>
                            <h6>2.34Min, 14.7MB</h6>
                        </div>
                    </div>
                </div>
                <div class="sect-3_binder">
                <div class="sect-3_2">
                    <div class="sect-3_2-img">
                        <img src={img2} alt=""/>
                    </div>
                    <p>Filling and Packaging
                        Machines
                    </p>
                </div>
                <div class="sect-3_2">
                    <div class="sect-3_2-img">
                        <img src={img3} alt=""/>
                    </div>
                    <p>End of Line
                        Solutions
                    </p>
                </div>
                <div class="sect-3_2">
                    <div class="sect-3_2-img">
                        <img src={img4} alt=""/>
                    </div>
                    <p>Food Industry
                        Machines Software
                    </p>
                </div>
                <div class="sect-3_2">
                    <div class="sect-3_2-img">
                        <img src={img5} alt=""/>
                    </div>
                    <p>7/24 Techincal
                        Support
                    </p>
                </div>
                <div class="sect-3_2">
                    <div class="sect-3_2-img">
                        <img src={img6} alt=""/>
                    </div>
                    <p>Special Solutions
                        Your Needs
                    </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}