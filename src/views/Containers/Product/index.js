import { Button, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_TYPES } from '../../../store/actions/actionTypes';
import { useHistory } from 'react-router-dom'

export default function Product() {
    const data = useSelector(state => state);
    console.log(data);
    const history = useHistory();

    const dispatch = useDispatch();
    const _handleGetData = () => {
        dispatch({ type: ACTION_TYPES.INIT, payload: { history } })
    }
    return (
        <div>
            <Button onClick={_handleGetData} variant="outlined" >Get Data</Button>

        </div>
    )
}
