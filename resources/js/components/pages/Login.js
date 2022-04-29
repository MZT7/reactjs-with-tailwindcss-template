import React, { useState } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
import Button from "../ads/Button";

function Login() {
    const [see, setSee] = useState(false);

    const toggle = () => {
        setSee(!see);
    };
    return (
        <div className="max-w-md p-4 rounded-lg bg-white border  border-gray-400 shadow-md mx-auto px-6">
            <Form>
                <Label for="email">Email</Label>
                <Input id="email" type="text" required />
                <Label for="password">Password</Label>

                <div className="relative flex">
                    <Input
                        id="password"
                        type={see ? "text" : "password"}
                        required
                    />
                    <i
                        className="absolute inset-x-96 inset-y-2 inline-flex cursor-pointer"
                        onClick={toggle}
                    >
                        {see ? "U" : "S"}
                    </i>
                </div>
                <button className="bg-gray-700 text-gray-100 px-3 py-2 rounded-md shadow-md inline-flex">
                    Sign in
                </button>
            </Form>
        </div>
    );
}

export default Login;
