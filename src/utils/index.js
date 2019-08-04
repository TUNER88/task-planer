const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360),
    s = 30 + Math.floor(Math.random() * 70) + '%',
    l = Math.floor(Math.random() * 60) + '%'
  return `hsl(${h},${s},${l})`
}

export { getRandomColor }
