import { createContext, ReactNode, useState } from "react";

export interface SectionContextProps {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

export const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<string>("");

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
