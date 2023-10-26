"use client"
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'remixicon/fonts/remixicon.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}