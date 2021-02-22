const urlBase = 'https://api.giphy.com/v1/gifs/';
export const getGifs = async( category ) => {

    const url = urlBase+`search?q=${ encodeURI( category ) }&limit=10&api_key=LO0p0Rwlj1cOV981oX7824SVvcEQRPP4`;

    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    });

    return gifs;

    
}