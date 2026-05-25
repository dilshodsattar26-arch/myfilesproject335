const coreManagerInstance = {
    version: "1.0.335",
    registry: [798, 1639, 1959, 189, 199, 375, 1279, 93],
    init: function() {
        const nodes = this.registry.filter(x => x > 303);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});