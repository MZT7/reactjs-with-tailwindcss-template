import Button from "../ads/Button";
import Bg from "../img/deli.jpg";
// import React from "react";
// import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
// import Button from "../ads/Button";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axios from "../api/Axios";

function Home() {
    const [task, setTask] = useState(null);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const Taskall = async () => {
            const info = await axios.get("api/task").then((res) => {
                const tasks = res.data;
                setDatas(tasks);
                // console.log(data);
            });
        };

        Taskall();
    }, [task]);
    console.log(datas);
    const handleInput = (e) => {
        const Task = e.target.value;
        // console.log(value);

        setTask(Task);

        console.log(task);
    };

    const onsubmit = async (e) => {
        e.preventDefault();

        if (task) {
            try {
                const response = await axios.post(
                    "api/task",
                    { name: task }
                    // JSON.stringify({

                    // })
                );
                console.log(response.data);
            } catch (error) {}
            setTask(null);
            return console.log(task);
        }
        return console.log("missing input");
    };

    const word = datas.map((data) => {
        console.log(data);
        return (
            <li key={data.id} className="p-2">
                {data.name}{" "}
                <span className="bg-green-200 mx-5 p-2 my-5 rounded-lg">
                    edit
                </span>
                <span className="bg-red-200 mx-5 p-2 my-5 rounded-lg">
                    delete
                </span>
            </li>
        );
    });
    return (
        <>
            <div className="max-w-md p-4 rounded-lg bg-white border   border-gray-400 shadow-md mx-auto px-6 flex-grow-1">
                <Form onSubmit={onsubmit}>
                    <Label for="task">Task</Label>
                    <Input
                        id="task"
                        name="task"
                        onChange={handleInput}
                        // value={task}
                        required
                    />

                    <button
                        type="submit"
                        className="bg-gray-700 text-gray-100 px-3 py-2 rounded-md shadow-md inline-flex"
                    >
                        Create task
                    </button>
                </Form>
            </div>
            <div className="max-w-md pt-5 rounded-lg  h-10 mx-auto">
                <ul className="text-center bg-gray-300">{word}</ul>
            </div>
        </>
    );
}

export default Home;
