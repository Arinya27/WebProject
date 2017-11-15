/* Custom Script */   

	//Home Button Click Event
	$('#signon_bttn').live('click', function(event){
		 event.preventDefault();
		 $.mobile.changePage("signin.html");
	});
	
	//Register Button Click Event
	$('#register_bttn').live('click', function(event){
		 event.preventDefault();
		$.mobile.changePage("register.html");
	});
	
	//Signin Button Click Event
	$('#login_bttn').live('click', function(event){
		 event.preventDefault();
		$.mobile.changePage("landing.html");
	});
	
	
	//Start Transaction Button Click Event
	$('#startTrans_bttn').live('click', function(event){
		 event.preventDefault();
		$.mobile.changePage("shopping_cart.html");
	});
	
	//Report Button Click Event
	$('#report_bttn').live('click', function(event){
		 event.preventDefault();
		$.mobile.changePage("reportpage.html",{ transition: "flip"},false,false);
	});
	
	//Register Listitem Click Event
	$('#list_register').live('click', function(event){
		 event.preventDefault();
		$.mobile.changePage("registration_detail.html",{ transition: "flip"},false,false);
	});
	
	//Void Dialog  Click Event
	 $('#void_dialog').live("click", function(event){
		 event.preventDefault();
		 $.mobile.changePage( $('#sheet0'),{ role: 'dialog', transition: "pop"},false,false);
	 });
	 
	//Void Reason Selection Click Event
	$('#show_desc_dialog').live("click", function(event, ui){
		 event.preventDefault();
		 // $('#sheet1').dialog('open');

		 $.mobile.changePage( $('#sheet1'),{role: 'dialog', transition: "pop"},false,false);
	 });
	 
	
	//void_reason1 Selection Click Event
	$('#void_reason1').live("click", function(event, ui){
		 event.preventDefault();
		 $.mobile.changePage( "shopping_cart.html");
	 });
		 
	//void_reason2 Selection Click Event
	$('#void_reason2').live("click", function(event, ui){
		 event.preventDefault();
		 $.mobile.changePage("shopping_cart.html");
	 });
	
	//Close Void Selection Click Event
	$('#close_void_dialog').live("click", function(event, ui){
		 event.preventDefault();
		 window.history.go(-2);
	 });
	
	//Close Qty Selection Click Event
	$('#close_qty_dialog').live("click", function(event, ui){
		 event.preventDefault();
		 window.history.go(-1);
	 });
	
	
	//Quality  Click Event
	 $('#quality_dialog').live("click", function(event){
		 event.preventDefault();
		 $.mobile.changePage($('#sheet2'),{role: 'dialog',transition: "pop"},false,false);
		
	 });
	
	//Price Dialog  Click Event
	 $('#price_dialog').live("click", function(event){
		 event.preventDefault();
		 $(this).addClass('ui-disabled');
	 });
	 
	//Tax Dialog  Click Event
	 $('#tax_dialog').live("click", function(event){
		 event.preventDefault();
		 $(this).addClass('ui-disabled');
	 });
	 
	//Shpping cart Dialog  Click Event
	 $('#cart_void_dialog').live("click", function(event){
		 event.preventDefault();
		 $.mobile.changePage($('#bar'),{role: 'dialog',transition: "pop"},false,false);
		
	 });
	 
	 
	 
	//Shoppingcart item  Click Event
	 $('#item_void_dialog').live("click", function(event){
		 event.preventDefault();
		 $.mobile.changePage($('#bar1'),{role: 'dialog',transition: "pop"},false,false);
		
	 });
	
	//Shoppingcart ite Cancel Click Event
	$('#close_cart_void_dialog').live("click", function(event, ui){
		 event.preventDefault();
		 window.history.go(-2);
	});
	 
	//Shoppingcart item Save Click Event
	$('#save_cart_void_dialog').live("click", function(event, ui){
		 event.preventDefault();
		 window.history.go(-2);
	 });
 
		
	 
		 //Shopping cart Page init Events
		 $('#shoppingcart_page').live('pageinit', function() {
			 
			 
			//Shopping cart SwipeUp and SwipeDown Events
			 
			 $('#headslider').live('swipedown',function(){
					$("#slidediv").slideToggle("fast");
					$("#contentWrapper").height(180);
					doScrollRefresh();
			});

			$('#swipediv').live('swipedown',function(){
				$("#slidediv").slideToggle("fast");
				$("#contentWrapper").height(180);
				doScrollRefresh();
			});	
			$('#upSlide').live('swipedown',function(){
				$("#slidediv").slideToggle("fast");
				$("#contentWrapper").height(180);
				doScrollRefresh();
			});	

			$('#swipediv').live('swipeup',function(){
				$("#slidediv").slideToggle("fast");
				$("#contentWrapper").height(260);
				doScrollRefresh();
			});	

			$('#upSlide').live('swipeup',function(){
				$("#slidediv").slideToggle("fast");
				$("#contentWrapper").height(260);
				doScrollRefresh();
			});	
			 
			 
			 
			//ICROLL FUNCTIONS
			/*====================================================*/
			 var val= 0;
				var scrollContent,
				scrollNav;
				function loaded() {
					scrollContent = new iScroll('contentWrapper');
					scrollNav = new iScroll('ul-1');
				}
				document.addEventListener('touchmove', function(e) {
					e.preventDefault();
				}, false);
				document.addEventListener('DOMContentLoaded', loaded, false);

				function doScrollRefresh () { 
					setTimeout(function () { 
					scrollContent.refresh(); 
					}, 0); 
				} 

				function loadPage(){
					if((parseInt(sessionStorage.getItem("userExist")) == 0) || (sessionStorage.getItem("userExist") == null)){
					 	val=1;
						sessionStorage.setItem('userExist', val); 
						//$.mobile.ajaxEnabled = false;
						$.mobile.changePage( "customer_identification.html");
					}else{
						//$.mobile.ajaxEnabled = false;
						$.mobile.changePage( "customer_detail.html", { transition: "flip"} );
					} 
				}
				//SCAN FUNCTIONS
				/*====================================================*/
				function startScan()
				{
				//alert("hi");
				console.log("scan");
					window.plugins.barcodeScanner.scan(scannerSuccess, scannerFailure);
				}

				function displayAlert(result){
					//scan_txt.value = result;
					appendToList();
				}

				function stopScan()
				{

				}

				function scannerSuccess(result) {
					appendToList();
				    //console.log("scannerSuccess: result: " + result);
				    //pass.value = "success: " + JSON.stringify(result);
				}

				function scannerFailure(message) {
				    console.log("scannerFailure: message: " + message);
				    resultSpan.innerText = "failure: " + JSON.stringify(message);
				}
				
				//DYNAMIC LIST VIEW
				/*========================================================*/

				var listCreated = false;
				function appendToList(){
				    //Create the listview if not created
				    if(!listCreated){
				        $("#contentWrapper").append("<ul id='tasks' data-role='listview' data-divider-theme='d' data-inset='false' style='margin-top: 2%'></ul>");
				        listCreated = true;
				        $("#contentWrapper").trigger("create");
				    }
				    var Index= $('li').index()+1;
				    $("#tasks").prepend("<li id='listtask' style=\"height: 35px;\"><a href=\"itemdetails.html\"data-ajax=\"false\"" +
							"style=\"text-decoration: none; color: #000000; margin-top: -10px;\">" +
							"<h1 style=\"color: black;\">Farah 1920 Burlington Check Shirt,Burgundy " +
							"<p class=\"ui-li-aside\" style=\"color: black;\">"+ Index +"</p>" +
							"<h1 class=\"ui-li-aside\" style=\"margin-top: 7px; text-align: center;\">" +
							"<strong>98 </strong></h1>" +
							"</a></li>");

				    	$("#tasks").listview("refresh");
					doScrollRefresh ();
					//$("#contentWrapper").scrollToElement("", "1s");	  
					//scrollContent.scrollToElement("ul > li:nth-child(1)", "0s");   
					scrollContent.scrollToElement("ul > li");
				}
				$(document).delegate('ul#tasks li', 'click', function (event) {
					 event.preventDefault();
					 $.mobile.changePage("itemdetails.html");
					//alert($(this).index()); 
				});
				
         });
	 	 
	 
		//Checkout_page Click Event
			$('#checkout_page').live("click", function(event){
				 event.preventDefault();
				 $.mobile.changePage("receiptpage.html");
		 });
		 
		//Receipt_Page Button Click Event
		$('#payment_bttn').live("click", function(event){
			 event.preventDefault();
			 $.mobile.changePage("swipe.html");
			 
		 });
		 
			 
		//Manual Entry Payment Button Click Event
		$('#manualArray').live("click", function(event){
			 event.preventDefault();
			 $.mobile.changePage($('#cardtype'),{role: 'dialog',transition: "pop"},false,false);
			 
		 });
		
		//Creditcard Payment Button Click Event
		$('#creditcard').live("click", function(event){
			 event.preventDefault();
			 $.mobile.changePage($('#credit'),{role: 'dialog',transition: "pop"},false,false);
			 
		 });
		
		//cancelCredit Payment Button Click Event
		$('#cancelCredit').live("click", function(event){
			 event.preventDefault();
			 window.history.go(-2);
		 });
		

		/*//okCredit Payment Button Click Event
		$('#okCredit').live("click", function(event){
			 event.preventDefault();
			 //window.history.go(-2);
			 $.mobile.ajaxEnabled = false;
			 $.mobile.changePage("accept-signature.html");
			 
		 });*/
		
		//Debitcard Payment Button Click Event
		$('#debitcard').live("click", function(event){
			 event.preventDefault();
			 $.mobile.changePage($('#debit'),{role: 'dialog',transition: "pop"},false,false);
			 
		 });
		
		//canceldebit Payment Button Click Event
		$('#cancelDebit').live("click", function(event){
			 event.preventDefault();
			 window.history.go(-2);
		 });
		

		/*//okdebit Payment Button Click Event
		$('#okDebit').live("click", function(event){
			 event.preventDefault();
			// window.history.go(-2);
			 $.mobile.ajaxEnabled = false;
			 $.mobile.changePage("accept-signature.html");
			 
		 });*/
		
		//Signature Button Click Event
		$('#submit_Signature').live("click", function(event){
			 event.preventDefault();
			 window.location.href = 'full_receipt.html';
		 });
		
		//Receipt Button Click Event
		$('#receipt_Bttn').live("click", function(event){
			 event.preventDefault();
			 $.mobile.changePage("landing.html");
		 });
		
		
		
		
		
		
	 
	$('#username_txt').live('onfocus', function(event){
		 event.preventDefault();
		window.plugins.barcodeScanner.scan(scannerSuccess, scannerFailure);
	});
	
	function scannerSuccess(result) {
	    console.log("scannerSuccess: result: " + result)
	    pass.value = "success: " + JSON.stringify(result)
	}
	
	function scannerFailure(message) {
	    console.log("scannerFailure: message: " + message)
	    resultSpan.innerText = "failure: " + JSON.stringify(message)
	}
	

	 //Swipe Page init Events
	 $('#payment_page').live('pageinit', function() {
		
		function startSwipe(){
			//alert("hi");
			console.log("swipe");
			window.plugins.barcodeScanner.swipe();
		}
		
		function displayCard(result){
			swipe_txt.value = result;
		}
	
	 });
	
	
	
	