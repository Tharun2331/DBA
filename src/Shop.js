import React,{useState, useEffect} from 'react';
import Card from "./Card";
import "./Shop.css";
import Axios from "axios";
import SearchIcon from '@material-ui/icons/Search';

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
},[]);

const filter =  items.filter(item => 
  item.product_name.toLowerCase().includes(searchField.toLowerCase())  
);

    return (
        
      <div  > 

           <div style={{marginLeft: "21%",marginTop: "16%", position: "absolute"}}>
            <SearchIcon />
          </div>

                  <input className="input" type="text" name="search" placeholder="Search.." onChange ={e => {
             setSearchField(e.target.value)
             
        }} autoComplete="off" />    
             
          <div className="main_content">
          { 
              filter.length ? 

            (filter.map(item => (
                <Card  id = {item.product_id} name={item.product_name} imageUrl={item.product_img} price={item.product_price} />
            ))) : <h1 style={{marginLeft:"100%",width: "100%"}}> Sorry..... Not Found </h1>
        }
          </div> 

    
        
      </div> 
    )                   
}

export default Shop;


  

