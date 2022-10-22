import path from 'path'
import express from 'express'
import skillsRouter from './routers/skillsRouter.js'
const PORT = process.env.PORT || 3000;

//spin up express server
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// serve static files in 'public' folder
// app.use(express.static(path.join(__dirname, './index.html')))

//define route handlers
app.use('/skills', skillsRouter)

//GLOBAL ERROR HANDLER
// catch-all route handler
app.use((req, res) => res.status(404).send('404: Page not found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listens on port 3000 
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

  export default app