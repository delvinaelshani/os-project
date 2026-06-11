import { useEffect, useState } from "react";

import { Icon } from "@components/shared/Icon/Icon";

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
  addEventListener(type: "levelchange" | "chargingchange", listener: () => void): void;
  removeEventListener(type: "levelchange" | "chargingchange", listener: () => void): void;
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

export const BatteryLife = () => {
  const [batteryLevel, setBatteryLevel] = useState<string>("Battery N/A");

  useEffect(() => {
    const navigatorWithBattery = navigator as NavigatorWithBattery;

    if (!navigatorWithBattery.getBattery) {
      setBatteryLevel("Battery N/A");
      return;
    }

    let battery: BatteryManager | null = null;

    const updateBattery = () => {
      if (!battery) {
        return;
      }

      const percentage = Math.round(battery.level * 100);
      setBatteryLevel(`${percentage}%${battery.charging ? " ⚡" : ""}`);
    };

    navigatorWithBattery
      .getBattery()
      .then(batteryManager => {
        battery = batteryManager;
        updateBattery();

        battery.addEventListener("levelchange", updateBattery);
        battery.addEventListener("chargingchange", updateBattery);
      })
      .catch(() => setBatteryLevel("Battery N/A"));

    return () => {
      battery?.removeEventListener("levelchange", updateBattery);
      battery?.removeEventListener("chargingchange", updateBattery);
    };
  }, []);

  return (
    <div className="flex items-center mr-4 gap-x-1">
      <span className="text-xs font-bold cursor-pointer">{batteryLevel}</span>
      <Icon icon="battery-life" className="w-[20px]" />
    </div>
  );
};
