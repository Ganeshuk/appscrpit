import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [items,setitemcount]=useState(0)
  const [show,setshow]=useState(true)
  const [load,setload]=useState(true)
  const [list,setlist]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((re)=>{
      return re.json()
    })
    .then((re)=>{
      console.log(re)
      setitemcount(re.length)
      setlist(re)
      setload(!load)
    })
  },[])
  const get=()=>{
    setshow(!show)
  }
  return (
    <div className="App">
     <nav>
      <div className="nav-content">
      <>
      <img className='im'  src="https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/Logo.jpg?alt=media&token=3bbb1edb-4f55-4737-b796-abd0b1b18f15" alt="nav-logo"/></>
      <h1>LOGO</h1>
      <>
      <img className='im' src="https://firebasestorage.googleapis.com/v0/b/imgdemo-f413d.appspot.com/o/Icons.jpg?alt=media&token=71916b68-3947-4b7f-994f-4c3a46c4bb8e" alt="icons"/>
      </>
      </div>
      <div className="nav-heading">
      <h1 className="h1">SHOP</h1><h1 className="h1">SKILLS</h1><h1 className="h1">STORIES</h1><h1 className="h1">ABOUT</h1><h1 className="h1">CONTACT US</h1></div>
     </nav>
     <div className="content">
      <h1 className="head">DISCOVER OUR PRODUCTS</h1>
      <p className="p">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
     </div>
     <hr/>
     <div className='filter'>
      
      <p><span>{items}</span>ITEMS</p>
      <p onClick={get}>{show?"HIDE FILTER":"SHOW FILTER"}</p>
      <p>RECOMMENED</p>
     
     </div>
     
     <div className='final-part1'>
      {show? <div className='final'>
        
        <>
        <h4>IDEAL FOR</h4>
        <p>ALL</p>
        </>
        <hr/>
        <>
        <h4>OCCASION</h4>
        <p>ALL</p>
        </>
        <hr/>
        <>
        <h4>WORK</h4>
        <p>ALL</p>
        </>
        <hr/>
        <>
        <h4>FABRIC</h4>
        <p>ALL</p>
        </>
       </div>:""
}
    
     <div>
      {load?"Loading....":
      <ul type="none">
        {list.map((each)=>(<li><img className='item-img' src={each.image} alt=""/>
        <p>{each.title}</p></li>))}
        </ul>}
     </div>
    
     </div>
    </div>
  );
}

export default App;
