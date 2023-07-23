import type { Metadata } from 'next'

import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}