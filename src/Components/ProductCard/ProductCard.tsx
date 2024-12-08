

interface Props {
  name: string,
  id: string,
  images: string[],
  info: {
    name: string;
    value: string;
  }[];
  poster: string;
  price: number;
  quanty: number;
  requeriments: {
    minimum: {
      name: string;
      value: string;
    }[],
    recommended: {
      name: string;
      value: string;
    }[]
  }
  sypnosis: string[],
  trailerUrl: string
}

export const ProductCard : React.FC<Props> = ({}) => {
  return (
    <div>ProductCard</div>
  )
}
