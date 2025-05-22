import Link from "next/link";
import { FiHome, FiUser, FiSettings, FiBell, FiMail, FiBarChart2, FiLock, FiLogOut, FiFileText } from "react-icons/fi";

const menuItems = [
  {
    title: "MENU",
    items: [
      { label: "Home", icon: <FiHome />, href: "/" },
      { label: "Profile", icon: <FiUser />, href: "/profile" },
      { label: "Messages", icon: <FiMail />, href: "/messages" },
      { label: "Notifications", icon: <FiBell />, href: "/notifications" },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { label: "Reports", icon: <FiBarChart2 />, href: "/reports" },
      { label: "Documents", icon: <FiFileText />, href: "/documents" },
      { label: "Settings", icon: <FiSettings />, href: "/settings" },
      { label: "Security", icon: <FiLock />, href: "/security" },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { label: "Logout", icon: <FiLogOut />, href: "/logout" },
    ],
  },
];

function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
