import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function handler(req: VercelRequest, res: VercelResponse) {
	// cors setup
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	)
	if (req.method === 'OPTIONS') {
		return res.status(200).end()
	}

	console.log({
		method: req.method,
		query: req.query || 'undefined',
		body: req.body || 'undefined'
	})


	return res.status(200).json({
		method: req.method,
		query: req.query,
		body: req.body,
	})
}
