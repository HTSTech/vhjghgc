
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  
  export default function Header() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/9b937a0a-2f54-487e-a4a1-589af95ae076/vhjghgc/Header/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HeaderID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/9b937a0a-2f54-487e-a4a1-589af95ae076/vhjghgc/Header/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HeaderID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/9b937a0a-2f54-487e-a4a1-589af95ae076/vhjghgc/Header/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HeaderID'>
      </div>
    )
  }