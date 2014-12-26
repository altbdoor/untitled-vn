(function (d, w, s) {
	var imageRaw = ('airport.jpg classroom.jpg highway.jpg home.jpg ' + 
			'inplane.jpg planeview.jpg school.jpg sciencelab.jpg static.jpg ' +
			'steamboat.jpg street.jpg aunt.png bff.png dan.png stewardess.png ' +
			'teacher.png tsun.png uncle.png').split(' '),
		imageProcessed = {},
		imageLength = imageRaw.length,
		imageCount = 0,
		
		scriptPosition = 0,
		scriptIds = {},
		scriptDefaults = {
			reset: false,
			id: null,
			before: null,
			background: null,
			left: null,
			center: null,
			right: null,
			append: false,
			speaker: null,
			text: '',
			jump: null,
			choice: false,
			answer: [],
			result: []
		},
		
		answers = $('#answers'),
		
		box = $('#box'),
		boxText = $('#box-text'),
		boxOverlay = $('#box-overlay'),
		
		imgLeft = $('#img-left'),
		imgCenter = $('#img-center'),
		imgRight = $('#img-right'),
		
		btnStart = $('#btn-start'),
		preload = $('#preload'),
		
		speakerColor = {
			'Me': '80aaff',
			'Uncle Ichiro': '05f',
			'Aunt Suzune': 'f05',
			'Yuno': 'f05',
			'Laura': 'f05',
			'Brian': '05f'
		},
		
		flags = {};
	
	for (var i=0; i<imageLength; i++) {
		var name = imageRaw[i].split('.')[0],
			path = 'public/img/' + imageRaw[i];
		
		imageProcessed[name] = path;
		
		$(d.createElement('img')).attr('src', path).on('load', function () {
			imageCount++;
			
			if (imageCount == imageLength) {
				$(btnStart).html('Start').on('click', function () {
					$(boxOverlay).empty();
					
					$(w).on('keydown', function (e) {
						if (e.which == 32) {
							e.preventDefault();
						}
					}).on('keyup', function (e) {
						if (e.which == 32) {
							scriptNext();
						}
					});
					
					scriptNext();
				}).removeAttr('disabled');
			}
			else {
				$(btnStart).html('Loading ' + imageCount + '/' + imageLength + ' images...');
			}
		}).appendTo(preload);
	}
	
	for (var i=0; i<s.length; i++) {
		if (s[i].id) {
			scriptIds[s[i].id] = i;
		}
	}
	
	function scriptNext () {
		var copyScriptDefaults = $.extend({}, scriptDefaults),
			currentScript = $.extend(copyScriptDefaults, s[scriptPosition]);
		
		if (currentScript.reset) {
			scriptPosition = 0;
			
			flags = {};
			
			currentScript = $.extend(copyScriptDefaults, s[0]);
		}
		
		if (currentScript.before) {
			var nextId = currentScript.before(flags);
			
			if (nextId != 0) {
				scriptPosition = scriptIds[nextId];
				scriptNext();
				return;
			}
		}
		
		if (currentScript.choice) {
			$(answers).add(boxText).empty();
			
			for (var i=0; i<currentScript.answer.length; i++) {
				var li = $(d.createElement('li')),
					a = $(d.createElement('a'));
				
				$(a).html(currentScript.answer[i]).attr({
					'href': 'javascript:void(0)',
					'data-result': JSON.stringify(currentScript.result[i])
				}).on('click', function () {
					var nextObject = JSON.parse($(this).attr('data-result'));
				
					scriptPosition = scriptIds[nextObject[0]];
					
					if (nextObject[1]) {
						if (!(flags.hasOwnProperty(nextObject[1]))) {
							flags[nextObject[1]] = 0;
						}
						
						flags[nextObject[1]]++;
					}
					
					scriptNext();
				}).appendTo(li).parent().appendTo(answers);;
			}
			
			$(answers).fadeIn();
		}
		else {
			$(answers).fadeOut();
			
			if (currentScript.background) {
				var cssStyle;
				
				if (currentScript.background == 'none') {
					cssStyle = {
						'background-color': 'transparent',
						'background-image': 'none'
					};
				}
				else if (currentScript.background.charAt(0) == '#') {
					cssStyle = {
						'background-color': currentScript.background,
						'background-image': 'none'
					};
				}
				else {
					cssStyle = {
						'background-color': 'transparent',
						'background-image': 'url("' + imageProcessed[currentScript.background] + '")'
					};
				}
				
				$(boxOverlay).hide().css(cssStyle).fadeIn(function () {
					$(box).css(cssStyle);
					$(boxOverlay).hide();
				});
			}
			
			if (currentScript.left) {
				if (currentScript.left == 'none') {
					$(imgLeft).fadeOut();
				}
				else {
					$(imgLeft).hide().css('background-image', 'url("' + imageProcessed[currentScript.left] + '")').fadeIn();
				}
			}
			
			if (currentScript.center) {
				if (currentScript.center == 'none') {
					$(imgCenter).fadeOut();
				}
				else {
					$(imgCenter).hide().css('background-image', 'url("' + imageProcessed[currentScript.center] + '")').fadeIn();
				}
			}
			
			if (currentScript.right) {
				if (currentScript.right == 'none') {
					$(imgRight).fadeOut();
				}
				else {
					$(imgRight).hide().css('background-image', 'url("' + imageProcessed[currentScript.right] + '")').fadeIn();
				}
			}
			
			if (!currentScript.append) {
				if (currentScript.speaker) {
					var color = speakerColor.hasOwnProperty(currentScript.speaker) ? speakerColor[currentScript.speaker] : 'fff';
					
					$(boxText).empty().html(
						'<h3 style="color:#' + color + '">' + currentScript.speaker + '</h3>' + currentScript.text
					);
				}
				else {
					$(boxText).empty().html(currentScript.text);
				}
			}
			else {
				$(boxText).html(function (index, str) {
					return str + '<br>' + currentScript.text;
				});
			}
			
			if (currentScript.jump) {
				scriptPosition = scriptIds[currentScript.jump];
			}
			else {
				scriptPosition++;
			}
		}
	}
})(document, window, script);
