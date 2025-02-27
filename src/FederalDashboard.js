import React, { useState } from 'react';
import './FederalDashboard.css';

const OFFICE_DATA = {
  Federal_Government: {
    aggregated: {
      age_20_24_count: 52292, age_25_29_count: 138992, age_30_34_count: 209553, age_35_39_count: 283869,
      age_40_44_count: 329653, age_45_49_count: 298027, age_50_54_count: 304943, age_55_59_count: 293190,
      age_60_64_count: 213837, age_65_plus_count: 125147, age_under_20_count: 0, annuity_total: 305701678025,
      dc_employee_count: 160973, employee_count: 2252162, not_telework_eligible_count: 954486,
      salary_100k_109k_count: 177382, salary_110k_119k_count: 170288, salary_120k_129k_count: 157100,
      salary_130k_139k_count: 116673, salary_140k_149k_count: 100726, salary_150k_159k_count: 94376,
      salary_160k_169k_count: 60665, salary_170k_179k_count: 43380, salary_180k_189k_count: 49773,
      salary_190k_199k_count: 62434, salary_200k_219k_count: 19438, salary_20k_29k_count: 2499,
      salary_220k_239k_count: 13326, salary_240k_259k_count: 10492, salary_260k_279k_count: 7428,
      salary_280k_299k_count: 4982, salary_300k_349k_count: 8239, salary_30k_39k_count: 44948,
      salary_350k_399k_count: 5375, salary_400k_449k_count: 1058, salary_40k_49k_count: 134098,
      salary_450k_499k_count: 2, salary_500k_plus_count: 1, salary_50k_59k_count: 192950,
      salary_60k_69k_count: 207022, salary_70k_79k_count: 201725, salary_80k_89k_count: 175475,
      salary_90k_99k_count: 176159, salary_less_20k_count: 79, salary_total: 211316158567,
      salary_unspecified_count: 14071, telework_eligible_count: 1296996, telework_unspecified_count: 26,
      tenure_10_14_count: 337610, tenure_15_19_count: 315675, tenure_1_2_count: 284948,
      tenure_20_24_count: 194804, tenure_25_29_count: 87719, tenure_30_34_count: 72555,
      tenure_35_plus_count: 77089, tenure_3_4_count: 232802, tenure_5_9_count: 431005,
      tenure_less_than_1_count: 217955
    },
    children_count: 16439,
    detailed: {},
    office_id: "Federal_Government",
    office_name: "Federal Government"
  },
  OMB: {
    aggregated: {
      age_20_24_count: 16, age_25_29_count: 56, age_30_34_count: 157, age_35_39_count: 173,
      age_40_44_count: 161, age_45_49_count: 93, age_50_54_count: 60, age_55_59_count: 56,
      age_60_64_count: 25, age_65_plus_count: 16, age_under_20_count: 0, annuity_total: 159983514.8,
      dc_employee_count: 668, employee_count: 813, not_telework_eligible_count: 0,
      salary_100k_109k_count: 16, salary_110k_119k_count: 27, salary_120k_129k_count: 31,
      salary_130k_139k_count: 29, salary_140k_149k_count: 46, salary_150k_159k_count: 52,
      salary_160k_169k_count: 77, salary_170k_179k_count: 42, salary_180k_189k_count: 101,
      salary_190k_199k_count: 255, salary_200k_219k_count: 33, salary_20k_29k_count: 0,
      salary_220k_239k_count: 23, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 2,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 15,
      salary_60k_69k_count: 10, salary_70k_79k_count: 3, salary_80k_89k_count: 19,
      salary_90k_99k_count: 28, salary_less_20k_count: 0, salary_total: 133399733,
      salary_unspecified_count: 4, telework_eligible_count: 785, telework_unspecified_count: 26,
      tenure_10_14_count: 103, tenure_15_19_count: 85, tenure_1_2_count: 129,
      tenure_20_24_count: 53, tenure_25_29_count: 36, tenure_30_34_count: 15,
      tenure_35_plus_count: 27, tenure_3_4_count: 92, tenure_5_9_count: 152,
      tenure_less_than_1_count: 121
    },
    children_count: 67,
    detailed: {/* same as aggregated, omitted for brevity */},
    office_id: "ef152d97-c595-4e7d-9839-cc2d7db5cebe",
    office_name: "Office Of Management And Budget"
  },
  NTSB: {
    aggregated: {
      age_20_24_count: 1, age_25_29_count: 9, age_30_34_count: 18, age_35_39_count: 49,
      age_40_44_count: 60, age_45_49_count: 60, age_50_54_count: 74, age_55_59_count: 76,
      age_60_64_count: 46, age_65_plus_count: 36, age_under_20_count: 0, annuity_total: 115673303.1,
      dc_employee_count: 305, employee_count: 429, not_telework_eligible_count: 0,
      salary_100k_109k_count: 7, salary_110k_119k_count: 19, salary_120k_129k_count: 28,
      salary_130k_139k_count: 25, salary_140k_149k_count: 35, salary_150k_159k_count: 55,
      salary_160k_169k_count: 45, salary_170k_179k_count: 44, salary_180k_189k_count: 51,
      salary_190k_199k_count: 67, salary_200k_219k_count: 16, salary_20k_29k_count: 0,
      salary_220k_239k_count: 6, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 0,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 1,
      salary_60k_69k_count: 2, salary_70k_79k_count: 3, salary_80k_89k_count: 13,
      salary_90k_99k_count: 12, salary_less_20k_count: 0, salary_total: 59948529,
      salary_unspecified_count: 0, telework_eligible_count: 425, telework_unspecified_count: 0,
      tenure_10_14_count: 57, tenure_15_19_count: 83, tenure_1_2_count: 27,
      tenure_20_24_count: 52, tenure_25_29_count: 57, tenure_30_34_count: 28,
      tenure_35_plus_count: 20, tenure_3_4_count: 17, tenure_5_9_count: 52,
      tenure_less_than_1_count: 36
    },
    children_count: 67,
    detailed: {/* same as aggregated, omitted for brevity */},
    office_id: "18a62eea-e330-4f32-ab50-c4096ba96805",
    office_name: "National Transportation Safety Board"
  },
  DOT: {
    aggregated: {
      age_20_24_count: 912, age_25_29_count: 3290, age_30_34_count: 5958, age_35_39_count: 7962,
      age_40_44_count: 9086, age_45_49_count: 6608, age_50_54_count: 6388, age_55_59_count: 6869,
      age_60_64_count: 5476, age_65_plus_count: 3248, age_under_20_count: 0, annuity_total: 13393055175.9,
      dc_employee_count: 7549, employee_count: 55806, not_telework_eligible_count: 17428,
      salary_100k_109k_count: 4303, salary_110k_119k_count: 4680, salary_120k_129k_count: 4648,
      salary_130k_139k_count: 4080, salary_140k_149k_count: 3882, salary_150k_159k_count: 3990,
      salary_160k_169k_count: 3734, salary_170k_179k_count: 3360, salary_180k_189k_count: 3416,
      salary_190k_199k_count: 3372, salary_200k_219k_count: 2759, salary_20k_29k_count: 0,
      salary_220k_239k_count: 2328, salary_240k_259k_count: 0, salary_260k_279k_count: 1,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 481,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 184,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 930,
      salary_60k_69k_count: 1224, salary_70k_79k_count: 1919, salary_80k_89k_count: 2727,
      salary_90k_99k_count: 3785, salary_less_20k_count: 0, salary_total: 7664998288,
      salary_unspecified_count: 3, telework_eligible_count: 38372, telework_unspecified_count: 0,
      tenure_10_14_count: 8684, tenure_15_19_count: 9527, tenure_1_2_count: 4360,
      tenure_20_24_count: 6680, tenure_25_29_count: 3387, tenure_30_34_count: 2959,
      tenure_35_plus_count: 2714, tenure_3_4_count: 4039, tenure_5_9_count: 9647,
      tenure_less_than_1_count: 3809
    },
    children_count: 518,
    detailed: {},
    office_id: "58be2eff-4ba1-45ae-bdf0-97362bd97486",
    office_name: "Department Of Transportation"
  }
};

