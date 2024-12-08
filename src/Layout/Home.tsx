import { Header } from "../Components/Header/Header"
import { ProductCard } from "../Components/ProductCard/ProductCard"
import { db } from "../DataBase/Test"

export const Home = () => {
    const styles = {
        main: 'w-full min-h-screen flex relative',
        content: 'size-full flex flex-col dark:bg-slate-900',

    }

  return (
    <section className={styles.main}>
        <div className={styles.content}>
            <Header/>
            <ul className='w-full min-h-96 border border-black pt-24 pb-16 flex flex-col px-8 gap-y-5'>
              {db.map((data,i)=>(
                <li
                  key={i}
                >
                  <ProductCard Game={data}/>
                </li>
              ))}
            </ul>

        </div>
    </section>
  )
}
