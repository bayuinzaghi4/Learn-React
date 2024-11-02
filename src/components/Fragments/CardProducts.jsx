import Button from "../elements/Button"


const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-beetween">
            {children}
        </div>
    )
}

const Body = (props) => {
    const {title, children} = props
    return (
        <div className="px-5 pb-5 h-full">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h5>
          <p className="text-s text-white">
            {children.substring(0, 40)}
          </p>
        </a>
      </div>
    )
}
const Footer = (props) => {
    const {price, handleAddToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">
        Rp{" "}
        {price.toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}
        </span>
        <Button className="bg-blue-600" onClick={ () => handleAddToCart(id)} >
          Add to Cart
        </Button>
    </div>
    )
}
const Header = (props) => {
    const {image} = props
    return (
        <a href="#">
        <img
          src={image} alt="product" className="p-8 rounded-lg"
        />
        </a>
    )
}

CardProduct.Body = Body
CardProduct.Footer = Footer
CardProduct.Header = Header

export default CardProduct