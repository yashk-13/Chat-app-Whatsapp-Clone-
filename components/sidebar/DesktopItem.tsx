"use client";

import clsx from "clsx";
import Link from "next/link";

type Props = {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
};

function DesktopItem({ label, icon: Icon, href, onClick, active }: Props) {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          `group flex gap-3 m-2 rounded-3xl p-3 text-sm leading-6 font-semibold text-gray-500 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-neutral-800`,
          active && "bg-gray-100 dark:bg-gray-900 dark:text-white text-black"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
}

export default DesktopItem;
