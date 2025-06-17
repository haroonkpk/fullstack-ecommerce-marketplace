import { Link } from 'react-router-dom';

export default function NavBreadcrumb() {
  return (
    <div className='hidden md:block w-full max-w-[1180px] h-auto p-3'>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a>Clothings</a>
          </li>
          <li>Men's wear</li>
          <li>Summer clothing</li>
        </ul>
      </div>
    </div>
  );
}
