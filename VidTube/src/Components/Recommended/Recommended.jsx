import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../Data'


const Recommended = ({categoryId}) => {

    const [apiData,setApiData] = useState([]);

    const fetchData = async ()=>{
        // const relativeVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        const relativeVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relativeVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))

    }

    useEffect(()=>{
        fetchData();
    },[])
    console.log(apiData);
  if(!apiData || apiData.length===0) return <>Loading...</>
  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return(
            <div className="side-video-list" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>Best Channel that help you to be a web Developer</h4>
                <p>GrestStack</p>
                <p>199k Views</p>
            </div>
             </div>
            )
        })}
        
    </div>
  )
}

export default Recommended
