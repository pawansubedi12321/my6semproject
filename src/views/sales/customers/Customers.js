import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Layout = () => {
  return (
    <div>
       <table class="table table-hover">
          <thead class="thead-dark">
                  <tr>
                  <th scope='col' className='table-header '>Select </th>
                  <th scope='col' className='table-header tw-ml-[10px]'>S.N</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Name</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Bar Code</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Unit Price </th>
        <th scope='col' className='table-header tw-ml-[10px]'>Quantity</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Total Price</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Customer Name </th>
        <th scope='col' className='table-header tw-ml-[10px]'>Description </th>
        <th scope='col' className='table-header tw-ml-[10px]'><CButton color="primary">
                Print
              </CButton></th>
                  </tr>
          </thead>
          <tbody>
          <tr className='tw-text-white  hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
<td scope='col' className='text-start'>  <CFormCheck id="flexCheckDefault"/></td>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>1000</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>Rs. 10000</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
  <td scope='col' className='text-start'></td>
</tr>
          </tbody>
          </table>
          </div>
  )
}

export default Layout
