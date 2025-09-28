'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
          <Image 
          src="/yesuns_pages_logo.png"
          alt="Yesun Joung Logo"
          width={50}
          height={50}
          className="rounded-full" 
        />
        <Link href="/" className="font-medium text-black dark:text-white">
          Yesun Joung
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Senior Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
