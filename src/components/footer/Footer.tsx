import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col items-center mt-20 py-10 bg-gray-800 text-gray-300">
            <div className="flex flex-row space-x-4 mb-4">
                <Link href="https://octopus.com" className="hover:underline">
                    Octopus Deploy
                </Link>
                <Link href="https://docs.octopus.network" className="hover:underline">
                    Documentation
                </Link>
                <Link href="https://blog.octopus.network" className="hover:underline">
                    Blog
                </Link>
                <Link href="https://community.octopus.network" className="hover:underline">
                    Community
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <Link href="/" className="hover:underline text-blue-400">
                    Back to Home
                </Link>
                <div className="text-sm mt-4">
                    &copy; {new Date().getFullYear()} Octopus X. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
