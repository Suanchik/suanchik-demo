import profileReducer, { addPostAC, deletePostAC } from "./profileReducer";

let state = {
    posts: [
        {message: 'Фактам плевать на ваши чувства', likes: 'Нравится: 100', id: '1'},
        {message: 'Пока ты бегаешь за женщиной, она, бегает за мужчиной, который бегает за своей мечтой', likes: 'Нравится: 150', id: '2'},
        {message: 'Ты гавно либо гений, среднего не дано', likes: 'Нравится: 100', id: '3'}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostAC('suanchik')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(4);
});

it('new post', () => {
    let action = addPostAC('suanchik')
    let newState = profileReducer(state,action);
    expect(newState.posts[0].message).toBe('suanchik');
})

it('delete post', () => {
    let action = deletePostAC(1)
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(2);
})