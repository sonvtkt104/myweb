import {Link} from 'react-router-dom'

function Topic({image, name}) {
    return (
        <div className="topic">
            <img src={image} alt="" />
            <div>
                <p>{name}</p>
                <Link to="/collections/tet-du-day" className="btn">XEM THÊM</Link>
            </div>
        </div>
    )
}

export default Topic;