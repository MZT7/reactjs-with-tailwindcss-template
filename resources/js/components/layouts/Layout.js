import Header from "../inc/Header";
import Footer from "../inc/Footer";

function Layout(props) {
    return (
        <div className="min-h-screen bg-gray-200">
            <Header />
            <main className="min-h-screen pt-20 pb-20">{props.children}</main>
            <Footer />
        </div>
    );
}
export default Layout;
