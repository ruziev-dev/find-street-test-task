
import React, { useEffect, useState } from 'react';
import { ServerAPI } from './ServerAPI'

import { FindSteetApp } from './components/FindSteetApp'

import { LinearProgress, AppBar, Toolbar, Typography } from '@material-ui/core'


const App = () => {
  const [isDataGetted, setIsDataGetted] = useState(false)
  const [userIP, setUserIP] = useState(null)
  const [userCity, setUserCity] = useState(null)

  useEffect(() => {
    const initialization = async () => {
      const IpAdress = await ServerAPI.getMyIP()
      setUserIP(IpAdress)
      const city = await ServerAPI.getMyCity(IpAdress)
      console.log(city);
      setUserCity(city)
      setIsDataGetted(true)
    }

    initialization()
  }, [])



  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Поиск улиц твоего города
          </Typography>
        </Toolbar>
      </AppBar>

      {
        isDataGetted
          ? <FindSteetApp ip={userIP} city={userCity} />
          : <LinearProgress />
      }
    </>
  );
}

export default App;


