import { useThrottle } from 'src/hooks/useThrottle';
import React, { useState, useEffect } from 'react';

const Throttle = () => {
    const [clickCount, setClickCount] = useState(0);
    const [clickCountThrottle, setClickCountThrottle] = useState(0);
    const throttledValue = useThrottle(clickCount, 1000);

    /* Handle the click button event */
    const onClickButton = () => {
        // console.log('Button is clicked!');
        setClickCount(clickCount + 1);
    }

    useEffect(() => {
        if (throttledValue) setClickCountThrottle(clickCountThrottle + 1);
    }, [throttledValue]);

    return (
        <div className="Container">
            <h2>Throttle</h2>
            <div className="Content">
                <button onClick={onClickButton}>Cliquez-moi</button>
            </div>
            <div className="Content">
                <div className="Result_Item">
                    <i>Nb. de click (sans throttle)</i><br />
                    <span>{clickCount}</span>
                </div>
                <div className="Result_Item">
                    <i>Nb. de click (avec throttle 1000ms)</i><br />
                    <span>{clickCountThrottle}</span>
                </div>
            </div>
        </div>
    )
}

export default Throttle;
