import getData from "../webServices/dataBaseService";

import {
    GET_DB_DATA,
} from "../consts/const";

export default function getDBData(objName) {
    return function (dispatch) {
        getData(objName)
            .then((data) => {
                dispatch({
                    type: GET_DB_DATA,
                    payload: { row: data.map },
                });
            })
            .catch((error) => {
                console.log("Request failed", error);
            });
    };
}
