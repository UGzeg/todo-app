import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";

class TodoAppAdd extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: ""
        }
    }

    render(){
        return (
            <>
                <form onSubmit={(e) => {
                    /// formun default davranisi olan sayfa yenileme ve post etmeyi engelliyorum
                    e.preventDefault();
                    // statete tuttugum inputu son degerini aliyorum
                    const newContent = this.state.value;
                    this.props.addTodo(newContent);
                }}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Todo Giriniz"
                            value={this.state.value}
                            onChange={(e) => {
                                this.setState({
                                    value: e.target.value
                                })
                            }}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Todo Ekle</button>
                </form>
                <hr />
            </>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
};

export default connect(null, mapDispatchToProps)(TodoAppAdd);