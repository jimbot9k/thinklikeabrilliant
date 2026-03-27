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
		questionImgAlts: string[];
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
		share: string;
		shareAriaLabel: string;
		shareCopied: string;
		shareText: (result: 'brilliant' | 'fool') => string;
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
			questionImgAlts: [
				'A pelican sits on a person’s chest holding their phone, looking deeply unfriendly',
				'A wizard’s message appears in a phone’s DM inbox, offering infinite knowledge on one topic',
				'A phone screen full of confidently delivered but completely wrong TikTok videos',
				'A shadow holding a gym membership card, its credit score chart looking suspiciously better than yours',
				'A horse at a desk composing a formal email with a read receipt enabled',
				'A group chat exploding with fire emojis over a screenshot from a 47-follower account',
				'Two people mid-debate, one slowly realising they are completely wrong',
				'Scientists presenting a chart of bad decisions, every single one on a Tuesday',
				'A presenter frozen in front of a cheese board, realising nothing they said was accurate',
				'An owl panel conducting a job interview at what was supposed to be a dinner party'
			],
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
			statsAriaLabel: 'Score statistics',
			share: 'share my result',
			shareAriaLabel: 'Share your result',
			shareCopied: 'link copied.',
			shareText: (result) =>
				result === 'brilliant'
					? `I have been officially classified as a Brilliant. The classification is binding. https://thinklikeabrilliant.pro`
					: `I have been officially classified as a Fool. The classification is binding. https://thinklikeabrilliant.pro`
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
			questionImgAlts: [
				'一只鹈鹕坐在一个人的胸口，拿着他们的手机，神情不善',
				'一条巫师的消息出现在手机的DM收件箱中，提供关于一个主题的无限知识',
				'一个充满自信但完全错误的TikTok视频的手机屏幕',
				'一个影子拿着健身房会员卡，它的信用评分表看起来明显比你的好',
				'一匹马坐在桌前，撰写一封附有已读回执的正式电子邮件',
				'一个群聊因来自47名粉丝账户的截图而爆发出大量火焰表情符号',
				'两人正在争论，其中一人慢慢意识到自己完全错了',
				'科学家展示一张全都发生在星期二的错误决策图表',
				'一名演示者在奶酪板前僵住，意识到所说的一切都是错误的',
				'一群猫头鹰在原本应该是晚宴的场合组成评审团进行招聘面试'
			],
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
			statsAriaLabel: '得分统计',
			share: '分享我的结果',
			shareAriaLabel: '分享你的测评结果',
			shareCopied: '链接已复制。',
			shareText: (result) =>
				result === 'brilliant'
					? `我已被正式认定为智者。该认定具有约束力。 https://thinklikeabrilliant.pro`
					: `我已被正式认定为逗比。该认定具有约束力。 https://thinklikeabrilliant.pro`
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
			questionImgAlts: [
				'Ein Pelikan sitzt auf der Brust einer Person und hält ihr Telefon, sieht alles andere als freundlich aus',
				'Eine Nachricht eines Zauberers erscheint im DM-Posteingang eines Handys und bietet unendliches Wissen zu einem Thema an',
				'Ein Handybildschirm voller TikTok-Videos, die falsche Informationen mit größter Überzeugung vortragen',
				'Ein Schatten hält eine Fitnessstudio-Mitgliedskarte, sein Kreditwert-Diagramm sieht verdächtig besser aus als deins',
				'Ein Pferd an einem Schreibtisch verfasst eine formelle E-Mail mit aktivierter Lesebestätigung',
				'Ein Gruppen-Chat explodiert mit Feuer-Emojis über einem Screenshot von einem Account mit 47 Followern',
				'Zwei Personen mitten in einer Debatte, eine erkennt langsam, dass sie völlig falsch liegt',
				'Wissenschaftler präsentieren ein Diagramm schlechter Entscheidungen, ausnahmslos alle an einem Dienstag',
				'Ein Referent erstarrt vor einem Käsebrett und erkennt, dass nichts davon stimmte',
				'Ein Eulen-Panel führt ein Vorstellungsgespräch durch, wo eigentlich eine Dinnerparty erwartet wurde'
			],
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
			statsAriaLabel: 'Punktestatistik',
			share: 'Ergebnis teilen',
			shareAriaLabel: 'Dein Ergebnis teilen',
			shareCopied: 'Link kopiert.',
			shareText: (result) =>
				result === 'brilliant'
					? `Ich wurde offiziell als Genie eingestuft. Die Einstufung ist bindend. https://thinklikeabrilliant.pro`
					: `Ich wurde offiziell als Narr eingestuft. Die Einstufung ist bindend. https://thinklikeabrilliant.pro`
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
	},

	es: {
		layout: {
			logo: 'piensa como un brillante',
			skipLink: 'Saltar al contenido principal',
			githubAriaLabel: 'jimbot9k en GitHub, abre en nueva pestaña',
			switchToLight: 'Cambiar a modo claro',
			switchToDark: 'Cambiar a modo oscuro',
			langLabel: 'Seleccionar idioma',
			headerAriaLabel: 'Encabezado del sitio',
			logoAriaLabel: 'Piensa como un Brillante, inicio',
			donateLabel: 'El pelícano no trabaja gratis.',
			donateAriaLabel: 'Copiar dirección de donación en Bitcoin',
			copiedLabel: 'Copiado.',
			footerAriaLabel: 'Pie de página'
		},
		quiz: {
			meta: {
				title: 'piensa como un brillante',
				description:
					'Un test de personalidad de 10 preguntas sobre pelícanos, magos y si piensas como un Brillante o actúas como un Bufón.'
			},
			intro: {
				heading: 'Una breve y muy importante aclaración.',
				body: [
					'Esto es una evaluación cognitiva de 10 preguntas diseñada para determinar si piensas como un Brillante o actúas como un Bufón. Fue desarrollada por investigadores que se lo toman muy en serio y preferirían que tú también lo hicieras.',
					'La evaluación funciona presentándote una serie de escenarios (sociales, financieros, metafísicos) y midiendo la calidad de tus instintos. No hay preguntas trampa. Sí hay, sin embargo, preguntas sobre pelícanos, magos y la puntuación crediticia de tu sombra.',
					'Los Brillantes responden al mundo con claridad, intención y leve desconfianza hacia los gansos. Los Bufones responden con energía, confianza y una ausencia casi total de seguimiento.',
					'Al final, serás clasificado. La clasificación es vinculante. Responde con honestidad. La evaluación sabe cuándo estás actuando.'
				],
				cta: 'Comenzar la evaluación'
			},
			questionLabel: (c, t) => `Pregunta ${c} de ${t}`,
			progressAriaLabel: (c, t) => `Progreso del test, pregunta ${c} de ${t}`,
			questionImgAlts: [
				'Un pelícano sentado sobre el pecho de una persona sosteniendo su teléfono, con expresión nada amistosa',
				'Un mensaje de un mago aparece en la bandeja de entrada de DM de un teléfono, ofreciendo conocimiento infinito sobre un tema',
				'Una pantalla de teléfono llena de vídeos de TikTok que difunden información errónea con total convicción',
				'Una sombra que sostiene una tarjeta de membresía del gimnasio, su gráfico de crédito sospechosamente mejor que el tuyo',
				'Un caballo en un escritorio redactando un correo electrónico formal con acuse de recibo activado',
				'Un chat grupal explotando con emojis de fuego por una captura de pantalla de una cuenta de 47 seguidores',
				'Dos personas a mitad de un debate, una dándose cuenta lentamente de que está completamente equivocada',
				'Científicos presentando un gráfico de malas decisiones, todas y cada una un martes',
				'Un presentador paralizado frente a una tabla de quesos al darse cuenta de que nada de lo que dijo era correcto',
				'Un panel de búhos realizando una entrevista de trabajo donde se suponía que habría una cena'
			],
			questions: [
				{
					text: 'Te despiertas y hay un pelícano sentado sobre tu pecho. Tiene tu teléfono. No parece amigable. Tú:',
					answers: [
						{ text: 'Intentas ligar con él de inmediato. Hablas idioma pájaro.', score: -2 },
						{ text: 'Gritas "¡qué demonios es esto!" hasta que la situación se resuelve sola.', score: -1 },
						{ text: 'Te mantienes calmado, evalúas el ambiente y negocias tu teléfono con cuidado.', score: 1 },
						{
							text: 'Observas su lenguaje corporal, identificas qué quiere y ejecutas un plan estratégico de recuperación.',
							score: 2
						}
					]
				},
				{
					text: 'Un mago se mete en tus DMs y te ofrece conocimiento infinito sobre UN tema. Tienes cuatro segundos. Tú:',
					answers: [
						{
							text: 'Respondes "ok" y escribes la primera palabra que te viene a la cabeza. Es "fideos".',
							score: -2
						},
						{
							text: 'Dices "vibraciones" y pasas el resto de tu vida sabiendo todo sobre vibraciones.',
							score: -1
						},
						{
							text: 'Preguntas si "todo" cuenta. Das largas. Negocias. Usas los cuatro segundos con sabiduría.',
							score: 1
						},
						{
							text: 'Identificas al instante el área de conocimiento de mayor valor y la eliges sin dudar.',
							score: 2
						}
					]
				},
				{
					text: 'Abres TikTok y cada vídeo es alguien explicando algo completamente equivocado con total seguridad. Tú:',
					answers: [
						{
							text: 'Das like a todo. La confianza es contagiosa y, seamos sinceros, bastante inspiradora.',
							score: -2
						},
						{
							text: 'Te sientes raro al respecto pero sigues deslizando. A lo mejor saben algo que tú no.',
							score: -1
						},
						{ text: 'Verificas los más sospechosos antes de compartir nada.', score: 1 },
						{
							text: 'Buscas fuentes primarias, compruebas credenciales y dejas correcciones con citas corteses.',
							score: 2
						}
					]
				},
				{
					text: 'Tu sombra lleva tres años tomando decisiones vitales diferentes a las tuyas. Tiene mejor puntuación crediticia y membresía en un gimnasio. Tú:',
					answers: [
						{ text: 'La expones públicamente. Esta sombra NO está a la altura.', score: -2 },
						{
							text: 'Te sientes traicionado, publicas algo críptico sobre la deslealtad y sigues adelante.',
							score: -1
						},
						{ text: 'Le preguntas respetuosamente qué ha estado haciendo diferente y tomas notas.', score: 1 },
						{
							text: 'Pides un desglose completo de sus decisiones, identificas los puntos de divergencia y te adaptas de inmediato.',
							score: 2
						}
					]
				},
				{
					text: 'Un caballo te manda un correo electrónico formal con confirmación de lectura. Asunto: "Sobre tus decisiones recientes". Tú:',
					answers: [
						{ text: 'Lo lees y lo ignoras. Hoy no tienes energía para esto.', score: -2 },
						{
							text: 'Lo abres, llegas al segundo párrafo, lo cierras y te dices que ya lo verás.',
							score: -1
						},
						{ text: 'Lo lees entero aunque sea incómodo. Momento de rendir cuentas.', score: 1 },
						{
							text: 'Lo lees con atención, redactas una respuesta estructurada y programas una reunión de seguimiento.',
							score: 2
						}
					]
				},
				{
					text: 'Tu grupo de WhatsApp está enloqueciendo por una estadística que alguien capturó de una cuenta aleatoria con 47 seguidores. Tú:',
					answers: [
						{
							text: 'Añades tres emojis de fuego y ayudas a propagarla. Eres un creador de cultura.',
							score: -2
						},
						{
							text: 'Le das a reaccionar con una carcajada y sigues. Probablemente sea suficientemente cierta.',
							score: -1
						},
						{ text: 'Lo buscas en Google antes de sumarte al caos.', score: 1 },
						{
							text: 'Encuentras el estudio original, compruebas el tamaño muestral y la metodología, y publicas el contexto real.',
							score: 2
						}
					]
				},
				{
					text: 'Estás en un debate y a los treinta segundos te das cuenta de que la otra persona tiene razón y tú estás completamente equivocado. Tú:',
					answers: [
						{ text: 'Te redoblas con más fuerza. Ceder ahora sería un ridículo monumental.', score: -2 },
						{
							text: 'Te quedas callado, cambias de tema y esperas que nadie haya notado lo que pasó.',
							score: -1
						},
						{ text: 'Cedes el punto con la dignidad más o menos intacta.', score: 1 },
						{
							text: 'Cedes de inmediato, elogias su argumento y le pides que explique más. Seguro de ti mismo.',
							score: 2
						}
					]
				},
				{
					text: 'Los científicos anuncian que cada decisión que tomaste un martes fue equivocada. Todas. Sin excepción. Tú:',
					answers: [
						{
							text: 'Cancelas los martes en tu hogar de inmediato. Esto requiere reestructuración.',
							score: -2
						},
						{
							text: 'Te convences de que la mayoría de los martes estuvieron bien. Sigues adelante.',
							score: -1
						},
						{
							text: 'Te sientas y revisas honestamente tus decisiones de los martes para encontrar el patrón.',
							score: 1
						},
						{
							text: 'Analizas sistemáticamente el patrón de errores de los martes, construyes una lista de verificación de decisiones y la implementas.',
							score: 2
						}
					]
				},
				{
					text: 'Llevas 40 minutos en una presentación muy segura sobre queso cuando te das cuenta de que nada de lo que has dicho es preciso. Tú:',
					answers: [
						{
							text: 'Aumentas la confianza. No pueden verte flaquear. Engañas a toda la sala.',
							score: -2
						},
						{
							text: 'Dices "en fin" y pasas a las preguntas. Que lo descubran ellos.',
							score: -1
						},
						{ text: 'Paras, reconoces el error y das un breve resumen corregido.', score: 1 },
						{
							text: 'Paras a mitad de frase, explicas exactamente qué salió mal, proporcionas la información correcta y te disculpas con el queso.',
							score: 2
						}
					]
				},
				{
					text: 'Llegas a lo que creías que era una cena y resulta ser una entrevista de trabajo para un puesto que no quieres, dirigida por un panel de búhos. Tú:',
					answers: [
						{
							text: 'Te comportas de forma absolutamente caótica en la entrevista. Eres diferente a los demás.',
							score: -2
						},
						{
							text: 'Participas a medias, transmitiendo un "estoy aquí pero tampoco estoy aquí aquí".',
							score: -1
						},
						{
							text: 'Aclaras cortésmente la situación y preguntas si la asistencia es realmente obligatoria.',
							score: 1
						},
						{
							text: 'Evalúas qué necesitan los búhos, valoras si tus habilidades encajan y tomas una decisión consciente sobre si participar.',
							score: 2
						}
					]
				}
			],
			resultAriaLabel: 'Tu resultado',
			brilliant: {
				h2: 'Piensas como un Brillante.',
				p: 'Abordas los problemas con curiosidad, rigor y paciencia. Actualizas tus creencias cuando la evidencia lo exige, y prefieres tener razón a sentirte bien. Las preguntas difíciles no te dan miedo. Te fascinan.',
				scoreLabel: (s) => `Puntuación: ${s > 0 ? '+' : ''}${s}`,
				exploreLink: 'explora qué significa esto →',
				exploreLinkClass: 'explore-link brilliant-link',
				imgAlt: 'Ilustración para el resultado Piensa como un Brillante'
			},
			fool: {
				h2: 'Actúas como un Bufón.',
				p: 'Vas con el instinto, la confianza y una hermosa imprudencia. Los detalles no te agobian. Haces que los detalles suden. El mundo lo llama caos. Tú lo llamas martes.',
				scoreLabel: (s) => `Puntuación: ${s}`,
				exploreLink: 'explora qué significa esto →',
				exploreLinkClass: 'explore-link fool-link',
				imgAlt: 'Ilustración para el resultado Actúa como un Bufón'
			},
			percentileMessage: (p, result) => {
				if (result === 'brilliant') {
					if (p >= 95)
						return `en el top ${100 - p + 1}% de todos los que han enfrentado al pelícano. Los búhos te tienen en una lista corta.`;
					if (p >= 80)
						return `por encima del ${p}% de todos los participantes. El mago te daría un buen tema.`;
					if (p >= 60) return `superaste al ${p}% de todo el mundo. Un brillante tranquilo y seguro.`;
					if (p >= 50)
						return `justo por encima del punto medio, un brillante modesto, que es honestamente el más creíble.`;
					return `técnicamente brillante. En la práctica, mediocre. El caballo ya lo ha visto antes y tiene algo que decir.`;
				} else {
					if (p <= 5)
						return `en el ${p + 1}% inferior. Estadísticamente eres el pelícano. El pelícano no tiene comentarios.`;
					if (p <= 20)
						return `solo el ${p}% de la gente puntuó más bajo. Un bufón comprometido. Profunda y auténticamente en personaje.`;
					if (p <= 40)
						return `el ${p}% de la gente puntuó más bajo. Un bufón devoto. El emoji de fuego en el grupo definitivamente fue tuyo.`;
					if (p <= 55)
						return `rondando el punto medio. Eres el tipo de bufón que casi no lo era. El caballo está confundido pero te apoya.`;
					return `por encima del ${p}% de todos los que se sentaron con el pelícano, que es mucho para un bufón. El pelícano está genuinamente desconcertado.`;
				}
			},
			tallying: 'calculando tus resultados…',
			pelicansCount: (n) => `${n.toLocaleString('es-ES')} personas se han sentado en la silla del pelícano`,
			restart: 'Hacer el test de nuevo',
			statsAriaLabel: 'Estadísticas de puntuación',
			share: 'compartir mi resultado',
			shareAriaLabel: 'Compartir tu resultado',
			shareCopied: 'enlace copiado.',
			shareText: (result) =>
				result === 'brilliant'
					? `He sido clasificado oficialmente como un Brillante. La clasificación es vinculante. https://thinklikeabrilliant.pro`
					: `He sido clasificado oficialmente como un Bufón. La clasificación es vinculante. https://thinklikeabrilliant.pro`
		},
		brilliant: {
			meta: {
				title: 'El Brillante: Una Guía de Campo',
				description:
					'Un análisis profundo, exhaustivo, revisado por expertos y francamente agotador de lo que significa pensar como un Brillante.'
			},
			back: 'volver al test',
			backAriaLabel: 'Volver a la página principal del test',
			heroAlt: 'Piensa como un Brillante',
			h1: 'Piensas como un Brillante.',
			subtitle:
				'Un análisis profundo, exhaustivo, revisado por expertos y francamente agotador de lo que eso significa para ti, para la sociedad y para el pelícano.',
			takeAgain: 'Hacerlo de nuevo',
			takeAgainAriaLabel: 'Hacer el test de nuevo',
			parts: [
				{
					h2: 'Parte I: ¿Qué es exactamente un Brillante?',
					paragraphs: [
						'Un Brillante no es simplemente una persona inteligente. Muchas personas inteligentes son idiotas. Un Brillante es una persona que ha hecho las paces con no saber cosas, lo cual es irónico, porque no saber cosas es extremadamente incómodo y la mayoría de la gente preferiría morir antes que quedarse con una pregunta sin respuesta más de cuarenta y cinco segundos.',
						'El Brillante se sienta con ella. El Brillante prepara una taza de té, acerca una silla y le dice a la pregunta sin respuesta: \u201cHola. Pareces complicada. Me gustaría entenderte. Puede que tarde un tiempo. He despejado mi agenda.\u201d La pregunta sin respuesta, francamente, se queda descolocada. Nadie la había tratado así antes. La mayoría de la gente simplemente busca en Google el primer resultado y sigue. El Brillante lee las citas.',
						'Esto es a la vez un don y una maldición, porque el Brillante suele llegar tarde a todas partes.'
					]
				},
				{
					h2: 'Parte II: El origen del Brillante',
					paragraphs: [
						'Los historiadores no se ponen de acuerdo sobre cuándo apareció el primer Brillante. Algunos dicen que fue Aristóteles, quien afirmó célebremente que cuanto más sabes, más sabes que no sabes, que es exactamente el tipo de cosa que dice un Brillante justo antes de que todos en la fiesta se muevan a otra habitación.',
						'Otros dicen que fue quien inventó el estudio de doble ciego, porque esa persona miró toda la historia del autoengaño humano y dijo \u201c¿y si lo hacemos más difícil para mentirnos a nosotros mismos?\u201d y todos los demás dijeron \u201c¿por qué querríamos eso?\u201d y el Brillante dijo \u201cte lo explico\u201d y procedió a hacerlo durante cuarenta años.',
						'El Brillante siempre ha existido. Era quien en la caverna preguntaba \u201cpero ¿POR QUÉ arde el fuego?\u201d mientras todos los demás solo intentaban cocinar un mamut. Entonces también eran molestos, pero tenían razón, y eventualmente la gente fue aceptándolo.'
					]
				},
				{
					h2: 'Parte III: Rasgos clave del Brillante (documentados)',
					paragraphs: [
						{
							trait: 'Rasgo 1: Comodidad con equivocarse.',
							text: ' El Brillante ha descubierto que equivocarse no es, de hecho, mortal. Eso también fue una sorpresa para él. Se equivocó sobre algo y no murió. Actualizó su sistema de creencias. Siguió adelante. Ahora busca activamente situaciones en las que podría equivocarse, lo que sus amigos encuentran agotador y que técnicamente se llama \u201ctener estándares intelectuales\u201d.'
						},
						{
							trait: 'Rasgo 2: La incapacidad de reenviar estadísticas no verificadas.',
							text: ' Cuando el grupo de WhatsApp enloquece por una estadística de una cuenta llamada @ZonaVerdad47, el Brillante siente una sensación física en el pecho. Abre el hilo. Busca fuentes. Descubre que la estadística fue inventada por alguien que tenía un mal día. Publica la corrección. Nadie reacciona. La publica de todas formas. Siempre la publicará.'
						},
						{
							trait: 'Rasgo 3: Sospechosamente bueno estimando cosas.',
							text: ' El Brillante ha leído en algún momento algo sobre la estimación de Fermi y nunca se ha recuperado del todo. Ahora puede decirte aproximadamente cuántos afinadores de piano hay en Madrid, cuánto tardaría en caminar hasta la Luna, y cuántos litros de natillas se necesitarían para llenar una piscina olímpica. Nadie ha pedido nada de esto. El Brillante lo ofrece libremente.'
						},
						{
							trait: 'Rasgo 4: Las notas.',
							text: ' El Brillante toma notas. No solo en el trabajo o en las clases. En todas partes. En el teléfono. En los márgenes de los recibos. En el brazo si hace falta. Tiene una carpeta de notas con 847 mensajes de voz sin clasificar. Tiene un documento llamado \u201cideas - varios\u201d que tiene 34.000 palabras. Nunca ha vuelto a mirarlo. El acto de capturar el pensamiento es lo que importa. El pensamiento está a salvo. El pensamiento ha sido registrado. El Brillante ya puede dormir.'
						},
						{
							trait: 'Rasgo 5: Una relación complicada con la confianza.',
							text: ' El Brillante es seguro de sí mismo, pero no de forma ruidosa. Es seguro de manera específica y estructural. Dice \u201cno estoy seguro de eso\u201d más que cualquier otro tipo de persona y, paradójicamente, esto le hace más fiable que quienes dicen \u201cdefinitivamente\u201d sobre todo. Si un Brillante dice que está seguro, lo está. Puedes construir una casa sobre eso. Puedes llevarlo a juicio. Puedes mencionarlo en la cena familiar.'
						}
					]
				},
				{
					h2: 'Parte IV: El Brillante en situaciones sociales',
					paragraphs: [
						'El Brillante en una cena es un espécimen fascinante. Llega ligeramente tarde porque estaba leyendo una cosa más. Trae vino que investigó antes. Escucha más de lo que habla, lo que la gente encuentra o bien refrescante o bien inquietante según si ellos también son Brillantes.',
						'Cuando surge un tema del que saben poco, el Brillante dice \u201cno sé mucho sobre eso, cuéntame más\u201d. Cuando surge un tema del que saben mucho, dicen \u201cen realidad hay matices interesantes ahí\u201d e inmediatamente sienten la energía del ambiente y deciden guardarlo para alguien que quiera saberlo.',
						'El Brillante tiene diecisiete opiniones esperando el momento oportuno para compartirlas. Ese momento no ha llegado. Las llevan desde mucho antes. Siguen siendo válidas. Las guardan.'
					]
				},
				{
					h2: 'Parte V: El Brillante y el pelícano',
					paragraphs: [
						'La pregunta del pelícano, la pregunta fundamental de esta evaluación, es crucial. Porque el Brillante, al encontrar un pelícano sobre su pecho sosteniendo su teléfono, no entró en pánico. Observó. Evaluó. Preguntó: ¿qué quiere este pelícano? ¿Es el teléfono específicamente, o el teléfono representa algo? ¿Es este pelícano una metáfora? ¿Es jueves? Son preguntas razonables.',
						'El Brillante sabe que la mayoría de los problemas, incluyendo los basados en pelícanos, tienen una lógica interna. Encuentra la lógica, encuentra la solución. El pelícano tiene motivaciones. El pelícano tiene un contexto. El pelícano no es simplemente un agente del caos, es un sistema, y los sistemas pueden entenderse.',
						'El Brillante recuperó su teléfono. También aprendió tres datos sobre el comportamiento de los pelícanos que no sabía antes. Los anotó en su app de notas. El documento se llama \u201cpelícano - varios\u201d. Tiene 400 palabras. Hay un documento de seguimiento llamado \u201cpelícano - lecturas adicionales\u201d. No se arrepiente.'
					]
				},
				{
					h2: 'Parte VI: Lo que esto significa para tu futuro',
					paragraphs: [
						'Vas a estar bien. Más que bien, en realidad. Vas a ser la persona en la sala que sabe de lo que habla, que cambia de opinión cuando la evidencia cambia, y que hace preguntas que hacen que los demás se sientan a la vez un poco vistos y un poco incómodos.',
						'Tendrás razón sobre las cosas antes que los demás. Esto es a la vez un superpoder y una fuente de constante frustración de baja intensidad que has aprendido a gestionar mediante el diario, los paseos y, ocasionalmente, tener razón en voz alta cuando los riesgos son lo suficientemente altos como para justificarlo.',
						'Los búhos te respetan. El correo del caballo espera. La oferta del mago sigue en pie.',
						'Ve y sé brillante. Ya lo eres.'
					]
				}
			]
		},
		fool: {
			meta: {
				title: 'El Bufón: Una Celebración',
				description:
					'Un examen exhaustivo, cariñoso y solo ligeramente preocupado del Bufón. El pelícano ha declinado hacer comentarios.'
			},
			back: 'volver al test',
			backAriaLabel: 'Volver a la página principal del test',
			heroAlt: 'Actúa como un Bufón',
			h1: 'Actúas como un Bufón.',
			subtitle:
				'Un examen exhaustivo, cariñoso y solo ligeramente preocupado del Bufón: quién es, cómo llegó hasta aquí y por qué el pelícano, sinceramente, no tenía ninguna oportunidad.',
			takeAgain: 'Hacerlo de nuevo',
			takeAgainAriaLabel: 'Hacer el test de nuevo',
			parts: [
				{
					h2: 'Parte I: En defensa del Bufón',
					paragraphs: [
						'Dejemos algo claro: el Bufón no es tonto. El Bufón simplemente ha decidido que la distancia entre una pregunta y una respuesta no tiene que ser muy larga, y lleva tanto tiempo operando bajo este principio que ahora parece un rasgo de personalidad, porque lo es.',
						'El Bufón es la persona que ya ha tomado la decisión antes de que termines de explicar la situación. Ya está en movimiento. Ya está comprometido. El plan, en el sentido tradicional de la palabra, se ha omitido, pero una especie de hermosa confianza cinética lo ha sustituido, y la mayoría de las veces, no siempre, pero la mayoría, esto funciona bien.',
						'El Bufón ha aprendido las cosas a las malas. Cada vez. Sin excepción. Nunca ha leído una advertencia y luego pensado \u201cmenos mal que la leí\u201d. La lee después del hecho, asiente lentamente y dice \u201csí, tiene sentido\u201d.'
					]
				},
				{
					h2: 'Parte II: El Bufón histórico',
					paragraphs: [
						'El Bufón existe desde el comienzo de la historia registrada y posiblemente antes. Casi con toda certeza fue un Bufón quien tocó el fuego primero para ver qué pasaba. Casi con toda certeza fue un Bufón quien se subió a un tronco y flotó por un río e inventó los barcos, no porque tuviera un plan para inventar barcos, sino porque se subió a un tronco. El barco fue una sorpresa para todos, incluido él.',
						'Los bufones de la corte eran llamados Bufones, y eran los únicos a quienes se les permitía decirle la verdad al rey. Piénsalo. La persona con aparentemente menor deferencia hacia la convención era, estructuralmente hablando, la persona más honesta de la sala. El Bufón siempre ha sabido cosas. Solo que las ha sabido en una dirección diferente.',
						'Muchos de los grandes momentos de la historia humana fueron causados por alguien que hizo algo que probablemente no debería haber hecho sin pensarlo demasiado antes. El Bufón es el motor del progreso accidental. No pretendía descubrirlo. Solo estaba por la zona.'
					]
				},
				{
					h2: 'Parte III: Rasgos clave del Bufón (observados en campo)',
					paragraphs: [
						{
							trait: 'Rasgo 1: Confianza que precede a la información.',
							text: ' El Bufón confía primero y luego reúne evidencia según la necesita, lo cual es técnicamente al revés, pero tiene la ventaja clara de la velocidad. Cuando la persona cautelosa termina su evaluación de riesgos, el Bufón ya ha empezado, posiblemente fracasado, se ha reorganizado y ha vuelto a empezar con más información de la que habría dado la evaluación de riesgos. Esto se llama \u201caprendizaje empírico\u201d cuando los científicos lo hacen en laboratorios. Cuando lo hace el Bufón, se llama \u201cel incidente\u201d.'
						},
						{
							trait: 'Rasgo 2: Una capacidad impecable para improvisar.',
							text: ' El Bufón no tiene un plan B. Tiene algo mejor: la total confianza en que lo resolverá cuando llegue. Y normalmente lo hace. No siempre con elegancia. No siempre sin daños colaterales. Pero llega. Lo resuelve. Hay algo genuinamente notable en una persona que puede entrar en una situación sin preparación y salir habiéndola manejado, aunque \u201cmanejado\u201d haga mucho trabajo pesado en esa frase.'
						},
						{
							trait: 'Rasgo 3: El encanto.',
							text: ' Ya sea un pelícano, un funcionario de aduanas o un caballo con una queja formal, el Bufón genuinamente cree que puede hablar para entrar o salir de cualquier situación. Y lo hace no a través de la retórica cuidadosa o la comunicación estratégica, sino a través de pura presencia y la energía de alguien que nunca ha considerado que esto podría no funcionar. El pelícano, seamos honestos, estaba desconcertado.'
						},
						{
							trait: 'Rasgo 4: Lealtad al asunto.',
							text: ' Si el Bufón se compromete con algo, una broma, un plan, una palabra mal pronunciada, una estadística incorrecta que ya ha compartido con quince personas, lo lleva hasta el final. Cambiar de rumbo a mitad de camino requeriría admitir que la dirección inicial era equivocada, lo cual es algo muy de Brillante y que el Bufón encuentra casi físicamente imposible. Es un defecto. Es también, de alguna manera, una forma de integridad.'
						},
						{
							trait: 'Rasgo 5: El problema del martes.',
							text: ' Todo Bufón tiene un martes. Quizás no sea literalmente el martes. Quizás sea el presupuesto. Quizás sea leer antes de aceptar. Quizás sea no responder correos a las 2 de la madrugada. Hay un patrón. El Bufón sabe del patrón. El Bufón sabe del patrón desde hace varios años. El Bufón no ha abordado el patrón. El Bufón, sin embargo, ha nombrado el patrón, lo cual es el primer paso, y eso cuenta para algo, y el Bufón está orgulloso de ello.'
						}
					]
				},
				{
					h2: 'Parte IV: El Bufón en situaciones sociales',
					paragraphs: [
						'El Bufón en una cena es un acontecimiento. Llega con una historia ya en marcha. La historia involucra algo que pasó de camino aquí y ya es más interesante que todo lo que trajo el Brillante, que es una botella de vino investigada y diecisiete opiniones sobre geopolítica que ha decidido no compartir.',
						'El Bufón dirá algo de lo que se arrepentirá de inmediato y luego construirá sobre ello en lugar de retroceder. El Bufón compartirá una estadística que no puede fundamentar. El Bufón entrará en un debate para el que no está preparado y lo peleará solo con vibraciones, perdiendo terreno lentamente y pivotando suavemente cada vez sin conceder técnicamente el punto.',
						'Todos en la fiesta recuerdan al Bufón. No siempre con cariño, no siempre correctamente, pero siempre.'
					]
				},
				{
					h2: 'Parte V: El Bufón y el pelícano',
					paragraphs: [
						'El pelícano despertó al Bufón. Esto ya fue un error por parte del pelícano, el Bufón antes del café es una criatura completamente diferente, pero dejemos eso de lado. El primer instinto del Bufón fue negociar hablando idioma pájaro. No habla idioma pájaro. Habla idioma pájaro de la misma forma que habla francés: con confianza y de forma incorrecta, y de algún modo esto comunica algo, porque la confianza en un idioma es el noventa por ciento del idioma.',
						'El pelícano no fue conquistado con éxito. El teléfono fue recuperado eventualmente por medios poco claros. El Bufón tiene ahora una gran historia al respecto. La historia mejora cada vez que la cuenta. Para el año que viene, el pelícano habrá sido tres pelícanos y el teléfono habrá sido toda su cartera.',
						'El pelícano ha declinado hacer comentarios.'
					]
				},
				{
					h2: 'Parte VI: El correo del caballo',
					paragraphs: [
						'Lo leíste y no respondiste. Hablemos de eso.',
						'El caballo te escribió. El caballo, que tiene pezuñas y no tiene pulgares oponibles y por tanto escribió todo ese correo con software de dictado o pura determinación, contactó formalmente con confirmación de lectura activada. No fue una comunicación casual. Fue el caballo diciendo: tengo algo que decirte y quiero saber que lo has oído.',
						'Lo leíste y no respondiste.',
						'Está bien. Eso es muy tú. El correo sigue ahí. Ha estado ahí un tiempo. El caballo sabe que lo leíste. El caballo espera. El caballo no tiene otros planes; los caballos no tienen, notoriamente, agendas llenas. Algún día abrirás ese correo y contendrá algo que necesitabas escuchar y estarás contento, a tu manera particular de Bufón, de haber llegado a leerlo finalmente.',
						'Responde cuando estés listo. El caballo no va a ningún lado. Literalmente. Es un caballo.'
					]
				},
				{
					h2: 'Parte VII: En conclusión, eres magnífico',
					paragraphs: [
						'El mundo necesita Brillantes, sí. El mundo necesita personas que lean las notas al pie, comprueben los tamaños muestrales y programen reuniones de seguimiento con caballos. El mundo genuinamente no puede funcionar sin ellos.',
						'Pero el mundo también te necesita a ti. El mundo necesita a la persona que se sube al tronco antes de haber descubierto que flota. El mundo necesita a la persona que le habla a un pelícano en idioma pájaro y de alguna manera funciona. El mundo necesita a la persona que dice \u201cen fin\u201d y pasa a las preguntas durante la presentación de queso de su vida, se sacude el polvo y lo intenta de nuevo.',
						'El Bufón no tiene un plan. El Bufón tiene algo mejor: una completa y total disposición a estar en la situación y resolverlo. Eso no es nada. Eso es, en realidad, extraordinario.',
						'El martes es mañana. Esta vez tomarás una decisión diferente. O no, y tendrás otra gran historia. De cualquier manera, va a ser algo.'
					]
				}
			]
		}
	},

	fr: {
		layout: {
			logo: 'pense comme un brillant',
			skipLink: 'Aller au contenu principal',
			githubAriaLabel: 'jimbot9k sur GitHub, s\u2019ouvre dans un nouvel onglet',
			switchToLight: 'Passer au mode clair',
			switchToDark: 'Passer au mode sombre',
			langLabel: 'Choisir la langue',
			headerAriaLabel: 'En-t\u00eate du site',
			logoAriaLabel: 'Pense comme un Brillant, accueil',
			donateLabel: 'Le p\u00e9lican ne travaille pas gratuitement.',
			donateAriaLabel: 'Copier l\u2019adresse de don en Bitcoin',
			copiedLabel: 'Copi\u00e9.',
			footerAriaLabel: 'Pied de page'
		},
		quiz: {
			meta: {
				title: 'pense comme un brillant',
				description:
					'Un test de personnalit\u00e9 en 10 questions sur les p\u00e9licans, les sorciers et si tu penses comme un Brillant ou agis comme un Sot.'
			},
			intro: {
				heading: 'Une br\u00e8ve et tr\u00e8s importante clarification.',
				body: [
					'Ceci est une \u00e9valuation cognitive en 10 questions con\u00e7ue pour d\u00e9terminer si tu penses comme un Brillant ou agis comme un Sot. Elle a \u00e9t\u00e9 d\u00e9velopp\u00e9e par des chercheurs qui prennent cela tr\u00e8s au s\u00e9rieux et qui pr\u00e9f\u00e9reraient que tu en fasses autant.',
					'L\u2019\u00e9valuation fonctionne en te pr\u00e9sentant une s\u00e9rie de sc\u00e9narios (sociaux, financiers, m\u00e9taphysiques) et en mesurant la qualit\u00e9 de tes instincts. Il n\u2019y a pas de questions pi\u00e8ges. Il y a cependant des questions sur des p\u00e9licans, des sorciers et la cote de cr\u00e9dit de ton ombre.',
					'Les Brillants r\u00e9pondent au monde avec clart\u00e9, intention et une l\u00e9g\u00e8re m\u00e9fiance envers les oies. Les Sots r\u00e9pondent avec de l\u2019\u00e9nergie, de la confiance et une absence quasi totale de suivi.',
					'A la fin, tu seras class\u00e9. La classification est contraignante. R\u00e9ponds honn\u00eateur. L\u2019\u00e9valuation sait quand tu joues la com\u00e9die.'
				],
				cta: 'Commencer l\u2019\u00e9valuation'
			},
			questionLabel: (c, t) => `Question ${c} sur ${t}`,
			progressAriaLabel: (c, t) => `Progression du test, question ${c} sur ${t}`,
			questionImgAlts: [
				'Un pélican assis sur la poitrine d’une personne tenant son téléphone, l’air clairement peu aimable',
				'Un message de sorcier apparaît dans la boîte de réception DM d’un téléphone, offrant une connaissance infinie sur un sujet',
				'Un écran de téléphone rempli de vidéos TikTok diffusant de fausses informations avec une totale assurance',
				'Une ombre tenant une carte de membre de salle de sport, son graphique de crédit suspectement meilleur que le vôtre',
				'Un cheval à un bureau rédigeant un e-mail formel avec accusé de réception activé',
				'Un chat de groupe explosant d’emojis feu à cause d’une capture d’écran d’un compte à 47 abonnés',
				'Deux personnes au milieu d’un débat, l’une réalisant lentement qu’elle a complètement tort',
				'Des scientifiques présentant un graphique de mauvaises décisions, toutes prises un mardi',
				'Un présentateur figé devant un plateau de fromages en réalisant que rien de ce qu’il a dit n’était exact',
				'Un panel de hiboux conduisant un entretien d’embauche là où une soirée dîner était attendue'
			],
			questions: [
				{
					text: 'Tu te r\u00e9veilles et un p\u00e9lican est assis sur ta poitrine. Il tient ton t\u00e9l\u00e9phone. Il n\u2019a pas l\u2019air aimable. Tu\u00a0:',
					answers: [
						{ text: 'Tu essaies imm\u00e9diatement de le charmer. Tu parles le langage des oiseaux.', score: -2 },
						{ text: 'Tu cries \u00ab\u00a0mais c\u2019est quoi ce bordel\u00a0\u00bb jusqu\u2019\u00e0 ce que la situation se r\u00e9solve d\u2019elle-m\u00eame.', score: -1 },
						{ text: 'Tu restes calme, tu \u00e9values l\u2019ambiance et tu n\u00e9gocies prudemment la r\u00e9cup\u00e9ration de ton t\u00e9l\u00e9phone.', score: 1 },
						{ text: 'Tu observes son langage corporel, tu identifies ce qu\u2019il veut et tu ex\u00e9cutes un plan de r\u00e9cup\u00e9ration strat\u00e9gique.', score: 2 }
					]
				},
				{
					text: 'Un sorcier s\u2019invite dans tes DMs et t\u2019offre une connaissance infinie sur UN sujet. Tu as quatre secondes. Tu\u00a0:',
					answers: [
						{ text: 'Tu r\u00e9ponds \u00ab\u00a0ok\u00a0\u00bb et tu \u00e9cris le premier mot qui te vient en t\u00eate. C\u2019est \u00ab\u00a0pâtes\u00a0\u00bb.', score: -2 },
						{ text: 'Tu dis \u00ab\u00a0les vibrations\u00a0\u00bb et tu passes le reste de ta vie \u00e0 tout savoir sur les vibrations.', score: -1 },
						{ text: 'Tu demandes si \u00ab\u00a0tout\u00a0\u00bb compte. Tu tergiverses. Tu n\u00e9gocies. Tu utilises sagement tes quatre secondes.', score: 1 },
						{ text: 'Tu identifies instantan\u00e9ment le domaine de connaissance le plus strat\u00e9gique et tu le verrouilles. Sans h\u00e9sitation.', score: 2 }
					]
				},
				{
					text: 'Tu ouvres TikTok et chaque vid\u00e9o montre quelqu\u2019un expliquer avec une totale assurance quelque chose de compl\u00e8tement faux. Tu\u00a0:',
					answers: [
						{ text: 'Tu likes tout. La confiance est contagieuse et franchement assez inspirante.', score: -2 },
						{ text: 'Tu te sens bizarre mais tu continues \u00e0 scroller. Peut-\u00eatre qu\u2019ils savent quelque chose que tu ne sais pas.', score: -1 },
						{ text: 'Tu v\u00e9rifies les plus suspects avant de partager quoi que ce soit.', score: 1 },
						{ text: 'Tu retrouves les sources primaires, tu v\u00e9rifies les cr\u00e9dentiels et tu laisses des corrections poliment cit\u00e9es.', score: 2 }
					]
				},
				{
					text: 'Ton ombre prend des d\u00e9cisions de vie diff\u00e9rentes des tiennes depuis trois ans. Son score de cr\u00e9dit est meilleur et elle a une adh\u00e9sion \u00e0 une salle de sport. Tu\u00a0:',
					answers: [
						{ text: 'Tu la d\u00e9nonces publiquement. Cette ombre ne m\u00e9rite pas \u00e7a.', score: -2 },
						{ text: 'Tu te sens personnellement attaqu\u00e9, tu postes quelque chose de vague sur la trahison et tu passes \u00e0 autre chose.', score: -1 },
						{ text: 'Tu lui demandes respectueusement ce qu\u2019elle a fait diff\u00e9remment et tu prends des notes.', score: 1 },
						{ text: 'Tu demandes un d\u00e9tail complet de ses d\u00e9cisions, tu identifies les points de divergence et tu t\u2019adaptes imm\u00e9diatement.', score: 2 }
					]
				},
				{
					text: 'Un cheval t\u2019envoie un e-mail formel avec confirmation de lecture. Objet\u00a0: \u00ab\u00a0Concernant vos choix r\u00e9cents\u00a0\u00bb. Tu\u00a0:',
					answers: [
						{ text: 'Tu le lis et ne r\u00e9ponds pas. Tu n\u2019as vraiment pas \u00e9nergie pour \u00e7a aujourd\u2019hui.', score: -2 },
						{ text: 'Tu l\u2019ouvres, tu arrives au deuxi\u00e8me paragraphe, tu le fermes et tu te dis que tu y reviendras.', score: -1 },
						{ text: 'Tu lis l\u2019int\u00e9gralit\u00e9 m\u00eame si c\u2019est inconfortable. C\u2019est l\u2019\u00e8re de la responsabilit\u00e9.', score: 1 },
						{ text: 'Tu le lis attentivement, tu r\u00e9diges une r\u00e9ponse structur\u00e9e et tu planifies une r\u00e9union de suivi.', score: 2 }
					]
				},
				{
					text: 'Ton groupe WhatsApp part en vrille \u00e0 cause d\u2019une statistique captur\u00e9e depuis un compte al\u00e9atoire \u00e0 47 abonn\u00e9s. Tu\u00a0:',
					answers: [
						{ text: 'Tu ajoutes trois emojis feu et tu contribues \u00e0 la propagation. Tu es un cr\u00e9ateur de culture.', score: -2 },
						{ text: 'Tu r\u00e9agis avec un emoji mort de rire et tu passes. C\u2019est probablement assez vrai.', score: -1 },
						{ text: 'Tu cherches sur Google avant de t\u2019ajouter au chaos.', score: 1 },
						{ text: 'Tu retrouves l\u2019\u00e9tude originale, tu v\u00e9rifies la taille de l\u2019\u00e9chantillon et la m\u00e9thodologie, et tu postes le contexte r\u00e9el.', score: 2 }
					]
				},
				{
					text: 'Tu es dans un d\u00e9bat et trente secondes apr\u00e8s tu r\u00e9alises que l\u2019autre personne a enti\u00e8rement raison et que tu as enti\u00e8rement tort. Tu\u00a0:',
					answers: [
						{ text: 'Tu redoubles. Reculer maintenant serait un comportement largement nul.', score: -2 },
						{ text: 'Tu te tais, tu changes de sujet et tu esp\u00e8res que personne n\u2019a vu ce qui s\u2019est pass\u00e9.', score: -1 },
						{ text: 'Tu concèdes le point avec ta dignit\u00e9 \u00e0 peu pr\u00e8s intacte.', score: 1 },
						{ text: 'Tu concèdes imm\u00e9diatement, tu complimentes leur argument et tu leur demandes d\u2019en dire plus. S\u00fbr de toi.', score: 2 }
					]
				},
				{
					text: 'Des scientifiques annoncent que chaque d\u00e9cision que tu as prise un mardi \u00e9tait mauvaise. Toutes. Sans exception. Tu\u00a0:',
					answers: [
						{ text: 'Tu annules les mardis dans ton foyer. C\u2019est une restructuration n\u00e9cessaire.', score: -2 },
						{ text: 'Tu te convaincs que la plupart des mardis \u00e9taient en fait bien. Tu passes \u00e0 autre chose.', score: -1 },
						{ text: 'Tu t\u2019assieds et tu r\u00e9vises honn\u00eateur tes d\u00e9cisions du mardi pour en trouver le mod\u00e8le.', score: 1 },
						{ text: 'Tu analyses syst\u00e9matiquement le mod\u00e8le d\u2019erreur du mardi, tu construis une liste de v\u00e9rification des d\u00e9cisions et tu la d\u00e9ploies.', score: 2 }
					]
				},
				{
					text: 'Tu es depuis 40 minutes dans une pr\u00e9sentation tr\u00e8s assur\u00e9e sur le fromage quand tu r\u00e9alises que litt\u00e9ralement rien de ce que tu as dit n\u2019est exact. Tu\u00a0:',
					answers: [
						{ text: 'Tu augmentes la confiance. Tu ne peux pas montrer de faiblesse. Tu manipules la salle.', score: -2 },
						{ text: 'Tu dis \u00ab\u00a0bref\u00a0\u00bb et tu passes aux questions. Laisse le public se d\u00e9brouiller.', score: -1 },
						{ text: 'Tu t\u2019arr\u00eates, tu reconnais l\u2019erreur et tu donnes un bref r\u00e9sum\u00e9 corrig\u00e9.', score: 1 },
						{ text: 'Tu t\u2019arr\u00eates en pleine phrase, tu expliques exactement ce qui s\u2019est pass\u00e9, tu fournis les bonnes informations et tu t\u2019excuses aupr\u00e8s du fromage.', score: 2 }
					]
				},
				{
					text: 'Tu arrives \u00e0 ce que tu croyais \u00eatre un d\u00eener et c\u2019est en fait un entretien d\u2019embauche pour un poste que tu ne veux pas, anim\u00e9 par un panel de hiboux. Tu\u00a0:',
					answers: [
						{ text: 'Tu te comportes de mani\u00e8re enti\u00e8rement d\u00e9chai\u00een\u00e9e dans l\u2019entretien. Tu es diff\u00e9rent.', score: -2 },
						{ text: 'Tu participes \u00e0 moiti\u00e9, communiquant un \u00ab\u00a0je suis l\u00e0 mais pas vraiment l\u00e0\u00a0\u00bb.', score: -1 },
						{ text: 'Tu clarifie poliment la situation et tu demandes si la pr\u00e9sence est vraiment obligatoire.', score: 1 },
						{ text: 'Tu \u00e9values ce que les hiboux ont besoin, tu appr\u00e9cies si tes comp\u00e9tences correspondent et tu prends une d\u00e9cision consciente sur ta participation.', score: 2 }
					]
				}
			],
			resultAriaLabel: 'Ton r\u00e9sultat',
			brilliant: {
				h2: 'Tu penses comme un Brillant.',
				p: 'Tu abordes les probl\u00e8mes avec curiosit\u00e9, rigueur et patience. Tu mets \u00e0 jour tes croyances quand les preuves l\u2019exigent, et tu pr\u00e9f\u00e8res avoir raison que te sentir bien. Les questions difficiles ne te font pas peur. Elles te fascinent.',
				scoreLabel: (s) => `Score\u00a0: ${s > 0 ? '+' : ''}${s}`,
				exploreLink: 'explorer ce que cela signifie \u2192',
				exploreLinkClass: 'explore-link brilliant-link',
				imgAlt: 'Illustration pour le r\u00e9sultat Pense comme un Brillant'
			},
			fool: {
				h2: 'Tu agis comme un Sot.',
				p: 'Tu avances avec l\u2019instinct, la confiance et une belle t\u00e9m\u00e9rit\u00e9. Les d\u00e9tails ne t\u2019oppressent pas. Tu fais suer les d\u00e9tails. Le monde appelle \u00e7a le chaos. Toi tu appelles \u00e7a le mardi.',
				scoreLabel: (s) => `Score\u00a0: ${s}`,
				exploreLink: 'explorer ce que cela signifie \u2192',
				exploreLinkClass: 'explore-link fool-link',
				imgAlt: 'Illustration pour le r\u00e9sultat Agis comme un Sot'
			},
			percentileMessage: (p, result) => {
				if (result === 'brilliant') {
					if (p >= 95)
						return `dans le top ${100 - p + 1}\u00a0% de tous ceux qui ont fait face au p\u00e9lican. Les hiboux t\u2019ont sur une liste restreinte.`;
					if (p >= 80)
						return `au-dessus de ${p}\u00a0% de tous les participants. Le sorcier te donnerait un bon sujet.`;
					if (p >= 60) return `tu as d\u00e9pass\u00e9 ${p}\u00a0% de tout le monde. Tranquillement, discrètement brillant.`;
					if (p >= 50)
						return `juste au-dessus de la moiti\u00e9, un brillant modeste, ce qui est honn\u00eateur le genre le plus cr\u00e9dible.`;
					return `techniquement brillant. Pratiquement quelconque. Le cheval a d\u00e9j\u00e0 vu \u00e7a et a des pens\u00e9es \u00e0 ce sujet.`;
				} else {
					if (p <= 5)
						return `dans les ${p + 1}\u00a0% inf\u00e9rieurs. Tu es statistiquement le p\u00e9lican. Le p\u00e9lican n\u2019a pas de commentaires.`;
					if (p <= 20)
						return `seulement ${p}\u00a0% des gens ont marqu\u00e9 moins. Un sot convaincu. Profond\u00e9ment, authentiquement dans le r\u00f4le.`;
					if (p <= 40)
						return `${p}\u00a0% des gens ont marqu\u00e9 moins. Un sot d\u00e9vou\u00e9. L\u2019emoji feu dans le groupe, c\u2019\u00e9tait d\u00e9finitivement toi.`;
					if (p <= 55)
						return `autour du point m\u00e9dian. Tu es le genre de sot qui a failli ne pas l\u2019\u00eatre. Le cheval est perplexe mais solidaire.`;
					return `au-dessus de ${p}\u00a0% de tous ceux qui se sont assis avec le p\u00e9lican, ce qui est beaucoup pour un sot. Le p\u00e9lican est g\u00e9nuinement \u00e9branlé.`;
				}
			},
			tallying: 'calcul de tes r\u00e9sultats\u2026',
			pelicansCount: (n) => `${n.toLocaleString('fr-FR')} personnes se sont assis dans le fauteuil du p\u00e9lican`,
			restart: 'Refaire le test',
			statsAriaLabel: 'Statistiques de score',
			share: 'partager mon r\u00e9sultat',
			shareAriaLabel: 'Partager ton r\u00e9sultat',
			shareCopied: 'lien copi\u00e9.',
			shareText: (result) =>
				result === 'brilliant'
					? `J\u2019ai \u00e9t\u00e9 officiellement class\u00e9 comme un Brillant. La classification est contraignante. https://thinklikeabrilliant.pro`
					: `J\u2019ai \u00e9t\u00e9 officiellement class\u00e9 comme un Sot. La classification est contraignante. https://thinklikeabrilliant.pro`
		},
		brilliant: {
			meta: {
				title: 'Le Brillant\u00a0: Un guide de terrain',
				description:
					'Une plongée en profondeur exhaustive, révisée par des pairs et franchement épuisante dans ce que signifie penser comme un Brillant.'
			},
			back: 'retour au test',
			backAriaLabel: 'Retour à la page d\u2019accueil du test',
			heroAlt: 'Pense comme un Brillant',
			h1: 'Tu penses comme un Brillant.',
			subtitle:
				'Une plongée en profondeur exhaustive, révisée par des pairs et franchement épuisante dans ce que cela signifie pour toi, pour la société et pour le pélican.',
			takeAgain: 'Recommencer',
			takeAgainAriaLabel: 'Refaire le test',
			parts: [
				{
					h2: 'Partie I\u00a0: Qu\u2019est-ce qu\u2019un Brillant exactement\u00a0?',
					paragraphs: [
						'Un Brillant n\u2019est pas simplement une personne intelligente. Beaucoup de personnes intelligentes sont des idiots. Un Brillant est une personne qui a fait la paix avec le fait de ne pas savoir des choses, ce qui est ironique, car ne pas savoir des choses est extr\u00eamement inconfortable et la plupart des gens pr\u00e9f\u00e8reraient mourir plut\u00f4t que de rester avec une question sans r\u00e9ponse plus de quarante-cinq secondes.',
						'Le Brillant s\u2019assied avec elle. Le Brillant pr\u00e9pare une tasse de th\u00e9, tire une chaise et dit \u00e0 la question sans r\u00e9ponse\u00a0: \u00ab\u00a0Bonjour. Tu as l\u2019air compliqu\u00e9e. J\u2019aimerais te comprendre. Cela peut prendre du temps. J\u2019ai lib\u00e9r\u00e9 mon agenda.\u00a0\u00bb La question sans r\u00e9ponse est, franchement, d\u00e9concert\u00e9e. Personne ne l\u2019avait jamais trait\u00e9e ainsi. La plupart des gens googl\u00e8nt simplement le premier r\u00e9sultat et passent \u00e0 autre chose. Le Brillant lit les citations.',
						'C\u2019est \u00e0 la fois un don et une mal\u00e9diction, car le Brillant est souvent en retard.'
					]
				},
				{
					h2: 'Partie II\u00a0: L\u2019origine du Brillant',
					paragraphs: [
						'Les historiens ne s\u2019accordent pas sur le moment o\u00f9 le premier Brillant est apparu. Certains disent que c\u2019\u00e9tait Aristote, qui disait c\u00e9l\u00e8brement que plus on sait, plus on sait qu\u2019on ne sait pas, ce qui est le genre de chose qu\u2019un Brillant dit juste avant que tout le monde \u00e0 la f\u00eate ne se d\u00e9place dans une autre pi\u00e8ce.',
						'D\u2019autres disent que c\u2019\u00e9tait celui qui a invent\u00e9 l\u2019\u00e9tude en double aveugle, parce que cette personne a regard\u00e9 toute l\u2019histoire de l\u2019auto-illusion humaine et a dit \u00ab\u00a0et si on se rendait plus difficile de se mentir \u00e0 soi-m\u00eame\u00a0\u00bb et tous les autres ont dit \u00ab\u00a0pourquoi voudrions-nous \u00e7a\u00a0\u00bb et le Brillant a dit \u00ab\u00a0je vais vous expliquer\u00a0\u00bb et a proced\u00e9 \u00e0 le faire pendant quarante ans.',
						'Le Brillant a toujours exist\u00e9. C\u2019\u00e9tait celui dans la grotte qui demandait \u00ab\u00a0mais POURQUOI le feu br\u00fble\u00a0\u00bb pendant que tous les autres essayaient juste de cuire un mammouth. Ils \u00e9taient \u00e9galement agaçants \u00e0 l\u2019\u00e9poque, mais ils avaient raison, et finalement les gens ont compris.'
					]
				},
				{
					h2: 'Partie III\u00a0: Traits cl\u00e9s du Brillant (document\u00e9s)',
					paragraphs: [
						{
							trait: 'Trait 1\u00a0: L\u2019aisance avec l\u2019erreur.',
							text: ' Le Brillant a d\u00e9couvert qu\u2019avoir tort n\u2019est pas, en fait, fatal. C\u2019\u00e9tait aussi une surprise pour lui. Il a eu tort \u00e0 propos de quelque chose et il n\u2019est pas mort. Il a mis \u00e0 jour son syst\u00e8me de croyances. Il est pass\u00e9 \u00e0 autre chose. Il cherche maintenant activement des situations o\u00f9 il pourrait avoir tort, ce que ses amis trouvent \u00e9puisant et ce qui s\u2019appelle techniquement \u00ab\u00a0avoir des standards intellectuels\u00a0\u00bb.'
						},
						{
							trait: 'Trait 2\u00a0: L\u2019incapacit\u00e9 de partager des statistiques non v\u00e9rifi\u00e9es.',
							text: ' Quand le groupe WhatsApp devient fou \u00e0 cause d\u2019une statistique d\u2019un compte appel\u00e9 @ZoneV\u00e9rit\u00e947, le Brillant ressent une sensation physique dans la poitrine. Il ouvre le fil. Il cherche des sources. Il d\u00e9couvre que la statistique a \u00e9t\u00e9 invent\u00e9e par quelqu\u2019un qui avait une mauvaise journ\u00e9e. Il poste la correction. Personne ne r\u00e9agit. Il la poste quand m\u00eame. Il la postera toujours.'
						},
						{
							trait: 'Trait 3\u00a0: Suspicieusement bon pour estimer les choses.',
							text: ' Le Brillant a lu \u00e0 un moment donn\u00e9 quelque chose sur l\u2019estimation de Fermi et ne s\u2019en est jamais vraiment remis. Il peut maintenant te dire approximativement combien d\u2019accordeurs de piano il y a \u00e0 Paris, combien de temps il faudrait pour marcher jusqu\u2019\u00e0 la Lune, et combien de litres de cr\u00e8me p\u00e2tissi\u00e8re il faudrait pour remplir une piscine olympique. Personne n\u2019a demand\u00e9 tout cela. Le Brillant l\u2019offre librement.'
						},
						{
							trait: 'Trait 4\u00a0: Les notes.',
							text: ' Le Brillant prend des notes. Pas seulement au travail ou en cours. Partout. Sur son t\u00e9l\u00e9phone. Dans les marges des re\u00e7us. Sur son bras si n\u00e9cessaire. Il a un dossier de notes avec 847 messages vocaux non tri\u00e9s. Il a un document appel\u00e9 \u00ab\u00a0id\u00e9es - divers\u00a0\u00bb qui fait 34\u00a0000 mots. Il ne l\u2019a jamais relookup. L\u2019acte de capturer la pens\u00e9e est le point. La pens\u00e9e est en s\u00e9curit\u00e9. La pens\u00e9e a \u00e9t\u00e9 enregistr\u00e9e. Le Brillant peut maintenant dormir.'
						},
						{
							trait: 'Trait 5\u00a0: Une relation compliqu\u00e9e avec la confiance.',
							text: ' Le Brillant est confiant, mais pas de mani\u00e8re bruyante. Il est confiant de mani\u00e8re sp\u00e9cifique et structurelle. Il dit \u00ab\u00a0je ne suis pas s\u00fbr de \u00e7a\u00a0\u00bb plus que tout autre type de personne, et paradoxalement cela le rend plus fiable que les gens qui disent \u00ab\u00a0d\u00e9finitivement\u00a0\u00bb sur tout. Si un Brillant dit qu\u2019il est s\u00fbr, il l\u2019est. Tu peux construire une maison dessus. Tu peux l\u2019emmener en justice. Tu peux en parler au d\u00eener de famille.'
						}
					]
				},
				{
					h2: 'Partie IV\u00a0: Le Brillant dans les situations sociales',
					paragraphs: [
						'Le Brillant lors d\u2019un d\u00eener est un sp\u00e9cimen fascinant. Il arrive l\u00e9g\u00e8rement en retard parce qu\u2019il lisait encore une chose. Il apporte du vin qu\u2019il a research\u00e9. Il \u00e9coute plus qu\u2019il ne parle, ce que les gens trouvent soit rafra\u00eeachissant soit d\u00e9concertant selon qu\u2019ils sont eux-m\u00eames des Brillants.',
						'Quand un sujet dont il sait peu de chose vient sur le tapis, le Brillant dit \u00ab\u00a0je ne sais pas grand-chose l\u00e0-dessus, dis-m\u2019en plus\u00a0\u00bb. Quand un sujet dont il sait beaucoup survient, il dit \u00ab\u00a0il y a en fait des nuances int\u00e9ressantes ici\u00a0\u00bb et sent imm\u00e9diatement l\u2019\u00e9nergie de la salle et d\u00e9cide de le garder pour quelqu\u2019un qui veut savoir.',
						'Le Brillant a dix-sept opinions qui attendent le bon moment pour \u00eatre partag\u00e9es. Ce moment n\u2019est pas venu. Il a ces opinions depuis longtemps. Elles sont toujours valides. Il les garde.'
					]
				},
				{
					h2: 'Partie V\u00a0: Le Brillant et le p\u00e9lican',
					paragraphs: [
						'La question du p\u00e9lican, la question fondamentale de cette \u00e9valuation, est cruciale. Car le Brillant, en trouvant un p\u00e9lican sur sa poitrine tenant son t\u00e9l\u00e9phone, n\u2019a pas paniqu\u00e9. Il a observ\u00e9. Il a \u00e9valu\u00e9. Il a demand\u00e9\u00a0: que veut ce p\u00e9lican\u00a0? Est-ce le t\u00e9l\u00e9phone sp\u00e9cifiquement, ou le t\u00e9l\u00e9phone repr\u00e9sente-t-il quelque chose\u00a0? Ce p\u00e9lican est-il une m\u00e9taphore\u00a0? Est-ce un jeudi\u00a0? Ce sont des questions raisonnables.',
						'Le Brillant sait que la plupart des probl\u00e8mes, y compris ceux bas\u00e9s sur des p\u00e9licans, ont une logique interne. Trouve la logique, trouve la solution. Le p\u00e9lican a des motivations. Le p\u00e9lican a un contexte. Le p\u00e9lican n\u2019est pas simplement un agent du chaos\u00a0\u2014 c\u2019est un syst\u00e8me, et les syst\u00e8mes peuvent \u00eatre compris.',
						'Le Brillant a r\u00e9cup\u00e9r\u00e9 son t\u00e9l\u00e9phone. Il a \u00e9galement appris trois faits sur le comportement des p\u00e9licans qu\u2019il ne connaissait pas avant. Il les a not\u00e9s dans son application de notes. Le document s\u2019appelle \u00ab\u00a0p\u00e9lican - divers\u00a0\u00bb. Il fait 400 mots. Il y a un document de suivi appel\u00e9 \u00ab\u00a0p\u00e9lican - lectures compl\u00e9mentaires\u00a0\u00bb. Il ne le regrette pas.'
					]
				},
				{
					h2: 'Partie VI\u00a0: Ce que cela signifie pour ton avenir',
					paragraphs: [
						'Tu vas bien t\u2019en sortir. Mieux que bien, en fait. Tu vas \u00eatre la personne dans la salle qui sait de quoi elle parle, qui change d\u2019avis quand les preuves changent, et qui pose des questions qui font que les autres se sentent \u00e0 la fois l\u00e9g\u00e8rement vus et l\u00e9g\u00e8rement mal \u00e0 l\u2019aise.',
						'Tu auras raison sur des choses avant les autres. C\u2019est \u00e0 la fois un super-pouvoir et une source de frustration de faible intensit\u00e9 que tu as appris \u00e0 g\u00e9rer gr\u00e2ce au journal, aux promenades et \u00e0 avoir raison \u00e0 voix haute quand les enjeux sont suffisamment \u00e9lev\u00e9s pour le justifier.',
						'Les hiboux te respectent. L\u2019e-mail du cheval attend. L\u2019offre du sorcier tient toujours.',
						'Va \u00eatre brilliant. Tu l\u2019es d\u00e9j\u00e0.'
					]
				}
			]
		},
		fool: {
			meta: {
				title: 'Le Sot\u00a0: Une c\u00e9l\u00e9bration',
				description:
					'Un examen exhaustif, affectueux et seulement l\u00e9g\u00e8rement pr\u00e9occup\u00e9 du Sot. Le p\u00e9lican a refus\u00e9 de commenter.'
			},
			back: 'retour au test',
			backAriaLabel: 'Retour \u00e0 la page d\u2019accueil du test',
			heroAlt: 'Agis comme un Sot',
			h1: 'Tu agis comme un Sot.',
			subtitle:
				'Un examen exhaustif, affectueux et seulement l\u00e9g\u00e8rement pr\u00e9occup\u00e9 du Sot\u00a0: qui il est, comment il en est arriv\u00e9 l\u00e0, et pourquoi le p\u00e9lican, franchement, n\u2019avait aucune chance.',
			takeAgain: 'Recommencer',
			takeAgainAriaLabel: 'Refaire le test',
			parts: [
				{
					h2: 'Partie I\u00a0: Pour la d\u00e9fense du Sot',
					paragraphs: [
						'Mettons une chose au clair\u00a0: le Sot n\u2019est pas stupide. Le Sot a simplement d\u00e9cid\u00e9 que la distance entre une question et une r\u00e9ponse ne doit pas \u00eatre tr\u00e8s longue, et op\u00e8re selon ce principe depuis si longtemps que cela ressemble maintenant \u00e0 un trait de caract\u00e8re, parce que c\u2019en est un.',
						'Le Sot est la personne qui a d\u00e9j\u00e0 pris la d\u00e9cision avant que tu aies fini d\u2019expliquer la situation. Il est d\u00e9j\u00e0 en mouvement. Il est d\u00e9j\u00e0 engag\u00e9. Le plan, au sens traditionnel du terme, a \u00e9t\u00e9 saut\u00e9, mais une sorte de belle confiance cin\u00e9tique a \u00e9t\u00e9 substitu\u00e9e \u00e0 sa place, et la plupart du temps, pas toujours, mais la plupart, cela marche bien.',
						'Le Sot a appris les choses \u00e0 la dure. Chaque fois. Sans exception. Il n\u2019a jamais lu un avertissement et ensuite pens\u00e9 \u00ab\u00a0heureusement que j\u2019ai lu \u00e7a\u00a0\u00bb. Il lit l\u2019avertissement apr\u00e8s coup, hoche lentement la t\u00eate et dit \u00ab\u00a0oui, \u00e7a fait sens\u00a0\u00bb.'
					]
				},
				{
					h2: 'Partie II\u00a0: Le Sot historique',
					paragraphs: [
						'Le Sot existe depuis le d\u00e9but de l\u2019histoire \u00e9crite et peut-\u00eatre avant. C\u2019\u00e9tait presque certainement un Sot qui a touch\u00e9 le feu en premier pour voir ce qui se passerait. C\u2019\u00e9tait presque certainement un Sot qui est mont\u00e9 sur un rondin et a flott\u00e9 sur une rivi\u00e8re et a invent\u00e9 les bateaux, non pas parce qu\u2019il avait un plan pour inventer des bateaux, mais parce qu\u2019il est mont\u00e9 sur un rondin. Le bateau \u00e9tait une surprise pour tout le monde, y compris pour lui.',
						'Les bouffons de cour s\u2019appelaient Sots, et ils \u00e9taient les seuls autoris\u00e9s \u00e0 dire la v\u00e9rit\u00e9 au roi. R\u00e9fl\u00e9chis \u00e0 cela. La personne avec apparemment le moins de d\u00e9f\u00e9rence envers la convention \u00e9tait, structurellement parlant, la personne la plus honn\u00eate de la pi\u00e8ce. Le Sot a toujours su des choses. Il les a simplement sues dans une direction diff\u00e9rente.',
						'Beaucoup des plus grands moments de l\u2019histoire humaine ont \u00e9t\u00e9 caus\u00e9s par quelqu\u2019un qui faisait quelque chose qu\u2019il n\u2019aurait probablement pas d\u00fb faire sans y r\u00e9fl\u00e9chir trop. Le Sot est le moteur du progr\u00e8s accidentel. Il ne voulait pas le d\u00e9couvrir. Il \u00e9tait juste dans les parages.'
					]
				},
				{
					h2: 'Partie III\u00a0: Traits cl\u00e9s du Sot (observ\u00e9s sur le terrain)',
					paragraphs: [
						{
							trait: 'Trait 1\u00a0: La confiance qui pr\u00e9c\u00e8de l\u2019information.',
							text: ' Le Sot est confiant d\u2019abord et recueille ensuite les preuves au besoin, ce qui est techniquement \u00e0 l\u2019envers mais a l\u2019avantage distinct de la vitesse. Au moment o\u00f9 la personne prudente a fini son \u00e9valuation des risques, le Sot a d\u00e9j\u00e0 commenc\u00e9, \u00e9chou\u00e9 peut-\u00eatre, s\u2019est regroup\u00e9 et a recommenc\u00e9 avec plus d\u2019informations que l\u2019\u00e9valuation des risques n\u2019en aurait fourni. Cela s\u2019appelle \u00ab\u00a0apprentissage empirique\u00a0\u00bb quand les scientifiques le font dans des laboratoires. Quand le Sot le fait, cela s\u2019appelle \u00ab\u00a0l\u2019incident\u00a0\u00bb.'
						},
						{
							trait: 'Trait 2\u00a0: Une capacit\u00e9 imp\u00e9ccable \u00e0 improviser.',
							text: ' Le Sot n\u2019a pas de plan B. Il a quelque chose de mieux\u00a0: la totale confiance qu\u2019il s\u2019en sortira quand il y sera. Et il s\u2019en sort g\u00e9n\u00e9ralement. Pas toujours \u00e9l\u00e9gamment. Pas toujours sans dommages collat\u00e9raux. Mais il y arrive. Il s\u2019en sort. Il y a quelque chose de vraiment remarquable chez une personne qui peut entrer dans une situation sans pr\u00e9paration et s\u2019en sortir, m\u00eame si \u00ab\u00a0s\u2019en sortir\u00a0\u00bb fait beaucoup de travail lourd dans cette phrase.'
						},
						{
							trait: 'Trait 3\u00a0: Le charme.',
							text: ' Que ce soit un p\u00e9lican, un douanier ou un cheval avec une plainte formelle, le Sot croit sinc\u00e8rement qu\u2019il peut parler pour entrer ou sortir de n\u2019importe quelle situation. Et il ne le fait pas gr\u00e2ce \u00e0 une rh\u00e9torique soign\u00e9e ou une communication strat\u00e9gique, mais gr\u00e2ce \u00e0 sa pure pr\u00e9sence et \u00e0 l\u2019\u00e9nergie de quelqu\u2019un qui n\u2019a jamais consid\u00e9r\u00e9 que cela pourrait ne pas marcher. Le p\u00e9lican, soyons honn\u00eates, \u00e9tait \u00e9branlé.'
						},
						{
							trait: 'Trait 4\u00a0: La fid\u00e9lit\u00e9 \u00e0 la chose.',
							text: ' Si le Sot s\u2019engage envers quelque chose, une blague, un plan, un mot mal prononc\u00e9, une statistique incorrecte qu\u2019il a d\u00e9j\u00e0 partag\u00e9e avec quinze personnes, il va au bout. Changer de cap en cours de route n\u00e9cessiterait de reconnaître que la direction initiale \u00e9tait mauvaise, ce qui est vraiment une chose de Brillant \u00e0 faire et que le Sot trouve presque physiquement impossible. C\u2019est un d\u00e9faut. C\u2019est aussi, d\u2019une certaine mani\u00e8re, une forme d\u2019int\u00e9grit\u00e9.'
						},
						{
							trait: 'Trait 5\u00a0: Le probl\u00e8me du mardi.',
							text: ' Chaque Sot a un mardi. Peut-\u00eatre que ce n\u2019est pas litt\u00e9ralement le mardi. Peut-\u00eatre que c\u2019est le budget. Peut-\u00eatre que c\u2019est lire avant d\u2019accepter. Peut-\u00eatre que c\u2019est de ne pas r\u00e9pondre aux e-mails \u00e0 2h du matin. Il y a un mod\u00e8le. Le Sot conna\u00eet le mod\u00e8le. Le Sot conna\u00eet le mod\u00e8le depuis plusieurs ann\u00e9es. Le Sot n\u2019a pas trait\u00e9 le mod\u00e8le. Le Sot a cependant nomm\u00e9 le mod\u00e8le, ce qui est la premi\u00e8re \u00e9tape, et cela compte pour quelque chose, et le Sot en est fier.'
						}
					]
				},
				{
					h2: 'Partie IV\u00a0: Le Sot dans les situations sociales',
					paragraphs: [
						'Le Sot lors d\u2019un d\u00eener est un \u00e9v\u00e9nement. Il arrive avec une histoire d\u00e9j\u00e0 en cours. L\u2019histoire implique quelque chose qui s\u2019est pass\u00e9 en venant ici et est d\u00e9j\u00e0 plus int\u00e9ressante que tout ce que le Brillant a apport\u00e9, qui est une bouteille de vin research\u00e9 et dix-sept opinions sur la g\u00e9opolitique qu\u2019il a d\u00e9cid\u00e9 de ne pas partager.',
						'Le Sot dira quelque chose qu\u2019il regrettera imm\u00e9diatement et ensuite construira dessus plut\u00f4t que de reculer. Le Sot partagera une statistique qu\u2019il ne peut pas sourcer. Le Sot entrera dans un d\u00e9bat pour lequel il n\u2019est pas pr\u00e9par\u00e9 et le combattra seul sur des vibes, perdant du terrain lentement et pivotant facilement \u00e0 chaque fois sans jamais techniquement c\u00e9der le point.',
						'Tout le monde \u00e0 la f\u00eate se souvient du Sot. Pas toujours avec affection, pas toujours correctement, mais toujours.'
					]
				},
				{
					h2: 'Partie V\u00a0: Le Sot et le p\u00e9lican',
					paragraphs: [
						'Le p\u00e9lican a r\u00e9veill\u00e9 le Sot. C\u2019\u00e9tait d\u00e9j\u00e0 une erreur de la part du p\u00e9lican, le Sot avant le caf\u00e9 est une cr\u00e9ature compl\u00e8tement diff\u00e9rente, mais mettons cela de c\u00f4t\u00e9. Le premier instinct du Sot \u00e9tait de n\u00e9gocier en parlant le langage des oiseaux. Il ne parle pas le langage des oiseaux. Il parle le langage des oiseaux de la m\u00eame fa\u00e7on qu\u2019il parle anglais, avec confiance et incorrectement, et d\u2019une certaine fa\u00e7on cela communique quelque chose, car la confiance dans une langue c\u2019est quatre-vingt-dix pourcent de la langue.',
						'Le p\u00e9lican n\u2019a pas \u00e9t\u00e9 charm\u00e9 avec succ\u00e8s. Le t\u00e9l\u00e9phone a \u00e9t\u00e9 r\u00e9cup\u00e9r\u00e9 par des moyens qui restent flous. Le Sot a maintenant une excellente histoire \u00e0 ce sujet. L\u2019histoire s\u2019am\u00e9liore \u00e0 chaque fois qu\u2019il la raconte. L\u2019ann\u00e9e prochaine, le p\u00e9lican aura \u00e9t\u00e9 trois p\u00e9licans et le t\u00e9l\u00e9phone aura \u00e9t\u00e9 tout son portefeuille.',
						'Le p\u00e9lican a refus\u00e9 de commenter.'
					]
				},
				{
					h2: 'Partie VI\u00a0: L\u2019e-mail du cheval',
					paragraphs: [
						'Tu l\u2019as lu sans r\u00e9pondre. Parlons-en.',
						'Le cheval t\u2019a \u00e9crit. Le cheval, qui a des sabots et pas de pouces oppos\u00e9s et a donc tap\u00e9 tout cet e-mail avec soit un logiciel de dictation soit une pure d\u00e9termination, a contact\u00e9 formellement avec confirmation de lecture activ\u00e9e. Ce n\u2019\u00e9tait pas une communication informelle. C\u2019\u00e9tait le cheval qui dit\u00a0: j\u2019ai quelque chose \u00e0 te dire, et je veux savoir que tu l\u2019as entendu.',
						'Tu l\u2019as lu sans r\u00e9pondre.',
						'C\u2019est bien. C\u2019est tr\u00e8s toi. L\u2019e-mail est toujours l\u00e0. Il est l\u00e0 depuis un moment. Le cheval sait que tu l\u2019as lu. Le cheval attend. Le cheval n\u2019a pas d\u2019autres plans\u00a0; les chevaux n\u2019ont notoirement pas d\u2019agendas charg\u00e9s. Un jour tu ouvriras cet e-mail et il contiendra quelque chose dont tu avais besoin d\u2019entendre et tu seras content, \u00e0 ta fa\u00e7on de Sot particulier, d\u2019y \u00eatre finalement arriv\u00e9.',
						'R\u00e9ponds quand tu es pr\u00eat. Le cheval ne va nulle part. Litt\u00e9ralement. C\u2019est un cheval.'
					]
				},
				{
					h2: 'Partie VII\u00a0: En conclusion, tu es magnifique',
					paragraphs: [
						'Le monde a besoin de Brillants, oui. Le monde a besoin de personnes qui lisent les notes de bas de page et v\u00e9rifient les tailles d\u2019\u00e9chantillon et planifient des r\u00e9unions de suivi avec des chevaux. Le monde ne peut vraiment pas fonctionner sans eux.',
						'Mais le monde a aussi besoin de toi. Le monde a besoin de la personne qui monte sur le rondin avant d\u2019avoir compris qu\u2019il flotte. Le monde a besoin de la personne qui parle \u00e0 un p\u00e9lican en langage d\u2019oiseau et que \u00e7a marche d\u2019une certaine fa\u00e7on. Le monde a besoin de la personne qui dit \u00ab\u00a0bref\u00a0\u00bb et passe aux questions pendant la pr\u00e9sentation de fromage de sa vie, se secoue et recommence.',
						'Le Sot n\u2019a pas de plan. Le Sot a quelque chose de mieux\u00a0: une volont\u00e9 compl\u00e8te et totale d\u2019\u00eatre dans la situation et de s\u2019en sortir. Ce n\u2019est pas rien. C\u2019est m\u00eame extraordinaire.',
						'Le mardi, c\u2019est demain. Cette fois tu prendras une d\u00e9cision diff\u00e9rente. Ou non, et tu auras une autre excellente histoire. Dans tous les cas, \u00e7a va \u00eatre quelque chose.'
					]
				}
			]
		}
	},
	ja: {
		layout: {
			logo: 'ブリリアントのように考える',
			skipLink: 'メインコンテンツへスキップ',
			githubAriaLabel: 'jimbot9k GitHub（新しいタブで開く）',
			switchToLight: 'ライトモードに切り替え',
			switchToDark: 'ダークモードに切り替え',
			langLabel: '言語を選択',
			headerAriaLabel: 'サイトヘッダー',
			logoAriaLabel: 'ブリリアントのように考える、ホーム',
			donateLabel: 'ペリカンはタダ働きしない。',
			donateAriaLabel: 'ビットコイン寄付アドレスをコピー',
			copiedLabel: 'コピーしました。',
			footerAriaLabel: 'フッター'
		},
		quiz: {
			meta: {
				title: 'ブリリアントのように考える',
				description:
					'ペリカン、魔法使い、あなたがブリリアントのように考えるかフールのように行動するかを判定する10問の性格テスト。'
			},
			intro: {
				heading: '簡潔で非常に重要な説明。',
				body: [
					'これは、あなたがブリリアントのように考えるか、フールのように行動するかを判定するために設計された10問の認知評価です。これを非常に真剣に受け止める研究者によって開発されており、あなたにも同様に受け止めていただきたいと考えています。',
					'この評価は、一連のシナリオ（社会的、財務的、形而上学的）を提示し、あなたの本能の質を測定することで機能します。ひっかけ問題はありません。ただし、ペリカン、魔法使い、あなたの影の信用スコアに関する問題はあります。',
					'ブリリアントは、明確さ、意図、そしてガチョウへの軽い不信感を持って世界に応答します。フールは、エネルギーと自信、そしてほぼ完全なフォローアップの欠如で応答します。',
					'最後に、あなたは判定されます。判定は拘束力があります。正直に答えてください。評価は、あなたが演じているときに気づきます。'
				],
				cta: '評価を開始する'
			},
			questionLabel: (c, t) => `質問 ${c} / ${t}`,
			progressAriaLabel: (c, t) => `テストの進捗、${t}問中${c}問目`,
			questionImgAlts: [
				'友好的ではない表情でスマートフォンを持ち、人の胸の上に座るペリカン',
				'1つのトピックについて無限の知識を提供する魔法使いのメッセージがスマートフォンのDM受信箱に届く',
				'自信たっぷりに完全に間違った内容を説明するTikTok動画で埋め尽くされたスマートフォン画面',
				'ジム会員証を持つ影。その信用評分グラフはあなたのものより明らかに良い',
				'机に向かい、開封確認付きの正式なメールを作成している馬',
				'47フォロワーのアカウントからのスクリーンショットをめぐって炎の絵文字であふれかえるグループチャット',
				'議論の最中の二人。一方がゆっくりと自分が完全に間違っていると気づいている',
				'科学者がすべて火曜日の悪い決断だけを示すグラフを提示している',
				'チーズボードの前で固まったプレゼンター。言ったことが何一つ正確ではなかったと気づいた瞬間',
				'ディナーパーティーのはずだった場所でフクロウのパネルが就職面接を実施している'
			],
			questions: [
				{
					text: '目が覚めると、ペリカンがあなたの胸の上に座っています。あなたのスマートフォンを持っています。友好的には見えません。あなたは：',
					answers: [
						{ text: '即座に魅力で懐柔しようとします。鳥の言葉を話します。', score: -2 },
						{ text: '状況が自然に解決するまで「何なんだこれは」と叫び続けます。', score: -1 },
						{ text: '落ち着いて、雰囲気を評価し、慎重にスマートフォンの回収を交渉します。', score: 1 },
						{ text: 'ペリカンのボディランゲージを観察し、何を求めているかを特定し、戦略的回収プランを実行します。', score: 2 }
					]
				},
				{
					text: '魔法使いがDMに入り込み、1つのテーマについて無限の知識を提供します。4秒あります。あなたは：',
					answers: [
						{ text: '「はい」と答え、頭に浮かんだ最初の単語を入力します。「パスタ」です。', score: -2 },
						{ text: '「バイブス」と言い、残りの人生をバイブスについて何でも知っている状態で過ごします。', score: -1 },
						{ text: '「何でも」が含まれるかどうか尋ねます。熟考します。交渉します。4秒を賢く使います。', score: 1 },
						{ text: '最も戦略的な知識領域を即座に特定し、確定させます。躊躇なしに。', score: 2 }
					]
				},
				{
					text: 'TikTokを開くと、すべての動画で誰かが完全に間違ったことを完全な自信を持って説明しています。あなたは：',
					answers: [
						{ text: '全部にいいねします。自信は伝染性があり、正直かなり鼓舞されます。', score: -2 },
						{ text: '奇妙な感じがしますが、スクロールを続けます。もしかしたら彼らは自分が知らないことを知っているかもしれません。', score: -1 },
						{ text: '何かを共有する前に、怪しいものを確認します。', score: 1 },
						{ text: '一次ソースを見つけ、資格情報を確認し、丁寧に引用された訂正を残します。', score: 2 }
					]
				},
				{
					text: 'あなたの影が3年間、あなたとは異なる人生の決断をしてきました。影の信用スコアはより良く、ジム会員権を持っています。あなたは：',
					answers: [
						{ text: '公開告発します。この影はそれに値しません。', score: -2 },
						{ text: '個人攻撃されたと感じ、裏切りについて曖昧な投稿をして先に進みます。', score: -1 },
						{ text: '影に何を違うことをしたか丁重に尋ね、メモを取ります。', score: 1 },
						{ text: '影の決断の完全な内訳を求め、分岐点を特定し、即座に適応します。', score: 2 }
					]
				},
				{
					text: '馬が開封確認付きの正式なメールを送ってきます。件名：「あなたの最近の選択について」。あなたは：',
					answers: [
						{ text: '読みますが返信しません。今日はその気力がありません。', score: -2 },
						{ text: '開いて、2段落目まで読んで、閉じて、後で戻ると自分に言い聞かせます。', score: -1 },
						{ text: '不快でも全文読みます。これは責任の時代です。', score: 1 },
						{ text: '注意深く読み、構造化された返信を書き、フォローアップミーティングをスケジュールします。', score: 2 }
					]
				},
				{
					text: 'グループチャットが47フォロワーのランダムアカウントからスクリーンショットされた統計で熱狂しています。あなたは：',
					answers: [
						{ text: '炎の絵文字を3つ追加し、拡散に貢献します。あなたは文化の創造者です。', score: -2 },
						{ text: '笑死絵文字で反応して通り過ぎます。多分十分真実です。', score: -1 },
						{ text: '混乱に参加する前にGoogle検索します。', score: 1 },
						{ text: '元の研究を見つけ、サンプルサイズと方法論を確認し、実際のコンテキストを投稿します。', score: 2 }
					]
				},
				{
					text: '議論の最中で、30秒後に相手が完全に正しく、自分が完全に間違っていると気づきます。あなたは：',
					answers: [
						{ text: '倍増させます。今引き下がることは本当に最悪な行動でしょう。', score: -2 },
						{ text: '黙って話題を変え、誰も気づかなかったことを願います。', score: -1 },
						{ text: 'ほぼ尊厳を保ちながら要点を認めます。', score: 1 },
						{ text: '即座に認め、相手の論点を称賛し、もっと話すよう求めます。自信を持って。', score: 2 }
					]
				},
				{
					text: '科学者たちが、あなたが火曜日に下したすべての決断が悪かったと発表しました。すべて。例外なし。あなたは：',
					answers: [
						{ text: '家の中で火曜日をキャンセルします。これは必要な再構築です。', score: -2 },
						{ text: 'ほとんどの火曜日は実際には良かったと自分に言い聞かせます。先に進みます。', score: -1 },
						{ text: '座って、パターンを見つけるために火曜日の決断を正直にレビューします。', score: 1 },
						{ text: '体系的に火曜日のエラーパターンを分析し、決断チェックリストを構築し、展開します。', score: 2 }
					]
				},
				{
					text: 'チーズについて非常に自信を持ってプレゼンを40分間した後、文字通り言ったことが何も正確でないと気づきます。あなたは：',
					answers: [
						{ text: '自信を上げます。弱さを見せることはできません。部屋を操作します。', score: -2 },
						{ text: '「まあ」と言って質問に移ります。聴衆に対処させます。', score: -1 },
						{ text: '止まり、間違いを認め、修正した簡単な要約を提供します。', score: 1 },
						{ text: '文の途中で止まり、何が起きたかを正確に説明し、正しい情報を提供し、チーズに謝罪します。', score: 2 }
					]
				},
				{
					text: '夕食だと思っていたところに到着すると、実際にはフクロウのパネルによる、望まない仕事の面接です。あなたは：',
					answers: [
						{ text: '面接で完全に自由奔放に振る舞います。あなたは違います。', score: -2 },
						{ text: '半分参加して、「いるけどいない」という雰囲気を伝えます。', score: -1 },
						{ text: '礼儀正しく状況を明確にして、出席が本当に義務かどうか尋ねます。', score: 1 },
						{ text: 'フクロウが何を必要としているかを評価し、スキルが合うかを判断し、参加について意識的な決断を下します。', score: 2 }
					]
				}
			],
			resultAriaLabel: 'あなたの結果',
			brilliant: {
				h2: 'あなたはブリリアントのように考えます。',
				p: 'あなたは好奇心、厳密さ、忍耐を持って問題に取り組みます。証拠が必要なときに信念を更新し、気分が良いよりも正しくあることを好みます。難しい質問はあなたを怖がらせません。それらはあなたを魅了します。',
				scoreLabel: (s) => `スコア：${s > 0 ? '+' : ''}${s}`,
				exploreLink: '意味するところを探求する →',
				exploreLinkClass: 'explore-link brilliant-link',
				imgAlt: 'ブリリアントのように考える結果のイラスト'
			},
			fool: {
				h2: 'あなたはフールのように行動します。',
				p: '本能、自信、見事な無謀さで前進します。細部があなたを圧倒しません。細部に汗をかかせます。世界はそれを混沌と呼びます。あなたはそれを火曜日と呼びます。',
				scoreLabel: (s) => `スコア：${s}`,
				exploreLink: '意味するところを探求する →',
				exploreLinkClass: 'explore-link fool-link',
				imgAlt: 'フールのように行動する結果のイラスト'
			},
			percentileMessage: (p, result) => {
				if (result === 'brilliant') {
					if (p >= 95)
						return `ペリカンに直面した全員のトップ${100 - p + 1}%以内。フクロウはあなたをショートリストに載せています。`;
					if (p >= 80)
						return `全参加者の${p}%より上。魔法使いはあなたに良いテーマを与えるでしょう。`;
					if (p >= 60) return `全員の${p}%を上回りました。静かに、ひっそりとブリリアント。`;
					if (p >= 50)
						return `上半分のちょうど上、控えめなブリリアント。それは正直、最も信頼できる種類です。`;
					return `技術的にはブリリアント。実質的には平凡。馬はすでにそれを見ていて、考えがあります。`;
				} else {
					if (p <= 5)
						return `下位${p + 1}%以内。あなたは統計的にペリカンです。ペリカンにはコメントがありません。`;
					if (p <= 20)
						return `${p}%の人しかより低いスコアを取りませんでした。確固たるフール。深く、真正にキャラクター的です。`;
					if (p <= 40)
						return `${p}%の人がより低いスコア。献身的なフール。グループの炎の絵文字、それは間違いなくあなたでした。`;
					if (p <= 55)
						return `中央点あたり。あなたはかろうじてフールにならなかったタイプのフールです。馬は困惑していますが応援しています。`;
					return `ペリカンと座った全員の${p}%より上、フールにしては多くです。ペリカンは本当に動揺しています。`;
				}
			},
			tallying: '結果を集計中…',
			pelicansCount: (n) => `${n.toLocaleString('ja-JP')}人がペリカンの椅子に座りました`,
			restart: 'テストをやり直す',
			statsAriaLabel: 'スコア統計',
			share: '結果をシェア',
			shareAriaLabel: '結果をシェアする',
			shareCopied: 'コピーしました。',
			shareText: (result) =>
				result === 'brilliant'
					? `私はブリリアントとして正式に判定されました。判定は拘束力があります。 https://thinklikeabrilliant.pro`
					: `私はフールとして正式に判定されました。判定は拘束力があります。 https://thinklikeabrilliant.pro`
		},
		brilliant: {
			meta: {
				title: 'ブリリアント：フィールドガイド',
				description:
					'ブリリアントのように考えるとはどういう意味かについての、徹底的で査読済みで率直に消耗する詳細な考察。'
			},
			back: 'テストに戻る',
			backAriaLabel: 'テストのホームページに戻る',
			heroAlt: 'ブリリアントのように考える',
			h1: 'あなたはブリリアントのように考えます。',
			subtitle:
				'あなた、社会、そしてペリカンにとってそれが何を意味するかについての、徹底的で査読済みで率直に消耗する詳細な考察。',
			takeAgain: 'もう一度やる',
			takeAgainAriaLabel: 'テストをもう一度やる',
			parts: [
				{
					h2: '第I部：ブリリアントとは正確には何か？',
					paragraphs: [
						'ブリリアントは単に賢い人ではありません。賢い人の多くはとんでもない間違いを犯します。ブリリアントは、物事を知らないことと平和を保てる人です。これは皮肉なことに、知らないことは非常に不快であり、ほとんどの人は45秒以上答えのない質問とともにいるよりも死を選ぶからです。',
						'ブリリアントはそれと一緒に座ります。お茶を入れ、椅子を引き、答えのない質問に言います：「こんにちは。あなたは複雑そうに見えます。あなたを理解したいです。時間がかかるかもしれません。予定を空けました。」答えのない質問は、率直に言って、困惑しています。誰もかつてそのように扱ったことがありませんでした。ほとんどの人は最初の検索結果をGoogleして先に進むだけです。ブリリアントは引用を読みます。',
						'これは贈り物でもあり呪いでもあります。ブリリアントはしばしば遅刻します。'
					]
				},
				{
					h2: '第II部：ブリリアントの起源',
					paragraphs: [
						'歴史家たちは最初のブリリアントがいつ現れたかについて同意していません。アリストテレスだと言う人もいます。彼は有名なことに、知れば知るほど、自分が知らないことがわかると言いました。これはブリリアントがパーティーで全員が別の部屋に移動する直前に言う種類のことです。',
						'二重盲検試験を発明した人だと言う人もいます。なぜならその人は人間の自己欺瞞の全歴史を見て、「もし自分自身に嘘をつくのをもっと難しくしたら」と言ったからです。そして他の全員が「なぜそれが欲しいのか」と言い、ブリリアントは「説明しましょう」と言い、40年間それを続けました。',
						'ブリリアントは常に存在していました。洞穴の中で「でもなぜ火は燃えるの」と尋ねていた人で、他の全員はただマンモスを調理しようとしていました。彼らは当時も同様に迷惑でしたが、正しかったし、最終的に人々は理解しました。'
					]
				},
				{
					h2: '第III部：ブリリアントの主要な特性（文書化済み）',
					paragraphs: [
						{
							trait: '特性1：間違いとの快適性。',
							text: ' ブリリアントは間違っていることが実は致命的ではないと発見しました。これも驚きでした。何かについて間違っていたが、死にませんでした。信念システムを更新しました。先に進みました。今では間違っているかもしれない状況を積極的に探しています。友人たちはこれを消耗すると感じており、技術的には「知的基準を持つ」と呼ばれます。'
						},
						{
							trait: '特性2：未確認の統計を共有できないこと。',
							text: ' @TrueZone47というアカウントからの統計でグループチャットが熱狂しているとき、ブリリアントは胸の中に身体的な感覚を感じます。スレッドを開きます。ソースを探します。その統計は悪い日を持っていた誰かによって作られたことを発見します。訂正を投稿します。誰も反応しません。とにかく投稿します。常に投稿するでしょう。'
						},
						{
							trait: '特性3：物事を推定するのが怪しいほど上手。',
							text: ' ブリリアントはいつかフェルミ推定について何かを読み、それから完全に回復したことがありません。今では、東京に何人のピアノ調律師がいるか、月まで歩くのにどれくらいかかるか、オリンピックプールをカスタードで満たすのに何リットル必要かを大まかに教えることができます。誰もそのすべてを求めませんでした。ブリリアントは自由に提供します。'
						},
						{
							trait: '特性4：メモ。',
							text: ' ブリリアントはメモを取ります。仕事や授業だけでなく。どこでも。スマートフォンに。レシートの余白に。必要なら腕に。847件の未整理の音声メモがあるフォルダがあります。34,000語の「アイデア - その他」というドキュメントがあります。一度も読み返したことがありません。思考を捉える行為がポイントです。思考は安全です。思考は記録されました。ブリリアントは眠れます。'
						},
						{
							trait: '特性5：自信との複雑な関係。',
							text: ' ブリリアントは自信がありますが、騒がしい方法ではありません。具体的で構造的な方法で自信があります。他のどのタイプの人よりも「それについては確信がありません」と言い、逆説的にそのことが、すべてについて「絶対に」と言う人よりも信頼できます。もしブリリアントが確信していると言うなら、確信しています。それに家を建てることができます。法廷に持っていけます。家族の夕食でそれについて話せます。'
						}
					]
				},
				{
					h2: '第IV部：ブリリアントと社交的な状況',
					paragraphs: [
						'夕食会でのブリリアントは魅力的な標本です。まだ一つのことを読んでいたので少し遅れて到着します。調べたワインを持ってきます。話すより聞く方が多く、それは相手がブリリアントかどうかによって、爽やかか不安かのどちらかに感じられます。',
						'あまり知らないトピックが出てきたとき、ブリリアントは「それについてはあまり知りません、もっと教えてください」と言います。よく知っているトピックが出てきたとき、「実はここに興味深いニュアンスがあります」と言い、すぐに部屋のエネルギーを感じ、知りたい人のためにとっておくことにします。',
						'ブリリアントは共有する適切なタイミングを待っている17の意見があります。そのタイミングはまだ来ていません。これらの意見は長い間持ち続けています。まだ有効です。それらを保持します。'
					]
				},
				{
					h2: '第V部：ブリリアントとペリカン',
					paragraphs: [
						'ペリカンの質問、この評価の根本的な質問は、重要です。なぜならブリリアントは、スマートフォンを持ったペリカンが胸の上にいるのを発見したとき、パニックにならなかったからです。観察しました。評価しました。尋ねました：このペリカンは何を望んでいるか？スマートフォンは特定のものか、それともスマートフォンは何かを表しているか？このペリカンは比喩か？木曜日か？これらは合理的な質問です。',
						'ブリリアントは、ペリカンベースのものを含むほとんどの問題が内部の論理を持っていることを知っています。論理を見つければ、解決策が見つかります。ペリカンには動機があります。ペリカンにはコンテキストがあります。ペリカンは単に混沌のエージェントではありません——それはシステムであり、システムは理解できます。',
						'ブリリアントはスマートフォンを取り戻しました。また、以前は知らなかったペリカンの行動に関する3つの事実を学びました。メモアプリに記録しました。ドキュメントは「ペリカン - その他」と呼ばれています。400語あります。「ペリカン - 参考文献」と呼ばれるフォローアップドキュメントがあります。後悔していません。'
					]
				},
				{
					h2: '第VI部：あなたの将来にとって何を意味するか',
					paragraphs: [
						'うまくやっていけるでしょう。実はうまく以上に。あなたは、自分が話していることを知っている人、証拠が変わったときに意見を変える人、他の人が少し見られていて少し不安に感じさせるような質問をする人になります。',
						'あなたは他の人より先に物事について正しいでしょう。これはスーパーパワーでもあり、十分に高い賭けがある場合に声に出して正しくなることを通じて管理することを学んだ低強度のフラストレーションの源でもあります。',
						'フクロウはあなたを尊重しています。馬のメールは待っています。魔法使いのオファーはまだ有効です。',
						'ブリリアントになりに行ってください。もうなっています。'
					]
				}
			]
		},
		fool: {
			meta: {
				title: 'フール：お祝い',
				description:
					'フールの徹底的で、愛情を込めて、かつわずかに心配な考察。ペリカンはコメントを断りました。'
			},
			back: 'テストに戻る',
			backAriaLabel: 'テストのホームページに戻る',
			heroAlt: 'フールのように行動する',
			h1: 'あなたはフールのように行動します。',
			subtitle:
				'フールの徹底的で愛情のある考察：誰であるか、どうしてそうなったか、そしてなぜペリカンが正直チャンスがなかったか。',
			takeAgain: 'もう一度やる',
			takeAgainAriaLabel: 'テストをもう一度やる',
			parts: [
				{
					h2: '第I部：フールの弁護',
					paragraphs: [
						'一つはっきりさせましょう：フールは愚かではありません。フールは単に、質問と答えの間の距離はあまり長くなくてよいと決め、今ではキャラクターの特性のように感じられるほど長くその原則に従って行動しています。なぜならそれはそうだからです。',
						'フールは状況の説明を終える前に決断を下した人です。もう動いています。もう関与しています。計画は、伝統的な意味で、省略されましたが、ある種の美しい運動的な自信がその代わりに代入され、ほとんどの場合——常にではなく、ほとんど——うまくいきます。',
						'フールは痛みを通して物事を学びます。毎回。例外なし。警告を読んで「読んで良かった」と思ったことは一度もありません。事後に警告を読み、ゆっくりうなずいて「なるほど、それは理にかなっている」と言います。'
					]
				},
				{
					h2: '第II部：歴史上のフール',
					paragraphs: [
						'フールは記録された歴史の始まりから存在し、おそらくその前から存在しています。それがどうなるかを見るために最初に火に触れたのはほぼ確実にフールでした。丸太に乗って川を流れ、計画なしにボートを発明したのもほぼ確実にフールでした。ボートは全員にとって——彼自身を含めて——驚きでした。',
						'宮廷道化師はフールと呼ばれ、彼らだけが王に真実を言うことが許されていました。それについて考えてください。見かけ上は慣習への敬意が最も低い人が、構造的に言えば、部屋で最も正直な人でした。フールは常に物事を知っていました。ただ違う方向に知っていただけです。',
						'人類の歴史の最も偉大な瞬間の多くは、あまり考えずにすべきでないことをした誰かによって引き起こされました。フールは偶然の進歩のエンジンです。それを発見しようとしていませんでした。ただその場にいただけです。'
					]
				},
				{
					h2: '第III部：フールの主要な特性（現場で観察済み）',
					paragraphs: [
						{
							trait: '特性1：情報に先行する自信。',
							text: ' フールはまず自信があり、その後必要に応じて証拠を収集します。これは技術的には逆ですが、スピードという明確な利点があります。慎重な人がリスク評価を終える頃には、フールはすでに始め、おそらく失敗し、立て直し、リスク評価が提供していたよりも多くの情報で再開しています。科学者が研究室でやると「経験的学習」と呼ばれます。フールがやると「あの出来事」と呼ばれます。'
						},
						{
							trait: '特性2：即興の非凡な能力。',
							text: ' フールにはプランBがありません。それよりも優れたものがあります：そこに着いたときになんとかなるという完全な自信。そして通常はなんとかなります。常にエレガントではありません。常に副次的被害なしではありません。でもそこに着きます。なんとかなります。準備なしに状況に入り、なんとかできる人の中に本当に注目すべきものがあります。「なんとかなる」がその文章でかなり重い仕事をしているとしても。'
						},
						{
							trait: '特性3：魅力。',
							text: ' ペリカンであれ、税関職員であれ、正式な苦情を持つ馬であれ、フールは話すことでどんな状況にも入ったり出たりできると本当に信じています。洗練された修辞学や戦略的コミュニケーションではなく、純粋な存在感と、うまくいかない可能性を一度も考慮したことがない人のエネルギーによって。ペリカンは、正直に言えば、動揺していました。'
						},
						{
							trait: '特性4：物事への忠実性。',
							text: ' フールが何かにコミットしたら——冗談、計画、誤った発音の単語、すでに15人と共有した誤った統計——最後まで行きます。途中で方向転換することは、最初の方向が間違っていたと認めることを必要とします。これはブリリアントのことであり、フールはほぼ肉体的に不可能と感じます。これは欠点です。ある意味では、誠実さの一形態でもあります。'
						},
						{
							trait: '特性5：火曜日の問題。',
							text: ' すべてのフールには火曜日があります。文字通り火曜日ではないかもしれません。予算かもしれません。同意する前に読むことかもしれません。夜中の2時にメールに返信しないことかもしれません。パターンがあります。フールはパターンを知っています。フールは何年もパターンを知っています。フールはパターンに対処していません。しかしフールはパターンに名前をつけました。これが最初のステップであり、それは何かを意味します。そしてフールはそれを誇りに思っています。'
						}
					]
				},
				{
					h2: '第IV部：フールと社交的な状況',
					paragraphs: [
						'夕食会でのフールはイベントです。すでに進行中の話を持って到着します。話はここに来る途中で起きたことに関係し、ブリリアントが持ってきたどんなものよりもすでに面白い。調べたワインと、共有しないことにした地政学についての17の意見です。',
						'フールはすぐに後悔するようなことを言い、後退するよりもその上に構築します。フールはソースを示せない統計を共有します。フールは準備ができていない議論に入り、バイブスだけでそれを戦い、ゆっくりと根拠を失いながら技術的にポイントを認めることなく毎回簡単にピボットします。',
						'パーティー全員がフールを覚えています。常に愛情を持って、常に正確にではありませんが、常に。'
					]
				},
				{
					h2: '第V部：フールとペリカン',
					paragraphs: [
						'ペリカンがフールを目覚めさせました。これはすでにペリカンの間違いでした——コーヒー前のフールは完全に異なる生き物ですが、それは置いておきましょう。最初のフールの本能は鳥の言葉を話して交渉することでした。鳥の言葉は話しません。英語を話すのと同じように鳥の言葉を話します：自信を持って、不正確に、そして何らかの形でそれが何かを伝えます。なぜなら言語における自信は言語の90%だからです。',
						'ペリカンはうまく魅了されませんでした。スマートフォンは曖昧な手段で取り戻されました。フールはそれについての素晴らしい話を今持っています。話は語るたびに良くなります。来年には、ペリカンは3羽のペリカンになり、スマートフォンは財布全体になるでしょう。',
						'ペリカンはコメントを断りました。'
					]
				},
				{
					h2: '第VI部：馬のメール',
					paragraphs: [
						'読んで返信しませんでした。それについて話しましょう。',
						'馬があなたにメールを書きました。蹄を持ち、対向する親指を持たない馬が——つまり音声ソフトウェアか純粋な決意でこのメール全体を入力した——開封確認を有効にして正式に連絡してきました。これは非公式なコミュニケーションではありませんでした。馬が言ったことです：あなたに伝えたいことがあり、聞いてもらったと知りたい。',
						'読んで返信しませんでした。',
						'それは大丈夫です。それはとても自分らしいです。メールはまだそこにあります。しばらくそこにあります。馬はあなたが読んだことを知っています。馬は待っています。馬には他の計画はありません；馬は悪名高くスケジュールが詰まっていません。いつかそのメールを開くと、それには必要だったことが含まれていて、あなたはあなた特有のフールの方法で、最終的にそこに着いたことを嬉しく思うでしょう。',
						'準備ができたら返信してください。馬はどこにも行きません。文字通り。馬です。'
					]
				},
				{
					h2: '第VII部：結論として、あなたは素晴らしい',
					paragraphs: [
						'そうです、世界にはブリリアントが必要です。脚注を読み、サンプルサイズを確認し、馬とフォローアップミーティングをスケジュールする人が。世界は本当に彼らなしには機能できません。',
						'しかし世界にはあなたも必要です。世界には、浮くと理解する前に丸太に乗る人が必要です。世界には、鳥の言葉でペリカンに話しかけて何らかの形でうまくいく人が必要です。世界には、人生のチーズプレゼンの途中で「まあ」と言って質問に移り、立て直して再び始める人が必要です。',
						'フールには計画がありません。フールにはそれよりも良いものがあります：状況の中にいて、そこから抜け出すための完全で全体的な意志。これはとるに足らないことではありません。実際驚くべきことです。',
						'火曜日は明日です。今回は違う決断をします。あるいはしないで、また別の素晴らしい話を持つでしょう。いずれにせよ、何かが起きるでしょう。'
					]
				}
			]
		}
	}
};
