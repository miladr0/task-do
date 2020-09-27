const DEFAULT = 0;
const widths = {
  16: 'w-1/6',
  25: 'w-3/12',
  50: 'w-1/2',
  75: 'w-3/4',
  100: 'w-full',
  [DEFAULT]: 'w-0',
};

const progressWidth = (width = DEFAULT) => {
  return widths[width] || widths[DEFAULT];
};

export default progressWidth;
