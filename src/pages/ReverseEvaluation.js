import React, { useState, useEffect } from 'react';
import RevenueChart from './RevenueChart';

function ReverseEvaluation() {
  // Calculations for Invest Table
  const [lastYearsRevenue, setLastYearsRevenue] = useState(0);
  const [amountNeeded, setAmountNeeded] = useState('');
  const [multiplierExpected, setMultiplierExpected] = useState('');
  const [equityPercentage, setEquityPercentage] = useState('');
  const [revenueMultiplierExit, setRevenueMultiplierExit] = useState('');
  const [growthProjection, setGrowthProjection] = useState('');
  const [forceTo, setForceTo] = useState(new Array(6).fill(''));

  const amountHopedForExit = parseFloat(amountNeeded) * parseFloat(multiplierExpected);
  const companyWorthAtYear3 = amountHopedForExit / (parseFloat(equityPercentage) / 100);
  const revenueNeededYear3 = companyWorthAtYear3 / parseFloat(revenueMultiplierExit);
  
  const calculatedGrowthProjection = lastYearsRevenue > 0 
    ? Math.pow((revenueNeededYear3 / lastYearsRevenue), 1/3) * 100 
    : growthProjection;
  
  // Calculations for Effective Interest
  const effectiveInterest3Years = amountNeeded > 0 ? Math.pow((amountHopedForExit / amountNeeded), 1 / 3) - 1 : "-";
  const effectiveInterest5Years = amountNeeded > 0 ? Math.pow((amountHopedForExit / amountNeeded), 1 / 5) - 1 : "-";
  const effectiveInterest7Years = amountNeeded > 0 ? Math.pow((amountHopedForExit / amountNeeded), 1 / 7) - 1 : "-";

  //Reality Check #2
  const [year5Revenue, setYear5Revenue] = useState(0);
  const [realityCheckMessage, setRealityCheckMessage] = useState("");

  // Calculations for Segments At Year 1
  const [segmentNames, setSegmentNames] = useState(new Array(5).fill(''));
  const [avgRevenuePerCustomer, setAvgRevenuePerCustomer] = useState(new Array(5).fill(''));
  const [yourPercent, setYourPercent] = useState(new Array(5).fill(''));
  const [quickModelingPercentage, setQuickModelingPercentage] = useState(new Array(5).fill(''));
  const [revenue1, setRevenue1] = useState(new Array(5).fill(0));
  const [customers1, setCustomers1] = useState(new Array(5).fill(0));
  const [revenue2, setRevenue2] = useState(new Array(5).fill(0));
  const [customers2, setCustomers2] = useState(new Array(5).fill(0));

  // Calculations for Segments At Year 2
  const [segmentNamesYear2, setSegmentNamesYear2] = useState(new Array(5).fill(''));
  const [avgRevenuePerCustomerYear2, setAvgRevenuePerCustomerYear2] = useState(new Array(5).fill(''));
  const [yourPercentYear2, setYourPercentYear2] = useState(new Array(5).fill(''));
  const [quickModelingPercentageYear2, setQuickModelingPercentageYear2] = useState(new Array(5).fill(''));
  const [revenue1Year2, setRevenue1Year2] = useState(new Array(5).fill(0));
  const [customers1Year2, setCustomers1Year2] = useState(new Array(5).fill(0));
  const [revenue2Year2, setRevenue2Year2] = useState(new Array(5).fill(0));
  const [customers2Year2, setCustomers2Year2] = useState(new Array(5).fill(0));

  // Calculations for Segments At Year 3
  const [segmentNamesYear3, setSegmentNamesYear3] = useState(new Array(5).fill(''));
  const [avgRevenuePerCustomerYear3, setAvgRevenuePerCustomerYear3] = useState(new Array(5).fill(''));
  const [yourPercentYear3, setYourPercentYear3] = useState(new Array(5).fill(''));
  const [quickModelingPercentageYear3, setQuickModelingPercentageYear3] = useState(new Array(5).fill(''));
  const [revenue1Year3, setRevenue1Year3] = useState(new Array(5).fill(0));
  const [customers1Year3, setCustomers1Year3] = useState(new Array(5).fill(0));
  const [revenue2Year3, setRevenue2Year3] = useState(new Array(5).fill(0));
  const [customers2Year3, setCustomers2Year3] = useState(new Array(5).fill(0));


  function calculatePercentYear3(year) {
    switch (year) {
      case 0:
        return lastYearsRevenue / revenueNeededYear3;
      case 1:
        return (calculatePercentYear3(2) / growthProjection)*100;
      case 2:
        return (calculatePercentYear3(3)/ growthProjection)*100;
      case 3:
        return 1; // 100%
      case 4:
        return (calculatePercentYear3(3) * growthProjection)/100;
      case 5:
        return (calculatePercentYear3(4)  * growthProjection)/100;
      default:
        return 0;
    }
  };

  function calculateRevenue(year) {
    let revenue;
    switch (year) {
      case 0:
        revenue = lastYearsRevenue;
        break;
      case 1:
      case 2:
      case 4:
      case 5:
        revenue = isBlank(forceTo[year])
          ? calculateRevenue(3) * calculatePercentYear3(year)
          : calculateRevenue(3) * forceTo[year];
        break;
      case 3:
        revenue = revenueNeededYear3;
        break;
      default: 
        revenue = 0;
    }
    return revenue;
  }

  // Check if a value is blank or not
  const isBlank = (value) => value === '' || value === null || value === undefined;

  // Set the growth projection when the component updates
  React.useEffect(() => {
    if (lastYearsRevenue > 0) {
      setGrowthProjection(calculatedGrowthProjection.toFixed(2));
    }
  }, [lastYearsRevenue, revenueNeededYear3]);

  const chartData = [0, 1, 2, 3, 4, 5].map(year => ({
    year: year.toString(),
    revenue: calculateRevenue(year),
  }));


  useEffect(() => {
    if(lastYearsRevenue > 0) {
      setGrowthProjection(calculatedGrowthProjection.toFixed(2));
    }
  }, [lastYearsRevenue, revenueNeededYear3]);

  //Reality Check #2
  function getRealityCheckMessage(year5Revenue) {
    if (year5Revenue >= 0.2) {
      return "NEED TO PROACTIVELY ANSWER";
    } else if (year5Revenue >= 0.1) {
      return "You will be asked questions";
    } else if (year5Revenue >= 0.05) {
      return "You should be prepared to answer";
    } else if (year5Revenue >= 0.01) {
      return "They may not even ask";
    } else if (year5Revenue < 0.01) {
      return "Unlikely to get questions";
    }
  }  
  useEffect(() => {
    if (!isNaN(lastYearsRevenue) && !isNaN(multiplierExpected) && !isNaN(equityPercentage) && !isNaN(revenueMultiplierExit)) {
      const revenue5 = calculateRevenue(5);
      if (!isNaN(revenue5)) {
        setYear5Revenue(revenue5);
        setRealityCheckMessage(getRealityCheckMessage(revenue5));
      }
    }
  }, [lastYearsRevenue, multiplierExpected, equityPercentage, revenueMultiplierExit, forceTo]); // Include all dependencies here
  


  //Customer Segments At Year 1
  function calculateQuickModelingPercentages(avgRevenuePerCustomer) {
    const avgRevenues = avgRevenuePerCustomer.map(avg => parseFloat(avg) || 0);
    
    // Determine the percentage for segment 1 year 1
    let segment1Percentage;
    if (avgRevenues.slice(1).every(val => val === 0)) { // Check if segments 2,3,4,5 are 0
      segment1Percentage = 100;
    } else if (avgRevenues[1] > 0 && avgRevenues.slice(2).every(val => val === 0)) {
      segment1Percentage = 70;
    } else if (avgRevenues.slice(1, 3).every(val => val > 0) && avgRevenues.slice(3).every(val => val === 0)) {
      segment1Percentage = 60;
    } else if (avgRevenues.slice(1, 4).every(val => val > 0) && avgRevenues[4] === 0) {
      segment1Percentage = 50;
    } else {
      segment1Percentage = 45;
    }
  
    // Determine percentages for segments 2 to 5 based on segment 1's percentage
    const percentages = [segment1Percentage]; // Initialize with segment 1's percentage
    percentages.push(segment1Percentage === 100 ? 0 : segment1Percentage === 70 ? 30 : segment1Percentage === 60 ? 25 : segment1Percentage === 50 ? 25 : segment1Percentage === 45 ? 25 : segment1Percentage);
    percentages.push(segment1Percentage >= 70 ? 0 : 15);
    percentages.push(segment1Percentage >= 60 ? 0 : 10);
    percentages.push(segment1Percentage >= 50 ? 0 : 5);
  
    return percentages;
  }


  useEffect(() => {
    const newQuickModelingPercentages = calculateQuickModelingPercentages(avgRevenuePerCustomer);
    setQuickModelingPercentage(newQuickModelingPercentages);
  }, [avgRevenuePerCustomer]);
  

  function calculateRevenue1() {
    const revenueYear1 = calculateRevenue(1); 
    return quickModelingPercentage.map(percentage => {
      const percentageDecimal = percentage / 100; 
      return revenueYear1 * percentageDecimal; 
    });
  }
  
  useEffect(() => {
    const newRevenue1Values = calculateRevenue1();
    setRevenue1(newRevenue1Values); 
  }, [quickModelingPercentage]);
  
  
  function calculateCustomers1() {
    return revenue1.map((revenue, index) => {
      const avgRevenue = parseFloat(avgRevenuePerCustomer[index]) || 0; 
      if (avgRevenue === 0) {
        return 0; 
      } else {
        return parseFloat((revenue / avgRevenue).toFixed(0));
      }
    });
  }
  
  useEffect(() => {
    const newCustomers1Values = calculateCustomers1();
    setCustomers1(newCustomers1Values); 
  }, [revenue1, avgRevenuePerCustomer]);

  function calculateRevenue2() {
    const year1Revenue = calculateRevenue(1); 
    return yourPercent.map(percent => year1Revenue * (parseFloat(percent) / 100));
  }
  useEffect(() => {
    const revenue2Values = calculateRevenue2();
    setRevenue2(revenue2Values);
  }, [yourPercent]);

  function calculateCustomers2() {
    return revenue2.map((rev2, index) => {
      const avgRev = parseFloat(avgRevenuePerCustomer[index]) || 0; 
      if (avgRev === 0) return 0; 
      return parseFloat((rev2 / avgRev).toFixed(1)); 
    });
  }
  
  useEffect(() => {
    const newCustomers2 = calculateCustomers2(); 
    setCustomers2(newCustomers2); 
  }, [revenue2, avgRevenuePerCustomer]); 


  //Customer Segments At Year 2


  function calculateQuickModelingPercentagesYear2(avgRevenuePerCustomerYear2) {
    const avgRevenuesYear2 = avgRevenuePerCustomerYear2.map(avg => parseFloat(avg) || 0);
  // Determine the percentage for segment 1 year 1
  let segment1PercentageYear2 ;
  if (avgRevenuesYear2 .slice(1).every(val => val === 0)) { // Check if segments 2,3,4,5 are 0
    segment1PercentageYear2 = 100;
  } else if (avgRevenuesYear2 [1] > 0 && avgRevenuesYear2.slice(2).every(val => val === 0)) {
    segment1PercentageYear2  = 70;
  } else if (avgRevenuesYear2.slice(1, 3).every(val => val > 0) && avgRevenuesYear2.slice(3).every(val => val === 0)) {
    segment1PercentageYear2  = 60;
  } else if (avgRevenuesYear2.slice(1, 4).every(val => val > 0) && avgRevenuesYear2[4] === 0) {
    segment1PercentageYear2 = 50;
  } else {
    segment1PercentageYear2 = 45;
  }

  const percentagesYear2  = [segment1PercentageYear2]; 
  percentagesYear2.push(segment1PercentageYear2 === 100 ? 0 : segment1PercentageYear2 === 70 ? 30 : segment1PercentageYear2 === 60 ? 25 : segment1PercentageYear2 === 50 ? 25 : segment1PercentageYear2 === 45 ? 25 : segment1PercentageYear2);
  percentagesYear2.push(segment1PercentageYear2 >= 70 ? 0 : 15);
  percentagesYear2.push(segment1PercentageYear2 >= 60 ? 0 : 10);
  percentagesYear2.push(segment1PercentageYear2 >= 50 ? 0 : 5);

  return percentagesYear2;
}

useEffect(() => {
  const newQuickModelingPercentagesYear2 = calculateQuickModelingPercentagesYear2(avgRevenuePerCustomerYear2);
  setQuickModelingPercentageYear2(newQuickModelingPercentagesYear2);
}, [avgRevenuePerCustomerYear2]);

function calculateRevenue1Year2() {
  const revenueYear2 = calculateRevenue(2); 
  return quickModelingPercentageYear2.map(percentage => {
    const percentageDecimal = percentage / 100; 
    return revenueYear2 * percentageDecimal; 
  });
}

useEffect(() => {
  const newRevenue1ValuesYear2 = calculateRevenue1Year2();
  setRevenue1Year2(newRevenue1ValuesYear2); 
}, [quickModelingPercentageYear2]);

function calculateCustomers1Year2() {
  return revenue1Year2.map((revenueYear2, index) => {
    const avgRevenueYear2 = parseFloat(avgRevenuePerCustomerYear2[index]) || 0; 
    if (avgRevenueYear2 === 0) {
      return 0; 
    } else {
      return parseFloat((revenueYear2 / avgRevenueYear2).toFixed(0));
    }
  });
}

useEffect(() => {
  const newCustomers1ValuesYear2 = calculateCustomers1Year2();
  setCustomers1Year2(newCustomers1ValuesYear2); 
}, [revenue1Year2, avgRevenuePerCustomerYear2]);

function calculateRevenue2Year2() {
  const year2Revenue = calculateRevenue(2); 
  return yourPercentYear2.map(percent => year2Revenue * (parseFloat(percent) / 100));
}
useEffect(() => {
  const revenue2ValuesYear2 = calculateRevenue2Year2(1);
  setRevenue2Year2(revenue2ValuesYear2);
}, [yourPercentYear2]);


function calculateCustomers2Year2() {
  return revenue2Year2.map((rev2Year2, index) => {
    const avgRevYear2 = parseFloat(avgRevenuePerCustomerYear2[index]) || 0; 
    if (avgRevYear2 === 0) return 0; 
    return parseFloat((rev2Year2 / avgRevYear2).toFixed(1)); 
  });
}

useEffect(() => {
  const newCustomers2Year2 = calculateCustomers2Year2(); 
  setCustomers2Year2(newCustomers2Year2); 
}, [revenue2Year2, avgRevenuePerCustomerYear2]); 

//Customer Segments At Year 3

function calculateQuickModelingPercentagesYear3(avgRevenuePerCustomerYear3) {
  const avgRevenuesYear3 = avgRevenuePerCustomerYear3.map(avg => parseFloat(avg) || 0);
// Determine the percentage for segment 1 year 1
let segment1PercentageYear3 ;
if (avgRevenuesYear3 .slice(1).every(val => val === 0)) { // Check if segments 2,3,4,5 are 0
  segment1PercentageYear3 = 100;
} else if (avgRevenuesYear3 [1] > 0 && avgRevenuesYear3.slice(2).every(val => val === 0)) {
  segment1PercentageYear3  = 70;
} else if (avgRevenuesYear3.slice(1, 3).every(val => val > 0) && avgRevenuesYear3.slice(3).every(val => val === 0)) {
  segment1PercentageYear3  = 60;
} else if (avgRevenuesYear3.slice(1, 4).every(val => val > 0) && avgRevenuesYear3[4] === 0) {
  segment1PercentageYear3 = 50;
} else {
  segment1PercentageYear3 = 45;
}

const percentagesYear3  = [segment1PercentageYear3]; 
percentagesYear3.push(segment1PercentageYear3 === 100 ? 0 : segment1PercentageYear3 === 70 ? 30 : segment1PercentageYear3 === 60 ? 25 : segment1PercentageYear3 === 50 ? 25 : segment1PercentageYear3 === 45 ? 25 : segment1PercentageYear3);
percentagesYear3.push(segment1PercentageYear3 >= 70 ? 0 : 15);
percentagesYear3.push(segment1PercentageYear3 >= 60 ? 0 : 10);
percentagesYear3.push(segment1PercentageYear3 >= 50 ? 0 : 5);

return percentagesYear3;
}

useEffect(() => {
const newQuickModelingPercentagesYear3 = calculateQuickModelingPercentagesYear3(avgRevenuePerCustomerYear3);
setQuickModelingPercentageYear3(newQuickModelingPercentagesYear3);
}, [avgRevenuePerCustomerYear3]);

function calculateRevenue1Year3() {
  const revenueYear3 = calculateRevenue(3); 
  return quickModelingPercentageYear3.map(percentage => {
    const percentageDecimal = percentage / 100; 
    return revenueYear3 * percentageDecimal; 
  });
}

useEffect(() => {
  const newRevenue1ValuesYear3 = calculateRevenue1Year3();
  setRevenue1Year3(newRevenue1ValuesYear3); 
}, [quickModelingPercentageYear3]);


function calculateCustomers1Year3() {
  return revenue1Year3.map((revenueYear3, index) => {
    const avgRevenueYear3 = parseFloat(avgRevenuePerCustomerYear3[index]) || 0; 
    if (avgRevenueYear3 === 0) {
      return 0; 
    } else {
      return parseFloat((revenueYear3 / avgRevenueYear3).toFixed(0));
    }
  });
}

useEffect(() => {
  const newCustomers1ValuesYear3 = calculateCustomers1Year3();
  setCustomers1Year3(newCustomers1ValuesYear3); 
}, [revenue1Year3, avgRevenuePerCustomerYear3]);


function calculateRevenue2Year3() {
  const year3Revenue = calculateRevenue(3); 
  return yourPercentYear3.map(percent => year3Revenue * (parseFloat(percent) / 100));
}
useEffect(() => {
  const revenue2ValuesYear3 = calculateRevenue2Year3(1);
  setRevenue2Year3(revenue2ValuesYear3);
}, [yourPercentYear3]);


function calculateCustomers2Year3() {
  return revenue2Year3.map((rev2Year3, index) => {
    const avgRevYear3 = parseFloat(avgRevenuePerCustomerYear3[index]) || 0; 
    if (avgRevYear3 === 0) return 0; 
    return parseFloat((rev2Year3 / avgRevYear3).toFixed(1)); 
  });
}

useEffect(() => {
  const newCustomers2Year3 = calculateCustomers2Year3(); 
  setCustomers2Year3(newCustomers2Year3); 
}, [revenue2Year3, avgRevenuePerCustomerYear3]); 
  
  

  return (
    <div>
      <table>
        <tr>
          <td>Last Year's Total Revenue (if relevant)</td>
          <td><input type="number" value={lastYearsRevenue} onChange={(e) => setLastYearsRevenue(parseFloat(e.target.value))} /></td>
        </tr>
        <tr>
          <td>How much $$ do you need/want?</td>
          <td><input type="number" value={amountNeeded} onChange={(e) => setAmountNeeded(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Multiplier the investor expects (e.g. 2-10X)</td>
          <td><input type="number" value={multiplierExpected} onChange={(e) => setMultiplierExpected(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Amount $$$$$ the investor hopes for @Exit</td>
          <td>{amountHopedForExit.toLocaleString(undefined, {maximumFractionDigits:2}) || ''}</td>
        </tr>
        <tr>
          <td>What % of equity are you giving up (e.g. 5-25%)?</td>
          <td><input type="number" value={equityPercentage} onChange={(e) => setEquityPercentage(e.target.value)} /></td>
        </tr>
        <tr>
          <td>What company needs to be worth @ Year 3</td>
          <td>{companyWorthAtYear3.toLocaleString(undefined, {maximumFractionDigits:2}) || ''}</td>
        </tr>
        <tr>
          <td>Multiplier of revenue expected at exit (e.g. 2X)</td>
          <td><input type="number" value={revenueMultiplierExit} onChange={(e) => setRevenueMultiplierExit(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Revenue needed year 3 based upon multiplier</td>
          <td>{revenueNeededYear3.toLocaleString(undefined, {maximumFractionDigits:2}) || ''}</td>
        </tr>
        <tr>
          <td>Growth Projection % per year (e.g. 500%)</td>
          <td><input type="number" value={growthProjection} onChange={(e) => setGrowthProjection(e.target.value)} disabled={lastYearsRevenue > 0} /></td>
        </tr>
        <tr>
          <td>Effective Interest in 3 Years</td>
          <td>{typeof effectiveInterest3Years === "number" ? effectiveInterest3Years.toLocaleString(undefined, {style: "percent", minimumFractionDigits:2}) : effectiveInterest3Years}</td>
        </tr>
        <tr>
          <td>Effective Interest in 5 Years</td>
          <td>{typeof effectiveInterest5Years === "number" ? effectiveInterest5Years.toLocaleString(undefined, {style: "percent", minimumFractionDigits:2}) : effectiveInterest5Years}</td>
        </tr>
        <tr>
          <td>Effective Interest in 7 Years</td>
          <td>{typeof effectiveInterest7Years === "number" ? effectiveInterest7Years.toLocaleString(undefined, {style: "percent", minimumFractionDigits:2}) : effectiveInterest7Years}</td>
        </tr>
      </table>
      <table>
      <thead>
        <tr>
          <th>Reality Check #2: If my year 5 is this value then</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{year5Revenue.toFixed(2)}</td>
          <td>{realityCheckMessage}</td>
        </tr>
      </tbody>
    </table>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>% Year 3</th>
            <th>Revenue</th>
            <th>Force to</th>
          </tr>
        </thead>
        <tbody>
        {[0, 1, 2, 3, 4, 5].map((year) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{(calculatePercentYear3(year) * 100).toFixed(2)}%</td>
              <td>{calculateRevenue(year).toFixed(2)}</td>
              <td>
                {year === 3 ? '100%' : year === 0 ? '0%' : (
                  <input
                    type="number"
                    value={forceTo[year]}
                    onChange={(e) => {
                      const newForceTo = [...forceTo];
                      newForceTo[year] = e.target.value ? parseFloat(e.target.value) : '';
                      setForceTo(newForceTo);
                  }} 
                />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RevenueChart data={chartData} />
      <table>
        <thead>
          <tr>
            <th>Customer Segments At Year 1</th>
            <th>Avg Revenue/Customer</th>
            <th>Quick Modeling as % of Revenue</th>
            <th>Revenue</th>
            <th>Customers</th>
            <th>Your %</th>
            <th>Revenue</th>
            <th>Customers</th>
          </tr>
        </thead>
        <tbody>
          {segmentNames.map((segmentName, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={segmentName}
                  onChange={(e) => {
                    const newSegmentNames = [...segmentNames];
                    newSegmentNames[index] = e.target.value;
                    setSegmentNames(newSegmentNames);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={avgRevenuePerCustomer[index]}
                  onChange={(e) => {
                    const newAvgRevenuePerCustomer = [...avgRevenuePerCustomer];
                    const value = parseFloat(e.target.value) || 0; 
                    newAvgRevenuePerCustomer[index] = value; 
                    setAvgRevenuePerCustomer(newAvgRevenuePerCustomer)
                  }}
                />
              </td>
              <td>{quickModelingPercentage[index] ? quickModelingPercentage[index].toFixed(2) : '0.00'}</td>
              <td>{revenue1[index].toFixed(2)}</td>
              <td>{customers1[index]}</td>
              <td>
                <input
                  type="number"
                  value={yourPercent[index]}
                  onChange={(e) => {
                    const newYourPercent = [...yourPercent];
                    newYourPercent[index] = e.target.value;
                    setYourPercent(newYourPercent);
                  }}
                />
              </td>
              <td>{revenue2[index].toFixed(1)}</td>
              <td>{customers2[index].toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Customer Segments At Year 2</th>
            <th>Avg Revenue/Customer</th>
            <th>Quick Modeling as % of Revenue</th>
            <th>Revenue</th>
            <th>Customers</th>
            <th>Your %</th>
            <th>Revenue</th>
            <th>Customers</th>
          </tr>
        </thead>
        <tbody>
          {segmentNamesYear2.map((segmentNameYear2, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={segmentNameYear2}
                  onChange={(e) => {
                    const newSegmentNamesYear2 = [...segmentNamesYear2];
                    newSegmentNamesYear2[index] = e.target.value;
                    setSegmentNamesYear2(newSegmentNamesYear2);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={avgRevenuePerCustomerYear2[index]}
                  onChange={(e) => {
                    const newAvgRevenuePerCustomerYear2 = [...avgRevenuePerCustomerYear2];
                    const value = parseFloat(e.target.value) || 0; 
                    newAvgRevenuePerCustomerYear2[index] = value; 
                    setAvgRevenuePerCustomerYear2(newAvgRevenuePerCustomerYear2)
                  }}
                />
              </td>
              <td>{quickModelingPercentageYear2[index] ? quickModelingPercentageYear2[index].toFixed(2) : '0.00'}</td>
              <td>{revenue1Year2[index].toFixed(2)}</td>
              <td>{customers1Year2[index]}</td>
              <td>
                <input
                  type="number"
                  value={yourPercentYear2[index]}
                  onChange={(e) => {
                    const newYourPercentYear2 = [...yourPercentYear2];
                    newYourPercentYear2[index] = e.target.value;
                    setYourPercentYear2(newYourPercentYear2);
                  }}
                />
              </td>
              <td>{revenue2Year2[index].toFixed(1)}</td>
              <td>{customers2Year2[index].toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Customer Segments At Year 3</th>
            <th>Avg Revenue/Customer</th>
            <th>Quick Modeling as % of Revenue</th>
            <th>Revenue</th>
            <th>Customers</th>
            <th>Your %</th>
            <th>Revenue</th>
            <th>Customers</th>
          </tr>
        </thead>
        <tbody>
          {segmentNamesYear3.map((segmentNameYear3, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={segmentNameYear3}
                  onChange={(e) => {
                    const newSegmentNamesYear3 = [...segmentNamesYear3];
                    newSegmentNamesYear3[index] = e.target.value;
                    setSegmentNamesYear3(newSegmentNamesYear3);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={avgRevenuePerCustomerYear3[index]}
                  onChange={(e) => {
                    const newAvgRevenuePerCustomerYear3 = [...avgRevenuePerCustomerYear3];
                    const value = parseFloat(e.target.value) || 0; 
                    newAvgRevenuePerCustomerYear3[index] = value; 
                    setAvgRevenuePerCustomerYear3(newAvgRevenuePerCustomerYear3)
                  }}
                />
              </td>
              <td>{quickModelingPercentageYear3[index] ? quickModelingPercentageYear3[index].toFixed(2) : '0.00'}</td>
              <td>{revenue1Year3[index].toFixed(2)}</td>
              <td>{customers1Year3[index]}</td>
              <td>
                <input
                  type="number"
                  value={yourPercentYear3[index]}
                  onChange={(e) => {
                    const newYourPercentYear3 = [...yourPercentYear3];
                    newYourPercentYear3[index] = e.target.value;
                    setYourPercentYear3(newYourPercentYear3);
                  }}
                />
              </td>
              <td>{revenue2Year3[index].toFixed(1)}</td>
              <td>{customers2Year3[index].toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReverseEvaluation;
