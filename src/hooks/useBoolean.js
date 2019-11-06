import { useState } from "react";

export default function(initialValue){
    const [value, setValue] = useState(initialValue);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    return {
        value,
        setTrue,
        setFalse
    }
}