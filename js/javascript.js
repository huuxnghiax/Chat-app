/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Phần javascript này xử lý websocket
/*WebSoket là công nghệ hỗ trợ giao tiếp hai chiều 
 giữa client và server bằng cách sử dụng một TCP socket 
 để tạo một kết nối hiệu quả và ít tốn kém.
*/

//Hàm này có tác dụng in ra thông báo, tin nhắn vào chat-box
function showMessage(messageHTML) {
		$('#chat-box').append(messageHTML);
	}
        
       
        
        //Chạy khi load xong document
	$(document).ready(function(){
 
                //Tạo websocket mới
                //Sử dụng schema ws: vì websocket dùng protocol khác
                //Tiếp theo là đến host, port, server location
		var websocket = new WebSocket("ws://localhost:8090/message/php-socket.php"); 
		
                //Event xuất hiện khi thiết lập được kết nối
                websocket.onopen = function(event) { 
			showMessage("<div class='chat-connection-ack'>Đã kết nối!</div>");		
		}
                //Event xuất hiện khi client nhận data từ server
		websocket.onmessage = function(event) {
                    //JSON.parse() convert một chuỗi JSON và biến nó thành một đối tượng JavaScript
			//Parse JSON thành đối tượng Data có 2 biến message_type và message
                        var Data = JSON.parse(event.data);
                        
                        //In ra tin nhắn
			showMessage("<div class='"+Data.message_type+"'>"+Data.message+"</div>");
             
			//làm trống trường tin nhắn sau khi gửi
                        $('#chat-message').val('');
		};
		
                //Event xuất hiện khi có lỗi
		websocket.onerror = function(event){
			showMessage("<div class='error'>Có vài lỗi đã xảy ra...</div>");
		};
                
                //Event xuất hiện khi đóng kết nối
		websocket.onclose = function(event){
			showMessage("<div class='chat-connection-ack'>Ngắt kết nối.</div>");
		}; 
		
                //Gửi tin nhắn đi
                //Bắt sự kiện click nút submit
		$('#frmChat').on("submit",function(event){
                        //method này có tác dụng khi
                        //click vào nút "submit" thì không bị submit form
			event.preventDefault();
                        
                        //Khi gửi thì ẩn trường tên đi
			$('#chat-user').attr("type","hidden");		
			//Tạo dữ liệu JSON
                        var messageJSON = {
				chat_user: $('#chat-user').val(),
				chat_message: $('#chat-message').val()
			};
			//parse json sang string để gửi đi server
                        //Khi gửi dữ liệu cho server thì phải là string
                        websocket.send(JSON.stringify(messageJSON));
		});
	});




