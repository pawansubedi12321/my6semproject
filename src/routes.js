import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Item = React.lazy(() => import('./views/base/item/Item'))
const Breadcrumbs = React.lazy(() => import('./views/base/category/category'))



//Forms
const Customers= React.lazy(() => import('./views/sales/customers/Customers'))
const Return = React.lazy(() => import('./views/sales/return/Return'))
const Reports=React.lazy(() => import('./views/reports/Reports'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/reports', name: 'Reports', element:Reports},
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base/item', name: 'Item', element: Item },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/sales/customers', name: 'Customers', element:Customers},
  { path: '/forms/return', name: 'Return', element: Return},
]

export default routes
