import { Link } from 'react-router-dom';

export const Top = () => {
  return (
    <nav className='mb-4 flex space-x-5 border-b-2 py-2'>
      <Link to='/'>Home</Link>
      <Link to='axios-query'>&nbsp; Axios Query</Link>
      <Link to='react-query'>&nbsp; React Query</Link>
    </nav>
  )
}