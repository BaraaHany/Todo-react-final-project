import React , {useState , useEffect , useRef} from 'react';

function Todoform(props) {
    const [input , setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

    const handlechange = (e) => {
        setInput(e.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('');
    }
  return (
    <form className='todo-form' onSubmit={handlesubmit}>
        {props.edit ? (
            <>
            <input 
            type={"text"}
            value={input}
            className='todo-input'
            placeholder='update a todo'
            name='text'
            onChange={handlechange}
            ref={inputRef} />
            <button className='todo-button'>Save</button>
            </>
        ) : 
            <>
            <input 
            type={"text"}
            value={input}
            className='todo-input'
            placeholder='Add a todo'
            name='text'
            onChange={handlechange}
            ref={inputRef} />
            <button className='todo-button'>Add Todo</button>
            </>
        }
    </form>
  )
}

export default Todoform;