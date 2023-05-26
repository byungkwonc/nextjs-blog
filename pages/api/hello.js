export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }

  // https://nodejs.org/api/http.html
// req is an instance of http.IncomingMessage, plus some pre-built middlewares. -> https://nextjs.org/docs/pages/api-reference/functions/next-server
// res is an instance of http.ServerResponse, plus some helper functions.