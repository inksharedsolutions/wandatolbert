import React from 'react'


const Banner = ()=>{

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">
                        <div className="grid-child-elem">
                            <div className="banner-text">
                                {/* <p>
                                    The
                                </p>  */}

                                <h1>
                                <span style={{display: 'inline-block', color: '#63af66'}}>Don't Work</span> for the Money
                                Let the Money <span style={{display: 'inline-block',color: '#63af66'}}>Work for You!</span>
                                </h1>

                                {/* <p className="right-sub-text">
                                   <span>
                                    Are you giving God His?
                                   </span>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;