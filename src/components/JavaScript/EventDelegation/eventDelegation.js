
document.querySelector("#categories").addEventListener('click', (e)=>{
    console.log("parent clicked",e.target.id);
    if(e.target.tagName == 'LI'){
     window.location.href = "/" + e.target.id
    }
})