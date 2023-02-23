
// To navigate programmatically, react router provides useNavigate hook 
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        Home Page
      </div>

      <button onClick={() => { navigate('order-summary') }}>Place Order</button>


    </>
  )
}