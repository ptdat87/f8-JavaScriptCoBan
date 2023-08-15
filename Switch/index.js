const date = 8

switch (date) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log(`Hôm nay là thứ: ${date}`)
        break
    case 8:
        console.log("Hôm nay là chủ nhật")
        break;
    default:
        console.log("Không phải ngày trong tuần")
}