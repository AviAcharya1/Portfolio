import { RiStackLine } from 'react-icons/ri';
import { FaCode, FaCloud, FaBrain, FaTools } from 'react-icons/fa';

export const cards = [
	{
		icon: RiStackLine ,
		title: 'UI/UX Design',
		features: [
			'Landing Pages',
			'User Flow',
			'Prototyping',
			'Wireframing',
			'Mobile App Design',
		],
	},
	{
		icon: FaCode ,
		title: 'Frontend Development',
		features: [
			'Html, CSS, JavaScript',
			'Reactjs,Nextjs',
			'Bootsrap5, TailwindCSS, MaterialUi',
		],
	},
	{
		icon: FaCode ,
		title: 'Backend Development',
		features: [
			'Php',
			'Nodejs,expressJs,Mongodb',
			'MongoDbAtlas',
		],
	},
	{
		icon: FaCloud,
		title: 'Cloud & DataScience',
		features: [
			'Basics of cloud',
			'Basics of AWS (S3,lambda)',
		],
	},
	{
		icon: FaBrain,
		title: 'DataScience',
		features: [
			'Python',
			'Machine Learning',
			'Deep Learning',
			'Generative Ai',
			'Prompt engineering'
		],
	},
	{
		icon: FaTools,
		title: 'Tools Used',
		features: [
			'VsCode',
			'JupiterNoteBook',
			'Google Colab',
			'Notion(Documenting)',
		],
	},
];