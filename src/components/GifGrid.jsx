import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "../components";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );

    return (
        <>
           {
               isLoading && (<h2>LOADING...</h2>)
           }
            <h3>{ category }</h3>

            <div className="card-grid">
                { images.map( image => (
                    <GifItem 
                        key={ image.id } 
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}