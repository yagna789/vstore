import  './header.scss';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Link } from 'react-router-dom';
import { useStateValue} from './StateProvider';

const Header = () =>{
    const {myReducer}= useStateValue();
    const [state] = myReducer;
    return (
        <header className="header">
        <div className="header__logo">
            <Link to='/'>
            <LocalGroceryStoreIcon fontSize='large'/> 
            <span className="header__logoName"> Vshop</span>
            </Link>
        </div>
        <div className="header__search">
            <input/>
        </div>
        <div className="header__nav">
            <div className="header__nav__user">
                <span className="header__nav__lineOne">Hello guest</span>
                <span className="header__nav__linetwo">Sign In</span>
            </div>
            <Link to="/checkout">
            <div className="header__nav__itemBasket">{state.cartList.length} Cart</div>
            </Link>
           
        </div>
        </header>
    )
}

export default Header;