import { useEffect } from "react";
import useUrl from "../component/hooks/useUrl";
import Navbar3 from "../component/navbar3";
import Offcanvas from "../component/offcanvas";
import Section from "../component/scetion";
import { useData } from "../store";
import Product_Action from "../store/action/productAction";

export async function getServerSideProps() {
    let { url } = useUrl()
    let res = await fetch(`${url}/product/all`)
    let data = await res.json()
    return {
        props: {
            products: data.allProduct
        }
    }
}
const Home = ({ products }) => {
    let { dispatch, productState } = useData()

    useEffect(() => {
        dispatch({ type: Product_Action.SAVE_PRODUCT, payload: { allProducts: products } })
        localStorage.setItem('__allProduct', JSON.stringify(products))
        console.log(productState);
    }, [])
    let brandDetails = [
        {
            img: '/ga.png',
            title: 'George Armani'
        },
        {
            img: '/gucci.png',
            title: 'Gucci'
        },
        {
            img: '/hm.png',
            title: 'H&M'
        },
        {
            img: '/uniqlo.png',
            title: 'Uniqlo'
        },
        {
            img: '/sl.png',
            title: 'SL'
        },
        {
            img: '/lv.png',
            title: 'LV'
        },
        
    ]
    return (
        <>
            <Navbar3 />
            <Section product={brandDetails.slice(0, 5)} title='Shop by brands' />
            <Section product={products} link='all' title='Latest Products' />
            <Section product={products.filter(sig => sig.category == 'men')} link='men' title='men' />
            <Section product={products.filter(sig => sig.category == 'women')} link='women' title='women' />
            <Section product={products.filter(sig => sig.category == 'kid')} link='kid' title='kid' />
            <p style={{ fontSize: '4rem', fontWeight: '700' }}>WallMall</p>
        </>
    )
}


export default Home;
