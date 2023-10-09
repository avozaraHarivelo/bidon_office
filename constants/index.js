// data.jsx
export const sidebarLinks = [
    {
      id: "tableau-de-bord",
      icon: "fe-home",
      text: "Tableau de bord",
      link:"/Dashboard"
    },
    {

      id: "user",
      icon: "fe-user",
      text: "Utilisateurs",
      subMenuItems: [
        {
          id: "list-users",
          text: "Listes",
          link: "/users",
        },
        {
            id: "profil-user",
            text: "Profil",
            link: "/user",
          },
      ],
    },
    {
      id: "transaction",
      icon: "fe-list",
      text: "Transactions",
      subMenuItems: [
        {
          id: "bidon",
          text: "Bidon",
          link: "/Bidon",
        },
        {
            id: "token",
            text: "Token",
            link: "/Token",
          },
      ],
    },
    {
        id: "association",
        icon: "fe-users",
        text: "Associations",
        link:"/association"
      },
      {
        id: "autres",
        icon: "fe-settings",
        text: "Paramètres",
        link:"/settings"
      },
  ];
  