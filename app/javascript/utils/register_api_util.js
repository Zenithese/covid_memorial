var $ = require('jquery');

export const register = (data) => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/mourners',
            data: { mourner: data.mourner }
        }),
        $.ajax({
            method: 'POST',
            url: '/api/workers',
            data: { worker: data.worker }
        })
    )
};