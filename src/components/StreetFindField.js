import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core/';

const re = new RegExp('^[a-zA-Z]*$')

export const StreetFindField = ({ searchStreet }) => {
    const [value, setValue] = useState('')
    const [isValidateError, SetIsValidateError] = useState(false)
    const [helperText, SetErrorHelperText] = useState(null)

    const submitStreet = () => {
        if (value === '') {
            SetIsValidateError(true)
            SetErrorHelperText('Поле не может быть пустым')
        } else {
            SetIsValidateError(false)
            SetErrorHelperText(null)
            searchStreet(value)
            setValue('')
        }

    }

    const onChangeFunction = (e) => {
        let value = e.target.value
        setValue(value)
        if (!re.test(value)) {
            SetIsValidateError(true)
            SetErrorHelperText('В поле могут быть только буквы')
        } else {
            SetIsValidateError(false)
            SetErrorHelperText(null)
        }
    }
    return (
        <Grid item xs>
            <TextField onChange={onChangeFunction}
                id="outlined-full-width"
                value={value}
                label="Начните вводить адрес и нажмите Enter"
                placeholder="например Невский проспект"
                helperText={helperText}
                fullWidth
                margin="normal"
                autoFocus
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        submitStreet()
                    }
                }}
                error={isValidateError}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </Grid>
    )
}