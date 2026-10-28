async function loadRouteEvent() {
  try {
    const slug = document.documentElement.dataset.route;
    const response = await fetch("data/today.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load data/today.json");
    const data = await response.json();
    const isChinese = document.documentElement.lang === "zh-CN";
    const parts = String(data.date || "").split(".");
    let displayDate = data.date || "";
    let isoDate = "";
    if (parts.length === 3) {
      isoDate = parts[0] + "-" + parts[1].padStart(2, "0") + "-" + parts[2].padStart(2, "0");
      const dateObj = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]));
      displayDate = isChinese
        ? dateObj.toLocaleDateString("zh-CN", {year:"numeric",month:"long",day:"numeric",weekday:"long",timeZone:"UTC"})
        : dateObj.toLocaleDateString("en-US", {year:"numeric",month:"long",day:"numeric",weekday:"long",timeZone:"UTC"});
    }
    const dateEl = document.getElementById("event-date");
    const timeEl = document.getElementById("event-time");
    const kicker = document.getElementById("route-date-kicker");
    if (dateEl) dateEl.textContent = displayDate;
    if (timeEl) timeEl.textContent = data.time || (isChinese ? "联系确认" : "To be confirmed");
    if (kicker) kicker.textContent = "NEXT RETURN · " + (data.date || "");
    const form = document.querySelector("form");
    if (form) {
      const dateField = form.querySelector('[name="date"]');
      const eventField = form.querySelector('[name="event"]');
      if (dateField) dateField.value = isoDate;
      if (eventField) eventField.value = (isChinese ? "城市归山 · 上海｜" : "City Return · Shanghai | ") + slug.toUpperCase() + " | " + isoDate;
    }
  } catch (error) {
    console.error("Could not load route event:", error);
  }
}
loadRouteEvent();
