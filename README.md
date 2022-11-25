## Prueebas Automatizadas Equipo #7

### Integrantes:
- Roberto Amin (r.amin@uniandes.edu.co)
- Federico Bedoya (f.bedoyag@uniandes.edu.co)
- Shiomar Salazar (s.salazarc@uniandes.edu.co)
- Andres Soler (a.solerf@uniandes.edu.co)

## Semana 5

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
|  1 | Despues de hacer Login, quiero Agregar un nuevo Miembro y despues Crear un nuevo Post y espero que todos los pasos se puedan ejecutar correctamente |
|  2 | Despues de hacer Login, quiero Eliminar un Miembro y despues Editar un Post y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen |
|  3 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
|  4 | Despues de hacer Login, quiero Eliminar un Miembro existente y Crear un nuevo Post y Editar un Post existente y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen |
|  5 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
|  6 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
|  7 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Agregar un nuevo Miembro y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente |
|  8 | Despues de hacer Login, quiero Crear un nuevo Post y Editar un Post existente y Crear un nuevo Post y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
|  9 | Despues de hacer Login, quiero Crear un nuevo Post y Agregar un nuevo Miembro y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 10 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Editar un Post existente y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente |
| 11 | Despues de hacer Login, quiero Crear un nuevo Post y Agregar un nuevo Miembro y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 12 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Agregar un nuevo Miembro y espero que todos los pasos se puedan ejecutar correctamente |
| 13 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Eliminar un Miembro existente y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente |
| 14 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Eliminar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 15 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 16 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 17 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 18 | Despues de hacer Login, quiero Agregar un nuevo Miembro y Editar un Post existente y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 19 | Despues de hacer Login, quiero Editar un Post existente y Agregar un nuevo Miembro y Crear un nuevo Post y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente |
| 20 | Despues de hacer Login, quiero Editar un Post existente y Agregar un nuevo Miembro y Editar un Post existente y Crear un nuevo Post y espero que todos los pasos se puedan ejecutar correctamente |

## Semana 6

Para las diferencias visuales entre las versiones de Ghost: https://asolerf.atlassian.net/jira/software/projects/PAU/boards/1
- https://asolerf.atlassian.net/jira/software/projects/PAU/boards/1?selectedIssue=PAU-16
- https://asolerf.atlassian.net/jira/software/projects/PAU/boards/1?selectedIssue=PAU-17
- https://asolerf.atlassian.net/jira/software/projects/PAU/boards/1?selectedIssue=PAU-18

### Cypress

> Por problemas con la version 3.42 de ghost y cypress, se uso como version Vieja Ghost 4.44 y como version Nueva Ghost 5.18.

#### Escenarios ejecutados en Cypress para las pruebas VRT
| #  | Escenario |
|----|-----------|
|  1 | Despues de hacer Login, quiero Agregar un nuevo Miembro y despues Crear un nuevo Post y espero que todos los pasos se puedan ejecutar correctamente |
|  2 | Despues de hacer Login, quiero Eliminar un Miembro y despues Editar un Post y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen |
|  4 | Despues de hacer Login, quiero Eliminar un Miembro existente y Crear un nuevo Post y Editar un Post existente y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen |
| 15 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 16 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |

Ruta con captura de pantalla de los 20 escenarios originales:
- https://github.com/shiomar-salazar/PA_Semana5/tree/main/Cypress/results/screenshots/ghost

Ruta con los reportes de VRT de los escenarios escogidos:
- https://github.com/shiomar-salazar/PA_Semana5/tree/main/Cypress/resemble_results/results

### Kraken

> Para Kraken utilizamos la version 3.42 de ghost como version Vieja y como version Nueva Ghost 5.22.9, dado que la funcionalidad Miembros No existe en la version 3.42 se omitieron escenarios de prueba que incluyeran dicha funcionalidad, remitiendonos unicamente a los escenarios que utilizan la funcionalidad Post

#### Escenarios ejecutados en Kraken para las pruebas VRT

| #  | Escenario |
|----|-----------|
|  5 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
|  6 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
|  8 | Despues de hacer Login, quiero Crear un nuevo Post y Editar un Post existente y Crear un nuevo Post y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 15 | Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 16 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |

## Semana 7

Version de Ghost: 5.18
Herramienta escogida: Cypress

| #  | Escenario Escogido                                                                                                                                   |
|----|------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1 | Despues de hacer Login, quiero Agregar un nuevo Miembro y despues Crear un nuevo Post y espero que todos los pasos se puedan ejecutar correctamente  |
|  5 | Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente |
| 21 |  Despues de hacer Login, quiero Crear un nuevo Tag y despues Crear un nuevo Post y espero que todos los pasos se puedan ejecutar correctamente |
| 22 |  Despues de hacer Login, quiero Crear una nueva pagina y despues Crear un nuevo Post y espero que todos los pasos se puedan ejecutar correctamente |

Estrategias de Generacion de Datos:
| Estrategias            | Cantidad de Excenarios |
|------------------------|------------------------|
| Pool de datos a-priori | 40                     |
| Pool de datos (pseudo) aleatorio dinámico | 40  |
| Escenario aleatorio    | 40                     |

Tipos de Datos Generados:
| Tipos de Datos                | Cantidad de Excenarios por |
|-------------------------------|----------------------------|
| Datos Validos                 | 1                          |
| Datos Invalidos Formato       | 1                          |
| Datos Frontera Superior       | 1                          |
| Datos Frontera Inferior       | 1                          |
| Campos Vacios                 | 1                          |
| Datos Repetidos o Equivocados | 1                          |

Desgloce de Escenarios de la entrega
- Caracteristicas a Probar x Estrategias x Tipos:
  - 6 x 3 x 6 = 108
