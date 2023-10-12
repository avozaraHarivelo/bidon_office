// data.jsx
export const sidebarLinks = [
    {
      id: "tableau-de-bord",
      icon: "fe-home",
      text: "Tableau de bord",
      link:"/"
    },
    {

      id: "user",
      icon: "fe-user",
      text: "Utilisateurs",
      subMenuItems: [
        {
          id: "list-users",
          text: "Listes",
          link: "/user",
        },
        {
            id: "profil-user",
            text: "Profil",
            link: "/user/current",
          },
      ],
    },
    {
      id: "carte-nfc",
      icon: "fe-home",
      text: "Carte nfc",
      link:"/nfc"
    },
    {
      id: "transaction",
      icon: "fe-list",
      text: "Transactions",
      subMenuItems: [
        {
          id: "bidon",
          text: "Bidon",
          link: "/transaction/bidon",
        },
        {
            id: "token",
            text: "Token",
            link: "/transaction/token",
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
        link:"/autres"
      },
  ];
  