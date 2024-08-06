import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";

export default function SelectLangue() {
  const location = useLocation();
  const { language } = location.state || {};

  const langues = [
    {
      name: "English",
      icon: "https://img.icons8.com/color/48/great-britain-circular.png",
    },
    {
      name: "French",
      icon: "https://img.icons8.com/color/48/france-circular.png",
    },
    {
      name: "Arabic",
      icon: "https://img.icons8.com/color/48/saudi-arabia-circular.png",
    },
  ];
  const selectedLanguage = langues.find((langue) => langue.name.toLowerCase() === language.toLowerCase());
 
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
      <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedLanguage.icon && (
            <img
              src={selectedLanguage.icon}
              alt={selectedLanguage.name}
              width="24"
              height="24"
              className="mr-2"
            />
          )}
          {selectedLanguage.name}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-44 h-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <p className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
            Select Language
          </p>
        </MenuItem>
        <div className="py-1">
          {
            langues.map(langue =>
              <>
                <MenuItem key={langue.name}>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <span className="mr-2">
                      <img
                        width="24"
                        height="24"
                        src={langue.icon}
                        alt={langue.name}
                      />
                    </span>
                    {langue.name}
                  </a>

                </MenuItem>
                <div className="border-t border-gray-200 my-1"></div>
                </>
              )
            
          }
  
        </div>
      </MenuItems>
    </Menu>
  );
}
