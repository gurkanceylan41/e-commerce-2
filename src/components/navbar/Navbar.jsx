import NavbarRight from "./navbaritem/NavbarRight";
import NavbarLeft from "./navbaritem/NavbarLeft";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
