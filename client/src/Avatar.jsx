export default function Avatar({username}) {
  const color = 'bg-teal-200';
  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center "+color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
    </div>
  );
}