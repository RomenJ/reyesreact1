import logo from './logo.svg';
import foto1 from './img1.jpg';
import foto2 from './img2.jpg';
import foto3 from './img3.jpg';
import './App.css';

function App() {
  
  let textos=['Betty Carnage','Allyson Crowley ','Herzebeth Bathory'];
  return (
    <div className="App">

   
      <div className="div1">
      <img src={foto1} className="fotos" alt="logo" />

      <p>{textos[0]} </p>
      </div>
        
     
        
        
        <div className="div1">
        <img src={foto3} className="fotos" alt="logo" />        
        <p>{textos[1]} </p>
      </div>

      <div className="div1 col">
      <img src={foto2} className="fotos" alt="logo" />  
      <p>{textos[2]}</p>
      </div>
      
   
  

        
    </div>
  );
}

export default App;
