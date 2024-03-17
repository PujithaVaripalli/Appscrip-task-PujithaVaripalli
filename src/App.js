import React,{useState,useEffect} from "react";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faHeart,faUser} from '@fortawesome/free-solid-svg-icons'
import {faGooglePay,faInstagram,faLinkedin,faApplePay,faPaypal} from '@fortawesome/free-brands-svg-icons'

//Mock API URL
const URL="https://fakestoreapi.com/products";

const ProductApp=()=>{

    const [productData,SetproductData]=useState([]);
    const [loading,setLoading]=useState(false);

    //fetching data from API
    const fetchproduct= async (apiURL) =>{

        setLoading(true);
       const response= await fetch(apiURL);
       const product= await response.json();
       SetproductData(product);
       setLoading(false);
}

    useEffect(()=>{
    const correctURL=`${URL}`
    fetchproduct(correctURL);
    },[])
    
    //----------Page title---------------
    useEffect(() => {
        document.title = 'Shopping Website';
      }, []);

    //----------Page description---------------
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='description' content='Here is the amazing shopping website, where you can find all the clothes for women,men&kids.Surely, this web page is the destination for wonderful shopping'/>`
        
      }, []);

   //---------Image Click-----------------
   const imageClick = () => {
   document.write('<h1 id="msg">Thanks for choosing this one!!!!!!!!!</h1>');
   }  

   return(
    <>

    {/* header */}
    <header id="header"> 

    <h1 id="heading">LOGO</h1>
    <div className="icons">
     <FontAwesomeIcon icon={faSearch} className="font_icon"/>
     <FontAwesomeIcon icon={faHeart}  className="font_icon"/>
     <FontAwesomeIcon icon={faUser}   className="font_icon"/>
     </div>
   
    <div className="items">
      <a href="#menu">Shop</a>
      <a href="#menu">Skills</a>
      <a href="#menu">Stories</a>
      <a href="#menu">About</a>
      <a href="#menu">Contact Us</a>
   
    </div>
    </header>
  
     {/* Body of website */}

   <div className="div_1">
    <h1 id="heading_2">Discover our products</h1>
    <h2 id="content">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>
   </div>
    
    <h1 id="count">ITEMS : {productData.length}</h1>

   <select id="menu">
   <option value="volvo">Recommended</option>
   <option value="Newest first">Newest First</option>
   <option value="Popular">Popular</option>
   <option value="Price">Price: High to low</option>
   <option value="Price">Price: Low to high</option>
   </select>

   <div className="div_2">

   <section className="filter_section">
   <input type="checkbox" />Customizable
   </section>

    {loading ? <h1 style={{fontSize:"30px",color:"black",margin:"220px"}}>Loading Data....Please Wait</h1> :
   
    <ul className="product_Data">
        
    {
        productData.map((eachProduct)=>{
        const {id,title,image}=eachProduct;

         return(
                
             <li key={id}>
                    
                <div>
                    <img src={image} alt={title} id="product_img" onClick={() => imageClick()} />    
                </div>
                <div>
                    <h2 id="product_name">{title}</h2>
                </div>
            </li>

               )
        })
    }
       
    </ul>
  } 

  </div>

    {/* footer */}
    <footer className="footer">
      <section className="footer_section">
        
       <div className="div_3">
        <h3 className='text_1'>Be the first to know</h3>
        <h4 className='text_2'>Sign up for updates from mettā muse.</h4>
        <input type='text' placeholder="Enter your e-mail..." id='input'/>
        <input type='button' value='Subscribe' id='btn'/>
      </div>

      <div className="div_4">
       <h3 className='text_1'>contact us</h3>
       <h4 className='text_2'>+44 221 133 5360</h4>
       <h4 className='text_2'>customercare@mettamuse.com</h4>
       <h3 className='text_1'>CURRENCY</h3>
       <h4 className='text_2'>Transactions will be completed in Euros and a currency reference is available on hover.</h4>
    </div>
   </section>

     <hr/>

    <section className="footer_section">
      <div className="div_5">
       <h3 className='text_1'>mettā muse</h3>
       <h4 className='text_2'>Stories</h4>
       <h4 className='text_2'>Artisans</h4>
       <h4 className='text_2'>Boutiques</h4>
       <h4 className='text_2'>Contact Us</h4>
       <h4 className='text_2'>EU Compliances Docs</h4>
      </div>

      <div className="div_6">
       <h3 className='text_1'>Quick Links</h3>
       <h4 className='text_2'>Orders & Shipping</h4>
       <h4 className='text_2'>Join/Login as a Seller</h4>
       <h3 className='text_2'>Payment & Pricing</h3>
       <h4 className='text_2'>Return & Refunds</h4>
       <h4 className='text_2'>FAQs</h4>
       <h4 className='text_2'><h4 className='text_2'>Return & Refunds</h4></h4>
       <h4 className='text_2'>Terms & Conditions</h4>
      </div>

      <div className="div_7">
       <h3 className='text_1'>Follow Us here</h3>
       <FontAwesomeIcon icon={faInstagram} className='font_icon'/>
       <FontAwesomeIcon icon={faLinkedin} className='font_icon'/>

       <h4 className='text_1'>mettā muse Accepts</h4>
       <FontAwesomeIcon icon={faGooglePay} className='font_icon'/>
       <FontAwesomeIcon icon={faPaypal} className='font_icon'/>
       <FontAwesomeIcon icon={faApplePay} className='font_icon'/>
     </div>

   </section>

      <h4 className='text_3'>Copyright © 2023 mettamuse. All rights reserved.</h4>

   </footer>
   </>
    )

}

export default ProductApp;