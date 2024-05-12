import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center text-zinc-100"
    >
      <h1 className="text-64 font-bold">Oops!</h1>
      <p className="mb-12 text-20">Sorry, an unexpected error has occurred.</p>

      <p className="text-18 text-red-500">
        {/* @ts-expect-error unkown */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
export default ErrorPage
