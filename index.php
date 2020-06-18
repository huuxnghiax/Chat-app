<!DOCTYPE html>
<html>
<head>	
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <script src="js/javascript.js"></script>
</head>
<body>  
    <div class="header">
    <div class="box-title-new">
        <div class="box-title-name-new">
            <span class="null">Ứng dụng chat
        </div>
    </div>
    </div>

    <form name="frmChat" id="frmChat">
	<div id="chat-box"></div>
	<input type="text" name="chat-user" id="chat-user" placeholder="Tên" class="chat-input" required />
	<input type="text" name="chat-message" id="chat-message" placeholder="Tin nhắn"  class="chat-input chat-message" required />
	<input type="submit" id="btnSend" name="send-chat-message" value="Gửi" >
    </form>
</body>
<footer>
    <h5 class="title-comm"><span class="title-holder">Code by Huu Nghia, Manh Linh, Duc Manh in April 8th ©</span></h5>
</footer>
</html>