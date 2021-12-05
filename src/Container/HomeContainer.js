import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart, removeToCart } from "../Service/action/action";

const mapStateToProps = state => ({
    data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeToCartHandler:data => dispatch(removeToCart(data)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)