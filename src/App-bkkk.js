import Header from "./components/Header";
import Meme from "./components/Meme";
import { useState } from 'react';
import boxes from "./boxes"
import Box from "./components/Box"

const App = () => {
    
    return (
        <div className="max-w-xl mx-auto">
            <Header />
            <Meme />            
        </div>
    )
}

export default App;