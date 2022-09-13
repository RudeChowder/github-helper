const createTabs = () => {
  const prNumber = window.location.href.match(/\d+/)
  const envTab = document.createElement("a")
  envTab.href = `https://milano.powerapp.cloud/powerhome/nitro-web/pr${prNumber}`
  envTab.innerText = "Milano"
  envTab.className = "tabnav-tab flex-shrink-0 "
  envTab.target = "_blank"
  return [envTab]
}

const appendTabs = (tabs) => {
  const navBar = document.querySelector(".tabnav-tabs")
  tabs.forEach( tab => {
    navBar.appendChild(tab)
  })
}

const help = () => {
  const tabs = createTabs()
  appendTabs(tabs)
}

help()
