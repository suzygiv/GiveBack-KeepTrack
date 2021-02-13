USE gbkt;
  

INSERT INTO Givebacks (organization, category, employeeMatch, taxDeductible, receiptDocumentation, amount, createdAt, updatedAt)
VALUES ("The Penn Fund", "Education", false , true, false, 500, now(), now()),
 ("Penn Museum", "Arts and Culture", true, false, false, 300, now(), now()), 
 ("Abramson Cancer Center", "Health and Medical", false, false, true, 700, now(), now())
    