import { useState } from 'react';

// component = function that returns JSX
function Greeting({ name, age }) {
    return <h2>Hello, I am {name} and I'm {age} years old!</h2>
}

// main component (simply function, but we don't call that)
export default function Basic() {
    const name = getName();
    const age = 21;

    const [showGreeting, setShowGreeting] = useState(false);
    function toggleGreeting() {
        /* if (showGreeting) {
            setShowGreeting(false)
        } else {
            setShowGreeting(true);
        } */
        setShowGreeting(!showGreeting);	
    }
    // console.log(showGreeting);

    return (
        <>
            <div>
                <button style={{ width:"12rem" }} onClick={toggleGreeting}>Toggle Greet Me</button>
                {showGreeting && <Greeting name="tobeh ami true" age={24} />}
                {showGreeting || <Greeting name="ami false" age={400} />}
            </div>

            {/* <h1>Hello world, I am {name} and I am {age} years old</h1>
            <p>Heyy</p> */}
            <Greeting name="John" age={30} />
            <Greeting name={"Leomard"} age='34' />
            {showGreeting && <Greeting name="greet nai" age={21} />}
            {showGreeting ? <button style={{ width:"100px" }}>Click</button> : <Greeting name="Ajne" age={21} />}

        </>
    );
}

function getName() {
    return 'Jack';
}