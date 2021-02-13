USE gbkt;
  

INSERT INTO Givebacks (organization, category, employeeMatch, taxDeductible, receiptDocumentation, amount, createdAt, updatedAt)
VALUES ("The Penn Fund", "Education", false , true, false, 500, now(), now()),
("The Attic", "Education", false , true, false, 250, now(), now()),
 ("Penn Museum", "ArtCulture", true, false, false, 300, now(), now()), 
 ("Abramson Cancer Center", "HealthMedical", false, false, true, 700, now(), now())
    