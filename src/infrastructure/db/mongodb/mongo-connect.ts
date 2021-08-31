import mongoose from 'mongoose'
export default (): void => {
  const url = 'mongodb://localhost:27017/tdd'
  mongoose.connect(
    url,
    { dbName: 'tdd' },
    (err) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('Base de datos  puerto 27017: \x1b[32m%s\x1b[0m', 'online')
      }
    })
}
