<script>
    let { nombre, especie, raza, color, lat, long} = $props();
    let publicaciones = $state([]);

    async function añadirPublicacion(){
        const response = await fetch("http://localhost:1984/api/publicaciones", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nombre": nombre,
                "especie": especie,
                "raza": raza,
                "color": color,
                "lat": lat,
                "long": long
            }),
        });
        const data = await response.json();
        console.log(data);
    }

    async function getPublicaciones(){
        const response = await fetch("http://localhost:1984/api/publicaciones");

        const respuesta = await response.json();
        publicaciones = respuesta.publicaciones

        console.log(publicaciones);
    }
</script>

<input bind:value={nombre} type='text' id='myInput' placeholder='Nombre'>
<input bind:value={especie} type='text' id='myInput' placeholder='Especie'>
<input bind:value={raza} type='text' id='myInput' placeholder='Raza'>
<input bind:value={color} type='text' id='myInput' placeholder='Color'>
<input bind:value={lat} type='number' id='myInput' placeholder='Lat'>
<input bind:value={long} type='number' id='myInput' placeholder='Long'>

<button onclick={getPublicaciones}>Traer desde express los datos</button>
<h1>Publicaciones: </h1>
<ul id="listaPublicaciones">
    {#each publicaciones as publicacion}
        <li>
            {publicacion.nombre} - {publicacion.raza} - {publicacion.especie} - {publicacion.color}
        </li>
    {/each}
</ul>

<button onclick={añadirPublicacion}>Añadir Mascota</button>