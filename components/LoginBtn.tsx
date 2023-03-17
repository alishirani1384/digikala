import React from 'react';
import { TbLogin } from "react-icons/tb";

function LoginBtn() {
  return (
      <button className='btn btn-ghost'>
          <TbLogin size={25} />
          ورود
    </button>
  )
}

export default LoginBtn