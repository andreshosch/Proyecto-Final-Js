//VARIABLES
let bebe = document.querySelector('.bebe');
let suplementos = document.querySelector('.suplementos');
let perfumes = document.querySelector('.perfumes');
let dermo = document.querySelector('.dermocosmetica');
let cuidado = document.querySelector('.cuidado');
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let cerrarModal = document.getElementsByClassName("close")[0];
let guardarLocalmente = (clave, valor) => { localStorage.setItem(clave, valor) }
let mostrar = document.querySelector('.btnCarro');
let productosCarritos = [];
let tempe = document.querySelector('.temperatura')
let iconoTemp = document.querySelectorAll('.iconoTemp')
let total = 0;
let temp = document.getElementById("myTemp");
let carrocont = 0;
let carro = document.querySelector('.contadorProductos');
let a = 0;
let btnLimpiarCarro = document.querySelector('.btnLimpiarCarro');
let totalesProductos = document.querySelector('.totales');
let productosStock = [{

        id: 1,
        Titulo: "ORAL-B",
        Nombre: "Cepillo Dentales Oral B Pro Salud Ultrafino 2un",
        Precio: 208,
        img: 'oral-b.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 2,
        Titulo: "PERPIEL",
        Nombre: "Crema Facial Perpiel Humectante Facial A x 80ml",
        Precio: 674.50,
        img: 'perpiel.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 3,
        Titulo: "BAGOVIT",
        Nombre: "Emulsión Humectante Bagovit Reafirmante Efecto Tensor 200 ml",
        Precio: 650.40,
        img: 'bagovit.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 4,
        Titulo: "BAGOVIT",
        Nombre: "Crema Corporal Bagovit A Ligth Hipoalergénica 50g",
        Precio: 440.40,
        img: 'bagovit crema.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 5,
        Titulo: "BAGOVIT",
        Nombre: "Emulsión Corporal Hidratante Bagovit Efecto Luminoso 200ml",
        Precio: 726.00,
        img: 'bagovit emulsion.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 6,
        Titulo: "DERMAGLOS",
        Nombre: "Protector Solar Dermaglos Fps 30 Emulsión Piel Sensible 250ml",
        Precio: 883.35,
        img: 'dermaglos protector.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 7,
        Titulo: "EVACOPA",
        Nombre: "Copa Menstrual Evacopa Hipoalergénica Uso Continuo",
        Precio: 965.25,
        img: 'evacopa.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {
        id: 8,
        Titulo: "CICATRICURE",
        Nombre: "Kit Rutina Cicatricure Agua Micelar + Beauty Care + Contorno",
        Precio: 2148.55,
        img: 'cicatricure kit.png',
        categoria: "cuidado",
        cantidad: "0"
    },
    {

        id: 9,
        Titulo: "TRB PHARMA",
        Nombre: "Ultraflex Colágeno Hidrolizado Para Huesos y Articulaciones",
        Precio: 2475.00,
        img: 'trb pharma.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 10,
        Titulo: "NATURES BOUNTY",
        Nombre: "Natures Bounty Vitamina C x 100 Comprimidos",
        Precio: 1371.00,
        img: 'nature bounty.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 11,
        Titulo: "SIMPLE",
        Nombre: "Bagó Simple Vitalidad Minerales Vitaminas 28 Pastillas Goma",
        Precio: 523.50,
        img: 'bago simple.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 12,
        Titulo: "MAKURA",
        Nombre: "Protector Bucal Makura Toka Junior (Hasta 10 Años) C/ Estuche",
        Precio: 900.00,
        img: 'makura.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 13,
        Titulo: "BAGO ARCOR",
        Nombre: "Simple Calcio + Vitamina D Bagó Arcor 60 Pastillas",
        Precio: 1004.25,
        img: 'bago arcor.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 14,
        Titulo: "ENA",
        Nombre: "Suplemento Dietario Ena Colágeno Sabor Naranja 12g",
        Precio: 172.50,
        img: 'ena.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 15,
        Titulo: "CENTRUM",
        Nombre: "Suplemento Vitamínico Centrum Hombre x 60 Comprimidos",
        Precio: 1478.25,
        img: 'cemtrum.png',
        categoria: "suplementos",
        cantidad: "0"
    }, {
        id: 16,
        Titulo: "REDOXON",
        Nombre: "Suplemento Vitamínico Redoxitos Plus 25 Pastillas Masticables",
        Precio: 454.40,
        img: 'redoxon suplemento.png',
        categoria: "suplementos",
        cantidad: "0"
    },
    {
        id: 17,
        Titulo: "AVENO",
        Nombre: "Shampoo Aveno Infantil cabello graso 250 ml",
        Precio: 491.25,
        img: 'aveno shampoo.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 18,
        Titulo: "BEPANTHEN BABY",
        Nombre: "Pomada Bepanthen Baby Hipoalergénica Protectora 30gr",
        Precio: 297.70,
        img: 'bephanten.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 19,
        Titulo: "BUSHY",
        Nombre: "Bushi Pezonera Siliconada x 2 Unidades",
        Precio: 754.60,
        img: 'bushi.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 20,
        Titulo: "PAMPERS",
        Nombre: "Toallitas Húmedas Pampers Aroma Naturaleza 108 Unidades",
        Precio: 491.25,
        img: 'pampers.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 21,
        Titulo: "PAMPERS",
        Nombre: "Toallitas Húmedas Pampers Recién Nacidos 48 un",
        Precio: 414.00,
        img: 'pampers toallitas.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 22,
        Titulo: "SAN UP",
        Nombre: "Esterilizador Mamadera Para Microondas San Up Xb 9603",
        Precio: 2324.75,
        img: 'san up.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 23,
        Titulo: "JOHNSON",
        Nombre: "Shampoo Johnson's Baby Ph Balanceado 400 ml",
        Precio: 479.00,
        img: 'shampoo johnson.png',
        categoria: "bebe",
        cantidad: "0"
    }, {
        id: 24,
        Titulo: "BABY INNOVATION",
        Nombre: "Chupetes Avent Classic I Love Mamá 6 18m 2un",
        Precio: 1275.30,
        img: 'baby chupete.png',
        categoria: "bebe",
        cantidad: "0"
    },
    {
        id: 25,
        Titulo: "DERMAGLOS",
        Nombre: "Crema Hidratante de Noche Ultra Age + 30 Reparadora",
        Precio: 1903.30,
        img: 'dermaglos hidratante.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    }, {
        id: 26,
        Titulo: "DERMAGLOS",
        Nombre: "Combo Dermaglos Ultra Age + 30 Contorno Ojos + Hidratante Día",
        Precio: 5435.50,
        img: 'dermaglos combo.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    }, {
        id: 27,
        Titulo: "L'OREAL DERMO",
        Nombre: "Kit Loreal Revitalift Día + Ojo + Agua Micelar Garnier",
        Precio: 2589.30,
        img: 'loreal dermo.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    }, {
        id: 28,
        Titulo: "DERMAGLOS",
        Nombre: "Rutina Piel Seca Dermaglos Lociones Rostro",
        Precio: 4837.70,
        img: 'dermaglos rutina.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    }, {
        id: 29,
        Titulo: "DERMAGLOS",
        Nombre: "Crema Hidratante Dermaglos De Día Piel Normal 70gr",
        Precio: 1152.20,
        img: 'dermaglos piel normal.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    }, {
        Titulo: "ASEPXIA",
        id: 30,
        Nombre: "Asepxia Mascarilla Balance Efecto Burbujas x 1 Unidad",
        Precio: 295.00,
        img: 'asepxia mascarilla.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    }, {
        id: 31,
        Titulo: "ACF",
        Nombre: "Acf Máscara Facial Amazing Black Mask",
        Precio: 280.00,
        img: 'acf mascara.png',
        categoria: "dermocosmetica",
        cantidad: "0"
    },
    {
        id: 32,
        Titulo: "NIVEA",
        Nombre: "Crema Facial Nivea Q10 Plus C Día Fps 15 Anti Age Energ 50ml",
        Precio: 839.00,
        img: 'nivea facial.png',
        categoria: "dermocosmetica",
        cantidad: "0"

    },
    {
        id: 33,
        Titulo: "TOMMY HILFIGER",
        Nombre: "Combo Tommy Hilfiger Cologne Men Ed5 50 ml + Body Wash",
        Precio: 8767.52,
        img: 'tommy hilfiger combo.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 34,

        Titulo: "CACHAREL",
        Nombre: "Perfume Importado Mujer Cacharel Yes I am Pink Edp",
        Precio: 4992.00,
        img: 'cacharel perfume.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 35,
        Titulo: "PEPE JEANS",
        Nombre: "Perfume Pepe Jeans Celebrate For Him Edp 100Ml",
        Precio: 4392.00,
        img: 'pepe jeans.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 36,
        Titulo: "DKNY",
        Nombre: "Dkny Be Delicius Edp concentracion de 30ml",
        Precio: 9832.00,
        img: 'dkny.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 37,
        Titulo: "TOMMY HILFIGER",
        Nombre: "Set Perfume Tommy Impact 100 ml + Face Moisturizer + Mini 4ml",
        Precio: 11592.00,
        img: 'tommy hilfiger set.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 38,
        Titulo: "PEPE JEANS",
        Nombre: "Perfume Pepe Jeans Celebrate For Her Edp 80ml",
        Precio: 3987.00,
        img: 'pepe jeans perfume.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 39,
        Titulo: "TOMMY HILFIGER",
        Nombre: "Set Perfume Tommy Impact 50 ml + Hair&Body Wash 100ml",
        Precio: 9752.00,
        img: 'tommy hilfiger impact.png',
        categoria: "perfume",
        cantidad: "0"
    },
    {
        id: 40,
        Titulo: "CACHAREL",
        Nombre: "Cacharel Anais L'original Edt Presentacion 100ml",
        Precio: 7920.00,
        img: 'cacharel anais.png',
        categoria: "perfume",
        cantidad: "0"
    },
]
document.addEventListener('DOMContentLoaded', () => {
    recuperarLs();
    bolita();
    clima();
});


