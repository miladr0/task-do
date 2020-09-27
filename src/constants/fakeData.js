const profileImages = [
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
];
const taskLabels = ['High', 'Medium', 'Less', 'Default'];

const progresses = [0, 16, 25, 50, 75];

const generateProfileImage = () => {
  const total = Math.floor(Math.random() * (5 - 1) + 1);
  const images = [];

  for (let i = 0; i <= total; i++) {
    const r = Math.floor(Math.random() * 4);
    const image = profileImages[r];
    if (!images.some(i => i === image)) {
      images.push(image);
    }
  }

  return images;
};

const generateTaskLabel = () => {
  const index = Math.floor(Math.random() * (4 - 1) + 1);
  return taskLabels[index];
};

const generateProgress = () => {
  const index = Math.floor(Math.random() * (5 - 1) + 1);
  return progresses[index];
};

export const TO_DO = [
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
];

export const DOING = [
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: generateProgress(),
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
];

export const DONE = [
  {
    label: generateTaskLabel(),
    progress: 100,
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: 100,
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: 100,
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: 100,
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
  {
    label: generateTaskLabel(),
    progress: 100,
    title: 'create additional fields for payment flow',
    users: generateProfileImage(),
  },
];
