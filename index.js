document.addEventListener('DOMContentLoaded', () => {
    handleSubmit();
});

function handleSubmit() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        var rawUrl =  form.search.value;
        const url = new URL(rawUrl);
        postData([url, url.pathname.split('/').pop()]);
        document.querySelector("#res").innerHTML = "Loading....";
        document.querySelector("button").classList.add("cursor-not-allowed")
    });
}

function postData(formData) {
    fetch('main.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            data.forEach(el => {
				document.querySelector("button").classList.remove("cursor-not-allowed")
                const li = document.createElement('li');
                li.innerHTML = el;
                const list = document.querySelector("#res");
                list.appendChild(li);
			});
        })
}