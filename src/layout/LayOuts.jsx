import React from 'react'
import NavBar from './NavBar'
import { NavLink, Outlet, useLocation } from 'react-router';
import { RiDashboardLine, RiUserAddLine } from 'react-icons/ri';
import { TbAward, TbBuildingStore, TbReportAnalytics } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GrGroup, GrRestaurant } from 'react-icons/gr';
import { Settings, Wallet } from 'lucide-react';
import { GiGolfFlag } from 'react-icons/gi';
import { PiShoppingBagOpenBold } from 'react-icons/pi';

const LayOuts = () => {
    const location = useLocation();
  
    const Menus = [
      {
        title: "Dashboard",
        icon: <RiDashboardLine size={27} />,
        to: "/dashboard",
      },
      {
        title: "Turf Management",
        icon: <PiShoppingBagOpenBold size={27}/>,
        to: "/turfmanagement",
      },
      {
        title: "Classes Management",
        icon: <TbBuildingStore size={27} />,
        to: "/classesmanagement",
      },
      {
        title: "Coaches Management",
        icon: <LuLayoutDashboard size={27} />,
        to: "/coachesmanagement",
      },
      {
        title: "Booking Management",
        icon: <GrRestaurant size={27} />,
        to: "/bookingmanagement",
      },
      {
        title: "Sports Category Management",
        icon: <GiGolfFlag  size={27} />,
        to: "/sportscategorymanagement",
      },
      {
        title: "Transactions",
        icon: <PiShoppingBagOpenBold  size={27} />,
        to: "/transactions",
      },
      {
        title: "Wallet & Rewards",
        icon: <TbAward  size={27} />,
        to: "/walletandrewards",
      },
      {
        title: "Offer Management",
        icon: <Settings size={27} />,
        to: "/offersmanagement",
      },
      {
        title: "Reports",
        icon: <TbReportAnalytics size={27} />,
        to: "/reports",
      },
      {
        title: "Settings",
        icon: <Settings size={27} />,
        to: "/settings/users",
        nested: [
            {
              title: "User",
              icon: <RiUserAddLine size={23} />,
              to: "/settings/users",
            },
            {
              title: "Roles",
              icon: <GrGroup size={23} />,
              to: "/settings/roles",
            },
          ],
      }
  
  
  
    ]
  
    const isMenuActive = (menu) => {
      if (location.pathname.startsWith(menu.to)) {
        return true;
      }
      if (
        menu.nested &&
        menu.nested.some((item) => location.pathname.startsWith(item.to))
      ) {
        return true;
      }
      return false;
    };

    const isMenuActives = (menu) => {
        if (location.pathname.startsWith(menu.to)) {
          return true;
        }
        if (
          menu.nested &&
          menu.nested.some((item) => location.pathname.startsWith(item.to))
        ) {
          return true;
        }
        return false;
      };
    return (
      <div className=" font-roboto-flex w-full fixed h-screen ">
        <NavBar />
        <div className="flex bg-light-orange h-11/12 ">
        <div className="px-7 pb-10 bg-light-orange overflow-auto no-scrollbar ">
            <ul>
              {Menus.map((menu, index) => (
                <React.Fragment key={index}>
                  <NavLink to={menu.to}>
                    <li
                      className={`w-[92px] text-sm font-light flex flex-col items-center text-center p-[10px] my-5   rounded-xl ${
                        isMenuActive(menu)
                          ? " text-black   bg-dark-orange "
                          : " text-dark-grey border border-white "
                      }`}
                    >
                      <span>{menu.icon}</span>
                      <p>{menu.title}</p>
                    </li>
                  </NavLink>
                </React.Fragment>
              ))}
            </ul>
          </div>
          {Menus.map((menu, index) => {
          const isNestedSidebarVisible = (menuTitle, pathname) => {
            if (menuTitle === "Turf Management") {
              return (
                pathname.startsWith("/turfmanagement/") && pathname !== "/turfmanagement"
              );
            }

            if (menuTitle === "Classes Management") {
              return pathname.startsWith("/classesmanagement/") && pathname !== "/classesmanagement";
            }

            if (menuTitle === "Coaches Management") {
              return pathname.startsWith("/coachesmanagement/") && pathname !== "/coachesmanagement";
            }

            if (menuTitle === "Booking Management") {
              return pathname.startsWith("/bookingmanagement/") && pathname !== "/bookingmanagement";
            }

            if (menuTitle === "Sports Category Management") {
              return pathname.startsWith("/sportscategorymanagement/") && pathname !== "/sportscategorymanagement";
            }

            if (menuTitle === "Transactions") {
              return pathname.startsWith("/transactions/") && pathname !== "/transactions";
            }

            if (menuTitle === "Wallet & Rewards") {
              return pathname.startsWith("/walletandrewards/") && pathname !== "/walletandrewards";
            }
            if (menuTitle === "Offer Management") {
                return pathname.startsWith("/offersmanagement/") && pathname !== "/offersmanagement";
              }

            if (menuTitle === "Reports") {
              return pathname.startsWith("/reports/") && pathname !== "/reports";
            }

            return pathname.startsWith(`/${menuTitle.toLowerCase()}`);
          };

          const shouldShowSidebar =
            menu.nested &&
            isNestedSidebarVisible(menu.title, location.pathname);

          return (
            shouldShowSidebar &&
            isMenuActives(menu) && (
              <div
                key={index}
                className="mx-2 w-56 text-sm  my-4 rounded-lg bg-white overflow-auto no-scrollbar shadow-lg py-6 mb-10"
              >
                <ul>
                  {menu.nested.map((item, index) => (
                    <li key={index} className="mb-2">
                      <NavLink to={item.to}>
                        <div
                          className={`w-full   flex  items-center gap-2 py-3 px-3 cursor-pointer ${
                            location.pathname.startsWith(item.to)
                              ? "bg-[#FFFDE3] text-[#362417] border-r-5 border-r-dark-orange"
                              : "text-[#362417]"
                          }`}
                        >
                          <span>{item.icon}</span>
                          <p>{item.title}</p>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          );
        })}

          <div className="w-full pt-5 ml-4 overflow-auto no-scrollbar ">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  
export default LayOuts