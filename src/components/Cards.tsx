interface CardsType {
  children?: React.ReactNode
}

export default function Cards({children}: CardsType) {

  return(
    <>
      {children}  
    </>
  )
}