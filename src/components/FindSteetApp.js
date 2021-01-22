import React, { useState } from 'react'
import { ReadOnlyRow } from './ReadOnlyRow'
import { StreetFindField } from './StreetFindField'
import { StreetList } from './StreetList'

import { Container } from '@material-ui/core';
import { ServerAPI } from './../ServerAPI';

export const FindSteetApp = ({ ip, city }) => {

    const [streetsArray, setStreetsArray] = useState(null)


    const searchStreet = async (street) => {
        let request = `${city} ${street}`
        let data = await ServerAPI.getStreets(request)
        console.log(data)
        setStreetsArray(data)
    }

    return (
        <>
            <Container fixed justify="center">
                <ReadOnlyRow ip={ip} city={city} />
                <StreetFindField searchStreet={searchStreet} />
                <StreetList streetsArray={streetsArray} />
            </Container>
        </>
    )
}

