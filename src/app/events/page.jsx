import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Select } from '@/components/select'
import { getSheets } from '@/data'
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Events',
}

export default async function Sheets() {
  let sheet = await getSheets()

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Events</Heading>
          {/* <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search events&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div> */}
        </div>
        {/* <Button>Create event</Button> */}
      </div>
     <div className="textbox">Click a product below to view/download its Safety Data Sheet (SDS)</div>
<ul className="mt-10">
  {getSheets().map((sheet, index) => (
    <>
      <li key={index}>
        <Divider soft={index > 0} />
        <div className="flex items-center justify-between">
          <div className="flex gap-6 py-6">
            <div className="space-y-1.5">
              <div className="text-base/6 font-semibold">
                <Link href={sheet.url}>{sheet.name}</Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  ))}
</ul>
    </>
  )
}
