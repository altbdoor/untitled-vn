/*
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
*/

var script = [
{
	background: 'static',
	text: 'It was a long story... to begin with.'
},{
	text: 'But to cut things short, I have to move from Japan to Malaysia, to stay with my uncle\'s family.'
},{
	text: 'Dad, has been taking care of me since I my mom passed away when I was a kid.'
},{
	text: 'However, dad has suffered a huge loss in a business investment, and had to ask my uncle to take care of me for the moment.'
},{
	text: 'As I look forward to staying with my uncle\'s family...'
},{
	background: 'inplane',
	text: 'I am in a plane, set for Malaysia, where I will be starting a new life with my uncle\'s family.'
},{
	text: 'Uncle Ichiro has been a close relative to my dad. Hence, he has decided to take care of me.'
},{
	text: 'Moving from Japan to Malaysia... It will definitely be a new experience for me.'
},{
	text: 'As I was busy with my thoughts, I felt a light tap on my shoulder.'
},{
	center: 'stewardess',
	speaker: 'Stewardess',
	text: 'Sir, we are about to land soon. Please fasten your seat belt.'
},{
	speaker: 'Me',
	text: 'Oh, sorry. I will get to it now.'
},{
	text: 'I fumbled around with the seat belt for quite a while before getting it right.'
},{
	text: 'Seeing that I was all done, the stewardess moved on to remind other passengers.'
},{
	center: 'none',
	text: 'Seeing that we are about to land soon, I took a glance at the window...'
},{
	background: 'planeview',
	text: 'The majestic Kuala Lumpur International Airport...'
},{
	append: true,
	text: 'And gee, with lots and lots of palm trees.'
},{
	text: 'I wonder if Uncle Ichiro would already be at the airport, waiting for me.'
},{
	text: 'Hope I didn\'t keep him waiting for too long.'
},{
	background: 'airport',
	text: 'As the people pour out of the plane, I could see how big KLIA is.'
},{
	append: true,
	text: 'For the second time.'
},{
	text: 'I have been here for a holiday with Uncle Ichiro. But I was still quite small then. Hence, I could not remember much.'
},{
	text: 'Before I could further analyze the airport, I could hear my uncle\'s voice.'
},{
	left: 'uncle',
	speaker: 'Uncle Ichiro',
	text: 'How was the flight? By god, it sure took you long.'
},{
	speaker: 'Me',
	text: 'Yeah, sorry. There was some technical problems when landing. The flight was tiring.'
},{
	speaker: 'Me',
	text: 'Eh, just you alone?'
},{
	speaker: 'Uncle Ichiro',
	text: 'Heh no. Your lovely aunt and niece is waiting somewhere else. You know... ladies.'
},{
	speaker: 'Uncle Ichiro',
	text: 'I hope you are looking forward to staying with us!'
},{
	speaker: 'Me',
	text: 'I sure do.'
},{
	text: 'Suddenly, Uncle Ichiro holds me close to him.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Hey, I know that... all this problems with your dad and all... It ain\'t easy for you to handle alone.'
},{
	speaker: 'Uncle Ichiro',
	text: 'I can\'t replace him, that\'s for sure. But if you ever need someone to... you know, talk to, I\'m always here for you.'
},{
	text: 'I was taken aback by this. It feels good to know you have someone in this new world.'
},{
	speaker: 'Me',
	text: 'Thanks, uncle. Thank you very much.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Good to know. Now, let\'s go get the ladies, and head back to your new home!'
},{
	left: 'none',
	text: 'Both of us strode through the airport, as I look forward to staying in this new country I\'ll call home from now on.'
},{
	background: 'highway',
	text: 'Uncle Ichiro drove his Proton Prevé away from the airport, and into the highway.'
},{
	text: 'Seems like uncle is a bit unhappy as we made past another toll.'
},{
	left: 'uncle',
	speaker: 'Uncle Ichiro',
	text: 'God damned government ain\'t lowering that damned tolls since forever.'
},{
	speaker: 'Uncle Ichiro',
	text: 'I swear to god, there be this revolution this May. Smack the beeswax out of the people.'
},{
	right: 'aunt',
	speaker: 'Aunt Suzune',
	text: 'Oh dear, mind your words. We have children on board.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Sixteen ain\'t children, darling. They\'re adult enough to handle things on their own.'
},{
	speaker: 'Aunt Suzune',
	text: 'You\'d not want your daughter to learn how you speak, no?'
},{
	speaker: 'Uncle Ichiro',
	text: 'That, uh... maybe.'
},{
	left: 'none',
	right: 'none',
	text: 'Speaking of which... uncle and aunt had a daughter named Yuno. She\'s my nephew, technically.'
},{
	text: 'Long story short, Uncle Ichiro is the illegitimate brother to my father.'
},{
	text: 'So, nephew, technically. But...'
},{
	center: 'dan',
	text: 'She has been quiet all this while, with some obligatory responses to her parents and greetings to me.'
},{
	text: 'Should I try to start a conversation...?'
},{
	choice: true,
	answer: ['Try to start a conversation.', 'Leave her alone.'],
	result: [['yuno-conversation-start', 'YunoHeart'], ['yuno-conversation-leave', '']]
},{
	id: 'yuno-conversation-start',
	text: 'Seeing how she is reading a book, I might as well use that as to start a conversation.'
},{
	speaker: 'Me',
	text: 'Hey Yuno, what are you reading?'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	speaker: 'Yuno',
	text: '...'
},{
	speaker: 'Yuno',
	text: 'Hannibal Rising.'
},{
	text: 'I was surprised she picked up a book like this, but then again... Who am I to judge her?'
},{
	speaker: 'Me',
	text: 'Was it that story about that cannibal man out to avenge his brother?'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	speaker: 'Yuno',
	text: 'Sister'
},{
	text: 'She sure gives short replies.'
},{
	speaker: 'Me',
	text: 'Ah, sorry I got that wrong. I have only heard about it from my friends. Could you tell me more about it?'
},{
	speaker: 'Yuno',
	text: 'You might not like it.'
},{
	text: 'Yes. Her first long answer. Well, somewhat. An improvement.'
},{
	speaker: 'Me',
	text: 'Won\'t know til we try.'
},{
	center: 'none',
	text: 'The rest of the journey was an enlightenment on formaldehyde and delicious body parts.',
	jump: 'yuno-conversation-merge'
},{
	id: 'yuno-conversation-leave',
	center: 'none',
	text: 'Well, I should probably leave her alone...'
},{
	text: 'I listened to bits of conversation from uncle and aunt, while Yuno continues to bore a hole through the book.'
},{
	text: 'Wasn\'t long before I felt tired and dozed off.'
},{
	id: 'yuno-conversation-merge',
	background: 'home',
	text: 'We finally reached home after what seemed to be hours.'
},{
	center: 'uncle',
	speaker: 'Uncle Ichiro',
	text: 'Ah! Home at last.'
},{
	speaker: 'Uncle Ichiro',
	text: 'This shall be your new home from now on, boy.'
},{
	text: 'A modest two-storey terrace house, it looks comfortable and cosy.'
},{
	text: 'But Yuno hurried away into her room as soon as we arrived.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Well, dinner should be ready in a moment. Let\'s get to your room and start unpacking.'
},{
	center: 'none',
	text: 'As we move upstairs, I walked past Yuno\'s room.'
},{
	text: 'I wonder why is she so quiet.'
},{
	background: '#000',
	text: 'As me and uncle get busy in my new room, aunt prepared dinner for all of us.'
},{
	append: true,
	text: 'I wonder if Yuno did get out of her room to help aunt with the cooking.'
},{
	text: 'Uncle said she has some problem socializing, but it was not serious.'
},{
	append: true,
	text: 'At least she is not causing any problems around.'
},{
	text: 'We had dinner soon, and the atmosphere was the same,'
},{
	append: true,
	text: 'with uncle and aunt chatting away, while Yuno quietly finishes her dinner.'
},{
	text: 'After that, its pretty much night time.'
},{
	append: true,
	text: 'I was still tired from the long trip, so I slept quite soundly.'
},{
	text: ''
},{
	background: 'home',
	text: 'It has been a few days since I came over to Malaysia. Aunt Suzune has made arrangements for me to be enrolled into a school nearby.'
},{
	center: 'aunt',
	speaker: 'Aunt Suzune',
	text: 'Education is very important nowadays. Needless to say, we will take care of your education too.'
},{
	speaker: 'Aunt Suzune',
	text: 'Well, it is about time. Are you ready to go to the school?'
},{
	speaker: 'Me',
	text: 'What about Yuno?'
},{
	speaker: 'Aunt Suzune',
	text: 'Oh she always leaves for school in the mornings. Much earlier than you.'
},{
	speaker: 'Me',
	text: 'I see...'
},{
	text: 'I had somewhat hoped to walked with her to school.'
},{
	text: 'To get to know her more...'
},{
	speaker: 'Aunt Suzune',
	text: 'Well, shall we?'
},{
	center: 'none',
	text: 'I was snapped from my thoughts. I nodded and headed into the car with Aunt Suzune.'
},{
	background: 'school',
	text: 'I was quickly introduced to my class teacher, who will be teaching Maths for the class.'
},{
	text: 'Aunt Suzune had a couple of discussions with the class teacher before she left.'
},{
	center: 'aunt',
	speaker: 'Aunt Suzune',
	text: 'Well, behave yourself then. See you in a while.'
},{
	center: 'none',
	text: 'With that, Aunt Suzune left me with the class teacher.'
},{
	background: 'classroom',
	speaker: 'Me',
	text: 'Pleased to meet you all.'
},{
	text: 'I was whisked to my class, and introduced to everyone.'
},{
	text: 'The fact that I was from Japan surprised many of them.'
},{
	center: 'teacher',
	speaker: 'Teacher',
	text: 'Alright students. Settle down. Class is about to begin.'
},{
	center: 'none',
	text: 'I head out to an empty desk at the back of the classroom.'
},{
	text: 'A student sitting behind where I am supposed to sit waved at me.'
},{
	text: 'I waved back with a smile before settling down.'
},{
	background: '#000',
	text: '...'
},{
	background: 'classroom',
	text: 'I was interruped with a tap on my shoulder.'
},{
	text: 'It seems to be from the student behind, but the class is still going on.'
},{
	text: 'Should I turn around...?'
},{
	id: 'brian-tap-choice',
	choice: true,
	answer: ['Turn around to see what he\'s up to.', 'Ignore him.'],
	result: [['brian-tap-respond', ''], ['brian-tap-ignore', '']]
},{
	id: 'brian-tap-ignore',
	before: function (flags) {
		if (!(flags.hasOwnProperty('BrianTap'))) {
			flags['BrianTap'] = 0;
		}
		
		if (flags['BrianTap'] == 2) {
			return 'brian-tap-giveup';
		}
		else {
			flags['BrianTap']++;
			return 'brian-tap-continue';
		}
	},
	text: 'I decided to ignore him. It is best to pay attention during a lesson.'
},{
	id: 'brian-tap-continue',
	text: 'However, he does not seem to give up.'
},{
	text: 'Again, he tapped on my shoulder, seeking my attention.',
	jump: 'brian-tap-choice'
},{
	id: 'brian-tap-giveup',
	text: '...'
},{
	append: true,
	text: '...'
},{
	append: true,
	text: '...'
},{
	text: 'He seems to have given up on getting my attention.'
},{
	text: 'Regardless, I continued my focus on the lesson.',
	jump: 'brian-tap-merge'
},{
	id: 'brian-tap-respond',
	before: function (flags) {
		flags['BrianTap'] = -1;
		return 0;
	},
	speaker: 'Me',
	text: 'Yes? How may I help you?'
},{
	left: 'bff',
	speaker: 'Brian',
	text: 'Hey there, I\'m Brian. Nice to meet you.'
},{
	append: true,
	speaker: 'Brian',
	text: 'Sorry to bother you, but are you free during recess?'
},{
	speaker: 'Me',
	text: 'Yeah. What for?'
},{
	speaker: 'Brian',
	text: 'Heh, I\'ll introduce the class president to you. She\'s out on some errands now.'
},{
	speaker: 'Me',
	text: 'Sounds good. Thanks.'
},{
	right: 'teacher',
	speaker: 'Teacher',
	text: 'Gentlemen at the back. Would appreciate if you would stop the talking.'
},{
	speaker: 'Brian & Me',
	text: 'Sorry sir!'
},{
	right: 'none',
	left: 'none',
	text: 'And just like that, I seemed to have made my first friend in the class.'
},{
	text: 'The class goes on as usual, with different subject and different teachers.'
},{
	text: 'I began to wonder how would the class president look like.'
},{
	id: 'brian-tap-merge',
	background: '#000',
	text: '...'
},{
	background: 'classroom',
	text: 'Ahh, first day of class sure is tiring... I\'ll probably need to make notes on each subjects.'
},{
	left: 'bff',
	speaker: 'Brian',
	text: 'Hey!'
},{
	before: function (flags) {
		if (flags['BrianTap'] == -1) {
			return 'brian-tap-noextra';
		}
		else {
			return 0;
		}
	},
	speaker: 'Brian',
	text: 'Well you sure are deeply focused in classes... Anyways!'
},{
	id: 'brian-tap-noextra',
	speaker: 'Brian',
	text: 'Welcome to our class, and Malaysia, of course. How do you find Malaysia?'
},{
	speaker: 'Me',
	text: 'Well, it is different than where I come from, but I\'m adapting well.'
},{
	speaker: 'Brian',
	text: 'Good to know! Ah, I should introduce you to the class president here.'
},{
	speaker: 'Brian',
	text: 'In case you have any problems, you can talk to her.'
},{
	speaker: 'Brian',
	text: 'Psst. She\'s single too.'
},{
	text: 'I\'m not sure what the last piece of information was for, but I nodded in response.'
},{
	text: 'Then, ...'
},{
	right: 'tsun',
	text: '!!!'
},{
	speaker: 'Laura',
	text: 'HELLOOOOOOOOOO, NEW TRANSFER STUDENT!!!'
},{
	text: 'She is literally screaming as she hits my table hardly.'
},{
	text: 'I was taken aback for a moment, but quickly regained my momentum in front of this...'
},{
	append: true,
	text: 'healthy lady.'
},{
	speaker: 'Me',
	text: 'Hello to you too.'
},{
	speaker: 'Brian',
	text: 'Oh Laura, you sure scared us with an introduction like that.'
},{
	speaker: 'Laura',
	text: 'Well can\'t blame me. This is who I am.'
},{
	speaker: 'Laura',
	text: 'Oh, I\'m Laura by the way. Nice to meet you. I hope you find our class a pleasant one.'
},{
	speaker: 'Me',
	text: 'Haha, I will.'
},{
	speaker: 'Brian',
	text: 'If you need a tour around the school grounds, you can ask Laura.'
},{
	text: 'Yeah, a tour is what I will need, to get acquainted here.'
},{
	speaker: 'Laura',
	text: 'That\'s a nice idea, Brian!'
},{
	speaker: 'Laura',
	text: 'We still have some time before the recess ends.'
},{
	speaker: 'Laura',
	text: 'How about now?'
},{
	speaker: 'Brian & Me',
	text: 'Eh? NOW?'
},{
	speaker: 'Laura',
	text: 'Yes, NOW!'
},{
	text: 'Should I take the tour now...?'
},{
	choice: true,
	answer: ['Take up the tour.', 'Pass on the tour.'],
	result: [['laura-tour-accept', 'LauraHeart'], ['laura-tour-pass', '']]
},{
	id: 'laura-tour-accept',
	before: function (flags) {
		flags['LauraTour'] = 1;
		return 0;
	},
	speaker: 'Me',
	text: 'Well let\'s go, Laura.'
},{
	speaker: 'Laura',
	text: 'That\'s the spirit! Let\'s go!'
},{
	speaker: 'Brian',
	text: 'Just make sure you two come back before the next class.'
},{
	background: '#000',
	left: 'none',
	right: 'none',
	text: 'Laura grabs me by the hand, and zips out of the classroom.'
},{
	text: 'We went past a number of school facilites.'
},{
	append: true,
	text: 'The science laboratory,'
},{
	append: true,
	text: 'the medical room'
},{
	append: true,
	text: 'and many more.'
},{
	text: 'The school seems to be lacking in sports facilities though.'
},{
	center: 'tsun',
	text: 'All throughout the tour, Laura grabs my hand tightly,'
},{
	append: true,
	text: 'as she shows off her knowledge on school grounds enthusiastically.'
},{
	text: '...'
},{
	append: true,
	text: 'Laura\'s hand feels soft.'
},{
	center: 'none',
	text: 'Was not long before we headed back to class, just in time for the next class.',
	jump: 'laura-tour-merge'
},{
	id: 'laura-tour-pass',
	speaker: 'Me',
	text: 'I\'m afraid I\'ll have to pass. The next class is about to start soon after all.'
},{
	speaker: 'Brian',
	text: 'Yeah, Laura. Give him a break. He\'ll take the tour when he\'s free.'
},{
	speaker: 'Laura',
	text: '...'
},{
	speaker: 'Laura',
	text: 'Okay then. Next time it is!'
},{
	text: 'We chatted for quite some time, with Laura showing off her knowledge on school grounds enthusiastically.'
},{
	text: 'While Brian constantly replies Laura with a hint of sarcasm.'
},{
	text: 'Its like, I\'m watching a comedy pair in front of me.'
},{
	id: 'laura-tour-merge',
	background: '#000',
	left: 'none',
	right: 'none',
	text: '...'
},{
	background: 'school',
	text: 'The class ended for the day, as the teacher pile up on the mountain of homework I already have.'
},{
	text: 'Me, Brian and Laura walked out of the school together before saying our goodbyes.'
},{
	left: 'bff',
	right: 'tsun',
	speaker: 'Brian',
	text: 'Well, see you tomorrow then.'
},{
	speaker: 'Laura',
	text: '... How will you get back home?'
},{
	speaker: 'Me',
	text: 'By foot?'
},{
	speaker: 'Brian',
	text: 'But you just enrolled here.'
},{
	speaker: 'Me',
	text: 'Hey, I have been here for quite a while before enrolling into the school.'
},{
	speaker: 'Me',
	text: 'So I know my ways around here.'
},{
	speaker: 'Brian',
	text: 'Ah, so I see...'
},{
	speaker: 'Laura',
	text: 'You have to becareful around here. Malaysia is not as safe as it looks.'
},{
	speaker: 'Brian',
	text: 'That was somewhat harsh, but true.'
},{
	right: 'none',
	speaker: 'Laura',
	text: 'Just saying out what\'s right. See you guys!'
},{
	left: 'none',
	speaker: 'Brian',
	text: 'Well, see you tomorrow.'
},{
	text: 'After bidding them goodbye, I proceed to walk back to my home.'
},{
	background: 'street',
	text: 'On my way home...'
},{
	center: 'dan',
	text: 'I could see Yuno walking alone on the street.'
},{
	text: 'Well, was not much of a surprise, considering how we stay in the same house.'
},{
	text: 'She seems to be alone. Wonder if she could use a walking partner.'
},{
	text: 'Should I try to approach her...?'
},{
	choice: true,
	answer: ['Approach her.', 'Do not approach her.'],
	result: [['yuno-approach-yes', 'YunoHeart'], ['yuno-approach-no', '']]
},{
	id: 'yuno-approach-yes',
	before: function (flags) {
		flags['YunoApproach'] = 1;
		return 0;
	},
	speaker: 'Me',
	text: 'Hey Yuno, wait up.'
},{
	text: 'I ran a little to catch up with her.'
},{
	text: 'She notices me...'
},{
	append: true,
	text: 'I think she did increased her pace a little.'
},{
	speaker: 'Me',
	text: 'Hey Yuno.'
},{
	speaker: 'Yuno',
	text: '... Hi.'
},{
	text: 'Still as quiet as ever...'
},{
	text: 'The silence took over for a few moments,'
},{
	append: true,
	text: 'before Yuno spoke.'
},{
	speaker: 'Yuno',
	text: 'How did you find your first day at the school?'
},{
	speaker: 'Me',
	text: 'Well, it is school after all. Rather similar to the one I\'ve been into in Japan.'
},{
	speaker: 'Yuno',
	text: 'I see.'
},{
	speaker: 'Me',
	text: '...'
},{
	speaker: 'Yuno',
	text: '...'
},{
	speaker: 'Me',
	text: '...'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: 'Why are you following me?'
},{
	speaker: 'Me',
	text: '...'
},{
	append: true,
	text: 'We live in the same house, Yuno.'
},{
	text: 'She seemed to notice her mistake in her question, and blushed a little.'
},{
	text: 'She was with her usual single replies throughout the walk, with me doing most of the talking.'
},{
	center: 'none',
	text: 'But I did feel that we are getting slightly closer.'
},{
	append: true,
	text: 'Just slightly.',
	jump: 'yuno-approach-merge'
},{
	id: 'yuno-approach-no',
	center: 'none',
	text: 'Since she\'s well on her own...'
},{
	text: 'I slowed down my pace by a couple of steps, allowing her to walk ahead of me.'
},{
	text: 'She sure walks fast for one. I wonder if she is athletic.'
},{
	id: 'yuno-approach-merge',
	background: '#000',
	text: '...'
},{
	background: 'home',
	speaker: 'Me',
	text: 'I\'m home!'
},{
	right: 'aunt',
	speaker: 'Aunt Suzune',
	text: 'Welcome home!'
},{
	before: function (flags) {
		if (flags.hasOwnProperty('YunoApproach') && flags['YunoApproach'] == 1) {
			return 0;
		}
		else {
			return 'yuno-approach-noextra';
		}
	},
	left: 'dan',
	speaker: 'Aunt Suzune',
	text: 'Oh Yuno is with you too. You two sure have bonded well.'
},{
	speaker: 'Yuno',
	text: 'M-mom...'
},{
	left: 'none',
	text: 'Yuno seemed to blush a little, and hurried over to her room.',
	jump: 'yuno-approach-extra-merge'
},{
	id: 'yuno-approach-noextra',
	speaker: 'Me',
	text: 'Has Yuno arrived?'
},{
	speaker: 'Aunt Suzune',
	text: 'Why yes, Yuno was much earlier than you are.'
},{
	speaker: 'Me',
	text: 'She sure walks fast. Haha.'
},{
	id: 'yuno-approach-extra-merge',
	speaker: 'Aunt Suzune',
	text: 'Oh well. The dinner will be ready soon.'
},{
	right: 'none',
	speaker: 'Me',
	text: 'Okay.'
},{
	background: '#000',
	text: '...'
},{
	background: 'home',
	text: 'We were having dinner as usual, but of course, uncle and aunt are busy questioning me about school.'
},{
	left: 'uncle',
	right: 'aunt',
	speaker: 'Uncle Ichiro',
	text: 'So, how was your day at school?'
},{
	choice: true,
	answer: ['Good.', 'Fine.', 'Bad.'],
	result: [['dinner-question-good', ''], ['dinner-question-fine', ''], ['dinner-question-bad', '']]
},{
	id: 'dinner-question-good',
	speaker: 'Uncle Ichiro',
	text: 'Glad to hear that, boy!'
},{
	speaker: 'Uncle Ichiro',
	text: 'Made any friends? How were the ladies there?'
},{
	speaker: 'Aunt Suzune',
	text: 'Oh you.'
},{
	speaker: 'Uncle Ichiro',
	text: 'I am just asking. Normal male instincts, darling.'
},{
	speaker: 'Me',
	text: 'I got to know Laura, class president.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Was she...'
},{
	append: true,
	text: '...'
},{
	speaker: 'Uncle Ichiro',
	text: '<small>Delicious?</small>'
},{
	speaker: 'Aunt Suzune',
	text: 'Darling!'
},{
	speaker: 'Uncle Ichiro',
	text: 'Oh hohoho. Sorry I asked. Just kidding, dear. Just kidding.'
},{
	speaker: 'Aunt Suzune',
	text: 'Well I am glad you got some friends with you now.'
},{
	speaker: 'Aunt Suzune',
	text: 'Just make sure you don\'t end up to be a womanizer like what your uncle is.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Objection! I am merely appreciating the beauty of women!'
},{
	speaker: 'Aunt Suzune',
	text: 'And that\'s what you\'d say every time.'
},{
	text: 'I laughed at this charade between uncle and aunt.'
},{
	text: 'Yuno seems to pay attention to the talk as well, but she did not respond at all.',
	jump: 'dinner-question-merge'
},{
	id: 'dinner-question-fine',
	speaker: 'Uncle Ichiro',
	text: 'Good to know that.'
},{
	speaker: 'Aunt Suzune',
	text: 'Did you made any friends?'
},{
	speaker: 'Me',
	text: 'Yeah, I got to know Laura, the class president.'
},{
	speaker: 'Me',
	text: 'And Brian, a student in the class.'
},{
	speaker: 'Aunt Suzune',
	text: 'Glad to hear that you are blending well with the new environment.'
},{
	text: 'Uncle and aunt continue talking to one another.'
},{
	text: 'While me and Yuno quietly finished our dinner.',
	jump: 'dinner-question-merge'
},{
	id: 'dinner-question-bad',
	speaker: 'Uncle Ichiro',
	text: '...'
},{
	append: true,
	text: 'What?'
},{
	speaker: 'Me',
	text: 'No, no. Don\'t get me wrong. Everyone was nice.'
},{
	speaker: 'Me',
	text: 'It\'s just that the classes are boring.'
},{
	text: 'Uncle and aunt seemed to heave a sigh of relief.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Damn son, you got me there for a moment.'
},{
	speaker: 'Aunt Suzune',
	text: 'Bullying cases are rampant these days.'
},{
	speaker: 'Aunt Suzune',
	text: 'I was afraid he\'d not fit in well.'
},{
	speaker: 'Me',
	text: 'Nothing like that happened. I did made a few friends.'
},{
	speaker: 'Uncle Ichiro',
	text: 'Haha. Oh wow, darling, I guess we need not worry about this child.'
},{
	speaker: 'Aunt Suzune',
	text: 'I believe so too.'
},{
	text: 'Uncle and aunt continue their usual discussion on other matters.'
},{
	text: 'They did pose some questions to Yuno, but its still the same single replies from Yuno.'
},{
	id: 'dinner-question-merge',
	left: 'none',
	right: 'none',
	background: '#000',
	text: '...'
},{
	background: 'home',
	speaker: 'Me',
	text: 'Ah the food was good.'
},{
	text: 'I mutter to myself as I make my way to my room.'
},{
	before: function (flags) {
		if (flags.hasOwnProperty('YunoApproach') && flags['YunoApproach'] == 1) {
			return 0;
		}
		else {
			return 'yuno-afterdinner-noextra';
		}
	},
	text: 'But...'
},{
	center: 'dan',
	text: 'Yuno stopped me quite suddenly.'
},{
	speaker: 'Me',
	text: '... Yuno?'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: '...'
},{
	append: true,
	text: 'Why are you being so kind to me?'
},{
	speaker: 'Me',
	text: '...'
},{
	append: true,
	text: 'Ehhhh?!'
},{
	text: 'How am I supposed to answer this...?'
},{
	choice: true,
	answer: ['Because I want to help you.', 'Was I ever kind to you?'],
	result: [['yuno-afterdinner-help', ''], ['yuno-afterdinner-nohelp', '']]
},{
	id: 'yuno-afterdinner-nohelp',
	speaker: 'Me',
	text: 'No... I am... not being kind in any way to you.'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: 'I-I see...'
},{
	speaker: 'Yuno',
	text: 'Goodnight.'
},{
	center: 'none',
	text: '...'
},{
	append: true,
	text: 'What was that for?!'
},{
	text: 'Oh well. Regardless, I\'ll sleep for the night.',
	jump: 'yuno-afterdinner-merge'
},{
	id: 'yuno-afterdinner-noextra',
	text: 'Guess I\'ll hit the sack.',
	jump: 'yuno-afterdinner-merge'
},{
	id: 'yuno-afterdinner-help',
	speaker: 'Me',
	text: 'Well... you see. I wanted to help you.'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: 'Help... me?'
},{
	append: true,
	text: 'I don\'t understand.'
},{
	speaker: 'Yuno',
	text: '... I am not in need of help.'
},{
	text: 'Well...'
},{
	choice: true,
	answer: ['You are rather quiet...', 'Yeah, you don\'t need help.'],
	result: [['yuno-afterdinner-help2', ''], ['yuno-afterdinner-nohelp2', '']]
},{
	id: 'yuno-afterdinner-nohelp2',
	speaker: 'Me',
	text: 'Well... yeah. You don\'t need help of any sorts.'
},{
	speaker: 'Yuno',
	text: '...'
},{
	speaker: 'Yuno',
	text: 'Goodnight.'
},{
	center: 'none',
	text: 'What is up with Yuno?',
	jump: 'yuno-afterdinner-merge'
},{
	id: 'yuno-afterdinner-help2',
	speaker: 'Me',
	text: 'You see... You are being rather quiet.'
},{
	speaker: 'Yuno',
	text: '... That\'s who I am.'
},{
	speaker: 'Yuno',
	text: 'Y-you got a p-p-problem with that?'
},{
	text: 'Yuno sure placed a lot of effort to say that out.'
},{
	text: 'How should I respond...?'
},{
	choice: true,
	answer: ['Yes, I do have a problem.', 'Nope. Stay who you are.'],
	result: [['yuno-afterdinner-help3', 'YunoHeart'], ['yuno-afterdinner-nohelp3', '']]
},{
	id: 'yuno-afterdinner-nohelp3',
	speaker: 'Me',
	text: 'Well... no. I guess you can stay who you are...'
},{
	speaker: 'Me',
	text: 'As long as you\'re comfortable with yourself, I guess.'
},{
	text: 'She was silent for quite a while...'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: '...'
},{
	append: true,
	text: '...'
},{
	center: 'none',
	text: 'Then she just leaves.'
},{
	text: '... Guess I\'ll go sleep then.',
	jump: 'yuno-afterdinner-merge'
},{
	id: 'yuno-afterdinner-help3',
	speaker: 'Me',
	text: 'Yuno... you might not realize it yourself.'
},{
	speaker: 'Me',
	text: 'But you are being too... anti-social. You know?'
},{
	speaker: 'Me',
	text: 'You\'re always being quiet, hiding in your room.'
},{
	speaker: 'Me',
	text: 'I want you to... stand out more. Talk a little more. Socialize a little more.'
},{
	speaker: 'Yuno',
	text: '...'
},{
	speaker: 'Me',
	text: 'And... I\'m not sure if its called being kind, but I hope to help you to socialize a little more.'
},{
	speaker: 'Me',
	text: 'If it is difficult to socialize with your friends, you can start with me.'
},{
	speaker: 'Yuno',
	text: '...'
},{
	speaker: 'Me',
	text: 'You are a good girl, Yuno.'
},{
	speaker: 'Me',
	text: 'But if you keep being quiet and all, people might not come to know how great you are.'
},{
	text: 'Yuno starts to tear up a little as I end my speech.'
},{
	speaker: 'Yuno',
	text: 'Y-you! I j-just...!'
},{
	speaker: 'Yuno',
	text: 'W... why are you being...'
},{
	append: true,
	text: 'so kind?'
},{
	text: 'Yuno hugs me quite suddenly, which surprised me.'
},{
	speaker: 'Me',
	text: 'Y-Yuno.'
},{
	text: 'Yuno starts to sob uncontrollably on my shoulder.'
},{
	text: 'I could feel her tears being absorbed by my shirt\'s fabric.'
},{
	text: 'Instinctively, I hugged her back and patted her head.'
},{
	text: 'I hope uncle or aunt didn\'t hear this. Else I could be wrongly accused of bullying Yuno.'
},{
	append: true,
	text: 'Or worse.'
},{
	text: 'I held her for quite some time before she stopped sobbing.'
},{
	text: 'To be honest, my arm\'s kinda stiff.'
},{
	speaker: 'Me',
	text: 'Y-you okay, Yuno?'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: 'I\'m fine now, thank you.'
},{
	text: 'She seems all better now.'
},{
	speaker: 'Me',
	text: 'Well, it\'s getting late... You should get some rest for tomorrow.'
},{
	speaker: 'Yuno',
	text: 'W-Wait...'
},{
	speaker: 'Me',
	text: '... Yes?'
},{
	speaker: 'Yuno',
	text: '...'
},{
	append: true,
	text: '...'
},{
	append: true,
	text: '...'
},{
	speaker: 'Yuno',
	text: 'Thank you.'
},{
	speaker: 'Me',
	text: 'Haha, don\'t mention it.'
},{
	center: 'none',
	background: '#000',
	text: 'Well, I sure got to know Yuno better.'
},{
	text: 'As I reminiscent about what just happened, I notice that Yuno is quite pretty too.'
},{
	text: 'Also, her soft plush breasts as she leaned against my body...'
},{
	text: '...'
},{
	text: 'Best to get some sleep.'
},{
	id: 'yuno-afterdinner-merge',
	background: '#000',
	text: '...'
},{
	background: 'classroom',
	text: 'Ah, another schooling day.'
},{
	text: 'I think Yuno has changed a bit...'
},{
	append: true,
	text: 'A little more friendly to people.'
},{
	append: true,
	text: 'Very little.'
},{
	left: 'bff',
	speaker: 'Brian',
	text: 'Hiya! What are you thinking about? Breasts?'
},{
	speaker: 'Me',
	text: 'W-What?!'
},{
	right: 'tsun',
	speaker: 'Laura',
	text: 'MORNING FELLAS!'
},{
	text: 'Laura being as energetic as usual, made her grand entrance.'
},{
	text: 'Do I reply her greeting...?'
},{
	choice: true,
	answer: ['Yes. Say hello to her.', 'No. Too tired...'],
	result: [['laura-hello-yes', 'LauraHeart'], ['laura-hello-no', '']]
},{
	id: 'laura-hello-yes',
	speaker: 'Me',
	text: 'Hi Laura!'
},{
	speaker: 'Laura',
	text: 'Hello to you too!'
},{
	speaker: 'Laura',
	text: 'Oh, you\'re in good spirits today!'
},{
	speaker: 'Laura',
	text: 'And oh, Brian. No perverted talking in the classroom, please.',
	jump: 'laura-hello-merge'
},{
	id: 'laura-hello-no',
	speaker: 'Laura',
	text: 'Brian, No perverted talking in the classroom, please.'
},{
	speaker: 'Brian',
	text: 'Heh. Okay, Miss President.'
},{
	id: 'laura-hello-merge',
	speaker: 'Laura',
	text: 'Speaking of which, I\'ll need help with preparing the science lab.'
},{
	before: function (flags) {
		if (flags.hasOwnProperty('LauraTour') && flags['LauraTour'] == 1) {
			return 'laura-sciencelab';
		}
		else {
			return 0;
		}
	},
	speaker: 'Laura',
	text: 'Since you don\'t know where the lab is...'
},{
	speaker: 'Laura',
	text: 'Brian, follow me!'
},{
	speaker: 'Brian',
	text: 'Hah? Me?'
},{
	append: true,
	text: 'But I\'m tired...'
},{
	speaker: 'Laura',
	text: 'No excuses! Let\'s go now!'
},{
	speaker: 'Brian',
	text: 'See you later...'
},{
	left: 'none',
	right: 'none',
	speaker: 'Me',
	text: 'Haha yeah. See you two later.',
	jump: 'laura-president-merge'
},{
	id: 'laura-sciencelab',
	speaker: 'Laura',
	text: 'Since you\'ve been given the tour, you should know where the lab is!'
},{
	speaker: 'Brian',
	text: 'Yes, yes. Get him to help you out!'
},{
	speaker: 'Me',
	text: '... Well, I am free.'
},{
	speaker: 'Laura',
	text: 'Good! Let\'s go then.'
},{
	right: 'none',
	text: 'As usual, she drags me by the hand.'
},{
	left: 'none',
	text: 'Good luck!'
},{
	background: 'sciencelab',
	center: 'tsun',
	speaker: 'Laura',
	text: 'Hmm... hmm...'
},{
	text: 'Laura hums a familiar tune as she works with a checklist.'
},{
	speaker: 'Me',
	text: 'So Laura, these beakers go here?'
},{
	speaker: 'Laura',
	text: 'Yes. I guess that\'s it.'
},{
	text: 'Laura heaves a sigh of relief and sits down on one of the stools.'
},{
	speaker: 'Laura',
	text: 'Hey.'
},{
	speaker: 'Me',
	text: '... Yes?'
},{
	speaker: 'Laura',
	text: 'Well... We\'ve known each other for quite some time...'
},{
	text: '...'
},{
	append: true,
	text: 'IS THIS A CONFESSION?'
},{
	speaker: 'Me',
	text: '... Eheh. Yeah, it has been awhile.'
},{
	speaker: 'Laura',
	text: 'I...'
},{
	append: true,
	text: 'want to know what you think of me...'
},{
	append: true,
	text: 'as the class president!'
},{
	text: '... Eh. EHHHHHHH?'
},{
	text: 'Oh so that\'s what it is... I let out a small laugh.'
},{
	speaker: 'Laura',
	text: 'W-What\'s so funny?!'
},{
	speaker: 'Me',
	text: 'Oh sorry. Didn\'t mean that... Well, as a class president...'
},{
	text: 'She has been...'
},{
	choice: true,
	answer: ['Wait... Why would you want to know?', 'You\'re good as the class president!', 'You\'re bad as the class president!'],
	result: [['laura-president-why', ''], ['laura-president-good', ''], ['laura-president-bad', '']]
},{
	id: 'laura-president-why',
	speaker: 'Me',
	text: 'Hold on... Why would you want to know about this?'
},{
	speaker: 'Laura',
	text: 'W-Well... I...'
},{
	speaker: 'Laura',
	text: 'Promise me you won\'t tell anyone about this!'
},{
	text: 'I nodded weakly.'
},{
	speaker: 'Laura',
	text: 'I\'m planning to... run for the school president...'
},{
	speaker: 'Laura',
	text: '...'
},{
	append: true,
	text: '...'
},{
	append: true,
	text: '...'
},{
	speaker: 'Laura',
	text: 'W-well? Now that you know why...'
},{
	speaker: 'Laura',
	text: 'What do you think of me as... the class president...?'
},{
	text: 'Well... how do I say this...'
},{
	text: 'She has been...'
},{
	id: 'laura-president-again',
	choice: true,
	answer: ['You\'re good as the class president!', 'You\'re bad as the class president!'],
	result: [['laura-president-good', ''], ['laura-president-bad', '']]
},{
	id: 'laura-president-good',
	speaker: 'Me',
	text: 'You\'re doing great.'
},{
	speaker: 'Laura',
	text: '...'
},{
	append: true,
	text: 'R-really?'
},{
	speaker: 'Me',
	text: 'Yes, you are.'
},{
	text: 'Laura\'s starting to blush...'
},{
	speaker: 'Laura',
	text: 'Then...'
},{
	append: true,
	text: 'w-what do you...'
},{
	append: true,
	text: 'think of m-me...'
},{
	append: true,
	text: 'personally...?'
},{
	text: '... I... what?'
},{
	speaker: 'Me',
	text: 'I\'m sorry... what?'
},{
	speaker: 'Laura',
	text: '...'
},{
	speaker: 'Laura',
	text: 'I-I\'M ASKING YOU IF YOU FIND ME A-ATTRACTIVE!'
},{
	text: '!!!'
},{
	text: 'Before I could react, she starts to grab me by my neck...!'
},{
	speaker: 'Me',
	text: 'Woah, Laura! Relax!'
},{
	text: 'To say she\'s attractive or not...'
},{
	choice: true,
	answer: ['You\'re attractive!', 'You\'re... not so attractive.'],
	result: [['laura-president-attractive', 'LauraHeart'], ['laura-president-unattractive', '']]
},{
	id: 'laura-president-attractive',
	speaker: 'Me',
	text: 'Y-You\'re attractive!'
},{
	text: 'Well, I was just being honest...'
},{
	text: 'Truth be told, she is attractive, to a certain extent...'
},{
	text: 'I don\'t know what I should expect...'
},{
	speaker: 'Laura',
	text: '... Really?'
},{
	text: 'She seems surprised by my response.'
},{
	speaker: 'Me',
	text: 'Yes... I... think you\'re beautiful.'
},{
	text: 'Laura seems to pause for a moment...'
},{
	speaker: 'Laura',
	text: 'W-What are you saying?!'
},{
	text: 'I was taken aback for a moment...'
},{
	speaker: 'Me',
	text: 'Wha? I\'m saying you are BEAUTIFUL!'
},{
	text: '...'
},{
	speaker: 'Laura',
	text: 'Y-YOU ARE STUPID!'
},{
	center: 'none',
	speaker: 'Me',
	text: 'What are you...'
},{
	text: 'Before I could finish my sentence, Laura has already dashed out of the lab.'
},{
	text: 'Leaving me alone in the lab, dazed.'
},{
	text: 'I believe that was a pretty lame confession.'
},{
	append: true,
	text: 'Damn.',
	jump: 'laura-president-merge'
},{
	id: 'laura-president-unattractive',
	speaker: 'Me',
	text: 'I\'m sorry, but... y-you\'re... not so attractive.'
},{
	text: 'Well, its true... And I tried to keep it as... blunt as possible.'
},{
	text: 'But I could tell that this would not end well...'
},{
	speaker: 'Laura',
	text: 'AHAHAHAHAHA'
},{
	text: 'Yep. She\'s lost it.'
},{
	speaker: 'Me',
	text: 'L-Laura, calm down!'
},{
	speaker: 'Laura',
	text: 'Oh haha. No, you calm down. That was just a joke.'
},{
	speaker: 'Me',
	text: '... A joke?'
},{
	text: 'Laura is laughing so hard, she\'s clenching her stomach.'
},{
	speaker: 'Laura',
	text: 'Haha yeah. You really think I was serious?'
},{
	speaker: 'Me',
	text: 'Well... you do seem serious...'
},{
	text: 'Laura pats my back. More like smack.'
},{
	speaker: 'Laura',
	text: 'Well, sorry if I made you worry.'
},{
	speaker: 'Laura',
	text: 'Enough with this. Let\'s race back to the classroom!'
},{
	speaker: 'Laura',
	text: 'Last one\'s gotta treat the other an ice-cream!'
},{
	center: 'none',
	text: '... It\'s not like I could ever catch up with her.'
},{
	text: 'Although she said it was a joke...'
},{
	text: 'I\'m not sure if a tear from her eye was due to happiness'
},{
	append: true,
	text: 'or sadness.',
	jump: 'laura-president-merge'
},{
	id: 'laura-president-bad',
	speaker: 'Me',
	text: 'Well... as a class president... you\'re bad.'
},{
	speaker: 'Laura',
	text: '...'
},{
	speaker: 'Laura',
	text: 'Well,'
},{
	append: true,
	text: 'S-SORRY FOR ASKING!'
},{
	center: 'none',
	text: 'And just like that, Laura stormed off the lab.'
},{
	text: 'I wonder if I did say something wrong.'
},{
	id: 'laura-president-merge',
	background: '#000',
	text: '...'
},{
	background: 'home',
	text: 'Another few days has passed, and guess what?'
},{
	text: 'It\'s Valentine\'s Day tomorrow.'
},{
	text: 'Well, I should ask someone out...'
},{
	text: 'The question is... who?'
},{
	choice: true,
	answer: ['Yuno', 'Laura', 'Brian'],
	result: [['valentine-yuno', ''], ['valentine-laura', ''], ['valentine-brian', '']]
},{
	id: 'valentine-yuno',
	center: 'dan',
	speaker: 'Me',
	text: 'Yuno, mind if I talk to you for a moment.'
},{
	speaker: 'Yuno',
	text: '... Yes?'
},{
	speaker: 'Me',
	text: 'Just wanted to ask... are you free on Valentine\'s Day?'
},{
	speaker: 'Yuno',
	text: '...'
},{
	speaker: 'Me',
	text: 'Maybe we could go out for a dinner or movie or...'
},{
	speaker: 'Yuno',
	text: '...'
},{
	before: function (flags) {
		if (flags.hasOwnProperty('YunoHeart') && flags['YunoHeart'] == 3) {
			return 0;
		}
		else {
			return 'valentine-yuno-no';
		}		
	},
	append: true,
	text: '...'
},{
	append: true,
	text: '...'
},{
	speaker: 'Me',
	text: 'So...'
},{
	speaker: 'Yuno',
	text: 'I... I\'d love to...'
},{
	speaker: 'Me',
	text: 'So it\'s a date then.'
},{
	text: 'With a heavy tint of blush, she replied coyly.'
},{
	speaker: 'Yuno',
	text: 'Y-yes...',
	jump: 'valentine-happy'
},{
	id: 'valentine-yuno-no',
	append: true,
	text: 'I-I\'ve...'
},{
	speaker: 'Yuno',
	text: 'I already have plans... Sorry.'
},{
	speaker: 'Me',
	text: 'Ah, no sweat.'
},{
	speaker: 'Me',
	text: 'Enjoy yourself alright!',
	jump: 'valentine-brian'
},{
	id: 'valentine-laura',
	text: 'I guess I\'ll give her a call.'
},{
	speaker: 'Laura',
	text: 'Yes?'
},{
	text: 'I instantly recognized her voice.'
},{
	speaker: 'Me',
	text: 'Ah its me. I was just wondering if you are free on Valentine\'s Day.'
},{
	speaker: 'Me',
	text: 'If you don\'t mind, maybe we could...'
},{
	text: 'I gulped.'
},{
	speaker: 'Me',
	text: 'Go on a date?'
},{
	speaker: 'Laura',
	text: 'T-This is too sudden!'
},{
	speaker: 'Me',
	text: 'Sorry, I did not plan this earlier.'
},{
	before: function (flags) {
		if (flags.hasOwnProperty('LauraHeart') && flags['LauraHeart'] == 3) {
			return 0;
		}
		else {
			return 'valentine-laura-no';
		}
	},
	speaker: 'Laura',
	text: 'Well... if its with you...'
},{
	speaker: 'Laura',
	text: 'I guess I could make some adjustments...'
},{
	speaker: 'Me',
	text: 'S-So, it\'s a date?!'
},{
	speaker: 'Laura',
	text: 'N-nothing like that! It\'s just going out and stuff...'
},{
	speaker: 'Laura',
	text: 'N-not a date at all!'
},{
	speaker: 'Me',
	text: 'If you say so, Laura.',
	jump: 'valentine-happy'
},{
	id: 'valentine-laura-no',
	speaker: 'Laura',
	text: 'Well... I already promised with someone else...'
},{
	speaker: 'Me',
	text: 'Ah I understand.'
},{
	speaker: 'Laura',
	text: 'I\'m really sorry.'
},{
	speaker: 'Me',
	text: 'Nah, it\'s okay. Enjoy yourself!'
},{
	background: '#000',
	center: 'none',
	text: '...'
},{
	id: 'valentine-brian',
	background: 'steamboat',
	speaker: 'Brian',
	text: 'Man, sucks to not have a partner for the V-Day, eh.'
},{
	speaker: 'Me',
	text: 'Don\'t remind me.'
},{
	text: 'Apparently Brian\'s parents run a steamboat restaurant.'
},{
	text: 'Which is how I ended up here on what was supposed to be a romantic day.'
},{
	speaker: 'Brian',
	text: 'I thought you had a thing with Laura.'
},{
	speaker: 'Me',
	text: 'Nope. Nothing.'
},{
	speaker: 'Brian',
	text: 'Hmm... Oh well.'
},{
	text: '...'
},{
	append: true,
	text: '...'
},{
	append: true,
	text: '...'
},{
	speaker: 'Brian',
	text: 'I\'m straight. Just sayin\'.'
},{
	speaker: 'Me',
	text: '...'
},{
	speaker: 'Brian',
	text: '...'
},{
	speaker: 'Me',
	text: '...'
},{
	speaker: 'Brian',
	text: '...'
},{
	speaker: 'Me',
	text: '...'
},{
	speaker: 'Brian',
	text: '... What?'
},{
	speaker: 'Me',
	text: 'I think I\'m in love with you, brother.'
},{
	speaker: 'Brian',
	text: 'NO.'
},{
	speaker: 'Me',
	text: 'Just kidding.'
},{
	speaker: 'Brian',
	text: '...'
},{
	append: true,
	text: 'Good.'
},{
	speaker: 'Me',
	text: 'But, no seriously.',
	jump: 'valentine-merge'
},{
	id: 'valentine-happy',
	text: 'The date was fantastic.'
},{
	text: 'We went for a dinner at a restaurant.'
},{
	text: 'And watched a movie in the cinemas.'
},{
	text: 'At the end of the day, I gave her a box of chocolates I made myself.'
},{
	text: 'She was surprised that I could make chocolates.'
},{
	text: 'Hey, I am quite independent myself.'
},{
	text: 'The date ended with a kiss.'
},{
	text: 'But then, the author is too lazy to get this scene up.'
},{
	text: 'So I guess you\'re stuck with this black screen.'
},{
	text: 'Maybe in the next installment?'
},{
	id: 'valentine-merge',
	background: '#000',
	text: 'Untitled :: A Short Visual Novel<br>THE END'
},{
	text: 'All images used are copyright protected\nby their respective owners'
},{
	text: 'In which is too long to list<br>Bleh'
},{
	text: 'Ported from Ren\'Py\'s version'
},{
	text: 'Restarting in 3... 2... 1...'
},{
	reset: true
}
];