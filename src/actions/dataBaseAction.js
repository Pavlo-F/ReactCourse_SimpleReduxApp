import getData from "../webServices/dataBaseService";

import {
    GET_DB_DATA_FETCHING,
    GET_DB_DATA_SUCCESS,
    GET_DB_DATA_ERROR,
} from "../consts/const";

export default function getDBData(objName) {
    return function (dispatch) {
        dispatch({
            type: GET_DB_DATA_FETCHING,
        });


        getData(objName)
            .then((data) => {
                dispatch({
                    type: GET_DB_DATA_SUCCESS,
                    payload: { raw: data.map },
                });
            })
            .catch((error) => {
                console.log("Request failed", error);

                dispatch({
                    type: GET_DB_DATA_ERROR,
                    payload: { error },
                });
            });
    };
}
