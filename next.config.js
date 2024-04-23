const nextConfig = {
    //config doc: https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
    //add domain where we're allowed to serve images
    //for security reason, otherwise anyone can take advantage of the end point that Nextjs exposes for serving potimized images
    //for security reason, we should be as specific as possible here.
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.logrocket.com',
            },
        ],
    },
}

module.exports = nextConfig
