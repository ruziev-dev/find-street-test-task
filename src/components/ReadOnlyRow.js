import { Grid, TextField } from '@material-ui/core'
import React, {useState} from 'react';


export const ReadOnlyRow = ({ ip, city }) => {

    const [helperText, SetErrorHelperText] = useState(null)
    const [isErrorShowed, SetIsErrorShowed] = useState(false)

    const showErrorMessage = () => {
        SetIsErrorShowed(true)
        SetErrorHelperText('Вы не можете изменять эти поля')
    }

    const hideErrorMessage = () => {
        SetIsErrorShowed(false)
        SetErrorHelperText(null)
    }
    return (
            <Grid container spacing={3}>
                <Grid item xs style={{ paddingTop: '30px' }}>

                    <TextField
                        onClick={showErrorMessage}
                        onBlur={hideErrorMessage}
                        error={isErrorShowed}
                        helperText={helperText}
                        id="outlined-read-only-input"
                        label="Ваш IP адрес"
                        defaultValue={ip}
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                        variant="filled" />
                </Grid>
                <Grid item xs style={{ paddingTop: '30px' }}>
                    <TextField
                        onClick={showErrorMessage}
                        onBlur={hideErrorMessage}
                        error={isErrorShowed}
                        helperText={helperText}
                        id="outlined-read-only-input"
                        label="Ваш город"
                        defaultValue={city}
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                        variant="filled" />

                </Grid>
            </Grid>
    )
}