

export const ArrowChart = (props) => {
  const scaleSize = props.maxValue - props.minValue;
  const scoreValue = props.score.toFixed(1);
  let bottomValue = ((props.score - props.minValue) / scaleSize) * 100;
  let rhombusPosition = `${bottomValue}%`;

  let benchmarkBottomValue =
    ((props.benchmark - props.minValue) / scaleSize) * 100;
  let benchmarkBottomValueToPass = `${benchmarkBottomValue}%`;

  return (
    <div className='scale-container'>
      <div className='title-feeling'>feeling</div>
      <div className='feeling-name' style={{ color: props.color }}>
        {props.topTextName}
      </div>
      <div className='feeling-description'>{props.topTextDescription}</div>
      <div className='scale-body'>
        <div className='midpoint'></div>
        <div
          className='result-score'
          style={{
            position: 'absolute',
            bottom: rhombusPosition,
            color: props.color,
          }}
        >
          {scoreValue}
        </div>
        <div
          className='result-score-line'
          style={{
            position: 'absolute',
            bottom: rhombusPosition,
          }}
        ></div>
        <div
          className='benchmarkcontainer'
          style={{ position: 'absolute', bottom: benchmarkBottomValueToPass }}
        >
          <div
            className='benchmark'
            //style={{ position: 'absolute', bottom: benchmarkBottomValueToPass }}
          ></div>{' '}
          <div
            className='benchmarkValue'
            // style={{ position: 'absolute', bottom: benchmarkBottomValueToPass }}
          >
            {props.benchmark}
          </div>
        </div>
      </div>
      <div className='title-feeling'>feeling</div>
      <div className='feeling-name' style={{ color: props.color }}>
        {props.bottomText}
      </div>
      <div className='feeling-description'>{props.bottomTextDescription}</div>
    </div>
  );
};
