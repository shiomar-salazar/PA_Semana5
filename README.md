## Prueebas Automatizadas Equipo #
Semana 5
### Integrantes:
- Roberto Amin (r.amin@uniandes.edu.co)
- Federico Bedoya (f.bedoyag@uniandes.edu.co)
- Shiomar Salazar (s.salazarc@uniandes.edu.co)
- Andres Soler (a.solerf@uniandes.edu.co)

### Enlaces a archivos Readme:
Cada Herramienta tiene su propio redame con las instruciones para ejecucion de las pruebas.
- [Kraken](https://github.com/shiomar-salazar/PA_Semana5/tree/main/Kraken)
- [Cypress](https://github.com/shiomar-salazar/PA_Semana5/tree/main/Cypress)


### Listado de Funcionalidades:
| # | Funcionalidad |
|---|---------------|
| 1 | Crear Post |
| 2 | Editar Post |
| 3 | Eliminar Post |
| 4 | Agregar Miembro |
| 5 | Eliminar Miembro |

Hacer login en Ghost Admin es una Funcionalidad implícita.

### Listado de Escenarios:
Se considera que todos los escenarios inician con un SetUp clean:
- Sin Miembros.
- Solo el Post por defecto de la pagina.
- Login es parte implícita de la prueba.

| #  | Escenario |
|----|-----------|
|  1 | Despues de hacer Login, quiero Agregar un nuevo Miembro y despues Crear un nuevo Post |
|  2 | Despues de hacer Login, quiero Eliminar un Miembro y despues Editar un Post |
|  3 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Editar un Post existente y Eliminar un Post existente |
|  4 | Despues de hacer Login, quiero Eliminar un Miembro existente y Crear un nuevo Post y Editar un Post existente |
|  5 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Crear un nuevo Post y Editar un Post existente |
|  6 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente |
|  7 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Agregar un nuevo Miembro y Eliminar un Miembro existente |
|  8 | Despues de hacer Login, quiero Crear un nuevo Post y Editar un Post existente y Crear un nuevo Post y Eliminar un Post existente |
|  9 | Despues de hacer Login, quiero Crear un nuevo Post y Agregar un nuevo Miembro y Eliminar un Post existente |
| 10 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Editar un Post existente y Eliminar un Miembro existente |
| 11 | Despues de hacer Login, quiero Crear un nuevo Post y Agregar un nuevo Miembro y Editar un Post existente y Eliminar un Post existente |
| 12 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Agregar un nuevo Miembro |
| 13 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Eliminar un Miembro existente y Eliminar un Miembro existente |
| 14 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Eliminar un Post existente y Eliminar un Post existente |
| 15 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Crear un nuevo Post y Editar un Post existente |
| 16 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y Eliminar un Post existente |
| 17 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente |
| 18 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Editar un Post existente y Crear un nuevo Post y Editar un Post existente |
| 19 | Despues de hacer Login, quiero Editar un Post existente y Agregar un nuevo Miembro y Crear un nuevo Post y Eliminar un Miembro existente |
| 20 | Despues de hacer Login, quiero Editar un Post existente y Agregar un nuevo Miembro y Editar un Post existente y Crear un nuevo Post |
