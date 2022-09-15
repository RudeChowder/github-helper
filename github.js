const createTabs = () => {
  const prNumber = window.location.href.match(/\d+/)

  const buildCount = document.querySelectorAll(".commit-build-statuses").length
  const ciTab = document.createElement("a")
  ciTab.href = `https://ci.powerhrg.com/blue/organizations/jenkins/Nitro/detail/PR-${prNumber}/${buildCount}/pipeline`
  ciTab.innerText = "CI"
  ciTab.className = "tabnav-tab flex-shrink-0 pl-5 ml-5 "
  ciTab.target = "_blank"

  const envTab = document.createElement("a")
  envTab.href = `https://milano.powerapp.cloud/powerhome/nitro-web/pr${prNumber}`
  envTab.innerText = "Milano"
  envTab.className = "tabnav-tab flex-shrink-0 "
  envTab.target = "_blank"

  return [ciTab, envTab]
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
