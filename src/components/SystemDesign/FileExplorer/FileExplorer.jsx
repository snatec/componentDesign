import React, { useState } from 'react';
import './FileExplorer.css';
import json from './data.json';

//Nested folder structure
//Expand and collapse only for folders
// Add and delete

const FileExplorer = () => {

    const[data,setData] = useState(json);

    const addNodeToList = (parentId) => {
        const name = prompt(name);

        const updatedTree = (list) => {
            return list.map(node => {
                if(node.id == parentId){
                    return {
                        ...node,
                        children: [
                            ...node.children,
                            {id: Date.now(), name: name, isFolder: true, children: []},
                        ]
                    }
                }
                if(node.children){
                    return {
                        ...node, children: updatedTree(node.children)
                    }
                }
                return node;
            })
        }

        setData((prev)=> updatedTree(prev));
    }

    const deleteNodeToList = (id) => {
        const updatedTree = (list) => {
            return list.filter(node => node.id !== id).map(node => {
                if(node.children){
                    return {
                        ...node,
                        children: updatedTree(node.children)
                    }
                }
                return node;
            });
        }
        setData((prev)=> updatedTree(prev));
    }

    return(
    <div>
      <h1>File Folder Structure</h1>
      <div className='fileFolderContainer'>
      <List data={data} addNodeToList={addNodeToList} deleteNodeToList={deleteNodeToList}/>
      </div>
    </div>
    );
}

export default FileExplorer;

//Reccursion

const List = ({data, addNodeToList, deleteNodeToList}) => {

    const [expandedFolders, setExpandedFolders] = useState({});

    const toggle = (id) => {
        setExpandedFolders((prev) => ({
        ...prev,
        [id]: !prev[id],
        }));
    };

    return (
        <div className='listContainer'>
         {data.map((item) => 
            (
                <div key={item.id}>
                    {item.isFolder && 
                    <span 
                        className='icon'
                        onClick={() => item.isFolder && toggle(item.id)}
                        >
                            {expandedFolders[item.id] ? '-' : '+'}
                    </span>
                    }
                    <span>{item.name}</span>
                    {item.isFolder && <span className='ADDicon' onClick={()=> addNodeToList(item.id)}>Add</span>}
                    {<span className='ADDicon' onClick={()=> deleteNodeToList(item.id)}>Delete</span>}
                    {item.children && expandedFolders[item.id] && <List data={item.children} />}
                </div>
            ))}
        </div>
    )
}

// expandedFolders is an object that keeps track of which folders are opened.

// Example:
//prev is
// {
//   1: true,   // folder with id 1 is open
//   3: false,  // folder with id 3 is closed
//   5: true
// }