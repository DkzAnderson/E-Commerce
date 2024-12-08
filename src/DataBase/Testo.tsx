
class Game {
    constructor({
        name,info,id,
        poster,images,
        requeriments,
        sypnosis, gender,
        price, trailerUrl,
        quanty
    }){
        this.name = name;
        this.info = info;
        this.id = id;
        this.poster = poster;
        this.images = images;
        this.requeriments = requeriments;
        this.sypnosis = sypnosis;
        this.gender = gender;
        this.price = price;
        this.trailerUrl = trailerUrl;
        this.quanty = quanty;
    }
}



export const db = [
    new Game({name: 'God Of War: Ragnarok',
        id: 'God Of War: Ragnarok',
        poster: 'https://i.postimg.cc/DwXxtPS1/God-Of-War-Ragnarok-Poster.jpg',
        requeriments : {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows  10 64-bit'
                },
                {
                    name: 'Procesador',
                    value: 'Intel i5-4670k or AMD Ryzen 3 1200'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT(8GB) or Intel Arc A750'
                },
                {
                    name: 'DirectX',
                    value: 'Versión 12'
                },
                {
                    name: 'Almacenamiento',
                    value: '190 GB de espacio disponible'
                }

            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows  10 64-bit'
                },
                {
                    name: 'Procesador',
                    value: 'Intel i5-8600 or AMD Ryzen 5 3600'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA RTX 2060 Super or AMD RX 5700 or Intel Arc A770'
                },
                {
                    name: 'DirectX',
                    value: 'Versión 12'
                },
                {
                    name: 'Almacenamiento',
                    value: '190 GB de espacio disponible'
                }
            ]
        },
        images: [
            'https://i.postimg.cc/DzQBzfdZ/GODRagnarok-0.jpg',
            'https://i.postimg.cc/0Q8ZKgcC/GODRagnarok-1.jpg',
            'https://i.postimg.cc/5tWs1QzT/GODRagnarok-2.jpg',
            'https://i.postimg.cc/DZB6qCN3/GODRagnarok-3.jpg',
            'https://i.postimg.cc/3NNB9XM4/GODRagnarok-4.jpg'
        ],
        sypnosis: [
            "God of War Ragnarök es un juego de acción y aventura en el que los jugadores se meten en la piel de Kratos y su hijo, quienes se embarcan en una misión para evitar la llegada del Ragnarök. Los jugadores exploran los Nueve Reinos, enfrentándose a enemigos humanos como los saqueadores o a criaturas fantásticas en combates cuerpo a cuerpo. Los jugadores usan el hacha Leviatán y las Espadas del Caos para combatir a los enemigos con sangrientos ataques que resultan en decapitaciones y desmembramientos. Tras debilitar al enemigo, los jugadores pueden realizar movimientos finales como empalamientos, desmembramientos o decapitaciones en primer plano. Los diálogos contienen lenguaje soez."
        ],
        price: 199.00,
        gender:[
            'Acción',
            'Aventura',
            'Rol'
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=vtFhDrMIZjE&t=3s&ab_channel=PlayStationLatinoam%C3%A9rica',
        info: [
            {
                name: 'Fecha de estreno',
                value: '19/09/2024',
            },
            {
                name: 'Plataforma',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '190 Gbs'
            },
            {
                name: 'Información adicional',
                value: 'Nada'
            },
        ],
        quanty: 1
    }),

    new Game({name: "Forza Horizon 5",
        info: [
            {
                name: 'Fecha de estreno',
                value: ' 8/11/2021',
            },
            {
                name: 'Plataforma',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '110 Gbs'
            },
            {
                name: 'Información adicional',
                value: 'Nada'
            },
        ],
        id: "FH5-2021",  
        poster: "https://i.postimg.cc/dQhN2FJW/Forza-Horizon-5-Poster.jpg",  
        images: [
            "https://i.postimg.cc/fLrXz1Fy/Forza-Horizon-5-0.jpg",
            "https://i.postimg.cc/V5yCMnzc/Forza-Horizon-5-1.jpg",
            "https://i.postimg.cc/k44Kd7TL/Forza-Horizon-5-2.jpg",
            "https://i.postimg.cc/8cfvjtQH/Forza-Horizon-5-3.jpg",
            "https://i.postimg.cc/BZRYNz6J/Forza-Horizon-5-4.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'Procesador',
                    value: 'Intel i5-4460 or AMD Ryzen 3 1200'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM',
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GTX 970, AMD RX 470, or Intel Arc A380'
                },
                {
                    name: 'Almacenamiento',
                    value: '110 GB de espacio disponible'
                },
                {
                    name: 'Red',
                    value: 'Conexión de banda ancha a Internet'
                },

            ]
            ,
            recommended: [
                {
                    name: 'Procesador',
                    value: 'Intel i5-8400 or AMD Ryzen 5 1500X'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM',
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GTX 1070, AMD RX 590, or Intel Arc A750'
                },
                {
                    name: 'Almacenamiento',
                    value: '110 GB de espacio disponible'
                },
                {
                    name: 'Red',
                    value: 'Conexión de banda ancha a Internet'
                },
            ]
        },
        sypnosis: ["Explora el vibrante y diverso paisaje de México en una experiencia de carreras de mundo abierto. Forza Horizon 5 te permite conducir cientos de vehículos y experimentar un mundo realista y detallado."],
        gender: ["Carreras" , "Mundo Abierto"],
        price: 199.00,  
        trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        quanty: 1
    }),

    new Game({name :'Final Fantasy 16',
        id : 'Final Fantasy 16',
        requeriments : {
            minimum: [
                {
                    name: 'Objetivo',
                    value: '720p @30 FPS'
                },
                {
                    name: 'SO',
                    value: 'Windows® 10 / 11 64-bit'
                },
                {
                    name: 'Procesador',
                    value: 'AMD Ryzen™ 5 1600 / Intel® Core™ i5-8400'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'AMD Radeon™ RX 5700 / Intel® Arc™ A580 / NVIDIA® GeForce® GTX 1070'
                },
                {
                    name: 'Almacenamiento',
                    value:'170 GB de espacio disponible'
                },
                {
                    name: 'Notas adicionales',
                    value: ' 30FPS at 720p expected. SSD required. VRAM 8GB or above'
                }
            ],
            recommended: [
                {
                    name: 'Objetivo',
                    value: '1080p @60 FPS'
                },
                {
                    name: 'SO',
                    value: 'Windows® 10 / 11 64-bit'
                },
                {
                    name: 'Procesador',
                    value: 'AMD Ryzen™ 7 5700X / Intel® Core™ i7-10700'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'AMD Radeon™ RX 6700 / Intel® Arc™ A580 / NVIDIA® GeForce® RTX 2080'
                },
                {
                    name: 'Almacenamiento',
                    value:'170 GB de espacio disponible'
                },
                {
                    name: 'Notas adicionales',
                    value: '60FPS at 1080p expected. SSD required. VRAM 8GB or above.'
                },
            ],
        },
        poster: 'https://i.postimg.cc/jj9PKGB5/Final-Fantasy-XVI-Poster.jpg',
        images: [
            "https://i.postimg.cc/7Yy15rhJ/FFXVI-0.jpg",
            "https://i.postimg.cc/vHLr92xq/FFXVI-1.jpg",
            "https://i.postimg.cc/cLFfkKmf/FFXVI-2.jpg",
            "https://i.postimg.cc/4xfz1vzJ/FFXVI-3.jpg",
            "https://i.postimg.cc/bvdk7zCW/FFXVI-4.jpg"
        ],
        sypnosis: [
            "Final Fantasy XVI no es tan solo la nueva entrega numerada de una de las sagas más veteranas, icónicas e importantes de la industria. También es el juego que tiene la responsabilidad de devolverle el lustre que ha ido perdiendo en los últimos años con sus tropiezos más recientes. De volver a enamorar tanto a los jugadores de toda la vida como a aquellos que nunca se han atrevido a darle una oportunidad. De llegar a lo más alto y de convertirse, una vez más, en todo un referente.",
            "Por eso, Square Enix ha tirado la casa por la ventana y ha juntado a un auténtico equipo de estrellas y leyendas del sector que cuenta entre sus principales responsables con nombres como Naoki Yoshida (productor), Hiroshi Takai (director), Ryota Suzuki (director de combate), Kazuya Takahashi (diseñador de personajes) o Masayoshi Soken (compositor), cuyo esfuerzo por hacer de esta la mejor obra posible nos quedó muy patente desde el mismísimo día en el que se anunció.",
            "Ahora, con el producto final en nuestras manos y tras haberlo jugado de cabo a rabo, podemos confirmar que, aunque sigue quedándose un par de peldaños por detrás de las vacas sagradas de la saga, esta vez sí que hemos disfrutado de un gran videojuego que nos ha regalado, además de un protagonista inolvidable y un mundo fascinante, algunas de las batallas más espectaculares y sorprendentes que hemos vivido nunca en este apasionante hobby."
        ],
        price: 170.00,
        gender: [
            'Acción',
            'Rol'
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=l3WAgN7tPHU&ab_channel=Vandal',
        info: [
            {
                name: 'Fecha de estreno',
                value: '22/6/2023',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '170 Gbs'
            },
        ],
        quanty: 1
    }),

    new Game({name: "Resident Evil 4 Remake",
        info: [
            {
                name: 'Fecha de estreno',
                value: '23/03/2023',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '51 Gbs'
            },
        ],
        id: 'Resident Evil 4 Remake',
        poster: "https://i.postimg.cc/FFPmRNDD/RE-4-poster.jpg",
        images: [
            "https://i.postimg.cc/vBbM1mJS/RE-4-0.jpg",
            "https://i.postimg.cc/wMBpVGTX/RE-4-1.jpg",
            "https://i.postimg.cc/PxyH1jhf/RE-4-2.jpg",
            "https://i.postimg.cc/d3SKSjLz/RE-4-3.jpg",
            "https://i.postimg.cc/pXpv54Sx/RE-4-4.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'AMD Ryzen 3 1200 / Intel Core i5-7500'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 105 Ti with 4GB VRAM'
                },
                {
                    name: 'Almacenamiento',
                    value: '51 GB de espacio disponible'
                }
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'AMD Ryzen 5 3600 / Intel Core i7 8700'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070'
                },
                {
                    name: 'Almacenamiento',
                    value: '51 GB de espacio disponible'
                }
            ]
        },
        sypnosis: ["Leon debe enfrentarse a un culto y a peligros biológicos en una aventura de terror y supervivencia."],
        gender: ["Survival", "Horror", "Acción"],
        price: 155.00,
        trailerUrl: "https://www.youtube.com/watch?v=O75Ip4o1bs8&pp=ygUWVHJhaWxlciBSZXNpZGVuIGV2aWwgNA%3D%3D",
        quanty: 1
    }),
    
    new Game({name: "A Plague Tale: Requiem",
        info: [
            {
                name: 'Fecha de estreno',
                value: '17/10/2022',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '55 Gbs'
            },
        ],
        id: 3,
        poster: "https://i.postimg.cc/wThCNzkC/A-Plague-Tale-Of-Requiem-Poster.jpg",
        images: [
            "https://i.postimg.cc/sgst9L6v/A-Plague-Tale-Of-Requiem-4.jpg",
            "https://i.postimg.cc/Y9Z56qZH/A-Plague-Tale-Of-Requiem-3.jpg",
            "https://i.postimg.cc/HsDGjnb0/A-Plague-Tale-Of-Requiem-2.jpg",
            "https://i.postimg.cc/prjgqMMn/A-Plague-Tale-Of-Requiem-1.jpg",
            "https://i.postimg.cc/XNySVdB7/A-Plague-Tale-Of-Requiem-0.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i5-4690k (3.5Ghz) / AMD FX-8300 (3.3 Ghz)'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: '4 GB, GeForce GTX 970/Radeon RX 590'
                },
                {
                    name: 'Almacenamiento',
                    value: '55 GB de espacio disponible'
                },
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i7-8700K (3.7 GHz) / AMD Ryzen 5 3600 (3.6 GHz)'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: '8 GB, GeForce RTX 3070/Radeon RX 6800 XT'
                },
                {
                    name: 'Almacenamiento',
                    value: ' 55 GB de espacio disponible'
                }
            ]
        },
        sypnosis: ["Continúa la historia de Amicia y Hugo en una aventura medieval marcada por la peste y los enemigos sobrenaturales."],
        gender: ["Aventura" , "Acción"],
        price: 149.00,
        trailerUrl: "https://www.youtube.com/watch?v=thMiXyI4nSI&ab_channel=Meflyx",
        quanty: 1
    }),

    new Game({name: "Dragon Age: The Veilguard",
        info: [
            {
                name: 'Fecha de estreno',
                value: '31/10/2024',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '100 Gbs'
            },
        ],
        id: "DRG001",
        poster: "https://i.postimg.cc/L5kxJ9Mv/Drago-Age-Veilguard-poster.jpg",
        images: [
            "https://i.postimg.cc/Qxs6RTpz/Drago-Age-Veilguard-4.jpg",
            "https://i.postimg.cc/x8VsjkBc/Drago-Age-Veilguard-3.jpg",
            "https://i.postimg.cc/mDHXG3Xv/Drago-Age-Veilguard-2.jpg",
            "https://i.postimg.cc/44pLL5ht/Drago-Age-Veilguard-1.jpg",
            "https://i.postimg.cc/zfMtM2jw/Drago-Age-Veilguard-0.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10/11 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i5-8400 / AMD Ryzen 3 3300X'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GTX 970/1650 / AMD Radeon R9 290X'
                },
                {
                    name: 'Almacenamiento',
                    value: '100 GB de espacio disponible'
                },
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10/11 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: ' Intel Core i9-9900K / AMD Ryzen 7 3700X'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA RTX 2070 / AMD Radeon RX 5700XT'
                },
                {
                    name: 'Almacenamiento',
                    value: '100 GB de espacio disponible'
                },
            ]
        },
        sypnosis: [
            "Adéntrate en Thedas, una tierra vibrante de agrestes páramos, laberintos traicioneros y ciudades resplandecientes, rebosantes de conflictos y magia secreta. Ahora, un par de dioses antiguos vuelven a ser libres tras varios siglos de oscuridad y están decididos a destruir el mundo.",
            "Thedas necesita a alguien con quien se pueda contar. Álzate como Rook, la nueva figura heroica de Dragon Age. Sé quien quieras ser y juega con estilo propio mientras luchas para impedir que los dioses corrompan el mundo. Pero no es una tarea que pueda hacerse sin compañía, pues la suerte está en tu contra. Lidera a un equipo de siete camaradas, con historias llenas de matices que podrás descubrir y condicionar, para convertiros en la Guardia del Velo.",
            "Une a la guardia del Velo y desafía a los dioses en Dragon Age™: The Veilguard, un inmersivo juego de rol en solitario, en el que tendrás que destacar como líder."
        ],
        gender: ["RPG"],
        price: 149.00,
        trailerUrl: "https://www.youtube.com/watch?v=fQj_P2HKYxY&ab_channel=Solorion8",
        quanty: 100
    }),

    new Game({name: "Horizon Zero Dawn Remastered",
        info: [
            {
                name: 'Fecha de estreno',
                value: '31/10/2024',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '135 Gbs'
            },
        ],
        id: "HZD001",
        poster: "https://i.postimg.cc/j29SJbQw/Horizon-ZD-poster.jpg",
        images: [
            "https://i.postimg.cc/mrNkpKRJ/Horizon-ZD-0.jpg",
            "https://i.postimg.cc/Bbtv66Df/Horizon-ZD-1.jpg",
            "https://i.postimg.cc/50s0bvXm/Horizon-ZD-2.jpg",
            "https://i.postimg.cc/vBYBJXZB/Horizon-ZD-3.jpg",
            "https://i.postimg.cc/fWgLPcnz/Horizon-ZD-4.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i3-8100 or AMD Ryzen 3 1300X'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GeForce GTX 1650 4GB or AMD Radeon RX 5500 XT 4GB'
                },
                {
                    name: 'Almacenamiento',
                    value: '135 GB de espacio disponible'
                },
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i5-8600 or AMD Ryzen 5 3600'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GeForce RTX 3060 or AMD Radeon RX 5700'
                },
                {
                    name: 'Almacenamiento',
                    value: '135 GB de espacio disponible'
                },
            ]
        },
        sypnosis: ["Aloy explora un mundo post-apocalíptico dominado por máquinas."],
        gender: ["Acción" , "Aventura", "Mundo Abierto"],
        price: 159.00,
        trailerUrl: "https://www.youtube.com/watch?v=JjEJBL8o9Z0",
        quanty: 1
    }),

    new Game({name: "Star Wars Jedi: Survivor",
        info: [
            {
                name: 'Fecha de estreno',
                value: '28/04/2023',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '155 Gbs'
            },
        ],id: "SWJ001",
        poster: "https://i.postimg.cc/x1G99H7b/Star-Wars-JS-Poster.jpg",
        images: [
            "https://i.postimg.cc/1z9sXXh7/Star-Wars-JS-4.jpg",
            "https://i.postimg.cc/wTm6bnQ2/Star-Wars-JS-3.jpg",
            "https://i.postimg.cc/J09RzQMj/Star-Wars-JS-2.jpg",
            "https://i.postimg.cc/jq9xcRPC/Star-Wars-JS-1.jpg",
            "https://i.postimg.cc/Sxby0VZh/Star-Wars-JS-0.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: '4 core / 8 threads | Intel Core i7-7700 | Ryzen 5 1400'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: '8GB VRAM | GTX 1070 | Radeon RX 580'
                },
                {
                    name: 'Almacenamiento',
                    value: '155 GB de espacio disponible'
                },
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: '4 core / 8 threads | Intel Core i5 11600K | Ryzen 5 5600X'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: '8GB VRAM | RTX2070 | RX 6700 XT'
                },
                {
                    name: 'Almacenamiento',
                    value: '155 GB de espacio disponible'
                },
            ]
        },
        sypnosis: ["Cal Kestis continúa su lucha contra el Imperio y sus Inquisidores."],
        gender: ["Acción","Aventura"],
        price: 259.00,
        trailerUrl: "https://youtube.com/star-wars-jedi-survivor-trailer",
        quanty: 1
    }),
    
    new Game ({name: "Senua's Saga: Hellblade II",
        info: [
            {
                name: 'Fecha de estreno',
                value: '21/05/2024',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '70 Gbs'
            },
        ]
        ,id: "SSH002",
        poster: "https://i.postimg.cc/8kb3k4PG/Senua-Saga-HELLBLADE-2-poster.jpg",
        images: [
            "https://i.postimg.cc/zvqcSb74/Senua-Saga-HELLBLADE-2-0.jpg",
            "https://i.postimg.cc/V6qhCBqj/Senua-Saga-HELLBLADE-2-1.jpg",
            "https://i.postimg.cc/gj4BMzBj/Senua-Saga-HELLBLADE-2-2.jpg",
            "https://i.postimg.cc/pXXSmjpF/Senua-Saga-HELLBLADE-2-3.jpg",
            "https://i.postimg.cc/xTx4MdzF/Senua-Saga-HELLBLADE-2-4.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel i5-8400 | AMD Ryzen 5 2600'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'Nvidia GTX 1070 | AMD RX 5700 | Intel Arc A580'
                },
                {
                    name: 'Almacenamiento',
                    value: '70 GB de espacio disponible'
                },
                {
                    name: 'Notas adicionales',
                    value: 'SSD Required'
                }
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel i7-10700K | AMD Ryzen 5 5600X'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'Nvidia RTX 3080 | AMD RX 6800 XT | Intel Arc A770'
                },
                {
                    name: 'Almacenamiento',
                    value: '70 GB de espacio disponible'
                },
                {
                    name: 'Notas adicionales',
                    value: 'SSD Required'
                }
            ]
        },
        sypnosis: ["Senua se embarca en un viaje oscuro y psicológico mientras enfrenta sus propios demonios."],
        gender: ["Acción", "Aventura"],
        price: 97.00,
        trailerUrl: "https://www.youtube.com/watch?v=q7R9TK410Pg&pp=ygUcaGVsbGJsYWRlIDIgdHJhaWxlciBlc3Bhw7FvbA%3D%3D",
        quanty: 1
    }),

    new Game({name:'Red Dead Redemption 2',
        id: 'Red Dead Redemption 2',
        info: [
            {
                name: 'Fecha de estreno',
                value: '05/12/2019',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '150 Gbs'
            },
        ],
        poster: "https://i.postimg.cc/W1TjCbnn/RDR2-Poster.jpg",
        images : [
            "https://i.postimg.cc/g2sdWFtP/RDR2-4.jpg",
            "https://i.postimg.cc/7hzw85dB/RDR2-3.jpg",
            "https://i.postimg.cc/vHWb06WT/RDR2-2.jpg",
            "https://i.postimg.cc/wTK95kRn/RDR2-1.jpg",
            "https://i.postimg.cc/sfGVZLxp/RDR2-0.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel® Core™ i5-2500K / AMD FX-6300'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB'
                },
                {
                    name: 'Almacenamiento',
                    value: '150 GB de espacio disponible'
                }
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel® Core™ i7-4770K / AMD Ryzen 5 1500X'
                },
                {
                    name: 'Memoria',
                    value: '12 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB'
                },
                {
                    name: 'Almacenamiento',
                    value: '150 GB de espacio disponible'
                }
            ]
        },
        sypnosis: [
            "América, 1899.",
            "Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y los mejores cazarrecompensas de la nación pisándoles los talones, la banda deberá atracar, robar y luchar para sobrevivir en su camino por el escabroso territorio del corazón de América. Mientras las divisiones internas aumentan y amenazan con separarlos a todos, Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer."
        ],
        gender: ["Acción","Aventura"],
        price: 219.00,
        trailerUrl: "https://www.youtube.com/watch?v=MyaYlbizpvs&pp=ygUmcmVkIGRlYWQgcmVkZW1wdGlvbiAyIHRyYWlsZXIgZXNwYcOxb2w%3D",
        quanty: 1
    }),

    new Game({name:'DOOM Eternal',
        id: 'DOOM Eternal',
        info: [
            {
                name: 'Fecha de estreno',
                value: '20/03/2020',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '80 Gbs'
            },
        ],
        poster: "https://i.postimg.cc/rsX74QZJ/DOOM-ETERNAL-poster.jpg",
        images : [
            "https://i.postimg.cc/1XG2rwLZ/DOOM-ETERNAL-4.jpg",
            "https://i.postimg.cc/YSP5rp1T/DOOM-ETERNAL-3.jpg",
            "https://i.postimg.cc/G2sZ9ZKt/DOOM-ETERNAL-2.jpg",
            "https://i.postimg.cc/yNWqCJSF/DOOM-ETERNAL-1.jpg",
            "https://i.postimg.cc/qv1fFcgJ/DOOM-ETERNAL-0.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: '64-bit Windows 7 / 64-Bit Windows 10'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i5 @ 3.3 GHz or better, or AMD Ryzen 3 @ 3.1 GHz or better'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GeForce GTX 1050Ti (4GB), GTX 1060 (3GB), GTX 1650 (4GB) or AMD Radeon R9 280(3GB), AMD Radeon R9 290 (4GB), RX 470 (4GB)'
                },
                {
                    name: 'Almacenamiento',
                    value: '80 GB de espacio disponible'
                }
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Intel Core i7-6700K or better, or AMD Ryzen 7 1800X or better'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'NVIDIA GeForce GTX 1060 (6GB), NVIDIA GeForce 970 (4GB), AMD RX 480 (8GB)'
                },
                {
                    name: 'Almacenamiento',
                    value: '80 GB de espacio disponible'
                }
            ]
        },
        sypnosis: [
            "Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones aniquilando demonios para detener la destrucción definitiva de la humanidad.",
            "No Le Tienen Miedo A Nada... Salvo A Ti.",
            "Disfruta de la mejor combinación de velocidad y potencia en DOOM Eternal, que trae un salto cualitativo del combate en primera persona."
        ],
        gender: ["Acción"],
        price: 119.00,
        trailerUrl: "https://www.youtube.com/watch?v=-fsz6b3IBJY&pp=ygUdRE9PTSBldGVybmFsIHRyYWlsZXIgZXNwYcOxb2w%3D",
        quanty: 1
    }),
    
    new Game({name:'Final Fantasy VII Remake Intergrade',
        id: 'Final Fantasy VII Remake Intergrade',
        info: [
            {
                name: 'Fecha de estreno',
                value: '17/06/2022',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '100 Gbs'
            },
        ],
        poster: "https://i.postimg.cc/j5rhQmKL/FFVII-REMAKE-poster.jpg",
        images : [
            "https://i.postimg.cc/8PytQZd0/FFVII-REMAKE-0.jpg",
            "https://i.postimg.cc/nhCTHq0c/FFVII-REMAKE-1.jpg",
            "https://i.postimg.cc/CK8N8Y33/FFVII-REMAKE-2.jpg",
            "https://i.postimg.cc/2SMG33Kd/FFVII-REMAKE-3.jpg",
            "https://i.postimg.cc/63LfHc5z/FFVII-REMAKE-4.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'AMD FX-8350 / Intel® Core™ i5-3330'
                },
                {
                    name: 'Memoria',
                    value: '8 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'AMD Radeon™ RX 480 / NVIDIA® GeForce® GTX 780 / 3GB VRAM required'
                },
                {
                    name: 'Almacenamiento',
                    value: '100 GB de espacio disponible'
                }
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: ' AMD Ryzen™ 3 3100 / Intel® Core™ i7-3770'
                },
                {
                    name: 'Memoria',
                    value: '12 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'AMD Radeon™ RX 5700 / NVIDIA® GeForce® GTX 1080 / 8GB VRAM required'
                },
                {
                    name: 'Almacenamiento',
                    value: '100 GB de espacio disponible'
                }
            ]
        },
        sypnosis: [
            "FINAL FANTASY VII REMAKE es una atrevida reconstrucción del videojuego FINAL FANTASY VII, que fue lanzado en 1997, y se ha desarrollado obedeciendo a la visión de los desarrolladores principales del original.",
            "Este juego aclamado por la crítica combina el combate tradicional por turnos con la acción en tiempo real, y se ofrece ahora por primera vez en Steam junto con FF7R EPISODE INTERmission, una nueva historia con Yuffie Kisaragi como protagonista.",
            "",
            "HISTORIA",
            "Mediante sus reactores succionadores de mako, la savia del planeta, la Compañía de Electricidad y Energía Shinra prácticamente se ha apoderado del mundo. Solo un grupo de idealistas conocido como Avalancha opone resistencia a su dominio.",
            "Cloud, un Soldado de élite convertido en mercenario, participa en una operación de Avalancha cuyo fin es la destrucción del reactor de mako n.º 1 de Midgar. La explosión convierte la ciudad en un infierno, y Cloud sufre alucinaciones de su archienemigo, a quien creía muerto."
        ],
        gender: ["Acción","Aventura","Rol"],
        price: 279.00,
        trailerUrl: "https://www.youtube.com/watch?v=H9vt5mDOOEI&pp=ygUyZmluYWwgZmFudGFzeSA3IHJlbWFrZSBpbnRlcmdyYWRlIHRyYWlsZXIgZXNwYcOxb2w%3D",
        quanty: 1
    }),

    new Game({name:'Cyberpunk 2077',
        id: 'Cyberpunk 2077',
        info: [
            {
                name: 'Fecha de estreno',
                value: '09/12/2020',
            },
            {
                name: 'Plataformas',
                value: ['PC']
            },
            {
                name: 'Idioma/Textos',
                value: ['Español']
            },
            {
                name: 'Idioma/Voces',
                value: ['Español']
            },
            {
                name: 'Peso',
                value: '70 Gbs'
            },
        ],
        poster: "https://i.postimg.cc/MGzT7mNz/Cyberpunk-2077-poster.jpg",
        images : [
            "https://i.postimg.cc/cJTJX8Gw/Cyberpunk-2077-4.jpg",
            "https://i.postimg.cc/ncQCpzqf/Cyberpunk-2077-3.jpg",
            "https://i.postimg.cc/XNPpRFGg/Cyberpunk-2077-2.jpg",
            "https://i.postimg.cc/9Qd0wnxx/Cyberpunk-2077-1.jpg",
            "https://i.postimg.cc/JzVtnLQD/Cyberpunk-2077-0.jpg"
        ],
        requeriments: {
            minimum: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Core i7-6700 or Ryzen 5 1600'
                },
                {
                    name: 'Memoria',
                    value: '12 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380'
                },
                {
                    name: 'Almacenamiento',
                    value: '70 GB de espacio disponible'
                },
                {
                    name: 'Notas adicionales',
                    value: 'SSD required'
                }
            ],
            recommended: [
                {
                    name: 'SO',
                    value: 'Windows 10 (64 bit)'
                },
                {
                    name: 'Procesador',
                    value: 'Core i7-12700 or Ryzen 7 7800X3D'
                },
                {
                    name: 'Memoria',
                    value: '16 GB de RAM'
                },
                {
                    name: 'Gráficos',
                    value: 'GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770'
                },
                {
                    name: 'Almacenamiento',
                    value: '70 GB de espacio disponible'
                },
                {
                    name: 'Notas adicionales',
                    value: 'SSD required.'
                }
            ]
        },
        sypnosis: [
            "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en la megalópolis de Night City, donde te pondrás en la piel de un mercenario o una mercenaria ciberpunk y vivirás su lucha a vida o muerte por la supervivencia. Mejorado y con contenido nuevo adicional gratuito. Personaliza tu personaje y tu estilo de juego a medida que aceptas trabajos, te labras una reputación y desbloqueas mejoras. Las relaciones que forjes y las decisiones que tomes darán forma al mundo que te rodea. Aquí nacen las leyendas. ¿Cuál será la tuya?"
        ],
        gender: ["Rol"],
        price: 199.00,
        trailerUrl: "https://www.youtube.com/watch?v=5c7rAU5UmWY",
        quanty: 1
    }),
]
