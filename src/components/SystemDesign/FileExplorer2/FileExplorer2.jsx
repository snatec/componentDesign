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

    const {insertNode, deleteNode, updateNodeToFolder} = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, item, folderId, isFolder);
        setExplorerData(finalTree);
    }

    const handleDeleteNode = (id) => {
        const finalTree = deleteNode(explorerData, id);
        setExplorerData(finalTree);
    }

    const handleConvertToFolder = (id) => {
    const finalTree = updateNodeToFolder(explorerData, id);
    setExplorerData(finalTree);
    };

    return(
        <div>
            <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleConvertToFolder={handleConvertToFolder}/>
        </div>
    )
}

export default FileExplorer2;

//create this Folder component as different file! else you no need to pass these explorerData as prop, since its in same file
// we can use directly instead of passing them as props.

const Folder = ({explorerData, handleInsertNode, handleDeleteNode, handleConvertToFolder}) => {
    
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
                <button style={{marginRight: '25px'}} onClick={()=> handleDeleteNode(explorerData.id)}>Delete folder</button>
                <button onClick={()=> handleNewFolder(false)}>Add file</button>
                <button onClick={()=> handleDeleteNode(explorerData.id)}>Delete file</button>
            </div>
            <div style={{display : expand ? 'block' : 'none', paddingLeft: '25px'}}>
                {
                    showInput.visible && 
                    <div className='inputContainer' style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
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
                        <Folder key={index} explorerData={item} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleConvertToFolder={handleConvertToFolder}/>
                    )
            })}
            </div>
        </div>)
        else{ 
            return (
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <span className='file' onDoubleClick={() => handleConvertToFolder(explorerData.id)}>📄 {explorerData.name}</span>
                    <button onClick={() => handleDeleteNode(explorerData.id)}>
                        Delete
                    </button>
                </div>
            );
        }
    
}