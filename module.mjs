import express from "express"
import path from 'path'
const app = express()
const port = process.env.PORT||3000
const __dirname = path.resolve();
app.use('/', express.static(path.join (__dirname, './web/build')))

app.get('/weather', (req, res) => {
  res.send({
    temp: 30,
    humidity: 90,
    time: "11:30",
  })
  console.log("request IP: ", req.ip );
})
app.use('*', express.static(path.join (__dirname, './web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})