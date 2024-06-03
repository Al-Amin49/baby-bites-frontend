
"use client";
import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="bg-secondary px-1 py-1 rounded-xl">
      <Switch
    isSelected={theme === "dark" ? true : false}
    onValueChange={(e) => setTheme(e ? "dark" : "light")}
  />
    </div>
  )
};