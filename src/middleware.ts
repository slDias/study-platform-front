import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(request.url.replace('/api', '/apimock'))
}

export const config = {
  matcher: ['/api/:path*'],
}
