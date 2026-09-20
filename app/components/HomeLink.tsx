import Link from "next/link"

export default function homeLink() {
   return(
        <Link
            href="/"
            className="cursor-pointer mt-4 inline-block underline hover:text-blue-500"
        >
            ←ホームに戻る
        </Link>
    )
}