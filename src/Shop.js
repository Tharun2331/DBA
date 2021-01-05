import React,{useState, useEffect} from 'react';
import Card from "./Card";
import "./Shop.css";
import Axios from "axios";


function Shop() {
    const [searchField,setSearchField] = useState('');
    const [items, setItems] = useState([]);

useEffect(()=>{
  const getProductsAction = async () => {
    const getProducts = await Axios({method: "GET", url :"http://localhost:8090/products"});
    setItems(getProducts.data);
    console.log(getProducts);
  }

  getProductsAction();
},[])


    return (
        
      <div  className="main_content"> 
           
            {
              items.map(item => {
              return <Card  id={item.product_id} name={item.product_name} imageUrl={item.product_img} price={item.product_price} />
            })
            }






          {/* <div style={{marginLeft: "21%",marginTop: "16%", position: "absolute"}}>
            <SearchIcon />
          </div>

                  <input className="input" type="text" name="search" placeholder="Search.." onChange ={e => {
             setSearchField(e.target.value)
             
        }} autoComplete="off" />    
             
          <div className="main_content">
          { 
              filter.length ? 

            (filter.map(({name, id, imageUrl, price}) => (
                <Card  key={id} name={name} imageUrl={imageUrl} price={price} />
            ))) : <h1 style={{marginLeft:"100%",width: "100%"}}> Sorry..... Not Found</h1>
        }
          </div> */}

    
        
      </div> 
    )                   
}

export default Shop;


  

