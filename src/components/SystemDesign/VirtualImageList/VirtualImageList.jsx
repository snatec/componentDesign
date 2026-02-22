// Normally: 1000 images → 1000 DOM nodes rendered, This causes: Slow scrolling,High memory usage,Poor performance
// We use virtualization (react-window) to render only visible items instead of the entire dataset. 
// This significantly reduces DOM nodes, improves scroll performance, and lowers memory usage. 
// Pagination handles network load, while virtualization handles rendering performance.

import React, { useEffect, useState, useRef } from "react";
import { List } from "react-window";

const Row = ({ index, style, data }) => {
  const item = data[index];
  if (!item) return null;

  return (
    <div style={{ ...style, padding: 10 }}>
      <img src={item.download_url} width="200" alt={item.author} />
      <p>{item.author}</p>
    </div>
  );
};

const VirtualImageList = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  const fetchData = async () => {
    if (loading) return;

    setLoading(true);
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=30`
    );
    const json = await res.json();

    setData(prev => [...prev, ...json]);

    setLoading(false);
  };

  useEffect(function () {
    fetchData();
  }, [pageNo]);

    // Observe bottom element
  useEffect(function () {
    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setPageNo(function (prev) {
          return prev + 1;
        });
      }
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return function () {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, []);

   return (
    <div>
      <List
        height={600}
        width={800}
        rowCount={data.length}
        rowHeight={250}
        rowComponent={Row}
        rowProps={{ data }}
      />

      {/* Sentinel element */}
      <div ref={bottomRef} style={{ height: 20 }} />

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default VirtualImageList;