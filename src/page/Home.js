import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate,Link } from "react-router-dom";
import '../App.css';
// import * as userService from "../services/userService";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteForUser, getAllUser } from "../redux/apiUserService";

function Home() {
    let dispatch = useDispatch(); // để gửi dữ liệu đi
    let navigate = useNavigate(); // Chuyển trang
    const[actionLoad,setActionLoad] = useState(false)
    useEffect(() => {
        getAllUser(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actionLoad]); // Nếu không dùng thì nó sẽ tự đông kết nối đến api liên tục

    // lấy dữ liệu
    let users = useSelector((state) => state.user.user?.userCurrent);
    
    const HandleDelete = (id) =>{
         deleteForUser(id,dispatch);
         setActionLoad(!actionLoad);
         navigate("/");
    };

    return (
        <div style={{ width: 1200, margin: "0 auto" }}>
            <Link to={"/create"}>
                <Button variant="primary" style={{ margin: "25px 0" }}>
                    Add User
                </Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th className="">#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users && users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Button className="btn bg-info">
                                        <Link className="bg-dark" to={`/EditUser/${item.id}`}>
                                            <div>EditUser</div>
                                        </Link>
                                    </Button>
                                    <Button onClick={() => HandleDelete(item.id)}>
                                        DeleteUser
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
