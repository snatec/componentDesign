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
    
    return {insertNode};
};

export default useTraverseTree;