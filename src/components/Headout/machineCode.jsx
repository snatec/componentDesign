/** 
    ROUND 1: UI Coding + Domain 
 
    PROBLEM STATEMENT: Anime Catalog

    We want to build a anime catalog web application that retrieves and displays a list of characters
    [paginated]https://dattebayo-api.onrender.com/character/?page={pageNumber}

    enables users to search for character by name. 
     https://dattebayo-api.onrender.com/characters/?name={name}
     retain searched state -sharable
*/
import {useState,useEffect,useMemo} from 'react';
export default function App() {

    const pageSize = 5;

     const[data, setData] = useState([]);
    const[pageNo, setPageNo] = useState(0);
    const [input,setInput] = useState('');
    
    const fetchData = async()=> {
        const data = await fetch(`https://dattebayo-api.onrender.com/characters/?page=${pageNo}`);
        const json = await data.json();

        setData(json && json.characters);
    }

    const searchedList = async()=> {
            const data = await fetch(`https://dattebayo-api.onrender.com/characters/?name=${input}`);
             const json = await data.json();

              setData(json && json.characters);
    }

    useEffect(()=> {
        let timer;
        if(input.trim() == '')
        {
            fetchData();
        }
        else {
         timer = setTimeout(()=> {searchedList()}, 400);
        }
        return ()=> {
            clearTimeout(timer);
        }
        // else searchedList();
    },[input])
   
  return (
      <div>
          <h1>Search By Character Name</h1>
          {/* <AutoSearch width={400} data={data} setData={setData} pageSize={pageSize} pageNo={pageNo} setPageNo={setPageNo}/> */}
        <div>
            <input
                type =' text'
                placeholder = {'Search by Character Name'}
                style={{width: 400}}
                className='inputbox'
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                
            />
            <div className='resultContainer' style={{width: 400}}>
                {data && data.map((item,index) => (
                 <div key={item.id}>
                <div>{item.name}</div>
                     { item.images.map((item) => (<img src={item} width={200}/> ))}
                </div>
                ))}
            </div>
        </div>
      </div>
  )
}

// const AutoSearch = ({width, data, setData, pageSize, pageNo, setPageNo,}) => {
// console.log('data flow',data);
//     const [input,setInput] = useState('');
//     const filteredData = useMemo(()=> {

//         let result = [...data];
//         if(input.trim()== '') {
//             return result;
//         }
        
//         if(input.trim()!= ''){
//             result = result.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
//         }
//         return result;
//     })
//     return(
//         <div>
//             <input
//                 type =' text'
//                 placeholder = {'Search by Character Name'}
//                 style={{width:width}}
//                 className='inputbox'
//                 value={input}
//                 onChange={(e)=> setInput(e.target.value)}
                
//             />
//             <div className='resultContainer' style={{width: width}}>
//                 {filteredData && filteredData.map((item) => (
//                  <div>
//                 <div>{item.name}</div>
//                      { item.images.map((item) => (<img src={item} width={200}/> ))}
//                 </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
