import React from 'react'
import '../App.css'
function Header(props){
  return(
    <div className='flex shopping-card'>
    <div onClick={() =>props.handleshow(false)}>Shopping Cart APP</div>
    <div onClick={() =>props.handleshow(true)}> Cart
    <sup>{props.count}</sup>

    </div>

    </div>
  );
}
export default Header;
