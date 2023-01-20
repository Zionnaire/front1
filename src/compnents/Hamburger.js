import img1 from '../img/Logo Dark.png'

function Hamburger(){
    return(

        <>
        <input type="checkbox" name="" id="check"/>
        <label for="check">
            <i class="fa fa-bars" id="btn"></i>
            <i class="fa fa-times" id="cancle"></i>
        </label><div class="sidebar">
                <header>
                    <img src={img1} alt="" srcset="" />
                </header>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div class="head-btn">
                    <button class="head-btn-1" type="button">LOGIN</button>
                    <button class="head-btn-2" type="button">REGISTER</button>
                </div>
            </div>
            </>
        // <div class="harmburger-header">
        //     <div class="harm-header">
        //         <div class="harm-head">
        //             <div class="bug-menu">
        //                 <input type="checkbox" name="" id="check"/>
        //                 <label for="check">
        //                 <i class="fa fa-bars" id="btn"></i>
        //                 <i class="fa fa-times" id="cancle"></i>
        //                 </label>
        //             </div>
        //             <div class="head-logo-12">
        //             <img src="" alt="" srcset=""/>
        //             </div>
                
        //     </div>
        //     </div>

            
        // </div>
    )
}

export default Hamburger