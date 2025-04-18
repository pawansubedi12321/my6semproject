import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import {
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
  CCol,
} from '@coreui/react'
// import './scss/style.scss'
import '../scss/style.scss';
const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const [visible, setVisible] = useState(false);
  const[salesvisible,setsalesVisible]=useState(false);
  const[salesReturnVisible, setSalesReturnVisible]=useState(false);

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    
    <div className='breadcrumb'>
      {/* <div className='navbar'>
  <CBreadcrumb className="my-0">
    <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
    {breadcrumbs.map((breadcrumb, index) => (
      <CBreadcrumbItem
        key={index}
        {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
      >
        {breadcrumb.name}
      </CBreadcrumbItem>
    ))}
  </CBreadcrumb>

  <CButton color="primary" onClick={() => setVisible(!visible)}>
    Add Item
  </CButton>
</div> */}

<div className='navbar'>
{breadcrumbs.map((breadcrumb, index) => {
      return (
        <p>Home / {breadcrumb.name}</p>
        
      );
    })}
    {breadcrumbs.map((breadcrumb,index)=>{
      return(
        <div>
          {
            breadcrumb.name==='Item'?
            <CButton color="primary" onClick={() => setVisible(!visible)}>
        New
      </CButton>:""
          }
      
      </div>
      );
    })}

{breadcrumbs.map((breadcrumb,index)=>{
      return(
        <>
          {
            breadcrumb.name==='Customers'?
            <CButton color="primary" onClick={() =>setsalesVisible(!visible)}>
        New
      </CButton>:""
          }
      
      </>
      );
    })}
{/* for sales return */}
{breadcrumbs.map((breadcrumb,index)=>{
      return(
        <>
          {
            breadcrumb.name==='Return'?
            <CButton color="primary" onClick={()=> setSalesReturnVisible(!visible)}>
        New
      </CButton>:""
          }
      
      </>
      );
    })}
    
    
    </div>

{/* for sales */}
<CModal visible={salesvisible} onClose={() =>setsalesVisible(false)} size="lg">
  <CModalHeader className="bg-success text-white">
    <CModalTitle>Scan & Record Sale</CModalTitle>
  </CModalHeader>
  <CForm>
    <CModalBody>
      <CRow className="g-3">
        <CCol md={6}>
          <CFormLabel htmlFor="barcode">Scan Barcode</CFormLabel>
          <CFormInput
            id="barcode"
            placeholder="Scan or enter barcode"
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="itemName">Item Name</CFormLabel>
          <CFormInput
            id="itemName"
            disabled
            placeholder="Auto-filled"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="unitPrice">Unit Price</CFormLabel>
          <CFormInput
            id="unitPrice"
            type="number"
            disabled
            placeholder="Auto-filled"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="quantity">Quantity</CFormLabel>
          <CFormInput
            id="quantity"
            type="number"
            placeholder="Enter quantity"
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="totalPrice">Total Price</CFormLabel>
          <CFormInput
            id="totalPrice"
            type="number"
            disabled
            placeholder="Auto-calculated"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="customerName">Customer Name</CFormLabel>
          <CFormInput
            id="customerName"
            placeholder="Optional"
          />
        </CCol>

        <CCol xs={12}>
          <CFormLabel htmlFor="notes">Notes</CFormLabel>
          <CFormTextarea
            id="notes"
            rows="3"
            placeholder="Optional notes"
          />
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton type="reset" color="secondary">
        Reset
      </CButton>
      <CButton type="submit" color="primary">
        Record Sale
      </CButton>
    </CModalFooter>
  </CForm>
</CModal>




{/* for sales return */}
<CModal visible={salesReturnVisible} onClose={() => setSalesReturnVisible(false)} size="lg">
  <CModalHeader className="bg-danger text-white">
    <CModalTitle>Sales Return</CModalTitle>
  </CModalHeader>
  <CForm>
    <CModalBody>
      <CRow className="g-3">
        <CCol md={6}>
          <CFormLabel htmlFor="returnBarcode">Scan Barcode</CFormLabel>
          <CFormInput
            id="returnBarcode"
            placeholder="Scan or enter barcode"
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="itemNameReturn">Item Name</CFormLabel>
          <CFormInput
            id="itemNameReturn"
            disabled
            placeholder="Auto-filled"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="soldQuantity">Sold Quantity</CFormLabel>
          <CFormInput
            id="soldQuantity"
            type="number"
            disabled
            placeholder="Auto-filled"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="returnQuantity">Return Quantity</CFormLabel>
          <CFormInput
            id="returnQuantity"
            type="number"
            placeholder="Enter quantity to return"
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="unitPriceReturn">Unit Price</CFormLabel>
          <CFormInput
            id="unitPriceReturn"
            type="number"
            disabled
            placeholder="Auto-filled"
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="refundAmount">Refund Amount</CFormLabel>
          <CFormInput
            id="refundAmount"
            type="number"
            disabled
            placeholder="Auto-calculated"
          />
        </CCol>

        <CCol xs={12}>
          <CFormLabel htmlFor="returnReason">Reason for Return</CFormLabel>
          <CFormTextarea
            id="returnReason"
            rows="3"
            placeholder="Explain reason for return"
            required
          />
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton type="reset" color="secondary" >
        Reset
      </CButton>
      <CButton type="submit" color="danger">
        Process Return
      </CButton>
    </CModalFooter>
  </CForm>
</CModal>





    {/*for adding item  */}
<CModal visible={visible} onClose={() => setVisible(false)} size="lg">
  <CModalHeader className="bg-primary text-white">
    <CModalTitle>Add New Inventory Item</CModalTitle>
  </CModalHeader>
  <CForm >
    <CModalBody>
      <CRow className="g-3">
        <CCol md={6}>
          <CFormLabel htmlFor="itemName">Item Name</CFormLabel>
          <CFormInput id="itemName" placeholder="Enter item name" required />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="itemCode">Item Code</CFormLabel>
          <CFormInput id="itemCode" placeholder="Enter item code" required />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="category">Category</CFormLabel>
          <CFormSelect id="category" required>
            <option disabled selected value="">Choose...</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Food</option>
            <option>Office Supplies</option>
          </CFormSelect>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="quantity">Quantity</CFormLabel>
          <CFormInput type="number" id="quantity" placeholder="Enter quantity" required />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="price">Unit Price</CFormLabel>
          <CFormInput type="number" id="price" placeholder="Enter price" required />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="supplier">Supplier</CFormLabel>
          <CFormInput id="supplier" placeholder="Enter supplier name" />
        </CCol>
        <CCol xs={12}>
          <CFormLabel htmlFor="description">Description</CFormLabel>
          <CFormTextarea id="description" rows="3" placeholder="Enter item description" />
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton type="reset" color="secondary">
        Reset
      </CButton>
      <CButton type="submit" color="success">
        Add Item
      </CButton>
    </CModalFooter>
  </CForm>
</CModal>
    

    </div>

    


    
      )
}

export default React.memo(AppBreadcrumb)
