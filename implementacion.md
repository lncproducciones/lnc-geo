### Geografico.JS
###### Cliente jQuery de información geográfica

[< Página principal](README.md)

## Implementación

Para implementar el cliente geográfico en el sitio web, priemro abriremos la hoja maestra (u hojas, según el caso), e incluiremos inmediatamente del registro del archivo de configuración el siguiente bloque script, al final de la página HTML.

Para utilizar este cliente, es necesario hacer previamente la referencia a jQuery antes de insertar la referencia a Geografico.JS:

````
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="{RUTA_AL_ARCHIVO}/lnc-geo.min.js"></script>
````

Es decir, al incluirlo, debería quedar así:

````
        (...)
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="{RUTA_AL_ARCHIVO}/lnc-geo.min.js"></script>
    </body>
</html>
````

No es necesario inicializar el cliente, ya que la clase ya lo inicializa de manera automática.

Una vez la página cargue en el navegador, se tendrá acceso al cliente por medio del objeto **geografico** dentro de JavaScript.

Para validar que esté funcionando, puede incluir el siguiente código al final de la página, y validarlo en la vista de consola de las herramientas de desarrollador:

````
<script>
    window.onload = function () {
        alert("Versión actual: " + geografico.getCurrentVersion());
    }
</script>
````

[< Página principal](README.md)

