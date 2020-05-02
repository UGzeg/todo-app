import React from 'react';
import {connect} from "react-redux";
import {toggleTodo, delTodo} from "../redux/actions";
import styled from "styled-components";

const myColor = "#FFDED7";

const StyledListItem = styled.div`
      background: ${myColor};
      color: ${props => props.textColor};
      padding: 10px;
      text-decoration: ${props => (props.completed ? "line-through" : "none")};
      
      &:hover {
        background: #FCAC9C;
      }
`;


const TodoAppListItem = ({content, id, completed, toggleTodo, delTodo}) => {
    return (
        <div className="row">
            <div className="col-10">
                <StyledListItem  textColor="black" completed={completed} onClick={() => toggleTodo(id)}>
                    {content}
                </StyledListItem>
            </div>
            <div className="col-2" style={{"margin-top":"7px"}}>
                <button className="btn btn-primary btn-sm" onClick={() => delTodo(id)}>Sil</button>
            </div>
        </div>
        

    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    delTodo: delTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);