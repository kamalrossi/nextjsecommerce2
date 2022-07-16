import arrow from '../assets/arrow.svg'
import Link from 'next/link'
const Navbar2 = ({ handleCategory }) => {
    return (
        <div id='navbar2' className='navbar2'>
            <div onClick={() => handleCategory()} className="navbar2-category">
                <p>Category</p>
                <img src={arrow} alt="" />
            </div>
            <Link href="/search">
                <div className='navbar2-all'>
                    <p>Men</p>
                </div>
            </Link>
            <div className="navbar2-help">
                <p>Women</p>
            </div>

            <div className="navbar2-contact">
                <p>Kid</p>
            </div>

                    </div>
    )
}

export default Navbar2;
