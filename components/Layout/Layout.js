import Navbar from "../NavBar/Navbar"
import Footer from "../Footer/Footer"

export default function Layout({children}) {
    return (
        <div>
             <Navbar />
             {children}
             {/* <Footer /> */}
        </div>
    )
};
 