import { useEffect,  useState, useMemo } from "react"
import { useParams } from "react-router-dom"

import {products, productDetail, sideBar} from "../data"
import ItemProduct from "./ItemProduct"

function ListProduct() {
    const {collectionKey} = useParams()

    console.log(collectionKey)

    const [list, setList] = useState([])   //list link product
    const [sort, setSort] = useState("0")

    //lay data theo params
    useEffect(() => {
        if(collectionKey) {
            if(products[collectionKey]) {
                setList(products[collectionKey])
            } else {
                setList([])
            }
        } else {
            let arr = [];
            for(let key in productDetail) {
                arr = [
                    ...arr,
                    key,
                ]
            }
            setList(arr)
        }
        console.log(list)
    }, [collectionKey])

    //sort data
    const sorted = useMemo(() => {
        let newList
        switch (sort) {
            case "0":
                console.log("gia tang dan")
                newList = list.sort((a, b) => {
                    if(productDetail[a].price > productDetail[b].price) return 1
                    if(productDetail[a].price < productDetail[b].price) return -1
                    return 0
                })              
                return newList
            case "1":
                console.log("gia giam dan")
                newList = list.sort((a, b) => {
                    if(productDetail[a].price > productDetail[b].price) return -1
                    if(productDetail[a].price < productDetail[b].price) return 1
                    return 0
                })              
                return newList
            case "2":
                console.log("Ten A-Z")
                newList = list.sort((a, b) => {
                    if(productDetail[a].name > productDetail[b].name) return 1
                    if(productDetail[a].name < productDetail[b].name) return -1
                    return 0
                })              
                return newList
            case "3":
                console.log("Tên Z-A")
                newList = list.sort((a, b) => {
                    if(productDetail[a].name > productDetail[b].name) return -1
                    if(productDetail[a].name < productDetail[b].name) return 1
                    return 0
                })              
                return newList
            default:
                break;
        }
    }, [sort, list])

    const categoryName = useMemo(() => {
        if(collectionKey) {
            if(collectionKey === "tet-du-day") return "Tết Đủ Đầy"
            for(let i = 0; i < sideBar.length ; i++) {
                if(collectionKey === sideBar[i].link) {
                    return sideBar[i].name
                } else {
                    for(let j = 0; j < sideBar[i].group.length; j++) {
                        if(sideBar[i].group[j].link === collectionKey)
                            return sideBar[i].group[j].item
                    }
                }
            }
        } else return "Tất cả sản phẩm"
    }, [collectionKey]) 

    return (
        <div className="list-product">
            <div className="list-product-header flex">
                <h1>{categoryName}</h1>
                <select 
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value={0}>Giá: Tăng dần</option>
                    <option value={1}>Giá: Giảm dần</option>
                    <option value={2}>Tên: A-Z</option>
                    <option value={3}>Tên: Z-A</option>
                </select>
            </div>
            {
                sorted.length !== 0 
                ? (
                    <div className="list-product-content flex">
                        {
                            sorted.map((link, index) => (
                                <ItemProduct
                                    key={index}
                                    image={productDetail[link].image[0].replace("compact", "master")}
                                    name={productDetail[link].name}
                                    price={productDetail[link].price}
                                    link={link}
                                />
                            ))
                        }
                    </div>
                  ) 
                : (<div>Không tìm thấy sản phẩm nào phù hợp!</div>)
            }
        </div>  
    )
}

export default ListProduct