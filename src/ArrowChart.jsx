import { Emoji } from './icons/emojiIcons';

export const ArrowChart = (props) => {
  const scaleSize = props.maxValue - props.minValue;
  const scoreValue = props.score.toFixed(1);
  let bottomValue = ((props.score - props.minValue) / scaleSize) * 100;
  let rhombusPosition = `${bottomValue}%`;

  let benchmarkBottomValue =
    ((props.benchmark - props.minValue) / scaleSize) * 100;
  let benchmarkBottomValueToPass = `${benchmarkBottomValue}%`;

  let colorToChange = props.color;
  let opacity = 0.5;
  let newColor = `rgba(${parseInt(
    colorToChange.substring(1, 3),
    16
  )}, ${parseInt(colorToChange.substring(3, 5), 16)}, ${parseInt(
    colorToChange.substring(5, 7),
    16
  )}, ${opacity})`;

  return (
    <div
      className='scale-container'
      style={{
        color: props.color,
        background: `linear-gradient(transparent,${newColor},transparent)`,
      }}
    >
      <div className='title-feeling-top' style={{ color: props.color }}>
        feeling
      </div>
      <div className='feeling-description' style={{ color: props.color }}>
        {props.topText}
      </div>
      <Emoji name={props.topEmoji} color={props.color} />
      <div
        className='scale-body'
        style={{ '--color': props.color, background: props.color }}
      >
        <div
          className='result-score'
          style={{
            position: 'absolute',
            bottom: rhombusPosition,
            color: 'azure'
          }}
        >
          {scoreValue}
        </div>
        <div
          className='benchmark'
          style={{ position: 'absolute', bottom: benchmarkBottomValueToPass }}
        />
        <div className='midpoint'></div>
      </div>
      <Emoji name={props.bottomEmoji} color={props.color} />
      <div className='title-feeling-bottom' style={{ color: props.color }}>
        feeling
      </div>
      <div className='feeling-description-down' style={{ color: props.color }}>
        {props.bottomText}
      </div>
    </div>
  );
};
