import './App.css';
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
    {/* {names.map((nm)=> (
      <Welcome name={nm.name} img={nm.img}/>
    ))}  */}


    <Movielist/>

    {/* <Addcolor/> */}

    </div>
    
  );
}

function Addcolor(){
  const [color,setColor]=useState("red");
  const styles={
    background:color,
  }
  return(
    
    <div>
      <input 
        style={styles}
        onChange={(event)=>setColor(event.target.value)}
        placeholder='Enter the color you want'
        value={color}
      />
    </div>

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
