'use client'

import { usePathname } from 'next/navigation'
import AppBar from './ui/AppBar'

export default function AppBarWrapper() {
  const pathname = usePathname()
  
  const currentTab = pathname.startsWith('/marketplace') 
    ? 'marketplace' 
    : 'record'

  return <AppBar currentTab={currentTab} />
}