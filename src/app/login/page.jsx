import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Heading } from '@/components/heading'
import { Checkbox } from '@/components/checkbox'
import { Text } from '@/components/text'

export const metadata = {
  title: 'Authentication',
}

export default function AuthPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 z-10 top-0 left-0 absolute">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Heading className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</Heading>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <Input id="email-address" name="email" type="email" autoComplete="email" required className="" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <Input id="password" name="password" type="password" autoComplete="current-password" required className="" placeholder="Password" />
            </div>
          </div>
          <div className="flex items-center justify-between">
          <div className="flex items-center">
              <Checkbox id="remember_me" name="remember_me" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
          </div>
          <div>
            <Button className="w-full" type="submit" href="/">
              Sign in
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Text className="text-gray-600">Don't have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact Us</a></Text>
        </div>
      </div>
    </div>
  )
}
