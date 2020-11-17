import React from 'react';
import {FirstName, LastName} from './App';

const ComC = () =>{
    return (
        <>
            <FirstName.Consumer>
                {
                    (fname) =>{

                        return (
                            <LastName.Consumer>
                                {
                                   (lname) =>{return <h1> This is React - {fname} {lname}</h1>; } 
                                }
                            </LastName.Consumer>
                        )
                   
<<<<<<< HEAD
                    } 
=======
                    }
>>>>>>> 13479a066845424961f7558ba584b1da312b214d
                }

            </FirstName.Consumer>
        
        </>
    )

}
export default ComC;
