import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Accordion = () => {
  return (
       <div>
       <table class="table table-hover">
          <thead class="thead-dark">
                  <tr>
                  <th scope='col' className='table-header '>S.N</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Name</th>
        <th scope='col' className='table-header tw-ml-[10px]'>BarCode</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Category</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Quantity</th>
        <th scope='col' className='table-header tw-ml-[10px]'>Unit Price </th>
        <th scope='col' className='table-header tw-ml-[10px]'>Suppliers </th>
        <th scope='col' className='table-header tw-ml-[10px]'>Description </th>
                  </tr>
          </thead>
          <tbody>
          <tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

<tr className='tw-text-white hover:tw-bg-red-500 hover:!tw-text-white'>
  <td scope='col' className='text-start'>1</td>
  <td scope='col' className='text-start'>Product A</td>
  <td scope='col' className='text-start'>123456789012</td>
  <td scope='col' className='text-start'>Electronics</td>
  <td scope='col' className='text-start'>10</td>
  <td scope='col' className='text-start'>$150.00</td>
  <td scope='col' className='text-start'>Supplier X</td>
  <td scope='col' className='text-start'>High-quality product for daily use</td>
</tr>

          </tbody>
          </table>
          </div>
  )
}

export default Accordion
