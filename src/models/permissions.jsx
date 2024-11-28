export function getPermissions(user) {
  if (user === "admin") {
    return adminpermissions;
  }
  if (user === "manager") {
    return manager;
  }
  return userpermissions;
}

let userpermissions = [
  {
    title: "Profile",
    urlpath: "/profile",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
    // icon: "user",
  },
  {
    title: "Targets",
    urlpath: "/targets",
   permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  // {
  //     title:"History",
  //     urlpath:"/dashboard/history",
  // }
];

let adminpermissions = [
  {
    title: "Profile",
    urlpath: "/profile",
    // icon: "user",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  {
    title: "Targets",
    urlpath: "/targets",
    //icon:"target"
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  {
    title: "Permissions",
    urlpath: "/permissions",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  {
    title: "Employees",
    urlpath: "/employees",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  {
    title: "Sales",
    urlpath: "/sales",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
];

let manager = [
  {
    title: "Profile",
    urlpath: "/profile",
    // icon: "user",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  {
    title: "Targets",
    urlpath: "/targets",
    //icon:"target"
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
  {
    title: "Sales",
    urlpath: "/sales",
    permissions: [
        {title:"read",value:true},
        {title:"write",value:false},
        {title:"fullaccess",value:false}
    ],
  },
];
