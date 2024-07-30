// #4-2-1. use client 추가
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// #4-1-1. next/link에서 <Link /> import
import Link from 'next/link'

// #4-2-2. next/navigation에서 usePathname(), clsx import
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; 

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // #4-2-3. usePathname 훅 사용
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // #4-1-2. app/ui/dashboard/nav-links.tsx에서 코드 변경
          <Link
            key={link.name}
            href={link.href}
            // #4-2-4. clsx를 활용하여 현재 활성 링크에 대한 조건부 스타일링 추가
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
