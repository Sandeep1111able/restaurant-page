const homeText = {
    homeTitleText: "Welcome",
    homeHeaderText: "Odin Momo Shop",
    subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore quibusdam voluptatibus, voluptas dolores, placeat quo vel minima et reprehenderit exercitationem illo dolor corporis incidunt doloremque facilis in eum amet.",

}



const homeTab = () => {
    const homeTab = document.createElement("div");
    const homeTitle = document.createElement("h1");
    const homeHeader = document.createElement("h2");
    const sub = document.createElement("p");

    homeTab.classList.add('tab');
    homeTitle.textContent = homeText.homeTitleText;
    homeHeader.classList.add('title');
    homeHeader.textContent = homeText.homeHeaderText;
    sub.textContent = homeText.subText;

    homeTab.append(homeTitle, homeHeader, sub);
    homeTab.classList.add("active");


    return homeTab;
}

export default homeTab;