export default function handler(req, res) {
  const url = 'https://api.unsplash.com/photos?page=1&?per_page=50';
  const images = fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: `Client-ID ${process.env.AUTH_KEY}`,
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((data) => res.json(data));
}
