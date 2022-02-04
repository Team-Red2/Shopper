import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cartState/cartSlice";
import Button from "../ui/Button/Button";
import StyledInput from "../ui/StyledInput/StyledInput";
import StarRating from "../ui/StarRating/StarRating";

import classes from "./ProductPage.module.css";

const ProductPage = (props) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    const prod = products.find((prod) => prod.id === +props.productId);
    if (prod) {
      setProduct(prod);
    }
  }, [products]);
  const handleAddClick = () => {
    dispatch(
      cartActions.changeProduct({
        product: {
          productId: product.id,
          price: product.price,
          title: product.title,
          maxQuantity: product.quantity,
        },
        newQuantity: 1,
        mode: "button",
      })
    );
  };

  return (
    <React.Fragment>
      {product ? (
        <div>
          <div className={classes.container}>
            <div className={classes.img}>
              <img className={classes.productImage} src={product.imageURL} />
            </div>
            <div className={classes.description}>
              <div className={classes.productInfo}>
                <p className={classes.productTitle}>{product.title}</p>
                <p className={classes.productDescription}>
                  {product.description}
                </p>
                <StarRating rating={product.rating} />
                <div className={classes.priceline}>
                  <p className={classes.price}>Price: ${product.price}</p>
                  <p className={classes.quantity}>
                    Left in Stock: {product.quantity}
                  </p>
                </div>
              </div>
              <Button
                type="button"
                style="plain"
                width="100%"
                onClickHandler={handleAddClick}
              >
                Add to Cart!
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default ProductPage;
