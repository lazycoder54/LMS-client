/** @type {import('next').NextConfig}*/
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me'],
  },
  // async headers() {
  //   return [
  //     {
  //       source: ''/course/\\[id\\]',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self'; script-src https://js.stripe.com",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
