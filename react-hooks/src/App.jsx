import React , {createContext} from 'react';
import ComA from './ComA'


const FirstName = createContext();
const LastName = createContext();

const App =() =>{

    return (<>
    
        <FirstName.Provider value={'Context'}>
        <LastName.Provider value={'nested component'}></LastName.Provider>
        <ComA />
        </FirstName.Provider>


    </> 
    );
}

export default App ;
export {FirstName,LastName};