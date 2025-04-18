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
// import './scss/style.scss'
import '../../scss/style.scss';
const Reports = () => {
  return (
       <div className='report'>
        {/* Sales Report */}
       <div className="container mt-4">
  <h3 className="mb-4">📊 Sales Report</h3>

  {/* Filter Section */}
  <div className="row g-3 mb-4">
    <div className="col-md-3">
      <label htmlFor="fromDate" className="form-label">From Date</label>
      <input type="date" id="fromDate" className="form-control" />
    </div>
    <div className="col-md-3">
      <label htmlFor="toDate" className="form-label">To Date</label>
      <input type="date" id="toDate" className="form-control" />
    </div>
    <div className="col-md-3">
      <label htmlFor="itemFilter" className="form-label">Item</label>
      <select id="itemFilter" className="form-select">
        <option value="">All Items</option>
        <option value="Laptop">Laptop</option>
        <option value="Notebook">Notebook</option>
        <option value="T-Shirt">T-Shirt</option>
      </select>
    </div>
    <div className="col-md-3 d-flex align-items-end">
      <button className="btn btn-primary w-100">Generate Report</button>
    </div>
  </div>

  {/* Report Table */}
  <div className="table-responsive">
    <table className="table table-bordered table-hover">
      <thead className="table-light">
        <tr>
          <th>Date</th>
          <th>Barcode</th>
          <th>Item</th>
          <th>Customer</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {/* Replace with dynamic data */}
        <tr>
          <td>2025-04-18</td>
          <td>123456789012</td>
          <td>Laptop</td>
          <td>Ram Bahadur</td>
          <td>2</td>
          <td>Rs. 90000</td>
          <td>Rs. 180000</td>
        </tr>
        <tr>
          <td>2025-04-17</td>
          <td>987654321098</td>
          <td>Notebook</td>
          <td>Sita Kumari</td>
          <td>5</td>
          <td>Rs. 100</td>
          <td>Rs. 500</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Summary and Export */}
  <div className="d-flex justify-content-between align-items-center mt-4">
    <h5>Total Sales: <span className="text-success">Rs. 180,500</span></h5>
    <div>
      <button className="btn btn-outline-secondary me-2" >🖨️ Print</button>
      <button className="btn btn-outline-info">⬇️ Export PDF</button>
    </div>
  </div>
</div>







{/* Return Reports */}



<div className="container mt-4">
  <h3 className="mb-4">↩️ Return Report</h3>

  {/* Filter Section */}
  <div className="row g-3 mb-4">
    <div className="col-md-3">
      <label htmlFor="returnFromDate" className="form-label">From Date</label>
      <input type="date" id="returnFromDate" className="form-control" />
    </div>
    <div className="col-md-3">
      <label htmlFor="returnToDate" className="form-label">To Date</label>
      <input type="date" id="returnToDate" className="form-control" />
    </div>
    <div className="col-md-3">
      <label htmlFor="itemFilter" className="form-label">Item</label>
      <select id="itemFilter" className="form-select">
        <option value="">All Items</option>
        <option value="Laptop">Laptop</option>
        <option value="Notebook">Notebook</option>
        <option value="T-Shirt">T-Shirt</option>
      </select>
    </div>
    <div className="col-md-3 d-flex align-items-end">
      <button className="btn btn-warning w-100">Generate Return Report</button>
    </div>
  </div>

  {/* Report Table */}
  <div className="table-responsive">
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>Date</th>
          <th>Barcode</th>
          <th>Item</th>
          <th>Customer</th>
          <th>Quantity Returned</th>
          <th>Unit Price</th>
          <th>Refund Amount</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {/* Replace with dynamic data */}
        <tr>
          <td>2025-04-18</td>
          <td>123456789012</td>
          <td>Laptop</td>
          <td>Ram Bahadur</td>
          <td>1</td>
          <td>Rs. 90000</td>
          <td>Rs. 90000</td>
          <td>Defective item</td>
        </tr>
        <tr>
          <td>2025-04-17</td>
          <td>987654321098</td>
          <td>Notebook</td>
          <td>Sita Kumari</td>
          <td>2</td>
          <td>Rs. 100</td>
          <td>Rs. 200</td>
          <td>Wrong item delivered</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Summary and Export */}
  <div className="d-flex justify-content-between align-items-center mt-4">
    <h5>Total Refund: <span className="text-danger">Rs. 90,200</span></h5>
    <div>
      <button className="btn btn-outline-secondary me-2" >🖨️ Print</button>
      <button className="btn btn-outline-danger" >⬇️ Export PDF</button>
    </div>
  </div>
</div>




{/* Inventory Report */}


<div className="container mt-4">
  <h3 className="mb-4">📦 Inventory Report</h3>

  {/* Filter Section */}
  <div className="row g-3 mb-4">
    <div className="col-md-3">
      <label htmlFor="inventoryFromDate" className="form-label">From Date</label>
      <input type="date" id="inventoryFromDate" className="form-control" />
    </div>
    <div className="col-md-3">
      <label htmlFor="inventoryToDate" className="form-label">To Date</label>
      <input type="date" id="inventoryToDate" className="form-control" />
    </div>
    <div className="col-md-3">
      <label htmlFor="categoryFilter" className="form-label">Category</label>
      <select id="categoryFilter" className="form-select">
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
        <option value="Office Supplies">Office Supplies</option>
      </select>
    </div>
    <div className="col-md-3 d-flex align-items-end">
      <button className="btn btn-warning w-100">Generate Inventory Report</button>
    </div>
  </div>

  {/* Report Table */}
  <div className="table-responsive">
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>Item Name</th>
          <th>Item Code</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Value</th>
          <th>Supplier</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {/* Replace with dynamic data */}
        <tr>
          <td>Laptop</td>
          <td>LAP123</td>
          <td>Electronics</td>
          <td>20</td>
          <td>Rs. 90,000</td>
          <td>Rs. 1,800,000</td>
          <td>ABC Suppliers</td>
          <td>2025-04-18</td>
        </tr>
        <tr>
          <td>T-Shirt</td>
          <td>TS456</td>
          <td>Clothing</td>
          <td>100</td>
          <td>Rs. 500</td>
          <td>Rs. 50,000</td>
          <td>Fashion Hub</td>
          <td>2025-04-16</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Summary and Export */}
  <div className="d-flex justify-content-between align-items-center mt-4">
    <h5>Total Inventory Value: <span className="text-success">Rs. 1,850,000</span></h5>
    <div>
      <button className="btn btn-outline-secondary me-2" >🖨️ Print</button>
      <button className="btn btn-outline-danger" >⬇️ Export PDF</button>
    </div>
  </div>
</div>


          </div>
  )
}

export default Reports
