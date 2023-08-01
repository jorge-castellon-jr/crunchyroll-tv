import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MainLayout = () => {
  const nav_items = [
    {
      name: "Home",
      icon: <HomeIcon fontSize="inherit" />,
      to: "/",
    },
    {
      name: "Search",
      icon: <SearchIcon fontSize="inherit" />,
      to: "/anime/search",
    },
    {
      name: "My Lists",
      icon: <PlaylistPlayIcon fontSize="inherit" />,
      to: "/profile/lists",
    },
  ];
  return (
    <div className="w-full flex justify-between relative z-10">
      {/* Navigation */}
      <div className="flex items-center gap-[2vw]">
        <Image
          className="w-[12vw]"
          src="/assets/images/logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
        {/* Nav Item */}
        {nav_items.map((item) => (
          <Link
            href={item.to}
            key={item.name}
            className="flex items-center gap-[1vw]"
          >
            {item.icon}
            <div className="pt-1 uppercase">{item.name}</div>
          </Link>
        ))}
      </div>
      {/* account */}
      <div className="flex items-center gap-[1vw]">
        <NotificationsIcon fontSize="inherit" />
        <div>Name</div>
        <Image
          className="rounded-full border-white border object-contain"
          src="/assets/images/avatar.jpeg"
          alt="avatar"
          width={40}
          height={40}
        />
        <ArrowDropDownIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default MainLayout;
