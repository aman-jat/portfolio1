import './Box.css';

const Box = () => {
  const height = 350;
  const width = 300;
  const gap = 50;

  const translateY = `${Math.sqrt(gap * gap + gap * gap)}px`;

  return (
    <div className='flex flex-col'>
      {/* Upper Div - Main Section */}
      <div
        style={{ height: `${height}px`, width: `${width}px` }}
        className={`border-2 border-white border-b-0`}></div>

      {/* Lower Section */}
      <div className='flex flex-row'>
        {/* Lower Left Section */}
        <div className='w-[250px] h-[50px] border-2 border-white border-t-0 border-r-0'></div>

        {/* Lower Right Section */}
        <div
          className={`  border-b-[1px] border-l-[1px] border-r-[1px] border-b-slate-600 border-l-slate-600 border-r-slate-600  border-t-2 border-white`}
          style={{
            height: 'none',
            // width: `${gap}px`,
            transformOrigin: 'top right',
            width: `${translateY}`,
            // height: `10px`,
            transform: `rotate(-45deg) translate(0px, 0px)`,
          }}></div>
      </div>
    </div>
  );
};

export default Box;
