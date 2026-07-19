/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export. NCA administers .gov.so, will not delegate a subdomain,
  // and hosts WordPress/cPanel with no Node — so the site ships as plain
  // files. `npm run build` writes a complete site to out/.
  output: 'export',

  // cPanel/Apache serves directories, not extensionless files: /en/about/
  // must resolve to /en/about/index.html.
  trailingSlash: true,

  // REQUIRED for export: next/image's default loader needs a server at
  // runtime. The seal is rendered with next/image in Header, Footer and
  // HomeView, so without this the export build fails.
  images: { unoptimized: true },

  // NOTE: there is deliberately no redirects() block. redirects() is a
  // server feature and is silently dropped by output:'export' — / → /en is
  // handled by public/.htaccess (Apache/cPanel) instead. If we ever return to
  // a Node host, restore redirects() and remove the .htaccess rule.
};

export default nextConfig;
