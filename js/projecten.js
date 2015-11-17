$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});


var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});

$(document).ready(function() {

//onclick[ID] show porfolio[ID]
//Ja tis ni proper ma time is money

	//#1
	$("#BrickLand").click({ToOpen: "#portfolioModal1"}, showProjectDiv);
	$("#modal-close-1").click({ToClose: "#portfolioModal1"}, closeProjectDiv);

	//#2
	$("#Vlaamse_Week_Gdansk").click({ToOpen: "#portfolioModal2"}, showProjectDiv);
	$("#modal-close-2").click({ToClose: "#portfolioModal2"}, closeProjectDiv);

	//#3
	$("#Track_25").click({ToOpen: "#portfolioModal3"}, showProjectDiv);
	$("#modal-close-3").click({ToClose: "#portfolioModal3"}, closeProjectDiv);

	//#4
	$("#Soepterinne").click({ToOpen: "#portfolioModal4"}, showProjectDiv);
	$("#modal-close-4").click({ToClose: "#portfolioModal4"}, closeProjectDiv);

	//#5
	$("#CityGame").click({ToOpen: "#portfolioModal5"}, showProjectDiv);
	$("#modal-close-5").click({ToClose: "#portfolioModal5"}, closeProjectDiv);

	//#6
	$("#Tuinplantencentrum_De_Pauw").click({ToOpen: "#portfolioModal6"}, showProjectDiv);
	$("#modal-close-6").click({ToClose: "#portfolioModal6"}, closeProjectDiv);

	//#7
	$("#Herinneringseducatie").click({ToOpen: "#portfolioModal7"}, showProjectDiv);
	$("#modal-close-7").click({ToClose: "#portfolioModal7"}, closeProjectDiv);

	//#8
	$("#Infographic_Michel_Vica").click({ToOpen: "#portfolioModal8"}, showProjectDiv);
	$("#modal-close-8").click({ToClose: "#portfolioModal8"}, closeProjectDiv);

	//#9
	$("#Jarabang").click({ToOpen: "#portfolioModal9"}, showProjectDiv);
	$("#modal-close-9").click({ToClose: "#portfolioModal9"}, closeProjectDiv);

	//#10
	$("#Contour7").click({ToOpen: "#portfolioModal10"}, showProjectDiv);
	$("#modal-close-10").click({ToClose: "#portfolioModal10"}, closeProjectDiv);

	//#11
	$("#OutdoorFan").click({ToOpen: "#portfolioModal11"}, showProjectDiv);
	$("#modal-close-11").click({ToClose: "#portfolioModal11"}, closeProjectDiv);

	//#12
	$("#Designosource_1").click({ToOpen: "#portfolioModal12"}, showProjectDiv);
	$("#modal-close-12").click({ToClose: "#portfolioModal12"}, closeProjectDiv);

	//#13
	$("#Designosource_2").click({ToOpen: "#portfolioModal13"}, showProjectDiv);
	$("#modal-close-13").click({ToClose: "#portfolioModal13"}, closeProjectDiv);

	//#14
	$("#Designosource_3").click({ToOpen: "#portfolioModal14"}, showProjectDiv);
	$("#modal-close-14").click({ToClose: "#portfolioModal14"}, closeProjectDiv);

	//#15
	$("#Designosource_4").click({ToOpen: "#portfolioModal15"}, showProjectDiv);
	$("#modal-close-15").click({ToClose: "#portfolioModal15"}, closeProjectDiv);

	//#16
	$("#Kerstkaartjes").click({ToOpen: "#portfolioModal16"}, showProjectDiv);
	$("#modal-close-16").click({ToClose: "#portfolioModal16"}, closeProjectDiv);
});

function showProjectDiv(event){
	var openme = event.data.ToOpen;

	$(openme).show();
    $(".container").hide(); 
	$(openme).addClass("project-animation");
}

function closeProjectDiv(event){
	var closeme = event.data.ToClose;

	$(closeme).hide();
    $(".container").show();
    console/log("sluiten");
	$(closeme).removeClass("project-animation");
}

