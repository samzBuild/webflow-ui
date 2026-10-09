const Navlink = () => {
  const navs = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "How It Works",
      link: "#works",
    },
    {
      name: "Services",
      link: "#services",
    },
  ];
  return (
    <ul className="flex gap-12 rounded-lg border-2 border-white bg-neutral-50 px-10 py-2 text-lg text-neutral-500">
      {navs.map((nav) => {
        return (
          <li>
            <a href={nav.link}>{nav.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlink;
