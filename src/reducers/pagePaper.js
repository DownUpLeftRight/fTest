const initialState = {
   title: "Hello World!",
    content:'Ограничение по лайкамя, переход по говну сверху, Главная страница(Категории?), комменты(добавлять)' ,
    likeCounts: 0,

}

export function articleReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_LIKE':
            return {...state, likeCounts: action.payload}

        default: {
            return state
        }
    }
}