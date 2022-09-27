import { useEffect, useState } from 'react';

export function MilSec(props) {

    const [milSec, setMilSec] = useState(0);

    useEffect(() => {
        if(props.reset){
            props.setResetTimer();
            setMilSec(0)
        }
        if (props.play) {
            let milSecTemp = milSec;
            milSecTemp++;
            if (milSecTemp >= 10000) {
                let number = props.sec;
                number++;
                props.secondActivate(number);
                milSecTemp = 0;
            }
            setMilSec(milSecTemp);
        }
    })

    return (
        <>{props.setZero((milSec + "").substring(0, 2))}</>
    )

}