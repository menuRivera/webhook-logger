import type { VercelRequest, VercelResponse } from "@vercel/node"

export default (req: VercelRequest, res: VercelResponse) => {

	console.dir({
		method: req.method,
		query: req.query || 'undefined',
		body: req.body || 'undefined'
	}, { depth: null })


	return res.status(200).json({ success: true })
}
