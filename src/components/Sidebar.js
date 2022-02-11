import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {sideBar} from '../data'

function Sidebar() {
  
    const ulRef = useRef([])
    const iRef = useRef([])

    const handleClick = (index) => {
        ulRef.current[index].classList.toggle('active')
        iRef.current[index].classList.toggle('active')
    }

    return (
        <div className="sidebar">
            <ul>            
                {
                    sideBar.map((category, index) => (
                        <li key={index}>
                            {
                                category.group.length !== 0 
                                ?(
                                    <>
                                        <Link onClick={() => handleClick(index)} to={category.link}>
                                            {category.name + ' '} 
                                            <span>
                                                <i ref={i => iRef.current[index] = i} className="fas fa-chevron-right"></i>
                                            </span>
                                        </Link>
                                        <ul ref={ul => ulRef.current[index] = ul} className=''>
                                            {
                                                category.group.map((item, index) => (
                                                    <li key={index}><Link to={item.link}>{item.item}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </>
                                 )  
                                :(
                                    <Link to={category.link}>{category.name}</Link>
                                 )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>  
    )
}

export default Sidebar