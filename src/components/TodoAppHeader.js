import React from 'react';
import TodoAppTitle from "./TodoAppTitle";
import TodoAppAdd from "./TodoAppAdd";

const TodoAppHeader = (props) => {
    return (
        <div>
            <TodoAppTitle title={"ToDo List"} />
            <TodoAppAdd />
        </div>
    );
};

export default TodoAppHeader;