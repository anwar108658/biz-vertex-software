const MenuUI = ({data}:any) => {
  return (
    <>
    {data && data.map((item:any, index:any) => (
      <li key={index} className="w-full text-center p-1 hover:bg-gray-800 cursor-pointer hover:scale-z-50 bg-gray-900">{item}</li>
    ))}
    </>
  )
}

export default MenuUI