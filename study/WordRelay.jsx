const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('효주');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const onRef = useRef(null);

    const onSubmit =(e) => {
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setResult('정답');
            setWord(value);
            setValue('');
            onRef.current.focus();
        } else{
            setResult('땡');
            setValue('');
            onRef.current.focus();
        }
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
        <div>{word}</div>
        <form onSubmit={onSubmit}>
            <input ref={onRef} value={value} onChange={onChange} />
            <button>입력</button>
        </form>
        <div>{result}</div>
        </>
    )
}

module.exports = WordRelay;