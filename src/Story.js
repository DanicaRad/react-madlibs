
const Story = (words) => {
  if(!words) return null;
  return `Please excuse ${words.name}, who is far too ${words.adjective} to attend ${words.noun} class today.`;
}

export default Story;