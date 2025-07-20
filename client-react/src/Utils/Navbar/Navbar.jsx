import React from 'react';
import './Navbar.css'
// import searchIcon from '../assets/searchIcon.svg'
function Navbar(props) {
  let listArray=["Home","Sign In","Log In","Premium"];
  let listitems= listArray.map(listitem=>
    <a href='#html'><li>{listitem}</li></a>
  )
  // let options=["Sign In","Log In"]
  // let listOptions = options.map(option=>  <a href='#html'><li>{option}</li></a>)
  
  const dropDown = (e)=> {
    e.target.textContent = "Close"
    // hover = True 
  }
  const dropDownClose = (e)=> {
    e.target.textContent = "Options" 
    // hover = False
  }
  
  return (
    <div className='Main'>
        
        {/* logo */}
        <div className='logo'>
            <a href='#' onPointerEnter={(e)=>dropDown(e) } 
                        onPointerLeave={(e)=>{dropDownClose(e)}}
                        >
                          Options
            </a>
            <img src={props.image} alt="loading " />
        </div>
        {/* links  */}
        <div className="list">
            <ul>{listitems}</ul>
        </div>
        {/* search */}
        <form action=".php">
            <input type="text" placeholder="Search Any thing"/>
            <button>Search</button>
        </form>
    </div>
  );
}

export default Navbar;
