
function App() {

  return (
    <main className="relative  w-screen h-screen bg-blue-50">

      <section className="navbar w-full border-b-[0.5px] border-blue-950/20 h-[10vh] flex px-10 py-2 justify-between items-center">
        <h1 className="font-brolimo font-semibold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400">TinyTrail</h1>
        <button className=" px-5 py-2 bg-blue-500 text-lg w-auto  font-semibold text-blue-50 font-brolimo tracking-wider rounded-md ">Github</button>
      </section>

      <section className="InputArea absolute z-50 flex justify-center items-center   w-full h-[70vh] ">
        <div className="relative h-full w-[90%]  md:w-lg flex flex-col gap-3 mx-auto  px-3 py-4 ">
          <h1 className="w-auto text-4xl sm:text-5xl font-extrabold font-brolimo mt-10 text-wrap text-center ">Welcome to TinyTrail</h1>
          <h2 className="w-auto text-3xl sm:text-4xl font-semibold font-brolimo text-wrap text-center ">A url shortener application</h2>

          <div className="InputField absolute bottom-0 left-0 flex justify-evenly  items-center flex-col gap w-full  h-[40%] px-4 py-2 mx-auto">
            <div className="w-full h-[50%]  flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold font-brolimo text-start w-full tracking-wider mb-3">Enter your url here:</h1>
            <input className=" w-full border-[0.5px] rounded-md h-[50%] bg-blue-500/10 text-black  border-x-blue-600/10 border-y-blue-500/20" type="text" />
            </div>
            <button className="w-auto h-auto bg-blue-500 text-white border-[0.5px] text-xl border-x-blue-950/20 border-y-blue-700/30 rounded-md font-brolimo font-semibold tracking-wider py-2 px-6 ">Submit</button>
          </div>
        </div>
      </section>

      <section className="gradiiEffect z-40 w-screen h-screen bg-gradient-to-t from-blue-200  to-transparent absolute bottom-0"></section>
    </main>
  )
}

export default App
