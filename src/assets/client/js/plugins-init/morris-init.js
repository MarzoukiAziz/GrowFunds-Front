(function($) {
    "use strict"

	var dlabMorris = function(){
		
		var screenWidth = $(window).width();
		
		var setChartWidth = function(){
			if(screenWidth <= 768)
			{
				var chartBlockWidth = 0;
				chartBlockWidth = (screenWidth < 300 )?screenWidth:300;
				jQuery('.morris_chart_height').css('min-width',chartBlockWidth - 31);
			}
		}
		
		
		var lineChart2 = function(){
			const dta= document.getElementById("data254");
			const data1 = JSON.parse( dta.textContent)
			const data2 = Object.entries(data1).map(([period, notifications]) => {
				return { period, notifications };
			  });
			  console.log(data2)
			  
			//Area chart
			Morris.Area({
				element: 'line_chart_2',
				data: data2,
				xkey: 'period',
				ykeys: ['notifications'],
				labels: ['notifications'],
				pointSize: 3,
				fillOpacity: 0,
				pointStrokeColors: ['#EE3C3C', '#ffaa2b', '#53cafd'],
				behaveLikeLine: true,
				gridLineColor: 'transparent',
				lineWidth: 3,
				hideHover: 'auto',
				lineColors: ['rgb(83,202,253)', 'rgb(0, 171, 197)', '#53cafd'],
				resize: true

			});
		}
		
		/* Function ============ */
		return {
			init:function(){
				screenWidth = $(window).width();
				setChartWidth();
				lineChart2();
		
			},
			
			
			resize:function(){
				screenWidth = $(window).width();
				setChartWidth();
				lineChart2();
				
			}
		}
		
	}();

	jQuery(document).ready(function(){
		dlabMorris.init();
		//dlabMorris.resize();
	
	});
		
	jQuery(window).on('load',function(){
		//dlabMorris.init();
	});
		
	jQuery( window ).resize(function() {
		//dlabMorris.resize();
		//dlabMorris.init();
	});
   
})(jQuery);