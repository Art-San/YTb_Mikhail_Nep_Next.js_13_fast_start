import Link from 'next/link'
import './about.css'

export default function AboutLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="about">
            <h1>About us</h1>
            {children}
            <ul className="ul">
                <li>
                    <Link href="about/contacts">Contacts</Link>{' '}
                </li>
                <li>
                    <Link href="about/team">Team</Link>{' '}
                </li>
            </ul>
        </div>
    )
}
