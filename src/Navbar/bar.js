import './bar.css'
import img1 from './img1.jpeg'
import { Link } from 'react-router-dom'


const Bar = () => {

    const user =true;


  return (
    
    <div className='navbar'>
        <div className='topLeft'>
            <i class="topIcon fa-brands fa-square-facebook"></i>
            <i class="topIcon fa-brands fa-square-twitter"></i>
            <i class="topIcon fa-brands fa-linkedin"></i>
            <i class="topIcon fa-brands fa-square-github"></i>
        </div>

        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to ="/" style={{color:'inherit'}}>HOME</Link>
                </li>
                <li className='topListItem'>
                    <Link to ="/" style={{color:'inherit'}}>ABOUT</Link>
                </li>
                <li className='topListItem'>
                    <Link to ="/" style={{color:'inherit'}}>CONTACT</Link>
                </li>
                <li className='topListItem'>
                    <Link to ="/write" style={{color:'inherit'}}>WRITE</Link>
                </li>
                <li className='topListItem'>
                    <Link to ="/" style={{color:'inherit'}}>{user && "LOGOUT"}</Link>
                </li>
            </ul>
        </div>

        <div className='topRight'>

            {
                user ? (
                     <img className='topImage' src={img1} alt='profile-img'/>
                ) :

                    (
                        <ul className='topList'>
                            <li className='topListItem'>
                        <Link to ="/login" style={{color:'inherit'}}>LOGIN</Link>
                            </li>

                            <li className='topListItem'>
                                 <Link to ="/register" style={{color:'inherit'}}>REGISTER</Link>
                            </li>
                        </ul>
                    )

            }
           
            <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Bar