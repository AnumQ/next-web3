import { EthereumProvider } from '../components/Context'

export const metadata = {
  title: 'Web3.js + Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EthereumProvider>
          {children}
        </EthereumProvider>
      </body>
    </html>
  )
}
