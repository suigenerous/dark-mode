import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    debugger;
    const [storedValue, setStoredValue] = useState(() => {
        debugger;
        if (window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        else{
            return initialValue;
        }
        });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

      return [storedValue, setValue];
}

export default useLocalStorage;