import React from 'react'

function Navbar() {
    return (
        <section className="navbar w-full border-b-[0.5px] border-blue-950/20 h-[10vh] flex px-10 py-2 justify-between items-center">
            <h1 className="font-brolimo font-semibold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400">TinyTrail</h1>
            <button className=" px-5 py-2 bg-blue-500 text-lg w-auto  font-semibold text-blue-50 font-brolimo tracking-wider rounded-md ">Github</button>
        </section>
    )
}

export default Navbar