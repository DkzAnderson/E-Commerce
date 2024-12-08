import { Header } from "../Components/Header/Header"


export const Home = () => {
    const styles = {
        main: 'w-full min-h-screen flex relative',
        content: 'size-full flex flex-col',

    }

  return (
    <section className={styles.main}>
        <div className={styles.content}>
            <Header/>

        </div>
    </section>
  )
}
