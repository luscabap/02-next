import { useState } from "react";
import {  Button } from "@skynexui/components";
import dynamic from 'next/dynamic';

const VideoComponent = dynamic(() => import("../src/components/Video"))

export default function Video(){
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div>
            <h2>Mostrar vídeo</h2>
            <Button 
                label="Alterar" 
                onClick={() => {setIsVisible(!isVisible)}}
            />
            {/* <input
                type="checkbox"
                onChange={() => {
                    setIsVisible(!isVisible)
                }}
            /> */}
            {isVisible && <VideoComponent />}
        </div>
    )
}