// FUNCION FETCH CLIMA SANTA FE - ARGENTINA
function clima() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=santa%20fe&appid=3e1eae3412c717a711d0d5af512e9b2e")
        .then(response => response.json())
        .then(data => {
            temp = (data.main.temp - 273.15).toFixed(1);
            icon = data.weather[0].icon;
            const clima = document.createElement('div');
            clima.classList.add("clima");
            const temperatura = document.createElement('h5');
            temperatura.classList.add("temp")
            const imgtemp = document.createElement('img');
            imgtemp.classList.add("iconoClima");
            if ((window.location.pathname).indexOf("index.html") != -1) {
                imgtemp.src = "./images/iconos clima/" + icon + ".png";
            } else {
                imgtemp.src = "../images/iconos clima/" + icon + ".png";
            }
            temperatura.textContent = `${temp}º`;
            clima.appendChild(temperatura);
            clima.appendChild(imgtemp);
            tempe.appendChild(clima);
        })
}

//FUNCION PARA MOSTRAR CARRITO EN HTML
function mostrarproductos(categoria) {
    productosStock.forEach(items => {
        if (items.categoria === categoria) {
            const divProductos = document.createElement('div');
            divProductos.classList.add('card');
            const imgProducto = document.createElement("img");
            imgProducto.classList.add("imgProducto");
            imgProducto.src = "../images/" + items.img;
            const titulo = document.createElement("h2");
            titulo.classList.add("titulo");
            titulo.textContent = items.Titulo;
            const nombre = document.createElement("h3");
            nombre.classList.add("nombre");
            nombre.textContent = items.Nombre;
            const precio = document.createElement("h4");
            precio.classList.add("precio");
            precio.textContent = `$ ${items.Precio}`;
            const btnAumentar = document.createElement("button");
            btnAumentar.classList.add("btn-aumentar");
            btnAumentar.textContent = "+";
            btnAumentar.onclick = () => {
                cantidad1.value = parseInt(cantidad1.value) + 1;
            }
            const btnDisminuir = document.createElement("button");
            btnDisminuir.classList.add("btn-disminuir");
            btnDisminuir.textContent = "-";
            btnDisminuir.onclick = () => {
                if (cantidad1.value > 1)
                    cantidad1.value = parseInt(cantidad1.value) - 1;
            }
            const cantidad1 = document.createElement("input");
            cantidad1.classList.add("inputCantidad");
            cantidad1.value = 1;
            const btnAgregarCarrito = document.createElement("button");
            btnAgregarCarrito.classList.add("btn-carrito");
            btnAgregarCarrito.textContent = "Agregar al Carrito";
            btnAgregarCarrito.onclick = () => {
                let stock = parseInt(cantidad1.value);
                agregarCarrito(items.id, stock);
                swal({
                    title: "Producto Agregado al Carrito",

                    icon: "success",
                    button: "OK",
                });
                /*  const Toast = swal.mixin({
                      toast: true,
                      position: 'bottom-end',
                      showConfirmButton: false,
                      timer: 1500
                  })
                  Toast.fire({
                      icon: 'success',
                      title: 'Se Agrego al Carrito'
                  })*/
                cantidad1.value = 1;
            };
            divProductos.appendChild(imgProducto);
            divProductos.appendChild(titulo);
            divProductos.appendChild(nombre);
            divProductos.appendChild(precio);
            divProductos.appendChild(btnDisminuir);
            divProductos.appendChild(cantidad1);
            divProductos.appendChild(btnAumentar);
            divProductos.appendChild(btnAgregarCarrito);

            switch (categoria) {
                case "bebe":
                    {
                        bebe.appendChild(divProductos);
                        break;
                    }
                case "cuidado":
                    {
                        cuidado.appendChild(divProductos);
                        break;
                    }
                case "suplementos":
                    {
                        suplementos.appendChild(divProductos);
                        break;
                    }
                case "dermocosmetica":
                    {
                        dermo.appendChild(divProductos);
                        break;
                    }
                case "perfume":
                    {
                        perfumes.appendChild(divProductos);
                        break;
                    }
            }
        }
    })
}

