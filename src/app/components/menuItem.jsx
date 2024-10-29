import Link from "next/link";
import React from "react";

function MenuItem({ Icon, href, children }) {
  return (
    <Link href={href} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{children}</p>
    </Link>
  );
}

export default MenuItem;
