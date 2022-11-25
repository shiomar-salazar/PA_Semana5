

Feature: Escenario 1 Ghost Admin
    
@user1 @web


Scenario: Como usuario quiero crear un miembro nuevo y luego crear un Post en Ghost

	Given I want to create a new Member 
	When I fill the information of the Member "Lorna Samudio","lorna@gmail.com","es abogada y liticgante"
	Then I should see the Member published
	And I want to create a new Post
	And I fill the information Post "Economia mundial","Perspectivas económicas mundiales examina las tendencias de la economía mundial y sus efectos en los países en desarrollo. El informe incluye pronósticos para tres años, específicos para cada país, de los principales indicadores macroeconómicos, incluidos productos básicos y mercados financieros."
	And I should see the post published
