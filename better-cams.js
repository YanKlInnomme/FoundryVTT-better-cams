const MODULE_ID = "better-cams";

/** Apply client-side settings without re-rendering the camera dock. */
function applyAppearanceSettings() {
  const root = document.documentElement;
  root.style.setProperty("--better-cams-idle-saturation", game.settings.get(MODULE_ID, "idleSaturation"));
  root.style.setProperty("--better-cams-speaking-saturation", game.settings.get(MODULE_ID, "speakingSaturation"));
  root.style.setProperty("--better-cams-speaking-color", game.settings.get(MODULE_ID, "speakingColor"));
  root.style.setProperty("--better-cams-transition-duration", `${game.settings.get(MODULE_ID, "transitionDuration")}ms`);
}

Hooks.once("init", () => {
  const fields = foundry.data.fields;
  const common = {
    scope: "client",
    config: true,
    onChange: applyAppearanceSettings
  };

  game.settings.register(MODULE_ID, "idleSaturation", {
    ...common,
    name: "BETTER_CAMS.Settings.IdleSaturation.Name",
    hint: "BETTER_CAMS.Settings.IdleSaturation.Hint",
    type: new fields.NumberField({required: true, min: 0, max: 1, step: 0.05, initial: 0.4}),
    default: 0.4
  });

  game.settings.register(MODULE_ID, "speakingSaturation", {
    ...common,
    name: "BETTER_CAMS.Settings.SpeakingSaturation.Name",
    hint: "BETTER_CAMS.Settings.SpeakingSaturation.Hint",
    type: new fields.NumberField({required: true, min: 0, max: 2, step: 0.05, initial: 1}),
    default: 1
  });

  game.settings.register(MODULE_ID, "speakingColor", {
    ...common,
    name: "BETTER_CAMS.Settings.SpeakingColor.Name",
    hint: "BETTER_CAMS.Settings.SpeakingColor.Hint",
    type: new fields.ColorField({required: true, nullable: false, initial: "#ff6400"}),
    default: "#ff6400"
  });

  game.settings.register(MODULE_ID, "transitionDuration", {
    ...common,
    name: "BETTER_CAMS.Settings.TransitionDuration.Name",
    hint: "BETTER_CAMS.Settings.TransitionDuration.Hint",
    type: new fields.NumberField({required: true, min: 0, max: 2000, step: 50, initial: 250}),
    default: 250
  });
});

Hooks.once("ready", applyAppearanceSettings);
