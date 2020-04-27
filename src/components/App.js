import React from "react";
import Card from "./Card";
import faker from "faker";



const App = ()=>{
    return(
        <div>
          
            <Card image={faker.image.cats()} />
            <Card image={faker.image.animals()} />

            
            
            

        </div>
    )
}

export default App;