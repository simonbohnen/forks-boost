const interval = setInterval(() => {
  // If we find the forks-tab element, abort
  if (document.getElementById("forks-tab")) {
    return
  }

  const insightstab = document.getElementById("insights-tab");
  if (!insightstab) {
    return
  }

  const li = insightstab.parentElement;
  const nav = li.parentElement;

  const forks_li = li.cloneNode(true)

  const forks_a = forks_li.childNodes[1]
  // console.log(`length: ${forks_a.length}`)
  console.log(forks_a.childNodes);
  console.log(forks_a instanceof Element);

  forks_a.id = "forks-tab";
  forks_a.setAttribute("data-tab-item", "i8forks-tab");
  forks_a.setAttribute("data-hotkey", "g f");
  forks_a.setAttribute("data-analytics-event",'{"category":"Underline navbar","action":"Click tab","label":"Forks","target":"UNDERLINE_NAV.TAB"}');
  forks_a.removeAttribute("data-selected-links")

  forks_a.childNodes[3].removeAttribute("data-content")

  // Set icon
  forks_button = document.getElementById("fork-button")
  svg_copy = forks_button.childNodes[1].cloneNode(true)
  console.log(forks_button.childNodes[1])
  forks_a.childNodes[1].replaceWith(svg_copy);


  path = window.location.pathname
  repo_path = path.split("/", 3).join("/") + "/network/members";
  forks_a.href = repo_path

  forks_a.childNodes[3].innerHTML = "Forks"

  nav.append(forks_li);
  // webpackChunk.push([["abc"], [], m => console.log(m(11793).N9(forkstab))])
}, 1000);