import {
    MOVE_SHAPE,
    GET_DB_DATA,
} from "../consts/const";

const initialState = {
    x: 1,
    y: 1,
    row: {},
};

export default function worldReducer(state = initialState, action) {
    switch (action.type) {
    case MOVE_SHAPE:
        return {
            ...state,
            x: action.payload.x,
            y: action.payload.y,
        };

    case GET_DB_DATA:
        return {
            ...state,
            row: { ...action.payload.row },
        };

    default:
        return state;
    }
}
