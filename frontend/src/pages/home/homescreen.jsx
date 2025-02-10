import { userAuthstore } from "../../store/authUser"

const homescreen = () => {
  const {logout} = userAuthstore();
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default homescreen
