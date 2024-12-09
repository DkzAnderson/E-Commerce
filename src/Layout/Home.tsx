import { Header } from "../Components/Header/Header"
import { ProductList } from "../Components/ProductList/ProductList"


export const Home = () => {
    const styles = {
        main: 'w-full min-h-screen flex relative bg-black',
        content: 'size-full flex flex-col bg-gradient-to-br from-cyan-100 dark:from-slate-950 to-sky-300 dark:to-violet-900',
    }

  return (
    <section className={styles.main}>
        <div className={styles.content}>
            <Header/>
            <ProductList/>

        </div>
    </section>
  )
}
