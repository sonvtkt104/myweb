import { Link, useParams } from "react-router-dom"
import { useMemo } from "react"

import HeaderPage from "../components/HeaderPage"
import ItemProduct from "../components/ItemProduct"
import ProductDetail from "../components/ProductDetail"
import ProductImage from "../components/ProductImgae"
import {productDetail} from "../data"

const newProduct = [
    {
        image: "https://product.hstatic.net/200000015764/product/z3118531749594_d37f89f42a30a040cf6c6ca5fdbfd137_3095db7f4fe04ad6b84017e3a25c299e_grande.jpg",
        name: "Bình Hoa Nứt Lưu Ly",
        price: 580
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z2277520807822_e06aa55b9a340dec69e906c5bf35ae34_7e66154467bf44999c35b91088c1fbb3_grande.jpg",
        name : "Bộ Ấm Anh Đào Men Xanh",
        price: 650
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z3110249493878_1d8e5a5285968eeec0803f2a46178fe8_91edc4819bcc49f0867bd3beaade4f3f_grande.jpg",
        name: "Bộ Ấm Sen (Túi Vải)",
        price: 980
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z3118532018524_1306b2c58f608ac339ff29e18a0eb5fb_e54c9c23bc1a49b180541c1d736e7c2e_grande.jpg",
        name: "Cốc Linh Lan Hồng (350ml)",
        price: 435
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z3036304194870_932eaef588b1c886fd5b411fb8edc7b9_3adddbef46794488b08eb4e8c2430446_grande.jpg",
        name: "Khay Mứt 6 Hũ Thủy Tinh",
        price: 980
    }
]

function Product() {
    const {productKey} = useParams()

    const images = useMemo(() => {
        if(productDetail[productKey]) {
            return productDetail[productKey].image
        }
    }, [productKey])

    const detail = useMemo(() => {
        if(productDetail[productKey]) {
            return productDetail[productKey]
        }
    }, [productKey])

    return (
        <div className="product-detail">
            <HeaderPage 
                prop1={"Collections"} 
                prop2={detail.name} 
            />
            <div className="product-detail-content flex">
                <ProductImage image={images} />
                <ProductDetail 
                    product={detail} 
                    productKey={productKey} 
                />
            </div>
            <div>
                <h2>SẢN PHẨM LIÊN QUAN</h2>
                <div className="flex">
                    {
                        newProduct.map((product, index) => (
                            <ItemProduct 
                                key={index}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product