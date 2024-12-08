import { FaCartPlus } from "react-icons/fa6";



type Info = {
  name: string;
  value: string[] | string;
}

type Requeriments = {
  minimum: Info[],
  recommended: Info[]
}

interface Props {
  Game : {
    name   : string
    id     : string | number
    images : string[]
    info   : Info[];
    poster : string;
    price  : number;
    quanty : number;
    requeriments: Requeriments
    sypnosis: string[];
    gender: string[];
    trailerUrl: string;
  }
}


export const ProductCard : React.FC<Props> = ({Game}) => {

  const styles = {
    main: 'size-full relative font-roboto',
    content: 'overflow-hidden flex flex-col rounded-lg',

    posterBox: 'h-auto w-full cursor-pointer',
    poster: 'size-full object-cover',

    data: {
      main: 'flex relative flex-col gap-0.5 px-2 py-3 dark:text-white bg-sky-200 dark:bg-black/85',
      title: 'font-bold text-xl max-w-full truncate',
      price: 'absolute right-2 bottom-2 text-green-800 dark:text-lime-500 font-bold text-2xl text-end',
      weight: 'text-sm',
      genderList: 'flex w-full gap-1.5 items-center ',
      genderTxt: 'text-sm max-w-16 px-1 rounded bg-sky-700 dark:bg-cyan-500 font-light text-zinc-300 dark:text-zinc-900 truncate',
      genderTitle: 'text-sm mr-1 font-bold'
    },

    cartBtn: {
      main: 'absolute flex justify-center items-center size-14 bg-green-800 dark:bg-lime-500 rounded-full right-2 -top-7',
      icon: 'text-3xl text-white dark:text-black mr-1 mt-1'
    }

  }


  function GetWeight (){
    let value: string[] | string = '' ;
    Game.info.forEach(element => {
      if(element.name === 'Peso'){
        value = element.value;
      }
    });

    return value;
  }

  return (
    <article className={styles.main}>
      <div className={styles.content}>
        {/* Poster */}
        <picture className={styles.posterBox}>
          <img
            className={styles.poster} 
            src={Game.poster} 
            alt={Game.name+'-poster'} 
          />
        </picture>
        {/* Datos */}
        <div className={styles.data.main}>
          <button
            className={styles.cartBtn.main}
          >
            <FaCartPlus className={styles.cartBtn.icon}/>
          </button>

          <h1 className={styles.data.title}>
            {Game.name}
          </h1>

          <h4 className={styles.data.weight}>
            Peso: {GetWeight()}
          </h4>

          <ul className={styles.data.genderList}>
            <h2 className={styles.data.genderTitle}>
              Género/s:
            </h2>
            {Game.gender.map((data,i)=>(
              <li
                className={styles.data.genderTxt}
                key={i}
              >
                {data}
              </li>
            ))}
          </ul>

          <h2 className={styles.data.price}>
            s/{Game.price}
          </h2>
        </div>

      </div>
    </article>
  )
}
