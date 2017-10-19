import { REQUEST_TODOS , GET_TODOS} from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        case GET_TODOS:
          return false;
        case REQUEST_TODOS:
            return true;

        default:
            return state;
    }
}

export default reducer;