import Header from "./Header";
import Footer from "./Footer";
import bgImg from "../../assets/images/bg.jpg";

const Layout = (props) => {

    const sectionStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }

    return (
         <div style={sectionStyle}>
            <Header/>
                {props.children}
             <Footer/>
         </div>
    );
}
export default Layout;