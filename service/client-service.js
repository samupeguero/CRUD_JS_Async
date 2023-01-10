const listaClientes = () => 
  fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());

  const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({nombre, email, id: uuid.v4() })
    })
  };

  const eliminarCliente = (id) => {
    console.log("elimina a ----->",id)
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "DELETE"
  })
  }

  export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente
  };
