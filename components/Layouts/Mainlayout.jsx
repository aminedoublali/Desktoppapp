
import Header from '../Header'
export default function MainLayout({ children }) {
    return (
        <>
            <Header />
                <main className='w-full'>{children}</main>
        </>
    )
}
