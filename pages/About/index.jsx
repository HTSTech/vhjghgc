
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  import Header from "../Header/index";
  import Footer from "../Footer/index";
  
  export default function About() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/9b937a0a-2f54-487e-a4a1-589af95ae076/vhjghgc/About/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("AboutID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/9b937a0a-2f54-487e-a4a1-589af95ae076/vhjghgc/About/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("AboutID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/9b937a0a-2f54-487e-a4a1-589af95ae076/vhjghgc/About/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div>
        <>
          <Header />
        </>
        
        <div id='AboutID'></div>

        <>
          <Footer />
        </>
      </div>
    )
  }