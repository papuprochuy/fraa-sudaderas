// ========================
// BASE DE DATOS DE PRODUCTOS
// ========================
const productosData = {
    f1: {
        id: 'f1',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'Lleva tu estilo diario al siguiente nivel con nuestra Foundation Oversize Hoodie. Diseñada para quienes buscan el equilibrio perfecto entre comodidad absoluta y una estética urbana impecable.',
        colores: {
            azul: {
                nombre: 'Azul',
                imagenPrincipal: 'img/products/f1.jpeg',
                imagenesSecundarias: ['img/products/f1.1.jpeg', 'img/products/f1.2.jpeg', 'img/products/f1.3.jpeg', 'img/products/f1.4.jpeg']
            },
            gris: {
                nombre: 'Gris',
                imagenPrincipal: 'img/products/f3.jpeg',
                imagenesSecundarias: ['img/products/f3.1.jpeg', 'img/products/f3.2.jpeg', 'img/products/f3.3.jpeg', 'img/products/f3.4.jpeg']
            },            
            beige: {
                nombre: 'Beige',
                imagenPrincipal: 'img/products/f2.jpeg',
                imagenesSecundarias: ['img/products/f2.1.jpeg', 'img/products/f2.2.jpeg', 'img/products/f2.3.jpeg', 'img/products/f2.4.jpeg']
            },
            verde: {
                nombre: 'Verde',
                imagenPrincipal: 'img/products/f4.jpeg',
                imagenesSecundarias: ['img/products/f4.1.jpeg', 'img/products/f4.2.jpeg', 'img/products/f4.3.jpeg', 'img/products/f4.4.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f2: {
        id: 'f2',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'Misma calidad y diseño, ahora en un nuevo color.',
        colores: {
            beige: {
                nombre: 'Beige',
                imagenPrincipal: 'img/products/f2.jpeg',
                imagenesSecundarias: ['img/products/f2.1.jpeg', 'img/products/f2.2.jpeg', 'img/products/f2.3.jpeg', 'img/products/f2.4.jpeg']
            },
            gris: {
                nombre: 'Gris',
                imagenPrincipal: 'img/products/f3.jpeg',
                imagenesSecundarias: ['img/products/f3.1.jpeg', 'img/products/f3.2.jpeg', 'img/products/f3.3.jpeg', 'img/products/f3.4.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f3: {
        id: 'f3',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'Edición limitada.',
        colores: {
            gris: {
                nombre: 'Gris',
                imagenPrincipal: 'img/products/f3.jpeg',
                imagenesSecundarias: ['img/products/f3.1.jpeg', 'img/products/f3.2.jpeg', 'img/products/f3.3.jpeg', 'img/products/f3.4.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f4: {
        id: 'f4',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'El clásico que no puede faltar.',
        colores: {
            verde: {
                nombre: 'Verde',
                imagenPrincipal: 'img/products/f4.jpeg',
                imagenesSecundarias: ['img/products/f4.1.jpeg', 'img/products/f4.2.jpeg', 'img/products/f4.3.jpeg', 'img/products/f4.4.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f5: {
        id: 'f5',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'Estilo y confort.',
        colores: {
            negro: {
                nombre: 'Negro',
                imagenPrincipal: 'img/products/f5.jpeg',
                imagenesSecundarias: ['img/products/f5.jpeg', 'img/products/f6.jpeg', 'img/products/f7.jpeg', 'img/products/f8.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f6: {
        id: 'f6',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'Para los amantes del estilo urbano.',
        colores: {
            negro: {
                nombre: 'Negro',
                imagenPrincipal: 'img/products/f6.jpeg',
                imagenesSecundarias: ['img/products/f6.jpeg', 'img/products/f7.jpeg', 'img/products/f8.jpeg', 'img/products/f1.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f7: {
        id: 'f7',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'La prenda que estabas buscando.',
        colores: {
            negro: {
                nombre: 'Negro',
                imagenPrincipal: 'img/products/f7.jpeg',
                imagenesSecundarias: ['img/products/f7.jpeg', 'img/products/f8.jpeg', 'img/products/f1.jpeg', 'img/products/f2.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    },
    f8: {
        id: 'f8',
        nombre: 'fraa fundation Oversize Hoodie',
        precio: 350,
        descripcion: 'Elegancia casual.',
        colores: {
            negro: {
                nombre: 'Negro',
                imagenPrincipal: 'img/products/f8.jpeg',
                imagenesSecundarias: ['img/products/f8.jpeg', 'img/products/f1.jpeg', 'img/products/f2.jpeg', 'img/products/f3.jpeg']
            }
        },
        tallas: ['Chica', 'Mediana', 'Grande']
    }
};

// ========================
// GESTIÓN DEL CARRITO
// ========================
const CART_STORAGE_KEY = 'fraa_carrito';
const SHIPPING_COST = 10;

function obtenerCarrito() {
    const carrito = localStorage.getItem(CART_STORAGE_KEY);
    return carrito ? JSON.parse(carrito) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function mostrarNotificacion(mensaje) {
    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.textContent = mensaje;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    } else {
        // Fallback por si no existe el elemento
        alert(mensaje);
    }
}

function agregarAlCarrito(producto) {
    let carrito = obtenerCarrito();
    const { id, nombre, precio, imagen, talla, color, cantidad } = producto;

    const existente = carrito.find(item => item.id === id && item.talla === talla && item.color === color);

    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({ id, nombre, precio, imagen, talla, color, cantidad });
    }

    guardarCarrito(carrito);
    mostrarNotificacion('✅ Producto agregado al carrito');
}

function eliminarDelCarrito(id, talla, color) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => !(item.id === id && item.talla === talla && item.color === color));
    guardarCarrito(carrito);
    renderizarCarrito();
    mostrarNotificacion('🗑️ Producto eliminado');
}

function actualizarCantidad(id, talla, color, nuevaCantidad) {
    if (nuevaCantidad < 1) return;
    let carrito = obtenerCarrito();
    const producto = carrito.find(item => item.id === id && item.talla === talla && item.color === color);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        guardarCarrito(carrito);
        renderizarCarrito();
        mostrarNotificacion('🔄 Cantidad actualizada');
    }
}

function calcularTotales() {
    const carrito = obtenerCarrito();
    let subtotal = 0;
    carrito.forEach(item => subtotal += item.precio * item.cantidad);
    return { subtotal, total: subtotal + SHIPPING_COST };
}

function renderizarCarrito() {
    const tablaBody = document.querySelector('#cart tbody');
    if (!tablaBody) return;

    const carrito = obtenerCarrito();
    const subtotalElement = document.querySelector('#subtotal table tr:first-child td:last-child');
    const totalElement = document.querySelector('#subtotal table tr:last-child td:last-child');

    tablaBody.innerHTML = '';

    if (carrito.length === 0) {
        tablaBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Tu carrito está vacío</td></tr>';
        if (subtotalElement) subtotalElement.textContent = '$0';
        if (totalElement) totalElement.textContent = '$' + SHIPPING_COST;
        return;
    }

    let subtotalGeneral = 0;

    carrito.forEach(item => {
        const subtotalItem = item.precio * item.cantidad;
        subtotalGeneral += subtotalItem;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><a href="#" class="eliminar-item" data-id="${item.id}" data-talla="${item.talla}" data-color="${item.color}"><i class="far fa-times-circle"></i></a></td>
            <td><img src="img/products/${item.imagen}" alt="${item.nombre}"></td>
            <td>${item.nombre}<br><small>Talla: ${item.talla} | Color: ${item.color}</small></td>
            <td>$${item.precio}</td>
            <td><input type="number" class="cantidad-input" value="${item.cantidad}" min="1" data-id="${item.id}" data-talla="${item.talla}" data-color="${item.color}"></td>
            <td>$${subtotalItem}</td>
        `;
        tablaBody.appendChild(fila);
    });

    if (subtotalElement) subtotalElement.textContent = '$' + subtotalGeneral;
    if (totalElement) totalElement.textContent = '$' + (subtotalGeneral + SHIPPING_COST);

    document.querySelectorAll('.eliminar-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            eliminarDelCarrito(btn.dataset.id, btn.dataset.talla, btn.dataset.color);
        });
    });

    document.querySelectorAll('.cantidad-input').forEach(input => {
        input.addEventListener('change', () => {
            actualizarCantidad(input.dataset.id, input.dataset.talla, input.dataset.color, parseInt(input.value));
        });
    });
}

function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const iconos = document.querySelectorAll('#lg-bag a i, #mobile a i');

    iconos.forEach(icono => {
        let contador = icono.parentElement.querySelector('.cart-count');
        if (!contador) {
            contador = document.createElement('span');
            contador.className = 'cart-count';
            contador.style.position = 'absolute';
            contador.style.top = '-8px';
            contador.style.right = '-8px';
            contador.style.background = '#088178';
            contador.style.color = '#fff';
            contador.style.borderRadius = '50%';
            contador.style.padding = '2px 6px';
            contador.style.fontSize = '12px';
            icono.parentElement.style.position = 'relative';
            icono.parentElement.appendChild(contador);
        }
        contador.textContent = totalItems;
        contador.style.display = totalItems === 0 ? 'none' : 'inline-block';
    });
}

// ========================
// FUNCIONES DE PRODUCTO DETALLE
// ========================
function cargarProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId || !productosData[productId]) {
        window.location.href = 'shop.html';
        return;
    }

    const producto = productosData[productId];

    document.getElementById('product-brand').textContent = 'fraa';
    document.getElementById('product-name').textContent = producto.nombre;
    document.getElementById('product-price').textContent = '$' + producto.precio;
    document.getElementById('product-description').textContent = producto.descripcion;

    // Llenar selector de tallas
    const sizeSelect = document.getElementById('size-select');
    sizeSelect.innerHTML = '<option value="">Seleccionar Talla</option>';
    producto.tallas.forEach(talla => {
        const option = document.createElement('option');
        option.value = talla;
        option.textContent = talla;
        sizeSelect.appendChild(option);
    });

    // Crear botones de color
    const colorSelector = document.getElementById('color-selector');
    colorSelector.innerHTML = '';
    const colorSwatches = {
        negro: '#000000',
        gris: '#808080',
        azul: '#090961',
        beige: '#d3c084',
        verde: '#04533f'
    };
    const colores = Object.keys(producto.colores);
    colores.forEach(colorKey => {
        const colorData = producto.colores[colorKey];
        const btn = document.createElement('button');
        btn.className = 'color-option';
        btn.dataset.color = colorKey;
        btn.style.backgroundColor = colorSwatches[colorKey] || '#000000';
        btn.style.width = '30px';
        btn.style.height = '30px';
        btn.style.border = '2px solid #ccc';
        btn.style.borderRadius = '50%';
        btn.style.marginRight = '5px';
        btn.style.cursor = 'pointer';
        btn.title = colorData.nombre;
        btn.addEventListener('click', () => cambiarColor(producto, colorKey));
        colorSelector.appendChild(btn);
    });

    // Cargar el primer color por defecto
    if (colores.length > 0) {
        cambiarColor(producto, colores[0]);
        window.colorSeleccionado = colores[0];
    }
}

function cambiarColor(producto, colorKey) {
    const colorData = producto.colores[colorKey];
    if (!colorData) return;

    document.getElementById('MainImg').src = colorData.imagenPrincipal;

    const smallImgGroup = document.getElementById('smallImgGroup');
    smallImgGroup.innerHTML = '';
    colorData.imagenesSecundarias.forEach(imgSrc => {
        const col = document.createElement('div');
        col.className = 'small-img-col';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.width = 99;
        img.className = 'small-img';
        img.addEventListener('click', () => {
            document.getElementById('MainImg').src = imgSrc;
        });
        col.appendChild(img);
        smallImgGroup.appendChild(col);
    });

    window.colorSeleccionado = colorKey;
}

// ========================
// CHECKOUT CON MODAL
// ========================
function checkoutWhatsApp() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        mostrarNotificacion('❌ Tu carrito está vacío');
        return;
    }

    const modal = document.getElementById('destinatario-modal');
    if (modal) modal.style.display = 'block';
}

function enviarWhatsApp(numero) {
    const carrito = obtenerCarrito();
    const { subtotal, total } = calcularTotales();
    let mensaje = 'Hola, quiero hacer un pedido:%0A';
    carrito.forEach(item => {
        mensaje += `- ${item.nombre} (Talla: ${item.talla}, Color: ${item.color}) x ${item.cantidad} = $${item.precio * item.cantidad}%0A`;
    });
    mensaje += `%0A*Subtotal:* $${subtotal}%0A`;
    mensaje += `*Envío:* $${SHIPPING_COST}%0A`;
    mensaje += `*Total:* $${total}%0A`;
    mensaje += '%0A¿Está disponible?';

    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');

    const modal = document.getElementById('destinatario-modal');
    if (modal) modal.style.display = 'none';
}

// ========================
// EVENTOS GLOBALES
// ========================
document.addEventListener('DOMContentLoaded', () => {
    // Crear elemento de notificación si no existe
    if (!document.getElementById('toast-notification')) {
        const toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
    }

    // Menú móvil
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');
    if (bar) bar.addEventListener('click', () => nav.classList.add('active'));
    if (close) close.addEventListener('click', () => nav.classList.remove('active'));

    // Cargar producto si estamos en sproduct.html
    if (document.getElementById('prodetails')) {
        cargarProducto();
    }

    // Botón agregar al carrito en sproduct.html
    const btnAgregar = document.getElementById('add-to-cart-btn');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', () => {
            const productId = new URLSearchParams(window.location.search).get('id');
            const producto = productosData[productId];
            if (!producto) return;

            const talla = document.getElementById('size-select').value;
            if (!talla) {
                mostrarNotificacion('⚠️ Por favor selecciona una talla');
                return;
            }

            const colorKey = window.colorSeleccionado;
            if (!colorKey) {
                mostrarNotificacion('⚠️ Por favor selecciona un color');
                return;
            }

            const cantidad = parseInt(document.getElementById('quantity-input').value) || 1;
            const imagen = document.getElementById('MainImg').src.split('/').pop();

            agregarAlCarrito({
                id: productId,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: imagen,
                talla: talla,
                color: producto.colores[colorKey].nombre,
                cantidad: cantidad
            });
        });
    }

    // Botones de carrito en listados (index, shop)
    document.querySelectorAll('.pro .cart').forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const contenedor = boton.closest('.pro');
            const productId = contenedor.dataset.id;
            const producto = productosData[productId];
            if (!producto) return;

            const primerColor = Object.keys(producto.colores)[0];
            const imagen = producto.colores[primerColor].imagenPrincipal.split('/').pop();

            agregarAlCarrito({
                id: productId,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: imagen,
                talla: 'Única',
                color: producto.colores[primerColor].nombre,
                cantidad: 1
            });
        });
    });

    // Checkout
    const btnCheckout = document.getElementById('checkout-btn');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', checkoutWhatsApp);
    }

    // Modal eventos
    const modal = document.getElementById('destinatario-modal');
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const btnDueno = document.getElementById('dest-dueno');
    const btnTrabajador = document.getElementById('dest-trabajador');
    if (btnDueno) btnDueno.addEventListener('click', () => enviarWhatsApp('4622898361'));
    if (btnTrabajador) btnTrabajador.addEventListener('click', () => enviarWhatsApp('4622170940'));

    // Renderizar carrito si estamos en cart.html
    renderizarCarrito();
    actualizarContadorCarrito();
});