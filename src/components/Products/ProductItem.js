import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from '../Products/ProductItem.module.css';
import Card from '../UI/Card';

const ProductItem = (props) => {
    const dispatch = useDispatch()
    const { title, price, description, id } = props;
    const addToCartHandler = () => {
      dispatch(cartActions.addItemToCart({
        id,
        title,
        price,
        description
      }))

    }
    return (
        <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler} >Add to Cart</button> 
        </div>
      </Card>
    </li>

    )

}
export default ProductItem;