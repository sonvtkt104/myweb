import HeaderPage from "../components/HeaderPage";
import ListProduct from "../components/ListProduct";
import Sidebar from "../components/Sidebar";

function Collection() {
    return (
        <div className="product">
            <HeaderPage
                prop1='Danh mục'
                prop2='Tất cả sản phẩm'
            />
            <div className="product-banner">
                <img src="https://file.hstatic.net/200000015764/file/nham_dan_f03e86614eb34601bb9f8ed42319b2ad.png" alt="" />
            </div>
            <div className="flex">
                <Sidebar />
                <ListProduct />
            </div>
        </div>
    )
}

export default Collection;