import React, { useRef, useState ,useEffect,useMemo} from 'react'

function Parent() {
  const [search, setSearch] = useState("");
  const [items] = useState(["Apple", "Banana", "Cherry", "Grapes", "Mango"]);

  const filteredItems = useMemo(() => {
   
    return items.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
  }, [search, items]);  

  function handleClick(){
    if(search==="" || search===" "){
      return;
    }else if(items.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))){
      return;
    }else{
      items.push(search); 
      setSearch("")
    }
  }
  
  return (
    <div>
       <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='ml-2 px-2 border '
      onClick={handleClick}>add</button>
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Parent
