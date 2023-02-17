import clsx from 'clsx';

const Button = (
    {
      type = 'button',
      variant = 'accent',
      children
    }
  ) => {
    return (
      <button
        type={type}
        className={clsx(
          'btn text-base-100',
          `btn-${variant}`
        )}
      >
        {children}
      </button>
    )
  }

export default Button