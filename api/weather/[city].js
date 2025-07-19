const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.VITE_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ciudad no encontrada');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
