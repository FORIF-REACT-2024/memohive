'use client'

import { useParams } from 'next/navigation'

export default function NotFound() {
  const params = useParams<{ id: string }>()
  return (
    <div className="w-full flex items-center min-h-svh flex-col h-svh mt-36 text-3xl gap-6">
      <div>404 Not Found</div>
      <div>Board with ID ${params.id} not found</div>
    </div>
  )
}
