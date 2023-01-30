import './App.css';
import { ArrowChart } from './ArrowChart';
import { defaultSettings } from './defaultSettings';

function App({ data = [], settings = {} }) {
  return (
    <div className='chart-container'>
      <div className='main-container-all-scales'>
        {data.map((item, i) => {
          let dS = defaultSettings[item.type] || {};
          let overrideSettings = settings[item.type] || {};
          let combinedSettings = {
            ...dS,
            ...overrideSettings,
          };
          return (
            <ArrowChart
              key={i}
              {...combinedSettings}
              type={item.type}
              score={item.score}
            />
          );
        })}
      </div>
      <div className='legend' style={{ color: 'black' }}>
        <div className='legend-container' style={{ color: 'black' }}>
          <span className='result-score-line-legend'></span>
          <span className='result-score-legend'>X.X</span>
          <span className='description-legend'>Your Personal Score</span>
        </div>
        <div className='legend-container' style={{ color: 'black' }}>
          <span className='benchmark-legend'></span>
          <span className='benchmark2-legend'></span>
          <span className='description-legend'> Benchmark </span>
        </div>
        <div className='legend-container' style={{ color: 'black' }}>
          <span className='midpoint-legend'></span>
          <span className='description-legend'>Neutral (Zero)</span>
        </div>
      </div>
    </div>
  );
}

export default App;
