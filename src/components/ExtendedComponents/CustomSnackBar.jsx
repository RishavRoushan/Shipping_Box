import React from 'react'
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

const CustomSnackBar = (props) => {

    return(
        <Snackbar
            {...props}
            autoHideDuration={props?.autoHideDuration ? props?.autoHideDuration : null}
        >
            <Alert
                severity = {props?.severity}
                variant = {props?.variant}
            >
                {props?.message}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackBar
