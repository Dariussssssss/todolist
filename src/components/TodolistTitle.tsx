type TodolistTitle = {
    title: string
}

export const TodolistTitle = ({title}: TodolistTitle) => {
    return (
        <h3>{title}</h3>
    );
};
