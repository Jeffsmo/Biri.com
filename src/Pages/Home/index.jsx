import logo from "../../Assets/biri.svg"
import { Layout } from "../../Components/Layout";
import { HomeCard } from "../../Components/Cards/CardHome";

function Home() {
  return (
    <>
      <Layout>
            <main>
              <img src={logo} alt="" />
            </main>

            <HomeCard/>

      </Layout>

    </>
  )
}

export {Home} 
