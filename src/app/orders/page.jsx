import { Avatar } from '@/components/avatar'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getOrders } from '@/data'

export const metadata = {
  title: 'Pricing',
}

export default async function Orders() {
  let orders = await getOrders()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Pricing</Heading>
        {/* <Button className="-my-0.5">Create order</Button> */}
      </div>
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
