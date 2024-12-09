import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";



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
    main: 'size-full relative font-roboto ',
    content: 'overflow-hidden relative flex flex-col rounded-lg shadow-[0px_0px_6px_-2px] shadow-black dark:shadow-white',

    posterBox: 'h-auto w-full cursor-pointer',
    poster: 'size-full object-cover',

    data: {
      main: 'flex relative flex-col gap-0.5 px-2 py-3 dark:text-white bg-sky-200 dark:bg-black/85',
      title: 'font-bold text-xl max-w-full truncate',
      price: 'absolute top-0 left-0 pl-1 pr-3 rounded-br-full bg-green-800 dark:bg-lime-500 text-white dark:text-black font-bold text-2xl text-end',
      weight: 'text-sm',
      genderList: 'flex w-full gap-1.5 items-center ',
      genderTxt: 'text-sm max-w-16 px-1 rounded bg-sky-700 dark:bg-cyan-500 font-light text-zinc-300 dark:text-zinc-900 truncate',
      genderTitle: 'text-sm mr-1 font-bold'
    },

    cartBtn: {
      main: 'absolute flex justify-center items-center size-12 bg-green-800/75 dark:bg-lime-500 rounded-full right-2 -top-8',
      icon: 'text-3xl text-white dark:text-black mr-1 mt-1'
    }

  }

  const GetProduct = ()=> {
    console.log(Game)
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
        <Link
          className={styles.posterBox}
          to={`details/${Game.name}`}
        >
          <img
            className={styles.poster} 
            src={Game.poster} 
            alt={Game.name+'-poster'} 
          />
        </Link>

        {/* Datos */}
        <div className={styles.data.main}>
          <button
            className={styles.cartBtn.main}
            onClick={()=>GetProduct()}
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

        </div>
        <h2 className={styles.data.price}>
            s/{Game.price}
          </h2>

      </div>
    </article>
  )
}
