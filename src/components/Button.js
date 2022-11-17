const Button = ({ variant, children, className, href, btnIcon, size }) => {
  const variants = {
    orange: 'bg-primary shadow-primary/30 text-white outline-primary/60 hover:outline outline-2',
    'outline-orange': 'bg-primary/10 text-primary outline-primary/60 outline outline-2',
    transparent: 'bg-transparent text-dark/80',
  };

  const sizes = {
    sm: '',
    md: 'lg:px-8 py-2',
    lg: 'lg:px-14 py-3',
    full: 'w-full py-3',
  };

  const pickedSize = sizes[size];

  const pickedVariant = variants[variant];

  return (
    <a href={href} target="_blank" className={`text-center rounded-md shadow-xl hover:bg-transparent hover:text-primary ${pickedVariant} ${className} ${pickedSize}`} rel="noreferrer">
      {children}
      {btnIcon}
    </a>
  );
};

export default Button;
