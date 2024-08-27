import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../Zustand/Store";
import { useEffect } from "react";

export default function SelectLanguage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedLanguage } = useStore();

  useEffect(() => {
    if (!selectedLanguage) {
      navigate("/choselanguage");
    }
  }, [selectedLanguage]);

  const languages = [
    {
      name: "English",
      icon: "https://img.icons8.com/color/48/great-britain-circular.png",
      abbreviation: "Eng",
    },
    {
      name: "French",
      icon: "https://img.icons8.com/color/48/france-circular.png",
      abbreviation: "Fr",
    },
    {
      name: "Arabic",
      icon: "https://img.icons8.com/color/48/saudi-arabia-circular.png",
      abbreviation: "Ar",
    },
  ];

  const selectedLanguageData = languages.find(
    (langue) => langue.name.toLowerCase() === selectedLanguage?.toLowerCase()
  );

  if (!selectedLanguageData) {
    return null; 
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedLanguageData.icon && (
            <img
              src={selectedLanguageData.icon}
              alt={selectedLanguageData.name}
              width="24"
              height="24"
              className="mr-2"
            />
          )}
          <p className="self-center">{selectedLanguageData.abbreviation}</p>
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
          {languages.map((langue, index) => (
            <div key={langue.name}>
              <MenuItem>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  <img
                    width="24"
                    height="24"
                    src={langue.icon}
                    alt={langue.name}
                    className="mr-2"
                  />
                  {langue.name}
                </a>
              </MenuItem>
              {index < languages.length - 1 && (
                <div className="border-t border-gray-200 my-1"></div>
              )}
            </div>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
