import React from 'react';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export const StreetList = ({ streetsArray }) => {
    const classes = useStyles();

    if (streetsArray) {
        return (
            <div className={classes.root}>
                <List>
                    {streetsArray.map(el => {
                        let city = el.data.street_with_type ? el.data.street_with_type : ''
                        return (
                            <ListItem button key={el.data.fias_id}>
                                <ListItemText primary={`${el.data.region} ${city}`} />
                            </ListItem>
                        )
                    })
                    }
                </List>
            </div>
        )
    } else return null
}