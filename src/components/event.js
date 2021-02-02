import React from 'react'
import Pic1 from '../../static/img/img1.jpg';
import Pic2 from '../../static/img/img2.jpg';
import Pic3 from '../../static/img/img3.jpg';
import Pic4 from '../../static/img/img4.jpg';
import Pic5 from '../../static/img/img5.jpg';
import Pic6 from '../../static/img/img6.jpg';
import Pic7 from '../../static/img/img7.jpg';
import Pic8 from '../../static/img/img8.jpg';

const MidMain = ()=>{
    return(
        <>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Event</h1>
                    <p className="middle-params">
                        Luke Four: 18 International Outreach Ministries feeds the hungry weekly and assists with essential supplies. We will be traveling to Honduras in 2021 to do missionary work and continue to make sure children are educated. Dr. Wanda is planning future book events when it is safe, and creating zoom book clubs with the release of her new publication.
                    </p>

                    <div className="gallery">

                        <img src={Pic1} alt='pic1' id="pic1"/>
                        <img src={Pic2} alt='pic2' id="pic2"/>
                        <img src={Pic3} alt='pic3' id="pic3"/>
                        <img src={Pic4} alt='pic4' id="pic4"/>
                        <img src={Pic5} alt='pic5' id="pic5"/>
                        <img src={Pic6} alt='pic6' id="pic6"/>
                        <img src={Pic7} alt='pic7' id="pic7"/>
                        <img src={Pic8} alt='pic8' id="pic8"/>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;