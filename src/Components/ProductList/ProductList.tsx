import { db } from "../../DataBase/Test"
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductList = () => {

    const styles = {
        main: 'min-h-96 pt-24 pb-16 px-8 ',
        list: {
            main: 'size-full flex flex-col gap-y-5',
            items: ''
        }
    }

    /*
    
        Falta por agregar funciones de filtrado / busqueda
    */

  return (
    <div className={styles.main}>
        <ul className={styles.list.main}>
            {db.map((data,i)=>(
                <li
                    key={i}
                >
                    <ProductCard Game={data}/>
                </li>
            ))}
        </ul>
    </div>
  )
}
