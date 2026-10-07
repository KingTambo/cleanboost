export const CALENDLY_URL = "https://calendly.com/amar-cleanboost/30min";

export function getCalendlyWidgetUrl() {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    hide_event_type_details: "1",
    background_color: "f8fbfb",
    text_color: "073257",
    primary_color: "15a5a8",
  });

  return `${CALENDLY_URL}?${params.toString()}`;
}
