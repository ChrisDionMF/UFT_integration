Browser("Advantage Shopping").Page("Advantage Shopping").Link("TABLETS Shop Now").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP ElitePad 1000 G2 Tablet").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("num_of_tablets", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("3").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("PRODUCT NAME").Check CheckPoint("PRODUCT NAME") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Your shopping cart is").Check CheckPoint("Your shopping cart is empty") @@ script infofile_;_ZIP::ssf8.xml_;_
