"use client"

import * as Headless from '@headlessui/react'
import { useState, Fragment } from 'react'
import { clsx } from 'clsx'

export const CustomMultiSelect = ({ className, options, name, ariaLabel }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    )
  }

  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        'group relative block w-full',
        'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
        'dark:before:hidden',
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent after:has-[[data-focus]]:ring-2 after:has-[[data-focus]]:ring-blue-500',
        'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
      ])}
    >
      <Headless.Select
        multiple
        value={selectedOptions}
        onChange={setSelectedOptions}
        className={clsx([
          'relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
          'px-[calc(theme(spacing[3.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)]',
          '[&_optgroup]:font-semibold',
          'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white',
          'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
          'bg-transparent dark:bg-white/5 dark:*:bg-zinc-800',
          'focus:outline-none',
          'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600',
          'data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]',
        ])}
      >
        {({ open }) => (
          <>
            <Headless.Select.Button as="input"
              type="text"
              aria-label={ariaLabel}
              name={name}
              value={selectedOptions.join(', ')}
              readOnly
              className="w-full border p-2 rounded"
              placeholder="Select recipients"
            />
            {open && (
              <Headless.Select.Options static className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md">
                {options.map((option) => (
                  <Headless.Select.Option key={option.value} value={option.label} as={Fragment}>
                    {({ active, selected }) => (
                      <div className={clsx("p-2 cursor-pointer", { 'bg-gray-200': active })}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleOption(option.label)}
                            className="mr-2"
                          />
                          {option.label}
                        </label>
                      </div>
                    )}
                  </Headless.Select.Option>
                ))}
              </Headless.Select.Options>
            )}
          </>
        )}
      </Headless.Select>
    </span>
  )
}
