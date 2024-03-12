"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = (props: ActiveLinkProps) => {
  const pathName = usePathname();

  const { path, text } = props;
  return (
    <Link
      href={path}
      className={`${style.link}  ${pathName === path && style["active-link"]}`}
    >
      {text}
    </Link>
  );
};
