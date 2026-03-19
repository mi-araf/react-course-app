import React, { use, useEffect, useState } from 'react';

var counter = {
    fontSize: '24px',
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 45%',
    width: '10%',
};
// mouting --> updating --> unmounting
const Stages = () => {
    const [showCounter, setShowCounter] = useState(false);

    return (
        <>
            <button onClick={() => setShowCounter(!showCounter)} style={counter}>Show Counter</button>
            {
                showCounter && <Counter />
            }
        </>
    );
};

function Counter() {
    const [count, setCount] = useState(0);
/**
 * 1st useEffect -> mouting
 * 2nd useEffect -> updating
 * return in 1st useEffect -> unmounting [removing the component]
*/
    useEffect(() => {
        console.log("mounted component");

        return () => {
            console.log("component unmounted");
        }
    }, [])

    // another useEffct with all the states to meke a independency of the above useeffect [whenever the count/anyState changes, this useEffect will be called]
    useEffect(() => {
        console.log("mounted component with updating!");
    }, [count])

    return(
        <button onClick={() => {setCount(count + 1)}} style={counter} className='counter'>{count}</button>
    );
}

export default Stages;