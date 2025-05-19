import {TaskProps} from "../App.tsx";
import {Tasks} from "./Tasks.tsx";

type TodotaskList = {
    tasks: TaskProps[];
}

export const TodotaskList = ({tasks}: TodotaskList) => {
    const mappedTasks = tasks.length === 0 ?
        (<p>Tasks list is empty</p>) : (
            tasks.map((task: TaskProps) => {
                return (
                    <Tasks key={task.id} title={task.title} isDone={task.isDone}/>
                )
            })
        )
    return (
        <ul>
            {mappedTasks}
        </ul>
    );
};