const AGE_RANGES = [
  { label: 'Under 20', key: 'age_under_20_count' }, { label: '20-24', key: 'age_20_24_count' },
  { label: '25-29', key: 'age_25_29_count' }, { label: '30-34', key: 'age_30_34_count' },
  { label: '35-39', key: 'age_35_39_count' }, { label: '40-44', key: 'age_40_44_count' },
  { label: '45-49', key: 'age_45_49_count' }, { label: '50-54', key: 'age_50_54_count' },
  { label: '55-59', key: 'age_55_59_count' }, { label: '60-64', key: 'age_60_64_count' },
  { label: '65+', key: 'age_65_plus_count' }
];

const SALARY_RANGES = [
  { label: 'Under $50K', keys: ['salary_less_20k_count', 'salary_20k_29k_count', 'salary_30k_39k_count', 'salary_40k_49k_count'] },
  { label: '$50K-$69K', keys: ['salary_50k_59k_count', 'salary_60k_69k_count'] },
  { label: '$70K-$89K', keys: ['salary_70k_79k_count', 'salary_80k_89k_count'] },
  { label: '$90K-$109K', keys: ['salary_90k_99k_count', 'salary_100k_109k_count'] },
  { label: '$110K-$129K', keys: ['salary_110k_119k_count', 'salary_120k_129k_count'] },
  { label: '$130K-$149K', keys: ['salary_130k_139k_count', 'salary_140k_149k_count'] },
  { label: '$150K-$199K', keys: ['salary_150k_159k_count', 'salary_160k_169k_count', 'salary_170k_179k_count', 'salary_180k_189k_count', 'salary_190k_199k_count'] },
  { label: '$200K+', keys: ['salary_200k_219k_count', 'salary_220k_239k_count', 'salary_240k_259k_count', 'salary_260k_279k_count', 'salary_280k_299k_count', 'salary_300k_349k_count', 'salary_350k_399k_count', 'salary_400k_449k_count', 'salary_450k_499k_count', 'salary_500k_plus_count'] }
];

