"use client"
import React, { useState ,useEffect} from 'react';
import Link from 'next/link';
import { getPermissions } from '@/models/permissions';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // You can use any icon library
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation'
const CollapseNavbar = () => {
  const { data: session} = useSession();
  const [y, setY] = useState();
  const pathname = usePathname();
  useEffect(() => {
    if (session) {
      //console.log(session);
     setY(session.user.authority);
    }
  }, [session]);
  //console.log(y);
  const permission = getPermissions(y);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* Hamburger menu button for small screens */}
      <div className="md:hidden">
        <button
          className="fixed top-5 left-2 z-50 text-gray-700"
          onClick={toggleNav}
        >
          {isNavOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
        </button>
      </div>

      {/* Sidebar navigation for medium and large screens */}
      <aside className="hidden md:block md:relative top-0 left-0 h-screen w-full lg:w-64 md:w-40 bg-white p-6 shadow-lg z-50">
        <nav className="space-y-4">
          {permission.map((item) => (
            <Link key={item.urlpath} href={item.urlpath} className={`block  hover:text-blue-500  text-xl font-semibold ${pathname === item.urlpath ? ' text-blue-500 ' : 'text-gray-500'} `}>
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Full-screen navigation for small screens */}
      <aside className={`fixed text-center top-0 left-0 h-full w-full bg-white p-6 shadow-lg z-40 transition-transform transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="space-y-4">
          {permission.map((item) => (
            <Link key={item.urlpath} href={item.urlpath} className={`block text-gray-500 hover:text-gray-700 font-semibold ${pathname === item.urlpath ? 'bg-blue-500 text-white ' : ''}`}>
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default CollapseNavbar;