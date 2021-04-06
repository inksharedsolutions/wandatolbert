import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import Event from '../components/event'
import AuthorImg from '../../static/author/main_author.jpg'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		        <Helmet title="About the Author | Dr. Wanda D. Tolbert" />
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img alt="Rachel G. Carrington" src={AuthorImg} />
                            </div>

                            {/* <div className="heading-quote">
                                <h4>
                                  “When you hold on long enough, love will find a way to make it work somehow”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div> */}
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Dr. Wanda is a retired cosmetologist and salon owner. She serviced clients for 30 years owning her own business for 21 of those years. She went to Bible College & Seminary and has earned bachelor, masters and doctorate degrees. She is also the founder of Luke Four:18 International Outreach Ministries, which has a mandated area to call for service in Roatan, Honduras.
                            </p>

                            <p>
                            Luke Four:18 is always concerned with people having enough food to eat, water to drink, clothing to wear and medication. Luke Four:18 participates in land and cruise missionary trips. With the missionary cruises it allows people to confirm that they are able to do land trips. We may be at port for an hour, but we take over much needed supplies, purchase food, have a church service and doctors, nurses, dentist and hairstylist perform free services during the time we are at port.
                            </p>

                            <p>
                            We also built a clinic annex in 2010, sending children to school. Luke Four:18 also feeds people in their home country and gives out supplies to those in need especially during covid-19. Dr. Wanda has been in the Spanish part of the body of Christ since 2005.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Dr. Wanda D. Tolbert</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

                <Event />

		 	</Layout>
		</>
	)
}


export default ATB;
