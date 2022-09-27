import { useEffect, useState } from 'react';
import { MilSec } from './TimerMilSec';

export default function TimerContainer() {

    const [sec, setSec] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    const [play, setPlay] = useState(false);
    const [reset, setReset] = useState(false); 

    const secondActivate = (value) => {
        if(value < 60){
            setSec(value);
        }
        else{
            setSec(0);
            setMinute(minute + 1);
        }
        if(minute > 60){
            setMinute(0);
            setHour(hour + 1);
        }
    }

    function resetTimer(){
        setSec(0);
        setMinute(0);
        setReset(true);
    }

    
    function setResetTimer(){
        setReset(false);
    }

    const setZero = (value)=>{
        let str = value+"";
        if(str.length < 2){
            str = "0"+str;
        }

        return str;
    }
    
    return (
        <>
            <h1>Cronometro</h1>
            <div>
                <label> Hrs </label>
                <label> Min </label>
                <label> Seg </label>
                <label> Ms </label>
            </div>
            <div>
            {setZero(hour)} : {setZero(minute)} : {setZero(sec)} : <MilSec secondActivate={secondActivate} sec={sec} play={play} reset={reset} setResetTimer={setResetTimer} setZero={setZero}/>
            </div>
            <div>
                <button onClick={()=>setPlay(!play)}>{(!play)?"Play":"Pausa"}</button>
                <button onClick={()=>resetTimer()}disabled={play}>Stop</button>
            </div>
        </>
    )
}