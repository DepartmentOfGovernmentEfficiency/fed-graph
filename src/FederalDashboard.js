import React, { useState } from 'react';
import './FederalDashboard.css';

function FederalDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDataPoint, setActiveDataPoint] = useState(null);
  
  const fedData = {
    "aggregated": {
      "age_20_24_count": 52292,
      "age_25_29_count": 138992,
      "age_30_34_count": 209553,
      "age_35_39_count": 283869,
      "age_40_44_count": 329653,
      "age_45_49_count": 298027,
      "age_50_54_count": 304943,
      "age_55_59_count": 293190,
      "age_60_64_count": 213837,
      "age_65_plus_count": 125147,
      "age_under_20_count": 0,
      "annuity_total": 305701678025,
      "dc_employee_count": 160973,
      "employee_count": 2252162,
      "not_telework_eligible_count": 954486,
      "salary_100k_109k_count": 177382,
      "salary_110k_119k_count": 170288,
      "salary_120k_129k_count": 157100,
      "salary_130k_139k_count": 116673,
      "salary_140k_149k_count": 100726,
      "salary_150k_159k_count": 94376,
      "salary_160k_169k_count": 60665,
      "salary_170k_179k_count": 43380,
      "salary_180k_189k_count": 49773,
      "salary_190k_199k_count": 62434,
      "salary_200k_219k_count": 19438,
      "salary_20k_29k_count": 2499,
      "salary_220k_239k_count": 13326,
      "salary_240k_259k_count": 10492,
      "salary_260k_279k_count": 7428,
      "salary_280k_299k_count": 4982,
      "salary_300k_349k_count": 8239,
      "salary_30k_39k_count": 44948,
      "salary_350k_399k_count": 5375,
      "salary_400k_449k_count": 1058,
      "salary_40k_49k_count": 134098,
      "salary_450k_499k_count": 2,
      "salary_500k_plus_count": 1,
      "salary_50k_59k_count": 192950,
      "salary_60k_69k_count": 207022,
      "salary_70k_79k_count": 201725,
      "salary_80k_89k_count": 175475,
      "salary_90k_99k_count": 176159,
      "salary_less_20k_count": 79,
      "salary_total": 211316158567,
      "salary_unspecified_count": 14071,
      "telework_eligible_count": 1296996,
      "telework_unspecified_count": 26,
      "tenure_10_14_count": 337610,
      "tenure_15_19_count": 315675,
      "tenure_1_2_count": 284948,
      "tenure_20_24_count": 194804,
      "tenure_25_29_count": 87719,
      "tenure_30_34_count": 72555,
      "tenure_35_plus_count": 77089,
      "tenure_3_4_count": 232802,
      "tenure_5_9_count": 431005,
      "tenure_less_than_1_count": 217955
    },
    "children_count": 16439,
    "detailed": {},
    "office_id": "Federal_Government",
    "office_name": "Federal Government"
  };

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 1e12) return `$${(amount / 1e12).toFixed(2)}T`;
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(2)}M`;
    if (amount >= 1e3) return `$${(amount / 1e3).toFixed(2)}K`;
    return `$${amount}`;
  };

  const calculateAverageAge = () => {

    const ageMidpoints = {
      'Under 20': 19,
      '20-24': 22,
      '25-29': 27,
      '30-34': 32,
      '35-39': 37,
      '40-44': 42,
      '45-49': 47,
      '50-54': 52,
      '55-59': 57,
      '60-64': 62,
      '65+': 70 
    };
    
    let totalWeightedAge = 0;
    let totalEmployees = 0;
    
    ageData.forEach(item => {
      totalWeightedAge += ageMidpoints[item.label] * item.value;
      totalEmployees += item.value;
    });
    
    return (totalWeightedAge / totalEmployees).toFixed(1);
  };

  const averageSalary = fedData.aggregated.salary_total / fedData.aggregated.employee_count;

  const ageData = [
    { label: 'Under 20', value: fedData.aggregated.age_under_20_count },
    { label: '20-24', value: fedData.aggregated.age_20_24_count },
    { label: '25-29', value: fedData.aggregated.age_25_29_count },
    { label: '30-34', value: fedData.aggregated.age_30_34_count },
    { label: '35-39', value: fedData.aggregated.age_35_39_count },
    { label: '40-44', value: fedData.aggregated.age_40_44_count },
    { label: '45-49', value: fedData.aggregated.age_45_49_count },
    { label: '50-54', value: fedData.aggregated.age_50_54_count },
    { label: '55-59', value: fedData.aggregated.age_55_59_count },
    { label: '60-64', value: fedData.aggregated.age_60_64_count },
    { label: '65+', value: fedData.aggregated.age_65_plus_count }
  ];

  const averageAge = calculateAverageAge();

  const salaryData = [
    { label: 'Under $50K', value: fedData.aggregated.salary_less_20k_count + 
                                   fedData.aggregated.salary_20k_29k_count + 
                                   fedData.aggregated.salary_30k_39k_count + 
                                   fedData.aggregated.salary_40k_49k_count },
    { label: '$50K-$69K', value: fedData.aggregated.salary_50k_59k_count + 
                                 fedData.aggregated.salary_60k_69k_count },
    { label: '$70K-$89K', value: fedData.aggregated.salary_70k_79k_count + 
                                 fedData.aggregated.salary_80k_89k_count },
    { label: '$90K-$109K', value: fedData.aggregated.salary_90k_99k_count + 
                                  fedData.aggregated.salary_100k_109k_count },
    { label: '$110K-$129K', value: fedData.aggregated.salary_110k_119k_count + 
                                   fedData.aggregated.salary_120k_129k_count },
    { label: '$130K-$149K', value: fedData.aggregated.salary_130k_139k_count + 
                                   fedData.aggregated.salary_140k_149k_count },
    { label: '$150K-$199K', value: fedData.aggregated.salary_150k_159k_count + 
                                   fedData.aggregated.salary_160k_169k_count + 
                                   fedData.aggregated.salary_170k_179k_count + 
                                   fedData.aggregated.salary_180k_189k_count + 
                                   fedData.aggregated.salary_190k_199k_count },
    { label: '$200K+', value: fedData.aggregated.salary_200k_219k_count + 
                              fedData.aggregated.salary_220k_239k_count + 
                              fedData.aggregated.salary_240k_259k_count + 
                              fedData.aggregated.salary_260k_279k_count + 
                              fedData.aggregated.salary_280k_299k_count + 
                              fedData.aggregated.salary_300k_349k_count + 
                              fedData.aggregated.salary_350k_399k_count + 
                              fedData.aggregated.salary_400k_449k_count + 
                              fedData.aggregated.salary_450k_499k_count + 
                              fedData.aggregated.salary_500k_plus_count }
  ];

  const tenureData = [
    { label: 'Less than 1 year', value: fedData.aggregated.tenure_less_than_1_count },
    { label: '1-2 years', value: fedData.aggregated.tenure_1_2_count },
    { label: '3-4 years', value: fedData.aggregated.tenure_3_4_count },
    { label: '5-9 years', value: fedData.aggregated.tenure_5_9_count },
    { label: '10-14 years', value: fedData.aggregated.tenure_10_14_count },
    { label: '15-19 years', value: fedData.aggregated.tenure_15_19_count },
    { label: '20-24 years', value: fedData.aggregated.tenure_20_24_count },
    { label: '25-29 years', value: fedData.aggregated.tenure_25_29_count },
    { label: '30-34 years', value: fedData.aggregated.tenure_30_34_count },
    { label: '35+ years', value: fedData.aggregated.tenure_35_plus_count }
  ];

  const teleworkData = [
    { label: 'Eligible', value: fedData.aggregated.telework_eligible_count },
    { label: 'Not Eligible', value: fedData.aggregated.not_telework_eligible_count },
    { label: 'Unspecified', value: fedData.aggregated.telework_unspecified_count }
  ];

  const handlePointHover = (data, index) => {
    setActiveDataPoint({
      data,
      index,
      percentage: ((data[index].value / fedData.aggregated.employee_count) * 100).toFixed(1)
    });
  };

  const handleMouseLeave = () => {
    setActiveDataPoint(null);
  };

  const renderLineGraph = (data, title, color = '#E0162B') => {
    const maxValue = Math.max(...data.map(item => item.value));
    const chartHeight = 150;
    const scaleY = chartHeight / maxValue; 
    
    return (
      <div className="graph-container">
        <h3 className="graph-title">{title}</h3>
        
        {activeDataPoint && activeDataPoint.data === data && (
          <div className="data-tooltip">
            <strong>{data[activeDataPoint.index].label}:</strong> {formatNumber(data[activeDataPoint.index].value)} employees
            <div>({activeDataPoint.percentage}% of total workforce)</div>
          </div>
        )}
        
        <div className="line-graph">
          {/* Grid lines */}
          <div className="grid-lines">
            <div className="grid-line" style={{ bottom: '0%' }}></div>
            <div className="grid-line" style={{ bottom: '25%' }}></div>
            <div className="grid-line" style={{ bottom: '50%' }}></div>
            <div className="grid-line" style={{ bottom: '75%' }}></div>
            <div className="grid-line" style={{ bottom: '100%' }}></div>
          </div>
          
          <div className="line-points">
            {data.map((item, index) => {
              const height = item.value * scaleY;
              const pointY = chartHeight - height;
              
              return (
                <div className="data-point" key={index}>
                  {/* Area fill beneath the line */}
                  {index > 0 && (
                    <svg className="area-fill" 
                         style={{ 
                            position: 'absolute',
                            top: 0,
                            left: '-50%',
                            width: '100%',
                            height: chartHeight,
                            zIndex: 1
                         }}>
                      <polygon 
                        points={`0,${chartHeight} 0,${chartHeight - (data[index-1].value * scaleY)} 100,${pointY} 100,${chartHeight}`}
                        fill={`${color}15`}
                      />
                    </svg>
                  )}
                  
                  {/* Lines connecting points */}
                  {index > 0 && (
                    <svg className="line-connector" 
                         style={{ 
                            position: 'absolute',
                            top: 0,
                            left: '-50%',
                            width: '100%',
                            height: chartHeight,
                            zIndex: 2
                         }}>
                      <line 
                        x1="0%"
                        y1={chartHeight - (data[index-1].value * scaleY)}
                        x2="100%"
                        y2={pointY}
                        stroke={color}
                        strokeWidth="2.5"
                      />
                    </svg>
                  )}
                  
                  {/* Point marker */}
                  <div 
                    className={`point-marker ${activeDataPoint && activeDataPoint.data === data && activeDataPoint.index === index ? 'active' : ''}`}
                    style={{ 
                      backgroundColor: color,
                      top: `${pointY}px`,
                      boxShadow: `0 0 0 3px white, 0 0 0 4px ${color}40`
                    }}
                    onMouseEnter={() => handlePointHover(data, index)}
                    onMouseLeave={handleMouseLeave}
                  ></div>
                  
                  {/* Label (now positioned higher) */}
                  <div className="point-label">{item.label}</div>
                </div>
              );
            })}
          </div>
          
          {/* Y-axis labels */}
          <div className="y-axis">
            <div className="y-label" style={{ bottom: '0%' }}>0</div>
            <div className="y-label" style={{ bottom: '50%' }}>{formatNumber(maxValue / 2)}</div>
            <div className="y-label" style={{ bottom: '100%' }}>{formatNumber(maxValue)}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-flag">
          <div className="flag-stripe red"></div>
          <div className="flag-stripe white"></div>
          <div className="flag-stripe blue"></div>
        </div>
        <h1>Federal Government Workforce Dashboard</h1>
        <p className="data-source">Data source: doge.gov/api/kpis/Federal_Government</p>
      </header>

      <div className="dashboard-summary">
        <div className="summary-card red-card">
          <h2>Total Employees</h2>
          <div className="summary-value">{formatNumber(fedData.aggregated.employee_count)}</div>
          <div className="summary-detail">Federal workforce</div>
        </div>
        
        <div className="summary-card white-card">
          <h2>Salary Budget</h2>
          <div className="summary-value">{formatCurrency(fedData.aggregated.salary_total)}</div>
          <div className="summary-detail">Total annual</div>
        </div>
        
        <div className="summary-card blue-card">
          <h2>Average Salary</h2>
          <div className="summary-value">{formatCurrency(averageSalary)}</div>
          <div className="summary-detail">Per employee</div>
        </div>
        
        <div className="summary-card red-card">
          <h2>DC-Based</h2>
          <div className="summary-value">{formatNumber(fedData.aggregated.dc_employee_count)}</div>
          <div className="summary-detail">{((fedData.aggregated.dc_employee_count / fedData.aggregated.employee_count) * 100).toFixed(1)}% of workforce</div>
        </div>
        
        <div className="summary-card blue-card">
          <h2>Average Age</h2>
          <div className="summary-value">{averageAge}</div>
          <div className="summary-detail">Years</div>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'age' ? 'active' : ''} 
          onClick={() => setActiveTab('age')}
        >
          Age Distribution
        </button>
        <button 
          className={activeTab === 'salary' ? 'active' : ''} 
          onClick={() => setActiveTab('salary')}
        >
          Salary Ranges
        </button>
        <button 
          className={activeTab === 'tenure' ? 'active' : ''} 
          onClick={() => setActiveTab('tenure')}
        >
          Tenure
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-container">
            <div className="overview-graph">
              {renderLineGraph(teleworkData, 'Telework Eligibility', '#0A3161')}
            </div>
            <div className="overview-graph">
              {renderLineGraph(ageData, 'Age Distribution Overview', '#E0162B')}
            </div>
          </div>
        )}
        
        {activeTab === 'age' && (
          <div className="full-graph-container">
            {renderLineGraph(ageData, 'Employee Age Distribution', '#E0162B')}
          </div>
        )}
        
        {activeTab === 'salary' && (
          <div className="full-graph-container">
            {renderLineGraph(salaryData, 'Employee Salary Distribution', '#0A3161')}
          </div>
        )}
        
        {activeTab === 'tenure' && (
          <div className="full-graph-container">
            {renderLineGraph(tenureData, 'Employee Tenure Distribution', '#E0162B')}
          </div>
        )}
      </div>

      <footer className="dashboard-footer">
        <div className="flag-stripes">
          <div className="flag-stripe red"></div>
          <div className="flag-stripe white"></div>
          <div className="flag-stripe blue"></div>
        </div>
        <div className="footer-summary">
          <div className="footer-stat">
            <span className="stat-label">Total employees:</span> 
            <span className="stat-value">{formatNumber(fedData.aggregated.employee_count)}</span>
          </div>
          <div className="footer-stat">
            <span className="stat-label">Total salary budget:</span> 
            <span className="stat-value">{formatCurrency(fedData.aggregated.salary_total)}</span>
          </div>
          <div className="footer-stat">
            <span className="stat-label">Annuity total:</span> 
            <span className="stat-value">{formatCurrency(fedData.aggregated.annuity_total)}</span>
          </div>
        </div>
        <div className="copyright">
          Authored by Michael Mendy &copy; 2025
        </div>
      </footer>
    </div>
  );
}

export default FederalDashboard;
