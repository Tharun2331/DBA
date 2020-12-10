import React from 'react';
import "./Home-page.scss";
import CardList from "./Card-List";
// import SearchIcon from '@material-ui/icons/Search';

function HomePage() {
    return (
        <div className="Home"> 
            <div>
                 <img src="/images/Rectangle.png" alt="" className="home_img"/>
            </div>
            {/* // <form>
            //     <div>
            //     <input type="search" placeholder="Search..." />
            //     <div className="search-icon">
            //     <SearchIcon />
            //     </div>
            //     </div>
            //  </form> */}
                 <div className="home_text">
                    <h1>Hi what are you looking to shop today...?</h1>
            </div> 
            
            <CardList  />  
        </div>
    )
}

export default HomePage
