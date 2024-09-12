
import list from "../data/list";

export default function Tasks( props ) {
    return (
        <ul>
         {Array.from(list).map( ([value, key]) => 
            <li key={value}>{key.title}</li>
        )
        }
        </ul>
    )

}