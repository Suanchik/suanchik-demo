import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                {message: 'Фактам плевать на ваши чувства', likes: 'Нравится: 100'},
                {message: 'Пока ты бегаешь за женщиной, она, бегает за мужчиной, который бегает за своей мечтой', likes: 'Нравится: 150'},
                {message: 'Ты гавно либо гений, среднего не дано', likes: 'Нравится: 100'}
            ],
            newPLetter: ''
        },
        MessagesPage: {
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
            ],
            newMLetter: ''
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.MessagesPage = messagesReducer(this._state.MessagesPage, action)
        this.render();
    },
    render() {

    },
    subscribe(observer) {
        this.render = observer
    }
};
export default store;
