
# Find My Therapist
This project was built as my front-end capstone while attending a full stack web developement bootcamp at Nashville Software School.

The goal of this project was to create an app that centers both therapists and folks seeking therapy from marginalized communities by prominently featuring the information that would be most important to them.

Anyone may visit the site and browse through the therapists that are part of the community. They could filter the therapists by gender, pronouns, sexual orientation, and race/ethnicity. They could also browse and search through the blog posts that are written by the therapists.

An authenticated user who has created their profile may save therapists they are interested in contacting to their own personal list.

An authenticated user who has created their therapist profile may contribute blog posts to share with the entire community.


## Screenshots

![App Screenshot](https://i.postimg.cc/J7kR1V6B/Screenshot-2022-09-21-at-3-22-20-PM.png)

![App Screenshot](https://i.postimg.cc/B6FRGsSS/Screenshot-2022-09-21-at-3-22-32-PM.png)


## ERD
![](https://i.postimg.cc/ZnWF3pHY/Screenshot-2022-09-21-at-5-02-58-PM.png)
## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
## Run Locally

1. Clone the project

```bash
  git clone git@github.com:rochelle-rossman/find-my-therapist.git
```
2. Go to the project directory

```bash
  cd find-my-therapist
```

3. Install dependencies in the root directory

```bash
  npm install
```
```bash
  npm run prepare
```
4. Create a project on Firebase
5. Copy over enviromental variables from Firebase to .env file
6. Import sample data JSON file to realtime database in your Firebase project

7. Start the server

```bash
  npm run dev
```
