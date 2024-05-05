import { useState } from "react";

function useOnlineStatus() {
 const [status, setStatus] = useState(true);

 window.addEventListener('offline',()=>{
    setStatus(false);
 });
 window.addEventListener('online',()=>{
    setStatus(true);
 });
  return status;
}
export default useOnlineStatus