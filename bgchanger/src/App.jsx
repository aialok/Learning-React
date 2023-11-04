import { useState } from "react"

export default function App() {

  const [color, setColor] = useState('olive')

  const colorChange = (e) => {

    setColor((prev)=>prev=e.target.innerText.toLowerCase())
    console.log(e.target.innerText)
   

  }

  
  document.body.style.backgroundColor = color;
  const colorName= ["Red","Green","Blue","Orange","Yellow","Purple","Pink","Brown", "Gold"]
  

  return (
    <>
    
      <div className="flex justify-around items-center  bg-white p-4 ">
        
{/* 
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Red</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Green</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Blue</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Orange</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Yellow</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Purple</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Pink</button>
        <button  className="border-2 border-black px-4 py-2 hover:bg-slate-200 hover:text-black rounded-md text-xl"  onClick={colorChange}>Brown</button> */}

       { colorName.map((color, index)=>{
           return <button key = {index} className={`border-2 border-black px-4 py-2   hover:bg-slate-200 hover:text-black rounded-md text-xl  `}  onClick={colorChange}>{color} </button>
        })}


      </div>
    </>
  )
}