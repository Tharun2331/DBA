import React,{useState} from 'react';
import Card from "./Card";
import SearchIcon from '@material-ui/icons/Search';
import "./Shop.css";
import Cards from "./Card";   
import items from "./SHOP_DATA";
import { useStateValue } from './StateProvider';
function Shop() {
    const [searchField,setSearchField] = useState('');
    

    const filter =  items.filter(item => 
           item.name.toLowerCase().includes(searchField.toLowerCase() )  
        )

    return (
        
      <div> 
          <div style={{marginLeft: "21%",marginTop: "16%", position: "absolute"}}>
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
          </div>
          
    
        
     </div> 
    )                   
}

export default Shop;




