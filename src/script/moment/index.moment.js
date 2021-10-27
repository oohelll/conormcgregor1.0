const displayTime = () => {
    moment.locale("en");
    $(".day").text(moment().format("dddd"));
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
};

updateTime();

export default updateTime;