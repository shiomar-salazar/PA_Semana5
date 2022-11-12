

Feature: Escenario 12 Crear un miembro despues crear un post por ultimo crear otro miembro
    
@user1 @web


Scenario: Como usuario quiero crear miembro luego un post y por ultimo otro miembro

	Given I want to create a new Member
	When I fill the information of the Member "Enrique Mendez","enrique.men4@gmail.com","Es profesora en la universidad de los andes"
	Then I should see the Member published
	
	And I want to create a new Post
	And I fill the information Post "Los helicopteros de la guerrilla","Tienen un arsenal de 10 helicopteros todo terreno con capacidad para 10 personas cada uno "
	And I should see the post published	
	
	And I want to create a new Member
	And I fill the information of the Member "Helena Gordillo","HElena.gorda@gmail.com","ingeniera de petroleos en la universidad de los andes"
	And I should see the Member published