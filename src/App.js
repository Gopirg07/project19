import './App.css';
function App() {
  const names=[
    {name:"Gopinath",img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"},
    {name:"Gopi",img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"},
    {name:"Nth",img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"}
  ]

  return (
    <div className="App"> 
    {names.map((nm)=> (
      <Welcome name={nm.name} img={nm.img}/>
    ))} 
    </div>
  );
}

function Welcome({name,img}){
  return(
    <section className="sec1">
      <img className="propic" src={img} alt={name}/> 
      <h1 className="name">Hello <span className="bold">{name}</span></h1>
  </section>
  );
}
export default App;