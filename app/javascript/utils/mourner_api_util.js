var $ = require('jquery');

export const createMourner = data => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/mourners',
            data: { mourner: data }
        })
    )
};