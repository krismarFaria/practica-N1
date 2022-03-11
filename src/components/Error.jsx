const Error = ({mensaje}) => {
  return (
    <div className='bg-red-600 text-white text-center p-3 mb-4 font-bold  rounded-md'>
        <p>{mensaje}</p>
    
    </div>
  )
}

export default Error