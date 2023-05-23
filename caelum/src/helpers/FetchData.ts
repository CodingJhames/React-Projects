import { useEffect, useState } from "react";



export function  FetchData( ) {

    const url :string = "https://api.scryfall.com/cards/random"; 
    const [data, setData] = useState();

    const fetchApi = async ( ) => {
        const resp = await fetch( url );
        console.log( resp.status );
        const responseJSON = await resp.json();
        setData( responseJSON );
        console.log( responseJSON );
    }

    useEffect(() => {
        fetchApi()
    }, [])
    
    return (
        Response
    );
}