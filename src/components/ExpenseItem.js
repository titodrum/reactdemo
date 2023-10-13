import './ExpenseItem.css'

function ExpenseItem() {
    return <div className='expense-item'>
        <div>March 22, 2023</div>
        <div className='expense-item__description'>
            <h2>Insurance</h2>
            <div className='expense-item__price'>2255.55</div>
        </div>
    </div>
  }

export default ExpenseItem;