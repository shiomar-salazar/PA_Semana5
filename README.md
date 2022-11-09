## Prueebas Automatizadas Equipo #
Semana 5
### Integrantes:
- Roberto Amin (r.amin@uniandes.edu.co)
- Federico Bedoya (f.bedoyag@uniandes.edu.co)
- Shiomar Salazar (s.salazarc@uniandes.edu.co)
- Andres Soler (a.solerf@uniandes.edu.co)

### Enlaces a archivos Readme:
Cada Herramienta tiene su propio redame con las instruciones para ejecucion de las pruebas.
- [Kraken]()
- [Cypress]()


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
- Solo el Psot por defecto de la pagina.
- Login es parte implícita de la prueba.

| #  | Escenario |
|----|-----------|
| 1  | Agregar Miembro + Crear Post |
| 2  | Eliminar Miembro + Editar Post |
| 3  | Agregar Miembro + Editar Post + Eliminar Post |
| 4  | Eliminar Miembro + Crear Post + Editar Post |
| 5  | Crear Post + Eliminar Post + Crear Post + Editar Post |
| 6  | Crear Post + Crear Post  + Eliminar Post + Editar Post |
| 7  | Agregar Miembro +  Agregar Miembro + Eliminar Miembro |
| 8  | Crear Post + Editar Post + Crear Post + Eliminar Post |
| 9  | Crear Post + Agregar Miembro + Eliminar Post |
| 10 | Agregar Miembro + Crear Post + Editar Post + Eliminar Miembro |
| 11 | Crear Post + Agregar Miembro + Editar Post + Eliminar Post  |
| 12 | Agregar Miembro + Crear Post + Agregar Miembro |
| 13 | Agregar Miembro + Eliminar Miembro + Eliminar Miembro |
| 14 | Agregar Miembro + Eliminar Post + Eliminar Post |
| 15 | Crear Post + Crear Post + Crear Post + Editar Post |
| 16 | Crear Post + Eliminar Post +  Editar Post + Eliminar Post |
| 17 | Agregar Miembro + Crear Post + Crear Post + Eliminar Post |
| 18 | Agregar Miembro + Editar Post + Crear Post + Editar Post |
| 19 | Editar Post + Agregar Miembro + Crear Post + Eliminar Miembro |
| 20 | Editar Post + Agregar Miembro + Editar Post + Crear Post |
