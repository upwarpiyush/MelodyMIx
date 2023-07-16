import React, { useState, useEffect } from 'react'
import apiClient from '../spotify';
import WidgetCard from './WidgetCard';

const Widgets = ({ artistID }) => {

    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [newRelease, setNewRelease] = useState([]);

    // const id = artistID?.artists[0]?.id;

    // console.log(similar);

    useEffect(()=>{
        if(artistID)
        {
            apiClient
            .get(`/artists/${artistID}/related-artists`)
            .then((response) => {
                const arti = response.data?.artists.slice(0,3);
                setSimilar(arti);
            })
            .catch((err)=> console.error(err));
    
    
            apiClient
            .get(`/browse/featured-playlists`)
            .then((response) => {
                const play = response.data?.playlists.items.slice(0,3);
                setFeatured(play);
            })
            .catch((err)=> console.error(err));
    
    
            apiClient
            .get(`/browse/new-releases`)
            .then((response) => {
                const albu = response.data?.albums.items.slice(0,3);
                setNewRelease(albu);
            })
            .catch((err)=> console.error(err));
        }
        // apiClient
        // .get(`/artists/${artistID}/related-artists`)
        // .then((response) => {
        //     const arti = response.data?.artists.slice(0,3);
        //     setSimilar(arti);
        // })
        // .catch((err)=> console.error(err));


        // apiClient
        // .get(`/browse/featured-playlists`)
        // .then((response) => {
        //     const play = response.data?.playlists.items.slice(0,3);
        //     setFeatured(play);
        // })
        // .catch((err)=> console.error(err));


        // apiClient
        // .get(`/browse/new-releases`)
        // .then((response) => {
        //     const albu = response.data?.albums.items.slice(0,3);
        //     setNewRelease(albu);
        // })
        // .catch((err)=> console.error(err));
    },[artistID]);


    
  return (
    <div className='w-full h-3/6 mx-[2%] my-[3%] bg-gradient-to-t from-gray-800  rounded-lg flex justify-evenly items-center '>
        {/* backdrop-blur-sm */}
        <WidgetCard title="Similar Artists" similar={similar}/>
        <WidgetCard title="For You" featured={featured}/>
        <WidgetCard title="New Releases" newRelease={newRelease}/>


    </div>
  )
}

export default Widgets