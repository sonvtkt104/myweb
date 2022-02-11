import {Link} from 'react-router-dom'
import {sideBar} from "../data"

function Menu() {
    return (
        <div className='header-menu'>
            <ul className='flex'>
                <li><Link to='/'>Trang chủ</Link></li>
                <li><Link to='collections'>Sản Phẩm</Link>
                    <ul>
                        {
                            sideBar.map((category, index) => (
                                <li key={index}>
                                    {
                                        category.group.length !== 0 
                                        ?(
                                            <>
                                                <Link to={`/collections/${category.link}`}>{category.name}</Link>
                                                <ul>
                                                    {
                                                        category.group.map((item, index) => (
                                                            <li key={index}><Link to={`/collections/${item.link}`}>{item.item}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                         )  
                                        :(
                                            <Link to={`/collections/${category.link}`}>{category.name}</Link>
                                         )
                                    }
                                </li>
                            )) 
                        }
                    </ul>
                </li>
                <li><Link to='/collections/tet-du-day'>TẾT ĐỦ ĐẦY</Link></li>
                <li><Link to='/blogs/a-little-leaf-teams'>A Little Story</Link></li>
                <li><Link to='/blogs/tui-minh-la-ban'>Tụi Mình Là Bạn</Link></li>
                <li><Link to='/game'>Giải Trí</Link></li>
            </ul>
        </div>
    )
}

export default Menu;