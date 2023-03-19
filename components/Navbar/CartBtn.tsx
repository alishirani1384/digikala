import React from 'react';
import {FiShoppingCart} from "react-icons/fi"

function CartBtn() {
  return (
      <button className='btn btn-ghost'>
          <FiShoppingCart size={25} />
    </button>
  )
}

export default CartBtn