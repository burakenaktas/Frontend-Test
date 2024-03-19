const NavLink = ({ title, href }) => {
  return (
    <a
      href={href}
      className="text-white font-bold border-b-4 px-1 border-transparent transition-all duration-300	pb-2 hover:border-secondary"
    >
      {title}
    </a>
  );
};

export default NavLink;
