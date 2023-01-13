import styles from './Navbar.module.css';
import { HiOutlineSearch, AiOutlineShoppingCart, IoLocationOutline, AiFillPropertySafety } from 'react-icons/all';
import NavAnchor from './Navbar-Anchor';

function Navbar(props) {
  return (
    <div>
      <div className={styles.header}>
        <img className={styles['amazon-logo']} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        <div className={styles.header}>
          <IoLocationOutline color="white" />
          <div className={styles.header__option}>
            <span className={styles.header__optionLineOne}>Hello</span>
            <span className={styles.header__optionLineTwo}>Select your address</span>
          </div>
        </div>
        <div className={styles['search-input-field-with-icon']}>
          <input className={styles.header__searchInput} type="text" />
          <HiOutlineSearch className={styles.header__searchIcon} />
        </div>
        <div className={styles.header__nav}>
          <div className={styles.header__option}>
            <span className={styles.header__optionLineOne}>Hello, sign in</span>
            <span className={styles.header__optionLineTwo}>Accounts & Lists</span>
          </div>
          <div className={styles.header__option}>
            <span className={styles.header__optionLineOne}>Returns</span>
            <span className={styles.header__optionLineTwo}>& Orders</span>
          </div>
          <div className={styles.header__optionBasket}>
            <span className={styles.header__basketCount}>{props.count}</span>
            <div className={styles.shoppingCart}></div>
          </div>
        </div>
      </div>
      <NavAnchor/>
    </div>
  );
}

export default Navbar;
