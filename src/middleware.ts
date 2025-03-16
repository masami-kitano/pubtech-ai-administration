import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 環境変数が設定されているか確認
  const authUser = process.env.BASIC_AUTH_USER
  const authPassword = process.env.BASIC_AUTH_PASSWORD

  // 環境変数が設定されていない場合は認証をスキップ
  if (!authUser || !authPassword) {
    console.warn('Basic認証の環境変数が設定されていません')
    return NextResponse.next()
  }

  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      if (user === authUser && pwd === authPassword) {
        return NextResponse.next()
      }
    } catch (e) {
      console.error('Basic認証の処理中にエラーが発生しました:', e)
    }
  }

  return new NextResponse('認証が必要です', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// Basic認証を適用するパスを指定
export const config = {
  matcher: '/:path*',
} 