import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
        <img src="data:image/png;base64,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"/>

<Typography style={{"marginLeft":"1rem"}} component={Link} to="/" className={classes.heading} variant="h2" align="center">PostIt</Typography>

      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
