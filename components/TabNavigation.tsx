"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Eye } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { t } = useLanguage();

  const tabs = [
    { id: "preview", label: t.tabs.preview, icon: Eye },
    { id: "ads", label: t.tabs.ads, icon: BarChart3 },
    // { id: "chat", label: t.tabs.chat, icon: MessageCircle },
  ];

  return (
    <div className="flex w-full border-b border-border bg-background">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            className="flex-1 flex items-center gap-2 rounded-none h-12"
            onClick={() => onTabChange(tab.id)}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{tab.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
