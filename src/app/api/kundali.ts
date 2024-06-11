
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process the form data here
    const { dateOfBirth, timeOfBirth, placeOfBirth } = req.body;
    console.log('Received form data:', { dateOfBirth, timeOfBirth, placeOfBirth });

    // In a real application, you would process the form data, generate the Kundali,
    // and send back the response accordingly. For demonstration purposes, we'll
    // just send back a success message.
    res.status(200).json({ message: 'Form data received successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}