// FUNCION PARA MOSTRAR EL MODAL
btn.onclick = function() {
        if (productosCarritos.length === 0) {

            swal({
                title: "Carrito Vacío",

                icon: "error",
                button: "OK",
            });


        } else {
            modal.style.display = "block";
            mostrarModal();
        }
    }
    //FUNCION PARA ARRANCAR EL CONTADOR DEL CARRITO EN 0 CUANDO no 
function bolita() {
    if (parseInt(carrocont) === 0) {
        document.getElementById('numero_carrito').innerHTML = 0;

    }
}

// FUNCION PARA CERRAR EL MODAL
cerrarModal.onclick = function() {
    modal.style.display = "none";
    mostrar.innerHTML = " ";
    btnLimpiarCarro.innerHTML = "";
    totalesProductos.innerHTML = "";

}

//FUNCION PARA CARGAR EL CARRITO SIN PRODUCTOS REPETIDOS
function agregarCarrito(id, cant) {
    productoEncontrado = productosStock.find(productos => productos.id === id);
    if (carrocont > 0) {
        for (i = 0; i < productosCarritos.length; i++) {
            if (productosCarritos[i].id == id) {
                productosCarritos[i].cantidad = parseInt(productosCarritos[i].cantidad) + (cant);
                guardarLocalmente("productos", JSON.stringify(productosCarritos))
                i = productosCarritos.length;
            } else if (i === parseInt(productosCarritos.length - 1)) {
                productoEncontrado.cantidad = cant;
                productosCarritos.push(productoEncontrado);
                guardarLocalmente("productos", JSON.stringify(productosCarritos))
                i = productosCarritos.length;
            }
        }
        carrocont = parseInt(carrocont) + parseInt(cant);
        document.getElementById('numero_carrito').innerHTML = carrocont;
    } else {
        productoEncontrado.cantidad = cant;
        carrocont = cant;
        document.getElementById('numero_carrito').innerHTML = carrocont;
        productosCarritos.push(productoEncontrado);
        guardarLocalmente("productos", JSON.stringify(productosCarritos))
    }
    total = total + (productoEncontrado.Precio) * parseInt(cant);
}


