import Link from "next/link"

export default function Page() {
    return (
        <>
            <main className="nav">
                <div className="container nav-inner">
                    <Link href="/" className="logo">FoodOrder</Link>

                    <nav>
                        <Link href="/menu" className="logo">Menu</Link>
                        <Link href="/orders" className="logo">Order</Link>
                        <Link href="/login" className="logo">Login</Link>
                        <Link href="/admin" className="logo">Admin</Link>
                    </nav>
                </div>
            </main>
        </>
    )
}