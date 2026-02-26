import React, { useState } from 'react';
// import InfiniteScroll from './InfiniteScroll';

export default function App() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const pageSize = 5;

  const fetchApi = async (page) => {
  try {
    setIsLoading(true);

    const resp = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${pageSize}`
    );
    const json = await resp.json();

    setData((prev) => [...prev, ...json]);

    if (!json.length) {
      setHasMore(false);
    }
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div>
      <h1>Infinite Scroll</h1>

      <InfiniteScroll
        page={pageNo}
        setPage={setPageNo}
        hasMore={hasMore}
        isLoading={isLoading}
        fetchItems={fetchApi}
        itemsList={data.map((item) => (
          <div key={item.id}>
            <img src={item.download_url} width={200} />
          </div>
        ))}
      />

      {isLoading && <p>Loading...</p>}
    </div>
  );
}

const InfiniteScroll = (props) => {
  const { fetchItems, itemsList, isLoading, hasMore, page, setPage } = props;

  const fetchingRef = useRef(false);

  // Call API when page changes
  useEffect(() => {
    if (page && hasMore) {
      fetchingRef.current = true;

      fetchItems(page).finally(() => {
        fetchingRef.current = false;
      });
    }
  }, [page, hasMore]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 100;

      if (nearBottom && !fetchingRef.current && hasMore) {
        fetchingRef.current = true; // lock immediately
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return <div>{itemsList.map((item) => item)}</div>;
};