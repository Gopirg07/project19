import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react"; 
import { Movielist } from './Movielist';


function App() {
  // const names=[
  //   {name:"Gopinath",img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"},
  //   {name:"Gopi",img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"},
  //   {name:"Nath",img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"}
  // ]

  return (
    <div className="App">  
    {/* <Movielist/> */}

    <ul>
      <li>
      <Link to={"/"}>Home</Link>
      </li>
      <li>
      <Link to={"/Moviess"}>Moviess</Link>
      </li>
      <li>
      <Link to={"/Add"}>Add</Link>
      </li>
    </ul>
    <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/Moviess" element={<Movielist />} /> 
        <Route path="/Films" element={<Movielist />} /> 
        <Route path="/Add" element={<Addcolor />} /> 
      </Routes>
    </div>
    
  );
}

function Home(){
  return(
    <h1>Welcome To The Movie App</h1>
  )
}

function Addcolor(){
  const [color,setColor]=useState("red");
  const [colorList, setColorList] = useState(["grey","black","pink","blue","yellow"])
  const styles={
    background:color,
  }
  return(
    
    <div>
      <input 
        onChange={(event)=>setColor(event.target.value)}
        style={styles}
        placeholder='Enter the color you want'
        value={color}
      />
      <button onClick={()=>setColorList([...colorList,color])}>add</button>
      {colorList.map((mn)=> <Colorbox colorr={mn}/> )}
    </div>

  );
}
function Colorbox({colorr}){
  const styles={
    background:colorr,
    height:"50px",
    width:"250px",
  }
  return(
    <div style={styles}> </div>
  );
}

function Counter(){
  let [like,setLike]= useState(0);
  let[dis,setDis]=useState(0);
  return(
    <div>
      <button onClick={()=> setLike(like+1) }>👍{like}</button>   
      <button onClick={()=>setDis(dis+1)}>👎{dis}</button>
    </div>
  );
}

function Welcome({name,img}){
  return(
    <section className="sec1">
      <img className="propic" src={img} alt={name}/> 
      <h1 className="name">Hello <span className="bold">{name}</span></h1>
      <Counter />
  </section>
  );
}
export default App;
