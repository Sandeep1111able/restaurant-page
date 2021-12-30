const menuText = {
    menuTitleText: "Menu",
    contactHeaderText: "Do you have any questions?",
    addressText: "Opposite to Kantipur Dental, Newroad,Pokhara",
    phoneText: "+97798560xxxxx",
}



const menuTab = () => {
    const menuTitle = document.createElement("h1");
    const menuTab = document.createElement("div");
    menuTab.classList.add('tab');
    menuTitle.textContent = menuText.menuTitleText;

    const menuOne = createMenuItems("Jhol Momo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id minus, incidunt, mollitia tempora facilis expedita repellat, numquam consequuntur atque eaque qui", "Rs.299");
    const menuTwo = createMenuItems("Steam Momo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id minus, incidunt, mollitia tempora facilis expedita repellat, numquam consequuntur atque eaque qui", "Rs.299");
    const menuThree = createMenuItems("Kothey Momo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id minus, incidunt, mollitia tempora facilis expedita repellat, numquam consequuntur atque eaque qui", "Rs.299");

    menuTab.append(menuTitle, menuOne, menuTwo, menuThree);

    return menuTab;
}

const createMenuItems = (header, description, price) => {
    const menuDiv = document.createElement("div");
    const menuHeader = document.createElement("h2");
    const menuDescription = document.createElement("p");
    const menuPrice = document.createElement("span");

    menuDiv.classList.add("menu-items");

    menuHeader.textContent = header;
    menuDescription.textContent = description;
    menuPrice.textContent = price;

    menuDiv.append(menuHeader, menuDescription, menuPrice);
    return menuDiv;
}

export default menuTab;