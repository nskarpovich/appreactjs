import React from 'react';
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatMethod}>
                <input type='text' name= 'keyword' placeholder= 'keyword'/>
                <button>find out</button>
            </form>
        )
    }
}
export default Form;