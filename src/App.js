import { useState } from 'react';
import boxes from "./boxes"
import Box from "./components/Box"

const App = () => {
    const [squares, setSquares] = useState(boxes)
    
    function toggle(id) {
        //console.log(id)
        setSquares( prevSquares => {
            // const index = prevSquares.findIndex( item => item.id === id)
            return prevSquares.map( item => {
                let currentItem = {...item}
                if(item.id === id) {
                    currentItem.on = !item.on
                }
                return currentItem
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))

    return (
        <div className="max-w-md mx-auto">
            <section className="flex flex-wrap">
                {squareElements}
            </section>
            
        </div>
    )
}

export default App;