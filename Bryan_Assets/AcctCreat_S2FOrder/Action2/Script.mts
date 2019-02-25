Browser("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account My orders Sign").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "Username003"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set "Password1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("TABLETS").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP ElitePad 1000 G2 Tablet").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("1").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "junk23"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").Set "Password1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click
