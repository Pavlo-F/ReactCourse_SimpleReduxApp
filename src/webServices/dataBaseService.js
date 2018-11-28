export default function getData(name) {
    const url = `http://localhost:5000/world?name=${name}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        });
}