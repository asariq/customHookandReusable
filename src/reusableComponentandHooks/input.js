import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value: value,
        onChangeText: e => {
            setValue(e)
        }
    }
    return [value, bind, reset]
}

export default useInput;