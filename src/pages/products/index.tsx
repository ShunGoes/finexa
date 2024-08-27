import Footer from "../../component/footer"
import GetStarted from "../../component/products/get-started"
import ProductHero from "../../component/products/hero"
import AllProducts from "../../component/products/product-card-container"
import Solutions from "../../component/products/solutions"

const Products = () => {
  return (
    <section>
        <ProductHero />
        <AllProducts/>
        <Solutions />
        <GetStarted />
        <Footer/>
    </section>
  )
}

export default Products