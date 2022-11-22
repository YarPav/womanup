import {useState} from "react";
import {updateTaskStatus} from "../../services/FirebaseService";

const ListItem = ({data}) => {
    const [isFinished, setIsFinished] = useState(data.isFinished);
    const isFinishedChangeHandler = (e) => {
        setIsFinished(e.target.checked);
        updateTaskStatus(data.id, e.target.checked);
    }
    return (
      <li>
          <input type="checkbox" onChange={isFinishedChangeHandler} checked={isFinished}/>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <time dateTime={data.executingDate}>{data.executingDate}</time>
      </li>
    );
}

export default ListItem;