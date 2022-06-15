import Header from "../inc/Header";
import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";

function Layout(props) {
    return (
        <div className="relative min-h-screen bg-gray-200">
            {/* <Header /> */}
            {/* <Sidebar /> */}
            <main className="min-h-screen pt-52">
                {/* <Sidebar /> */}
                {props.children}
            </main>
            {/* <Footer /> */}
        </div>
    );
}
export default Layout;
