var mac = {
    processorName: "MacBook",
    memory: 4,
    storage: 2,
    ssd: false
};
var pc = {
    processorName: "PC",
    memory: 8,
    storage: 12,
    ssd: true
};
var linux = {
    processorName: "Linux",
    memory: 20,
    storage: 10,
    ssd: true
};
var computers = [mac, pc, linux];
function displayComputers(c) {
    console.log("Your " + mac.processorName + " has " + mac.memory + "GB of memory, " + mac.storage + "GB of stroage. SSD: " + mac.ssd);
    console.log("Your " + pc.processorName + " has " + pc.memory + "GB of memory, " + pc.storage + "GB of stroage. SSD: " + pc.ssd);
    console.log("Your " + linux.processorName + " has " + linux.memory + "GB of memory, " + linux.storage + "GB of stroage. SSD: " + linux.ssd);
}
displayComputers(computers);
