// api/weather/[city].js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    const {
        query: { city },
    } = req;

    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();

        const currentCondition = data.current_condition[0];

        res.status(200).json({
            city,
            temperature: currentCondition.temp_C,
            condition: currentCondition.weatherDesc[0].value,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el clima' });
    }
}
