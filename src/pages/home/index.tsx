import Footer from '../../component/footer'
import GetStarted from '../../component/getStarted'
import Hero from '../../component/hero'
import Transaction from "../../component/transaction"

const Home = () => {
  return (
    <div>
        <Hero />
        <Transaction />
        <GetStarted />
        <Footer />
    </div>
  )
}

export default Home