import { icons } from "./site.icons";

export const siteConfig = {
	links: {
		home: {
			name: "Inicio",
			path: "#inicio",
		},
		experience: {
			name: "Experiencia",
			path: "#experiencia",
		},
		skills: {
			name: "Habilidades",
			path: "#habilidades",
		},
		projects: {
			name: "Proyectos",
			path: "#proyectos",
		},
	},
	owner: "Christian",
	ownerLogo: "ChapST1",
	ownerInfo: `
  👋 Hola! Soy Christian, un desarrollador front-end en busca de 
  experiencia laboral. Me apasiona el desarrollo web y estoy motivado
  por aprender y crecer en un equipo de desarrolladores.

  En mi tiempo libre, me gusta aprender nuevas 
  tecnologías y explorar nuevas formas de crear interfaces 
  de usuario atractivas e intuitivas 💅.
  `,
	cvTitle: "Ver CV",
	cvLink: "https://mi-cv-xi.vercel.app/",

	socialMedia: [
		{
			name: "Github",
			link: "https://github.com/chapst1",
			icon: icons.github.icon,
		},
		{
			name: "Linkdin",
			link: "https://www.linkedin.com/in/christian-alvarez-89a783272/",
			icon: icons.linkdin.icon,
		},
	],
	sections: {
		workExperience: {
			title: "Experiencia laboral",
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
				{
					name: icons.tailwind.name,
					icon: icons.tailwind.icon,
				},
				{
					name: icons.react.name,
					icon: icons.react.icon,
				},
				{
					name: icons.next.name,
					icon: icons.next.icon,
				},
				{
					name: icons.astro.name,
					icon: icons.astro.icon,
				},
				{
					name: icons.node.name,
					icon: icons.node.icon,
				},
				{
					name: icons.mySql.name,
					icon: icons.mySql.icon,
				},
				{
					name: icons.sql.name,
					icon: icons.sql.icon,
				},
				{
					name: icons.git.name,
					icon: icons.git.icon,
				},
				{
					name: icons.github.name,
					icon: icons.github.icon,
				},
				{
					name: icons.zustand.name,
					icon: icons.zustand.icon,
				},
			],
		},
		projects: {
			title: "Mis Proyectos",
			info: `
			 En esta sección, se describen los proyectos personales y
			 profesionales en los que he participado. Estos proyectos demuestran 
			 mis habilidades y conocimientos como desarrollador web, así como mi capacidad para 
			 trabajar de forma independiente y en equipo
			`,
			data: [
				{
					name: "Gallery",
					image: "./public/projects/1.webp",
					info: "Una plataforma para descargar wallpapers ",
					demo: "https://gruvbox-wallpapers.vercel.app/",
					repo: "https://github.com/ChapST1/gruvbox-wallpapers-web",
					stack: ["Astro", "TailwindCss", "JavaScript", "Node JS"],
				},
				{
					name: "Caroni Computer",
					image: "./public/projects/2.webp",
					info: "Un cambio de estilos al comercio electronico",
					demo: "https://caronicomputer.com",
					repo: null,
					stack: ["Html", "Css", "JavaScript"],
				},
			],
		},
	},
};
