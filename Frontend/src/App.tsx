import { useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios";

function App() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async()=>{
    try{  
      alert("sending url")  
      await axios.post('http://localhost:3000/', {
        url
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("url sent");
    }catch(e){
      console.log(e)
      alert("some error occured, please try again after some time  ")
    }
  }

  return (
    <main className="relative  w-screen h-screen bg-blue-50">

      <Navbar/>

      <section className="InputArea absolute z-50 flex justify-center items-center   w-full h-[70vh] ">
        <div className="relative h-full w-[90%]  md:w-lg flex flex-col gap-3 mx-auto  px-3 py-4 ">
          <h1 className="w-auto text-4xl sm:text-5xl font-extrabold font-brolimo mt-10 text-wrap text-center ">Welcome to TinyTrail</h1>
          <h2 className="w-auto text-3xl sm:text-4xl font-semibold font-brolimo text-wrap text-center ">A url shortener application</h2>

          <div className="InputField absolute bottom-0 left-0 flex justify-evenly  items-center flex-col gap w-full  h-[40%] px-4 py-2 mx-auto">
            <div className="w-full h-[50%]  flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold font-brolimo text-start w-full tracking-wider mb-3">Enter your url here:</h1>
            <input onChange={(e)=>{
              setUrl(e.target.value)
            }} className=" w-full border-[0.5px] rounded-md h-[50%] bg-blue-500/10 text-black  border-x-blue-600/10 border-y-blue-500/20" type="text" />
            </div>
            <button onClick={handleSubmit} className="w-auto h-auto bg-blue-500 text-white border-[0.5px] text-xl border-x-blue-950/20 border-y-blue-700/30 rounded-md font-brolimo font-semibold tracking-wider py-2 px-6 ">Submit</button>
          </div>
        </div>
      </section>

      <section className="gradiiEffect z-40 w-screen h-screen bg-gradient-to-t from-blue-100 via-slate-50 to-transparent absolute bottom-0"></section>
    </main>
  )
}

export default App
