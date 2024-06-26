'use client'

import { Fragment, useId, forwardRef } from 'react'
import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'
import { TouchTarget } from './button'
import { Link } from './link'

export function SidebarHeader({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        ''
      )}
    />
  )
}

export function Sidebar({ className, ...props }) {
  return <nav {...props} className={clsx(className, 'flex flex-row')} />
}

export function SidebarSection({ className, ...props }) {
  let id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} data-slot="section" className={clsx(className, 'flex flex-row gap-2.5')} />
    </LayoutGroup>
  )
}

export function SidebarItem({ current, className, children, ...props }, ref) {
  let classes = clsx(
    'flex items-center gap-3 px-2 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5',
    'data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5',
    'data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4',
    'data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6',
    'data-[hover]:bg-zinc-950/5 rounded-md data-[slot=icon]:*:data-[hover]:fill-zinc-950',
    'data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950',
    'data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-blue-500',
    'data-[slot=icon]:*:data-[current]:fill-zinc-950',
    'dark:text-white dark:data-[slot=icon]:*:fill-zinc-400',
    'dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white',
    'dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white',
    'dark:data-[slot=icon]:*:data-[current]:fill-white'
  )

  return (
    <span className={clsx(className, 'relative')}>
      {current && (
        <motion.span
        />
      )}
      {'href' in props ? (
        <Headless.CloseButton as={Fragment}>
          <Link className={classes} {...props} data-current={current ? 'true' : undefined}>
            <TouchTarget>{children}</TouchTarget>
          </Link>
        </Headless.CloseButton>
      ) : (
        <Headless.Button
          {...props}
          className={clsx('cursor-default', classes)}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  )
}

SidebarItem = forwardRef(SidebarItem)

export function SidebarLabel({ className, ...props }) {
  return <span {...props} className={clsx(className, 'truncate')} />
}
