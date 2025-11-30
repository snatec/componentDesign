import React, {useState, useEffect, useRef} from 'react';

export default function App() {
const pageSize = 5;
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] =  useState(0);
    
    const fetchData = async() => {
        setLoading(true);
           const data = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=${pageSize}`)
          const json = await data.json();
        setData(prev => [...prev, ...json]);
         setLoading(false);
    }

    useEffect(()=> {
        fetchData();
    },[pageNo]);
    
    return (
        <div>
            <InfinteScroll data={data} loading={loading} setPageNo={setPageNo} />
        </div>
    )
}

const InfinteScroll = ({data, loading, setPageNo}) => {

    useEffect(()=> {
        if(!data || data.length == 0 || loading) return;

        const observer = new IntersectionObserver((enteries)=> {
            const entry = enteries[0];
        if(entry.isIntersecting && entry.target.getBoundingClientRect().bottom > window.innerHeight){
            observer.unobserve(entry.target);
            setPageNo(prev => prev+1);
        }
            // console.log("entries",entry, window.innerHeight);
        },{threshold: 0.5});
        
        const lastImg = document.querySelector('.images:last-child');
        if(lastImg) observer.observe(lastImg);

        return ()=> {
            observer.disconnect();
        }
    },[data,loading])
    return (
        <div className='container'>
            {data && data.map((item)=> (
            <div className = 'images'>
                <img src= {item.download_url} width={200} height={200}/>
                <span>{item.id}</span>
            </div>
            ))}
        </div>
    )
}