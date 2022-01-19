const getMinArea = (allArea) => {
    let minDis = Math.abs(allArea[0][0]) + Math.abs(allArea[0][1]);
    let minArea = 0;

    for (let i in allArea) {
        let dis = Math.abs(allArea[i][0]) + Math.abs(allArea[i][1])
        if (dis < minDis) {
            minDis = dis;
            minArea = i;
        }
    }

    return {minDis, areaPoint: allArea[minArea]}
}

let allArea = [[6, 8], [5, 12], [-5, 3], [-8, -5], [4, -3]];

const ans = getMinArea(allArea)

console.log(ans.minDis);
console.log(ans.areaPoint);