// eslint-disable-next-line react/prop-types
const Input = ({label, state, setState, type = 'text'}) => {
  return (
    <>
    <div className='form-floating'>
    <input
            type={type}
            className='form-control'
            value={state}
            onChange={e => setState(e.target.value)}
            id='floatingInput'
            // eslint-disable-next-line react/no-unknown-property
            placeholder={label} /><label htmlFor='floatingInput'>{label}</label>
            </div>
            </>

  )
}

export default Input
