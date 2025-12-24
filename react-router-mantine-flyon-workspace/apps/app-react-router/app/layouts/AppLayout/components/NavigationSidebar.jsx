import { Link, useLocation } from 'react-router';
import { Icon } from '@iconify-icon/react';
import { isActivePath, getNavigationByCategory } from '../data/navigation';

const NavigationSidebar = () => {
  const location = useLocation();

  // Find all main category items (Dashboard, React Synapse, etc.)
  const mainItems = getNavigationByCategory('main');

  // Find Pages section (header category with children)
  const pagesSection = getNavigationByCategory('pages');
  const menuActive = 'bg-indigo-500 hover:bg-indigo-600/90 hover:text-white text-white font-semibold';

  return (
    <aside
      className="bg-white h-full"
    >
      <div className="drawer-body h-full p-0">
        <div className="flex h-full max-h-full flex-col lg:px-2">
          <button
            type="button"
            className="btn btn-text btn-circle btn-sm absolute end-3 top-3 lg:hidden"
            aria-label="Close"
            data-overlay="#layout-toggle"
          >
            <span className="icon-[tabler--x] size-5" />
          </button>

          <div className="mt-auto flex gap-3 p-4">
            <span className="text-primary">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <mask
                    id="b"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={32}
                  >
                    <path
                      d="M24 0H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8"
                      fill="#fff"
                    />
                  </mask>
                  <g mask="url(#b)">
                    <path
                      d="M24 0H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8"
                      fill="currentColor"
                    />
                    <path
                      d="M24 0H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8"
                      fill="url(#c)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="m22.258 20.467-5.55-6.839a1 1 0 0 0-1.568.02l-5.023 6.521a1 1 0 0 1-.793.39H7.17a1 1 0 0 1-.78-1.626l8.748-10.919a1 1 0 0 1 1.556-.006l9.125 11.198a1 1 0 0 1-.775 1.631h-2.01a1 1 0 0 1-.776-.37m-5.59-1.484 2.59 2.953c.567.646.108 1.659-.751 1.659h-4.922a1 1 0 0 1-.785-1.62l2.331-2.953a1 1 0 0 1 1.537-.04"
                      fill="url(#d)"
                    />
                  </g>
                  <path
                    d="M24 .666H8A7.333 7.333 0 0 0 .667 8v16A7.333 7.333 0 0 0 8 31.333h16A7.333 7.333 0 0 0 31.334 24V8A7.333 7.333 0 0 0 24 .666Z"
                    stroke="url(#e)"
                    strokeWidth={2}
                  />
                </g>
                <defs>
                  <linearGradient
                    id="c"
                    x1={29}
                    y1={2}
                    x2={3}
                    y2="29.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity={0} />
                    <stop offset={1} stopOpacity=".38" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="16.107"
                    y1="7.64"
                    x2="16.107"
                    y2="23.595"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity=".6" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1={16}
                    y1={0}
                    x2={16}
                    y2={32}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" stopOpacity=".28" />
                    <stop offset={1} stopColor="#fff" stopOpacity=".04" />
                  </linearGradient>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h32v32H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div>
              <span className="text-base-content block text-xl font-bold">
                AI Dashboard
              </span>
            </div>
          </div>

          <div className="h-full overflow-y-auto">
            <ul className="menu menu-sm gap-1 px-4">
              {/* Main Category Items - Dynamic (Dashboard, React Synapse, etc.) */}
              <li className="text-slate-600/50 font-semibold mt-2.5 p-2 text-sm uppercase">
                Main
              </li>
              {mainItems.map((item) => (
                <li key={item.id} className="mt-2.5">
                  <Link to={item.path} className={`px-2 flex items-center gap-2 ${isActivePath(location.pathname, item.path) ? menuActive : ''}`}>
                    <Icon icon={item.icon} className="shrink-0" width="18" height="18" />
                    <span className="grow">{item.label}</span>
                    {item.badge && (
                      <span className={`badge badge-sm badge-${item.badgeType || 'primary'} rounded-full`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}

              <li className="text-slate-600/50 font-semibold mt-2.5 p-2 text-sm uppercase">
                Pages
              </li>

              {/* Pages Section - Dynamic */}
              {pagesSection.map((item) => (
                <li key={item.id} className="mt-2.5">
                  <Link to={item.path} className={`px-2 flex items-center gap-2 ${isActivePath(location.pathname, item.path) ? menuActive : ''}`}>
                    <Icon icon={item.icon} className="shrink-0" width="18" height="18" />
                    <span className="grow">{item.label}</span>
                    {item.badge && (
                      <span className={`badge badge-sm badge-${item.badgeType || 'primary'} rounded-full`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </aside>
  );
};

export { NavigationSidebar };
export default NavigationSidebar;