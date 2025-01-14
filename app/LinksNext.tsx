"use client";

import Link from "next/link";
export default function LinksNext() {
  return (
    <div>
        <Link href="/link1" prefetch={true} onClick={() => {
            console.log("Link 1 clicked");
        }}>Link 1 Next</Link>
        <Link href="/link2" prefetch={true}>Link 2 Next</Link>
    </div>
  );
}
