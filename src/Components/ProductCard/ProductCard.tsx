

interface Props {
    item : {
        name   : string,
        id     : number,
        Images : string[],
        details: [],
        price  : number 
    }
}

export const ProductCard : React.FC<Props> = ({item}) => {
  return (
    <div>ProductCard</div>
  )
}
