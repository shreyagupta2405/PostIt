import React, { useState, useEffect ,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import CameraIcon from '@mui/icons-material/Camera';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { Toast } from 'primereact/toast';
import './Auth.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const toast = useRef(null);
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [clickedPhotoLink, setClickedPhotoLink] = useState(null);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignup) {
      console.log(form)
      dispatch(signup(form, history));
    } else {
      console.log(form)
      dispatch(signin(form, history));
    }
  };

  function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  function handleTakePhoto(dataUri) {
    console.log("photo clicked")
    setShowCamera(false)
    var block = dataUri.split(";");
    // Get the content type of the image
    var contentType = block[0].split(":")[1];// In this case "image/gif"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1];
    var blob = b64toBlob(realData, contentType);


    const imageRef = ref(storage, `images/${"1" + v4()}`);
    uploadBytes(imageRef, blob).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setClickedPhotoLink(url)
        setForm({ ...form, "image": url });
      }).catch((error) => {
        console.log(error)

      });
    });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   
  };

  useEffect(() => {

  }, [showCamera,clickedPhotoLink])


  return (
    <>
                <Toast ref={toast} />
                {
        showCamera && <Camera 
          onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
        />
      }
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
              <Button onClick={() => { setShowCamera(true) }} fullWidth variant="contained" color="primary" className={classes.submit}>
                Upload Photo
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIie3Vv2pUURDH8c+NmCWp7BQ70XUr/1T6ABpBk/TWPkDYEEEr8QUULAStFLGwtZNkG0NSiAgpAoGgqIWFdrEQt9C1OBO593Lv5iStfmHg7DAzv3tmzjnLv8hFbGLUYpu40JRYlNZncK30ewePYt3Be9zFE/yu1ZnADdxBF8MmkQIPcRZr4buF27E+iROYad8oWMFHbGMLr/CrwBG8jK+7iXeRsIijpQIvsLGHyHlcxyGpvYdxtcBj/IiiOUzjMk5Js/iAQdSo80BqtW84hjl8x2xL8QJLEb+Me2HL4eurzhiO44v4GlF8R3X4ZYHneC3Np04Xq3jWIDQqi4xjKQQmx8R0pEPTP4jItNSOph3UOR2xU/sVmZf6nstAda6jiYyknr2PbpmNyPlLjsgoM26XQq07Ocnb0kuQy7nIqZA7+G6GQA9fHWDwpGO5Km5vCx2sY6HmzxYppIu2Jh3TOr0QeKrlMg6Nv2Rlob7UuhXcDxuEb6FBoIOf8BaXMkR2mZLeucWwOdUZlJnBGxH0KRw5O8phElfwWektnA3Fofa/1/3YMOo1Pbb/Gc8f0mh2cwE+g5oAAAAASUVORK5CYII=" />              </Button>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>

            {/* <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */}
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

      </Container>
      <div>
     
      </div>
      
    </>
  );
};

export default SignUp;
