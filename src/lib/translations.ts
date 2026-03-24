import type { Locale } from './locale.svelte';

type Paragraph = string | { trait: string; text: string };
type Part = { h2: string; paragraphs: Paragraph[] };

interface Translation {
	layout: {
		logo: string;
		skipLink: string;
		githubAriaLabel: string;
		switchToLight: string;
		switchToDark: string;
		langLabel: string;
		headerAriaLabel: string;
		logoAriaLabel: string;
		donateLabel: string;
		donateAriaLabel: string;
		copiedLabel: string;
		footerAriaLabel: string;
	};
	quiz: {
		meta: { title: string; description: string };
		intro: {
			heading: string;
			body: string[];
			cta: string;
		};
		questionLabel: (current: number, total: number) => string;
		progressAriaLabel: (current: number, total: number) => string;
		questions: Array<{ text: string; answers: Array<{ text: string; score: number }> }>;
		resultAriaLabel: string;
		brilliant: {
			h2: string;
			p: string;
			scoreLabel: (score: number) => string;
			exploreLink: string;
			exploreLinkClass: string;
			imgAlt: string;
		};
		fool: {
			h2: string;
			p: string;
			scoreLabel: (score: number) => string;
			exploreLink: string;
			exploreLinkClass: string;
			imgAlt: string;
		};
		percentileMessage: (percentile: number, result: 'brilliant' | 'fool') => string;
		tallying: string;
		pelicansCount: (n: number) => string;
		restart: string;
		statsAriaLabel: string;
	};
	brilliant: {
		meta: { title: string; description: string };
		back: string;
		backAriaLabel: string;
		heroAlt: string;
		h1: string;
		subtitle: string;
		parts: Part[];
		takeAgain: string;
		takeAgainAriaLabel: string;
	};
	fool: {
		meta: { title: string; description: string };
		back: string;
		backAriaLabel: string;
		heroAlt: string;
		h1: string;
		subtitle: string;
		parts: Part[];
		takeAgain: string;
		takeAgainAriaLabel: string;
	};
}

