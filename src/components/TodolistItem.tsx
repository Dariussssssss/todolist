import {TaskProps} from "../App.tsx";
import {TodotaskList} from "./TodotaskList.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TodolistTitle} from "./TodolistTitle.tsx";
import {FilterButtons} from "./FilterButtons.tsx";

type ListItemProps = {
    title: string,
    tasks: TaskProps[],
    date?: string
}

export const TodolistItem = ({title, tasks, date}: ListItemProps) => {


    return (
        <div className="app">
            <div>
                <TodolistTitle title={title}/>
                <AddTaskForm/>
                <TodotaskList tasks={tasks}/>
                <FilterButtons/>
                <div>{date}</div>
            </div>
        </div>
    )
}
