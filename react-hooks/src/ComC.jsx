import React from 'react';
import {FirstName} from './App';

const ComC = () =>{
    return (
        <>
            <FirstName.Consumer>
                {
                    (fname) =>{
                    return <h1> This is React - {fname}</h1>;
                    }
                }

            </FirstName.Consumer>
        
        </>
    )

}
export default ComC;
