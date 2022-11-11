

Feature: escenarios Ghost Admin
    
@user1 @web

Scenario: Como usuario quiero crear un Post en Ghost

  	Given I want to create a new Post
	When I fill the information Post
	Then I should see the post published

    
@user2 @web

Scenario: Como usuario quiero editar un Post en Ghost
	Given I want to edit a Post
	When I fill the information Post
	Then I should see the Post Updated
	
  
@user3 @web   

Scenario: Como usuario quiero eliminar un Post en Ghost

	Given I want to edit a Post
	When I selected the delete post settings
	Then I should confirm the Post deleted

  
@user4 @web   

Scenario: Como usuario quiero crear un miembro nuevo en Ghost

	Given I want to create a new Member
	When I fill the information of the Member
	Then I should see the Member published


@user5 @web   


Scenario: Como usuario quiero eliminar un miembro en Ghost

	Given I want to delete a Member
	When I select the delete Member option
	Then I should see the Member deleted