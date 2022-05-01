import React from 'react'

function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(

        () => {

            setTimeout(() => {

                try {

                    const localStorageItem = localStorage.getItem(itemName)
                    let parsedItem;

                    if (!localStorageItem) {
                        localStorage.setItem(itemName, JSON.stringify(initialValue));
                        parsedItem = [];
                    } else {
                        parsedItem = JSON.parse(localStorageItem)
                    }

                    setItem(parsedItem)
                    setLoading(false)

                } catch (e) {

                    setError(true)

                }

            }, 3000);
        }
    )

    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }



    const saveItem = (newTodos) => {

        try {

            const stringfifyTodos = JSON.stringify(newTodos)
            localStorage.setItem(itemName, stringfifyTodos);
            setItem(newTodos)

        } catch (error) {

            setError(true)

        }

    }

    return {

        item,
        saveItem,
        loading,
        error

    }


};

export { useLocalStorage }