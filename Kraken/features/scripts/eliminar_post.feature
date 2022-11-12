

Feature: Funcionalidad eliminar Post Ghost Admin
    
@user1 @web
  

Scenario: Como usuario quiero eliminar un Post en Ghost

	Given I want to edit a Post
	When I selected the delete post settings
	Then I should confirm the Post deleted


