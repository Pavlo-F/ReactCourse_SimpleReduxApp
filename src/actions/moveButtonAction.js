import {
    MOVE_SHAPE,
} from "../consts/const";

import AI from "../AI";


export default function move(points, algoritm) {
    const newPoints = AI[algoritm](points);

    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: newPoints,
        });
    };
}
