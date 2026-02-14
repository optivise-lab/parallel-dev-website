import { jsxRenderer } from 'hono/jsx-renderer'
import { raw } from 'hono/html'
import { Link, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ParallelDev</title>
        <link rel="icon" type="image/png" href="https://pub-05940314903b40afadddd07dd49bbeb6.r2.dev/parallel-dev/favicon.png" />
        {raw(`<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "vh7p7juk80");</script>`)}
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body class="bg-[#0F172A] text-slate-200 leading-relaxed font-sans">
        {children}
      </body>
    </html>
  )
})
