

Feature: Escenario 20 editar un post luego agregar un miembro despues editar un post para finalizar creando un post
    
@user1 @web

Scenario: Como usuario quiero editar un post luego agregar un miembro despues editar un post para finalizar creando un post
	
	Given I want to edit a Post 
	When I fill the information Post "tres circulos","3 son mejor que dos en un mundo redondo"
	Then I should see the Post Updated

	And I want to create a new Member
	And I fill the information of the Member "LA perliroja","roja_perli@gmail.com","los colores son su motivacion"
	And I should see the Member published
	 
	And I want to edit a Post 
	And I fill the information Post "Jupiter","elplaneta de los anillos que tiene mayor tamano en la via lactea  mmm"
	And I should see the Post Updated

	And I want to create a new Post
	And I fill the information Post "La playita"," una playa amplia que se ubica en el corazon de baru en cartagena"
	And I should see the post published

	
  

