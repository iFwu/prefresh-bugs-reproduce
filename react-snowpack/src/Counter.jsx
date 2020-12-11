import React, {useState, useEffect} from "react"

import './Counter.css';

export default function Counter () {
    let [ count, setCount ] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(c => c + 1);
        }, 200);

        return () => {
            clearInterval(interval)
        };
    }, []);

    return <div class="Counter">Counter {count}</div>
}
