import Link from "next/link";

export default function Home() {
    return (
        <main className="p-4">
            <h1 className="text-xl font-bold">行ったことある場所</h1>
            <p>これまでに行ったことがある場所を記録するアプリ</p>
            <Link 
                href="places/new"
                className="inline-block cursor-pointer rounded bg-blue-600 text-white px-4 py-2  hover:bg-blue-800"
            >
                場所を追加
            </Link>
        </main>
    );
}