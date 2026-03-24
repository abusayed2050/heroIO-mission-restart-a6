//number কে string এ রূপান্তর করে যেমন 1000000 কে 1M এ রূপান্তর করে
export const formatNumbers = (num) => {
    return num >= 1000000 ? (num / 1000000).toFixed(0) + "M" :
        num >= 1000 ? (num / 1000).toFixed(0) + "K" :
            num;
}