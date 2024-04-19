interface ListItem {
  title: string;
  link: string;
}

export function getList(): ListItem[] {
  return [
    { title: "DISKONO Live @ MFF 2022", link: "https://www.mixcloud.com/Wubwah/diskono-live-mff-2022/" },
    { title: "DISKO @ ANTHROCON 2022", link: "https://www.mixcloud.com/diskodog/disko-ac-2022/https://www.mixcloud.com/diskodog/disko-ac-2022/" },
    { title: "DISKO Live @ FWA 2023", link: "https://www.youtube.com/watch?v=IV6EE4ST5Wk" },
    { title: "URL FEST 2 - DISKO", link: "https://www.youtube.com/watch?v=R71PQZcSb7E" },
  ];
}
