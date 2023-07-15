import { data } from '@/utils/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-12 text-sm">
      <div>Footer</div>
      <div className="flex items-center gap-3">
        {data?.home?.socialAccounts?.map((acc, idx) => (
          <Link className="cursor-pointer" href={acc?.url} key={idx}>
            {acc?.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
