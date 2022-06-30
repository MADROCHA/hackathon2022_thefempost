
const Title = ({
  children,
  h = '2',
}) => {
  const generalTitleClass = 'text-violet-dark font-bold'
  const classH2 = `${generalTitleClass} text-[32px]`
  const classH3 = `${generalTitleClass} text-[24px]`
  const classH1 = `${generalTitleClass} text-[48px]`
  
  return (
    (h ==='2') 
    ? <h2 className={classH2} > {children} </h2>
    : (h === '3')
    ? <h3 className={classH3} > {children} </h3>
    : <h1 className={classH1} > {children} </h1>
  )
}

export default Title