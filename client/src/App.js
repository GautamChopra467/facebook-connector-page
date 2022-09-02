import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Posts from './modules/feed/presentation/pages/Posts';
import Demo from './modules/feed/presentation/pages/Demo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Posts />} />
        <Route exact path='/demo' element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}



// function App() {
//   const postPosts = async () => {
//     const response = await axios.post(
//       'https://graph.facebook.com/me/photos',
//       'url=https://www.facebook.com/images/fb_icon_325x325.png&published=true&message=This is 2nd Demo&access_token=EAAFngNLzTzIBAIdswRNUU12Q6vHBAlRHtWquNRpWFMI6M8xGcxA51ZBR73lVlsROlOUiiVUxgFdVRDxmkDAinBtKZBMbpP06LzVxgzc6qHJwF2EeYWnspcRuky1epIzmLkRONXjoHZAhWq7TiFVBZAxbHO3yuHh0D47thThlqaReyOWf9Lxx7NlGXfZCwJtpER3WZAJsqfjAZDZD',
//       {
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//           }
//       })
//       console.log(response)
//   }

//   const deleteCommentReply = () => {
//     axios.delete("https://graph.facebook.com/v14.0/100558926133692_764800461244602?access_token=EAAFngNLzTzIBALLgGR9PH8Sb25DpjZBXMSicyZAhzZCQyGJ8c7E0ekhCrGvYYbobWU9MCZAZBDFLdzEEIsrKRzS3QQglTVirzhXyOOnnk51KeeIyIM9FZCG7ucKHZAfAmVzfQH0ZAfLGMiymL6kpAo8HQnedvL9hXGLK2rPbxglLgUk7M4qcuVERs2aAvTif8AwyHbZBsMwJ69Jr7ZCAXHWF3J").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   const postCommentReply = () => {
//     axios.post("https://graph.facebook.com/v14.0/100558926133692_1069978610388662/comments?message=This%20is%202nd%20reply%20on%20seventh%20commit%20By%20Gautam%20Chopra.&access_token=EAAFngNLzTzIBALLgGR9PH8Sb25DpjZBXMSicyZAhzZCQyGJ8c7E0ekhCrGvYYbobWU9MCZAZBDFLdzEEIsrKRzS3QQglTVirzhXyOOnnk51KeeIyIM9FZCG7ucKHZAfAmVzfQH0ZAfLGMiymL6kpAo8HQnedvL9hXGLK2rPbxglLgUk7M4qcuVERs2aAvTif8AwyHbZBsMwJ69Jr7ZCAXHWF3J").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   const postComment = () => {
//     axios.post("https://graph.facebook.com/v14.0/108046888706313_100558926133692/comments?message=This%20is%20the%20new%20comment&access_token=EAAFngNLzTzIBALLgGR9PH8Sb25DpjZBXMSicyZAhzZCQyGJ8c7E0ekhCrGvYYbobWU9MCZAZBDFLdzEEIsrKRzS3QQglTVirzhXyOOnnk51KeeIyIM9FZCG7ucKHZAfAmVzfQH0ZAfLGMiymL6kpAo8HQnedvL9hXGLK2rPbxglLgUk7M4qcuVERs2aAvTif8AwyHbZBsMwJ69Jr7ZCAXHWF3J").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   const callCommentsReply = () => {
//     axios.get("https://graph.facebook.com/v14.0/100558926133692_764800461244602/comments?access_token=EAAFngNLzTzIBALLgGR9PH8Sb25DpjZBXMSicyZAhzZCQyGJ8c7E0ekhCrGvYYbobWU9MCZAZBDFLdzEEIsrKRzS3QQglTVirzhXyOOnnk51KeeIyIM9FZCG7ucKHZAfAmVzfQH0ZAfLGMiymL6kpAo8HQnedvL9hXGLK2rPbxglLgUk7M4qcuVERs2aAvTif8AwyHbZBsMwJ69Jr7ZCAXHWF3J").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   const callComments = () => {
//     axios.get("https://graph.facebook.com/v14.0/108046888706313_100558926133692/comments?access_token=EAAFngNLzTzIBALLgGR9PH8Sb25DpjZBXMSicyZAhzZCQyGJ8c7E0ekhCrGvYYbobWU9MCZAZBDFLdzEEIsrKRzS3QQglTVirzhXyOOnnk51KeeIyIM9FZCG7ucKHZAfAmVzfQH0ZAfLGMiymL6kpAo8HQnedvL9hXGLK2rPbxglLgUk7M4qcuVERs2aAvTif8AwyHbZBsMwJ69Jr7ZCAXHWF3J").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   const callPage = () => {
//     axios.get("https://graph.facebook.com/v14.0/108046888706313/feed?access_token=EAAFngNLzTzIBALLgGR9PH8Sb25DpjZBXMSicyZAhzZCQyGJ8c7E0ekhCrGvYYbobWU9MCZAZBDFLdzEEIsrKRzS3QQglTVirzhXyOOnnk51KeeIyIM9FZCG7ucKHZAfAmVzfQH0ZAfLGMiymL6kpAo8HQnedvL9hXGLK2rPbxglLgUk7M4qcuVERs2aAvTif8AwyHbZBsMwJ69Jr7ZCAXHWF3J").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   const callAccounts = () => {
//     axios.get("https://graph.facebook.com/v14.0/2199193570245771/accounts?access_token=EAAFngNLzTzIBAOmJ47SAYeVCmlxshqYfHZCHfMDew8ZCl5MXG2Ga2oriXCv3kjfIp0Bx5VcwCKuIcMrk10wYtsaYqKQMWzhuFj5sbHZCam8ms9lKgctGQ3IEReZAJx1MJAyYcnZATundizUW9uKrOM8burYvm7wnkVJUDZC9wt0QZDZD").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }
  
//   const callMe = () => {
//     axios.get("https://graph.facebook.com/v14.0/me?access_token=EAAFngNLzTzIBAM420HE2gkhJiZC2qVfZBYNiPHg4Uov7dP5yCsZApSZBF2CBwgHpgRKB0uPJKSkDn4ksCRHH0ZC4koWUOR0V2Gw7ZA47ZAoB6SQPdx9ve8IR9ZA2VGzib3qZBTZAKiUjAbyupexPj0L4QGBf3q6V7jW5iL1zZAEjsbZBJfgyInqwHpkZAF0rNAHhxBfxSCLFmuXZBVN3h5HkWBVyyf").then(({data}) => {
//       console.log(data)
//     }).catch(err => console.log(err));
//   }

//   return (
//     <div className="App">
//       <button onClick={callMe}>/me</button>
//       <br></br>
//       <button onClick={callAccounts}>/user-id/accounts</button>
//       <br></br>
//       <button onClick={callPage}>/page-id/feed</button>
//       <button onClick={callComments}>/page-id_post-id/comments</button>
//       <br></br>
//       <button onClick={callCommentsReply}>/post-id_comment-id/comments</button>
//       <br></br>
//       <br></br>
//       <button onClick={postComment}>POST /page-id_post-id/comments</button>
//       <br></br>
//       <button onClick={postCommentReply}>POST /post-id_comment-id/comments</button>
//       <br></br>
//       <button onClick={deleteCommentReply}>DELETE /post-id_comment-id child & parent comments</button>
//       <br></br>
//       <button onClick={postPosts}>POST /page-id</button>
//     </div>
//   );
// }

export default App;
