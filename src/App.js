import './App.css';
import { ArrowChart } from './ArrowChart';
import { defaultSettings } from './defaultSettings';

function App({ data = [], settings = {} }) {
  return (
    <div className='chart-container'>
      <div className='legend' style={{ color: 'black' }}>
        <div className='legend-container' style={{ color: 'black' }}>
          <span className='result-score-legend'>X.X</span>
          <span className='description-legend'>Your MindLode Score</span>
        </div>
        <div className='legend-container' style={{ color: 'black' }}>
          <span className='benchmark-legend'></span>
          <span className='description-legend'> Benchmark </span>
        </div>
      </div>
      <div className='body'>
        <div className='range'>
          <div className='circle'>
            <div className='plus-sign'></div>
            <div className='texttext'>
              <svg viewBox='0 0 100 100' width='100' height='100'>
                <defs>
                  <path
                    id='circle'
                    d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
                  />
                </defs>
                <text font-size='17'>
                  <textPath href='#circle'>Positive Engagement</textPath>
                </text>
              </svg>
            </div>

            {/* <div class='circle-text'>Positive Engagement</div> */}
            <div className='fifty'> 50</div>
          </div>

          <div className='line'></div>

          <div className='circle'>
            <div className='fifty'>-50</div>
            <div className='minus-sign'></div>
            <div className='texttext'>
              <svg viewBox='0 0 100 100' width='100' height='100'>
                <defs>
                  <path
                    id='circle'
                    d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
                  />
                </defs>
                <text font-size='17'>
                  <textPath href='#circle'>Negative Engagement</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default App;
