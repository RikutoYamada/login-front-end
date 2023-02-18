import Link from 'next/link'

const Header = (
  {
    isSignedIn = false
  }
) => {
  return (
    <div className="navbar bg-accent">
      <div className="flex-1">
        <Link href='/' className="btn btn-ghost normal-case text-xl text-base-100">MyApp</Link>
      </div>
      <div className="flex-none text-base-100">
          {
            isSignedIn ? (             
              <ul className="menu menu-horizontal px-1">
                <li><Link href='/signin' onClick={handleSignOut}>ログアウト</Link></li>
              </ul>
            ) : (
              <ul className="menu menu-horizontal px-1">
                <li><Link href='/signup'>新規登録</Link></li>
                <li><Link href='/signin'>ログイン</Link></li>
              </ul>
            )
          }
      </div>
    </div>
  )
}

export default Header