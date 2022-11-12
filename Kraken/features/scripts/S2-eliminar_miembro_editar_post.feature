

Feature: Escenario 2 eliminar miembro y editar post en Ghost Admin
    
@user1 @web


Scenario: Como usuario quiero eliminar un miembro nuevo y luego editar un Post en Ghost
	
	Given I want to delete a Member
	When I select the delete Member option
	Then I should see the Member deleted

	And I want to edit a Post 
	And I fill the information Post "Japon potencia mundial","Japón es una nación insular del océano Pacífico con densas ciudades, palacios imperiales, parques nacionales montañosos y miles de santuarios y templos. "
	And I should see the Post Updated
	
