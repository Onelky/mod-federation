import useCount from "./store.ts";

const Button = () => {
    const [value, setValue] = useCount()
    return (
        <button onClick={() => setValue(value => value + 1)}>
            Click me d {value}
        </button>
    );
};

export default Button;