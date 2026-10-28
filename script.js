async function loadToday() {
  try {
    const response = await fetch("data/today.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load data/today.json");
    const data = await response.json();
    const isChinese = document.documentElement.lang === "zh-CN";
    const theme = isChinese ? data.theme_cn : data.theme_en;
    const routeMap = { LAND: "land", WATER: "water", WIND: "wind", FIRE: "fire", SPACE: "space" };
    const match = String(theme || "").match(/LAND|WATER|WIND|FIRE|SPACE/i);
    const slug = match ? routeMap[match[0].toUpperCase()] : "space";
    const link = document.querySelector(".enter-link");
    if (link) link.href = isChinese ? slug + ".html" : slug + "-en.html";
    if (isChinese) {
      const values = {
        date: data.date, theme: data.theme_cn, route: data.route_cn,
        time: data.time, people: data.people_cn
      };
      Object.entries(values).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value || "";
      });
    } else {
      const parts = String(data.date || "").split(".");
      let englishDate = data.date || "";
      if (parts.length === 3) {
        englishDate = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]))
          .toLocaleDateString("en-US", {year:"numeric",month:"long",day:"numeric",timeZone:"UTC"});
      }
      const values = {
        "date-en": englishDate, "theme-en": data.theme_en, "route-en": data.route_en,
        "time-en": data.time, "people-en": data.people_en
      };
      Object.entries(values).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value || "";
      });
    }
  } catch (error) {
    console.error("Could not load today's event:", error);
  }
}
loadToday();
