
import "@/styles/global.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true} className="h-screen w-full flex justify-center bg-gray-950">{children}</body>
    </html>
  );
}
