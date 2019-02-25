Browser("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set "Username003"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set "bleep@blah.com"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").Set "Password1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Confirm password").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").Set "Password1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set "ON"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btnundefined").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("dvantage DEMO").Click
