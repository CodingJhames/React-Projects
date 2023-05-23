import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'James',
        email:"james@google.com"
    });

    const { email, username } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value,
        } )
    };

    useEffect(() => {
        // console.log("useEffect called!" )

    },[] );
    
    useEffect(() => {
        // console.log("formState changed!" )

    }, [formState]);

    useEffect(() => {
        // console.log("Email changed!" )

    }, [ email ] );

  return (

    <>
        <h1>SimpleForm</h1>
        <hr />

        <input 
            type="text"
            className="form-control" 
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="text"
            className="form-control mt-2" 
            placeholder="james@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {  
            username === "James2" && <Message />
        }

    </>

    
  )
}
