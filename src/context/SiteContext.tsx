import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteData } from '../types';
import { siteData } from '../data/siteData';

interface SiteContextType {
  data: SiteData;
  updateData: (newData: Partial<SiteData>) => void;
  isLoading: boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(siteData);
  const [isLoading, setIsLoading] = useState(false);

  const updateData = (newData: Partial<SiteData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  return (
    <SiteContext.Provider value={{ data, updateData, isLoading }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
};