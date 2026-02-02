/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Keeping false as per original vite config implicit behavior or preference? Usually true is better but let's stick to simple first.
    compiler: {
        styledComponents: true, // Just in case, though we are using Tailwind
    },
    images: {
        unoptimized: true, // Helpful for static exports or avoiding complexity with external images for now
    },
};

export default nextConfig;
