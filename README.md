# Skill Squares
## The best way to keep track of your interview skills!
(Link not yet active)
[skillsquares.app](https://skillsquares.app)

After cloning this repo:
```
cd skill-squares
npm install
```
There is currently no real data base, instead, 'json-server' is used as a local db.
If you take a look at `db.json`, data is stored there. 
To spin up a mock server:
```
npm run backend
```
At this point, if you do a GET request to `http://localhost:3000/skills` you will have access to the data

To spin up the front end on `localhost:5173`, open another terminal tab:
```
npm run dev
```

If you want to build and then preview the app:
```
npm run build
npm run preview
```
You should be able to view the built site at `localhost:4173`



