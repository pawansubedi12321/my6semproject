import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
       
          Expert Management System
       
        <span className="ms-1">&copy; 2025 </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        Expert Management System
        
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
