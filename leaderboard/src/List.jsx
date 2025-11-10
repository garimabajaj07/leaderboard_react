import { MdDeleteOutline } from "react-icons/md";
export default function List({ data, handleDelete, handleIncrease, handleDecrease }) {
    return (
        <ul>
            {data.map((obj) => {
                return (
                    <li key={obj.id}>   
                        <span>{obj.name}</span>
                        <span>{obj.country}</span>
                        <span>{obj.score}</span>
                        <span><MdDeleteOutline onClick={() => handleDelete(obj.id)} /></span>
                        <span onClick={() => handleIncrease(obj.id)} className="inc-dec">+5</span>
                        <span onClick={() => handleDecrease(obj.id)} className="inc-dec">-5</span>
                    </li>
                )
            })}
        </ul>
    )
}