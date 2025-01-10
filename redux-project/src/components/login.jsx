import {useState} from 'react'
import {Input} from '../ui'
import {useDispatch, useSelector} from 'react-redux'
import { loginUserFailure, loginUserStart, loginUserSuccess } from '../slice/auth'
import AuthService from '../services/auth'

const Login = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(loginUserSuccess())
      console.log(response.data)
      console.log(response)
    } catch (error) {
      dispatch(loginUserFailure())
      console.log(error, 'error, something went wrong try again')
    }
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
