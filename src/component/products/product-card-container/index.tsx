import ProductCard from "../product-card"
import "./styles.css"
import {ProductData} from "../../../component-data"

const AllProducts = () => {
  return (
    <div className="header w-full">
      <div className="all-products-bg py-[3rem] lg:py-[4rem]">
        <h2 className="heading-2 text-[#FCF7FC] text-center mb-[2rem] lg:mb-[4rem] w-10/12 lg:w-full lg:mx-0 mx-auto">All Our Products at a Glance</h2>
        <div className="w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 mx-auto">
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