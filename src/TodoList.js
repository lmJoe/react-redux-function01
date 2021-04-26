import React, { Component } from 'react';
import { connect } from 'react-redux';//connect是react-redux提供的核心api
class TodoList extends Component {
  //使用store里的数据
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button onClick={this.handClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
  handClick(){

  }
}
const mapStateTopProps = (state) => {
  return {
    inputValue:state.inputValue,
  }
}
//store.dispatch,props  把store.dispatch方法挂载在props方法中，可以使用this.props.~ 来改变state中的值,如this.props.changeInputValue ，此处的changeInputValue为一个卸载mapDispatchToProps中的方法
const mapDispatchToProps = (dispatch) =>{ //接收了一个dispatch的方法，这个方法就是store.dispatch的方法
  return {
    changeInputValue(e){//调用dispatch的方法来改变数据
      console.log(e.target.value)
      const action = {
        type:'change_input_value',
        value:e.target.value,
      }
      dispatch(action);//利用dispatch的方法后，需要到reducer.js中，对export default中做判断处理
    }
  }
}
export default connect(mapStateTopProps,mapDispatchToProps)(TodoList);//connect()让TodoList的组件和store做连接
//connect(a,b)
//在做连接的时候需要一个规则，这个规则在mapStateTopProps中（意思：把store里面的数据映射给这个组件，变成组件的props）,mapStateTopProps函数中的state就是store的数据,如果想要对store数据做修改，使用mapDispatchToProps