// import MainLayout from "@/layouts/MainLayout"
import TopBar from "../Navbar/TopBar"
import MainHeader from "../Navbar/MainHeader"

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <TopBar />
      {/* <MainLayout/> */}
      <MainHeader />
    </header>
  )
}

export default Navbar