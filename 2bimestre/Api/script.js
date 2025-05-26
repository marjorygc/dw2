
function buscarIsbn(){

    const isbn = document.getElementById("isbn").value
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

   fetch(url)
        .then((response) => {
            if (!response.ok) {
            throw new Error("ISBN não encontrado");
            }
            return response.json();
            })

        .then((data => {
            document.getElementById("titulo").value = data.title
            document.getElementById("autor").value = data.authors.join(", ")
            document.getElementById("editora").value = data.publisher
            document.getElementById("ano").value = data.year
            document.getElementById("paginas").value = data.page_count
        }))

        

        . catch((error) => {
            alert("Erro ao buscar o ISBN!")
        })        

}