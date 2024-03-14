import {useState} from "react";

const useGreetings = () => {
    const [name, setName] = useState("");

    return {
        greet: () => {
            setName("Student");
        },
        name,
    };
};

export default useGreetings;