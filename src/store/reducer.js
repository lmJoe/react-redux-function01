//是一个纯函数
//设定初始值
const defaultState = {
  inputValue:'hello world',
  list: [],
}
export default (state = defaultState, action) => {
  //获取到来自组件中更改store的值的方法做判断
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue= action.value;
    return newState;
  }
  return state;
}