export default function Spinner(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-[90%]">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-400"></div>
    </div>
  );
}
