import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    })
    const prev = prevCount.current
    return (
        <>
        <h1>Now: {count}, prev: {prev}</h1>
        <button onClick={() => setCount(count + 1 )}>click</button>
        </>
    )
}

export default Home