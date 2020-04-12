
export const createOption = (option_params) => {
    return $.ajax({
        method: 'POST',
        url: '/api/options',
        data: { option: option_params }
        // error: (err) => console.log(err)
    })
}

export const fetchOptions = (poll_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/options',
        data: { poll_id: poll_id }
        // error: (err) => console.log(err)
    })
}

export const updateOption = (option_id) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/options/${option_id}`
        // error: (err) => console.log(err)
    })
}

export const deleteOption = (option_id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/options/${option_id}`
        // error: (err) => console.log(err)
    })
}