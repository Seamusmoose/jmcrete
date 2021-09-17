import Navbar from "../NavBar/Navbar"
import Footer from "../Footer/Footer"
//import Instagram from 'instagram-web-api';

export default function Layout({children}) {
    return (
        <div>
             <Navbar />
             {children}
             {/* <Footer /> */}
        </div>
    )
};
 