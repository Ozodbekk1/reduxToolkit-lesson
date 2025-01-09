import {useState} from 'react'
import {Input} from '../ui'
import {useDispatch, useSelector} from 'react-redux'
import { loginUserStart } from '../slice/auth'

const Login = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
    }

  return (
    <div className='text-center mt-5'>
    <main className='form-signin w-25 m-auto'>
      <form>
        <h1 className='h3 mb-3 fw-normal'>Please login</h1>
        <Input label={'Email address'} state={email} setState={setEmail} />
        <Input label={'Password'} type={'password'} state={password} setState={setPassword} />
        <button className='w-100 btn btn-lg btn-primary mt-2' onClick={handleSubmit} type='submit'
        disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </main>
  </div>
  )
}

export default Login
