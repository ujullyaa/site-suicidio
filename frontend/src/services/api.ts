export async function getMensagem() {
  const res = await fetch('http://localhost:5000/ajuda')
  return res.json()
}