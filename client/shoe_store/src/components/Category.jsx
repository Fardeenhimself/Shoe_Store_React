import { useEffect, useState } from "react";

function Category({ categorycally }) {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/public/products/category')
            .then(x => x.json())
            .then(y => {
                setData(y);
            })
    }, [])
    return (
        <>
            <div className="flex justify-center p-2">
                <h1 className="text-xl font-bold">What do like to see?</h1>
            </div>
            <div className="flex justify-center">
                <select className="select select-bordered w-full max-w-xs" onChange={(e) => categorycally(e.target.value)}>
                    <option disabled selected>Select a Categoty</option>
                    {
                        datas.length > 0 ? (
                            datas.map(val => {
                                return <option value={val._id} key={val._id} className="text-black">{val.category}</option>
                            })
                        ) : <option disabled selected>No Item found</option>
                    }
                </select>
            </div>
        </>

    );
}

export default Category;