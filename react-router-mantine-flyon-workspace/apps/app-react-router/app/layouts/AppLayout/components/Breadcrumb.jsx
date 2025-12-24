import { Link, useLocation } from 'react-router';
import { getBreadcrumbData } from '../data/navigation';

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbData(location.pathname);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {breadcrumbs.map((crumb, index) => (
          <li key={index}>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-base-content/80">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="text-primary hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Breadcrumb };
export default Breadcrumb;