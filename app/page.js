import Hero  from "../components/Hero"
import InfoBoxes from "../components/InfoBoxes"
import HomeProperties from "../components/HomeProperties"
import connectDB from "@/config/database"


const Home = () => {
  connectDB();
  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <HomeProperties/>
    </>
  )
}

export default Home