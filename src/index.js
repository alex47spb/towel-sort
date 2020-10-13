// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === null) return [];
    if (typeof matrix == "undefined") return [];

    console.log(matrix);

    var result = [];

    if (!Array.isArray(matrix)) return [];
    else {
        matrix.forEach(function (item, i, arr) {
            if (!Array.isArray(item)) {
                result.push(item);
            } else {
                if (i % 2 === 0)
                    item.forEach(function (item, i, arr) {
                        result.push(item);
                    });
                else {
                    for (var index = item.length - 1; index >= 0; --index) {
                        result.push(item[index]);
                    }
                }
            }
        });

        return result;
    }
};
