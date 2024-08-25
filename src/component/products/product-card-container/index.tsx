import ProductCard from "../product-card"
import "./styles.css"
import {ProductData} from "../../../component-data"

const AllProducts = () => {
  return (
    <div className="header w-full">
      <div className="all-products-bg ">
        <div className="w-10/12 grid grid-cols-3 gap-3 mx-auto">
        {
          ProductData.map((product: iProductCard) => {
            return (
            <div key={product.id} className="col-span-1">
              <ProductCard id={product.id}  text={product.text} image={product.image} title={product.title} />
            </div>

            )
})
        }
         
        </div>
      </div>
    </div>
  )
}

export default AllProducts