import { Link, Outlet } from "react-router-dom";
export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder="Search products" />
      </div>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>

      {/* product page doesnt know where to render the child component, thus we use outlet */}
      <Outlet />

    </>
  )
}