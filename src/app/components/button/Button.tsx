const Button = ({ children, variant = 'text', size = 'medium' }) => {
  let classes = '  ';

  switch (size) {
    case 'small':
      classes += 'py-1 px-2 text-[18px]';
      break;
    case 'large':
      classes += 'py-2 px-6 text-lg';
      break;
    case 'medium':
      classes += 'py-1 px-4 text-base';
      break;
  }

  switch (variant) {
    case 'filled':
      classes += ` 
      font-medium
                bg-white 
                text-black
                hover:bg-opacity-60 
                `;
      break;

    case 'soft_filled':
      classes += `
        border-[1px] 
        border-[#ffffff20] 
        text-[#ffffffb1]
        hover:text-[#fffffff1] 
        hover:bg-[#ffffff20] 
        `;
      break;

    default:
      classes +=
        ' text-[#ffffff90]  hover:text-[#ffffff] hover:bg-[#ffffff10] ';
      break;
  }

  return (
    <button
      className={`
        
        min-w-[100px]
         ${classes} 
        flex flex-row gap-6 
        items-center 
        justify-center
        transition ease-in-out duration-300  
        rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
