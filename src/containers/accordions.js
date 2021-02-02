import React from 'react'
import { Collapse} from 'antd'
import {PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
const { Panel } = Collapse


const text = `
  Your attitude will take control and guide all the events
  in your life. Anything you do and know will condition what you receive.
  The universe is energy. Our thoughts transform that concentration
  of energy creating our reality. At the core of our being, we are one
  with the planet earth, the universe, and the omnipresence of the Most High.
  Reality is both spiritual, physical, and psychological.
`;


class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);

  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

  iconChanger = ()=>{
    console.log('clicks')
  }

   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                    onClick={event => {
                      event.stopPropagation();
                }}
            />
          )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
  }

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/transcend-the-3-elements/',
                          barnes: 'https://www.barnesandnoble.com/w/transcend-ed-vergara/1136405586?ean=9781643458984',
                          amazon :'https://www.amazon.com/Transcend-3-Elements-Ed-Vergara-ebook/dp/B084Q2FC47/ref=sr_1_1?dchild=1&keywords=9781643458984&qid=1596814551&s=books&sr=1-1', 
                      },
                      reviews:{},
                      isNonfront:false,
                      paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
            header="Purchase PaperBack"
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                      data={{
                        paperback:{
                            amazon:'https://www.amazon.com/Transcend-3-Elements-Ed-Vergara/dp/1643458973/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1596814551&sr=1-1',
                            barnes:'https://www.barnesandnoble.com/w/transcend-ed-vergara/1136405586?ean=9781643458977',
                            booksamillion:'https://www.booksamillion.com/p/Transcend/Ed-Vergara/9781643458977?id=7714171848832',
                        },
                        ebooks:{},
                        isNonfront:false,
                        reviews:{},
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions