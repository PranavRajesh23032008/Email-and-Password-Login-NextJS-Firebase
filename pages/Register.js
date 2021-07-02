import Head from "next/head"
import { useState } from "react"
import { useRouter } from "next/router"
import auth  from "../firebase"

 function Register() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const register = (e) => {
        e.preventDefault()
        if (name === "") {
            alert("You haven't given yourself a name!")
        } else {
            if (password === confirmPassword) {
                auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
                    authUser.user.updateProfile({
                        displayName: name,
                    });
                    auth.signOut()
                    router.push("/Login")
                }).catch(function (e) {
                    alert(e)
                    setEmail("")
                    setName("")
                    setConfirmPassword("")
                    setPassword("")
                }) 
            } else {
                alert("Your Password is different from the Confirmed Password!")
                setConfirmPassword("")
                setPassword("")
            }
        }
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
        <title>Register</title>
      </Head>
      <header className={"font-medium text-2xl p-6 bg-gray-100 rounded-t-2xl"}>
          Register
      </header>
      <form  className={"shadow-lg p-6 rounded-2xl"}  >
      <input
        onChange={e => setName(e.target.value)}
            value={name}
            style={{
                background: "#f1f1f1"
            }}
            className={"w-full p-2 focus:outline-none mb-3 rounded-md"}
            placeholder={"Name"}
            type={"text"}
        />
        <br />
        <input
            onChange={e => setEmail(e.target.value)}
                value={email}
            style={{
                background: "#f1f1f1"
            }}
            className={"w-full p-2 focus:outline-none mb-3 rounded-md"}
            placeholder={"Email"}
            type={"text"}
        />
        <br />
        <input
            onChange={e => setPassword(e.target.value)}
                value={password}
            style={{
                background: "#f1f1f1"
            }}
            className={"w-full p-2 focus:outline-none mb-3 rounded-md"} 
            placeholder={"Password"}
            type={"password"}
        />
        <br />
        <input
            onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            style={{
                background: "#f1f1f1"
            }}
            className={"w-full p-2 focus:outline-none mb-3 rounded-md"} 
            placeholder={"Confirm Password"}
            type={"password"}
        />
            <p className={"text-sm "}>
                Have an account?? <span onClick={() => router.push("/Login")} className={"text-blue-500 hover:underline cursor-pointer"}>Login</span>
            </p>

            <div className={"flex justify-end"}>
                <input 
                onClick={register}
                    type="submit"
                    value="Register"
                    className={"cursor-pointer p-3 shadow-lg rounded-md w-20 transition duration-200 hover:shadow-md "}
                />
            </div>
      </form>
    </div>
  )
}

export default Register