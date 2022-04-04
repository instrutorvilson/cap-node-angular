function onSubmit() {
    var nome = document.getElementsByTagName("input")[0];
    if (nome.value === "") {
        alert("Informe nome");
        nome.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
}