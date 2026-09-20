import Link from "next/link"

export default function homeLink() {
   return(
        <Link
            href="/"
            className="cursor-pointer mt-4 inline-block"
        >
            ←ホームに戻る
        </Link>
    )
}