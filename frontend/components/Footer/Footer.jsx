export const Footer = () => {
    return (
        <footer className="border-t border-gray-800 p-6 text-center text-gray-400">
            <p>&copy; 2026 iSwear. All rights reserved.</p>
            <nav className="flex gap-6 text-sm font-bold uppercase justify-center">
            <a href="#" className="hover:text-iswear-red transition-colors">Rules</a>
            <a href="#" className="hover:text-iswear-red transition-colors">Integrity</a>
            <a href="#" className="hover:text-iswear-red transition-colors">Contact</a>
            </nav>
        </footer>
    )
}
