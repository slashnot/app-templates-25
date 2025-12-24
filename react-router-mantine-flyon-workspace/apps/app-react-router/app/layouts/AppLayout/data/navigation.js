// Navigation data structure for the sidebar
export const navigationData = [
    {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: 'tabler:home',
    // badge: 0,
    category: 'main'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'tabler:dashboard',
    // badge: 0,
    category: 'main'
  },
  {
    id: 'quizzes',
    label: 'Quizzes',
    path: '/quizzes',
    icon: 'tabler:brain',
    category: 'pages'
  },
  {
    id: 'topics',
    label: 'Topics',
    path: '/topics',
    icon: 'tabler:category',
    category: 'pages'
  },
  {
    id: 'leaderboard',
    label: 'Leaderboard',
    path: '/leaderboard',
    icon: 'tabler:trophy',
    category: 'pages'
  },
  {
    id: 'profile',
    label: 'Profile',
    path: '/profile',
    icon: 'tabler:user',
    category: 'pages'
  },
    {
    id: 'resize-panels',
    label: 'Resize Panels',
    path: '/resize-panels',
    icon: 'tabler:align-box-right-top',
    category: 'pages'
  }
];

// Helper function to get navigation items by category
export const getNavigationByCategory = (category) => {
  return navigationData.filter(item => item.category === category);
};

// Helper function to find navigation item by path
export const findNavigationItem = (path) => {
  for (const item of navigationData) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.path === path) {
          return child;
        }
      }
    }
  }
  return null;
};

// Helper function to check if a path is active
export const isActivePath = (currentPath, itemPath) => {
  return currentPath === itemPath;
};

// Helper function to get breadcrumb data
export const getBreadcrumbData = (pathname) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [];
  
  // Add home
  breadcrumbs.push({
    label: 'Home',
    path: '/'
  });
  
  // Build breadcrumbs based on path
  let currentPath = '';
  for (const segment of pathSegments) {
    currentPath += `/${segment}`;
    const item = findNavigationItem(currentPath);
    
    if (item) {
      breadcrumbs.push({
        label: item.label,
        path: item.path
      });
    } else {
      // For pages that don't have navigation items, use the segment as label
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({
        label: label,
        path: currentPath
      });
    }
  }
  
  return breadcrumbs;
};