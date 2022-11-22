import {getTasks} from "../../services/FirebaseService";
import {useEffect, useState} from "react";
import ListItem from "../listItem/ListItem";

const List = () => {
    const [tasks, setTasks] = useState();
    useEffect(() => {
        getTasks().then(res => setTasks(res));
    }, []);
    console.log(tasks);
    return (
        <ul>
            {
                tasks?.map(task => (
                    <ListItem key={task.id} data={task}/>
                ))
            }
        </ul>
    );
}

export default List;