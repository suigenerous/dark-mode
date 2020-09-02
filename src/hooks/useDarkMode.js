import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkEnabled, setDarkEnabled] = useLocalStorage(key, initialValue);
    debugger;
    return [darkEnabled, setDarkEnabled];
}

export default useDarkMode;
