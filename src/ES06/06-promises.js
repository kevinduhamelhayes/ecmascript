const promesa = () => {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve("Se ha resuelto la promesa correctamente")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }
  
  promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject
    .finally(() => console.log('Finalizado')) // Se ejecuta siempre