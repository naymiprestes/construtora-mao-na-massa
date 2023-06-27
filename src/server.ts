import app from "./app"
import AppDataSource from "./data-source"

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("error during initialization", err)
  })

  app.listen(3000, () => {
    console.log("server running")
  })
})()