//MOSTRAR PRODUCTOS EN EL MODAL
function mostrarModal() {
    for (const items of productosCarritos) {
        const divModal = document.createElement('div');
        divModal.classList.add("contenedorModal");
        const nombreCarro = document.createElement("h5");
        const imagenCarro = document.createElement("img");
        imagenCarro.classList.add("imagenCarro");
        nombreCarro.classList.add("nombreCarro");
        nombreCarro.textContent = `${items.Nombre}    x   ${items.cantidad} un`;
        const precioCarro = document.createElement("h5");
        precioCarro.classList.add("precioCarro");
        precioCarro.textContent = "$ " + (parseInt(items.cantidad) * ((items.Precio))).toFixed(2);
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btnEliminar");
        if ((window.location.pathname).indexOf("index.html") != -1) {
            imagenCarro.src = "./images/" + items.img;
            btnEliminar.src = "./images/basura 1.png";
        } else {
            imagenCarro.src = "../images/" + items.img;
            btnEliminar.src = "../images/basura 1.png";
        }
        btnEliminar.onclick = () => {
            borrarProductoModal(items.id);
        }
        divModal.appendChild(imagenCarro);
        divModal.appendChild(nombreCarro);
        divModal.appendChild(precioCarro);
        divModal.appendChild(btnEliminar);
        mostrar.appendChild(divModal);
    }


    //VARIABLE PARA ALMACENAR EL MONTO TOTAL DE PRODUCTOS DEL CARRO 
    const acumTotales = document.createElement('div');
    const totales = document.createElement("h5");
    totales.classList.add('totalProductos')
    totales.textContent = "Monto Total: $ " + (parseFloat(total)).toFixed(2);
    acumTotales.appendChild(totales);
    totalesProductos.appendChild(acumTotales);

    //BOTON PARA VACIAR CARRITO Y FINALIZAR COMPRAR
    const divProductos = document.createElement('div');
    const btnLimpiar = document.createElement("button");
    const btnComprar = document.createElement("button");
    btnComprar.classList.add("btnComprar");
    btnLimpiar.classList.add("btnLimpiar");
    btnLimpiar.textContent = "Limpiar Carrito"
    btnLimpiar.onclick = () => {
        borrarCarrito();
    }
    btnComprar.textContent = "Finalizar Compra";
    btnComprar.onclick = () => {
        finalizarComprar();
    }
    divProductos.appendChild(btnLimpiar);
    divProductos.appendChild(btnComprar)
    btnLimpiarCarro.appendChild(divProductos);

}
//FUNCION BORRAR CARRITO

