import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getRecentOrders } from '@/data'

export function Stat({ title, value, change }) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
      </div>
    </div>
  )
}

export default async function Home() {
  let orders = await getRecentOrders()

  return (
    <>
      <Heading>Good afternoon</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        {/* <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div> */}
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Account Balance" value="$180,434.57" change="+4.5%" />
        <Stat title="Credit Limit value" value="$200,000" change="-0.5%" />
        <Stat title="Available Credit" value="$19,565.43" change="+4.5%" />
        <Stat title="Last Purchase" value="02-18-24" change="" />
      </div>
      <Subheading className="mt-14">Recent orders</Subheading>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Product Name</TableHeader>
            <TableHeader>Terminal Name</TableHeader>
            <TableHeader>State</TableHeader>
            <TableHeader>Effective Date/Time</TableHeader>
            <TableHeader className="text-right">Price</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} title={`Order #${order.id}`}>
              <TableCell>{order.prodName}</TableCell>
              <TableCell className="text-zinc-500">{order.terminal}</TableCell>
              <TableCell>{order.state}</TableCell>
              <TableCell>
                {order.effDate} {order.effTime}
              </TableCell>
              <TableCell className="text-right">{order.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
