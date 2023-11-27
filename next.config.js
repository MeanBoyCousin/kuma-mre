/** @type {import('next').NextConfig} */
import { withKumaUI } from '@kuma-ui/next-plugin'

export default withKumaUI({
  reactStrictMode: process.env.VERCEL_ENV === 'development',
  trailingSlash: true,
})
