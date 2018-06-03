// 'state' argument is not aplication state, only the state hit reducer is responsible for
export default function(state = null, action) { // if the state comes undefined, it is gonna be set as null - es6 sintax
    switch(action.type) {

        case 'BOOK_SELECTED':
            return action.payload;

    }
    return state;
}