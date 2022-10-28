# Skill Squares
## The best way to keep track of your interview skills!
(Link not yet active)
[skillsquares.app](https://skillsquares.app)

<img width="600" src="https://user-images.githubusercontent.com/34523493/198690597-d63e363a-7159-44e1-b6a6-f75df5ec3788.gif" />

After cloning this repo:
```
cd skill-squares
npm install
```
To spin up the Express server, run the following:
```
npm run backend
```
At this point, if you do a GET request to `http://localhost:3000/skills` you will have access to the data

Note: Because Tailwind CSS is used in this project, you have to specify and input and output css file to enable hot module reloading. Run the following script prior to spinning up the frontend.
```
npm run tailwind
```

Finally, to start the app on `localhost:5173`, open another terminal tab and run:
```
npm run dev
```

If you want to build and then preview the app:
```
npm run build
npm run preview
```
You should be able to view the built site at `localhost:4173`



