import Tabel from '@/app/ui/customers/table'
import { fetchFilteredCustomers } from '@/app/lib/data'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query || ''

  const filteredCustomers = await fetchFilteredCustomers(query)

  return <Tabel customers={filteredCustomers} />
}
