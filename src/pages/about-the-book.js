import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-cover3-min.png'



const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'dr-wanda-d-tolbert',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		        <Helmet title="About the Book | Dr. Wanda D. Tolbert" />
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Don't Work for the Money, Let the Money Work for You`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                        You're working so hard for the money, and may still be getting nowhere! Stop working for the money, and start letting the money work for you with biblical principles and promises!
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'#',
                                        barnes:'https://www.barnesandnoble.com/w/dont-work-for-the-money-let-the-money-work-for-you-wanda-d-tolbert/1103793182?ean=9781648952999',
                                        amazon:'https://www.amazon.com/Dont-Work-Money-Let-You-ebook/dp/B08Q6WX3QT/ref=sr_1_1?dchild=1&keywords=9781648952999&qid=1608676688&s=books&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Dont-Work-Money-Let-You/dp/1648952984/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1608676688&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/dont-work-for-the-money-let-the-money-work-for-you-wanda-d-tolbert/1103793182?ean=9781648952982',
                                        booksamillion:'https://www.booksamillion.com/p/Dont-Work-Money-Let/Wanda-D-Tolbert/9781648952982?id=8121594968068',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;