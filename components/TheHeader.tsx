import Link from 'next/link'
import './header.css'

const TheHeader = () => {
    return (
        <header className="">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    )
}

export default TheHeader
