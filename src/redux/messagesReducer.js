const ADD_MESSAGE = 'ADD_MESSAGE';

let initial = {
  messagesList: [
      {id: '1', dialogname: 'Нина', img: null},
      {id: '2', dialogname: 'Абрахам', img: ""},
      {id: '3', dialogname: 'Томас', img: null},
      {id: '4', dialogname: 'Александр', img: null},
      {id: '5', dialogname: 'Эмма', img: null},
      {id: '6', dialogname: 'Николь', img: null}
  ],
  dialog: [
      {id: '0', message: 'Привет'},
      {id: '1', message: 'прифки'},
      {id: '2', message: 'Как оно?'},
      {id: '3', message: 'Прырыэкрасно'}
  ]
}

let messagesReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
          return {
            ...state,
            dialog: [...state.dialog, {id: '4', message: action.messageBody}]
          }
        default:
            return state;
    }
};

export let addMessageAC = (messageBody) => {
  return {type: ADD_MESSAGE, messageBody}
}
 
export default messagesReducer;

