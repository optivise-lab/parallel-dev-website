import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ParallelDev</title>
        <link rel="icon" type="image/png" href="https://pub-05940314903b40afadddd07dd49bbeb6.r2.dev/parallel-dev/favicon.png" />
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body class="bg-[#0F172A] text-slate-200 leading-relaxed font-sans">
        {children}
      </body>
    </html>
  )
})
