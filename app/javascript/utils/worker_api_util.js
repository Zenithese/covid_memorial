var $ = require('jquery');

export const fetchWorkers = data => {
    return $.ajax({
        method: 'GET',
        url: '/api/workers',
        data: { data }
    })
};

export const fetchWorker = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workers/${id}`
    })
};

export const createWorker = data => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/workers',
            data: { worker: data }
        })
    )
};