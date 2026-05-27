import Image from 'next/image'

export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpg"
      alt="Strucxio"
      width={40}
      height={40}
      className={className}
    />
  )
}
