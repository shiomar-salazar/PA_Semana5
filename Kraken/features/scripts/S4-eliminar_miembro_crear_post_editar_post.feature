

Feature: Escenario 4 Eliminar un miembro luego crear un post y terminar editando un post
    
@user1 @web


Scenario: Como usuario quiero eliminar un miembro luego crear un Post y por ultimo editar un post en Ghost
	
	Given I want to delete a Member
	When I select the delete Member option
	Then I should see the Member deleted
  
	And I want to create a new Post
	And I fill the information Post "Delfines"," llamados también delfines oceánicos para distinguirlos de los platanistoideos o delfines de río, son mamíferos de una familia de cetáceos odontocetos muy heterogénea, que comprende 37 especies actuales"
	And I should see the post published

	And I want to edit a Post 
	And I fill the information Post "Rusia es de izquierda","PARECE que esto se pone maluco o bonito???????????   "
	And I should see the Post Updated
	
	
