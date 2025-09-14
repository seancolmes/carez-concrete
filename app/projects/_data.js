// app/projects/_data.js
export const PROJECTS = [
  {
    slug: "ada-elevated-ramp",
    title: "Elevated ADA ramp",
    location: "Private",
    cover: "/projects/ada-elevated-ramp/cover.jpeg",
    caption: "Elevated ADA ramp & Landing",
    details:
      "Formed with rebar and poured elevated ADA ramp with compliant landing. Installed embeds for handrail. Slope percentage per plan called for (7.5%) and ≤2% cross-slope. Topcast 75 aggregate finish, and radius edges with 1/8 radius edger.",
    photos: [
      "/projects/ada-elevated-ramp/1.jpeg",
      "/projects/ada-elevated-ramp/2.jpeg",
      "/projects/ada-elevated-ramp/3.jpeg",
      "/projects/ada-elevated-ramp/4.jpg",
      "/projects/ada-elevated-ramp/5.jpg",
      "/projects/ada-elevated-ramp/6.jpg",
      "/projects/ada-elevated-ramp/7.jpg",
      "/projects/ada-elevated-ramp/8.jpg",
      "/projects/ada-elevated-ramp/9.jpg",
    ],
  },
  {
    slug: "BoardForm",
    title: "Boardform architectural Wall",
    location: "Campus access, Washington",
    cover: "/projects/board-form-wall/cover.jpeg",
    caption: "Built 200 lf retaining wall with board form finish. Firberglass coil rod ties to hold wall thickness and hide tie from finish. Built using MDO and douglas fir board form sandblasted. ",
    details:
      "Board form architectural wall with 9.6 radius seatwall at upper landing and 2.8 radius seatwall at lower landing. Walkway to follow.",
    photos: [
      "/projects/board-form-wall/1.jpeg",
      "/projects/board-form-wall/2.jpeg",
      "/projects/board-form-wall/3.jpeg",
      "/projects/board-form-wall/4.jpeg",
      "/projects/board-form-wall/5.jpeg",
      "/projects/board-form-wall/6.jpeg",
      "/projects/board-form-wall/7.jpeg",
      "/projects/board-form-wall/8.jpeg",
      "/projects/board-form-wall/9.jpeg",
      "/projects/board-form-wall/10.jpeg",
      "/projects/board-form-wall/11.jpeg",
      "/projects/board-form-wall/12.jpeg",
      "/projects/board-form-wall/13.jpeg",
      "/projects/board-form-wall/14.jpeg",
      "/projects/board-form-wall/15.jpeg",
      "/projects/board-form-wall/16.jpeg",
      "/projects/board-form-wall/17.jpeg",
      "/projects/board-form-wall/18.jpeg",
      "/projects/board-form-wall/19.jpeg",
      "/projects/board-form-wall/20.jpeg",
      "/projects/board-form-wall/21.jpeg",
      "/projects/board-form-wall/22.jpeg",
      "/projects/board-form-wall/23.jpeg",
      "/projects/board-form-wall/24.jpeg",
      "/projects/board-form-wall/25.jpeg",
      "/projects/board-form-wall/26.jpeg",
      "/projects/board-form-wall/27.jpeg",
      "/projects/board-form-wall/28.jpeg",
      "/projects/board-form-wall/29.jpeg",
      "/projects/board-form-wall/30.jpeg",
      "/projects/board-form-wall/31.jpeg",
      "/projects/board-form-wall/32.jpeg",
      "/projects/board-form-wall/33.jpeg",
      "/projects/board-form-wall/34.jpeg",
      "/projects/board-form-wall/35.jpeg",
      "/projects/board-form-wall/36.jpg",
      "/projects/board-form-wall/37.jpg",
    ],
  },
  {
    slug: "ada-walkway",
    title: "Aggregate ADA Walkway",
    location: "Commercial",
    cover: "/projects/ada-walkway/cover.jpg",
    caption: "Exposed aggregate with T-50 topcast product.",
    details:
      "Exposed aggregate finish. We performed over 100' of formwork and rebar, finish work was completed and pressure washed. ADA compliance with 5 landings were satisfied.",
    photos: [
      "/projects/ada-walkway/2.jpeg",
      "/projects/ada-walkway/3.jpeg",
      "/projects/ada-walkway/4.jpg",
      "/projects/ada-walkway/5.jpg",
      "/projects/ada-walkway/6.jpg",
      "/projects/ada-walkway/7.jpg",
      "/projects/ada-walkway/8.jpg",
      "/projects/ada-walkway/9.jpg",
      "/projects/ada-walkway/10.jpeg",

    ],
  },
  
    
];

// Helper for lookups
export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
