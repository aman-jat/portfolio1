export default function App() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
    {
      name: 'Services',
      link: '/services',
    },
  ];
  return (
    <div className='bg-dark-gray-gradient flex items-center justify-center w-full '>
      <div className='flex w-full items-center max-w-[800px] justify-between px-4'>
        <div className='text-white font-bold text-2xl'>Logo</div>
        <div>
          <ul className='flex text-white gap-4'>
            {navItems.map(item => (
              <li key={item.name} className=''>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
