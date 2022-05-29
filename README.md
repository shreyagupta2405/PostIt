# PostIt

### PostIt is a social media web application. It's a platform where you can create, edit, like and delete memories.

#### Demo video link : 
https://drive.google.com/file/d/1dNiGNr-ay6H9OxwHrlYurUXZoSkoeTDI/view?usp=sharing




![PHOTO-2022-05-29-02-27-13](https://user-images.githubusercontent.com/66991625/170842681-062b53e5-f636-4708-b77e-8b31d27b4e6a.jpg)



### 📌 Table of Contents
* [Features](#features)
* [Tech Stack Used/ Dependencies](#tech-stack)
<!-- * [Agile methodology followed during the build](#agile) -->
<!-- * [Usage Guide/ Application flow](#usage) -->
* [Challenges faced and learnings](#challenges)
* [Future Scope/ What's next?](#scope)


<a id="features"></a>
## 🚀 Features
- Actionable and simple UI. 
- Signing Up using basic email/password method.
- Signing In using email/password method alongside your own photo.
- Will sign up only after uploading photo.
- Login everytime using face login system.
- Create a post and uplaod photo along with title and message.
- Can like other people's post and not our own.
- Edit or delete our own post
- [Add more features](#feature-request)...


<a id="tech-stack"></a>
## 💻 Tech Stack Used/ Dependencies

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/><img alt="Firebase" src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"/><img alt="Material UI" src="https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white"/><img alt="TailwindCSS"  src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/><img alt="Git" 
src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>

***React*** : Front-end JavaScript library for building user interfaces or UI components.

***React Router Dom*** : Responsibile for rendering UI components according to the URL paths.

***Express*** : Back end web application framework for Node.js (a JavaScript runtime environment).

***Firebase*** : Google-backed application development software. Specifically used here for user authentication and storage(Firestore Database+Storage) of chats, files, etc. 

***NodeJs*** : Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services

***Material UI*** : Design language developed by Google which lets developers incorporate pre-built react components. Specifically used here only for designing the video chat and "Add files" modal.

***CORS*** : A HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources. Used here for communicating between server and client side hosted on Heroku and Netlify respectively.

***The library I used in this project for front-end*** : 

Axis,
Material ui,
Redux,
firebase,
Jwt decode,
react-file-base64,
react-html5-camera-photo,
redux-thunk,
uuid.

***The library I used in this project for back-end*** :

Axis,
cloudinary,
express,
Mongoose,
Flask



<!-- <a id="agile"></a>
## ⚡️ Agile methodology followed during the build

Agile is an easy to handle and flexible development process which relies on light(short-termed) planning procedures. It allows faster adjustments and reviewing with an aim of keeping the principle of zero bug bounce. Implementation of this method is done via a disciplined work breakdown, which I handled as depicted in the following :

<img width="705" alt="Screenshot 2021-07-12 at 12 07 30 PM" src="https://user-images.githubusercontent.com/75029142/125244384-e4a40800-e30c-11eb-802b-6b202b4db10d.png">

<img width="707" alt="Screenshot 2021-07-12 at 12 06 17 PM" src="https://user-images.githubusercontent.com/75029142/125244395-e8378f00-e30c-11eb-8484-0f4da729911f.png">

<img width="710" alt="Screenshot 2021-07-12 at 12 08 22 PM" src="https://user-images.githubusercontent.com/75029142/125244398-e968bc00-e30c-11eb-8185-526e772dfab9.png"> -->




<a id="getting-started"></a>
## 📦 Getting Started/ Setup

1. Clone this repository.

```javascript
  git clone https://github.com/shreyagupta2405/PostIt.git
```  

2. Head over to client directory and install dependencies by running the following in terminal.

```javascript
  cd client
  npm install
```

3. Head over to server directory and install dependencies by running the following in terminal.

```javascript
  cd server
  npm install
```

      
4. In both the directories (client and server), run the following to run server and client sides separately in your browser.

```javascript
  npm start -->
```
5. Run Python App after downloading as zip file.

6. Client-side will run on `http://localhost:3000` and the server-side will run on `http://localhost:8080`


### Landing Page 
Continue Signing Up/In by clicking the highlighted buttons.


<img width="1440" alt="Screenshot 2022-05-29 at 1 53 54 AM" src="https://user-images.githubusercontent.com/90089455/170843321-ea78f50e-fd55-46ad-b506-280457c16bcf.png">

### Sign Up Page
Enter all the required fields for successful sign up. Make sure the password strength is strong. Sign up with your photo.

<img width="1429" alt="Screenshot 2022-05-29 at 12 51 25 AM" src="https://user-images.githubusercontent.com/90089455/170843357-40091d49-2281-4d4e-9b14-ae4e8b723733.png">

<img width="1440" alt="Screenshot 2022-05-29 at 12 07 21 AM" src="https://user-images.githubusercontent.com/90089455/170843389-6ac4642e-b63b-4d63-9639-93eed837557d.png">

The following message gets displayed on successful sign up. You can directly head over to the sign in page from here or go back to the landing page to find the sign in button.
<!-- 
<img width="442" alt="Screenshot 2021-07-09 at 8 40 00 PM" src="https://user-images.githubusercontent.com/75029142/125100936-45f28e00-e0f7-11eb-969d-ec0adf8cddf3.png">

In case of an error, the following message would show up.

<img width="443" alt="Screenshot 2021-07-09 at 8 40 59 PM" src="https://user-images.githubusercontent.com/75029142/125100941-4723bb00-e0f7-11eb-8475-1353dc435811.png"> -->

### Sign In Page
You can either sign in using the email/password you used to sign yourself up previously or you can click the other options bar to authenticate yourself 

<img width="1440" alt="Screenshot 2022-05-29 at 12 02 30 AM" src="https://user-images.githubusercontent.com/90089455/170843423-005f5e34-a062-4d9a-9820-4afc6f135589.png">

<img width="1440" alt="Screenshot 2022-05-29 at 12 15 27 AM" src="https://user-images.githubusercontent.com/90089455/170843437-f4ebe600-4c6c-43e4-95de-7ff19c6e5f96.png">


After entering your email/password, pressing continue and a successfull sign in
Else an error can through up, similar to the sign up error show earlier.

In case you use other sign in options, you will have a pop up/redirect window to sign in using whichever method you chose.
If successful, you will see a continue button as below.


### Post-SignIn Dashboard
The default dashboard appears as follows.



![PHOTO-2022-05-29-02-27-13](https://user-images.githubusercontent.com/66991625/170842681-062b53e5-f636-4708-b77e-8b31d27b4e6a.jpg)

Avatar Drop-Down 
Your user name is visible here. You can also create post and log out of the dashboard from here.

 <img width="421" alt="image" src="https://user-images.githubusercontent.com/90089455/170848287-2ffd9fd0-3a28-471b-b597-bc80b19b02c8.png">
 
 <img width="410" alt="image" src="https://user-images.githubusercontent.com/90089455/170848336-d3074da7-18d0-4e1d-9f39-106c8bd6be65.png">





<a id="challenges"></a>
## 💡 Challenges faced and learnings

- Had very basic knowledge of React before the Microsoft Engage Program's qualification announcement. Spent about 100hrs learning the new concepts attached to React and then began the design-build process of this project.
- For my love of frontend styling, I took up the challenge of styling the page delicately.
- Never implemented user authentication before. Understood how to register apps on Github and make use of their API's for user authentication.
- Never incorporated a realtime database storage like mongoDb and Firebase to my projects before. 
- Developed a full stack app with frontend, backend and database for the first time integrating ML model. Struggled through it but documentations and tutorials came to the rescue as always. 
- Never worked with ML models before. Had tp extensively reasearch on that.
- Learnt about Cross-Origin Resource Sharing (CORS).
- Faced most challenges during integrating ML model with the web app using flask and database using mongoDB and Firebase.


<a id="scope"></a>
## 🚧 Future Scope/ What's next?

- [ ] Add comments feature.
- [ ] Add videos.
- [ ] Follow people.
- [ ] Add share memories with others feature.

<a id="resources"></a>
<!-- ## 📚 Resources -->

<!-- - [Microsoft Teams Developer Documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/)
- [React Router Dom Guide](https://reactrouter.com/web/guides/quick-start)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [React Icons Documentation/Guide](https://react-icons.github.io/react-icons/)
- [Cloud Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Simple-Peer Documentation](https://github.com/feross/simple-peer)
- [Socket.io Tutorial](https://www.youtube.com/watch?v=ZKEqqIO7n-k)
- [Heroku Documentation](https://devcenter.heroku.com/categories/reference)
- [Netlify Docs](https://docs.netlify.com/) -->


