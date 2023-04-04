import Header from "../components/Header/Header";

function HeaderOnly({children}) {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly