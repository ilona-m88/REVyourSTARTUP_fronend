import React from 'react';
import './Year1.css'
import Dashboard from './Dashboard';
// Example data structure
const data = {
  numberOfMonths: 12,
  revenue: [
    {
      name: "Kilter Tilter - Therapy Version",
      status: "Under by 5",
      inputData: {
        deposit: 0,
        delivedIn: 0,
        extraMonths: 3,
        commission: 0,
        fixedFees: 0
      },
      monthlyData: { /* Monthly data here */ },
    },
    {
      name: "Kilter Roller",
      status: "You Matched",
      inputData: {
        deposit: 0,
        deliveredIn: 0,
        extraMonths: 3,
        commission: 0,
        fixedFees: 0
      },
      monthlyData: { deposit: 0,
        deliveredIn: 0,
        extraMonths: 3,
        commission: 0,
        fixedFees: 0 },
    },
    // Add other products/services as needed
  ],
  numberOfSources: 10,
  sources: [
    {
      sourceName: "source1",
      monthlyData: [
        {amount: 10}
      ]
    }
  ],
  numberOfInvestors: 10,
  funding_investment: [
    {
      sourceName: "Friends and Family",
      monthlyData: [
        {amount: 25000}
      ]
    },
    {
      sourceName: "Professional Investors",
      monthlyData: [
        {amount: 25000}
      ]
    }

    
  ],
  totalAllMonths: [
    {
      amount: 0
    }
  ],
  expenses: [
    {
      category: "Marketing Expenses",
      monthlyData: { deposit: 0,
        deliveredIn: 0,
        extraMonths: 3,
        commission: 0,
        fixedFees: 0 },
    },
    // Add other expense categories as needed
  ],
  // Add other sections as needed
};
//{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}
const months = ['Jan-23', 'Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23'];

const FinancialTable = () => {
  return (
    <div>
      <Dashboard></Dashboard>
      <h2>Year 1 Income Overview</h2>


      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Product/Service</th>
            <th>Status</th>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.revenue.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td><tr>{item.status}</tr>
              <tr>Number of Customers @ </tr>{item.inputData.deposit}
              <tr>Deposit % </tr>{item.inputData.deposit}
              <tr>Delievered in X months </tr>{item.inputData.deposit}
              <tr># of extra months to pay </tr>{item.inputData.deposit}
              <tr>Commission as % of income </tr>{item.inputData.deposit}
              <tr>Fixed Fees/Customer </tr>{item.inputData.deposit}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
              <td>{months.map(month => <tr key={month}>{item.monthlyData[month] || '-'}</tr>)}</td>
            </tr>

            
          ))}
        </tbody>
      </table>
      <h2>Additional Revenue</h2>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Sources</th>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.sources.map(source => (
            <tr>
              <td>{source.sourceName}</td>
              {months.map(month => <td key={month}>{source.monthlyData[month] || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Funding/Investment</h2>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Sources</th>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.funding_investment.map(source => (
            <tr>
              <td>{source.sourceName}</td>
              {months.map(month => <td key={month}>{source.monthlyData[month] || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total All Income</h2>
      <table class="tableizer-table">
        <thead>
          <tr>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Distributions (Profit First)</h2>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Include Investments</th>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Yes</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cash On Hand</h2>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Exclude Depreciation</th>
            <th>Starting Amount</th>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Yes</td>
              <td>25000</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>


      <h2>Expenses</h2>
      <h3>Total All Expenses</h3>
      <table class="tableizer-table">
        <thead>

          <tr>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.expenses.map(expense => (
            <tr key={expense.category}> 
              {months.map(month => <td key={month}>{expense.monthlyData[month] || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Founder's Draw</h3>
      <table class="tableizer-table">
        <thead>
          <tr>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Returns/Reworks</h3>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Percent of Revenue</th>
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              <td>10%</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Marketing Expenses</h3>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Fixed Assets</h3>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Recurring Expenses</h2>

      <h4>Property Related</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Legal and Professional Services</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Office/General Business</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Banking Fees</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Travel/Vehicule Related</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Production Related</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Sources</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
        {data.revenue.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td><tr>{item.status}</tr>
              <tr>Overall Material/Supplies</tr>
              <tr>Overall Contract Labor</tr>
              <tr>Material/Supplies</tr>
              <tr>Contract Labor</tr>
              <tr>Packaging</tr>
              <tr>Shipping</tr></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Other expenses</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Item Name</th>        
            {months.map(month => <th key={month}>{month}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Employee Related</h2>

      <h4>Salaried</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Monthly Salary</th>        
            {months.map(month => <th key={month}># working</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              <td>Amount</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Hourly Full Time</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Monthly Wages</th>        
            {months.map(month => <th key={month}># working</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              <td>Amount</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Hourly Part Time</h4>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Monthly Wages</th>        
            {months.map(month => <th key={month}># working</th>)}
          </tr>
        </thead>
        <tbody>
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Name</td>
              <td>Amount</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Founder(s) Status</h4>
      <button>Founder(s) are NOT Taxed</button>
      <button>Founder(s) are Taxed</button>

      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Description</th>
                  
            {months.map(month => <th key={month}># working</th>)}
          </tr>
        </thead>
        <tbody>

          {data.totalAllMonths.map(source => (
            <tr>
              <td>Founders Head Count</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Payroll Taxes and Benefits</h3>
      <table class="tableizer-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            {months.map(month => <th key={month}># working</th>)}
          </tr>
        </thead>
        <tbody>
          
          {data.totalAllMonths.map(source => (
            <tr>
              <td>Social Security (Rate)</td>
              <td>Number</td>
              {months.map(month => <td key={month}>{source.amount || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>


      {/* Additional tables for other sections can be generated similarly */}
    </div>
  );
};

export default FinancialTable;