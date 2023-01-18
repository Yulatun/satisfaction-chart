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
      <div className='legend'>
        {' '}
        <div className='legend-rhombus'  />
        Your score
        <div className='legend-benchmark'  />
        MindLode Benchmark
      </div>
    </div>
  );
}

export default App;
