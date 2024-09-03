import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [counter, setCounter] = useState(0)

    // useEffect( () => {
    //     console.log("Updating", counter)
    //     return () => {
    //         console.log("Unmounting");
    //     }
    // }, [counter])


    const handleMouseMove = (Event) => {
        console.log("X",Event.pageX, "Y",Event.pageY);
    }

    useEffect ( () => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])


  return (
    <div className='flex h-screen justify-center items-center'>
        {/* <button onClick={() => setCounter(counter + 1)}>Click [{counter}]</button> */}
    </div>
  )
}

export default Effect;
