const url = "http://localhost:3001";

export const downloadResume = async (html) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({html: html})
        })
        console.log(response);
    } catch (error) {
        return error;
    }
}