import clsx from "clsx"

const sizes = {
  sm: 'w-1/4',
  md: 'w-1/2',
  lg: 'w-4/5'
}

const Card = (
  {
    varient = 'base-100',
    size = 'sm',
    children
  }
) => {
  return (
    <div className={clsx('card shadow-xl', `bg-${varient}`, sizes[size])}>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

export default Card