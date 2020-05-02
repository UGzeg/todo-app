import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";
import {connect} from "react-redux";

class TodoApp extends React.Component{
    /*constructor(props){
        super(props);
    }*/

    render(){
        // 0. showNotification ilk basta false
        // 1. addTodo Dispatch edildi - todos guncellendi, bu component degil
        // 2. showNotification Dispatch edildi
        // 3. showNotification true oldu,
        // 4. bu componenent notification degerlerine connect(bagli oldugu icin kendini gunceller)
        return (
            <div>
                <TodoAppHeader/>
                {
                    this.props.showNotification && <h6>{this.props.notificationText}</h6>
                }
                <TodoAppList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {showNotification, notificationText} = state.notificationsReducer;
    return {
        showNotification,
        notificationText
    }
};


export default connect(mapStateToProps)(TodoApp)