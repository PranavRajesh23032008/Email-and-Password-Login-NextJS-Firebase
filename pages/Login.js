import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { useState } from "react"
import auth from "../firebase"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(() => {
            router.push("/")
        }).catch((e) => alert(e))
    }
  return (
    <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: 420,
    }} >
      <Head>
        <title>Login</title>
      </Head>
      <header className={"font-medium text-2xl p-6 bg-gray-100 rounded-t-2xl"}>
          Login
      </header>
      <form  className={"shadow-lg p-6 rounded-2xl"}  >
        <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
                background: "#f1f1f1"
            }}
            className={"w-full p-2 focus:outline-none mb-3 rounded-md"}
            placeholder={"Email"}
            type={"text"}
        />
        <br />
        <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
                background: "#f1f1f1"
            }}
            className={"w-full p-2 focus:outline-none mb-3 rounded-md"} 
            placeholder={"Password"}
            type={"password"}
        />
        <div className={"flex items-center mt-4"}>
            <p className={"text-sm "}>
                No Account?? <span onClick={() => router.push("/Register")} className={"text-blue-500 hover:underline cursor-pointer"}>Create one</span>
            </p>
            <div className={"flex-1"}/>
                <p onClick={() => router.push("/ResetPassword")} className={"text-blue-500 hover:underline cursor-pointer text-sm"}>
                    Reset Password
                </p>
            </div>
            <br />
            <div className={"flex justify-end"}>
                <input 
                    onClick={login}
                    type="submit"
                    value="Login"
                    className={"cursor-pointer p-3 shadow-lg rounded-md w-20 transition duration-200 hover:shadow-md "}
                />
            </div>
      </form>
    </div>
  )
}
