import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link";
import { ActiveLink } from '@/components';

const navItems = [
  {path:'/about', text:'About'},
  {path:'/pricing', text:'Pricing'},
  {path:'/contact', text:'Contact'},
]

const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

export const Navbar = async() => {  
  await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href="/">
        <HomeIcon size={16} className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {
        // navItems.map(({path, text}) => (
        //   <ActiveLink key={path} path={path} text={text} />
        // ))
        navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))
      }
    </nav>
  )
}
