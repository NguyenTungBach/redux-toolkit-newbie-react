import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function DefaultLayout({children}) {
    return (
        <div className="wrapper">
            <Header />

            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>

        </div>
    );
}

export default DefaultLayout