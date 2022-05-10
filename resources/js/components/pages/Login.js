import React, { useContext, useState } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
import Button from "../ads/Button";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "../api/Axios";

function Login() {
    const [user, setUser] = useState(null);
    const [see, setSee] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const toggle = () => {
        setSee(!see);
    };

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(value);

        setUser((prevUser) => {
            return { ...prevUser, [name]: value };
        });

        console.log(user);
    };

    const onsubmit = async (e) => {
        e.preventDefault();

        if (user.email && user.password) {
            try {
                const response = await axios.post(
                    "login",
                    JSON.stringify({
                        username: user.email,
                        password: user.password,
                    })
                );

                const accessToken = response?.data?.accessToken;
                login(user.email);
                setUser(null);
                navigate("/");
            } catch (error) {}

            return console.log(user);
        }
        return console.log("missing input");
    };
    return (
        <div className="max-w-md p-4 rounded-lg bg-white border  border-gray-400 shadow-md mx-auto px-6">
            <Form onSubmit={onsubmit}>
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    onChange={handleInput}
                    // required
                />
                <Label for="password">Password</Label>

                <div className="relative flex">
                    <Input
                        id="password"
                        name="password"
                        type={see ? "text" : "password"}
                        // required
                        onChange={handleInput}
                    />
                    <i
                        className="absolute inset-x-96 inset-y-2 inline-flex cursor-pointer"
                        onClick={toggle}
                    >
                        {see ? "U" : "S"}
                    </i>
                </div>
                <button
                    type="submit"
                    className="bg-gray-700 text-gray-100 px-3 py-2 rounded-md shadow-md inline-flex"
                >
                    Sign in
                </button>
            </Form>
        </div>
    );
}

export default Login;
