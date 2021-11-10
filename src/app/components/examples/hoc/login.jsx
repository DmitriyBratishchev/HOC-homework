import React from 'react'
import TextField from '../../common/form/textField';

const Login = ({handleSubmit, heandleChange}) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Введите имя"
        name="authName"
        onChange={heandleChange}
      />
      <button className="btn btn-primary">Login</button>
    </form>);
}
 
export default Login;