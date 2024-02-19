import {iSidebar} from '@/app/types/types';
import {SidebarLinks} from '../data/SidebarLinksData';
import Link from 'next/link';
export default function Sidebar({isOpen}: iSidebar) {
  return (
    <aside
      className={`absolute z-50 inset-0 right-0 bg-banner transition duration-700 ease-out grid place-items-center ${
        isOpen ? 'translate-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <ul className='h-full flex flex-col justify-around py-20 text-2xl'>
        {SidebarLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
