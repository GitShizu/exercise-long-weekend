export default ({ type, list, buttons, deleteGuest, editGuest }) => {


    if (type === 'ol') {
        return (
            <ol>
                {list.map((string, guestIndex) => {
                    return (
                        <li key={`ol${guestIndex}`}>
                            {string}{buttons.map((btnText, ix) => {
                                return (
                                    <button
                                        key={`olBtn${guestIndex}_${ix}`}
                                        onClick={() => btnText === 'Delete' ? deleteGuest(guestIndex) : editGuest(guestIndex)}>
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
                {list.map((string, guestIndex) => {
                    return (<li key={`ul${guestIndex}`}>
                        {string}{buttons.map((btnText, ix) => {
                            return (
                                <button
                                    key={`ulBtn${guestIndex}_${ix}`}
                                    onClick={() => btnText === 'Delete' ? deleteGuest(guestIndex) : editGuest(guestIndex)}>
                                    {btnText}
                                </button>)
                        })}
                    </li>)
                })}
            </ul>
        )
    }


}