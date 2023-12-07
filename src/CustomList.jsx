export default ({ type, list, buttons, deleteGuest, objIndex }) => {


    if (type === 'ol') {
        return (
            <ol>
                {list.map((string, listIndex) => {
                    return (
                        <li key={`ol${listIndex}`}>
                            {string}{buttons.map((btnText, ix) => {
                                return (
                                    <button
                                        key={`olBtn${listIndex}_${ix}`}
                                        // onClick={deleteGuest(objIndex,listIndex)}
                                    >
                                        {btnText}
                                    </button>)
                            })}
                        </li>)
                })}
            </ol>
        )

    } else if (type === 'ul') {
        return (
            <ul>
                {list.map((string, listIndex) => {
                    return (<li key={`ul${listIndex}`}>
                        {string}{buttons.map((btnText, ix) => {
                            return (
                                <button
                                    key={`ulBtn${listIndex}_${ix}`}

                                >
                                    {btnText}
                                </button>)
                        })}
                    </li>)
                })}
            </ul>
        )
    }


}