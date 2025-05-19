type Props = {
    title: string;
    isDone: boolean;
}

export const Tasks = ({title,isDone}: Props) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/> <span>{title}</span>
        </li>
    )
}
