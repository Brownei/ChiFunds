import Dashboard from "@/components/Dashboard"
import { getUser } from "@/lib/requests"

const page = async () => {
  const { user, loading } = await getUser()
  console.log({ user, loading })

  return (
    <Dashboard loading={loading} user={user} />
  )
}

export default page

