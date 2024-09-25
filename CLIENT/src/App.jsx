
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { uploadFile } from './API/Api';

function App() {
  const [file,setFile]=useState('')
  const [result,setResult]=useState([])
  const fileRef=useRef();
 const handleClick=()=>{
    fileRef.current.click();
 }
 console.log(file)
 useEffect(()=>{
    const getImage=async()=>{
        if(file){
          const data=new FormData();
          data.append('name',file.name);
          data.append('file',file)

         const res=await uploadFile(data)
        //  console.log(res)
         setResult(res.path)
        }
    }
    getImage();
 },[file])
  return (
    <>
     <div className='container'>
          <div className="card">
            <h3>Welcome To CreateLink</h3>
            <p>Click on the following button to upload your file and create Link <Link:touch></Link:touch></p>
            <button onClick={handleClick}>Upload File </button>
            <input type="file"
              ref={fileRef}
              style={{display:"none"}}
              onChange={(e)=>setFile(e.target.files[0])}
             />
            <div className='result'>
              <p>Share the download link</p>
            <a href={result} className='link'>{result}</a>
            </div>
           
          </div>
     </div>
    </>
  )
}

export default App
