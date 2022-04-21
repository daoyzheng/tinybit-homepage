import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-red-300">
      <div>Dao Zheng</div>
      <div>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default Navbar