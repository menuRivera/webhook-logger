import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function handler(req: VercelRequest, res: VercelResponse) {

	console.log({
		method: req.method,
		query: req.query || 'undefined',
		body: req.body || 'undefined'
	})


	return res.status(200).json({ success: true })
}
