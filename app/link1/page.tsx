import { content } from "./style.css";
import { Box } from './box';
import { Suspense } from "react";
export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className={content}>
      <h1>Page 1</h1>
      <Suspense fallback={null}>
      <Box>
      {/* Or any valid CSS value */}
      <Box>
        Hello world!
      </Box>
    </Box>
    </Suspense>
    </div>
  );
}
