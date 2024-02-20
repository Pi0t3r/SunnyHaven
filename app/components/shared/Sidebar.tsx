import {iSidebar} from '@/app/types/types';
import {SidebarLinks} from '../data/SidebarLinksData';
import {useState} from 'react';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {motion} from 'framer-motion';

export default function Sidebar({isOpen, setIsOpen}: iSidebar) {
  const [openList, setOpenList] = useState(false);
  return (
    <aside
      className={`absolute z-50 inset-0 right-0 bg-banner transition duration-700 ease-out grid place-items-center ${
        isOpen ? 'translate-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <ul className='h-full flex flex-col justify-around py-20 text-2xl'>
        {SidebarLinks.map((item, index) => (
          <ul key={index}>
            {item.childrenLinks ? (
              <>
                <motion.span onClick={() => setOpenList(!openList)}>
                  {item.title}{' '}
                  <KeyboardArrowDownIcon
                    className={` transition duration-500 ease-in ${
                      openList ? 'rotate-180' : ''
                    }`}
                  />
                </motion.span>
                {openList && (
                  <motion.ul>
                    {item.childrenLinks.map((childItem, childIndex) => (
                      <motion.li
                        className='my-2'
                        initial={{y: 0, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 0, opacity: 0}}
                        key={childIndex}
                        transition={{duration: 0.5, delay: childIndex * 0.3}}
                      >
                        <Link
                          href={childItem.href}
                          className='text-gray-600'
                          onClick={() => setIsOpen(false)}
                        >
                          {childItem.title}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </>
            ) : (
              <li key={index}>
                <Link onClick={() => setIsOpen(false)} href={item.href}>
                  {item.title}
                </Link>
              </li>
            )}
          </ul>
        ))}
      </ul>
    </aside>
  );
}
