import { useEffect, useState } from "react"
import { searchGifs } from "../services/GifService";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const imagesList = await searchGifs( category );
        setImages(imagesList)
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}