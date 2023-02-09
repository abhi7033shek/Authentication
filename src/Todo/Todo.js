
import { useState } from 'react';
import MainSection from './MainSection';
import SideNav from './SideNav';

function App(props) {
  const [active,setActive] = useState("INBOX")
  
  
  return (
    <div id='main'> 
    
    {props.name ? (
        <div>
          <header>
        <h1  className="welcome">Welcome {props.name}</h1>
       <div className='row'>
        <div className='column'>
            <SideNav change={setActive}/> 
        </div>
        <div className='column'>
            <MainSection active={active}/>
        </div>
        </div>
        
      </header>
      
        </div>
      ):"Login Again"}
      
    </div>
  );
}

export default App;