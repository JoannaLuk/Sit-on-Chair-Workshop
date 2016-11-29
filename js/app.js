document.addEventListener('DOMContentLoaded', function() {

// Dropdown menu

	var listMenu = document.querySelector('.nav_menu>ul>li');
	var list = listMenu.querySelector('ul')

	// for(var i=0; i<listMenu.length; i++){ //jeżeli każda lista miałaby mieć dropdown menu
		listMenu.addEventListener('mouseover', function(){
			var ul = this.querySelector('ul');
			// if(ul !== null){
			ul.style.display = 'block';
		// }
		});
		
		listMenu.addEventListener('mouseout', function(){
			var ul = this.querySelector('ul');
			// if(ul !== null){
			ul.style.display = 'none';

		// }
		});

		var menu_option = list.querySelectorAll('li');
		console.log(menu_option);
		
			for(var i=0; i<menu_option.length; i++){
				menu_option[i].addEventListener('click', function(){
					list.style.display = 'none';
				})
			}


	// }


// Slider

	var sliderImg = document.querySelector('.sliderImage');
	var next = document.querySelector('.nextSlide');
	var prev = document.querySelector('.prevSlide');
	var currentSlide = 1;
	var slideCount = 3;


	next.addEventListener('click', function(){
		currentSlide++;
		if(currentSlide > slideCount){
			currentSlide = 1;
		}
		sliderImg.style.backgroundImage = 'url(images/chair'+ currentSlide + '.png)';
	});

	prev.addEventListener('click', function(){
		currentSlide--;
		if(currentSlide < 1) {
			currentSlide = slideCount;
		}
		sliderImg.style.backgroundImage = 'url(images/chair'+currentSlide+'.png)';
	});



//Chair description disappear

	var smallBox = document.querySelectorAll('.small_box');
	
	for(var i=0; i<smallBox.length; i++){

		smallBox[i].addEventListener('mouseover', function(e){
				var description = this.querySelector('.descriptionContainer');
				if(description !== null){ //klasę small_box mają trzy boxy ale tylko dwa mają .descriptionContainer
				description.style.display = 'none';
				}	
			});

		smallBox[i].addEventListener('mouseout', function(e){
			var description = this.querySelector('.descriptionContainer');
			if(description !== null){
			description.style.display = 'block';
			}
		});
	}
		

// Price calculator

	var arrow = document.querySelectorAll('.list_arrow');
	var listPanel = document.querySelectorAll('.list_panel');
	var options = document.querySelectorAll('.list_panel li');
	var leftPanel = document.querySelector('.panel_left').children;
		console.log(listPanel);
	var rightPanel = document.querySelector('.panel_right').children;
	var summary = document.querySelector('.sum strong');
	var transport = document.querySelector('#transport');
		console.log(arrow, listPanel, leftPanel, rightPanel, summary, transport);

	function calculate() {
		var sum = 0;
		var rightPanel = document.querySelector('.panel_right').children;
		for (var i=0; i<rightPanel.length; i++) {
			var price = parseInt(rightPanel[i].innerText)||0;
			sum = sum + price;
		}
		summary.innerText = sum + ' zł';
	};


	for(var i=0; i<arrow.length; i++) {
		arrow[i].addEventListener('click', function(e){
			var list = this.parentElement.querySelector('.list_panel');
			list.classList.toggle('onclick');
		})
	}

	for(var i=0; i<listPanel.length; i++){
		var options = listPanel[i].querySelectorAll('.list_panel li');
		console.log('opions: ', options);
		console.log('list_panel: ', listPanel);

		for(var j=0; j<options.length; j++) {
			options[j].addEventListener('click', function(){
				this.parentElement.classList.toggle('onclick');

				if(this.parentElement.parentElement.classList.contains('chair_model')) {
					var title = document.querySelector('.title');
					var title_value = document.querySelector('.title_value');
					var chair_price = this.dataset.price;
					title.innerText = this.innerText;
					title_value.innerText = chair_price;
					calculate();
				}

				if(this.parentElement.parentElement.classList.contains('chair_color')) {
					var color = document.querySelector('.color');
					var color_value = document.querySelector('.color_value');
					var chair_price = this.dataset.price;
					color.innerText = this.innerText;
					color_value.innerText = chair_price;
					calculate();
				}

				if(this.parentElement.parentElement.classList.contains('chair_pattern')) {
					var pattern = document.querySelector('.pattern');
					var pattern_value = document.querySelector('.pattern_value');
					var chair_price = this.dataset.price;
					pattern.innerText = this.innerText;
					pattern_value.innerText = chair_price;
					calculate();
				}

                calculate();
			})
		}
	}

	transport.addEventListener('click', function(){
		if(transport.checked == true) {
			leftPanel[3].innerText = transport.nextElementSibling.innerText;
			rightPanel[3].innerText = transport.dataset.price;
		} else {
			leftPanel[3].innerText = '';
			rightPanel[3].innerText = '';
		}
		calculate();
	})



});