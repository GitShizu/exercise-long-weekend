export default ({ type, list }) => {


    if (type === 'ol') {
        return (
            <ol>
                {list.map((string, i) =>{
                    return(<li key={`ol${i}`}>{string}</li>)
                } )}
            </ol>
        )

    } else if (type === 'ul') {
        return (
        <ul>
            {list.map((string, i) =>{
                    return(<li key={`ul${i}`}>{string}</li>)
                } )}
        </ul>
        )
    }


}