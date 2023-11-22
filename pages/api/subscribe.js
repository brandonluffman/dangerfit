// pages/api/subscribe.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Get email from the request body
    const { email } = req.body;

    // Define the path to the JSON file
    const filePath = path.resolve('./', 'newsletter_subscribers.json');

    // Read the current subscribers
    const currentData = fs.existsSync(filePath) ? fs.readFileSync(filePath) : '[]';
    const subscribers = JSON.parse(currentData);

    // Add the new email to the array
    subscribers.push({ email });

    // Write the updated subscribers back to the file
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));

    // Return a success response
    res.status(200).json({ status: 'Success', message: 'Email submitted' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
