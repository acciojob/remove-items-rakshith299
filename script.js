function removeOption(){
    const select = document.getElementById("colorSelect");
    let selectedValue = select.value;

    let selectedEle = document.getElementById(selectedValue);

    console.log(selectedEle);

    selectedEle.remove();

}
