import { useRouter } from 'next/router';
import {HiOutlineHome} from 'react-icons/hi'
import {BiChevronRight} from 'react-icons/bi'
const Breadcrumbs = () => {
  const router = useRouter();
  const { pathname } = router;

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  function capitalizeFirstLetter(str:any) {
    return str
      .split(' ')
      .map((word:any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <nav>
      <ul className='flex flex-row text-blue-500'>
        <li className='mr-2'>
          {/* <a href="/">Home</a> */}
          <HiOutlineHome className='text-3xl'/>
        </li>
        {pathSegments.map((segment, index) => (
            <>
            <BiChevronRight className='text-3xl text-gray-500'/>
          <li key={index} className='mr-2 text-xl ml-2'>
            <a href={`/${pathSegments.slice(0, index + 1).join('/')}`}>{capitalizeFirstLetter(segment)}</a>
          </li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
