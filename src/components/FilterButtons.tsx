import {Button} from "./Button.tsx";


export const FilterButtons = () => {
    return (
        <div>
            <Button title={'All'}/>
            <Button title={'Active'}/>
            <Button title={'Completed'}/>
        </div>
    );
};
