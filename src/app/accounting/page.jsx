import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getReceipts } from '@/data'

export const metadata = {
  title: 'Orders',
}

export default async function Receipts() {
  let receipt = await getReceipts()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Invoices</Heading>
        {/* <Button className="-my-0.5">Create order</Button> */}
      </div>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Invoice Number</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Details</TableHeader>
            <TableHeader className="text-right">Image</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {receipt.map((receipt) => (
            <TableRow key={receipt.id} title={`Order #${receipt.id}`}>
                <TableCell>{receipt.id}</TableCell>
              <TableCell className="text-zinc-500">{receipt.invoiceNumber}</TableCell>
              <TableCell>{receipt.date}</TableCell>
              <TableCell>{receipt.image}</TableCell>
              <TableCell className="text-right">•••</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
