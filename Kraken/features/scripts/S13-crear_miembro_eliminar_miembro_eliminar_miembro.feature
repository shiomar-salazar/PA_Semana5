

Feature: Escenario 13 Crear un miembro despues eliminarlo y luego eliminar otro miembro
    
@user1 @web


Scenario: Como usuario quiero Crear un miembro despues eliminarlo y luego eliminar otro miembro

	Given I want to create a new Member
	When I fill the information of the Member "Pambele","pambele.men4@gmail.com","boxeador profesional de cartagena"
	Then I should see the Member published
	
	And I want to delete a Member
	And I select the delete Member option
	And I should see the Member deleted

	And I want to delete a Member
	And I select the delete Member option
	And I should see the Member deleted