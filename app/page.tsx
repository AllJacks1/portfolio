import { NavigationBar } from "./coomponents/NavigationBar"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <NavigationBar/>
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
        </div>
      </div>
    </div>
  )
}
