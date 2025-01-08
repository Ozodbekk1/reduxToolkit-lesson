import {useState} from 'react'
import {Input} from '../ui'

const Login = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  return (
    <div className='text-center mt-5'>
    <main className='form-signin w-25 m-auto'>
      <form>
        <h1 className='h3 mb-3 fw-normal'>Please login</h1>
        <Input label={'Email address'} state={email} setState={setEmail} />
        <Input label={'Password'} type={'password'} state={password} setState={setPassword} />
        <button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
          Login
        </button>
      </form>
    </main>
  </div>
  )
}

export default Login
