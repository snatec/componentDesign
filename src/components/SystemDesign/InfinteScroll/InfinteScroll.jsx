import React, { useEffect, useState } from 'react';
import PostData from './PostData';

const InfinteScroll = ({pageSize}) => {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        
        setLoading(true);
        const arr = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=${pageSize}`);
        const json = await arr.json();

        setData(prev => [...prev, ...json]);
        setLoading(false);
    }
    
    useEffect(()=> {
        fetchData();
    },[pageNo])

    return (
        <PostData data={data} setPageNo={setPageNo} loading={loading}/>
    )
}

export default InfinteScroll