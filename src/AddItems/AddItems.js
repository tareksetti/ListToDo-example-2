import React , {Component}from 'react';

class AddItems extends Component{

    state = {
        name:'',
        age:''
    }

     handleChange=(e)=>{
          this.setState({[e.target.id]:e.target.value})
    }


    handleSubmit=(e)=>{
       e.preventDefault();
       if(e.target.value===''){
           return false
       } else {
           this.props.handleAdd(this.state)
           this.setState({
               name:'',
               age:''
           })
       }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type ="text" placeholder="Name..." id="name" onChange={this.handleChange} value={this.state.name}></input>
                    <input type ="number" placeholder="age..." id="age" onChange={this.handleChange} value={this.state.age}></input>
                    <input type="submit" value="add"></input>
                </form>

            </div>
        )
    }
}

export default AddItems;