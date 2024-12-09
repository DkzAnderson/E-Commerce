import { useParams } from "react-router-dom"
import { db } from "../../DataBase/Test";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { GiAlienFire } from "react-icons/gi";
import { Slider } from "./Slider";
import ReactPlayer from "react-player";


type Info = {
  name: string;
  value: string[] | string;
}

type Requeriments = {
  minimum: Info[],
  recommended: Info[]
}

type GameConstructor = {
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


export const ProductDetails = () => {

  const [data,setData] = useState <GameConstructor | null>(null);
  const [loading,setLoading] =useState <boolean> (true);

  const {id} = useParams();


  useEffect(()=>{
    const GetData = async () => {
      db.forEach(element => {
          if(element.name === id || element.id === id){
            setData(element)
          }
      });
      setLoading(false);

    }

    GetData();
  }, [id])

  const styles = {
    main: 'w-full min-h-screen flex font-roboto',
    content: 'w-full h-full gap-8 min-h-screen flex flex-col py-28 px-4 bg-gradient-to-br from-cyan-100 dark:from-slate-950 to-sky-300 dark:to-violet-900',
    posterBox: 'h-42 overflow-hidden rounded-lg',
    poster: 'size-full object-cover',

    titleBox: {
      main: 'flex flex-col gap-4',
      title: 'font-bold text-3xl dark:text-white text-center',
      sypnosisUl: 'dark:text-zinc-400 overflow-auto h-48',
      sypnosisLi: 'py-2 text-lg'
    },

    infoBox: {
      main: 'flex flex-col gap-4 p-2 rounded-lg dark:text-white rounded-lg bg-gradient-to-br from-orange-300/50 dark:from-indigo-800/50 to-yellow-300/50 dark:to-blue-950 shadow-[0px_0px_8px_-2px] shadow-slate-950 dark:shadow-sky-400',
      mainTitle: 'text-2xl self-start',
      list: 'flex flex-col gap-y-2',
      items: 'grid grid-cols-[20px_120px_1fr] gap-3 items-center',
      titles: 'font-bold text-sm',
      values: 'text-sm dark:text-zinc-300',
      icon: 'size-full flex items-center justify-center text-xl text-orange-500 dark:text-green-500 -rotate-90'
    },

    videoBox: 'w-full flex items-center justify-center overflow-hidden rounded-lg shadow-[0px_0px_8px_-2px] shadow-slate-950 dark:shadow-sky-400',

    requeriments: {
      main: 'flex flex-col gap-4 p-2 dark:text-white overflow-auto h-96 rounded-lg bg-gradient-to-br from-orange-300/50 dark:from-indigo-800/50 to-yellow-300/50 dark:to-blue-950 shadow-[0px_0px_8px_-2px] shadow-slate-950 dark:shadow-sky-400',
      mainTitles:'text-2xl ',
      list: 'flex flex-col gap-2 mb-4',
      items:'grid grid-cols-[20px_110px_1fr] sm:grid-cols-[20px_140px_1fr] items-center gap-3',
      titles: 'font-bold text-sm',
      values: 'text-sm',
      icons: 'size-full flex items-center justify-center -rotate-90 text-xl text-orange-500 dark:text-green-500'
    }
  }
  // Agregar Spinner / Pantalla de carga
  if(loading){
    return(
      <section className={styles.main}>
        <h5
          className=" text-7xl mt-20 animate-pulse"
        >
          Cargando...
        </h5>
      </section>
    )
  }
  // Componente con datos ya cargados
  return (
    <section className={styles.main}>
      <Header/>
      {data != null &&
        <div className={styles.content}>
          {/* Poster */}
          <picture className={styles.posterBox}>
            <img
              className={styles.poster}
              src={data.poster}
              alt={data.name + '-poster'}
            />
          </picture>
          {/* Titulo y Sipnosys */}
          <div className={styles.titleBox.main}>
            <h1 className={styles.titleBox.title}>
              {data?.name}
            </h1>

            <ul className={styles.titleBox.sypnosisUl}>
              {data.sypnosis.map((data, i) => (
                <li
                  className={styles.titleBox.sypnosisLi}
                  key={i}
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
          {/* Información del Juego */}
          <div className={styles.infoBox.main}>
            <h2 className={styles.infoBox.mainTitle}>
              Información del juego:
            </h2>
            {/* Lista de datos */}
            <ul className={styles.infoBox.list}>
              {data.info.map((data, i) => (
                <li
                  className={styles.infoBox.items}
                  key={i}
                >
                  <span className={styles.infoBox.icon}>
                    <GiAlienFire />
                  </span>

                  <h3 className={styles.infoBox.titles}>
                    {data.name}:
                  </h3>

                  <h4 className={styles.infoBox.values}>
                    {data.value}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
          {/* Imagenes */}
          <div>
            <Slider data={data.images} interval={4000} />
          </div>
          {/* Trailer */}
          <div className={styles.videoBox}>
            <ReactPlayer url={data.trailerUrl} controls />
          </div>
          {/* Requisitos del sistema */}
          <div className={styles.requeriments.main}>
            <h2 className={styles.requeriments.mainTitles}>
              Requisitos minimos:
            </h2>

            <ul className={styles.requeriments.list}>
              {data.requeriments.minimum.map((data, i) => (
                <li
                  className={styles.requeriments.items}
                  key={i}
                >
                  <span className={styles.requeriments.icons}>
                    <GiAlienFire />
                  </span>

                  <h3 className={styles.requeriments.titles}>
                    {data.name}:
                  </h3>

                  <h4 className={styles.requeriments.values}>
                    {data.value}
                  </h4>
                </li>
              ))}
            </ul>

            <h2 className={styles.requeriments.mainTitles}>
              Requisitos recomendados:
            </h2>

            <ul className={styles.requeriments.list}>
              {data.requeriments.recommended.map((data, i) => (
                <li
                  className={styles.requeriments.items}
                  key={i}
                >
                  <span className={styles.requeriments.icons}>
                    <GiAlienFire />
                  </span>

                  <h3 className={styles.requeriments.titles}>
                    {data.name}
                  </h3>

                  <h4 className={styles.requeriments.values}>
                    {data.value}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </section>
  )
}
