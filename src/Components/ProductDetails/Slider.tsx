import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


interface Props {
    data: string[];
    interval: number;
}

export const Slider: React.FC<Props> = ({ data, interval = 4000 }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [loadedImages, setLoadedImages] = useState<number>(0); // Número de imágenes cargadas
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carga

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Incrementa el número de imágenes cargadas cuando cada imagen se carga
    const handleImageLoad = () => {
        setLoadedImages((prev) => prev + 1);
    };

    // Cambia el estado de carga cuando todas las imágenes se han cargado
    useEffect(() => {
        if (loadedImages === data.length) {
            setIsLoading(false);
        }
    }, [loadedImages, data.length]);

    // Desplazamiento automático
    useEffect(() => {
        if (isLoading) return; // No avanzar si aún está cargando

        const autoSlide = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(autoSlide);
    }, [currentIndex, interval, isLoading]);

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-[0px_0px_12px_-2px] dark:shadow-sky-300">
            {/* Animación de carga */}
            {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <div className="loader w-12 h-12 border-4 border-t-white border-gray-300 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Contenedor de las imágenes */}
            <div
                className={`flex transition-transform duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                    }`}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {data.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0"
                        onLoad={handleImageLoad} // Evento onLoad
                    />
                ))}
            </div>

            {/* Botón anterior */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full text-4xl"
                disabled={isLoading} // Deshabilitado mientras carga
            >
                <IoIosArrowBack />
            </button>

            {/* Botón siguiente */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full text-4xl"
                disabled={isLoading} // Deshabilitado mientras carga
            >
                <IoIosArrowForward />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-5">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`size-4 rotate-45 rounded-sm ${currentIndex === index
                                ? "bg-orange-500 dark:bg-violet-600"
                                : "bg-slate-700"
                            }`}
                        disabled={isLoading} // Deshabilitado mientras carga
                    ></button>
                ))}
            </div>
        </div>
    );
}
