
export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>Page 2</h1>
    </div>
  );
}
