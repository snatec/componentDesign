import React, { useState } from 'react';
import './FileExplorer2.css';
import explorer from './data';
import useTraverseTree from './hooks/useTraverseTree';

//Nested folder structure
//Expand and collapse only for folders
// Add file, folder and delete

const FileExplorer2 = () => {
    const[explorerData, setExplorerData] = useState(explorer);
    console.log("explorerData:", explorerData);

    const {insertNode} = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, item, folderId, isFolder);
        setExplorerData(finalTree);
    }
    return(
        <div>
            <Folder explorerData={explorerData} handleInsertNode={handleInsertNode}/>
        </div>
    )
}

export default FileExplorer2;

//create this Folder component as different file! else you no need to pass these explorerData as prop, since its in same file
// we can use directly instead of passing them as props.

const Folder = ({explorerData, handleInsertNode}) => {
    
    const[expand, setExpand] = useState(false);
    const[showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (isFolder) => {
       setExpand(true);  
       setShowInput({
         visible: true,
         isFolder: isFolder
       })
    }

    const onAddNewFolder = (e) => {
       if(e.key == 'Enter'){
        //add logic
            handleInsertNode(explorerData.id, e.target.value, showInput.isFolder )
            setShowInput({...showInput, visible: false})
       }
    }


    if(explorerData.isFolder) 
    return(
        <div>
            <div style={{backgroundColor: '#cece', padding: '5px', marginTop: '5px'}}>
                <span className='folder' onClick={()=> setExpand(!expand)}>🗂️ {explorerData.name}</span>
                <button style={{marginLeft: '25px'}} onClick={()=> handleNewFolder(true)}>Add folder</button>
                <button onClick={()=> handleNewFolder(false)}>Add file</button>
            </div>
            <div style={{display : expand ? 'block' : 'none', paddingLeft: '25px'}}>
                {
                    showInput.visible && 
                    <div className='inputContainer' style={{display: 'flex', alignItems: 'centre', gap: '5px'}}>
                       <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
                       <input
                       type= 'text'
                       autoFocus
                       onBlur={()=> setShowInput({...showInput, visible: false})}
                       onKeyDown={(e)=> onAddNewFolder(e)}
                       />
                    </div>
                }
                {explorerData.items.map((item,index)=>{
                    // <span>{item.name}</span>
                    return(
                        <Folder key={index} explorerData={item} handleInsertNode={handleInsertNode}/>
                    )
            })}
            </div>
        </div>)
        else{ return(
            <span className='file'>📄 {explorerData.name}</span>
        )}
    
}