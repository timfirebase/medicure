import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgImg from "../../../assets/images/bg.jpg";

const Layout = (props) => {
    return (
         <div style={props.sectionStyle}>
            <Header/>
                {props.children}
             <Footer/>
         </div>
    );
}
export default Layout;