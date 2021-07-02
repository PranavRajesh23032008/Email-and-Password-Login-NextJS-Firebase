import { useRouter } from "next/dist/client/router"
import auth from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"

export default function Home() {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const sendToLoginPage = () => {
      router.push("/Login")
  }
   return (
    <div className={""}>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {
          user ? (
            <div>
              Hello, {user?.displayName}
              <br />
              <button onClick={() => auth.signOut()} className={" cursor-pointer p-3 shadow-lg rounded-md w-24 transition duration-200 hover:shadow-md "}>
              Sign Out
            </button>
            </div>
          ) : (
            <div>
              Login 👇
              <br />
              <button onClick={sendToLoginPage} className={"cursor-pointer p-3 shadow-lg rounded-md w-24 transition duration-200 hover:shadow-md "}>
              Sign In
            </button>
            </div>
          )
        }

        </div>
      )}
        <br />
        
    </div>
  )
}
