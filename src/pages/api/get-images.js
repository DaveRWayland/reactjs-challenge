export default function handler(req, res) {
  const url = 'https://api.unsplash.com/photos?page=1&client_id=6yC_GVDAK9EnZFLDYC7yOs5zZ73lVj-bp2EHwPM1fow';
  const images = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((data) => res.json(data));
}
