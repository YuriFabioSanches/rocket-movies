## <p align="center"><i>🚀 RocketMovie Node.js API</i></p>

<h2 id="project">📁 Project</h2>

The API developed in Node.js is a robust platform for managing users and their respective movie notes. Based on the latest technologies, the API utilizes JWT (JSON Web Tokens) authentication to ensure the security of information and allow users to access only their own notes and data.

<h2 id="project">🗝️ Key Features</h2>

- ✔️ User CRUD: The API allows for the creation, reading, updating, and deletion (CRUD) of users. Users can register on the platform, providing information such as username, encrypted password, email, etc. They can also update their information and delete their accounts if needed.

- ✔️ JWT Authentication: Authentication is performed using JWT tokens. After successful registration or login, the API generates a unique JWT token for each user, which is sent back to the client. This token is required to access protected endpoints of the API and is periodically renewed to ensure security.

- ✔️ Movie Notes CRUD: Users can create notes for the movies they have watched. Each movie note is linked to the user who created it, ensuring that only the authorized user can view, update, or delete their own notes. Typical information included in a movie note includes movie title, rating, comments, etc.

- ✔️ Protected Endpoints: The API features protected endpoints that require JWT authentication to access. This ensures that only authenticated users can manipulate their own movie notes and personal data.


<h2 id="structure">📌 Database diagram</h2>

Below is the diagram used as a basis for creating the database:

![Database structure](https://github.com/YuriFabioSanches/movie_notes_api/assets/58032581/4f764066-66d7-43b8-b6c4-b37f3b632969)

<h2 id="technologies">💻 Technologies</h2>

This project was developed using the following technologies/libraries/tools:

- ✔️ Javascript;
- ✔️ Node.js;
- ✔️ Express.js;
- ✔️ SQLite;
- ✔️ Knex.js;
- ✔️ JSON Web Token (JWT);
- ✔️ Multer;
- ✔️ Cors;

<h2 id="concepts">💡 Concepts</h2>

Concepts used in project development:

- ✔️ HTTP Request;
- ✔️ Route params;
- ✔️ Query params;
- ✔️ Body params;
- ✔️ Routes files;
- ✔️ Controllers files;
- ✔️ Middlewares;
- ✔️ Custom error exception;
- ✔️ Express async errors;
- ✔️ Sqlite database;
- ✔️ migrations;
- ✔️ Query builder;

<h2 id="extras">🔖 Extras</h2>

Some details added to the challenge:

- ✔️ Password encryption;
- ✔️ Email validation;
- ✔️ Authentication with JWT;
- ✔️ Authorization middleware;
- ✔️ Image upload;

<h2 id="usage">🔦 Usage</h2>

To install the application on your local machine, clone the project, access the folder, install the dependencies and start the server.
<i>OBS: if it's the first time that your running, you need to run the create tables migrations. Just after start server do npm run migrate
and your good to go.</i>

```
$ git clone https://github.com/YuriFabioSanches/rocket-movies.git
$ cd rocket-movies/backend
$ npm install
$ npm run dev
$ npm run migrate
```

<h2 id="usage">🤲 Conclusion</h2>

The API offers a complete solution for managing users and movie notes, providing a secure and personalized experience for each user. With JWT authentication and efficiently implemented CRUD functionalities, users can easily record their experiences with movies and maintain an organized record of their ratings and comments.

### <p align="center"><i>by Yuri Fabio Sanches 👀</i></p>
