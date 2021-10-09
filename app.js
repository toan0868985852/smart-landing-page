const dotDevice = document.querySelectorAll(".chose-device > div");
const dotApplication = document.querySelectorAll(".chose-application > div");
const listDevice = document.querySelectorAll(".device");
const DeviceApplication = document.querySelectorAll(".device-application");
const deviceBox = document.querySelector(".list-device");
const listDeviceApplication = document.querySelector(
    ".list-device-application"
);

const dotListLogo = document.querySelectorAll(".dot-slide");
const logoItem = document.querySelector(".slide-logo");

dotDevice.forEach((device, idx) => {
    device.addEventListener("click", () => {
        document.querySelector(".dot.active").classList.remove("active");
        document.querySelector(".device.active").classList.remove("active");

        listDevice[idx].classList.add("active");
        device.classList.add("active");
        deviceBox.style.transform = `translateX(${-1040 * idx}px)`;
    });
});

dotApplication.forEach((element, idx) => {
    element.addEventListener("click", () => {
        document
            .querySelector(".dot-application.active")
            .classList.remove("active");
        document
            .querySelector(".device-application.active")
            .classList.remove("active");

        DeviceApplication[idx].classList.add("active");
        element.classList.add("active");
        listDeviceApplication.style.transform = `translateX(${-1040 * idx}px)`;
    });
});

dotListLogo.forEach((element, idx) => {
    element.addEventListener("click", () => {
        document.querySelector(".dot-slide.active").classList.remove("active");

        logoItem.style.transform = `translateX(${-690 * idx}px)`;
        element.classList.add("active");
    });
});
