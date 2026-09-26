import { useState } from "react";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: "The Muha Co",
    email: "hello@themuha.co",
    phone: "+92 300 0000000",
    instagram: "@themuha.co",
  });

  return (
    <div>
      <div className="mb-8 sm:mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl text-cream">
          Settings
        </h1>
        <p className="text-cream/50 text-sm mt-1">
          Manage your store information.
        </p>
      </div>

      <div className="bg-admin-card border border-admin-border rounded-xl p-5 sm:p-8 max-w-2xl space-y-5 sm:space-y-6">
        {Object.keys(settings).map((key) => (
          <div key={key}>
            <label className="text-xs uppercase tracking-widest text-cream/50 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              value={settings[key]}
              onChange={(e) =>
                setSettings({ ...settings, [key]: e.target.value })
              }
              className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition text-sm"
            />
          </div>
        ))}
        <button className="bg-cream text-maroon px-5 sm:px-6 py-3 rounded-lg uppercase tracking-widest text-xs font-medium hover:bg-cream-dark transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}