const TENURE_RANGES = [
  { label: 'Less than 1 year', key: 'tenure_less_than_1_count' }, { label: '1-2 years', key: 'tenure_1_2_count' },
  { label: '3-4 years', key: 'tenure_3_4_count' }, { label: '5-9 years', key: 'tenure_5_9_count' },
  { label: '10-14 years', key: 'tenure_10_14_count' }, { label: '15-19 years', key: 'tenure_15_19_count' },
  { label: '20-24 years', key: 'tenure_20_24_count' }, { label: '25-29 years', key: 'tenure_25_29_count' },
  { label: '30-34 years', key: 'tenure_30_34_count' }, { label: '35+ years', key: 'tenure_35_plus_count' }
];

const TELEWORK_OPTIONS = [
  { label: 'Eligible', key: 'telework_eligible_count' }, { label: 'Not Eligible', key: 'not_telework_eligible_count' },
  { label: 'Unspecified', key: 'telework_unspecified_count' }
];

const AGE_MIDPOINTS = {
  'Under 20': 19, '20-24': 22, '25-29': 27, '30-34': 32, '35-39': 37, '40-44': 42,
  '45-49': 47, '50-54': 52, '55-59': 57, '60-64': 62, '65+': 70
};

const TABS = ['overview', 'age', 'salary', 'tenure'];

function FederalDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDataPoint, setActiveDataPoint] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState('Federal_Government');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeData = OFFICE_DATA[selectedOffice];
  const aggregated = activeData.aggregated;

  const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatCurrency = (amount) => {
    if (amount >= 1e12) return `$${(amount / 1e12).toFixed(2)}T`;
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(2)}M`;
    if (amount >= 1e3) return `$${(amount / 1e3).toFixed(2)}K`;
    return `$${amount}`;
  };

  const calculateAverageAge = (data) => {
    const [totalWeightedAge, totalEmployees] = data.reduce(
      ([weighted, total], { label, value }) => [weighted + (AGE_MIDPOINTS[label] * value), total + value],
      [0, 0]
    );
    return (totalWeightedAge / totalEmployees).toFixed(1);
  };

  const getDataFromKeys = (ranges, data) => ranges.map(({ label, key, keys }) => ({
    label,
    value: keys ? keys.reduce((sum, k) => sum + data[k], 0) : data[key]
  }));

  const ageData = getDataFromKeys(AGE_RANGES, aggregated);
  const salaryData = getDataFromKeys(SALARY_RANGES, aggregated);
  const tenureData = getDataFromKeys(TENURE_RANGES, aggregated);
  const teleworkData = getDataFromKeys(TELEWORK_OPTIONS, aggregated);

  const averageSalary = aggregated.salary_total / aggregated.employee_count;
  const averageAge = calculateAverageAge(ageData);

  const handlePointHover = (data, index) => setActiveDataPoint({
    data,
    index,
    percentage: ((data[index].value / aggregated.employee_count) * 100).toFixed(1)
  });

  const renderLineGraph = (data, title, color = '#E0162B') => {
    const maxValue = Math.max(...data.map(item => item.value));
    const chartHeight = 150;
    const scaleY = chartHeight / maxValue;

    return (
      <div className="graph-container">
        <h3 className="graph-title">{title}</h3>
        {activeDataPoint?.data === data && (
          <div className="data-tooltip">
            <strong>{data[activeDataPoint.index].label}:</strong> {formatNumber(data[activeDataPoint.index].value)} employees
            <div>({activeDataPoint.percentage}% of total workforce)</div>
          </div>
        )}
        <div className="line-graph">
          <div className="grid-lines">
            {[0, 25, 50, 75, 100].map(pct => <div key={pct} className="grid-line" style={{ bottom: `${pct}%` }} />)}
          </div>
          <div className="line-points">
            {data.map((item, index) => {
              const height = item.value * scaleY;
              const pointY = chartHeight - height;
              return (
                <div className="data-point" key={index}>
                  {index > 0 && (
                    <>
                      <svg className="area-fill" style={{ position: 'absolute', top: 0, left: '-50%', width: '100%', height: chartHeight, zIndex: 1 }}>
                        <polygon points={`0,${chartHeight} 0,${chartHeight - (data[index-1].value * scaleY)} 100,${pointY} 100,${chartHeight}`} fill={`${color}15`} />
                      </svg>
                      <svg className="line-connector" style={{ position: 'absolute', top: 0, left: '-50%', width: '100%', height: chartHeight, zIndex: 2 }}>
                        <line x1="0%" y1={chartHeight - (data[index-1].value * scaleY)} x2="100%" y2={pointY} stroke={color} strokeWidth="2.5" />
                      </svg>
                    </>
                  )}
                  <div
                    className={`point-marker ${activeDataPoint?.data === data && activeDataPoint.index === index ? 'active' : ''}`}
                    style={{ backgroundColor: color, top: `${pointY}px`, boxShadow: `0 0 0 3px white, 0 0 0 4px ${color}40` }}
                    onMouseEnter={() => handlePointHover(data, index)}
                    onMouseLeave={() => setActiveDataPoint(null)}
                  />
                  <div className="point-label">{item.label}</div>
                </div>
              );
            })}
          </div>
          <div className="y-axis">
            <div className="y-label" style={{ bottom: '0%' }}>0</div>
            <div className="y-label" style={{ bottom: '50%' }}>{formatNumber(maxValue / 2)}</div>
            <div className="y-label" style={{ bottom: '100%' }}>{formatNumber(maxValue)}</div>
          </div>
        </div>
      </div>
    );
  };

  const officeOptions = Object.entries(OFFICE_DATA).map(([key, { office_name }]) => ({ value: key, label: office_name }));
  const selectedLabel = officeOptions.find(opt => opt.value === selectedOffice)?.label || 'Select Office';

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-flag">
          <div className="flag-stripe red" />
          <div className="flag-stripe white" />
          <div className="flag-stripe blue" />
        </div>
        <h1>Federal Workforce Dashboard</h1>
        <div className="modern-dropdown">
          <div className="dropdown-selected" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedLabel}
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </div>
          {isDropdownOpen && (
            <ul className="dropdown-options">
              {officeOptions.map(({ value, label }) => (
                <li
                  key={value}
                  className={`dropdown-option ${selectedOffice === value ? 'selected' : ''}`}
                  onClick={() => { setSelectedOffice(value); setIsDropdownOpen(false); }}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="dashboard-summary">
        {[
          { title: 'Total Employees', value: formatNumber(aggregated.employee_count), detail: `${activeData.office_name} workforce`, className: 'red-card' },
          { title: 'Salary Budget', value: formatCurrency(aggregated.salary_total), detail: 'Total annual', className: 'white-card' },
          { title: 'Average Salary', value: formatCurrency(averageSalary), detail: 'Per employee', className: 'blue-card' },
          { title: 'DC-Based', value: formatNumber(aggregated.dc_employee_count), detail: `${((aggregated.dc_employee_count / aggregated.employee_count) * 100).toFixed(1)}% of workforce`, className: 'red-card' },
          { title: 'Average Age', value: averageAge, detail: 'Years', className: 'blue-card' }
        ].map(({ title, value, detail, className }) => (
          <div key={title} className={`summary-card ${className}`}>
            <h2>{title}</h2>
            <div className="summary-value">{value}</div>
            <div className="summary-detail">{detail}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-container">
            <div className="overview-graph">{renderLineGraph(teleworkData, 'Telework Eligibility', '#0A3161')}</div>
            <div className="overview-graph">{renderLineGraph(ageData, 'Age Distribution Overview', '#E0162B')}</div>
          </div>
        )}
        {activeTab === 'age' && <div className="full-graph-container">{renderLineGraph(ageData, 'Employee Age Distribution', '#E0162B')}</div>}
        {activeTab === 'salary' && <div className="full-graph-container">{renderLineGraph(salaryData, 'Employee Salary Distribution', '#0A3161')}</div>}
        {activeTab === 'tenure' && <div className="full-graph-container">{renderLineGraph(tenureData, 'Employee Tenure Distribution', '#E0162B')}</div>}
      </div>

      <footer className="dashboard-footer">
        <div className="flag-stripes">
          <div className="flag-stripe red" />
          <div className="flag-stripe white" />
          <div className="flag-stripe blue" />
        </div>
        <div className="footer-summary">
          {[
            { label: 'Total employees', value: formatNumber(aggregated.employee_count) },
            { label: 'Total salary budget', value: formatCurrency(aggregated.salary_total) },
            { label: 'Annuity total', value: formatCurrency(aggregated.annuity_total) }
          ].map(({ label, value }) => (
            <div key={label} className="footer-stat">
              <span className="stat-label">{label}:</span>
              <span className="stat-value">{value}</span>
            </div>
          ))}
        </div>
        <div className="copyright">Authored by Michael Mendy © 2025</div>
      </footer>
    </div>
  );
}

export default FederalDashboard;
