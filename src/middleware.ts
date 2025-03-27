import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(request.url.replace('/api', '/apimock'))
}


export const config = {
  matcher: ['/api/:path*'],
}
