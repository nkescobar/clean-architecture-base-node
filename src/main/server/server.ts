import app from '../config/app'
import ConnectDB from '../../infrastructure/db/mongodb/mongo-connect'
app.listen(process.env.PORT , () => {
  console.log(`server is working port: ${process.env.PORT}`)
  ConnectDB()
})
