const btnRegisEmp = document.getElementById("regisEmp");
const formEmpReg = document.querySelector(".empReg");
const formConfirm = document.querySelector(".confirm");

const btnVolverInicioSesion = document.querySelector(".btnVolver");
const btnVolverInicioSesion2 = document.querySelector(".confirm .btnVolver");

btnVolverInicioSesion.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "/";
});

btnVolverInicioSesion2.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "/";
});

btnRegisEmp.addEventListener("click", e => {
    formEmpReg.classList.add("hide");
    formConfirm.classList.remove("hide");
});
