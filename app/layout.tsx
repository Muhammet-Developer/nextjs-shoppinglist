import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/reset.css'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" />
      {/* referrerpolicy="no-referrer" */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
