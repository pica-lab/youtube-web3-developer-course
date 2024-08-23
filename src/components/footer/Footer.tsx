import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col items-center mt-20 py-10 bg-gray-800 text-gray-300">
            <div className="flex flex-row space-x-4 mb-4">
                <Link href="https://octopus.com" passHref>
                    <a className="hover:underline">Octopus Deploy</a>
                </Link>
                <Link href="https://docs.octopus.network" passHref>
                    <a className="hover:underline">Documentation</a>
                </Link>
                <Link href="https://blog.octopus.network" passHref>
                    <a className="hover:underline">Blog</a>
                </Link>
                <Link href="https://community.octopus.network" passHref>
                    <a className="hover:underline">Community</a>
                </Link>
            </div>
            <div className="text-sm">
                &copy; {new Date().getFullYear()} Octopus X . All rights reserved.
            </div>
        </footer>
    )
}
