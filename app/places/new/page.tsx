import HomeLink from "../../components/HomeLink";

export default function newPlace() {
    return(
        <main>
            <h1>場所を追加</h1>

            <form>
                <div>
                    <label htmlFor="name">場所の名前</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="prefecture">都道府県</label>
                    <input 
                        type="text"
                        id="prefecture"
                        name="prefecture"
                    />
                </div>
                <div>
                    <label htmlFor="visitedAt">訪問日</label>
                    <input 
                        type="date"
                        id="visitedAt"
                        name="visitedAt"
                    />
                </div>
                <div>
                    <label htmlFor="memo">メモ</label>
                    <textarea 
                        id="memo"
                        name="memo"
                />
                </div>
                <div>
                    <HomeLink />
                </div>
            </form>
        </main>
    );
}