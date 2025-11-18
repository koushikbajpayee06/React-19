import React from 'react'

const useCapcha = () => {
  const code = `${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)}`
  return code;
}

export default useCapcha
