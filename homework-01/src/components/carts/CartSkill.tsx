export function CartSkill({ title, items }: any) {

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div className="md:flex">

                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    {items.map((item: any) => (
                        <p className="bg-slate-600 text-white font-medium rounded-md py-2 px-6 m-1 inline-block hover:bg-indigo-500" key={item}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}