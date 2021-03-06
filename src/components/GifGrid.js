import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    //Con los : podemos renombrar la variable data
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Cargando...</p> }

            <div className="card-grid">
                <ol>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img } 
                            />
                        ) )
                    }
                </ol>
            </div>
        </>
    )
}
