const DEFAULT = 'Default';
const labels = {
  High: 'bg-indigo-500',
  Medium: 'bg-yellow-500',
  Less: 'bg-teal-400',
  [DEFAULT]: 'bg-pink-400',
};

const colorLabel = (label = DEFAULT) => {
  return labels[label] || labels[DEFAULT];
};

export default colorLabel;
