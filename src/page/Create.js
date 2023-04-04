import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { createForUser } from "../redux/apiUserService";


function Create() {
    const [createUser,setState] = useState({
        name:"",
        email:"",
        phone:""
    });// Hook trái là biến, phải là set giá trị

    const onChangeInput = (valueInput) => {
        // Cách 1: Lấy giá trị
        // let name = valueInput.target.name;
        // let value = valueInput.target.value;

        // Cách 2: Lấy giá trị
        let { name, value } = valueInput.target;
        setState({ ...createUser, [name]: value });
    }

    let dispatch = useDispatch(); // gọi đến file reduct
    let navigate = useNavigate(); // Chuyển trang

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createForUser(createUser,dispatch);
        navigate("/");
    }

    return (
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
                        value={createUser.name}
                        className="mb-4"
                        type="text"
                        placeholder="name"
                        onChange={onChangeInput}
                    />
                    <Form.Control
                        value={createUser.email}
                        name="email"
                        className="mb-4"
                        type="email"
                        placeholder="email"
                        onChange={onChangeInput}
                    />
                    <Form.Control
                        value={createUser.phone}
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
    );
}
export default Create;