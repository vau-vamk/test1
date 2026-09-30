// Haetaan HTML-elementit
const haeNappi = document.getElementById("haeNappi");
const tulosTeksti = document.getElementById("tulosTeksti");

// Kuunnellaan napin klikkausta ja haetaan dataa rajapinnasta
haeNappi.addEventListener("click", () => {
    tulosTeksti.innerText = "Haetaan tietoa...";

    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        .then(response => response.json())
        .then(data => {
            console.log("Haettu data konsoliin:", data);
            tulosTeksti.innerText = `"${data.slip.advice}"`;
        })
        .catch(error => {
            console.error("Virhe tiedon haussa:", error);
            tulosTeksti.innerText = "Tiedon hakeminen epäonnistui!";
        });
});