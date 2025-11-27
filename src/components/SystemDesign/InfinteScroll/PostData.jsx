import React, {useEffect} from 'react';
import './PostData.css'

const PostData = ({data, setPageNo, loading}) => {

    // will tell observer when 3rd img come in view, change pageno to pageno+ 1

    useEffect(() => {
    if (!data.length || loading) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        setPageNo(prev => prev + 1);
      }
    },{threshold: 0.5}); // 0.5 means 50% came in view , 1 means 100% came in view

    const lastImage = document.querySelector('.postImg:last-child');
    if (lastImage) observer.observe(lastImage);

    return () => observer.disconnect(); // cleanup
  }, [data]);

    return(
        <div className='container'>
            {data.map((item,index) => 
             (<div key={item.id} className='postImg'>
             <img src={item && item.download_url} width={200}/>
             {!loading && <span>{item.id}</span>}
             </div>
             ))}

      {loading && (
        <div className="loader">Loading...</div>
      )}

        </div>
    )
}

export default PostData;