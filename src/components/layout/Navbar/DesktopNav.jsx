import { NavLink } from "react-router-dom"
import { NavLinks } from "../Navbar/NavLinks"

const DesktopNav = () => {
  return (
    <nav className='hidden lg:block'>
      <div className='flex items-center gap-8'>
      {NavLinks.filter(Boolean).map((link) => {
        if (link.children?.length) {
          return (
            <details key={link.title} className='group relative'>
              <summary className='list-none cursor-pointer text-fluid-sm font-medium transition-colors hover:text-primary'>
                {link.title}
              </summary>

              <div className='absolute left-0 top-full mt-3 min-w-52 rounded-md border bg-background p-2 shadow-lg'>
                {link.children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    className='block rounded px-3 py-2 text-fluid-sm transition-colors hover:bg-muted hover:text-primary'
                  >
                    {child.title}
                  </NavLink>
                ))}
              </div>
            </details>
          )
        }

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className='text-fluid-sm font-medium transition-colors hover:text-primary'
          >
            {link.title}
          </NavLink>
        )
      })}
      </div>
    </nav>
  )
}

export default DesktopNav