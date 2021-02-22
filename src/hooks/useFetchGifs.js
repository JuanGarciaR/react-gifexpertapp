import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // // Para que se renderice una vez el componente y no cada vez que haya un cambio en el mismo
    useEffect( () => {
        getGifs( category )
        .then( imgs => {
            setstate( {
                data: imgs,
                loading: false
            });
        } )
    }, [ category ]);


    return state; 
}
