

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Detail() {
    const dispatch = useDispatch();
    const { loading, hasErrors, data } = useSelector(tr => tr.initReducers);
    console.log("data_detail", data);
    return (
        <div>
            Detail
        </div>
    )
}
