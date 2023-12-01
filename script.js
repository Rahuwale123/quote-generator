    const quote = document.getElementById("quote");
        const author = document.getElementById("author");
        const setup = document.getElementById("setup");
        const delivery = document.getElementById("delivery");

        const api_url = "https://api.quotable.io/random";
        async function getquote(url) {
            const Response = await fetch(url);
            let data = await Response.json();
            quote.innerHTML = data.content;
            author.innerHTML = data.author;

        }
        const api_urls = "https://v2.jokeapi.dev/joke/Any";
        async function getnews(url) {
            const Response = await fetch(url);
            let data = await Response.json();
        setup.innerHTML = data.setup;
        delivery.innerHTML = data.delivery;

        }
        getnews(api_urls);
        getquote(api_url);
