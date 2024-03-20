# Whatsapp Clone Web Application: Frontend
---
Welcome to the WhatsApp Clone Web Application Frontend repository! This repository contains the frontend code for building a feature-rich messaging platform similar to WhatsApp. This project aims to replicate the functionality of WhatsApp, offering real-time messaging, video calls, file sharing, group chats, and various other features. The frontend is built using React.js and Tailwind.

## Features

- Real-time Messaging: Communicate with other users in real-time with ease and functionality.
- Video Calls: Enjoy face-to-face communication with the integration of video calls, complete with ringing components and sounds.
  ( I have used OBS to setup and use a virtual camera, to test videocalls )
- Online Status: Display the online status of friends and colleagues in real-time.
- File Sharing: Send various types of files including images, videos, documents, and more.
- Image/Video Uploads: Utilize Cloudinary to store images and implement image uploading, searching, and filtering.
- Group Chats: Collaborate and share ideas with multiple people simultaneously through group chats.
- Typing Indicator: See when someone is typing a message, enhancing the user experience.
- Emojis: Express yourself with a wide range of emojis to add personality to your conversations.
- Advanced Search: Easily find contacts with email or username.
- Authentication System: Secure login and registration processes with access and refresh tokens.

## Results
  ![output-1](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/aa7b93c4-e30f-48ca-9412-a9008074268c)
  ![output-2](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/28299196-e253-4185-ba06-c70cc09cc4a5)
  ![output-3](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/4acc6f7f-e43b-4cf5-b5d6-c9fd7d9605c1)
  ![output-4](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/3fdb32b2-ff21-44ec-90d6-2e2999b39333)
  ![output-6](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/c5567c24-deef-47f1-a185-ce765fa9359e)
  ![output-5](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/2de7a5bf-c8f4-441f-834b-de6b48ebf6b5)
  ![output-7](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/48b7c152-32c0-48a4-b0e9-62add660efb4)
  ![output-8](https://github.com/MickyG03/Whatsapp-Clone-Frontend/assets/76037226/5581b73d-f218-4953-8572-2cd6557421f4)




## Getting Started
To get started with Whatsapp Clone, follow the steps:

#### 1. Clone Frontend and Backend repository: 
Frontend:
```sh
git clone "https://github.com/MickyG03/Whatsapp-Clone-Frontend"
```
Backend:
```sh
git clone "https://github.com/MickyG03/Whatsapp-Clone-Backend"
```
#### 2. Node JS and NPM installation: 
[Node Js]: Make sure you have Node JS and NPM package manager installed on your system.

#### 3. Install Yarn: 
While both NPM and Yarn are viable options, I lean towards Yarn due to its parallel installation feature, which ultimately saves time.
```sh
npm install --global yarn
```

#### 4. Setup and Run the Whatsapp Web Backend:
See the "Getting started" section of [Whatsapp-Backend] and get it up and running.

#### 5. Install Packages:
```sh
cd "Whatsapp-Clone-Frontend"
yarn install
```
#### 6. Setup Cloudinary:
- Create account on [Cloudinary], which is a media API platform.
- Get "Cloud Name" from "Programmable Media > Dashboard > Cloud Name"
- Go to "Settings", scroll down to "Upload Presets", add an upload preset, and get the "Preset Name".

#### 7. Create .env file:
Create .env file in the frontend folder and add these fields:
```sh
REACT_APP_API_ENDPOINT = API endpoint for backend eg: {http://backend-url:port/api/v1}
REACT_APP_CLOUD_NAME = Cloud Name from step 6.
REACT_APP_CLOUD_SECRET = Preset Name from step 6.
```

#### 8. Start the app:
This project was bootstrapped with Create React App. In the project directory, you can run:

- `yarn start` :
Runs the app in the development mode. The page will reload when you make changes.\
You may also see any lint errors in the console.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- `yarn test` :
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `yarn build` :
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `yarn eject` :
*Note: this is a one-way operation. Once you `eject`, you can't go back!*\
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.\
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.\
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Tech
For this project I have used following libraries:

- [Node JS] - A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server side. 
- [Yarn] - A fast, reliable, and secure dependency management tool. It's used for managing project dependencies, ensuring consistency across different environments, and improving performance during the installation process.
- [React JS] -  A JavaScript library for building user interfaces.
- [Socket IO] - A JavaScript library for real-time web applications. It enables bidirectional communication between web clients and servers, allowing for real-time updates and messaging in applications.
- [Simple Peer] - A simple, easy-to-use library for WebRTC peer-to-peer communication in JavaScript. It provides a wrapper around the WebRTC API, making it easier to create peer connections and exchange data between browsers.
- [Axios] - A promise-based HTTP client for the browser and Node.js. It simplifies making HTTP requests and handling responses.
- [JavaScript] - A programming language that enables dynamic content and interactivity on web pages.
- [Redux] - A predictable state container for JavaScript apps. It helps manage the state of your application in a predictable and efficient manner.
- [Yup] - A JavaScript schema builder for value parsing and validation. It's often used with forms to ensure data meets certain requirements.
- [Tailwind] - A utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that can be composed to build any design.

## Development

Want to contribute? Great!
Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## References

1. https://web.whatsapp.com/
2. https://www.geeksforgeeks.org/mern-stack/
3. https://www.udemy.com/course/whatsapp-clone-video-calls-mern-stack-socket-io/
4. https://cloudinary.com/documentation
5. https://cloudinary.com/
6. https://www.npmjs.com/
7. https://socket.io/docs/v4/
8. https://github.com/feross/simple-peer?tab=readme-ov-file#usage
9. https://react-redux.js.org/using-react-redux/connect-mapdispatch
10. https://legacy.reactjs.org/docs/hooks-effect.html
11. https://v2.tailwindcss.com/docs
---

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Node JS]: <https://nodejs.org/en/download>
   [Whatsapp-Frontend]: <https://github.com/MickyG03/Whatsapp-Clone-Frontend>
   [Whatsapp-Backend]: <https://github.com/MickyG03/Whatsapp-Clone-Backend>
   [Cloudinary]: <https://cloudinary.com/>
   [Javascript]: <https://www.javascript.com/>
   [React JS]: <https://react.dev/>
   [Yarn]: <https://classic.yarnpkg.com/en/>
   [Socket IO]: <https://socket.io>
   [Simple Peer]: <https://github.com/feross/simple-peer>
   [Axios]: <https://axios-http.com/> 
   [Redux]: <https://redux.js.org/>
   [Yup]: <https://github.com/jquense/yup>
   [Tailwind]: <https://tailwindcss.com/>
