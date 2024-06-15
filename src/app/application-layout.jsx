'use client'

import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { Sidebar, SidebarSection, SidebarHeader, SidebarItem, SidebarLabel } from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'

import {
  ArrowRightStartOnRectangleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid'
import {
  Cog6ToothIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'

function AccountDropdownMenu({ anchor }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="/settings">
        <UserCircleIcon />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ShieldCheckIcon />
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <LightBulbIcon />
        <DropdownLabel>Share feedback</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

export function ApplicationLayout({ events, children }) {
  let pathname = usePathname()

  return (
    <SidebarLayout
      navbar={
        <Navbar className="flex-col items-start px-4">
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/users/erica.jpg" square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar className="flex-row items-center justify-center px-4">
          <SidebarSection className="flex-row">
            <SidebarItem href="/" current={pathname === '/'}>
              <HomeIcon />
              <SidebarLabel>Home</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/accounting" current={pathname.startsWith('/accounting')}>
              <Square2StackIcon />
              <SidebarLabel>Accounting</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/orders" current={pathname.startsWith('/orders')}>
              <TicketIcon />
              <SidebarLabel>Pricing</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/events" current={pathname.startsWith('/events')}>
              <Cog6ToothIcon />
              <SidebarLabel>Data Sheets</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </Sidebar>
      }
      footer={
        <Navbar className="flex-col items-end px-4">
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/users/erica.jpg" className="size-10" square alt="" />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
