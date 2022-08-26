import { useEffect, useState } from "react";

const Loggg = () => {

    const [username, setUsername] = useState("");
    const [year, setYear] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [follower, setFollower] = useState("");

    return (
        <div className="px-6 py-6 min-h-screen flex flex-col items-center space-y-12">
            <div className="flex flex-col space-y-4">
                <input onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" className="border"/>
                <input onChange={(e) => setYear(e.target.value)} value={year} placeholder="Year" className="border"/>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" className="border"/>
                <input onChange={(e) => setFollower(e.target.value)} value={follower} placeholder="Followers" className="border"/>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Phone" className="border"/>
                <input onChange={(e) => setCountry(e.target.value)} value={country} placeholder="Country" className="border"/>
            </div>
            <div className="px-4 py-4 w-96 bg-indigo-600 space-y-6 rounded-2xl">
                <div className="flex flex-col space-y-2">
                <span className="flex space-x-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <h1>Instagram Account Log</h1> 
                </span>  
                <p className="text-sm font-light text-white">An account with username <strong className="font-medium underline">{username}</strong> and <strong className="font-medium underline">{follower}</strong> followers from <strong className="font-medium underline">{country}</strong> was hacked by anonymous hackers. Account created at <strong className="font-medium underline">{year}</strong></p>
                </div>

                <div className="flex flex-col space-y-2">
                <span className="flex space-x-2 text-white">                    
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <h1>Contact Information</h1>
                </span>
                <p className="text-sm font-light text-white">Email <strong className="font-medium underline">{email}</strong> and phone number <strong className="font-medium underline">{phone}</strong>.</p>

                </div>
            </div>
        </div>
    )
}

export default Loggg;
