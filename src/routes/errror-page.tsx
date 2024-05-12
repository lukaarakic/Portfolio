import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      id="error-page"
      className="flex flex-col text-zinc-100 items-center justify-center h-screen"
    >
      <h1 className="text-64 font-bold">Oops!</h1>
      <p className="text-20 mb-12">Sorry, an unexpected error has occurred.</p>

      <p className="text-red-500 text-18">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
export default ErrorPage
