# Firebase Blog Tutorial
This project was developed using Vue 3 and Firebase. Firebase is a platform that offers developers real-time databases, authentication, file storage, analytics, and many other features.






  
  

  


  


## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).


  
## Project Setup
To deploy this project, run

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
  
## Firebase Setup

1. Create a new project in Firebase Console: [Firebase Console](https://console.firebase.google.com/).
2. Install Firebase CLI: [Firebase CLI](https://firebase.google.com/docs/cli).
3. Start your project with Firebase CLI:

```sh
npm install firebase
```




  
## API Usage

#### Bring all items

```http
  GET /api/items
```

| Parameter | Type     | Explanation                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API Key. |

#### Bring item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Explanation                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Key value of the item to be called |





  
## Project Structure

- **/src**: The root directory of the web application. HTML, CSS, Vue components and JavaScript files are located here.
- **../firebase**: Codes related to Firebase Functions are found here. (Optional, used only when necessary.)
  
## Environment Variables

To run this project you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`
## Author

- [@Denizaslantatar](https://www.github.com/Denizaslantatar) for design and development.
## Contribution

Contributions are always welcome!

Please follow this project's 'code of conduct'.
## Feedback

If you have any feedback, please contact us at jsdenizas@gmail.com.

  ## Support

For support, email jsdenizas@gmail.com.
## Used technologies

**Client:** Vue 3, Javascript, Firebase, Html, Css.