function borrarCarrito() {
    localStorage.clear();
    productosCarritos = [];
    mostrar.innerHTML = ""
    modal.style.display = "none";
    btnLimpiarCarro.innerHTML = "";
    totalesProductos.innerHTML = ""
    carrocont = 0;
    total = 0;
    document.getElementById('numero_carrito').innerHTML = carrocont;
    swal({
        title: "Carrito Vaciado",

        icon: "success",
        button: "OK",
    });


}
// FUNCION BORRAR PRODUCTO DEL CARRITO
function borrarProductoModal(id) {;
    productoEncontrado = productosCarritos.find(productosCarritos => productosCarritos.id === id)
    var index = productosCarritos.indexOf(productoEncontrado)
    if (index !== -1) {
        productosCarritos.splice(index, 1)
        mostrar.innerHTML = "";
        btnLimpiarCarro.innerHTML = "";
        totalesProductos.innerHTML = "";
        total = total - (productoEncontrado.Precio) * parseInt(productoEncontrado.cantidad);
        mostrarModal();
        document.getElementById('numero_carrito').innerHTML = carrocont = parseInt(document.getElementById('numero_carrito').innerHTML = carrocont) - parseInt(productoEncontrado.cantidad);
        if (productosCarritos.length === 0) {
            modal.style.display = "none";
            swal({
                title: "Carrito Vacío",
                icon: "error",
                button: "OK",
            });
            mostrar.innerHTML = " ";
            btnLimpiarCarro.innerHTML = "";
            totalesProductos.innerHTML = "";
        }
    }
    guardarLocalmente("productos", JSON.stringify(productosCarritos));
}

//FUNCION PARA FINALIZAR COMPRAR
function finalizarComprar() {
    let numAleatorio = Math.floor(Math.random() * 10000);
    borrarCarrito();
    swal("Gracias por su comprar", "Su Nro de pedido es: " + numAleatorio, "success");

}


//FUNCION PARA RECUPERAR EL LOCAL STORAGE
recuperarLs = () => {
    let recuperar = JSON.parse(localStorage.getItem("productos"))
    if (recuperar) {
        recuperar.forEach(element => (
            agregarCarrito(element.id, element.cantidad)
        ))
    }
}