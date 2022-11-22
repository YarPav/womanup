import {addTask} from "../../services/FirebaseService";
import {useState} from "react";

const AddForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [executingDate, setExecutingDate] = useState('');
    const addFormSubmitHandler = (e) => {
        e.preventDefault();
        const task = {name, description, executingDate};
        // console.log(task);
        addTask(task);
    }
    const InputChangeHandler = (e, setFunc) => {
        setFunc(e.target.value);
    }

    return (
        <form onSubmit={addFormSubmitHandler}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => InputChangeHandler(e, setName)}/>
            <input type="text" placeholder="Description" value={description} onChange={(e) => InputChangeHandler(e, setDescription)}/>
            <input type="date" value={executingDate} onChange={(e) => InputChangeHandler(e, setExecutingDate)}/>
            {/*<input type="file"/>*/}
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddForm;