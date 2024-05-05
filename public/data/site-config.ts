import { icons, socialMediaIcons } from "./site.icons";

// social media
const { dribbble, github, linkedin, twitter } = socialMediaIcons;

interface Projects {
	title: string;
	info: string;
	data: ProjectItem[];
}

interface ProjectItem {
	name: string;
	image: string;
	info: string;
	demo: string;
	repo: string | null;
	stack: string[];
	status: ProjectStatus;
}

type ProjectStatus = "Finalizado" | "Pausado" | "En Desarrollo";

const devProjects: Projects = {
	title: "Mis Proyectos",
	info: `
	 En esta sección, se describen los proyectos personales y
	 profesionales en los que he participado. Estos proyectos demuestran 
	 mis habilidades y conocimientos como desarrollador web, así como mi capacidad para 
	 trabajar de forma independiente y en equipo.
	`,
	data: [
		{
			name: "Wallpapers -  Web",
			image: "/projects/1.webp",
			info: "Una plataforma para descargar wallpapers.",
			demo: "https://gruvbox-wallpapers.vercel.app/",
			repo: "https://github.com/ChapST1/gruvbox-wallpapers-web",
			stack: ["Astro", "HTML", "CSS", "TailwindCss", "JavaScript", "Node JS"],
			status: "Finalizado",
		},
		{
			name: "Caroni Computer",
			image: "/projects/2.webp",
			info: "Un cambio de estilos al comercio electronico.",
			demo: "https://caronicomputer.com",
			repo: null,
			stack: ["Html", "Css", "JavaScript"],
			status: "Finalizado",
		},
		{
			name: "Wsp bot",
			image: "/projects/3.webp",
			info: "Una forma fácil de crear bots de whatsapp.",
			demo: "https://wsp-bot-ease-chapst1.vercel.app/chatbot",
			repo: "https://github.com/ChapST1/wsp-bot-easy",
			stack: ["React Js", "Zustand JS", "TypeScript", "Framer motion", "React router dom"],
			status: "Pausado",
		},
		{
			name: "Movie DBX",
			image: "/projects/4.webp",
			info: "Un clon de (themoviedb).",
			demo: "https://movie-dbx.vercel.app/",
			repo: "https://github.com/ChapST1/movies-db-clonex",
			stack: ["Next JS", "Tailwind css", "React Js", "ShadcnUI", "Zustand JS", "TypeScript"],
			status: "En Desarrollo",
		},
	],
};

export const siteConfig = {
	owner: "Christian A.",
	ownerLogo: "ChapST1",
	ownerOccupation: "Frontend Developer",
	ownerSocialMedia: [
		{
			name: github.name,
			icon: github.icon,
			link: "https://github.com/ChapST1",
		},
		{
			name: twitter.name,
			icon: twitter.icon,
			link: "https://twitter.com/christi55742461",
		},
		{
			name: dribbble.name,
			icon: dribbble.icon,
			link: "#",
		},
		{
			name: linkedin.name,
			icon: linkedin.icon,
			link: "https://www.linkedin.com/in/christian-alvarez-89a783272/",
		},
	],
	ownerGithub: "https://github.com/ChapST1?tab=repositories",
	ownerInfo: `
  Soy un desarrollador front-end apasionado por el desarrollo web y con experiencia en la creación de interfaces de usuario atractivas e intuitivas. Estoy motivado por aprender y crecer en un equipo de desarrolladores y me entusiasma la idea de contribuir a proyectos desafiantes e innovadores.
  `,
	cvTitle: "Ver CV online",
	cvLink:
		"https://docs.google.com/document/d/1pFmklB7zJIph55Wmlb434Vdi69xpa7G2DftrnsZxBgs/edit?usp=sharing",

	sections: {
		workExperience: {
			title: "Experiencia Laboral",
			info: `
			 Con una pasión por la tecnología y una fuerte ética de trabajo, he adquirido
			 conocimientos y habilidades con las siguientes empresas.
			`,
			data: [
				{
					imageCompany: "https://caronicomputer.com/img/logo.png",
					companyName: "Grupo Caroni Computer",
					companyLink: "https://caronicomputer.com",
					job: "Practicante Frontend Developer",
					time: "3 meses",
					jobInfo: `
						En Grupo Caroni Computer, importadores directos de Asia y Estados Unidos,
						me responsabilicé de la mejora de la apariencia del comercio electrónico. Para
						ello, utilicé las tecnologías HTML, CSS y JavaScript para crear un diseño moderno y 
						atractivo.
						`,
					stack: {
						title: "Stack tecnologico",
						data: ["html", "css", "javaScript"],
					},
				},
			],
		},
		skills: {
			title: "Habilidades",
			info: `
				En esta sección, se describen las habilidades y
			 	conocimientos técnicos que poseo como desarrollador web. Estas habilidades
			  se han adquirido a través de mi formación académica,
			 	experiencia en prácticas y aprendizaje autodidacta.
			`,
			data: {
				languages: {
					title: "Lenguajes",
					data: [
						{
							name: icons.html.name,
							icon: icons.html.icon,
						},
						{
							name: icons.css.name,
							icon: icons.css.icon,
						},
						{
							name: icons.javascript.name,
							icon: icons.javascript.icon,
						},
						{
							name: icons.typeScript.name,
							icon: icons.typeScript.icon,
						},
						{
							name: icons.sass.name,
							icon: icons.sass.icon,
						},
					],
				},
				frameworks: {
					title: "Frameworks y Librerías",
					data: [
						{
							name: icons.next.name,
							icon: icons.next.icon,
						},

						{
							name: icons.react.name,
							icon: icons.react.icon,
						},
						{
							name: icons.tailwind.name,
							icon: icons.tailwind.icon,
						},

						{
							name: icons.astro.name,
							icon: icons.astro.icon,
						},
					],
				},
				backendStack: {
					title: "Backend Stack",
					data: [
						{
							name: icons.mySql.name,
							icon: icons.mySql.icon,
						},
						{
							name: icons.sql.name,
							icon: icons.sql.icon,
						},
					],
				},
				javascriptLibraries: {
					title: "JavaScript - Librerías",
					data: [
						{
							name: icons.zustand.name,
							icon: icons.zustand.icon,
						},
						{
							name: icons["react-router-dom"].name,
							icon: icons["react-router-dom"].icon,
						},
					],
				},
				tools: {
					title: "Herramientas",
					data: [
						{
							name: icons.git.name,
							icon: icons.git.icon,
						},
						{
							name: icons.github.name,
							icon: icons.github.icon,
						},
					],
				},
				design: {
					title: "Herramientas de diseño",
					data: [
						{
							name: icons.figma.name,
							icon: icons.figma.icon,
						},
					],
				},
				learning: {
					title: "Actualmente aprendiendo",
					data: [
						{
							name: icons.node.name,
							icon: icons.node.icon,
						},
						{
							name: icons.vue.name,
							icon: icons.vue.icon,
						},
						{
							name: icons.pinia.name,
							icon: icons.pinia.icon,
						},
						{
							name: icons.angular.name,
							icon: icons.angular.icon,
						},
					],
				},
			},
		},
		projects: devProjects,
	},
};

