
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import { useState } from 'react';


const App = () => {
  const [product, setProduct]= useState([
    {
    url :"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/1/8/l/-original-imagqhswqgpwb2yu.jpeg?q=70",
    name: 'boAt Airdopes 131 with upto 60 Hours and ASAP Charge Bluetooth Headset  (Active Black, True Wireless)',
    quantity:'1 ',
    seller: 'Boat ',
    price: '₹999',

  },
  {
    url :"https://rukminim2.flixcart.com/image/832/832/xif0q/watch/u/f/a/-original-imagqhvfasrabd9r.jpeg?q=70",
    name: 'Digital Watch - For Boys & Girls Smartled watch',
    quantity:' 1',
    seller: 'Zovuta ',
    price: '₹1164',
  },
  {
    url :"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/c/o/d/9-black-line-9-kardam-sons-black-and-white-original-imaghxz6rv2uwhkp.jpeg?q=70",
    name: 'Fashionable Canvas Casual Partywear Outdoor Sneakers For Men  (Black)',
    quantity:'1',
    seller: 'kardam&sons ',
    price: '₹326',
  },
  {
    url :"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
    name: 'vivo T2x 5G (Marine Blue, 128 GB)  (6 GB RAM)#JustHere',
    quantity:'1',
    seller: 'dchdvd',
    price: '₹12,999',
  },
  {
    url :"https://rukminim2.flixcart.com/image/312/312/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70",
    name: 'Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)',
    quantity:'1',
    seller: 'Canon Os',
    price: '₹33,990',
  },
  {
    url :"https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
    name: 'Noise Buds VS102 with 50 Hrs Playtime, 11mm Driver, IPX5 and Unique Flybird Design Bluetooth Headset  (Midnight Blue, True Wireless)',
    quantity:'1',
    seller: 'Midnight Blue, True Wireless',
    price: '₹999',
  },
  {
    url :"https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/f/m/a/-original-imagvjyunrqfzgve.jpeg?q=70",
    name: 'Godrej 564 L Frost Free Side by Side Refrigerator  (Platinum Steel, RS EONVELVET 579 RFD PL ST)',
    quantity:'1',
    seller: 'Platinum Steel, RS EONVELVET 579 RFD PL ST',
    price: '₹54,990',
  },
  {
    url :"https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/l/n/p/-original-imagpfu3f6rgc4nt.jpeg?q=70",
    name: 'SAMSUNG 7 kg Diamond Drum Fully Automatic Top Load Washing Machine Silver  (WA70A4002GS/TL)',
    quantity:'1',
    seller: ' Washing Machine Silver',
    price: '₹15,790',
  },
  
])
const [cart, setCart]=useState([])
const [showCart, setShowCart]=useState(false)

const addToCart=(data)=>
{
  setCart([...cart,{...data,quantity:1}])
}
const handleshow =(value)=>{
  setShowCart(value);
}
  return (
   <div>
     <Header count={cart.length} handleshow={handleshow}></Header>
     {
      showCart ?
      <CartList cart={cart}></CartList>:
    <ProductList product={product} addToCart={addToCart}></ProductList>
     }
     
   </div>

  );
};

export default App;