export const translations: Record<Locale, Translation> = {
	en: {
		layout: {
			logo: 'think like a brilliant',
			skipLink: 'Skip to main content',
			githubAriaLabel: 'jimbot9k on GitHub, opens in new tab',
			switchToLight: 'Switch to light mode',
			switchToDark: 'Switch to dark mode',
			langLabel: 'Select language',
			headerAriaLabel: 'Site header',
			logoAriaLabel: 'Think Like a Brilliant, home',
			donateLabel: 'The pelican does not work for free.',
			donateAriaLabel: 'Copy Bitcoin donation address',
			copiedLabel: 'Copied.',
			footerAriaLabel: 'Site footer'
		},
		quiz: {
			meta: {
				title: 'think like a brilliant',
				description:
					'A 10-question personality quiz about pelicans, wizards, and whether you think like a brilliant or act like a fool.'
			},
			intro: {
				heading: 'A brief, important clarification.',
				body: [
					'This is a 10-question cognitive assessment designed to determine whether you think like a Brilliant or act like a Fool. It was developed by researchers who take this very seriously and would prefer you did too.',
					'The assessment works by presenting you with a series of scenarios (social, financial, metaphysical) and measuring the quality of your instincts. There are no trick questions. There are, however, questions about pelicans, wizards, and your shadow\'s credit score.',
					'Brilliants respond to the world with clarity, intention, and mild suspicion of geese. Fools respond with energy, confidence, and a near-total absence of follow-through.',
					'At the end, you will be classified. The classification is binding. Answer honestly. The assessment knows when you\'re performing.'
				],
				cta: 'Begin the assessment'
			},
			questionLabel: (c, t) => `Question ${c} of ${t}`,
			progressAriaLabel: (c, t) => `Quiz progress, question ${c} of ${t}`,
			questions: [
				{
					text: 'You wake up and a pelican is sitting on your chest. It is holding your phone. It does not look friendly. You:',
					answers: [
						{ text: 'Immediately try to rizz it up. You speak bird.', score: -2 },
						{
							text: "Scream 'no cap bro what is this' until the situation resolves itself.",
							score: -1
						},
						{
							text: 'Stay calm, assess the vibe, and carefully negotiate your phone back.',
							score: 1
						},
						{
							text: 'Observe its body language, identify what it wants, and execute a strategic retrieval plan.',
							score: 2
						}
					]
				},
				{
					text: 'A wizard slides into your DMs and offers you infinite knowledge about ONE topic. You have four seconds. You:',
					answers: [
						{
							text: "Reply 'W' and type the first word in your head. It is 'cereal'.",
							score: -2
						},
						{
							text: "Say 'vibes' and spend the rest of your life knowing everything about vibes.",
							score: -1
						},
						{
							text: "Ask if 'everything' counts. Stall. Negotiate. Use the four seconds wisely.",
							score: 1
						},
						{
							text: 'Instantly identify the highest-leverage domain of knowledge and lock it in. No hesitation.',
							score: 2
						}
					]
				},
				{
					text: 'You open TikTok and every single video is just someone confidently explaining something completely wrong. You:',
					answers: [
						{
							text: 'Agree with all of them. The confidence is contagious and honestly kind of inspiring.',
							score: -2
						},
						{
							text: "Feel weird about it but keep scrolling. Maybe they know something you don't.",
							score: -1
						},
						{ text: 'Fact-check the ones that seem most sus before resharing anything.', score: 1 },
						{
							text: 'Track down primary sources, check credentials, and leave politely cited corrections.',
							score: 2
						}
					]
				},
				{
					text: 'Your shadow has been making different life choices than you for three years. Its credit score is higher and it has a gym membership. You:',
					answers: [
						{ text: 'Call it out publicly. This shadow is NOT that girl.', score: -2 },
						{
							text: 'Feel personally attacked, post a vague tweet about betrayal, move on.',
							score: -1
						},
						{
							text: "Respectfully ask what it's been doing differently and take notes.",
							score: 1
						},
						{
							text: 'Request a full breakdown of its decisions, identify divergence points, and adapt immediately.',
							score: 2
						}
					]
				},
				{
					text: "A horse sends you a formal email with read-receipts on. Subject line: 'Regarding Your Recent Choices'. You:",
					answers: [
						{ text: 'Leave it on read. You are NOT doing this today.', score: -2 },
						{
							text: "Open it, get to paragraph two, close it, tell yourself you'll deal with it later.",
							score: -1
						},
						{
							text: "Read the whole thing even though it's uncomfortable. Accountability era.",
							score: 1
						},
						{
							text: 'Read it thoroughly, draft a structured response, and schedule a follow-up meeting.',
							score: 2
						}
					]
				},
				{
					text: 'Your friend group chat is going absolutely feral over a statistic someone screenshot from a random account with 47 followers. You:',
					answers: [
						{
							text: 'Add three fire emojis and help it spread. You are a culture-shaper.',
							score: -2
						},
						{ text: "Laugh-react and move on. Probably true enough.", score: -1 },
						{ text: 'Google it before adding to the chaos.', score: 1 },
						{
							text: 'Find the original study, check the sample size and methodology, and post the actual context.',
							score: 2
						}
					]
				},
				{
					text: "You're in a debate and thirty seconds in you realise the other person is completely right and you are very wrong. You:",
					answers: [
						{ text: 'Double down harder. Backing out now would be major L behaviour.', score: -2 },
						{
							text: "Go quiet, change the subject, and hope nobody clocked what happened.",
							score: -1
						},
						{ text: 'Concede the point with your dignity mostly intact.', score: 1 },
						{
							text: 'Concede immediately, compliment their argument, and ask them to explain more. Secure in yourself.',
							score: 2
						}
					]
				},
				{
					text: 'Scientists announce that every decision you made on a Tuesday was wrong. All of them. Every single one. You:',
					answers: [
						{
							text: "Immediately cancel Tuesdays within your household. It's giving restructure.",
							score: -2
						},
						{
							text: 'Gaslight yourself into thinking most Tuesdays were actually fine. Move on.',
							score: -1
						},
						{
							text: 'Sit down and genuinely review your Tuesday decisions to find the pattern.',
							score: 1
						},
						{
							text: 'Systemically analyse the Tuesday error pattern, build a decision checklist, and deploy it.',
							score: 2
						}
					]
				},
				{
					text: "You're 40 minutes into a very confident presentation about cheese when you realize literally nothing you've said is accurate. You:",
					answers: [
						{
							text: 'Increase the confidence. You cannot let them see weakness. Gaslight the room.',
							score: -2
						},
						{
							text: "Say 'anyway' and pivot to Q&A. Let the audience figure it out.",
							score: -1
						},
						{ text: 'Stop, acknowledge the L, and give a quick corrected summary.', score: 1 },
						{
							text: "Stop mid-sentence, explain exactly what went wrong, provide the correct information, and apologise to the cheese.",
							score: 2
						}
					]
				},
				{
					text: "You show up to what you thought was a dinner party and it's actually a job interview for a job you don't want, run by a panel of owls. You:",
					answers: [
						{
							text: 'Go absolutely unhinged in the interview. You are built different.',
							score: -2
						},
						{
							text: "Half-try in a way that communicates 'I'm here but I'm not here here'.",
							score: -1
						},
						{
							text: 'Politely clarify the situation and ask whether attendance is actually mandatory.',
							score: 1
						},
						{
							text: 'Assess what the owls need, evaluate whether your skills transfer, and make a conscious decision about engaging.',
							score: 2
						}
					]
				}
			],
			resultAriaLabel: 'Your result',
			brilliant: {
				h2: 'You Think Like a Brilliant.',
					p: "You approach problems with curiosity, rigor, and patience. You update your beliefs when the evidence demands it, and you'd rather be right than feel right. The hard questions don't scare you. They fascinate you.",
				scoreLabel: (s) => `Score: ${s > 0 ? '+' : ''}${s}`,
				exploreLink: 'explore what this means →',
				exploreLinkClass: 'explore-link brilliant-link',
				imgAlt: 'Illustration for Think Like a Brilliant result'
			},
			fool: {
				h2: 'You Act Like a Fool.',
					p: "You lead with instinct, confidence, and beautiful recklessness. You don't sweat the details. You make the details sweat. The world calls it chaos. You call it Tuesday.",
				scoreLabel: (s) => `Score: ${s}`,
				exploreLink: 'explore what this means →',
				exploreLinkClass: 'explore-link fool-link',
				imgAlt: 'Illustration for Act Like a Fool result'
			},
			percentileMessage: (p, result) => {
				if (result === 'brilliant') {
					if (p >= 95)
						return `top ${100 - p + 1}% of everyone who has faced the pelican. the owls have you on a shortlist.`;
					if (p >= 80)
						return `higher than ${p}% of everyone who took this. the wizard would give you a good topic.`;
					if (p >= 60) return `you outscored ${p}% of everyone here. comfortably, quietly brilliant.`;
					if (p >= 50)
						return `just above the halfway mark, a modest brilliant, which is honestly the most credible kind.`;
					return `technically brilliant. practically mid. the horse has seen this before and has thoughts.`;
				} else {
					if (p <= 5)
						return `bottom ${p + 1}%. you are statistically the pelican. the pelican has no notes.`;
					if (p <= 20)
						return `only ${p}% of people scored lower. a committed fool. deeply, authentically on brand.`;
					if (p <= 40)
						return `${p}% of people scored lower. a devoted fool. the group chat fire emoji was definitely yours.`;
					if (p <= 55)
						return `hovering around the midpoint. you're the kind of fool that almost wasn't. the horse is confused but supportive.`;
					return `higher than ${p}% of everyone who sat with the pelican, which is a lot for a fool. the pelican is genuinely rattled.`;
				}
			},
			tallying: 'tallying your results…',
			pelicansCount: (n) => `${n.toLocaleString('en-US')} people have sat in the pelican chair`,
			restart: 'Take the quiz again',
			statsAriaLabel: 'Score statistics'
		},
		brilliant: {
			meta: {
				title: 'The Brilliant: A Field Guide',
				description:
					'A comprehensive, peer-reviewed, and frankly exhausting deep-dive into what it means to think like a brilliant.'
			},
			back: 'back to the quiz',
			backAriaLabel: 'Back to the quiz home page',
			heroAlt: 'Think Like a Brilliant',
			h1: 'You Think Like a Brilliant.',
			subtitle:
				'A comprehensive, peer-reviewed, and frankly exhausting deep-dive into what that means for you, society, and the pelican.',
			takeAgain: 'Take it again',
			takeAgainAriaLabel: 'Take the quiz again',
			parts: [
				{
					h2: 'Part I: What Is a Brilliant, Exactly?',
					paragraphs: [
						'A Brilliant is not simply a person who is smart. Many smart people are idiots. A Brilliant is a person who has made peace with not knowing things, which is ironic, because not knowing things is extremely uncomfortable and most people would rather die than sit with an unanswered question for more than forty-five seconds.',
						'The Brilliant sits with it. The Brilliant makes a cup of tea, pulls up a chair, and says to the unanswered question: \u201cHello. You look complicated. I would like to understand you. This may take some time. I have cleared my schedule.\u201d The unanswered question is, frankly, taken aback. Nobody has ever treated it this way before. Most people just Google the first result and move on. The Brilliant reads the citations.',
						'This is both a gift and a curse, because the Brilliant is often late to things.'
					]
				},
				{
					h2: 'Part II: The Origin of the Brilliant',
					paragraphs: [
						'Historians disagree on when the first Brilliant appeared. Some say it was Aristotle, who famously said that the more you know, the more you know you don\u2019t know, which is the kind of thing a Brilliant says right before everyone at the party moves to a different room.',
						'Others say it was whoever invented the double-blind study, because that person looked at the entire history of human self-deception and said \u201cwhat if we made it harder to lie to ourselves\u201d and everyone else said \u201cwhy would we want that\u201d and the Brilliant said \u201cI\u2019ll explain\u201d and proceeded to do so for forty years.',
						'The Brilliant has always existed. They were the one in the cave asking \u201cbut WHY does fire burn\u201d while everyone else was just trying to cook a mammoth. They were annoying then too, but they were also correct, and eventually people came around.'
					]
				},
				{
					h2: 'Part III: Key Traits of the Brilliant (Documented)',
					paragraphs: [
						{
							trait: 'Trait 1: Comfort with Being Wrong.',
							text: ' The Brilliant has discovered that being wrong is not, in fact, fatal. This was a surprise to them also. They were wrong about something in 2019 and they did not die. They updated their belief system. They moved on. They now actively seek out situations where they might be wrong, which their friends find exhausting and which is technically just called \u201chaving intellectual standards.\u201d'
						},
						{
							trait: 'Trait 2: The Inability to Forward Unverified Statistics.',
							text: ' When the group chat goes feral over a statistic from an account called @TruthZone47, the Brilliant feels a physical sensation in their chest. They open the thread. They look for sources. They find that the statistic was made up in 2014 by a man in Portsmouth who was having a bad day. They post the correction. Nobody reacts to it. They post it anyway. They will always post it anyway.'
						},
						{
							trait: 'Trait 3: Suspiciously Good at Estimating Things.',
							text: ' The Brilliant has, at some point, read something about Fermi estimation and has never fully recovered. They can now tell you approximately how many piano tuners are in Chicago, how long it would take to walk to the moon, and how many litres of custard you would need to fill an Olympic swimming pool. Nobody has asked for any of this. The Brilliant offers it freely.'
						},
						{
							trait: 'Trait 4: The Note-Taking.',
							text: ' The Brilliant takes notes. Not just at work or in lectures. Everywhere. On their phone. In the margins of receipts. On their arm if necessary. They have a notes folder with 847 unsorted voice memos. They have a document called \u201cideas - misc\u201d that is 34,000 words long. They have never looked at any of it. The act of capturing the thought is the point. The thought is safe. The thought has been recorded. The Brilliant can now sleep.'
						},
						{
							trait: 'Trait 5: A Complicated Relationship With Confidence.',
							text: ' The Brilliant is confident, but not in the loud way. They are confident in the specific, load-bearing way. They will say \u201cI\u2019m not sure about that\u201d more than any other type of person, and paradoxically this makes them more reliable than people who say \u201cdefinitely\u201d about everything. If a Brilliant says they\u2019re sure, they\u2019re sure. You can build a house on it. You can take it to court. You can bring it up at Thanksgiving.'
						}
					]
				},
				{
					h2: 'Part IV: The Brilliant in Social Situations',
					paragraphs: [
						'The Brilliant at a dinner party is a fascinating specimen. They arrive slightly late because they were reading one more thing. They bring wine they researched. They listen more than they speak, which people find either refreshing or unsettling depending on whether they are also a Brilliant.',
						'When a topic comes up that they know little about, the Brilliant says \u201cI don\u2019t know much about that, tell me more.\u201d When a topic comes up that they know a lot about, they say \u201cthere\u2019s actually some interesting nuance here\u201d and then immediately sense the room\u2019s energy and decide to save it for someone who wants to know.',
						'The Brilliant has seventeen opinions they have been waiting for the right moment to share. That moment has not come. They have had these opinions since 2021. They are still valid. They are keeping them.'
					]
				},
				{
					h2: 'Part V: The Brilliant and the Pelican',
					paragraphs: [
						'The pelican question \u2014 the foundational question of this assessment \u2014 is crucial. Because the Brilliant, upon finding a pelican on their chest holding their phone, did not panic. They observed. They assessed. They asked: what does this pelican want? Is it the phone, specifically, or does the phone represent something? Is this pelican a metaphor? Is this a Thursday? These are reasonable questions.',
						'The Brilliant knows that most problems, including pelican-based ones, have an internal logic. Find the logic, find the solution. The pelican has motivations. The pelican has a context. The pelican is not simply a chaos agent \u2014 it is a system, and systems can be understood.',
						'The Brilliant got their phone back. They also learned three facts about pelican behaviour that they did not know before. They wrote them down in their notes app. The document is called \u201cpelican - misc.\u201d It is 400 words long. There is a follow-up document called \u201cpelican - further reading.\u201d They do not regret this.'
					]
				},
				{
					h2: 'Part VI: What This Means For Your Future',
					paragraphs: [
						'You are going to be okay. More than okay, actually. You are going to be the person in the room who knows what they\u2019re talking about, who changes their mind when the evidence changes, and who asks questions that make other people feel slightly seen and slightly uncomfortable at the same time.',
						'You will be right about things before other people. This is both a superpower and a source of unending low-level frustration that you have learned to manage through journaling, walks, and occasionally being right out loud when the stakes are high enough to justify it.',
						'The owls respect you. The horse\u2019s email is waiting. The wizard\u2019s offer stands.',
						'Go be brilliant. You already are.'
					]
				}
			]
		},
		fool: {
			meta: {
				title: 'The Fool: A Celebration',
				description:
					'A thorough, loving, and only slightly concerned examination of the Fool. The pelican has declined to comment.'
			},
			back: 'back to the quiz',
			backAriaLabel: 'Back to the quiz home page',
			heroAlt: 'Act Like a Fool',
			h1: 'You Act Like a Fool.',
			subtitle:
				'A thorough, loving, and only slightly concerned examination of the Fool: who they are, how they got here, and why the pelican, honestly, didn\u2019t stand a chance.',
			takeAgain: 'Take it again',
			takeAgainAriaLabel: 'Take the quiz again',
			parts: [
				{
					h2: 'Part I: In Defence of the Fool',
					paragraphs: [
						'Let\u2019s get one thing clear: the Fool is not stupid. The Fool has simply decided that the distance between a question and an answer does not need to be very long, and has been operating on this principle for so long that it now feels like a personality trait, because it is.',
						'The Fool is the person who has already made the decision before you have finished explaining the situation. They are already moving. They are already committed. The plan, in the traditional sense of the word, has been skipped, but a kind of beautiful kinetic confidence has been substituted in its place, and most of the time \u2014 not all of the time, but most \u2014 this works out fine.',
						'The Fool has learned things the hard way. Every single time. Without exception. They have never read a warning label and then thought \u201cglad I read that.\u201d They have read the warning label after the fact, nodded slowly, and said \u201cyep, that tracks.\u201d'
					]
				},
				{
					h2: 'Part II: The Historical Fool',
					paragraphs: [
						'The Fool has existed since the beginning of recorded history and quite possibly before that. It was almost certainly a Fool who first touched fire to see what would happen. It was almost certainly a Fool who got on a log and floated down a river and invented boats, not because they had a plan to invent boats, but because they got on a log. The boat was a surprise to everyone, including them.',
						'Court jesters were called Fools, and they were the only people allowed to tell the king the truth. Think about that. The person with the least apparent reverence for convention was, structurally speaking, the most honest person in the room. The Fool has always known things. They have simply known them in a different direction.',
						"Many of the greatest moments in human history were caused by someone doing something they probably shouldn\u2019t have without thinking too hard about it first. The Fool is the engine of accidental progress. They didn\u2019t mean to discover it. They were just in the area."
					]
				},
				{
					h2: 'Part III: Key Traits of the Fool (Observed in the Field)',
					paragraphs: [
						{
							trait: 'Trait 1: Confidence That Precedes Information.',
							text: ' The Fool is confident first and then gathers evidence as needed, which is technically backwards but has the distinct advantage of speed. By the time the cautious person has finished their risk assessment, the Fool has already started, possibly failed, regrouped, and started again with more information than the risk assessment would have provided. This is called \u201cempirical learning\u201d when scientists do it in labs. When the Fool does it, it\u2019s called \u201cthe incident.\u201d'
						},
						{
							trait: 'Trait 2: An Impeccable Ability to Improvise.',
							text: ' The Fool does not have a plan B. They have something better: the complete confidence that they will figure it out when they get there. And they usually do. Not always elegantly. Not always without collateral damage. But they get there. They figure it out. There is something genuinely remarkable about a person who can walk into a situation with no preparation and somehow emerge having handled it, even if \u201chandled it\u201d is doing a lot of heavy lifting in that sentence.'
						},
						{
							trait: 'Trait 3: The Rizz.',
							text: ' Whether it\u2019s a pelican, a customs official, or a horse with a formal complaint, the Fool genuinely believes they can talk their way into or out of anything. And they do this not through careful rhetoric or strategic communication, but through sheer presence and the energy of someone who has never once considered that this might not work. The pelican, if we\u2019re honest, was rattled.'
						},
						{
							trait: 'Trait 4: Loyalty to the Bit.',
							text: ' If the Fool commits to something \u2014 a joke, a plan, a mispronounced word, an incorrect statistic they\u2019ve already shared with fifteen people \u2014 they see it through. Changing course mid-stream would require acknowledging that the initial direction was wrong, which is a very Brilliant thing to do and which the Fool finds nearly physically impossible. This is a flaw. It is also, somehow, a form of integrity.'
						},
						{
							trait: 'Trait 5: The Tuesday Problem.',
							text: " Every Fool has a Tuesday. Maybe it\u2019s not literally Tuesday. Maybe it\u2019s budgeting. Maybe it\u2019s reading before agreeing. Maybe it\u2019s not replying to emails at 2am. There is a pattern. The Fool knows about the pattern. The Fool has known about the pattern for several years. The Fool has not addressed the pattern. The Fool has, however, named the pattern, which is step one, and that counts for something, and the Fool is proud of it."
						}
					]
				},
				{
					h2: 'Part IV: The Fool in Social Situations',
					paragraphs: [
						'The Fool at a dinner party is an event. They arrive with a story already in progress. The story involves something that happened on the way here and it is already more interesting than anything the Brilliant brought, which is a bottle of researched wine and seventeen opinions on geopolitics they\u2019ve decided not to share.',
						'The Fool will say something they immediately regret and then build on it rather than retreat from it. The Fool will share a statistic they cannot source. The Fool will get into a debate they are not prepared for and fight their way through it on vibes alone, losing ground slowly and pivoting smoothly each time without once technically conceding the point.',
						'Everyone at the party remembers the Fool. Not always fondly, not always correctly, but always.'
					]
				},
				{
					h2: 'Part V: The Fool and the Pelican',
					paragraphs: [
						"The pelican woke the Fool up. This was already a mistake on the pelican\u2019s part \u2014 the Fool before coffee is a different creature entirely \u2014 but let us set that aside. The Fool\u2019s first instinct was to negotiate by speaking bird. They don\u2019t speak bird. They speak bird the same way they speak French, which is confidently and incorrectly, and somehow this communicates something, because confidence in a language is ninety percent of the language.",
						'The pelican was not successfully rizzed. The phone was eventually recovered through means that are unclear. The Fool has a great story about it now. The story gets better each time they tell it. By next year, the pelican will have been three pelicans and the phone will have been their entire wallet.',
						'The pelican has declined to comment.'
					]
				},
				{
					h2: "Part VI: The Horse\u2019s Email",
					paragraphs: [
						"You left it on read. Let\u2019s talk about that.",
						'The horse wrote to you. The horse, who has hooves and no opposable thumbs and therefore typed that entire email with either dictation software or sheer determination, reached out formally with read-receipts enabled. This was not a casual communication. This was the horse saying: I have something to say to you, and I want to know that you have heard it.',
						'You left it on read.',
						"This is fine. This is very you. The email is still there. It has been there for a while. The horse knows you read it. The horse is waiting. The horse has no other plans; horses famously do not have busy schedules. One day you will open that email and it will contain something you needed to hear and you will be glad, in your particular Fool way, that you eventually got to it.",
						'Reply when you\u2019re ready. The horse is not going anywhere. Literally. It is a horse.'
					]
				},
				{
					h2: 'Part VII: In Conclusion, You Are Magnificent',
					paragraphs: [
						'The world needs Brilliants, yes. The world needs people who read the footnotes and check the sample sizes and schedule follow-up meetings with horses. The world genuinely cannot function without them.',
						'But the world also needs you. The world needs the person who gets on the log before they\u2019ve figured out it floats. The world needs the person who speaks bird to a pelican and somehow makes it work. The world needs the person who says \u201canyway\u201d and pivots to Q&A during the cheese presentation of their life, dusts off, and tries again.',
						"The Fool does not have a plan. The Fool has something better: a complete and total willingness to be in the situation and figure it out. That\u2019s not nothing. That\u2019s actually extraordinary.",
						"Tuesday is tomorrow. You\u2019ll make a different decision this time. Or you won\u2019t, and you\u2019ll have another great story. Either way, it\u2019s going to be something."
					]
				}
			]
		}
	},

	zh: {
		layout: {
			logo: '像智者一样思考',
			skipLink: '跳到主要内容',
			githubAriaLabel: 'jimbot9k 的 GitHub，在新标签页打开',
			switchToLight: '切换到浅色模式',
			switchToDark: '切换到深色模式',
			langLabel: '选择语言',
			headerAriaLabel: '网站导航栏',
			logoAriaLabel: '像智者一样思考 —— 返回首页',
			donateLabel: '鹈鹕不是免费工作的。',
			donateAriaLabel: '复制比特币捐赠地址',
			copiedLabel: '已复制。',
			footerAriaLabel: '网站底部'
		},
		quiz: {
			meta: {
				title: '像智者一样思考',
				description: '一个关于鹈鹕、巫师的10题性格测验，看看你到底是像智者一样思考，还是像逗比一样行事。'
			},
			intro: {
				heading: '一个简短但重要的说明。',
				body: [
					'这是一份包含10道题的认知测评，旨在判断你究竟是像智者一样思考，还是像逗比一样行事。它由一批极为认真的研究人员开发，他们希望你也能以同等的认真态度对待它。',
					'测评通过呈现一系列场景来运作——社交的、财务的、形而上学的——并测量你直觉的质量。没有陷阱题。但有关于鹈鹕、巫师，以及你的影子信用评分的问题。',
					'智者以清晰、意图和对鹅类的温和警惕来回应这个世界。逗比则以充沛的精力、十足的自信，和几乎为零的后续行动来回应。',
					'最后，你将被分类。分类结果具有约束力。请如实作答——题目知道你什么时候在表演。'
				],
				cta: '开始测验'
			},
			questionLabel: (c, t) => `第 ${c} 题，共 ${t} 题`,
			progressAriaLabel: (c, t) => `测验进度，第 ${c} 题，共 ${t} 题`,
			questions: [
				{
					text: '你一觉醒来，发现一只鹈鹕坐在你胸口，叼着你的手机，神情不善。你会：',
					answers: [
						{ text: '立刻尝试撩它。你会说鸟语。', score: -2 },
						{ text: '大喊"这什么情况啊"直到事情自行了结。', score: -1 },
						{ text: '保持冷静，观察氛围，小心翼翼地把手机要回来。', score: 1 },
						{ text: '观察它的肢体语言，判断它的意图，制定并执行精准的取回计划。', score: 2 }
					]
				},
				{
					text: '一位巫师溜进你的私信，提出给你某一领域的无限知识。你有四秒时间。你会：',
					answers: [
						{ text: '回一个"好"，然后打下脑子里第一个词。那个词是"泡面"。', score: -2 },
						{ text: '说"随便"，然后用余生精通"随便"这门学问。', score: -1 },
						{ text: '询问"所有知识"算不算一个领域。拖延。谈判。把四秒用满。', score: 1 },
						{ text: '立刻锁定最高价值的知识领域，毫不犹豫地确认。', score: 2 }
					]
				},
				{
					text: '你打开抖音，每个视频里都有人信心满满地解释一件完全错误的事。你会：',
					answers: [
						{ text: '全部点赞同意。那种自信真的很有感染力，说实话挺励志的。', score: -2 },
						{ text: '感觉哪里不对，但继续刷。也许人家知道你不知道的事。', score: -1 },
						{ text: '在转发任何内容前，先核实一下最可疑的那个。', score: 1 },
						{ text: '追溯原始资料，核查信息来源，留下有依据的纠正评论。', score: 2 }
					]
				},
				{
					text: '你的影子三年来一直在做与你不同的人生选择。它的信用分更高，还办了健身卡。你会：',
					answers: [
						{ text: '公开质问它。这个影子根本不配如此。', score: -2 },
						{ text: '觉得很受伤，发一条泛泛的朋友圈控诉背叛，然后翻篇。', score: -1 },
						{ text: '礼貌地问它最近有什么不同，并认真记录。', score: 1 },
						{ text: '请它做一份完整的决策清单，找出分歧点，立刻着手调整。', score: 2 }
					]
				},
				{
					text: '一匹马向你发来一封带有已读回执的正式邮件，主题是"关于您近期的某些选择"。你会：',
					answers: [
						{ text: '已读不回。你今天完全没有处理这事的心情。', score: -2 },
						{ text: '打开，读到第二段，关掉，告诉自己等会再说。', score: -1 },
						{ text: '把整封邮件读完，哪怕内容让你不舒服。这是对自己负责的时候了。', score: 1 },
						{ text: '仔细阅读，起草一份有条理的回复，并安排后续沟通。', score: 2 }
					]
				},
				{
					text: '你的家族群正在因为某个只有47个粉丝的随机账号截图的统计数据而彻底崩溃。你会：',
					answers: [
						{ text: '加三个火苗表情，帮忙转发。你是文化塑造者。', score: -2 },
						{ text: '点个大笑继续刷。差不多是真的吧。', score: -1 },
						{ text: '在参与闹剧前先搜索一下。', score: 1 },
						{ text: '找到原始研究，核查样本量和方法论，再把正确上下文发出来。', score: 2 }
					]
				},
				{
					text: '你正在辩论中，三十秒后发现对方完全正确而你大错特错。你会：',
					answers: [
						{ text: '加倍坚持。现在退缩是超级丢脸的行为。', score: -2 },
						{ text: '沉默，换话题，希望没人发现发生了什么。', score: -1 },
						{ text: '尽量保住脸面地承认这一点。', score: 1 },
						{ text: '立刻认输，称赞对方的论点，请对方继续讲。你有自信。', score: 2 }
					]
				},
				{
					text: '科学家宣布，你每一个周二做的每一个决定都是错的。全部。不例外。你会：',
					answers: [
						{ text: '立刻在家里废除周二。这就是重组。', score: -2 },
						{ text: '说服自己大多数周二还是挺好的。继续过日子。', score: -1 },
						{ text: '坐下来，认真回顾你的周二决策，找出规律。', score: 1 },
						{ text: '系统分析周二的错误模式，建立一套决策核查清单并投入使用。', score: 2 }
					]
				},
				{
					text: '你已经充满自信地讲了40分钟的奶酪，突然意识到你说的所有内容都不是真的。你会：',
					answers: [
						{ text: '提高自信度。绝不能让他们看出破绽。强行给全场洗脑。', score: -2 },
						{ text: '说一句"好的"然后切换到问答环节，让听众自己去发现。', score: -1 },
						{ text: '停下来，承认翻车，给出一个简短的正确版本。', score: 1 },
						{ text: '停下来，解释清楚哪里出了问题，提供正确信息，并向奶酪道歉。', score: 2 }
					]
				},
				{
					text: '你以为是一场晚宴，结果发现是一场你不想要的工作面试，面试官是一组猫头鹰。你会：',
					answers: [
						{ text: '在面试里彻底发癫。你天生有别。', score: -2 },
						{ text: '半心半意应付，传达出一种"我来了但我不是真的来了"的感觉。', score: -1 },
						{ text: '礼貌地说明情况，并询问出席是否真的是强制要求。', score: 1 },
						{ text: '评估猫头鹰的需求，判断自己的能力是否匹配，再做出是否参与的决定。', score: 2 }
					]
				}
			],
			resultAriaLabel: '你的测验结果',
			brilliant: {
				h2: '你是一个智者。',
				p: '你以好奇心、严谨性和耐心应对问题。当证据需要时，你会更新自己的判断，宁愿是对的，也不愿感觉良好。那些难题不会让你畏惧——它们让你着迷。',
				scoreLabel: (s) => `得分：${s > 0 ? '+' : ''}${s}`,
				exploreLink: '探索这意味着什么 →',
				exploreLinkClass: 'explore-link brilliant-link',
				imgAlt: '智者测验结果插图'
			},
			fool: {
				h2: '你是一个逗比。',
				p: '你凭本能、自信和美丽的鲁莽行事。细节不会让你头疼——你让细节为你烦恼。世界称之为混乱，你称之为普通的周二。',
				scoreLabel: (s) => `得分：${s}`,
				exploreLink: '探索这意味着什么 →',
				exploreLinkClass: 'explore-link fool-link',
				imgAlt: '逗比测验结果插图'
			},
			percentileMessage: (p, result) => {
				if (result === 'brilliant') {
					if (p >= 95)
						return `在所有面对过鹈鹕的人中，你排在前 ${100 - p + 1}%。猫头鹰已经把你列入候选名单。`;
					if (p >= 80) return `你超越了 ${p}% 的参与者。巫师会给你一个好话题的。`;
					if (p >= 60) return `你超越了 ${p}% 的人。稳稳的，低调的智者。`;
					if (p >= 50) return `刚刚超过中线——一个低调的智者，这其实才是最可信的那种。`;
					return `技术上是智者。实际上很平庸。那匹马见过这种情况，并且有话要说。`;
				} else {
					if (p <= 5)
						return `垫底 ${p + 1}%。你在统计意义上就是那只鹈鹕。鹈鹕无可奉告。`;
					if (p <= 20) return `只有 ${p}% 的人分数更低。一个执着的逗比。深度且真实地符合人设。`;
					if (p <= 40)
						return `${p}% 的人的分数比你低。一个虔诚的逗比。那个火苗表情绝对是你发的。`;
					if (p <= 55)
						return `徘徊在中间——你是那种差点不是逗比的逗比。那匹马困惑但支持你。`;
					return `超越了 ${p}% 与鹈鹕共坐过的人，这对一个逗比来说已经很多了。鹈鹕真的震惊了。`;
				}
			},
			tallying: '正在统计你的结果……',
			pelicansCount: (n) => `${n.toLocaleString('zh-CN')} 人坐过鹈鹕椅`,
			restart: '再测一次',
			statsAriaLabel: '得分统计'
		},
		brilliant: {
			meta: {
				title: '智者——野外指南',
				description: '一篇全面的、经过同行评议的、坦率地令人筋疲力尽的深度解析：像智者一样思考到底意味着什么。'
			},
			back: '返回测验',
			backAriaLabel: '返回测验首页',
			heroAlt: '像智者一样思考',
			h1: '你是一个智者。',
			subtitle: '一篇全面的、经过同行评议的、坦率地令人筋疲力尽的深度解析：这对你、对社会，以及对那只鹈鹕意味着什么。',
			takeAgain: '再测一次',
			takeAgainAriaLabel: '再次参加测验',
			parts: [
				{
					h2: '第一部分：智者究竟是谁？',
					paragraphs: [
						'智者并不只是聪明的人。许多聪明的人其实是蠢货。智者是那种学会了与不知道和平共处的人，这很讽刺，因为不知道某事极度令人不舒服，而大多数人宁愿死也不愿坐在一个悬而未决的问题旁超过45秒。',
						'智者会陪着它坐下来。智者会泡一杯茶，拉过一把椅子，对那个悬而未决的问题说："你好。你看起来很复杂。我想理解你。这可能需要一些时间。我已经清空了我的日程。"那个悬而未决的问题，老实说，被搞懵了。以前从来没有人这样对待它。大多数人只是搜了第一个结果就走了。智者会读那些参考文献。',
						'这既是天赋，也是诅咒，因为智者经常迟到。'
					]
				},
				{
					h2: '第二部分：智者的起源',
					paragraphs: [
						'历史学家对第一位智者出现的时间意见不一。有人说是亚里士多德，他有句名言：你知道得越多，你就越知道自己不知道什么——这是智者会在派对上说的那种话，然后现场所有人就会陆续移步到另一个房间。',
						'也有人说是发明双盲实验的人，因为那个人审视了整个人类自欺欺人的历史，然后说"如果我们让自己更难撒谎会怎样"，所有人都说"我们为什么要那样做"，而智者说"我来解释"，然后解释了四十年。',
						'智者一直都存在。他们是那个在山洞里问"但火为什么会燃烧"的人，而所有人只是想烤一头猛犸象。他们那时候也很烦人，但他们是对的，最终大家都慢慢接受了。'
					]
				},
				{
					h2: '第三部分：智者的核心特质（已记录在案）',
					paragraphs: [
						{
							trait: '特质一：与出错和解。',
							text: '智者发现，犯错其实并不致命。这对他们来说也是个惊喜。他们在某年关于某件事是错的，但没有因此死去。他们更新了自己的认知体系。继续前进了。他们现在会主动寻找自己可能出错的情况，朋友们觉得这很累，而这在技术上只叫做"有知识标准"。'
						},
						{
							trait: '特质二：无法转发未经核实的统计数据。',
							text: '当家族群因为一个叫@真相47号的账号的截图而炸开锅时，智者会感到胸口一紧。他们打开那条帖子。他们寻找来源。他们发现那个数据是某年某人坐在家里心情很差时编造的。他们发出纠正。没有人点赞。他们还是发了。他们永远都会发的。'
						},
						{
							trait: '特质三：出奇精准的估算能力。',
							text: '智者在某个时刻读过关于费米估算的内容，并且从此没有完全恢复过来。他们现在能告诉你上海大约有多少架钢琴需要调音，走到月球要多长时间，以及需要多少升蛋挞才能装满一个奥运会标准游泳池。没有人问过这些问题。智者会主动告诉你。'
						},
						{
							trait: '特质四：记笔记。',
							text: '智者记笔记。不只是在工作或课堂上。是到处记。手机里记。收据背面记。必要时在手臂上记。他们有一个文件夹存了847条未分类的语音备忘录。他们有一个叫"想法-杂项"的文档，长达34000字。他们从来没有回去看过。记录这个想法才是重点。想法安全了。想法被存下来了。智者现在可以睡着了。'
						},
						{
							trait: '特质五：对自信有复杂的感受。',
							text: '智者很自信，但不是那种大声嚷嚷的自信。他们是那种精确的、承重的自信。他们说"我对这个不确定"的次数比任何其他类型的人都多，而这反而让他们比那些对一切都说"当然"的人更可靠。如果智者说他们确定，那就是确定。可以把房子盖在上面。可以带去法庭。可以在家庭聚会上提起。'
						}
					]
				},
				{
					h2: '第四部分：社交场合中的智者',
					paragraphs: [
						'派对上的智者是一种迷人的标本。他们稍微迟到，因为又多读了一样东西。他们带来一瓶经过认真研究的酒。他们听得多说得少，部分人觉得这很耳目一新，部分人觉得这令人不安，取决于他们自己是不是智者。',
						'当聊到他们不熟悉的话题时，智者会说"我对这个了解不多，来跟我说说"。当聊到他们很熟悉的话题时，他们会说"其实这里有一些有趣的细节"，然后立刻感受到全场的气氛，决定把这些细节留给真正感兴趣的人。',
						'智者有十七个观点在等待合适的时机分享。那个时机还没有到来。他们从2021年开始持有这些观点了。它们依然有效。他们把它们好好保存着。'
					]
				},
				{
					h2: '第五部分：智者与鹈鹕',
					paragraphs: [
						'鹈鹕的问题——这场测验的核心问题——至关重要。因为智者在发现一只鹈鹕叼着手机坐在他们胸口时，没有惊慌。他们观察。他们评估。他们问：这只鹈鹕想要什么？它要的是手机本身，还是手机代表着某种东西？这只鹈鹕是一个隐喻吗？今天是周几？这些都是合理的问题。',
						'智者知道大多数问题，包括那些与鹈鹕有关的问题，都有其内在逻辑。找到逻辑，就能找到解决方案。鹈鹕有它的动机。鹈鹕有它的背景。鹈鹕不只是一个混乱代理人——它是一个系统，而系统是可以被理解的。',
						'智者把手机要了回来。他们还学到了三个之前不知道的关于鹈鹕行为的事实。他们把这些写进了备忘录。文件名是"鹈鹕-杂项"。长达400字。还有一个后续文档叫"鹈鹕-延伸阅读"。他们不后悔。'
					]
				},
				{
					h2: '第六部分：这对你的未来意味着什么',
					paragraphs: [
						'你会没事的。不只是没事，实际上远不止于此。你会成为那个说话有根据的人，当证据改变时会改变想法的人，提出的问题让其他人同时感到被看见和略感不适的人。',
						'你会比其他人更早知道某些事。这既是一种超能力，也是一种永无止境的低烈度挫败感，你已经学会通过写日记、散步，以及偶尔在利害关系足够高时当众说出来来管理这种感受。',
						'猫头鹰尊重你。那匹马的邮件还在等着。那位巫师的提议依然有效。',
						'去变得智慧吧。你本来就是。'
					]
				}
			]
		},
		fool: {
			meta: {
				title: '逗比——一部颂歌',
				description: '一篇对逗比全面的、充满爱意的、只是稍微有点担心的审视。鹈鹕拒绝置评。'
			},
			back: '返回测验',
			backAriaLabel: '返回测验首页',
			heroAlt: '像逗比一样行事',
			h1: '你是一个逗比。',
			subtitle: '一篇对逗比全面的、充满爱意的、只是稍微有点担心的审视：他们是谁，他们怎么走到这一步的，以及为什么那只鹈鹕，老实说，根本没有机会。',
			takeAgain: '再测一次',
			takeAgainAriaLabel: '再次参加测验',
			parts: [
				{
					h2: '第一部分：为逗比辩护',
					paragraphs: [
						'先说清楚一件事：逗比不是笨。逗比只是决定了问题和答案之间的距离不必很远，而且这个原则已经执行了很久，久到现在感觉像是个性特征，因为它确实是。',
						'逗比是那种在你还没说完情况之前就已经做出决定的人。他们已经在行动了。他们已经投入了。计划，就传统意义上的那种，被跳过了，但一种美丽的动能式自信被代入了它的位置，而且大多数时候——不是所有时候，但大多数时候——这都能行得通。',
						'逗比通过亲身体验学到每一件事。每一次。没有例外。他们从来没有读过一个警告标签，然后想"幸好我读了"。他们是事后读的警告标签，缓缓点头，说一声"嗯，对，确实"。'
					]
				},
				{
					h2: '第二部分：历史上的逗比',
					paragraphs: [
						'逗比自有记录的历史以来就存在了，甚至可能更早。几乎可以肯定，第一个碰火看看会怎样的人就是逗比。几乎可以肯定，第一个站上圆木漂下河从而发明了船的人也是逗比，不是因为他们计划发明船，而是因为他们站上了圆木。船对所有人来说都是一个惊喜，包括他们自己。',
						'宫廷弄臣被称为愚人，而他们是唯一被允许对国王说真话的人。想想吧。那个看起来最不尊重传统的人，在结构意义上，是房间里最诚实的人。逗比一直都知道一些事情。他们只是用一个不同的方向来知道这些事情。',
						'人类历史上许多最伟大的时刻，都是因为某个人在没怎么仔细想的情况下做了一件他们可能不应该做的事。逗比是意外进步的引擎。他们本没有打算发现它。他们只是正好在那一带。'
					]
				},
				{
					h2: '第三部分：逗比的核心特质（田野调查）',
					paragraphs: [
						{
							trait: '特质一：信息到来之前的自信。',
							text: '逗比先产生自信，然后按需收集证据——这在技术上是逆向的，但有一个明显的优势：速度。当那个谨慎的人还在做风险评估时，逗比已经开始了，可能已经失败了，重新整合了，带着比风险评估更多的信息再次开始了。当科学家在实验室里这样做时，这叫做"实证学习"。当逗比这样做时，这叫做"那次事件"。'
						},
						{
							trait: '特质二：无与伦比的即兴能力。',
							text: '逗比没有备选方案B。他们有更好的东西：到了那里自然会想出办法的完全自信。他们通常确实能做到。不总是优雅地。不总是没有附带伤害。但他们做到了。能走进一个没有任何准备的情况并以某种方式处理好它，哪怕"处理好了"在那句话里承受了很大的压力，这是某种真正了不起的事情。'
						},
						{
							trait: '特质三：魅力。',
							text: '不管是面对鹈鹕、海关官员，还是一匹带着正式投诉的马，逗比真的相信他们可以把任何情况说进去或说出来。他们这样做不是通过精心的修辞或战略性沟通，而是通过纯粹的存在感和一个从未考虑过这可能行不通的人所特有的能量。说真的，鹈鹕当时有点懵。'
						},
						{
							trait: '特质四：对这件事的忠诚。',
							text: '如果逗比承诺了某件事——一个玩笑，一个计划，一个发音错误的词，一个他们已经发给十五个人的不正确的统计数据——他们会坚持到底。在半途中改变方向需要承认最初的方向是错的，这是非常智者的做法，而逗比觉得这几乎在身体上是不可能的。这是一个缺点。不知为何，这也是一种完整性。'
						},
						{
							trait: '特质五：周二问题。',
							text: '每个逗比都有一个周二。也许字面意义上不是周二。也许是预算。也许是先读后同意。也许是不在凌晨两点回复消息。有一个规律。逗比知道这个规律。逗比知道这个规律已经好几年了。逗比还没有解决这个规律。但逗比已经给这个规律命名了，这是第一步，这有分量，逗比为此感到自豪。'
						}
					]
				},
				{
					h2: '第四部分：社交场合中的逗比',
					paragraphs: [
						'派对上的逗比是一个事件。他们带着一个正在进行中的故事到达。那个故事关于来这里途中发生的事情，而且已经比智者带来的任何东西都要有趣，智者带来了一瓶经过研究的酒和十七个决定不分享的地缘政治观点。',
						'逗比会说一些他们立刻后悔的话，然后在上面继续建构而不是退缩。逗比会分享一个无法溯源的统计数据。逗比会陷入一场他们毫无准备的辩论，只靠感觉独自打过去，每次都在不明显失地的情况下巧妙转向，从未在技术上让步。',
						'派对上的每个人都记得逗比。不总是亲切地记得，不总是准确地记得，但永远都会记得。'
					]
				},
				{
					h2: '第五部分：逗比与鹈鹕',
					paragraphs: [
						'鹈鹕把逗比吵醒了。这对鹈鹕来说本就是一个错误——喝咖啡之前的逗比完全是另一种生物——但我们先把这一点放在一边。逗比的第一反应是用鸟语来协商。他们不会说鸟语。他们说鸟语的方式就像他们说日语一样，充满自信且满是错误，不知为何这传达了某种信息，因为在一门语言里的自信本身就是这门语言的九成。',
						'鹈鹕没有成功被撩到。手机最终通过不甚明了的方式被取了回来。逗比现在有了一个关于这件事的精彩故事。每次说起时故事都会变得更好。到明年，鹈鹕将会变成三只，手机将会变成他们的整个钱包。',
						'鹈鹕拒绝置评。'
					]
				},
				{
					h2: '第六部分：那匹马的邮件',
					paragraphs: [
						'你已读不回了。我们来聊聊这件事。',
						'那匹马写信给你了。那匹马——有蹄子、没有对生拇指，因此要么用语音输入软件要么凭借纯粹的意志力打完了那整封邮件——带着已读回执正式联系了你。这不是随意的沟通。这是那匹马在说：我有话要对你说，我想知道你听到了。',
						'你已读不回了。',
						'这没关系。这很符合你的风格。邮件还在那里。已经在那里一段时间了。那匹马知道你读了它。那匹马在等。那匹马没有别的计划；马出了名地没有繁忙的日程。总有一天你会打开那封邮件，它会包含一些你需要听到的东西，你会以你特有的逗比方式庆幸自己最终看了它。',
						'准备好了就回复。那匹马不会去任何地方。从字面意义上来说。它是一匹马。'
					]
				},
				{
					h2: '第七部分：总之，你很了不起',
					paragraphs: [
						'世界需要智者，是的。世界需要那些读脚注、核查样本量、安排后续与马沟通的人。世界离了他们真的无法运转。',
						'但世界也需要你。世界需要那个在弄清楚它能漂之前就站上了圆木的人。世界需要那个用鸟语对鹈鹕说话并以某种方式成功的人。世界需要那个在人生的奶酪演讲里说一声"好的"就切换到问答环节、拍拍灰尘再来一次的人。',
						'逗比没有计划。逗比有更好的东西：身处其中并想办法的完全彻底的意愿。这不是没什么。这实际上相当了不起。',
						'明天还是周二。这次你会做出不同的决定。或者你不会，你会有另一个精彩的故事。不管怎样，都会是某种东西。'
					]
				}
			]
		}
	},

	de: {
		layout: {
			logo: 'denk wie ein Genie',
			skipLink: 'Zum Hauptinhalt springen',
			githubAriaLabel: 'jimbot9k auf GitHub, öffnet in neuem Tab',
			switchToLight: 'Helles Design aktivieren',
			switchToDark: 'Dunkles Design aktivieren',
			langLabel: 'Sprache auswählen',
			headerAriaLabel: 'Seitenheader',
			logoAriaLabel: 'Denk wie ein Genie, Startseite',
			donateLabel: 'Der Pelikan arbeitet nicht umsonst.',
			donateAriaLabel: 'Bitcoin-Spendenadresse kopieren',
			copiedLabel: 'Kopiert.',
			footerAriaLabel: 'Seitenfußer'
		},
		quiz: {
			meta: {
				title: 'denk wie ein Genie',
				description:
					'Ein 10-Fragen-Persönlichkeitstest über Pelikane, Zauberer und ob du wie ein Genie denkst oder wie ein Narr handelst.'
			},
			intro: {
				heading: 'Eine kurze, wichtige Klarstellung.',
				body: [
					'Dies ist eine kognitive Auswertung mit 10 Fragen, die feststellen soll, ob du wie ein Genie denkst oder wie ein Narr handelst. Sie wurde von Forschern entwickelt, die das sehr ernst nehmen, und sie würden es vorziehen, wenn du das auch tätest.',
					'Die Auswertung funktioniert, indem dir eine Reihe von Szenarien präsentiert wird (soziale, finanzielle, metaphysische) und die Qualität deiner Instinkte gemessen wird. Es gibt keine Fangfragen. Es gibt jedoch Fragen über Pelikane, Zauberer und die Bonität deines Schattens.',
					'Genies begegnen der Welt mit Klarheit, Absicht und leichtem Misstrauen gegenüber Gänsen. Narren begegnen ihr mit Energie, Selbstvertrauen und einem nahezu vollständigen Fehlen von Konsequenz.',
					'Am Ende wirst du eingestuft. Die Einstufung ist bindend. Antworte ehrlich. Die Auswertung weiß, wann du schauspielst.'
				],
				cta: 'Auswertung beginnen'
			},
			questionLabel: (c, t) => `Frage ${c} von ${t}`,
			progressAriaLabel: (c, t) => `Quiz-Fortschritt, Frage ${c} von ${t}`,
			questions: [
				{
					text: 'Du wachst auf und ein Pelikan sitzt auf deiner Brust. Er hält dein Handy. Er sieht nicht freundlich aus. Du:',
					answers: [
						{ text: 'Versuchst sofort, ihn anzumachen. Du sprichst Vogelsprache.', score: -2 },
						{
							text: 'Schreist „was zur Hölle ist das hier" bis sich die Situation von selbst löst.',
							score: -1
						},
						{
							text: 'Bleibst ruhig, analysierst die Lage und verhandelst vorsichtig dein Handy zurück.',
							score: 1
						},
						{
							text: 'Beobachtest seine Körpersprache, erkennst sein Ziel und führst einen strategischen Rückholplan aus.',
							score: 2
						}
					]
				},
				{
					text: 'Ein Zauberer schreibt dir eine DM und bietet dir unbegrenztes Wissen über EIN Thema. Du hast vier Sekunden. Du:',
					answers: [
						{
							text: 'Antwortest mit „ok" und tippst das erste Wort, das dir einfällt. Es ist „Nudeln".',
							score: -2
						},
						{
							text: 'Sagst „Vibes" und weißt den Rest deines Lebens alles über Vibes.',
							score: -1
						},
						{
							text: 'Fragst, ob „alles" zählt. Zögerst. Verhandelst. Nutzt die vier Sekunden voll aus.',
							score: 1
						},
						{
							text: 'Identifizierst sofort das nützlichste Wissensgebiet und entscheidest ohne Zögern.',
							score: 2
						}
					]
				},
				{
					text: 'Du öffnest TikTok und jedes einzelne Video zeigt jemanden, der falsche Dinge mit absolutem Selbstvertrauen erklärt. Du:',
					answers: [
						{
							text: 'Stimmst allem zu. Das Selbstvertrauen ist ansteckend und ehrlich gesagt irgendwie inspirierend.',
							score: -2
						},
						{
							text: 'Findest es merkwürdig, scrollst aber weiter. Vielleicht wissen die etwas, das du nicht weißt.',
							score: -1
						},
						{ text: 'Überprüfst die verdächtigsten Behauptungen, bevor du irgendetwas teilst.', score: 1 },
						{
							text: 'Recherchierst Originalquellen, prüfst Qualifikationen und hinterlässt höflich zitierte Korrekturen.',
							score: 2
						}
					]
				},
				{
					text: 'Dein Schatten trifft seit drei Jahren andere Lebensentscheidungen als du. Seine Bonität ist besser und er hat eine Mitgliedschaft im Fitnessstudio. Du:',
					answers: [
						{ text: 'Konfrontierst ihn öffentlich. Dieser Schatten macht das nicht mit.', score: -2 },
						{
							text: 'Fühlst dich persönlich angegriffen, postest einen vagen Tweet über Verrat und machst weiter.',
							score: -1
						},
						{
							text: 'Fragst ihn respektvoll, was er anders macht, und machst dir Notizen.',
							score: 1
						},
						{
							text: 'Verlangst eine vollständige Aufschlüsselung seiner Entscheidungen, erkennst die Wendepunkte und passt dich sofort an.',
							score: 2
						}
					]
				},
				{
					text: 'Ein Pferd schickt dir eine formelle E-Mail mit Lesebestätigung. Betreff: „Bezüglich Ihrer jüngsten Entscheidungen". Du:',
					answers: [
						{ text: 'Lässt sie unbeantwortet auf „gelesen". Du machst das heute nicht.', score: -2 },
						{
							text: 'Öffnest sie, liest bis Absatz zwei, schließt sie und sagst dir, du kümmerst dich später darum.',
							score: -1
						},
						{
							text: 'Liest alles durch, auch wenn es unangenehm ist. Zeit für Konsequenz.',
							score: 1
						},
						{
							text: 'Liest sie sorgfältig, entwirfst eine strukturierte Antwort und planst ein Folgegespräch ein.',
							score: 2
						}
					]
				},
				{
					text: 'Der Familienchat dreht wegen einer Statistik völlig durch, die jemand von einem zufälligen Account mit 47 Followern gemacht hat. Du:',
					answers: [
						{
							text: 'Fügst drei Flammen-Emojis hinzu und hilfst beim Verbreiten. Du gestaltest Kultur.',
							score: -2
						},
						{ text: 'Reagierst mit einem lachenden Emoji und machst weiter. Stimmt schon ungefähr.', score: -1 },
						{ text: 'Googelst es kurz, bevor du zum Chaos beiträgst.', score: 1 },
						{
							text: 'Findest die Originalstudie, prüfst Stichprobengröße und Methodik und postest den tatsächlichen Kontext.',
							score: 2
						}
					]
				},
				{
					text: 'Du bist in einer Diskussion und merkst nach dreißig Sekunden, dass die andere Person völlig recht hat und du komplett falsch liegst. Du:',
					answers: [
						{ text: 'Verdoppelst deinen Einsatz. Jetzt nachzugeben wäre mega peinlich.', score: -2 },
						{
							text: 'Verstummst, wechselst das Thema und hoffst, dass niemand mitbekommen hat, was passiert ist.',
							score: -1
						},
						{ text: 'Räumst den Punkt ein, ohne zu viel Würde zu verlieren.', score: 1 },
						{
							text: 'Gibst sofort nach, lobst das Argument und bittest um mehr Erklärungen. Du bist sicher in dir.',
							score: 2
						}
					]
				},
				{
					text: 'Wissenschaftler verkünden, dass jede Entscheidung, die du jemals an einem Dienstag getroffen hast, falsch war. Alle. Ohne Ausnahme. Du:',
					answers: [
						{
							text: 'Streichst Dienstage sofort aus deinem Haushalt. Zeit für eine Umstrukturierung.',
							score: -2
						},
						{
							text: 'Redest dir ein, dass die meisten Dienstage eigentlich in Ordnung waren. Machst weiter.',
							score: -1
						},
						{
							text: 'Setzt dich hin und gehst deine Dienstag-Entscheidungen wirklich durch, um das Muster zu finden.',
							score: 1
						},
						{
							text: 'Analysierst das Dienstag-Fehlermuster systematisch, erstellst eine Entscheidungs-Checkliste und setzt sie ein.',
							score: 2
						}
					]
				},
				{
					text: 'Du bist seit 40 Minuten mitten in einer sehr selbstsicheren Präsentation über Käse, als du merkst, dass buchstäblich nichts davon stimmt. Du:',
					answers: [
						{
							text: 'Steigerst das Selbstvertrauen. Du kannst keine Schwäche zeigen. Manipulierst den Raum.',
							score: -2
						},
						{
							text: 'Sagst „na jedenfalls" und wechselst zur Frage-Antwort-Runde. Die Zuschauer werden es schon herausfinden.',
							score: -1
						},
						{ text: 'Hörst auf, gibst den Fehler zu und gibst eine kurze, korrigierte Zusammenfassung.', score: 1 },
						{
							text: 'Hörst mitten im Satz auf, erklärst genau, was falsch gelaufen ist, gibst die richtigen Informationen und entschuldigst dich beim Käse.',
							score: 2
						}
					]
				},
				{
					text: 'Du kommst zu einer Dinnerparty und es stellt sich heraus, dass es ein Vorstellungsgespräch für einen Job ist, den du nicht willst – durchgeführt von einem Gremium aus Eulen. Du:',
					answers: [
						{
							text: 'Brichst im Vorstellungsgespräch vollständig aus. Du bist anders als andere.',
							score: -2
						},
						{
							text: 'Machst halbherzig mit und vermittelst: „Ich bin hier, aber nicht wirklich."',
							score: -1
						},
						{
							text: 'Klärst höflich die Situation und fragst, ob die Teilnahme tatsächlich verpflichtend ist.',
							score: 1
						},
						{
							text: 'Bewertest, was die Eulen brauchen, prüfst, ob deine Fähigkeiten passen, und triffst bewusst eine Entscheidung.',
							score: 2
						}
					]
				}
			],
			resultAriaLabel: 'Dein Ergebnis',
			brilliant: {
				h2: 'Du denkst wie ein Genie.',
				p: 'Du gehst mit Neugier, Strenge und Geduld an Probleme heran. Du aktualisierst deine Überzeugungen, wenn die Beweise es erfordern, und hast lieber recht als dich gut zu fühlen. Die schwierigen Fragen machen dir keine Angst. Sie faszinieren dich.',
				scoreLabel: (s) => `Punkte: ${s > 0 ? '+' : ''}${s}`,
				exploreLink: 'mehr dazu erfahren →',
				exploreLinkClass: 'explore-link brilliant-link',
				imgAlt: 'Illustration für das Ergebnis „Denk wie ein Genie"'
			},
			fool: {
				h2: 'Du handelst wie ein Narr.',
				p: 'Du führst mit Instinkt, Selbstvertrauen und wunderschöner Rücksichtslosigkeit. Details machen dir nicht zu schaffen. Du lässt die Details schwitzen. Die Welt nennt es Chaos. Du nennst es Dienstag.',
				scoreLabel: (s) => `Punkte: ${s}`,
				exploreLink: 'mehr dazu erfahren →',
				exploreLinkClass: 'explore-link fool-link',
				imgAlt: 'Illustration für das Ergebnis „Handle wie ein Narr"'
			},
			percentileMessage: (p, result) => {
				if (result === 'brilliant') {
					if (p >= 95)
						return `unter den besten ${100 - p + 1}% aller, die dem Pelikan begegnet sind. Die Eulen haben dich auf einer Shortlist.`;
					if (p >= 80)
						return `höher als ${p}% aller Teilnehmenden. Der Zauberer würde dir ein gutes Thema geben.`;
					if (p >= 60) return `du hast ${p}% aller übertroffen. Ruhig und sicher genial.`;
					if (p >= 50)
						return `knapp über der Mittellinie, ein bescheidenes Genie, was ehrlich gesagt die glaubwürdigste Art ist.`;
					return `technisch gesehen genial. Praktisch gesehen mittelmäßig. Das Pferd hat das schon gesehen und hat Gedanken dazu.`;
				} else {
					if (p <= 5)
						return `unterste ${p + 1}%. Du bist statistisch gesehen der Pelikan. Der Pelikan hat keine Anmerkungen.`;
					if (p <= 20)
						return `nur ${p}% der Leute haben niedriger gepunktet. Ein überzeugter Narr. Tief und authentisch auf Linie.`;
					if (p <= 40)
						return `${p}% der Leute haben niedriger gepunktet. Ein treuer Narr. Das Flammen-Emoji im Chat war definitiv von dir.`;
					if (p <= 55)
						return `um den Mittelpunkt schwebend. du bist der Narr, der es fast nicht war. Das Pferd ist verwirrt, aber unterstützend.`;
					return `höher als ${p}% aller, die mit dem Pelikan saßen, was viel für einen Narren ist. Der Pelikan ist wirklich erschüttert.`;
				}
			},
			tallying: 'Ergebnisse werden ausgewertet…',
			pelicansCount: (n) => `${n.toLocaleString('de-DE')} Menschen haben im Pelikan-Stuhl gesessen`,
			restart: 'Quiz wiederholen',
			statsAriaLabel: 'Punktestatistik'
		},
		brilliant: {
			meta: {
				title: 'Das Genie: Ein Feldführer',
				description:
					'Ein umfassender, begutachteter und ehrlich gesagt erschöpfender Tiefen-Einblick, was es bedeutet, wie ein Genie zu denken.'
			},
			back: 'zurück zum Quiz',
			backAriaLabel: 'Zurück zur Quiz-Startseite',
			heroAlt: 'Denk wie ein Genie',
			h1: 'Du denkst wie ein Genie.',
			subtitle:
				'Ein umfassender, begutachteter und ehrlich gesagt erschöpfender Tiefen-Einblick in das, was das für dich, die Gesellschaft und den Pelikan bedeutet.',
			takeAgain: 'Nochmal machen',
			takeAgainAriaLabel: 'Quiz wiederholen',
			parts: [
				{
					h2: 'Teil I: Was ist ein Genie überhaupt?',
					paragraphs: [
						'Ein Genie ist nicht einfach eine kluge Person. Viele kluge Menschen sind Idioten. Ein Genie ist eine Person, die Frieden mit dem Nichtwissen gemacht hat, was ironisch ist, denn Nichtwissen ist extrem unangenehm, und die meisten Menschen würden lieber sterben, als länger als fünfundvierzig Sekunden mit einer unbeantworteten Frage zu sitzen.',
						'Das Genie sitzt damit. Das Genie kocht eine Tasse Tee, zieht einen Stuhl heran und sagt zur unbeantworteten Frage: \u201eHallo. Du siehst kompliziert aus. Ich möchte dich verstehen. Das könnte etwas Zeit brauchen. Ich habe meinen Kalender freigeräumt.\u201c Die unbeantwortete Frage ist, ehrlich gesagt, verblüfft. Niemand hat sie jemals so behandelt. Die meisten Leute googeln einfach das erste Ergebnis und machen weiter. Das Genie liest die Quellenangaben.',
						'Das ist sowohl ein Geschenk als auch ein Fluch, denn das Genie kommt oft zu spät.'
					]
				},
				{
					h2: 'Teil II: Der Ursprung des Genies',
					paragraphs: [
						'Historiker sind sich uneinig, wann das erste Genie auftauchte. Manche sagen, es war Aristoteles, der bekanntlich sagte, je mehr man weiß, desto mehr weiß man, dass man nichts weiß \u2014 genau die Art von Dinge, die ein Genie sagt, kurz bevor auf der Party alle in einen anderen Raum wechseln.',
						'Andere sagen, es war derjenige, der die Doppelblindstudie erfunden hat, denn diese Person blickte auf die gesamte Geschichte der menschlichen Selbsttäuschung und sagte \u201ewas wäre, wenn wir es schwieriger machen würden, uns selbst zu belügen\u201c, und alle anderen sagten \u201ewarum sollten wir das wollen\u201c, und das Genie sagte \u201eich erkläre es\u201c und machte das dann vierzig Jahre lang.',
						'Das Genie hat immer existiert. Es war das in der Höhle, das fragte \u201eaber WARUM brennt Feuer\u201c, während alle anderen nur versucht haben, ein Mammut zu kochen. Sie waren damals auch nervig, aber sie hatten recht, und schließlich haben die Leute es eingesehen.'
					]
				},
				{
					h2: 'Teil III: Schlüsseleigenschaften des Genies (dokumentiert)',
					paragraphs: [
						{
							trait: 'Eigenschaft 1: Gelassenheit beim Falschliegen.',
							text: ' Das Genie hat entdeckt, dass Falschliegen nicht tödlich ist. Das war auch für sie eine Überraschung. Sie lagen einmal bei etwas falsch und sind nicht gestorben. Sie haben ihr Überzeugungssystem aktualisiert. Sind weitergegangen. Sie suchen nun aktiv nach Situationen, in denen sie falsch liegen könnten, was ihre Freunde erschöpfend finden und was technisch gesehen nur \u201eintellektuelle Standards haben\u201c heißt.'
						},
						{
							trait: 'Eigenschaft 2: Die Unfähigkeit, ungeprüfte Statistiken zu teilen.',
							text: ' Wenn der Familienchat wegen einer Statistik von einem Account namens @WahrheitZone47 ausrastet, spürt das Genie ein körperliches Gefühl in der Brust. Es öffnet den Thread. Es sucht nach Quellen. Es findet heraus, dass die Statistik von jemandem in Bremen erfunden wurde, der einen schlechten Tag hatte. Es postet die Korrektur. Niemand reagiert darauf. Es postet sie trotzdem. Es wird sie immer posten.'
						},
						{
							trait: 'Eigenschaft 3: Verdächtig gut im Schätzen.',
							text: ' Das Genie hat irgendwann etwas über Fermi-Schätzung gelesen und hat sich davon nie wirklich erholt. Es kann jetzt ungefähr sagen, wie viele Klavierstimmer es in Hamburg gibt, wie lange es dauern würde, zum Mond zu laufen, und wie viele Liter Vanillepudding man bräuchte, um ein olympisches Schwimmbecken zu füllen. Niemand hat danach gefragt. Das Genie bietet es bereitwillig an.'
						},
						{
							trait: 'Eigenschaft 4: Das Aufschreiben.',
							text: ' Das Genie macht sich Notizen. Nicht nur bei der Arbeit oder in Vorlesungen. Überall. Auf dem Handy. In den Rändern von Quittungen. Auf dem Arm, wenn nötig. Es hat einen Notizordner mit 847 unsortierten Sprachmemos. Es hat ein Dokument namens \u201eIdeen \u2013 Diverses\u201c, das 34.000 Wörter lang ist. Es hat keines davon jemals wieder angeschaut. Der Akt des Festhaltens des Gedankens ist der Punkt. Der Gedanke ist sicher. Der Gedanke ist aufgezeichnet. Das Genie kann jetzt schlafen.'
						},
						{
							trait: 'Eigenschaft 5: Ein kompliziertes Verhältnis zu Selbstvertrauen.',
							text: ' Das Genie ist selbstbewusst, aber nicht auf laute Art. Es ist selbstbewusst auf die spezifische, tragende Art. Es sagt \u201eich bin mir da nicht sicher\u201c öfter als jeder andere Menschentyp, und paradoxerweise macht es das zuverlässiger als Menschen, die zu allem \u201edefinitiv\u201c sagen. Wenn ein Genie sagt, es ist sich sicher, dann ist es das. Man kann ein Haus darauf bauen. Man kann damit vor Gericht gehen. Man kann es beim Weihnachtsessen ansprechen.'
						}
					]
				},
				{
					h2: 'Teil IV: Das Genie in sozialen Situationen',
					paragraphs: [
						'Das Genie auf einer Dinnerparty ist ein faszinierendes Exemplar. Es kommt etwas zu spät, weil es noch eine Sache gelesen hat. Es bringt recherchierten Wein mit. Es hört mehr zu als es spricht, was die Leute entweder erfrischend oder beunruhigend finden, je nachdem, ob sie selbst ein Genie sind.',
						'Wenn ein Thema aufkommt, über das sie wenig wissen, sagt das Genie \u201eda kenne ich mich nicht so gut aus, erzähl mir mehr davon\u201c. Wenn ein Thema aufkommt, über das sie viel wissen, sagen sie \u201eda gibt es eigentlich interessante Nuancen\u201c und spüren dann sofort die Energie im Raum und entscheiden sich, es für jemanden aufzusparen, der es wissen möchte.',
						'Das Genie hat siebzehn Meinungen, auf deren richtigen Moment zu teilen es wartet. Dieser Moment ist nicht gekommen. Es hat diese Meinungen seit 2021. Sie sind noch gültig. Es behält sie.'
					]
				},
				{
					h2: 'Teil V: Das Genie und der Pelikan',
					paragraphs: [
						'Die Pelikan-Frage \u2014 die grundlegende Frage dieser Auswertung \u2014 ist entscheidend. Denn das Genie hat beim Vorfinden eines Pelikans auf seiner Brust, der sein Handy hält, nicht in Panik verfallen. Es beobachtete. Es bewertete. Es fragte: Was will dieser Pelikan? Ist es das Handy speziell, oder repräsentiert das Handy etwas? Ist dieser Pelikan eine Metapher? Ist das ein Donnerstag? Das sind vernünftige Fragen.',
						'Das Genie weiß, dass die meisten Probleme, auch solche mit Pelikanen, eine innere Logik haben. Findet man die Logik, findet man die Lösung. Der Pelikan hat Motivationen. Der Pelikan hat einen Kontext. Der Pelikan ist nicht einfach ein Chaos-Agent \u2014 er ist ein System, und Systeme können verstanden werden.',
						'Das Genie bekam sein Handy zurück. Es lernte auch drei Fakten über das Verhalten von Pelikanen, die es vorher nicht wusste. Es schrieb sie in seine Notizen-App. Das Dokument heißt \u201ePelikan \u2013 Diverses\u201c. Es ist 400 Wörter lang. Es gibt ein Folgepapier namens \u201ePelikan \u2013 Weiterführende Lektüre\u201c. Das Genie bereut das nicht.'
					]
				},
				{
					h2: 'Teil VI: Was das für deine Zukunft bedeutet',
					paragraphs: [
						'Dir wird es gut gehen. Mehr als gut, eigentlich. Du wirst die Person im Raum sein, die weiß, wovon sie spricht, die ihre Meinung ändert, wenn die Beweise es erfordern, und die Fragen stellt, die andere Menschen gleichzeitig etwas gesehen und etwas unwohl fühlen lassen.',
						'Du wirst bei Dingen recht haben, bevor andere Menschen es tun. Das ist sowohl eine Superkraft als auch eine unaufhörliche Quelle geringer Frustration, die du durch Journaling, Spaziergänge und gelegentliches Rechthabenausleben gelernt hast zu managen, wenn die Einsätze hoch genug sind, um es zu rechtfertigen.',
						'Die Eulen respektieren dich. Die E-Mail des Pferdes wartet. Das Angebot des Zauberers steht.',
						'Geh und sei ein Genie. Du bist es bereits.'
					]
				}
			]
		},
		fool: {
			meta: {
				title: 'Der Narr: Eine Hommage',
				description:
					'Eine gründliche, liebevolle und nur leicht besorgte Betrachtung des Narren. Der Pelikan möchte sich nicht äußern.'
			},
			back: 'zurück zum Quiz',
			backAriaLabel: 'Zurück zur Quiz-Startseite',
			heroAlt: 'Handle wie ein Narr',
			h1: 'Du handelst wie ein Narr.',
			subtitle:
				'Eine gründliche, liebevolle und nur leicht besorgte Betrachtung des Narren: wer er ist, wie er hierher gekommen ist, und warum der Pelikan, ehrlich gesagt, keine Chance hatte.',
			takeAgain: 'Nochmal machen',
			takeAgainAriaLabel: 'Quiz wiederholen',
			parts: [
				{
					h2: 'Teil I: Zur Verteidigung des Narren',
					paragraphs: [
						'Eines möchte ich klarstellen: Der Narr ist nicht dumm. Der Narr hat einfach entschieden, dass die Entfernung zwischen einer Frage und einer Antwort nicht sehr groß sein muss, und arbeitet nach diesem Prinzip so lange, dass es sich jetzt wie ein Persönlichkeitsmerkmal anfühlt, weil es das ist.',
						'Der Narr ist die Person, die die Entscheidung bereits getroffen hat, bevor du fertig erklärt hast. Er bewegt sich bereits. Er ist bereits engagiert. Der Plan, im traditionellen Sinne des Wortes, wurde übersprungen, aber eine Art schönes kinetisches Selbstvertrauen wurde an seiner Stelle eingesetzt, und die meiste Zeit \u2014 nicht immer, aber meistens \u2014 geht das gut aus.',
						'Der Narr hat Dinge auf die harte Tour gelernt. Jedes einzelne Mal. Ohne Ausnahme. Er hat niemals einen Warnhinweis gelesen und dann gedacht \u201egut, dass ich das gelesen habe\u201c. Er hat den Warnhinweis nachher gelesen, langsam genickt und gesagt \u201eja, das klingt richtig\u201c.'
					]
				},
				{
					h2: 'Teil II: Der historische Narr',
					paragraphs: [
						'Der Narr existiert seit dem Beginn der aufgezeichneten Geschichte und möglicherweise auch davor. Es war mit ziemlicher Sicherheit ein Narr, der das Feuer zuerst berührte, um zu sehen, was passiert. Es war mit ziemlicher Sicherheit ein Narr, der auf einen Baumstamm stieg und einen Fluss hinunter trieb und Boote erfand, nicht weil er plante, Boote zu erfinden, sondern weil er auf einen Baumstamm stieg. Das Boot war eine Überraschung für alle, auch für ihn.',
						'Hofnarren wurden Narren genannt, und sie waren die einzigen, denen es erlaubt war, dem König die Wahrheit zu sagen. Denke daran. Die Person mit der scheinbar geringsten Ehrerbietung für die Konvention war, strukturell gesehen, die ehrlichste Person im Raum. Der Narr hat immer Dinge gewusst. Er hat sie nur in eine andere Richtung gewusst.',
						'Viele der größten Momente der Menschheitsgeschichte wurden durch jemanden verursacht, der etwas getan hat, was er wahrscheinlich nicht hätte tun sollen, ohne zu lange darüber nachzudenken. Der Narr ist der Motor des zufälligen Fortschritts. Er wollte es nicht entdecken. Er war einfach in der Gegend.'
					]
				},
				{
					h2: 'Teil III: Schlüsseleigenschaften des Narren (im Feld beobachtet)',
					paragraphs: [
						{
							trait: 'Eigenschaft 1: Selbstvertrauen vor der Information.',
							text: ' Der Narr ist zuerst selbstbewusst und sammelt dann bei Bedarf Beweise, was technisch gesehen rückwärts ist, aber einen deutlichen Vorteil hat: Geschwindigkeit. Wenn die vorsichtige Person mit ihrer Risikobewertung fertig ist, hat der Narr bereits angefangen, möglicherweise versagt, sich neu formiert und noch einmal mit mehr Informationen angefangen, als die Risikobewertung geliefert hätte. Das nennt man \u201eempirisches Lernen\u201c, wenn Wissenschaftler es in Labors machen. Wenn der Narr es macht, nennt man es \u201eden Vorfall\u201c.'
						},
						{
							trait: 'Eigenschaft 2: Eine tadellose Fähigkeit zu improvisieren.',
							text: ' Der Narr hat keinen Plan B. Er hat etwas Besseres: das vollständige Vertrauen, dass er es herausfinden wird, wenn er dort ankommt. Und das tut er meistens. Nicht immer elegant. Nicht immer ohne Kollateralschäden. Aber er kommt an. Er findet es heraus. Es ist wirklich bemerkenswert, jemanden zu sehen, der in eine Situation ohne Vorbereitung hineingehen und irgendwie gehandhabt heraus kommen kann, auch wenn \u201egehandhabt\u201c in diesem Satz viel schwere Arbeit leistet.'
						},
						{
							trait: 'Eigenschaft 3: Der Charme.',
							text: ' Ob es ein Pelikan, ein Zollbeamter oder ein Pferd mit einer formellen Beschwerde ist \u2014 der Narr glaubt wirklich, dass er sich in alles oder aus allem herausreden kann. Und das tut er nicht durch sorgfältige Rhetorik oder strategische Kommunikation, sondern durch bloße Präsenz und die Energie von jemandem, der noch nie auch nur ansatzweise in Betracht gezogen hat, dass dies nicht funktionieren könnte. Der Pelikan, ehrlich gesagt, war erschüttert.'
						},
						{
							trait: 'Eigenschaft 4: Loyalität zur Sache.',
							text: ' Wenn der Narr sich zu etwas verpflichtet \u2014 einem Witz, einem Plan, einem falsch ausgesprochenen Wort, einer falschen Statistik, die er bereits mit fünfzehn Personen geteilt hat \u2014 zieht er es durch. Den Kurs zu ändern würde erfordern, zuzugeben, dass die ursprüngliche Richtung falsch war, was etwas ist, das ein Genie tut und was der Narr fast physisch unmöglich findet. Das ist ein Fehler. Es ist auch, irgendwie, eine Form von Integrität.'
						},
						{
							trait: 'Eigenschaft 5: Das Dienstag-Problem.',
							text: ' Jeder Narr hat einen Dienstag. Vielleicht ist es nicht buchstäblich Dienstag. Vielleicht ist es das Budget. Vielleicht ist es das Lesen, bevor man zustimmt. Vielleicht ist es das Nicht-Antworten auf E-Mails um 2 Uhr morgens. Es gibt ein Muster. Der Narr kennt das Muster. Der Narr kennt das Muster seit mehreren Jahren. Der Narr hat das Muster nicht behoben. Der Narr hat das Muster jedoch benannt, was Schritt eins ist, und das zählt für etwas, und der Narr ist stolz darauf.'
						}
					]
				},
				{
					h2: 'Teil IV: Der Narr in sozialen Situationen',
					paragraphs: [
						'Der Narr auf einer Dinnerparty ist ein Ereignis. Er kommt mit einer Geschichte an, die bereits in vollem Gange ist. Die Geschichte handelt von etwas, das auf dem Weg hierher passiert ist, und sie ist bereits interessanter als alles, was das Genie mitgebracht hat, nämlich eine Flasche recherchierten Wein und siebzehn Meinungen zur Geopolitik, die es beschlossen hat, nicht zu teilen.',
						'Der Narr wird etwas sagen, was er sofort bereut, und dann darauf aufbauen, anstatt zurückzurudern. Der Narr wird eine Statistik teilen, die er nicht belegen kann. Der Narr wird in eine Debatte geraten, auf die er nicht vorbereitet ist, und sie allein mit Bauchgefühl durchkämpfen, langsam Boden verlieren und jedes Mal reibungslos schwenken, ohne jemals technisch einen Punkt zuzugeben.',
						'Alle auf der Party erinnern sich an den Narren. Nicht immer wohlwollend, nicht immer korrekt, aber immer.'
					]
				},
				{
					h2: 'Teil V: Der Narr und der Pelikan',
					paragraphs: [
						'Der Pelikan hat den Narren geweckt. Das war bereits ein Fehler des Pelikans \u2014 der Narr vor dem Kaffee ist ein völlig anderes Wesen \u2014 aber das wollen wir beiseitelassen. Der erste Instinkt des Narren war, in Vogelsprache zu verhandeln. Er spricht keine Vogelsprache. Er spricht Vogelsprache wie er Englisch spricht: selbstsicher und falsch, und irgendwie kommuniziert das etwas, denn Selbstvertrauen in einer Sprache ist neunzig Prozent der Sprache.',
						'Der Pelikan ließ sich nicht beeindrucken. Das Handy wurde schließlich auf ungeklärte Weise zurückgeholt. Der Narr hat jetzt eine tolle Geschichte darüber. Die Geschichte wird jedes Mal besser, wenn er sie erzählt. Nächstes Jahr werden es drei Pelikane gewesen sein und das Handy sein gesamtes Portemonnaie.',
						'Der Pelikan möchte sich nicht äußern.'
					]
				},
				{
					h2: 'Teil VI: Die E-Mail des Pferdes',
					paragraphs: [
						'Du hast sie auf \u201egelesen\u201c stehen lassen. Lass uns darüber reden.',
						'Das Pferd hat dir geschrieben. Das Pferd, das Hufe hat und keinen Daumen zum Gegenhalten und daher die gesamte E-Mail entweder mit Diktiersoftware oder schierem Entschluss getippt hat, hat sich formell mit aktivierten Lesebestätigungen gemeldet. Das war keine lockere Kommunikation. Das war das Pferd, das sagt: Ich habe etwas, das ich dir sagen möchte, und ich möchte wissen, dass du es gehört hast.',
						'Du hast sie auf \u201egelesen\u201c stehen lassen.',
						'Das ist in Ordnung. Das bist sehr du. Die E-Mail ist noch da. Sie ist schon eine Weile da. Das Pferd weiß, dass du sie gelesen hast. Das Pferd wartet. Das Pferd hat keine anderen Pläne; Pferde haben bekanntermaßen keine vollen Terminkalender. Eines Tages wirst du diese E-Mail öffnen, und sie wird etwas enthalten, das du hören musstest, und du wirst auf deine besondere Narren-Art froh sein, dass du schließlich dazu gekommen bist.',
						'Antworte, wenn du bereit bist. Das Pferd geht nirgendwo hin. Buchstäblich. Es ist ein Pferd.'
					]
				},
				{
					h2: 'Teil VII: Zum Schluss \u2014 Du bist großartig',
					paragraphs: [
						'Die Welt braucht Genies, ja. Die Welt braucht Menschen, die die Fußnoten lesen und die Stichprobengrößen prüfen und Folgegespräche mit Pferden planen. Die Welt kann ohne sie wirklich nicht funktionieren.',
						'Aber die Welt braucht auch dich. Die Welt braucht die Person, die auf den Baumstamm steigt, bevor sie herausgefunden hat, ob er schwimmt. Die Welt braucht die Person, die zu einem Pelikanen in Vogelsprache spricht und es irgendwie zum Laufen bringt. Die Welt braucht die Person, die \u201ena jedenfalls\u201c sagt und während der Käsepräsentation ihres Lebens zur Frage-Antwort-Runde übergegangen ist, den Staub abschüttelt und es nochmal versucht.',
						'Der Narr hat keinen Plan. Der Narr hat etwas Besseres: eine vollständige und totale Bereitschaft, in der Situation zu sein und es herauszufinden. Das ist nicht nichts. Das ist tatsächlich außergewöhnlich.',
						'Dienstag ist morgen. Diesmal wirst du eine andere Entscheidung treffen. Oder nicht, und du wirst eine weitere tolle Geschichte haben. So oder so wird es etwas sein.'
					]
				}
			]
		}
	}
};
