import { Link } from 'react-router-dom'
import Booking from '../components/Booking'

const Home = () => {
  return (
   <div className='h-[calc(100vh-60px)] w-full'>
     <div>
      <img src='/change.png' className='w-full '/>
     </div>
     <div>
      <Booking/>
     </div>
    <Link to='/signup'>signup</Link><br/>
    <Link to='/login'>Login</Link>
   </div>
  )
}

export default Home;