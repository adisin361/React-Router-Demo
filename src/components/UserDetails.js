import { useParams } from "react-router-dom";
export const UserDetails = () => {
  // this hook returns a object with key value pairs
  // 'params' consists of key-value pairs of dynamic params from the current url
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
      Details about user {userId}
    </div>
  )
}