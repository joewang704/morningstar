import * as React from "react"

const Navbar = () => {
  return (
    <div className="flex justify-between w-full py-4 px-8 border-b border-gray-800">
      <div className="flex items-center ml-16 text-white">MSDA</div>
      <div className="flex items-center text-gray-600 text-sm">
        <Item>About Us</Item>
        <Item>Programs</Item>
        <Item>School Info</Item>
        <Item>Competition & Performances</Item>
        <Item>Parent Portal</Item>
      </div>
    </div>
  )
}

const Item = ({ children, sub }) => {
  return <div className="px-4 cursor-pointer hover:text-white transition-colors">{children}</div>
}

export default Navbar