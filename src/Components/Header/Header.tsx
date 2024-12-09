import { useState } from "react";
import { useTheme } from "./ChangeThemes"
import { dataPage, menuOptions } from "../../DataBase/DataPage";
import { Link } from "react-router-dom";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

  const styles = {
    main: 'flex p-2 rounded dark:text-white gap-3 items-center',
    icon : 'size-8 bg-zinc-900 dark:bg-zinc-800 rounded flex items-center justify-center',
    text: ''
  }

  const icons : any = menuOptions[2].values;


    return (
      <button
        onClick={toggleTheme}
        className={styles.main}
      >
        <span className={styles.icon}>
          {theme === 'light' 
          ? icons[1].compo
          : icons[0].compo}
        </span>

        <h4 className={styles.text}>
          {theme === 'light' 
          ? 'Claro' 
          : 'Oscuro'}
        </h4>
        </button>
    );
};
  
export const Header = () => {

  const [menuIsOpen,setMenuOpen] = useState(false);
  const [categoriesIsOpen, setCategories] = useState(false);
  const [themeIsOpen,setThemes] = useState(false);

  const styles = {

    main: 'fixed flex w-screen h-20 z-20 dark:text-white font-roboto',
    content: 'relative flex z-10 size-full justify-between p-2 bg-gradient-to-tr from-cyan-100 dark:from-slate-950 to-sky-300 dark:to-violet-900 items-center',
    logoBox: ' w-auto h-full rounded overflow-hidden',
    logo: 'size-full object-cover',

    menuIcon: {
      main: 'relative size-12 ',
      top   : `absolute ${menuIsOpen ? 'rotate-45' : '-translate-y-4 right-1'} w-[90%] h-1 bg-black dark:bg-white rounded-full duration-300`,
      mid   : `absolute ${menuIsOpen ? 'bg-transparent' : ' bg-black dark:bg-white top-[45%] right-1'} w-[70%] h-1 rounded-full`,
      bottom: `absolute ${menuIsOpen ? '-rotate-45' : 'translate-y-3  right-1'} w-[90%] h-1 bg-black dark:bg-white rounded-full duration-300`
    },

    menuList : {
      main: `absolute ${menuIsOpen ? 'translate-y-20' : 'z-0 -translate-y-40'} bg-gradient-to-br from-cyan-100 dark:from-slate-950 to-sky-300 dark:to-violet-900 h-auto w-full duration-300`,
      itemsMain: 'w-full flex flex-col',
      itemsBox : 'size-full flex gap-3 p-3 font-bold text-xl items-center',
      icon: 'text-2xl'
    },

    categoryList: {
      main: `${categoriesIsOpen ? 'flex flex-col h-52' : 'h-0'}  duration-300 overflow-auto`,
      items: 'flex gap-3 ml-5 text-xl p-2 items-center',
      icons: 'bg-zinc-800  size-8 text-2xl flex items-center justify-center rounded',
    },

    themeList: {
      main: `${themeIsOpen ? 'flex flex-col h-14' : 'h-0'} duration-300`,
      items: `${themeIsOpen ? 'flex': 'hidden'} gap-2 ml-5 items-center text-xl p-2 duration-300`,
      icons: `flex bg-zinc-900 rounded size-8 items-center justify-center duration-300`
    }
  }

  return (
    <section className={styles.main}>
    {/* Menu cerrado */}
      <div className={styles.content}>
        <picture className={styles.logoBox}>
          <img 
            className={styles.logo}
            src={dataPage.logo} 
            alt="logo" 
          />
        </picture>

        <button className={styles.menuIcon.main}
          onClick={()=>setMenuOpen(!menuIsOpen)}
        >
          <div className={styles.menuIcon.top}></div>
          <div className={styles.menuIcon.mid}></div>
          <div className={styles.menuIcon.bottom}></div>
        </button>
      </div>
    {/* Menu abierto */}
      <ul className={styles.menuList.main}>
        {menuOptions.map((data, i) => {
          switch (data.name) {
            case 'Categorías':
              return (
                <li
                  key={i}
                  className={styles.menuList.itemsMain}
                  onClick={() => setCategories(!categoriesIsOpen)}
                >
                  <div className={styles.menuList.itemsBox}>
                    <span className={styles.menuList.icon}>
                      {data.icon}
                    </span>
                    <h2 className={''}>
                      {data.name}
                    </h2>

                  </div>

                  <ul className={styles.categoryList.main}
                    key={data.name}
                  >
                    {data.values?.map((values) => (
                      <li key={values.name}>
                        <Link
                          to={''}
                          className={styles.categoryList.items}
                        >
                          <span className={styles.categoryList.icons}>
                            {values.icon}
                          </span>
                          <h2 className={''}>
                            {values.name}
                          </h2>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
              break;
            case 'Temas':
              return (
                <li
                  key={i}
                  className={styles.menuList.itemsMain}
                  onClick={()=>setThemes(!themeIsOpen)}
                >
                  <div className={styles.menuList.itemsBox}>
                    <span className={styles.menuList.icon}>
                      {data.icon}
                    </span>

                    <h4 >
                      {data.name}
                    </h4>
                  </div>

                  <ul className={styles.themeList.main}>
                    <li className={styles.themeList.items}
                      onClick={()=>{
                        setMenuOpen(false);
                        setCategories(false);
                      }}
                    >
                      <ThemeToggle/>
                    </li>
                  </ul>
                </li>
              )
              break;
              /*
            case 'Carrito de compras':
              return (
                <li key={data.name}>
                  <Link
                    className={styles.menuList.itemsMain}
                    to={data.url}
                    onClick={() => HanddleShowMenu()}
                  >
                    <div className={styles.box}>
                      <span className={styles.mainIcon}>
                        {data.icon}
                        <div className={styles.shopCartValue}>
                          <h4>
                            {cartItems}
                          </h4>
                        </div>
                      </span>
                      <h2 className={styles.mainText}>
                        {data.name}
                      </h2>
                    </div>
                  </Link>
                </li>
              )
              break;
            */
              default:
              return (
                <li key={i}>
                  <Link
                    className={styles.menuList.itemsMain}
                    to={`${data.url}`}
                  >
                    <div className={styles.menuList.itemsBox}>
                      <span className={styles.menuList.icon}>
                        {data.icon}
                      </span>
                      <h2 className={''}>
                        {data.name}
                      </h2>
                    </div>
                  </Link>
                </li>

              )
              break;
          }
        })}
      </ul>

    </section>
  )
}
