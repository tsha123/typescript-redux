import axios from "axios"

const getRandom = (data: Array<number>) => {
  let id = 0
  do {
    id = Math.floor(Math.random() * 1000)
  } while (data.some(ele => ele === id))
  return id
}

const getRandomId = async (data: Array<number>) => {
  let id: any = getRandom(data)
  console.log(`random: ${id}`)
  const url = `https://picsum.photos/id/${id}/100`
  await axios.get(url)
    .catch(() => id = getRandomId(data))
  return id
}

export default getRandomId