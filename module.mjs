import express from "express"
import path from 'path'
import cors from 'cors'
const app = express()
const port = process.env.PORT||3000
app.use(cors());
// app.get()
app.get('/weather/:cityName', (req, res) => {
  console.log(req.params.cityName);
  res.send({
    city: req.params.cityName,
    // name: "Karachi",
    temp: "30",
    temp_min: "26",
    temp_max: "30",
pressure: "8",
    humidity: "90",
    time: "11:30",
  })
  console.log("request IP: ", req.ip );
})
const __dirname = path.resolve();
app.use('/', express.static(path.join (__dirname, './web/build')))
app.use('*', express.static(path.join (__dirname, './web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})