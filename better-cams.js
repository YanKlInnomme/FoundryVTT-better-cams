Hooks.on("renderSettings", (app, html) => {
  const links = {
    git: {
      title: "Module deposit",
      url: "https://github.com/YanKlInnomme/FoundryVTT-better-cams",
      iconClass: "fab fa-github"
    },
    donation: {
      title: "Buy me a coffee",
      url: "https://www.buymeacoffee.com/yank",
      iconClass: "fa-regular fa-mug-hot fa-bounce"
    }
  };

  const createButton = (text, iconClass, url) => {
    const button = $(`<button><i class="${iconClass}"></i> ${text}</button>`);
    button.on("click", ev => {
      ev.preventDefault();
      window.open(url, "_blank");
    });
    return button;
  };

  const addLinkButton = (container, link) => {
    const button = createButton(link.title, link.iconClass, link.url);
    container.append(button);
  };

  const title = "Better Cams · Links";
  const lotdSection = $(`<h2>${title} <i class="fa-light fa-up-right-from-square"></i></h2>`);
  html.find("#settings-game").after(lotdSection);

  const lotdDiv = $(`<div></div>`);
  lotdSection.after(lotdDiv);

  Object.values(links).forEach(link => {
    addLinkButton(lotdDiv, link);
  });
});
//