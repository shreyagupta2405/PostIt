import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from 'axios';
import UserModal from "../models/user.js";

const secret = 'test';

// const API = axios.create({ baseURL: 'http://127.0.0.1:5000/receiver' });

export const _postImageMatched = async (name) => {

  let url = 'http://127.0.0.1:5000/receiver';
  return axios.post(url, name, {
    "crossDomain": true,
  }).then(function (response) {
    return response;
  }).catch(function (error) {
    return error;
  });
}

export const signin = async (req, res) => {

  const { email, password, image } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) return res.status(400).json({ message: "password does not matched " });

    // const getResponse = (newPost) => API.post('/', newPost);

    console.log(image, oldUser.image);
    const imageMatched = await _postImageMatched([image, oldUser.image]);
    // console.log(imageMatched.data);
    console.log(imageMatched.data)
    if(imageMatched.data === 1){
      return res.status(400).json({ message: "Image not matched" });
    }

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, image } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    // console.log(image)
    const result = await UserModal.create({ email, password: hashedPassword, "image": image, name: `${firstName} ${lastName} ` });
    // console.log(result)
    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    // console.log(error);
  }
};
