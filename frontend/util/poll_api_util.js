
export const createPoll = (poll_params) => {
    return $.ajax({
        method: 'POST',
        url: '/api/polls',
        data: { poll: poll_params }
        // error: (err) => console.log(err)
    })
}

export const fetchPolls = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/polls',
        data: { author_id: user_id }
        // error: (err) => console.log(err)
    })
}

export const fetchPoll = (poll_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/polls/${poll_id}`
        // error: (err) => console.log(err)
    })
}

export const deletePoll = (poll_id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/polls/${poll_id}`
        // error: (err) => console.log(err)
    })
}