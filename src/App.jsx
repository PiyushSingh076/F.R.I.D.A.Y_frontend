import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGenerator from './assets/components/ImageGenerator';
import AskAI from './assets/components/AskAi';
import Cook_now from './assets/components/Cook_now';

function App() {
  const [activeTab,setActiveTab]=useState('image-generator');

  function handleTabChange(tab){
    setActiveTab(tab);
  }
  
  return (
    
      <div className="App">
        <h1 >NovaAI</h1>
        <button className={activeTab==='image-generator'?'active':''}
                          onClick={()=>handleTabChange('image-generator')}>Image Generator</button>
        {/* if clicked on a button change its classname and apply that css */}

        <button className={activeTab==='AskAI'?'active':''}
                onClick={()=>handleTabChange('AskAI')}>AskAI</button>

        <button className={activeTab==='Cook_now'?'active':''}
                onClick={()=>handleTabChange('Cook_now')}>Cook Now</button>
        {/* //on clicking image acive tab is set to imagegenerators */}
        <div>
          {activeTab==='image-generator' && <ImageGenerator />}
          {activeTab==='AskAI' && <AskAI />}
          {activeTab==='Cook_now' && <Cook_now />}
        </div>
        {/* //if active tab is set to image generator then this */}
      </div>
  )
}

export default App;
