function display(callback, ...args) {
        callback(args);
    }
    const displayModeA = (args) =>
        alert(`Luas : ${args[0]} cm\u00B2 | Keliling : ${args[1]} cm`);
    const displayModeB = (args) =>
        alert(
            `Luas yang akan didapat adalah ${args[0]} cm\u00bB2 & Keliling yang akan di dapat adalah ${args[1]} cm`
            );