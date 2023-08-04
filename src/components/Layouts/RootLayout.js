const RootLayout = ({ children }) => {
  return (
    <>
      <nav className="navbar bg-orange-500 text-white px-[10%]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="normal-case text-lg">PC BUILDER LAB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className=" hover:text-white hover:bg-transparent">Products</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-orange-400 min-w-[200px]">
                  <li>
                    <a>CPU / Processor</a>
                  </li>
                  <li>
                    <a>Motherboard</a>
                  </li>
                  <li>
                    <a>Motherboard</a>
                  </li>
                  <li>
                    <a>RAM</a>
                  </li>
                  <li>
                    <a>Power Supply Unit</a>
                  </li>
                  <li>
                    <a>Storage Device</a>
                  </li>
                  <li>
                    <a>Monitor</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">PC BUILD</a>
        </div>
      </nav>

      <div>{children}</div>

      <footer className=" text-center bg-orange-500 py-2 text-gray-600">&copy; PC BUILDER LAB 2023 | All Right Reserved.</footer>
    </>
  );
};

export default RootLayout;
