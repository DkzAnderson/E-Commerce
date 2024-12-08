import { BiSolidHome } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import { MdSportsBasketball } from "react-icons/md";
import { GiCrestedHelmet } from "react-icons/gi";
import { GiBoxingGlove } from "react-icons/gi";
import { LiaStaylinked } from "react-icons/lia";
import { FaUserFriends } from "react-icons/fa";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { GiBloodyStash } from "react-icons/gi";
import { MdExplore } from "react-icons/md";
import { SiChessdotcom } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { GiSentryGun } from "react-icons/gi";
import { GiEvilBook } from "react-icons/gi";
import { RiTreasureMapFill } from "react-icons/ri";
import { AiOutlineAim } from "react-icons/ai";
import { GiSwordman } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { LiaAtomSolid } from "react-icons/lia";
import { FaHatWizard } from "react-icons/fa";
import { GiShotgunRounds } from "react-icons/gi";
import { GiPumpkinMask } from "react-icons/gi";
import { GiFluffyTrefoil } from "react-icons/gi";
import { PiPaintBucketFill } from "react-icons/pi";
import { GiFlamedLeaf } from "react-icons/gi";
import { GiSun } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

import logo from '../assets/Game-Store.gif';
import { ReactNode } from "react";


/*
    A continuación se especifica cada tipo de dato
    que contienen los objetos dentro del array de 
    menuOptions 
*/


interface Genre {
    id: string;
    name: string;
    url: string;
    icon: JSX.Element
}

interface Theme {
    name: string;
    compo: ReactNode;
    colors: string;
}

interface SocialMedia {
    name: string;
    icon: ReactNode;
    url : string;
}

interface MenuOption {
    name: string;
    // opcional porque algunas opciones no tienen URL
    url?: string;
    icon: JSX.Element;
    // Algunas opciones tienen valores adicionales
    values?: {
        id? : string;
        name: string;
        url?: string;
        icon?: JSX.Element;
    }[];
}

interface DataPage {
    name: string;
    logo: string;
    redes: SocialMedia[];
}

/* Termino de tipos de datos */

export const dataPage :DataPage = {
    name: 'Game-Store',
    logo: logo,
    redes: [
        {
            name: 'Facebook',
            icon: 'x',
            url: ''
        },
        {
            name: 'Instagram',
            icon: 'x',
            url: ''
        },
        {
            name: 'Tik Tok',
            icon: 'x',
            url: ''
        }

    ]
}

export const Genres :Genre[] = [
    {
        id:'action',
        name:'Acción',
        url: '/category/action',
        icon: <GiSentryGun className="text-amber-700"/>
    },
    {
        id:'racing',
        name:'Carrera',
        url: '/category/racing',
        icon:<IoCarSport className="text-sky-400"/>
    },
    {
        id:'sports',
        name:'Deportes',
        url: '/category/sports',
        icon:<MdSportsBasketball className="text-red-800"/>
    },
    {
        id:'exploration',
        name:'Exploración',
        url: '/category/exploration',
        icon:<RiTreasureMapFill className="text-amber-500"/>
    },
    {
        id:'war',
        name:'Guerra',
        url: '/category/war',
        icon:<GiCrestedHelmet className="text-amber-400"/>
    },
    {
        id:'fight',
        name:'Lucha',
        url: '/category/fight',
        icon:<GiBoxingGlove className="text-red-600"/>
    },
    {
        id:'online',
        name:'Online',
        url: '/category/online',
        icon:<LiaStaylinked className="text-lime-300"/>
    },
    {
        id:'fantasy',
        name:'Fantasía',
        url: '/category/fantasy',
        icon:<FaHatWizard className="text-violet-500"/>
    },
    {
        id:'multiplayer',
        name:'Multijugador',
        url: '/category/multiplayer',
        icon:<FaUserFriends className="text-rose-400"/>
    },
    {
        id: 'sandbox',
        name:'Sandbox',
        url: '/category/sandbox',
        icon:<PiCodesandboxLogoFill className="text-amber-800" />
    },
    {
        id: 'survival',
        name:'Supervivencia',
        url: '/category/survival',
        icon:<GiBloodyStash className="text-red-700"/>
    },
    {
        id: 'adventure',
        name:'Aventura',
        url: '/category/adventure',
        icon:<MdExplore className="text-amber-300"/>
    },
    {
        id: 'estrategy',
        name:'Estrategia',
        url: '/category/estrategy',
        icon:<SiChessdotcom className="text-blue-400"/>
    },
    {
        id: 'JRPG',
        name:'JRPG',
        url: '/category/jrgp',
        icon: <GiClockwork className="text-emerald-500"/>
    },
    {
        id: 'open world',
        name:'Mundo Abierto',
        url: '/category/openworld',
        icon:<BiWorld className="text-green-700"/>
    },
    {
        id: 'role',
        name:'Rol',
        url: '/category/role',
        icon:<GiSwordman className="text-rose-300"/>
    },
    {
        id: 'shooter',
        name:'Shooter',
        url: '/category/shooter',
        icon: <AiOutlineAim className="text-amber-800"/>
    },
    {
        id: 'terror',
        name:'Terror',
        url: '/category/terror',
        icon:<GiEvilBook className="text-fuchsia-400"/>
    },
    {
        id:'simulator',
        name:'Simulador',
        url: '/category/simulator',
        icon:<LiaAtomSolid className="text-cyan-400"/>
    },
    {
        id:'anime',
        name:'Anime',
        url: '/category/anime',
        icon:<GiFluffyTrefoil className="text-red-500"/>
    },
    {
        id: 'fps',
        name:'FPS',
        url: '/category/fps',
        icon:<GiShotgunRounds className="text-yellow-700"/>
    },
    {
        id:'indie',
        name:'Indie',
        url: '/category/indie',
        icon:<GiPumpkinMask className="text-orange-500"/>
    },

]

export const themes :Theme[] = [
    {
        name:'Dark',
        compo: <GiFlamedLeaf className="text-violet-600 rotate-45 size-[70%]"/>,
        colors: ''
    },
    {
        name: 'Light',
        compo: <GiSun className="text-amber-600 size-[80%]"/>,
        colors: ''
    }
]

export const menuOptions :MenuOption[] = [
    {
        name: 'Inicio',
        url: '/',
        icon: <BiSolidHome />,
    },

    {
        name:'Categorías',
        icon: <CiViewList/>,
        values: Genres
    },
    {
        name: 'Temas',
        icon: <PiPaintBucketFill />,
        values: themes
    },
    {
        name: 'Carrito de compras',
        url: '/cart',
        icon: <MdShoppingCart/>
    }
]


