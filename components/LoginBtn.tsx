import React from 'react';
import { TbLogin } from "react-icons/tb";

function LoginBtn() {
  return (
      <button className='btn lg:mr-auto btn-ghost lg:border lg:border-slate-500'>
          <TbLogin size={25} />
          ورود
    </button>
  )
}

export default LoginBtn