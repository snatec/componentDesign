const useTraverseTree = () => {
    function insertNode(tree, item, folderId, isFolder){
         if(tree.id == folderId && tree.isFolder){
            tree.items.unshift({id: new Date().getTime(), name: item, isFolder:isFolder, items: [] })
            return tree;
         }

         let latestNode = [];
         latestNode = tree.items.map((obj) => {
            return insertNode(obj, item, folderId, isFolder)
         });
         return {...tree, items: latestNode};
    }

    function deleteNode(tree, folderId){
        if (!tree) return null;
        if(!tree.items) return tree;

        const filteredItems = tree.items.filter(item => item.id != folderId).map(item=> deleteNode(item, folderId));

        return{...tree, items: filteredItems};
    }

    function updateNodeToFolder(tree, nodeId) {
    if (!tree) return null;

    // If this is the node → convert file to folder
    if (tree.id === nodeId) {
        if (!tree.isFolder) {
            return {
                ...tree,
                isFolder: true,
                items: [] // initialize children
            };
        }
        return tree; // already folder
    }

    // If it's a file, just return
    if (!tree.items) return tree;

    // Traverse children
    const updatedItems = tree.items.map(item =>
        updateNodeToFolder(item, nodeId)
    );

    return {
        ...tree,
        items: updatedItems
    };
}
    return {insertNode, deleteNode, updateNodeToFolder};
};

export default useTraverseTree;