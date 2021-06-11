
import { Router } from 'itty-router'
import { Trees } from './trees'

const router = Router()

router.get('/api/trees', Trees)

export async function handleRequest(request: Request): Promise<Response> {
  return router.handle(request)
}