/**
 * UX UI HERE....
 */

export const siteConfigUxUi = {
	ownerInfo:
		"Soy un desarrollador front-end apasionado por el diseño y la creación de interfaces de usuario. A pesar de estar en las primeras etapas de mi camino como UX/UI Designer, poseo una sólida base en el desarrollo web y comprensión de los principios de diseño intuitivo y atractivo.",

	ownerOccupation: "UX-UI Designer",

	projects: [
		{
			name: "Tv App",
			images: [
				"https://images2.imgbox.com/d6/81/pVVrBx4K_o.png",
				"https://images2.imgbox.com/92/4e/RDSB0aW5_o.png",
				"https://images2.imgbox.com/e7/55/C38Q8dcN_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/e7/55/C38Q8dcN_t.png",
				"https://thumbs2.imgbox.com/d6/81/pVVrBx4K_t.png",
				"https://thumbs2.imgbox.com/92/4e/RDSB0aW5_t.png",
			],
		},
		{
			name: "Media Player",
			images: [
				"https://images2.imgbox.com/11/d7/dpNSG845_o.png",
				"https://images2.imgbox.com/5e/72/uEMg24xY_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/5e/72/uEMg24xY_t.png",
				"https://thumbs2.imgbox.com/11/d7/dpNSG845_t.png",
			],
		},
		{
			name: "Chat Message",
			images: [
				"https://images2.imgbox.com/ab/ed/CVuLt8uU_o.png",
				"https://images2.imgbox.com/56/7b/uju0sJ6y_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/ab/ed/CVuLt8uU_t.png",
				"https://thumbs2.imgbox.com/56/7b/uju0sJ6y_t.png",
			],
		},
		{
			name: "Share Post",
			images: [
				"https://images2.imgbox.com/55/4b/TBjmtuqY_o.png",
				"https://images2.imgbox.com/8a/ef/oydKC17a_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/8a/ef/oydKC17a_t.png",
				"https://thumbs2.imgbox.com/55/4b/TBjmtuqY_t.png",
			],
		},
		{
			name: "Wallpaper Hub",
			images: [
				"https://images2.imgbox.com/6d/86/0e3GUx85_o.png",
				"https://images2.imgbox.com/0d/8c/LDd606Uw_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/6d/86/0e3GUx85_t.png",
				"https://thumbs2.imgbox.com/0d/8c/LDd606Uw_t.png",
			],
		},
		{
			name: "Boarding Pass",
			images: [
				"https://images2.imgbox.com/16/73/TGFK8fzN_o.png",
				"https://images2.imgbox.com/83/31/CmCIol1N_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/16/73/TGFK8fzN_t.png",
				"https://thumbs2.imgbox.com/83/31/CmCIol1N_t.png",
			],
		},
		{
			name: "Onboarding",
			images: [
				"https://images2.imgbox.com/3d/91/2dKdy0O8_o.png",
				"https://images2.imgbox.com/b2/79/g58yFGFJ_o.png",
			],
			thumbnails: [
				"https://thumbs2.imgbox.com/b2/79/g58yFGFJ_t.png",
				"https://thumbs2.imgbox.com/3d/91/2dKdy0O8_t.png",
			],
		},
	],
};
