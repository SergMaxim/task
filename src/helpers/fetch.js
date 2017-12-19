export const getLetters = async (api) => {
    let letters = [];
    let message = null;

    const response = await fetch(`${api}`, {
        method: 'GET'
    });

    if (response.status === 200) {
        ({ data: letters, message } = await response.json());
    } else {
        ({ message } = 'Error GET Letters');
    }

    return { letters, message };
};
