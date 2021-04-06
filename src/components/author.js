import React from 'react'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                        Dr. Wanda is a retired cosmetologist and salon owner. She serviced clients for 30 years owning her own business for 21 of those years. She went to Bible College & Seminary and has earned bachelor, masters and doctorate degrees. She is also the founder of Luke Four:18 International Outreach Ministries, which has a mandated area to call for service in Roatan, Honduras.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Dr. Wanda D.</span>
                            <span>Tolbert</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;