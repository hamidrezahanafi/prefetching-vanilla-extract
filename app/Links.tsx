"use client";

import { useRouter } from "next/navigation";
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
export default function Links() {
  const router = useRouter();

  return (
    <div>
        <a onMouseEnter={() => {
            router.prefetch("/link1", { kind: PrefetchKind.FULL});
        }}
        onClick={() => {
            router.push("/link1");
        }}
        >Link 1 with pushing next router</a>
        <a href="/link2" onMouseEnter={() => {
            router.prefetch("/link2", { kind: PrefetchKind.FULL});
        }}>Link 2</a>
    </div>
  );
}
