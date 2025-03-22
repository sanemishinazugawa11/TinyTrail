import { useRef, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios";

function App() {
  const [url, setUrl] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortUrlDisplay, setshortUrlDisplay] = useState<boolean>(false);
  const [shortUrl, setShortUrl] = useState<string>("");
  const [toast, setToast] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/', {
        url
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setToast(true)

      if (response.data.success) {
        setTimeout(() => {
          setShortUrl(response.data.shortUrl)
          setshortUrlDisplay(!shortUrlDisplay);
          setToast(false)
        }, 4000)

      }
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (e) {
      console.log(e)
      alert("some error occured, please try again after some time  ")
    }
  }

  return (
    <main className="relative  w-screen h-screen bg-blue-50">

      <Navbar />
      {
        toast ?
          <div className="shorturl transition-all duration-200 ease-linear absolute z-50 left-1/2 top-1/3 gap-3 flex flex-col justify-center items-center -translate-x-[50%]  rounded-md backdrop-md border-[0.5px] border-blue-500/20  w-auto px-8 py-2 h-auto">
            <h2 className="w-full font-semibold text-xl animate-bounce font-brolimo text-center">Loading</h2>

          </div> :
          <></>
      }

      {
        shortUrlDisplay ?
          <div className="shorturl transition-all duration-200 ease-linear absolute z-50 left-1/2 top-1/3 gap-3 flex flex-col justify-center items-center -translate-x-[50%] bg-blue-100/90 rounded-md backdrop-md border-[0.5px] border-blue-900/20 min-w-sm w-auto p-4 h-auto">
            <h2 className="w-full font-semibold text-xl font-brolimo text-center">{shortUrl}</h2>
            <button onClick={() => {
              setshortUrlDisplay(!shortUrlDisplay)
            }} className="bg-blue-500 text-white px-5 py-1 text-center w-auto rounded-md font-medium font-brolimo ">Close</button>
          </div>
          : <></>
      }

      <section className="InputArea absolute z-40 flex justify-center items-center   w-full h-[70vh] ">
        <div className="relative h-full w-[90%]  md:w-lg flex flex-col gap-3 mx-auto  px-3 py-4 ">
          <h1 className="w-auto text-4xl sm:text-5xl font-extrabold font-brolimo mt-10 text-wrap text-center ">Welcome to TinyTrail</h1>
          <h2 className="w-auto text-3xl sm:text-4xl font-semibold font-brolimo text-wrap text-center ">A url shortener application</h2>

          <div className="InputField absolute bottom-0 left-0 flex justify-evenly  items-center flex-col gap w-full  h-[40%] px-4 py-2 mx-auto">
            <div className="w-full h-[50%]  flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold font-brolimo text-start w-full tracking-wider mb-3">Enter your url here:</h1>
              <input ref={inputRef} onChange={(e) => {
                setUrl(e.target.value)
              }} className=" w-full border-[0.5px] rounded-md h-[50%] bg-blue-500/10 text-black  border-x-blue-600/10 border-y-blue-500/20 px-3 py-1" type="text" />
            </div>
            <button onClick={handleSubmit} className="w-auto h-auto bg-blue-500 text-white border-[0.5px] text-xl border-x-blue-950/20 border-y-blue-700/30 rounded-md font-brolimo font-semibold tracking-wider py-2 px-4 ">Submit</button>
          </div>
        </div>
      </section>

      <section className="gradiiEffect z-30 w-screen h-[50vh] bg-gradient-to-t from-blue-100 via-slate-50 to-transparent absolute bottom-0"></section>
    </main>
  )
}

export default App
