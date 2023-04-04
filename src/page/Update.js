import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getDetailUser, updateForUser } from "../redux/apiUserService";


function Update() {
    const params = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate(); // Chuyển trang
    let findUser = useSelector((state) => state.user.user?.userDetailCurrent);
    // deps nếu giá trị thay đổi sẽ render lại
    const [updateUser,setUpdateUser] = useState({
        name:"",
        email:"",
        phone:""
    });// Hook trái là biến, phải là set giá trị

    useEffect(() => {
        getDetailUser(params.id,dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Nếu không dùng thì nó sẽ tự đông kết nối đến api liên tục


    useEffect(() => {
        if (findUser){
            setUpdateUser(findUser);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [findUser]); // Nếu không dùng thì nó sẽ tự đông kết nối đến api liên tục
    // deps nếu giá trị thay đổi sẽ render lại


    const onChangeInput = (valueInput) => {
        // Cách 1: Lấy giá trị
        // let name = valueInput.target.name;
        // let value = valueInput.target.value;

        // Cách 2: Lấy giá trị
        let { name, value } = valueInput.target;
        setUpdateUser({ ...updateUser, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateForUser(params.id,updateUser,dispatch);
        navigate("/");
    }

    return (
        <div>
            Update Page
            {
                params.id
            }

            <div>
                <h1>Add</h1>
                <div style={{ width: 300, margin: "0 auto" }}>
                    <Form>
                        <Link to={"/"}>
                            <Button variant="secondary" type="submit" className="my-4">
                                Back
                            </Button>
                        </Link>
                        <br/>
                        <Form.Control
                            name="name"
                            value={updateUser.name}
                            className="mb-4"
                            type="text"
                            placeholder="name"
                            onChange={onChangeInput}
                        />
                        <Form.Control
                            value={updateUser.email}
                            name="email"
                            className="mb-4"
                            type="email"
                            placeholder="email"
                            onChange={onChangeInput}
                        />
                        <Form.Control
                            value={updateUser.phone}
                            name="phone"
                            className="mb-4"
                            type="number"
                            placeholder="phone"
                            onChange={onChangeInput}
                        />
                        <br/>
                        <Button variant="primary" type="submit" onClick={handleSubmit} >
                            Add User
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Update;