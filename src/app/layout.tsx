import type { Metadata } from 'next'
import SPHeader from '@/components/SPHeader'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Studies',
  description: 'A personal studies tracking platform',
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default ({ children }: RootLayoutProps) => (
  <html className="h-full">
    <body className="h-full flex flex-col gap-8">
      <SPHeader />
      <div className="grow">
        {children}
      </div>
      <div>{/* TODO: SPFooter */}</div>
    </body>
  </html>
)
