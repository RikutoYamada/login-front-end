import clsx from 'clsx';

const Button = 
  (
    {
      variant = 'btn-accent',
      children
    }
  ) => {
    return (
      <button className={clsx('btn text-base-100', variant)}>{children}</button>
    )
  }

export default Button