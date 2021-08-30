import app from '../config/app'

app.listen(process.env.PORT , () => {
  console.log(`server is working port: ${process.env.PORT}`)
})
