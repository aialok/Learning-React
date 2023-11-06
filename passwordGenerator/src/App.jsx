import { useState, useCallback, useRef, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    setPassword(e.target.value);
    
  };


  // const generateRandomPassword = useCallback(() => {

  //   const numbers = "0123456789";
  //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  //   let password = "";
  //   let allowed = "";
  //   if(numberAllowed){
  //     allowed += numbers;
  //   }
  //   if(characterAllowed){
  //     allowed += characters;
  //   }
  //   for(let i=0; i<length; i++){
  //     password += allowed.charAt(Math.floor(Math.random()*allowed.length))
  //   }
  //   setPassword(password);
  // }, [
  //   length,
  //   numberAllowed,
  //   characterAllowed,
  //   setPassword
  // ])

  const generateRandomPassword = () => {

      const numbers = "0123456789";
      const characters = "!@#$%^&*()_+";
      let password = "";
      let allowed = "";
      if(numberAllowed){
        allowed += numbers;
      }
      if(characterAllowed){
        allowed += characters;
      }
      for(let i=0; i<length; i++){
        password += allowed.charAt(Math.floor(Math.random()*allowed.length))
      }
      setPassword(password);
  
     
  
    }


  const passwordCopyRef = useRef(null);



  const copyPasswordToClipboard = useCallback(()=>{
    passwordCopyRef.current.select();
    window.navigator.clipboard.writeText(passwordCopyRef.current.value)
  
  
  }, [password])

 

    // const copyPassword =()=>{
    
    //   navigator.clipboard.writeText(passwordCopyRef.current.value)
    // }

   useEffect(()=>{
    generateRandomPassword();
    
   }, [length, numberAllowed, characterAllowed, setPassword])
    


  return (
    <>
      <h1 className="text-6xl font-semibold text-white text-center my-10">
        Password Generator
      </h1>

      <div className="bg-gray-500 h-72 w-3/4 mx-auto rounded-md flex flex-col">
        <div className="flex items-center justify-center  ">
          <input
            type="text"
            className="text-black text-2xl w-1/2 my-10 p-2"
            value={password}
            onChange={onChange}
            ref={passwordCopyRef}
            
            placeholder="Generate Password"
          />{" "}
          <button className=" border-2 px-4 py-2 text-lg font-semibold bg-blue-600" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center  ">
          <input
            type="range"
            className="w-1/3"
            min="8"
            max="50"
            value={length}
            onChange={(e) => {setLength(e.target.value)
             }}
             
          />
          <p className="text-white font-semibold mx-2 text-xl">
            {" "}
            Length : {length}
          </p>
          <input type="checkbox" name="numberAllowed"  id="" onChange={()=>setNumberAllowed((prev)=>!prev)} 
          // onClick={changeCheckBox}
          />
          <label
            htmlFor="numberAllowed"
            className="text-white font-semibold mx-2 text-xl"
          >
            Numbers
          </label>
          <input type="checkbox" name="charAllowed" onChange={()=>setCharacterAllowed((prev)=>!prev)}
           />
          <label
            htmlFor="charAllowed"
            className="text-white font-semibold mx-2 text-xl"
          >
            Characters
          </label>
        </div>
      </div>
    </>
  );
}
