import { Outlet } from "react-router-dom"
import Menu from "../UI/Menu/Menu"
import Footer from "../UI/Footer/Footer"

const Layout = () => {
  return (
    <div className="page">
        <Menu />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout
