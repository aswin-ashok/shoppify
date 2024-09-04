import React, { Fragment, useEffect, useState } from 'react'

const Effect = () => {

    // const [counter, setCounter] = useState(0)

    const [timer, setTimer] = useState(0)

    // useEffect( () => {
    //     console.log("Updating", counter)
    //     return () => {
    //         console.log("Unmounting");
    //     }
    // }, [counter])

    

    const handleMouseMove = (Event) => {
        console.log("X",Event.pageX, "Y",Event.pageY);
        setAxis({x:Event.pageX, y:Event.pageY})
    }

    const [axis, setAxis] = useState({x:0, y:0})

    useEffect ( () => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }

        // const interval = setInterval( () => {
        //     setTimer((timer) => timer + 1)
        // }, 1000);
        // return () => {
        //     clearInterval(interval)
        // }

    }, [])


  return (
    <Fragment>
        <div className='w-10 h-10 bg-black blur-lg fixed' style={{top:'${axis.y}px',left:'${axis.x}px'}}></div>
        <div className='flex h-screen justify-center items-center'>
            {/* <button onClick={() => setCounter(counter + 1)}>Click [{counter}]</button> */}
            {/* {timer} */}
        </div>
    </Fragment>
  )
}

export default Effect;
